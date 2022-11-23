let margin_top = 50;
let margin_venstre = 50;

let pressed = false;
let genererknapp = () => {
  let button = document.createElement('button');
  button.innerText = 'halla';
  button.style.position = 'absolute';
  button.style.top = margin_top + 'px';
  button.style.left = margin_venstre + 'px';
  document.body.appendChild(button);

  if (!pressed) {
    button.onclick = () => {
      let div = document.createElement('div');
      button.style.display = 'none';
      margin_venstre = 100;
      margin_top = 100;
      div.style.color = 'white';
      document.body.appendChild(div);

      document.addEventListener('mousemove', (event) => {
        div.innerText = `Mus X: ${event.clientX}, Mus Y: ${event.clientY}`;
      });
      genererknapp();
    };
  }
  pressed = true;
};

setTimeout(genererknapp, 2000);

let farge = () => {
  setInterval(() => {
    document.body.style.backgroundColor = `rgb(0, 0, ${Math.floor(
      Math.random() * 255
    )})`;
  }, 1000);
};
farge();
