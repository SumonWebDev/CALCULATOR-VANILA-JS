const btns=document.querySelectorAll('.btn');
const screen=document.querySelector('.screen');
const equalBtn=document.querySelector('.btn-equal');
const clearBtn=document.querySelector('.clear-equal');

//btns button function
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        let number=btns[i].getAttribute('data-num');
        screen.value +=number;
    })
}
//eual button function
equalBtn.addEventListener('click',function(){
    if(screen.value===''){
        alert('input is empty');
    }
    let value=eval(screen.value);
    screen.value=value;
})

//clear button function
clearBtn.addEventListener('click',function(){
    screen.value='';
})