import Demo from "@components/demo/index";
import { memo } from "react";

const Home = () => {
	// return (
		// <div className="min-h-screen bg-linear-to-br from-primary-50 via-white to-blue-50">
		// 	{/* Hero Section */}
		// 	<div className="container mx-auto px-4 py-20">
		// 		<div className="max-w-4xl mx-auto text-center animate-fade-in">
		// 			<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
		// 				欢迎来到
		// 				<span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-secondary-600">
		// 					{" "}
		// 					我们的应用
		// 				</span>
		// 			</h1>
		// 			<p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
		// 				这是一个使用 React + Tailwind CSS 构建的现代化单页应用
		// 				<br />
		// 				探索精美的设计与流畅的用户体验
		// 			</p>

		// 			{/* CTA Buttons */}
		// 			<div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
		// 				<Link
		// 					to="/demo"
		// 					className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-glow"
		// 				>
		// 					<svg
		// 						className="w-5 h-5 mr-2"
		// 						fill="none"
		// 						stroke="currentColor"
		// 						viewBox="0 0 24 24"
		// 					>
		// 						<title>Demo 图标</title>
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth={2}
		// 							d="M13 10V3L4 14h7v7l9-11h-7z"
		// 						/>
		// 					</svg>
		// 					查看 Demo
		// 				</Link>
		// 				<Link
		// 					to="/about"
		// 					className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-lg border-2 border-primary-200"
		// 				>
		// 					{/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
		// 					<svg
		// 						className="w-5 h-5 mr-2"
		// 						fill="none"
		// 						stroke="currentColor"
		// 						viewBox="0 0 24 24"
		// 					>
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth={2}
		// 							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		// 						/>
		// 					</svg>
		// 					了解更多
		// 				</Link>
		// 			</div>
		// 		</div>

		// 		{/* Feature Grid */}
		// 		<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up">
		// 			<div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
		// 				<div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
		// 					<svg
		// 						className="w-7 h-7 text-blue-600"
		// 						fill="none"
		// 						stroke="currentColor"
		// 						viewBox="0 0 24 24"
		// 					>
		// 						<title>创新设计图标</title>
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth={2}
		// 							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
		// 						/>
		// 					</svg>
		// 				</div>
		// 				<h3 className="text-2xl font-bold text-gray-900 mb-3">创新设计</h3>
		// 				<p className="text-gray-600 leading-relaxed">
		// 					采用最新的设计趋势，打造视觉震撼的用户界面
		// 				</p>
		// 			</div>

		// 			<div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
		// 				<div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
		// 					<svg
		// 						className="w-7 h-7 text-purple-600"
		// 						fill="none"
		// 						stroke="currentColor"
		// 						viewBox="0 0 24 24"
		// 					>
		// 						<title>极速性能图标</title>
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth={2}
		// 							d="M13 10V3L4 14h7v7l9-11h-7z"
		// 						/>
		// 					</svg>
		// 				</div>
		// 				<h3 className="text-2xl font-bold text-gray-900 mb-3">极速性能</h3>
		// 				<p className="text-gray-600 leading-relaxed">
		// 					优化的代码结构，确保应用运行流畅快速
		// 				</p>
		// 			</div>

		// 			<div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
		// 				<div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
		// 					<svg
		// 						className="w-7 h-7 text-green-600"
		// 						fill="none"
		// 						stroke="currentColor"
		// 						viewBox="0 0 24 24"
		// 					>
		// 						<title>响应式布局</title>
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth={2}
		// 							d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
		// 						/>
		// 					</svg>
		// 				</div>
		// 				<h3 className="text-2xl font-bold text-gray-900 mb-3">
		// 					响应式布局
		// 				</h3>
		// 				<p className="text-gray-600 leading-relaxed">
		// 					完美适配各种设备，从手机到大屏显示器
		// 				</p>
		// 			</div>
		// 		</div>

		// 		{/* Stats Section */}
		// 		<div className="mt-20 bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
		// 			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
		// 				<div className="animate-bounce-slow">
		// 					<div className="text-4xl font-bold text-primary-600 mb-2">
		// 						100%
		// 					</div>
		// 					<div className="text-gray-600 font-medium">响应式</div>
		// 				</div>
		// 				<div
		// 					className="animate-bounce-slow"
		// 					style={{ animationDelay: "0.1s" }}
		// 				>
		// 					<div className="text-4xl font-bold text-secondary-600 mb-2">
		// 						Fast
		// 					</div>
		// 					<div className="text-gray-600 font-medium">加载速度</div>
		// 				</div>
		// 				<div
		// 					className="animate-bounce-slow"
		// 					style={{ animationDelay: "0.2s" }}
		// 				>
		// 					<div className="text-4xl font-bold text-green-600 mb-2">
		// 						Modern
		// 					</div>
		// 					<div className="text-gray-600 font-medium">设计风格</div>
		// 				</div>
		// 				<div
		// 					className="animate-bounce-slow"
		// 					style={{ animationDelay: "0.3s" }}
		// 				>
		// 					<div className="text-4xl font-bold text-orange-600 mb-2">
		// 						Easy
		// 					</div>
		// 					<div className="text-gray-600 font-medium">易于使用</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	// );
	return <Demo />;
};

export default memo(Home);
