// Importando el modulo http
import http from 'http';
// Importando Express
import express from 'express';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

app.use('/add-product', (req, res, next)=>{
  // Si la petición es post pasamos al sig middleware
  if(req.method === 'POST') return next();

  // Servir el formulario
  console.log('📢 Sirviendo Fomrulario...');
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
// POST '/add-product'
app.use('/add-product', (req, res)=>{
  // Realizaremos la extracción de
  // parametros dentro de la peticion
  for(const prop in req){
    console.log(`Prop: ${prop}`);
  }
  return res.redirect('/');
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});