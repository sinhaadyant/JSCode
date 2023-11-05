const htmlTextarea = document.querySelector("#html-code");
const cssTextarea = document.querySelector("#css-code");
const jsTextarea = document.querySelector("#js-code");
const iframe = document.getElementById("output");
const saveButton = document.getElementById("save-button");
let content = "";
const username = document.getElementById("username");
const updateIframe = () => {
  content = `
        <style>
          ${cssTextarea.value}
        </style>

        ${htmlTextarea.value}
        
        <script>
          ${jsTextarea.value}
          <\/script>
      `;
  iframe.srcdoc = content;
};

[htmlTextarea, cssTextarea, jsTextarea].forEach((textarea) => {
  textarea.addEventListener("input", updateIframe);
});

saveButton.addEventListener("click", () => {
  localStorage.setItem("htmlCode", htmlTextarea.value);
  localStorage.setItem("cssCode", cssTextarea.value);
  localStorage.setItem("jsCode", jsTextarea.value);
  localStorage.setItem("username", username.innerText);
});

const loadFromLocalStorage = () => {
  htmlTextarea.value = localStorage.getItem("htmlCode") || "";
  cssTextarea.value = localStorage.getItem("cssCode") || "";
  jsTextarea.value = localStorage.getItem("jsCode") || "";
  username.innerText = localStorage.getItem("username") || "Adyant Sinha";
  updateIframe();
};

window.addEventListener("load", loadFromLocalStorage);
