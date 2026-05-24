"use client";

import { useState } from "react";
import Papa from "papaparse";

export default function GoogleSheetUpload({
    setPortfolioData,
    darkMode,
}) {

    const [sheetUrl, setSheetUrl] = useState("");
    const [loading, setLoading] = useState(false);

    // Convert Google Sheet URL → CSV Export URL
    const convertGoogleSheetToCSV = (url) => {

        try {

            // Extract Sheet ID
            const sheetIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);

            if (!sheetIdMatch) return null;

            const sheetId = sheetIdMatch[1];

            // Default gid
            let gid = "0";

            // If gid exists in URL
            const gidMatch = url.match(/gid=([0-9]+)/);

            if (gidMatch) {
                gid = gidMatch[1];
            }

            return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

        } catch (error) {

            console.error(error);

            return null;

        }
    };

    const handleFetchGoogleSheet = async () => {

        if (!sheetUrl) {
            alert("Please enter Google Sheet URL");
            return;
        }

        try {

            setLoading(true);

            const csvUrl = convertGoogleSheetToCSV(sheetUrl);

            if (!csvUrl) {
                alert("Invalid Google Sheet URL");
                return;
            }

            console.log("CSV URL:", csvUrl);

            const response = await fetch(csvUrl);

            if (!response.ok) {
                throw new Error("Failed to fetch sheet");
            }

            const csvText = await response.text();

            Papa.parse(csvText, {

                header: true,
                skipEmptyLines: true,

                complete: (results) => {

                    console.log("Parsed Sheet Data", results);

                    const formattedData = results.data.map((item) => ({

                        security:
                            item.SECURITY || "",

                        prevClose:
                            Number(item.PREV_CL_PR || 0),

                        openPrice:
                            Number(item.OPEN_PRICE || 0),

                        highPrice:
                            Number(item.HIGH_PRICE || 0),

                        lowPrice:
                            Number(item.LOW_PRICE || 0),

                        closePrice:
                            Number(item.CLOSE_PRICE || 0),

                        tradedValue:
                            Number(item.NET_TRDVAL || 0),

                        tradedQty:
                            Number(item.NET_TRDQTY || 0),

                        trades:
                            Number(item.TRADES || 0),

                        high52Week:
                            Number(item.HI_52_WK || 0),

                        low52Week:
                            Number(item.LO_52_WK || 0),

                    }));

                    setPortfolioData(formattedData);

                    alert("Data Imported Successfully");

                },

                error: (error) => {

                    console.error(error);

                    alert("CSV Parsing Failed");

                },

            });

        } catch (error) {

            console.error("Error fetching sheet:", error);

            alert(
                "Failed to fetch Google Sheet data. Make sure the sheet is public."
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <div
            className={`rounded-3xl border p-6 ${darkMode
                ? "bg-[#0f172a] border-slate-800"
                : "bg-white border-slate-200"
                }`}
        >

            <div className="flex flex-col gap-4">

                <div>

                    <h2 className="text-2xl font-bold">
                        Import From Google Sheet
                    </h2>

                    <p
                        className={`mt-1 ${darkMode
                            ? "text-slate-400"
                            : "text-slate-500"
                            }`}
                    >
                        Fetch data dynamically from Google Sheets.
                    </p>

                </div>

                <div className="flex gap-3 flex-wrap">

                    <input
                        type="text"
                        placeholder="Paste Google Sheet URL"
                        value={sheetUrl}
                        onChange={(e) =>
                            setSheetUrl(e.target.value)
                        }
                        className={`flex-1 min-w-[250px] px-4 py-3 rounded-2xl border outline-none ${darkMode
                            ? "bg-slate-900 border-slate-700 text-white"
                            : "bg-white border-slate-300 text-black"
                            }`}
                    />

                    <button
                        onClick={handleFetchGoogleSheet}
                        disabled={loading}
                        className={`px-5 py-3 rounded-2xl font-medium shadow-lg text-white transition ${loading
                            ? "bg-slate-500 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {loading
                            ? "Fetching..."
                            : "Fetch Data"}
                    </button>

                </div>

            </div>

        </div>
    );
}