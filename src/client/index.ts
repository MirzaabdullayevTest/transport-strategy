import httpClient from "./components/httpClient";
import Transport from "./types/types";
import WsClient from "./components/wsClient";
import StrategyImpl from "../strategy/strategy";
import Strategy from "../strategy/strategy";

( async function (){
    // const port = parseInt(process.env.PORT) || 8080
    // const http:Transport = new httpClient()
    const ws: Transport = new WsClient()

    const strategy: Strategy = new StrategyImpl(ws)
    strategy.connect()
})()