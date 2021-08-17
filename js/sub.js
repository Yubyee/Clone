window.addEventListener('DOMContentLoaded', function(){

    console.log('나와라')


    // 공유하기
    const shareImg = document.querySelector('.share_btn')
    const sharePopup = document.querySelector('.popup_wrap')

    shareImg.addEventListener('click' , function(){
        sharePopup.classList.add('active')
    })

    const shareClose = document.querySelector('.share_close img')

    shareClose.addEventListener('click', function(){
        sharePopup.classList.remove('active')
    })

   
    // 옵션선택 + 리스트추가
    const optionColor = document.querySelectorAll('.option_color li')
    const optionSize = document.querySelectorAll('.option_size li')
    const myUl = document.querySelector('mychoice')
    const myList = document.createElement('li');

    let num=0, num2=0;
    let selectedColor='', selectedSize='';

    optionSelect(optionColor,num);
    optionSelect(optionSize,num2);

    function optionSelect(v,n){
        for(let i=0; i<v.length; i++){
            v[i].addEventListener('click', function(){
                v[n].classList.remove('active')
                v[i].classList.add('active')
                n=i;
            });
        }
    }
    
    myChoice(optionColor,selectedColor);
    myChoice(optionSize,selectedSize);

    function myChoice(v,s){
        for(let i=0; i<v.length; i++){
            v[i].addEventListener('click', function(){
                s = this.innerHTML
            });
        }
    }






    // 코디상품 토글
    const additionalBtn = document.querySelector('.additional button')
    const additionalList = document.querySelector('.add_product')

    additionalBtn.addEventListener('click', function(){
        additionalList.classList.toggle('remove')
    });


    


    const title = document.querySelector('.title')

});

