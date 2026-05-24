"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

    try {

      setLoading(true);

      const response = await fetch(
        "/api/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      // Store user
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Role based redirect
      if (data.user.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/dashboard");
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
          Login
        </h1>

        <p className="text-center text-slate-500 mt-2">
          Access your portfolio dashboard
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

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
              placeholder="Enter your password"
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
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center text-slate-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </Link>
        </p>

      </div>
    </main>
  );
}