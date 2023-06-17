let jsFile= document.getElementById("myForm")
let myInput= document.getElementById("myInput")
let myList= document.getElementById("myList")
jsFile.addEventListener('submit',
        (data)=> {
  data.preventDefault()
  createItem(myInput.value)
})
createItem=(d)=>{
  let myTemplate =  `<li>${d}<button onClick="deleteItem(this)">delete</button></li>`
  myList.insertAdjacentHTML("beforeend",myTemplate)//
myInput.value=" "
  myInput.focus()
}

function deleteItem(x)
{
  x.parentElement.remove()
}
   