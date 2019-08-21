const CLASS_ON = "on";

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
        const MODE_TEXT_NAVY = "NAVY";
        const MODE_TEXT_WHITE = "WHITE";
        const MODE_LS = "mode"

        function handleGnbClick(){
            header.classList.toggle(CLASS_ON);
        }

        function handleModeClick(){
            this.classList.toggle(CLASS_ON);
            wrap.classList.toggle(CLASS_ON);
            line.forEach(line => line.classList.toggle(CLASS_ON));

            if(this.classList.contains(CLASS_ON)){
                this.childNodes[1].innerText = MODE_TEXT_NAVY;
            } else {
                this.childNodes[1].innerText = MODE_TEXT_WHITE;
            }  
        }

        menuBtn.addEventListener('click', handleGnbClick);
        mode.addEventListener('click', handleModeClick);
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