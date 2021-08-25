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
    const myUl = document.querySelector('.mychoice')

    let num1=0, num2=0;
    let selectedColor, selectedSize;

    myChoice(optionColor, 'color');
    myChoice(optionSize, 'size');

    function myChoice(list, option){
        for(let i=0; i<list.length; i++){
            list[i].addEventListener('click', function(){
                if(option == 'color'){
                    selectedColor = this.innerHTML;
                    list[num1].classList.remove('active');
                    list[i].classList.add('active');
                    num1 = i
                }else{
                    selectedSize = this.innerHTML;
                    list[num2].classList.remove('active');
                    list[i].classList.add('active');
                    num2 = i;
                };

                if(selectedColor != null && selectedSize != null){
                    myUl.innerHTML += `<li>
                                            <div class="seleted_info">
                                                <b>[포우먼] 크롭 싱글 자켓_SPJKB37W92</b>                            
                                                <p>- ${selectedColor}/${selectedSize}</p>
                                            </div>
                                            <div class="amount">
                                                <button>-</button>
                                                <p>1</p>
                                                <button>+</button>
                                            </div>
                                            <strong>49,900</strong>
                                            <button class="close"></button>
                                        </li>`   
                    selectedSize = null;
                    selectedColor = null;
                    optionColor[num1].classList.remove('active');
                    optionSize[num2].classList.remove('active');
                }

            })
        }
    }


    // 코디상품 토글
    const additionalBtn = document.querySelector('.additional button')
    const additionalList = document.querySelector('.add_product')

    additionalBtn.addEventListener('click', function(){
        additionalList.classList.toggle('remove')
    });


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
    const myUl = document.querySelector('.mychoice')

    let num=0, num2=0;
    let selectedColor='', selectedSize='';
/*
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
*/

    mychoice(optionColor,optionSize,selectedColor,selectedSize,num,num2);
    mychoice(optionSize,optionColor,selectedSize,selectedColor,num,num2);

    function mychoice(o1,o2,v1,v2,n1,n2){
        for(let i=0; i<o1.length; i++){
            o1[i].addEventListener('click', function(){
                v1 = this.innerHTML
                o1[n1].classList.remove('active')
                o1[i].classList.add('active')
                n1 = i
                for(let j=0; j<o2.length; j++){
                    o2[j].addEventListener('click', function(){
                        v2 = this.innerHTML
                        o2[n2].classList.remove('active')
                        o2[j].classList.add('active')
                        n2 = j
                        if( v1 != undefined && v2 != undefined ){
                            myUl.innerHTML +=`<li>
                                                    <div class="seleted_info">
                                                        <b>[포우먼] 크롭 싱글 자켓_SPJKB37W92</b>                            
                                                        <p>- ${v1}/${v2}</p>
                                                    </div>
                                                    <div class="amount">
                                                        <button>-</button>
                                                        <p>1</p>
                                                        <button>+</button>
                                                    </div>
                                                    <strong>49,900</strong>
                                                    <button class="close"></button>
                                                </li>`                             
                        }
                        console.log(v1,v2)                                     
                    });             
                }
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




    const title = document.querySelector('.title')

});

