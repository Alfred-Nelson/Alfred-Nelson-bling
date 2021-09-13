/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");
root.style.margin = "1em"
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
root.append(nav)




/*
necessary functions for the working
*/
let image = document.createElement("img")
image.src = ""
const createImage = (e) => {
    if(image.src.slice(-(e.target.value.length)) != e.target.value){
        image.src = e.target.value
        image.style.width = "200px"
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
    justify-content : center;
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
    justify-content : space-around;
    min-width : 25%;
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
let inputDiv = document.createElement("div")
/*
adding input field
*/
let valueOnImage = document.createElement("p")
let input = document.createElement("input")
input.placeholder = "Name Your Bling!"
input.value = ""
input.onchange = (e) => {
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
    previewDiv.style.backgroundColor = e.target.value
}
inputDiv.append(select)


/*
adding Blob Radio
*/





/*
appending all the necessary divs
*/
changeDiv.append(divForButtons)
changeDiv.append(inputDiv)
outerDiv.append(changeDiv)
previewDiv.append(valueOnImage)
previewDiv.append(image)
outerDiv.append(previewDiv)



root.append(outerDiv)
