import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: string;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;
    
    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: string, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }    
    
    // -------------------------- Getters -------------------------- // 

    public getNombre(): string {
        return this._nombre;
    }
    public getApellidos(): string {
        return this._apellidos;
    }
    public getEdad(): number {
        return this._edad;
    }
    public getDni(): string {
        return this._dni;
    } 
    public getCumpleaños(): string {
        return this._cumpleaños;
    } 
    public getColorFavorito(): string {
        return this._colorFavorito;
    } 
    public getSexo(): string {
        return this._sexo;
    } 
    public getDirecciones(): Direccion[] {
        return this._direcciones;
    } 
    public getMails(): Mail[] {
        return this._mails;
    }
    public getTelefonos(): Telefono[] {
        return this._telefonos;
    }  
    public getNotas(): string {
        return this._notas;
    } 

    // -------------------------- Setters -------------------------- //

    public setNombre(value: string) {
        this._nombre = value;
    }
    public setApellidos(value: string) {
        this._apellidos = value;
    }
    public setEdad(value: number){
        this._edad = value;
    }
    public setDni(value: string) {
        this._dni = value;
    }
    public setCumpleaños(value: string) {
        this._cumpleaños = value;
    }
    public setColorFavorito(value: string) {
        this._colorFavorito= value;
    }
    public setSexo(value: string) {
        this._sexo = value;
    }
    public setDirecciones(value: Direccion[]) {
        this._direcciones = value;
    }
    public setMails(value: Mail[]) {
        this._mails = value;
      }
    public setTelefonos(value: Telefono[]) {
        this._telefonos = value;
    }
    public setNotas(value: string) {
        this._notas = value;
    }
}