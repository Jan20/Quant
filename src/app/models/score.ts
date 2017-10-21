export class Score {

    ////////////////
    // Attributes //
    ////////////////
    private name: string;
    private value: number;
    private volatility: number;
    private sharpeRatio: number; 

    //////////////////
    // Constructors //
    //////////////////
    public constructor(
    ) {

        this.value = 0;

    }

    /////////////
    // Getters //
    /////////////
    public getName(): string {

        return this.name;

    }

    public getValue(): number {

        return this.value;

    }

    public getVolatility(): number {

        return this.volatility;

    }

    public getSharpeRatio(): number {

        return this.sharpeRatio;

    }

    /////////////
    // Setters //
    /////////////
    public setName(name: string): void {

        this.name = name;

    }

    public setValue(value: number): void {

        this.value = value;

    }

    public setVolatility(volatility: number): void {

        this.volatility = volatility;

    }

    public setSharpeRatio(sharpeRatio: number): void {

        this.sharpeRatio = sharpeRatio;

    }

}
