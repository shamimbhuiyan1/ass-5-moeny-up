const totalIncomeInput=document.getElementById('total-income');

    const foodInput = document.getElementById('food-cost');

    const rentInput = document.getElementById('rent-cost');

    const clothInput = document.getElementById('cloth-cost');



document.getElementById('calculate-button').addEventListener('click',function(){  
    
    // expenses section 

    let totalCostInput= document.getElementById('total-cost');
        
     const totalCost = parseFloat(foodInput.value)+parseFloat(rentInput.value)+parseFloat(clothInput.value);
     totalCostInput.innerText=totalCost;

    //  reamining balance after expences 

    let restbalanceInput =document.getElementById('rest-balance');
    
    const restBalance=parseFloat(totalIncomeInput.value)-totalCost;
    restbalanceInput.innerText=restBalance;

    // all input field clear 

    totalIncomeInput.value='';
    foodInput.value='';
    rentInput.value='';
    clothInput.value='';
});


document.getElementById('saving-button').addEventListener('click',function(){

    const savingInput = document.getElementById('saving-Amount');
    const savingAmount =parseFloat(savingInput.innerText/100)* parseFloat(totalIncomeInput.value);
    savingInput.innerText=savingAmount;

    // remaining balance after saving 

    const remainingBalanceInput = document.getElementById('remaining-balance');
    const restBalance = parseFloat(totalIncomeInput.value)-savingAmount;
    remainingBalanceInput.innerText=restBalance;

    totalIncomeInput.value='',
    savingInput.innerText='';
});

