(()=>{"use strict";var n={n:e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},d:(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o:(n,e)=>Object.prototype.hasOwnProperty.call(n,e)};const e=window.jQuery;var t,a,i,o,u=n.n(e);window.hoverIntent,t=void 0,(o=u()||t.Cowboy||(t.Cowboy={})).throttle=i=function(n,e,t,i){var u,s=0;function d(){var o=this,d=+new Date-s,r=arguments;function l(){s=+new Date,t.apply(o,r)}i&&!u&&l(),u&&clearTimeout(u),i===a&&d>n?l():!0!==e&&(u=setTimeout(i?function(){u=a}:l,i===a?n-d:n))}return"boolean"!=typeof e&&(i=t,t=e,e=a),o.guid&&(d.guid=t.guid=t.guid||o.guid++),d},o.debounce=function(n,e,t){return t===a?i(n,e,!1):i(n,t,!1!==e)},function(n){n.fn.emulateTransitionEnd=function(e){var t=!1,a=this;return n(this).one("quadmenuTransitionEnd",(function(){t=!0})),setTimeout((function(){t||n(a).trigger(n.support.transition.end)}),e),this},n((function(){n.support.transition=function(){var n=document.createElement("quadmenu"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var t in e)if(void 0!==n.style[t])return{end:e[t]};return!1}(),n.support.transition&&(n.event.special.quadmenuTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(e){if(n(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})}));var e=function(t,a){this.$element=n(t),this.options=n.extend({},e.DEFAULTS,a),this.$trigger=n('[data-quadmenu="collapse"][href="#'+t.id+'"],[data-quadmenu="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndQuadMenuCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function t(e){var t,a=e.attr("data-target")||(t=e.attr("href"))&&t.replace(/.*(?=#[^\s]+$)/,"");return n(a)}function a(t){return this.each((function(){var a=n(this),i=a.data("quadmenu.collapse"),o=n.extend({},e.DEFAULTS,a.data(),"object"==typeof t&&t);!i&&o.toggle&&/show|hide/.test(t)&&(o.toggle=!1),i||a.data("quadmenu.collapse",i=new e(this,o)),"string"==typeof t&&i[t]()}))}e.TRANSITION_DURATION=350,e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(i&&i.length&&(t=i.data("quadmenu.collapse"))&&t.transitioning)){var o=n.Event("show.quadmenu.collapse");if(this.$element.trigger(o),!o.isDefaultPrevented()){i&&i.length&&(a.call(i,"hide"),t||i.data("quadmenu.collapse",null));var u=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[u](""),this.transitioning=0,this.$element.trigger("shown.quadmenu.collapse")};if(!n.support.transition)return s.call(this);var d=n.camelCase(["scroll",u].join("-"));this.$element.one("quadmenuTransitionEnd",n.proxy(s,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[u](this.$element[0][d])}}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=n.Event("hide.quadmenu.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var a=this.dimension();this.$element[a](this.$element[a]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.quadmenu.collapse")};if(!n.support.transition)return i.call(this);this.$element[a](0).one("quadmenuTransitionEnd",n.proxy(i,this)).emulateTransitionEnd(e.TRANSITION_DURATION)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},e.prototype.getParent=function(){return n(this.options.parent).find('[data-quadmenu="collapse"][data-parent="'+this.options.parent+'"]').each(n.proxy((function(e,a){var i=n(a);this.addAriaAndQuadMenuCollapsedClass(t(i),i)}),this)).end()},e.prototype.addAriaAndQuadMenuCollapsedClass=function(n,e){var t=n.hasClass("in");n.attr("aria-expanded",t),e.toggleClass("collapsed",!t).attr("aria-expanded",t)};var i=n.fn.collapse;n.fn.collapse=a,n.fn.collapse.Constructor=e,n.fn.collapse.noConflict=function(){return n.fn.collapse=i,this},n(document).on("click.quadmenu.collapse.data-api",'[data-quadmenu="collapse"]',(function(e){var i=n(this);i.attr("data-target")||e.preventDefault();var o=t(i),u=o.data("quadmenu.collapse")?"toggle":i.data();a.call(o,u)}))}(u()),function(n,e,t,a){var i={responsive:!0,containerGutter:parseInt(quadmenu.gutter),touchEvents:!0,mouseEvents:!0,moveThreshold:50,intent_timeout:300,intent_interval:30};function o(t,a){this.element=t,this.$quadmenu=n(this.element),this.$ul=this.$quadmenu.find("ul.quadmenu-navbar-nav"),this.settings=n.extend({},i,a),this.touchenabled="ontouchstart"in e||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,this.mobiledevice=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.perfectScrollbar=void 0!==n.fn.perfectScrollbar&&!this.mobiledevice,this.touchenabled?this.$quadmenu.addClass("quadmenu-touch"):this.$quadmenu.addClass("quadmenu-notouch"),e.navigator.pointerEnabled?(this.touchStart="pointerdown",this.touchEnd="pointerup",this.touchMove="pointermove"):e.navigator.msPointerEnabled?(this.touchStart="MSPointerDown",this.touchEnd="MSPointerUp",this.touchMove="MSPointerMove"):(this.touchStart="touchstart",this.touchEnd="touchend",this.touchMove="touchmove"),this.init()}o.prototype={init:function(){this.quadmenuResolveConflics(),this.quadmenuInitClasses(),this.quadmenuInitWidth(),this.quadmenuInitContainerWidth(),this.quadmenuInitLazyLoad(),this.quadmenuInitNavbarSticky(),this.quadmenuInitNavbarOffcanvas(),this.quadmenuInitNavbarSlideBar(),this.quadmenuInitItemTabs(),this.quadmenuInitItemCarousel(),this.quadmenuInitItemLogIn(),this.quadmenuInitItemSocial(),this.quadmenuInitItemCart(),this.quadmenuInitItemWidgets(),this.quadmenuInitDropdownFloat(),this.quadmenuInitDropdownMaxHeight(),this.quadmenuInitDropdownTouchEvents(),this.quadmenuInitDropdownMouseEvents(),this.quadmenuInitDropdownRetractors(),this.quadmenuInitDropdownCloseAll(),this.quadmenuInitScrollBar(),this.quadmenuInit()},quadmenuInit:function(){this.$quadmenu.trigger("init.quadmenu")},quadmenuResolveConflics:function(){this.$quadmenu.data("unwrap")&&this.$quadmenu.unwrap("nav").find(".quadmenu-item, .quadmenu-dropdown-toggle, .quadmenu-dropdown-menu, .quadmenu-dropdown-submenu").add(this.$quadmenu).removeAttr("style").unbind().off()},quadmenuInitClasses:function(t){(t=t||this).handleClasses(),n(e).on("resize",n.debounce(300,(function(){t.handleClasses()})))},handleClasses:function(){var n=this.$quadmenu.data("template"),t=!!(this.settings.responsive&&e.innerWidth<=this.$quadmenu.data("breakpoint"));t||"collapse"!=n||this.$quadmenu.addClass("quadmenu-is-horizontal"),t||"embed"!=n||this.$quadmenu.addClass("quadmenu-is-horizontal"),t||"offcanvas"!=n||this.$quadmenu.addClass("quadmenu-is-horizontal"),t&&this.$quadmenu.removeClass("quadmenu-is-horizontal"),this.$quadmenu.removeClass("no-js").addClass("js")},quadmenuInitDropdownTouchEvents:function(n){n=n||this,this.settings.touchEvents&&(this.$ul.on(this.touchStart+".quadmenu.toggle",".quadmenu-dropdown > .quadmenu-dropdown-toggle",(function(e){n.handleTouchEvents(e,this,n)})),this.$ul.on("click",".quadmenu-dropdown > .quadmenu-dropdown-toggle",(function(e){n.handleClicks(e,this)})))},quadmenuInitDropdownMouseEvents:function(t){(t=t||this).handleDropdownMouseEvents(),n(e).on("resize",n.debounce(600,(function(){t.handleDropdownMouseEvents()})))},handleDropdownMouseEvents:function(e){e=e||this,this.$ul.find(".quadmenu-item").off("mouseleave.hoverIntent mouseenter.hoverIntent mousemove.hoverIntent"),this.$ul.find(".quadmenu-item").removeProp("hoverIntent_t"),this.$ul.find(".quadmenu-item").removeProp("hoverIntent_s"),this.settings.mouseEvents&&(this.$ul.on("click",".quadmenu-item > .quadmenu-dropdown-toggle",(function(n){e.handleLink(n,this)})),this.$ul.on("click.quadmenu.toggle",".quadmenu-item > .quadmenu-dropdown-toggle",(function(n){e.handleMouseClick(n,this,e)})),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&void 0!==n.fn.hoverIntent&&e.handleMouseHover(this.$ul.find(".quadmenu-item > .quadmenu-dropdown-toggle.hoverintent"),e))},handleMouseHover:function(e,t){var a=n(e),i=a.parent(".quadmenu-item");a.off("click.quadmenu.toggle"),a.off(this.touchStart+".quadmenu.toggle"),i.length&&i.hoverIntent({over:function(){var e=n(this);e.find("> .quadmenu-dropdown-menu").data("quadmenu-killHover")||t.triggerSubmenu(e,t)},out:function(){var e=n(this);e.find("> .quadmenu-dropdown-menu").data("quadmenu-killHover")||e.hasClass("quadmenu-item-type-tab")||t.closeSubmenu(e)},timeout:t.settings.intent_timeout,interval:t.settings.intent_interval})},quadmenuInitDropdownRetractors:function(n){n=n||this,this.$ul.on("click.retractor",".quadmenu-item.quadmenu-dropdown.open > .quadmenu-dropdown-toggle > .quadmenu-item-content > .quadmenu-caret",(function(e){n.handleDropdownCloseEnd(e,this,n)})),this.settings.touchEvents&&this.$ul.on(this.touchStart+".retractor",".quadmenu-item.quadmenu-dropdown.open > .quadmenu-dropdown-toggle > .quadmenu-item-content > .quadmenu-caret",(function(e){n.handleDropdownCloseStart(e,this,n)}))},handleTouchEvents:function(e,t,i){var o=n(t);o.on(i.touchEnd,(function(n){i.handleTouchTap(n,this,i)})),o.on(i.touchMove,(function(n){i.preventTapOnScroll(n,this,i)})),e.originalEvent!==a&&(e.originalEvent.touches?(o.data("quadmenu-startX",e.originalEvent.touches[0].clientX),o.data("quadmenu-startY",e.originalEvent.touches[0].clientY)):e.originalEvent.clientY&&(o.offset(),o.data("quadmenu-startX",e.originalEvent.clientX),o.data("quadmenu-startY",e.originalEvent.clientY)))},preventTapOnScroll:function(e,t,i){var o=n(t);if(e.originalEvent!==a)if(e.originalEvent.touches)(Math.abs(e.originalEvent.touches[0].clientX-o.data("quadmenu-startX"))>i.settings.moveThreshold||Math.abs(e.originalEvent.touches[0].clientY-o.data("quadmenu-startY"))>i.settings.moveThreshold)&&i.resetHandlers(o);else if(e.originalEvent.clientY){var u=o.data(u);(Math.abs(e.originalEvent.clientX-o.data("quadmenu-startX"))>i.settings.moveThreshold||Math.abs(e.originalEvent.clientY-o.data("quadmenu-startY"))>i.settings.moveThreshold)&&i.resetHandlers(o)}},handleTouchTap:function(e,t,a){e.preventDefault();var i=n(t),o=i.parent();i.data("quadmenu-killClick",!0),i.data("quadmenu-killHover",!0),setTimeout((function(){i.data("quadmenu-killClick",!1).data("quadmenu-killHover",!1)}),1e3),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&a.closeSubmenu(o.siblings(".open")),o.hasClass("quadmenu-dropdown")?o.hasClass("open")?(o.hasClass("quadmenu-item-type-tab")&&this.$quadmenu.hasClass("quadmenu-is-horizontal")||a.closeSubmenu(o),a.handleLink(e,t,!0)):a.openSubmenu(o):a.handleLink(e,t,!0),a.resetHandlers(i)},handleLink:function(t,a,i){i=i||!1;var o=n(a),u=o.attr("href");o.is("a")&&(u?i&&t.isDefaultPrevented()&&("_blank"===o.attr("target")?e.open(u,"_blank"):e.location=u):t.preventDefault())},handleMouseClick:function(e,t,a){var i=n(t),o=i.parent(".quadmenu-item");!i.data("quadmenu-killClick")&&o.length&&(o.hasClass("open")?i.is("a")&&a.handleLink(e,t):o.hasClass("quadmenu-dropdown")&&(e.preventDefault(),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&a.closeSubmenu(o.siblings(".open")),a.openSubmenu(o)))},handleDropdownCloseStart:function(e,t,a){e.preventDefault(),n(t).on(a.touchEnd,(function(n){a.handleDropdownCloseEnd(n,this,a)}))},handleDropdownCloseEnd:function(e,t,a){e.preventDefault(),e.stopPropagation();var i=n(t).closest(".quadmenu-dropdown.open");return a.closeSubmenu(i),n(t).off(a.touchEnd),!1},resetHandlers:function(n){n.off(this.touchEnd),n.off(this.touchMove);var e=n.parent();e.off("mousemove.hoverIntent"),e.off("mouseenter.hoverIntent"),e.off("mouseleave.hoverIntent"),e.removeProp("hoverIntent_t"),e.removeProp("hoverIntent_s")},triggerSubmenu:function(n,e){e.closeSubmenu(n.siblings(".open")),e.openSubmenu(n)},openSubmenu:function(n,e){n.hasClass("open")||(e=e||100,n.trigger("show.quadmenu.dropdown"),n.addClass("opening"),setTimeout((function(){n.addClass("open"),n.removeClass("opening"),n.trigger("shown.quadmenu.dropdown")}),e))},closeSubmenu:function(n,e){n.hasClass("open")&&(e=e||200,n.trigger("hide.quadmenu.dropdown"),n.addClass("closing"),setTimeout((function(){n.find(".quadmenu-item").removeClass("open"),n.removeClass("open").removeClass("closing"),n.trigger("hidden.quadmenu.dropdown")}),e))},handleClicks:function(e,t){n(t).data("quadmenu-killClick")&&e.preventDefault()},quadmenuInitDropdownCloseAll:function(e){e=e||this,this.$quadmenu.hasClass("quadmenu-is-horizontal")&&n(t).on(this.touchEnd+".hidden.quadmenu.dropdown.all click.hidden.quadmenu.dropdown.all",(function(t){n(t.target).closest("#quadmenu").length||e.closeAllSubmenus()}))},closeAllSubmenus:function(){var n=this.$ul.find(".quadmenu-item.open");n.length&&this.closeSubmenu(n,100)},quadmenuInitDropdownMaxHeight:function(t){t=t||this,this.$ul.off("shown.quadmenu.dropdown.height"),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&(this.$ul.on("shown.quadmenu.dropdown.height",".dropdown-maxheight",(function(e){t.handleDropdownMaxHeight(n(this))})),this.$ul.on("shown.quadmenu.dropdown.tabheight",".dropdown-maxheight.quadmenu-item-type-tab",(function(e){t.handleTabsHeight(n(this))})),n(e).on("resize",n.debounce(300,(function(){t.$ul.find(".dropdown-maxheight > .quadmenu-dropdown-menu > ul").css({height:"","overflow-y":""}).removeData("quadmenu-dropdownHeight").removeData("quadmenu-maxHeight")}))))},handleDropdownMaxHeight:function(t,a){if(void 0!==n.fn.scrollTop){a=a||200;var i=n(t).find("> .quadmenu-dropdown-menu > ul");if(i.length){var o=i.removeAttr("style").outerHeight(),u=this.getElementOffset(i),s=n(e).scrollTop(),d=Math.max(0,u-s),r=n(e).height()-d-15,l=Math.min(o,r),h=parseInt(Math.max(l,a));return i.css({height:h+"px","overflow-y":"auto"}).data("quadmenu-maxHeight",h),h}}},quadmenuInitNavbarSticky:function(){var t=this;void 0!==n.fn.scrollTop&&this.$quadmenu.hasClass("quadmenu-is-horizontal")&&(t.$sticky=this.$quadmenu.filter('[data-sticky="1"]').first(),t.$sticky.length&&(t.is_sticky=!1,n(e).on("load",(function(){t.sticky_height=t.$sticky.height(),t.adminbar_height=n("#wpadminbar").height()||0,t.sticky_offset=t.$sticky.offset().top,t.topYSticky=Math.max(t.$sticky.offset().top-t.adminbar_height,t.$sticky.data("sticky-offset"),t.sticky_height+t.adminbar_height),t.topYSticky>t.sticky_offset&&t.$sticky.addClass("quadmenu-sticky-animation"),n(e).on("scroll",(function(){var e=n(this).scrollTop();t.is_sticky&&e<t.topYSticky&&t.handleUnSticky(),!t.is_sticky&&e>t.topYSticky&&t.handleSticky()}))}))))},handleSticky:function(){var e=this;e.is_sticky=!0;var t=n("<div />").addClass("quadmenu-sticky-wrapper").css({height:e.sticky_height+"px",position:"static"});e.$sticky.find(".quadmenu-navbar-collapse.collapse.in").collapse("hide"),e.$sticky.toggleClass("quadmenu-sticky-top").wrap(t),e.$sticky.trigger("sticking.quadmenu.navbar"),e.$sticky.trigger("sticky.quadmenu.navbar")},handleUnSticking:function(){this.is_sticky=!1,this.$sticky.addClass("quadmenu-unsticking-top")},handleUnSticky:function(){var n=this;n.is_sticky=!1,n.$sticky.trigger("unsticking.quadmenu.navbar"),setTimeout((function(){}),200),n.$sticky.removeClass("quadmenu-sticky-top"),n.$sticky.unwrap(),n.$sticky.trigger("unsticky.quadmenu.navbar")},quadmenuInitDropdownFloat:function(t){(t=t||this).handleDropdownFloat(),n(e).on("resize",n.debounce(600,(function(){t.handleDropdownFloat()})))},handleDropdownFloat:function(t){t=t||this,this.$ul.off("shown.quadmenu.dropdown.float"),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&this.$ul.on("shown.quadmenu.dropdown.float",".quadmenu-item.quadmenu-dropdown:not(.quadmenu-item-type-tab):not(.quadmenu-item-type-tabs)",(function(a){var i=n(this).find("> .quadmenu-dropdown-menu:not(.quadmenu-dropdown-stretch-content):not(.quadmenu-dropdown-stretch-dropdown)");if(i.length){var o=i.outerWidth(),u=n(e).innerWidth(),s=i.offset().left,d=parseInt(u-(s+o));n(this).hasClass("quadmenu-dropdown-left")&&s<0?i.css({"margin-right":s-t.settings.containerGutter+"px"}):d<0&&i.css({"margin-left":d-t.settings.containerGutter+"px"})}}))},quadmenuInitWidth:function(t){(t=t||this).$quadmenu.data("width")&&(t.handleFullWidth(t.$quadmenu),n(e).on("resize",n.debounce(600,(function(){t.handleFullWidth(t.$quadmenu)}))))},handleFullWidth:function(t){var a=n(t);a.css({position:"","box-sizing":"",left:"",right:"",width:""});var i=parseInt(a.css("margin-left"),10),o=0-a.offset().left-i,u=n(e).width();a.css({position:"relative","box-sizing":"border-box",left:o,right:o,width:u})},quadmenuInitContainerWidth:function(t){(t=t||this).handleContainerWidth(t.$quadmenu),this.$quadmenu.on("sticking.quadmenu.navbar unsticking.quadmenu.navbar",(function(){t.handleContainerWidth(n(this))})),n(e).on("resize",n.debounce(600,(function(){t.handleContainerWidth(t.$quadmenu)})))},handleContainerWidth:function(e){var t=n(e),a=t.find(".quadmenu-container");t.data("selector")&&a.css({width:n(this.$quadmenu.data("selector")).innerWidth()+"px"})},quadmenuInitLazyLoad:function(e){e=e||this,this.$quadmenu.on("init.quadmenu shown.quadmenu.collapse shown.quadmenu.dropdown",(function(e){n(this).find("img[data-src]:visible").each((function(e){var t=n(this),a=t.data("src"),i=t.data("srcset");t.data("lazyload")||(t.addClass("quadmenu-lazyload"),a&&t.attr("src",a).removeAttr("data-src").data("lazyload",!0),i&&t.attr("srcset",i).removeAttr("data-srcset").data("lazyload",!0))}))}))},quadmenuInitNavbarOffcanvas:function(i){i=i||this,this.$quadmenu.on("show.quadmenu.collapse shown.quadmenu.collapse hide.quadmenu.collapse hidden.quadmenu.collapse",".navbar-offcanvas",(function(e){var t=n(this).width(),a=i.$quadmenu.hasClass("quadmenu-offcanvas-left")?t:-1*t;n(this).trigger(e.type+".quadmenu.offcanvas",[a])})),this.$quadmenu.on("show.quadmenu.offcanvas",".navbar-offcanvas",(function(e,t){n("> .quadmenu-navbar-toggle",i.$quadmenu).add(n(".quadmenu-navbar-header",i.$quadmenu)).css({transform:"translateX("+t+"px)"}),n(this).css({transform:"translateX(0)"}),n("body").addClass("quadmenu-offcanvas-in"),i.$quadmenu.addClass("quadmenu-is-vertical")})),this.$quadmenu.on("hide.quadmenu.offcanvas",".navbar-offcanvas",(function(e){n("> .quadmenu-navbar-toggle",i.$quadmenu).add(n(".quadmenu-navbar-header",i.$quadmenu)).css({transform:""}),n(this).removeAttr("style"),n("body").removeClass("quadmenu-offcanvas-in")})),this.$quadmenu.on("hidden.quadmenu.offcanvas",".navbar-offcanvas",(function(n){i.$quadmenu.removeClass("quadmenu-is-vertical")})),this.$quadmenu.on("shown.quadmenu.offcanvas hidden.quadmenu.offcanvas",".navbar-offcanvas",(function(e,t){setTimeout((function(){n(this).add(n("> .quadmenu-navbar-toggle",i.$quadmenu)).add(n(".quadmenu-navbar-header",i.$quadmenu)).toggleClass("canvas-sliding")}),1e3)})),n(t).on(this.touchStart+".hide.quadmenu.offcanvas click.hide.quadmenu.offcanvas",(function(t){var o=n(t.target),u=!!(i.settings.responsive&&e.innerWidth<=i.$quadmenu.data("breakpoint"));!o.closest("#quadmenu").length&&u&&(o.on(i.touchEnd,(function(e){n(".navbar-offcanvas").collapse("hide")})),o.on(i.touchMove,(function(n){i.preventTapOnScroll(n,this,i)})),t.originalEvent!==a)&&(t.originalEvent.touches?(o.data("quadmenu-startX",t.originalEvent.touches[0].clientX),o.data("quadmenu-startY",t.originalEvent.touches[0].clientY)):t.originalEvent.clientY&&(o.offset(),o.data("quadmenu-startX",t.originalEvent.clientX),o.data("quadmenu-startY",t.originalEvent.clientY)))}))},quadmenuInitScrollBar:function(t){t=t||this,this.perfectScrollbar&&(t.handleDropdownScrollbar(),t.handleVerticalScrollbar(),n(e).on("resize",n.debounce(300,(function(){t.handleDropdownScrollbar(),t.handleVerticalScrollbar()}))))},handleDropdownScrollbar:function(e){e=e||this,this.$ul.off("shown.quadmenu.dropdown.pscrollbar"),this.$ul.find(".ps-container").perfectScrollbar("destroy").data("ps-id",!1),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&this.$ul.on("shown.quadmenu.dropdown.pscrollbar",".dropdown-maxheight",(function(t){e.$dropdown=n(this).find("> .quadmenu-dropdown-menu > ul"),e.$dropdown.on("scroll",n.debounce(500,!0,(function(){n(this).data("quadmenu-killHover",!0)}))),e.$dropdown.on("scroll",n.debounce(500,(function(){n(this).removeData("quadmenu-killHover")}))),e.$dropdown.data("ps-id")?e.$dropdown.perfectScrollbar("update"):e.$dropdown.perfectScrollbar({useKeyboard:!0,suppressScrollX:!0,includePadding:!0,scrollYMarginOffset:1})}))},handleVerticalScrollbar:function(e){(e=e||this).$offcanvas=this.$quadmenu.find(".navbar-offcanvas"),e.$offcanvas.perfectScrollbar("destroy").data("ps-id",!1),this.$quadmenu.hasClass("quadmenu-is-horizontal")||(e.$offcanvas.on("shown.quadmenu.dropdown.pscrollbar hidden.quadmenu.dropdown.pscrollbar shown.quadmenu.offcanvas.pscrollbar hidden.quadmenu.offcanvas.pscrollbar",(function(e){var t=n(this);n(this).on("mouseup mouseenter",".ps-scrollbar-y-rail",(function(){t.find(".quadmenu-item > .quadmenu-dropdown-toggle").data("quadmenu-killHover",!0)})),n(this).on("mouseleave",".ps-scrollbar-y-rail",(function(){t.find(".quadmenu-item > .quadmenu-dropdown-toggle").removeData("quadmenu-killHover")})),t.perfectScrollbar("update")})),e.$offcanvas.data("ps-id")?e.$offcanvas.perfectScrollbar("update"):e.$offcanvas.perfectScrollbar({useKeyboard:!0,suppressScrollX:!0,includePadding:!0,scrollYMarginOffset:1}))},quadmenuInitNavbarSlideBar:function(n){n=n||this,this.$quadmenu.hasClass("quadmenu-is-horizontal")&&this.$quadmenu.hasClass("quadmenu-hover-slidebar")&&setTimeout((function(){n.$ul.append('<li class="quadmenu-slidebar invisible"><span class="bar"></span></li>'),n.handleSlideBar(n.$ul)}),1e3)},handleSlideBar:function(e,t){t=t||this;var a=n(e),i=a.find("> li.quadmenu-slidebar"),o=a.find("> li.open:visible"),u=a.find("> li.current-menu-item:visible"),s=a.find("> li.current-menu-ancestor:visible"),d=a.find("> li:visible:first-child");function r(n){if(n.length){var e=parseFloat(n.find("> a").outerWidth()),t=parseFloat(n.position().left),a=parseFloat(n.position().right);i.css({width:e+"px",left:t+"px",right:a+"px"}).removeClass("invisible")}}s.length&&(d=s),u.length&&(d=u),o.length&&(d=o),r(d),i.data("slidebar-style",i.attr("style")),this.$ul.on("sticky.quadmenu.navbar.slidebar unsticky.quadmenu.navbar.slidebar",(function(){i.addClass("invisible");var e=n(this).find(".quadmenu-navbar-nav"),t=e.find("> "+li+".open"),a=t.length?t:e.find("> li.quadmenu-item.quadmenu-item-level-0.active");r(a.length?a:e.find(li).not(".quadmenu-float-opposite").first()),i.data("slidebar-style",i.attr("style"))})),a.find("> li.quadmenu-item.quadmenu-has-link").on("hover.slidebar",(function(e){r(n(this))})),a.find("> li.quadmenu-item.quadmenu-has-link").on("mouseleave.slidebar",(function(n){i.attr("style",i.data("slidebar-style")).show()})),a.on("shown.quadmenu.dropdown.slidebar","> li.quadmenu-item.quadmenu-has-link",(function(e){n(this).find("> a").hasClass("click")&&(r(n(this)),i.data("slidebar-style",i.attr("style")))})),a.on("hide.quadmenu.dropdown.slidebar","> li.quadmenu-item.quadmenu-has-link",(function(e){n(this).find("> a").hasClass("click")&&(r(d),i.data("slidebar-style",i.attr("style")))}))},quadmenuInitItemTabs:function(t){(t=t||this).handleTabs(),n(e).on("resize",n.debounce(600,(function(){t.handleTabs()})))},handleTabs:function(e){e=e||this,this.$ul.off("shown.quadmenu.dropdown.tabs",".quadmenu-item-type-tabs"),this.$ul.off("shown.quadmenu.dropdown.tabheight",".quadmenu-item-type-tab"),this.$ul.find(".quadmenu-item-type-tab > .quadmenu-dropdown-menu > ul").data("quadmenu-maxHeight",!1).data("quadmenu-killHover",!1),this.$ul.find(".quadmenu-item-type-tab > .quadmenu-dropdown-menu > ul").removeAttr("style"),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&this.$ul.on("shown.quadmenu.dropdown.tabs",".quadmenu-item-type-tabs",(function(t){n(t.target).hasClass("quadmenu-item-type-tabs")&&e.openSubmenu(n(this).find(".quadmenu-item-type-tab:first"))}))},handleTabsHeight:function(e){var t=n(e);t.closest(".quadmenu-dropdown-menu > ul").css({"min-height":t.find("> .quadmenu-dropdown-menu > ul").data("quadmenu-maxHeight")+"px"})},getElementOffset:function(e){var t=n(e);if(t.length)return t.is(":visible")||(t.data("element-style",t.attr("style")),t.css({visibility:"hidden",display:"block",transform:"none",animation:"none"}),t.removeAttr("style").attr("style",t.data("element-style"))),t.offset().top},quadmenuInitItemCarousel:function(e){e=e||this,void 0!==n.fn.owlCarousel&&(this.$ul.on("mouseenter.hoverIntent",".owl-carousel",(function(){n(this).trigger("stop.owl.autoplay")})),this.$ul.on("mouseleave.hoverIntent",".owl-carousel",(function(){var e=n(this);"on"===n(this).data("autoplay")&&e.trigger("play.owl.autoplay")})),this.$ul.on("hide.quadmenu.dropdown.carousel",".quadmenu-item",(function(){var e=n(this).find(".owl-carousel");e.length&&(e.trigger("stop.owl.autoplay"),e.trigger("stop.owl.video"))})),this.$ul.on("shown.quadmenu.dropdown.carousel",".quadmenu-item",(function(t){var a=n(this).find(".owl-carousel");a.length&&e.handleCarousel(a,e)})),e.handleCarousel(this.$ul.find(".quadmenu-item-level-0 > .owl-carousel"),e))},handleCarousel:function(e,t){t=t||this,n(e).each((function(){var e=n(this),a=parseInt(e.data("speed")),i="on"===e.data("autoplay"),o="on"===e.data("pagination"),u="on"===e.data("dots"),s=e.data("items")||1,d=parseInt(t.settings.containerGutter/2),r=1===s,l=parseInt(e.data("autoplay_speed"))+a;e.hasClass("owl-loaded")?e.trigger("refresh.owl.carousel"):e.owlCarousel({itemClass:"quadmenu-item-type-panel",responsive:{0:{items:1},600:{items:Math.min(2,s)},900:{items:s}},loop:!0,navText:!1,autoplayHoverPause:!0,dotsEach:r,items:s,margin:d,dots:u,nav:o,smartSpeed:a,autoplay:i,autoplayTimeout:l})}))},quadmenuInitItemLogIn:function(e){e=e||this,this.$ul.on("hide.quadmenu.dropdown.login",".quadmenu-item-type-login",(function(t){var a=n(this);e.handleMouseHover(a.find("> .quadmenu-dropdown-toggle.hoverintent"),e)})),this.$ul.on("shown.quadmenu.dropdown.login",".quadmenu-item-type-login",(function(t){var a=n(this);a.find("input").on("click",(function(){a.off("mousemove.hoverIntent"),a.off("mouseenter.hoverIntent"),a.off("mouseleave.hoverIntent"),a.removeProp("hoverIntent_t"),a.removeProp("hoverIntent_s")})),a.find("[data-toggle=form]").on("click",(function(){t.preventDefault(),a.find(n(this).data("target")).fadeIn().removeClass("hidden"),a.find(n(this).data("current")).fadeOut().addClass("hidden"),a.find("> .quadmenu-dropdown-menu > ul").removeData("quadmenu-dropdownHeight"),a.find("> .quadmenu-dropdown-menu > ul").removeAttr("style"),a.trigger("shown.quadmenu.dropdown.height"),a.trigger("shown.quadmenu.dropdown.pscrollbar")})),e.handleForm(t,a)}))},handleForm:function(t,a){n(a).find("form").on("submit",(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1;var a=n(this),i=a.closest(".quadmenu-dropdown-menu"),o=a.find(".quadmenu-result-message");n.ajax({type:"POST",url:quadmenu.ajaxurl,data:{action:a.find("input[name=action]").val(),nonce:a.find("input[name=quadmenu_nonce]").val(),user:a.find("input[name=quadmenu_username]").val(),pass:a.find("input[name=quadmenu_pass]").val(),mail:a.find("input[name=quadmenu_email]").val(),name:a.find("input[name=quadmenu_name]").val(),nick:a.find("input[name=quadmenu_nick]").val()},beforeSend:function(){i.addClass("quadmenu-dropdown-mask")},complete:function(){setTimeout((function(){i.removeClass("quadmenu-dropdown-mask")}),600)},success:function(n){o.empty().append(n.data),!0===n.success&&setTimeout((function(){e.location.reload()}),200)}})}))},quadmenuInitItemSocial:function(t){(t=t||this).handleSocial(),n(e).on("resize",n.debounce(600,(function(){t.handleSocial()})))},handleSocial:function(n){n=n||this,this.$ul.off("shown.quadmenu.dropdown.social hidden.quadmenu.dropdown.social"),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&(this.$ul.on("shown.quadmenu.dropdown.social",".quadmenu-item-type-social",(function(){n.$ul.find("> li.quadmenu-item.quadmenu-item-level-0:not(.quadmenu-item-type-social)").addClass("invisible"),n.$ul.find("> li.quadmenu-slidebar").addClass("invisible")})),this.$ul.on("hidden.quadmenu.dropdown.social",".quadmenu-item-type-social",(function(){n.$ul.find("> li.quadmenu-item.quadmenu-item-level-0:not(.quadmenu-item-type-social)").removeClass("invisible"),n.$ul.find("> li.quadmenu-slidebar").removeClass("invisible")})))},quadmenuInitItemCart:function(i){var o=(i=i||this).$quadmenu.find("li.quadmenu-item-type-cart");o.each((function(){var u=n(this),s=u.find("> a").data("cart-url"),d=u.find("> a").data("cart-animation");e.location.href===s&&(o.removeClass("quadmenu-dropdown"),o.find("> a").attr("href","javascript:void(0)")),n(t).bind("added_to_cart removed_from_cart edd_quantity_updated",(function(e,t){o.find(".quadmenu-cart-qty",u).addClass(d),t!==a&&0==n(t["span.quadmenu-cart-qty"]).html()?u.addClass("quadmenu-cart-empty"):u.removeClass("quadmenu-cart-empty"),setTimeout((function(){o.find(".quadmenu-cart-qty",u).removeClass(d)}),500)})),n(t).bind("edd_quantity_updated",(function(){i.handleEddCart(i,u,o,s)}))}))},handleEddCart:function(n,e,t,a){n=n||this;var i=t.find(".widget_edd_cart_widget");if(i.length){var o=i.find(".edd_subtotal .subtotal").html(),u=i.find(".edd-cart-quantity").html();n.updateCart(e,o,u,a)}},updateCart:function(e,t,a,i){var o=n(e),u=o.find(".quadmenu-cart-total"),s=o.find(".quadmenu-cart-qty");u.html(t),s.html(a),a>0?o.removeClass("quadmenu-cart-empty"):o.addClass("quadmenu-cart-empty"),i&&o.find("> a").attr("href",i),setTimeout((function(){s.removeClass("animate")}),1500)},quadmenuInitItemWidgets:function(e){n(t).on("show.quadmenu.dropdown",(function(e){n(this).find(".widget_media_audio > video, .widget_media_audio > audio").each((function(){this.player.trigger("resize")}))})),n(t).on("hidden.quadmenu.dropdown",(function(e){n(this).find(".widget_media_video video, .widget_media_video audio").each((function(){this.player.pause()}))}))}},n.fn.quadmenu=function(e){var t,i=arguments;return e===a||"object"==typeof e?this.each((function(){n.data(this,"plugin_quadmenu")||n.data(this,"plugin_quadmenu",new o(this,e))})):"string"==typeof e&&"_"!==e[0]&&"init"!==e?(this.each((function(){var a=n.data(this,"plugin_quadmenu");a instanceof o&&"function"==typeof a[e]&&(t=a[e].apply(a,Array.prototype.slice.call(i,1))),"destroy"===e&&n.data(this,"plugin_quadmenu",null)})),t!==a?t:this):void 0}}(u(),window,document),function(n){function e(){n("nav#quadmenu").quadmenu()}e(),n(window).on("load",(function(){e()}))}(u())})();