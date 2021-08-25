window.addEventListener('DOMContentLoaded', function(){   

    $('header').load('inc.html header > div', header);
    $('footer').load('inc.html footer > div', footer);

    console.log('나와라')

    function header(){
        
        const topbanner = document.querySelector('.topbanner') ;
        const topbannerCloseBtn = document.querySelector('.topbanner button')
        topbannerCloseBtn.addEventListener('click',function(){
            $('.topbanner').css('display','none')
            $('.header').css({
                'position':'fixed',
                'top':'0'
            })
        })
     
        $('.menu li').hover(
            function(){
                // $(this).find('.menu_sub').addClass('active').slidDown();
                $(this).addClass('active').find('.menu_sub').stop().slideDown();
            },
            function(){
                $(this).removeClass('active').find('.menu_sub').stop().slideUp();
            }
        )

        // SCROLL
        const header = document.querySelector('.header')
        console.log(header)

        let sPos = {state: 'white',y:0,y2:0}

        function scrollUpDwon(){
            sPos.y = window.scrollY
            if(sPos.y >= sPos.y2){
                sPos.state = 'white'
            }else{
                sPos.state = 'transparent'
            }
            sPos.y2 = sPos.y;
        }

        let pageName = window.location.href.split('/').pop()        

        if(pageName == 'sub.html'){
            header.classList.add('scrolled')
        }else if(pageName == 'index.html'){
            header.classList.remove('scrolled')
            $('.header').hover(
                function(){
                    $(this).addClass('scrolled')
                },
                function(){
                    $(this).removeClass('scrolled')
                }
            )            
            window.addEventListener('scroll',function(){
                scrollUpDwon();
                if(sPos.state == 'white' && this.scrollY > 40){
                    header.classList.add('scrolled')
                    header.style.position = 'fixed'
                    header.style.top = '0'    
                }else if(sPos.state == 'transparent' && this.scrollY <= 40){
                    header.classList.remove('scrolled')
                    header.style.position = 'fixed'
                    header.style.top = '40px'
                    if(topbanner.style.display == 'none'){
                        header.style.top = '0'
                    }
                }
            });
        }

        

    }
    function footer(){
        console.log('푸터')
    }

});