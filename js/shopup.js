document.getElementById('calculate-button').addEventListener('click',function(){
    
    // income part 

    const totalIncomeInput=document.getElementById('total-income');
    const totalIncomeText = totalIncomeInput.value;
    const totalIncome =parseFloat(totalIncomeText);
     totalIncomeInput.value=totalIncome;

     totalIncomeInput.value ='';
    // expenses part 


    // food cost 

    const foodInput = document.getElementById('food-cost');
    const foodInputText = foodInput.value;
    const foodCost =parseFloat(foodInputText);
    foodInput.value=foodCost;
    
    // rent cost 

    const rentInput = document.getElementById('cloth-cost');
    const rentInputText = rentInput.value;
    const rentCost =parseFloat(rentInputText);
    foodInput.value=rentCost;

//    cloths cost 

    const clothInput = document.getElementById('cloth-cost');
    const clothInputText = clothInput.value;
    const clothCost =parseFloat(clothInputText);
    foodInput.value=clothCost;

})