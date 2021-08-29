const slider = document.getElementById('slider')
const price = document.getElementById('price')

price.textContent = `$${Number(slider.value).toFixed(2)}`

slider.addEventListener('input',()=>{
    price.textContent = `$${Number(slider.value).toFixed(2)}`
    console.log(slider.value)
})

slider.addEventListener('mousemove',()=>{
    let percent = slider.value
    console.log(percent)
    let color = `linear-gradient(90deg,hsl(174, 77%, 80%) ${percent}%,hsl(224, 65%, 95%) ${percent}%)`
    slider.style.background = color
})