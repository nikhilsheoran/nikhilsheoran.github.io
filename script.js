const carouselText = [
    { text: "Nikhil Sheoran", color: "#cf0000" },
    { text: "A student", color: "#B4F8C8" },
    { text: "A Web Developer. . . ", color: "#ff7b54" },
    { text: "A Speedcuber. . . ", color: "#fb3640" },
    { text: "A Video Editor. . . ", color: "#e1701a" },
    { text: "A Web Designer. . . ", color: "#f21170" }
]

function textChanger() {
    async function typeSentence(sentence, eleRef, delay = 70) {
        const letters = sentence.split("");
        let i = 0;
        while (i < letters.length) {
            await waitForMs(delay);
            document.getElementById(eleRef).append(letters[i]);
            i++
        }
        return;
    }

    async function deleteSentence(eleRef) {
        const sentence = document.getElementById(eleRef).innerHTML;
        const letters = sentence.split("");
        let i = 0;
        while (letters.length > 0) {
            await waitForMs(70);
            letters.pop();
            document.getElementById(eleRef).innerHTML = letters.join("");
        }
    }

    function waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    function random_font() {
        fonts = ["Anada", "Itim", "Amatic SC", "Gloria Hallelujah", "Handlee", "Indie Flower", "Pacifico", "Rancho", "Reenie Beanie", "Rochester", "Shadows Into Light"];

        return fonts[Math.floor(Math.random() * fonts.length)];
    }

    function blinkCursor() {
        async function showCursor() {
            document.getElementById("input-cursor").style.visibility = "visible";
            await waitForMs(600);
            hideCursor();
        }
        async function hideCursor() {
            document.getElementById("input-cursor").style.visibility = "hidden";
            await waitForMs(600);
            showCursor();
        }
        showCursor();
    }

    async function carousel(carouselList, eleRef) {
        var i = 0;
        while (true) {
            updateFontColor(eleRef, carouselList[i].color)
            await typeSentence(carouselList[i].text, eleRef);
            await waitForMs(1500);
            await deleteSentence(eleRef);
            await waitForMs(500);
            i++
            document.getElementById("change-font").style.fontFamily = random_font();

            if (i >= carouselList.length) {
                i = 0;
                document.getElementById("change-font").style.fontFamily = random_font();
            }
        }
    }

    function updateFontColor(eleRef, color) {
        document.getElementById(eleRef).style.color = color;
        document.getElementById("input-cursor").style.backgroundColor = color;

    }
    carousel(carouselText, "changing-text-main-div");
    blinkCursor();
    document.getElementById("change-font").style.fontFamily = random_font();

}
textChanger();