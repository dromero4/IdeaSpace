import React, { useEffect } from 'react';

const WebSocketClient = () => {
    useEffect(() => {
        // Crear la conexión WebSocket
        const socket = new WebSocket('ws://localhost:8180');

        // Manejar eventos de WebSocket
        socket.onopen = () => {
            console.log('Conectado al servidor WebSocket');
        };

        socket.onmessage = (event) => {
            console.log('Mensaje del servidor:', event.data);
        };

        socket.onclose = () => {
            console.log('Desconectado del servidor WebSocket');
        };

        // Limpiar la conexión cuando el componente se desmonte
        return () => {
            socket.close();  // Cerrar la conexión WebSocket
            console.log('Conexión WebSocket cerrada');
        };
    }, []); // El efecto se ejecuta solo una vez, cuando el componente se monta

    return <div>Conexión WebSocket activa</div>;
};

export default WebSocketClient;
