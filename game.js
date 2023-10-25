let score = 0;

    function getRandomNumber() {
        return Math.floor(Math.random() * 256);
    }

    function generateRandomColor() {
        return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function generateRandomNumberArray(mainColor) {
        const Arr = [mainColor];
        for (let i = 1; i <= 2; i++) {
            Arr.push(generateRandomColor());
        }
        return shuffleArray(Arr);
    }

    function updateInnerHTMLById(id, newHTML) {
        var element = document.getElementById(id);
        if (element) {
            element.innerHTML = newHTML;
        } else {
            console.log("Element with ID '" + id + "' not found.");
        }
    }

    let mainColor = generateRandomColor();

    function startGame() {
        const code = document.getElementById('code');
        mainColor = generateRandomColor();
        code.innerText = `Code: ${mainColor}`;
        const ColorArr = generateRandomNumberArray(mainColor);
        const mainEle = document.getElementById('main');
        mainEle.innerHTML = "";
        for (let index = 0; index < ColorArr.length; index++) {
            const ele = document.createElement('div');
            ele.style.backgroundColor = ColorArr[index];
            ele.setAttribute("code", ColorArr[index]);
            ele.setAttribute("class", "box");
            mainEle.appendChild(ele);
        }
        updateInnerHTMLById("msg", "");
        attachBoxListeners();
    }

    function attachBoxListeners() {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box => {
            box.addEventListener("click", function () {
                const codeValue = box.getAttribute("code");
                if (codeValue == mainColor) {
                    updateInnerHTMLById("msg", `<span class="success">👍🏻 Well Done! ✅ Correct Answer</span>`);
                    score++;
                } else {
                    updateInnerHTMLById("msg", `<span class="danger">🙁 Incorrect Answer! <button id="tryAgain">Try Again ⎋</span>`);
                    score = 0;
                }
                updateInnerHTMLById("score", `Score: ${score}`);
                setTimeout(() => {
                    startGame();
                }, 1000);
            });
        });
    }

    startGame();
    updateInnerHTMLById("score", `Score: ${score}`);