"use client";

export default function RecentTransactions({ darkMode }) {

    const transactions = [
        {
            stock: "TCS",
            type: "BUY",
            quantity: 20,
            amount: "₹71,200",
            date: "12 May 2026",
        },
        {
            stock: "INFY",
            type: "SELL",
            quantity: 10,
            amount: "₹15,200",
            date: "10 May 2026",
        },
        {
            stock: "Reliance",
            type: "BUY",
            quantity: 5,
            amount: "₹13,750",
            date: "08 May 2026",
        },
        {
            stock: "HDFC Bank",
            type: "SELL",
            quantity: 12,
            amount: "₹19,500",
            date: "05 May 2026",
        },
    ];

    return (
        <div
            className={`rounded-3xl border mt-8 overflow-hidden ${darkMode
                    ? "bg-[#0f172a] border-slate-800 text-slate-200"
                    : "bg-white border-slate-200 text-slate-900"
                }`}
        >
            {/* Header */}
            <div
                className={`px-6 py-5 border-b ${darkMode ? "border-slate-800" : "border-slate-200"
                    }`}
            >
                <h2 className="text-2xl font-bold">
                    Recent Transactions
                </h2>

                <p
                    className={`mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                >
                    Latest portfolio activities and movements.
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className={`w-full ${darkMode ? "text-slate-200" : "text-slate-900"}`}>
                    <thead
                        className={
                            darkMode
                                ? "bg-slate-900 text-slate-300"
                                : "bg-slate-50 text-slate-700"
                        }
                    >
                        <tr className="text-left">
                            <th className="px-6 py-4">Stock</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Quantity</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((txn, index) => (
                            <tr
                                key={index}
                                className={`border-t transition ${darkMode
                                        ? "border-slate-800 hover:bg-slate-900"
                                        : "border-slate-100 hover:bg-slate-50"
                                    }`}
                            >
                                <td className="px-6 py-5 font-semibold">
                                    {txn.stock}
                                </td>

                                <td className="px-6 py-5">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${txn.type === "BUY"
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-red-500/20 text-red-400"
                                            }`}
                                    >
                                        {txn.type}
                                    </span>
                                </td>

                                <td className="px-6 py-5">
                                    {txn.quantity}
                                </td>

                                <td className="px-6 py-5">
                                    {txn.amount}
                                </td>

                                <td className="px-6 py-5">
                                    {txn.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}