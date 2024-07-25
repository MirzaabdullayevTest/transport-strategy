import * as http from 'http'
import Transport from "../types/types";

export default class httpClient implements Transport{
    private options: {
        port: number,
        host?: string,
        method: string,
        path?: string
    }

    private request(): void{
        const req = http.request(this.options, (res)=>{
            let time = new Date().getTime()
            let content = ''

            res.on('data', (chunk)=>{
                content += chunk
            })

            res.on("end", () => {
                if(content){
                    time = new Date().getTime() - time
                    console.log(time + 'ms')
                }
            })
        })

        req.on('error', (err)=>{
            console.error(err);
        })

        req.end()
    }

    private _setOptions(): void{
        this.options = {
            port: 8080,
            host: 'localhost',
            method: 'GET',
            path: '/get'
        }
    }

    public run(): void{
        this._setOptions()
        this.request()
    }
}