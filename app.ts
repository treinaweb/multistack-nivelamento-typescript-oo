import { Cliente } from "./src/classes/cliente.js";
import { Diarista } from "./src/classes/diarista.js";

let diarista = new Diarista("Paulo", 1170707070, "Av. Paulista - 123");
diarista.chavePix = 'chave@chave';
let cliente = new Cliente("Bruna", 1170707070, "Av. Faria Lima - 123");

console.log(diarista);
diarista.atenderDiarista("Bruna");

console.log(cliente);
