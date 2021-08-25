window.addEventListener('DOMContentLoaded', function(){
  
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
/*
    let product = [
        {
            name : '[포우먼] 크롭 싱글 자켓_SPJKB37W92',
            color : ['(19)BLACK','(35)BEIGE','(49)KHAKI'],
            size : ['s(085)','s(090)'],
            price : '49000'
        }
    ];
    let opt = {color:[false,0],size:[false,0]}, list=[];
    myChoice();

    function myChoice(){
        for(let i=0; i<optionColor.length; i++){
            optionColor[i].addEventListener('click', function(){
                opt.color[1] = i;
                opt.color[0]=true; 
                print();
            });
        }
        for(let i=0; i<optionSize.length; i++){
            optionSize[i].addEventListener('click', function(){
                opt.size[1] = i;
                opt.size[0]=true;
                print();
            });
        }

        function print(){
            

            if(opt.size[0] && opt.color[0]){
                list.push(
                    [
                        product[0].color[opt.color[1]], 
                        product[0].size[opt.size[1]]
                    ]
                );

                // list.forEach(function(v,k){
                //     if(){
                //         alert('아래 리스트에서 이미 선택된 옵션을 삭제 후 다시 선택해 주세요.')
                //         return;
                //     }
                // });

                myUl.innerHTML = '';
                list.forEach(function(v,k){
                    myUl.innerHTML += `<li class="">
                                            <div class="seleted_info">
                                                <b>[포우먼] 크롭 싱글 자켓_SPJKB37W92</b>                            
                                                <p>- ${list[k][0]}/${list[k][1]}</p>
                                            </div>
                                            <div class="amount">
                                                <button>-</button>
                                                <p>1</p>
                                                <button>+</button>
                                            </div>
                                            <strong>49,900</strong>
                                            <button class="close"></button>
                                        </li>`;
                });
                opt.size[0]=false;
                opt.color[0]=false;
            }
        }
    }
*/

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
                    let checkOption = document.querySelector(`.mychoice .color${num1}.size${num2}`)
                    if(checkOption) {
                        alert('아래 리스트에서 이미 선택된 옵션을 삭제 후 다시 선택해 주세요.')
                    }else{
                        myUl.innerHTML += `<li class="color${num1} size${num2} mine">
                                                <div class="seleted_info">
                                                    <b>[포우먼] 크롭 싱글 자켓_SPJKB37W92</b>                            
                                                    <p>- ${selectedColor}/${selectedSize}</p>
                                                </div>
                                                <div class="amount">
                                                    <button class="btn_minus">-</button>
                                                    <p>1</p>
                                                    <button class="btn_plus">+</button>
                                                </div>
                                                <strong class="product_price">49900</strong>
                                                <button class="close"></button>
                                            </li>`
                    }                    
                    selectedSize = null;
                    selectedColor = null;
                    optionColor[num1].classList.remove('active');
                    optionSize[num2].classList.remove('active');    
                    
                    total();
                }
                

                // 버튼 홀짝으로 번호 생성해서 해보기
                
                // 리스트 생성 후 수량 및 가격 변경
                $('.btn_minus').on('click', function(){
                    let count = this.nextElementSibling.textContent
                    if(count>1){
                        count--;
                        this.nextElementSibling.textContent = count
                        $(this).parents('.amount').siblings('strong').text(49900*count)
                        total();
                    }
                });
                $('.btn_plus').on('click', function(){
                    let count = this.previousElementSibling.textContent
                    count++;
                    this.previousElementSibling.textContent = count
                    $(this).parents('.amount').siblings('strong').text(49900*count)
                    total();
                });
``
                // 리스트 삭제
                $('.close').on('click', function(){
                    $(this).parents('li').remove();
                    total();
                })                
            })
        }        
    }

    function total(){
        // 총 가격        
        let totalPrice = 0
        $('.product_price').each(function(i,e){
            // console.log(i,parseInt(e.innerHTML.replaceAll(',','')))
            totalPrice += parseInt(e.innerHTML)
        });

        // 총 갯수
        let totalAmount = 0
        $('.amount p').each(function(i,e){
            totalAmount += parseInt(e.innerHTML)
        });

        // 넣고 빼기
        if(totalPrice == 0){
            $('.total').css('display', 'none')
        }else{
            $('.total').css('display', 'flex')
            $('.total_price em').text(totalPrice)
            $('.total_price small').text(`(${totalAmount}개)`)
        }        
    }

    // 코디상품 토글
    const additionalBtn = document.querySelector('.additional button')
    const additionalList = document.querySelector('.add_product')

    additionalBtn.addEventListener('click', function(){
        additionalList.classList.toggle('remove')
    });


    // 우측 영역 고정      

    const detailSelect = document.querySelector('.detail_select')
    const con01 = document.querySelector('.con01')
    

    // 사이즈 찾기
    const sizeSerchBtn = document.querySelector('.size_serch');
    const myfit = document.querySelector('.myfit');
    const sizeAnswer = document.createElement('p');

    $('.myfit input[type=number]').bind('keyup mouseup', function () {
        if( $('.cm').val() > 0 && $('.kg').val() > 0 ){
            $('.myfit input[type=submit]').addClass('active')
        }        
    });

    sizeSerchBtn.addEventListener('click',function(){
        let cm = $('.cm').val();
        let kg = $('.kg').val()

        let answer;

        if(cm <= 160 && kg <= 50){
            answer = '추천 사이즈 S'
        }else{
            answer = '추천 사이즈 M'
        }

        sizeAnswer.textContent = answer
        myfit.append(sizeAnswer);
    })

    const feedbackBtn = document.querySelector('.feedback_btn_title')
    const feedbackUl = document.querySelector('.feedback_btn ul')
    const feedbackClose = document.querySelector('.feedback_close')   

    feedbackBtn.addEventListener('click', function(){        
        feedbackUl.style.display = 'block';
        feedbackClose.style.display = 'block';
    });

    feedbackClose.addEventListener('click', function(){
        feedbackUl.style.display = 'none';
        feedbackClose.style.display = 'none';
    })

    $('.feedback_btn li').each(function(){
        let txt = parseInt($(this).find('span').text());
        $(this).find('.black').css('width',txt+'%')
    });

    console.log(rate)


});

