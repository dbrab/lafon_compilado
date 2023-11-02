$(function () {
    "use strict";

    /* ===== Preloader ===== */

    $(function () {
        $(".preloader").fadeOut();
    });

    /* ===== Megamenu ===== */

    jQuery(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation()
    });

    /* ===== This is the active menu js ===== */

    $(function () {
        var url = window.location;
        var element = $('ul.sidebar-menu a').filter(function () {
            return this.href === url || url.href.indexOf(this.href) === 0;
        }).addClass('active').parent().parent().parent().parent().addClass('selected').parent();
        if (element.is('li')) {
            element.addClass('active');
        }
    });

    // ============================================================== 
    // This is for the top header part and sidebar part
    // ==============================================================  

    var set = function () {
        var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
        var topOffset = 55;
        if (width < 1170) {
            $("body").addClass("mini-sidebar");
            $('.mini-nav li.selected').addClass('cnt-none');
            $("#togglebtn").hide();
        } else {
            $("body").removeClass("mini-sidebar");
            $('.mini-nav > li.selected').removeClass('cnt-none');
            $("#togglebtn").show();
        }
        if (width < 1549) {
            if ($('.right-side-toggle i').hasClass('ti-arrow-left')) {
                $("body").addClass('rmv-right-panel');
                $('.right-side-toggle i').addClass('ti-arrow-left');
            } else {
                $("body").removeClass('rmv-right-panel');
                $('.right-side-toggle i').addClass('ti-arrow-right');

            }
         

        } else {
            $("body").removeClass('rmv-right-panel');
            $('.right-side-toggle i').removeClass('ti-arrow-left');
        }
        var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $(".page-wrapper").css("min-height", (height) + "px");
        }
    };
    $(window).ready(set);
    $(window).on("resize", set);

    /* ===== This is for click on Sidebar open close button ===== */

    $(".mini-nav > li, #togglebtn").on('click', function () {
        if ($("body").hasClass("rmv-sidebarmenu")) {
            $("body").trigger("resize");
            $("#togglebtn").hide();
        } else {
            $("body").trigger("resize");
            $("#togglebtn").show();
        }
    });
    $(".mini-nav").on('click','li' ,function () {
        if ($("body").hasClass("rmv-sidebarmenu")) {
            $("body").trigger("resize");
            $("#togglebtn").hide();
        } else {
            $("body").trigger("resize");
            $("#togglebtn").show();
        }
    });

    $(".mini-nav > li, #togglebtn").on('click', function () {
        if ($("body").hasClass("mini-sidebar")) {
            $('.mini-nav > li.selected').removeClass('cnt-none');
            $("#togglebtn").show();
        }
    });

    /* ===== Sidemenu toggle ===== */

    $(".mini-nav").css("overflow", "hidden").parent().css("overflow", "visible");

    $('#togglebtn').on("click", function () {
        $('#togglebtn').hide();
        $('.mini-nav > li.selected').addClass('cnt-none');
    });

    $('.mini-nav > li').on("click", function () {
        $('#togglebtn').show();
        $('.mini-nav > li.selected').removeClass('cnt-none');
        $("body").removeClass('rmv-sidebarmenu');
    });

    $('.mini-nav > li').on('click', function () {
        $('.mini-nav > li.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.mini-nav').on("click", "li", function () {
        $('#togglebtn').show();
        $('.mini-nav > li.selected').removeClass('cnt-none');
        $("body").removeClass('rmv-sidebarmenu');
    });

    $('.mini-nav ').on('click', 'li', function () {
        $('.mini-nav > li.selected').removeClass('selected');
        $(this).addClass('selected');
    });

    $.sidemenu = function (menu) {
        var animationSpeed = 300;
        $(menu).on('click', 'li a', function (e) {
            if ($(this).next().is('.sub-menu') && $(this).next().is(':visible')) {
                $(this).next().slideUp(animationSpeed, function () {
                    $(this).next().removeClass('menu-open');
                });
                $(this).next().parent("li").removeClass("active");
            } else if (($(this).next().is('.sub-menu')) && (!$(this).next().is(':visible'))) {
                var parent = $(this).parents('ul').first();
                parent.find('ul:visible').slideUp(animationSpeed).removeClass('menu-open');
                $(this).next().slideDown(animationSpeed, function () {
                    $(this).next().addClass('menu-open');
                    parent.find('li.active').removeClass('active');
                    $(this).parent("li").addClass('active');
                });
            }
        });
    }
    $.sidemenu($('.sidebar-menu'));

    /* ===== Add or removed class from body ===== */

    $('#togglebtn').on('click', function () {
        $("body").removeClass('mini-sidebar');

        $("body").addClass('mini-sidebar');
    });

    /* ===== Open-Close-right sidebar ===== */

    $(".right-side-toggle").on('click', function () {
        $("body").toggleClass('rmv-right-panel');
        $('.right-side-toggle i').toggleClass('ti-arrow-left');
    });

    // ============================================================== 
    // This is for the floating labels
    // ============================================================== 

    $('.floating-labels .form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    // ============================================================== 
    // tooltip
    // ============================================================== 

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    // ============================================================== 
    // Popover
    // ==============================================================

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    // ============================================================== 
    // Perfact scrollbar
    // ============================================================== 

    $('.mini-nav, .sidebar-menu, .right-side-panel, .message-center, .right-sidebar').perfectScrollbar();

    // ============================================================== 
    // Resize all elements
    // ============================================================== 

    $("body").trigger("resize");

    // ============================================================== 
    // To do list
    // ============================================================== 

    $(".list-task li label").on('click', function () {
        $(this).toggleClass("task-done");
    });

    // ============================================================== 
    // Collapsable cards
    // ==============================================================

    $('a[data-action="collapse"]').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
        $(this).closest('.card').children('.card-body').collapse('toggle');
    });

    // Toggle fullscreen
    $('a[data-action="expand"]').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
        $(this).closest('.card').toggleClass('card-fullscreen');
    });

    // Close Card
    $('a[data-action="close"]').on('click', function () {
        $(this).closest('.card').removeClass().slideUp('fast');
    });

    // ============================================================== 
    // Color variation
    // ==============================================================

    var mySkins = [
        "skin-default",
        "skin-green",
        "skin-red",
        "skin-blue",
        "skin-purple",
        "skin-megna",
        "skin-default-dark",
        "skin-green-dark",
        "skin-red-dark",
        "skin-blue-dark",
        "skin-purple-dark",
        "skin-megna-dark"
    ]
    /**
     * Get a prestored setting
     *
     * @param String name Name of of the setting
     * @returns String The value of the setting | null
     */
    function get(name) {
        if (typeof (Storage) !== 'undefined') {
            return localStorage.getItem(name)
        } else {
            window.alert('Please use a modern browser to properly view this template!')
        }
    }
    /**
     * Store a new settings in the browser
     *
     * @param String name Name of the setting
     * @param String val Value of the setting
     * @returns void
     */
    function store(name, val) {
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem(name, val)
        } else {
            window.alert('Please use a modern browser to properly view this template!')
        }
    }

    /**
     * Replaces the old skin with the new skin
     * @param String cls the new skin class
     * @returns Boolean false to prevent link's default action
     */
    function changeSkin(cls) {
        $.each(mySkins, function (i) {
            $('body').removeClass(mySkins[i])
        })
        $('body').addClass(cls)
        store('skin', cls)
        return false
    }

    function setup() {
        var tmp = get('skin')
        if (tmp && $.inArray(tmp, mySkins)) changeSkin(tmp)
        // Add the change skin listener
        $('[data-skin]').on('click', function (e) {
            if ($(this).hasClass('knob')) return
            e.preventDefault()
            changeSkin($(this).data('skin'))
        })
    }
    setup()
    $("#themecolors").on("click", "a", function () {
        $("#themecolors li a").removeClass("working"),
            $(this).addClass("working")
    })


    // ==============================================================
    // This is for the top header part and sidebar part
    // ==============================================================
    var set = function () {
        var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
        var topOffset = 190;
        if (width < 1170) {
            $("body").addClass("mini-sidebar");
            $('.navbar-brand span').hide();
            $(".sidebartoggler i").addClass("ti-menu");
        }
        else {
            $("body").removeClass("mini-sidebar");
            $('.navbar-brand span').show();
       }
         var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $(".page-wrapper").css("min-height", (height) + "px");
        }
    };
    $(window).ready(set);
    $(window).on("resize", set);
    // ==============================================================
    // Theme options
    // ==============================================================
    $(".sidebartoggler").on('click', function () {
        if ($("body").hasClass("mini-sidebar")) {
            $("body").trigger("resize");
            $("body").removeClass("mini-sidebar");
            $('.navbar-brand span').show();
        }
        else {
            $("body").trigger("resize");
            $("body").addClass("mini-sidebar");
            $('.navbar-brand span').hide();
        }
    });
    // this is for close icon when navigation open in mobile view
    $(".nav-toggler").click(function () {
        $("body").toggleClass("show-sidebar");
        $(".nav-toggler i").toggleClass("ti-menu");
        $(".nav-toggler i").addClass("ti-close");
    });
    $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
        $(".app-search").toggle(200);
    });
    // ==============================================================
    // Right sidebar options
    // ==============================================================
    $(".right-side-toggle").click(function () {
        $(".right-sidebar").slideDown(50);
        $(".right-sidebar").toggleClass("shw-rside");
    });
    // ==============================================================
    // This is for the floating labels
    // ==============================================================
    $('.floating-labels .form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    // ==============================================================
    //tooltip
    // ==============================================================
    $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    // ==============================================================
    //Popover
    // ==============================================================
    $(function () {
         $('[data-toggle="popover"]').popover()
    })

    // ==============================================================
    // Perfact scrollbar
    // ==============================================================
    $('.right-side-panel, .message-center, .right-sidebar').perfectScrollbar();
	$('#chat, #msg, #comment, #todo').perfectScrollbar(); 

    // ==============================================================
    // Resize all elements
    // ============================================================== 
    $("body").trigger("resize");
    // ==============================================================
    // To do list
    // ==============================================================
    $(".list-task li label").click(function () {
        $(this).toggleClass("task-done");
    });
    // ==============================================================
    // Collapsable cards
    // ==============================================================
    $('a[data-action="collapse"]').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
        $(this).closest('.card').children('.card-body').collapse('toggle');
    });
    // Toggle fullscreen
    $('a[data-action="expand"]').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
        $(this).closest('.card').toggleClass('card-fullscreen');
    });
    // Close Card
    $('a[data-action="close"]').on('click', function () {
        $(this).closest('.card').removeClass().slideUp('fast');
    });
    // ==============================================================
    // fixed navigattion while scrolll
    // ==============================================================
    function collapseNavbar() {
        if ($(window).scrollTop() > 80) {
            $("body").addClass("fixed-sidebar");
            $(".left-sidebar").addClass("animated slideInDown");

        } else {
            $("body").removeClass("fixed-sidebar");
            $(".left-sidebar").removeClass("animated slideInDown");
        }
    }
    // $(window).scroll(collapseNavbar);
    // collapseNavbar()
    // ==============================================================
    // Color variation
    // ==============================================================

    var mySkins = [
        "skin-default",
        "skin-green",
        "skin-red",
        "skin-blue",
        "skin-purple",
        "skin-megna",
        "skin-default-dark",
        "skin-green-dark",
        "skin-red-dark",
        "skin-blue-dark",
        "skin-purple-dark",
        "skin-megna-dark"
    ]
        /**
         * Get a prestored setting
         *
         * @param String name Name of of the setting
         * @returns String The value of the setting | null
         */
    function get(name) {
        if (typeof (Storage) !== 'undefined') {
            return localStorage.getItem(name)
        }
        else {
            window.alert('Please use a modern browser to properly view this template!')
        }
    }
    /**
     * Store a new settings in the browser
     *
     * @param String name Name of the setting
     * @param String val Value of the setting
     * @returns void
     */
    function store(name, val) {
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem(name, val)
        }
        else {
            window.alert('Please use a modern browser to properly view this template!')
        }
    }

    /**
     * Replaces the old skin with the new skin
     * @param String cls the new skin class
     * @returns Boolean false to prevent link's default action
     */
    function changeSkin(cls) {
        $.each(mySkins, function (i) {
            $('body').removeClass(mySkins[i])
        })
        $('body').addClass(cls)
        store('skin', cls)
        return false
    }

    function setup() {
        var tmp = get('skin')
        if (tmp && $.inArray(tmp, mySkins)) changeSkin(tmp)
            // Add the change skin listener
        $('[data-skin]').on('click', function (e) {
            if ($(this).hasClass('knob')) return
            e.preventDefault()
            changeSkin($(this).data('skin'))
        })
    }
    setup()
    $("#themecolors").on("click", "a", function () {
        $("#themecolors li a").removeClass("working"),
        $(this).addClass("working")
    })
    // For Custom File Input
    $('.custom-file-input').on('change',function(){
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName);
    })

    
});
