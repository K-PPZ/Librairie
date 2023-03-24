let html_css = document.getElementById("html_css");
let html = document.getElementById("html");
let value_html = false;

let lib_js = document.getElementById("lib_js");
let js = document.getElementById("js");
let value_js = false;

let title_page = document.getElementById("title_page");

html_css.addEventListener("click", () => {
    if (value_html == false) {
        title_page.innerText = "HTML/CSS";
        html.classList.remove("html_hidden");
        html.classList.add("html_visible");
        value_html = true;
    } else {
        title_page.innerText = "";
        html.classList.remove("html_visible");
        html.classList.add("html_hidden");
        value_html = false;
    }

    js.classList.remove("js_visible");
    js.classList.add("js_hidden");
    value_js = false;
});

lib_js.addEventListener("click", () => {
    if (value_js == false) {
        title_page.innerText = "JS";
        js.classList.remove("js_hidden");
        js.classList.add("js_visible");
        value_js = true;
    } else {
        title_page.innerText = "";
        js.classList.remove("js_visible");
        js.classList.add("js_hidden");
        value_js = false;
    }

    html.classList.remove("html_visible");
    html.classList.add("html_hidden");
    value_html = false;
});

/*
// RANDOM //
Math.floor(Math.random() * (max - min)) + min;
*/