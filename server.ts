import app from "./src/app.js";

const PORTA = 3001;

app.listen(PORTA, () => {
  console.log(`Servidor executando em http://localhost:${PORTA}`);
});