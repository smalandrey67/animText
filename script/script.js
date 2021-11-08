const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, '<span class="span">$&</span>')

text.addEventListener("mouseover", (e) =>{
    if(e.target.tagName != "SPAN") return 
    e.target.classList.add("animation");
}) 

