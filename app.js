/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");
root.style.margin = "0em 5em"
root.style.fontFamily = "Montserrat"

/*

*/

const colors = [
    "Gold",
    "Snow",
    "DodgerBlue",
    "LightSalmon",
    "LightCoral",
    "LightPink",
    "OrangeRed",
    "Tomato",
    "DarkOrchid",
    "SpringGreen",
    "Thistle"
  ];
const btnName = ["Polaroid", "TV" , " Traitor", "Fall Guy" , "Radio"]
const imageNames = [ 
    "assets/images/polaroid.png" ,
    "assets/images/tv.png" , 
    "assets/images/among-us.png" , 
    "assets/images/fall-guy-01.png" , 
    "assets/images/radio-02.png"
  ]
let footerElements =["🖤 Credits :","Polaroid","TV","Traitor","Fall Guy","Radio"]


/*
The nav bar
*/
let nav = document.createElement("nav")
let aInNav = document.createElement("a")
aInNav.href = "#" 
aInNav.innerText = "BLING!"
aInNav.style.cssText = `
    display : flex;
    justify-content : center;
    text-decoration : none;
    font-weight : bold;
    color : #1a0000;
    font-size : larger;
    margin : 2em;
`
nav.append(aInNav)
nav.style.marginBottom = "100px"
root.append(nav)




/*
necessary function for the image selection
*/
let flag = ""
let image = document.createElement("img")
image.src = ""
const createImage = (e) => {
    flag = ""
    if(image.src.slice(-(e.target.value.length)) != e.target.value){
        image.style.width = "165px"
        if(e.target.value === "assets/images/radio-02.png"){
            image.style.marginBottom = "60px"
        }
        else if(e.target.value === "assets/images/fall-guy-01.png"){
            image.style.marginBottom = "25px"
        }
        else{
            image.style.marginBottom = "35px"
        }
        image.src = e.target.value
        let temp = document.querySelectorAll("button")
        temp.forEach((button) => {
            button.style.backgroundColor = "inherit"
            button.style.color = "#1a0000"
        })
        e.target.style.backgroundColor = '#1a0000'
        e.target.style.color = "White"
    }
    else{
        image.src = ""
        e.target.style.backgroundColor = "inherit"
        e.target.style.color = "#1a0000"
    }
}




/*
an outer div for all editing to go here and the changed image
*/
const outerDiv = document.createElement("div")
outerDiv.style.cssText = `
    display : flex;
    justify-content : space-around;
    flex-flow : row wrap;
`
outerDiv.classList.add("outer-div")
const changeDiv = document.createElement("div")
changeDiv.style.minWidth = "45%"
changeDiv.classList.add("change-div")
const previewDiv = document.createElement("div")
previewDiv.style.cssText = `
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-between;
    min-width : 300px;
    height : 300px;
`
previewDiv.classList.add("preview-div")




/*
Writing the header
*/
let header = document.createElement("div")
let pInHeader = document.createElement("p")
let hInHeader = document.createElement("h1")
pInHeader.innerText = "Sizzle your life"
hInHeader.textContent = "Make a Card"
hInHeader.style.cssText = `
    font-weight : bolder;
    font-size : larger;
    margin: 15px 0px;
`
header.append(pInHeader)
header.append(hInHeader)
changeDiv.append(header)


/*
adding editing buttons
*/

let divForButtons = document.createElement("div")
divForButtons.style.width = "70%";
btnName.forEach((name , index) => {
    let btn = document.createElement("button")
    btn.innerText = name;
    btn.value = imageNames[index]
    btn.style.cssText = `
        background-color : white;
        margin :1em 1em 1em 0em;
        padding : 10px;
    `
    btn.addEventListener("click" , createImage )
    divForButtons.append(btn)
})

/*
adding other editing options
*/
let editDiv = document.createElement("div")
editDiv.style.display = "flex"
editDiv.style.justifyContent = "flex-start"
editDiv.style.alignItems = "center"
editDiv.style.flexFlow = "row wrap"
let inputDiv = document.createElement("div")
/*
adding input field
*/
let valueOnImage = document.createElement("p")
valueOnImage.style.marginTop = "30px"
valueOnImage.style.fontSize = "150%"
valueOnImage.style.fontWeight = "900"
let input = document.createElement("input")
input.placeholder = "Name Your Bling!"
input.value = ""
input.onchange = (e) => {
    flag = ""
    valueOnImage.innerText = e.target.value
}
input.style.cssText = `
    margin : 1em 0em 1em 0em ;
    border-radius : 10px;
    padding : 5px;
    outline : none;
    background-color : #1a0000;
    color : white;
`
inputDiv.append(input)


/*
adding dropdown
*/
let select = document.createElement("select")
select.style.backgroundColor = "#1a0000"
select.style.color = "White"
select.style.borderRadius = "10px"
select.style.padding = "5px"
select.style.margin = "5px"
select.style.outline = "none"
previewDiv.style.backgroundColor = "Gold"
colors.forEach((color) => {
    let options = document.createElement("option")
    options.value = color
    options.innerText = color
    select.append(options)
})
select.onchange = (e) => {
    flag = ""
    previewDiv.style.backgroundColor = e.target.value
}
inputDiv.append(select)


/*
adding Blob Radio
*/
let radioDiv = document.createElement("form")
let radio = document.createElement("input")
let label = document.createElement("span")
radio.type = "radio"
radio.name = "blob"
radio.onchange = (e) => {
    flag = ""
    previewDiv.style.backgroundImage = `url("assets/images/blob.png")`
    previewDiv.style.backgroundSize = "100%"
    previewDiv.style.backgroundPosition = "0px 35px"
}
label.innerText = "Blob"
label.style.color = "white"
label.style.fontSize = "14px"
radioDiv.append(radio,label)
radio = document.createElement("input")
label = document.createElement("span")
radio.type = "radio"
radio.name = "blob"
radio.onchange = (e) => {
    flag = ""
    previewDiv.style.backgroundImage = ``
    previewDiv.style.backgroundSize = "100%"
}
label.innerText = "None"
radio.checked = true
label.style.color = "white"
label.style.fontSize = "14px"
radioDiv.append(radio,label)
radioDiv.style.backgroundColor = "#1a0000"
radioDiv.style.height = "30px"
radioDiv.style.width = "150px"
radioDiv.style.minHeight = "30px"
radioDiv.style.minWidth = "150px"
radioDiv.style.padding = "5px"
radioDiv.style.borderRadius = "10px"
editDiv.append(inputDiv)
editDiv.append(radioDiv)



/*
appending all the necessary divs for editing and preview
*/
changeDiv.append(divForButtons)
changeDiv.append(editDiv)
outerDiv.append(changeDiv)
previewDiv.append(valueOnImage)
previewDiv.append(image)
outerDiv.append(previewDiv)


/*
creating the clone of preview with button click
*/
let cardsDiv = document.createElement("div")
cardsDiv.style.marginTop = "2em"
cardsDiv.style.display = "flex"
cardsDiv.style.justifyContent = "space-around"
cardsDiv.style.flexFlow = "row wrap"

/*
necessary function for the div clone
*/
const handleSnapshot = (e) => {
    if(flag != e.target){
        let outerCardDiv = document.createElement("div");
        outerCardDiv.style.position = "relative";
        let cardDiv = previewDiv.cloneNode(true)
        cardDiv.style.margin = "50px 10px"
        cardDiv.style.border = "solid 2px #1a0000"
        cardDiv.style.borderRadius = "20px"
        let close = document.createElement("input")
        close.type = "image"
        close.src = "assets/images/icon_delete.png"
        close.style.width = "50px"
        close.style.position = "absolute";
        close.style.top = "30px"
        close.style.left = "-5px"
        close.onclick = (e) => {
            if(e.target.parentElement === cardsDiv.children[0]){
                flag = ""
            }
            e.target.parentElement.remove()
        }
        outerCardDiv.append(close)
        outerCardDiv.append(cardDiv)
        cardsDiv.insertBefore(outerCardDiv,cardsDiv.children[0])
        flag = e.target
    }
}


let camBtn = document.createElement("input")
camBtn.type = "image"
camBtn.src = "assets/images/camera.png"
camBtn.onclick = handleSnapshot
camBtn.style.backgroundColor = "inherit"
camBtn.style.border = "solid black 2px"
camBtn.style.borderRadius = "10px"
camBtn.style.width = "50px"
camBtn.style.marginTop = "1em"
camBtn.style.padding = "13px"
changeDiv.append(camBtn)

let footer = document.createElement("footer");

/*footer.innerText = "🖤 Credits : Polaroid TV Traitor Fall Guy Radio";*/

footer.style.display = "flex";
footer.style.paddingTop = "15%"
footer.style.bottom = "1em"
footer.style.marginBottom= "5%"
footer.style.justifyContent = "center"
let a
footerElements.forEach((items,index)=>{
    if(index == 0){
     a = document.createElement("p")
    }
    else{
     a = document.createElement("a")
        a.addEventListener('mouseover',(e)=>{
            e.ta
            e.target.style.borderBottom = "2px solid black"
        })
        a.addEventListener('mouseout',(e)=>{
            e.target.style.borderBottom = "0px"
        })
        a.href = "#"
        a.style.textDecoration = "none"
        a.style.color = "black"
        a.style.marginLeft = "10px"
    }
    a.innerText = items
    footer.appendChild(a)
})



root.append(outerDiv)
root.append(cardsDiv)
root.append(footer)
