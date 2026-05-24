export default function ContactUs() {
    return (
        <main className="min-h-screen bg-slate-50 px-6 py-20">

            <div className="max-w-4xl mx-auto">

                <h1 className="text-5xl font-bold text-slate-900">
                    Contact Us
                </h1>

                <p className="mt-6 text-lg text-slate-600">
                    Reach out to us for portfolio management solutions
                    and investment dashboard services.
                </p>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mt-12">

                    <form className="space-y-6">

                        <div>
                            <label className="block mb-2 font-medium">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Message
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Write your message"
                                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
}