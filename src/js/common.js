const CLASS_ON = "on";
const SCROLL_OFF = "scroll-off";

const scm = {

    load: () => { 
        window.onload = () => {
            const wrap = document.querySelector('.wrap');
            
            setTimeout(function(){
                wrap.style.opacity = "1";    
            }, 200);
        }
    },

    main: () => {
        const menuBtn = document.querySelector('.menu-btn');
        const header = document.querySelector('.common-header');
        const mode = document.querySelector('.mode');
        const wrap = document.querySelector('.wrap');
        const line = document.querySelectorAll('.line');
        const body = document.body;
        const form = document.querySelector('form');
        const MODE_TEXT_NAVY = "NAVY";
        const MODE_TEXT_WHITE = "WHITE";
        const MODE_LS = "mode"
        let current = localStorage.getItem('color');
    
        function handleGnbClick(){
            header.classList.toggle(CLASS_ON);
            body.classList.toggle(SCROLL_OFF);
            body.addEventListener('scoll touchmove mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        };

        function Mode(){
            
            this.on = () => {
                line.forEach(line => line.classList.add(CLASS_ON));
                mode.childNodes[1].innerText = MODE_TEXT_NAVY;
                mode.classList.add(CLASS_ON);
                wrap.classList.add(CLASS_ON);
                localStorage.setItem('color',true);
            },
            this.off = () => {
                line.forEach(line => line.classList.remove(CLASS_ON));
                mode.childNodes[1].innerText = MODE_TEXT_WHITE;
                wrap.classList.remove(CLASS_ON);
                mode.classList.remove(CLASS_ON);
                localStorage.removeItem('color');
            }

            this.load = () => {
                if(current === null){
                    modeActive.off();
                } else {
                    modeActive.on();          
                }
            }
        }

        const modeActive = new Mode();
        
        modeActive.load();

        function handleModeClick(){
               
            if(this.classList.contains(CLASS_ON)){
                modeActive.off();
            } else {
                modeActive.on();
            }
             
        };
                
        mode.addEventListener('click', handleModeClick);
        menuBtn.addEventListener('click', handleGnbClick);
    },

    scroll: () => {
        const active = document.querySelectorAll('.active');

        function handleScroll(){
            const scrollTop = window.pageYOffset + window.innerHeight - 200;
            
            active.forEach( ac => {
                const offSet = ac.offsetTop;
        
                if( scrollTop >= offSet ){
                    ac.classList.add(CLASS_ON);
                } else {
                    ac.classList.remove(CLASS_ON);
                }
            });
        }
        
        window.addEventListener('scroll', handleScroll);
    }
}
scm.load();
scm.main();
scm.scroll();