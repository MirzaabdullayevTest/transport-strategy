import Transport from "../types/types";
import * as http from "http";

import fs from "fs";
import path from "path";

export default class HttpImpl implements Transport{
    private readonly port: number
    private server: http.Server
    private pathFile: string

    constructor(port: number) {
        this.port = port
    }

    public run(): void {
        this.setup()
    }

    private setup(): void{
        this._setPath()
        this._createServer()
        this._listenServer()
    }

    private _setPath(): void{
        this.pathFile = path.join(__dirname, '..', '..', '..', 'public', 'DSC04520.jpg')
    }

    private _createServer(): void{
        this.server = http.createServer((req,res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            if(req.method === 'GET'){
                if(req.url === '/get'){
                    fs.readFile(this.pathFile, (err, data) => {
                        if(!data){
                            res.write('File not found')
                            res.end()
                        }

                        res.end(JSON.stringify(data))
                    })
                }
            }
        })
    }

    private _listenServer(): void{
        this.server.listen(this.port,'localhost', () => {
            console.log(`Server working on ${this.port}`)
        })
    }
}
