import Link from "next/link";

export default function Navbar({ darkMode, setDarkMode }) {
    return (
        <header
            className={`w-full border-b sticky top-0 z-50 transition ${darkMode
                ? "bg-slate-950 border-slate-800"
                : "bg-white border-slate-200"
                }`}
        >

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <h1 className="text-2xl font-bold text-blue-600">
                    Portfolio Management System
                </h1>

                <nav className="flex items-center gap-8">

                    <a
                        href="#features"
                        className={`transition ${darkMode
                            ? "text-slate-300 hover:text-blue-400"
                            : "text-slate-700 hover:text-blue-600"
                            }`}
                    >
                        Features
                    </a>

                    <a
                        href="#about"
                        className={`transition ${darkMode
                            ? "text-slate-300 hover:text-blue-400"
                            : "text-slate-700 hover:text-blue-600"
                            }`}
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className={`transition ${darkMode
                            ? "text-slate-300 hover:text-blue-400"
                            : "text-slate-700 hover:text-blue-600"
                            }`}
                    >
                        Contact
                    </a>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`border px-4 py-2 rounded-xl transition ${darkMode
                            ? "border-slate-700 text-white hover:bg-slate-800"
                            : "border-slate-300 text-slate-900 hover:bg-slate-100"
                            }`}
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>

                    <Link
                        href="/login"
                        className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
                    >
                        Login / Register
                    </Link>

                </nav>

            </div>

        </header>
    );
}