/*
--------------------------------------------------------------
fixed all issues
website : alfred-nelson-bling.netlify.app
--------------------------------------------------------------
*/
let root = document.querySelector("#root");
root.style.margin = "0em 5em"
root.style.fontFamily = "Montserrat"
document.body.style.backgroundColor = "Gold"

/*
--------------------------------------------------------------
All the arrays required
--------------------------------------------------------------
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
--------------------------------------------------------------
The nav bar
--------------------------------------------------------------
*/
let nav = document.createElement("nav")
let aInNav = document.createElement("a")
aInNav.href = "#" 
aInNav.innerText = "BLING!"
aInNav.style.cssText = `
    display : flex;
    justify-content : center;
    text-decoration : none;
    font-weight : 900;
    color : #1a0000;
    font-size : 2rem;
    margin : 2em;
    text-shadow : 2px 2px #F39C12; 
`
nav.append(aInNav)
nav.style.marginBottom = "100px"
root.append(nav)




/*
--------------------------------------------------------------
necessary function for the image selection
--------------------------------------------------------------
*/
let imageDiv = document.createElement("div")
let image = document.createElement("img")
imageDiv.style.width = "100%"
imageDiv.style.minWidth = "300px"
imageDiv.style.minHeight = "200px"
imageDiv.style.display = "flex"
imageDiv.style.justifyContent = "center"
imageDiv.style.alignItems = "center"
imageDiv.style.height = "auto"
imageDiv.append(image)
image.src = ""
image.style.marginTop = "30px"
const createImage = (e) => {
    if(image.src.slice(-(e.target.value.length)) != e.target.value){
        image.style.width = "140px"
        if(e.target.value === "assets/images/radio-02.png"){
            image.style.marginBottom = "30px"
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
--------------------------------------------------------------
an outer div for all editing to go here and the changed image
--------------------------------------------------------------
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
    flex-wrap : wrap;
    min-width : 300px;
    max-width : 300px;
    min-height : 300px;
    padding-bottom : 20px;
`
previewDiv.classList.add("preview-div")




/*
Writing the header
--------------------------------------------------------------
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
--------------------------------------------------------------
*/

let divForButtons = document.createElement("div")
divForButtons.style.width = "70%";
btnName.forEach((name , index) => {
    let btn = document.createElement("button")
    btn.innerText = name;
    btn.value = imageNames[index]
    btn.style.cssText = `
        background-color : inherit;
        margin :1em 1em 1em 0em;
        padding : 10px;
        cursor : pointer;
    `
    btn.addEventListener("click" , createImage )
    divForButtons.append(btn)
})

/*
adding other editing options
--------------------------------------------------------------
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
valueOnImage.style.marginTop = "50px"
valueOnImage.style.fontSize = "150%"
valueOnImage.style.fontWeight = "900"
valueOnImage.style.textAlign = "center"
let input = document.createElement("input")
input.placeholder = "Name Your Bling!"
input.value = ""
input.addEventListener("keyup",(e) => {
    valueOnImage.innerText = e.target.value
})
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
--------------------------------------------------------------
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
    document.body.style.backgroundColor = e.target.value
    previewDiv.style.backgroundColor = e.target.value
}
inputDiv.append(select)


/*
adding Blob Radio
--------------------------------------------------------------
*/
let radioDiv = document.createElement("form")
let radio = document.createElement("input")
let label = document.createElement("span")
radio.type = "radio"
radio.name = "blob"
radio.style.cursor = "pointer"
radio.onchange = (e) => {
    imageDiv.style.backgroundImage = `url("assets/images/blob.png")`
    imageDiv.style.backgroundSize = "80%"
    imageDiv.style.backgroundRepeat = "no-repeat"
    imageDiv.style.backgroundPosition = "center"
}
label.innerText = "Blob"
label.style.color = "white"
label.style.fontSize = "14px"
radioDiv.append(radio,label)
radio = document.createElement("input")
label = document.createElement("span")
radio.type = "radio"
radio.name = "blob"
radio.style.cursor = "pointer"
radio.onchange = (e) => {
    imageDiv.style.backgroundImage = ``
    imageDiv.style.backgroundSize = "100%"
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
--------------------------------------------------------------
appending all the necessary divs for editing and preview
--------------------------------------------------------------
*/
changeDiv.append(divForButtons)
changeDiv.append(editDiv)
outerDiv.append(changeDiv)
previewDiv.append(valueOnImage)
previewDiv.append(imageDiv)
outerDiv.append(previewDiv)


/*
--------------------------------------------------------------
creating the clone of preview with button click
--------------------------------------------------------------
*/
let cardsDiv = document.createElement("div")
cardsDiv.style.marginTop = "2em"
cardsDiv.style.display = "flex"
cardsDiv.style.justifyContent = "space-around"
cardsDiv.style.flexFlow = "row wrap"

/*
necessary function for the div clone
--------------------------------------------------------------
*/
const handleSnapshot = (e) => {
    let outerCardDiv = document.createElement("div");
    outerCardDiv.style.position = "relative";
    let cardDiv = previewDiv.cloneNode(true)
    cardDiv.style.margin = "50px 10px"
    cardDiv.style.border = "solid 2px #1a0000"
    cardDiv.style.borderRadius = "px"
    let close = document.createElement("input")
    close.type = "image"
    close.src = "assets/images/icon_delete.png"
    close.style.width = "50px"
    close.style.position = "absolute";
    close.style.top = "30px"
    close.style.left = "285px"
    close.onclick = (e) => {
        e.target.parentElement.remove()
    }
    outerCardDiv.append(close)
    outerCardDiv.append(cardDiv)
    cardDiv.style.boxShadow = "2px 2px 1px 1px dimgrey"
    cardsDiv.insertBefore(outerCardDiv,cardsDiv.children[0])
}


let camBtn = document.createElement("input")
camBtn.type = "image"
camBtn.src = "assets/images/camera.png"
camBtn.onclick = handleSnapshot
camBtn.style.backgroundColor = "inherit"
camBtn.style.border = "solid black 2px"
camBtn.style.borderRadius = "10px"
camBtn.style.width = "50px"
camBtn.addEventListener("mousedown",(e)=> {
    camBtn.style.backgroundColor = "white"
})
camBtn.addEventListener("mouseup",(e)=> {
    camBtn.style.backgroundColor = "inherit"
})
camBtn.style.marginTop = "1em"
camBtn.style.padding = "13px"
changeDiv.append(camBtn)


/*
--------------------------------------------------------------
added Footer
--------------------------------------------------------------
*/
let footer = document.createElement("footer")
footer.style.display = "flex";
footer.style.paddingTop = "5%"
footer.style.flexWrap = "wrap"
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
            e.target.style.borderBottom = "2px solid black"
        })
        a.addEventListener('mouseout',(e)=>{
            e.target.style.borderBottom = "0px"
        })
        a.href = "#"
        a.target = "_blank"
        a.style.textDecoration = "none"
        a.style.color = "black"
        a.style.marginLeft = "1em"
    }
    a.style.marginTop = "1em"
    a.style.paddingBottom = "10px"
    a.innerText = items
    footer.appendChild(a)
})


/*
--------------------------------------------------------------
appending necessary div to the root
--------------------------------------------------------------
*/

root.append(outerDiv)
root.append(cardsDiv)
root.append(footer)
