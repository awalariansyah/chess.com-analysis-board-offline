var amplitudeDLL = function(e) {
    var t = {};

    function __webpack_require__(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, __webpack_require__), n.l = !0, n.exports
    }
    return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, r) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, __webpack_require__.t = function(e, t) {
        if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (__webpack_require__.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) __webpack_require__.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function getDefault() {
            return e.default
        } : function getModuleExports() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "/bundles/app/js/", __webpack_require__(__webpack_require__.s = 63)
}({
    4: function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    },
    6: function(e, t) {
        var r, n, i = e.exports = {};

        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined")
        }

        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined")
        }

        function runTimeout(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === defaultSetTimout || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
            } catch (e) {
                r = defaultSetTimout
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
            } catch (e) {
                n = defaultClearTimeout
            }
        }();
        var o, s = [],
            a = !1,
            u = -1;

        function cleanUpNextTick() {
            a && o && (a = !1, o.length ? s = o.concat(s) : u = -1, s.length && drainQueue())
        }

        function drainQueue() {
            if (!a) {
                var e = runTimeout(cleanUpNextTick);
                a = !0;
                for (var t = s.length; t;) {
                    for (o = s, s = []; ++u < t;) o && o[u].run();
                    u = -1, t = s.length
                }
                o = null, a = !1,
                    function runClearTimeout(e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === defaultClearTimeout || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            return n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function Item(e, t) {
            this.fun = e, this.array = t
        }

        function noop() {}
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            s.push(new Item(e, t)), 1 !== s.length || a || runTimeout(drainQueue)
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = noop, i.addListener = noop, i.once = noop, i.off = noop, i.removeListener = noop, i.removeAllListeners = noop, i.emit = noop, i.prependListener = noop, i.prependOnceListener = noop, i.listeners = function(e) {
            return []
        }, i.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    },
    63: function(e, t, r) {
        e.exports = r
    },
    64: function(e, t, r) {
        (function(t, r, n) {
            var i;
            i = function() {
                "use strict";
                var e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

                function createCommonjsModule(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }
                createCommonjsModule(function(t, r) {
                    /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
                    (function() {
                        var n = {
                                function: !0,
                                object: !0
                            },
                            i = n.object && r && !r.nodeType && r,
                            o = n[typeof window] && window || this,
                            s = i && n.object && t && !t.nodeType && "object" == typeof e && e;

                        function runInContext(e, t) {
                            e || (e = o.Object()), t || (t = o.Object());
                            var r = e.Number || o.Number,
                                i = e.String || o.String,
                                s = e.Object || o.Object,
                                a = e.Date || o.Date,
                                u = e.SyntaxError || o.SyntaxError,
                                c = e.TypeError || o.TypeError,
                                f = e.Math || o.Math,
                                l = e.JSON || o.JSON;
                            "object" == typeof l && l && (t.stringify = l.stringify, t.parse = l.parse);
                            var p, h, d, g = s.prototype,
                                y = g.toString,
                                m = new a(-0xc782b5b800cec);
                            try {
                                m = -109252 == m.getUTCFullYear() && 0 === m.getUTCMonth() && 1 === m.getUTCDate() && 10 == m.getUTCHours() && 37 == m.getUTCMinutes() && 6 == m.getUTCSeconds() && 708 == m.getUTCMilliseconds()
                            } catch (e) {}

                            function has(e) {
                                if (has[e] !== d) return has[e];
                                var n;
                                if ("bug-string-char-index" == e) n = "a" != "a" [0];
                                else if ("json" == e) n = has("json-stringify") && has("json-parse");
                                else {
                                    var o, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                    if ("json-stringify" == e) {
                                        var u = t.stringify,
                                            c = "function" == typeof u && m;
                                        if (c) {
                                            (o = function() {
                                                return 1
                                            }).toJSON = o;
                                            try {
                                                c = "0" === u(0) && "0" === u(new r) && '""' == u(new i) && u(y) === d && u(d) === d && u() === d && "1" === u(o) && "[1]" == u([o]) && "[null]" == u([d]) && "null" == u(null) && "[null,null,null]" == u([d, y, null]) && u({
                                                    a: [o, !0, !1, null, "\0\b\n\f\r\t"]
                                                }) == s && "1" === u(null, o) && "[\n 1,\n 2\n]" == u([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == u(new a(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == u(new a(864e13)) && '"-000001-01-01T00:00:00.000Z"' == u(new a(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == u(new a(-1))
                                            } catch (e) {
                                                c = !1
                                            }
                                        }
                                        n = c
                                    }
                                    if ("json-parse" == e) {
                                        var f = t.parse;
                                        if ("function" == typeof f) try {
                                            if (0 === f("0") && !f(!1)) {
                                                var l = 5 == (o = f(s)).a.length && 1 === o.a[0];
                                                if (l) {
                                                    try {
                                                        l = !f('"\t"')
                                                    } catch (e) {}
                                                    if (l) try {
                                                        l = 1 !== f("01")
                                                    } catch (e) {}
                                                    if (l) try {
                                                        l = 1 !== f("1.")
                                                    } catch (e) {}
                                                }
                                            }
                                        } catch (e) {
                                            l = !1
                                        }
                                        n = l
                                    }
                                }
                                return has[e] = !!n
                            }
                            if (!has("json")) {
                                var v = has("bug-string-char-index");
                                if (!m) var w = f.floor,
                                    _ = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                    b = function(e, t) {
                                        return _[t] + 365 * (e - 1970) + w((e - 1969 + (t = +(t > 1))) / 4) - w((e - 1901 + t) / 100) + w((e - 1601 + t) / 400)
                                    };
                                if ((p = g.hasOwnProperty) || (p = function(e) {
                                        var t, r = {};
                                        return (r.__proto__ = null, r.__proto__ = {
                                            toString: 1
                                        }, r).toString != y ? p = function(e) {
                                            var t = this.__proto__,
                                                r = e in (this.__proto__ = null, this);
                                            return this.__proto__ = t, r
                                        } : (t = r.constructor, p = function(e) {
                                            var r = (this.constructor || t).prototype;
                                            return e in this && !(e in r && this[e] === r[e])
                                        }), r = null, p.call(this, e)
                                    }), h = function(e, t) {
                                        var r, i, o, s = 0;
                                        for (o in (r = function() {
                                                this.valueOf = 0
                                            }).prototype.valueOf = 0, i = new r) p.call(i, o) && s++;
                                        return r = i = null, s ? h = 2 == s ? function(e, t) {
                                            var r, n = {},
                                                i = "[object Function]" == y.call(e);
                                            for (r in e) i && "prototype" == r || p.call(n, r) || !(n[r] = 1) || !p.call(e, r) || t(r)
                                        } : function(e, t) {
                                            var r, n, i = "[object Function]" == y.call(e);
                                            for (r in e) i && "prototype" == r || !p.call(e, r) || (n = "constructor" === r) || t(r);
                                            (n || p.call(e, r = "constructor")) && t(r)
                                        } : (i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], h = function(e, t) {
                                            var r, o, s = "[object Function]" == y.call(e),
                                                a = !s && "function" != typeof e.constructor && n[typeof e.hasOwnProperty] && e.hasOwnProperty || p;
                                            for (r in e) s && "prototype" == r || !a.call(e, r) || t(r);
                                            for (o = i.length; r = i[--o]; a.call(e, r) && t(r));
                                        }), h(e, t)
                                    }, !has("json-stringify")) {
                                    var I = {
                                            92: "\\\\",
                                            34: '\\"',
                                            8: "\\b",
                                            12: "\\f",
                                            10: "\\n",
                                            13: "\\r",
                                            9: "\\t"
                                        },
                                        E = function(e, t) {
                                            return ("000000" + (t || 0)).slice(-e)
                                        },
                                        S = function(e) {
                                            for (var t = '"', r = 0, n = e.length, i = !v || n > 10, o = i && (v ? e.split("") : e); r < n; r++) {
                                                var s = e.charCodeAt(r);
                                                switch (s) {
                                                    case 8:
                                                    case 9:
                                                    case 10:
                                                    case 12:
                                                    case 13:
                                                    case 34:
                                                    case 92:
                                                        t += I[s];
                                                        break;
                                                    default:
                                                        if (s < 32) {
                                                            t += "\\u00" + E(2, s.toString(16));
                                                            break
                                                        }
                                                        t += i ? o[r] : e.charAt(r)
                                                }
                                            }
                                            return t + '"'
                                        },
                                        C = function(e, t, r, n, i, o, s) {
                                            var a, u, f, l, g, m, v, _, I, A, O, B, x, k, T, j;
                                            try {
                                                a = t[e]
                                            } catch (e) {}
                                            if ("object" == typeof a && a)
                                                if ("[object Date]" != (u = y.call(a)) || p.call(a, "toJSON")) "function" == typeof a.toJSON && ("[object Number]" != u && "[object String]" != u && "[object Array]" != u || p.call(a, "toJSON")) && (a = a.toJSON(e));
                                                else if (a > -1 / 0 && a < 1 / 0) {
                                                if (b) {
                                                    for (g = w(a / 864e5), f = w(g / 365.2425) + 1970 - 1; b(f + 1, 0) <= g; f++);
                                                    for (l = w((g - b(f, 0)) / 30.42); b(f, l + 1) <= g; l++);
                                                    g = 1 + g - b(f, l), v = w((m = (a % 864e5 + 864e5) % 864e5) / 36e5) % 24, _ = w(m / 6e4) % 60, I = w(m / 1e3) % 60, A = m % 1e3
                                                } else f = a.getUTCFullYear(), l = a.getUTCMonth(), g = a.getUTCDate(), v = a.getUTCHours(), _ = a.getUTCMinutes(), I = a.getUTCSeconds(), A = a.getUTCMilliseconds();
                                                a = (f <= 0 || f >= 1e4 ? (f < 0 ? "-" : "+") + E(6, f < 0 ? -f : f) : E(4, f)) + "-" + E(2, l + 1) + "-" + E(2, g) + "T" + E(2, v) + ":" + E(2, _) + ":" + E(2, I) + "." + E(3, A) + "Z"
                                            } else a = null;
                                            if (r && (a = r.call(t, e, a)), null === a) return "null";
                                            if ("[object Boolean]" == (u = y.call(a))) return "" + a;
                                            if ("[object Number]" == u) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                            if ("[object String]" == u) return S("" + a);
                                            if ("object" == typeof a) {
                                                for (k = s.length; k--;)
                                                    if (s[k] === a) throw c();
                                                if (s.push(a), O = [], T = o, o += i, "[object Array]" == u) {
                                                    for (x = 0, k = a.length; x < k; x++) B = C(x, a, r, n, i, o, s), O.push(B === d ? "null" : B);
                                                    j = O.length ? i ? "[\n" + o + O.join(",\n" + o) + "\n" + T + "]" : "[" + O.join(",") + "]" : "[]"
                                                } else h(n || a, function(e) {
                                                    var t = C(e, a, r, n, i, o, s);
                                                    t !== d && O.push(S(e) + ":" + (i ? " " : "") + t)
                                                }), j = O.length ? i ? "{\n" + o + O.join(",\n" + o) + "\n" + T + "}" : "{" + O.join(",") + "}" : "{}";
                                                return s.pop(), j
                                            }
                                        };
                                    t.stringify = function(e, t, r) {
                                        var i, o, s, a;
                                        if (n[typeof t] && t)
                                            if ("[object Function]" == (a = y.call(t))) o = t;
                                            else if ("[object Array]" == a) {
                                            s = {};
                                            for (var u, c = 0, f = t.length; c < f; u = t[c++], ("[object String]" == (a = y.call(u)) || "[object Number]" == a) && (s[u] = 1));
                                        }
                                        if (r)
                                            if ("[object Number]" == (a = y.call(r))) {
                                                if ((r -= r % 1) > 0)
                                                    for (i = "", r > 10 && (r = 10); i.length < r; i += " ");
                                            } else "[object String]" == a && (i = r.length <= 10 ? r : r.slice(0, 10));
                                        return C("", ((u = {})[""] = e, u), o, s, i, "", [])
                                    }
                                }
                                if (!has("json-parse")) {
                                    var A, O, B = i.fromCharCode,
                                        x = {
                                            92: "\\",
                                            34: '"',
                                            47: "/",
                                            98: "\b",
                                            116: "\t",
                                            110: "\n",
                                            102: "\f",
                                            114: "\r"
                                        },
                                        k = function() {
                                            throw A = O = null, u()
                                        },
                                        T = function() {
                                            for (var e, t, r, n, i, o = O, s = o.length; A < s;) switch (i = o.charCodeAt(A)) {
                                                case 9:
                                                case 10:
                                                case 13:
                                                case 32:
                                                    A++;
                                                    break;
                                                case 123:
                                                case 125:
                                                case 91:
                                                case 93:
                                                case 58:
                                                case 44:
                                                    return e = v ? o.charAt(A) : o[A], A++, e;
                                                case 34:
                                                    for (e = "@", A++; A < s;)
                                                        if ((i = o.charCodeAt(A)) < 32) k();
                                                        else if (92 == i) switch (i = o.charCodeAt(++A)) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            e += x[i], A++;
                                                            break;
                                                        case 117:
                                                            for (t = ++A, r = A + 4; A < r; A++)(i = o.charCodeAt(A)) >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70 || k();
                                                            e += B("0x" + o.slice(t, A));
                                                            break;
                                                        default:
                                                            k()
                                                    } else {
                                                        if (34 == i) break;
                                                        for (i = o.charCodeAt(A), t = A; i >= 32 && 92 != i && 34 != i;) i = o.charCodeAt(++A);
                                                        e += o.slice(t, A)
                                                    }
                                                    if (34 == o.charCodeAt(A)) return A++, e;
                                                    k();
                                                default:
                                                    if (t = A, 45 == i && (n = !0, i = o.charCodeAt(++A)), i >= 48 && i <= 57) {
                                                        for (48 == i && ((i = o.charCodeAt(A + 1)) >= 48 && i <= 57) && k(), n = !1; A < s && ((i = o.charCodeAt(A)) >= 48 && i <= 57); A++);
                                                        if (46 == o.charCodeAt(A)) {
                                                            for (r = ++A; r < s && ((i = o.charCodeAt(r)) >= 48 && i <= 57); r++);
                                                            r == A && k(), A = r
                                                        }
                                                        if (101 == (i = o.charCodeAt(A)) || 69 == i) {
                                                            for (43 != (i = o.charCodeAt(++A)) && 45 != i || A++, r = A; r < s && ((i = o.charCodeAt(r)) >= 48 && i <= 57); r++);
                                                            r == A && k(), A = r
                                                        }
                                                        return +o.slice(t, A)
                                                    }
                                                    if (n && k(), "true" == o.slice(A, A + 4)) return A += 4, !0;
                                                    if ("false" == o.slice(A, A + 5)) return A += 5, !1;
                                                    if ("null" == o.slice(A, A + 4)) return A += 4, null;
                                                    k()
                                            }
                                            return "$"
                                        },
                                        j = function(e) {
                                            var t, r;
                                            if ("$" == e && k(), "string" == typeof e) {
                                                if ("@" == (v ? e.charAt(0) : e[0])) return e.slice(1);
                                                if ("[" == e) {
                                                    for (t = [];
                                                        "]" != (e = T()); r || (r = !0)) r && ("," == e ? "]" == (e = T()) && k() : k()), "," == e && k(), t.push(j(e));
                                                    return t
                                                }
                                                if ("{" == e) {
                                                    for (t = {};
                                                        "}" != (e = T()); r || (r = !0)) r && ("," == e ? "}" == (e = T()) && k() : k()), "," != e && "string" == typeof e && "@" == (v ? e.charAt(0) : e[0]) && ":" == T() || k(), t[e.slice(1)] = j(T());
                                                    return t
                                                }
                                                k()
                                            }
                                            return e
                                        },
                                        R = function(e, t, r) {
                                            var n = P(e, t, r);
                                            n === d ? delete e[t] : e[t] = n
                                        },
                                        P = function(e, t, r) {
                                            var n, i = e[t];
                                            if ("object" == typeof i && i)
                                                if ("[object Array]" == y.call(i))
                                                    for (n = i.length; n--;) R(i, n, r);
                                                else h(i, function(e) {
                                                    R(i, e, r)
                                                });
                                            return r.call(e, t, i)
                                        };
                                    t.parse = function(e, t) {
                                        var r, n;
                                        return A = 0, O = "" + e, r = j(T()), "$" != T() && k(), A = O = null, t && "[object Function]" == y.call(t) ? P(((n = {})[""] = r, n), "", t) : r
                                    }
                                }
                            }
                            return t.runInContext = runInContext, t
                        }
                        if (!s || s.global !== s && s.window !== s && s.self !== s || (o = s), i) runInContext(o, i);
                        else {
                            var a = o.JSON,
                                u = o.JSON3,
                                c = !1,
                                f = runInContext(o, o.JSON3 = {
                                    noConflict: function() {
                                        return c || (c = !0, o.JSON = a, o.JSON3 = u, a = u = null), f
                                    }
                                });
                            o.JSON = {
                                parse: f.parse,
                                stringify: f.stringify
                            }
                        }
                    }).call(e)
                });
                var i = "$default_instance",
                    o = 2,
                    s = 4096,
                    a = 1e3,
                    u = "$identify",
                    c = "amplitude_lastEventId",
                    f = "amplitude_lastEventTime",
                    l = "amplitude_lastIdentifyId",
                    p = "amplitude_lastSequenceNumber",
                    h = "amplitude_sessionId",
                    d = "amplitude_deviceId",
                    g = "amplitude_optOut",
                    y = "amplitude_userId",
                    m = "amplitude_cookie_test",
                    v = "revenue_amount",
                    w = "$productId",
                    _ = "$quantity",
                    b = "$price",
                    I = "$revenueType",
                    E = "amp_device_id",
                    S = function encode(e) {
                        for (var t = "", r = 0; r < e.length; r++) {
                            var n = e.charCodeAt(r);
                            n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
                        }
                        return t
                    },
                    C = function decode(e) {
                        for (var t = "", r = 0, n = 0, i = 0, o = 0; r < e.length;)(n = e.charCodeAt(r)) < 128 ? (t += String.fromCharCode(n), r++) : n > 191 && n < 224 ? (i = e.charCodeAt(r + 1), t += String.fromCharCode((31 & n) << 6 | 63 & i), r += 2) : (i = e.charCodeAt(r + 1), o = e.charCodeAt(r + 2), t += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | 63 & o), r += 3);
                        return t
                    },
                    A = {
                        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        encode: function encode(e) {
                            try {
                                if (window.btoa && window.atob) return window.btoa(unescape(encodeURIComponent(e)))
                            } catch (e) {}
                            return A._encode(e)
                        },
                        _encode: function _encode(e) {
                            var t, r, n, i, o, s, a, u = "",
                                c = 0;
                            for (e = S(e); c < e.length;) i = (t = e.charCodeAt(c++)) >> 2, o = (3 & t) << 4 | (r = e.charCodeAt(c++)) >> 4, s = (15 & r) << 2 | (n = e.charCodeAt(c++)) >> 6, a = 63 & n, isNaN(r) ? s = a = 64 : isNaN(n) && (a = 64), u = u + A._keyStr.charAt(i) + A._keyStr.charAt(o) + A._keyStr.charAt(s) + A._keyStr.charAt(a);
                            return u
                        },
                        decode: function decode(e) {
                            try {
                                if (window.btoa && window.atob) return decodeURIComponent(escape(window.atob(e)))
                            } catch (e) {}
                            return A._decode(e)
                        },
                        _decode: function _decode(e) {
                            var t, r, n, i, o, s, a = "",
                                u = 0;
                            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length;) t = A._keyStr.indexOf(e.charAt(u++)) << 2 | (i = A._keyStr.indexOf(e.charAt(u++))) >> 4, r = (15 & i) << 4 | (o = A._keyStr.indexOf(e.charAt(u++))) >> 2, n = (3 & o) << 6 | (s = A._keyStr.indexOf(e.charAt(u++))), a += String.fromCharCode(t), 64 !== o && (a += String.fromCharCode(r)), 64 !== s && (a += String.fromCharCode(n));
                            return a = C(a)
                        }
                    },
                    O = createCommonjsModule(function(e, t) {
                        function port(e) {
                            switch (e) {
                                case "http:":
                                    return 80;
                                case "https:":
                                    return 443;
                                default:
                                    return location.port
                            }
                        }
                        t.parse = function(e) {
                            var t = document.createElement("a");
                            return t.href = e, {
                                href: t.href,
                                host: t.host || location.host,
                                port: "0" === t.port || "" === t.port ? port(t.protocol) : t.port,
                                hash: t.hash,
                                hostname: t.hostname || location.hostname,
                                pathname: "/" != t.pathname.charAt(0) ? "/" + t.pathname : t.pathname,
                                protocol: t.protocol && ":" != t.protocol ? t.protocol : location.protocol,
                                search: t.search,
                                query: t.search.slice(1)
                            }
                        }, t.isAbsolute = function(e) {
                            return 0 == e.indexOf("//") || !!~e.indexOf("://")
                        }, t.isRelative = function(e) {
                            return !t.isAbsolute(e)
                        }, t.isCrossDomain = function(e) {
                            e = t.parse(e);
                            var r = t.parse(window.location.href);
                            return e.hostname !== r.hostname || e.port !== r.port || e.protocol !== r.protocol
                        }
                    }),
                    B = 1e3,
                    x = 60 * B,
                    k = 60 * x,
                    T = 24 * k,
                    j = 365.25 * T,
                    R = function(e, t) {
                        t = t || {};
                        var r = typeof e;
                        if ("string" === r && e.length > 0) return function parse$1(e) {
                            if ((e = String(e)).length > 100) return;
                            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                            if (!t) return;
                            var r = parseFloat(t[1]);
                            switch ((t[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return r * j;
                                case "days":
                                case "day":
                                case "d":
                                    return r * T;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return r * k;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return r * x;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return r * B;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return r;
                                default:
                                    return
                            }
                        }(e);
                        if ("number" === r && !1 === isNaN(e)) return t.long ? function fmtLong(e) {
                            return plural(e, T, "day") || plural(e, k, "hour") || plural(e, x, "minute") || plural(e, B, "second") || e + " ms"
                        }(e) : function fmtShort(e) {
                            if (e >= T) return Math.round(e / T) + "d";
                            if (e >= k) return Math.round(e / k) + "h";
                            if (e >= x) return Math.round(e / x) + "m";
                            if (e >= B) return Math.round(e / B) + "s";
                            return e + "ms"
                        }(e);
                        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                    };

                function plural(e, t, r) {
                    if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
                }
                var P = createCommonjsModule(function(e, t) {
                        function createDebug(e) {
                            var r;

                            function debug() {
                                if (debug.enabled) {
                                    var e = debug,
                                        n = +new Date,
                                        i = n - (r || n);
                                    e.diff = i, e.prev = r, e.curr = n, r = n;
                                    for (var o = new Array(arguments.length), s = 0; s < o.length; s++) o[s] = arguments[s];
                                    o[0] = t.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
                                    var a = 0;
                                    o[0] = o[0].replace(/%([a-zA-Z%])/g, function(r, n) {
                                        if ("%%" === r) return r;
                                        a++;
                                        var i = t.formatters[n];
                                        if ("function" == typeof i) {
                                            var s = o[a];
                                            r = i.call(e, s), o.splice(a, 1), a--
                                        }
                                        return r
                                    }), t.formatArgs.call(e, o), (debug.log || t.log || console.log.bind(console)).apply(e, o)
                                }
                            }
                            return debug.namespace = e, debug.enabled = t.enabled(e), debug.useColors = t.useColors(), debug.color = function selectColor(e) {
                                var r, n = 0;
                                for (r in e) n = (n << 5) - n + e.charCodeAt(r), n |= 0;
                                return t.colors[Math.abs(n) % t.colors.length]
                            }(e), debug.destroy = destroy, "function" == typeof t.init && t.init(debug), t.instances.push(debug), debug
                        }

                        function destroy() {
                            var e = t.instances.indexOf(this);
                            return -1 !== e && (t.instances.splice(e, 1), !0)
                        }(t = e.exports = createDebug.debug = createDebug.default = createDebug).coerce = function coerce(e) {
                            return e instanceof Error ? e.stack || e.message : e
                        }, t.disable = function disable() {
                            t.enable("")
                        }, t.enable = function enable(e) {
                            var r;
                            t.save(e), t.names = [], t.skips = [];
                            var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                                i = n.length;
                            for (r = 0; r < i; r++) n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                            for (r = 0; r < t.instances.length; r++) {
                                var o = t.instances[r];
                                o.enabled = t.enabled(o.namespace)
                            }
                        }, t.enabled = function enabled(e) {
                            if ("*" === e[e.length - 1]) return !0;
                            var r, n;
                            for (r = 0, n = t.skips.length; r < n; r++)
                                if (t.skips[r].test(e)) return !1;
                            for (r = 0, n = t.names.length; r < n; r++)
                                if (t.names[r].test(e)) return !0;
                            return !1
                        }, t.humanize = R, t.instances = [], t.names = [], t.skips = [], t.formatters = {}
                    }),
                    U = createCommonjsModule(function(e, t) {
                        function load() {
                            var e;
                            try {
                                e = t.storage.debug
                            } catch (e) {}
                            return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
                        }(t = e.exports = P).log = function log() {
                            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                        }, t.formatArgs = function formatArgs(e) {
                            var r = this.useColors;
                            if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), !r) return;
                            var n = "color: " + this.color;
                            e.splice(1, 0, n, "color: inherit");
                            var i = 0,
                                o = 0;
                            e[0].replace(/%[a-zA-Z%]/g, function(e) {
                                "%%" !== e && (i++, "%c" === e && (o = i))
                            }), e.splice(o, 0, n)
                        }, t.save = function save(e) {
                            try {
                                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                            } catch (e) {}
                        }, t.load = load, t.useColors = function useColors() {
                            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                        }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function localstorage() {
                            try {
                                return window.localStorage
                            } catch (e) {}
                        }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
                            try {
                                return JSON.stringify(e)
                            } catch (e) {
                                return "[UnexpectedJSONParseError]: " + e.message
                            }
                        }, t.enable(load())
                    })("cookie"),
                    N = function(e, t, r) {
                        switch (arguments.length) {
                            case 3:
                            case 2:
                                return function set$1(e, t, r) {
                                    r = r || {};
                                    var n = encode(e) + "=" + encode(t);
                                    null == t && (r.maxage = -1);
                                    r.maxage && (r.expires = new Date(+new Date + r.maxage));
                                    r.path && (n += "; path=" + r.path);
                                    r.domain && (n += "; domain=" + r.domain);
                                    r.expires && (n += "; expires=" + r.expires.toUTCString());
                                    r.secure && (n += "; secure");
                                    document.cookie = n
                                }(e, t, r);
                            case 1:
                                return function get$1(e) {
                                    return all()[e]
                                }(e);
                            default:
                                return all()
                        }
                    };

                function all() {
                    var e;
                    try {
                        e = document.cookie
                    } catch (e) {
                        return "undefined" != typeof console && "function" == typeof console.error && console.error(e.stack || e), {}
                    }
                    return function parse(e) {
                        var t, r = {},
                            n = e.split(/ *; */);
                        if ("" == n[0]) return r;
                        for (var i = 0; i < n.length; ++i) t = n[i].split("="), r[decode(t[0])] = decode(t[1]);
                        return r
                    }(e)
                }

                function encode(e) {
                    try {
                        return encodeURIComponent(e)
                    } catch (t) {
                        U("error `encode(%o)` - %o", e, t)
                    }
                }

                function decode(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch (t) {
                        U("error `decode(%o)` - %o", e, t)
                    }
                }
                var F, D = createCommonjsModule(function(e, t) {
                        var r = O.parse;

                        function domain(e) {
                            for (var r = t.cookie, n = t.levels(e), i = 0; i < n.length; ++i) {
                                var o = n[i],
                                    s = {
                                        domain: "." + o
                                    };
                                if (r("__tld__", 1, s), r("__tld__")) return r("__tld__", null, s), o
                            }
                            return ""
                        }
                        domain.levels = function(e) {
                            var t = r(e).hostname.split("."),
                                n = t[t.length - 1],
                                i = [];
                            if (4 === t.length && n === parseInt(n, 10)) return i;
                            if (t.length <= 1) return i;
                            for (var o = t.length - 2; o >= 0; --o) i.push(t.slice(o).join("."));
                            return i
                        }, domain.cookie = N, t = e.exports = domain
                    }),
                    M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    L = Object.prototype.toString,
                    q = function(e) {
                        switch (L.call(e)) {
                            case "[object Date]":
                                return "date";
                            case "[object RegExp]":
                                return "regexp";
                            case "[object Arguments]":
                                return "arguments";
                            case "[object Array]":
                                return "array";
                            case "[object Error]":
                                return "error"
                        }
                        return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : e && 1 === e.nodeType ? "element" : void 0 !== n && n.isBuffer(e) ? "buffer" : void 0 === (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e)) ? "undefined" : M(e)
                    },
                    W = "WARN",
                    Y = {
                        DISABLE: 0,
                        ERROR: 1,
                        WARN: 2,
                        INFO: 3
                    },
                    z = {
                        error: function error(e) {
                            W >= Y.ERROR && $(e)
                        },
                        warn: function warn(e) {
                            W >= Y.WARN && $(e)
                        },
                        info: function info(e) {
                            W >= Y.INFO && $(e)
                        }
                    },
                    $ = function _log(e) {
                        try {
                            console.log("[Amplitude] " + e)
                        } catch (e) {}
                    },
                    G = function _truncateValue(e) {
                        return "string" === q(e) && e.length > s ? e.substring(0, s) : e
                    },
                    V = function validateProperties(e) {
                        var t = q(e);
                        if ("object" !== t) return z.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"), {};
                        if (Object.keys(e).length > a) return z.error("Error: too many properties (more than 1000), ignoring"), {};
                        var r = {};
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var i = n,
                                    o = q(i);
                                "string" !== o && (i = String(i), z.warn("WARNING: Non-string property key, received type " + o + ', coercing to string "' + i + '"'));
                                var s = K(i, e[n]);
                                null !== s && (r[i] = s)
                            }
                        return r
                    },
                    J = ["null", "nan", "undefined", "function", "arguments", "regexp", "element"],
                    K = function validatePropertyValue(e, t) {
                        var r = q(t);
                        if (-1 !== J.indexOf(r)) z.warn('WARNING: Property key "' + e + '" with invalid value type ' + r + ", ignoring"), t = null;
                        else if ("error" === r) t = String(t), z.warn('WARNING: Property key "' + e + '" with value type error, coercing to ' + t);
                        else if ("array" === r) {
                            for (var n = [], i = 0; i < t.length; i++) {
                                var o = t[i],
                                    s = q(o);
                                "array" !== s && "object" !== s ? n.push(validatePropertyValue(e, o)) : z.warn("WARNING: Cannot have " + s + " nested in an array property value, skipping")
                            }
                            t = n
                        } else "object" === r && (t = V(t));
                        return t
                    },
                    H = function validateGroupName(e, t) {
                        var r = q(t);
                        if ("string" === r) return t;
                        if ("date" === r || "number" === r || "boolean" === r) return t = String(t), z.warn("WARNING: Non-string groupName, received type " + r + ', coercing to string "' + t + '"'), t;
                        if ("array" === r) {
                            for (var n = [], i = 0; i < t.length; i++) {
                                var o = t[i],
                                    s = q(o);
                                "array" !== s && "object" !== s ? "string" === s ? n.push(o) : "date" !== s && "number" !== s && "boolean" !== s || (o = String(o), z.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + o + '"'), n.push(o)) : z.warn("WARNING: Skipping nested " + s + " in array groupName")
                            }
                            return n
                        }
                        z.warn("WARNING: Non-string groupName, received type " + r + ". Please use strings or array of strings for groupName")
                    },
                    Q = z,
                    X = function isEmptyString(e) {
                        return !e || 0 === e.length
                    },
                    Z = function getQueryParam(e, t) {
                        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                        var r = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                        return null === r ? void 0 : decodeURIComponent(r[1].replace(/\+/g, " "))
                    },
                    ee = function truncate(e) {
                        if ("array" === q(e))
                            for (var t = 0; t < e.length; t++) e[t] = truncate(e[t]);
                        else if ("object" === q(e))
                            for (var r in e) e.hasOwnProperty(r) && (e[r] = truncate(e[r]));
                        else e = G(e);
                        return e
                    },
                    te = function validateGroups(e) {
                        var t = q(e);
                        if ("object" !== t) return z.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"), {};
                        var r = {};
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var i = n,
                                    o = q(i);
                                "string" !== o && (i = String(i), z.warn("WARNING: Non-string groupType, received type " + o + ', coercing to string "' + i + '"'));
                                var s = H(i, e[n]);
                                null !== s && (r[i] = s)
                            }
                        return r
                    },
                    re = function validateInput(e, t, r) {
                        return q(e) === r || (z.error("Invalid " + t + " input type. Expected " + r + " but received " + q(e)), !1)
                    },
                    ne = V,
                    ie = {
                        expirationDays: void 0,
                        domain: void 0
                    },
                    oe = function _domainSpecific(e) {
                        var t = "";
                        return ie.domain && (t = "." === ie.domain.charAt(0) ? ie.domain.substring(1) : ie.domain), e + t
                    },
                    se = function get(e) {
                        try {
                            for (var t = oe(e) + "=", r = document.cookie.split(";"), n = null, i = 0; i < r.length; i++) {
                                for (var o = r[i];
                                    " " === o.charAt(0);) o = o.substring(1, o.length);
                                if (0 === o.indexOf(t)) {
                                    n = o.substring(t.length, o.length);
                                    break
                                }
                            }
                            return n ? JSON.parse(A.decode(n)) : null
                        } catch (e) {
                            return null
                        }
                    },
                    ae = function set(e, t) {
                        try {
                            return ue(oe(e), A.encode(JSON.stringify(t)), ie), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    ue = function _set(e, t, r) {
                        var n = null !== t ? r.expirationDays : -1;
                        if (n) {
                            var i = new Date;
                            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), n = i
                        }
                        var o = e + "=" + t;
                        n && (o += "; expires=" + n.toUTCString()), o += "; path=/", r.domain && (o += "; domain=" + r.domain), document.cookie = o
                    },
                    ce = function remove(e) {
                        try {
                            return ue(oe(e), null, ie), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    fe = {
                        reset: function reset() {
                            ie = {
                                expirationDays: void 0,
                                domain: void 0
                            }
                        },
                        options: function options(e) {
                            if (0 === arguments.length) return ie;
                            e = e || {}, ie.expirationDays = e.expirationDays;
                            var t = X(e.domain) ? "." + D(window.location.href) : e.domain,
                                r = Math.random();
                            ie.domain = t, ae("amplitude_test", r);
                            var n = se("amplitude_test");
                            n && n === r || (t = null), ce("amplitude_test"), ie.domain = t
                        },
                        get: se,
                        set: ae,
                        remove: ce
                    };
                if (function windowLocalStorageAvailable() {
                        var e, t = new Date;
                        try {
                            return window.localStorage.setItem(t, t), e = window.localStorage.getItem(t) === String(t), window.localStorage.removeItem(t), e
                        } catch (e) {}
                        return !1
                    }()) F = window.localStorage;
                else if (window.globalStorage) try {
                    F = window.globalStorage[window.location.hostname]
                } catch (e) {} else {
                    var le = document.createElement("div"),
                        pe = "localStorage";
                    le.style.display = "none", document.getElementsByTagName("head")[0].appendChild(le), le.addBehavior && (le.addBehavior("#default#userdata"), F = {
                        length: 0,
                        setItem: function setItem(e, t) {
                            le.load(pe), le.getAttribute(e) || this.length++, le.setAttribute(e, t), le.save(pe)
                        },
                        getItem: function getItem(e) {
                            return le.load(pe), le.getAttribute(e)
                        },
                        removeItem: function removeItem(e) {
                            le.load(pe), le.getAttribute(e) && this.length--, le.removeAttribute(e), le.save(pe)
                        },
                        clear: function clear() {
                            le.load(pe);
                            for (var e, t = 0; e = le.XMLDocument.documentElement.attributes[t++];) le.removeAttribute(e.name);
                            le.save(pe), this.length = 0
                        },
                        key: function key(e) {
                            return le.load(pe), le.XMLDocument.documentElement.attributes[e]
                        }
                    }, le.load(pe), F.length = le.XMLDocument.documentElement.attributes.length)
                }
                F || (F = {
                    length: 0,
                    setItem: function setItem(e, t) {},
                    getItem: function getItem(e) {},
                    removeItem: function removeItem(e) {},
                    clear: function clear() {},
                    key: function key(e) {}
                });
                var he = F,
                    de = function cookieStorage() {
                        this.storage = null
                    };
                de.prototype._cookiesEnabled = function() {
                    var e, t = String(new Date);
                    try {
                        return fe.set(m, t), e = fe.get(m) === t, fe.remove(m), e
                    } catch (e) {}
                    return !1
                }, de.prototype.getStorage = function() {
                    if (null !== this.storage) return this.storage;
                    if (this._cookiesEnabled()) this.storage = fe;
                    else {
                        this.storage = {
                            _options: {
                                expirationDays: void 0,
                                domain: void 0
                            },
                            reset: function reset() {
                                this._options = {
                                    expirationDays: void 0,
                                    domain: void 0
                                }
                            },
                            options: function options(e) {
                                return 0 === arguments.length ? this._options : (e = e || {}, this._options.expirationDays = e.expirationDays || this._options.expirationDays, this._options.domain = e.domain || this._options.domain || window.location.hostname, this._options)
                            },
                            get: function get(e) {
                                try {
                                    return JSON.parse(he.getItem("amp_cookiestore_" + e))
                                } catch (e) {}
                                return null
                            },
                            set: function set(e, t) {
                                try {
                                    return he.setItem("amp_cookiestore_" + e, JSON.stringify(t)), !0
                                } catch (e) {}
                                return !1
                            },
                            remove: function remove(e) {
                                try {
                                    he.removeItem("amp_cookiestore_" + e)
                                } catch (e) {
                                    return !1
                                }
                            }
                        }
                    }
                    return this.storage
                };
                var ge = function Identify() {
                    this.userPropertiesOperations = {}, this.properties = []
                };
                ge.prototype.add = function(e, t) {
                    return "number" === q(t) || "string" === q(t) ? this._addOperation("$add", e, t) : Q.error("Unsupported type for value: " + q(t) + ", expecting number or string"), this
                }, ge.prototype.append = function(e, t) {
                    return this._addOperation("$append", e, t), this
                }, ge.prototype.clearAll = function() {
                    return Object.keys(this.userPropertiesOperations).length > 0 ? (this.userPropertiesOperations.hasOwnProperty("$clearAll") || Q.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"), this) : (this.userPropertiesOperations.$clearAll = "-", this)
                }, ge.prototype.prepend = function(e, t) {
                    return this._addOperation("$prepend", e, t), this
                }, ge.prototype.set = function(e, t) {
                    return this._addOperation("$set", e, t), this
                }, ge.prototype.setOnce = function(e, t) {
                    return this._addOperation("$setOnce", e, t), this
                }, ge.prototype.unset = function(e) {
                    return this._addOperation("$unset", e, "-"), this
                }, ge.prototype._addOperation = function(e, t, r) {
                    this.userPropertiesOperations.hasOwnProperty("$clearAll") ? Q.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (this.userPropertiesOperations.hasOwnProperty(e) || (this.userPropertiesOperations[e] = {}), this.userPropertiesOperations[e][t] = r, this.properties.push(t)) : Q.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
                };
                var ye, me = createCommonjsModule(function(t) {
                        ! function(e) {
                            function safeAdd(e, t) {
                                var r = (65535 & e) + (65535 & t);
                                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
                            }

                            function md5cmn(e, t, r, n, i, o) {
                                return safeAdd(function bitRotateLeft(e, t) {
                                    return e << t | e >>> 32 - t
                                }(safeAdd(safeAdd(t, e), safeAdd(n, o)), i), r)
                            }

                            function md5ff(e, t, r, n, i, o, s) {
                                return md5cmn(t & r | ~t & n, e, t, i, o, s)
                            }

                            function md5gg(e, t, r, n, i, o, s) {
                                return md5cmn(t & n | r & ~n, e, t, i, o, s)
                            }

                            function md5hh(e, t, r, n, i, o, s) {
                                return md5cmn(t ^ r ^ n, e, t, i, o, s)
                            }

                            function md5ii(e, t, r, n, i, o, s) {
                                return md5cmn(r ^ (t | ~n), e, t, i, o, s)
                            }

                            function binlMD5(e, t) {
                                var r, n, i, o, s;
                                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                                var a = 1732584193,
                                    u = -271733879,
                                    c = -1732584194,
                                    f = 271733878;
                                for (r = 0; r < e.length; r += 16) n = a, i = u, o = c, s = f, a = md5ff(a, u, c, f, e[r], 7, -680876936), f = md5ff(f, a, u, c, e[r + 1], 12, -389564586), c = md5ff(c, f, a, u, e[r + 2], 17, 606105819), u = md5ff(u, c, f, a, e[r + 3], 22, -1044525330), a = md5ff(a, u, c, f, e[r + 4], 7, -176418897), f = md5ff(f, a, u, c, e[r + 5], 12, 1200080426), c = md5ff(c, f, a, u, e[r + 6], 17, -1473231341), u = md5ff(u, c, f, a, e[r + 7], 22, -45705983), a = md5ff(a, u, c, f, e[r + 8], 7, 1770035416), f = md5ff(f, a, u, c, e[r + 9], 12, -1958414417), c = md5ff(c, f, a, u, e[r + 10], 17, -42063), u = md5ff(u, c, f, a, e[r + 11], 22, -1990404162), a = md5ff(a, u, c, f, e[r + 12], 7, 1804603682), f = md5ff(f, a, u, c, e[r + 13], 12, -40341101), c = md5ff(c, f, a, u, e[r + 14], 17, -1502002290), a = md5gg(a, u = md5ff(u, c, f, a, e[r + 15], 22, 1236535329), c, f, e[r + 1], 5, -165796510), f = md5gg(f, a, u, c, e[r + 6], 9, -1069501632), c = md5gg(c, f, a, u, e[r + 11], 14, 643717713), u = md5gg(u, c, f, a, e[r], 20, -373897302), a = md5gg(a, u, c, f, e[r + 5], 5, -701558691), f = md5gg(f, a, u, c, e[r + 10], 9, 38016083), c = md5gg(c, f, a, u, e[r + 15], 14, -660478335), u = md5gg(u, c, f, a, e[r + 4], 20, -405537848), a = md5gg(a, u, c, f, e[r + 9], 5, 568446438), f = md5gg(f, a, u, c, e[r + 14], 9, -1019803690), c = md5gg(c, f, a, u, e[r + 3], 14, -187363961), u = md5gg(u, c, f, a, e[r + 8], 20, 1163531501), a = md5gg(a, u, c, f, e[r + 13], 5, -1444681467), f = md5gg(f, a, u, c, e[r + 2], 9, -51403784), c = md5gg(c, f, a, u, e[r + 7], 14, 1735328473), a = md5hh(a, u = md5gg(u, c, f, a, e[r + 12], 20, -1926607734), c, f, e[r + 5], 4, -378558), f = md5hh(f, a, u, c, e[r + 8], 11, -2022574463), c = md5hh(c, f, a, u, e[r + 11], 16, 1839030562), u = md5hh(u, c, f, a, e[r + 14], 23, -35309556), a = md5hh(a, u, c, f, e[r + 1], 4, -1530992060), f = md5hh(f, a, u, c, e[r + 4], 11, 1272893353), c = md5hh(c, f, a, u, e[r + 7], 16, -155497632), u = md5hh(u, c, f, a, e[r + 10], 23, -1094730640), a = md5hh(a, u, c, f, e[r + 13], 4, 681279174), f = md5hh(f, a, u, c, e[r], 11, -358537222), c = md5hh(c, f, a, u, e[r + 3], 16, -722521979), u = md5hh(u, c, f, a, e[r + 6], 23, 76029189), a = md5hh(a, u, c, f, e[r + 9], 4, -640364487), f = md5hh(f, a, u, c, e[r + 12], 11, -421815835), c = md5hh(c, f, a, u, e[r + 15], 16, 530742520), a = md5ii(a, u = md5hh(u, c, f, a, e[r + 2], 23, -995338651), c, f, e[r], 6, -198630844), f = md5ii(f, a, u, c, e[r + 7], 10, 1126891415), c = md5ii(c, f, a, u, e[r + 14], 15, -1416354905), u = md5ii(u, c, f, a, e[r + 5], 21, -57434055), a = md5ii(a, u, c, f, e[r + 12], 6, 1700485571), f = md5ii(f, a, u, c, e[r + 3], 10, -1894986606), c = md5ii(c, f, a, u, e[r + 10], 15, -1051523), u = md5ii(u, c, f, a, e[r + 1], 21, -2054922799), a = md5ii(a, u, c, f, e[r + 8], 6, 1873313359), f = md5ii(f, a, u, c, e[r + 15], 10, -30611744), c = md5ii(c, f, a, u, e[r + 6], 15, -1560198380), u = md5ii(u, c, f, a, e[r + 13], 21, 1309151649), a = md5ii(a, u, c, f, e[r + 4], 6, -145523070), f = md5ii(f, a, u, c, e[r + 11], 10, -1120210379), c = md5ii(c, f, a, u, e[r + 2], 15, 718787259), u = md5ii(u, c, f, a, e[r + 9], 21, -343485551), a = safeAdd(a, n), u = safeAdd(u, i), c = safeAdd(c, o), f = safeAdd(f, s);
                                return [a, u, c, f]
                            }

                            function binl2rstr(e) {
                                var t, r = "",
                                    n = 32 * e.length;
                                for (t = 0; t < n; t += 8) r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                                return r
                            }

                            function rstr2binl(e) {
                                var t, r = [];
                                for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
                                var n = 8 * e.length;
                                for (t = 0; t < n; t += 8) r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                                return r
                            }

                            function rstr2hex(e) {
                                var t, r, n = "";
                                for (r = 0; r < e.length; r += 1) t = e.charCodeAt(r), n += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
                                return n
                            }

                            function str2rstrUTF8(e) {
                                return unescape(encodeURIComponent(e))
                            }

                            function rawMD5(e) {
                                return function rstrMD5(e) {
                                    return binl2rstr(binlMD5(rstr2binl(e), 8 * e.length))
                                }(str2rstrUTF8(e))
                            }

                            function rawHMACMD5(e, t) {
                                return function rstrHMACMD5(e, t) {
                                    var r, n, i = rstr2binl(e),
                                        o = [],
                                        s = [];
                                    for (o[15] = s[15] = void 0, i.length > 16 && (i = binlMD5(i, 8 * e.length)), r = 0; r < 16; r += 1) o[r] = 909522486 ^ i[r], s[r] = 1549556828 ^ i[r];
                                    return n = binlMD5(o.concat(rstr2binl(t)), 512 + 8 * t.length), binl2rstr(binlMD5(s.concat(n), 640))
                                }(str2rstrUTF8(e), str2rstrUTF8(t))
                            }

                            function md5(e, t, r) {
                                return t ? r ? rawHMACMD5(t, e) : function hexHMACMD5(e, t) {
                                    return rstr2hex(rawHMACMD5(e, t))
                                }(t, e) : r ? rawMD5(e) : function hexMD5(e) {
                                    return rstr2hex(rawMD5(e))
                                }(e)
                            }
                            t.exports ? t.exports = md5 : e.md5 = md5
                        }(e)
                    }),
                    ve = "object" == typeof e && e && e.Object === Object && e,
                    we = "object" == typeof self && self && self.Object === Object && self,
                    _e = ve || we || Function("return this")(),
                    be = _e.Symbol,
                    Ie = Object.prototype,
                    Ee = Ie.hasOwnProperty,
                    Se = Ie.toString,
                    Ce = be ? be.toStringTag : void 0,
                    Ae = function getRawTag(e) {
                        var t = Ee.call(e, Ce),
                            r = e[Ce];
                        try {
                            e[Ce] = void 0;
                            var n = !0
                        } catch (e) {}
                        var i = Se.call(e);
                        return n && (t ? e[Ce] = r : delete e[Ce]), i
                    },
                    Oe = Object.prototype.toString,
                    Be = function objectToString(e) {
                        return Oe.call(e)
                    },
                    xe = "[object Null]",
                    ke = "[object Undefined]",
                    Te = be ? be.toStringTag : void 0,
                    je = function baseGetTag(e) {
                        return null == e ? void 0 === e ? ke : xe : Te && Te in Object(e) ? Ae(e) : Be(e)
                    },
                    Re = function isObject(e) {
                        var t = typeof e;
                        return null != e && ("object" == t || "function" == t)
                    },
                    Pe = "[object AsyncFunction]",
                    Ue = "[object Function]",
                    Ne = "[object GeneratorFunction]",
                    Fe = "[object Proxy]",
                    De = function isFunction(e) {
                        if (!Re(e)) return !1;
                        var t = je(e);
                        return t == Ue || t == Ne || t == Pe || t == Fe
                    },
                    Me = _e["__core-js_shared__"],
                    Le = (ye = /[^.]+$/.exec(Me && Me.keys && Me.keys.IE_PROTO || "")) ? "Symbol(src)_1." + ye : "",
                    qe = function isMasked(e) {
                        return !!Le && Le in e
                    },
                    We = Function.prototype.toString,
                    Ye = function toSource(e) {
                        if (null != e) {
                            try {
                                return We.call(e)
                            } catch (e) {}
                            try {
                                return e + ""
                            } catch (e) {}
                        }
                        return ""
                    },
                    ze = /^\[object .+?Constructor\]$/,
                    $e = Function.prototype,
                    Ge = Object.prototype,
                    Ve = $e.toString,
                    Je = Ge.hasOwnProperty,
                    Ke = RegExp("^" + Ve.call(Je).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    He = function baseIsNative(e) {
                        return !(!Re(e) || qe(e)) && (De(e) ? Ke : ze).test(Ye(e))
                    },
                    Qe = function getValue(e, t) {
                        return null == e ? void 0 : e[t]
                    },
                    Xe = function getNative(e, t) {
                        var r = Qe(e, t);
                        return He(r) ? r : void 0
                    },
                    Ze = function() {
                        try {
                            var e = Xe(Object, "defineProperty");
                            return e({}, "", {}), e
                        } catch (e) {}
                    }(),
                    et = function baseAssignValue(e, t, r) {
                        "__proto__" == t && Ze ? Ze(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: r,
                            writable: !0
                        }) : e[t] = r
                    },
                    tt = function eq(e, t) {
                        return e === t || e != e && t != t
                    },
                    rt = Object.prototype.hasOwnProperty,
                    nt = function assignValue(e, t, r) {
                        var n = e[t];
                        rt.call(e, t) && tt(n, r) && (void 0 !== r || t in e) || et(e, t, r)
                    },
                    it = function copyObject(e, t, r, n) {
                        var i = !r;
                        r || (r = {});
                        for (var o = -1, s = t.length; ++o < s;) {
                            var a = t[o],
                                u = n ? n(r[a], e[a], a, r, e) : void 0;
                            void 0 === u && (u = e[a]), i ? et(r, a, u) : nt(r, a, u)
                        }
                        return r
                    },
                    ot = function identity(e) {
                        return e
                    },
                    st = function apply(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    },
                    at = Math.max,
                    ut = function overRest(e, t, r) {
                        return t = at(void 0 === t ? e.length - 1 : t, 0),
                            function() {
                                for (var n = arguments, i = -1, o = at(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                                i = -1;
                                for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                                return a[t] = r(s), st(e, this, a)
                            }
                    },
                    ct = function constant(e) {
                        return function() {
                            return e
                        }
                    },
                    ft = Ze ? function(e, t) {
                        return Ze(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: ct(t),
                            writable: !0
                        })
                    } : ot,
                    lt = 800,
                    pt = 16,
                    ht = Date.now,
                    dt = function shortOut(e) {
                        var t = 0,
                            r = 0;
                        return function() {
                            var n = ht(),
                                i = pt - (n - r);
                            if (r = n, i > 0) {
                                if (++t >= lt) return arguments[0]
                            } else t = 0;
                            return e.apply(void 0, arguments)
                        }
                    }(ft),
                    gt = function baseRest(e, t) {
                        return dt(ut(e, t, ot), e + "")
                    },
                    yt = 9007199254740991,
                    mt = function isLength(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= yt
                    },
                    vt = function isArrayLike(e) {
                        return null != e && mt(e.length) && !De(e)
                    },
                    wt = 9007199254740991,
                    _t = /^(?:0|[1-9]\d*)$/,
                    bt = function isIndex(e, t) {
                        return !!(t = null == t ? wt : t) && ("number" == typeof e || _t.test(e)) && e > -1 && e % 1 == 0 && e < t
                    },
                    It = function isIterateeCall(e, t, r) {
                        if (!Re(r)) return !1;
                        var n = typeof t;
                        return !!("number" == n ? vt(r) && bt(t, r.length) : "string" == n && t in r) && tt(r[t], e)
                    },
                    Et = function createAssigner(e) {
                        return gt(function(t, r) {
                            var n = -1,
                                i = r.length,
                                o = i > 1 ? r[i - 1] : void 0,
                                s = i > 2 ? r[2] : void 0;
                            for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, s && It(r[0], r[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++n < i;) {
                                var a = r[n];
                                a && e(t, a, n, o)
                            }
                            return t
                        })
                    },
                    St = Object.prototype,
                    Ct = function isPrototype(e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || St)
                    },
                    At = function baseTimes(e, t) {
                        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                        return n
                    },
                    Ot = function isObjectLike(e) {
                        return null != e && "object" == typeof e
                    },
                    Bt = "[object Arguments]",
                    xt = function baseIsArguments(e) {
                        return Ot(e) && je(e) == Bt
                    },
                    kt = Object.prototype,
                    Tt = kt.hasOwnProperty,
                    jt = kt.propertyIsEnumerable,
                    Rt = xt(function() {
                        return arguments
                    }()) ? xt : function(e) {
                        return Ot(e) && Tt.call(e, "callee") && !jt.call(e, "callee")
                    },
                    Pt = Array.isArray,
                    Ut = function stubFalse() {
                        return !1
                    },
                    Nt = createCommonjsModule(function(e, t) {
                        var r = t && !t.nodeType && t,
                            n = r && e && !e.nodeType && e,
                            i = n && n.exports === r ? _e.Buffer : void 0,
                            o = (i ? i.isBuffer : void 0) || Ut;
                        e.exports = o
                    }),
                    Ft = {};
                Ft["[object Float32Array]"] = Ft["[object Float64Array]"] = Ft["[object Int8Array]"] = Ft["[object Int16Array]"] = Ft["[object Int32Array]"] = Ft["[object Uint8Array]"] = Ft["[object Uint8ClampedArray]"] = Ft["[object Uint16Array]"] = Ft["[object Uint32Array]"] = !0, Ft["[object Arguments]"] = Ft["[object Array]"] = Ft["[object ArrayBuffer]"] = Ft["[object Boolean]"] = Ft["[object DataView]"] = Ft["[object Date]"] = Ft["[object Error]"] = Ft["[object Function]"] = Ft["[object Map]"] = Ft["[object Number]"] = Ft["[object Object]"] = Ft["[object RegExp]"] = Ft["[object Set]"] = Ft["[object String]"] = Ft["[object WeakMap]"] = !1;
                var Dt = function baseIsTypedArray(e) {
                        return Ot(e) && mt(e.length) && !!Ft[je(e)]
                    },
                    Mt = function baseUnary(e) {
                        return function(t) {
                            return e(t)
                        }
                    },
                    Lt = createCommonjsModule(function(e, t) {
                        var r = t && !t.nodeType && t,
                            n = r && e && !e.nodeType && e,
                            i = n && n.exports === r && ve.process,
                            o = function() {
                                try {
                                    return i && i.binding && i.binding("util")
                                } catch (e) {}
                            }();
                        e.exports = o
                    }),
                    qt = Lt && Lt.isTypedArray,
                    Wt = qt ? Mt(qt) : Dt,
                    Yt = Object.prototype.hasOwnProperty,
                    zt = function arrayLikeKeys(e, t) {
                        var r = Pt(e),
                            n = !r && Rt(e),
                            i = !r && !n && Nt(e),
                            o = !r && !n && !i && Wt(e),
                            s = r || n || i || o,
                            a = s ? At(e.length, String) : [],
                            u = a.length;
                        for (var c in e) !t && !Yt.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || bt(c, u)) || a.push(c);
                        return a
                    },
                    $t = function overArg(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }(Object.keys, Object),
                    Gt = Object.prototype.hasOwnProperty,
                    Vt = function baseKeys(e) {
                        if (!Ct(e)) return $t(e);
                        var t = [];
                        for (var r in Object(e)) Gt.call(e, r) && "constructor" != r && t.push(r);
                        return t
                    },
                    Jt = function keys(e) {
                        return vt(e) ? zt(e) : Vt(e)
                    },
                    Kt = Object.prototype.hasOwnProperty,
                    Ht = Et(function(e, t) {
                        if (Ct(t) || vt(t)) it(t, Jt(t), e);
                        else
                            for (var r in t) Kt.call(t, r) && nt(e, r, t[r])
                    });

                function hasOwnProperty$7(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                var Qt = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };

                function stringifyPrimitive(e) {
                    switch (typeof e) {
                        case "string":
                            return e;
                        case "boolean":
                            return e ? "true" : "false";
                        case "number":
                            return isFinite(e) ? e : "";
                        default:
                            return ""
                    }
                }

                function stringify(e, t, r, n) {
                    return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? map(Xt(e), function(n) {
                        var i = encodeURIComponent(stringifyPrimitive(n)) + r;
                        return Qt(e[n]) ? map(e[n], function(e) {
                            return i + encodeURIComponent(stringifyPrimitive(e))
                        }).join(t) : i + encodeURIComponent(stringifyPrimitive(e[n]))
                    }).join(t) : n ? encodeURIComponent(stringifyPrimitive(n)) + r + encodeURIComponent(stringifyPrimitive(e)) : ""
                }

                function map(e, t) {
                    if (e.map) return e.map(t);
                    for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                    return r
                }
                var Xt = Object.keys || function(e) {
                    var t = [];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t
                };

                function parse$2(e, t, r, n) {
                    t = t || "&", r = r || "=";
                    var i = {};
                    if ("string" != typeof e || 0 === e.length) return i;
                    var o = /\+/g;
                    e = e.split(t);
                    var s = 1e3;
                    n && "number" == typeof n.maxKeys && (s = n.maxKeys);
                    var a = e.length;
                    s > 0 && a > s && (a = s);
                    for (var u = 0; u < a; ++u) {
                        var c, f, l, p, h = e[u].replace(o, "%20"),
                            d = h.indexOf(r);
                        d >= 0 ? (c = h.substr(0, d), f = h.substr(d + 1)) : (c = h, f = ""), l = decodeURIComponent(c), p = decodeURIComponent(f), hasOwnProperty$7(i, l) ? Qt(i[l]) ? i[l].push(p) : i[l] = [i[l], p] : i[l] = p
                    }
                    return i
                }
                var Zt = {
                        encode: stringify,
                        stringify: stringify,
                        decode: parse$2,
                        parse: parse$2
                    },
                    er = function Request(e, t) {
                        this.url = e, this.data = t || {}
                    };
                er.prototype.send = function(e) {
                    if (!!window.XDomainRequest) {
                        var t = new window.XDomainRequest;
                        t.open("POST", this.url, !0), t.onload = function() {
                            e(200, t.responseText)
                        }, t.onerror = function() {
                            "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
                        }, t.ontimeout = function() {}, t.onprogress = function() {}, t.send(Zt.stringify(this.data))
                    } else {
                        var r = new XMLHttpRequest;
                        r.open("POST", this.url, !0), r.onreadystatechange = function() {
                            4 === r.readyState && e(r.status, r.responseText)
                        }, r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), r.send(Zt.stringify(this.data))
                    }
                };
                var tr = function Revenue() {
                    this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
                };
                tr.prototype.setProductId = function setProductId(e) {
                    return "string" !== q(e) ? Q.error("Unsupported type for productId: " + q(e) + ", expecting string") : X(e) ? Q.error("Invalid empty productId") : this._productId = e, this
                }, tr.prototype.setQuantity = function setQuantity(e) {
                    return "number" !== q(e) ? Q.error("Unsupported type for quantity: " + q(e) + ", expecting number") : this._quantity = parseInt(e), this
                }, tr.prototype.setPrice = function setPrice(e) {
                    return "number" !== q(e) ? Q.error("Unsupported type for price: " + q(e) + ", expecting number") : this._price = e, this
                }, tr.prototype.setRevenueType = function setRevenueType(e) {
                    return "string" !== q(e) ? Q.error("Unsupported type for revenueType: " + q(e) + ", expecting string") : this._revenueType = e, this
                }, tr.prototype.setEventProperties = function setEventProperties(e) {
                    return "object" !== q(e) ? Q.error("Unsupported type for eventProperties: " + q(e) + ", expecting object") : this._properties = ne(e), this
                }, tr.prototype._isValidRevenue = function _isValidRevenue() {
                    return "number" === q(this._price) || (Q.error("Invalid revenue, need to set price field"), !1)
                }, tr.prototype._toJSONObject = function _toJSONObject() {
                    var e = "object" === q(this._properties) ? this._properties : {};
                    return null !== this._productId && (e[w] = this._productId), null !== this._quantity && (e[_] = this._quantity), null !== this._price && (e[b] = this._price), null !== this._revenueType && (e[I] = this._revenueType), e
                };
                var rr = createCommonjsModule(function(t, r) {
                        ! function(e, n) {
                            var i = "model",
                                o = "name",
                                s = "type",
                                a = "vendor",
                                u = "version",
                                c = "mobile",
                                f = "tablet",
                                l = {
                                    extend: function(e, t) {
                                        var r = {};
                                        for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                                        return r
                                    },
                                    has: function(e, t) {
                                        return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                                    },
                                    lowerize: function(e) {
                                        return e.toLowerCase()
                                    },
                                    major: function(e) {
                                        return "string" == typeof e ? e.split(".")[0] : void 0
                                    }
                                },
                                p = {
                                    rgx: function() {
                                        for (var e, t, r, n, i, o, s, a = 0, u = arguments; a < u.length && !o;) {
                                            var c = u[a],
                                                f = u[a + 1];
                                            if (void 0 === e)
                                                for (n in e = {}, f) f.hasOwnProperty(n) && ("object" == typeof(i = f[n]) ? e[i[0]] = void 0 : e[i] = void 0);
                                            for (t = r = 0; t < c.length && !o;)
                                                if (o = c[t++].exec(this.getUA()))
                                                    for (n = 0; n < f.length; n++) s = o[++r], "object" == typeof(i = f[n]) && i.length > 0 ? 2 == i.length ? "function" == typeof i[1] ? e[i[0]] = i[1].call(this, s) : e[i[0]] = i[1] : 3 == i.length ? "function" != typeof i[1] || i[1].exec && i[1].test ? e[i[0]] = s ? s.replace(i[1], i[2]) : void 0 : e[i[0]] = s ? i[1].call(this, s, i[2]) : void 0 : 4 == i.length && (e[i[0]] = s ? i[3].call(this, s.replace(i[1], i[2])) : void 0) : e[i] = s || void 0;
                                            a += 2
                                        }
                                        return e
                                    },
                                    str: function(e, t) {
                                        for (var r in t)
                                            if ("object" == typeof t[r] && t[r].length > 0) {
                                                for (var n = 0; n < t[r].length; n++)
                                                    if (l.has(t[r][n], e)) return "?" === r ? void 0 : r
                                            } else if (l.has(t[r], e)) return "?" === r ? void 0 : r;
                                        return e
                                    }
                                },
                                h = {
                                    browser: {
                                        oldsafari: {
                                            version: {
                                                "1.0": "/8",
                                                1.2: "/1",
                                                1.3: "/3",
                                                "2.0": "/412",
                                                "2.0.2": "/416",
                                                "2.0.3": "/417",
                                                "2.0.4": "/419",
                                                "?": "/"
                                            }
                                        },
                                        name: {
                                            "Opera Mobile": "Opera Mobi",
                                            "IE Mobile": "IEMobile"
                                        }
                                    },
                                    device: {
                                        amazon: {
                                            model: {
                                                "Fire Phone": ["SD", "KF"]
                                            }
                                        },
                                        sprint: {
                                            model: {
                                                "Evo Shift 4G": "7373KT"
                                            },
                                            vendor: {
                                                HTC: "APA",
                                                Sprint: "Sprint"
                                            }
                                        }
                                    },
                                    os: {
                                        windows: {
                                            version: {
                                                ME: "4.90",
                                                "NT 3.11": "NT3.51",
                                                "NT 4.0": "NT4.0",
                                                2000: "NT 5.0",
                                                XP: ["NT 5.1", "NT 5.2"],
                                                Vista: "NT 6.0",
                                                7: "NT 6.1",
                                                8: "NT 6.2",
                                                8.1: "NT 6.3",
                                                10: ["NT 6.4", "NT 10.0"],
                                                RT: "ARM"
                                            },
                                            name: {
                                                "Windows Phone": "Windows Phone OS"
                                            }
                                        }
                                    }
                                },
                                d = {
                                    browser: [
                                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                                        [o, u],
                                        [/(OPiOS)[\/\s]+([\w\.]+)/i],
                                        [
                                            [o, "Opera Mini"], u
                                        ],
                                        [/\s(opr)\/([\w\.]+)/i],
                                        [
                                            [o, "Opera"], u
                                        ],
                                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                                        [o, u],
                                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                                        [
                                            [o, "IE"], u
                                        ],
                                        [/(edge)\/((\d+)?[\w\.]+)/i],
                                        [o, u],
                                        [/(yabrowser)\/([\w\.]+)/i],
                                        [
                                            [o, "Yandex"], u
                                        ],
                                        [/(comodo_dragon)\/([\w\.]+)/i],
                                        [
                                            [o, /_/g, " "], u
                                        ],
                                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i, /android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i],
                                        [
                                            [o, "Chrome Mobile"], u
                                        ],
                                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                                        [o, u],
                                        [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i],
                                        [
                                            [o, "UCBrowser"], u
                                        ],
                                        [/(dolfin)\/([\w\.]+)/i],
                                        [
                                            [o, "Dolphin"], u
                                        ],
                                        [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                                        [u, [o, "MIUI Browser"]],
                                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                                        [u, [o, "Android Browser"]],
                                        [/FBAV\/([\w\.]+);/i],
                                        [u, [o, "Facebook"]],
                                        [/fxios\/([\w\.-]+)/i],
                                        [u, [o, "Firefox"]],
                                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                                        [u, [o, "Mobile Safari"]],
                                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                                        [u, o],
                                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                        [o, [u, p.str, h.browser.oldsafari.version]],
                                        [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                                        [o, u],
                                        [/(blackberry)\\s?\/([\w\.]+)/i],
                                        [
                                            [o, "BlackBerry"], u
                                        ],
                                        [/(navigator|netscape)\/([\w\.-]+)/i],
                                        [
                                            [o, "Netscape"], u
                                        ],
                                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                                        [o, u]
                                    ],
                                    cpu: [
                                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                                        [
                                            ["architecture", "amd64"]
                                        ],
                                        [/(ia32(?=;))/i],
                                        [
                                            ["architecture", l.lowerize]
                                        ],
                                        [/((?:i[346]|x)86)[;\)]/i],
                                        [
                                            ["architecture", "ia32"]
                                        ],
                                        [/windows\s(ce|mobile);\sppc;/i],
                                        [
                                            ["architecture", "arm"]
                                        ],
                                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                                        [
                                            ["architecture", /ower/, "", l.lowerize]
                                        ],
                                        [/(sun4\w)[;\)]/i],
                                        [
                                            ["architecture", "sparc"]
                                        ],
                                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                                        [
                                            ["architecture", l.lowerize]
                                        ]
                                    ],
                                    device: [
                                        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                                        [i, a, [s, f]],
                                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                                        [i, [a, "Apple"],
                                            [s, f]
                                        ],
                                        [/(apple\s{0,1}tv)/i],
                                        [
                                            [i, "Apple TV"],
                                            [a, "Apple"]
                                        ],
                                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                                        [a, i, [s, f]],
                                        [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                                        [i, [a, "Amazon"],
                                            [s, f]
                                        ],
                                        [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                                        [
                                            [i, p.str, h.device.amazon.model],
                                            [a, "Amazon"],
                                            [s, c]
                                        ],
                                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                                        [i, a, [s, c]],
                                        [/\((ip[honed|\s\w*]+);/i],
                                        [i, [a, "Apple"],
                                            [s, c]
                                        ],
                                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                                        [a, i, [s, c]],
                                        [/\(bb10;\s(\w+)/i],
                                        [i, [a, "BlackBerry"],
                                            [s, c]
                                        ],
                                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
                                        [i, [a, "Asus"],
                                            [s, f]
                                        ],
                                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                                        [
                                            [a, "Sony"],
                                            [i, "Xperia Tablet"],
                                            [s, f]
                                        ],
                                        [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                                        [
                                            [a, "Sony"],
                                            [i, "Xperia Phone"],
                                            [s, c]
                                        ],
                                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                                        [a, i, [s, "console"]],
                                        [/android.+;\s(shield)\sbuild/i],
                                        [i, [a, "Nvidia"],
                                            [s, "console"]
                                        ],
                                        [/(playstation\s[34portablevi]+)/i],
                                        [i, [a, "Sony"],
                                            [s, "console"]
                                        ],
                                        [/(sprint\s(\w+))/i],
                                        [
                                            [a, p.str, h.device.sprint.vendor],
                                            [i, p.str, h.device.sprint.model],
                                            [s, c]
                                        ],
                                        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                                        [a, i, [s, f]],
                                        [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                                        [a, [i, /_/g, " "],
                                            [s, c]
                                        ],
                                        [/(nexus\s9)/i],
                                        [i, [a, "HTC"],
                                            [s, f]
                                        ],
                                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                                        [i, [a, "Microsoft"],
                                            [s, "console"]
                                        ],
                                        [/(kin\.[onetw]{3})/i],
                                        [
                                            [i, /\./g, " "],
                                            [a, "Microsoft"],
                                            [s, c]
                                        ],
                                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i],
                                        [i, [a, "Motorola"],
                                            [s, c]
                                        ],
                                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                                        [i, [a, "Motorola"],
                                            [s, f]
                                        ],
                                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                                        [
                                            [a, "Samsung"], i, [s, f]
                                        ],
                                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                                        [
                                            [a, "Samsung"], i, [s, c]
                                        ],
                                        [/(samsung);smarttv/i],
                                        [a, i, [s, "smarttv"]],
                                        [/\(dtv[\);].+(aquos)/i],
                                        [i, [a, "Sharp"],
                                            [s, "smarttv"]
                                        ],
                                        [/sie-(\w+)*/i],
                                        [i, [a, "Siemens"],
                                            [s, c]
                                        ],
                                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                                        [
                                            [a, "Nokia"], i, [s, c]
                                        ],
                                        [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                                        [i, [a, "Acer"],
                                            [s, f]
                                        ],
                                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                                        [
                                            [a, "LG"], i, [s, f]
                                        ],
                                        [/(lg) netcast\.tv/i],
                                        [a, i, [s, "smarttv"]],
                                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                                        [i, [a, "LG"],
                                            [s, c]
                                        ],
                                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                                        [i, [a, "Lenovo"],
                                            [s, f]
                                        ],
                                        [/linux;.+((jolla));/i],
                                        [a, i, [s, c]],
                                        [/((pebble))app\/[\d\.]+\s/i],
                                        [a, i, [s, "wearable"]],
                                        [/android.+;\s(glass)\s\d/i],
                                        [i, [a, "Google"],
                                            [s, "wearable"]
                                        ],
                                        [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
                                        [
                                            [i, /_/g, " "],
                                            [a, "Xiaomi"],
                                            [s, c]
                                        ],
                                        [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i],
                                        [
                                            [s, l.lowerize], a, i
                                        ]
                                    ],
                                    engine: [
                                        [/windows.+\sedge\/([\w\.]+)/i],
                                        [u, [o, "EdgeHTML"]],
                                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                                        [o, u],
                                        [/rv\:([\w\.]+).*(gecko)/i],
                                        [u, o]
                                    ],
                                    os: [
                                        [/microsoft\s(windows)\s(vista|xp)/i],
                                        [o, u],
                                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                                        [
                                            [o, p.str, h.os.windows.name],
                                            [u, p.str, h.os.windows.version]
                                        ],
                                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                        [
                                            [o, "Windows"],
                                            [u, p.str, h.os.windows.version]
                                        ],
                                        [/\((bb)(10);/i],
                                        [
                                            [o, "BlackBerry"], u
                                        ],
                                        [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                                        [o, u],
                                        [/(symbian\s?o?s?|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                                        [
                                            [o, "Symbian"], u
                                        ],
                                        [/\((series40);/i],
                                        [o],
                                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                        [
                                            [o, "Firefox OS"], u
                                        ],
                                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                                        [
                                            [o, "Linux"], u
                                        ],
                                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                        [
                                            [o, "Chromium OS"], u
                                        ],
                                        [/(sunos)\s?([\w\.]+\d)*/i],
                                        [
                                            [o, "Solaris"], u
                                        ],
                                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                                        [
                                            [o, "Linux"], u
                                        ],
                                        [/(iphone)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                                        [
                                            [o, "iPhone"],
                                            [u, /_/g, "."]
                                        ],
                                        [/(ipad)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                                        [
                                            [o, "iPad"],
                                            [u, /_/g, "."]
                                        ],
                                        [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                                        [
                                            [o, "iOS"],
                                            [u, /_/g, "."]
                                        ],
                                        [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                                        [
                                            [o, "Mac"],
                                            [u, /_/g, "."]
                                        ],
                                        [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                                        [o, u]
                                    ]
                                },
                                g = function(t, r) {
                                    if (!(this instanceof g)) return new g(t, r).getResult();
                                    var n = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ""),
                                        i = r ? l.extend(d, r) : d;
                                    return this.getBrowser = function() {
                                        var e = p.rgx.apply(this, i.browser);
                                        return e.major = l.major(e.version), e
                                    }, this.getCPU = function() {
                                        return p.rgx.apply(this, i.cpu)
                                    }, this.getDevice = function() {
                                        return p.rgx.apply(this, i.device)
                                    }, this.getEngine = function() {
                                        return p.rgx.apply(this, i.engine)
                                    }, this.getOS = function() {
                                        return p.rgx.apply(this, i.os)
                                    }, this.getResult = function() {
                                        return {
                                            ua: this.getUA(),
                                            browser: this.getBrowser(),
                                            engine: this.getEngine(),
                                            os: this.getOS(),
                                            device: this.getDevice(),
                                            cpu: this.getCPU()
                                        }
                                    }, this.getUA = function() {
                                        return n
                                    }, this.setUA = function(e) {
                                        return n = e, this
                                    }, this
                                };
                            g.VERSION = "0.7.10", g.BROWSER = {
                                NAME: o,
                                MAJOR: "major",
                                VERSION: u
                            }, g.CPU = {
                                ARCHITECTURE: "architecture"
                            }, g.DEVICE = {
                                MODEL: i,
                                VENDOR: a,
                                TYPE: s,
                                CONSOLE: "console",
                                MOBILE: c,
                                SMARTTV: "smarttv",
                                TABLET: f,
                                WEARABLE: "wearable",
                                EMBEDDED: "embedded"
                            }, g.ENGINE = {
                                NAME: o,
                                VERSION: u
                            }, g.OS = {
                                NAME: o,
                                VERSION: u
                            }, t.exports && (r = t.exports = g), r.UAParser = g;
                            var y = e.jQuery || e.Zepto;
                            if (void 0 !== y) {
                                var m = new g;
                                y.ua = m.getResult(), y.ua.get = function() {
                                    return m.getUA()
                                }, y.ua.set = function(e) {
                                    m.setUA(e);
                                    var t = m.getResult();
                                    for (var r in t) y.ua[r] = t[r]
                                }
                            }
                        }("object" == typeof window ? window : e)
                    }),
                    nr = function uuid(e) {
                        return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
                    },
                    ir = {
                        apiEndpoint: "",
                        cookieExpiration: 3650,
                        cookieName: "amplitude_id",
                        domain: "",
                        includeReferrer: !1,
                        includeUtm: !1,
                        language: {
                            language: function getLanguage() {
                                return navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || void 0
                            }()
                        }.language,
                        logLevel: "WARN",
                        optOut: !1,
                        platform: "Web",
                        savedMaxCount: 1e3,
                        saveEvents: !0,
                        sessionTimeout: 18e5,
                        unsentKey: "amplitude_unsent",
                        unsentIdentifyKey: "amplitude_unsent_identify",
                        uploadBatchSize: 100,
                        batchEvents: !1,
                        eventUploadThreshold: 30,
                        eventUploadPeriodMillis: 3e4,
                        forceHttps: !0,
                        includeGclid: !1,
                        saveParamsReferrerOncePerSession: !0,
                        deviceIdFromUrlParam: !1
                    },
                    or = function AmplitudeClient(e) {
                        this._instanceName = X(e) ? i : e.toLowerCase(), this._legacyStorageSuffix = this._instanceName === i ? "" : "_" + this._instanceName, this._unsentEvents = [], this._unsentIdentifys = [], this._ua = new rr(navigator.userAgent).getResult(), this.options = Ht({}, ir), this.cookieStorage = (new de).getStorage(), this._q = [], this._sending = !1, this._updateScheduled = !1, this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._userAgent = navigator && navigator.userAgent || null
                    };
                or.prototype.Identify = ge, or.prototype.Revenue = tr, or.prototype.init = function init(e, t, r, n) {
                    if ("string" !== q(e) || X(e)) Q.error("Invalid apiKey. Please re-initialize with a valid apiKey");
                    else try {
                        if (this.options.apiKey = e, this._storageSuffix = "_" + e + this._legacyStorageSuffix, sr(this.options, r), this.cookieStorage.options({
                                expirationDays: this.options.cookieExpiration,
                                domain: this.options.domain
                            }), this.options.domain = this.cookieStorage.options().domain, this._instanceName === i && ar(this), ur(this), this.options.deviceId = "object" === q(r) && "string" === q(r.deviceId) && !X(r.deviceId) && r.deviceId || this.options.deviceIdFromUrlParam && this._getDeviceIdFromUrlParam(this._getUrlParams()) || this.options.deviceId || nr() + "R", this.options.userId = "string" === q(t) && !X(t) && t || "number" === q(t) && t.toString() || this.options.userId || null, this.options.saveEvents) {
                            this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey);
                            for (var o = 0; o < this._unsentEvents.length; o++) {
                                var s = this._unsentEvents[o].event_properties,
                                    a = this._unsentEvents[o].groups;
                                this._unsentEvents[o].event_properties = ne(s), this._unsentEvents[o].groups = te(a)
                            }
                            for (var u = 0; u < this._unsentIdentifys.length; u++) {
                                var c = this._unsentIdentifys[u].user_properties,
                                    f = this._unsentIdentifys[u].groups;
                                this._unsentIdentifys[u].user_properties = ne(c), this._unsentIdentifys[u].groups = te(f)
                            }
                        }
                        var l = (new Date).getTime();
                        (!this._sessionId || !this._lastEventTime || l - this._lastEventTime > this.options.sessionTimeout) && (this._newSession = !0, this._sessionId = l, this.options.saveParamsReferrerOncePerSession && this._trackParamsAndReferrer()), this.options.saveParamsReferrerOncePerSession || this._trackParamsAndReferrer(), this._lastEventTime = l, fr(this), this._sendEventsIfReady()
                    } catch (e) {
                        Q.error(e)
                    } finally {
                        "function" === q(n) && n(this)
                    }
                }, or.prototype._trackParamsAndReferrer = function _trackParamsAndReferrer() {
                    this.options.includeUtm && this._initUtmData(), this.options.includeReferrer && this._saveReferrer(this._getReferrer()), this.options.includeGclid && this._saveGclid(this._getUrlParams())
                };
                var sr = function _parseConfig(e, t) {
                    if ("object" === q(t)) {
                        var r = function parseValidateAndLoad(r) {
                            if (ir.hasOwnProperty(r)) {
                                var n = t[r],
                                    i = q(ir[r]);
                                re(n, r + " option", i) && ("boolean" === i ? e[r] = !!n : ("string" === i && !X(n) || "number" === i && n > 0) && (e[r] = n))
                            }
                        };
                        for (var n in t) t.hasOwnProperty(n) && r(n)
                    }
                };
                or.prototype.runQueuedFunctions = function() {
                    for (var e = 0; e < this._q.length; e++) {
                        var t = this[this._q[e][0]];
                        "function" === q(t) && t.apply(this, this._q[e].slice(1))
                    }
                    this._q = []
                }, or.prototype._apiKeySet = function _apiKeySet(e) {
                    return !X(this.options.apiKey) || (Q.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e), !1)
                }, or.prototype._loadSavedUnsentEvents = function _loadSavedUnsentEvents(e) {
                    var t = this._getFromStorage(he, e),
                        r = this._parseSavedUnsentEventsString(t, e),
                        n = this._getFromStorageLegacy(he, e),
                        i = this._parseSavedUnsentEventsString(n, e).concat(r);
                    return this._removeFromLegacyStorage(he, e), this._setInStorage(he, e, JSON.stringify(i)), i
                }, or.prototype._removeFromLegacyStorage = function _removeFromLegacyStorage(e, t) {
                    e.removeItem(t + this._legacyStorageSuffix)
                }, or.prototype._parseSavedUnsentEventsString = function _parseSavedUnsentEventsString(e, t) {
                    if (X(e)) return [];
                    if ("string" === q(e)) try {
                        var r = JSON.parse(e);
                        if ("array" === q(r)) return r
                    } catch (e) {}
                    return Q.error("Unable to load " + t + " events. Restart with a new empty queue."), []
                }, or.prototype.isNewSession = function isNewSession() {
                    return this._newSession
                }, or.prototype.getSessionId = function getSessionId() {
                    return this._sessionId
                }, or.prototype.nextEventId = function nextEventId() {
                    return this._eventId++, this._eventId
                }, or.prototype.nextIdentifyId = function nextIdentifyId() {
                    return this._identifyId++, this._identifyId
                }, or.prototype.nextSequenceNumber = function nextSequenceNumber() {
                    return this._sequenceNumber++, this._sequenceNumber
                }, or.prototype._unsentCount = function _unsentCount() {
                    return this._unsentEvents.length + this._unsentIdentifys.length
                }, or.prototype._sendEventsIfReady = function _sendEventsIfReady(e) {
                    return 0 !== this._unsentCount() && (this.options.batchEvents ? this._unsentCount() >= this.options.eventUploadThreshold ? (this.sendEvents(e), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout(function() {
                        this._updateScheduled = !1, this.sendEvents()
                    }.bind(this), this.options.eventUploadPeriodMillis)), !1) : (this.sendEvents(e), !0))
                }, or.prototype._getFromStorage = function _getFromStorage(e, t) {
                    return e.getItem(t + this._storageSuffix)
                }, or.prototype._getFromStorageLegacy = function _getFromStorageLegacy(e, t) {
                    return e.getItem(t + this._legacyStorageSuffix)
                }, or.prototype._setInStorage = function _setInStorage(e, t, r) {
                    e.setItem(t + this._storageSuffix, r)
                };
                var ar = function _upgradeCookeData(e) {
                        var t = e.cookieStorage.get(e.options.cookieName + e._storageSuffix);
                        if ("object" !== q(t) && (t = e.cookieStorage.get(e.options.cookieName + e._legacyStorageSuffix), !("object" === q(t) && t.deviceId && t.sessionId && t.lastEventTime))) {
                            var r = function _getAndRemoveFromLocalStorage(e) {
                                    var t = he.getItem(e);
                                    return he.removeItem(e), t
                                },
                                n = "string" === q(e.options.apiKey) && "_" + e.options.apiKey.slice(0, 6) || "",
                                i = r(d + n),
                                o = r(y + n),
                                s = r(g + n);
                            null != s && (s = "true" === String(s));
                            var a = parseInt(r(h)),
                                u = parseInt(r(f)),
                                m = parseInt(r(c)),
                                v = parseInt(r(l)),
                                w = parseInt(r(p)),
                                _ = function _getFromCookie(e) {
                                    return "object" === q(t) && t[e]
                                };
                            e.options.deviceId = _("deviceId") || i, e.options.userId = _("userId") || o, e._sessionId = _("sessionId") || a || e._sessionId, e._lastEventTime = _("lastEventTime") || u || e._lastEventTime, e._eventId = _("eventId") || m || e._eventId, e._identifyId = _("identifyId") || v || e._identifyId, e._sequenceNumber = _("sequenceNumber") || w || e._sequenceNumber, e.options.optOut = s || !1, t && void 0 !== t.optOut && null !== t.optOut && (e.options.optOut = "true" === String(t.optOut)), fr(e)
                        }
                    },
                    ur = function _loadCookieData(e) {
                        var t = e.cookieStorage.get(e.options.cookieName + e._storageSuffix);
                        if ("object" === q(t)) cr(e, t);
                        else {
                            var r = e.cookieStorage.get(e.options.cookieName + e._legacyStorageSuffix);
                            "object" === q(r) && (e.cookieStorage.remove(e.options.cookieName + e._legacyStorageSuffix), cr(e, r))
                        }
                    },
                    cr = function _loadCookieDataProps(e, t) {
                        t.deviceId && (e.options.deviceId = t.deviceId), t.userId && (e.options.userId = t.userId), null !== t.optOut && void 0 !== t.optOut && (e.options.optOut = t.optOut), t.sessionId && (e._sessionId = parseInt(t.sessionId)), t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime)), t.eventId && (e._eventId = parseInt(t.eventId)), t.identifyId && (e._identifyId = parseInt(t.identifyId)), t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber))
                    },
                    fr = function _saveCookieData(e) {
                        e.cookieStorage.set(e.options.cookieName + e._storageSuffix, {
                            deviceId: e.options.deviceId,
                            userId: e.options.userId,
                            optOut: e.options.optOut,
                            sessionId: e._sessionId,
                            lastEventTime: e._lastEventTime,
                            eventId: e._eventId,
                            identifyId: e._identifyId,
                            sequenceNumber: e._sequenceNumber
                        })
                    };
                or.prototype._initUtmData = function _initUtmData(e, t) {
                    e = e || this._getUrlParams();
                    var r = function getUtmData(e, t) {
                        var r = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
                            n = function fetchParam(e, t, r, n) {
                                return Z(e, t) || Z(r, n)
                            },
                            i = n("utm_source", t, "utmcsr", r),
                            o = n("utm_medium", t, "utmcmd", r),
                            s = n("utm_campaign", t, "utmccn", r),
                            a = n("utm_term", t, "utmctr", r),
                            u = n("utm_content", t, "utmcct", r),
                            c = {},
                            f = function addIfNotNull(e, t) {
                                X(t) || (c[e] = t)
                            };
                        return f("utm_source", i), f("utm_medium", o), f("utm_campaign", s), f("utm_term", a), f("utm_content", u), c
                    }(t = t || this.cookieStorage.get("__utmz"), e);
                    lr(this, r)
                };
                var lr = function _sendParamsReferrerUserProperties(e, t) {
                    if ("object" === q(t) && 0 !== Object.keys(t).length) {
                        var r = new ge;
                        for (var n in t) t.hasOwnProperty(n) && (r.setOnce("initial_" + n, t[n]), r.set(n, t[n]));
                        e.identify(r)
                    }
                };
                or.prototype._getReferrer = function _getReferrer() {
                    return document.referrer
                }, or.prototype._getUrlParams = function _getUrlParams() {
                    return location.search
                }, or.prototype._saveGclid = function _saveGclid(e) {
                    var t = Z("gclid", e);
                    X(t) || lr(this, {
                        gclid: t
                    })
                }, or.prototype._getDeviceIdFromUrlParam = function _getDeviceIdFromUrlParam(e) {
                    return Z(E, e)
                }, or.prototype._getReferringDomain = function _getReferringDomain(e) {
                    if (X(e)) return null;
                    var t = e.split("/");
                    return t.length >= 3 ? t[2] : null
                }, or.prototype._saveReferrer = function _saveReferrer(e) {
                    if (!X(e)) {
                        var t = {
                            referrer: e,
                            referring_domain: this._getReferringDomain(e)
                        };
                        lr(this, t)
                    }
                }, or.prototype.saveEvents = function saveEvents() {
                    try {
                        this._setInStorage(he, this.options.unsentKey, JSON.stringify(this._unsentEvents))
                    } catch (e) {}
                    try {
                        this._setInStorage(he, this.options.unsentIdentifyKey, JSON.stringify(this._unsentIdentifys))
                    } catch (e) {}
                }, or.prototype.setDomain = function setDomain(e) {
                    if (re(e, "domain", "string")) try {
                        this.cookieStorage.options({
                            domain: e
                        }), this.options.domain = this.cookieStorage.options().domain, ur(this), fr(this)
                    } catch (e) {
                        Q.error(e)
                    }
                }, or.prototype.setUserId = function setUserId(e) {
                    try {
                        this.options.userId = null != e && "" + e || null, fr(this)
                    } catch (e) {
                        Q.error(e)
                    }
                }, or.prototype.setGroup = function(e, t) {
                    if (this._apiKeySet("setGroup()") && re(e, "groupType", "string") && !X(e)) {
                        var r = {};
                        r[e] = t;
                        var n = (new ge).set(e, t);
                        this._logEvent(u, null, null, n.userPropertiesOperations, r, null, null)
                    }
                }, or.prototype.setOptOut = function setOptOut(e) {
                    if (re(e, "enable", "boolean")) try {
                        this.options.optOut = e, fr(this)
                    } catch (e) {
                        Q.error(e)
                    }
                }, or.prototype.setSessionId = function setSessionId(e) {
                    if (re(e, "sessionId", "number")) try {
                        this._sessionId = e, fr(this)
                    } catch (e) {
                        Q.error(e)
                    }
                }, or.prototype.resetSessionId = function resetSessionId() {
                    this.setSessionId((new Date).getTime())
                }, or.prototype.regenerateDeviceId = function regenerateDeviceId() {
                    this.setDeviceId(nr() + "R")
                }, or.prototype.setDeviceId = function setDeviceId(e) {
                    if (re(e, "deviceId", "string")) try {
                        X(e) || (this.options.deviceId = "" + e, fr(this))
                    } catch (e) {
                        Q.error(e)
                    }
                }, or.prototype.setUserProperties = function setUserProperties(e) {
                    if (this._apiKeySet("setUserProperties()") && re(e, "userProperties", "object")) {
                        var t = ee(ne(e));
                        if (0 !== Object.keys(t).length) {
                            var r = new ge;
                            for (var n in t) t.hasOwnProperty(n) && r.set(n, t[n]);
                            this.identify(r)
                        }
                    }
                }, or.prototype.clearUserProperties = function clearUserProperties() {
                    if (this._apiKeySet("clearUserProperties()")) {
                        var e = new ge;
                        e.clearAll(), this.identify(e)
                    }
                };
                var pr = function _convertProxyObjectToRealObject(e, t) {
                    for (var r = 0; r < t._q.length; r++) {
                        var n = e[t._q[r][0]];
                        "function" === q(n) && n.apply(e, t._q[r].slice(1))
                    }
                    return e
                };
                or.prototype.identify = function(e, t) {
                    if (this._apiKeySet("identify()")) {
                        if ("object" === q(e) && e.hasOwnProperty("_q") && (e = pr(new ge, e)), e instanceof ge) {
                            if (Object.keys(e.userPropertiesOperations).length > 0) return this._logEvent(u, null, null, e.userPropertiesOperations, null, null, t)
                        } else Q.error("Invalid identify input type. Expected Identify object but saw " + q(e));
                        "function" === q(t) && t(0, "No request sent")
                    } else "function" === q(t) && t(0, "No request sent")
                }, or.prototype.setVersionName = function setVersionName(e) {
                    re(e, "versionName", "string") && (this.options.versionName = e)
                }, or.prototype._logEvent = function _logEvent(e, t, r, n, i, o, s) {
                    if (ur(this), e && !this.options.optOut) try {
                        var a;
                        a = e === u ? this.nextIdentifyId() : this.nextEventId();
                        var c = this.nextSequenceNumber(),
                            f = "number" === q(o) ? o : (new Date).getTime();
                        (!this._sessionId || !this._lastEventTime || f - this._lastEventTime > this.options.sessionTimeout) && (this._sessionId = f), this._lastEventTime = f, fr(this), n = n || {}, r = r || {}, t = t || {}, i = i || {};
                        var l = {
                            device_id: this.options.deviceId,
                            user_id: this.options.userId,
                            timestamp: f,
                            event_id: a,
                            session_id: this._sessionId || -1,
                            event_type: e,
                            version_name: this.options.versionName || null,
                            platform: this.options.platform,
                            os_name: this._ua.browser.name || null,
                            os_version: this._ua.browser.major || null,
                            device_model: this._ua.os.name || null,
                            language: this.options.language,
                            api_properties: r,
                            event_properties: ee(ne(t)),
                            user_properties: ee(ne(n)),
                            uuid: nr(),
                            library: {
                                name: "amplitude-js",
                                version: "4.2.1"
                            },
                            sequence_number: c,
                            groups: ee(te(i)),
                            user_agent: this._userAgent
                        };
                        return e === u ? (this._unsentIdentifys.push(l), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push(l), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(s) || "function" !== q(s) || s(0, "No request sent"), a
                    } catch (e) {
                        Q.error(e)
                    } else "function" === q(s) && s(0, "No request sent")
                }, or.prototype._limitEventsQueued = function _limitEventsQueued(e) {
                    e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount)
                }, or.prototype.logEvent = function logEvent(e, t, r) {
                    return this.logEventWithTimestamp(e, t, null, r)
                }, or.prototype.logEventWithTimestamp = function logEvent(e, t, r, n) {
                    return this._apiKeySet("logEvent()") && re(e, "eventType", "string") && !X(e) ? this._logEvent(e, t, null, null, null, r, n) : ("function" === q(n) && n(0, "No request sent"), -1)
                }, or.prototype.logEventWithGroups = function(e, t, r, n) {
                    return this._apiKeySet("logEventWithGroup()") && re(e, "eventType", "string") ? this._logEvent(e, t, null, null, r, null, n) : ("function" === q(n) && n(0, "No request sent"), -1)
                };
                var hr = function _isNumber(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                };
                or.prototype.logRevenueV2 = function logRevenueV2(e) {
                    if (this._apiKeySet("logRevenueV2()"))
                        if ("object" === q(e) && e.hasOwnProperty("_q") && (e = pr(new tr, e)), e instanceof tr) {
                            if (e && e._isValidRevenue()) return this.logEvent(v, e._toJSONObject())
                        } else Q.error("Invalid revenue input type. Expected Revenue object but saw " + q(e))
                }, or.prototype.logRevenue = function logRevenue(e, t, r) {
                    return this._apiKeySet("logRevenue()") && hr(e) && (void 0 === t || hr(t)) ? this._logEvent(v, {}, {
                        productId: r,
                        special: "revenue_amount",
                        quantity: t || 1,
                        price: e
                    }, null, null, null, null) : -1
                }, or.prototype.removeEvents = function removeEvents(e, t) {
                    dr(this, "_unsentEvents", e), dr(this, "_unsentIdentifys", t)
                };
                var dr = function _removeEvents(e, t, r) {
                    if (!(r < 0)) {
                        for (var n = [], i = 0; i < e[t].length; i++) e[t][i].event_id > r && n.push(e[t][i]);
                        e[t] = n
                    }
                };
                or.prototype.sendEvents = function sendEvents(e) {
                    if (!this._apiKeySet("sendEvents()") || this._sending || this.options.optOut || 0 === this._unsentCount()) "function" === q(e) && e(0, "No request sent");
                    else {
                        this._sending = !0;
                        var t = (this.options.forceHttps ? "https" : "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint + "/",
                            r = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                            n = this._mergeEventsAndIdentifys(r),
                            i = n.maxEventId,
                            s = n.maxIdentifyId,
                            a = JSON.stringify(n.eventsToSend),
                            u = (new Date).getTime(),
                            c = {
                                client: this.options.apiKey,
                                e: a,
                                v: o,
                                upload_time: u,
                                checksum: me(o + this.options.apiKey + a + u)
                            },
                            f = this;
                        new er(t, c).send(function(t, n) {
                            f._sending = !1;
                            try {
                                200 === t && "success" === n ? (f.removeEvents(i, s), f.options.saveEvents && f.saveEvents(), f._sendEventsIfReady(e) || "function" !== q(e) || e(t, n)) : 413 === t ? (1 === f.options.uploadBatchSize && f.removeEvents(i, s), f.options.uploadBatchSize = Math.ceil(r / 2), f.sendEvents(e)) : "function" === q(e) && e(t, n)
                            } catch (e) {}
                        })
                    }
                }, or.prototype._mergeEventsAndIdentifys = function _mergeEventsAndIdentifys(e) {
                    for (var t = [], r = 0, n = -1, i = 0, o = -1; t.length < e;) {
                        var s, a = i >= this._unsentIdentifys.length,
                            u = r >= this._unsentEvents.length;
                        if (u && a) {
                            Q.error("Merging Events and Identifys, less events and identifys than expected");
                            break
                        }
                        a ? n = (s = this._unsentEvents[r++]).event_id : u ? o = (s = this._unsentIdentifys[i++]).event_id : !("sequence_number" in this._unsentEvents[r]) || this._unsentEvents[r].sequence_number < this._unsentIdentifys[i].sequence_number ? n = (s = this._unsentEvents[r++]).event_id : o = (s = this._unsentIdentifys[i++]).event_id, t.push(s)
                    }
                    return {
                        eventsToSend: t,
                        maxEventId: n,
                        maxIdentifyId: o
                    }
                }, or.prototype.setGlobalUserProperties = function setGlobalUserProperties(e) {
                    this.setUserProperties(e)
                }, or.prototype.__VERSION__ = "4.2.1";
                var gr = function Amplitude() {
                    this.options = Ht({}, ir), this._q = [], this._instances = {}
                };
                gr.prototype.Identify = ge, gr.prototype.Revenue = tr, gr.prototype.getInstance = function getInstance(e) {
                    e = X(e) ? i : e.toLowerCase();
                    var t = this._instances[e];
                    return void 0 === t && (t = new or(e), this._instances[e] = t), t
                }, gr.prototype.init = function init(e, t, r, n) {
                    this.getInstance().init(e, t, r, function(e) {
                        this.options = e.options, "function" === q(n) && n(e)
                    }.bind(this))
                }, gr.prototype.runQueuedFunctions = function() {
                    for (var e = 0; e < this._q.length; e++) {
                        var t = this[this._q[e][0]];
                        "function" === q(t) && t.apply(this, this._q[e].slice(1))
                    }
                    for (var r in this._q = [], this._instances) this._instances.hasOwnProperty(r) && this._instances[r].runQueuedFunctions()
                }, gr.prototype.isNewSession = function isNewSession() {
                    return this.getInstance().isNewSession()
                }, gr.prototype.getSessionId = function getSessionId() {
                    return this.getInstance().getSessionId()
                }, gr.prototype.nextEventId = function nextEventId() {
                    return this.getInstance().nextEventId()
                }, gr.prototype.nextIdentifyId = function nextIdentifyId() {
                    return this.getInstance().nextIdentifyId()
                }, gr.prototype.nextSequenceNumber = function nextSequenceNumber() {
                    return this.getInstance().nextSequenceNumber()
                }, gr.prototype.saveEvents = function saveEvents() {
                    this.getInstance().saveEvents()
                }, gr.prototype.setDomain = function setDomain(e) {
                    this.getInstance().setDomain(e)
                }, gr.prototype.setUserId = function setUserId(e) {
                    this.getInstance().setUserId(e)
                }, gr.prototype.setGroup = function(e, t) {
                    this.getInstance().setGroup(e, t)
                }, gr.prototype.setOptOut = function setOptOut(e) {
                    this.getInstance().setOptOut(e)
                }, gr.prototype.regenerateDeviceId = function regenerateDeviceId() {
                    this.getInstance().regenerateDeviceId()
                }, gr.prototype.setDeviceId = function setDeviceId(e) {
                    this.getInstance().setDeviceId(e)
                }, gr.prototype.setUserProperties = function setUserProperties(e) {
                    this.getInstance().setUserProperties(e)
                }, gr.prototype.clearUserProperties = function clearUserProperties() {
                    this.getInstance().clearUserProperties()
                }, gr.prototype.identify = function(e, t) {
                    this.getInstance().identify(e, t)
                }, gr.prototype.setVersionName = function setVersionName(e) {
                    this.getInstance().setVersionName(e)
                }, gr.prototype.logEvent = function logEvent(e, t, r) {
                    return this.getInstance().logEvent(e, t, r)
                }, gr.prototype.logEventWithGroups = function(e, t, r, n) {
                    return this.getInstance().logEventWithGroups(e, t, r, n)
                }, gr.prototype.logRevenueV2 = function logRevenueV2(e) {
                    return this.getInstance().logRevenueV2(e)
                }, gr.prototype.logRevenue = function logRevenue(e, t, r) {
                    return this.getInstance().logRevenue(e, t, r)
                }, gr.prototype.removeEvents = function removeEvents(e, t) {
                    this.getInstance().removeEvents(e, t)
                }, gr.prototype.sendEvents = function sendEvents(e) {
                    this.getInstance().sendEvents(e)
                }, gr.prototype.setGlobalUserProperties = function setGlobalUserProperties(e) {
                    this.getInstance().setUserProperties(e)
                }, gr.prototype.__VERSION__ = "4.2.1";
                var yr = window.amplitude || {},
                    mr = new gr;
                for (var vr in mr._q = yr._q || [], yr._iq) yr._iq.hasOwnProperty(vr) && (mr.getInstance(vr)._q = yr._iq[vr]._q || []);
                return mr
            }, e.exports = i()
        }).call(this, r(4), r(6), r(65).Buffer)
    },
    65: function(e, t, r) {
        "use strict";
        (function(e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            var n = r(66),
                i = r(67),
                o = r(68);

            function kMaxLength() {
                return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function createBuffer(e, t) {
                if (kMaxLength() < t) throw new RangeError("Invalid typed array length");
                return Buffer.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Buffer.prototype : (null === e && (e = new Buffer(t)), e.length = t), e
            }

            function Buffer(e, t, r) {
                if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer)) return new Buffer(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return allocUnsafe(this, e)
                }
                return from(this, e, t, r)
            }

            function from(e, t, r, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function fromArrayBuffer(e, t, r, n) {
                    if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                    Buffer.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Buffer.prototype : e = fromArrayLike(e, t);
                    return e
                }(e, t, r, n) : "string" == typeof t ? function fromString(e, t, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!Buffer.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | byteLength(t, r),
                        i = (e = createBuffer(e, n)).write(t, r);
                    i !== n && (e = e.slice(0, i));
                    return e
                }(e, t, r) : function fromObject(e, t) {
                    if (Buffer.isBuffer(t)) {
                        var r = 0 | checked(t.length);
                        return 0 === (e = createBuffer(e, r)).length ? e : (t.copy(e, 0, 0, r), e)
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function isnan(e) {
                            return e != e
                        }(t.length) ? createBuffer(e, 0) : fromArrayLike(e, t);
                        if ("Buffer" === t.type && o(t.data)) return fromArrayLike(e, t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function assertSize(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function allocUnsafe(e, t) {
                if (assertSize(t), e = createBuffer(e, t < 0 ? 0 : 0 | checked(t)), !Buffer.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function fromArrayLike(e, t) {
                var r = t.length < 0 ? 0 : 0 | checked(t.length);
                e = createBuffer(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e
            }

            function checked(e) {
                if (e >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
                return 0 | e
            }

            function byteLength(e, t) {
                if (Buffer.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return utf8ToBytes(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return base64ToBytes(e).length;
                    default:
                        if (n) return utf8ToBytes(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function swap(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function bidirectionalIndexOf(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = Buffer.from(t, n)), Buffer.isBuffer(t)) return 0 === t.length ? -1 : arrayIndexOf(e, t, r, n, i);
                if ("number" == typeof t) return t &= 255, Buffer.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : arrayIndexOf(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function arrayIndexOf(e, t, r, n, i) {
                var o, s = 1,
                    a = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function read(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (i) {
                    var c = -1;
                    for (o = r; o < a; o++)
                        if (read(e, o) === read(t, -1 === c ? 0 : o - c)) {
                            if (-1 === c && (c = o), o - c + 1 === u) return c * s
                        } else -1 !== c && (o -= o - c), c = -1
                } else
                    for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                        for (var f = !0, l = 0; l < u; l++)
                            if (read(e, o + l) !== read(t, l)) {
                                f = !1;
                                break
                            }
                        if (f) return o
                    }
                return -1
            }

            function hexWrite(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                var o = t.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                n > o / 2 && (n = o / 2);
                for (var s = 0; s < n; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(a)) return s;
                    e[r + s] = a
                }
                return s
            }

            function utf8Write(e, t, r, n) {
                return blitBuffer(utf8ToBytes(t, e.length - r), e, r, n)
            }

            function asciiWrite(e, t, r, n) {
                return blitBuffer(function asciiToBytes(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function latin1Write(e, t, r, n) {
                return asciiWrite(e, t, r, n)
            }

            function base64Write(e, t, r, n) {
                return blitBuffer(base64ToBytes(t), e, r, n)
            }

            function ucs2Write(e, t, r, n) {
                return blitBuffer(function utf16leToBytes(e, t) {
                    for (var r, n, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                    return o
                }(t, e.length - r), e, r, n)
            }

            function base64Slice(e, t, r) {
                return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
            }

            function utf8Slice(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r;) {
                    var o, a, u, c, f = e[i],
                        l = null,
                        p = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                    if (i + p <= r) switch (p) {
                        case 1:
                            f < 128 && (l = f);
                            break;
                        case 2:
                            128 == (192 & (o = e[i + 1])) && (c = (31 & f) << 6 | 63 & o) > 127 && (l = c);
                            break;
                        case 3:
                            o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (c = (15 & f) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (l = c);
                            break;
                        case 4:
                            o = e[i + 1], a = e[i + 2], u = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & u) && (c = (15 & f) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & u) > 65535 && c < 1114112 && (l = c)
                    }
                    null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), i += p
                }
                return function decodeCodePointsArray(e) {
                    var t = e.length;
                    if (t <= s) return String.fromCharCode.apply(String, e);
                    var r = "",
                        n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += s));
                    return r
                }(n)
            }
            t.Buffer = Buffer, t.SlowBuffer = function SlowBuffer(e) {
                +e != e && (e = 0);
                return Buffer.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, Buffer.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), t.kMaxLength = kMaxLength(), Buffer.poolSize = 8192, Buffer._augment = function(e) {
                return e.__proto__ = Buffer.prototype, e
            }, Buffer.from = function(e, t, r) {
                return from(null, e, t, r)
            }, Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype, Buffer.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
                value: null,
                configurable: !0
            })), Buffer.alloc = function(e, t, r) {
                return function alloc(e, t, r, n) {
                    return assertSize(t), t <= 0 ? createBuffer(e, t) : void 0 !== r ? "string" == typeof n ? createBuffer(e, t).fill(r, n) : createBuffer(e, t).fill(r) : createBuffer(e, t)
                }(null, e, t, r)
            }, Buffer.allocUnsafe = function(e) {
                return allocUnsafe(null, e)
            }, Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(null, e)
            }, Buffer.isBuffer = function isBuffer(e) {
                return !(null == e || !e._isBuffer)
            }, Buffer.compare = function compare(e, t) {
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, Buffer.isEncoding = function isEncoding(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, Buffer.concat = function concat(e, t) {
                if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return Buffer.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                var n = Buffer.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; ++r) {
                    var s = e[r];
                    if (!Buffer.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(n, i), i += s.length
                }
                return n
            }, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) swap(this, t, t + 1);
                return this
            }, Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) swap(this, t, t + 3), swap(this, t + 1, t + 2);
                return this
            }, Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) swap(this, t, t + 7), swap(this, t + 1, t + 6), swap(this, t + 2, t + 5), swap(this, t + 3, t + 4);
                return this
            }, Buffer.prototype.toString = function toString() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? utf8Slice(this, 0, e) : function slowToString(e, t, r) {
                    var n = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                    if ((r >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return hexSlice(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, t, r);
                        case "ascii":
                            return asciiSlice(this, t, r);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, t, r);
                        case "base64":
                            return base64Slice(this, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, t, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), n = !0
                    }
                }.apply(this, arguments)
            }, Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === Buffer.compare(this, e)
            }, Buffer.prototype.inspect = function inspect() {
                var e = "",
                    r = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
            }, Buffer.prototype.compare = function compare(e, t, r, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && t >= r) return 0;
                if (n >= i) return -1;
                if (t >= r) return 1;
                if (this === e) return 0;
                for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0), a = Math.min(o, s), u = this.slice(n, i), c = e.slice(t, r), f = 0; f < a; ++f)
                    if (u[f] !== c[f]) {
                        o = u[f], s = c[f];
                        break
                    }
                return o < s ? -1 : s < o ? 1 : 0
            }, Buffer.prototype.includes = function includes(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, Buffer.prototype.indexOf = function indexOf(e, t, r) {
                return bidirectionalIndexOf(this, e, t, r, !0)
            }, Buffer.prototype.lastIndexOf = function lastIndexOf(e, t, r) {
                return bidirectionalIndexOf(this, e, t, r, !1)
            }, Buffer.prototype.write = function write(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i = this.length - t;
                if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var o = !1;;) switch (n) {
                    case "hex":
                        return hexWrite(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return utf8Write(this, e, t, r);
                    case "ascii":
                        return asciiWrite(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return latin1Write(this, e, t, r);
                    case "base64":
                        return base64Write(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return ucs2Write(this, e, t, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var s = 4096;

            function asciiSlice(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function latin1Slice(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n
            }

            function hexSlice(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = "", o = t; o < r; ++o) i += toHex(e[o]);
                return i
            }

            function utf16leSlice(e, t, r) {
                for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }

            function checkOffset(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function checkInt(e, t, r, n, i, o) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function objectWriteUInt16(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function objectWriteUInt32(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }

            function checkIEEE754(e, t, r, n, i, o) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function writeFloat(e, t, r, n, o) {
                return o || checkIEEE754(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4
            }

            function writeDouble(e, t, r, n, o) {
                return o || checkIEEE754(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8
            }
            Buffer.prototype.slice = function slice(e, t) {
                var r, n = this.length;
                if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), Buffer.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = Buffer.prototype;
                else {
                    var i = t - e;
                    r = new Buffer(i, void 0);
                    for (var o = 0; o < i; ++o) r[o] = this[o + e]
                }
                return r
            }, Buffer.prototype.readUIntLE = function readUIntLE(e, t, r) {
                e |= 0, t |= 0, r || checkOffset(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n
            }, Buffer.prototype.readUIntBE = function readUIntBE(e, t, r) {
                e |= 0, t |= 0, r || checkOffset(e, t, this.length);
                for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                return n
            }, Buffer.prototype.readUInt8 = function readUInt8(e, t) {
                return t || checkOffset(e, 1, this.length), this[e]
            }, Buffer.prototype.readUInt16LE = function readUInt16LE(e, t) {
                return t || checkOffset(e, 2, this.length), this[e] | this[e + 1] << 8
            }, Buffer.prototype.readUInt16BE = function readUInt16BE(e, t) {
                return t || checkOffset(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, Buffer.prototype.readUInt32LE = function readUInt32LE(e, t) {
                return t || checkOffset(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, Buffer.prototype.readUInt32BE = function readUInt32BE(e, t) {
                return t || checkOffset(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, Buffer.prototype.readIntLE = function readIntLE(e, t, r) {
                e |= 0, t |= 0, r || checkOffset(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, Buffer.prototype.readIntBE = function readIntBE(e, t, r) {
                e |= 0, t |= 0, r || checkOffset(e, t, this.length);
                for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
            }, Buffer.prototype.readInt8 = function readInt8(e, t) {
                return t || checkOffset(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, Buffer.prototype.readInt16LE = function readInt16LE(e, t) {
                t || checkOffset(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, Buffer.prototype.readInt16BE = function readInt16BE(e, t) {
                t || checkOffset(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, Buffer.prototype.readInt32LE = function readInt32LE(e, t) {
                return t || checkOffset(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, Buffer.prototype.readInt32BE = function readInt32BE(e, t) {
                return t || checkOffset(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, Buffer.prototype.readFloatLE = function readFloatLE(e, t) {
                return t || checkOffset(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, Buffer.prototype.readFloatBE = function readFloatBE(e, t) {
                return t || checkOffset(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, Buffer.prototype.readDoubleLE = function readDoubleLE(e, t) {
                return t || checkOffset(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, Buffer.prototype.readDoubleBE = function readDoubleBE(e, t) {
                return t || checkOffset(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, Buffer.prototype.writeUIntLE = function writeUIntLE(e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
                return t + r
            }, Buffer.prototype.writeUIntBE = function writeUIntBE(e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                    o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                return t + r
            }, Buffer.prototype.writeUInt8 = function writeUInt8(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 1, 255, 0), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0), t + 2
            }, Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1), t + 2
            }, Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : objectWriteUInt32(this, e, t, !0), t + 4
            }, Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1), t + 4
            }, Buffer.prototype.writeIntLE = function writeIntLE(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    checkInt(this, e, t, r, i - 1, -i)
                }
                var o = 0,
                    s = 1,
                    a = 0;
                for (this[t] = 255 & e; ++o < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                return t + r
            }, Buffer.prototype.writeIntBE = function writeIntBE(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    checkInt(this, e, t, r, i - 1, -i)
                }
                var o = r - 1,
                    s = 1,
                    a = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                return t + r
            }, Buffer.prototype.writeInt8 = function writeInt8(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 1, 127, -128), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, Buffer.prototype.writeInt16LE = function writeInt16LE(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0), t + 2
            }, Buffer.prototype.writeInt16BE = function writeInt16BE(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1), t + 2
            }, Buffer.prototype.writeInt32LE = function writeInt32LE(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 4, 2147483647, -2147483648), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : objectWriteUInt32(this, e, t, !0), t + 4
            }, Buffer.prototype.writeInt32BE = function writeInt32BE(e, t, r) {
                return e = +e, t |= 0, r || checkInt(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1), t + 4
            }, Buffer.prototype.writeFloatLE = function writeFloatLE(e, t, r) {
                return writeFloat(this, e, t, !0, r)
            }, Buffer.prototype.writeFloatBE = function writeFloatBE(e, t, r) {
                return writeFloat(this, e, t, !1, r)
            }, Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, t, r) {
                return writeDouble(this, e, t, !0, r)
            }, Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, t, r) {
                return writeDouble(this, e, t, !1, r)
            }, Buffer.prototype.copy = function copy(e, t, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i, o = n - r;
                if (this === e && r < t && t < n)
                    for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                else if (o < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) e[i + t] = this[i + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
                return o
            }, Buffer.prototype.fill = function fill(e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !Buffer.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var o;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (o = t; o < r; ++o) this[o] = e;
                else {
                    var s = Buffer.isBuffer(e) ? e : utf8ToBytes(new Buffer(e, n).toString()),
                        a = s.length;
                    for (o = 0; o < r - t; ++o) this[o + t] = s[o % a]
                }
                return this
            };
            var a = /[^+\/0-9A-Za-z-_]/g;

            function toHex(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function utf8ToBytes(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
                    if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function base64ToBytes(e) {
                return n.toByteArray(function base64clean(e) {
                    if ((e = function stringtrim(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(a, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function blitBuffer(e, t, r, n) {
                for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                return i
            }
        }).call(this, r(4))
    },
    66: function(e, t, r) {
        "use strict";
        t.byteLength = function byteLength(e) {
            var t = getLens(e),
                r = t[0],
                n = t[1];
            return 3 * (r + n) / 4 - n
        }, t.toByteArray = function toByteArray(e) {
            for (var t, r = getLens(e), n = r[0], s = r[1], a = new o(function _byteLength(e, t, r) {
                    return 3 * (t + r) / 4 - r
                }(0, n, s)), u = 0, c = s > 0 ? n - 4 : n, f = 0; f < c; f += 4) t = i[e.charCodeAt(f)] << 18 | i[e.charCodeAt(f + 1)] << 12 | i[e.charCodeAt(f + 2)] << 6 | i[e.charCodeAt(f + 3)], a[u++] = t >> 16 & 255, a[u++] = t >> 8 & 255, a[u++] = 255 & t;
            2 === s && (t = i[e.charCodeAt(f)] << 2 | i[e.charCodeAt(f + 1)] >> 4, a[u++] = 255 & t);
            1 === s && (t = i[e.charCodeAt(f)] << 10 | i[e.charCodeAt(f + 1)] << 4 | i[e.charCodeAt(f + 2)] >> 2, a[u++] = t >> 8 & 255, a[u++] = 255 & t);
            return a
        }, t.fromByteArray = function fromByteArray(e) {
            for (var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) o.push(encodeChunk(e, s, s + 16383 > a ? a : s + 16383));
            1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
            return o.join("")
        };
        for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) n[a] = s[a], i[s.charCodeAt(a)] = a;

        function getLens(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
        }

        function encodeChunk(e, t, r) {
            for (var i, o, s = [], a = t; a < r; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
            return s.join("")
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    },
    67: function(e, t) {
        t.read = function(e, t, r, n, i) {
            var o, s, a = 8 * i - n - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                f = -7,
                l = r ? i - 1 : 0,
                p = r ? -1 : 1,
                h = e[t + l];
            for (l += p, o = h & (1 << -f) - 1, h >>= -f, f += a; f > 0; o = 256 * o + e[t + l], l += p, f -= 8);
            for (s = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; s = 256 * s + e[t + l], l += p, f -= 8);
            if (0 === o) o = 1 - c;
            else {
                if (o === u) return s ? NaN : 1 / 0 * (h ? -1 : 1);
                s += Math.pow(2, n), o -= c
            }
            return (h ? -1 : 1) * s * Math.pow(2, o - n)
        }, t.write = function(e, t, r, n, i, o) {
            var s, a, u, c = 8 * o - i - 1,
                f = (1 << c) - 1,
                l = f >> 1,
                p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = n ? 0 : o - 1,
                d = n ? 1 : -1,
                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + h] = 255 & a, h += d, a /= 256, i -= 8);
            for (s = s << i | a, c += i; c > 0; e[r + h] = 255 & s, h += d, s /= 256, c -= 8);
            e[r + h - d] |= 128 * g
        }
    },
    68: function(e, t) {
        var r = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == r.call(e)
        }
    }
});