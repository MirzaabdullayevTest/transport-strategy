import Server from "./server/server";
import ConfigImpl from "./config/config";
import Config from "./config/types";

(function (){
    const config: Config = ConfigImpl.getConfig()
    const server = new Server(config)
    server.connect()
})()