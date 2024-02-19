import z from "react";
function xe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fe = { exports: {} }, H = { exports: {} }, E = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function je() {
  if (ye)
    return E;
  ye = 1;
  var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, c = e ? Symbol.for("react.fragment") : 60107, f = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, S = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, O = e ? Symbol.for("react.async_mode") : 60111, C = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function I(n) {
    if (typeof n == "object" && n !== null) {
      var W = n.$$typeof;
      switch (W) {
        case a:
          switch (n = n.type, n) {
            case O:
            case C:
            case c:
            case s:
            case f:
            case _:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case l:
                case h:
                case k:
                case j:
                case S:
                  return n;
                default:
                  return W;
              }
          }
        case o:
          return W;
      }
    }
  }
  function A(n) {
    return I(n) === C;
  }
  return E.AsyncMode = O, E.ConcurrentMode = C, E.ContextConsumer = l, E.ContextProvider = S, E.Element = a, E.ForwardRef = h, E.Fragment = c, E.Lazy = k, E.Memo = j, E.Portal = o, E.Profiler = s, E.StrictMode = f, E.Suspense = _, E.isAsyncMode = function(n) {
    return A(n) || I(n) === O;
  }, E.isConcurrentMode = A, E.isContextConsumer = function(n) {
    return I(n) === l;
  }, E.isContextProvider = function(n) {
    return I(n) === S;
  }, E.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === a;
  }, E.isForwardRef = function(n) {
    return I(n) === h;
  }, E.isFragment = function(n) {
    return I(n) === c;
  }, E.isLazy = function(n) {
    return I(n) === k;
  }, E.isMemo = function(n) {
    return I(n) === j;
  }, E.isPortal = function(n) {
    return I(n) === o;
  }, E.isProfiler = function(n) {
    return I(n) === s;
  }, E.isStrictMode = function(n) {
    return I(n) === f;
  }, E.isSuspense = function(n) {
    return I(n) === _;
  }, E.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === c || n === C || n === s || n === f || n === _ || n === x || typeof n == "object" && n !== null && (n.$$typeof === k || n.$$typeof === j || n.$$typeof === S || n.$$typeof === l || n.$$typeof === h || n.$$typeof === $ || n.$$typeof === D || n.$$typeof === F || n.$$typeof === w);
  }, E.typeOf = I, E;
}
var T = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function Ae() {
  return pe || (pe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, c = e ? Symbol.for("react.fragment") : 60107, f = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, S = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, O = e ? Symbol.for("react.async_mode") : 60111, C = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function I(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === c || t === C || t === s || t === f || t === _ || t === x || typeof t == "object" && t !== null && (t.$$typeof === k || t.$$typeof === j || t.$$typeof === S || t.$$typeof === l || t.$$typeof === h || t.$$typeof === $ || t.$$typeof === D || t.$$typeof === F || t.$$typeof === w);
    }
    function A(t) {
      if (typeof t == "object" && t !== null) {
        var q = t.$$typeof;
        switch (q) {
          case a:
            var V = t.type;
            switch (V) {
              case O:
              case C:
              case c:
              case s:
              case f:
              case _:
                return V;
              default:
                var de = V && V.$$typeof;
                switch (de) {
                  case l:
                  case h:
                  case k:
                  case j:
                  case S:
                    return de;
                  default:
                    return q;
                }
            }
          case o:
            return q;
        }
      }
    }
    var n = O, W = C, G = l, X = S, Z = a, Q = h, U = c, ee = k, re = j, N = o, te = s, Y = f, L = _, B = !1;
    function ne(t) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(t) || A(t) === O;
    }
    function r(t) {
      return A(t) === C;
    }
    function i(t) {
      return A(t) === l;
    }
    function v(t) {
      return A(t) === S;
    }
    function y(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function u(t) {
      return A(t) === h;
    }
    function m(t) {
      return A(t) === c;
    }
    function d(t) {
      return A(t) === k;
    }
    function p(t) {
      return A(t) === j;
    }
    function b(t) {
      return A(t) === o;
    }
    function P(t) {
      return A(t) === s;
    }
    function g(t) {
      return A(t) === f;
    }
    function M(t) {
      return A(t) === _;
    }
    T.AsyncMode = n, T.ConcurrentMode = W, T.ContextConsumer = G, T.ContextProvider = X, T.Element = Z, T.ForwardRef = Q, T.Fragment = U, T.Lazy = ee, T.Memo = re, T.Portal = N, T.Profiler = te, T.StrictMode = Y, T.Suspense = L, T.isAsyncMode = ne, T.isConcurrentMode = r, T.isContextConsumer = i, T.isContextProvider = v, T.isElement = y, T.isForwardRef = u, T.isFragment = m, T.isLazy = d, T.isMemo = p, T.isPortal = b, T.isProfiler = P, T.isStrictMode = g, T.isSuspense = M, T.isValidElementType = I, T.typeOf = A;
  }()), T;
}
var ve;
function Se() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? H.exports = je() : H.exports = Ae()), H.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var oe, me;
function Ie() {
  if (me)
    return oe;
  me = 1;
  var e = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function c(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function f() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var S = {}, l = 0; l < 10; l++)
        S["_" + String.fromCharCode(l)] = l;
      var O = Object.getOwnPropertyNames(S).map(function(h) {
        return S[h];
      });
      if (O.join("") !== "0123456789")
        return !1;
      var C = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        C[h] = h;
      }), Object.keys(Object.assign({}, C)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return oe = f() ? Object.assign : function(s, S) {
    for (var l, O = c(s), C, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var _ in l)
        a.call(l, _) && (O[_] = l[_]);
      if (e) {
        C = e(l);
        for (var x = 0; x < C.length; x++)
          o.call(l, C[x]) && (O[C[x]] = l[C[x]]);
      }
    }
    return O;
  }, oe;
}
var ie, be;
function le() {
  if (be)
    return ie;
  be = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ie = e, ie;
}
var ae, ge;
function _e() {
  return ge || (ge = 1, ae = Function.call.bind(Object.prototype.hasOwnProperty)), ae;
}
var ce, he;
function $e() {
  if (he)
    return ce;
  he = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var a = le(), o = {}, c = _e();
    e = function(s) {
      var S = "Warning: " + s;
      typeof console < "u" && console.error(S);
      try {
        throw new Error(S);
      } catch {
      }
    };
  }
  function f(s, S, l, O, C) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (c(s, h)) {
          var _;
          try {
            if (typeof s[h] != "function") {
              var x = Error(
                (O || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            _ = s[h](S, h, O, l, null, a);
          } catch (k) {
            _ = k;
          }
          if (_ && !(_ instanceof Error) && e(
            (O || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in o)) {
            o[_.message] = !0;
            var j = C ? C() : "";
            e(
              "Failed " + l + " type: " + _.message + (j ?? "")
            );
          }
        }
    }
  }
  return f.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, ce = f, ce;
}
var se, Ee;
function Me() {
  if (Ee)
    return se;
  Ee = 1;
  var e = Se(), a = Ie(), o = le(), c = _e(), f = $e(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var O = "Warning: " + l;
    typeof console < "u" && console.error(O);
    try {
      throw new Error(O);
    } catch {
    }
  });
  function S() {
    return null;
  }
  return se = function(l, O) {
    var C = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function _(r) {
      var i = r && (C && r[C] || r[h]);
      if (typeof i == "function")
        return i;
    }
    var x = "<<anonymous>>", j = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: F(),
      arrayOf: I,
      element: A(),
      elementType: n(),
      instanceOf: W,
      node: Q(),
      objectOf: X,
      oneOf: G,
      oneOfType: Z,
      shape: ee,
      exact: re
    };
    function k(r, i) {
      return r === i ? r !== 0 || 1 / r === 1 / i : r !== r && i !== i;
    }
    function w(r, i) {
      this.message = r, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function $(r) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, v = 0;
      function y(m, d, p, b, P, g, M) {
        if (b = b || x, g = g || p, M !== o) {
          if (O) {
            var t = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw t.name = "Invariant Violation", t;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var q = b + ":" + p;
            !i[q] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + g + "` prop on `" + b + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[q] = !0, v++);
          }
        }
        return d[p] == null ? m ? d[p] === null ? new w("The " + P + " `" + g + "` is marked as required " + ("in `" + b + "`, but its value is `null`.")) : new w("The " + P + " `" + g + "` is marked as required in " + ("`" + b + "`, but its value is `undefined`.")) : null : r(d, p, b, P, g);
      }
      var u = y.bind(null, !1);
      return u.isRequired = y.bind(null, !0), u;
    }
    function D(r) {
      function i(v, y, u, m, d, p) {
        var b = v[y], P = Y(b);
        if (P !== r) {
          var g = L(b);
          return new w(
            "Invalid " + m + " `" + d + "` of type " + ("`" + g + "` supplied to `" + u + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return $(i);
    }
    function F() {
      return $(S);
    }
    function I(r) {
      function i(v, y, u, m, d) {
        if (typeof r != "function")
          return new w("Property `" + d + "` of component `" + u + "` has invalid PropType notation inside arrayOf.");
        var p = v[y];
        if (!Array.isArray(p)) {
          var b = Y(p);
          return new w("Invalid " + m + " `" + d + "` of type " + ("`" + b + "` supplied to `" + u + "`, expected an array."));
        }
        for (var P = 0; P < p.length; P++) {
          var g = r(p, P, u, m, d + "[" + P + "]", o);
          if (g instanceof Error)
            return g;
        }
        return null;
      }
      return $(i);
    }
    function A() {
      function r(i, v, y, u, m) {
        var d = i[v];
        if (!l(d)) {
          var p = Y(d);
          return new w("Invalid " + u + " `" + m + "` of type " + ("`" + p + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(r);
    }
    function n() {
      function r(i, v, y, u, m) {
        var d = i[v];
        if (!e.isValidElementType(d)) {
          var p = Y(d);
          return new w("Invalid " + u + " `" + m + "` of type " + ("`" + p + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(r);
    }
    function W(r) {
      function i(v, y, u, m, d) {
        if (!(v[y] instanceof r)) {
          var p = r.name || x, b = ne(v[y]);
          return new w("Invalid " + m + " `" + d + "` of type " + ("`" + b + "` supplied to `" + u + "`, expected ") + ("instance of `" + p + "`."));
        }
        return null;
      }
      return $(i);
    }
    function G(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), S;
      function i(v, y, u, m, d) {
        for (var p = v[y], b = 0; b < r.length; b++)
          if (k(p, r[b]))
            return null;
        var P = JSON.stringify(r, function(M, t) {
          var q = L(t);
          return q === "symbol" ? String(t) : t;
        });
        return new w("Invalid " + m + " `" + d + "` of value `" + String(p) + "` " + ("supplied to `" + u + "`, expected one of " + P + "."));
      }
      return $(i);
    }
    function X(r) {
      function i(v, y, u, m, d) {
        if (typeof r != "function")
          return new w("Property `" + d + "` of component `" + u + "` has invalid PropType notation inside objectOf.");
        var p = v[y], b = Y(p);
        if (b !== "object")
          return new w("Invalid " + m + " `" + d + "` of type " + ("`" + b + "` supplied to `" + u + "`, expected an object."));
        for (var P in p)
          if (c(p, P)) {
            var g = r(p, P, u, m, d + "." + P, o);
            if (g instanceof Error)
              return g;
          }
        return null;
      }
      return $(i);
    }
    function Z(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), S;
      for (var i = 0; i < r.length; i++) {
        var v = r[i];
        if (typeof v != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(v) + " at index " + i + "."
          ), S;
      }
      function y(u, m, d, p, b) {
        for (var P = [], g = 0; g < r.length; g++) {
          var M = r[g], t = M(u, m, d, p, b, o);
          if (t == null)
            return null;
          t.data && c(t.data, "expectedType") && P.push(t.data.expectedType);
        }
        var q = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new w("Invalid " + p + " `" + b + "` supplied to " + ("`" + d + "`" + q + "."));
      }
      return $(y);
    }
    function Q() {
      function r(i, v, y, u, m) {
        return N(i[v]) ? null : new w("Invalid " + u + " `" + m + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return $(r);
    }
    function U(r, i, v, y, u) {
      return new w(
        (r || "React class") + ": " + i + " type `" + v + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + u + "`."
      );
    }
    function ee(r) {
      function i(v, y, u, m, d) {
        var p = v[y], b = Y(p);
        if (b !== "object")
          return new w("Invalid " + m + " `" + d + "` of type `" + b + "` " + ("supplied to `" + u + "`, expected `object`."));
        for (var P in r) {
          var g = r[P];
          if (typeof g != "function")
            return U(u, m, d, P, L(g));
          var M = g(p, P, u, m, d + "." + P, o);
          if (M)
            return M;
        }
        return null;
      }
      return $(i);
    }
    function re(r) {
      function i(v, y, u, m, d) {
        var p = v[y], b = Y(p);
        if (b !== "object")
          return new w("Invalid " + m + " `" + d + "` of type `" + b + "` " + ("supplied to `" + u + "`, expected `object`."));
        var P = a({}, v[y], r);
        for (var g in P) {
          var M = r[g];
          if (c(r, g) && typeof M != "function")
            return U(u, m, d, g, L(M));
          if (!M)
            return new w(
              "Invalid " + m + " `" + d + "` key `" + g + "` supplied to `" + u + "`.\nBad object: " + JSON.stringify(v[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var t = M(p, g, u, m, d + "." + g, o);
          if (t)
            return t;
        }
        return null;
      }
      return $(i);
    }
    function N(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(N);
          if (r === null || l(r))
            return !0;
          var i = _(r);
          if (i) {
            var v = i.call(r), y;
            if (i !== r.entries) {
              for (; !(y = v.next()).done; )
                if (!N(y.value))
                  return !1;
            } else
              for (; !(y = v.next()).done; ) {
                var u = y.value;
                if (u && !N(u[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(r, i) {
      return r === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function Y(r) {
      var i = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : te(i, r) ? "symbol" : i;
    }
    function L(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var i = Y(r);
      if (i === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function B(r) {
      var i = L(r);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function ne(r) {
      return !r.constructor || !r.constructor.name ? x : r.constructor.name;
    }
    return j.checkPropTypes = f, j.resetWarningCache = f.resetWarningCache, j.PropTypes = j, j;
  }, se;
}
var ue, Te;
function ke() {
  if (Te)
    return ue;
  Te = 1;
  var e = le();
  function a() {
  }
  function o() {
  }
  return o.resetWarningCache = a, ue = function() {
    function c(S, l, O, C, h, _) {
      if (_ !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    c.isRequired = c;
    function f() {
      return c;
    }
    var s = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: f,
      element: c,
      elementType: c,
      instanceOf: f,
      node: c,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: o,
      resetWarningCache: a
    };
    return s.PropTypes = s, s;
  }, ue;
}
if (process.env.NODE_ENV !== "production") {
  var De = Se(), Ye = !0;
  fe.exports = Me()(De.isElement, Ye);
} else
  fe.exports = ke()();
var qe = fe.exports;
const R = /* @__PURE__ */ xe(qe);
R.string, R.string, R.string, R.string, R.string, R.string, R.string;
var Ce = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Oe = z.createContext && /* @__PURE__ */ z.createContext(Ce), We = ["attr", "size", "title"];
function Le(e, a) {
  if (e == null)
    return {};
  var o = ze(e, a), c, f;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (f = 0; f < s.length; f++)
      c = s[f], !(a.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (o[c] = e[c]);
  }
  return o;
}
function ze(e, a) {
  if (e == null)
    return {};
  var o = {}, c = Object.keys(e), f, s;
  for (s = 0; s < c.length; s++)
    f = c[s], !(a.indexOf(f) >= 0) && (o[f] = e[f]);
  return o;
}
function J() {
  return J = Object.assign ? Object.assign.bind() : function(e) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var c in o)
        Object.prototype.hasOwnProperty.call(o, c) && (e[c] = o[c]);
    }
    return e;
  }, J.apply(this, arguments);
}
function Pe(e, a) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    a && (c = c.filter(function(f) {
      return Object.getOwnPropertyDescriptor(e, f).enumerable;
    })), o.push.apply(o, c);
  }
  return o;
}
function K(e) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Pe(Object(o), !0).forEach(function(c) {
      Ne(e, c, o[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Pe(Object(o)).forEach(function(c) {
      Object.defineProperty(e, c, Object.getOwnPropertyDescriptor(o, c));
    });
  }
  return e;
}
function Ne(e, a, o) {
  return a = Fe(a), a in e ? Object.defineProperty(e, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = o, e;
}
function Fe(e) {
  var a = Ue(e, "string");
  return typeof a == "symbol" ? a : String(a);
}
function Ue(e, a) {
  if (typeof e != "object" || e === null)
    return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var c = o.call(e, a || "default");
    if (typeof c != "object")
      return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(e);
}
function we(e) {
  return e && e.map((a, o) => /* @__PURE__ */ z.createElement(a.tag, K({
    key: o
  }, a.attr), we(a.child)));
}
function Be(e) {
  return (a) => /* @__PURE__ */ z.createElement(Ve, J({
    attr: K({}, e.attr)
  }, a), we(e.child));
}
function Ve(e) {
  var a = (o) => {
    var {
      attr: c,
      size: f,
      title: s
    } = e, S = Le(e, We), l = f || o.size || "1em", O;
    return o.className && (O = o.className), e.className && (O = (O ? O + " " : "") + e.className), /* @__PURE__ */ z.createElement("svg", J({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, c, S, {
      className: O,
      style: K(K({
        color: e.color || o.color
      }, o.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ z.createElement("title", null, s), e.children);
  };
  return Oe !== void 0 ? /* @__PURE__ */ z.createElement(Oe.Consumer, null, (o) => a(o)) : a(Ce);
}
function He(e) {
  return Be({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" }, child: [] }] })(e);
}
R.string, R.string, R.string, R.string, R.string;
R.string, R.string, R.string;
function Re({ children: e, iconBgColor: a, iconColor: o }) {
  return /* @__PURE__ */ React.createElement("div", { className: "icon-container", style: { backgroundColor: a } }, e || /* @__PURE__ */ React.createElement(He, { className: "icon", style: { color: o } }));
}
Re.propTypes = {
  children: R.element,
  iconColor: R.string,
  iconBgColor: R.string
};
Re.defaultProps = {
  iconColor: "#f8f8ff",
  iconBgColor: "#3b82f6"
};
function Je({ children: e, styles: a }) {
  return /* @__PURE__ */ React.createElement("p", { className: "title", style: a }, e);
}
Je.propTypes = {
  children: R.string,
  styles: R.object
};
function Ke({ children: e, styles: a }) {
  return /* @__PURE__ */ React.createElement("p", { className: "text", style: a }, e);
}
Ke.propTypes = {
  children: R.string,
  styles: R.object
};
console.log("card");
