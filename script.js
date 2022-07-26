const counterDisplay = document.querySelector("h3");
let counter = 0;
const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble"); //ajouter la class bubble
  document.body.appendChild(bubble); //cela veu dire que injecter du code html

  const size = Math.random() * 200 + 100 + "px";
  //taille de bules
  bubble.style.height = size;
  bubble.style.width = size;
  // emplacemnt de la bulles
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const pLusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * pLusMinus + "%");
  bubble.addEventListener("click", (e) => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
setInterval(bubbleMaker, 500);
