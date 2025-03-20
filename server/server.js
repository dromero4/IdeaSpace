import { WebSocketServer } from 'ws';
import express from 'express';
import cors from 'cors';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

// Definir __dirname manualmente en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Servir archivos estáticos desde la carpeta "dist"
const publicPath = path.join(__dirname, "../dist");
app.use(express.static(publicPath));

// Servidor HTTP + WebSocket
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const PORT = 8180;

wss.on("connection", (ws) => {
    console.log("Cliente conectado");

    ws.on("message", (message) => {
        console.log("Mensaje recibido:", message.toString());

        // Enviar mensaje a todos los clientes conectados
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on("close", () => console.log("Cliente desconectado"));
});

// Redirigir cualquier otra ruta al "index.html"
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

// Iniciar servidor en puerto 8180
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
