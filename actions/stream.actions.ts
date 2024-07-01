"use server"
import { StreamClient } from '@stream-io/node-sdk';
import { currentUser } from "@clerk/nextjs/server";


const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const apiSecret = process.env.STREAM_SECRET_KEY

export const tokenProvider = async ()=>{
    const user = await currentUser();

    if(!user) throw Error("User not logged in")
    if(!apiKey) throw Error("No API key")
    if(!apiSecret) throw Error("No API key")


    const client = new StreamClient(apiKey,apiSecret)

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

    const issue = Math.floor(Date.now() / 1000) - 60;

    const token = client.createToken(user.id,exp,issue);

    return token;

}