
// loop to create div elements for each picture
// indended to accommodate loading URLs from JSON
for (let i = 0; i <= 3; i++) {

  // new div element which gets a unique id
  const div = document.createElement('div')
  div.setAttribute("id", `div${i}`)
  // append the new div to the slides container
  document.getElementById('slides-container').appendChild(div)
  // create img element with attributes and append to parent div
  const picture = document.createElement("img");
    picture.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/0/0d/Bicycle.svg");
    picture.setAttribute("height", "260");
    picture.setAttribute("width", "440");
    picture.setAttribute("alt", "bike");
    document.getElementById(`div${i}`).appendChild(picture);

}
