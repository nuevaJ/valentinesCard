document.addEventListener("DOMContentLoaded", function () {
  const clickElement = document.querySelector(".click");
  const topElement = document.querySelector(".top");
  const rightElement = document.querySelector(".right");
  const leftElement = document.querySelector(".left");
  const bottomElement = document.querySelector(".bottom");

  clickElement.addEventListener("click", function () {
    // Add the "vanished" class to the click element instantly
    clickElement.classList.add("vanished");

    // Create a new image element for the kiss icon
    const kissIcon = document.createElement("img");
    kissIcon.src = "images/image 6.svg"; // Replace with the path to your kiss icon
    kissIcon.classList.add("kiss-splash");

    // Append the kiss icon to the body
    document.body.appendChild(kissIcon);

    // Position the kiss icon at the click position
    const rect = clickElement.getBoundingClientRect();
    kissIcon.style.top = `${rect.top}px`;
    kissIcon.style.left = `${rect.left}px`;

    // Remove the kiss icon and trigger flip animation after a delay
    setTimeout(() => {
      kissIcon.remove();
      // Add classes in sequence for the desired animation
      topElement.classList.add("flip");
      setTimeout(() => {
        rightElement.classList.add("flipRight");
      }, 500); // Adjust the delay as needed
      setTimeout(() => {
        leftElement.classList.add("flipLeft");
      }, 1000); // Adjust the delay as needed
      setTimeout(() => {
        bottomElement.classList.add("flipBottom");
      }, 1500); // Adjust the delay as needed
    }, 2000); // Adjust the delay as needed
  });
});
