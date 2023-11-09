const input = document.getElementById("name-input");
const formButton = document.getElementById("form-button");

const queryParams = new URLSearchParams(window.location.search);

const cons = document.querySelector(".cont");
const wrapper = document.querySelector(".wrapper");
const nameShow = document.getElementById("nameShow");
if (queryParams.has("name")) {
  const nameValue = queryParams.get("name");
  cons.style.display = "block";
  wrapper.style.display = "none";
  nameShow.innerText = `${nameValue.trim()}`;
} else {
  cons.style.display = "none";
}
formButton.addEventListener("click", () => {
  let text = input.innerText;
  text.trim();
  if (text && text.length > 0) {
    const newUrl =
      window.location.origin + window.location.pathname + "?name=" + text;
    window.location.href = newUrl;
  }
});
