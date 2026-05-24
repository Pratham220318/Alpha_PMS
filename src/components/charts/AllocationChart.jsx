"use client";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data = [
    { name: "Technology", value: 35 },
    { name: "Banking", value: 25 },
    { name: "Healthcare", value: 20 },
    { name: "Energy", value: 20 },
];

const COLORS = [
    "#2563eb",
    "#16a34a",
    "#f59e0b",
    "#dc2626",
];

export default function AllocationChart({
    darkMode,
}) {

    return (

        <div
            className={`rounded-3xl border p-6 ${darkMode
                ? "bg-slate-900 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-900"
                }`}
        >

            {/* Header */}
            <div className="mb-6">

                <h2 className="text-2xl font-bold">
                    Sector Allocation
                </h2>

                <p
                    className={`mt-1 ${darkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                        }`}
                >
                    Portfolio diversification by sector.
                </p>

            </div>

            {/* Chart */}
            <div className="h-[350px]">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            innerRadius={70}
                            paddingAngle={3}
                        >

                            {data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))}

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}