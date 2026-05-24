export default function AboutUs() {
    return (
        <main className="min-h-screen bg-slate-50 px-6 py-20">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-5xl font-bold text-slate-900">
                    About Us
                </h1>

                <p className="mt-8 text-lg text-slate-600 leading-8">
                    NAV India Portfolio is a modern investment portfolio
                    management platform designed to help investors track,
                    analyze, and manage their financial holdings through
                    a clean and intuitive dashboard experience.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-16">

                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <h3 className="text-xl font-semibold">
                            Portfolio Tracking
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Monitor holdings and investment performance efficiently.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <h3 className="text-xl font-semibold">
                            Analytics Dashboard
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Visualize investment data using interactive charts.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <h3 className="text-xl font-semibold">
                            Secure Access
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Secure authentication and personalized data access.
                        </p>
                    </div>

                </div>

            </div>

        </main>
    );
}