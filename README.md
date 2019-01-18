# responsive-slideshow


## Design process:
For this project, I wanted to implement an intuitive and simple interface to satisfy the requirements, which also had multiple methods to navigate through the slides. For example, in addition to the requirement of being able to click and swipe to navigate, I wanted to add keyboard navigation via the left and right arrow keys.

In particular, I wanted to add a side scrolling thumbnail carousel to account for the pagination requirement, due to its flexibility and the opportunity to use flexbox to configure it.

I also wanted a caption option which could be shown or hidden optionally, as an overlay on the slide.

Lasly, I wanted the interface to be as clean as possible, with little opportunity for confusion, and for every element to be responsive to any display size.


## Development process
Considering the requirement to avoid using libraries, I wanted to carefully consider each interactive element on the page, and how it would be implemented through JavaScript.  I also wanted to my code to be extensible to handle some or all of the bonus requirements if I could meet them in the timeframe.

As much as possible, I wanted modular functions to handle each interactive elment, e.g. click right, click left, swipe right, swipe left, etc. to allow for intuitive and maintainable code.  I also had the goal to make the functions (and ID / class names) use semantic readability.

To handle pagination, I use the HTML data- attribute to create a unique ID to pull into the logic of the cycleLeft and cycleRight functions.

I also wanted my code to be structured in anticipation of handling the photo info as a JSON object (or at least as a JavaScript object, to prep for this possibility, as I could stringify JSON down the road).

For the responsive requirement, I wanted to lean heavily on CSS flexbox due to its inherant capabilities to handle this type of structure.

To streamline page load time, I preload all the images in a hidden div outside the viewport, which allows subsequent calls for the image URLs to pull from the preloaded image file.

To develop locally, the index.html file can simply be run in the browser and manually refreshed.  Optionally, run npm install from the project directory to install live-server, and run with live-server --port=8000 (or other desired port), then you can run localhost/index.html:8000 from the browser.  This will auto-reload on code edits for faster development.


## Future improvements
- clean up and tighten up all id and class names
- clean up CSS color values and selector ordering
- look for opportities to refactor functions
- To handle HTML5 video: consider moving data- attribute to the current-slide-div so that I can more easily handle the video element (as I am using a hidden element for video, which I unhide when it is selected from the carousel, and my cycleRight and cycleLeft logic becomes precarious when I'm trying to use data- attribute on two elements )
- Test capabilities to pull in images from an API by either injesting external JSON or pulling in external image URLs
