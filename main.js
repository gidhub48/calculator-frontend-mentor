const number = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")
const screenp = document.querySelector("#outputs-number-prev")
const screenc = document.querySelector("#outputs-number-curr")
const delet = document.querySelector("#delete")
const reset = document.querySelector("#reset")
const equal = document.querySelector("#equal")
const outputs = document.querySelector("#outputs")

number.forEach(each => {
    each.addEventListener("click", () =>{
        if (screenc.innerHTML[0] == "0" && screenc.innerHTML[1] !== "." ) {
            screenc.innerHTML = each.innerHTML
        }else{
            screenc.innerHTML += each.innerHTML
        }
    })
});

operator.forEach(each => {
    each.addEventListener("click", () => {
        debugger
        let isnum = /[0-9]/
        if (each.innerHTML !== "." && screenp.innerHTML.length > 0) {
            screenp.innerHTML = screenp.innerHTML.slice(0,-1) + " " + each.innerHTML
        }
        if (screenc.innerHTML[screenc.innerHTML.length-1].match(isnum) && each.innerHTML!==".") {

            if (screenp.innerHTML=="") {
                screenp.innerHTML = screenc.innerHTML + " " + each.innerHTML
            }else if (screenp.innerHTML.at(-1) == "+") {
                screenp.innerHTML = (Number(screenp.innerHTML.slice(0,-1))+Number(screenc.innerHTML)) + " " + each.innerHTML
            }else if (screenp.innerHTML.at(-1) == "-") {
                screenp.innerHTML = (Number(screenp.innerHTML.slice(0,-1))-Number(screenc.innerHTML)) + " " + each.innerHTML
            }else if (screenp.innerHTML.at(-1) == "x") {
                screenp.innerHTML = (Number(screenp.innerHTML.slice(0,-1))*Number(screenc.innerHTML)) + " " + each.innerHTML
            }else if (screenp.innerHTML.at(-1) == "/") {
                screenp.innerHTML = (Number(screenp.innerHTML.slice(0,-1))/Number(screenc.innerHTML)) + " " + each.innerHTML
            }
            screenc.innerHTML = ""

        }else if (each.innerHTML == "." && screenc.innerHTML.indexOf(".") == -1){
            screenc.innerHTML += each.innerHTML
        }
        if (screenc.innerHTML.length >=14) {
            outputs.style.justifyContent = "flex-start"
        }else if (screenc.innerHTML.length < 14) {
            outputs.style.justifyContent = "flex-end"
        }
        
    })
})

delet.addEventListener("click", () => {
    screenc.innerHTML = screenc.innerHTML.slice(0,-1)
    if (screenc.innerHTML === "") {
        screenc.innerHTML = "0"
    }
})

reset.addEventListener("click", () =>{
    screenp.innerHTML = ""
    screenc.innerHTML = "0"
})

equal.addEventListener("click", () =>{
    if (screenp.innerHTML=="") {
        screenc.innerHTML = screenc.innerHTML
    }else if (screenp.innerHTML.at(-1) == "+") {
        screenc.innerHTML = (Number(screenp.innerHTML.slice(0,-1))+Number(screenc.innerHTML))
    }else if (screenp.innerHTML.at(-1) == "-") {
        screenc.innerHTML = (Number(screenp.innerHTML.slice(0,-1))-Number(screenc.innerHTML))
    }else if (screenp.innerHTML.at(-1) == "x") {
        screenc.innerHTML = (Number(screenp.innerHTML.slice(0,-1))*Number(screenc.innerHTML))
    }else if (screenp.innerHTML.at(-1) == "/") {
        screenc.innerHTML = (Number(screenp.innerHTML.slice(0,-1))/Number(screenc.innerHTML))
    }
    screenp.innerHTML = ""
    if (screenc.innerHTML.length >=14) {
        outputs.style.justifyContent = "flex-start"
    }else if (screenc.innerHTML.length < 14) {
        outputs.style.justifyContent = "flex-end"
    }
})


