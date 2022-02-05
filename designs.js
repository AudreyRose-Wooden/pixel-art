let tableRef = document.getElementById('pixelCanvas');

const form = document.getElementById('sizePicker');
const picker = document.getElementById('colorPicker');

let pickedColor = picker.value;
let tableFrag = new DocumentFragment();

form.addEventListener("submit", event => {
  event.preventDefault();
  return makeGrid();
});

//sets the color to the one picked by input
picker.addEventListener("change", event => {
  pickedColor = picker.value;
  return pickedColor;
});

function makeGrid() {
  let tableHeight = document.getElementById('inputHeight').value;
  let tableWidth = document.getElementById('inputWidth').value;

  // clears grid on creation
  tableRef.innerHTML = "";

  //sets rows and cells based on user input
  for (let row=0; row<tableHeight; row++) {
    const tr = document.createElement('tr');
    for (let col=0; col<tableWidth; col++){
      const td = document.createElement('td');
      td.addEventListener("click", function(event){
        event.target.style.backgroundColor = pickedColor;
      });
      tr.append(td);
    }
    tableFrag.append(tr);
  }
  tableRef.append(tableFrag);
}
