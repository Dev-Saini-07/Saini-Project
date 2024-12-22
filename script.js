const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// Add event listener for the "Yes" button
yesBtn.addEventListener("click", () => {
  message.textContent = "THANKYOU SO MUCH FOR ACCEPTING MY LOVE ❤️";
  message.style.color = "#4CAF50";
});

// Add event listener for the "No" button
noBtn.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});