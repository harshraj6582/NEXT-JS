import { NextResponse } from "next/server";

export function DELETE(request, {params}){

    console.log(params)
    const userId = params.userId;

    console.log(userId,"This is the User Id of the Following ")

    return NextResponse.json({
        message : "Testing Delete"
    })
}