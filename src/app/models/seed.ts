export class Seed {

    ////////////////
    // Attributes //
    ////////////////
    private name;
    private symbol;

    //////////////////
    // Constructors //
    //////////////////
    public constructor(symbol: string, name: string) {

        this.symbol = symbol;
        this.name = name;

    }

    /////////////
    // Getters //
    /////////////
    public getSymbol(): string {

        return this.symbol;

    }

    public getName(): string {

        return this.name;

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

}
