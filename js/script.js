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

// clear button function 
document.getElementById('btn_clear').addEventListener('click', function(){
    const parent = document.getElementById('history_container');
    console.log(parent);
    parent.innerHTML = '';
});