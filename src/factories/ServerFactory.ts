import { ExpressServer } from "../server/ExpressServer";


export class ServerFactory {
    public static createServer(type: string): ExpressServer {
        switch (type.toLowerCase()) {
            case "express":
                return new ExpressServer();

            default:
                throw new Error("Tipo de servidor no soportado");
        }
    }
}