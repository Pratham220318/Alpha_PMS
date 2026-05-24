// "use client";
// import PortfolioAnalytics from "@/components/dashboard/PortfolioAnalytics";
// import RecentTransactions from "@/components/dashboard/RecentTransactions";
// import MarketMovers from "@/components/dashboard/MarketMovers";
// export default function DashboardPage({ darkMode = false }) {
//     return (
//         <div className="space-y-8">

//             {/* Header */}
//             <div>

//                 <h1
//                     className={`text-4xl font-bold ${darkMode
//                         ? "bg-slate-900 border-slate-800"
//                         : ""
//                         }`}
//                 >
//                     Portfolio Dashboard
//                 </h1>

//                 <p
//                     className={`mt-2 text-lg ${darkMode
//                         ? "text-slate-400"
//                         : "text-slate-500"
//                         }`}
//                 >
//                     Monitor portfolio performance and investment analytics.
//                 </p>

//             </div>

//             {/* Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

//                 {/* Card 1 */}
//                 <div
//                     className={`rounded-3xl border p-6 shadow-sm transition ${darkMode
//                         ? "bg-slate-900 border-slate-800 text-white"
//                         : "bg-white border-slate-200 text-slate-900"
//                         }`}
//                 >

//                     <p
//                         className={
//                             darkMode
//                                 ? "text-slate-400"
//                                 : "text-slate-500"
//                         }
//                     >
//                         Total Investment
//                     </p>

//                     <h3 className="text-4xl font-bold mt-4">
//                         ₹12.5L
//                     </h3>

//                 </div>

//                 {/* Card 2 */}
//                 <div
//                     className={`rounded-3xl border p-6 shadow-sm transition ${darkMode
//                         ? "bg-slate-900 border-slate-800 text-white"
//                         : "bg-white border-slate-200 text-slate-900"
//                         }`}
//                 >

//                     <p
//                         className={
//                             darkMode
//                                 ? "text-slate-400"
//                                 : "text-slate-500"
//                         }
//                     >
//                         Current Value
//                     </p>

//                     <h3 className="text-4xl font-bold mt-4 text-green-500">
//                         ₹14.1L
//                     </h3>

//                 </div>

//                 {/* Card 3 */}
//                 <div
//                     className={`rounded-3xl border p-6 shadow-sm transition ${darkMode
//                         ? "bg-slate-900 border-slate-800 text-white"
//                         : "bg-white border-slate-200 text-slate-900"
//                         }`}
//                 >

//                     <p
//                         className={
//                             darkMode
//                                 ? "text-slate-400"
//                                 : "text-slate-500"
//                         }
//                     >
//                         Profit / Loss
//                     </p>

//                     <h3 className="text-4xl font-bold mt-4 text-green-500">
//                         +₹1.6L
//                     </h3>

//                 </div>

//                 {/* Card 4 */}
//                 <div
//                     className={`rounded-3xl border p-6 shadow-sm transition ${darkMode
//                         ? "bg-slate-900 border-slate-800 text-white"
//                         : "bg-white border-slate-200 text-slate-900"
//                         }`}
//                 >

//                     <p
//                         className={
//                             darkMode
//                                 ? "text-slate-400"
//                                 : "text-slate-500"
//                         }
//                     >
//                         Returns
//                     </p>

//                     <h3 className="text-4xl font-bold mt-4 text-blue-500">
//                         +12.8%
//                     </h3>

//                 </div>

//             </div>

//             {/* Analytics Section */}
//             <PortfolioAnalytics darkMode={darkMode} />
//             <RecentTransactions darkMode={darkMode} />
//             <MarketMovers darkMode={darkMode} />
//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

//                 {/* Portfolio Growth */}
//                 <div
//                     className={`rounded-3xl border p-6 ${darkMode
//                         ? "bg-slate-900 border-slate-800 text-white"
//                         : "bg-white border-slate-200 text-slate-900"
//                         }`}
//                 >

//                     <div className="flex items-center justify-between">

//                         <div>

//                             <h2 className="text-2xl font-bold">
//                                 Portfolio Growth
//                             </h2>

//                             <p
//                                 className={`mt-1 ${darkMode
//                                     ? "text-slate-400"
//                                     : "text-slate-500"
//                                     }`}
//                             >
//                                 Performance overview over time.
//                             </p>

//                         </div>

//                     </div>

//                     {/* Dummy Chart */}
//                     <div className="mt-8 flex items-end gap-3 h-64">

//                         {[40, 65, 55, 80, 70, 95, 85].map((height, index) => (
//                             <div
//                                 key={index}
//                                 className="flex-1 bg-blue-500 rounded-t-2xl transition hover:opacity-80"
//                                 style={{
//                                     height: `${height}%`,
//                                 }}
//                             />
//                         ))}

//                     </div>

//                 </div>

//                 {/* Allocation */}
//                 <div
//                     className={`rounded-3xl border p-6 ${darkMode
//                         ? "bg-slate-900 border-slate-800 text-white"
//                         : "bg-white border-slate-200 text-slate-900"
//                         }`}
//                 >

//                     <h2 className="text-2xl font-bold">
//                         Asset Allocation
//                     </h2>

//                     <p
//                         className={`mt-1 ${darkMode
//                             ? "text-slate-400"
//                             : "text-slate-500"
//                             }`}
//                     >
//                         Distribution across holdings.
//                     </p>

//                     {/* Dummy Allocation */}
//                     <div className="mt-8 space-y-5">

//                         <div>
//                             <div className="flex justify-between mb-2">
//                                 <span>TCS</span>
//                                 <span>35%</span>
//                             </div>

//                             <div
//                                 className={`w-full h-3 rounded-full ${darkMode
//                                     ? "bg-slate-800"
//                                     : "bg-slate-200"
//                                     }`}
//                             >
//                                 <div className="w-[35%] h-3 bg-blue-500 rounded-full"></div>
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex justify-between mb-2">
//                                 <span>INFY</span>
//                                 <span>25%</span>
//                             </div>

//                             <div
//                                 className={`w-full h-3 rounded-full ${darkMode
//                                     ? "bg-slate-800"
//                                     : "bg-slate-200"
//                                     }`}
//                             >
//                                 <div className="w-[25%] h-3 bg-green-500 rounded-full"></div>
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex justify-between mb-2">
//                                 <span>Reliance</span>
//                                 <span>20%</span>
//                             </div>

//                             <div
//                                 className={`w-full h-3 rounded-full ${darkMode
//                                     ? "bg-slate-800"
//                                     : "bg-slate-200"
//                                     }`}
//                             >
//                                 <div className="w-[20%] h-3 bg-orange-500 rounded-full"></div>
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex justify-between mb-2">
//                                 <span>HDFC</span>
//                                 <span>20%</span>
//                             </div>

//                             <div
//                                 className={`w-full h-3 rounded-full ${darkMode
//                                     ? "bg-slate-800"
//                                     : "bg-slate-200"
//                                     }`}
//                             >
//                                 <div className="w-[20%] h-3 bg-pink-500 rounded-full"></div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// }


"use client";

import StatsCard from "@/components/cards/StatsCard";
import AllocationChart from "@/components/charts/AllocationChart";
import PerformanceChart from "@/components/charts/PerformanceChart";
import PortfolioSelector from "@/components/filters/PortfolioSelector";

export default function DashboardPage({
    darkMode = false,
}) {

    return (
        <div className="space-y-8">

            {/* Header */}
            <div>

                <h1
                    className={`text-4xl font-bold ${darkMode
                        ? "text-white"
                        : "text-slate-900"
                        }`}
                >
                    Portfolio Dashboard
                </h1>

                <p
                    className={`mt-2 ${darkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                        }`}
                >
                    Analytics overview of portfolios.
                </p>

            </div>
            <PortfolioSelector darkMode={darkMode} />
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <StatsCard
                    title="Total Investment"
                    value="₹12.5L"
                    change="+8.2%"
                    darkMode={darkMode}
                />

                <StatsCard
                    title="Current Value"
                    value="₹14.1L"
                    change="+12.8%"
                    darkMode={darkMode}
                />

                <StatsCard
                    title="Profit / Loss"
                    value="+₹1.6L"
                    change="+5.4%"
                    darkMode={darkMode}
                />

                <StatsCard
                    title="Active Portfolios"
                    value="4"
                    darkMode={darkMode}
                />

            </div>

            {/* Chart */}
            <PerformanceChart darkMode={darkMode} />
            <AllocationChart darkMode={darkMode} />

        </div>
    );
}