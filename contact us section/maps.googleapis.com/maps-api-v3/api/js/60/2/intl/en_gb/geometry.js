google.maps.__gjsload__('geometry', function(_) {
    var Cra = function(a, b) {
            return Math.abs(_.jj(b - a, -180, 180))
        },
        Dra = function(a, b, c, d, e) {
            if (!d) {
                c = Cra(a.lng(), c) / Cra(a.lng(), b.lng());
                if (!e) return e = Math.sin(_.Ii(a.lat())), e = Math.log((1 + e) / (1 - e)) / 2, b = Math.sin(_.Ii(b.lat())), _.Ji(2 * Math.atan(Math.exp(e + c * (Math.log((1 + b) / (1 - b)) / 2 - e))) - Math.PI / 2);
                a = e.fromLatLngToPoint(a);
                b = e.fromLatLngToPoint(b);
                return e.fromPointToLatLng(new _.nl(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))).lat()
            }
            e = _.Ii(a.lat());
            a = _.Ii(a.lng());
            d = _.Ii(b.lat());
            b = _.Ii(b.lng());
            c = _.Ii(c);
            return _.jj(_.Ji(Math.atan2(Math.sin(e) *
                Math.cos(d) * Math.sin(c - b) - Math.sin(d) * Math.cos(e) * Math.sin(c - a), Math.cos(e) * Math.cos(d) * Math.sin(a - b))), -90, 90)
        },
        Era = function(a, b) {
            a = new _.Uj(a, !1);
            b = new _.Uj(b, !1);
            return a.equals(b)
        },
        Fra = function(a, b, c) {
            a = _.Yj(a);
            c = c || 1E-9;
            const d = _.jj(a.lng(), -180, 180),
                e = b instanceof _.bq,
                f = !!b.get("geodesic"),
                g = b.get("latLngs");
            b = b.get("map");
            b = !f && b ? b.getProjection() : null;
            for (let r = 0, u = g.getLength(); r < u; ++r) {
                const w = g.getAt(r),
                    x = w.getLength(),
                    y = e ? x : x - 1;
                for (let B = 0; B < y; ++B) {
                    var h = w.getAt(B);
                    const D = w.getAt((B +
                        1) % x);
                    if (Era(h, a) || Era(D, a)) return !0;
                    var l = _.jj(h.lng(), -180, 180),
                        n = _.jj(D.lng(), -180, 180);
                    const J = Math.max(l, n),
                        M = Math.min(l, n);
                    if (l = Math.abs(_.jj(l - n, -180, 180)) <= 1E-9 && (Math.abs(_.jj(l - d, -180, 180)) <= c || Math.abs(_.jj(n - d, -180, 180)) <= c)) {
                        l = a.lat();
                        n = Math.min(h.lat(), D.lat()) - c;
                        var p = Math.max(h.lat(), D.lat()) + c;
                        l = l >= n && l <= p
                    }
                    if (l) return !0;
                    if (J - M > 180 ? d + c >= J || d - c <= M : d + c >= M && d - c <= J)
                        if (h = Dra(h, D, d, f, b), Math.abs(h - a.lat()) < c) return !0
                }
            }
            return !1
        },
        Hra = function(a, b) {
            const c = [];
            let d = [0, 0],
                e;
            for (let f = 0, g = _.fj(a); f <
                g; ++f) e = b ? b(a[f]) : [a[f].lat(), a[f].lng()], Gra(e[0] - d[0], c), Gra(e[1] - d[1], c), d = e;
            return c.join("")
        },
        Gra = function(a, b) {
            for (a = a < 0 ? ~(a << 1) : a << 1; a >= 32;) b.push(String.fromCharCode((32 | a & 31) + 63)), a >>= 5;
            b.push(String.fromCharCode(a + 63))
        },
        kz = class {};
    kz.isLocationOnEdge = Fra;
    kz.containsLocation = function(a, b) {
        a = _.Yj(a);
        const c = _.jj(a.lng(), -180, 180),
            d = !!b.get("geodesic"),
            e = b.get("latLngs");
        var f = b.get("map");
        f = !d && f ? f.getProjection() : null;
        let g = !1;
        for (let l = 0, n = e.getLength(); l < n; ++l) {
            const p = e.getAt(l);
            for (let r = 0, u = p.getLength(); r < u; ++r) {
                const w = p.getAt(r),
                    x = p.getAt((r + 1) % u);
                var h = _.jj(w.lng(), -180, 180);
                const y = _.jj(x.lng(), -180, 180),
                    B = Math.max(h, y);
                h = Math.min(h, y);
                (B - h > 180 ? c >= B || c < h : c < B && c >= h) && Dra(w, x, c, d, f) < a.lat() && (g = !g)
            }
        }
        return g || Fra(a, b)
    };
    var lz = class {};
    lz.encodePath = function(a) {
        a instanceof _.cm && (a = a.getArray());
        a = (0, _.Ck)(a);
        return Hra(a, function(b) {
            return [Math.round(b.lat() * 1E5), Math.round(b.lng() * 1E5)]
        })
    };
    lz.decodePath = function(a) {
        const b = _.fj(a),
            c = Array(Math.floor(a.length / 2));
        let d = 0,
            e = 0,
            f = 0,
            g;
        for (g = 0; d < b; ++g) {
            let h = 1,
                l = 0,
                n;
            do n = a.charCodeAt(d++) - 63 - 1, h += n << l, l += 5; while (n >= 31);
            e += h & 1 ? ~(h >> 1) : h >> 1;
            h = 1;
            l = 0;
            do n = a.charCodeAt(d++) - 63 - 1, h += n << l, l += 5; while (n >= 31);
            f += h & 1 ? ~(h >> 1) : h >> 1;
            c[g] = new _.Uj(e * 1E-5, f * 1E-5, !0)
        }
        c.length = g;
        return c
    };
    var Ira = {
        encoding: lz,
        spherical: _.Mp,
        poly: kz
    };
    _.ja.google.maps.geometry = Ira;
    _.Zi("geometry", Ira);
});