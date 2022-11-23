// Retrieve the needed HTML elements:
let colorSelection = document.getElementById('colorSelection');
let tykkelseSelection = document.getElementById('tykkelseSelection');
let drawingBoard = document.getElementById('drawingBoard');

// Associate color names to RGB values
let colors = {
  Red: 'rgb(255, 0, 0)',
  White: 'rgb(255, 255, 255)',
  Black: 'rgb(0, 0, 0)',
  Blue: 'rgb(0, 0, 255)',
  Yellow: 'rgb(255, 255, 0)',
  Green: 'rgb(0, 255, 0)',
};

let tykkelse = {
  Smal: '5px',
  Normal: '20px',
  Tjukk: '40px',
};

// The drawingBoard squares will be stored in this table for later use:
let squares = [];

// Create the drawingBoard squares:
for (let i = 0; i < 600; i++) {
  // Create new drawingBoard square
  let square = document.createElement('div');

  square.style.height = tykkelse[tykkelseSelection.value];
  square.style.width = tykkelse[tykkelseSelection.value];
  square.style.float = 'left';
  square.style.backgroundColor = colors['White'];

  square.onclick = (event) => {
    // Set color of square to selected color
    square.style.backgroundColor = colors[colorSelection.value];
  };

  // Funksjon som lar brukeren tegne i tegnebrettet så lenge venstre
  // museknapp er trykket ned. Likner veldig på funksjonen over, bare
  // at vi bruker .onmouseover, og en event listener som sjekker om
  // knappen er trykket ned
  square.onmouseover = (event) => {
    // If-setningen sjekker om venstre museknapp er trykket ned
    if (event.buttons == 1) {
      // Fargeleggingen fungerer på samme måte som i den originale funksjonen
      square.style.backgroundColor = colors[colorSelection.value];
    }
  };

  // Add square as child to drawingBoard element
  drawingBoard.appendChild(square);
  // Add square to squares table
  squares.push(square);
}

// Bruker Forof-løkke til å gå gjennom alle elementene i arrayen
// squares, for så å sette alle elementene til fargen hvit
viskUt.onclick = () => {
  for (const square of squares) {
    square.style.backgroundColor = colors['White'];
  }
};

// Bruker Forof-løkke til å gå gjennom alle elementene i arrayen
// squares, for så å sette alle elementene lik fargen brukeren
// valgte fra nedtrekkslisten
fyllHele.onclick = () => {
  for (const square of squares) {
    square.style.backgroundColor = colors[colorSelection.value];
  }
};
