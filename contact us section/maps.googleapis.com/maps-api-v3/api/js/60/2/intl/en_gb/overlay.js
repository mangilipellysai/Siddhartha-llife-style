google.maps.__gjsload__('overlay', function(_) {
    var Hya = function() {},
        VB = function(a) {
            a.aB = a.aB || new Hya;
            return a.aB
        },
        Iya = function(a) {
            this.Eg = new _.Em(() => {
                const b = a.aB;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Hg && a.onAdd) a.onAdd();
                        b.Hg = !0;
                        a.draw()
                    }
                } else {
                    if (b.Hg)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Hg = !1
                }
            }, 0)
        },
        Kya = function(a, b) {
            const c = VB(a);
            let d = c.Fg;
            d || (d = c.Fg = new Iya(a));
            _.Kb(c.Eg || [], _.lk);
            var e = c.Ig = c.Ig || new _.Ara;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection",
                b);
            e.bindTo("projectionTopLeft", f);
            e = c.Kg = c.Kg || new Jya(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.Fm(d.Eg);
            c.Eg = [_.jk(a, "panes_changed", e), _.jk(f, "zoom_changed", e), _.jk(f, "offset_changed", e), _.jk(b, "projection_changed", e), _.jk(f, "projectioncenterq_changed", e)];
            _.Fm(d.Eg);
            b instanceof _.Lk ? (_.al(b, "Ox"), _.N(b, 148440)) : b instanceof _.yl && (_.al(b, "Oxs"), _.N(b, 181451))
        },
        Lya = function(a) {
            const b =
                VB(a);
            var c = b.Ig;
            c && c.unbindAll();
            (c = b.Kg) && c.unbindAll();
            a.unbindAll();
            a.set("panes", null);
            a.set("projection", null);
            b.Eg && b.Eg.forEach(d => {
                _.lk(d)
            });
            b.Eg = null;
            b.Fg && (_.Gm(b.Fg.Eg), b.Fg = null)
        },
        Qya = function(a) {
            if (a) {
                var b = a.getMap();
                if (Mya(a) !== b && b && b instanceof _.Lk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Nya(b, a, c.overlayLayer) : c.Fg.then(({
                        ah: d
                    }) => {
                        const e = new Oya(b, d);
                        d.Ki(e);
                        c.overlayLayer = e;
                        Pya(a);
                        Qya(a)
                    })
                }
            }
        },
        Pya = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.overlay.unbindAll(), b.overlay.set("panes",
                    null), b.overlay.set("projection", null), b.overlayLayer.Yn(b), b.Eg && (b.Eg = !1, b.overlay.onRemove ? b.overlay.onRemove() : b.overlay.remove()))
            }
        },
        Mya = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Rya = function(a, b) {
            a.overlay.get("projection") !== b && (a.overlay.bindTo("panes", a.map.__gm), a.overlay.set("projection", b))
        },
        Jya = class extends _.xk {
            constructor(a) {
                super();
                this.projection = a
            }
            changed(a) {
                a !== "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.lj(this.get("zoom"))),
                    a === !this.get("outProjection") && this.set("outProjection", a ? this.projection : null))
            }
        };
    _.Ea(Iya, _.xk);
    var Nya = class {
            constructor(a, b, c) {
                this.map = a;
                this.overlay = b;
                this.overlayLayer = c;
                this.Eg = !1;
                _.al(this.map, "Ox");
                _.N(this.map, 148440);
                c.Ao(this)
            }
            draw() {
                this.Eg || (this.Eg = !0, this.overlay.onAdd && this.overlay.onAdd());
                this.overlay.draw && this.overlay.draw()
            }
        },
        Oya = class {
            constructor(a, b) {
                this.map = a;
                this.ah = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            Rh(a, b, c, d, e, f, g, h) {
                const l = this.Eg = this.Eg || new _.py(this.map, this.ah, () => {});
                l.Rh(a, b, c, d, e, f, g, h);
                for (const n of this.Fg) Rya(n, l), n.draw()
            }
            Ao(a) {
                this.Fg.push(a);
                this.Eg &&
                    Rya(a, this.Eg);
                this.ah.refresh()
            }
            Yn(a) {
                _.Ub(this.Fg, a)
            }
        };
    _.Zi("overlay", {
        HC: function(a) {
            if (a) {
                Lya(a);
                delete VB(a).Jg;
                Pya(a);
                var b = a.getMap();
                b && (b instanceof _.Lk ? Qya(a) : a && (b = a.getMap(), (VB(a).Jg || null) !== b && (b && Kya(a, b), VB(a).Jg = b)))
            }
        },
        preventMapHitsFrom: a => {
            _.pu(a, {
                Yl: ({
                    event: b
                }) => {
                    _.is(b.Eg)
                },
                rk: b => _.au(b),
                Pq: b => _.bu(b),
                zl: b => _.bu(b),
                Hk: b => _.cu(b)
            }).Es(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.hk);
            a.addEventListener("contextmenu", _.hk);
            a.addEventListener("dblclick", _.hk);
            a.addEventListener("mousedown", _.hk);
            a.addEventListener("mousemove",
                _.hk);
            a.addEventListener("MSPointerDown", _.hk);
            a.addEventListener("pointerdown", _.hk);
            a.addEventListener("touchstart", _.hk);
            a.addEventListener("wheel", _.hk)
        }
    });
});