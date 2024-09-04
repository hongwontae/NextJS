import { NextResponse } from "next/server";



export async function POST(req) {
    const data = await req.formData();
    const nickname = data.get('nickname');

    return NextResponse.json({message : nickname});
}

export async function GET(req){
    return NextResponse.json({message : 'Get Cache?'})
}