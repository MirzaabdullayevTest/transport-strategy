import Transport from "../types/types";

export interface Strategy{
    connect(): void
}

export default class StrategyImpl implements Strategy{
    private strategy

    constructor(strategy: Transport) {
        this.strategy = strategy
    }

    public connect(): void{
         this.strategy.run()
    }
}