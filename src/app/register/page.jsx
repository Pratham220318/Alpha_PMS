"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");

        // Password validation
        const passwordRegex = /^.{8,}$/;

        if (!passwordRegex.test(formData.password)) {
            setMessage(
                "Password must contain at least 8 characters"
            );
            return;
        }

        // Confirm password
        if (
            formData.password !==
            formData.confirmPassword
        ) {
            setMessage("Passwords do not match");
            return;
        }

        try {

            setLoading(true);

            const response = await fetch(
                "/api/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        full_name: formData.full_name,
                        email: formData.email,
                        password: formData.password
                    })
                }
            );

            const data = await response.json();

            setMessage(data.message);

            if (data.success) {

                setFormData({
                    full_name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });
                router.push("/login");
            }

        } catch (error) {

            setMessage("Something went wrong");

        } finally {

            setLoading(false);

        }
    };

    return (
        <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all text-slate-700 font-medium"
            >
                <span className="text-lg">←</span>
                Home
            </Link>

            <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm rounded-3xl p-8">

                <h1 className="text-3xl font-bold text-center text-slate-900">
                    Create Account
                </h1>

                <p className="text-center text-slate-500 mt-2">
                    Register to access portfolio dashboard
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                >

                    <div>
                        <label className="block mb-2 font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create password"
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm password"
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {message && (
                        <p className="text-sm text-center text-red-500">
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                </form>

                <p className="text-center text-slate-500 mt-6">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </main>
    );
}