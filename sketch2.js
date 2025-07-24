let notes2 = [];
let noteSymbols = ['♪', '♫'];

let s2 = (p) => {
  p.setup = function () {
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('sketch-container-2');
    p.textFont('Arial');
    p.textAlign(p.CENTER, p.CENTER);

    // Crear muchas notas saliendo de los lados
    for (let i = 0; i < 60; i++) {
      let fromLeft = p.random() < 0.5;
      let x = fromLeft ? -50 : p.width + 50;
      let y = p.random(p.height);
      let speedX = fromLeft ? p.random(1, 2.5) : p.random(-2.5, -1);
      let speedY = p.random(-0.3, 0.3);
      let size = p.random(24, 40);
      let colorOptions = ['#FF0000', '#FFFFFF', '#000000']; // rojo, blanco, negro
      let color = p.random(colorOptions);
      let symbol = p.random(noteSymbols);

      notes2.push({ x, y, speedX, speedY, size, color, symbol });
    }
  };

  p.draw = function () {
    p.clear();
    notes2.forEach((note) => {
      note.x += note.speedX;
      note.y += note.speedY;

      p.fill(note.color);
      p.noStroke();
      p.textSize(note.size);
      p.text(note.symbol, note.x, note.y);

      // Reaparece cuando sale de pantalla
      if (note.x < -100 || note.x > p.width + 100) {
        let fromLeft = note.speedX > 0;
        note.x = fromLeft ? -50 : p.width + 50;
        note.y = p.random(p.height);
      }
    });
  };
};

new p5(s2);