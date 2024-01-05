import { NextResponse } from "next/server";
import { connectDb } from "@/app/helper/db";

connectDb();
const users = [
    {
    name : "Harsh Rah ",
    phone : "966152",
    course : "C++"
},
{
    name : "Roghidoif Rah ",
    phone : "966152",
    course : "C++"
},
];

export function GET(){



return NextResponse.json(users)

}


export function POST(request){
    const body = request.body ;
    console.log(body);
    console.log(request.method)
    request.cookies.set('Harsh Raj IS My Name ', 'false')
    const data = request.cookies.get('Harsh Raj IS My Name ')
    console.log(data)

    console.log(request.nextUrl.pathname)
    console.log(request.nextUrl.searchParams)

    return NextResponse.json({
        message: "Posting User data", 
    })

}


export function DELETE(request){
    console.log("Delete Api is Calleed");
    return NextResponse.json({
        message: "deleted !! ",
        status : true ,
    },{
        status : 201 , statusText: "hey the Text Is Chanegd "
    }
    )

}

export function PUT(){

}