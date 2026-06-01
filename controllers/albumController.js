const Album = require("../models/album");

exports.createAlbum = async (req, res) => {
    const { title, year } = req.body;
    try {
        const album = await Album.create({ title, year });
        res.json({ msg: "Álbum creado", album });
    } catch (err) {
        res.status(500).json({ msg: "Error al crear álbum", error: err.message });
    }
};

exports.getAlbums = async (req, res) => {
    try {
        const albums = await Album.findAll();
        res.json(albums);
    } catch (err) {
        res.status(500).json({ msg: "Error al obtener álbumes", error: err.message });
    }
};
