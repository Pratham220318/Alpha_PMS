"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
    darkMode,
    selectedMenu,
    setSelectedMenu,
}) {
    const pathname = usePathname();

    const linkClass = (href) =>
        `px-4 py-3 rounded-xl transition ${pathname === href
            ? darkMode
                ? "bg-slate-800 text-white"
                : "bg-slate-200 text-black"
            : darkMode
                ? "hover:bg-slate-800"
                : "hover:bg-slate-100"
        }`;

    return (
        <aside
            className={`w-72 min-h-screen p-6 border-r ${darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200"
                }`}
        >
            <h1 className="text-2xl font-bold text-blue-600">
                PMS
            </h1>

            <nav className="mt-10 flex flex-col gap-3">
                <Link href="/dashboard" className={linkClass("/dashboard")} onClick={() => setSelectedMenu("Dashboard")}>
                    Dashboard
                </Link>

                <Link href="/portfolio" className={linkClass("/portfolio")} onClick={() => setSelectedMenu("Portfolio")}>
                    Portfolio
                </Link>

                <Link href="/account-summary" className={linkClass("/account-summary")} onClick={() => setSelectedMenu("Account Summary")}>
                    Account Summary
                </Link>

                <Link href="/documents" className={linkClass("/documents")} onClick={() => setSelectedMenu("Documents")}>
                    Documents
                </Link>
            </nav>
        </aside>
    );
}