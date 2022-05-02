export class Telefono {
    private _tipo: string
    private _numero: number

    constructor(tipo: string, numero: number) {
        this._tipo = tipo;
        this._numero = numero;
    }

    // -------------------------- Getters -------------------------- //

    public getTipo(): string {
        return this._tipo;
    }
    public getNumero(): number {
        return this._numero;
    }

    // -------------------------- Setters -------------------------- //

    public setTipo(value: string) {
        this._tipo = value;
    }
    public setNumero(value: number) {
        this._numero = value;
    }
}