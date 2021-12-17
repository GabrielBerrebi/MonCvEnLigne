let education = document.querySelector("#educ")
let xp  = document.querySelector("#xp")
let skills = document.querySelector("#skills")
let contact = document.querySelector("#contact")

education.addEventListener('click',()=>{
    let reponse = confirm("You will Navigate To My Education Page ")
    if (reponse == true){
        location.replace("education.html");
    }
})
education.addEventListener('mouseover',()=>{
    education.style.width= "500px"
    education.style.height= "100px"
    education.style.backgroundColor= "yellow"
})
xp.addEventListener('mouseover',()=>{   
    xp.style.width= "500px"
    xp.style.height= "100px"
    xp.style.backgroundColor= "yellow"
}) 
skills.addEventListener('mouseover',()=>{
   skills.style.width= "500px"
    skills.style.height= "100px"
    skills.style.backgroundColor= "yellow"
})
contact.addEventListener('mouseover',()=>{
    contact.style.width= "500px"
    contact.style.height= "100px"
    contact.style.backgroundColor= "yellow"
})

education.addEventListener('mouseout',()=>{
    education.style.width= "400px"
    education.style.height= "100px"
    education.style.backgroundColor= "coral"
})
xp.addEventListener('mouseout',()=>{   
    xp.style.width= "400px"
    xp.style.height= "100px"
    xp.style.backgroundColor= "coral"
})
skills.addEventListener('mouseout',()=>{
   skills.style.width= "400px"
    skills.style.height= "100px"
    skills.style.backgroundColor= "coral"
})
contact.addEventListener('mouseout',()=>{
    contact.style.width= "400px"
    contact.style.height= "100px"
    contact.style.backgroundColor= "coral"
})

xp.addEventListener('click',()=>{
    let reponse = confirm("You will Navigate To My Experience Page ")
    if (reponse == true){
        location.replace("xp.html");
    }
})

skills.addEventListener('click',()=>{
    let reponse = confirm("You will Navigate To My Skills Page ")
    if (reponse == true){
        location.replace("skills.html");
    }
})

contact.addEventListener('click',()=>{
    let reponse = confirm("You will Navigate To My Contact Page ")
    if (reponse == true){
        location.replace("contact.html");
    }
})