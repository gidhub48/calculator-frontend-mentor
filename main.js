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
        const reg = /[+-\/x]/
        const str = /[a-wyz]/i

        if (screenc.innerHTML == "0") {
            screenc.innerHTML = ""
            screenc.innerHTML += each.innerHTML
        }else if(screenc.innerHTML !== "0"){
            screenc.innerHTML += each.innerHTML
        }

        if (screenc.innerHTML.at(-2)!=="." && screenc.innerHTML.at(-2).match(reg)) {
            screenp.innerHTML = screenc.innerHTML.slice(0,-1)
            screenc.innerHTML = ""
            screenc.innerHTML += each.innerHTML
        }
        if (screenc.innerHTML.match(str)) {
            screenc.innerHTML = ""
            screenc.innerHTML += each.innerHTML
        }
    })
});

operator.forEach(each => {
    each.addEventListener("click", () => {

        const reg = /[+-\/x]/
        const str = /[a-wyz]/i
        debugger
        if (screenc.innerHTML !== "" && screenc.innerHTML!=="0" && !screenc.innerHTML.at(-1).match(reg) && each.innerHTML!=="." && !screenc.innerHTML.match(str)) {

                screenc.innerHTML += each.innerHTML

                if(screenp.innerHTML.at(-1).match(reg)){

                    if (screenp.innerHTML.at(-1) == "+") {
                        screenp.innerHTML = Number(screenp.innerHTML.slice(0,-1)) + Number(screenc.innerHTML.slice(0,-1))
                    }else if (screenp.innerHTML.at(-1) == "-") {
                        screenp.innerHTML = Number(screenp.innerHTML.slice(0,-1)) - Number(screenc.innerHTML.slice(0,-1))
                    }else if (screenp.innerHTML.at(-1) == "x") {
                        screenp.innerHTML = Number(screenp.innerHTML.slice(0,-1)) * Number(screenc.innerHTML.slice(0,-1))
                    }else if (screenp.innerHTML.at(-1) == "/") {
                        screenp.innerHTML = Number(screenp.innerHTML.slice(0,-1)) / Number(screenc.innerHTML.slice(0,-1))
                    }
                    screenp.innerHTML += each.innerHTML
                    screenc.innerHTML = ""
                }
            
        }else if (screenc.innerHTML == "") {
            screenp.innerHTML = screenp.innerHTML.slice(0,-1)
            screenp.innerHTML += each.innerHTML
        }else if(screenc.innerHTML.at(-1).match(reg)){
            screenc.innerHTML = screenc.innerHTML.slice(0,-1)
            screenc.innerHTML += each.innerHTML
        }
        

        if (each.innerHTML == "." && screenc.innerHTML.indexOf(".") == -1) {
            screenc.innerHTML += each.innerHTML
        }

        if (screenc.innerHTML.length >=14) {
            outputs.classList.remove("justify-end")
            outputs.classList.add("justify-start")
        }else if (screenc.innerHTML.length < 14) {
            outputs.classList.remove("justify-start")
            outputs.classList.add("justify-end")
        }
        
    })
})

delet.addEventListener("click", () => {
    const str = /[a-wyz]/i

    screenc.innerHTML = screenc.innerHTML.slice(0,-1)
    if (screenc.innerHTML === "") {
        screenc.innerHTML = "0"
    }
    if (screenc.innerHTML.length >=14) {
        outputs.classList.remove("justify-end")
        outputs.classList.add("justify-start")
    }else if (screenc.innerHTML.length < 14) {
        outputs.classList.remove("justify-start")
        outputs.classList.add("justify-end")
    }
    if (screenc.innerHTML.match(str)) {
        screenc.innerHTML = ""
        screenc.innerHTML += each.innerHTML
    }
})

reset.addEventListener("click", () =>{
    debugger
    outputs.classList.remove("justify-start")
    outputs.classList.add("justify-end")
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
        outputs.classList.remove("justify-end")
        outputs.classList.add("justify-start")
    }else if (screenc.innerHTML.length < 14) {
        outputs.classList.remove("justify-start")
        outputs.classList.add("justify-end")
    }
})


