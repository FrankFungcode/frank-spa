/*
 * @Author: FrankFungcode combeebe@gmail.com
 * @Date: 2025-12-03 00:39:03
 * @LastEditors: FrankFungcode combeebe@gmail.com
 * @LastEditTime: 2025-12-03 23:12:45
 * @FilePath: \frank-spa\src\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return <div>Hello, React with TypeScript and SWC!</div>;
};

const container = document.getElementById("app");
if (!container) {
  throw new Error("Failed to find the root element");
}
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
