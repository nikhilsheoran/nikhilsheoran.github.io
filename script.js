function changingText(text_arr, color_arr = [], font_arr = [], div_id, second_div_id, change_font = true) {
    async function updateFontColor(div_id, second_div_id, color) {
        document.getElementById(div_id).style.color = color;
        document.getElementById(second_div_id).style.backgroundColor = color;
    }

    function waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    async function typeSentence(sentence, div_id, delay = 70) {
        const letters = sentence.split("");
        let i = 0;
        while (i < letters.length) {
            await waitForMs(delay);
            document.getElementById(div_id).append(letters[i]);
            i++
        }
        return;
    }
    async function deleteSentence(div_id) {
        const sentence = document.getElementById(div_id).innerText;
        const letters = sentence.split("");
        while (letters.length > 0) {
            await waitForMs(70);
            letters.pop();
            document.getElementById(div_id).innerText = letters.join("");
        }
    }

    async function updateFontFamily(div_id, second_div_id = " ", font) {
        document.getElementById(div_id).style.fontFamily = font;
        if (second_div_id != " ") {
            document.getElementById(second_div_id).style.fontFamily = font;
        }
    }

    async function typingEffect(text_arr, color_arr = [], font_arr = [], div_id, second_div_id, change_font) {
        var i = 0;
        while (true) {
            await updateFontColor(div_id, second_div_id, color_arr[i])
            await typeSentence(text_arr[i], div_id);
            await waitForMs(1500);
            await deleteSentence(div_id);
            await waitForMs(500);
            if (change_font) {
                await updateFontFamily(div_id, second_div_id, font_arr[i]);
            }
            i++
            if (i >= text_arr.length) {
                i = 0;
            }
        }
    }
    typingEffect(text_arr, color_arr, font_arr, div_id, second_div_id, change_font);
}
text_arr = ["Nikhil Sheoran . . .", "A student . . .", "A Web Developer . . .", "A Web Designer . . .", "A Speedcuber . . .", "A Video Editor . . ."];
color_arr = ["green", "blue", "red", "orange", "pink", "brown"];
font_arr = [""];
div_id = "changing-text-span";
second_div_id = "cursor-div";

changingText(text_arr, color_arr, font_arr, div_id, second_div_id, false);