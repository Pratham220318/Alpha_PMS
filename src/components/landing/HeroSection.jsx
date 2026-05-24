import Link from "next/link";

export default function HeroSection({ darkMode }) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>

                <h1
                    className={`text-6xl font-bold leading-tight ${darkMode
                        ? "text-white"
                        : "text-slate-900"
                        }`}
                >
                    Smart Portfolio Management For Modern Investors
                </h1>

                <p
                    className={`mt-6 text-lg leading-8 ${darkMode
                        ? "text-slate-300"
                        : "text-slate-600"
                        }`}
                >
                    Track holdings, monitor account performance,
                    analyze investments, and manage portfolio documents
                    through a clean modern dashboard.
                </p>

                <div className="mt-8 flex gap-4">

                    <Link
                        href="/login"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Get Started
                    </Link>

                    <a
                        href="#features"
                        className={`px-6 py-3 rounded-xl border transition ${darkMode
                            ? "border-slate-700 text-white hover:bg-slate-800"
                            : "border-slate-300 text-slate-900 hover:bg-slate-100"
                            }`}
                    >
                        Explore Features
                    </a>

                </div>

            </div>

            {/* Dashboard Preview */}
            <div
                className={`rounded-3xl shadow-xl p-6 border ${darkMode
                    ? "bg-slate-900 border-slate-800 text-white"
                    : "bg-white border-slate-200 text-slate-900"
                    }`}
            >

                {/* Top Cards */}
                <div className="grid grid-cols-2 gap-4">

                    <div
                        className={`rounded-2xl border p-5 ${darkMode
                            ? "bg-slate-800 border-slate-700"
                            : "bg-slate-50 border-slate-200"
                            }`}
                    >
                        <p
                            className={`text-sm ${darkMode
                                ? "text-slate-400"
                                : "text-slate-500"
                                }`}
                        >
                            Total Investment
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            ₹12.5L
                        </h3>
                    </div>

                    <div
                        className={`rounded-2xl border p-5 ${darkMode
                            ? "bg-slate-800 border-slate-700"
                            : "bg-slate-50 border-slate-200"
                            }`}
                    >
                        <p
                            className={`text-sm ${darkMode
                                ? "text-slate-400"
                                : "text-slate-500"
                                }`}
                        >
                            Current Value
                        </p>

                        <h3 className="text-3xl font-bold mt-2 text-green-500">
                            ₹14.1L
                        </h3>
                    </div>

                </div>

                {/* Table */}
                <div className="mt-6 overflow-x-auto">

                    <table className="w-full text-left">

                        <thead>
                            <tr
                                className={`border-b ${darkMode
                                    ? "border-slate-700 text-slate-400"
                                    : "border-slate-200 text-slate-500"
                                    }`}
                            >
                                <th className="pb-3">Stock</th>
                                <th className="pb-3">Qty</th>
                                <th className="pb-3">Returns</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr
                                className={`border-b ${darkMode
                                    ? "border-slate-800"
                                    : "border-slate-100"
                                    }`}
                            >
                                <td className="py-4 font-medium">TCS</td>
                                <td>120</td>
                                <td className="text-green-500">+11.2%</td>
                            </tr>

                            <tr
                                className={`border-b ${darkMode
                                    ? "border-slate-800"
                                    : "border-slate-100"
                                    }`}
                            >
                                <td className="py-4 font-medium">INFY</td>
                                <td>80</td>
                                <td className="text-green-500">+4.8%</td>
                            </tr>

                            <tr>
                                <td className="py-4 font-medium">HDFC</td>
                                <td>60</td>
                                <td className="text-red-500">-1.2%</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </section>
    );
}