google.maps.__gjsload__('search', function(_) {
    var cva = function() {},
        nB = function(a) {
            this.setValues(a);
            _.Yi("search_impl")
        },
        eva = function(a) {
            let b = _.Bl,
                c = -1;
            a.tiles.forEach(e => {
                e.zoom > c && (b = e.ni, c = e.zoom)
            });
            if (c === -1) return [];
            const d = [];
            a.Zu().forEach(e => {
                e.a && e.a.length >= 2 && d.push(new dva(e, b, c))
            });
            return d
        },
        fva = function(a) {
            const b = [];
            a.data.forEach(c => {
                b.push(...eva(c))
            });
            return b
        };
    _.Ea(cva, _.xk);
    var gva = {
            ["1"]: {}
        },
        dva = class {
            constructor(a, b, c) {
                this.sn = b;
                this.zoom = c;
                this.bounds = this.anchor = null;
                this.Eg = gva;
                this.source = a;
                this.featureId = this.source.id || "0";
                this.infoWindowOffset = (this.source.io || []).length === 2 ? new google.maps.Point(this.source.io[0], this.source.io[1]) : null
            }
            getAnchor() {
                if (!this.anchor) {
                    const a = 1 << this.zoom;
                    this.anchor = _.am(new _.mm((this.sn.x * 256 + this.source.a[0]) / a, (this.sn.y * 256 + this.source.a[1]) / a)).toJSON()
                }
                return this.anchor
            }
            getCompleteBounds() {
                return this.getBounds().reduce((a,
                    b) => {
                    a.extendByBounds(b);
                    return a
                }, _.em(0, 0, 0, 0))
            }
            getBounds() {
                if (this.bounds === null) {
                    this.bounds = [];
                    const a = this.source.bb || [];
                    if (a.length % 4 === 0)
                        for (let b = 0; b < a.length; b += 4) {
                            const c = this.bounds[this.bounds.length - 1],
                                d = _.em(a[b], a[b + 1], a[b + 2], a[b + 3]);
                            c && c.equals(d) || this.bounds.push(d)
                        }
                }
                return [...this.bounds]
            }
            getExtendedContent(a) {
                if (this.Eg === gva) try {
                    this.Eg = this.source.c ? JSON.parse(this.source.c) : {}
                } catch (b) {
                    this.Eg = {}
                }
                return this.Eg[a] ? ? {}
            }
            getFeatureName() {
                return this.getExtendedContent("1") ? .title ? ?
                    null
            }
            isTransitStation() {
                return this.getExtendedContent("1") ? .is_transit_station ? ? !1
            }
        };
    var hva = new WeakSet;
    _.Ea(nB, cva);
    nB.prototype.changed = function() {
        const a = this;
        var b = this.get("map");
        let c = null;
        b && (c = b.__gm, b = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", b + 1), c.set("disableLabelingHysteresis", this.get("disableLabelingHysteresis")), c.set("tilePrefetchEnabled", this.get("tilePrefetchEnabled")));
        _.Yi("search_impl").then(d => {
            d.Eg(a);
            c && (d = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", d - 1))
        })
    };
    nB.enableFeatureMapEventsRasterOnly = function(a) {
        if (_.Rm[15]) {
            var b = a.__gm.Xg;
            if (!hva.has(a)) {
                hva.add(a);
                var c = [],
                    d = (f, g) => {
                        f = eva(f);
                        f.length && _.P(a, g, f)
                    },
                    e = () => {
                        for (; c.length > 0;) c.pop().remove();
                        b.forEach(f => {
                            if (f = f.data) c.push(_.jk(f, "insert", g => d(g, "addfeatures"))), c.push(_.jk(f, "remove", g => d(g, "removefeatures")))
                        })
                    };
                b.addListener("insert_at", e);
                b.addListener("remove_at", e);
                b.addListener("set_at", e);
                e()
            }(() => {
                const f = [];
                b.forEach(g => {
                    f.push(...fva(g))
                });
                f.length && _.P(a, "addfeatures", f)
            })()
        }
    };
    _.ya("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly", nB.enableFeatureMapEventsRasterOnly);
    _.Xk(nB.prototype, {
        map: _.Yo
    });
    _.ja.google.maps.search = {
        GoogleLayer: nB
    };
    _.Zi("search", {});
});