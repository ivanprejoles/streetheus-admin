import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
    req: Request,
) {
    try {
        const body = await req.json();

        const { 
            address,
            name,
            orderId,
            email,
            phone,
            date,
            amount,
            imageSrc
         } = body;

        if (!orderId) {
            return new NextResponse("Unauthorized", { status: 401, headers: corsHeaders });
        }

        if (!name) {
            return new NextResponse("Name is required", { status: 400, headers: corsHeaders });
        }

        const store = await prismadb.payment.create({
            data: {
                address,
                name,
                orderId,
                email,
                phone,
                date,
                amount,
                imageSrc
            }
        });

        return NextResponse.json(store, { headers: corsHeaders });
    } catch (error) {
        console.log('[STORES_POST]', error);
        return new NextResponse("Internal Error", { status: 500, headers: corsHeaders });
    }
}