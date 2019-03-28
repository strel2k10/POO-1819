// Definir array para filmes

const movies = [];
// Definir o máximo par a caixa de texto do ano
document.querySelector("#txtYear").max = new Date().getFullYear()

// Definir um listener para o butão de submissão do formulário

const myForm = document.querySelector("form")
myForm.addEventListener("submit", function(event) {
   // 1. Obter os valores de todos os elementos do formulário
    const txtTitle = document.querySelector("#txtTitle").value
    const sltGenre = document.querySelector("#sltGenre").value
    const txtYear = document.querySelector("#txtYear").value
    const txtCover = document.querySelector("#txtCover").value
    const txtTrailer = document.querySelector("#txtTrailer").value

// 2. Verificar se o filme já existe no array
const result = isMovie(txtTitle);
if (result === true) {
    alert("Filme existente!!");
}
    else {
        // 3. Criar um objeto
        const newMovie = {
            title: txtTitle,
            genre: sltGenre,
            year: txtYear,
            cover: txtCover,
            trailer: txtTrailer
        }

        // 4. Guardar o objeto no array
        movies.push(newMovie)
        // OU movies[movies.length] = newMovie
    }
// 5. Exibir os filmes na tabela
    renderTable();
 // prevenir o submit
 event.preventDefault();
          
})

// Fecho da janela da capa do filme
const btnCloseCover = document.querySelector("#btnCloseCover")
btnCloseCover.addEventListener("click", function() {
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.close();
})

// ###################################################### Funções #####################
// Função que vai verificar se um titulo de filme já existe no array
function isMovie(txtTitle) {
    for (const movie of movies) {
       if (movie.title === txtTitle) {
            return true;           
       }         
    }
    return false;
}

// Função responsável por exibir todos os filmes do array na tabela HTML
function renderTable() {
    // obter a referência da tabela
    const myTable = document.querySelector("table")

    // injetar a tabela 
    myTable.innerHTML = `
        <tr>
            <th>TITULO</th>
            <th>GENERO</th>
            <th>OPÇÕES</th>
        </tr>
    `

    // Exibir todos os filmes em linhas independentes / Percorrer todo o array e injetar cada objeto movie como uma nova linha da tabela    
    for (const movie of movies) {
        myTable.innerHTML += `
        <tr>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>
                <button onclick="showCover('${movie.cover}')">VER CAPA</button>
                <button onclick="showTrailer('${movie.trailer}')">VER TRAILER</button>
                <button onclick="removeMovie('${movie.title}')">REMOVER FILME</button>
            </td>
        </tr>
    `
    }

}

// Função para exibir uma janela modal com a imagem da capa do filme
function showCover(cover) {
    
        const dlgCover = document.querySelector("#dlgCover")
        const imgCover = document.querySelector("#imgCover")
        imgCover.src = cover
        dlgCover.showModal()
    

    // Função vai remover um filme dado o seu titulo
    for (let i = 0; i<movies.length; i++) {
        if (movies[i].title === title) {
            // remover o filme
            movies.splice(i,1)
            
        }
        
    }
    renderTable();  
   
}
    