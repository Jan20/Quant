export class Stock {

    ////////////////
    // Attributes //
    ////////////////
    private symbol: string;
    private name: string;
    private close: number;
    private date: any;
    private change: number;

    /////////////////
    // Constructor //
    /////////////////
    public constructor () {}

    /////////////
    // Getters //
    /////////////
    public getSymbol(): string {

        return this.symbol;

    }

    public getName(): string {

        return this.name;

    }

    public getClose(): number {

        return this.close;

    }

    public getDate(): any {

        return this.date;

    }

    public getChange(): number {

        return this.change;

    }

    /////////////
    // Setters //
    /////////////
    public setSymbol(symbol: string): void {

        this.symbol = symbol;

    }

    public setName(name: string): void {

        this.name = name;

    }

    public setClose(close: number ): void {

        this.close = close;

    }

    public setDate(date: any): void {

        this.date = date;

    }

    public setChange(change: number): void {

        this.change = change;

    }

}
