(function(){

    const sliders = [...document.querySelectorAll('.body-personal')];
    const buttonBefore=document.querySelector('#arrow-before');
    const buttonAfter=document.querySelector('#arrow-after');
    let value;

    buttonAfter.addEventListener('click', ()=>{
        changePosition(1);

    })

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
        
    })

    const changePosition = (add)=>{
        const currentInfoPersonal = document.querySelector('.body-personal--show').dataset.id;

        value=Number(currentInfoPersonal);
        value+=add;

        sliders[Number(currentInfoPersonal)-1].classList.remove('body-personal--show')
        if(value === sliders.length+1 || value===0){
            value=value === 0?sliders.length : 1;
        }

        sliders[value-1].classList.add('body-personal--show');
    }
})();