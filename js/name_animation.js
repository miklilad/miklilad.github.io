document.addEventListener('DOMContentLoaded', () => {
    function animateSvg (id, animationLength, delay, delayIncrement){
        const logo = document.getElementById(id);
        const logoPaths = document.querySelectorAll(`#${id} path`);
        for(let i = 0; i < logoPaths.length;i++){
            logoPaths[i].style.strokeDasharray  = logoPaths[i].getTotalLength();
            logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
            logoPaths[i].style.animation = `line-anim ${animationLength}s ease forwards ${delay}s`;
            delay+=delayIncrement;
        }
        delay += animationLength / 2;
        logo.querySelector("g").style.animation = `fill 0.5s ease forwards ${delay}s`;
    }
// Set the id of SVG, delay time in seconds to start animation and delay between each animation
    animateSvg('name', 2, 0, 0.2)
}, false);