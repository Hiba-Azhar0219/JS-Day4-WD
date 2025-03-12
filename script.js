console.log('initialized')
console.log(document.body.firstElementChild.children)
var container = document.querySelector('.container')
var box = document.querySelector('.box')
container.style.backgroundColor = '#8AFF8A'
var boxes = document.body.firstElementChild.children
document.querySelectorAll('.box').forEach((e) => {
  e.style.backgroundColor = 'green'
  e.style.width = '50px'
  e.style.height = '50px'
  e.style.padding = '10px'
  e.style.margin = '20px'
  e.style.color = 'white'
})

//finding the content functions
console.log(container.innerHTML)
console.log(box.innerHTML) //only first child that has .box class. InnerHTML gives only the content inside the element
console.log(box.textContent) //also gives the text content inside the first box but has better performance than innerHTML

console.log(box.outerHTML) //outerHTML gives the element + its content

document.querySelectorAll('.box').forEach((e) => {
  console.log(e.innerHTML)
})
console.log(box.tagName)
console.log(container.hidden) //checks is container is hidden or not
// container.hidden = true //it hides the container
console.log(container.hasAttribute('style')) //checks if container has style attribute or not
console.log(container.attributes)
console.log(container.getAttribute('style'))
container.setAttribute('style', 'background-color:rgb(9, 255, 165);')
console.log(container.getAttribute('style'))
// container.removeAttribute('style')      //to remove style from container

//creating a new element to insert
var newElement = document.createElement('div')
newElement.innerHTML = 'I am a new element and I am inserted'
container.append(newElement) //important
container.before(newElement) //to insert before container
container.after(newElement) //to insert after container
container.prepend(newElement) //to insert at the beginning in the container
// now that we have learned to insert element...but if we want to insert a text or anything else, we need to use insertAdjacentHTML/insertAdjacentElement/insertAdjacentText
container.insertAdjacentElement('afterend', newElement)
newElement.remove()
container.classList.add('Hiba')

container.classList.remove('Hiba')
container.classList.add('Hiba')

//very important is toggle
console.log(container.classList.toggle('Hiba')) //means if true then false it, and vice versa
console.log(container.classList.toggle('Hiba')) //means if true then false it, and vice versa
