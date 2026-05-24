// "use client";
// import { useState } from "react";
// import CSVUpload from "@/components/dashboard/CSVUpload";
// export default function PortfolioPage({ darkMode = false }) {

//     const [portfolioData, setPortfolioData] = useState([
//         {
//             stock: "TCS",
//             quantity: 120,
//             avgPrice: 3200,
//             currentPrice: 3560,
//             returns: "+11.2%",
//         },
//     ]);

//     return (
//         <div className="space-y-8">

//             {/* Header */}
//             <div className="flex items-center justify-between">

//                 <div>

//                     <h1
//                         className={`text-4xl font-bold ${darkMode
//                             ? "bg-slate-900 border-slate-800"
//                             : ""
//                             }`}
//                     >
//                         Portfolio Holdings
//                     </h1>

//                     <p
//                         className={`mt-2 text-lg ${darkMode
//                             ? "text-slate-500"
//                             : "text-slate-500"
//                             }`}
//                     >
//                         Track and analyze portfolio investments.
//                     </p>

//                 </div>

//                 <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700 transition font-medium shadow-lg">
//                     Export Report
//                 </button>

//             </div>

//             {/* Summary Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

//                 {/* Card */}
//                 <div
//                     className={`rounded-3xl border p-6 transition-all duration-300 ${darkMode
//                         ? "bg-black border-slate-800 text-white shadow-2xl"
//                         : "bg-white border-slate-200 text-slate-900 shadow-sm"
//                         }`}
//                 >

//                     <p className={darkMode ? "text-slate-500" : "text-slate-500"}>
//                         Total Holdings
//                     </p>

//                     <h3 className="text-4xl font-bold mt-4">
//                         24
//                     </h3>

//                 </div>

//                 {/* Card */}
//                 <div
//                     className={`rounded-3xl border p-6 transition-all duration-300 ${darkMode
//                         ? "bg-black border-slate-800 text-white shadow-2xl"
//                         : "bg-white border-slate-200 text-slate-900 shadow-sm"
//                         }`}
//                 >

//                     <p className={darkMode ? "text-slate-500" : "text-slate-500"}>
//                         Invested Value
//                     </p>

//                     <h3 className="text-4xl font-bold mt-4">
//                         ₹12.5L
//                     </h3>

//                 </div>

//                 {/* Card */}
//                 <div
//                     className={`rounded-3xl border p-6 transition-all duration-300 ${darkMode
//                         ? "bg-black border-slate-800 text-white shadow-2xl"
//                         : "bg-white border-slate-200 text-slate-900 shadow-sm"
//                         }`}
//                 >

//                     <p className={darkMode ? "text-slate-500" : "text-slate-500"}>
//                         Current Value
//                     </p>

//                     <h3 className="text-4xl font-bold mt-4 text-green-500">
//                         ₹14.1L
//                     </h3>

//                 </div>

//                 {/* Card */}
//                 <div
//                     className={`rounded-3xl border p-6 transition-all duration-300 ${darkMode
//                         ? "bg-black border-slate-800 text-white shadow-2xl"
//                         : "bg-white border-slate-200 text-slate-900 shadow-sm"
//                         }`}
//                 >

//                     <p className={darkMode ? "text-slate-500" : "text-slate-500"}>
//                         Overall Returns
//                     </p>

//                     <h3 className="text-4xl font-bold mt-4 text-green-500">
//                         +12.8%
//                     </h3>

//                 </div>

//             </div>

//             {/* Table Section */}
//             <div
//                 className={`rounded-3xl border overflow-hidden ${darkMode
//                     ? "bg-black border-slate-800 shadow-2xl"
//                     : "bg-white border-slate-200 shadow-sm"
//                     }`}
//             >

//                 {/* Top Header */}
//                 <div
//                     className={`flex items-center justify-between px-6 py-5 border-b ${darkMode
//                         ? "border-slate-800 bg-black"
//                         : "border-slate-200 bg-white"
//                         }`}
//                 >

//                     <div>

//                         <h2
//                             className={`text-2xl font-bold ${darkMode
//                                 ? "text-white"
//                                 : "text-slate-900"
//                                 }`}
//                         >
//                             Holdings Overview
//                         </h2>

//                         <p
//                             className={`mt-1 ${darkMode
//                                 ? "text-slate-500"
//                                 : "text-slate-500"
//                                 }`}
//                         >
//                             Complete stock-wise portfolio analysis.
//                         </p>

//                     </div>

//                 </div>

//                 <CSVUpload
//                     setPortfolioData={setPortfolioData}
//                     darkMode={darkMode}
//                 />
//                 {/* Table */}
//                 <div
//                     className={`overflow-x-auto ${darkMode ? "bg-black" : "bg-white"}`}
//                 >

//                     <table
//                         className={`w-full border-separate border-spacing-y-2 ${darkMode ? "text-white" : "text-slate-900"
//                             }`}
//                     >
//                         {/* Header */}
//                         <thead>
//                             <tr
//                                 className={`text-left ${darkMode
//                                     ? "text-slate-400 bg-black"
//                                     : "text-slate-600 bg-slate-50"
//                                     }`}
//                             >
//                                 <th className="px-6 py-4 font-semibold">Stock</th>
//                                 <th className="px-6 py-4 font-semibold">Quantity</th>
//                                 <th className="px-6 py-4 font-semibold">Avg Price</th>
//                                 <th className="px-6 py-4 font-semibold">Current Price</th>
//                                 <th className="px-6 py-4 font-semibold">Returns</th>
//                             </tr>
//                         </thead>

//                         {/* Body */}
//                         <tbody>
//                             {portfolioData.map((item, index) => (
//                                 <tr
//                                     key={index}
//                                     className={`
//                     transition-all duration-300
//                     ${darkMode
//                                             ? "bg-black hover:bg-[#0a0a0a]"
//                                             : "bg-white hover:bg-slate-50"
//                                         }
//                 `}
//                                 >
//                                     <td className="px-6 py-5 font-semibold">
//                                         {item.stock}
//                                     </td>

//                                     <td className="px-6 py-5">
//                                         {item.quantity}
//                                     </td>

//                                     <td className="px-6 py-5">
//                                         ₹{item.avgPrice}
//                                     </td>

//                                     <td className="px-6 py-5">
//                                         ₹{item.currentPrice}
//                                     </td>

//                                     <td
//                                         className={`px-6 py-5 font-bold ${item.returns.includes("+")
//                                             ? "text-green-400"
//                                             : "text-red-400"
//                                             }`}
//                                     >
//                                         {item.returns}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                 </div>

//             </div>

//         </div>
//     );
// }


"use client";

import { useState } from "react";
import GoogleSheetUpload from "@/components/dashboard/GoogleSheetUpload";

export default function PortfolioPage({
    darkMode = false,
}) {

    const [portfolioData, setPortfolioData] = useState([]);

    return (

        <div className="space-y-8">

            {/* Header */}
            <div className="flex items-center justify-between">

                <div>

                    <h1
                        className={`text-4xl font-bold ${darkMode
                                ? "text-white"
                                : "text-slate-900"
                            }`}
                    >
                        Market Dashboard
                    </h1>

                    <p
                        className={`mt-2 text-lg ${darkMode
                                ? "text-slate-400"
                                : "text-slate-500"
                            }`}
                    >
                        Track live market and benchmark data.
                    </p>

                </div>

            </div>

            {/* Upload Section */}
            <GoogleSheetUpload
                setPortfolioData={setPortfolioData}
                darkMode={darkMode}
            />

            {/* Table */}
            <div
                className={`rounded-3xl border overflow-hidden ${darkMode
                        ? "bg-black border-slate-800"
                        : "bg-white border-slate-200"
                    }`}
            >

                {/* Top */}
                <div
                    className={`px-6 py-5 border-b ${darkMode
                            ? "border-slate-800"
                            : "border-slate-200"
                        }`}
                >

                    <h2
                        className={`text-2xl font-bold ${darkMode
                                ? "text-white"
                                : "text-slate-900"
                            }`}
                    >
                        Market Data
                    </h2>

                    <p
                        className={`mt-1 ${darkMode
                                ? "text-slate-400"
                                : "text-slate-500"
                            }`}
                    >
                        Real-time benchmark and market overview.
                    </p>

                </div>

                <div className="overflow-x-auto">

                    <table
                        className={`w-full ${darkMode
                                ? "text-white"
                                : "text-slate-900"
                            }`}
                    >

                        {/* Header */}
                        <thead
                            className={`${darkMode
                                    ? "bg-slate-900 text-slate-400"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                        >

                            <tr>

                                <th className="px-6 py-4 text-left">
                                    Security
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Open
                                </th>

                                <th className="px-6 py-4 text-left">
                                    High
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Low
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Close
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Prev Close
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Trades
                                </th>

                                <th className="px-6 py-4 text-left">
                                    52W High
                                </th>

                                <th className="px-6 py-4 text-left">
                                    52W Low
                                </th>

                            </tr>

                        </thead>

                        {/* Body */}
                        <tbody>

                            {portfolioData.map((item, index) => {

                                const percentage =
                                    (
                                        (
                                            (item.closePrice -
                                                item.prevClose) /
                                            item.prevClose
                                        ) * 100
                                    ).toFixed(2);

                                return (

                                    <tr
                                        key={index}
                                        className={`border-b ${darkMode
                                                ? "border-slate-800 hover:bg-slate-900"
                                                : "border-slate-200 hover:bg-slate-50"
                                            }`}
                                    >

                                        <td className="px-6 py-5 font-semibold">
                                            {item.security}
                                        </td>

                                        <td className="px-6 py-5">
                                            {item.openPrice}
                                        </td>

                                        <td className="px-6 py-5">
                                            {item.highPrice}
                                        </td>

                                        <td className="px-6 py-5">
                                            {item.lowPrice}
                                        </td>

                                        <td
                                            className={`px-6 py-5 font-bold ${percentage >= 0
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                                }`}
                                        >
                                            {item.closePrice}
                                        </td>

                                        <td className="px-6 py-5">
                                            {item.prevClose}
                                        </td>

                                        <td className="px-6 py-5">
                                            {item.trades}
                                        </td>

                                        <td className="px-6 py-5">
                                            {item.high52Week}
                                        </td>

                                        <td className="px-6 py-5">
                                            {item.low52Week}
                                        </td>

                                    </tr>

                                );
                            })}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}