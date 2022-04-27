class StrategyManger{
    constructor(){
        this._strategy = null;
    }
    set strategy(strategy){
        this._strategy = strategy;
    }
    doAction(){
        let text = "Strategy: ";
        this._strategy.doAction(text);
    }
}

class Strategy1{
    doAction(text){
        console.log(text + "1");
    }
}

class Strategy2{
    doAction(text){
        console.log(text + "2");
    }
}

function main(){
    const strategyManager = new StrategyManger();
    const strategy1 = new Strategy1();
    const strategy2 = new Strategy2();
    strategyManager.strategy = strategy1;
    strategyManager.doAction();
    strategyManager.strategy = strategy2;
    strategyManager.doAction();
}

main();
