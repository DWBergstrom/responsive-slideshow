// image info object
const imageInfo = [
      {
        "url": "./images/autumn-1280.png",
        "name": "autumn-1280.png",
        "thumbnail": "./images/thumbnails/autumn-1280_tn.png"
      },
      {
        "url": "./images/black-forest-1920.png",
        "name": "black-forest-1920.png",
        "thumbnail": "./images/thumbnails/black-forest-1920_tn.png"
      },
      {
        "url": "./images/boat-1920.png",
        "name": "boat-1920.png",
        "thumbnail": "./images/thumbnails/boat-1920_tn.png"
      },
      {
        "url": "./images/branches.svg",
        "name": "branches.svg",
        "thumbnail": "./images/thumbnails/branches_tn.png"
      },
      {
        "url": "./images/dawn-1920.png",
        "name": "dawn-1920.png",
        "thumbnail": "./images/thumbnails/dawn-1920_tn.png"
      },
      {
        "url": "./images/evening-1280.png",
        "name": "evening-1280.png",
        "thumbnail": "./images/thumbnails/evening-1280_tn.png"
      },
      {
        "url": "./images/evening-sky-1920.png",
        "name": "evening-sky-1920.png",
        "thumbnail": "./images/thumbnails/evening-sky-1920_tn.png"
      },
      {
        "url": "./images/forest-1920.png",
        "name": "forest-1920.png",
        "thumbnail": "./images/thumbnails/forest-1920_tn.png"
      },
      {
        "url": "./images/hills-1920.png",
        "name": "hills-1920.png",
        "thumbnail": "./images/thumbnails/hills-1920_tn.png"
      },
      {
        "url": "./images/landscape-1-1920.png",
        "name": "landscape-1-1920.png",
        "thumbnail": "./images/thumbnails/landscape-1-1920_tn.png"
      },
      {
        "url": "./images/landscape-2-1920.png",
        "name": "landscape-2-1920.png",
        "thumbnail": "./images/thumbnails/landscape-2-1920_tn.png"
      },
      {
        "url": "./images/landscape-3-1920.png",
        "name": "landscape-3-1920.png",
        "thumbnail": "./images/thumbnails/landscape-3-1920_tn.png"
      },
      {
        "url": "./images/landscape-4-1920.png",
        "name": "landscape-4-1920.png",
        "thumbnail": "./images/thumbnails/landscape-4-1920_tn.png"
      },
      {
        "url": "./images/road-1920.png",
        "name": "road-1920.png",
        "thumbnail": "./images/thumbnails/road-1920_tn.png"
      },
      {
        "url": "./images/scotland-1920.png",
        "name": "scotland-1920.png",
        "thumbnail": "./images/thumbnails/scotland-1920_tn.png"
      },
      {
        "url": "./images/tree-1.svg",
        "name": "tree-1.svg",
        "thumbnail": "./images/thumbnails/tree-1_tn.png"
      },
      {
        "url": "./images/tree-2.svg",
        "name": "tree-2.svg",
        "thumbnail": "./images/thumbnails/tree-2_tn.png"
      },
      {
        "url": "./images/tree-3.svg",
        "name": "tree-3.svg",
        "thumbnail": "./images/thumbnails/tree-3_tn.png"
      },
      {
        "url": "./images/trees-1920.png",
        "name": "trees-1920.png",
        "thumbnail": "./images/thumbnails/trees-1920_tn.png"
      },
      {
        "url": "./images/yellowstone-1920.png",
        "name": "yellowstone-1920.png",
        "thumbnail": "./images/thumbnails/yellowstone-1920_tn.png"
      },
      {
        "url": "./images/zion-1920.png",
        "name": "zion-1920.png",
        "thumbnail": "./images/thumbnails/zion-1920_tn.png"
      }
    ]

// loop to create div elements for a thumbnail of each picture
// indended to accommodate loading URLs from JSON
for (let i = 0; i < imageInfo.length; i++) {
  // new div element which gets a unique id
  let div = document.createElement('div')
  div.setAttribute('id', `slide-${i}`)
  // append the new div to the thumbnail container
  document.getElementById('thumbs-container').appendChild(div)
  // create img element with attributes and append to parent div
  let thumbnail = document.createElement('img')
  let imgUrl = imageInfo[i].url
  let thumbUrl = imageInfo[i].thumbnail
  let imgAlt = imageInfo[i].name
  thumbnail.setAttribute('src', `${thumbUrl}`)
  thumbnail.setAttribute('height', 'auto')
  thumbnail.setAttribute('width', '100%')
  thumbnail.setAttribute('alt', `${imgAlt}`)
  thumbnail.setAttribute('class', 'thumbnail')
  thumbnail.addEventListener('click', () => {
    let currentSlide = document.getElementById('current-selected-slide')
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', `${i}`)
  })
  document.getElementById(`slide-${i}`).appendChild(thumbnail)
}

let currentSlide = document.getElementById('current-selected-slide')
let slideOne = imageInfo[0].url
currentSlide.setAttribute('src', `${slideOne}`)
currentSlide.setAttribute('data-slide', 0)

// function for button to cycle to right through images
function cycleRight() {
  // get the current picture and its data id
  let currentSlide = document.getElementById('current-selected-slide')
  let slideId = parseInt(currentSlide.getAttribute('data-slide'))
  if (slideId === null) {
    let selectMessage = document.createElement('h2')
    selectMessage.innerHTML = 'Please select an image'
    document.getElementById('current-slide-div').appendChild(selectMessage)
  } else if (slideId === imageInfo.length - 1) { // if at furthest right image, cycle back to beginning
    let imgUrl = imageInfo[0].url
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', 0)
  } else { // for all others, move up one index in the array of image urls
    let imgUrl = imageInfo[slideId + 1].url
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', slideId + 1)
  }
}

// function for button to cycle to left through images
function cycleLeft() {
  // get the current picture and its data id
  let currentSlide = document.getElementById('current-selected-slide')
  let slideId = parseInt(currentSlide.getAttribute('data-slide'))
  if (slideId === null) {
    let selectMessage = document.createElement('h2')
    selectMessage.innerHTML = 'Please select an image'
    document.getElementById('current-slide-div').appendChild(selectMessage)
  } else if (slideId === 0) { // if at furthest left image, cycle back to beginning
    let imgUrl = imageInfo[imageInfo.length - 1].url
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', imageInfo.length - 1)
  } else { // for all others, move down one index in the array of image urls
    let imgUrl = imageInfo[slideId - 1].url
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', slideId - 1)
  }
}
