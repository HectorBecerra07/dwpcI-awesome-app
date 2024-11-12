// Importando el modulo http
import http from 'http';
// Importando Express
import express from 'express';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Ruta about
// GET /about
app.use('/about',(req, res)=>{
  ...
  });
  
  // GET '/add-product'
  app.use('/add-product', (req, res, next) => {
    // Si la petición es post pasamos el siguiente
    // Middleware
    if(req.method === "POST") return next();
  
    // Servimos el formulario
    console.log("📢 Sirviendo formulario...");
    res.send(`
    <form action="/add-product" method="POST">
      <label>
        Ingresar Nombre
        <input type="text" name="title">
      </label>
      <button type="submit">Add product</button>
    </form>
    `);
  });

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});