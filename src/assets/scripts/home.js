(function ($) {     
    $(document).ready(function(){
        if($(window).width() > 767){
            $('.home-section').viewportChecker({
                classToAdd: 'throw_anim',
                offset: '50%'
            });
        }else{
            $('.home-section').viewportChecker({
                classToAdd: 'throw_anim',
                offset: '30%'
            });
        }

        $('body').addClass('dom-loaded');
        
    });            
})(jQuery);
