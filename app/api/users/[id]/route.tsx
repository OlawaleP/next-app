import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
    request: NextRequest, 
    { params }: { params: { id: number }}) {
        if (params.id  > 10)
            return NextResponse.json({ error: 'user not found'}, {status: 400});
        return NextResponse.json({ id: 1, name: 'Ola'})

}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: number }}
) {
    // Validate the request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    if ( !validation.success )
        return NextResponse.json( validation.error.errors, { status: 400 });
    // Fetch User
    if ( params.id > 10 ) 
        return NextResponse.json({ error: 'User not found'}, { status: 404 });

    return NextResponse.json({ id: 1, name: body.name })
}

export function DELETE(
    request: NextRequest,
    { params }: { params: { id: number }}
) {
    // Fetch user from the db
    // If not found, return 404
    // Delete the user
    // Return 200
    if (params.id > 10) 
        return NextResponse.json({ error: 'User not found'}, { status: 404});
    return NextResponse.json({});

}