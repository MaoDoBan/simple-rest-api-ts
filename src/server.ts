import { app } from "./app";

const porta = process.env.PORT || 3000;

const server = app.listen(porta, () => console.log(`App ouvindo na porta ${porta}`));

//quando o processo foi morto
process.on("SIGINT", () => {
  server.close();
  console.log("App foi de Drake e Josh!");
});