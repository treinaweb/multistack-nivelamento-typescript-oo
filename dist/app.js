import { Cliente } from "./src/classes/cliente.js";
import { Externo } from "./src/namespace/cliente.js";
/* let diarista = new Diarista("Paulo", 1170707070, "Av. Paulista - 123");
diarista.chavePix = 'chave@chave';
diarista.chavePix = 'chave@chave2';
let cliente = new Cliente("Bruna", 1170707070, "Av. Faria Lima - 123");

console.log(diarista);
diarista.atenderDiarista("Bruna"); */
/* console.log(cliente); */
/* let diaria = new Diaria('10/02/2025', 5, 100);
diaria.definirvalor(500)
console.log(diaria); */
var cliente = new Cliente('paulo', 12323, 'av paulista');
var clienteExterno = new Externo.Cliente();
clienteExterno.autorizado = true;
console.log(cliente);
console.log(clienteExterno);
