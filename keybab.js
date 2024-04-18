
console.log(tones);

function trouveNotes() {
  let note = document.getElementById("note").value;
  let mode = document.getElementById("mode").value;
  console.log(note, mode);
  let ligne = tones[note][mode];
  console.log(ligne);

  document.getElementById("result").innerHTML =
    "<tr style='border: 1px solid black;'><td>" +
    ligne.join("</td><td >") +
    "</td></tr>";
}