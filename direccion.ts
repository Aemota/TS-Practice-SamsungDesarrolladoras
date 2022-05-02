export class Direccion{
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _codigoPostal: number;
    private _poblacion: string;
    private _provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    // -------------------------- Getters -------------------------- //

    public getCalle(): string {
        return this._calle;
    }
    public getNumero(): number {
        return this._numero;
    }
    public getPiso(): number {
        return this._piso;
    }
    public getLetra(): string {
        return this._letra;
    }
    public getCodigoPostal(): number {
        return this._codigoPostal;
    }
    public getPoblacion(): string {
        return this._poblacion;
    }
    public getProvincia(): string {
        return this._provincia;
    }
// -------------------------- Setters -------------------------- //

    public setCalle(value: string) {
        this._calle = value;
    }
    public setNumero(value: number) {
        this._numero= value;
    }
    public setPiso(value: number) {
        this._piso = value;
    }
    public setLetra(value: string) {
        this._letra = value;
    }
    public setCodigoPostal(value: number) {
        this._codigoPostal = value;
    }
    public setPoblacion(value: string) {
        this._poblacion = value;
    }   
    public setProvincia(value: string) {
        this._provincia = value;
    }
}