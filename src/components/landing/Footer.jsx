export default function Footer({ darkMode }) {
    return (
        <footer
            className={`border-t mt-20 ${darkMode
                ? "border-slate-800 bg-slate-950"
                : "border-slate-200 bg-white"
                }`}
        >

            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">

                <h2 className="text-xl font-bold text-blue-600">
                    Portfolio Management System
                </h2>

                <p
                    className={`mt-4 md:mt-0 ${darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                >
                    © 2026 Portfolio Management System. All rights reserved.
                </p>

            </div>

        </footer>
    );
}