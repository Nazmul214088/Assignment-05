//Heart button function 
document.getElementById('current_heart').style.cursor= "pointer";
const clickHeart = document.getElementsByClassName('clickHeart');
for(let i = 0; i<clickHeart.length; i++){
    clickHeart[i].addEventListener('click', function(){
        let currentHeart = parseInt(document.getElementById('current_heart').innerText);
        console.log(currentHeart)
        document.getElementById('current_heart').innerText = currentHeart + 1;
    
    });

}