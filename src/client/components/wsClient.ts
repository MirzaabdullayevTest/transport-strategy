import Transport from "../types/types";
import WebSocket from 'ws'

export default class WsClient implements Transport{
    private url: string
    private ws: WebSocket

    private request(): void{
        this.ws.addEventListener('open', ()=>{
            console.log('connected')

            this.ws.send('give me')
            let time = new Date().getTime()

            this.ws.addEventListener('message', (event)=>{
                if(event.data){
                    time = new Date().getTime() - time

                    console.log(time + 'ms')
                }
            })
        })

        this.ws.addEventListener('close', ()=>{
            console.log('Connection closed!')
        })
    }

    private _setURL(): void{
        this.url = 'ws://localhost:8080'
    }

    private _createClient(): void{
        this.ws = new WebSocket(this.url)
    }

    public run(): void{
        this._setURL()
        this._createClient()
        this.request()
    }
}