"use client";

import { useState, useEffect, useRef } from "react";
import {
    FiLogOut,
    FiMoon,
    FiSun,
    FiSettings,
    FiChevronDown
} from "react-icons/fi";

export default function Navbar({
    darkMode,
    setDarkMode,
    selectedMenu
}) {

    const [user, setUser] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const menuRef = useRef();

    // Get user from localStorage
    useEffect(() => {

        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

    }, []);

    // Close menu outside click
    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setOpenMenu(false);
            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    // Logout
    const handleLogout = () => {

        localStorage.removeItem("user");

        window.location.href = "/";
    };

    return (
        <header
            className={`px-6 py-4 flex items-center justify-between border-b relative ${darkMode
                ? "bg-slate-900 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-900"
                }`}
        >

            {/* Left Side */}
            <div>
                <h2 className="text-2xl font-bold">
                    {selectedMenu}
                </h2>

                <p
                    className={`text-sm mt-1 ${darkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                        }`}
                >
                    Welcome back,
                    <span className="font-semibold ml-1">
                        {user?.full_name || "User"}
                    </span>
                </p>
            </div>

            {/* Right Side */}
            <div
                className="relative"
                ref={menuRef}
            >

                {/* Profile Button */}
                <button
                    onClick={() =>
                        setOpenMenu(!openMenu)
                    }
                    className={`flex items-center gap-3 px-3 py-2 rounded-2xl transition ${darkMode
                        ? "hover:bg-slate-800"
                        : "hover:bg-slate-100"
                        }`}
                >

                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold uppercase">
                        {user?.full_name?.charAt(0) || "U"}
                    </div>

                    <div className="text-left hidden sm:block">
                        <p className="font-medium text-sm">
                            {user?.full_name || "User"}
                        </p>

                        <p
                            className={`text-xs capitalize ${darkMode
                                ? "text-slate-400"
                                : "text-slate-500"
                                }`}
                        >
                            {user?.role || "user"}
                        </p>
                    </div>

                    <FiChevronDown size={18} />

                </button>

                {/* Dropdown Menu */}
                {openMenu && (

                    <div
                        className={`absolute right-0 mt-3 w-64 rounded-2xl shadow-xl border overflow-hidden z-50 ${darkMode
                            ? "bg-slate-900 border-slate-800"
                            : "bg-white border-slate-200"
                            }`}
                    >

                        {/* Header */}
                        <div
                            className={`px-5 py-4 border-b ${darkMode
                                ? "border-slate-800"
                                : "border-slate-200"
                                }`}
                        >
                            <p className="font-semibold">
                                {user?.full_name}
                            </p>

                            <p
                                className={`text-sm ${darkMode
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                    }`}
                            >
                                {user?.email}
                            </p>
                        </div>

                        {/* Settings */}
                        <div className="p-2">

                            <div
                                className={`flex items-center justify-between px-3 py-3 rounded-xl ${darkMode
                                    ? "hover:bg-slate-800"
                                    : "hover:bg-slate-100"
                                    }`}
                            >

                                <div className="flex items-center gap-3">

                                    <FiSettings size={18} />

                                    <span>
                                        Appearance
                                    </span>

                                </div>

                                <button
                                    onClick={() =>
                                        setDarkMode(!darkMode)
                                    }
                                    className={`w-12 h-6 flex items-center rounded-full p-1 transition ${darkMode
                                        ? "bg-blue-600 justify-end"
                                        : "bg-slate-300 justify-start"
                                        }`}
                                >

                                    <div className="bg-white w-4 h-4 rounded-full flex items-center justify-center">

                                        {darkMode
                                            ? <FiMoon size={10} />
                                            : <FiSun size={10} />
                                        }

                                    </div>

                                </button>

                            </div>

                            {/* Logout */}
                            <button
                                onClick={handleLogout}
                                className={`w-full mt-2 flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 transition ${darkMode
                                    ? "hover:bg-slate-800"
                                    : "hover:bg-red-50"
                                    }`}
                            >

                                <FiLogOut size={18} />

                                Logout

                            </button>

                        </div>

                    </div>

                )}

            </div>

        </header>
    );
}