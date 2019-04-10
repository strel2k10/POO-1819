import Band from "./band.js"
import User from "./user.js";

// Array de bandas
export const bands = []
const band1 = new Band("Muse", "Pop-Rock", "http://specials-images.forbesimg.com/imageserve/577febc24bbe6f31cdfaf49c/416x416.jpg?background=000000&cropX1=0&cropX2=744&cropY1=21&cropY2=765","XXX","YYY")
const band2 = new Band("Radiohead", "Pop-Rock", "https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/radiohead_hero_688547436.jpg?itok=tcnCxZ6t","XXX","YYY")
const band3 = new Band("Metálica", "Metal", "https://www.rollingstone.com/wp-content/uploads/2018/09/metallica-whiskey.jpg?crop=900:600&width=440","XXX","YYY")
const band4 = new Band("James", "Pop-Rock", "https://cdn.images.express.co.uk/img/dynamic/35/590x/-524294.jpg","XXX","YYY")
bands.push(band1,band2,band3,band4)

// Array de utilizadores
export const users = []
const user1 = new User("Tiago",124)
const user2 = new User("Pedro",124)
const user3 = new User("Gaspar",124)
users.push(user1,user2,user3)