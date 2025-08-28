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

//call button function 
document.getElementById('call_btn').addEventListener('click', function(){
    const currentCoin = parseInt(document.getElementById('current_coin').innerText);
    const serviceName = document.getElementById('service_name').innerText;
    const serviceNumber = document.getElementById('service_number').innerText;
    console.log(serviceNumber)
    if(currentCoin < 20){
        alert(`You don't have enough coins! You need at least 20 coins to make a call.`);
    }
    else{
        alert(`📞 ${serviceName} ${serviceNumber}...`);
        let newCoin = currentCoin - 20;
        document.getElementById('current_coin').innerText = newCoin;
        console.log(currentCoin);

        //Store call History 
        const currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex justify-between items-center mb-2 bg-[#FAFAFA] p-3 rounded-xl">
                    <div>
                        <h2 class=" text-[1.14rem] text-[#111111] font-inter font-semibold">${serviceName}</h2>
                        <p class=" text-[1.1rem] text-[#5C5C5C] font-hind">${serviceNumber}</p>
                    </div>
                    <div>
                        <h3 class=" text-[1.12rem] text-[#111111] font-hind">${currentTime}</h3>
                    </div>
                </div>
        `;
        const historyContainer = document.getElementById('history_container');
        historyContainer.appendChild(div);
 
    }
});
document.getElementById('call_btn_police').addEventListener('click', function(){
    const currentCoin = parseInt(document.getElementById('current_coin').innerText);
    const serviceName = document.getElementById('service_name_police').innerText;
    const serviceNumber = document.getElementById('service_number_police').innerText;
    console.log(serviceNumber)
    if(currentCoin < 20){
        alert(`You don't have enough coins! You need at least 20 coins to make a call.`);
    }
    else{
        alert(`📞 ${serviceName} ${serviceNumber}...`);
        let newCoin = currentCoin - 20;
        document.getElementById('current_coin').innerText = newCoin;
        console.log(currentCoin);

        //Store call History 
        const currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex justify-between items-center mb-2 bg-[#FAFAFA] p-3 rounded-xl">
                    <div>
                        <h2 class=" text-[1.14rem] text-[#111111] font-inter font-semibold">${serviceName}</h2>
                        <p class=" text-[1.1rem] text-[#5C5C5C] font-hind">${serviceNumber}</p>
                    </div>
                    <div>
                        <h3 class=" text-[1.12rem] text-[#111111] font-hind">${currentTime}</h3>
                    </div>
                </div>
        `;
        const historyContainer = document.getElementById('history_container');
        historyContainer.appendChild(div);
 
    }
});
document.getElementById('call_btn_fire').addEventListener('click', function(){
    const currentCoin = parseInt(document.getElementById('current_coin').innerText);
    const serviceName = document.getElementById('service_name_fire').innerText;
    const serviceNumber = document.getElementById('service_number_fire').innerText;
    console.log(serviceNumber)
    if(currentCoin < 20){
        alert(`You don't have enough coins! You need at least 20 coins to make a call.`);
    }
    else{
        alert(`📞 ${serviceName} ${serviceNumber}...`);
        let newCoin = currentCoin - 20;
        document.getElementById('current_coin').innerText = newCoin;
        console.log(currentCoin);

        //Store call History 
        const currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex justify-between items-center mb-2 bg-[#FAFAFA] p-3 rounded-xl">
                    <div>
                        <h2 class=" text-[1.14rem] text-[#111111] font-inter font-semibold">${serviceName}</h2>
                        <p class=" text-[1.1rem] text-[#5C5C5C] font-hind">${serviceNumber}</p>
                    </div>
                    <div>
                        <h3 class=" text-[1.12rem] text-[#111111] font-hind">${currentTime}</h3>
                    </div>
                </div>
        `;
        const historyContainer = document.getElementById('history_container');
        historyContainer.appendChild(div);
    }
});
document.getElementById('call_btn_ambulance').addEventListener('click', function(){
    const currentCoin = parseInt(document.getElementById('current_coin').innerText);
    const serviceName = document.getElementById('service_name_ambulance').innerText;
    const serviceNumber = document.getElementById('service_number_ambulance').innerText;
    console.log(serviceNumber)
    if(currentCoin < 20){
        alert(`You don't have enough coins! You need at least 20 coins to make a call.`);
    }
    else{
        alert(`📞 ${serviceName} ${serviceNumber}...`);
        let newCoin = currentCoin - 20;
        document.getElementById('current_coin').innerText = newCoin;
        console.log(currentCoin);

        //Store call History 
        const currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex justify-between items-center mb-2 bg-[#FAFAFA] p-3 rounded-xl">
                    <div>
                        <h2 class=" text-[1.14rem] text-[#111111] font-inter font-semibold">${serviceName}</h2>
                        <p class=" text-[1.1rem] text-[#5C5C5C] font-hind">${serviceNumber}</p>
                    </div>
                    <div>
                        <h3 class=" text-[1.12rem] text-[#111111] font-hind">${currentTime}</h3>
                    </div>
                </div>
        `;
        const historyContainer = document.getElementById('history_container');
        historyContainer.appendChild(div);
 
    }
});
document.getElementById('call_btn_women').addEventListener('click', function(){
    const currentCoin = parseInt(document.getElementById('current_coin').innerText);
    const serviceName = document.getElementById('service_name_women').innerText;
    const serviceNumber = document.getElementById('service_number_women').innerText;
    console.log(serviceNumber)
    if(currentCoin < 20){
        alert(`You don't have enough coins! You need at least 20 coins to make a call.`);
    }
    else{
        alert(`📞 ${serviceName} ${serviceNumber}...`);
        let newCoin = currentCoin - 20;
        document.getElementById('current_coin').innerText = newCoin;
        console.log(currentCoin);

        //Store call History 
        const currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex justify-between items-center mb-2 bg-[#FAFAFA] p-3 rounded-xl">
                    <div>
                        <h2 class=" text-[1.14rem] text-[#111111] font-inter font-semibold">${serviceName}</h2>
                        <p class=" text-[1.1rem] text-[#5C5C5C] font-hind">${serviceNumber}</p>
                    </div>
                    <div>
                        <h3 class=" text-[1.12rem] text-[#111111] font-hind">${currentTime}</h3>
                    </div>
                </div>
        `;
        const historyContainer = document.getElementById('history_container');
        historyContainer.appendChild(div);
 
    }
});
document.getElementById('call_btn_anti_Corruption').addEventListener('click', function(){
    const currentCoin = parseInt(document.getElementById('current_coin').innerText);
    const serviceName = document.getElementById('service_name_anti_Corruption').innerText;
    const serviceNumber = document.getElementById('service_number_anti_Corruption').innerText;
    console.log(serviceNumber)
    if(currentCoin < 20){
        alert(`You don't have enough coins! You need at least 20 coins to make a call.`);
    }
    else{
        alert(`📞 ${serviceName} ${serviceNumber}...`);
        let newCoin = currentCoin - 20;
        document.getElementById('current_coin').innerText = newCoin;
        console.log(currentCoin);

        //Store call History 
        const currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex justify-between items-center mb-2 bg-[#FAFAFA] p-3 rounded-xl">
                    <div>
                        <h2 class=" text-[1.14rem] text-[#111111] font-inter font-semibold">${serviceName}</h2>
                        <p class=" text-[1.1rem] text-[#5C5C5C] font-hind">${serviceNumber}</p>
                    </div>
                    <div>
                        <h3 class=" text-[1.12rem] text-[#111111] font-hind">${currentTime}</h3>
                    </div>
                </div>
        `;
        const historyContainer = document.getElementById('history_container');
        historyContainer.appendChild(div);
 
    }
});
document.getElementById('call_btn_electricity').addEventListener('click', function(){
    const currentCoin = parseInt(document.getElementById('current_coin').innerText);
    const serviceName = document.getElementById('service_name_electricity').innerText;
    const serviceNumber = document.getElementById('service_number_electricity').innerText;
    console.log(serviceNumber)
    if(currentCoin < 20){
        alert(`You don't have enough coins! You need at least 20 coins to make a call.`);
    }
    else{
        alert(`📞 ${serviceName} ${serviceNumber}...`);
        let newCoin = currentCoin - 20;
        document.getElementById('current_coin').innerText = newCoin;
        console.log(currentCoin);

        //Store call History 
        const currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex justify-between items-center mb-2 bg-[#FAFAFA] p-3 rounded-xl">
                    <div>
                        <h2 class=" text-[1.14rem] text-[#111111] font-inter font-semibold">${serviceName}</h2>
                        <p class=" text-[1.1rem] text-[#5C5C5C] font-hind">${serviceNumber}</p>
                    </div>
                    <div>
                        <h3 class=" text-[1.12rem] text-[#111111] font-hind">${currentTime}</h3>
                    </div>
                </div>
        `;
        const historyContainer = document.getElementById('history_container');
        historyContainer.appendChild(div);
 
    }
});
document.getElementById('call_btn_brac').addEventListener('click', function(){
    const currentCoin = parseInt(document.getElementById('current_coin').innerText);
    const serviceName = document.getElementById('service_name_brac').innerText;
    const serviceNumber = document.getElementById('service_number_brac').innerText;
    console.log(serviceNumber)
    if(currentCoin < 20){
        alert(`You don't have enough coins! You need at least 20 coins to make a call.`);
    }
    else{
        alert(`📞 ${serviceName} ${serviceNumber}...`);
        let newCoin = currentCoin - 20;
        document.getElementById('current_coin').innerText = newCoin;
        console.log(currentCoin);

        //Store call History 
        const currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex justify-between items-center mb-2 bg-[#FAFAFA] p-3 rounded-xl">
                    <div>
                        <h2 class=" text-[1.14rem] text-[#111111] font-inter font-semibold">${serviceName}</h2>
                        <p class=" text-[1.1rem] text-[#5C5C5C] font-hind">${serviceNumber}</p>
                    </div>
                    <div>
                        <h3 class=" text-[1.12rem] text-[#111111] font-hind">${currentTime}</h3>
                    </div>
                </div>
        `;
        const historyContainer = document.getElementById('history_container');
        historyContainer.appendChild(div);
 
    }
});
document.getElementById('call_btn_Railway').addEventListener('click', function(){
    const currentCoin = parseInt(document.getElementById('current_coin').innerText);
    const serviceName = document.getElementById('service_name_Railway').innerText;
    const serviceNumber = document.getElementById('service_number_Railway').innerText;
    console.log(serviceNumber)
    if(currentCoin < 20){
        alert(`You don't have enough coins! You need at least 20 coins to make a call.`);
    }
    else{
        alert(`📞 ${serviceName} ${serviceNumber}...`);
        let newCoin = currentCoin - 20;
        document.getElementById('current_coin').innerText = newCoin;
        console.log(currentCoin);

        //Store call History 
        const currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex justify-between items-center mb-2 bg-[#FAFAFA] p-3 rounded-xl">
                    <div>
                        <h2 class=" text-[1.14rem] text-[#111111] font-inter font-semibold">${serviceName}</h2>
                        <p class=" text-[1.1rem] text-[#5C5C5C] font-hind">${serviceNumber}</p>
                    </div>
                    <div>
                        <h3 class=" text-[1.12rem] text-[#111111] font-hind">${currentTime}</h3>
                    </div>
                </div>
        `;
        const historyContainer = document.getElementById('history_container');
        historyContainer.appendChild(div);
 
    }
});

//copy button function
document.getElementById('btn_copy').addEventListener('click',function(){
    const current_copy = parseInt(document.getElementById('current_copy').innerText);
    const service_number = document.getElementById('service_number').innerText;

    document.getElementById('current_copy').innerText = current_copy + 1;
    navigator.clipboard.writeText(service_number);
    alert(`The number has been copied: ${service_number}`);

});

document.getElementById('btn_copy_police').addEventListener('click',function(){
    const current_copy = parseInt(document.getElementById('current_copy').innerText);
    const service_number = document.getElementById('service_number_police').innerText;

    document.getElementById('current_copy').innerText = current_copy + 1;
    navigator.clipboard.writeText(service_number);
    alert(`The number has been copied: ${service_number}`);

});

document.getElementById('btn_copy_fire').addEventListener('click',function(){
    const current_copy = parseInt(document.getElementById('current_copy').innerText);
    const service_number = document.getElementById('service_number_fire').innerText;

    document.getElementById('current_copy').innerText = current_copy + 1;
    navigator.clipboard.writeText(service_number);
    alert(`The number has been copied: ${service_number}`);

});

document.getElementById('btn_copy_ambulance').addEventListener('click',function(){
    const current_copy = parseInt(document.getElementById('current_copy').innerText);
    const service_number = document.getElementById('service_number_ambulance').innerText;

    document.getElementById('current_copy').innerText = current_copy + 1;
    navigator.clipboard.writeText(service_number);
    alert(`The number has been copied: ${service_number}`);

});

document.getElementById('btn_copy_women').addEventListener('click',function(){
    const current_copy = parseInt(document.getElementById('current_copy').innerText);
    const service_number = document.getElementById('service_number_women').innerText;

    document.getElementById('current_copy').innerText = current_copy + 1;
    navigator.clipboard.writeText(service_number);
    alert(`The number has been copied: ${service_number}`);

});

document.getElementById('btn_copy_anti_Corruption').addEventListener('click',function(){
    const current_copy = parseInt(document.getElementById('current_copy').innerText);
    const service_number = document.getElementById('service_number_anti_Corruption').innerText;

    document.getElementById('current_copy').innerText = current_copy + 1;
    navigator.clipboard.writeText(service_number);
    alert(`The number has been copied: ${service_number}`);

});

document.getElementById('btn_copy_electricity').addEventListener('click',function(){
    const current_copy = parseInt(document.getElementById('current_copy_electricity').innerText);
    const service_number = document.getElementById('service_number').innerText;

    document.getElementById('current_copy').innerText = current_copy + 1;
    navigator.clipboard.writeText(service_number);
    alert(`The number has been copied: ${service_number}`);

});

document.getElementById('btn_copy_brac').addEventListener('click',function(){
    const current_copy = parseInt(document.getElementById('current_copy').innerText);
    const service_number = document.getElementById('service_number_brac').innerText;

    document.getElementById('current_copy').innerText = current_copy + 1;
    navigator.clipboard.writeText(service_number);
    alert(`The number has been copied: ${service_number}`);

});

document.getElementById('btn_copy_Railway').addEventListener('click',function(){
    const current_copy = parseInt(document.getElementById('current_copy_Railway').innerText);
    const service_number = document.getElementById('service_number_Railway').innerText;

    document.getElementById('current_copy').innerText = current_copy + 1;
    navigator.clipboard.writeText(service_number);
    alert(`The number has been copied: ${service_number}`);

});


// clear button function 
document.getElementById('btn_clear').addEventListener('click', function(){
    const parent = document.getElementById('history_container');
    console.log(parent);
    parent.innerHTML = '';
});