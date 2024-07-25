import {WebSocketServer} from 'ws'
import Transport from "../types/types";
import path from "path";
import fs from "fs";

export default class WSImpl implements Transport{
    private readonly port: number
    private wss: WebSocketServer
    private pathFile: string

    constructor(port: number) {
        this.port = port
    }

    private setup(): void{
        this._createServer()
        this._setPath()
        this._connect()
    }

    private _createServer(): void{
        this.wss = new WebSocketServer({port: this.port})
    }

    private _setPath(): void{
        this.pathFile = path.join(__dirname, '..', '..', '..', 'public', 'DSC04520.jpg')
    }

    private _connect(): void{
        this.wss.on('connection', (ws)=>{
            console.log('New client connected!');

            ws.addEventListener('message', (event)=>{
                if(event.data === 'give me'){
                    fs.readFile(this.pathFile, (err, data) => {
                        if(!data){
                            ws.send('File not found')
                        }

                        ws.send(JSON.stringify(data))

                        ws.on('close',()=>{
                            console.log('Client has disconnected!')
                        })
                    })
                }
            })
        })
    }

    public run(): void{
        this.setup()
    }
}