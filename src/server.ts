import App from "./app";

const app = new App();
app.run()
app.server.listen(process.env.PORT || 3000);