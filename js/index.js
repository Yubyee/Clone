window.addEventListener('DOMContentLoaded', function(){
    
    $.ajax({
      url:'json/index.json',
      success:function(a){
            console.log('성공')    

            let contents='';

            // con01
            a.mainRolling.forEach(function(v){
                contents += `<li class="main_rolling">
                                <a><img src="${v.img}" alt=""></a>                    
                            </li>`                
            });   
            $('.slide01').html(contents);       
            $('.slide01').slick({
                arrows: true,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                autoplay: true,
                autoplaySpeed: 5000
            });
        
            // con02
            contents='';
            a.tshirt.forEach(function(v){                
                contents +=`<li>
                                <figure>
                                    <img src="${v.img}" alt="">
                                </figure>
                                <div class="detail">
                                    <div class="tshirt_title">
                                        <a>${v.title}</a>
                                        <button>like</button>
                                    </div>
                                    <div class="price">
                                        <span>7,900</span>
                                        <span>${v.originPrice}</span>
                                        <span>${v.rate}%</span>
                                    </div>
                                    <p>리뷰 ${v.review}건</p> 
                                    <div class="stock">
                                        <img src="${v.stock}" alt="">
                                    </div>
                                </div>                        
                            </li>`                
            });
            $('.slide02').html(contents);
            $('.slide02').slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 8000
            });
            

            // con03
            contents='';
            a.cool.forEach(function(v){
                contents +=`<li class="cool_rolling">
                                <figure>
                                    <img src="${v.img}" alt="">
                                </figure>
                                <div class="detail">
                                    <div class="tshirt_title">
                                        <a>${v.title}</a>
                                    </div>
                                    <div class="price">
                                        <span>${v.salePrice}</span>
                                        <span>${v.originPrice}</span>
                                        <span>${v.rate}%</span>
                                    </div>
                                    <p>리뷰 ${v.review}건</p> 
                                </div>                       
                            </li>`
                
            });
            $('.slide03').html(contents);
            $('.slide03').slick({
                arrows: true,
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 8000
            });

            // con04 -> 스크립트 없음

            // con05
            const weeklyCategoties = document.querySelectorAll('.categories li');

            let num=0;
            for(let i=0; i<weeklyCategoties.length; i++){   
                weeklyCategoties[i].addEventListener('click', function(){ 
                    weeklyCategoties[num].classList.remove('active');  
                    weeklyCategoties[i].classList.add('active');         
                    num = i;
                    listUp(weeklyCategoties[i].textContent);
                });
            };
            
            function listUp(type){
                contents='';
                a[type].forEach(function(v){
                    contents += `<li>
                                    <figure>
                                        <img src="${v.img}" alt="">
                                        <figcaption>${v.number}</figcaption>
                                    </figure>
                                    <div class="detail">
                                        <div class="tshirt_title">
                                            <a>${v.title}</a>
                                            <button>like</button>
                                        </div>
                                        <div class="price">
                                            <span>${v.salePrice}</span>
                                            <span>${v.originPrice}</span>
                                            <span>${v.rate}</span>
                                        </div>
                                        <p>리뷰 ${v.review}건</p>
                                        <div class="stock">
                                            <img src="${v.order}" alt="">
                                        </div> 
                                    </div>                       
                                </li>`
                })
                $('.gallery01').html(contents);

                let weeklyNumber = document.querySelectorAll('.gallery01 figcaption');

                for(let i=0; i<weeklyNumber.length; i++){
                    if(weeklyNumber[i].textContent <5){
                        weeklyNumber[i].style = 'background: #e86434'                        
                    }else{
                        weeklyNumber[i].style = 'background: #b5b5b5'
                    }
                }
            }
            listUp('women');
            
            // con06
            contents='';
            for(let i=0; i<16; i++){
                contents +=`<img src="${a.review[i].img}" alt="">`                
            }
            $('.review').html(contents);   
            contents='';
            for(let i=16; i<a.review.length; i++){
                contents +=`<img src="${a.review[i].img}" alt="">`                
            }
            $('.review2').html(contents);   
            $('.gallery02').slick({
                arrows: true,
                dots: true,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                autoplay: false
            });

            // con07
            contents='';
            a.trend.forEach(function(v){
                contents += `<li>      
                                <a>
                                    <p>
                                        <img src="${v.img}" alt="">
                                    </p>      
                                    <span>${v.title}</span>
                                </a>                             
                            </li>  `
            });
            $('.gallery03').html(contents);
            $('.gallery03 li').hover(
                function(){
                    $(this).find('img').css({
                        transform: 'scale(1.1)'
                    });
                },
                function(){
                    $(this).find('img').css({
                        transform: 'scale(1)'
                    });
                }
            )

            // con08
            contents='';  
            a.lookbook.forEach(function(v){
                contents +=`<li>
                                <a>
                                    <figure>
                                        <img src="${v.img}" alt="">
                                        <figcaption>${v.subTitle}</figcaption>
                                    </figure>
                                    <p>${v.title}</p>
                                </a>                        
                            </li>  `
            });   
            $('.slide04 ul').html(contents)  
            $('.slide04 ul').slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 2.5,
                slidesToScroll: 1,
                autoplay: false
            });   

            $('.slide04 li').hover(
                function(){
                    $(this).find('img').css({
                        transform: 'scale(1.1)'
                    });
                },
                function(){
                    $(this).find('img').css({
                        transform: 'scale(1)'
                    });
                }
            )

            // con09
            contents='';
            a.snap.forEach(function(v){                
                contents +=`<li class="snap_slide">
                                <a>
                                    <div class="description">
                                        <span>
                                            ${v.title}
                                        </span>
                                        <span>
                                            ${v.name}
                                        </span>
                                    </div>
                                    <p>
                                        <img src="${v.img}" alt="">                    
                                    </p>      
                                </a>                                                 
                            </li>`
            });
            $('.slide05').html(contents);
            $('.slide05').slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
            });

            $('.snap_slide').hover(
                function(){
                    $(this).find('.description').addClass('active');
                },
                function(){
                    $(this).find('.description').removeClass('active');
                }
            )

/*
            $('header li').hover(
                function(){
                    // 마우스 올렸을때
                    // $('header li > div').slideDown(); 
                    $(this).find('div').stop().slideDown();                
                },             
                function(){
                    // 마우스 내렸을때
                    console.log('off')
                    $(this).find('div').stop().slideUp();
                } 
            );

*/

        },
        error:function(){console.log('실패')}
  
    })

});
