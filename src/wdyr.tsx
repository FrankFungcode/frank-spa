/*
 * @Author: FrankFungcode combeebe@gmail.com
 * @Date: 2025-12-08 22:28:33
 * @LastEditors: FrankFungcode combeebe@gmail.com
 * @LastEditTime: 2025-12-08 22:29:07
 * @FilePath: \frank-spa\src\wdyr.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="@welldone-software/why-did-you-render" />
import React from "react";

if (process.env.NODE_ENV === "development") {
	const whyDidYouRender = require("@welldone-software/why-did-you-render");
	whyDidYouRender(React, {
		onlyLogs: true,
		titleColor: "green",
		diffNameColor: "darkturquoise",
		trackHooks: true,
		trackAllPureComponents: true,
	});
}
