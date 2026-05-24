"use client";

export default function PortfolioSelector({
    darkMode,
}) {

    return (

        <select
            className={`px-4 py-3 rounded-2xl border outline-none ${darkMode
                ? "bg-slate-900 border-slate-700 text-white"
                : "bg-white border-slate-200 text-slate-900"
                }`}
        >

            <option>
                Alpha Portfolio
            </option>

            <option>
                Growth Portfolio
            </option>

            <option>
                Retirement Portfolio
            </option>

        </select>
    );
}