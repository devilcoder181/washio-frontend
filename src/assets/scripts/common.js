(function ($) {
  window.bLazy = new Blazy({
    offset: 350,
    loadInvisible: true,
    breakpoints: [
      {
        width: 767,
        src: "data-src-small",
      },
    ],
  });
  $(window).scroll(function (e) {
    var scrollY = $(window).scrollTop();
    scrollY > 100
      ? $(".fl-social").addClass("fl-scrolled")
      : $(".fl-social").removeClass("fl-scrolled");
    scrollY > 5
      ? $("body").addClass("scrolled")
      : $("body").removeClass("scrolled");
  });

  $(document).ready(function () {
    //Link click
    custom_plugin.hash_scroll();

    // Menu link smooth scroll click
    custom_plugin.menuscrollToDiv();

    // Scroll Menu active
    custom_plugin.scroll_menu_active();

    // Burger menu click
    custom_plugin.burgger_menu();
 

  });
})(jQuery);

var viewport = window.innerWidth;
var custom_plugin = {
  hash_scroll: function () {
    $("[data-scroll]").on("click", function (e) {
      var this_ = $(this),
        target_ = this_.data("scroll");

      if ($(target_).length) {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(target_).offset().top - 100,
            },
            500
          );
        e.preventDefault();
      }
    });
  },
  burgger_menu: function () {
    // Bugger Menu click
    $("body").on("click", ".menu_trigger", function (e) {
      var this_ = $(this),
        target_ = this_.data("traget");

      this_.toggleClass("active_");
      $("body").toggleClass("menu_open");
      $("#" + target_).toggleClass("show");
    });
  },
  menuscrollToDiv: function () {
    var offset = 100;
    if (viewport > 1024) {
      offset = 100;
    } else if (viewport < 1024) {
      offset = $("header").outerHeight();
    }

    $("body").on("click", ".nav-link.scroll", function (e) {
      e.preventDefault();
      $(document).off("scroll");
      if ($(this).closest(".navbar-nav").length) {
        $(".navbar-nav a.scroll").each(function () {
          $(this).parent().removeClass("active");
        });
        $(this).parent().addClass("active");
      }

      //  new scripts
      var target = $(this).attr("data-href");
      var $target = $(target);

      if (!$(target).length) {
        window.location.href = $(this).attr("href");
      } else {
        // remove the menu active
        if ($("body").hasClass("menu_open")) {
          $(".menu_trigger").trigger("click");
        }

        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top - offset,
            },
            500,
            "swing",
            function () {
              $(document).on("scroll");
            }
          );
      }
    });
  },
  scroll_menu_active: function () {
    var lastId,
      topMenu = $(".navbar-nav"),
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function () {
        var item = $($(this).attr("data-href"));
        if (item.length) {
          return item;
        }
      });
    var offset = 100;
    if (viewport > 1024) {
      offset = 100;
    } else if (viewport < 1024) {
      offset = $("header").outerHeight();
    }

    $(window).scroll(function () {
      var fromTop = $(this).scrollTop() + offset;
      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
      });
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
      if (lastId !== id) {
        lastId = id;
        menuItems
          .parent()
          .removeClass("active")
          .end()
          .filter("[data-href='#" + id + "']")
          .parent()
          .addClass("active");
      }
    });
  }
};
