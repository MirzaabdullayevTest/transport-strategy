import Transport from "./types/types";
import StrategyImpl from "../strategy/strategy";
import Strategy from "../strategy/strategy";
import TransportFactory from "./factory-method/transport";
import Config from "../config/types";

export default class Server{
    private readonly port: number
    private readonly transport: string

    constructor(config: Config) {
        this.port = config.port
        this.transport = config.transport
    }

    private setup(): void{
        const transport: Transport = TransportFactory.create(this.transport, this.port)
        const strategy: Strategy = new StrategyImpl(transport)
        strategy.connect()
    }

    public connect(): void{
        this.setup()
    }
}