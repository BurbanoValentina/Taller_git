let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === 'active') enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

function vermas(dos){
    const boton = document.getElementById("boton");
    const contenido = document.getElementById(dos);

boton.addEventListener("click", function (){
    if(contenido.style.display === "none"){
        contenido.style.display = "block";
        boton.textContent = "Ver menos";
    }else{
        contenido.style.display = "none";
        boton.textContent = "Ver mas";
    }
})
}

