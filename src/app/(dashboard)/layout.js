"use client";

import { useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({ children }) {

    const [darkMode, setDarkMode] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");

    return (
        <div
            className={`flex min-h-screen ${darkMode
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-900"
                }`}
        >

            <Sidebar
                darkMode={darkMode}
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
            />

            <div className="flex-1">

                <Navbar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    selectedMenu={selectedMenu}
                />

                <main className="p-6">
                    {children}
                </main>

            </div>

        </div>
    );
}