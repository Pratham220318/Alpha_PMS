export default function FeaturesSection({ darkMode }) {
    return (
        <section
            id="features"
            className={`max-w-7xl mx-auto px-6 py-20 ${darkMode ? "bg-slate-950" : ""
                }`}
                // className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
        >

            <h2
                className={`text-4xl font-bold text-center ${darkMode ? "text-white" : "text-slate-900"
                    }`}
            >
                Platform Features
            </h2>

            <p
                className={`text-center mt-4 ${darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
            >
                Everything needed to manage modern investment portfolios.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-14">

                <div
                    className={`rounded-2xl border p-6 shadow-sm transition ${darkMode
                        ? "bg-slate-900 border-slate-800"
                        : "bg-white border-slate-200"
                        }`}
                >
                    <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"
                        }`}>
                        Portfolio Tracking
                    </h3>

                    <p className={`mt-3 ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                        Monitor holdings and investment performance efficiently.
                    </p>
                </div>

                <div
                    className={`rounded-2xl border p-6 shadow-sm transition ${darkMode
                        ? "bg-slate-900 border-slate-800"
                        : "bg-white border-slate-200"
                        }`}
                >
                    <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"
                        }`}>
                        Account Summary
                    </h3>

                    <p className={`mt-3 ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                        Analyze investment summaries and portfolio growth.
                    </p>
                </div>

                <div
                    className={`rounded-2xl border p-6 shadow-sm transition ${darkMode
                        ? "bg-slate-900 border-slate-800"
                        : "bg-white border-slate-200"
                        }`}
                >
                    <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"
                        }`}>
                        Document Upload
                    </h3>

                    <p className={`mt-3 ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                        Upload PDF and PPT reports securely.
                    </p>
                </div>

                <div
                    className={`rounded-2xl border p-6 shadow-sm transition ${darkMode
                        ? "bg-slate-900 border-slate-800"
                        : "bg-white border-slate-200"
                        }`}
                >
                    <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"
                        }`}>
                        Secure Dashboard
                    </h3>

                    <p className={`mt-3 ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                        Personalized secure access for portfolio users.
                    </p>
                </div>

            </div>

        </section>
    );
}