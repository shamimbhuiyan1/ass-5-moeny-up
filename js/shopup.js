

const totalIncomeInput=document.getElementById('total-income');

const foodInput = document.getElementById('food-cost');

const rentInput = document.getElementById('rent-cost');

const clothInput = document.getElementById('cloth-cost');

document.getElementById('calculate-button').addEventListener('click',function(){
    
    

    let totalCostInput= document.getElementById('total-cost');

    
    
     const totalCost = parseFloat(foodInput.value)+parseFloat(rentInput.value)+parseFloat(clothInput.value);
     totalCostInput.innerText=totalCost;
    
    
    let restbalanceInput =document.getElementById('rest-balance');
    
    const restBalance=parseFloat(totalIncomeInput.value)-totalCost;
    restbalanceInput.innerText=restBalance;

    
});