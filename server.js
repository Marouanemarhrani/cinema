const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const socket = require("socket.io");

// Import des routes
const userRoutes = require('./routes/userRoutes.js');
const cinemaRoutes = require('./routes/cinemaRoutes.js');
const movieRoutes = require('./routes/movieRoutes.js');
const reservationRoutes = require('./routes/reservationRoutes.js');
const eventRoutes = require('./routes/eventRoutes.js')

require("dotenv").config();

// Configuration des options CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,  // Autorise les cookies
};

// Utilisation de CORS avec les options spécifiées
app.use(cors(corsOptions));
app.use(express.json());

// Utilisation des routes
app.use('/api/users', userRoutes);
app.use('/api/cinemas', cinemaRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/events', eventRoutes);

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données MongoDB réussie");
  })
  .catch((err) => {
    console.error("Erreur lors de la connexion à MongoDB :", err.message);
  });

// Démarrage du serveur et configuration de Socket.io
const server = app.listen(process.env.PORT, () =>
  console.log(`Serveur démarré sur le port ${process.env.PORT}`)
);

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
