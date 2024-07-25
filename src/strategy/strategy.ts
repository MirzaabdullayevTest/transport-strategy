import Transport from "../server/types/types";

export default interface Strategy{
    connect(): void
}

export default class StrategyImpl implements Strategy{
    private transport: Transport

    constructor(transport: Transport) {
        this.transport = transport
    }

    public connect(): void{
        this.transport.run()
    }
}