google.maps.__gjsload__('search_impl', function(_) {
    var OBb = function(a, b) {
            _.Ai(a.Gg, 1, b)
        },
        PBb = function(a, b) {
            _.Ai(a.Gg, 3, b)
        },
        RBb = function(a) {
            if (_.Rm[15]) {
                var b = a.Ig;
                const c = a.Ig = a.getMap();
                b && a.Eg && (a.Hg ? (b = b.__gm.lk, b.set(b.get().Zn(a.Eg))) : a.Eg && _.v0a(a.Eg, b) && ((a.Fg || []).forEach(_.lk), a.Fg = null));
                if (c) {
                    b = new _.Uw;
                    const d = a.get("layerId").split("|");
                    b.layerId = d[0];
                    for (let e = 1; e < d.length; ++e) {
                        const [f, ...g] = d[e].split(":");
                        b.parameters[f] = g.join(":")
                    }
                    a.get("spotlightDescription") && (b.spotlightDescription = new _.Zv(a.get("spotlightDescription")));
                    a.get("paintExperimentIds") &&
                        (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                    a.get("styler") && (b.styler = new _.Vv(a.get("styler")));
                    a.get("roadmapStyler") && (b.roadmapStyler = new _.Vv(a.get("roadmapStyler")));
                    a.get("travelMapRequest") && (b.travelMapRequest = new _.Wqa(a.get("travelMapRequest")));
                    a.get("mapsApiLayer") && (b.mapsApiLayer = new _.$v(a.get("mapsApiLayer")));
                    a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                    a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                    a.get("searchPipeMetadata") &&
                        (b.searchPipeMetadata = new _.Qx(a.get("searchPipeMetadata")));
                    a.get("gmmContextPipeMetadata") && (b.gmmContextPipeMetadata = new _.Toa(a.get("gmmContextPipeMetadata")));
                    a.get("overlayLayer") && (b.overlayLayer = new _.aw(a.get("overlayLayer")));
                    a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                    a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                    a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.Cqa(a.get("airQualityPipeMetadata")));
                    a.get("directionsPipeParameters") && (b.directionsPipeParameters = new _.Aqa(a.get("directionsPipeParameters")));
                    a.get("clientSignalPipeMetadata") && (b.clientSignalPipeMetadata = new _.Aoa(a.get("clientSignalPipeMetadata")));
                    b.darkLaunch = !!a.get("darkLaunch");
                    a.Eg = b;
                    a.Hg = a.get("renderOnBaseMap");
                    a.Hg ? (a = c.__gm.lk, a.set(_.hr(a.get(), b))) : QBb(a, c, b);
                    _.al(c, "Lg");
                    _.N(c, 148282)
                }
            }
        },
        QBb = function(a, b, c) {
            var d = new SBb;
            d = _.FG(d);
            c.Hg = d.load.bind(d);
            c.clickable = a.get("clickable") !== !1;
            _.U_a(c, _.oQ(b));
            b = [];
            b.push(_.jk(c,
                "click", TBb.bind(null, a)));
            for (const e of ["mouseover", "mouseout", "mousemove"]) b.push(_.jk(c, e, UBb.bind(null, a, e)));
            b.push(_.jk(a, "clickable_changed", () => {
                a.Eg.clickable = a.get("clickable") !== !1
            }));
            a.Fg = b
        },
        TBb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, e.getStatus() === 0)) {
                f.location = _.Z(e.Gg, 2) ? new _.Uj(_.Ws(_.K(e.Gg, 2, _.bt).Gg, 1), _.Ws(_.K(e.Gg, 2, _.bt).Gg, 2)) : null;
                const g = {};
                f.fields = g;
                const h = _.ih(e.Gg, 3);
                for (let l = 0; l < h; ++l) {
                    const n = _.Sq(e.Gg, 3, _.CQ, l);
                    g[n.getKey()] = n.getValue()
                }
            }
            _.P(a,
                "click", b, c, d, f)
        },
        UBb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.P(a, b, c, d, e, h, g)
        },
        VBb = class {},
        WBb = class extends _.Y {
            constructor() {
                super()
            }
            Pi() {
                return _.L(this.Gg, 2)
            }
        },
        XBb = [_.S, , , _.R, _.t1a];
    var YBb = class extends _.Y {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.I(this.Gg, 1, -1)
        }
        getLocation() {
            return _.ti(this.Gg, 2, _.bt)
        }
    };
    var SBb = class {
        constructor() {
            var a = _.ao,
                b = _.$n;
            this.Eg = _.Bi;
            this.fetch = _.mx.bind(VBb, a, _.ky + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(e) {
                b(new YBb(e))
            }
            const d = new WBb;
            OBb(d, a.layerId.split("|")[0]);
            _.Ai(d.Gg, 2, a.featureId);
            PBb(d, this.Eg.Eg().Eg());
            for (const e in a.parameters) {
                const f = _.wi(d.Gg, 4, _.CQ);
                _.Ai(f.Gg, 1, e);
                _.Ai(f.Gg, 2, a.parameters[e])
            }
            a = _.cn(d, XBb);
            this.fetch(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    _.Zi("search_impl", new class {
        constructor() {
            this.Eg = RBb
        }
    });
});