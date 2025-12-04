/**
 * 让你可以用"可变"的方式编写代码，但实际产生不可变更新的库
 * useImmer - 替代 useState
 * 
 * 1.方便替换基本的useState
 * 2. * const [state, setState] = useImmer(function () {
            return { a: 123 };
        });
        const [state1, setState1] = useImmer({ a: 456 });
        const [state1, setState1] = useImmer(6);
        //以前可以 lodash
        setState({draft:456});
        setState(draft => {
            draft.a = 456;
        });
        setState(6)

        setState1=(updater: T | DraftFunction<T>) => {
            if (typeof updater === 'function') {
                updateValue(produce(updater as DraftFunction<T>));
            } else {
                updateValue(freeze(updater));
            }
        }
 */

/**
   * 性能考虑
   * Immer 在以下场景特别有用：
      ✅ 深层嵌套的状态更新
      ✅ 复杂的数组操作
      ✅ 大型状态对象的局部更新

   * 但对于简单状态，原生方法可能更快：
      简单的基本类型状态
      浅层对象的全量替换

   * 总结
   * Immer 让 React 状态管理变得更直观，特别是处理复杂状态时。通过 useImmer 和 useImmerReducer，你可以用熟悉的"可变"语法编写代码,同时保持 React 需要的不可变性。
   */

import { Draft, freeze, produce } from "immer";
import { useCallback, useState } from "react";
export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];

// 函数的签名
export function useImmer<S = unknown>(
  initialValue: S | (() => S)
): [S, ImmerHook<S>];

export function useImmer<T>(initialValue: T) {
  const [val, updateValue] = useState(
    // 不可变对象 对我们原始的状态进行冻结
    freeze(
      typeof initialValue === "function" ? initialValue() : initialValue,
      true
    )
  );
  return [
    val,
    useCallback((updater: T | DraftFunction<T>) => {
      if (typeof updater === "function") {
        // 不可变对象 产生新对象
        updateValue(produce(updater as DraftFunction<T>));
      } else {
        updateValue(updater);
      }
    }, []),
  ];
}
