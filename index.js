// image info array, containing urls, names and thumbnail urls
const imageInfo = [
      {
        "url": "./images/autumn-1280.png",
        "name": "autumn-1280.png",
        "thumbnail": "./images/thumbnails/autumn-1280_tn.png",
        "caption": "Autumn"
      },
      {
        "url": "./images/black-forest-1920.png",
        "name": "black-forest-1920.png",
        "thumbnail": "./images/thumbnails/black-forest-1920_tn.png",
        "caption": "Black Forest"
      },
      {
        "url": "./images/boat-1920.png",
        "name": "boat-1920.png",
        "thumbnail": "./images/thumbnails/boat-1920_tn.png",
        "caption": "Boat in Sunset"
      },
      {
        "url": "./images/branches.svg",
        "name": "branches.svg",
        "thumbnail": "./images/thumbnails/branches_tn.png",
        "caption": "Branches"
      },
      {
        "url": "./images/dawn-1920.png",
        "name": "dawn-1920.png",
        "thumbnail": "./images/thumbnails/dawn-1920_tn.png",
        "caption": "Dawn"
      },
      {
        "url": "./images/evening-1280.png",
        "name": "evening-1280.png",
        "thumbnail": "./images/thumbnails/evening-1280_tn.png",
        "caption": "Evening"
      },
      {
        "url": "./images/evening-sky-1920.png",
        "name": "evening-sky-1920.png",
        "thumbnail": "./images/thumbnails/evening-sky-1920_tn.png",
        "caption": "Evening Sky"
      },
      {
        "url": "./images/forest-1920.png",
        "name": "forest-1920.png",
        "thumbnail": "./images/thumbnails/forest-1920_tn.png",
        "caption": "Forest"
      },
      {
        "url": "./images/hills-1920.png",
        "name": "hills-1920.png",
        "thumbnail": "./images/thumbnails/hills-1920_tn.png",
        "caption": "Hills"
      },
      {
        "url": "./images/landscape-1-1920.png",
        "name": "landscape-1-1920.png",
        "thumbnail": "./images/thumbnails/landscape-1-1920_tn.png",
        "caption": "Landscape One"
      },
      {
        "url": "./images/landscape-2-1920.png",
        "name": "landscape-2-1920.png",
        "thumbnail": "./images/thumbnails/landscape-2-1920_tn.png",
        "caption": "Landscape Two"
      },
      {
        "url": "./images/landscape-3-1920.png",
        "name": "landscape-3-1920.png",
        "thumbnail": "./images/thumbnails/landscape-3-1920_tn.png",
        "caption": "Landscape Three"
      },
      {
        "url": "./images/landscape-4-1920.png",
        "name": "landscape-4-1920.png",
        "thumbnail": "./images/thumbnails/landscape-4-1920_tn.png",
        "caption": "Landscape Four"
      },
      {
        "url": "./images/road-1920.png",
        "name": "road-1920.png",
        "thumbnail": "./images/thumbnails/road-1920_tn.png",
        "caption": "Road"
      },
      {
        "url": "./images/scotland-1920.png",
        "name": "scotland-1920.png",
        "thumbnail": "./images/thumbnails/scotland-1920_tn.png",
        "caption": "Scotland"
      },
      {
        "url": "./images/tree-1.svg",
        "name": "tree-1.svg",
        "thumbnail": "./images/thumbnails/tree-1_tn.png",
        "caption": "Tree One"
      },
      {
        "url": "./images/tree-2.svg",
        "name": "tree-2.svg",
        "thumbnail": "./images/thumbnails/tree-2_tn.png",
        "caption": "Tree Two"
      },
      {
        "url": "./images/tree-3.svg",
        "name": "tree-3.svg",
        "thumbnail": "./images/thumbnails/tree-3_tn.png",
        "caption": "Tree Three"
      },
      {
        "url": "./images/trees-1920.png",
        "name": "trees-1920.png",
        "thumbnail": "./images/thumbnails/trees-1920_tn.png",
        "caption": "Trees"
      },
      {
        "url": "./images/yellowstone-1920.png",
        "name": "yellowstone-1920.png",
        "thumbnail": "./images/thumbnails/yellowstone-1920_tn.png",
        "caption": "Yellowstone"
      },
      {
        "url": "./images/zion-1920.png",
        "name": "zion-1920.png",
        "thumbnail": "./images/thumbnails/zion-1920_tn.png",
        "caption": "Zion"
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
  // extract info from imageInfo array
  let imgUrl = imageInfo[i].url
  let thumbUrl = imageInfo[i].thumbnail
  let imgAlt = imageInfo[i].name
  thumbnail.setAttribute('src', `${thumbUrl}`)
  thumbnail.setAttribute('height', 'auto')
  thumbnail.setAttribute('width', '100%')
  thumbnail.setAttribute('alt', `${imgAlt}`)
  thumbnail.setAttribute('class', 'thumbnail')
  // add click listener to the thumbnail to send its index as a data- attribute
  // to the currently selected slide
  thumbnail.addEventListener('click', () => {
    let currentSlide = document.getElementById('current-selected-slide')
    let captionId = document.getElementById('caption-container')
    let captionStatus = document.getElementById('show-hide-caption').value
    if (captionStatus === 'Hide Caption') {
      let captionContent = imageInfo[i].caption
      captionId.innerHTML = `<div id="caption">${captionContent}</div>`
    }
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', `${i}`)
    // ES6 spread operator to convert HTML collection to array for iteration
    let allThumbnails = [...document.getElementsByClassName('thumbnail')]
    allThumbnails.forEach(element => {
      // remove the current id to remove the border
      element.removeAttribute('id')
    })
    // add id to add border to selected thumbnail
    thumbnail.setAttribute('id', 'selected-thumb')
  })
  document.getElementById(`slide-${i}`).appendChild(thumbnail)
}


// set the current slide to the first in the collection on page load
let currentSlide = document.getElementById('current-selected-slide')
let captionId = document.getElementById('caption-container')
let slideOne = imageInfo[0].url
let captionContent = imageInfo[0].caption
currentSlide.setAttribute('src', `${slideOne}`)
currentSlide.setAttribute('data-slide', 0)
currentSlide.addEventListener('touchstart', getTouchStart)
currentSlide.addEventListener('touchend', getTouchEnd)
let currentThumb = document.getElementById('slide-0').firstChild
currentThumb.setAttribute('id', 'selected-thumb')
captionId.innerHTML = `<div id="caption">${captionContent}</div>`


// function for button to cycle to right through images
function cycleRight() {
  // get the current picture and its data id for array iteration
  let currentSlide = document.getElementById('current-selected-slide')
  let slideId = parseInt(currentSlide.getAttribute('data-slide'))
  let currentThumb = document.getElementById(`slide-${slideId}`).firstChild
  let captionStatus = document.getElementById('show-hide-caption').value
  // handle condition if first slide does not load
  if (slideId === null) {
    let selectMessage = document.createElement('h2')
    selectMessage.innerHTML = 'Please select an image'
    document.getElementById('current-slide-div').appendChild(selectMessage)
  } else if (slideId === imageInfo.length - 1) { // if at furthest right image, cycle back to beginning
    let imgUrl = imageInfo[0].url
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', 0)
    // remove id to remove border
    currentThumb.removeAttribute('id')
    // set next thumbnail to first in the collection, and set id for border
    let nextThumb = document.getElementById('slide-0').firstChild
    nextThumb.setAttribute('id', 'selected-thumb')
    // bring the next thumbnail into scroll view,
    // then bring the current image into scroll view (for mobile landscape view)
    nextThumb.scrollIntoView()
    currentSlide.scrollIntoView()
    if (captionStatus === 'Hide Caption') {
      let captionContent = imageInfo[0].caption
      captionId.innerHTML = `<div id="caption">${captionContent}</div>`
    }
  } else { // for all others, move up one index in the array of image urls
    let imgUrl = imageInfo[slideId + 1].url
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', slideId + 1)
    // remove id to remove border
    currentThumb.removeAttribute('id')
    // set next thumbnail to next in the collection, and set id for border
    let nextThumb = document.getElementById(`slide-${slideId + 1}`).firstChild
    nextThumb.setAttribute('id', 'selected-thumb')
    // bring the next thumbnail into scroll view,
    // then bring the current image into scroll view (for mobile landscape view)
    nextThumb.scrollIntoView()
    currentSlide.scrollIntoView()
    if (captionStatus === 'Hide Caption') {
      let captionContent = imageInfo[slideId + 1].caption
      captionId.innerHTML = `<div id="caption">${captionContent}</div>`
    }
  }
}


// function for button to cycle to left through images
function cycleLeft() {
  // get the current picture and its data id
  let currentSlide = document.getElementById('current-selected-slide')
  let slideId = parseInt(currentSlide.getAttribute('data-slide'))
  let currentThumb = document.getElementById(`slide-${slideId}`).firstChild
  let captionStatus = document.getElementById('show-hide-caption').value
  // handle condition if first slide does not load
  if (slideId === null) {
    let selectMessage = document.createElement('h2')
    selectMessage.innerHTML = 'Please select an image'
    document.getElementById('current-slide-div').appendChild(selectMessage)
  } else if (slideId === 0) { // if at furthest left image, cycle back to beginning
    let imgUrl = imageInfo[imageInfo.length - 1].url
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', imageInfo.length - 1)
    // remove id to remove border
    currentThumb.removeAttribute('id')
    // set next thumbnail to first in the collection, and set id for border
    let previousThumb = document.getElementById(`slide-${imageInfo.length - 1}`).firstChild
    previousThumb.setAttribute('id', 'selected-thumb')
    // bring the next thumbnail into scroll view,
    // then bring the current image into scroll view (for mobile landscape view)
    previousThumb.scrollIntoView()
    currentSlide.scrollIntoView()
    if (captionStatus === 'Hide Caption') {
      let captionContent = imageInfo[imageInfo.length - 1].caption
      captionId.innerHTML = `<div id="caption">${captionContent}</div>`
    }
  } else { // for all others, move down one index in the array of image urls
    let imgUrl = imageInfo[slideId - 1].url
    currentSlide.setAttribute('src', `${imgUrl}`)
    currentSlide.setAttribute('data-slide', slideId - 1)
    // remove id to remove border
    currentThumb.removeAttribute('id')
    // set next thumbnail to next in the collection, and set id for border
    let previousThumb = document.getElementById(`slide-${slideId - 1}`).firstChild
    previousThumb.setAttribute('id', 'selected-thumb')
    // bring the next thumbnail into scroll view,
    // then bring the current image into scroll view (for mobile landscape view)
    previousThumb.scrollIntoView()
    currentSlide.scrollIntoView()
    if (captionStatus === 'Hide Caption') {
      let captionContent = imageInfo[slideId - 1].caption
      captionId.innerHTML = `<div id="caption">${captionContent}</div>`
    }
  }
}


// allow cycling through images with arrow keys
document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37:
            cycleLeft()
            break
        case 39:
            cycleRight()
            break
    }
}


function showHideCaption(button) {
  let currentSlide = document.getElementById('current-selected-slide')
  let slideId = parseInt(currentSlide.getAttribute('data-slide'))
  let captionFill = document.getElementById('caption-fill')
  let captionContent = imageInfo[slideId].caption
  if (button.value === 'Hide Caption') {
    button.value = 'Show Caption'
    captionId.innerHTML = '&nbsp&nbsp'
    captionFill.innerHTML = '&nbsp'
  } else {
    button.value = 'Hide Caption'
    captionId.innerHTML = `<div id="caption">${captionContent}</div>`
    captionFill.innerHTML = ''
  }
}


// get first touch position for touchscreen nav
// define starting x coordinate outside the function so
// it is accessible to getTouchEnd
let startx = 0
function getTouchStart(event) {
  let touchobj = event.changedTouches[0]
  startx = parseInt(touchobj.clientX)
  event.preventDefault()
}


// measure touch distance for touchscreen nav
function getTouchMove(event) {
  let touchobj = event.changedTouches[0]
  let startx = parseInt(touchobj.clientX)
  let dist = parseInt(touchobj.clientX) - startx
  console.log(dist)
  event.preventDefault()
}


// get the final x coordinate for the touch event and
// calculate whether to scroll left or right
function getTouchEnd(event) {
  let touchobj = event.changedTouches[0]
  let endx = parseInt(touchobj.clientX)
  let travel = startx - endx
  if (travel > 10) {
    cycleRight()
  } else if (travel < -10) {
    cycleLeft()
  }
  event.preventDefault()
}

// image preload
// creates hidden divs with ids which preload the images as background images via CSS
let preloadLocation = document.getElementById('hidden-image-preload')
for (let i = 1; i <= imageInfo.length; i++) {
  let childDiv = document.createElement('div')
  childDiv.setAttribute('id', `preload-${i}`)
  preloadLocation.appendChild(childDiv)
}
