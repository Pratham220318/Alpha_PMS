import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {

    try {

        const body = await req.json();

        const { email, password } = body;

        // Find user
        const [users] = await db.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (users.length === 0) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 400 }
            );
        }

        const user = users[0];

        // Direct password compare
        if (password !== user.password) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Login successful",

            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );

    }
}