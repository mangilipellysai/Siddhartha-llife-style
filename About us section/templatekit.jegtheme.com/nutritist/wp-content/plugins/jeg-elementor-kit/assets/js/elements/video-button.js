! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(o, r, function(e) {
                return t[e]
            }.bind(null, r));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function(t, e) {
    class n extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
            return {
                selectors: {
                    wrapper: ".jeg-elementor-kit.jkit-video-button",
                    link: ".jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn"
                }
            }
        }
        getDefaultElements() {
            const t = this.getSettings("selectors");
            return {
                $wrapper: this.$element.find(t.wrapper),
                $link: this.$element.find(t.link)
            }
        }
        bindEvents() {
            this.onClick()
        }
        onClick() {
            const t = this.elements.$wrapper,
                e = t.data("type"),
                n = t.data("autoplay"),
                o = t.data("mute"),
                r = t.data("loop"),
                a = t.data("controls"),
                i = t.data("unique-id"),
                l = this.getUrlId(e);
            let s = "//www.youtube.com/embed/",
                u = "";
            "self_hosted" === e ? u = jQuery("#" + i).html() : (s = "youtube" == e ? s + "?playlist=" + l + "&autoplay=" + n + "&mute=" + o + "&loop=" + r + "&controls=" + a + "&start=" + t.data("start") + "&end=" + t.data("end") + "&version=3" : "//player.vimeo.com/video/" + l + "?autoplay=" + n + "&muted=" + o + "&loop=" + r + "&controls=" + a + "&title=" + t.data("title") + "&portrait=" + t.data("portrait") + "&byline=" + t.data("byline"), u = '<iframe class="mfp-iframe" src="' + s + '" frameborder="0" allowfullscreen></iframe>'), this.elements.$link.on("click", (function(t) {
                t.preventDefault(), Swal.fire({
                    showCloseButton: !0,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    html: u,
                    padding: 0,
                    customClass: {
                        container: "jkit-swal-container jkit-video-button-popup-container",
                        popup: "jkit-swal-popup type-" + e,
                        header: "jkit-swal-header",
                        title: "jkit-swal-title",
                        closeButton: "jkit-swal-closeButton",
                        icon: "jkit-swal-icon",
                        image: "jkit-swal-image",
                        htmlContainer: "jkit-swal-htmlContainer",
                        input: "jkit-swal-input",
                        inputLabel: "jkit-swal-inputLabel",
                        validationMessage: "jkit-swal-validationMessage",
                        actions: "jkit-swal-actions",
                        confirmButton: "jkit-swal-confirmButton",
                        denyButton: "jkit-swal-denyButton",
                        cancelButton: ".jkit-swal-cancelButton",
                        loader: "jkit-swal-loader",
                        footer: "jkit-swal-footer",
                        timerProgressBar: "jkit-swal-timerProgressBar"
                    },
                    showClass: {
                        backdrop: "swal2-noanimation",
                        popup: "",
                        icon: ""
                    },
                    hideClass: {
                        popup: ""
                    }
                })
            }))
        }
        getUrlId(t) {
            const e = this.elements.$link.attr("href");
            let n = [];
            switch (t) {
                case "youtube":
                    return n = e.match(/[\\?\\&]v=([^\\?\\&]+)/), n && n[1] ? n[1] : null;
                case "vimeo":
                    return n = e.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/), n && n[5] ? n[5] : null
            }
            return ""
        }
    }
    jQuery(window).on("elementor/frontend/init", (() => {
        elementorFrontend.hooks.addAction("frontend/element_ready/jkit_video_button.default", (t => {
            elementorFrontend.elementsHandler.addHandler(n, {
                $element: t
            })
        }))
    }))
}]);