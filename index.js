/* Select all elements with the class 'box' */
const boxes = document.querySelectorAll(".box");

/* Add a click event listener to each box */
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Remove existing animation classes from the box
    box.classList.remove(
      "bounce",
      "rotate",
      "scale",
      "fade",
      "slide",
      "flip",
      "pulse",
      "shake",
      "swing",
      "tada",
      "wobble",
      "jello"
    );

    // Trigger a reflow to restart the animation
    void box.offsetWidth;

    // Get the animation type from the data attribute of the box
    const animation = box.getAttribute("data-animation");

    // Add the animation class to start the animation
    box.classList.add(animation);
  });
});
