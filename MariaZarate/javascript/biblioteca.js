let biblioteca = [
  {titulo: "Don Quijote", autor: "Miguel de Cervantes", paginas: 1056, prestado: false, genero: "Novela", publicado: 1605},
  {titulo: "1984", autor: "George Orwell", paginas: 328, prestado: false, genero: "Ciencia ficción", publicado: 1949},
  {titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417, prestado: true, genero: "Realismo mágico", publicado: 1967},
  {titulo: "En busca del tiempo perdido", autor: "Marcel Proust", paginas: 4215, prestado: true, genero: "Novela", publicado: 1913},
  {titulo: "Ulises", autor: "James Joyce", paginas: 730, prestado: false, genero: "Modernismo", publicado: 1922},
];

//forEach - Utiliza el método .forEach() para imprimir todos los títulos de los libros y sus autores en la consola en un formato bonito.
let biblioContainer = document.getElementById("biblioteca")

biblioteca.forEach(libro => {
  let libroItem = document.createElement("li");

  libroItem.textContent = `Título del libro: ${libro.titulo}, Autor del libro: ${libro.autor}`;
  biblioContainer.appendChild(libroItem);
})

//filter - Utiliza el método .filter() para crear un nuevo array que solo contenga los libros que están actualmente prestados.
let biblioPrestado = document.getElementById("prestados")

const disponible = biblioteca.filter(libro => libro.prestado === true);

disponible.forEach(libro =>{
  var libroPrestado = document.createElement("li");

  libroPrestado.textContent = `Título del libro: ${libro.titulo}, Autor: ${libro.autor}, prestado: ${libro.prestado}`;

  biblioPrestado.appendChild(libroPrestado);
});


//find - Utiliza el método .find() para buscar un libro por su título.
let biblioTitulo = document.getElementById("titulo")

const buscarTitulo = biblioteca.find(libro => libro.titulo === 'Ulises');

if (buscarTitulo){
  let libroTitulo = document.createElement("p");

  libroTitulo.textContent = `Título del libro: ${buscarTitulo.titulo}, Autor: ${buscarTitulo.autor}`

  biblioTitulo.appendChild(libroTitulo)

} else {
  let mensajeError = document.createElement("p")

  mensajeError.textContent = "No se encontró el libro"

  biblioContainer.appendChild(mensajeError);
};


//sort - Utiliza el método .sort() para ordenar los libros por el número de páginas, de menor a mayor.

biblioteca.sort((a, b) => a.paginas - b.paginas);
    
var paginas = document.getElementById("ascendente");

biblioteca.forEach(libro => {
  var pagina = document.createElement("li");
  pagina.textContent = `Título del libro: ${libro.titulo}, Autor: ${libro.autor}, páginas: ${libro.paginas}`;
  paginas.appendChild(pagina);
});

// Crear una clase 

class Biblioteca {
  libros = [];
  constructor (libros){
    this.libros = libros;
  }

  showBooks(){
    this.libros.forEach((libro) => {
      console.log(libro);
    })
  }

  addBook(titulo, autor, paginas){
    this.libros.push({titulo, autor, paginas});
  }
}

const bibliotecaCentral = new biblioteca(biblioteca)
bibliotecaCentral.showBooks()
bibliotecaCentral.addBook({
  titulo: "Ulises",
  autor: "James Joyce",
  paginas: 742,
});


//orientada a funciones

const showBook = (libros) => {
  libros.forEach((libro)=>{
    console.log(libro);
  });
};

showBook(biblioteca);