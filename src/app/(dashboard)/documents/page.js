"use client";

import { useState } from "react";

export default function DocumentsPage({ darkMode = false }) {

    const [documents, setDocuments] = useState([]);

    // Upload Handler
    const handleUpload = (e) => {

        const files = Array.from(e.target.files);

        const formattedFiles = files.map((file) => ({
            name: file.name,
            size: (file.size / 1024).toFixed(2),
            type: file.type,
            url: URL.createObjectURL(file),
            uploadedAt: new Date().toLocaleDateString(),
        }));

        setDocuments((prev) => [
            ...prev,
            ...formattedFiles,
        ]);
    };

    return (
        <div className="space-y-8">

            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">

                <div>

                    <h1
                        className={`text-4xl font-bold ${darkMode
                                ? "text-white"
                                : "text-slate-900"
                            }`}
                    >
                        Documents Center
                    </h1>

                    <p
                        className={`mt-2 text-lg ${darkMode
                                ? "text-slate-400"
                                : "text-slate-500"
                            }`}
                    >
                        Upload and manage portfolio related files.
                    </p>

                </div>

                {/* Upload Button */}
                <label className="cursor-pointer">

                    <input
                        type="file"
                        multiple
                        accept=".pdf,.ppt,.pptx"
                        className="hidden"
                        onChange={handleUpload}
                    />

                    <div className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-2xl font-medium shadow-lg">
                        Upload Documents
                    </div>

                </label>

            </div>

            {/* Upload Box */}
            <div
                className={`border-2 border-dashed rounded-3xl p-12 text-center ${darkMode
                        ? "border-slate-700 bg-[#0f172a]"
                        : "border-slate-300 bg-white"
                    }`}
            >

                <h2 className="text-2xl font-bold">
                    Drag & Drop Files
                </h2>

                <p
                    className={`mt-3 ${darkMode
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                >
                    Upload PDF, PPT, or PPTX documents.
                </p>

            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {documents.map((doc, index) => (

                    <div
                        key={index}
                        className={`rounded-3xl border p-6 ${darkMode
                                ? "bg-[#0f172a] border-slate-800"
                                : "bg-white border-slate-200"
                            }`}
                    >

                        {/* File Type */}
                        <div className="text-5xl">

                            {doc.type.includes("pdf")
                                ? "📄"
                                : "📊"}

                        </div>

                        {/* File Name */}
                        <h3 className="mt-5 text-xl font-bold break-all">
                            {doc.name}
                        </h3>

                        {/* Details */}
                        <div
                            className={`mt-3 space-y-1 ${darkMode
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                }`}
                        >

                            <p>
                                Size: {doc.size} KB
                            </p>

                            <p>
                                Uploaded: {doc.uploadedAt}
                            </p>

                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex gap-3">

                            <a
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-xl"
                            >
                                View
                            </a>

                            <a
                                href={doc.url}
                                download={doc.name}
                                className={`px-4 py-2 rounded-xl border ${darkMode
                                        ? "border-slate-700 hover:bg-slate-800"
                                        : "border-slate-300 hover:bg-slate-100"
                                    }`}
                            >
                                Download
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}