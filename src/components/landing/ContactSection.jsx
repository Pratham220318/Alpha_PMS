export default function ContactSection({ darkMode }) {
    return (
        <section
            id="contact"
            className={`max-w-5xl mx-auto px-6 py-24 ${darkMode ? "bg-slate-950" : ""
                }`}
        >

            <div
                className={`rounded-3xl border shadow-sm p-10 transition ${darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200"
                    }`}
            >

                <h2
                    className={`text-4xl font-bold text-center ${darkMode ? "text-white" : "text-slate-900"
                        }`}
                >
                    Contact Us
                </h2>

                <p
                    className={`text-center mt-4 ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                >
                    Reach out to us for portfolio management solutions.
                </p>

                <form className="mt-12 space-y-6">

                    <div className="grid md:grid-cols-2 gap-6">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className={`border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition ${darkMode
                                ? "bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                                : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                                }`}
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className={`border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition ${darkMode
                                ? "bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                                : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                                }`}
                        />

                    </div>

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition ${darkMode
                            ? "bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                            : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                            }`}
                    ></textarea>

                    <button
                        className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl"
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}