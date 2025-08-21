import { db } from "@/config/db";
import { SessionChatTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4} from 'uuid';

export async function POST(req:NextRequest) {

    const {notes,selectDoctor} = await req.json()
    const user = await currentUser();
    try{
        const sessionID= uuidv4();
        const result = await db.insert(SessionChatTable).values({
            sessionId: sessionID,
            createBy: user?.primaryEmailAddress?.emailAddress,
            notes:notes,
            selectedDoctor : selectDoctor,
            createdOn: (new Date()).toString()
           //@ts-ignore
        }).returning({SessionChatTable})

        return NextResponse.json(result[0]?.SessionChatTable);

    }catch(e){
        NextResponse.json(e)
    }
}