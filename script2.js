const form = document.querySelector('form');

form.addEventListener('submit', function(c){
    c.preventDefault();
    
    const Height = parseInt(document.querySelector('#Height').value);
    const Weight = parseInt(document.querySelector('#Weight').value);

    const result = document.querySelector('#result');

    if(Height === '' || Height < 0 || isNaN(Height)){
        result.innerHTML = `Give a valid height ${Height}`;
    }
    else if(Weight === '' || Weight < 0 || isNaN(Weight)){
        result.innerHTML = `Give a valid weight ${Weight}`;
    }
    else{
        const BMI = (Weight / ((Height*Height) / 10000)).toFixed(2);

        result.innerHTML = `<span>${BMI}</span>`
    }

});