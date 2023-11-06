const main = document.querySelector(".main");
const stars = document.querySelectorAll(".star");
const score = document.getElementById("score");

const getStarValue = (el) => Number(el.getAttribute("data-value"));
function reset() {
  stars.forEach((star) => {
    star.style.color = "white";
  });
}

main.addEventListener("click", (e) => {
  const value = e.target.getAttribute("data-value");
  reset();
  score.innerText = `Score : (${value}/5)`;
  const color = value > 2 ? "gold" : "red";
  for (let i = 0; i < Number(value); i++) {
    const el = main.querySelector(`:nth-child(${i})`);

    el.style.color = color;
  }
});
// stars.forEach((star) => {
//   star.addEventListener("click", () => {
//     const value = star.getAttribute("data-value");
//     reset();
//     score.innerText = `Score : (${value}/5)`;
//     const color = value > 2 ? "gold" : "red";
//     for (let i = 0; i < Number(value); i++) {
//       stars[i].style.color = color;
//     }
//   });
// });

// stars.forEach((star) => {
//   star.addEventListener("mouseover", () => {
//     const value = star.getAttribute("data-value");
//     reset();
//     const color = value > 2 ? "gold" : "red";
//     for (let i = 0; i < Number(value); i++) {
//       stars[i].style.color = color;
//     }
//   });
// });
