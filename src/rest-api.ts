import { Client, Message, ThreadChannel } from "discord.js"
import express from "express";

export function createRestApi(client: Client){
    const app = express()
    app.use(express.json())

    //Gets the json for Assassins Creed
    app.get("/",async(req,res) =>{
        const test = await fetch('https://api.isthereanydeal.com/v02/search/search/?key=137bb5278e36da06e3b3472b553ccfd276c9a732&q=assassins%20creed%20odyssey')
        await res.send(await test.json())
    });
    return app;
}