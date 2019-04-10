/**
 * Classe para modelar uma banda de musica
 */
export default class band {
    constructor(name,genre,photo,description,videoclip) {
        this.name = name
        this.genre = genre
        this.photo = photo
        this.description = description
        this.videoclip = videoclip
    }
}