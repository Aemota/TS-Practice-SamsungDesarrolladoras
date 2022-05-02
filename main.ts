import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Persona } from "./persona";
import { Telefono } from "./telefono";

// instanciamos direccion, mail y teléfono para pasárselo a las variables   "Alberto, Sonia y Maria" (definidas posteriormente) y usarlas en el  "REGISTRO DE PERSONAS"

// para Alberto : direccion, mail y telefeno
let dire1 = new Direccion ("Lope de Rueda", 1, 6, "B", 29190, "Malaga", "Malaga");
let mail1 = new Mail ("personal", "albert@gmail.com");
let tf1 = new Telefono ("fijo", 952112233);

// para Sonia :  direccion, mail y telefeno //

let dire2 = new Direccion ("Alameda", 2, 3, "A", 29001, "Malaga", "Malaga");
let mail2 = new Mail ("personal", "sonia@gmail.com");
let tf2 = new Telefono ("fijo", 952223344);

// para María :  direccion, mail y telefeno //

let dire3 = new Direccion ("Juan de Padilla", 0, 1, "C", 29003, "Malaga", "Malaga");
let mail3 = new Mail ("personal", "Maria@hotmail.com");
let tf3 = new Telefono ("fijo", 952334455);

// ---------------- REGISTRO DE PERSONAS ------------------- //

console.log("REGISTROS PRINCIPALES: ");

let Alberto = new Persona ("Alberto", "López Mendez", 29, "76112233-L", "01/02/1993", "azul", "hombre", [dire1], [mail1], [tf1], "nota1");
    console.log(Alberto);
    
let Sonia = new Persona ("Sonia", "Salgado Perez", 30, "25223344-K", "02/03/1992", "amarillo", "mujer", [dire2], [mail2], [tf2], "nota2");
    console.log(Sonia);

let Maria = new Persona ("María", "Rodríguez Paez", 31, "71334455-J", "03/03/1991", "negro", "mujer", [dire3], [mail3], [tf3], "nota3");
    console.log(Maria);

// Nueva dirección, mail y teléfono para modificar un registro //

let direMod1 = new Direccion ("Calle Hilera", 3, 5, "A", 29000, "Malaga", "Malaga");
let mailMod1 = new Mail ("trabajo", "albertTrabajo@gmail.com");
let tfMod1 = new Telefono ("móvil", 662112233);

// Usamos los setters para realizar la modificación de "Alberto" // 

Alberto.setDirecciones([direMod1])
Alberto.setMails([mailMod1]) 
Alberto.setTelefonos([tfMod1])  

// Por último, se declara el condicional para cambiar el registro de un DNI encontrado // 

if (Alberto.getDni() == "76112233-L")
{   
    console.log("El DNI buscado es: " + Alberto.getDni() + " y pertenece a " + Alberto.getNombre());
    console.log("Modificación del registro de " + Alberto.getNombre() + ":");
    console.log(Alberto);
}
else
{
    console.log("El DNI instroducido no se ha encontrado");
}
