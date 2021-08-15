(function ($) {     
    $(document).ready(function(){
        if($(window).width() > 767){
            $('.home-section').viewportChecker({
                classToAdd: 'throw_anim',
                offset: '20%'
            });
        }else{
            $('.home-section').viewportChecker({
                classToAdd: 'throw_anim',
                offset: '20%'
            });
        }

        $('body').addClass('dom-loaded');
        
    });            
})(jQuery);
