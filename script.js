const labels = document.querySelectorAll('label');


for (const label of labels) {
    label.innerHTML=label.innerText.split("")
    .map((latter,index)=>
    `<span style="transition-delay:${index*100}ms">${latter}</span>`).join("")
}