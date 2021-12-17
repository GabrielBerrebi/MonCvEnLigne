let acc = document.querySelector('body')
let h2 = document.querySelector('h2')

acc.addEventListener('click',()=>{
    acc.style.backgroundColor = "black"
    setTimeout(location.replace("Index.html"),1000)
    
})
h2.addEventListener('mouseover',()=>{
    h2.style.color = "blue"
})
h2.addEventListener('mouseout',()=>{
    h2.style.color = "black"
})