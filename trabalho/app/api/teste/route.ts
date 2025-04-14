import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({aluno : "João Mateus da Silva Neves"});
}