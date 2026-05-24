"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            className="w-11 h-11 rounded-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-900 transition"
        >

            {theme === "dark" ? (
                <FiSun className="text-yellow-400 text-xl" />
            ) : (
                <FiMoon className="text-slate-700 text-xl" />
            )}

        </button>
    );
}