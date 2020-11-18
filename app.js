const submit = document.getElementById("submit")
const topTextInput = document.querySelector("input[name='toptext']")
const bottomTextInput = document.querySelector("input[name='bottomtext']")
const imgInput = document.querySelector("input[name='imglink']")
const imgDiv = document.querySelector("#meme")
const text = document.querySelectorAll("p")

//append your image to the div container, and the text to the image
//create a clear button like you did in the todolist
//is there a way you can be able to save the image you create?

submit.addEventListener("click", function(e){
    e.preventDefault();
    console.log("submit")

    const topText = document.createElement("p")
    topText.setAttribute('id', 'top')
    topText.innerText = `${topTextInput.value}`
    const bottomText = document.createElement("p")
    bottomText.setAttribute('id', 'bottom')
    bottomText.innerText = `${bottomTextInput.value}`
    const allDiv = document.createElement("div")
    allDiv.setAttribute('class', 'alldiv')

    allDiv.appendChild(topText)
    allDiv.appendChild(bottomText)

    const remove = document.createElement("button")
    remove.innerText = "X"
    allDiv.appendChild(remove)
    remove.addEventListener("click", function(e){
        this.parentElement.remove();
    })

    const memePic = document.createElement("img")
    memePic.setAttribute('src', `${imgInput.value}`)

    allDiv.appendChild(memePic)

    imgDiv.appendChild(allDiv)
})

//I need to figure out how to add a listener that will load the image
//BEFORE the text

// text.addEventListener("onload", function(e){
//     console.log("loaded")
// })

