const slider = document.getElementById('slider')
const price = document.getElementById('price')
const views = document.getElementById('viewsNumber')

price.textContent = `$8.00`
views.textContent = '10k'

slider.addEventListener('input',()=>{
    let value = Number(slider.value)
    switch (value){
        case 1:
            price.textContent = `$8.00`
            views.textContent = '10k'
            break
        case 2:
            price.textContent = `$12.00`
            views.textContent = '50k'
            break
        case 3:
            price.textContent = `$16.00`
            views.textContent = '100k'
            break
        case 4:
            price.textContent = `$24.00`
            views.textContent = '500k'
            break
        case 5:
            price.textContent = `$36.00`
            views.textContent = '1M'
            break
    }
    
    
})

slider.addEventListener('mousemove',()=>{
    let percent
    if(slider.value == 1){
        percent = 1
    }else{
        percent = (Number(slider.value)/5)*100 - 10
    }
    let color = `linear-gradient(90deg,hsl(174, 77%, 80%) ${percent}%,hsl(224, 65%, 95%) ${percent}%)`
    slider.style.background = color
})