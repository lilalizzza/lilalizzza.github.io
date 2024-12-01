var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('¡INGENIERA EN CIENCIAS DE LA COMPUTACIÓN!')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Todos los días son buenos para aprender algo')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Thanks for visit:))')
    .pauseFor(1500)
    .start();