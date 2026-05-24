"use client";

import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 18 },
    { month: "Mar", value: 14 },
    { month: "Apr", value: 28 },
    { month: "May", value: 24 },
];

export default function PerformanceChart({
    darkMode,
}) {

    return (
        <div
            className={`rounded-3xl border p-6 ${darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200"
                }`}
        >

            <h2 className="text-2xl font-bold mb-6">
                Portfolio Performance
            </h2>

            <div className="h-[300px]">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={data}>

                        <XAxis dataKey="month" />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#2563eb"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}