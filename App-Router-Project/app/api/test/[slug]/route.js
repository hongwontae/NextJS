import { NextResponse } from "next/server";

export async function GET(req){
    console.log('get Method')
    const header = new Headers(req.headers);
    console.log(header);
    return NextResponse.json({message : 'get method'})
}

export async function POST(req, {params}) {
    const clientData = await req.json();
    console.log(clientData);

    console.log(params);

    return NextResponse.json({message : params})

}