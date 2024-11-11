import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function DELETE (
    req: Request,
    { params }: { params: { storeId: string, paymentId: string } }
) {
    try {

        if (!params.paymentId) {
            return new NextResponse("Unauthorized", { status: 401, headers: corsHeaders });
        }

        if (!params.storeId) {
            return new NextResponse("Store ID is required", { status: 400, headers: corsHeaders });
        }


        const payment = await prismadb.payment.deleteMany({
            where: {
                id: params.paymentId,
            },
        });
        
        return NextResponse.json(payment, {headers: corsHeaders });
    } catch (error) {
        console.log('[PAYMENT_DELETE]', error);
        return new NextResponse("Internal error", { status: 500, headers: corsHeaders });
    }
}