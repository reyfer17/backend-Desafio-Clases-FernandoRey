class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
       return this.mascotas.length
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
    }
    
    getBookNames(){
        return this.libros.map(libro => libro.nombre)
    }
}

let Fer = new Usuario ("Fernando", "Rey", [],[])

console.log (Fer.getFullName())
Fer.addMascota("perro")
Fer.addMascota("gato")
Fer.addMascota("hamster")
Fer.addBook("Antifragil","Nassim Taleb")
Fer.addBook("El cisne Negro","Nassim Taleb")
console.log(Fer.countMascotas())
console.log(Fer.getBookNames())