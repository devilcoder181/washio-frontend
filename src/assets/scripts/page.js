(function ($) {
    
    $(document).ready(function(){        
        
        $('.page-section').viewportChecker({
            classToAdd: 'throw_anim',          
        });
    
        
        $('body').addClass('dom-loaded');
    
    });
  
})(jQuery);  
