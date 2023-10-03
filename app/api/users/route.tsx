import { NextResponse, NextRequest } from "next/server";
import schema from './schema';

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Olawale'},
        { id: 2, name: 'Paul' }
    ])
}

export async function POST( request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400});
    return NextResponse.json({ id: 1, name: body.name}, {status: 201});
}

