/*
 * @Author: FrankFungcode combeebe@gmail.com
 * @Date: 2025-12-04 23:50:31
 * @LastEditors: FrankFungcode combeebe@gmail.com
 * @LastEditTime: 2025-12-09 17:05:01
 * @FilePath: \frank-spa\src\layouts\Layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Header from "@components/common/Header";
import { memo } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<Header />
			<main className="mx-auto px-4">
				<Outlet />
			</main>
		</>
	);
};
// MainLayout.whyDidYouRender = true;
export default memo(MainLayout);
