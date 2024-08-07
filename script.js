// CRUD
// Crear  Leer  Actualizar  Borrar


let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto
// Acciones se distinguen por los parentésis

typewriter
  .pauseFor(2500)
  .typeString('Fani, creadora de Musica Para Estudiantes')
  .pauseFor(300)
  .deleteAll()
  .typeString('Impulsora del arte')
  .pauseFor(1000)
  .start();