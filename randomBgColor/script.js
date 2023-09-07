const main = document.querySelector('.main');
const btn = document.getElementById('changeColorBtn');
const clrNameBox = document.querySelector('.clrNameBox')

let clrList = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

function randomColorGenerator(){
    let randomColor = "#"
    for(let i=0; i<6; i++){
        let index = Math.round(Math.random()*15)
        let clr = clrList[index]
        randomColor += clr
    }
    return randomColor;
}

btn.addEventListener("click", (e)=>{
    let randomColor = randomColorGenerator()
    main.style.backgroundColor = randomColor
    clrNameBox.innerHTML = randomColor
    clrNameBox.style.color = randomColor
})

