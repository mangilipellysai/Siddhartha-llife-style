! function(e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
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
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(a, r, function(t) {
                return e[t]
            }.bind(null, r));
        return a
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
                    wrapper: ".jeg-elementor-kit.jkit-pie-chart",
                    canvas_main: "canvas.main-canvas",
                    canvas_bg: "canvas.background-canvas",
                    number: ".pie-chart-content"
                }
            }
        }
        getDefaultElements() {
            const e = this.getSettings("selectors");
            return {
                $wrapper: this.$element.find(e.wrapper),
                $canvas_main: this.$element.find(e.canvas_main),
                $canvas_bg: this.$element.find(e.canvas_bg),
                $number: this.$element.find(e.number)
            }
        }
        bindEvents() {
            this.animateChart(), jQuery(window).on("scroll", this.animateChart.bind(this)), "percentage" == this.elements.$wrapper.data("content-type") && (this.countNumber(), jQuery(window).on("scroll", this.countNumber.bind(this)))
        }
        animateChart() {
            const e = this,
                t = e.elements.$canvas_main,
                n = e.elements.$canvas_bg;
            if (this.onScreen() && !t.hasClass("loaded")) {
                const a = e.elements.$wrapper,
                    r = t.get(0).getContext("2d"),
                    o = n.get(0).getContext("2d"),
                    d = a.data("percent"),
                    s = a.data("cutout") + "%",
                    i = a.data("color-type"),
                    l = a.data("color"),
                    u = a.data("bg-color"),
                    c = a.data("gradient1"),
                    p = a.data("gradient2"),
                    m = {
                        datasets: [{
                            data: [d, 100 - d],
                            backgroundColor: ["#80b1ff", "transparent"],
                            hoverBackgroundColor: ["#80b1ff", "transparent"],
                            borderWidth: 0
                        }]
                    },
                    f = {
                        datasets: [{
                            data: [100],
                            backgroundColor: ["#d1d1d1"],
                            hoverBackgroundColor: ["#d1d1d1"],
                            borderWidth: 0
                        }]
                    },
                    g = {
                        animation: {
                            duration: a.data("animation-duration")
                        },
                        responsive: !0,
                        cutout: s,
                        plugins: {
                            title: {
                                display: !1
                            },
                            legend: {
                                display: !1
                            },
                            tooltip: {
                                enabled: !1
                            }
                        }
                    },
                    h = {
                        animation: !1,
                        responsive: !0,
                        cutout: s,
                        plugins: {
                            title: {
                                display: !1
                            },
                            legend: {
                                display: !1
                            },
                            tooltip: {
                                enabled: !1
                            }
                        }
                    };
                if ("normal" == i) "" !== l && (m.datasets[0].backgroundColor[0] = l, m.datasets[0].hoverBackgroundColor[0] = l);
                else if ("gradient" == i && ("" !== c || "" !== p)) {
                    const e = r.createLinearGradient(0, 0, 0, 170);
                    "" !== c && e.addColorStop(0, c), "" !== p && e.addColorStop(1, p), m.datasets[0].backgroundColor[0] = e, m.datasets[0].hoverBackgroundColor[0] = e
                }
                "" !== u && (f.datasets[0].backgroundColor[0] = u, f.datasets[0].hoverBackgroundColor[0] = u), new Chart(r, {
                    type: "doughnut",
                    data: m,
                    options: g
                }), new Chart(o, {
                    type: "doughnut",
                    data: f,
                    options: h
                }), t.addClass("loaded"), t.css("display", ""), n.css("display", "")
            }
        }
        countNumber() {
            const e = this.elements.$number,
                t = this.elements.$wrapper;
            this.onScreen() && !e.hasClass("loaded") && (e.prop("Counter", 0).animate({
                Counter: t.data("percent")
            }, {
                duration: t.data("animation-duration"),
                easing: "swing",
                step: function(t) {
                    e.text(Math.ceil(t).toString() + "%")
                }
            }), e.addClass("loaded"))
        }
        onScreen() {
            const e = jQuery(window).scrollTop() + jQuery(window).height();
            return this.elements.$wrapper.offset().top <= e
        }
    }
    jQuery(window).on("elementor/frontend/init", (() => {
        elementorFrontend.hooks.addAction("frontend/element_ready/jkit_pie_chart.default", (e => {
            elementorFrontend.elementsHandler.addHandler(n, {
                $element: e
            })
        }))
    }))
}]);