import Express from "express";
import Routers from "./routes";
import Cors from "cors" ;

import Database from "./models";

export default class App {
    public server;
    private router: Routers;

    constructor(){
        this.server= Express();
        this.router = new Routers();

        this.middleware();
    }

    private middleware(){
        this.server.use(Express.json());
        this.server.use(Cors())
    }

    private routes(){        
        this.server.use(this.router.init());
    }

    public async run(): Promise<void> {
        await Database.getConnection();
        this.routes();
    }
}