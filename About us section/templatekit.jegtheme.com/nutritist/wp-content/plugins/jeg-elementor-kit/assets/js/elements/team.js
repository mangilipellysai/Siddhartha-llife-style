! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var l = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var l in e) n.d(o, l, function(t) {
                return e[t]
            }.bind(null, l));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t) {
    class n extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
            return {
                selectors: {
                    modal_placeholder: ".jkit-team-swal-modal ",
                    modal: ".jkit-modal-popup",
                    image: ".jkit-team-img"
                }
            }
        }
        getDefaultElements() {
            const e = this.getSettings("selectors");
            return {
                $modal_placeholder: this.$element.find(e.modal_placeholder),
                $modal: this.$element.find(e.modal),
                $image: this.$element.find(e.image)
            }
        }
        bindEvents() {
            this.onClick()
        }
        onClick() {
            const e = this,
                t = e.elements.$modal_placeholder;
            t.length && this.elements.$image.on("click", (function(n) {
                Swal.fire({
                    target: "#" + t.attr("id"),
                    showCloseButton: !1,
                    html: e.elements.$modal.html(),
                    showConfirmButton: !1,
                    showClass: {
                        backdrop: "swal2-noanimation",
                        popup: "",
                        icon: ""
                    },
                    hideClass: {
                        popup: ""
                    }
                }), t.find(".team-modal-close").on("click", (function() {
                    Swal.close()
                }))
            }))
        }
    }
    jQuery(window).on("elementor/frontend/init", (() => {
        elementorFrontend.hooks.addAction("frontend/element_ready/jkit_team.default", (e => {
            elementorFrontend.elementsHandler.addHandler(n, {
                $element: e
            })
        }))
    }))
}]);