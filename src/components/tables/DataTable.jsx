"use client";

export default function DataTable({
    columns,
    data,
    darkMode,
}) {

    return (

        <div
            className={`rounded-3xl border overflow-hidden ${darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200"
                }`}
        >

            {/* Header */}
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
                    Portfolio Holdings
                </h2>

                <p
                    className={`mt-1 ${darkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                        }`}
                >
                    Stock-wise portfolio overview.
                </p>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full">

                    {/* Table Head */}
                    <thead
                        className={
                            darkMode
                                ? "bg-slate-800 text-slate-200"
                                : "bg-slate-50 text-slate-700"
                        }
                    >

                        <tr>

                            {columns.map((column) => (

                                <th
                                    key={column.accessor}
                                    className="px-6 py-4 text-left font-semibold whitespace-nowrap"
                                >
                                    {column.header}
                                </th>

                            ))}

                        </tr>

                    </thead>

                    {/* Table Body */}
                    <tbody
                        className={
                            darkMode
                                ? "bg-slate-900 text-white"
                                : "bg-white text-slate-900"
                        }
                    >

                        {data.map((row, rowIndex) => (

                            <tr
                                key={rowIndex}
                                className={`border-t transition ${darkMode
                                    ? "border-slate-800 hover:bg-slate-800"
                                    : "border-slate-100 hover:bg-slate-50"
                                    }`}
                            >

                                {columns.map((column) => (

                                    <td
                                        key={column.accessor}
                                        className="px-6 py-5 whitespace-nowrap"
                                    >

                                        {/* Conditional Returns Color */}
                                        {column.accessor === "returns" ? (

                                            <span
                                                className={`font-semibold ${row[column.accessor]
                                                    .includes("+")
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                                    }`}
                                            >
                                                {row[column.accessor]}
                                            </span>

                                        ) : (

                                            row[column.accessor]

                                        )}

                                    </td>

                                ))}

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}