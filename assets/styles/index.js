let errors = [];

function checkValidity(input){
    let validity = input.validity;
    if (validity.valueMissing){
        errors.push('Поле'+  ' '+ input.placeholder + ' '+ 'не заполнено');
    }
    if (validity.patternMismatch){
        errors.push('Неверный формат заполнения')
    }
   
}

function checkAll(testEvent){
    errors = [];
    testEvent.preventDefault();
    let inputs = document.querySelectorAll('input[type="text"],input[type="tel"],textarea[name="comment"],input[type="file"]');
    for (let input of inputs){
        checkValidity(input);
    }
    if (document.querySelectorAll('input[name="sex"]:checked').length==0){
        errors.push( "Пожалуйста, выберите пол питомца" );
        }
    if (document.querySelector('select option:checked').value==""){
        errors.push( "Пожалуйста, укажите породу питомца" );
        }
    if (document.querySelectorAll('input[name="food"]:checked').length==0){
        errors.push( "Пожалуйста, укажите, чем питается ваш питомец" );
        }
    document.getElementById('errorsInfo').innerHTML=errors.join('.<br>');
}



document.querySelector("button").addEventListener('click', checkAll);