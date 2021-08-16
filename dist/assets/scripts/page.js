!function($) {
    window.bLazy = new Blazy({
        offset: 350,
        loadInvisible: !0,
        breakpoints: [ {
            width: 767,
            src: "data-src-small"
        } ]
    }), $(window).scroll(function(e) {
        var scrollY = $(window).scrollTop();
        100 < scrollY ? $(".fl-social").addClass("fl-scrolled") : $(".fl-social").removeClass("fl-scrolled"), 
        5 < scrollY ? $("body").addClass("scrolled") : $("body").removeClass("scrolled");
    }), $(document).ready(function() {
        custom_plugin.hash_scroll(), custom_plugin.menuscrollToDiv(), custom_plugin.scroll_menu_active(), 
        custom_plugin.burgger_menu();
    });
}(jQuery);

var viewport = window.innerWidth, custom_plugin = {
    hash_scroll: function() {
        $("[data-scroll]").on("click", function(e) {
            var target_ = $(this).data("scroll");
            $(target_).length && ($("html, body").stop().animate({
                scrollTop: $(target_).offset().top - 100
            }, 500), e.preventDefault());
        });
    },
    burgger_menu: function() {
        $("body").on("click", ".menu_trigger", function(e) {
            var this_ = $(this), target_ = this_.data("traget");
            this_.toggleClass("active_"), $("body").toggleClass("menu_open"), $("#" + target_).toggleClass("show");
        });
    },
    menuscrollToDiv: function() {
        var offset = 100;
        1024 < viewport ? offset = 100 : viewport < 1024 && (offset = $("header").outerHeight()), 
        $("body").on("click", ".nav-link.scroll", function(e) {
            e.preventDefault(), $(document).off("scroll"), $(this).closest(".navbar-nav").length && ($(".navbar-nav a.scroll").each(function() {
                $(this).parent().removeClass("active");
            }), $(this).parent().addClass("active"));
            var target = $(this).attr("data-href"), $target = $(target);
            $(target).length ? ($("body").hasClass("menu_open") && $(".menu_trigger").trigger("click"), 
            $("html, body").stop().animate({
                scrollTop: $target.offset().top - offset
            }, 500, "swing", function() {
                $(document).on("scroll");
            })) : window.location.href = $(this).attr("href");
        });
    },
    scroll_menu_active: function() {
        var lastId, menuItems = $(".navbar-nav").find("a"), scrollItems = menuItems.map(function() {
            var item = $($(this).attr("data-href"));
            if (item.length) return item;
        }), offset = 100;
        1024 < viewport ? offset = 100 : viewport < 1024 && (offset = $("header").outerHeight()), 
        $(window).scroll(function() {
            var fromTop = $(this).scrollTop() + offset, cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop) return this;
            }), id = (cur = cur[cur.length - 1]) && cur.length ? cur[0].id : "";
            lastId !== id && (lastId = id, menuItems.parent().removeClass("active").end().filter("[data-href='#" + id + "']").parent().addClass("active"));
        });
    }
};

!function($) {
    $(document).ready(function() {
        $(".page-section").viewportChecker({
            classToAdd: "throw_anim"
        }), $("body").addClass("dom-loaded");
    });
}(jQuery);