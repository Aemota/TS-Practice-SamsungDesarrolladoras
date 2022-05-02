export class Mail {
    private _tipo: string;
    private _direccion: string;

    constructor(tipo: string, direccion: string){
        this._tipo = tipo;
        this._direccion = direccion;
    }

    // -------------------------- Getters -------------------------- //

    public getTipo(): string {
        return this._tipo;
    }
    public getDireccion(): string {
        return this._direccion;
    }

    // -------------------------- Setters -------------------------- //

    public setTipo(value: string) {
        this._tipo = value;
    }
    public setDireccion(value: string) {
        this._direccion = value;
    }
}