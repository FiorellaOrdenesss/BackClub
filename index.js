<<<<<<< HEAD
// ESTO ES MAIN, CUIDADO CON LOS CAMBIOS
=======
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const user = require("./models/user");
const albumRoutes = require("./routes/alb");


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/albums", albumRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

sequelize.sync({ alter: true }).then(() => {
    console.log("Base de datos sincronizada");
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
});

>>>>>>> fio
