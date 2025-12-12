/*
 * @Author: FrankFungcode combeebe@gmail.com
 * @Date: 2025-12-10 14:46:00
 * @LastEditors: FrankFungcode combeebe@gmail.com
 * @LastEditTime: 2025-12-10 14:46:04
 * @FilePath: \frank-spa\src\stores\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { atom } from "jotai";

import { atomWithImmer } from "jotai-immer";

export const productAtom = atom({ id: 12, name: "good stuff" });

export type ProductState = {
  id: number;
  name: string;
  tags: string[];
};


// 使用 jotai-immer 创建可在 set 函数里直接写 “可变” 逻辑的对象状态
export const productAtomWithImmer = atomWithImmer<ProductState>({
  id: 12,
  name: "无意义渲染",
  tags: ["demo"],
});
