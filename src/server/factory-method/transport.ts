import Transport from "../types/types";
import HttpImpl from "../components/http";
import WSImpl from "../components/ws";

export default class TransportFactory{
    public static create(transport: string, port: number): Transport{
        switch (transport.toLowerCase()){
            case 'http':
                return new HttpImpl(port)
            case 'ws':
                return new WSImpl(port)
        }
    }
}