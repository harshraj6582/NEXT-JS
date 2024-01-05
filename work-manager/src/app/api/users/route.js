import { NextResponse } from "next/server";
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


export function POST(){

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