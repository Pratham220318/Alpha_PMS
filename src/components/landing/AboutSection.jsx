export default function AboutSection({ darkMode }) {
    return (
        <section
            id="about"
            className={`max-w-7xl mx-auto px-6 py-24 ${darkMode ? "bg-slate-950" : ""
                }`}
        >

            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>

                    <h2
                        className={`text-5xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                            }`}
                    >
                        About PMS
                    </h2>

                    <p
                        className={`mt-6 text-lg leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        PMS is a modern investment portfolio
                        management platform designed to simplify portfolio
                        tracking, investment analysis, and financial reporting
                        through a secure and intuitive dashboard experience.
                    </p>

                    <p
                        className={`mt-6 text-lg leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        The platform enables investors and financial teams
                        to monitor holdings, upload reports, and analyze
                        portfolio performance efficiently.
                    </p>

                </div>

                {/* Right Stats Card */}
                <div
                    className={`rounded-3xl border shadow-sm p-10 transition ${darkMode
                        ? "bg-slate-900 border-slate-800"
                        : "bg-white border-slate-200"
                        }`}
                >

                    <div className="grid grid-cols-2 gap-6">

                        <div>
                            <h3 className="text-4xl font-bold text-blue-500">
                                100+
                            </h3>

                            <p
                                className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"
                                    }`}
                            >
                                Active Portfolios
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-green-500">
                                ₹50Cr+
                            </h3>

                            <p
                                className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"
                                    }`}
                            >
                                Managed Assets
                            </p>
                        </div>

                        <div>
                            <h3
                                className={`text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                    }`}
                            >
                                Secure
                            </h3>

                            <p
                                className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"
                                    }`}
                            >
                                Access Control
                            </p>
                        </div>

                        <div>
                            <h3
                                className={`text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                    }`}
                            >
                                Real-Time
                            </h3>

                            <p
                                className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"
                                    }`}
                            >
                                Portfolio Insights
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}