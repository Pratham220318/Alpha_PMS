"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

export default function PortfolioAnalytics({ darkMode }) {

    const growthData = [
        { month: "Jan", value: 8 },
        { month: "Feb", value: 9 },
        { month: "Mar", value: 11 },
        { month: "Apr", value: 10 },
        { month: "May", value: 13 },
        { month: "Jun", value: 15 },
    ];

    const allocationData = [
        { name: "TCS", value: 35 },
        { name: "INFY", value: 25 },
        { name: "Reliance", value: 20 },
        { name: "HDFC", value: 20 },
    ];

    const COLORS = [
        "#3B82F6",
        "#10B981",
        "#F59E0B",
        "#EF4444",
    ];

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

            {/* Portfolio Growth */}
            <div
                className={`rounded-3xl border p-6 ${darkMode
                        ? "bg-[#0f172a] border-slate-800"
                        : "bg-white border-slate-200"
                    }`}
            >

                <div className="mb-6">

                    <h2 className="text-2xl font-bold text-slate-900">
                        Portfolio Growth
                    </h2>

                    <p
                        className={`mt-2 ${darkMode
                                ? "text-slate-400"
                                : "text-slate-500"
                            }`}
                    >
                        Monthly performance overview
                    </p>

                </div>

                <div className="h-[300px]">

                    <ResponsiveContainer width="100%" height="100%">

                        <LineChart data={growthData}>

                            <XAxis
                                dataKey="month"
                                stroke={darkMode ? "#94a3b8" : "#64748b"}
                            />

                            <YAxis
                                stroke={darkMode ? "#94a3b8" : "#64748b"}
                            />

                            <Tooltip />

                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#3B82F6"
                                strokeWidth={3}
                            />

                        </LineChart>

                    </ResponsiveContainer>

                </div>

            </div>

            {/* Asset Allocation */}
            <div
                className={`rounded-3xl border p-6 ${darkMode
                        ? "bg-[#0f172a] border-slate-800"
                        : "bg-white border-slate-200"
                    }`}
            >

                <div className="mb-6">

                    <h2 className="text-2xl font-bold text-slate-900">
                        Asset Allocation
                    </h2>

                    <p
                        className={`mt-2 ${darkMode
                                ? "text-slate-400"
                                : "text-slate-500"
                            }`}
                    >
                        Holdings distribution overview
                    </p>

                </div>

                <div className="h-[300px]">

                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={allocationData}
                                dataKey="value"
                                outerRadius={100}
                                label
                            >

                                {allocationData.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
}