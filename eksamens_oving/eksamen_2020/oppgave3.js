let visKlokkeSlett = () => {
  let div = document.createElement('div');
  setInterval(() => {
    let klokke = new Date().toLocaleTimeString();
    div.innerText = klokke;
    document.body.appendChild(div);
  }, 1000);
};

let genererKnapp = () => {
  let button = document.createElement('button');
  document.body.appendChild(button);
  button.innerText = 'Bytt bakgrunnsfarge';

  let pressed = false;
  button.onclick = () => {
    if (!pressed) {
      document.body.style.backgroundColor = 'red';
      pressed = true;
    } else {
      document.body.style.backgroundColor = 'white';
      pressed = false;
    }
  };
};

setTimeout(genererKnapp, 2000);
