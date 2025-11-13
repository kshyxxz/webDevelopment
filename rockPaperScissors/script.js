const random = (j) => {
    let min = -1;
    let max = 1;
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(choice);
    btn.removeEventListener('click',random);
} 

btn = document.querySelectorAll("button");
loop:
for(let i = 0;i<3;i++){
    btn[i].addEventListener('click',random(i));
}
