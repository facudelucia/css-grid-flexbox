document.addEventListener("DOMContentLoaded", ()=>{
    var imagenHero = document.querySelector(".hero")
    let i = 0
    let tiempo = 0
    const imagenes = ["arriba2.jpg", "arriba.jpg"]
    setInterval(()=>{
        imagenHero.style.backgroundPositionY = `-${tiempo}px`
        if(tiempo > 40){
            tiempo = 0 
            imagenHero.style.backgroundImage = `url(img/${imagenes[i]})`
            if(i === imagenes.length - 1){
                i = 0
            }else{
                i++
            }
            
        }
        tiempo++
    }, 100)
})
const btnFlotante = document.querySelector(".btn-flotante")
btnFlotante.addEventListener("click", (e)=>{
    e.preventDefault()
    const footer = document.querySelector("#footer")
    if(footer.classList.contains("activo")){
        footer.classList.remove("activo")
        btnFlotante.textContent = "Idioma Y Moneda"
        btnFlotante.classList.remove("activo")
    }else{
        footer.classList.add("activo")
        btnFlotante.textContent = "X Cerrar"
        btnFlotante.classList.add("activo")
    }
})