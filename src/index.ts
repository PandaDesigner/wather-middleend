import { ServerFactory } from './factories/ServerFactory';

try {
    const server = ServerFactory.createServer('express');
    server.start();
} catch (error) {
    console.error('Error al iniciar el servidor:', error);
}
