// 1. CUSTOM SATURN COMPONENT

AFRAME.registerComponent("saturn-scale-toggle", {
  init: function () {
    const saturnEntity = document.querySelector("#saturn");
    let isBig = false;

    this.el.addEventListener("click", function () {
      if (!isBig) {
        saturnEntity.setAttribute("scale", "1.5 1.5 1.5");
        isBig = true;
        console.log("Saturn became bigger!");
      } else {
        saturnEntity.setAttribute("scale", "1 1 1");
        isBig = false;
        console.log("Saturn returned to normal!");
      }
    });
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // EARTH COLOUR-CHANGING INTERACTION
  const earth = document.querySelector("#earth");
  const colours = ["#FF5733", "#9B59B6", "#2ECC71", "#F1C40F", "#168BFF"];
  let colourIndex = 0;

  earth.addEventListener("click", function () {
    earth.removeAttribute("material");
    earth.setAttribute("material", {
      color: colours[colourIndex],
      shader: "standard",
      roughness: 1,
    });
    console.log("Earth clicked! Colour changed.");
    colourIndex++;
    if (colourIndex >= colours.length) {
      colourIndex = 0;
    }
  });

  // HIRO MARKER STATUS BANNER
  const marker = document.querySelector("#hiroMarker");
  const banner = document.querySelector("#statusBanner");

  if (marker && banner) {
    marker.addEventListener("markerFound", function () {
      banner.textContent = "Space Museum Detected!";
      banner.classList.remove("lost");
      banner.classList.add("found");
    });

    marker.addEventListener("markerLost", function () {
      banner.textContent = "Marker Lost! Point your camera at the Hiro marker.";
      banner.classList.remove("found");
      banner.classList.add("lost");
    });
  }

  // ASTRONAUT MODEL CHECK
  const astronaut = document.querySelector("#astronaut");
  if (astronaut) {
    astronaut.addEventListener("model-loaded", function () {
      console.log("Astronaut loaded successfully!");
    });
    astronaut.addEventListener("model-error", function (event) {
      console.log("Astronaut loading failed:", event.detail);
    });
  }
});
