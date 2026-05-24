import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {

    try {

        const body = await req.json();

        const {
            full_name,
            email,
            password
        } = body;

        // Check existing user
        const [existingUsers] = await db.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (existingUsers.length > 0) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }

        // Insert directly
        await db.query(
            `
            INSERT INTO users
            (full_name, email, password, role)
            VALUES (?, ?, ?, ?)
            `,
            [
                full_name,
                email,
                password,
                "user"
            ]
        );

        return NextResponse.json({
            success: true,
            message: "Registration successful"
        });

    } catch (error) {

        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );

    }
}