export class Product {
    private _title: String;
    public get title(): String {
        return this._title;
    }

    private _description: String;
    public get description(): String {
        return this._description;
    }

    private _price: number;
    public get price(): number {
        return this._price;
    }

    constructor(title: String, price: number, description: String) {
        this._title = title;
        this._description = description;
        this._price = price;
    }
}