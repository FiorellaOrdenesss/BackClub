// seedAlbums.js
const sequelize = require("./config/db");
const Album = require("./models/album");

const albums = [
    { title: "Gulp!", year: 1985 },
    { title: "Oktubre", year: 1986 },
    { title: "Un baión para el ojo idiota", year: 1987 },
    { title: "¡Bang! ¡Bang!... Estás liquidado", year: 1989 },
    { title: "La mosca y la sopa", year: 1991 },
    { title: "Lobo Suelto, Cordero atado (Vol. 1)", year: 1993 },
    { title: "Lobo Suelto, Cordero atado (Vol. 2)", year: 1993 },
    { title: "Luzbelito", year: 1996 },
    { title: "Último bondi a Finisterre", year: 1998 },
    { title: "Momo Sampler", year: 2000 },
];

(async () => {
    try {
        await sequelize.sync({ force: true }); // ⚠️ Borra y recrea tablas
        await Album.bulkCreate(albums);
        console.log("Seeder ejecutado: álbumes insertados");
        process.exit();
    } catch (err) {
        console.error("Error al ejecutar seeder:", err);
        process.exit(1);
    }
})();
