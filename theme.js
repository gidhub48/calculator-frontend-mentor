const toTheme1 = document.querySelector("#toTheme1")
const toTheme2 = document.querySelector("#toTheme2")
const toTheme3 = document.querySelector("#toTheme3")
const body = document.querySelector("#body")

if (localStorage.getItem("theme1") == undefined) {
    localStorage.setItem('theme1', 'yes');
    localStorage.setItem('theme2', null);
    localStorage.setItem('theme3', null);
}

toTheme1.addEventListener("click", ()=>{
    body.className = ""
    localStorage.setItem('theme1', 'yes');
    localStorage.setItem('theme2', null);
    localStorage.setItem('theme3', null);
})
toTheme2.addEventListener("click", ()=>{
    body.className = "theme2"
    localStorage.setItem('theme1', null);
    localStorage.setItem('theme2', 'yes');
    localStorage.setItem('theme3', null);
})
toTheme3.addEventListener("click", ()=>{
    body.className = "theme3"
    localStorage.setItem('theme1', null);
    localStorage.setItem('theme2', null);
    localStorage.setItem('theme3', 'yes');
})

if (localStorage.getItem("theme1") == "yes") {
    body.className = ""
}
if (localStorage.getItem("theme2") == "yes") {
    body.className = "theme2"
}
if (localStorage.getItem("theme3") == "yes") {
    body.className = "theme3"
}
