
 
    window.addEventListener('scroll', function(e) {
        const svgLetter = document.querySelector('.svgLetter')
    derniere_position_de_scroll_connue = window.scrollY;
    console.log(derniere_position_de_scroll_connue)
    if(derniere_position_de_scroll_connue > 455){
      svgLetter.classList.add('animationSvg')
    }
    if(derniere_position_de_scroll_connue < 455){
      svgLetter.classList.remove('animationSvg')
    }
    
    
    })