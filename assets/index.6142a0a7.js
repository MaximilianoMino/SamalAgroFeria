function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          if (d) {
            Object.defineProperty(n2, k2, d.get ? d : {
              enumerable: true,
              get: () => e[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
function A$2(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$3 && a[z$3] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$3 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$3 = Object.assign, D$3 = {};
function E$2(a, b2, e) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e || B$3;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$2.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$2.prototype;
function G$3(a, b2, e) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e || B$3;
}
var H$3 = G$3.prototype = new F$1();
H$3.constructor = G$3;
C$3(H$3, E$2.prototype);
H$3.isPureReactComponent = true;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$3 = { current: null }, L$3 = { key: true, ref: true, __self: true, __source: true };
function M$3(a, b2, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b2)
    for (d in void 0 !== b2.ref && (h = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J$1.call(b2, d) && !L$3.hasOwnProperty(d) && (c[d] = b2[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$2, type: a, key: k2, ref: h, props: c, _owner: K$3.current };
}
function N$3(a, b2) {
  return { $$typeof: l$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$3(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$2;
}
function escape(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$3 = /\/+/g;
function Q$3(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
}
function R$2(a, b2, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$2:
          case n$1:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q$3(h, 0) : d, I$2(c) ? (e = "", null != a && (e = a.replace(P$3, "$&/") + "/"), R$2(c, b2, e, "", function(a2) {
      return a2;
    })) : null != c && (O$3(c) && (c = N$3(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$3, "$&/") + "/") + a)), b2.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$2(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$3(k2, g);
      h += R$2(k2, b2, e, f2, c);
    }
  else if (f2 = A$2(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$3(k2, g++), h += R$2(k2, b2, e, f2, c);
  else if ("object" === k2)
    throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$3(a, b2, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$2(a, d, "", "", function(a2) {
    return b2.call(e, a2, c++);
  });
  return d;
}
function T$2(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$3 = { current: null }, V$3 = { transition: null }, W$3 = { ReactCurrentDispatcher: U$3, ReactCurrentBatchConfig: V$3, ReactCurrentOwner: K$3 };
react_production_min.Children = { map: S$3, forEach: function(a, b2, e) {
  S$3(a, function() {
    b2.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b2 = 0;
  S$3(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$3(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$3(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$3;
react_production_min.StrictMode = q$3;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$3;
react_production_min.cloneElement = function(a, b2, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$3({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h = K$3.current);
    void 0 !== b2.key && (c = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b2)
      J$1.call(b2, f2) && !L$3.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$2, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$3;
react_production_min.createFactory = function(a) {
  var b2 = M$3.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$3, render: a };
};
react_production_min.isValidElement = O$3;
react_production_min.lazy = function(a) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$2 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x$2, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V$3.transition;
  V$3.transition = {};
  try {
    a();
  } finally {
    V$3.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b2) {
  return U$3.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U$3.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$3.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U$3.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U$3.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e) {
  return U$3.current.useImperativeHandle(a, b2, e);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U$3.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U$3.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U$3.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e) {
  return U$3.current.useReducer(a, b2, e);
};
react_production_min.useRef = function(a) {
  return U$3.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$3.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e) {
  return U$3.current.useSyncExternalStore(a, b2, e);
};
react_production_min.useTransition = function() {
  return U$3.current.useTransition();
};
react_production_min.version = "18.2.0";
(function(module) {
  {
    module.exports = react_production_min;
  }
})(react);
const React = /* @__PURE__ */ getDefaultExportFromCjs(react.exports);
const React$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React
}, [react.exports]);
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b2) {
    var c = a.length;
    a.push(b2);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b2))
          a[d] = b2, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b2 = a[0], c = a.pop();
    if (c !== b2) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g(a, b2) {
    var c = a.sortIndex - b2.sortIndex;
    return 0 !== c ? c : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h(t2);
        null !== b2 && K2(H2, b2.startTime - a);
      }
  }
  function J2(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b2);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
(function(module) {
  {
    module.exports = scheduler_production_min;
  }
})(scheduler);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa$1 = react.exports, ca$2 = scheduler.exports;
function p$2(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da$2 = /* @__PURE__ */ new Set(), ea$2 = {};
function fa$2(a, b2) {
  ha$1(a, b2);
  ha$1(a + "Capture", b2);
}
function ha$1(a, b2) {
  ea$2[a] = b2;
  for (a = 0; a < b2.length; a++)
    da$2.add(b2[a]);
}
var ia$2 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja$2 = Object.prototype.hasOwnProperty, ka$1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la$1 = {}, ma$2 = {};
function oa$2(a) {
  if (ja$2.call(ma$2, a))
    return true;
  if (ja$2.call(la$1, a))
    return false;
  if (ka$1.test(a))
    return ma$2[a] = true;
  la$1[a] = true;
  return false;
}
function pa$2(a, b2, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa$2(a, b2, c, d) {
  if (null === b2 || "undefined" === typeof b2 || pa$2(a, b2, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v$2(a, b2, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z$2[a] = new v$2(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z$2[b2] = new v$2(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z$2[a] = new v$2(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z$2[a] = new v$2(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z$2[a] = new v$2(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z$2[a] = new v$2(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z$2[a] = new v$2(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z$2[a] = new v$2(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z$2[a] = new v$2(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra$2 = /[\-:]([a-z])/g;
function sa$2(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    ra$2,
    sa$2
  );
  z$2[b2] = new v$2(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(ra$2, sa$2);
  z$2[b2] = new v$2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(ra$2, sa$2);
  z$2[b2] = new v$2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z$2[a] = new v$2(a, 1, false, a.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new v$2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z$2[a] = new v$2(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta$2(a, b2, c, d) {
  var e = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa$2(b2, c, e, d) && (c = null), d || null === e ? oa$2(b2) && (null === c ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b2 = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b2) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b2, c) : a.setAttribute(b2, c)));
}
var ua$2 = aa$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va$2 = Symbol.for("react.element"), wa$2 = Symbol.for("react.portal"), ya$2 = Symbol.for("react.fragment"), za$2 = Symbol.for("react.strict_mode"), Aa$2 = Symbol.for("react.profiler"), Ba$1 = Symbol.for("react.provider"), Ca$1 = Symbol.for("react.context"), Da$1 = Symbol.for("react.forward_ref"), Ea$2 = Symbol.for("react.suspense"), Fa$2 = Symbol.for("react.suspense_list"), Ga$2 = Symbol.for("react.memo"), Ha$2 = Symbol.for("react.lazy");
var Ia$2 = Symbol.for("react.offscreen");
var Ja$1 = Symbol.iterator;
function Ka$2(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja$1 && a[Ja$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A$1 = Object.assign, La$1;
function Ma$2(a) {
  if (void 0 === La$1)
    try {
      throw Error();
    } catch (c) {
      var b2 = c.stack.trim().match(/\n( *(at )?)/);
      La$1 = b2 && b2[1] || "";
    }
  return "\n" + La$1 + a;
}
var Na$2 = false;
function Oa$2(a, b2) {
  if (!a || Na$2)
    return "";
  Na$2 = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h]) {
                var k2 = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na$2 = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma$2(a) : "";
}
function Pa$2(a) {
  switch (a.tag) {
    case 5:
      return Ma$2(a.type);
    case 16:
      return Ma$2("Lazy");
    case 13:
      return Ma$2("Suspense");
    case 19:
      return Ma$2("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa$2(a.type, false), a;
    case 11:
      return a = Oa$2(a.type.render, false), a;
    case 1:
      return a = Oa$2(a.type, true), a;
    default:
      return "";
  }
}
function Qa$2(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya$2:
      return "Fragment";
    case wa$2:
      return "Portal";
    case Aa$2:
      return "Profiler";
    case za$2:
      return "StrictMode";
    case Ea$2:
      return "Suspense";
    case Fa$2:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca$1:
        return (a.displayName || "Context") + ".Consumer";
      case Ba$1:
        return (a._context.displayName || "Context") + ".Provider";
      case Da$1:
        var b2 = a.render;
        a = a.displayName;
        a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga$2:
        return b2 = a.displayName || null, null !== b2 ? b2 : Qa$2(a.type) || "Memo";
      case Ha$2:
        b2 = a._payload;
        a = a._init;
        try {
          return Qa$2(a(b2));
        } catch (c) {
        }
    }
  return null;
}
function Ra$2(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa$2(b2);
    case 8:
      return b2 === za$2 ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa$2(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta$2(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua$2(a) {
  var b2 = Ta$2(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va$2(a) {
  a._valueTracker || (a._valueTracker = Ua$2(a));
}
function Wa$2(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c = b2.getValue();
  var d = "";
  a && (d = Ta$2(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b2.setValue(a), true) : false;
}
function Xa$2(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya$2(a, b2) {
  var c = b2.checked;
  return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za$1(a, b2) {
  var c = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
  c = Sa$2(null != b2.value ? b2.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab$1(a, b2) {
  b2 = b2.checked;
  null != b2 && ta$2(a, "checked", b2, false);
}
function bb$1(a, b2) {
  ab$1(a, b2);
  var c = Sa$2(b2.value), d = b2.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb$1(a, b2.type, c) : b2.hasOwnProperty("defaultValue") && cb$1(a, b2.type, Sa$2(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function db$2(a, b2, c) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d = b2.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb$1(a, b2, c) {
  if ("number" !== b2 || Xa$2(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb$1 = Array.isArray;
function fb$1(a, b2, c, d) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e = 0; e < c.length; e++)
      b2["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b2.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa$2(c);
    b2 = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b2 || a[e].disabled || (b2 = a[e]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb$1(a, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p$2(91));
  return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb$1(a, b2) {
  var c = b2.value;
  if (null == c) {
    c = b2.children;
    b2 = b2.defaultValue;
    if (null != c) {
      if (null != b2)
        throw Error(p$2(92));
      if (eb$1(c)) {
        if (1 < c.length)
          throw Error(p$2(93));
        c = c[0];
      }
      b2 = c;
    }
    null == b2 && (b2 = "");
    c = b2;
  }
  a._wrapperState = { initialValue: Sa$2(c) };
}
function ib$1(a, b2) {
  var c = Sa$2(b2.value), d = Sa$2(b2.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b2.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb$1(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
function kb$1(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb$1(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb$1(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var mb$1, nb$1 = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c, d, e);
    });
  } : a;
}(function(a, b2) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    mb$1 = mb$1 || document.createElement("div");
    mb$1.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb$1.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function ob$1(a, b2) {
  if (b2) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var pb$1 = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb$1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb$1).forEach(function(a) {
  qb$1.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    pb$1[b2] = pb$1[a];
  });
});
function rb$1(a, b2, c) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c || "number" !== typeof b2 || 0 === b2 || pb$1.hasOwnProperty(a) && pb$1[a] ? ("" + b2).trim() : b2 + "px";
}
function sb$1(a, b2) {
  a = a.style;
  for (var c in b2)
    if (b2.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb$1(c, b2[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub$1(a, b2) {
  if (b2) {
    if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p$2(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p$2(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$2(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p$2(62));
  }
}
function vb$1(a, b2) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb$1 = null;
function xb$1(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb$1 = null, zb$1 = null, Ab$1 = null;
function Bb$1(a) {
  if (a = Cb$1(a)) {
    if ("function" !== typeof yb$1)
      throw Error(p$2(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db$1(b2), yb$1(a.stateNode, a.type, b2));
  }
}
function Eb$1(a) {
  zb$1 ? Ab$1 ? Ab$1.push(a) : Ab$1 = [a] : zb$1 = a;
}
function Fb$1() {
  if (zb$1) {
    var a = zb$1, b2 = Ab$1;
    Ab$1 = zb$1 = null;
    Bb$1(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Bb$1(b2[a]);
  }
}
function Gb$1(a, b2) {
  return a(b2);
}
function Hb$1() {
}
var Ib$1 = false;
function Jb$1(a, b2, c) {
  if (Ib$1)
    return a(b2, c);
  Ib$1 = true;
  try {
    return Gb$1(a, b2, c);
  } finally {
    if (Ib$1 = false, null !== zb$1 || null !== Ab$1)
      Hb$1(), Fb$1();
  }
}
function Kb$1(a, b2) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db$1(c);
  if (null === d)
    return null;
  c = d[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p$2(231, b2, typeof c));
  return c;
}
var Lb$1 = false;
if (ia$2)
  try {
    var Mb$1 = {};
    Object.defineProperty(Mb$1, "passive", { get: function() {
      Lb$1 = true;
    } });
    window.addEventListener("test", Mb$1, Mb$1);
    window.removeEventListener("test", Mb$1, Mb$1);
  } catch (a) {
    Lb$1 = false;
  }
function Nb$1(a, b2, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob$1 = false, Pb$1 = null, Qb$1 = false, Rb$1 = null, Sb$1 = { onError: function(a) {
  Ob$1 = true;
  Pb$1 = a;
} };
function Tb$1(a, b2, c, d, e, f2, g, h, k2) {
  Ob$1 = false;
  Pb$1 = null;
  Nb$1.apply(Sb$1, arguments);
}
function Ub$1(a, b2, c, d, e, f2, g, h, k2) {
  Tb$1.apply(this, arguments);
  if (Ob$1) {
    if (Ob$1) {
      var l2 = Pb$1;
      Ob$1 = false;
      Pb$1 = null;
    } else
      throw Error(p$2(198));
    Qb$1 || (Qb$1 = true, Rb$1 = l2);
  }
}
function Vb$1(a) {
  var b2 = a, c = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 4098) && (c = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c : null;
}
function Wb$1(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb$1(a) {
  if (Vb$1(a) !== a)
    throw Error(p$2(188));
}
function Yb$1(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Vb$1(a);
    if (null === b2)
      throw Error(p$2(188));
    return b2 !== a ? null : a;
  }
  for (var c = a, d = b2; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return Xb$1(e), a;
        if (f2 === d)
          return Xb$1(e), b2;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p$2(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p$2(190));
  }
  if (3 !== c.tag)
    throw Error(p$2(188));
  return c.stateNode.current === c ? a : b2;
}
function Zb$1(a) {
  a = Yb$1(a);
  return null !== a ? $b$1(a) : null;
}
function $b$1(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b2 = $b$1(a);
    if (null !== b2)
      return b2;
    a = a.sibling;
  }
  return null;
}
var ac$2 = ca$2.unstable_scheduleCallback, bc$2 = ca$2.unstable_cancelCallback, cc$2 = ca$2.unstable_shouldYield, dc$2 = ca$2.unstable_requestPaint, B$2 = ca$2.unstable_now, ec$2 = ca$2.unstable_getCurrentPriorityLevel, fc$2 = ca$2.unstable_ImmediatePriority, gc$2 = ca$2.unstable_UserBlockingPriority, hc$2 = ca$2.unstable_NormalPriority, ic$2 = ca$2.unstable_LowPriority, jc$2 = ca$2.unstable_IdlePriority, kc$2 = null, lc$2 = null;
function mc$2(a) {
  if (lc$2 && "function" === typeof lc$2.onCommitFiberRoot)
    try {
      lc$2.onCommitFiberRoot(kc$2, a, void 0, 128 === (a.current.flags & 128));
    } catch (b2) {
    }
}
var oc$2 = Math.clz32 ? Math.clz32 : nc$2, pc$2 = Math.log, qc$2 = Math.LN2;
function nc$2(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc$2(a) / qc$2 | 0) | 0;
}
var rc$2 = 64, sc$2 = 4194304;
function tc$2(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc$2(a, b2) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc$2(h) : (f2 &= g, 0 !== f2 && (d = tc$2(f2)));
  } else
    g = c & ~e, 0 !== g ? d = tc$2(g) : 0 !== f2 && (d = tc$2(f2));
  if (0 === d)
    return 0;
  if (0 !== b2 && b2 !== d && 0 === (b2 & e) && (e = d & -d, f2 = b2 & -b2, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d & 4) && (d |= c & 16);
  b2 = a.entangledLanes;
  if (0 !== b2)
    for (a = a.entanglements, b2 &= d; 0 < b2; )
      c = 31 - oc$2(b2), e = 1 << c, d |= a[c], b2 &= ~e;
  return d;
}
function vc$2(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc$2(a, b2) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc$2(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d))
        e[g] = vc$2(h, b2);
    } else
      k2 <= b2 && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc$2(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc$2() {
  var a = rc$2;
  rc$2 <<= 1;
  0 === (rc$2 & 4194240) && (rc$2 = 64);
  return a;
}
function zc$2(a) {
  for (var b2 = [], c = 0; 31 > c; c++)
    b2.push(a);
  return b2;
}
function Ac$2(a, b2, c) {
  a.pendingLanes |= b2;
  536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - oc$2(b2);
  a[b2] = c;
}
function Bc$2(a, b2) {
  var c = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc$2(c), f2 = 1 << e;
    b2[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc$2(a, b2) {
  var c = a.entangledLanes |= b2;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc$2(c), e = 1 << d;
    e & b2 | a[d] & b2 && (a[d] |= b2);
    c &= ~e;
  }
}
var C$2 = 0;
function Dc$2(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec$2, Fc$2, Gc$2, Hc$2, Ic$2, Jc$2 = false, Kc$2 = [], Lc$2 = null, Mc$2 = null, Nc$2 = null, Oc$2 = /* @__PURE__ */ new Map(), Pc$2 = /* @__PURE__ */ new Map(), Qc$2 = [], Rc$2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc$2(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc$2 = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc$2 = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc$2 = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc$2.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc$2.delete(b2.pointerId);
  }
}
function Tc$2(a, b2, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b2, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b2 && (b2 = Cb$1(b2), null !== b2 && Fc$2(b2)), a;
  a.eventSystemFlags |= d;
  b2 = a.targetContainers;
  null !== e && -1 === b2.indexOf(e) && b2.push(e);
  return a;
}
function Uc$2(a, b2, c, d, e) {
  switch (b2) {
    case "focusin":
      return Lc$2 = Tc$2(Lc$2, a, b2, c, d, e), true;
    case "dragenter":
      return Mc$2 = Tc$2(Mc$2, a, b2, c, d, e), true;
    case "mouseover":
      return Nc$2 = Tc$2(Nc$2, a, b2, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc$2.set(f2, Tc$2(Oc$2.get(f2) || null, a, b2, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc$2.set(f2, Tc$2(Pc$2.get(f2) || null, a, b2, c, d, e)), true;
  }
  return false;
}
function Vc$2(a) {
  var b2 = Wc$2(a.target);
  if (null !== b2) {
    var c = Vb$1(b2);
    if (null !== c) {
      if (b2 = c.tag, 13 === b2) {
        if (b2 = Wb$1(c), null !== b2) {
          a.blockedOn = b2;
          Ic$2(a.priority, function() {
            Gc$2(c);
          });
          return;
        }
      } else if (3 === b2 && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc$2(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c = Yc$2(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb$1 = d;
      c.target.dispatchEvent(d);
      wb$1 = null;
    } else
      return b2 = Cb$1(c), null !== b2 && Fc$2(b2), a.blockedOn = c, false;
    b2.shift();
  }
  return true;
}
function Zc$2(a, b2, c) {
  Xc$2(a) && c.delete(b2);
}
function $c$2() {
  Jc$2 = false;
  null !== Lc$2 && Xc$2(Lc$2) && (Lc$2 = null);
  null !== Mc$2 && Xc$2(Mc$2) && (Mc$2 = null);
  null !== Nc$2 && Xc$2(Nc$2) && (Nc$2 = null);
  Oc$2.forEach(Zc$2);
  Pc$2.forEach(Zc$2);
}
function ad$1(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Jc$2 || (Jc$2 = true, ca$2.unstable_scheduleCallback(ca$2.unstable_NormalPriority, $c$2)));
}
function bd$1(a) {
  function b2(b3) {
    return ad$1(b3, a);
  }
  if (0 < Kc$2.length) {
    ad$1(Kc$2[0], a);
    for (var c = 1; c < Kc$2.length; c++) {
      var d = Kc$2[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc$2 && ad$1(Lc$2, a);
  null !== Mc$2 && ad$1(Mc$2, a);
  null !== Nc$2 && ad$1(Nc$2, a);
  Oc$2.forEach(b2);
  Pc$2.forEach(b2);
  for (c = 0; c < Qc$2.length; c++)
    d = Qc$2[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc$2.length && (c = Qc$2[0], null === c.blockedOn); )
    Vc$2(c), null === c.blockedOn && Qc$2.shift();
}
var cd$1 = ua$2.ReactCurrentBatchConfig, dd$1 = true;
function ed$1(a, b2, c, d) {
  var e = C$2, f2 = cd$1.transition;
  cd$1.transition = null;
  try {
    C$2 = 1, fd$1(a, b2, c, d);
  } finally {
    C$2 = e, cd$1.transition = f2;
  }
}
function gd$1(a, b2, c, d) {
  var e = C$2, f2 = cd$1.transition;
  cd$1.transition = null;
  try {
    C$2 = 4, fd$1(a, b2, c, d);
  } finally {
    C$2 = e, cd$1.transition = f2;
  }
}
function fd$1(a, b2, c, d) {
  if (dd$1) {
    var e = Yc$2(a, b2, c, d);
    if (null === e)
      hd$1(a, b2, d, id$1, c), Sc$2(a, d);
    else if (Uc$2(e, a, b2, c, d))
      d.stopPropagation();
    else if (Sc$2(a, d), b2 & 4 && -1 < Rc$2.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb$1(e);
        null !== f2 && Ec$2(f2);
        f2 = Yc$2(a, b2, c, d);
        null === f2 && hd$1(a, b2, d, id$1, c);
        if (f2 === e)
          break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else
      hd$1(a, b2, d, null, c);
  }
}
var id$1 = null;
function Yc$2(a, b2, c, d) {
  id$1 = null;
  a = xb$1(d);
  a = Wc$2(a);
  if (null !== a)
    if (b2 = Vb$1(a), null === b2)
      a = null;
    else if (c = b2.tag, 13 === c) {
      a = Wb$1(b2);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a = null;
    } else
      b2 !== a && (a = null);
  id$1 = a;
  return null;
}
function jd$1(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec$2()) {
        case fc$2:
          return 1;
        case gc$2:
          return 4;
        case hc$2:
        case ic$2:
          return 16;
        case jc$2:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd$1 = null, ld$1 = null, md$1 = null;
function nd$1() {
  if (md$1)
    return md$1;
  var a, b2 = ld$1, c = b2.length, d, e = "value" in kd$1 ? kd$1.value : kd$1.textContent, f2 = e.length;
  for (a = 0; a < c && b2[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b2[c - d] === e[f2 - d]; d++)
    ;
  return md$1 = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od$1(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd$1() {
  return true;
}
function qd$1() {
  return false;
}
function rd$1(a) {
  function b2(b3, d, e, f2, g) {
    this._reactName = b3;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b3 = a[c], this[c] = b3 ? b3(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd$1 : qd$1;
    this.isPropagationStopped = qd$1;
    return this;
  }
  A$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd$1);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd$1);
  }, persist: function() {
  }, isPersistent: pd$1 });
  return b2;
}
var sd$1 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td$1 = rd$1(sd$1), ud$1 = A$1({}, sd$1, { view: 0, detail: 0 }), vd$1 = rd$1(ud$1), wd$1, xd$1, yd$1, Ad$1 = A$1({}, ud$1, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd$1, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd$1 && (yd$1 && "mousemove" === a.type ? (wd$1 = a.screenX - yd$1.screenX, xd$1 = a.screenY - yd$1.screenY) : xd$1 = wd$1 = 0, yd$1 = a);
  return wd$1;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd$1;
} }), Bd$1 = rd$1(Ad$1), Cd$1 = A$1({}, Ad$1, { dataTransfer: 0 }), Dd$1 = rd$1(Cd$1), Ed$1 = A$1({}, ud$1, { relatedTarget: 0 }), Fd$1 = rd$1(Ed$1), Gd$1 = A$1({}, sd$1, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd$1 = rd$1(Gd$1), Id$1 = A$1({}, sd$1, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd$1 = rd$1(Id$1), Kd = A$1({}, sd$1, { data: 0 }), Ld = rd$1(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd$1() {
  return Pd;
}
var Qd = A$1({}, ud$1, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a.type ? (a = od$1(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd$1, charCode: function(a) {
  return "keypress" === a.type ? od$1(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od$1(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd$1(Qd), Sd = A$1({}, Ad$1, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd$1(Sd), Ud = A$1({}, ud$1, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd$1 }), Vd = rd$1(Ud), Wd = A$1({}, sd$1, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd$1(Wd), Yd = A$1({}, Ad$1, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd$1(Yd), $d = [9, 13, 27, 32], ae$1 = ia$2 && "CompositionEvent" in window, be$1 = null;
ia$2 && "documentMode" in document && (be$1 = document.documentMode);
var ce$1 = ia$2 && "TextEvent" in window && !be$1, de$1 = ia$2 && (!ae$1 || be$1 && 8 < be$1 && 11 >= be$1), ee$1 = String.fromCharCode(32), fe$1 = false;
function ge$1(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie$1 = false;
function je$1(a, b2) {
  switch (a) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe$1 = true;
      return ee$1;
    case "textInput":
      return a = b2.data, a === ee$1 && fe$1 ? null : a;
    default:
      return null;
  }
}
function ke$1(a, b2) {
  if (ie$1)
    return "compositionend" === a || !ae$1 && ge$1(a, b2) ? (a = nd$1(), md$1 = ld$1 = kd$1 = null, ie$1 = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$1 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me$1(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le$1[a.type] : "textarea" === b2 ? true : false;
}
function ne$1(a, b2, c, d) {
  Eb$1(d);
  b2 = oe$1(b2, "onChange");
  0 < b2.length && (c = new td$1("onChange", "change", null, c, d), a.push({ event: c, listeners: b2 }));
}
var pe$1 = null, qe$1 = null;
function re$1(a) {
  se$1(a, 0);
}
function te$1(a) {
  var b2 = ue$1(a);
  if (Wa$2(b2))
    return a;
}
function ve$1(a, b2) {
  if ("change" === a)
    return b2;
}
var we$1 = false;
if (ia$2) {
  var xe$1;
  if (ia$2) {
    var ye$1 = "oninput" in document;
    if (!ye$1) {
      var ze$1 = document.createElement("div");
      ze$1.setAttribute("oninput", "return;");
      ye$1 = "function" === typeof ze$1.oninput;
    }
    xe$1 = ye$1;
  } else
    xe$1 = false;
  we$1 = xe$1 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$1() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$1 = pe$1 = null);
}
function Be$1(a) {
  if ("value" === a.propertyName && te$1(qe$1)) {
    var b2 = [];
    ne$1(b2, qe$1, a, xb$1(a));
    Jb$1(re$1, b2);
  }
}
function Ce$1(a, b2, c) {
  "focusin" === a ? (Ae$1(), pe$1 = b2, qe$1 = c, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a && Ae$1();
}
function De$1(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te$1(qe$1);
}
function Ee$1(a, b2) {
  if ("click" === a)
    return te$1(b2);
}
function Fe$1(a, b2) {
  if ("input" === a || "change" === a)
    return te$1(b2);
}
function Ge$1(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He$1 = "function" === typeof Object.is ? Object.is : Ge$1;
function Ie$1(a, b2) {
  if (He$1(a, b2))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
    return false;
  var c = Object.keys(a), d = Object.keys(b2);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja$2.call(b2, e) || !He$1(a[e], b2[e]))
      return false;
  }
  return true;
}
function Je$1(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke$1(a, b2) {
  var c = Je$1(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b2 && d >= b2)
        return { node: c, offset: b2 - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je$1(c);
  }
}
function Le$1(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$1() {
  for (var a = window, b2 = Xa$2(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b2.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b2.contentWindow;
    else
      break;
    b2 = Xa$2(a.document);
  }
  return b2;
}
function Ne$1(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
function Oe$1(a) {
  var b2 = Me$1(), c = a.focusedElem, d = a.selectionRange;
  if (b2 !== c && c && c.ownerDocument && Le$1(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne$1(c)) {
      if (b2 = d.start, a = d.end, void 0 === a && (a = b2), "selectionStart" in c)
        c.selectionStart = b2, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b2 = c.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke$1(c, f2);
        var g = Ke$1(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b2), a.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b2.length; c++)
      a = b2[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe$1 = ia$2 && "documentMode" in document && 11 >= document.documentMode, Qe$1 = null, Re$1 = null, Se$1 = null, Te$1 = false;
function Ue$1(a, b2, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te$1 || null == Qe$1 || Qe$1 !== Xa$2(d) || (d = Qe$1, "selectionStart" in d && Ne$1(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se$1 && Ie$1(Se$1, d) || (Se$1 = d, d = oe$1(Re$1, "onSelect"), 0 < d.length && (b2 = new td$1("onSelect", "select", null, b2, c), a.push({ event: b2, listeners: d }), b2.target = Qe$1)));
}
function Ve$1(a, b2) {
  var c = {};
  c[a.toLowerCase()] = b2.toLowerCase();
  c["Webkit" + a] = "webkit" + b2;
  c["Moz" + a] = "moz" + b2;
  return c;
}
var We$1 = { animationend: Ve$1("Animation", "AnimationEnd"), animationiteration: Ve$1("Animation", "AnimationIteration"), animationstart: Ve$1("Animation", "AnimationStart"), transitionend: Ve$1("Transition", "TransitionEnd") }, Xe$1 = {}, Ye$1 = {};
ia$2 && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
function Ze$1(a) {
  if (Xe$1[a])
    return Xe$1[a];
  if (!We$1[a])
    return a;
  var b2 = We$1[a], c;
  for (c in b2)
    if (b2.hasOwnProperty(c) && c in Ye$1)
      return Xe$1[a] = b2[c];
  return a;
}
var $e$1 = Ze$1("animationend"), af = Ze$1("animationiteration"), bf = Ze$1("animationstart"), cf = Ze$1("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b2) {
  df.set(a, b2);
  fa$2(b2, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$1, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha$1("onMouseEnter", ["mouseout", "mouseover"]);
ha$1("onMouseLeave", ["mouseout", "mouseover"]);
ha$1("onPointerEnter", ["pointerout", "pointerover"]);
ha$1("onPointerLeave", ["pointerout", "pointerover"]);
fa$2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa$2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa$2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa$2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa$2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa$2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b2, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub$1(d, b2, void 0, a);
  a.currentTarget = null;
}
function se$1(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
    }
  }
  if (Qb$1)
    throw a = Rb$1, Qb$1 = false, Rb$1 = null, a;
}
function D$2(a, b2) {
  var c = b2[of];
  void 0 === c && (c = b2[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b2, a, 2, false), c.add(d));
}
function qf(a, b2, c) {
  var d = 0;
  b2 && (d |= 4);
  pf(c, a, d, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da$2.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
    });
    var b2 = 9 === a.nodeType ? a : a.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a, b2, c, d) {
  switch (jd$1(b2)) {
    case 1:
      var e = ed$1;
      break;
    case 4:
      e = gd$1;
      break;
    default:
      e = fd$1;
  }
  c = e.bind(null, b2, c, a);
  e = void 0;
  !Lb$1 || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e = true);
  d ? void 0 !== e ? a.addEventListener(b2, c, { capture: true, passive: e }) : a.addEventListener(b2, c, true) : void 0 !== e ? a.addEventListener(b2, c, { passive: e }) : a.addEventListener(b2, c, false);
}
function hd$1(a, b2, c, d, e) {
  var f2 = d;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = Wc$2(h);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb$1(function() {
    var d2 = f2, e2 = xb$1(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td$1, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od$1(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd$1;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd$1;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd$1;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd$1;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd$1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$1:
          case af:
          case bf:
            k3 = Hd$1;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd$1;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd$1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb$1(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb$1 && (n2 = c.relatedTarget || c.fromElement) && (Wc$2(n2) || n2[uf]))
          break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc$2(n2) : null, null !== n2 && (J2 = Vb$1(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd$1;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue$1(k3);
            u2 = null == n2 ? h2 : ue$1(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc$2(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue$1(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type)
          var na2 = ve$1;
        else if (me$1(h2))
          if (we$1)
            na2 = Fe$1;
          else {
            na2 = De$1;
            var xa2 = Ce$1;
          }
        else
          (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na2 = Ee$1);
        if (na2 && (na2 = na2(a, d2))) {
          ne$1(g2, na2, c, e2);
          break a;
        }
        xa2 && xa2(a, h2, d2);
        "focusout" === a && (xa2 = h2._wrapperState) && xa2.controlled && "number" === h2.type && cb$1(h2, "number", h2.value);
      }
      xa2 = d2 ? ue$1(d2) : window;
      switch (a) {
        case "focusin":
          if (me$1(xa2) || "true" === xa2.contentEditable)
            Qe$1 = xa2, Re$1 = d2, Se$1 = null;
          break;
        case "focusout":
          Se$1 = Re$1 = Qe$1 = null;
          break;
        case "mousedown":
          Te$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$1 = false;
          Ue$1(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe$1)
            break;
        case "keydown":
        case "keyup":
          Ue$1(g2, c, e2);
      }
      var $a2;
      if (ae$1)
        b: {
          switch (a) {
            case "compositionstart":
              var ba2 = "onCompositionStart";
              break b;
            case "compositionend":
              ba2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba2 = "onCompositionUpdate";
              break b;
          }
          ba2 = void 0;
        }
      else
        ie$1 ? ge$1(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
      ba2 && (de$1 && "ko" !== c.locale && (ie$1 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie$1 && ($a2 = nd$1()) : (kd$1 = e2, ld$1 = "value" in kd$1 ? kd$1.value : kd$1.textContent, ie$1 = true)), xa2 = oe$1(d2, ba2), 0 < xa2.length && (ba2 = new Ld(ba2, a, null, c, e2), g2.push({ event: ba2, listeners: xa2 }), $a2 ? ba2.data = $a2 : ($a2 = he$1(c), null !== $a2 && (ba2.data = $a2))));
      if ($a2 = ce$1 ? je$1(a, c) : ke$1(a, c))
        d2 = oe$1(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a2);
    }
    se$1(g2, b2);
  });
}
function tf(a, b2, c) {
  return { instance: a, listener: b2, currentTarget: c };
}
function oe$1(a, b2) {
  for (var c = b2 + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb$1(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb$1(a, b2), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b2, c, d, e) {
  for (var f2 = b2._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb$1(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb$1(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b2, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b2, c) {
  b2 = zf(b2);
  if (zf(a) !== b2 && c)
    throw Error(p$2(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b2) {
  return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b2) {
  var c = b2, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd$1(b2);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd$1(b2);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b2)
          return a;
        b2--;
      } else
        "/$" === c && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc$2(a) {
  var b2 = a[Of];
  if (b2)
    return b2;
  for (var c = a.parentNode; c; ) {
    if (b2 = c[uf] || c[Of]) {
      c = b2.alternate;
      if (null !== b2.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b2;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb$1(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue$1(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p$2(33));
}
function Db$1(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E$1(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$2(a, b2) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b2;
}
var Vf = {}, H$2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b2) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b2[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E$1(Wf);
  E$1(H$2);
}
function ag(a, b2, c) {
  if (H$2.current !== Vf)
    throw Error(p$2(168));
  G$2(H$2, b2);
  G$2(Wf, c);
}
function bg(a, b2, c) {
  var d = a.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b2))
      throw Error(p$2(108, Ra$2(a) || "Unknown", e));
  return A$1({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$2.current;
  G$2(H$2, a);
  G$2(Wf, Wf.current);
  return true;
}
function dg(a, b2, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p$2(169));
  c ? (a = bg(a, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a, E$1(Wf), E$1(H$2), G$2(H$2, a)) : E$1(Wf);
  G$2(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b2 = C$2;
    try {
      var c = eg;
      for (C$2 = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac$2(fc$2, jg), e;
    } finally {
      C$2 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b2;
}
function ug(a, b2, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc$2(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc$2(b2) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc$2(b2) + e | c << e | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$1 = false, zg = null;
function Ag(a, b2) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b2;
  c.return = a;
  b2 = a.deletions;
  null === b2 ? (a.deletions = [c], a.flags |= 16) : b2.push(c);
}
function Cg(a, b2) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b2 = 1 !== b2.nodeType || c.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b2, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I$1) {
    var b2 = yg;
    if (b2) {
      var c = b2;
      if (!Cg(a, b2)) {
        if (Dg(a))
          throw Error(p$2(418));
        b2 = Lf(c.nextSibling);
        var d = xg;
        b2 && Cg(a, b2) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I$1 = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p$2(418));
      a.flags = a.flags & -4097 | 2;
      I$1 = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I$1)
    return Fg(a), I$1 = true, false;
  var b2;
  (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a))
      throw Hg(), Error(p$2(418));
    for (; b2; )
      Ag(a, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p$2(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b2) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b2++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$1 = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua$2.ReactCurrentBatchConfig;
function Lg(a, b2) {
  if (a && a.defaultProps) {
    b2 = A$1({}, b2);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b2[c] && (b2[c] = a[c]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b2 = Mg.current;
  E$1(Mg);
  a._currentValue = b2;
}
function Sg(a, b2, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b2) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b2 = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$2(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b2;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b2, c, d) {
  var e = b2.interleaved;
  null === e ? (c.next = c, Xg(b2)) : (c.next = e.next, e.next = c);
  b2.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b2) {
  a.lanes |= b2;
  var c = a.alternate;
  null !== c && (c.lanes |= b2);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b2, c = a.alternate, null !== c && (c.childLanes |= b2), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah$1(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh$1(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch$1(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh$1(a, b2, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K$2 & 2)) {
    var e = d.pending;
    null === e ? b2.next = b2 : (b2.next = e.next, e.next = b2);
    d.pending = b2;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b2.next = b2, Xg(d)) : (b2.next = e.next, e.next = b2);
  d.interleaved = b2;
  return Zg(a, c);
}
function eh$1(a, b2, c) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c & 4194240))) {
    var d = b2.lanes;
    d &= a.pendingLanes;
    c |= d;
    b2.lanes = c;
    Cc$2(a, c);
  }
}
function fh$1(a, b2) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b2 : f2 = f2.next = b2;
    } else
      e = f2 = b2;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b2 : a.next = b2;
  c.lastBaseUpdate = b2;
}
function gh$1(a, b2, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b2;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A$1({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h)
        if (h = e.shared.pending, null === h)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b2 = e.shared.interleaved;
    if (null !== b2) {
      e = b2;
      do
        g |= e.lane, e = e.next;
      while (e !== b2);
    } else
      null === f2 && (e.shared.lanes = 0);
    hh$1 |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih$1(a, b2, c) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a)
    for (b2 = 0; b2 < a.length; b2++) {
      var d = a[b2], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(p$2(191, e));
        e.call(d);
      }
    }
}
var jh$1 = new aa$1.Component().refs;
function kh$1(a, b2, c, d) {
  b2 = a.memoizedState;
  c = c(d, b2);
  c = null === c || void 0 === c ? b2 : A$1({}, b2, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb$1(a) === a : false;
}, enqueueSetState: function(a, b2, c) {
  a = a._reactInternals;
  var d = L$2(), e = lh$1(a), f2 = ch$1(d, e);
  f2.payload = b2;
  void 0 !== c && null !== c && (f2.callback = c);
  b2 = dh$1(a, f2, e);
  null !== b2 && (mh$1(b2, a, e, d), eh$1(b2, a, e));
}, enqueueReplaceState: function(a, b2, c) {
  a = a._reactInternals;
  var d = L$2(), e = lh$1(a), f2 = ch$1(d, e);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c && null !== c && (f2.callback = c);
  b2 = dh$1(a, f2, e);
  null !== b2 && (mh$1(b2, a, e, d), eh$1(b2, a, e));
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c = L$2(), d = lh$1(a), e = ch$1(c, d);
  e.tag = 2;
  void 0 !== b2 && null !== b2 && (e.callback = b2);
  b2 = dh$1(a, e, d);
  null !== b2 && (mh$1(b2, a, d, c), eh$1(b2, a, d));
} };
function oh$1(a, b2, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c, d) || !Ie$1(e, f2) : true;
}
function ph$1(a, b2, c) {
  var d = false, e = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b2) ? Xf : H$2.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b2 = new b2(c, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a.stateNode = b2;
  b2._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh$1(a, b2, c, d) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c, d);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c, d);
  b2.state !== a && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh$1(a, b2, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh$1;
  ah$1(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H$2.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh$1(a, b2, f2, c), e.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b2 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b2 !== e.state && nh.enqueueReplaceState(e, e.state, null), gh$1(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh$1(a, b2, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p$2(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p$2(147, a));
      var e = d, f2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = e.refs;
        b3 === jh$1 && (b3 = e.refs = {});
        null === a2 ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a)
      throw Error(p$2(284));
    if (!c._owner)
      throw Error(p$2(290, a));
  }
  return a;
}
function th$1(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p$2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function uh$1(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function vh$1(a) {
  function b2(b3, c2) {
    if (a) {
      var d2 = b3.deletions;
      null === d2 ? (b3.deletions = [c2], b3.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b2(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e(a2, b3) {
    a2 = wh$1(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c2, d2) {
    b3.index = d2;
    if (!a)
      return b3.flags |= 1048576, c2;
    d2 = b3.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b3.flags |= 2, c2) : d2;
    b3.flags |= 2;
    return c2;
  }
  function g(b3) {
    a && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h(a2, b3, c2, d2) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh$1(c2, a2.mode, d2), b3.return = a2, b3;
    b3 = e(b3, c2);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya$2)
      return m2(a2, b3, c2.props.children, d2, c2.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha$2 && uh$1(f3) === b3.type))
      return d2 = e(b3, c2.props), d2.ref = sh$1(a2, b3, c2), d2.return = a2, d2;
    d2 = yh$1(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh$1(a2, b3, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b3, c2, d2) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c2.containerInfo || b3.stateNode.implementation !== c2.implementation)
      return b3 = zh$1(c2, a2.mode, d2), b3.return = a2, b3;
    b3 = e(b3, c2.children || []);
    b3.return = a2;
    return b3;
  }
  function m2(a2, b3, c2, d2, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah$1(c2, a2.mode, d2, f3), b3.return = a2, b3;
    b3 = e(b3, c2);
    b3.return = a2;
    return b3;
  }
  function q2(a2, b3, c2) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh$1("" + b3, a2.mode, c2), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va$2:
          return c2 = yh$1(b3.type, b3.key, b3.props, null, a2.mode, c2), c2.ref = sh$1(a2, null, b3), c2.return = a2, c2;
        case wa$2:
          return b3 = zh$1(b3, a2.mode, c2), b3.return = a2, b3;
        case Ha$2:
          var d2 = b3._init;
          return q2(a2, d2(b3._payload), c2);
      }
      if (eb$1(b3) || Ka$2(b3))
        return b3 = Ah$1(b3, a2.mode, c2, null), b3.return = a2, b3;
      th$1(a2, b3);
    }
    return null;
  }
  function r2(a2, b3, c2, d2) {
    var e2 = null !== b3 ? b3.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b3, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va$2:
          return c2.key === e2 ? k2(a2, b3, c2, d2) : null;
        case wa$2:
          return c2.key === e2 ? l2(a2, b3, c2, d2) : null;
        case Ha$2:
          return e2 = c2._init, r2(
            a2,
            b3,
            e2(c2._payload),
            d2
          );
      }
      if (eb$1(c2) || Ka$2(c2))
        return null !== e2 ? null : m2(a2, b3, c2, d2, null);
      th$1(a2, c2);
    }
    return null;
  }
  function y2(a2, b3, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b3, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va$2:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b3, a2, d2, e2);
        case wa$2:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b3, a2, d2, e2);
        case Ha$2:
          var f3 = d2._init;
          return y2(a2, b3, c2, f3(d2._payload), e2);
      }
      if (eb$1(d2) || Ka$2(d2))
        return a2 = a2.get(c2) || null, m2(b3, a2, d2, e2, null);
      th$1(b3, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b2(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I$1 && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$1 && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b2(e2, a2);
    });
    I$1 && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka$2(h2);
    if ("function" !== typeof l3)
      throw Error(p$2(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(p$2(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b2(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e2,
        m3
      ), I$1 && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$1 && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b2(e2, a2);
    });
    I$1 && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya$2 && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va$2:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya$2) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha$2 && uh$1(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = sh$1(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya$2 ? (d2 = Ah$1(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = yh$1(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = sh$1(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa$2:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b2(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh$1(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha$2:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb$1(f3))
        return n2(a2, d2, f3, h2);
      if (Ka$2(f3))
        return t2(a2, d2, f3, h2);
      th$1(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh$1(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh$1 = vh$1(true), Ch$1 = vh$1(false), Dh$1 = {}, Eh$1 = Uf(Dh$1), Fh$1 = Uf(Dh$1), Gh$1 = Uf(Dh$1);
function Hh$1(a) {
  if (a === Dh$1)
    throw Error(p$2(174));
  return a;
}
function Ih$1(a, b2) {
  G$2(Gh$1, b2);
  G$2(Fh$1, a);
  G$2(Eh$1, Dh$1);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb$1(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb$1(b2, a);
  }
  E$1(Eh$1);
  G$2(Eh$1, b2);
}
function Jh$1() {
  E$1(Eh$1);
  E$1(Fh$1);
  E$1(Gh$1);
}
function Kh$1(a) {
  Hh$1(Gh$1.current);
  var b2 = Hh$1(Eh$1.current);
  var c = lb$1(b2, a.type);
  b2 !== c && (G$2(Fh$1, a), G$2(Eh$1, c));
}
function Lh$1(a) {
  Fh$1.current === a && (E$1(Eh$1), E$1(Fh$1));
}
var M$2 = Uf(0);
function Mh$1(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c = b2.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh$1 = [];
function Oh$1() {
  for (var a = 0; a < Nh$1.length; a++)
    Nh$1[a]._workInProgressVersionPrimary = null;
  Nh$1.length = 0;
}
var Ph$1 = ua$2.ReactCurrentDispatcher, Qh$1 = ua$2.ReactCurrentBatchConfig, Rh$1 = 0, N$2 = null, O$2 = null, P$2 = null, Sh$1 = false, Th$1 = false, Uh$1 = 0, Vh$1 = 0;
function Q$2() {
  throw Error(p$2(321));
}
function Wh$1(a, b2) {
  if (null === b2)
    return false;
  for (var c = 0; c < b2.length && c < a.length; c++)
    if (!He$1(a[c], b2[c]))
      return false;
  return true;
}
function Xh$1(a, b2, c, d, e, f2) {
  Rh$1 = f2;
  N$2 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph$1.current = null === a || null === a.memoizedState ? Yh$1 : Zh$1;
  a = c(d, e);
  if (Th$1) {
    f2 = 0;
    do {
      Th$1 = false;
      Uh$1 = 0;
      if (25 <= f2)
        throw Error(p$2(301));
      f2 += 1;
      P$2 = O$2 = null;
      b2.updateQueue = null;
      Ph$1.current = $h$1;
      a = c(d, e);
    } while (Th$1);
  }
  Ph$1.current = ai$1;
  b2 = null !== O$2 && null !== O$2.next;
  Rh$1 = 0;
  P$2 = O$2 = N$2 = null;
  Sh$1 = false;
  if (b2)
    throw Error(p$2(300));
  return a;
}
function bi$1() {
  var a = 0 !== Uh$1;
  Uh$1 = 0;
  return a;
}
function ci$1() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P$2 ? N$2.memoizedState = P$2 = a : P$2 = P$2.next = a;
  return P$2;
}
function di$1() {
  if (null === O$2) {
    var a = N$2.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O$2.next;
  var b2 = null === P$2 ? N$2.memoizedState : P$2.next;
  if (null !== b2)
    P$2 = b2, O$2 = a;
  else {
    if (null === a)
      throw Error(p$2(310));
    O$2 = a;
    a = { memoizedState: O$2.memoizedState, baseState: O$2.baseState, baseQueue: O$2.baseQueue, queue: O$2.queue, next: null };
    null === P$2 ? N$2.memoizedState = P$2 = a : P$2 = P$2.next = a;
  }
  return P$2;
}
function ei$1(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function fi$1(a) {
  var b2 = di$1(), c = b2.queue;
  if (null === c)
    throw Error(p$2(311));
  c.lastRenderedReducer = a;
  var d = O$2, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh$1 & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        N$2.lanes |= m2;
        hh$1 |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He$1(d, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d;
    b2.baseState = g;
    b2.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, N$2.lanes |= f2, hh$1 |= f2, e = e.next;
    while (e !== a);
  } else
    null === e && (c.lanes = 0);
  return [b2.memoizedState, c.dispatch];
}
function gi$1(a) {
  var b2 = di$1(), c = b2.queue;
  if (null === c)
    throw Error(p$2(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b2.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He$1(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi$1() {
}
function ii$1(a, b2) {
  var c = N$2, d = di$1(), e = b2(), f2 = !He$1(d.memoizedState, e);
  f2 && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji$1(ki$1.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b2 || f2 || null !== P$2 && P$2.memoizedState.tag & 1) {
    c.flags |= 2048;
    li$1(9, mi$1.bind(null, c, d, e, b2), void 0, null);
    if (null === R$1)
      throw Error(p$2(349));
    0 !== (Rh$1 & 30) || ni$1(c, b2, e);
  }
  return e;
}
function ni$1(a, b2, c) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c };
  b2 = N$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$2.updateQueue = b2, b2.stores = [a]) : (c = b2.stores, null === c ? b2.stores = [a] : c.push(a));
}
function mi$1(a, b2, c, d) {
  b2.value = c;
  b2.getSnapshot = d;
  oi$1(b2) && pi$1(a);
}
function ki$1(a, b2, c) {
  return c(function() {
    oi$1(b2) && pi$1(a);
  });
}
function oi$1(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c = b2();
    return !He$1(a, c);
  } catch (d) {
    return true;
  }
}
function pi$1(a) {
  var b2 = Zg(a, 1);
  null !== b2 && mh$1(b2, a, 1, -1);
}
function qi$1(a) {
  var b2 = ci$1();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei$1, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ri$1.bind(null, N$2, a);
  return [b2.memoizedState, a];
}
function li$1(a, b2, c, d) {
  a = { tag: a, create: b2, destroy: c, deps: d, next: null };
  b2 = N$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$2.updateQueue = b2, b2.lastEffect = a.next = a) : (c = b2.lastEffect, null === c ? b2.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b2.lastEffect = a));
  return a;
}
function si$1() {
  return di$1().memoizedState;
}
function ti$1(a, b2, c, d) {
  var e = ci$1();
  N$2.flags |= a;
  e.memoizedState = li$1(1 | b2, c, void 0, void 0 === d ? null : d);
}
function ui$1(a, b2, c, d) {
  var e = di$1();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O$2) {
    var g = O$2.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh$1(d, g.deps)) {
      e.memoizedState = li$1(b2, c, f2, d);
      return;
    }
  }
  N$2.flags |= a;
  e.memoizedState = li$1(1 | b2, c, f2, d);
}
function vi$1(a, b2) {
  return ti$1(8390656, 8, a, b2);
}
function ji$1(a, b2) {
  return ui$1(2048, 8, a, b2);
}
function wi$1(a, b2) {
  return ui$1(4, 2, a, b2);
}
function xi$1(a, b2) {
  return ui$1(4, 4, a, b2);
}
function yi$1(a, b2) {
  if ("function" === typeof b2)
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function zi$1(a, b2, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui$1(4, 4, yi$1.bind(null, b2, a), c);
}
function Ai$1() {
}
function Bi$1(a, b2) {
  var c = di$1();
  b2 = void 0 === b2 ? null : b2;
  var d = c.memoizedState;
  if (null !== d && null !== b2 && Wh$1(b2, d[1]))
    return d[0];
  c.memoizedState = [a, b2];
  return a;
}
function Ci$1(a, b2) {
  var c = di$1();
  b2 = void 0 === b2 ? null : b2;
  var d = c.memoizedState;
  if (null !== d && null !== b2 && Wh$1(b2, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b2];
  return a;
}
function Di$1(a, b2, c) {
  if (0 === (Rh$1 & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He$1(c, b2) || (c = yc$2(), N$2.lanes |= c, hh$1 |= c, a.baseState = true);
  return b2;
}
function Ei$1(a, b2) {
  var c = C$2;
  C$2 = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh$1.transition;
  Qh$1.transition = {};
  try {
    a(false), b2();
  } finally {
    C$2 = c, Qh$1.transition = d;
  }
}
function Fi$1() {
  return di$1().memoizedState;
}
function Gi$1(a, b2, c) {
  var d = lh$1(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi$1(a))
    Ii$1(b2, c);
  else if (c = Yg(a, b2, c, d), null !== c) {
    var e = L$2();
    mh$1(c, a, d, e);
    Ji$1(c, b2, d);
  }
}
function ri$1(a, b2, c) {
  var d = lh$1(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi$1(a))
    Ii$1(b2, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g = b2.lastRenderedState, h = f2(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He$1(h, g)) {
          var k2 = b2.interleaved;
          null === k2 ? (e.next = e, Xg(b2)) : (e.next = k2.next, k2.next = e);
          b2.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b2, e, d);
    null !== c && (e = L$2(), mh$1(c, a, d, e), Ji$1(c, b2, d));
  }
}
function Hi$1(a) {
  var b2 = a.alternate;
  return a === N$2 || null !== b2 && b2 === N$2;
}
function Ii$1(a, b2) {
  Th$1 = Sh$1 = true;
  var c = a.pending;
  null === c ? b2.next = b2 : (b2.next = c.next, c.next = b2);
  a.pending = b2;
}
function Ji$1(a, b2, c) {
  if (0 !== (c & 4194240)) {
    var d = b2.lanes;
    d &= a.pendingLanes;
    c |= d;
    b2.lanes = c;
    Cc$2(a, c);
  }
}
var ai$1 = { readContext: Vg, useCallback: Q$2, useContext: Q$2, useEffect: Q$2, useImperativeHandle: Q$2, useInsertionEffect: Q$2, useLayoutEffect: Q$2, useMemo: Q$2, useReducer: Q$2, useRef: Q$2, useState: Q$2, useDebugValue: Q$2, useDeferredValue: Q$2, useTransition: Q$2, useMutableSource: Q$2, useSyncExternalStore: Q$2, useId: Q$2, unstable_isNewReconciler: false }, Yh$1 = { readContext: Vg, useCallback: function(a, b2) {
  ci$1().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: Vg, useEffect: vi$1, useImperativeHandle: function(a, b2, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti$1(
    4194308,
    4,
    yi$1.bind(null, b2, a),
    c
  );
}, useLayoutEffect: function(a, b2) {
  return ti$1(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return ti$1(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c = ci$1();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c) {
  var d = ci$1();
  b2 = void 0 !== c ? c(b2) : b2;
  d.memoizedState = d.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d.queue = a;
  a = a.dispatch = Gi$1.bind(null, N$2, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b2 = ci$1();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: qi$1, useDebugValue: Ai$1, useDeferredValue: function(a) {
  return ci$1().memoizedState = a;
}, useTransition: function() {
  var a = qi$1(false), b2 = a[0];
  a = Ei$1.bind(null, a[1]);
  ci$1().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c) {
  var d = N$2, e = ci$1();
  if (I$1) {
    if (void 0 === c)
      throw Error(p$2(407));
    c = c();
  } else {
    c = b2();
    if (null === R$1)
      throw Error(p$2(349));
    0 !== (Rh$1 & 30) || ni$1(d, b2, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b2 };
  e.queue = f2;
  vi$1(ki$1.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li$1(9, mi$1.bind(null, d, f2, c, b2), void 0, null);
  return c;
}, useId: function() {
  var a = ci$1(), b2 = R$1.identifierPrefix;
  if (I$1) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc$2(d) - 1)).toString(32) + c;
    b2 = ":" + b2 + "R" + c;
    c = Uh$1++;
    0 < c && (b2 += "H" + c.toString(32));
    b2 += ":";
  } else
    c = Vh$1++, b2 = ":" + b2 + "r" + c.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh$1 = {
  readContext: Vg,
  useCallback: Bi$1,
  useContext: Vg,
  useEffect: ji$1,
  useImperativeHandle: zi$1,
  useInsertionEffect: wi$1,
  useLayoutEffect: xi$1,
  useMemo: Ci$1,
  useReducer: fi$1,
  useRef: si$1,
  useState: function() {
    return fi$1(ei$1);
  },
  useDebugValue: Ai$1,
  useDeferredValue: function(a) {
    var b2 = di$1();
    return Di$1(b2, O$2.memoizedState, a);
  },
  useTransition: function() {
    var a = fi$1(ei$1)[0], b2 = di$1().memoizedState;
    return [a, b2];
  },
  useMutableSource: hi$1,
  useSyncExternalStore: ii$1,
  useId: Fi$1,
  unstable_isNewReconciler: false
}, $h$1 = { readContext: Vg, useCallback: Bi$1, useContext: Vg, useEffect: ji$1, useImperativeHandle: zi$1, useInsertionEffect: wi$1, useLayoutEffect: xi$1, useMemo: Ci$1, useReducer: gi$1, useRef: si$1, useState: function() {
  return gi$1(ei$1);
}, useDebugValue: Ai$1, useDeferredValue: function(a) {
  var b2 = di$1();
  return null === O$2 ? b2.memoizedState = a : Di$1(b2, O$2.memoizedState, a);
}, useTransition: function() {
  var a = gi$1(ei$1)[0], b2 = di$1().memoizedState;
  return [a, b2];
}, useMutableSource: hi$1, useSyncExternalStore: ii$1, useId: Fi$1, unstable_isNewReconciler: false };
function Ki$1(a, b2) {
  try {
    var c = "", d = b2;
    do
      c += Pa$2(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e, digest: null };
}
function Li$1(a, b2, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b2 ? b2 : null };
}
function Mi$1(a, b2) {
  try {
    console.error(b2.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni$1 = "function" === typeof WeakMap ? WeakMap : Map;
function Oi$1(a, b2, c) {
  c = ch$1(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b2.value;
  c.callback = function() {
    Pi$1 || (Pi$1 = true, Qi$1 = d);
    Mi$1(a, b2);
  };
  return c;
}
function Ri$1(a, b2, c) {
  c = ch$1(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b2.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi$1(a, b2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi$1(a, b2);
    "function" !== typeof d && (null === Si$1 ? Si$1 = /* @__PURE__ */ new Set([this]) : Si$1.add(this));
    var c2 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti$1(a, b2, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni$1();
    var e = /* @__PURE__ */ new Set();
    d.set(b2, e);
  } else
    e = d.get(b2), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b2, e));
  e.has(c) || (e.add(c), a = Ui$1.bind(null, a, b2, c), b2.then(a, a));
}
function Vi$1(a) {
  do {
    var b2;
    if (b2 = 13 === a.tag)
      b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi$1(a, b2, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b2 = ch$1(-1, 1), b2.tag = 2, dh$1(c, b2, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi$1 = ua$2.ReactCurrentOwner, Ug = false;
function Yi$1(a, b2, c, d) {
  b2.child = null === a ? Ch$1(b2, null, c, d) : Bh$1(b2, a.child, c, d);
}
function Zi$1(a, b2, c, d, e) {
  c = c.render;
  var f2 = b2.ref;
  Tg(b2, e);
  d = Xh$1(a, b2, c, d, f2, e);
  c = bi$1();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, $i$1(a, b2, e);
  I$1 && c && vg(b2);
  b2.flags |= 1;
  Yi$1(a, b2, d, e);
  return b2.child;
}
function aj(a, b2, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a, b2, f2, d, e);
    a = yh$1(c.type, null, d, b2, b2.mode, e);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie$1;
    if (c(g, d) && a.ref === b2.ref)
      return $i$1(a, b2, e);
  }
  b2.flags |= 1;
  a = wh$1(f2, d);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function cj(a, b2, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie$1(f2, d) && a.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d = f2, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a.lanes, $i$1(a, b2, e);
  }
  return dj(a, b2, c, d, e);
}
function ej(a, b2, c) {
  var d = b2.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$2(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G$2(fj, gj), gj |= a, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G$2(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b2.memoizedState = null) : d = c, G$2(fj, gj), gj |= d;
  Yi$1(a, b2, e, c);
  return b2.child;
}
function hj(a, b2) {
  var c = b2.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a, b2, c, d, e) {
  var f2 = Zf(c) ? Xf : H$2.current;
  f2 = Yf(b2, f2);
  Tg(b2, e);
  c = Xh$1(a, b2, c, d, f2, e);
  d = bi$1();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, $i$1(a, b2, e);
  I$1 && d && vg(b2);
  b2.flags |= 1;
  Yi$1(a, b2, c, e);
  return b2.child;
}
function ij(a, b2, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e);
  if (null === b2.stateNode)
    jj(a, b2), ph$1(b2, c, d), rh$1(b2, c, d, e), d = true;
  else if (null === a) {
    var g = b2.stateNode, h = b2.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H$2.current, l2 = Yf(b2, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && qh$1(b2, g, d, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g.state = r2;
    gh$1(b2, d, g, e);
    k2 = b2.memoizedState;
    h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh$1(b2, c, m2, d), k2 = b2.memoizedState), (h = $g || oh$1(b2, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), d = false);
  } else {
    g = b2.stateNode;
    bh$1(a, b2);
    h = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h : Lg(b2.type, h);
    g.props = l2;
    q2 = b2.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H$2.current, k2 = Yf(b2, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh$1(b2, g, d, k2);
    $g = false;
    r2 = b2.memoizedState;
    g.state = r2;
    gh$1(b2, d, g, e);
    var n2 = b2.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh$1(b2, c, y2, d), n2 = b2.memoizedState), (l2 = $g || oh$1(b2, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b2.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d = false);
  }
  return kj(a, b2, c, d, f2, e);
}
function kj(a, b2, c, d, e, f2) {
  hj(a, b2);
  var g = 0 !== (b2.flags & 128);
  if (!d && !g)
    return e && dg(b2, c, false), $i$1(a, b2, f2);
  d = b2.stateNode;
  Xi$1.current = b2;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b2.flags |= 1;
  null !== a && g ? (b2.child = Bh$1(b2, a.child, null, f2), b2.child = Bh$1(b2, null, h, f2)) : Yi$1(a, b2, h, f2);
  b2.memoizedState = d.state;
  e && dg(b2, c, true);
  return b2.child;
}
function lj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
  Ih$1(a, b2.containerInfo);
}
function mj(a, b2, c, d, e) {
  Ig();
  Jg(e);
  b2.flags |= 256;
  Yi$1(a, b2, c, d);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b2, c) {
  var d = b2.pendingProps, e = M$2.current, f2 = false, g = 0 !== (b2.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h)
    f2 = true, b2.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e |= 1;
  G$2(M$2, e & 1);
  if (null === a) {
    Eg(b2);
    a = b2.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b2.mode, f2 = b2.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah$1(a, d, c, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = oj(c), b2.memoizedState = nj, a) : rj(b2, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h))
    return sj(a, b2, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b2.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b2.child !== e ? (d = b2.child, d.childLanes = 0, d.pendingProps = k2, b2.deletions = null) : (d = wh$1(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = wh$1(h, f2) : (f2 = Ah$1(f2, g, c, null), f2.flags |= 2);
    f2.return = b2;
    d.return = b2;
    d.sibling = f2;
    b2.child = d;
    d = f2;
    f2 = b2.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b2.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh$1(f2, { mode: "visible", children: d.children });
  0 === (b2.mode & 1) && (d.lanes = c);
  d.return = b2;
  d.sibling = null;
  null !== a && (c = b2.deletions, null === c ? (b2.deletions = [a], b2.flags |= 16) : c.push(a));
  b2.child = d;
  b2.memoizedState = null;
  return d;
}
function rj(a, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function tj(a, b2, c, d) {
  null !== d && Jg(d);
  Bh$1(b2, a.child, null, c);
  a = rj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function sj(a, b2, c, d, e, f2, g) {
  if (c) {
    if (b2.flags & 256)
      return b2.flags &= -257, d = Li$1(Error(p$2(422))), tj(a, b2, g, d);
    if (null !== b2.memoizedState)
      return b2.child = a.child, b2.flags |= 128, null;
    f2 = d.fallback;
    e = b2.mode;
    d = qj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Ah$1(f2, e, g, null);
    f2.flags |= 2;
    d.return = b2;
    f2.return = b2;
    d.sibling = f2;
    b2.child = d;
    0 !== (b2.mode & 1) && Bh$1(b2, a.child, null, g);
    b2.child.memoizedState = oj(g);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a, b2, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f2 = Error(p$2(419));
    d = Li$1(f2, d, void 0);
    return tj(a, b2, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (Ug || h) {
    d = R$1;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh$1(d, a, e, -1));
    }
    uj();
    d = Li$1(Error(p$2(421)));
    return tj(a, b2, g, d);
  }
  if ("$?" === e.data)
    return b2.flags |= 128, b2.child = a.child, b2 = vj.bind(null, a), e._reactRetry = b2, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b2;
  I$1 = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
  b2 = rj(b2, d.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a, b2, c) {
  a.lanes |= b2;
  var d = a.alternate;
  null !== d && (d.lanes |= b2);
  Sg(a.return, b2, c);
}
function xj(a, b2, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function yj(a, b2, c) {
  var d = b2.pendingProps, e = d.revealOrder, f2 = d.tail;
  Yi$1(a, b2, d.children, c);
  d = M$2.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b2.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b2);
          else if (19 === a.tag)
            wj(a, c, b2);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G$2(M$2, d);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b2.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === Mh$1(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b2.child, b2.child = null) : (e = c.sibling, c.sibling = null);
        xj(b2, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b2.child;
        for (b2.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Mh$1(a)) {
            b2.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b2, true, c, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a, b2) {
  0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i$1(a, b2, c) {
  null !== a && (b2.dependencies = a.dependencies);
  hh$1 |= b2.lanes;
  if (0 === (c & b2.childLanes))
    return null;
  if (null !== a && b2.child !== a.child)
    throw Error(p$2(153));
  if (null !== b2.child) {
    a = b2.child;
    c = wh$1(a, a.pendingProps);
    b2.child = c;
    for (c.return = b2; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh$1(a, a.pendingProps), c.return = b2;
    c.sibling = null;
  }
  return b2.child;
}
function zj(a, b2, c) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh$1(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih$1(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d = b2.type._context, e = b2.memoizedProps.value;
      G$2(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b2.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G$2(M$2, M$2.current & 1), b2.flags |= 128, null;
        if (0 !== (c & b2.child.childLanes))
          return pj(a, b2, c);
        G$2(M$2, M$2.current & 1);
        a = $i$1(a, b2, c);
        return null !== a ? a.sibling : null;
      }
      G$2(M$2, M$2.current & 1);
      break;
    case 19:
      d = 0 !== (c & b2.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b2, c);
        b2.flags |= 128;
      }
      e = b2.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G$2(M$2, M$2.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a, b2, c);
  }
  return $i$1(a, b2, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b2) {
  for (var c = b2.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b2)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b2)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b2, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b2.stateNode;
    Hh$1(Eh$1.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya$2(a, e);
        d = Ya$2(a, d);
        f2 = [];
        break;
      case "select":
        e = A$1({}, e, { value: void 0 });
        d = A$1({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb$1(a, e);
        d = gb$1(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub$1(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea$2.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
        if ("style" === l2)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea$2.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$2("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a, b2, c, d) {
  c !== d && (b2.flags |= 4);
};
function Ej(a, b2) {
  if (!I$1)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c = null; null !== b2; )
          null !== b2.alternate && (c = b2), b2 = b2.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S$2(a) {
  var b2 = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b2)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b2;
}
function Fj(a, b2, c) {
  var d = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$2(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$2(b2), null;
    case 3:
      d = b2.stateNode;
      Jh$1();
      E$1(Wf);
      E$1(H$2);
      Oh$1();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b2);
      S$2(b2);
      return null;
    case 5:
      Lh$1(b2);
      var e = Hh$1(Gh$1.current);
      c = b2.type;
      if (null !== a && null != b2.stateNode)
        Cj(a, b2, c, d, e), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d) {
          if (null === b2.stateNode)
            throw Error(p$2(166));
          S$2(b2);
          return null;
        }
        a = Hh$1(Eh$1.current);
        if (Gg(b2)) {
          d = b2.stateNode;
          c = b2.type;
          var f2 = b2.memoizedProps;
          d[Of] = b2;
          d[Pf] = f2;
          a = 0 !== (b2.mode & 1);
          switch (c) {
            case "dialog":
              D$2("cancel", d);
              D$2("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$2("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D$2(lf[e], d);
              break;
            case "source":
              D$2("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D$2(
                "error",
                d
              );
              D$2("load", d);
              break;
            case "details":
              D$2("toggle", d);
              break;
            case "input":
              Za$1(d, f2);
              D$2("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D$2("invalid", d);
              break;
            case "textarea":
              hb$1(d, f2), D$2("invalid", d);
          }
          ub$1(c, f2);
          e = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h = f2[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea$2.hasOwnProperty(g) && null != h && "onScroll" === g && D$2("scroll", d);
            }
          switch (c) {
            case "input":
              Va$2(d);
              db$2(d, f2, true);
              break;
            case "textarea":
              Va$2(d);
              jb$1(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b2.updateQueue = d;
          null !== d && (b2.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb$1(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b2;
          a[Pf] = d;
          Aj(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g = vb$1(c, d);
            switch (c) {
              case "dialog":
                D$2("cancel", a);
                D$2("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$2("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D$2(lf[e], a);
                e = d;
                break;
              case "source":
                D$2("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D$2(
                  "error",
                  a
                );
                D$2("load", a);
                e = d;
                break;
              case "details":
                D$2("toggle", a);
                e = d;
                break;
              case "input":
                Za$1(a, d);
                e = Ya$2(a, d);
                D$2("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A$1({}, d, { value: void 0 });
                D$2("invalid", a);
                break;
              case "textarea":
                hb$1(a, d);
                e = gb$1(a, d);
                D$2("invalid", a);
                break;
              default:
                e = d;
            }
            ub$1(c, e);
            h = e;
            for (f2 in h)
              if (h.hasOwnProperty(f2)) {
                var k2 = h[f2];
                "style" === f2 ? sb$1(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb$1(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob$1(a, k2) : "number" === typeof k2 && ob$1(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea$2.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$2("scroll", a) : null != k2 && ta$2(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va$2(a);
                db$2(a, d, false);
                break;
              case "textarea":
                Va$2(a);
                jb$1(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa$2(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb$1(a, !!d.multiple, f2, false) : null != d.defaultValue && fb$1(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$2(b2);
      return null;
    case 6:
      if (a && null != b2.stateNode)
        Dj(a, b2, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b2.stateNode)
          throw Error(p$2(166));
        c = Hh$1(Gh$1.current);
        Hh$1(Eh$1.current);
        if (Gg(b2)) {
          d = b2.stateNode;
          c = b2.memoizedProps;
          d[Of] = b2;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
      }
      S$2(b2);
      return null;
    case 13:
      E$1(M$2);
      d = b2.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I$1 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p$2(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$2(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$2(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c, b2;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (M$2.current & 1) ? 0 === T$1 && (T$1 = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$2(b2);
      return null;
    case 4:
      return Jh$1(), Bj(a, b2), null === a && sf(b2.stateNode.containerInfo), S$2(b2), null;
    case 10:
      return Rg(b2.type._context), S$2(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$2(b2), null;
    case 19:
      E$1(M$2);
      f2 = b2.memoizedState;
      if (null === f2)
        return S$2(b2), null;
      d = 0 !== (b2.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T$1 || null !== a && 0 !== (a.flags & 128))
            for (a = b2.child; null !== a; ) {
              g = Mh$1(a);
              if (null !== g) {
                b2.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b2.updateQueue = d, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d = c;
                for (c = b2.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G$2(M$2, M$2.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B$2() > Hj && (b2.flags |= 128, d = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh$1(g), null !== a) {
            if (b2.flags |= 128, d = true, c = a.updateQueue, null !== c && (b2.updateQueue = c, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I$1)
              return S$2(b2), null;
          } else
            2 * B$2() - f2.renderingStartTime > Hj && 1073741824 !== c && (b2.flags |= 128, d = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c = f2.last, null !== c ? c.sibling = g : b2.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$2(), b2.sibling = null, c = M$2.current, G$2(M$2, d ? c & 1 | 2 : c & 1), b2;
      S$2(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S$2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$2(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b2.tag));
}
function Jj(a, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return Jh$1(), E$1(Wf), E$1(H$2), Oh$1(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Lh$1(b2), null;
    case 13:
      E$1(M$2);
      a = b2.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b2.alternate)
          throw Error(p$2(340));
        Ig();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E$1(M$2), null;
    case 4:
      return Jh$1(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U$2 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V$2 = null;
function Mj(a, b2) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W$2(a, b2, d);
      }
    else
      c.current = null;
}
function Nj(a, b2, c) {
  try {
    c();
  } catch (d) {
    W$2(a, b2, d);
  }
}
var Oj = false;
function Pj(a, b2) {
  Cf = dd$1;
  a = Me$1();
  if (Ne$1(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd$1 = false;
  for (V$2 = b2; null !== V$2; )
    if (b2 = V$2, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a)
      a.return = b2, V$2 = a;
    else
      for (; null !== V$2; ) {
        b2 = V$2;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$2(163));
            }
        } catch (F2) {
          W$2(b2, b2.return, F2);
        }
        a = b2.sibling;
        if (null !== a) {
          a.return = b2.return;
          V$2 = a;
          break;
        }
        V$2 = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b2, c) {
  var d = b2.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Nj(b2, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c = b2 = b2.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b2);
  }
}
function Sj(a) {
  var b2 = a.ref;
  if (null !== b2) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b2 ? b2(a) : b2.current = a;
  }
}
function Tj(a) {
  var b2 = a.alternate;
  null !== b2 && (a.alternate = null, Tj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b2, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b2 ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b2) : c.insertBefore(a, b2) : (8 === c.nodeType ? (b2 = c.parentNode, b2.insertBefore(a, c)) : (b2 = c, b2.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b2, c), a = a.sibling; null !== a; )
      Wj(a, b2, c), a = a.sibling;
}
function Xj(a, b2, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b2 ? c.insertBefore(a, b2) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b2, c), a = a.sibling; null !== a; )
      Xj(a, b2, c), a = a.sibling;
}
var X$2 = null, Yj = false;
function Zj(a, b2, c) {
  for (c = c.child; null !== c; )
    ak(a, b2, c), c = c.sibling;
}
function ak(a, b2, c) {
  if (lc$2 && "function" === typeof lc$2.onCommitFiberUnmount)
    try {
      lc$2.onCommitFiberUnmount(kc$2, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U$2 || Mj(c, b2);
    case 6:
      var d = X$2, e = Yj;
      X$2 = null;
      Zj(a, b2, c);
      X$2 = d;
      Yj = e;
      null !== X$2 && (Yj ? (a = X$2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X$2.removeChild(c.stateNode));
      break;
    case 18:
      null !== X$2 && (Yj ? (a = X$2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd$1(a)) : Kf(X$2, c.stateNode));
      break;
    case 4:
      d = X$2;
      e = Yj;
      X$2 = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b2, c);
      X$2 = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$2 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b2, g) : 0 !== (f2 & 4) && Nj(c, b2, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b2, c);
      break;
    case 1:
      if (!U$2 && (Mj(c, b2), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W$2(c, b2, h);
        }
      Zj(a, b2, c);
      break;
    case 21:
      Zj(a, b2, c);
      break;
    case 22:
      c.mode & 1 ? (U$2 = (d = U$2) || null !== c.memoizedState, Zj(a, b2, c), U$2 = d) : Zj(a, b2, c);
      break;
    default:
      Zj(a, b2, c);
  }
}
function bk(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d = ck.bind(null, a, b3);
      c.has(b3) || (c.add(b3), b3.then(d, d));
    });
  }
}
function dk(a, b2) {
  var c = b2.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g = b2, h = g;
        a:
          for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X$2 = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X$2 = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X$2 = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (null === X$2)
          throw Error(p$2(160));
        ak(f2, g, e);
        X$2 = null;
        Yj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W$2(e, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a), b2 = b2.sibling;
}
function ek(a, b2) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W$2(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W$2(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b2, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob$1(e, "");
        } catch (t2) {
          W$2(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h && "radio" === f2.type && null != f2.name && ab$1(e, f2);
            vb$1(h, g);
            var l2 = vb$1(h, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb$1(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb$1(e, q2) : "children" === m2 ? ob$1(e, q2) : ta$2(e, m2, q2, l2);
            }
            switch (h) {
              case "input":
                bb$1(e, f2);
                break;
              case "textarea":
                ib$1(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb$1(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb$1(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb$1(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W$2(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p$2(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W$2(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd$1(b2.containerInfo);
        } catch (t2) {
          W$2(a, a.return, t2);
        }
      break;
    case 4:
      dk(b2, a);
      fk(a);
      break;
    case 13:
      dk(b2, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B$2()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U$2 = (l2 = U$2) || m2, dk(b2, a), U$2 = l2) : dk(b2, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V$2 = a, m2 = a.child; null !== m2; ) {
            for (q2 = V$2 = m2; null !== V$2; ) {
              r2 = V$2;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b2 = d, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W$2(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V$2 = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb$1("display", g));
                } catch (t2) {
                  W$2(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W$2(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p$2(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob$1(e, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      W$2(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function ik(a, b2, c) {
  V$2 = a;
  jk(a);
}
function jk(a, b2, c) {
  for (var d = 0 !== (a.mode & 1); null !== V$2; ) {
    var e = V$2, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Kj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U$2;
        h = Kj;
        var l2 = U$2;
        Kj = g;
        if ((U$2 = k2) && !l2)
          for (V$2 = e; null !== V$2; )
            g = V$2, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k2 ? (k2.return = g, V$2 = k2) : kk(e);
        for (; null !== f2; )
          V$2 = f2, jk(f2), f2 = f2.sibling;
        V$2 = e;
        Kj = h;
        U$2 = l2;
      }
      lk(a);
    } else
      0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V$2 = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V$2; ) {
    var b2 = V$2;
    if (0 !== (b2.flags & 8772)) {
      var c = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U$2 || Rj(5, b2);
              break;
            case 1:
              var d = b2.stateNode;
              if (b2.flags & 4 && !U$2)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e = b2.elementType === b2.type ? c.memoizedProps : Lg(b2.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih$1(b2, f2, d);
              break;
            case 3:
              var g = b2.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c = b2.child.stateNode;
                      break;
                    case 1:
                      c = b2.child.stateNode;
                  }
                ih$1(b2, g, c);
              }
              break;
            case 5:
              var h = b2.stateNode;
              if (null === c && b2.flags & 4) {
                c = h;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd$1(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$2(163));
          }
        U$2 || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W$2(b2, b2.return, r2);
      }
    }
    if (b2 === a) {
      V$2 = null;
      break;
    }
    c = b2.sibling;
    if (null !== c) {
      c.return = b2.return;
      V$2 = c;
      break;
    }
    V$2 = b2.return;
  }
}
function hk(a) {
  for (; null !== V$2; ) {
    var b2 = V$2;
    if (b2 === a) {
      V$2 = null;
      break;
    }
    var c = b2.sibling;
    if (null !== c) {
      c.return = b2.return;
      V$2 = c;
      break;
    }
    V$2 = b2.return;
  }
}
function kk(a) {
  for (; null !== V$2; ) {
    var b2 = V$2;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W$2(b2, c, k2);
          }
          break;
        case 1:
          var d = b2.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b2.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W$2(b2, e, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$2(b2, f2, k2);
          }
          break;
        case 5:
          var g = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$2(b2, g, k2);
          }
      }
    } catch (k2) {
      W$2(b2, b2.return, k2);
    }
    if (b2 === a) {
      V$2 = null;
      break;
    }
    var h = b2.sibling;
    if (null !== h) {
      h.return = b2.return;
      V$2 = h;
      break;
    }
    V$2 = b2.return;
  }
}
var mk = Math.ceil, nk = ua$2.ReactCurrentDispatcher, ok = ua$2.ReactCurrentOwner, pk = ua$2.ReactCurrentBatchConfig, K$2 = 0, R$1 = null, Y$2 = null, Z$1 = 0, gj = 0, fj = Uf(0), T$1 = 0, qk = null, hh$1 = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi$1 = false, Qi$1 = null, Si$1 = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L$2() {
  return 0 !== (K$2 & 6) ? B$2() : -1 !== Bk ? Bk : Bk = B$2();
}
function lh$1(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K$2 & 2) && 0 !== Z$1)
    return Z$1 & -Z$1;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc$2()), Ck;
  a = C$2;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd$1(a.type);
  return a;
}
function mh$1(a, b2, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$2(185));
  Ac$2(a, c, d);
  if (0 === (K$2 & 2) || a !== R$1)
    a === R$1 && (0 === (K$2 & 2) && (rk |= c), 4 === T$1 && Dk(a, Z$1)), Ek(a, d), 1 === c && 0 === K$2 && 0 === (b2.mode & 1) && (Hj = B$2() + 500, fg && jg());
}
function Ek(a, b2) {
  var c = a.callbackNode;
  wc$2(a, b2);
  var d = uc$2(a, a === R$1 ? Z$1 : 0);
  if (0 === d)
    null !== c && bc$2(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d & -d, a.callbackPriority !== b2) {
    null != c && bc$2(c);
    if (1 === b2)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K$2 & 6) && jg();
      }), c = null;
    else {
      switch (Dc$2(d)) {
        case 1:
          c = fc$2;
          break;
        case 4:
          c = gc$2;
          break;
        case 16:
          c = hc$2;
          break;
        case 536870912:
          c = jc$2;
          break;
        default:
          c = hc$2;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c;
  }
}
function Hk(a, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K$2 & 6))
    throw Error(p$2(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc$2(a, a === R$1 ? Z$1 : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b2)
    b2 = Jk(a, d);
  else {
    b2 = d;
    var e = K$2;
    K$2 |= 2;
    var f2 = Kk();
    if (R$1 !== a || Z$1 !== b2)
      vk = null, Hj = B$2() + 500, Lk(a, b2);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f2;
    K$2 = e;
    null !== Y$2 ? b2 = 0 : (R$1 = null, Z$1 = 0, b2 = T$1);
  }
  if (0 !== b2) {
    2 === b2 && (e = xc$2(a), 0 !== e && (d = e, b2 = Ok(a, e)));
    if (1 === b2)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B$2()), c;
    if (6 === b2)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b2 = Jk(a, d), 2 === b2 && (f2 = xc$2(a), 0 !== f2 && (d = f2, b2 = Ok(a, f2))), 1 === b2))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B$2()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b2 = gk + 500 - B$2(), 10 < b2)) {
            if (0 !== uc$2(a, 0))
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L$2();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b2);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b2 = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc$2(d);
            f2 = 1 << g;
            g = b2[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B$2() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Ek(a, B$2());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b2) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b2).flags |= 256);
  a = Jk(a, b2);
  2 !== a && (b2 = uk, uk = c, null !== b2 && Gj(b2));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c = b2.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He$1(f2(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c)
      c.return = b2, b2 = c;
    else {
      if (b2 === a)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c = 31 - oc$2(b2), d = 1 << c;
    a[c] = -1;
    b2 &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K$2 & 6))
    throw Error(p$2(327));
  Ik();
  var b2 = uc$2(a, 0);
  if (0 === (b2 & 1))
    return Ek(a, B$2()), null;
  var c = Jk(a, b2);
  if (0 !== a.tag && 2 === c) {
    var d = xc$2(a);
    0 !== d && (b2 = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b2), Ek(a, B$2()), c;
  if (6 === c)
    throw Error(p$2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Qk(a, uk, vk);
  Ek(a, B$2());
  return null;
}
function Rk(a, b2) {
  var c = K$2;
  K$2 |= 1;
  try {
    return a(b2);
  } finally {
    K$2 = c, 0 === K$2 && (Hj = B$2() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K$2 & 6) && Ik();
  var b2 = K$2;
  K$2 |= 1;
  var c = pk.transition, d = C$2;
  try {
    if (pk.transition = null, C$2 = 1, a)
      return a();
  } finally {
    C$2 = d, pk.transition = c, K$2 = b2, 0 === (K$2 & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E$1(fj);
}
function Lk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y$2)
    for (c = Y$2.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh$1();
          E$1(Wf);
          E$1(H$2);
          Oh$1();
          break;
        case 5:
          Lh$1(d);
          break;
        case 4:
          Jh$1();
          break;
        case 13:
          E$1(M$2);
          break;
        case 19:
          E$1(M$2);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R$1 = a;
  Y$2 = a = wh$1(a.current, null);
  Z$1 = gj = b2;
  T$1 = 0;
  qk = null;
  sk = rk = hh$1 = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c = Wg[b2], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b2) {
  do {
    var c = Y$2;
    try {
      Qg();
      Ph$1.current = ai$1;
      if (Sh$1) {
        for (var d = N$2.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh$1 = false;
      }
      Rh$1 = 0;
      P$2 = O$2 = N$2 = null;
      Th$1 = false;
      Uh$1 = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T$1 = 1;
        qk = b2;
        Y$2 = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b2;
        b2 = Z$1;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi$1(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi$1(y2, g, h, f2, b2);
            y2.mode & 1 && Ti$1(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti$1(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I$1 && h.mode & 1) {
          var J2 = Vi$1(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi$1(J2, g, h, f2, b2);
            Jg(Ki$1(k2, h));
            break a;
          }
        }
        f2 = k2 = Ki$1(k2, h);
        4 !== T$1 && (T$1 = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Oi$1(f2, k2, b2);
              fh$1(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si$1 || !Si$1.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri$1(f2, h, b2);
                fh$1(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na2) {
      b2 = na2;
      Y$2 === c && null !== c && (Y$2 = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai$1;
  return null === a ? ai$1 : a;
}
function uj() {
  if (0 === T$1 || 3 === T$1 || 2 === T$1)
    T$1 = 4;
  null === R$1 || 0 === (hh$1 & 268435455) && 0 === (rk & 268435455) || Dk(R$1, Z$1);
}
function Jk(a, b2) {
  var c = K$2;
  K$2 |= 2;
  var d = Kk();
  if (R$1 !== a || Z$1 !== b2)
    vk = null, Lk(a, b2);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K$2 = c;
  nk.current = d;
  if (null !== Y$2)
    throw Error(p$2(261));
  R$1 = null;
  Z$1 = 0;
  return T$1;
}
function Uk() {
  for (; null !== Y$2; )
    Vk(Y$2);
}
function Mk() {
  for (; null !== Y$2 && !cc$2(); )
    Vk(Y$2);
}
function Vk(a) {
  var b2 = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Tk(a) : Y$2 = b2;
  ok.current = null;
}
function Tk(a) {
  var b2 = a;
  do {
    var c = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c = Fj(c, b2, gj), null !== c) {
        Y$2 = c;
        return;
      }
    } else {
      c = Jj(c, b2);
      if (null !== c) {
        c.flags &= 32767;
        Y$2 = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T$1 = 6;
        Y$2 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$2 = b2;
      return;
    }
    Y$2 = b2 = a;
  } while (null !== b2);
  0 === T$1 && (T$1 = 5);
}
function Qk(a, b2, c) {
  var d = C$2, e = pk.transition;
  try {
    pk.transition = null, C$2 = 1, Xk(a, b2, c, d);
  } finally {
    pk.transition = e, C$2 = d;
  }
  return null;
}
function Xk(a, b2, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K$2 & 6))
    throw Error(p$2(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p$2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc$2(a, f2);
  a === R$1 && (Y$2 = R$1 = null, Z$1 = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc$2, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C$2;
    C$2 = 1;
    var h = K$2;
    K$2 |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe$1(Df);
    dd$1 = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc$2();
    K$2 = h;
    C$2 = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Si$1 = null);
  mc$2(c.stateNode);
  Ek(a, B$2());
  if (null !== b2)
    for (d = a.onRecoverableError, c = 0; c < b2.length; c++)
      e = b2[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Pi$1)
    throw Pi$1 = false, a = Qi$1, Qi$1 = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc$2(yk), b2 = pk.transition, c = C$2;
    try {
      pk.transition = null;
      C$2 = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K$2 & 6))
          throw Error(p$2(331));
        var e = K$2;
        K$2 |= 4;
        for (V$2 = a.current; null !== V$2; ) {
          var f2 = V$2, g = f2.child;
          if (0 !== (V$2.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V$2 = l2; null !== V$2; ) {
                  var m2 = V$2;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V$2 = q2;
                  else
                    for (; null !== V$2; ) {
                      m2 = V$2;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V$2 = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V$2 = r2;
                        break;
                      }
                      V$2 = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$2 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V$2 = g;
          else
            b:
              for (; null !== V$2; ) {
                f2 = V$2;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V$2 = x2;
                  break b;
                }
                V$2 = f2.return;
              }
        }
        var w2 = a.current;
        for (V$2 = w2; null !== V$2; ) {
          g = V$2;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V$2 = u2;
          else
            b:
              for (g = w2; null !== V$2; ) {
                h = V$2;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na2) {
                    W$2(h, h.return, na2);
                  }
                if (h === g) {
                  V$2 = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V$2 = F2;
                  break b;
                }
                V$2 = h.return;
              }
        }
        K$2 = e;
        jg();
        if (lc$2 && "function" === typeof lc$2.onPostCommitFiberRoot)
          try {
            lc$2.onPostCommitFiberRoot(kc$2, a);
          } catch (na2) {
          }
        d = true;
      }
      return d;
    } finally {
      C$2 = c, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a, b2, c) {
  b2 = Ki$1(c, b2);
  b2 = Oi$1(a, b2, 1);
  a = dh$1(a, b2, 1);
  b2 = L$2();
  null !== a && (Ac$2(a, 1, b2), Ek(a, b2));
}
function W$2(a, b2, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a, c);
        break;
      } else if (1 === b2.tag) {
        var d = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si$1 || !Si$1.has(d))) {
          a = Ki$1(c, a);
          a = Ri$1(b2, a, 1);
          b2 = dh$1(b2, a, 1);
          a = L$2();
          null !== b2 && (Ac$2(b2, 1, a), Ek(b2, a));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui$1(a, b2, c) {
  var d = a.pingCache;
  null !== d && d.delete(b2);
  b2 = L$2();
  a.pingedLanes |= a.suspendedLanes & c;
  R$1 === a && (Z$1 & c) === c && (4 === T$1 || 3 === T$1 && (Z$1 & 130023424) === Z$1 && 500 > B$2() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b2);
}
function Zk(a, b2) {
  0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc$2, sc$2 <<= 1, 0 === (sc$2 & 130023424) && (sc$2 = 4194304)));
  var c = L$2();
  a = Zg(a, b2);
  null !== a && (Ac$2(a, b2, c), Ek(a, c));
}
function vj(a) {
  var b2 = a.memoizedState, c = 0;
  null !== b2 && (c = b2.retryLane);
  Zk(a, c);
}
function ck(a, b2) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  null !== d && d.delete(b2);
  Zk(a, c);
}
var Wk;
Wk = function(a, b2, c) {
  if (null !== a)
    if (a.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b2.flags & 128))
        return Ug = false, zj(a, b2, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I$1 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d = b2.type;
      jj(a, b2);
      a = b2.pendingProps;
      var e = Yf(b2, H$2.current);
      Tg(b2, c);
      e = Xh$1(null, b2, d, a, e, c);
      var f2 = bi$1();
      b2.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah$1(b2), e.updater = nh, b2.stateNode = e, e._reactInternals = b2, rh$1(b2, d, a, c), b2 = kj(null, b2, d, true, f2, c)) : (b2.tag = 0, I$1 && f2 && vg(b2), Yi$1(null, b2, e, c), b2 = b2.child);
      return b2;
    case 16:
      d = b2.elementType;
      a: {
        jj(a, b2);
        a = b2.pendingProps;
        e = d._init;
        d = e(d._payload);
        b2.type = d;
        e = b2.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b2 = dj(null, b2, d, a, c);
            break a;
          case 1:
            b2 = ij(null, b2, d, a, c);
            break a;
          case 11:
            b2 = Zi$1(null, b2, d, a, c);
            break a;
          case 14:
            b2 = aj(null, b2, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p$2(
          306,
          d,
          ""
        ));
      }
      return b2;
    case 0:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), dj(a, b2, d, e, c);
    case 1:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), ij(a, b2, d, e, c);
    case 3:
      a: {
        lj(b2);
        if (null === a)
          throw Error(p$2(387));
        d = b2.pendingProps;
        f2 = b2.memoizedState;
        e = f2.element;
        bh$1(a, b2);
        gh$1(b2, d, null, c);
        var g = b2.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e = Ki$1(Error(p$2(423)), b2);
            b2 = mj(a, b2, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki$1(Error(p$2(424)), b2);
            b2 = mj(a, b2, d, c, e);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$1 = true, zg = null, c = Ch$1(b2, null, d, c), b2.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b2 = $i$1(a, b2, c);
            break a;
          }
          Yi$1(a, b2, d, c);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh$1(b2), null === a && Eg(b2), d = b2.type, e = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), hj(a, b2), Yi$1(a, b2, g, c), b2.child;
    case 6:
      return null === a && Eg(b2), null;
    case 13:
      return pj(a, b2, c);
    case 4:
      return Ih$1(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a ? b2.child = Bh$1(b2, null, d, c) : Yi$1(a, b2, d, c), b2.child;
    case 11:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), Zi$1(a, b2, d, e, c);
    case 7:
      return Yi$1(a, b2, b2.pendingProps, c), b2.child;
    case 8:
      return Yi$1(a, b2, b2.pendingProps.children, c), b2.child;
    case 12:
      return Yi$1(a, b2, b2.pendingProps.children, c), b2.child;
    case 10:
      a: {
        d = b2.type._context;
        e = b2.pendingProps;
        f2 = b2.memoizedProps;
        g = e.value;
        G$2(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He$1(f2.value, g)) {
            if (f2.children === e.children && !Wf.current) {
              b2 = $i$1(a, b2, c);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h = f2.dependencies;
              if (null !== h) {
                g = f2.child;
                for (var k2 = h.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch$1(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b2
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p$2(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                Sg(g, c, b2);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b2) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi$1(a, b2, e.children, c);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e = b2.type, d = b2.pendingProps.children, Tg(b2, c), e = Vg(e), d = d(e), b2.flags |= 1, Yi$1(a, b2, d, c), b2.child;
    case 14:
      return d = b2.type, e = Lg(d, b2.pendingProps), e = Lg(d.type, e), aj(a, b2, d, e, c);
    case 15:
      return cj(a, b2, b2.type, b2.pendingProps, c);
    case 17:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), jj(a, b2), b2.tag = 1, Zf(d) ? (a = true, cg(b2)) : a = false, Tg(b2, c), ph$1(b2, d, e), rh$1(b2, d, e, c), kj(null, b2, d, true, a, c);
    case 19:
      return yj(a, b2, c);
    case 22:
      return ej(a, b2, c);
  }
  throw Error(p$2(156, b2.tag));
};
function Gk(a, b2) {
  return ac$2(a, b2);
}
function al$1(a, b2, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b2, c, d) {
  return new al$1(a, b2, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da$1)
      return 11;
    if (a === Ga$2)
      return 14;
  }
  return 2;
}
function wh$1(a, b2) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b2, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b2, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh$1(a, b2, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya$2:
          return Ah$1(c.children, e, f2, b2);
        case za$2:
          g = 8;
          e |= 8;
          break;
        case Aa$2:
          return a = Bg(12, c, b2, e | 2), a.elementType = Aa$2, a.lanes = f2, a;
        case Ea$2:
          return a = Bg(13, c, b2, e), a.elementType = Ea$2, a.lanes = f2, a;
        case Fa$2:
          return a = Bg(19, c, b2, e), a.elementType = Fa$2, a.lanes = f2, a;
        case Ia$2:
          return qj(c, e, f2, b2);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba$1:
                g = 10;
                break a;
              case Ca$1:
                g = 9;
                break a;
              case Da$1:
                g = 11;
                break a;
              case Ga$2:
                g = 14;
                break a;
              case Ha$2:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p$2(130, null == a ? a : typeof a, ""));
      }
  b2 = Bg(g, c, b2, e);
  b2.elementType = a;
  b2.type = d;
  b2.lanes = f2;
  return b2;
}
function Ah$1(a, b2, c, d) {
  a = Bg(7, a, d, b2);
  a.lanes = c;
  return a;
}
function qj(a, b2, c, d) {
  a = Bg(22, a, d, b2);
  a.elementType = Ia$2;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh$1(a, b2, c) {
  a = Bg(6, a, null, b2);
  a.lanes = c;
  return a;
}
function zh$1(a, b2, c) {
  b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function bl(a, b2, c, d, e) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc$2(0);
  this.expirationTimes = zc$2(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc$2(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl$1(a, b2, c, d, e, f2, g, h, k2) {
  a = new bl(a, b2, c, h, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah$1(f2);
  return a;
}
function dl$1(a, b2, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa$2, key: null == d ? null : "" + d, children: a, containerInfo: b2, implementation: c };
}
function el$1(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb$1(a) !== a || 1 !== a.tag)
      throw Error(p$2(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$2(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b2);
  }
  return b2;
}
function fl$1(a, b2, c, d, e, f2, g, h, k2) {
  a = cl$1(c, d, true, a, e, f2, g, h, k2);
  a.context = el$1(null);
  c = a.current;
  d = L$2();
  e = lh$1(c);
  f2 = ch$1(d, e);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh$1(c, f2, e);
  a.current.lanes = e;
  Ac$2(a, e, d);
  Ek(a, d);
  return a;
}
function gl$1(a, b2, c, d) {
  var e = b2.current, f2 = L$2(), g = lh$1(e);
  c = el$1(c);
  null === b2.context ? b2.context = c : b2.pendingContext = c;
  b2 = ch$1(f2, g);
  b2.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b2.callback = d);
  a = dh$1(e, b2, g);
  null !== a && (mh$1(a, e, g, f2), eh$1(a, e, g));
  return g;
}
function hl$1(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il$1(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b2 ? c : b2;
  }
}
function jl(a, b2) {
  il$1(a, b2);
  (a = a.alternate) && il$1(a, b2);
}
function kl$1() {
  return null;
}
var ll$1 = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml$1(a) {
  this._internalRoot = a;
}
nl$1.prototype.render = ml$1.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p$2(409));
  gl$1(a, b2, null, null);
};
nl$1.prototype.unmount = ml$1.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Sk(function() {
      gl$1(null, a, null, null);
    });
    b2[uf] = null;
  }
};
function nl$1(a) {
  this._internalRoot = a;
}
nl$1.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Hc$2();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c = 0; c < Qc$2.length && 0 !== b2 && b2 < Qc$2[c].priority; c++)
      ;
    Qc$2.splice(c, 0, a);
    0 === c && Vc$2(a);
  }
};
function ol$1(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl$1(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl$1(a, b2, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl$1(g);
        f2.call(a2);
      };
    }
    var g = fl$1(b2, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = hl$1(k2);
      h.call(a2);
    };
  }
  var k2 = cl$1(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl$1(b2, k2, c, d);
  });
  return k2;
}
function sl$1(a, b2, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = hl$1(g);
        h.call(a2);
      };
    }
    gl$1(b2, g, a, e);
  } else
    g = rl$1(c, b2, a, e, d);
  return hl$1(g);
}
Ec$2 = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c = tc$2(b2.pendingLanes);
        0 !== c && (Cc$2(b2, c | 1), Ek(b2, B$2()), 0 === (K$2 & 6) && (Hj = B$2() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a, 1);
        if (null !== b3) {
          var c2 = L$2();
          mh$1(b3, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc$2 = function(a) {
  if (13 === a.tag) {
    var b2 = Zg(a, 134217728);
    if (null !== b2) {
      var c = L$2();
      mh$1(b2, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc$2 = function(a) {
  if (13 === a.tag) {
    var b2 = lh$1(a), c = Zg(a, b2);
    if (null !== c) {
      var d = L$2();
      mh$1(c, a, b2, d);
    }
    jl(a, b2);
  }
};
Hc$2 = function() {
  return C$2;
};
Ic$2 = function(a, b2) {
  var c = C$2;
  try {
    return C$2 = a, b2();
  } finally {
    C$2 = c;
  }
};
yb$1 = function(a, b2, c) {
  switch (b2) {
    case "input":
      bb$1(a, c);
      b2 = c.name;
      if ("radio" === c.type && null != b2) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c.length; b2++) {
          var d = c[b2];
          if (d !== a && d.form === a.form) {
            var e = Db$1(d);
            if (!e)
              throw Error(p$2(90));
            Wa$2(d);
            bb$1(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib$1(a, c);
      break;
    case "select":
      b2 = c.value, null != b2 && fb$1(a, !!c.multiple, b2, false);
  }
};
Gb$1 = Rk;
Hb$1 = Sk;
var tl$1 = { usingClientEntryPoint: false, Events: [Cb$1, ue$1, Db$1, Eb$1, Fb$1, Rk] }, ul$1 = { findFiberByHostInstance: Wc$2, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl$1 = { bundleType: ul$1.bundleType, version: ul$1.version, rendererPackageName: ul$1.rendererPackageName, rendererConfig: ul$1.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua$2.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb$1(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul$1.findFiberByHostInstance || kl$1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl$1 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl$1.isDisabled && wl$1.supportsFiber)
    try {
      kc$2 = wl$1.inject(vl$1), lc$2 = wl$1;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl$1;
reactDom_production_min.createPortal = function(a, b2) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol$1(b2))
    throw Error(p$2(200));
  return dl$1(a, b2, null, c);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!ol$1(a))
    throw Error(p$2(299));
  var c = false, d = "", e = ll$1;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e = b2.onRecoverableError));
  b2 = cl$1(a, 1, false, null, null, c, false, d, e);
  a[uf] = b2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml$1(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render)
      throw Error(p$2(188));
    a = Object.keys(a).join(",");
    throw Error(p$2(268, a));
  }
  a = Zb$1(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b2, c) {
  if (!pl$1(b2))
    throw Error(p$2(200));
  return sl$1(null, a, b2, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b2, c) {
  if (!ol$1(a))
    throw Error(p$2(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = ll$1;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b2 = fl$1(b2, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b2.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c, e] : b2.mutableSourceEagerHydrationData.push(
        c,
        e
      );
  return new nl$1(b2);
};
reactDom_production_min.render = function(a, b2, c) {
  if (!pl$1(b2))
    throw Error(p$2(200));
  return sl$1(null, a, b2, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl$1(a))
    throw Error(p$2(40));
  return a._reactRootContainer ? (Sk(function() {
    sl$1(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c, d) {
  if (!pl$1(c))
    throw Error(p$2(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p$2(38));
  return sl$1(a, b2, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
})(reactDom);
var m$1 = reactDom.exports;
{
  client.createRoot = m$1.createRoot;
  client.hydrateRoot = m$1.hydrateRoot;
}
const App$1 = "";
/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to2) {
    return typeof to2 === "string" ? to2 : createPath(to2);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location) {
  return {
    usr: location.state,
    key: location.key
  };
}
function createLocation(current, to2, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$1({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to2 === "string" ? parsePath(to2) : to2, {
    state,
    key: to2 && to2.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  function handlePop() {
    action = Action.Pop;
    if (listener) {
      listener({
        action,
        location: history.location
      });
    }
  }
  function push(to2, state) {
    action = Action.Push;
    let location = createLocation(history.location, to2, state);
    if (validateLocation)
      validateLocation(location, to2);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location
      });
    }
  }
  function replace(to2, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to2, state);
    if (validateLocation)
      validateLocation(location, to2);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location
      });
    }
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn2) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn2;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to2) {
      return createHref(window2, to2);
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes.forEach((route, index2) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b2) {
  let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i) => n2 === b2[i]);
  return siblings ? a[a.length - 1] - b2[b2.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function resolvePath(to2, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to2 === "string" ? parsePath(to2) : to2;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to2;
  if (typeof toArg === "string") {
    to2 = parsePath(toArg);
  } else {
    to2 = _extends$1({}, toArg);
    invariant(!to2.pathname || !to2.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to2));
    invariant(!to2.pathname || !to2.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to2));
    invariant(!to2.search || !to2.search.includes("#"), getInvalidPathError("#", "search", "hash", to2));
  }
  let isEmptyPath = toArg === "" || to2.pathname === "";
  let toPathname = isEmptyPath ? "/" : to2.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to2.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to2, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
class ErrorResponse {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText || "";
    this.data = data;
  }
}
function isRouteErrorResponse(e) {
  return e instanceof ErrorResponse;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = react.exports, k$2 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$2(c, a, g) {
  var b2, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b2 in a)
    m.call(a, b2) && !p$1.hasOwnProperty(b2) && (d[b2] = a[b2]);
  if (c && c.defaultProps)
    for (b2 in a = c.defaultProps, a)
      void 0 === d[b2] && (d[b2] = a[b2]);
  return { $$typeof: k$2, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$2;
reactJsxRuntime_production_min.jsxs = q$2;
(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
const Fragment = jsxRuntime.exports.Fragment;
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function isPolyfill(x2, y2) {
  return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
}
const is$1 = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React$1;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  const value = getSnapshot();
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is$1(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React$1 ? ((module) => module.useSyncExternalStore)(React$1) : shim;
const DataStaticRouterContext = /* @__PURE__ */ react.exports.createContext(null);
const DataRouterContext = /* @__PURE__ */ react.exports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ react.exports.createContext(null);
const NavigationContext = /* @__PURE__ */ react.exports.createContext(null);
const LocationContext = /* @__PURE__ */ react.exports.createContext(null);
const RouteContext = /* @__PURE__ */ react.exports.createContext({
  outlet: null,
  matches: []
});
const RouteErrorContext = /* @__PURE__ */ react.exports.createContext(null);
function useHref(to2, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = react.exports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to2, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return react.exports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return react.exports.useContext(LocationContext).location;
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index2) => index2 === 0 || !match.route.index && match.pathnameBase !== matches[index2 - 1].pathnameBase);
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = react.exports.useContext(NavigationContext);
  let {
    matches
  } = react.exports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  let activeRef = react.exports.useRef(false);
  react.exports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react.exports.useCallback(function(to2, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to2 === "number") {
      navigator2.go(to2);
      return;
    }
    let path = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
function useParams() {
  let {
    matches
  } = react.exports.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to2, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = react.exports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return react.exports.useMemo(() => resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to2, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterStateContext = react.exports.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = react.exports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches, dataRouterStateContext || void 0);
  if (locationArg) {
    return /* @__PURE__ */ jsx(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      },
      children: renderedMatches
    });
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("h2", {
      children: "Unhandled Thrown Error!"
    }), /* @__PURE__ */ jsx("h3", {
      style: {
        fontStyle: "italic"
      },
      children: message
    }), stack ? /* @__PURE__ */ jsx("pre", {
      style: preStyles,
      children: stack
    }) : null, /* @__PURE__ */ jsx("p", {
      children: "\u{1F4BF} Hey developer \u{1F44B}"
    }), /* @__PURE__ */ jsxs("p", {
      children: ["You can provide a way better UX than this when your app throws errors by providing your own\xA0", /* @__PURE__ */ jsx("code", {
        style: codeStyles,
        children: "errorElement"
      }), " props on\xA0", /* @__PURE__ */ jsx("code", {
        style: codeStyles,
        children: "<Route>"
      })]
    })]
  });
}
class RenderErrorBoundary extends react.exports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ jsx(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    }) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataStaticRouterContext = react.exports.useContext(DataStaticRouterContext);
  if (dataStaticRouterContext && match.route.errorElement) {
    dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ jsx(RouteContext.Provider, {
    value: routeContext,
    children
  });
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index2) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ jsx(DefaultErrorElement, {}) : null;
    let getChildren = () => /* @__PURE__ */ jsx(RenderedRoute, {
      match,
      routeContext: {
        outlet,
        matches: parentMatches.concat(renderedMatches.slice(0, index2 + 1))
      },
      children: error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet
    });
    return dataRouterState && (match.route.errorElement || index2 === 0) ? /* @__PURE__ */ jsx(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error,
      children: getChildren()
    }) : getChildren();
  }, null);
}
var DataRouterHook$1;
(function(DataRouterHook2) {
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function useDataRouterState(hookName) {
  let state = react.exports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteError() {
  var _state$errors;
  let error = react.exports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let route = react.exports.useContext(RouteContext);
  let thisRoute = route.matches[route.matches.length - 1];
  if (error) {
    return error;
  }
  !route ? invariant(false) : void 0;
  !thisRoute.route.id ? invariant(false) : void 0;
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
}
function Route(_props) {
  invariant(false);
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react.exports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = react.exports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ jsx(NavigationContext.Provider, {
    value: navigationContext,
    children: /* @__PURE__ */ jsx(LocationContext.Provider, {
      children,
      value: {
        location,
        navigationType
      }
    })
  });
}
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = react.exports.useContext(DataRouterContext);
  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  react.exports.Children.forEach(children, (element, index2) => {
    if (!/* @__PURE__ */ react.exports.isValidElement(element)) {
      return;
    }
    if (element.type === react.exports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let treePath = [...parentPath, index2];
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      hasErrorBoundary: element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window: window2
  } = _ref;
  let historyRef = react.exports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setState] = react.exports.useState({
    action: history.action,
    location: history.location
  });
  react.exports.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ jsx(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
const Link = /* @__PURE__ */ react.exports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to: to2,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let href = useHref(to2, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to2, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ jsx("a", {
    ...rest,
    href,
    onClick: reloadDocument ? onClick : handleClick,
    ref,
    target
  });
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook2["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to2, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to2, {
    relative
  });
  return react.exports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to2, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to2, preventScrollReset, relative]);
}
const button = "";
const Button = ({
  text,
  btnStyle
}) => {
  return /* @__PURE__ */ jsx("p", {
    className: "btn",
    style: btnStyle,
    children: text
  });
};
const productList = "";
const ProductList = ({
  product
}) => {
  const {
    name: name2,
    thumbnail
  } = product;
  const btnStyle = {
    position: "relative"
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "card-container",
      children: [/* @__PURE__ */ jsx("img", {
        className: "product-list-img",
        src: `${thumbnail}`
      }), " ", /* @__PURE__ */ jsxs("div", {
        className: "btn-pl-container",
        children: [/* @__PURE__ */ jsxs(Link, {
          style: {
            textDecoration: "none"
          },
          to: `/batchs/${product.idFirebase}`,
          children: [/* @__PURE__ */ jsx(Button, {
            text: "see more",
            btnStyle
          }), " "]
        }), " "]
      }), " ", /* @__PURE__ */ jsxs("p", {
        className: "product-list-text",
        children: [" ", name2, " "]
      }), " "]
    }), " "]
  });
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function(str) {
  const out = [];
  let p2 = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c < 128) {
      out[p2++] = c;
    } else if (c < 2048) {
      out[p2++] = c >> 6 | 192;
      out[p2++] = c & 63 | 128;
    } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
      c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
      out[p2++] = c >> 18 | 240;
      out[p2++] = c >> 12 & 63 | 128;
      out[p2++] = c >> 6 & 63 | 128;
      out[p2++] = c & 63 | 128;
    } else {
      out[p2++] = c >> 12 | 224;
      out[p2++] = c >> 6 & 63 | 128;
      out[p2++] = c & 63 | 128;
    }
  }
  return out;
};
const byteArrayToString = function(bytes) {
  const out = [];
  let pos = 0, c = 0;
  while (pos < bytes.length) {
    const c1 = bytes[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      const c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      const c4 = bytes[pos++];
      const u2 = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
      out[c++] = String.fromCharCode(55296 + (u2 >> 10));
      out[c++] = String.fromCharCode(56320 + (u2 & 1023));
    } else {
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }
  return out.join("");
};
const base64 = {
  byteToCharMap_: null,
  charToByteMap_: null,
  byteToCharMapWebSafe_: null,
  charToByteMapWebSafe_: null,
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  HAS_NATIVE_SUPPORT: typeof atob === "function",
  encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    this.init_();
    const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    const output = [];
    for (let i = 0; i < input.length; i += 3) {
      const byte1 = input[i];
      const haveByte2 = i + 1 < input.length;
      const byte2 = haveByte2 ? input[i + 1] : 0;
      const haveByte3 = i + 2 < input.length;
      const byte3 = haveByte3 ? input[i + 2] : 0;
      const outByte1 = byte1 >> 2;
      const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
      let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
      let outByte4 = byte3 & 63;
      if (!haveByte3) {
        outByte4 = 64;
        if (!haveByte2) {
          outByte3 = 64;
        }
      }
      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }
    return output.join("");
  },
  encodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }
    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },
  decodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }
    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },
  decodeStringToByteArray(input, webSafe) {
    this.init_();
    const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    const output = [];
    for (let i = 0; i < input.length; ) {
      const byte1 = charToByteMap[input.charAt(i++)];
      const haveByte2 = i < input.length;
      const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      const haveByte3 = i < input.length;
      const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      const haveByte4 = i < input.length;
      const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }
      const outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);
      if (byte3 !== 64) {
        const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
        output.push(outByte2);
        if (byte4 !== 64) {
          const outByte3 = byte3 << 6 & 192 | byte4;
          output.push(outByte3);
        }
      }
    }
    return output;
  },
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {};
      for (let i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
const base64Encode = function(str) {
  const utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
const base64urlEncodeWithoutPadding = function(str) {
  return base64Encode(str).replace(/\./g, "");
};
const base64Decode = function(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }
  switch (source.constructor) {
    case Date:
      const dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === void 0) {
        target = {};
      }
      break;
    case Array:
      target = [];
      break;
    default:
      return source;
  }
  for (const prop in source) {
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
function isValidKey(key) {
  return key !== "__proto__";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch (e) {
    return false;
  }
}
function isBrowser() {
  return typeof self === "object" && self.self === self;
}
function isSafari() {
  return !isNode() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
}
function isIndexedDBAvailable() {
  return typeof indexedDB === "object";
}
function validateIndexedDBOpenable() {
  return new Promise((resolve, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
      const request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = () => {
        request.result.close();
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve(true);
      };
      request.onupgradeneeded = () => {
        preExist = false;
      };
      request.onerror = () => {
        var _a2;
        reject(((_a2 = request.error) === null || _a2 === void 0 ? void 0 : _a2.message) || "");
      };
    } catch (error) {
      reject(error);
    }
  });
}
function getGlobal() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
const getDefaultsFromEnvVariable = () => {
  if (typeof process === "undefined" || typeof process.env === "undefined") {
    return;
  }
  const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
  if (defaultsJsonString) {
    return JSON.parse(defaultsJsonString);
  }
};
const getDefaultsFromCookie = () => {
  if (typeof document === "undefined") {
    return;
  }
  const match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  const decoded = match && base64Decode(match[1]);
  return decoded && JSON.parse(decoded);
};
const getDefaults = () => getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
const getDefaultAppConfig = () => {
  var _a2;
  return (_a2 = getDefaults()) === null || _a2 === void 0 ? void 0 : _a2.config;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
  constructor() {
    this.reject = () => {
    };
    this.resolve = () => {
    };
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  wrapCallback(callback) {
    return (error, value) => {
      if (error) {
        this.reject(error);
      } else {
        this.resolve(value);
      }
      if (typeof callback === "function") {
        this.promise.catch(() => {
        });
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
  if (token.uid) {
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  }
  const header2 = {
    alg: "none",
    type: "JWT"
  };
  const project = projectId || "demo-project";
  const iat = token.iat || 0;
  const sub = token.sub || token.user_id;
  if (!sub) {
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  }
  const payload = Object.assign({
    iss: `https://securetoken.google.com/${project}`,
    aud: project,
    iat,
    exp: iat + 3600,
    auth_time: iat,
    sub,
    user_id: sub,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    }
  }, token);
  const signature = "";
  return [
    base64urlEncodeWithoutPadding(JSON.stringify(header2)),
    base64urlEncodeWithoutPadding(JSON.stringify(payload)),
    signature
  ].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_NAME = "FirebaseError";
class FirebaseError extends Error {
  constructor(code, message, customData) {
    super(message);
    this.code = code;
    this.customData = customData;
    this.name = ERROR_NAME;
    Object.setPrototypeOf(this, FirebaseError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }
}
class ErrorFactory {
  constructor(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  create(code, ...data) {
    const customData = data[0] || {};
    const fullCode = `${this.service}/${code}`;
    const template = this.errors[code];
    const message = template ? replaceTemplate(template, customData) : "Error";
    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
    const error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  }
}
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key) => {
    const value = data[key];
    return value != null ? String(value) : `<${key}?>`;
  });
}
const PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function deepEqual(a, b2) {
  if (a === b2) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b2);
  for (const k2 of aKeys) {
    if (!bKeys.includes(k2)) {
      return false;
    }
    const aProp = a[k2];
    const bProp = b2[k2];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k2 of bKeys) {
    if (!aKeys.includes(k2)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
function createSubscribe(executor, onNoObservers) {
  const proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
class ObserverProxy {
  constructor(executor, onNoObservers) {
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    this.task.then(() => {
      executor(this);
    }).catch((e) => {
      this.error(e);
    });
  }
  next(value) {
    this.forEachObserver((observer) => {
      observer.next(value);
    });
  }
  error(error) {
    this.forEachObserver((observer) => {
      observer.error(error);
    });
    this.close(error);
  }
  complete() {
    this.forEachObserver((observer) => {
      observer.complete();
    });
    this.close();
  }
  subscribe(nextOrObserver, error, complete) {
    let observer;
    if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
      throw new Error("Missing Observer.");
    }
    if (implementsAnyMethods$1(nextOrObserver, [
      "next",
      "error",
      "complete"
    ])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error,
        complete
      };
    }
    if (observer.next === void 0) {
      observer.next = noop;
    }
    if (observer.error === void 0) {
      observer.error = noop;
    }
    if (observer.complete === void 0) {
      observer.complete = noop;
    }
    const unsub = this.unsubscribeOne.bind(this, this.observers.length);
    if (this.finalized) {
      this.task.then(() => {
        try {
          if (this.finalError) {
            observer.error(this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {
        }
        return;
      });
    }
    this.observers.push(observer);
    return unsub;
  }
  unsubscribeOne(i) {
    if (this.observers === void 0 || this.observers[i] === void 0) {
      return;
    }
    delete this.observers[i];
    this.observerCount -= 1;
    if (this.observerCount === 0 && this.onNoObservers !== void 0) {
      this.onNoObservers(this);
    }
  }
  forEachObserver(fn2) {
    if (this.finalized) {
      return;
    }
    for (let i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn2);
    }
  }
  sendOne(i, fn2) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[i] !== void 0) {
        try {
          fn2(this.observers[i]);
        } catch (e) {
          if (typeof console !== "undefined" && console.error) {
            console.error(e);
          }
        }
      }
    });
  }
  close(err) {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (err !== void 0) {
      this.finalError = err;
    }
    this.task.then(() => {
      this.observers = void 0;
      this.onNoObservers = void 0;
    });
  }
}
function implementsAnyMethods$1(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (const method of methods) {
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop() {
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}
class Component {
  constructor(name2, instanceFactory, type) {
    this.name = name2;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  setInstantiationMode(mode) {
    this.instantiationMode = mode;
    return this;
  }
  setMultipleInstances(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  }
  setServiceProps(props) {
    this.serviceProps = props;
    return this;
  }
  setInstanceCreatedCallback(callback) {
    this.onInstanceCreated = callback;
    return this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME$1 = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Provider {
  constructor(name2, container) {
    this.name = name2;
    this.container = container;
    this.component = null;
    this.instances = /* @__PURE__ */ new Map();
    this.instancesDeferred = /* @__PURE__ */ new Map();
    this.instancesOptions = /* @__PURE__ */ new Map();
    this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  get(identifier) {
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      const deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {
        }
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  }
  getImmediate(options) {
    var _a2;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    const optional = (_a2 = options === null || options === void 0 ? void 0 : options.optional) !== null && _a2 !== void 0 ? _a2 : false;
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error(`Service ${this.name} is not available`);
      }
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(component) {
    if (component.name !== this.name) {
      throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
    }
    if (this.component) {
      throw Error(`Component for ${this.name} has already been provided`);
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME$1 });
      } catch (e) {
      }
    }
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      try {
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
        instanceDeferred.resolve(instance);
      } catch (e) {
      }
    }
  }
  clearInstance(identifier = DEFAULT_ENTRY_NAME$1) {
    this.instancesDeferred.delete(identifier);
    this.instancesOptions.delete(identifier);
    this.instances.delete(identifier);
  }
  async delete() {
    const services = Array.from(this.instances.values());
    await Promise.all([
      ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
      ...services.filter((service) => "_delete" in service).map((service) => service._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(identifier = DEFAULT_ENTRY_NAME$1) {
    return this.instances.has(identifier);
  }
  getOptions(identifier = DEFAULT_ENTRY_NAME$1) {
    return this.instancesOptions.get(identifier) || {};
  }
  initialize(opts = {}) {
    const { options = {} } = opts;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
    }
    if (!this.isComponentSet()) {
      throw Error(`Component ${this.name} has not been registered yet`);
    }
    const instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options
    });
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      if (normalizedIdentifier === normalizedDeferredIdentifier) {
        instanceDeferred.resolve(instance);
      }
    }
    return instance;
  }
  onInit(callback, identifier) {
    var _a2;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    const existingCallbacks = (_a2 = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a2 !== void 0 ? _a2 : /* @__PURE__ */ new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    const existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return () => {
      existingCallbacks.delete(callback);
    };
  }
  invokeOnInitCallbacks(instance, identifier) {
    const callbacks = this.onInitCallbacks.get(identifier);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      try {
        callback(instance, identifier);
      } catch (_a2) {
      }
    }
  }
  getOrInitializeService({ instanceIdentifier, options = {} }) {
    let instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_a2) {
        }
      }
    }
    return instance || null;
  }
  normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME$1) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
    } else {
      return identifier;
    }
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME$1 ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ComponentContainer {
  constructor(name2) {
    this.name = name2;
    this.providers = /* @__PURE__ */ new Map();
  }
  addComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
    }
    provider.setComponent(component);
  }
  addOrOverwriteComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  }
  getProvider(name2) {
    if (this.providers.has(name2)) {
      return this.providers.get(name2);
    }
    const provider = new Provider(name2, this);
    this.providers.set(name2, provider);
    return provider;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const instances = [];
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
const defaultLogLevel = LogLevel.INFO;
const ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
const defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = new Date().toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
class Logger {
  constructor(name2) {
    this.name = name2;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
}
function setLogLevel$2(level) {
  instances.forEach((inst) => {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  for (const instance of instances) {
    let customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = (instance2, level, ...args) => {
        const message = args.map((arg) => {
          if (arg == null) {
            return null;
          } else if (typeof arg === "string") {
            return arg;
          } else if (typeof arg === "number" || typeof arg === "boolean") {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter((arg) => arg).join(" ");
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance2.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message,
            args,
            type: instance2.name
          });
        }
      };
    }
  }
}
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const cursorRequestMap = /* @__PURE__ */ new WeakMap();
const transactionDoneMap = /* @__PURE__ */ new WeakMap();
const transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
const transformCache = /* @__PURE__ */ new WeakMap();
const reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);
function openDB(name2, version2, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name2, version2);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
    });
  }
  if (blocked)
    request.addEventListener("blocked", () => blocked());
  openPromise.then((db2) => {
    if (terminated)
      db2.addEventListener("close", () => terminated());
    if (blocking)
      db2.addEventListener("versionchange", () => blocking());
  }).catch(() => {
  });
  return openPromise;
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
  constructor(container) {
    this.container = container;
  }
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers.map((provider) => {
      if (isVersionServiceProvider(provider)) {
        const service = provider.getImmediate();
        return `${service.library}/${service.version}`;
      } else {
        return null;
      }
    }).filter((logString) => logString).join(" ");
  }
}
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
const name$o = "@firebase/app";
const version$1$1 = "0.8.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger$1 = new Logger("@firebase/app");
const name$n = "@firebase/app-compat";
const name$m = "@firebase/analytics-compat";
const name$l = "@firebase/analytics";
const name$k = "@firebase/app-check-compat";
const name$j = "@firebase/app-check";
const name$i = "@firebase/auth";
const name$h = "@firebase/auth-compat";
const name$g = "@firebase/database";
const name$f = "@firebase/database-compat";
const name$e = "@firebase/functions";
const name$d = "@firebase/functions-compat";
const name$c = "@firebase/installations";
const name$b = "@firebase/installations-compat";
const name$a = "@firebase/messaging";
const name$9 = "@firebase/messaging-compat";
const name$8 = "@firebase/performance";
const name$7 = "@firebase/performance-compat";
const name$6 = "@firebase/remote-config";
const name$5 = "@firebase/remote-config-compat";
const name$4 = "@firebase/storage";
const name$3 = "@firebase/storage-compat";
const name$2$1 = "@firebase/firestore";
const name$1$1 = "@firebase/firestore-compat";
const name$p = "firebase";
const version$3 = "9.12.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = "[DEFAULT]";
const PLATFORM_LOG_STRING = {
  [name$o]: "fire-core",
  [name$n]: "fire-core-compat",
  [name$l]: "fire-analytics",
  [name$m]: "fire-analytics-compat",
  [name$j]: "fire-app-check",
  [name$k]: "fire-app-check-compat",
  [name$i]: "fire-auth",
  [name$h]: "fire-auth-compat",
  [name$g]: "fire-rtdb",
  [name$f]: "fire-rtdb-compat",
  [name$e]: "fire-fn",
  [name$d]: "fire-fn-compat",
  [name$c]: "fire-iid",
  [name$b]: "fire-iid-compat",
  [name$a]: "fire-fcm",
  [name$9]: "fire-fcm-compat",
  [name$8]: "fire-perf",
  [name$7]: "fire-perf-compat",
  [name$6]: "fire-rc",
  [name$5]: "fire-rc-compat",
  [name$4]: "fire-gcs",
  [name$3]: "fire-gcs-compat",
  [name$2$1]: "fire-fst",
  [name$1$1]: "fire-fst-compat",
  "fire-js": "fire-js",
  [name$p]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _apps = /* @__PURE__ */ new Map();
const _components = /* @__PURE__ */ new Map();
function _addComponent(app2, component) {
  try {
    app2.container.addComponent(component);
  } catch (e) {
    logger$1.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e);
  }
}
function _addOrOverwriteComponent(app2, component) {
  app2.container.addOrOverwriteComponent(component);
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger$1.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component);
  for (const app2 of _apps.values()) {
    _addComponent(app2, component);
  }
  return true;
}
function _getProvider(app2, name2) {
  const heartbeatController = app2.container.getProvider("heartbeat").getImmediate({ optional: true });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app2.container.getProvider(name2);
}
function _removeServiceInstance(app2, name2, instanceIdentifier = DEFAULT_ENTRY_NAME) {
  _getProvider(app2, name2).clearInstance(instanceIdentifier);
}
function _clearComponents() {
  _components.clear();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS$1 = {
  ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  ["bad-app-name"]: "Illegal App name: '{$appName}",
  ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
  ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
  ["no-options"]: "Need to provide options, when not being deployed to hosting via source.",
  ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
  ["idb-open"]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-get"]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-set"]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-delete"]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
};
const ERROR_FACTORY$1 = new ErrorFactory("app", "Firebase", ERRORS$1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl$1 {
  constructor(options, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new Component("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY$1.create("app-deleted", { appName: this._name });
    }
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SDK_VERSION = version$3;
function initializeApp(_options, rawConfig = {}) {
  let options = _options;
  if (typeof rawConfig !== "object") {
    const name3 = rawConfig;
    rawConfig = { name: name3 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
  const name2 = config.name;
  if (typeof name2 !== "string" || !name2) {
    throw ERROR_FACTORY$1.create("bad-app-name", {
      appName: String(name2)
    });
  }
  options || (options = getDefaultAppConfig());
  if (!options) {
    throw ERROR_FACTORY$1.create("no-options");
  }
  const existingApp = _apps.get(name2);
  if (existingApp) {
    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY$1.create("duplicate-app", { appName: name2 });
    }
  }
  const container = new ComponentContainer(name2);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl$1(options, config, container);
  _apps.set(name2, newApp);
  return newApp;
}
function getApp(name2 = DEFAULT_ENTRY_NAME) {
  const app2 = _apps.get(name2);
  if (!app2 && name2 === DEFAULT_ENTRY_NAME) {
    return initializeApp();
  }
  if (!app2) {
    throw ERROR_FACTORY$1.create("no-app", { appName: name2 });
  }
  return app2;
}
function getApps() {
  return Array.from(_apps.values());
}
async function deleteApp(app2) {
  const name2 = app2.name;
  if (_apps.has(name2)) {
    _apps.delete(name2);
    await Promise.all(app2.container.getProviders().map((provider) => provider.delete()));
    app2.isDeleted = true;
  }
}
function registerVersion(libraryKeyOrName, version2, variant) {
  var _a2;
  let library = (_a2 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a2 !== void 0 ? _a2 : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version2.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning2 = [
      `Unable to register library "${library}" with version "${version2}":`
    ];
    if (libraryMismatch) {
      warning2.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning2.push("and");
    }
    if (versionMismatch) {
      warning2.push(`version name "${version2}" contains illegal characters (whitespace or "/")`);
    }
    logger$1.warn(warning2.join(" "));
    return;
  }
  _registerComponent(new Component(`${library}-version`, () => ({ library, version: version2 }), "VERSION"));
}
function onLog(logCallback, options) {
  if (logCallback !== null && typeof logCallback !== "function") {
    throw ERROR_FACTORY$1.create("invalid-log-argument");
  }
  setUserLogHandler(logCallback, options);
}
function setLogLevel$1(logLevel) {
  setLogLevel$2(logLevel);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME = "firebase-heartbeat-database";
const DB_VERSION = 1;
const STORE_NAME = "firebase-heartbeat-store";
let dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade: (db2, oldVersion) => {
        switch (oldVersion) {
          case 0:
            db2.createObjectStore(STORE_NAME);
        }
      }
    }).catch((e) => {
      throw ERROR_FACTORY$1.create("idb-open", {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app2) {
  var _a2;
  try {
    const db2 = await getDbPromise();
    return db2.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app2));
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger$1.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY$1.create("idb-get", {
        originalErrorMessage: (_a2 = e) === null || _a2 === void 0 ? void 0 : _a2.message
      });
      logger$1.warn(idbGetError.message);
    }
  }
}
async function writeHeartbeatsToIndexedDB(app2, heartbeatObject) {
  var _a2;
  try {
    const db2 = await getDbPromise();
    const tx = db2.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app2));
    return tx.done;
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger$1.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY$1.create("idb-set", {
        originalErrorMessage: (_a2 = e) === null || _a2 === void 0 ? void 0 : _a2.message
      });
      logger$1.warn(idbGetError.message);
    }
  }
}
function computeKey(app2) {
  return `${app2.name}!${app2.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_HEADER_BYTES = 1024;
const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
class HeartbeatServiceImpl {
  constructor(container) {
    this.container = container;
    this._heartbeatsCache = null;
    const app2 = this.container.getProvider("app").getImmediate();
    this._storage = new HeartbeatStorageImpl(app2);
    this._heartbeatsCachePromise = this._storage.read().then((result) => {
      this._heartbeatsCache = result;
      return result;
    });
  }
  async triggerHeartbeat() {
    const platformLogger = this.container.getProvider("platform-logger").getImmediate();
    const agent = platformLogger.getPlatformInfoString();
    const date = getUTCDateString();
    if (this._heartbeatsCache === null) {
      this._heartbeatsCache = await this._heartbeatsCachePromise;
    }
    if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
      return;
    } else {
      this._heartbeatsCache.heartbeats.push({ date, agent });
    }
    this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
      const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
      const now = Date.now();
      return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
    });
    return this._storage.overwrite(this._heartbeatsCache);
  }
  async getHeartbeatsHeader() {
    if (this._heartbeatsCache === null) {
      await this._heartbeatsCachePromise;
    }
    if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
      return "";
    }
    const date = getUTCDateString();
    const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
    const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
    this._heartbeatsCache.lastSentHeartbeatDate = date;
    if (unsentEntries.length > 0) {
      this._heartbeatsCache.heartbeats = unsentEntries;
      await this._storage.overwrite(this._heartbeatsCache);
    } else {
      this._heartbeatsCache.heartbeats = [];
      void this._storage.overwrite(this._heartbeatsCache);
    }
    return headerString;
  }
}
function getUTCDateString() {
  const today = new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find((hb2) => hb2.agent === singleDateHeartbeat.agent);
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date]
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries
  };
}
class HeartbeatStorageImpl {
  constructor(app2) {
    this.app = app2;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    if (!isIndexedDBAvailable()) {
      return false;
    } else {
      return validateIndexedDBOpenable().then(() => true).catch(() => false);
    }
  }
  async read() {
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return { heartbeats: [] };
    } else {
      const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
      return idbHeartbeatObject || { heartbeats: [] };
    }
  }
  async overwrite(heartbeatsObject) {
    var _a2;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a2 = heartbeatsObject.lastSentHeartbeatDate) !== null && _a2 !== void 0 ? _a2 : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: heartbeatsObject.heartbeats
      });
    }
  }
  async add(heartbeatsObject) {
    var _a2;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a2 = heartbeatsObject.lastSentHeartbeatDate) !== null && _a2 !== void 0 ? _a2 : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: [
          ...existingHeartbeatsObject.heartbeats,
          ...heartbeatsObject.heartbeats
        ]
      });
    }
  }
}
function countBytes(heartbeatsCache) {
  return base64urlEncodeWithoutPadding(
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents$1(variant) {
  _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
  _registerComponent(new Component("heartbeat", (container) => new HeartbeatServiceImpl(container), "PRIVATE"));
  registerVersion(name$o, version$1$1, variant);
  registerVersion(name$o, version$1$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents$1("");
const modularAPIs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SDK_VERSION,
  _DEFAULT_ENTRY_NAME: DEFAULT_ENTRY_NAME,
  _addComponent,
  _addOrOverwriteComponent,
  _apps,
  _clearComponents,
  _components,
  _getProvider,
  _registerComponent,
  _removeServiceInstance,
  deleteApp,
  getApp,
  getApps,
  initializeApp,
  onLog,
  registerVersion,
  setLogLevel: setLogLevel$1,
  FirebaseError
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
  constructor(_delegate, firebase2) {
    this._delegate = _delegate;
    this.firebase = firebase2;
    _addComponent(_delegate, new Component("app-compat", () => this, "PUBLIC"));
    this.container = _delegate.container;
  }
  get automaticDataCollectionEnabled() {
    return this._delegate.automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this._delegate.automaticDataCollectionEnabled = val;
  }
  get name() {
    return this._delegate.name;
  }
  get options() {
    return this._delegate.options;
  }
  delete() {
    return new Promise((resolve) => {
      this._delegate.checkDestroyed();
      resolve();
    }).then(() => {
      this.firebase.INTERNAL.removeApp(this.name);
      return deleteApp(this._delegate);
    });
  }
  _getService(name2, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    var _a2;
    this._delegate.checkDestroyed();
    const provider = this._delegate.container.getProvider(name2);
    if (!provider.isInitialized() && ((_a2 = provider.getComponent()) === null || _a2 === void 0 ? void 0 : _a2.instantiationMode) === "EXPLICIT") {
      provider.initialize();
    }
    return provider.getImmediate({
      identifier: instanceIdentifier
    });
  }
  _removeServiceInstance(name2, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    this._delegate.container.getProvider(name2).clearInstance(instanceIdentifier);
  }
  _addComponent(component) {
    _addComponent(this._delegate, component);
  }
  _addOrOverwriteComponent(component) {
    _addOrOverwriteComponent(this._delegate, component);
  }
  toJSON() {
    return {
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
  ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance."
};
const ERROR_FACTORY = new ErrorFactory("app-compat", "Firebase", ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
  const apps = {};
  const namespace = {
    __esModule: true,
    initializeApp: initializeAppCompat,
    app: app2,
    registerVersion,
    setLogLevel: setLogLevel$1,
    onLog,
    apps: null,
    SDK_VERSION,
    INTERNAL: {
      registerComponent: registerComponentCompat,
      removeApp,
      useAsService,
      modularAPIs
    }
  };
  namespace["default"] = namespace;
  Object.defineProperty(namespace, "apps", {
    get: getApps2
  });
  function removeApp(name2) {
    delete apps[name2];
  }
  function app2(name2) {
    name2 = name2 || DEFAULT_ENTRY_NAME;
    if (!contains(apps, name2)) {
      throw ERROR_FACTORY.create("no-app", { appName: name2 });
    }
    return apps[name2];
  }
  app2["App"] = firebaseAppImpl;
  function initializeAppCompat(options, rawConfig = {}) {
    const app3 = initializeApp(options, rawConfig);
    if (contains(apps, app3.name)) {
      return apps[app3.name];
    }
    const appCompat = new firebaseAppImpl(app3, namespace);
    apps[app3.name] = appCompat;
    return appCompat;
  }
  function getApps2() {
    return Object.keys(apps).map((name2) => apps[name2]);
  }
  function registerComponentCompat(component) {
    const componentName = component.name;
    const componentNameWithoutCompat = componentName.replace("-compat", "");
    if (_registerComponent(component) && component.type === "PUBLIC") {
      const serviceNamespace = (appArg = app2()) => {
        if (typeof appArg[componentNameWithoutCompat] !== "function") {
          throw ERROR_FACTORY.create("invalid-app-argument", {
            appName: componentName
          });
        }
        return appArg[componentNameWithoutCompat]();
      };
      if (component.serviceProps !== void 0) {
        deepExtend(serviceNamespace, component.serviceProps);
      }
      namespace[componentNameWithoutCompat] = serviceNamespace;
      firebaseAppImpl.prototype[componentNameWithoutCompat] = function(...args) {
        const serviceFxn = this._getService.bind(this, componentName);
        return serviceFxn.apply(this, component.multipleInstances ? args : []);
      };
    }
    return component.type === "PUBLIC" ? namespace[componentNameWithoutCompat] : null;
  }
  function useAsService(app3, name2) {
    if (name2 === "serverAuth") {
      return null;
    }
    const useService = name2;
    return useService;
  }
  return namespace;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createFirebaseNamespace() {
  const namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = Object.assign(Object.assign({}, namespace.INTERNAL), {
    createFirebaseNamespace,
    extendNamespace,
    createSubscribe,
    ErrorFactory,
    deepExtend
  });
  function extendNamespace(props) {
    deepExtend(namespace, props);
  }
  return namespace;
}
const firebase$1 = createFirebaseNamespace();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new Logger("@firebase/app-compat");
const name$2 = "@firebase/app-compat";
const version$2 = "0.1.36";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
  registerVersion(name$2, version$2, variant);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if (isBrowser() && self.firebase !== void 0) {
  logger.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);
  const sdkVersion = self.firebase.SDK_VERSION;
  if (sdkVersion && sdkVersion.indexOf("LITE") >= 0) {
    logger.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `);
  }
}
const firebase = firebase$1;
registerCoreComponents();
var name$1 = "firebase";
var version$1 = "9.12.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name$1, version$1, "app-compat");
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var k$1, goog = goog || {}, l = commonjsGlobal || self;
function aa() {
}
function ba$1(a) {
  var b2 = typeof a;
  b2 = "object" != b2 ? b2 : a ? Array.isArray(a) ? "array" : b2 : "null";
  return "array" == b2 || "object" == b2 && "number" == typeof a.length;
}
function p(a) {
  var b2 = typeof a;
  return "object" == b2 && null != a || "function" == b2;
}
function ca$1(a) {
  return Object.prototype.hasOwnProperty.call(a, da$1) && a[da$1] || (a[da$1] = ++ea$1);
}
var da$1 = "closure_uid_" + (1e9 * Math.random() >>> 0), ea$1 = 0;
function fa$1(a, b2, c) {
  return a.call.apply(a.bind, arguments);
}
function ha(a, b2, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b2, e);
    };
  }
  return function() {
    return a.apply(b2, arguments);
  };
}
function q$1(a, b2, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q$1 = fa$1 : q$1 = ha;
  return q$1.apply(null, arguments);
}
function ia$1(a, b2) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function t(a, b2) {
  function c() {
  }
  c.prototype = b2.prototype;
  a.X = b2.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Wb = function(d, e, f2) {
    for (var h = Array(arguments.length - 2), n2 = 2; n2 < arguments.length; n2++)
      h[n2 - 2] = arguments[n2];
    return b2.prototype[e].apply(d, h);
  };
}
function v$1() {
  this.s = this.s;
  this.o = this.o;
}
var ja$1 = 0;
v$1.prototype.s = false;
v$1.prototype.na = function() {
  if (!this.s && (this.s = true, this.M(), 0 != ja$1)) {
    ca$1(this);
  }
};
v$1.prototype.M = function() {
  if (this.o)
    for (; this.o.length; )
      this.o.shift()();
};
const la = Array.prototype.indexOf ? function(a, b2) {
  return Array.prototype.indexOf.call(a, b2, void 0);
} : function(a, b2) {
  if ("string" === typeof a)
    return "string" !== typeof b2 || 1 != b2.length ? -1 : a.indexOf(b2, 0);
  for (let c = 0; c < a.length; c++)
    if (c in a && a[c] === b2)
      return c;
  return -1;
};
function ma$1(a) {
  const b2 = a.length;
  if (0 < b2) {
    const c = Array(b2);
    for (let d = 0; d < b2; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function na$1(a, b2) {
  for (let c = 1; c < arguments.length; c++) {
    const d = arguments[c];
    if (ba$1(d)) {
      const e = a.length || 0, f2 = d.length || 0;
      a.length = e + f2;
      for (let h = 0; h < f2; h++)
        a[e + h] = d[h];
    } else
      a.push(d);
  }
}
function w(a, b2) {
  this.type = a;
  this.g = this.target = b2;
  this.defaultPrevented = false;
}
w.prototype.h = function() {
  this.defaultPrevented = true;
};
var oa$1 = function() {
  if (!l.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b2 = Object.defineProperty({}, "passive", { get: function() {
    a = true;
  } });
  try {
    l.addEventListener("test", aa, b2), l.removeEventListener("test", aa, b2);
  } catch (c) {
  }
  return a;
}();
function pa$1(a) {
  return /^[\s\xa0]*$/.test(a);
}
var qa$1 = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function ra$1(a, b2) {
  return a < b2 ? -1 : a > b2 ? 1 : 0;
}
function sa$1() {
  var a = l.navigator;
  return a && (a = a.userAgent) ? a : "";
}
function x$1(a) {
  return -1 != sa$1().indexOf(a);
}
function ta$1(a) {
  ta$1[" "](a);
  return a;
}
ta$1[" "] = aa;
function ua$1(a) {
  var b2 = va$1;
  return Object.prototype.hasOwnProperty.call(b2, 9) ? b2[9] : b2[9] = a(9);
}
var wa$1 = x$1("Opera"), y = x$1("Trident") || x$1("MSIE"), xa$1 = x$1("Edge"), ya$1 = xa$1 || y, za$1 = x$1("Gecko") && !(-1 != sa$1().toLowerCase().indexOf("webkit") && !x$1("Edge")) && !(x$1("Trident") || x$1("MSIE")) && !x$1("Edge"), Aa$1 = -1 != sa$1().toLowerCase().indexOf("webkit") && !x$1("Edge");
function Ba() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Ea$1;
a: {
  var Fa$1 = "", Ga$1 = function() {
    var a = sa$1();
    if (za$1)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (xa$1)
      return /Edge\/([\d\.]+)/.exec(a);
    if (y)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (Aa$1)
      return /WebKit\/(\S+)/.exec(a);
    if (wa$1)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Ga$1 && (Fa$1 = Ga$1 ? Ga$1[1] : "");
  if (y) {
    var Ha$1 = Ba();
    if (null != Ha$1 && Ha$1 > parseFloat(Fa$1)) {
      Ea$1 = String(Ha$1);
      break a;
    }
  }
  Ea$1 = Fa$1;
}
var va$1 = {};
function Ia$1() {
  return ua$1(function() {
    let a = 0;
    const b2 = qa$1(String(Ea$1)).split("."), c = qa$1("9").split("."), d = Math.max(b2.length, c.length);
    for (let h = 0; 0 == a && h < d; h++) {
      var e = b2[h] || "", f2 = c[h] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f2 = /(\d*)(\D*)(.*)/.exec(f2) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f2[0].length)
          break;
        a = ra$1(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f2[1].length ? 0 : parseInt(f2[1], 10)) || ra$1(0 == e[2].length, 0 == f2[2].length) || ra$1(e[2], f2[2]);
        e = e[3];
        f2 = f2[3];
      } while (0 == a);
    }
    return 0 <= a;
  });
}
var Ja;
if (l.document && y) {
  var Ka$1 = Ba();
  Ja = Ka$1 ? Ka$1 : parseInt(Ea$1, 10) || void 0;
} else
  Ja = void 0;
var La = Ja;
function z$1(a, b2) {
  w.call(this, a ? a.type : "");
  this.relatedTarget = this.g = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.i = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b2;
    if (b2 = a.relatedTarget) {
      if (za$1) {
        a: {
          try {
            ta$1(b2.nodeName);
            var e = true;
            break a;
          } catch (f2) {
          }
          e = false;
        }
        e || (b2 = null);
      }
    } else
      "mouseover" == c ? b2 = a.fromElement : "mouseout" == c && (b2 = a.toElement);
    this.relatedTarget = b2;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ma$1[a.pointerType] || "";
    this.state = a.state;
    this.i = a;
    a.defaultPrevented && z$1.X.h.call(this);
  }
}
t(z$1, w);
var Ma$1 = { 2: "touch", 3: "pen", 4: "mouse" };
z$1.prototype.h = function() {
  z$1.X.h.call(this);
  var a = this.i;
  a.preventDefault ? a.preventDefault() : a.returnValue = false;
};
var A = "closure_listenable_" + (1e6 * Math.random() | 0);
var Na$1 = 0;
function Oa$1(a, b2, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b2;
  this.type = c;
  this.capture = !!d;
  this.ha = e;
  this.key = ++Na$1;
  this.ba = this.ea = false;
}
function Pa$1(a) {
  a.ba = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ha = null;
}
function Qa$1(a, b2, c) {
  for (const d in a)
    b2.call(c, a[d], d, a);
}
function Ra$1(a) {
  const b2 = {};
  for (const c in a)
    b2[c] = a[c];
  return b2;
}
const Sa$1 = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ta$1(a, b2) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (let f2 = 0; f2 < Sa$1.length; f2++)
      c = Sa$1[f2], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ua$1(a) {
  this.src = a;
  this.g = {};
  this.h = 0;
}
Ua$1.prototype.add = function(a, b2, c, d, e) {
  var f2 = a.toString();
  a = this.g[f2];
  a || (a = this.g[f2] = [], this.h++);
  var h = Va$1(a, b2, d, e);
  -1 < h ? (b2 = a[h], c || (b2.ea = false)) : (b2 = new Oa$1(b2, this.src, f2, !!d, e), b2.ea = c, a.push(b2));
  return b2;
};
function Wa$1(a, b2) {
  var c = b2.type;
  if (c in a.g) {
    var d = a.g[c], e = la(d, b2), f2;
    (f2 = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f2 && (Pa$1(b2), 0 == a.g[c].length && (delete a.g[c], a.h--));
  }
}
function Va$1(a, b2, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f2 = a[e];
    if (!f2.ba && f2.listener == b2 && f2.capture == !!c && f2.ha == d)
      return e;
  }
  return -1;
}
var Xa$1 = "closure_lm_" + (1e6 * Math.random() | 0), Ya$1 = {};
function $a$1(a, b2, c, d, e) {
  if (d && d.once)
    return ab(a, b2, c, d, e);
  if (Array.isArray(b2)) {
    for (var f2 = 0; f2 < b2.length; f2++)
      $a$1(a, b2[f2], c, d, e);
    return null;
  }
  c = bb(c);
  return a && a[A] ? a.N(b2, c, p(d) ? !!d.capture : !!d, e) : cb(a, b2, c, false, d, e);
}
function cb(a, b2, c, d, e, f2) {
  if (!b2)
    throw Error("Invalid event type");
  var h = p(e) ? !!e.capture : !!e, n2 = db$1(a);
  n2 || (a[Xa$1] = n2 = new Ua$1(a));
  c = n2.add(b2, c, d, h, f2);
  if (c.proxy)
    return c;
  d = eb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    oa$1 || (e = h), void 0 === e && (e = false), a.addEventListener(b2.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(fb(b2.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function eb() {
  function a(c) {
    return b2.call(a.src, a.listener, c);
  }
  const b2 = gb;
  return a;
}
function ab(a, b2, c, d, e) {
  if (Array.isArray(b2)) {
    for (var f2 = 0; f2 < b2.length; f2++)
      ab(a, b2[f2], c, d, e);
    return null;
  }
  c = bb(c);
  return a && a[A] ? a.O(b2, c, p(d) ? !!d.capture : !!d, e) : cb(a, b2, c, true, d, e);
}
function hb(a, b2, c, d, e) {
  if (Array.isArray(b2))
    for (var f2 = 0; f2 < b2.length; f2++)
      hb(a, b2[f2], c, d, e);
  else
    (d = p(d) ? !!d.capture : !!d, c = bb(c), a && a[A]) ? (a = a.i, b2 = String(b2).toString(), b2 in a.g && (f2 = a.g[b2], c = Va$1(f2, c, d, e), -1 < c && (Pa$1(f2[c]), Array.prototype.splice.call(f2, c, 1), 0 == f2.length && (delete a.g[b2], a.h--)))) : a && (a = db$1(a)) && (b2 = a.g[b2.toString()], a = -1, b2 && (a = Va$1(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && ib(c));
}
function ib(a) {
  if ("number" !== typeof a && a && !a.ba) {
    var b2 = a.src;
    if (b2 && b2[A])
      Wa$1(b2.i, a);
    else {
      var c = a.type, d = a.proxy;
      b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(fb(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
      (c = db$1(b2)) ? (Wa$1(c, a), 0 == c.h && (c.src = null, b2[Xa$1] = null)) : Pa$1(a);
    }
  }
}
function fb(a) {
  return a in Ya$1 ? Ya$1[a] : Ya$1[a] = "on" + a;
}
function gb(a, b2) {
  if (a.ba)
    a = true;
  else {
    b2 = new z$1(b2, this);
    var c = a.listener, d = a.ha || a.src;
    a.ea && ib(a);
    a = c.call(d, b2);
  }
  return a;
}
function db$1(a) {
  a = a[Xa$1];
  return a instanceof Ua$1 ? a : null;
}
var jb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function bb(a) {
  if ("function" === typeof a)
    return a;
  a[jb] || (a[jb] = function(b2) {
    return a.handleEvent(b2);
  });
  return a[jb];
}
function B$1() {
  v$1.call(this);
  this.i = new Ua$1(this);
  this.P = this;
  this.I = null;
}
t(B$1, v$1);
B$1.prototype[A] = true;
B$1.prototype.removeEventListener = function(a, b2, c, d) {
  hb(this, a, b2, c, d);
};
function C$1(a, b2) {
  var c, d = a.I;
  if (d)
    for (c = []; d; d = d.I)
      c.push(d);
  a = a.P;
  d = b2.type || b2;
  if ("string" === typeof b2)
    b2 = new w(b2, a);
  else if (b2 instanceof w)
    b2.target = b2.target || a;
  else {
    var e = b2;
    b2 = new w(d, a);
    Ta$1(b2, e);
  }
  e = true;
  if (c)
    for (var f2 = c.length - 1; 0 <= f2; f2--) {
      var h = b2.g = c[f2];
      e = kb(h, d, true, b2) && e;
    }
  h = b2.g = a;
  e = kb(h, d, true, b2) && e;
  e = kb(h, d, false, b2) && e;
  if (c)
    for (f2 = 0; f2 < c.length; f2++)
      h = b2.g = c[f2], e = kb(h, d, false, b2) && e;
}
B$1.prototype.M = function() {
  B$1.X.M.call(this);
  if (this.i) {
    var a = this.i, c;
    for (c in a.g) {
      for (var d = a.g[c], e = 0; e < d.length; e++)
        Pa$1(d[e]);
      delete a.g[c];
      a.h--;
    }
  }
  this.I = null;
};
B$1.prototype.N = function(a, b2, c, d) {
  return this.i.add(String(a), b2, false, c, d);
};
B$1.prototype.O = function(a, b2, c, d) {
  return this.i.add(String(a), b2, true, c, d);
};
function kb(a, b2, c, d) {
  b2 = a.i.g[String(b2)];
  if (!b2)
    return true;
  b2 = b2.concat();
  for (var e = true, f2 = 0; f2 < b2.length; ++f2) {
    var h = b2[f2];
    if (h && !h.ba && h.capture == c) {
      var n2 = h.listener, u2 = h.ha || h.src;
      h.ea && Wa$1(a.i, h);
      e = false !== n2.call(u2, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
var lb = l.JSON.stringify;
function mb() {
  var a = nb;
  let b2 = null;
  a.g && (b2 = a.g, a.g = a.g.next, a.g || (a.h = null), b2.next = null);
  return b2;
}
class ob {
  constructor() {
    this.h = this.g = null;
  }
  add(a, b2) {
    const c = pb.get();
    c.set(a, b2);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  }
}
var pb = new class {
  constructor(a, b2) {
    this.i = a;
    this.j = b2;
    this.h = 0;
    this.g = null;
  }
  get() {
    let a;
    0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
    return a;
  }
}(() => new qb(), (a) => a.reset());
class qb {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(a, b2) {
    this.h = a;
    this.g = b2;
    this.next = null;
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function rb(a) {
  l.setTimeout(() => {
    throw a;
  }, 0);
}
function sb(a, b2) {
  ub || vb();
  wb || (ub(), wb = true);
  nb.add(a, b2);
}
var ub;
function vb() {
  var a = l.Promise.resolve(void 0);
  ub = function() {
    a.then(xb);
  };
}
var wb = false, nb = new ob();
function xb() {
  for (var a; a = mb(); ) {
    try {
      a.h.call(a.g);
    } catch (c) {
      rb(c);
    }
    var b2 = pb;
    b2.j(a);
    100 > b2.h && (b2.h++, a.next = b2.g, b2.g = a);
  }
  wb = false;
}
function yb(a, b2) {
  B$1.call(this);
  this.h = a || 1;
  this.g = b2 || l;
  this.j = q$1(this.lb, this);
  this.l = Date.now();
}
t(yb, B$1);
k$1 = yb.prototype;
k$1.ca = false;
k$1.R = null;
k$1.lb = function() {
  if (this.ca) {
    var a = Date.now() - this.l;
    0 < a && a < 0.8 * this.h ? this.R = this.g.setTimeout(this.j, this.h - a) : (this.R && (this.g.clearTimeout(this.R), this.R = null), C$1(this, "tick"), this.ca && (zb(this), this.start()));
  }
};
k$1.start = function() {
  this.ca = true;
  this.R || (this.R = this.g.setTimeout(this.j, this.h), this.l = Date.now());
};
function zb(a) {
  a.ca = false;
  a.R && (a.g.clearTimeout(a.R), a.R = null);
}
k$1.M = function() {
  yb.X.M.call(this);
  zb(this);
  delete this.g;
};
function Ab(a, b2, c) {
  if ("function" === typeof a)
    c && (a = q$1(a, c));
  else if (a && "function" == typeof a.handleEvent)
    a = q$1(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b2) ? -1 : l.setTimeout(a, b2 || 0);
}
function Bb(a) {
  a.g = Ab(() => {
    a.g = null;
    a.i && (a.i = false, Bb(a));
  }, a.j);
  const b2 = a.h;
  a.h = null;
  a.m.apply(null, b2);
}
class Cb extends v$1 {
  constructor(a, b2) {
    super();
    this.m = a;
    this.j = b2;
    this.h = null;
    this.i = false;
    this.g = null;
  }
  l(a) {
    this.h = arguments;
    this.g ? this.i = true : Bb(this);
  }
  M() {
    super.M();
    this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
  }
}
function D$1(a) {
  v$1.call(this);
  this.h = a;
  this.g = {};
}
t(D$1, v$1);
var Db = [];
function Eb(a, b2, c, d) {
  Array.isArray(c) || (c && (Db[0] = c.toString()), c = Db);
  for (var e = 0; e < c.length; e++) {
    var f2 = $a$1(b2, c[e], d || a.handleEvent, false, a.h || a);
    if (!f2)
      break;
    a.g[f2.key] = f2;
  }
}
function Fb(a) {
  Qa$1(a.g, function(b2, c) {
    this.g.hasOwnProperty(c) && ib(b2);
  }, a);
  a.g = {};
}
D$1.prototype.M = function() {
  D$1.X.M.call(this);
  Fb(this);
};
D$1.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Gb() {
  this.g = true;
}
Gb.prototype.Aa = function() {
  this.g = false;
};
function Hb(a, b2, c, d, e, f2) {
  a.info(function() {
    if (a.g)
      if (f2) {
        var h = "";
        for (var n2 = f2.split("&"), u2 = 0; u2 < n2.length; u2++) {
          var m2 = n2[u2].split("=");
          if (1 < m2.length) {
            var r2 = m2[0];
            m2 = m2[1];
            var F2 = r2.split("_");
            h = 2 <= F2.length && "type" == F2[1] ? h + (r2 + "=" + m2 + "&") : h + (r2 + "=redacted&");
          }
        }
      } else
        h = null;
    else
      h = f2;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + h;
  });
}
function Ib(a, b2, c, d, e, f2, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f2 + " " + h;
  });
}
function E(a, b2, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b2 + "): " + Jb(a, c) + (d ? " " + d : "");
  });
}
function Kb(a, b2) {
  a.info(function() {
    return "TIMEOUT: " + b2;
  });
}
Gb.prototype.info = function() {
};
function Jb(a, b2) {
  if (!a.g)
    return b2;
  if (!b2)
    return null;
  try {
    var c = JSON.parse(b2);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f2 = e[0];
              if ("noop" != f2 && "stop" != f2 && "close" != f2)
                for (var h = 1; h < e.length; h++)
                  e[h] = "";
            }
          }
        }
    }
    return lb(c);
  } catch (n2) {
    return b2;
  }
}
var G$1 = {}, Lb = null;
function Mb() {
  return Lb = Lb || new B$1();
}
G$1.Pa = "serverreachability";
function Nb(a) {
  w.call(this, G$1.Pa, a);
}
t(Nb, w);
function H$1(a) {
  const b2 = Mb();
  C$1(b2, new Nb(b2));
}
G$1.STAT_EVENT = "statevent";
function Ob(a, b2) {
  w.call(this, G$1.STAT_EVENT, a);
  this.stat = b2;
}
t(Ob, w);
function I(a) {
  const b2 = Mb();
  C$1(b2, new Ob(b2, a));
}
G$1.Qa = "timingevent";
function Pb(a, b2) {
  w.call(this, G$1.Qa, a);
  this.size = b2;
}
t(Pb, w);
function J(a, b2) {
  if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function");
  return l.setTimeout(function() {
    a();
  }, b2);
}
var Qb = { NO_ERROR: 0, mb: 1, zb: 2, yb: 3, tb: 4, xb: 5, Ab: 6, Ma: 7, TIMEOUT: 8, Db: 9 };
var Rb = { rb: "complete", Nb: "success", Na: "error", Ma: "abort", Fb: "ready", Gb: "readystatechange", TIMEOUT: "timeout", Bb: "incrementaldata", Eb: "progress", ub: "downloadprogress", Vb: "uploadprogress" };
function Sb() {
}
Sb.prototype.h = null;
function Tb(a) {
  return a.h || (a.h = a.i());
}
function Ub() {
}
var K$1 = { OPEN: "a", qb: "b", Na: "c", Cb: "d" };
function Vb() {
  w.call(this, "d");
}
t(Vb, w);
function Wb() {
  w.call(this, "c");
}
t(Wb, w);
var Xb;
function Yb() {
}
t(Yb, Sb);
Yb.prototype.g = function() {
  return new XMLHttpRequest();
};
Yb.prototype.i = function() {
  return {};
};
Xb = new Yb();
function L$1(a, b2, c, d) {
  this.l = a;
  this.j = b2;
  this.m = c;
  this.U = d || 1;
  this.S = new D$1(this);
  this.O = Zb;
  a = ya$1 ? 125 : void 0;
  this.T = new yb(a);
  this.H = null;
  this.i = false;
  this.s = this.A = this.v = this.K = this.F = this.V = this.B = null;
  this.D = [];
  this.g = null;
  this.C = 0;
  this.o = this.u = null;
  this.Y = -1;
  this.I = false;
  this.N = 0;
  this.L = null;
  this.$ = this.J = this.Z = this.P = false;
  this.h = new $b();
}
function $b() {
  this.i = null;
  this.g = "";
  this.h = false;
}
var Zb = 45e3, ac$1 = {}, bc$1 = {};
k$1 = L$1.prototype;
k$1.setTimeout = function(a) {
  this.O = a;
};
function cc$1(a, b2, c) {
  a.K = 1;
  a.v = dc$1(M$1(b2));
  a.s = c;
  a.P = true;
  ec$1(a, null);
}
function ec$1(a, b2) {
  a.F = Date.now();
  N$1(a);
  a.A = M$1(a.v);
  var c = a.A, d = a.U;
  Array.isArray(d) || (d = [String(d)]);
  fc$1(c.i, "t", d);
  a.C = 0;
  c = a.l.H;
  a.h = new $b();
  a.g = gc$1(a.l, c ? b2 : null, !a.s);
  0 < a.N && (a.L = new Cb(q$1(a.La, a, a.g), a.N));
  Eb(a.S, a.g, "readystatechange", a.ib);
  b2 = a.H ? Ra$1(a.H) : {};
  a.s ? (a.u || (a.u = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.g.da(a.A, a.u, a.s, b2)) : (a.u = "GET", a.g.da(a.A, a.u, null, b2));
  H$1();
  Hb(a.j, a.u, a.A, a.m, a.U, a.s);
}
k$1.ib = function(a) {
  a = a.target;
  const b2 = this.L;
  b2 && 3 == O$1(a) ? b2.l() : this.La(a);
};
k$1.La = function(a) {
  try {
    if (a == this.g)
      a: {
        const r2 = O$1(this.g);
        var b2 = this.g.Ea();
        const F2 = this.g.aa();
        if (!(3 > r2) && (3 != r2 || ya$1 || this.g && (this.h.h || this.g.fa() || hc$1(this.g)))) {
          this.I || 4 != r2 || 7 == b2 || (8 == b2 || 0 >= F2 ? H$1(3) : H$1(2));
          ic$1(this);
          var c = this.g.aa();
          this.Y = c;
          b:
            if (jc$1(this)) {
              var d = hc$1(this.g);
              a = "";
              var e = d.length, f2 = 4 == O$1(this.g);
              if (!this.h.i) {
                if ("undefined" === typeof TextDecoder) {
                  P$1(this);
                  Q$1(this);
                  var h = "";
                  break b;
                }
                this.h.i = new l.TextDecoder();
              }
              for (b2 = 0; b2 < e; b2++)
                this.h.h = true, a += this.h.i.decode(d[b2], { stream: f2 && b2 == e - 1 });
              d.splice(
                0,
                e
              );
              this.h.g += a;
              this.C = 0;
              h = this.h.g;
            } else
              h = this.g.fa();
          this.i = 200 == c;
          Ib(this.j, this.u, this.A, this.m, this.U, r2, c);
          if (this.i) {
            if (this.Z && !this.J) {
              b: {
                if (this.g) {
                  var n2, u2 = this.g;
                  if ((n2 = u2.g ? u2.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !pa$1(n2)) {
                    var m2 = n2;
                    break b;
                  }
                }
                m2 = null;
              }
              if (c = m2)
                E(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.J = true, kc$1(this, c);
              else {
                this.i = false;
                this.o = 3;
                I(12);
                P$1(this);
                Q$1(this);
                break a;
              }
            }
            this.P ? (lc$1(this, r2, h), ya$1 && this.i && 3 == r2 && (Eb(this.S, this.T, "tick", this.hb), this.T.start())) : (E(this.j, this.m, h, null), kc$1(this, h));
            4 == r2 && P$1(this);
            this.i && !this.I && (4 == r2 ? mc$1(this.l, this) : (this.i = false, N$1(this)));
          } else
            400 == c && 0 < h.indexOf("Unknown SID") ? (this.o = 3, I(12)) : (this.o = 0, I(13)), P$1(this), Q$1(this);
        }
      }
  } catch (r2) {
  } finally {
  }
};
function jc$1(a) {
  return a.g ? "GET" == a.u && 2 != a.K && a.l.Da : false;
}
function lc$1(a, b2, c) {
  let d = true, e;
  for (; !a.I && a.C < c.length; )
    if (e = nc$1(a, c), e == bc$1) {
      4 == b2 && (a.o = 4, I(14), d = false);
      E(a.j, a.m, null, "[Incomplete Response]");
      break;
    } else if (e == ac$1) {
      a.o = 4;
      I(15);
      E(a.j, a.m, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      E(a.j, a.m, e, null), kc$1(a, e);
  jc$1(a) && e != bc$1 && e != ac$1 && (a.h.g = "", a.C = 0);
  4 != b2 || 0 != c.length || a.h.h || (a.o = 1, I(16), d = false);
  a.i = a.i && d;
  d ? 0 < c.length && !a.$ && (a.$ = true, b2 = a.l, b2.g == a && b2.$ && !b2.K && (b2.j.info("Great, no buffering proxy detected. Bytes received: " + c.length), oc$1(b2), b2.K = true, I(11))) : (E(
    a.j,
    a.m,
    c,
    "[Invalid Chunked Response]"
  ), P$1(a), Q$1(a));
}
k$1.hb = function() {
  if (this.g) {
    var a = O$1(this.g), b2 = this.g.fa();
    this.C < b2.length && (ic$1(this), lc$1(this, a, b2), this.i && 4 != a && N$1(this));
  }
};
function nc$1(a, b2) {
  var c = a.C, d = b2.indexOf("\n", c);
  if (-1 == d)
    return bc$1;
  c = Number(b2.substring(c, d));
  if (isNaN(c))
    return ac$1;
  d += 1;
  if (d + c > b2.length)
    return bc$1;
  b2 = b2.substr(d, c);
  a.C = d + c;
  return b2;
}
k$1.cancel = function() {
  this.I = true;
  P$1(this);
};
function N$1(a) {
  a.V = Date.now() + a.O;
  pc$1(a, a.O);
}
function pc$1(a, b2) {
  if (null != a.B)
    throw Error("WatchDog timer not null");
  a.B = J(q$1(a.gb, a), b2);
}
function ic$1(a) {
  a.B && (l.clearTimeout(a.B), a.B = null);
}
k$1.gb = function() {
  this.B = null;
  const a = Date.now();
  0 <= a - this.V ? (Kb(this.j, this.A), 2 != this.K && (H$1(), I(17)), P$1(this), this.o = 2, Q$1(this)) : pc$1(this, this.V - a);
};
function Q$1(a) {
  0 == a.l.G || a.I || mc$1(a.l, a);
}
function P$1(a) {
  ic$1(a);
  var b2 = a.L;
  b2 && "function" == typeof b2.na && b2.na();
  a.L = null;
  zb(a.T);
  Fb(a.S);
  a.g && (b2 = a.g, a.g = null, b2.abort(), b2.na());
}
function kc$1(a, b2) {
  try {
    var c = a.l;
    if (0 != c.G && (c.g == a || qc$1(c.h, a))) {
      if (!a.J && qc$1(c.h, a) && 3 == c.G) {
        try {
          var d = c.Fa.g.parse(b2);
        } catch (m2) {
          d = null;
        }
        if (Array.isArray(d) && 3 == d.length) {
          var e = d;
          if (0 == e[0])
            a: {
              if (!c.u) {
                if (c.g)
                  if (c.g.F + 3e3 < a.F)
                    rc$1(c), sc$1(c);
                  else
                    break a;
                tc$1(c);
                I(18);
              }
            }
          else
            c.Ba = e[1], 0 < c.Ba - c.T && 37500 > e[2] && c.L && 0 == c.A && !c.v && (c.v = J(q$1(c.cb, c), 6e3));
          if (1 >= uc$1(c.h) && c.ja) {
            try {
              c.ja();
            } catch (m2) {
            }
            c.ja = void 0;
          }
        } else
          R(c, 11);
      } else if ((a.J || c.g == a) && rc$1(c), !pa$1(b2))
        for (e = c.Fa.g.parse(b2), b2 = 0; b2 < e.length; b2++) {
          let m2 = e[b2];
          c.T = m2[0];
          m2 = m2[1];
          if (2 == c.G)
            if ("c" == m2[0]) {
              c.I = m2[1];
              c.ka = m2[2];
              const r2 = m2[3];
              null != r2 && (c.ma = r2, c.j.info("VER=" + c.ma));
              const F2 = m2[4];
              null != F2 && (c.Ca = F2, c.j.info("SVER=" + c.Ca));
              const Ca2 = m2[5];
              null != Ca2 && "number" === typeof Ca2 && 0 < Ca2 && (d = 1.5 * Ca2, c.J = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
              d = c;
              const Z2 = a.g;
              if (Z2) {
                const Da2 = Z2.g ? Z2.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (Da2) {
                  var f2 = d.h;
                  f2.g || -1 == Da2.indexOf("spdy") && -1 == Da2.indexOf("quic") && -1 == Da2.indexOf("h2") || (f2.j = f2.l, f2.g = /* @__PURE__ */ new Set(), f2.h && (vc$1(f2, f2.h), f2.h = null));
                }
                if (d.D) {
                  const tb2 = Z2.g ? Z2.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  tb2 && (d.za = tb2, S$1(d.F, d.D, tb2));
                }
              }
              c.G = 3;
              c.l && c.l.xa();
              c.$ && (c.P = Date.now() - a.F, c.j.info("Handshake RTT: " + c.P + "ms"));
              d = c;
              var h = a;
              d.sa = wc$1(d, d.H ? d.ka : null, d.V);
              if (h.J) {
                xc$1(d.h, h);
                var n2 = h, u2 = d.J;
                u2 && n2.setTimeout(u2);
                n2.B && (ic$1(n2), N$1(n2));
                d.g = h;
              } else
                yc$1(d);
              0 < c.i.length && zc$1(c);
            } else
              "stop" != m2[0] && "close" != m2[0] || R(c, 7);
          else
            3 == c.G && ("stop" == m2[0] || "close" == m2[0] ? "stop" == m2[0] ? R(c, 7) : Ac$1(c) : "noop" != m2[0] && c.l && c.l.wa(m2), c.A = 0);
        }
    }
    H$1(4);
  } catch (m2) {
  }
}
function Bc$1(a) {
  if (a.W && "function" == typeof a.W)
    return a.W();
  if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
    return Array.from(a.values());
  if ("string" === typeof a)
    return a.split("");
  if (ba$1(a)) {
    for (var b2 = [], c = a.length, d = 0; d < c; d++)
      b2.push(a[d]);
    return b2;
  }
  b2 = [];
  c = 0;
  for (d in a)
    b2[c++] = a[d];
  return b2;
}
function Cc$1(a) {
  if (a.oa && "function" == typeof a.oa)
    return a.oa();
  if (!a.W || "function" != typeof a.W) {
    if ("undefined" !== typeof Map && a instanceof Map)
      return Array.from(a.keys());
    if (!("undefined" !== typeof Set && a instanceof Set)) {
      if (ba$1(a) || "string" === typeof a) {
        var b2 = [];
        a = a.length;
        for (var c = 0; c < a; c++)
          b2.push(c);
        return b2;
      }
      b2 = [];
      c = 0;
      for (const d in a)
        b2[c++] = d;
      return b2;
    }
  }
}
function Dc$1(a, b2) {
  if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b2, void 0);
  else if (ba$1(a) || "string" === typeof a)
    Array.prototype.forEach.call(a, b2, void 0);
  else
    for (var c = Cc$1(a), d = Bc$1(a), e = d.length, f2 = 0; f2 < e; f2++)
      b2.call(void 0, d[f2], c && c[f2], a);
}
var Ec$1 = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function Fc$1(a, b2) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f2 = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f2 = a[c];
      b2(f2, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function T(a, b2) {
  this.g = this.s = this.j = "";
  this.m = null;
  this.o = this.l = "";
  this.h = false;
  if (a instanceof T) {
    this.h = void 0 !== b2 ? b2 : a.h;
    Gc$1(this, a.j);
    this.s = a.s;
    this.g = a.g;
    Hc$1(this, a.m);
    this.l = a.l;
    b2 = a.i;
    var c = new Ic$1();
    c.i = b2.i;
    b2.g && (c.g = new Map(b2.g), c.h = b2.h);
    Jc$1(this, c);
    this.o = a.o;
  } else
    a && (c = String(a).match(Ec$1)) ? (this.h = !!b2, Gc$1(this, c[1] || "", true), this.s = Kc$1(c[2] || ""), this.g = Kc$1(c[3] || "", true), Hc$1(this, c[4]), this.l = Kc$1(c[5] || "", true), Jc$1(this, c[6] || "", true), this.o = Kc$1(c[7] || "")) : (this.h = !!b2, this.i = new Ic$1(null, this.h));
}
T.prototype.toString = function() {
  var a = [], b2 = this.j;
  b2 && a.push(Lc$1(b2, Mc$1, true), ":");
  var c = this.g;
  if (c || "file" == b2)
    a.push("//"), (b2 = this.s) && a.push(Lc$1(b2, Mc$1, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
  if (c = this.l)
    this.g && "/" != c.charAt(0) && a.push("/"), a.push(Lc$1(c, "/" == c.charAt(0) ? Nc$1 : Oc$1, true));
  (c = this.i.toString()) && a.push("?", c);
  (c = this.o) && a.push("#", Lc$1(c, Pc$1));
  return a.join("");
};
function M$1(a) {
  return new T(a);
}
function Gc$1(a, b2, c) {
  a.j = c ? Kc$1(b2, true) : b2;
  a.j && (a.j = a.j.replace(/:$/, ""));
}
function Hc$1(a, b2) {
  if (b2) {
    b2 = Number(b2);
    if (isNaN(b2) || 0 > b2)
      throw Error("Bad port number " + b2);
    a.m = b2;
  } else
    a.m = null;
}
function Jc$1(a, b2, c) {
  b2 instanceof Ic$1 ? (a.i = b2, Qc$1(a.i, a.h)) : (c || (b2 = Lc$1(b2, Rc$1)), a.i = new Ic$1(b2, a.h));
}
function S$1(a, b2, c) {
  a.i.set(b2, c);
}
function dc$1(a) {
  S$1(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
  return a;
}
function Kc$1(a, b2) {
  return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Lc$1(a, b2, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b2, Sc$1), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function Sc$1(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Mc$1 = /[#\/\?@]/g, Oc$1 = /[#\?:]/g, Nc$1 = /[#\?]/g, Rc$1 = /[#\?@]/g, Pc$1 = /#/g;
function Ic$1(a, b2) {
  this.h = this.g = null;
  this.i = a || null;
  this.j = !!b2;
}
function U$1(a) {
  a.g || (a.g = /* @__PURE__ */ new Map(), a.h = 0, a.i && Fc$1(a.i, function(b2, c) {
    a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
  }));
}
k$1 = Ic$1.prototype;
k$1.add = function(a, b2) {
  U$1(this);
  this.i = null;
  a = V$1(this, a);
  var c = this.g.get(a);
  c || this.g.set(a, c = []);
  c.push(b2);
  this.h += 1;
  return this;
};
function Tc$1(a, b2) {
  U$1(a);
  b2 = V$1(a, b2);
  a.g.has(b2) && (a.i = null, a.h -= a.g.get(b2).length, a.g.delete(b2));
}
function Uc$1(a, b2) {
  U$1(a);
  b2 = V$1(a, b2);
  return a.g.has(b2);
}
k$1.forEach = function(a, b2) {
  U$1(this);
  this.g.forEach(function(c, d) {
    c.forEach(function(e) {
      a.call(b2, e, d, this);
    }, this);
  }, this);
};
k$1.oa = function() {
  U$1(this);
  const a = Array.from(this.g.values()), b2 = Array.from(this.g.keys()), c = [];
  for (let d = 0; d < b2.length; d++) {
    const e = a[d];
    for (let f2 = 0; f2 < e.length; f2++)
      c.push(b2[d]);
  }
  return c;
};
k$1.W = function(a) {
  U$1(this);
  let b2 = [];
  if ("string" === typeof a)
    Uc$1(this, a) && (b2 = b2.concat(this.g.get(V$1(this, a))));
  else {
    a = Array.from(this.g.values());
    for (let c = 0; c < a.length; c++)
      b2 = b2.concat(a[c]);
  }
  return b2;
};
k$1.set = function(a, b2) {
  U$1(this);
  this.i = null;
  a = V$1(this, a);
  Uc$1(this, a) && (this.h -= this.g.get(a).length);
  this.g.set(a, [b2]);
  this.h += 1;
  return this;
};
k$1.get = function(a, b2) {
  if (!a)
    return b2;
  a = this.W(a);
  return 0 < a.length ? String(a[0]) : b2;
};
function fc$1(a, b2, c) {
  Tc$1(a, b2);
  0 < c.length && (a.i = null, a.g.set(V$1(a, b2), ma$1(c)), a.h += c.length);
}
k$1.toString = function() {
  if (this.i)
    return this.i;
  if (!this.g)
    return "";
  const a = [], b2 = Array.from(this.g.keys());
  for (var c = 0; c < b2.length; c++) {
    var d = b2[c];
    const f2 = encodeURIComponent(String(d)), h = this.W(d);
    for (d = 0; d < h.length; d++) {
      var e = f2;
      "" !== h[d] && (e += "=" + encodeURIComponent(String(h[d])));
      a.push(e);
    }
  }
  return this.i = a.join("&");
};
function V$1(a, b2) {
  b2 = String(b2);
  a.j && (b2 = b2.toLowerCase());
  return b2;
}
function Qc$1(a, b2) {
  b2 && !a.j && (U$1(a), a.i = null, a.g.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (Tc$1(this, d), fc$1(this, e, c));
  }, a));
  a.j = b2;
}
var Vc$1 = class {
  constructor(a, b2) {
    this.h = a;
    this.g = b2;
  }
};
function Wc$1(a) {
  this.l = a || Xc$1;
  l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(l.g && l.g.Ga && l.g.Ga() && l.g.Ga().$b);
  this.j = a ? this.l : 1;
  this.g = null;
  1 < this.j && (this.g = /* @__PURE__ */ new Set());
  this.h = null;
  this.i = [];
}
var Xc$1 = 10;
function Yc$1(a) {
  return a.h ? true : a.g ? a.g.size >= a.j : false;
}
function uc$1(a) {
  return a.h ? 1 : a.g ? a.g.size : 0;
}
function qc$1(a, b2) {
  return a.h ? a.h == b2 : a.g ? a.g.has(b2) : false;
}
function vc$1(a, b2) {
  a.g ? a.g.add(b2) : a.h = b2;
}
function xc$1(a, b2) {
  a.h && a.h == b2 ? a.h = null : a.g && a.g.has(b2) && a.g.delete(b2);
}
Wc$1.prototype.cancel = function() {
  this.i = Zc$1(this);
  if (this.h)
    this.h.cancel(), this.h = null;
  else if (this.g && 0 !== this.g.size) {
    for (const a of this.g.values())
      a.cancel();
    this.g.clear();
  }
};
function Zc$1(a) {
  if (null != a.h)
    return a.i.concat(a.h.D);
  if (null != a.g && 0 !== a.g.size) {
    let b2 = a.i;
    for (const c of a.g.values())
      b2 = b2.concat(c.D);
    return b2;
  }
  return ma$1(a.i);
}
function $c$1() {
}
$c$1.prototype.stringify = function(a) {
  return l.JSON.stringify(a, void 0);
};
$c$1.prototype.parse = function(a) {
  return l.JSON.parse(a, void 0);
};
function ad() {
  this.g = new $c$1();
}
function bd(a, b2, c) {
  const d = c || "";
  try {
    Dc$1(a, function(e, f2) {
      let h = e;
      p(e) && (h = lb(e));
      b2.push(d + f2 + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function cd(a, b2) {
  const c = new Gb();
  if (l.Image) {
    const d = new Image();
    d.onload = ia$1(dd, c, d, "TestLoadImage: loaded", true, b2);
    d.onerror = ia$1(dd, c, d, "TestLoadImage: error", false, b2);
    d.onabort = ia$1(dd, c, d, "TestLoadImage: abort", false, b2);
    d.ontimeout = ia$1(dd, c, d, "TestLoadImage: timeout", false, b2);
    l.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b2(false);
}
function dd(a, b2, c, d, e) {
  try {
    b2.onload = null, b2.onerror = null, b2.onabort = null, b2.ontimeout = null, e(d);
  } catch (f2) {
  }
}
function ed(a) {
  this.l = a.ac || null;
  this.j = a.jb || false;
}
t(ed, Sb);
ed.prototype.g = function() {
  return new fd(this.l, this.j);
};
ed.prototype.i = function(a) {
  return function() {
    return a;
  };
}({});
function fd(a, b2) {
  B$1.call(this);
  this.D = a;
  this.u = b2;
  this.m = void 0;
  this.readyState = gd;
  this.status = 0;
  this.responseType = this.responseText = this.response = this.statusText = "";
  this.onreadystatechange = null;
  this.v = new Headers();
  this.h = null;
  this.C = "GET";
  this.B = "";
  this.g = false;
  this.A = this.j = this.l = null;
}
t(fd, B$1);
var gd = 0;
k$1 = fd.prototype;
k$1.open = function(a, b2) {
  if (this.readyState != gd)
    throw this.abort(), Error("Error reopening a connection");
  this.C = a;
  this.B = b2;
  this.readyState = 1;
  hd(this);
};
k$1.send = function(a) {
  if (1 != this.readyState)
    throw this.abort(), Error("need to call open() first. ");
  this.g = true;
  const b2 = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  a && (b2.body = a);
  (this.D || l).fetch(new Request(this.B, b2)).then(this.Wa.bind(this), this.ga.bind(this));
};
k$1.abort = function() {
  this.response = this.responseText = "";
  this.v = new Headers();
  this.status = 0;
  this.j && this.j.cancel("Request was aborted.").catch(() => {
  });
  1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, id(this));
  this.readyState = gd;
};
k$1.Wa = function(a) {
  if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, hd(this)), this.g && (this.readyState = 3, hd(this), this.g)))
    if ("arraybuffer" === this.responseType)
      a.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
    else if ("undefined" !== typeof l.ReadableStream && "body" in a) {
      this.j = a.body.getReader();
      if (this.u) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else
        this.response = this.responseText = "", this.A = new TextDecoder();
      jd(this);
    } else
      a.text().then(this.Va.bind(this), this.ga.bind(this));
};
function jd(a) {
  a.j.read().then(a.Ta.bind(a)).catch(a.ga.bind(a));
}
k$1.Ta = function(a) {
  if (this.g) {
    if (this.u && a.value)
      this.response.push(a.value);
    else if (!this.u) {
      var b2 = a.value ? a.value : new Uint8Array(0);
      if (b2 = this.A.decode(b2, { stream: !a.done }))
        this.response = this.responseText += b2;
    }
    a.done ? id(this) : hd(this);
    3 == this.readyState && jd(this);
  }
};
k$1.Va = function(a) {
  this.g && (this.response = this.responseText = a, id(this));
};
k$1.Ua = function(a) {
  this.g && (this.response = a, id(this));
};
k$1.ga = function() {
  this.g && id(this);
};
function id(a) {
  a.readyState = 4;
  a.l = null;
  a.j = null;
  a.A = null;
  hd(a);
}
k$1.setRequestHeader = function(a, b2) {
  this.v.append(a, b2);
};
k$1.getResponseHeader = function(a) {
  return this.h ? this.h.get(a.toLowerCase()) || "" : "";
};
k$1.getAllResponseHeaders = function() {
  if (!this.h)
    return "";
  const a = [], b2 = this.h.entries();
  for (var c = b2.next(); !c.done; )
    c = c.value, a.push(c[0] + ": " + c[1]), c = b2.next();
  return a.join("\r\n");
};
function hd(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(fd.prototype, "withCredentials", { get: function() {
  return "include" === this.m;
}, set: function(a) {
  this.m = a ? "include" : "same-origin";
} });
var kd = l.JSON.parse;
function W$1(a) {
  B$1.call(this);
  this.headers = /* @__PURE__ */ new Map();
  this.u = a || null;
  this.h = false;
  this.C = this.g = null;
  this.H = "";
  this.m = 0;
  this.j = "";
  this.l = this.F = this.v = this.D = false;
  this.B = 0;
  this.A = null;
  this.J = ld;
  this.K = this.L = false;
}
t(W$1, B$1);
var ld = "", md = /^https?$/i, nd = ["POST", "PUT"];
k$1 = W$1.prototype;
k$1.Ka = function(a) {
  this.L = a;
};
k$1.da = function(a, b2, c, d) {
  if (this.g)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + a);
  b2 = b2 ? b2.toUpperCase() : "GET";
  this.H = a;
  this.j = "";
  this.m = 0;
  this.D = false;
  this.h = true;
  this.g = this.u ? this.u.g() : Xb.g();
  this.C = this.u ? Tb(this.u) : Tb(Xb);
  this.g.onreadystatechange = q$1(this.Ha, this);
  try {
    this.F = true, this.g.open(b2, String(a), true), this.F = false;
  } catch (f2) {
    od(this, f2);
    return;
  }
  a = c || "";
  c = new Map(this.headers);
  if (d)
    if (Object.getPrototypeOf(d) === Object.prototype)
      for (var e in d)
        c.set(e, d[e]);
    else if ("function" === typeof d.keys && "function" === typeof d.get)
      for (const f2 of d.keys())
        c.set(f2, d.get(f2));
    else
      throw Error("Unknown input type for opt_headers: " + String(d));
  d = Array.from(c.keys()).find((f2) => "content-type" == f2.toLowerCase());
  e = l.FormData && a instanceof l.FormData;
  !(0 <= la(nd, b2)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [f2, h] of c)
    this.g.setRequestHeader(f2, h);
  this.J && (this.g.responseType = this.J);
  "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
  try {
    pd(this), 0 < this.B && ((this.K = qd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q$1(this.qa, this)) : this.A = Ab(this.qa, this.B, this)), this.v = true, this.g.send(a), this.v = false;
  } catch (f2) {
    od(this, f2);
  }
};
function qd(a) {
  return y && Ia$1() && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
k$1.qa = function() {
  "undefined" != typeof goog && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, C$1(this, "timeout"), this.abort(8));
};
function od(a, b2) {
  a.h = false;
  a.g && (a.l = true, a.g.abort(), a.l = false);
  a.j = b2;
  a.m = 5;
  rd(a);
  sd(a);
}
function rd(a) {
  a.D || (a.D = true, C$1(a, "complete"), C$1(a, "error"));
}
k$1.abort = function(a) {
  this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a || 7, C$1(this, "complete"), C$1(this, "abort"), sd(this));
};
k$1.M = function() {
  this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), sd(this, true));
  W$1.X.M.call(this);
};
k$1.Ha = function() {
  this.s || (this.F || this.v || this.l ? td(this) : this.fb());
};
k$1.fb = function() {
  td(this);
};
function td(a) {
  if (a.h && "undefined" != typeof goog && (!a.C[1] || 4 != O$1(a) || 2 != a.aa())) {
    if (a.v && 4 == O$1(a))
      Ab(a.Ha, 0, a);
    else if (C$1(a, "readystatechange"), 4 == O$1(a)) {
      a.h = false;
      try {
        const n2 = a.aa();
        a:
          switch (n2) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b2 = true;
              break a;
            default:
              b2 = false;
          }
        var c;
        if (!(c = b2)) {
          var d;
          if (d = 0 === n2) {
            var e = String(a.H).match(Ec$1)[1] || null;
            if (!e && l.self && l.self.location) {
              var f2 = l.self.location.protocol;
              e = f2.substr(0, f2.length - 1);
            }
            d = !md.test(e ? e.toLowerCase() : "");
          }
          c = d;
        }
        if (c)
          C$1(a, "complete"), C$1(
            a,
            "success"
          );
        else {
          a.m = 6;
          try {
            var h = 2 < O$1(a) ? a.g.statusText : "";
          } catch (u2) {
            h = "";
          }
          a.j = h + " [" + a.aa() + "]";
          rd(a);
        }
      } finally {
        sd(a);
      }
    }
  }
}
function sd(a, b2) {
  if (a.g) {
    pd(a);
    const c = a.g, d = a.C[0] ? aa : null;
    a.g = null;
    a.C = null;
    b2 || C$1(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function pd(a) {
  a.g && a.K && (a.g.ontimeout = null);
  a.A && (l.clearTimeout(a.A), a.A = null);
}
function O$1(a) {
  return a.g ? a.g.readyState : 0;
}
k$1.aa = function() {
  try {
    return 2 < O$1(this) ? this.g.status : -1;
  } catch (a) {
    return -1;
  }
};
k$1.fa = function() {
  try {
    return this.g ? this.g.responseText : "";
  } catch (a) {
    return "";
  }
};
k$1.Sa = function(a) {
  if (this.g) {
    var b2 = this.g.responseText;
    a && 0 == b2.indexOf(a) && (b2 = b2.substring(a.length));
    return kd(b2);
  }
};
function hc$1(a) {
  try {
    if (!a.g)
      return null;
    if ("response" in a.g)
      return a.g.response;
    switch (a.J) {
      case ld:
      case "text":
        return a.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in a.g)
          return a.g.mozResponseArrayBuffer;
    }
    return null;
  } catch (b2) {
    return null;
  }
}
k$1.Ea = function() {
  return this.m;
};
k$1.Oa = function() {
  return "string" === typeof this.j ? this.j : String(this.j);
};
function ud(a) {
  let b2 = "";
  Qa$1(a, function(c, d) {
    b2 += d;
    b2 += ":";
    b2 += c;
    b2 += "\r\n";
  });
  return b2;
}
function vd(a, b2, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = ud(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : S$1(a, b2, c));
}
function wd(a, b2, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
}
function xd(a) {
  this.Ca = 0;
  this.i = [];
  this.j = new Gb();
  this.ka = this.sa = this.F = this.V = this.g = this.za = this.D = this.ia = this.o = this.S = this.s = null;
  this.ab = this.U = 0;
  this.Za = wd("failFast", false, a);
  this.L = this.v = this.u = this.m = this.l = null;
  this.Y = true;
  this.pa = this.Ba = this.T = -1;
  this.Z = this.A = this.C = 0;
  this.Xa = wd("baseRetryDelayMs", 5e3, a);
  this.bb = wd("retryDelaySeedMs", 1e4, a);
  this.$a = wd("forwardChannelMaxRetries", 2, a);
  this.ta = wd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.ra = a && a.xmlHttpFactory || void 0;
  this.Da = a && a.Zb || false;
  this.J = void 0;
  this.H = a && a.supportsCrossDomainXhr || false;
  this.I = "";
  this.h = new Wc$1(a && a.concurrentRequestLimit);
  this.Fa = new ad();
  this.O = a && a.fastHandshake || false;
  this.N = a && a.encodeInitMessageHeaders || false;
  this.O && this.N && (this.N = false);
  this.Ya = a && a.Xb || false;
  a && a.Aa && this.j.Aa();
  a && a.forceLongPolling && (this.Y = false);
  this.$ = !this.O && this.Y && a && a.detectBufferingProxy || false;
  this.ja = void 0;
  this.P = 0;
  this.K = false;
  this.la = this.B = null;
}
k$1 = xd.prototype;
k$1.ma = 8;
k$1.G = 1;
function Ac$1(a) {
  yd(a);
  if (3 == a.G) {
    var b2 = a.U++, c = M$1(a.F);
    S$1(c, "SID", a.I);
    S$1(c, "RID", b2);
    S$1(c, "TYPE", "terminate");
    zd(a, c);
    b2 = new L$1(a, a.j, b2, void 0);
    b2.K = 2;
    b2.v = dc$1(M$1(c));
    c = false;
    l.navigator && l.navigator.sendBeacon && (c = l.navigator.sendBeacon(b2.v.toString(), ""));
    !c && l.Image && (new Image().src = b2.v, c = true);
    c || (b2.g = gc$1(b2.l, null), b2.g.da(b2.v));
    b2.F = Date.now();
    N$1(b2);
  }
  Ad(a);
}
function sc$1(a) {
  a.g && (oc$1(a), a.g.cancel(), a.g = null);
}
function yd(a) {
  sc$1(a);
  a.u && (l.clearTimeout(a.u), a.u = null);
  rc$1(a);
  a.h.cancel();
  a.m && ("number" === typeof a.m && l.clearTimeout(a.m), a.m = null);
}
function zc$1(a) {
  Yc$1(a.h) || a.m || (a.m = true, sb(a.Ja, a), a.C = 0);
}
function Bd(a, b2) {
  if (uc$1(a.h) >= a.h.j - (a.m ? 1 : 0))
    return false;
  if (a.m)
    return a.i = b2.D.concat(a.i), true;
  if (1 == a.G || 2 == a.G || a.C >= (a.Za ? 0 : a.$a))
    return false;
  a.m = J(q$1(a.Ja, a, b2), Cd(a, a.C));
  a.C++;
  return true;
}
k$1.Ja = function(a) {
  if (this.m)
    if (this.m = null, 1 == this.G) {
      if (!a) {
        this.U = Math.floor(1e5 * Math.random());
        a = this.U++;
        const e = new L$1(this, this.j, a, void 0);
        let f2 = this.s;
        this.S && (f2 ? (f2 = Ra$1(f2), Ta$1(f2, this.S)) : f2 = this.S);
        null !== this.o || this.N || (e.H = f2, f2 = null);
        if (this.O)
          a: {
            var b2 = 0;
            for (var c = 0; c < this.i.length; c++) {
              b: {
                var d = this.i[c];
                if ("__data__" in d.g && (d = d.g.__data__, "string" === typeof d)) {
                  d = d.length;
                  break b;
                }
                d = void 0;
              }
              if (void 0 === d)
                break;
              b2 += d;
              if (4096 < b2) {
                b2 = c;
                break a;
              }
              if (4096 === b2 || c === this.i.length - 1) {
                b2 = c + 1;
                break a;
              }
            }
            b2 = 1e3;
          }
        else
          b2 = 1e3;
        b2 = Dd(this, e, b2);
        c = M$1(this.F);
        S$1(c, "RID", a);
        S$1(c, "CVER", 22);
        this.D && S$1(c, "X-HTTP-Session-Id", this.D);
        zd(this, c);
        f2 && (this.N ? b2 = "headers=" + encodeURIComponent(String(ud(f2))) + "&" + b2 : this.o && vd(c, this.o, f2));
        vc$1(this.h, e);
        this.Ya && S$1(c, "TYPE", "init");
        this.O ? (S$1(c, "$req", b2), S$1(c, "SID", "null"), e.Z = true, cc$1(e, c, null)) : cc$1(e, c, b2);
        this.G = 2;
      }
    } else
      3 == this.G && (a ? Ed(this, a) : 0 == this.i.length || Yc$1(this.h) || Ed(this));
};
function Ed(a, b2) {
  var c;
  b2 ? c = b2.m : c = a.U++;
  const d = M$1(a.F);
  S$1(d, "SID", a.I);
  S$1(d, "RID", c);
  S$1(d, "AID", a.T);
  zd(a, d);
  a.o && a.s && vd(d, a.o, a.s);
  c = new L$1(a, a.j, c, a.C + 1);
  null === a.o && (c.H = a.s);
  b2 && (a.i = b2.D.concat(a.i));
  b2 = Dd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ta) + Math.round(0.5 * a.ta * Math.random()));
  vc$1(a.h, c);
  cc$1(c, d, b2);
}
function zd(a, b2) {
  a.ia && Qa$1(a.ia, function(c, d) {
    S$1(b2, d, c);
  });
  a.l && Dc$1({}, function(c, d) {
    S$1(b2, d, c);
  });
}
function Dd(a, b2, c) {
  c = Math.min(a.i.length, c);
  var d = a.l ? q$1(a.l.Ra, a.l, a) : null;
  a: {
    var e = a.i;
    let f2 = -1;
    for (; ; ) {
      const h = ["count=" + c];
      -1 == f2 ? 0 < c ? (f2 = e[0].h, h.push("ofs=" + f2)) : f2 = 0 : h.push("ofs=" + f2);
      let n2 = true;
      for (let u2 = 0; u2 < c; u2++) {
        let m2 = e[u2].h;
        const r2 = e[u2].g;
        m2 -= f2;
        if (0 > m2)
          f2 = Math.max(0, e[u2].h - 100), n2 = false;
        else
          try {
            bd(r2, h, "req" + m2 + "_");
          } catch (F2) {
            d && d(r2);
          }
      }
      if (n2) {
        d = h.join("&");
        break a;
      }
    }
  }
  a = a.i.splice(0, c);
  b2.D = a;
  return d;
}
function yc$1(a) {
  a.g || a.u || (a.Z = 1, sb(a.Ia, a), a.A = 0);
}
function tc$1(a) {
  if (a.g || a.u || 3 <= a.A)
    return false;
  a.Z++;
  a.u = J(q$1(a.Ia, a), Cd(a, a.A));
  a.A++;
  return true;
}
k$1.Ia = function() {
  this.u = null;
  Fd(this);
  if (this.$ && !(this.K || null == this.g || 0 >= this.P)) {
    var a = 2 * this.P;
    this.j.info("BP detection timer enabled: " + a);
    this.B = J(q$1(this.eb, this), a);
  }
};
k$1.eb = function() {
  this.B && (this.B = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.L = false, this.K = true, I(10), sc$1(this), Fd(this));
};
function oc$1(a) {
  null != a.B && (l.clearTimeout(a.B), a.B = null);
}
function Fd(a) {
  a.g = new L$1(a, a.j, "rpc", a.Z);
  null === a.o && (a.g.H = a.s);
  a.g.N = 0;
  var b2 = M$1(a.sa);
  S$1(b2, "RID", "rpc");
  S$1(b2, "SID", a.I);
  S$1(b2, "CI", a.L ? "0" : "1");
  S$1(b2, "AID", a.T);
  S$1(b2, "TYPE", "xmlhttp");
  zd(a, b2);
  a.o && a.s && vd(b2, a.o, a.s);
  a.J && a.g.setTimeout(a.J);
  var c = a.g;
  a = a.ka;
  c.K = 1;
  c.v = dc$1(M$1(b2));
  c.s = null;
  c.P = true;
  ec$1(c, a);
}
k$1.cb = function() {
  null != this.v && (this.v = null, sc$1(this), tc$1(this), I(19));
};
function rc$1(a) {
  null != a.v && (l.clearTimeout(a.v), a.v = null);
}
function mc$1(a, b2) {
  var c = null;
  if (a.g == b2) {
    rc$1(a);
    oc$1(a);
    a.g = null;
    var d = 2;
  } else if (qc$1(a.h, b2))
    c = b2.D, xc$1(a.h, b2), d = 1;
  else
    return;
  if (0 != a.G) {
    if (a.pa = b2.Y, b2.i)
      if (1 == d) {
        c = b2.s ? b2.s.length : 0;
        b2 = Date.now() - b2.F;
        var e = a.C;
        d = Mb();
        C$1(d, new Pb(d, c));
        zc$1(a);
      } else
        yc$1(a);
    else if (e = b2.o, 3 == e || 0 == e && 0 < a.pa || !(1 == d && Bd(a, b2) || 2 == d && tc$1(a)))
      switch (c && 0 < c.length && (b2 = a.h, b2.i = b2.i.concat(c)), e) {
        case 1:
          R(a, 5);
          break;
        case 4:
          R(a, 10);
          break;
        case 3:
          R(a, 6);
          break;
        default:
          R(a, 2);
      }
  }
}
function Cd(a, b2) {
  let c = a.Xa + Math.floor(Math.random() * a.bb);
  a.l || (c *= 2);
  return c * b2;
}
function R(a, b2) {
  a.j.info("Error code " + b2);
  if (2 == b2) {
    var c = null;
    a.l && (c = null);
    var d = q$1(a.kb, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), l.location && "http" == l.location.protocol || Gc$1(c, "https"), dc$1(c));
    cd(c.toString(), d);
  } else
    I(2);
  a.G = 0;
  a.l && a.l.va(b2);
  Ad(a);
  yd(a);
}
k$1.kb = function(a) {
  a ? (this.j.info("Successfully pinged google.com"), I(2)) : (this.j.info("Failed to ping google.com"), I(1));
};
function Ad(a) {
  a.G = 0;
  a.la = [];
  if (a.l) {
    const b2 = Zc$1(a.h);
    if (0 != b2.length || 0 != a.i.length)
      na$1(a.la, b2), na$1(a.la, a.i), a.h.i.length = 0, ma$1(a.i), a.i.length = 0;
    a.l.ua();
  }
}
function wc$1(a, b2, c) {
  var d = c instanceof T ? M$1(c) : new T(c, void 0);
  if ("" != d.g)
    b2 && (d.g = b2 + "." + d.g), Hc$1(d, d.m);
  else {
    var e = l.location;
    d = e.protocol;
    b2 = b2 ? b2 + "." + e.hostname : e.hostname;
    e = +e.port;
    var f2 = new T(null, void 0);
    d && Gc$1(f2, d);
    b2 && (f2.g = b2);
    e && Hc$1(f2, e);
    c && (f2.l = c);
    d = f2;
  }
  c = a.D;
  b2 = a.za;
  c && b2 && S$1(d, c, b2);
  S$1(d, "VER", a.ma);
  zd(a, d);
  return d;
}
function gc$1(a, b2, c) {
  if (b2 && !a.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b2 = c && a.Da && !a.ra ? new W$1(new ed({ jb: true })) : new W$1(a.ra);
  b2.Ka(a.H);
  return b2;
}
function Gd() {
}
k$1 = Gd.prototype;
k$1.xa = function() {
};
k$1.wa = function() {
};
k$1.va = function() {
};
k$1.ua = function() {
};
k$1.Ra = function() {
};
function Hd() {
  if (y && !(10 <= Number(La)))
    throw Error("Environmental error: no available transport.");
}
Hd.prototype.g = function(a, b2) {
  return new X$1(a, b2);
};
function X$1(a, b2) {
  B$1.call(this);
  this.g = new xd(b2);
  this.l = a;
  this.h = b2 && b2.messageUrlParams || null;
  a = b2 && b2.messageHeaders || null;
  b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
  this.g.s = a;
  a = b2 && b2.initMessageHeaders || null;
  b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = { "X-WebChannel-Content-Type": b2.messageContentType });
  b2 && b2.ya && (a ? a["X-WebChannel-Client-Profile"] = b2.ya : a = { "X-WebChannel-Client-Profile": b2.ya });
  this.g.S = a;
  (a = b2 && b2.Yb) && !pa$1(a) && (this.g.o = a);
  this.A = b2 && b2.supportsCrossDomainXhr || false;
  this.v = b2 && b2.sendRawJson || false;
  (b2 = b2 && b2.httpSessionIdParam) && !pa$1(b2) && (this.g.D = b2, a = this.h, null !== a && b2 in a && (a = this.h, b2 in a && delete a[b2]));
  this.j = new Y$1(this);
}
t(X$1, B$1);
X$1.prototype.m = function() {
  this.g.l = this.j;
  this.A && (this.g.H = true);
  var a = this.g, b2 = this.l, c = this.h || void 0;
  I(0);
  a.V = b2;
  a.ia = c || {};
  a.L = a.Y;
  a.F = wc$1(a, null, a.V);
  zc$1(a);
};
X$1.prototype.close = function() {
  Ac$1(this.g);
};
X$1.prototype.u = function(a) {
  var b2 = this.g;
  if ("string" === typeof a) {
    var c = {};
    c.__data__ = a;
    a = c;
  } else
    this.v && (c = {}, c.__data__ = lb(a), a = c);
  b2.i.push(new Vc$1(b2.ab++, a));
  3 == b2.G && zc$1(b2);
};
X$1.prototype.M = function() {
  this.g.l = null;
  delete this.j;
  Ac$1(this.g);
  delete this.g;
  X$1.X.M.call(this);
};
function Id(a) {
  Vb.call(this);
  var b2 = a.__sm__;
  if (b2) {
    a: {
      for (const c in b2) {
        a = c;
        break a;
      }
      a = void 0;
    }
    if (this.i = a)
      a = this.i, b2 = null !== b2 && a in b2 ? b2[a] : void 0;
    this.data = b2;
  } else
    this.data = a;
}
t(Id, Vb);
function Jd() {
  Wb.call(this);
  this.status = 1;
}
t(Jd, Wb);
function Y$1(a) {
  this.g = a;
}
t(Y$1, Gd);
Y$1.prototype.xa = function() {
  C$1(this.g, "a");
};
Y$1.prototype.wa = function(a) {
  C$1(this.g, new Id(a));
};
Y$1.prototype.va = function(a) {
  C$1(this.g, new Jd());
};
Y$1.prototype.ua = function() {
  C$1(this.g, "b");
};
Hd.prototype.createWebChannel = Hd.prototype.g;
X$1.prototype.send = X$1.prototype.u;
X$1.prototype.open = X$1.prototype.m;
X$1.prototype.close = X$1.prototype.close;
Qb.NO_ERROR = 0;
Qb.TIMEOUT = 8;
Qb.HTTP_ERROR = 6;
Rb.COMPLETE = "complete";
Ub.EventType = K$1;
K$1.OPEN = "a";
K$1.CLOSE = "b";
K$1.ERROR = "c";
K$1.MESSAGE = "d";
B$1.prototype.listen = B$1.prototype.N;
W$1.prototype.listenOnce = W$1.prototype.O;
W$1.prototype.getLastError = W$1.prototype.Oa;
W$1.prototype.getLastErrorCode = W$1.prototype.Ea;
W$1.prototype.getStatus = W$1.prototype.aa;
W$1.prototype.getResponseJson = W$1.prototype.Sa;
W$1.prototype.getResponseText = W$1.prototype.fa;
W$1.prototype.send = W$1.prototype.da;
W$1.prototype.setWithCredentials = W$1.prototype.Ka;
var createWebChannelTransport = function() {
  return new Hd();
};
var getStatEventTarget = function() {
  return Mb();
};
var ErrorCode = Qb;
var EventType = Rb;
var Event = G$1;
var Stat = { sb: 0, vb: 1, wb: 2, Pb: 3, Ub: 4, Rb: 5, Sb: 6, Qb: 7, Ob: 8, Tb: 9, PROXY: 10, NOPROXY: 11, Mb: 12, Ib: 13, Jb: 14, Hb: 15, Kb: 16, Lb: 17, ob: 18, nb: 19, pb: 20 };
var FetchXmlHttpFactory = ed;
var WebChannel = Ub;
var XhrIo = W$1;
const b = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P {
  constructor(t2) {
    this.uid = t2;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t2) {
    return t2.uid === this.uid;
  }
}
P.UNAUTHENTICATED = new P(null), P.GOOGLE_CREDENTIALS = new P("google-credentials-uid"), P.FIRST_PARTY = new P("first-party-uid"), P.MOCK_USER = new P("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let v = "9.12.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V = new Logger("@firebase/firestore");
function S() {
  return V.logLevel;
}
function D(t2) {
  V.setLogLevel(t2);
}
function C(t2, ...e) {
  if (V.logLevel <= LogLevel.DEBUG) {
    const n2 = e.map(k);
    V.debug(`Firestore (${v}): ${t2}`, ...n2);
  }
}
function x(t2, ...e) {
  if (V.logLevel <= LogLevel.ERROR) {
    const n2 = e.map(k);
    V.error(`Firestore (${v}): ${t2}`, ...n2);
  }
}
function N(t2, ...e) {
  if (V.logLevel <= LogLevel.WARN) {
    const n2 = e.map(k);
    V.warn(`Firestore (${v}): ${t2}`, ...n2);
  }
}
function k(t2) {
  if ("string" == typeof t2)
    return t2;
  try {
    return e = t2, JSON.stringify(e);
  } catch (e2) {
    return t2;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t2 = "Unexpected state") {
  const e = `FIRESTORE (${v}) INTERNAL ASSERTION FAILED: ` + t2;
  throw x(e), new Error(e);
}
function M(t2, e) {
  t2 || O();
}
function F(t2, e) {
  t2 || O();
}
function $(t2, e) {
  return t2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
class L extends FirebaseError {
  constructor(t2, e) {
    super(t2, e), this.code = t2, this.message = e, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U {
  constructor() {
    this.promise = new Promise((t2, e) => {
      this.resolve = t2, this.reject = e;
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q {
  constructor(t2, e) {
    this.user = e, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t2}`);
  }
}
class K {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(P.UNAUTHENTICATED));
  }
  shutdown() {
  }
}
class G {
  constructor(t2) {
    this.token = t2, this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(t2, e) {
    this.changeListener = e, t2.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class Q {
  constructor(t2) {
    this.t = t2, this.currentUser = P.UNAUTHENTICATED, this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(t2, e) {
    let n2 = this.i;
    const s = (t3) => this.i !== n2 ? (n2 = this.i, e(t3)) : Promise.resolve();
    let i = new U();
    this.o = () => {
      this.i++, this.currentUser = this.u(), i.resolve(), i = new U(), t2.enqueueRetryable(() => s(this.currentUser));
    };
    const r2 = () => {
      const e2 = i;
      t2.enqueueRetryable(async () => {
        await e2.promise, await s(this.currentUser);
      });
    }, o = (t3) => {
      C("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t3, this.auth.addAuthTokenListener(this.o), r2();
    };
    this.t.onInit((t3) => o(t3)), setTimeout(() => {
      if (!this.auth) {
        const t3 = this.t.getImmediate({
          optional: true
        });
        t3 ? o(t3) : (C("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new U());
      }
    }, 0), r2();
  }
  getToken() {
    const t2 = this.i, e = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(e).then((e2) => this.i !== t2 ? (C("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e2 ? (M("string" == typeof e2.accessToken), new q(e2.accessToken, this.currentUser)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const t2 = this.auth && this.auth.getUid();
    return M(null === t2 || "string" == typeof t2), new P(t2);
  }
}
class j {
  constructor(t2, e, n2, s) {
    this.h = t2, this.l = e, this.m = n2, this.g = s, this.type = "FirstParty", this.user = P.FIRST_PARTY, this.p = /* @__PURE__ */ new Map();
  }
  I() {
    return this.g ? this.g() : (M(!("object" != typeof this.h || null === this.h || !this.h.auth || !this.h.auth.getAuthHeaderValueForFirstParty)), this.h.auth.getAuthHeaderValueForFirstParty([]));
  }
  get headers() {
    this.p.set("X-Goog-AuthUser", this.l);
    const t2 = this.I();
    return t2 && this.p.set("Authorization", t2), this.m && this.p.set("X-Goog-Iam-Authorization-Token", this.m), this.p;
  }
}
class W {
  constructor(t2, e, n2, s) {
    this.h = t2, this.l = e, this.m = n2, this.g = s;
  }
  getToken() {
    return Promise.resolve(new j(this.h, this.l, this.m, this.g));
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(P.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
}
class z {
  constructor(t2) {
    this.value = t2, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t2 && t2.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class H {
  constructor(t2) {
    this.T = t2, this.forceRefresh = false, this.appCheck = null, this.A = null;
  }
  start(t2, e) {
    const n2 = (t3) => {
      null != t3.error && C("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t3.error.message}`);
      const n3 = t3.token !== this.A;
      return this.A = t3.token, C("FirebaseAppCheckTokenProvider", `Received ${n3 ? "new" : "existing"} token.`), n3 ? e(t3.token) : Promise.resolve();
    };
    this.o = (e2) => {
      t2.enqueueRetryable(() => n2(e2));
    };
    const s = (t3) => {
      C("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t3, this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((t3) => s(t3)), setTimeout(() => {
      if (!this.appCheck) {
        const t3 = this.T.getImmediate({
          optional: true
        });
        t3 ? s(t3) : C("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
      }
    }, 0);
  }
  getToken() {
    const t2 = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(t2).then((t3) => t3 ? (M("string" == typeof t3.token), this.A = t3.token, new z(t3.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(t2) {
  const e = "undefined" != typeof self && (self.crypto || self.msCrypto), n2 = new Uint8Array(t2);
  if (e && "function" == typeof e.getRandomValues)
    e.getRandomValues(n2);
  else
    for (let e2 = 0; e2 < t2; e2++)
      n2[e2] = Math.floor(256 * Math.random());
  return n2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X {
  static R() {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length;
    let n2 = "";
    for (; n2.length < 20; ) {
      const s = Y(40);
      for (let i = 0; i < s.length; ++i)
        n2.length < 20 && s[i] < e && (n2 += t2.charAt(s[i] % t2.length));
    }
    return n2;
  }
}
function Z(t2, e) {
  return t2 < e ? -1 : t2 > e ? 1 : 0;
}
function tt(t2, e, n2) {
  return t2.length === e.length && t2.every((t3, s) => n2(t3, e[s]));
}
function et(t2) {
  return t2 + "\0";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt {
  constructor(t2, e) {
    if (this.seconds = t2, this.nanoseconds = e, e < 0)
      throw new L(B.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9)
      throw new L(B.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t2 < -62135596800)
      throw new L(B.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
    if (t2 >= 253402300800)
      throw new L(B.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
  }
  static now() {
    return nt.fromMillis(Date.now());
  }
  static fromDate(t2) {
    return nt.fromMillis(t2.getTime());
  }
  static fromMillis(t2) {
    const e = Math.floor(t2 / 1e3), n2 = Math.floor(1e6 * (t2 - 1e3 * e));
    return new nt(e, n2);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t2) {
    return this.seconds === t2.seconds ? Z(this.nanoseconds, t2.nanoseconds) : Z(this.seconds, t2.seconds);
  }
  isEqual(t2) {
    return t2.seconds === this.seconds && t2.nanoseconds === this.nanoseconds;
  }
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  valueOf() {
    const t2 = this.seconds - -62135596800;
    return String(t2).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st {
  constructor(t2) {
    this.timestamp = t2;
  }
  static fromTimestamp(t2) {
    return new st(t2);
  }
  static min() {
    return new st(new nt(0, 0));
  }
  static max() {
    return new st(new nt(253402300799, 999999999));
  }
  compareTo(t2) {
    return this.timestamp._compareTo(t2.timestamp);
  }
  isEqual(t2) {
    return this.timestamp.isEqual(t2.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it {
  constructor(t2, e, n2) {
    void 0 === e ? e = 0 : e > t2.length && O(), void 0 === n2 ? n2 = t2.length - e : n2 > t2.length - e && O(), this.segments = t2, this.offset = e, this.len = n2;
  }
  get length() {
    return this.len;
  }
  isEqual(t2) {
    return 0 === it.comparator(this, t2);
  }
  child(t2) {
    const e = this.segments.slice(this.offset, this.limit());
    return t2 instanceof it ? t2.forEach((t3) => {
      e.push(t3);
    }) : e.push(t2), this.construct(e);
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t2) {
    return t2 = void 0 === t2 ? 1 : t2, this.construct(this.segments, this.offset + t2, this.length - t2);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t2) {
    return this.segments[this.offset + t2];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(t2) {
    if (t2.length < this.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  isImmediateParentOf(t2) {
    if (this.length + 1 !== t2.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  forEach(t2) {
    for (let e = this.offset, n2 = this.limit(); e < n2; e++)
      t2(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t2, e) {
    const n2 = Math.min(t2.length, e.length);
    for (let s = 0; s < n2; s++) {
      const n3 = t2.get(s), i = e.get(s);
      if (n3 < i)
        return -1;
      if (n3 > i)
        return 1;
    }
    return t2.length < e.length ? -1 : t2.length > e.length ? 1 : 0;
  }
}
class rt extends it {
  construct(t2, e, n2) {
    return new rt(t2, e, n2);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...t2) {
    const e = [];
    for (const n2 of t2) {
      if (n2.indexOf("//") >= 0)
        throw new L(B.INVALID_ARGUMENT, `Invalid segment (${n2}). Paths must not contain // in them.`);
      e.push(...n2.split("/").filter((t3) => t3.length > 0));
    }
    return new rt(e);
  }
  static emptyPath() {
    return new rt([]);
  }
}
const ot = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class ut extends it {
  construct(t2, e, n2) {
    return new ut(t2, e, n2);
  }
  static isValidIdentifier(t2) {
    return ot.test(t2);
  }
  canonicalString() {
    return this.toArray().map((t2) => (t2 = t2.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), ut.isValidIdentifier(t2) || (t2 = "`" + t2 + "`"), t2)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return 1 === this.length && "__name__" === this.get(0);
  }
  static keyField() {
    return new ut(["__name__"]);
  }
  static fromServerFormat(t2) {
    const e = [];
    let n2 = "", s = 0;
    const i = () => {
      if (0 === n2.length)
        throw new L(B.INVALID_ARGUMENT, `Invalid field path (${t2}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      e.push(n2), n2 = "";
    };
    let r2 = false;
    for (; s < t2.length; ) {
      const e2 = t2[s];
      if ("\\" === e2) {
        if (s + 1 === t2.length)
          throw new L(B.INVALID_ARGUMENT, "Path has trailing escape character: " + t2);
        const e3 = t2[s + 1];
        if ("\\" !== e3 && "." !== e3 && "`" !== e3)
          throw new L(B.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t2);
        n2 += e3, s += 2;
      } else
        "`" === e2 ? (r2 = !r2, s++) : "." !== e2 || r2 ? (n2 += e2, s++) : (i(), s++);
    }
    if (i(), r2)
      throw new L(B.INVALID_ARGUMENT, "Unterminated ` in path: " + t2);
    return new ut(e);
  }
  static emptyPath() {
    return new ut([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct {
  constructor(t2) {
    this.path = t2;
  }
  static fromPath(t2) {
    return new ct(rt.fromString(t2));
  }
  static fromName(t2) {
    return new ct(rt.fromString(t2).popFirst(5));
  }
  static empty() {
    return new ct(rt.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t2) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t2;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t2) {
    return null !== t2 && 0 === rt.comparator(this.path, t2.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t2, e) {
    return rt.comparator(t2.path, e.path);
  }
  static isDocumentKey(t2) {
    return t2.length % 2 == 0;
  }
  static fromSegments(t2) {
    return new ct(new rt(t2.slice()));
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at {
  constructor(t2, e, n2, s) {
    this.indexId = t2, this.collectionGroup = e, this.fields = n2, this.indexState = s;
  }
}
function ht(t2) {
  return t2.fields.find((t3) => 2 === t3.kind);
}
function lt(t2) {
  return t2.fields.filter((t3) => 2 !== t3.kind);
}
at.UNKNOWN_ID = -1;
class dt {
  constructor(t2, e) {
    this.fieldPath = t2, this.kind = e;
  }
}
class wt {
  constructor(t2, e) {
    this.sequenceNumber = t2, this.offset = e;
  }
  static empty() {
    return new wt(0, yt.min());
  }
}
function mt(t2, e) {
  const n2 = t2.toTimestamp().seconds, s = t2.toTimestamp().nanoseconds + 1, i = st.fromTimestamp(1e9 === s ? new nt(n2 + 1, 0) : new nt(n2, s));
  return new yt(i, ct.empty(), e);
}
function gt(t2) {
  return new yt(t2.readTime, t2.key, -1);
}
class yt {
  constructor(t2, e, n2) {
    this.readTime = t2, this.documentKey = e, this.largestBatchId = n2;
  }
  static min() {
    return new yt(st.min(), ct.empty(), -1);
  }
  static max() {
    return new yt(st.max(), ct.empty(), -1);
  }
}
function pt(t2, e) {
  let n2 = t2.readTime.compareTo(e.readTime);
  return 0 !== n2 ? n2 : (n2 = ct.comparator(t2.documentKey, e.documentKey), 0 !== n2 ? n2 : Z(t2.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const It = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class Tt {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t2) {
    this.onCommittedListeners.push(t2);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t2) => t2());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Et(t2) {
  if (t2.code !== B.FAILED_PRECONDITION || t2.message !== It)
    throw t2;
  C("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At {
  constructor(t2) {
    this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = false, this.callbackAttached = false, t2((t3) => {
      this.isDone = true, this.result = t3, this.nextCallback && this.nextCallback(t3);
    }, (t3) => {
      this.isDone = true, this.error = t3, this.catchCallback && this.catchCallback(t3);
    });
  }
  catch(t2) {
    return this.next(void 0, t2);
  }
  next(t2, e) {
    return this.callbackAttached && O(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t2, this.result) : new At((n2, s) => {
      this.nextCallback = (e2) => {
        this.wrapSuccess(t2, e2).next(n2, s);
      }, this.catchCallback = (t3) => {
        this.wrapFailure(e, t3).next(n2, s);
      };
    });
  }
  toPromise() {
    return new Promise((t2, e) => {
      this.next(t2, e);
    });
  }
  wrapUserFunction(t2) {
    try {
      const e = t2();
      return e instanceof At ? e : At.resolve(e);
    } catch (t3) {
      return At.reject(t3);
    }
  }
  wrapSuccess(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : At.resolve(e);
  }
  wrapFailure(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : At.reject(e);
  }
  static resolve(t2) {
    return new At((e, n2) => {
      e(t2);
    });
  }
  static reject(t2) {
    return new At((e, n2) => {
      n2(t2);
    });
  }
  static waitFor(t2) {
    return new At((e, n2) => {
      let s = 0, i = 0, r2 = false;
      t2.forEach((t3) => {
        ++s, t3.next(() => {
          ++i, r2 && i === s && e();
        }, (t4) => n2(t4));
      }), r2 = true, i === s && e();
    });
  }
  static or(t2) {
    let e = At.resolve(false);
    for (const n2 of t2)
      e = e.next((t3) => t3 ? At.resolve(t3) : n2());
    return e;
  }
  static forEach(t2, e) {
    const n2 = [];
    return t2.forEach((t3, s) => {
      n2.push(e.call(this, t3, s));
    }), this.waitFor(n2);
  }
  static mapArray(t2, e) {
    return new At((n2, s) => {
      const i = t2.length, r2 = new Array(i);
      let o = 0;
      for (let u2 = 0; u2 < i; u2++) {
        const c = u2;
        e(t2[c]).next((t3) => {
          r2[c] = t3, ++o, o === i && n2(r2);
        }, (t3) => s(t3));
      }
    });
  }
  static doWhile(t2, e) {
    return new At((n2, s) => {
      const i = () => {
        true === t2() ? e().next(() => {
          i();
        }, s) : n2();
      };
      i();
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt {
  constructor(t2, e) {
    this.action = t2, this.transaction = e, this.aborted = false, this.P = new U(), this.transaction.oncomplete = () => {
      this.P.resolve();
    }, this.transaction.onabort = () => {
      e.error ? this.P.reject(new vt(t2, e.error)) : this.P.resolve();
    }, this.transaction.onerror = (e2) => {
      const n2 = xt(e2.target.error);
      this.P.reject(new vt(t2, n2));
    };
  }
  static open(t2, e, n2, s) {
    try {
      return new Rt(e, t2.transaction(s, n2));
    } catch (t3) {
      throw new vt(e, t3);
    }
  }
  get v() {
    return this.P.promise;
  }
  abort(t2) {
    t2 && this.P.reject(t2), this.aborted || (C("SimpleDb", "Aborting transaction:", t2 ? t2.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
  }
  V() {
    const t2 = this.transaction;
    this.aborted || "function" != typeof t2.commit || t2.commit();
  }
  store(t2) {
    const e = this.transaction.objectStore(t2);
    return new St(e);
  }
}
class bt {
  constructor(t2, e, n2) {
    this.name = t2, this.version = e, this.S = n2;
    12.2 === bt.D(getUA()) && x("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  static delete(t2) {
    return C("SimpleDb", "Removing database:", t2), Dt(window.indexedDB.deleteDatabase(t2)).toPromise();
  }
  static C() {
    if (!isIndexedDBAvailable())
      return false;
    if (bt.N())
      return true;
    const t2 = getUA(), e = bt.D(t2), n2 = 0 < e && e < 10, s = bt.k(t2), i = 0 < s && s < 4.5;
    return !(t2.indexOf("MSIE ") > 0 || t2.indexOf("Trident/") > 0 || t2.indexOf("Edge/") > 0 || n2 || i);
  }
  static N() {
    var t2;
    return "undefined" != typeof process && "YES" === (null === (t2 = process.env) || void 0 === t2 ? void 0 : t2.O);
  }
  static M(t2, e) {
    return t2.store(e);
  }
  static D(t2) {
    const e = t2.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n2 = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n2);
  }
  static k(t2) {
    const e = t2.match(/Android ([\d.]+)/i), n2 = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n2);
  }
  async F(t2) {
    return this.db || (C("SimpleDb", "Opening database:", this.name), this.db = await new Promise((e, n2) => {
      const s = indexedDB.open(this.name, this.version);
      s.onsuccess = (t3) => {
        const n3 = t3.target.result;
        e(n3);
      }, s.onblocked = () => {
        n2(new vt(t2, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
      }, s.onerror = (e2) => {
        const s2 = e2.target.error;
        "VersionError" === s2.name ? n2(new L(B.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === s2.name ? n2(new L(B.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + s2)) : n2(new vt(t2, s2));
      }, s.onupgradeneeded = (t3) => {
        C("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', t3.oldVersion);
        const e2 = t3.target.result;
        this.S.$(e2, s.transaction, t3.oldVersion, this.version).next(() => {
          C("SimpleDb", "Database upgrade to version " + this.version + " complete");
        });
      };
    })), this.B && (this.db.onversionchange = (t3) => this.B(t3)), this.db;
  }
  L(t2) {
    this.B = t2, this.db && (this.db.onversionchange = (e) => t2(e));
  }
  async runTransaction(t2, e, n2, s) {
    const i = "readonly" === e;
    let r2 = 0;
    for (; ; ) {
      ++r2;
      try {
        this.db = await this.F(t2);
        const e2 = Rt.open(this.db, t2, i ? "readonly" : "readwrite", n2), r3 = s(e2).next((t3) => (e2.V(), t3)).catch((t3) => (e2.abort(t3), At.reject(t3))).toPromise();
        return r3.catch(() => {
        }), await e2.v, r3;
      } catch (t3) {
        const e2 = t3, n3 = "FirebaseError" !== e2.name && r2 < 3;
        if (C("SimpleDb", "Transaction failed with error:", e2.message, "Retrying:", n3), this.close(), !n3)
          return Promise.reject(e2);
      }
    }
  }
  close() {
    this.db && this.db.close(), this.db = void 0;
  }
}
class Pt {
  constructor(t2) {
    this.U = t2, this.q = false, this.K = null;
  }
  get isDone() {
    return this.q;
  }
  get G() {
    return this.K;
  }
  set cursor(t2) {
    this.U = t2;
  }
  done() {
    this.q = true;
  }
  j(t2) {
    this.K = t2;
  }
  delete() {
    return Dt(this.U.delete());
  }
}
class vt extends L {
  constructor(t2, e) {
    super(B.UNAVAILABLE, `IndexedDB transaction '${t2}' failed: ${e}`), this.name = "IndexedDbTransactionError";
  }
}
function Vt(t2) {
  return "IndexedDbTransactionError" === t2.name;
}
class St {
  constructor(t2) {
    this.store = t2;
  }
  put(t2, e) {
    let n2;
    return void 0 !== e ? (C("SimpleDb", "PUT", this.store.name, t2, e), n2 = this.store.put(e, t2)) : (C("SimpleDb", "PUT", this.store.name, "<auto-key>", t2), n2 = this.store.put(t2)), Dt(n2);
  }
  add(t2) {
    C("SimpleDb", "ADD", this.store.name, t2, t2);
    return Dt(this.store.add(t2));
  }
  get(t2) {
    return Dt(this.store.get(t2)).next((e) => (void 0 === e && (e = null), C("SimpleDb", "GET", this.store.name, t2, e), e));
  }
  delete(t2) {
    C("SimpleDb", "DELETE", this.store.name, t2);
    return Dt(this.store.delete(t2));
  }
  count() {
    C("SimpleDb", "COUNT", this.store.name);
    return Dt(this.store.count());
  }
  W(t2, e) {
    const n2 = this.options(t2, e);
    if (n2.index || "function" != typeof this.store.getAll) {
      const t3 = this.cursor(n2), e2 = [];
      return this.H(t3, (t4, n3) => {
        e2.push(n3);
      }).next(() => e2);
    }
    {
      const t3 = this.store.getAll(n2.range);
      return new At((e2, n3) => {
        t3.onerror = (t4) => {
          n3(t4.target.error);
        }, t3.onsuccess = (t4) => {
          e2(t4.target.result);
        };
      });
    }
  }
  J(t2, e) {
    const n2 = this.store.getAll(t2, null === e ? void 0 : e);
    return new At((t3, e2) => {
      n2.onerror = (t4) => {
        e2(t4.target.error);
      }, n2.onsuccess = (e3) => {
        t3(e3.target.result);
      };
    });
  }
  Y(t2, e) {
    C("SimpleDb", "DELETE ALL", this.store.name);
    const n2 = this.options(t2, e);
    n2.X = false;
    const s = this.cursor(n2);
    return this.H(s, (t3, e2, n3) => n3.delete());
  }
  Z(t2, e) {
    let n2;
    e ? n2 = t2 : (n2 = {}, e = t2);
    const s = this.cursor(n2);
    return this.H(s, e);
  }
  tt(t2) {
    const e = this.cursor({});
    return new At((n2, s) => {
      e.onerror = (t3) => {
        const e2 = xt(t3.target.error);
        s(e2);
      }, e.onsuccess = (e2) => {
        const s2 = e2.target.result;
        s2 ? t2(s2.primaryKey, s2.value).next((t3) => {
          t3 ? s2.continue() : n2();
        }) : n2();
      };
    });
  }
  H(t2, e) {
    const n2 = [];
    return new At((s, i) => {
      t2.onerror = (t3) => {
        i(t3.target.error);
      }, t2.onsuccess = (t3) => {
        const i2 = t3.target.result;
        if (!i2)
          return void s();
        const r2 = new Pt(i2), o = e(i2.primaryKey, i2.value, r2);
        if (o instanceof At) {
          const t4 = o.catch((t5) => (r2.done(), At.reject(t5)));
          n2.push(t4);
        }
        r2.isDone ? s() : null === r2.G ? i2.continue() : i2.continue(r2.G);
      };
    }).next(() => At.waitFor(n2));
  }
  options(t2, e) {
    let n2;
    return void 0 !== t2 && ("string" == typeof t2 ? n2 = t2 : e = t2), {
      index: n2,
      range: e
    };
  }
  cursor(t2) {
    let e = "next";
    if (t2.reverse && (e = "prev"), t2.index) {
      const n2 = this.store.index(t2.index);
      return t2.X ? n2.openKeyCursor(t2.range, e) : n2.openCursor(t2.range, e);
    }
    return this.store.openCursor(t2.range, e);
  }
}
function Dt(t2) {
  return new At((e, n2) => {
    t2.onsuccess = (t3) => {
      const n3 = t3.target.result;
      e(n3);
    }, t2.onerror = (t3) => {
      const e2 = xt(t3.target.error);
      n2(e2);
    };
  });
}
let Ct = false;
function xt(t2) {
  const e = bt.D(getUA());
  if (e >= 12.2 && e < 13) {
    const e2 = "An internal error was encountered in the Indexed Database server";
    if (t2.message.indexOf(e2) >= 0) {
      const t3 = new L("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e2}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
      return Ct || (Ct = true, setTimeout(() => {
        throw t3;
      }, 0)), t3;
    }
  }
  return t2;
}
class Nt {
  constructor(t2, e) {
    this.asyncQueue = t2, this.et = e, this.task = null;
  }
  start() {
    this.nt(15e3);
  }
  stop() {
    this.task && (this.task.cancel(), this.task = null);
  }
  get started() {
    return null !== this.task;
  }
  nt(t2) {
    C("IndexBackiller", `Scheduled in ${t2}ms`), this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", t2, async () => {
      this.task = null;
      try {
        C("IndexBackiller", `Documents written: ${await this.et.st()}`);
      } catch (t3) {
        Vt(t3) ? C("IndexBackiller", "Ignoring IndexedDB error during index backfill: ", t3) : await Et(t3);
      }
      await this.nt(6e4);
    });
  }
}
class kt {
  constructor(t2, e) {
    this.localStore = t2, this.persistence = e;
  }
  async st(t2 = 50) {
    return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", (e) => this.it(e, t2));
  }
  it(t2, e) {
    const n2 = /* @__PURE__ */ new Set();
    let s = e, i = true;
    return At.doWhile(() => true === i && s > 0, () => this.localStore.indexManager.getNextCollectionGroupToUpdate(t2).next((e2) => {
      if (null !== e2 && !n2.has(e2))
        return C("IndexBackiller", `Processing collection: ${e2}`), this.rt(t2, e2, s).next((t3) => {
          s -= t3, n2.add(e2);
        });
      i = false;
    })).next(() => e - s);
  }
  rt(t2, e, n2) {
    return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t2, e).next((s) => this.localStore.localDocuments.getNextDocuments(t2, e, s, n2).next((n3) => {
      const i = n3.changes;
      return this.localStore.indexManager.updateIndexEntries(t2, i).next(() => this.ot(s, n3)).next((n4) => (C("IndexBackiller", `Updating offset: ${n4}`), this.localStore.indexManager.updateCollectionGroup(t2, e, n4))).next(() => i.size);
    }));
  }
  ot(t2, e) {
    let n2 = t2;
    return e.changes.forEach((t3, e2) => {
      const s = gt(e2);
      pt(s, n2) > 0 && (n2 = s);
    }), new yt(n2.readTime, n2.documentKey, Math.max(e.batchId, t2.largestBatchId));
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot {
  constructor(t2, e) {
    this.previousValue = t2, e && (e.sequenceNumberHandler = (t3) => this.ut(t3), this.ct = (t3) => e.writeSequenceNumber(t3));
  }
  ut(t2) {
    return this.previousValue = Math.max(t2, this.previousValue), this.previousValue;
  }
  next() {
    const t2 = ++this.previousValue;
    return this.ct && this.ct(t2), t2;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mt(t2) {
  let e = 0;
  for (const n2 in t2)
    Object.prototype.hasOwnProperty.call(t2, n2) && e++;
  return e;
}
function Ft(t2, e) {
  for (const n2 in t2)
    Object.prototype.hasOwnProperty.call(t2, n2) && e(n2, t2[n2]);
}
function $t(t2) {
  for (const e in t2)
    if (Object.prototype.hasOwnProperty.call(t2, e))
      return false;
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ot.at = -1;
class Bt {
  constructor(t2, e) {
    this.comparator = t2, this.root = e || Ut.EMPTY;
  }
  insert(t2, e) {
    return new Bt(this.comparator, this.root.insert(t2, e, this.comparator).copy(null, null, Ut.BLACK, null, null));
  }
  remove(t2) {
    return new Bt(this.comparator, this.root.remove(t2, this.comparator).copy(null, null, Ut.BLACK, null, null));
  }
  get(t2) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const n2 = this.comparator(t2, e.key);
      if (0 === n2)
        return e.value;
      n2 < 0 ? e = e.left : n2 > 0 && (e = e.right);
    }
    return null;
  }
  indexOf(t2) {
    let e = 0, n2 = this.root;
    for (; !n2.isEmpty(); ) {
      const s = this.comparator(t2, n2.key);
      if (0 === s)
        return e + n2.left.size;
      s < 0 ? n2 = n2.left : (e += n2.left.size + 1, n2 = n2.right);
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t2) {
    return this.root.inorderTraversal(t2);
  }
  forEach(t2) {
    this.inorderTraversal((e, n2) => (t2(e, n2), false));
  }
  toString() {
    const t2 = [];
    return this.inorderTraversal((e, n2) => (t2.push(`${e}:${n2}`), false)), `{${t2.join(", ")}}`;
  }
  reverseTraversal(t2) {
    return this.root.reverseTraversal(t2);
  }
  getIterator() {
    return new Lt(this.root, null, this.comparator, false);
  }
  getIteratorFrom(t2) {
    return new Lt(this.root, t2, this.comparator, false);
  }
  getReverseIterator() {
    return new Lt(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(t2) {
    return new Lt(this.root, t2, this.comparator, true);
  }
}
class Lt {
  constructor(t2, e, n2, s) {
    this.isReverse = s, this.nodeStack = [];
    let i = 1;
    for (; !t2.isEmpty(); )
      if (i = e ? n2(t2.key, e) : 1, e && s && (i *= -1), i < 0)
        t2 = this.isReverse ? t2.left : t2.right;
      else {
        if (0 === i) {
          this.nodeStack.push(t2);
          break;
        }
        this.nodeStack.push(t2), t2 = this.isReverse ? t2.right : t2.left;
      }
  }
  getNext() {
    let t2 = this.nodeStack.pop();
    const e = {
      key: t2.key,
      value: t2.value
    };
    if (this.isReverse)
      for (t2 = t2.left; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.right;
    else
      for (t2 = t2.right; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.left;
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length)
      return null;
    const t2 = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t2.key,
      value: t2.value
    };
  }
}
class Ut {
  constructor(t2, e, n2, s, i) {
    this.key = t2, this.value = e, this.color = null != n2 ? n2 : Ut.RED, this.left = null != s ? s : Ut.EMPTY, this.right = null != i ? i : Ut.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  copy(t2, e, n2, s, i) {
    return new Ut(null != t2 ? t2 : this.key, null != e ? e : this.value, null != n2 ? n2 : this.color, null != s ? s : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  inorderTraversal(t2) {
    return this.left.inorderTraversal(t2) || t2(this.key, this.value) || this.right.inorderTraversal(t2);
  }
  reverseTraversal(t2) {
    return this.right.reverseTraversal(t2) || t2(this.key, this.value) || this.left.reverseTraversal(t2);
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t2, e, n2) {
    let s = this;
    const i = n2(t2, s.key);
    return s = i < 0 ? s.copy(null, null, null, s.left.insert(t2, e, n2), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t2, e, n2)), s.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty())
      return Ut.EMPTY;
    let t2 = this;
    return t2.left.isRed() || t2.left.left.isRed() || (t2 = t2.moveRedLeft()), t2 = t2.copy(null, null, null, t2.left.removeMin(), null), t2.fixUp();
  }
  remove(t2, e) {
    let n2, s = this;
    if (e(t2, s.key) < 0)
      s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), s = s.copy(null, null, null, s.left.remove(t2, e), null);
    else {
      if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), 0 === e(t2, s.key)) {
        if (s.right.isEmpty())
          return Ut.EMPTY;
        n2 = s.right.min(), s = s.copy(n2.key, n2.value, null, null, s.right.removeMin());
      }
      s = s.copy(null, null, null, null, s.right.remove(t2, e));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t2 = this;
    return t2.right.isRed() && !t2.left.isRed() && (t2 = t2.rotateLeft()), t2.left.isRed() && t2.left.left.isRed() && (t2 = t2.rotateRight()), t2.left.isRed() && t2.right.isRed() && (t2 = t2.colorFlip()), t2;
  }
  moveRedLeft() {
    let t2 = this.colorFlip();
    return t2.right.left.isRed() && (t2 = t2.copy(null, null, null, null, t2.right.rotateRight()), t2 = t2.rotateLeft(), t2 = t2.colorFlip()), t2;
  }
  moveRedRight() {
    let t2 = this.colorFlip();
    return t2.left.left.isRed() && (t2 = t2.rotateRight(), t2 = t2.colorFlip()), t2;
  }
  rotateLeft() {
    const t2 = this.copy(null, null, Ut.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t2, null);
  }
  rotateRight() {
    const t2 = this.copy(null, null, Ut.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t2);
  }
  colorFlip() {
    const t2 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t2, e);
  }
  checkMaxDepth() {
    const t2 = this.check();
    return Math.pow(2, t2) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed())
      throw O();
    if (this.right.isRed())
      throw O();
    const t2 = this.left.check();
    if (t2 !== this.right.check())
      throw O();
    return t2 + (this.isRed() ? 0 : 1);
  }
}
Ut.EMPTY = null, Ut.RED = true, Ut.BLACK = false;
Ut.EMPTY = new class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw O();
  }
  get value() {
    throw O();
  }
  get color() {
    throw O();
  }
  get left() {
    throw O();
  }
  get right() {
    throw O();
  }
  copy(t2, e, n2, s, i) {
    return this;
  }
  insert(t2, e, n2) {
    return new Ut(t2, e);
  }
  remove(t2, e) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(t2) {
    return false;
  }
  reverseTraversal(t2) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt {
  constructor(t2) {
    this.comparator = t2, this.data = new Bt(this.comparator);
  }
  has(t2) {
    return null !== this.data.get(t2);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t2) {
    return this.data.indexOf(t2);
  }
  forEach(t2) {
    this.data.inorderTraversal((e, n2) => (t2(e), false));
  }
  forEachInRange(t2, e) {
    const n2 = this.data.getIteratorFrom(t2[0]);
    for (; n2.hasNext(); ) {
      const s = n2.getNext();
      if (this.comparator(s.key, t2[1]) >= 0)
        return;
      e(s.key);
    }
  }
  forEachWhile(t2, e) {
    let n2;
    for (n2 = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n2.hasNext(); ) {
      if (!t2(n2.getNext().key))
        return;
    }
  }
  firstAfterOrEqual(t2) {
    const e = this.data.getIteratorFrom(t2);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new Kt(this.data.getIterator());
  }
  getIteratorFrom(t2) {
    return new Kt(this.data.getIteratorFrom(t2));
  }
  add(t2) {
    return this.copy(this.data.remove(t2).insert(t2, true));
  }
  delete(t2) {
    return this.has(t2) ? this.copy(this.data.remove(t2)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t2) {
    let e = this;
    return e.size < t2.size && (e = t2, t2 = this), t2.forEach((t3) => {
      e = e.add(t3);
    }), e;
  }
  isEqual(t2) {
    if (!(t2 instanceof qt))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.data.getIterator(), n2 = t2.data.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n2.getNext().key;
      if (0 !== this.comparator(t3, s))
        return false;
    }
    return true;
  }
  toArray() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e);
    }), t2;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), "SortedSet(" + t2.toString() + ")";
  }
  copy(t2) {
    const e = new qt(this.comparator);
    return e.data = t2, e;
  }
}
class Kt {
  constructor(t2) {
    this.iter = t2;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
function Gt(t2) {
  return t2.hasNext() ? t2.getNext() : void 0;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt {
  constructor(t2) {
    this.fields = t2, t2.sort(ut.comparator);
  }
  static empty() {
    return new Qt([]);
  }
  unionWith(t2) {
    let e = new qt(ut.comparator);
    for (const t3 of this.fields)
      e = e.add(t3);
    for (const n2 of t2)
      e = e.add(n2);
    return new Qt(e.toArray());
  }
  covers(t2) {
    for (const e of this.fields)
      if (e.isPrefixOf(t2))
        return true;
    return false;
  }
  isEqual(t2) {
    return tt(this.fields, t2.fields, (t3, e) => t3.isEqual(e));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt() {
  return "undefined" != typeof atob;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt {
  constructor(t2) {
    this.binaryString = t2;
  }
  static fromBase64String(t2) {
    const e = atob(t2);
    return new Wt(e);
  }
  static fromUint8Array(t2) {
    const e = function(t3) {
      let e2 = "";
      for (let n2 = 0; n2 < t3.length; ++n2)
        e2 += String.fromCharCode(t3[n2]);
      return e2;
    }(t2);
    return new Wt(e);
  }
  [Symbol.iterator]() {
    let t2 = 0;
    return {
      next: () => t2 < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(t2++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return t2 = this.binaryString, btoa(t2);
    var t2;
  }
  toUint8Array() {
    return function(t2) {
      const e = new Uint8Array(t2.length);
      for (let n2 = 0; n2 < t2.length; n2++)
        e[n2] = t2.charCodeAt(n2);
      return e;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t2) {
    return Z(this.binaryString, t2.binaryString);
  }
  isEqual(t2) {
    return this.binaryString === t2.binaryString;
  }
}
Wt.EMPTY_BYTE_STRING = new Wt("");
const zt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Ht(t2) {
  if (M(!!t2), "string" == typeof t2) {
    let e = 0;
    const n2 = zt.exec(t2);
    if (M(!!n2), n2[1]) {
      let t3 = n2[1];
      t3 = (t3 + "000000000").substr(0, 9), e = Number(t3);
    }
    const s = new Date(t2);
    return {
      seconds: Math.floor(s.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: Jt(t2.seconds),
    nanos: Jt(t2.nanos)
  };
}
function Jt(t2) {
  return "number" == typeof t2 ? t2 : "string" == typeof t2 ? Number(t2) : 0;
}
function Yt(t2) {
  return "string" == typeof t2 ? Wt.fromBase64String(t2) : Wt.fromUint8Array(t2);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(t2) {
  var e, n2;
  return "server_timestamp" === (null === (n2 = ((null === (e = null == t2 ? void 0 : t2.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n2 ? void 0 : n2.stringValue);
}
function Zt(t2) {
  const e = t2.mapValue.fields.__previous_value__;
  return Xt(e) ? Zt(e) : e;
}
function te(t2) {
  const e = Ht(t2.mapValue.fields.__local_write_time__.timestampValue);
  return new nt(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee {
  constructor(t2, e, n2, s, i, r2, o, u2) {
    this.databaseId = t2, this.appId = e, this.persistenceKey = n2, this.host = s, this.ssl = i, this.forceLongPolling = r2, this.autoDetectLongPolling = o, this.useFetchStreams = u2;
  }
}
class ne {
  constructor(t2, e) {
    this.projectId = t2, this.database = e || "(default)";
  }
  static empty() {
    return new ne("", "");
  }
  get isDefaultDatabase() {
    return "(default)" === this.database;
  }
  isEqual(t2) {
    return t2 instanceof ne && t2.projectId === this.projectId && t2.database === this.database;
  }
}
function se(t2) {
  return null == t2;
}
function ie(t2) {
  return 0 === t2 && 1 / t2 == -1 / 0;
}
function re(t2) {
  return "number" == typeof t2 && Number.isInteger(t2) && !ie(t2) && t2 <= Number.MAX_SAFE_INTEGER && t2 >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oe = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
}, ue = {
  nullValue: "NULL_VALUE"
};
function ce(t2) {
  return "nullValue" in t2 ? 0 : "booleanValue" in t2 ? 1 : "integerValue" in t2 || "doubleValue" in t2 ? 2 : "timestampValue" in t2 ? 3 : "stringValue" in t2 ? 5 : "bytesValue" in t2 ? 6 : "referenceValue" in t2 ? 7 : "geoPointValue" in t2 ? 8 : "arrayValue" in t2 ? 9 : "mapValue" in t2 ? Xt(t2) ? 4 : Ee(t2) ? 9007199254740991 : 10 : O();
}
function ae(t2, e) {
  if (t2 === e)
    return true;
  const n2 = ce(t2);
  if (n2 !== ce(e))
    return false;
  switch (n2) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return t2.booleanValue === e.booleanValue;
    case 4:
      return te(t2).isEqual(te(e));
    case 3:
      return function(t3, e2) {
        if ("string" == typeof t3.timestampValue && "string" == typeof e2.timestampValue && t3.timestampValue.length === e2.timestampValue.length)
          return t3.timestampValue === e2.timestampValue;
        const n3 = Ht(t3.timestampValue), s = Ht(e2.timestampValue);
        return n3.seconds === s.seconds && n3.nanos === s.nanos;
      }(t2, e);
    case 5:
      return t2.stringValue === e.stringValue;
    case 6:
      return function(t3, e2) {
        return Yt(t3.bytesValue).isEqual(Yt(e2.bytesValue));
      }(t2, e);
    case 7:
      return t2.referenceValue === e.referenceValue;
    case 8:
      return function(t3, e2) {
        return Jt(t3.geoPointValue.latitude) === Jt(e2.geoPointValue.latitude) && Jt(t3.geoPointValue.longitude) === Jt(e2.geoPointValue.longitude);
      }(t2, e);
    case 2:
      return function(t3, e2) {
        if ("integerValue" in t3 && "integerValue" in e2)
          return Jt(t3.integerValue) === Jt(e2.integerValue);
        if ("doubleValue" in t3 && "doubleValue" in e2) {
          const n3 = Jt(t3.doubleValue), s = Jt(e2.doubleValue);
          return n3 === s ? ie(n3) === ie(s) : isNaN(n3) && isNaN(s);
        }
        return false;
      }(t2, e);
    case 9:
      return tt(t2.arrayValue.values || [], e.arrayValue.values || [], ae);
    case 10:
      return function(t3, e2) {
        const n3 = t3.mapValue.fields || {}, s = e2.mapValue.fields || {};
        if (Mt(n3) !== Mt(s))
          return false;
        for (const t4 in n3)
          if (n3.hasOwnProperty(t4) && (void 0 === s[t4] || !ae(n3[t4], s[t4])))
            return false;
        return true;
      }(t2, e);
    default:
      return O();
  }
}
function he(t2, e) {
  return void 0 !== (t2.values || []).find((t3) => ae(t3, e));
}
function le(t2, e) {
  if (t2 === e)
    return 0;
  const n2 = ce(t2), s = ce(e);
  if (n2 !== s)
    return Z(n2, s);
  switch (n2) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return Z(t2.booleanValue, e.booleanValue);
    case 2:
      return function(t3, e2) {
        const n3 = Jt(t3.integerValue || t3.doubleValue), s2 = Jt(e2.integerValue || e2.doubleValue);
        return n3 < s2 ? -1 : n3 > s2 ? 1 : n3 === s2 ? 0 : isNaN(n3) ? isNaN(s2) ? 0 : -1 : 1;
      }(t2, e);
    case 3:
      return fe(t2.timestampValue, e.timestampValue);
    case 4:
      return fe(te(t2), te(e));
    case 5:
      return Z(t2.stringValue, e.stringValue);
    case 6:
      return function(t3, e2) {
        const n3 = Yt(t3), s2 = Yt(e2);
        return n3.compareTo(s2);
      }(t2.bytesValue, e.bytesValue);
    case 7:
      return function(t3, e2) {
        const n3 = t3.split("/"), s2 = e2.split("/");
        for (let t4 = 0; t4 < n3.length && t4 < s2.length; t4++) {
          const e3 = Z(n3[t4], s2[t4]);
          if (0 !== e3)
            return e3;
        }
        return Z(n3.length, s2.length);
      }(t2.referenceValue, e.referenceValue);
    case 8:
      return function(t3, e2) {
        const n3 = Z(Jt(t3.latitude), Jt(e2.latitude));
        if (0 !== n3)
          return n3;
        return Z(Jt(t3.longitude), Jt(e2.longitude));
      }(t2.geoPointValue, e.geoPointValue);
    case 9:
      return function(t3, e2) {
        const n3 = t3.values || [], s2 = e2.values || [];
        for (let t4 = 0; t4 < n3.length && t4 < s2.length; ++t4) {
          const e3 = le(n3[t4], s2[t4]);
          if (e3)
            return e3;
        }
        return Z(n3.length, s2.length);
      }(t2.arrayValue, e.arrayValue);
    case 10:
      return function(t3, e2) {
        if (t3 === oe.mapValue && e2 === oe.mapValue)
          return 0;
        if (t3 === oe.mapValue)
          return 1;
        if (e2 === oe.mapValue)
          return -1;
        const n3 = t3.fields || {}, s2 = Object.keys(n3), i = e2.fields || {}, r2 = Object.keys(i);
        s2.sort(), r2.sort();
        for (let t4 = 0; t4 < s2.length && t4 < r2.length; ++t4) {
          const e3 = Z(s2[t4], r2[t4]);
          if (0 !== e3)
            return e3;
          const o = le(n3[s2[t4]], i[r2[t4]]);
          if (0 !== o)
            return o;
        }
        return Z(s2.length, r2.length);
      }(t2.mapValue, e.mapValue);
    default:
      throw O();
  }
}
function fe(t2, e) {
  if ("string" == typeof t2 && "string" == typeof e && t2.length === e.length)
    return Z(t2, e);
  const n2 = Ht(t2), s = Ht(e), i = Z(n2.seconds, s.seconds);
  return 0 !== i ? i : Z(n2.nanos, s.nanos);
}
function de(t2) {
  return _e(t2);
}
function _e(t2) {
  return "nullValue" in t2 ? "null" : "booleanValue" in t2 ? "" + t2.booleanValue : "integerValue" in t2 ? "" + t2.integerValue : "doubleValue" in t2 ? "" + t2.doubleValue : "timestampValue" in t2 ? function(t3) {
    const e2 = Ht(t3);
    return `time(${e2.seconds},${e2.nanos})`;
  }(t2.timestampValue) : "stringValue" in t2 ? t2.stringValue : "bytesValue" in t2 ? Yt(t2.bytesValue).toBase64() : "referenceValue" in t2 ? (n2 = t2.referenceValue, ct.fromName(n2).toString()) : "geoPointValue" in t2 ? `geo(${(e = t2.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t2 ? function(t3) {
    let e2 = "[", n3 = true;
    for (const s of t3.values || [])
      n3 ? n3 = false : e2 += ",", e2 += _e(s);
    return e2 + "]";
  }(t2.arrayValue) : "mapValue" in t2 ? function(t3) {
    const e2 = Object.keys(t3.fields || {}).sort();
    let n3 = "{", s = true;
    for (const i of e2)
      s ? s = false : n3 += ",", n3 += `${i}:${_e(t3.fields[i])}`;
    return n3 + "}";
  }(t2.mapValue) : O();
  var e, n2;
}
function we(t2, e) {
  return {
    referenceValue: `projects/${t2.projectId}/databases/${t2.database}/documents/${e.path.canonicalString()}`
  };
}
function me(t2) {
  return !!t2 && "integerValue" in t2;
}
function ge(t2) {
  return !!t2 && "arrayValue" in t2;
}
function ye(t2) {
  return !!t2 && "nullValue" in t2;
}
function pe(t2) {
  return !!t2 && "doubleValue" in t2 && isNaN(Number(t2.doubleValue));
}
function Ie(t2) {
  return !!t2 && "mapValue" in t2;
}
function Te(t2) {
  if (t2.geoPointValue)
    return {
      geoPointValue: Object.assign({}, t2.geoPointValue)
    };
  if (t2.timestampValue && "object" == typeof t2.timestampValue)
    return {
      timestampValue: Object.assign({}, t2.timestampValue)
    };
  if (t2.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return Ft(t2.mapValue.fields, (t3, n2) => e.mapValue.fields[t3] = Te(n2)), e;
  }
  if (t2.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let n2 = 0; n2 < (t2.arrayValue.values || []).length; ++n2)
      e.arrayValue.values[n2] = Te(t2.arrayValue.values[n2]);
    return e;
  }
  return Object.assign({}, t2);
}
function Ee(t2) {
  return "__max__" === (((t2.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
function Ae(t2) {
  return "nullValue" in t2 ? ue : "booleanValue" in t2 ? {
    booleanValue: false
  } : "integerValue" in t2 || "doubleValue" in t2 ? {
    doubleValue: NaN
  } : "timestampValue" in t2 ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "stringValue" in t2 ? {
    stringValue: ""
  } : "bytesValue" in t2 ? {
    bytesValue: ""
  } : "referenceValue" in t2 ? we(ne.empty(), ct.empty()) : "geoPointValue" in t2 ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "arrayValue" in t2 ? {
    arrayValue: {}
  } : "mapValue" in t2 ? {
    mapValue: {}
  } : O();
}
function Re(t2) {
  return "nullValue" in t2 ? {
    booleanValue: false
  } : "booleanValue" in t2 ? {
    doubleValue: NaN
  } : "integerValue" in t2 || "doubleValue" in t2 ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "timestampValue" in t2 ? {
    stringValue: ""
  } : "stringValue" in t2 ? {
    bytesValue: ""
  } : "bytesValue" in t2 ? we(ne.empty(), ct.empty()) : "referenceValue" in t2 ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "geoPointValue" in t2 ? {
    arrayValue: {}
  } : "arrayValue" in t2 ? {
    mapValue: {}
  } : "mapValue" in t2 ? oe : O();
}
function be(t2, e) {
  const n2 = le(t2.value, e.value);
  return 0 !== n2 ? n2 : t2.inclusive && !e.inclusive ? -1 : !t2.inclusive && e.inclusive ? 1 : 0;
}
function Pe(t2, e) {
  const n2 = le(t2.value, e.value);
  return 0 !== n2 ? n2 : t2.inclusive && !e.inclusive ? 1 : !t2.inclusive && e.inclusive ? -1 : 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve {
  constructor(t2) {
    this.value = t2;
  }
  static empty() {
    return new ve({
      mapValue: {}
    });
  }
  field(t2) {
    if (t2.isEmpty())
      return this.value;
    {
      let e = this.value;
      for (let n2 = 0; n2 < t2.length - 1; ++n2)
        if (e = (e.mapValue.fields || {})[t2.get(n2)], !Ie(e))
          return null;
      return e = (e.mapValue.fields || {})[t2.lastSegment()], e || null;
    }
  }
  set(t2, e) {
    this.getFieldsMap(t2.popLast())[t2.lastSegment()] = Te(e);
  }
  setAll(t2) {
    let e = ut.emptyPath(), n2 = {}, s = [];
    t2.forEach((t3, i2) => {
      if (!e.isImmediateParentOf(i2)) {
        const t4 = this.getFieldsMap(e);
        this.applyChanges(t4, n2, s), n2 = {}, s = [], e = i2.popLast();
      }
      t3 ? n2[i2.lastSegment()] = Te(t3) : s.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(e);
    this.applyChanges(i, n2, s);
  }
  delete(t2) {
    const e = this.field(t2.popLast());
    Ie(e) && e.mapValue.fields && delete e.mapValue.fields[t2.lastSegment()];
  }
  isEqual(t2) {
    return ae(this.value, t2.value);
  }
  getFieldsMap(t2) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = {
      fields: {}
    });
    for (let n2 = 0; n2 < t2.length; ++n2) {
      let s = e.mapValue.fields[t2.get(n2)];
      Ie(s) && s.mapValue.fields || (s = {
        mapValue: {
          fields: {}
        }
      }, e.mapValue.fields[t2.get(n2)] = s), e = s;
    }
    return e.mapValue.fields;
  }
  applyChanges(t2, e, n2) {
    Ft(e, (e2, n3) => t2[e2] = n3);
    for (const e2 of n2)
      delete t2[e2];
  }
  clone() {
    return new ve(Te(this.value));
  }
}
function Ve(t2) {
  const e = [];
  return Ft(t2.fields, (t3, n2) => {
    const s = new ut([t3]);
    if (Ie(n2)) {
      const t4 = Ve(n2.mapValue).fields;
      if (0 === t4.length)
        e.push(s);
      else
        for (const n3 of t4)
          e.push(s.child(n3));
    } else
      e.push(s);
  }), new Qt(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se {
  constructor(t2, e, n2, s, i, r2) {
    this.key = t2, this.documentType = e, this.version = n2, this.readTime = s, this.data = i, this.documentState = r2;
  }
  static newInvalidDocument(t2) {
    return new Se(t2, 0, st.min(), st.min(), ve.empty(), 0);
  }
  static newFoundDocument(t2, e, n2) {
    return new Se(t2, 1, e, st.min(), n2, 0);
  }
  static newNoDocument(t2, e) {
    return new Se(t2, 2, e, st.min(), ve.empty(), 0);
  }
  static newUnknownDocument(t2, e) {
    return new Se(t2, 3, e, st.min(), ve.empty(), 2);
  }
  convertToFoundDocument(t2, e) {
    return this.version = t2, this.documentType = 1, this.data = e, this.documentState = 0, this;
  }
  convertToNoDocument(t2) {
    return this.version = t2, this.documentType = 2, this.data = ve.empty(), this.documentState = 0, this;
  }
  convertToUnknownDocument(t2) {
    return this.version = t2, this.documentType = 3, this.data = ve.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = st.min(), this;
  }
  setReadTime(t2) {
    return this.readTime = t2, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(t2) {
    return t2 instanceof Se && this.key.isEqual(t2.key) && this.version.isEqual(t2.version) && this.documentType === t2.documentType && this.documentState === t2.documentState && this.data.isEqual(t2.data);
  }
  mutableCopy() {
    return new Se(this.key, this.documentType, this.version, this.readTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De {
  constructor(t2, e = null, n2 = [], s = [], i = null, r2 = null, o = null) {
    this.path = t2, this.collectionGroup = e, this.orderBy = n2, this.filters = s, this.limit = i, this.startAt = r2, this.endAt = o, this.ht = null;
  }
}
function Ce(t2, e = null, n2 = [], s = [], i = null, r2 = null, o = null) {
  return new De(t2, e, n2, s, i, r2, o);
}
function xe(t2) {
  const e = $(t2);
  if (null === e.ht) {
    let t3 = e.path.canonicalString();
    null !== e.collectionGroup && (t3 += "|cg:" + e.collectionGroup), t3 += "|f:", t3 += e.filters.map((t4) => {
      return (e2 = t4).field.canonicalString() + e2.op.toString() + de(e2.value);
      var e2;
    }).join(","), t3 += "|ob:", t3 += e.orderBy.map((t4) => function(t5) {
      return t5.field.canonicalString() + t5.dir;
    }(t4)).join(","), se(e.limit) || (t3 += "|l:", t3 += e.limit), e.startAt && (t3 += "|lb:", t3 += e.startAt.inclusive ? "b:" : "a:", t3 += e.startAt.position.map((t4) => de(t4)).join(",")), e.endAt && (t3 += "|ub:", t3 += e.endAt.inclusive ? "a:" : "b:", t3 += e.endAt.position.map((t4) => de(t4)).join(",")), e.ht = t3;
  }
  return e.ht;
}
function Ne(t2) {
  let e = t2.path.canonicalString();
  return null !== t2.collectionGroup && (e += " collectionGroup=" + t2.collectionGroup), t2.filters.length > 0 && (e += `, filters: [${t2.filters.map((t3) => {
    return `${(e2 = t3).field.canonicalString()} ${e2.op} ${de(e2.value)}`;
    var e2;
  }).join(", ")}]`), se(t2.limit) || (e += ", limit: " + t2.limit), t2.orderBy.length > 0 && (e += `, orderBy: [${t2.orderBy.map((t3) => function(t4) {
    return `${t4.field.canonicalString()} (${t4.dir})`;
  }(t3)).join(", ")}]`), t2.startAt && (e += ", startAt: ", e += t2.startAt.inclusive ? "b:" : "a:", e += t2.startAt.position.map((t3) => de(t3)).join(",")), t2.endAt && (e += ", endAt: ", e += t2.endAt.inclusive ? "a:" : "b:", e += t2.endAt.position.map((t3) => de(t3)).join(",")), `Target(${e})`;
}
function ke(t2, e) {
  if (t2.limit !== e.limit)
    return false;
  if (t2.orderBy.length !== e.orderBy.length)
    return false;
  for (let n3 = 0; n3 < t2.orderBy.length; n3++)
    if (!Je(t2.orderBy[n3], e.orderBy[n3]))
      return false;
  if (t2.filters.length !== e.filters.length)
    return false;
  for (let i = 0; i < t2.filters.length; i++)
    if (n2 = t2.filters[i], s = e.filters[i], n2.op !== s.op || !n2.field.isEqual(s.field) || !ae(n2.value, s.value))
      return false;
  var n2, s;
  return t2.collectionGroup === e.collectionGroup && (!!t2.path.isEqual(e.path) && (!!Xe(t2.startAt, e.startAt) && Xe(t2.endAt, e.endAt)));
}
function Oe(t2) {
  return ct.isDocumentKey(t2.path) && null === t2.collectionGroup && 0 === t2.filters.length;
}
function Me(t2, e) {
  return t2.filters.filter((t3) => t3 instanceof Be && t3.field.isEqual(e));
}
function Fe(t2, e, n2) {
  let s = ue, i = true;
  for (const n3 of Me(t2, e)) {
    let t3 = ue, e2 = true;
    switch (n3.op) {
      case "<":
      case "<=":
        t3 = Ae(n3.value);
        break;
      case "==":
      case "in":
      case ">=":
        t3 = n3.value;
        break;
      case ">":
        t3 = n3.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t3 = ue;
    }
    be({
      value: s,
      inclusive: i
    }, {
      value: t3,
      inclusive: e2
    }) < 0 && (s = t3, i = e2);
  }
  if (null !== n2)
    for (let r2 = 0; r2 < t2.orderBy.length; ++r2) {
      if (t2.orderBy[r2].field.isEqual(e)) {
        const t3 = n2.position[r2];
        be({
          value: s,
          inclusive: i
        }, {
          value: t3,
          inclusive: n2.inclusive
        }) < 0 && (s = t3, i = n2.inclusive);
        break;
      }
    }
  return {
    value: s,
    inclusive: i
  };
}
function $e(t2, e, n2) {
  let s = oe, i = true;
  for (const n3 of Me(t2, e)) {
    let t3 = oe, e2 = true;
    switch (n3.op) {
      case ">=":
      case ">":
        t3 = Re(n3.value), e2 = false;
        break;
      case "==":
      case "in":
      case "<=":
        t3 = n3.value;
        break;
      case "<":
        t3 = n3.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t3 = oe;
    }
    Pe({
      value: s,
      inclusive: i
    }, {
      value: t3,
      inclusive: e2
    }) > 0 && (s = t3, i = e2);
  }
  if (null !== n2)
    for (let r2 = 0; r2 < t2.orderBy.length; ++r2) {
      if (t2.orderBy[r2].field.isEqual(e)) {
        const t3 = n2.position[r2];
        Pe({
          value: s,
          inclusive: i
        }, {
          value: t3,
          inclusive: n2.inclusive
        }) > 0 && (s = t3, i = n2.inclusive);
        break;
      }
    }
  return {
    value: s,
    inclusive: i
  };
}
class Be extends class {
} {
  constructor(t2, e, n2) {
    super(), this.field = t2, this.op = e, this.value = n2;
  }
  static create(t2, e, n2) {
    return t2.isKeyField() ? "in" === e || "not-in" === e ? this.lt(t2, e, n2) : new Le(t2, e, n2) : "array-contains" === e ? new Ge(t2, n2) : "in" === e ? new Qe(t2, n2) : "not-in" === e ? new je(t2, n2) : "array-contains-any" === e ? new We(t2, n2) : new Be(t2, e, n2);
  }
  static lt(t2, e, n2) {
    return "in" === e ? new Ue(t2, n2) : new qe(t2, n2);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return "!=" === this.op ? null !== e && this.ft(le(e, this.value)) : null !== e && ce(this.value) === ce(e) && this.ft(le(e, this.value));
  }
  ft(t2) {
    switch (this.op) {
      case "<":
        return t2 < 0;
      case "<=":
        return t2 <= 0;
      case "==":
        return 0 === t2;
      case "!=":
        return 0 !== t2;
      case ">":
        return t2 > 0;
      case ">=":
        return t2 >= 0;
      default:
        return O();
    }
  }
  dt() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
}
class Le extends Be {
  constructor(t2, e, n2) {
    super(t2, e, n2), this.key = ct.fromName(n2.referenceValue);
  }
  matches(t2) {
    const e = ct.comparator(t2.key, this.key);
    return this.ft(e);
  }
}
class Ue extends Be {
  constructor(t2, e) {
    super(t2, "in", e), this.keys = Ke("in", e);
  }
  matches(t2) {
    return this.keys.some((e) => e.isEqual(t2.key));
  }
}
class qe extends Be {
  constructor(t2, e) {
    super(t2, "not-in", e), this.keys = Ke("not-in", e);
  }
  matches(t2) {
    return !this.keys.some((e) => e.isEqual(t2.key));
  }
}
function Ke(t2, e) {
  var n2;
  return ((null === (n2 = e.arrayValue) || void 0 === n2 ? void 0 : n2.values) || []).map((t3) => ct.fromName(t3.referenceValue));
}
class Ge extends Be {
  constructor(t2, e) {
    super(t2, "array-contains", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return ge(e) && he(e.arrayValue, this.value);
  }
}
class Qe extends Be {
  constructor(t2, e) {
    super(t2, "in", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return null !== e && he(this.value.arrayValue, e);
  }
}
class je extends Be {
  constructor(t2, e) {
    super(t2, "not-in", e);
  }
  matches(t2) {
    if (he(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return false;
    const e = t2.data.field(this.field);
    return null !== e && !he(this.value.arrayValue, e);
  }
}
class We extends Be {
  constructor(t2, e) {
    super(t2, "array-contains-any", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return !(!ge(e) || !e.arrayValue.values) && e.arrayValue.values.some((t3) => he(this.value.arrayValue, t3));
  }
}
class ze {
  constructor(t2, e) {
    this.position = t2, this.inclusive = e;
  }
}
class He {
  constructor(t2, e = "asc") {
    this.field = t2, this.dir = e;
  }
}
function Je(t2, e) {
  return t2.dir === e.dir && t2.field.isEqual(e.field);
}
function Ye(t2, e, n2) {
  let s = 0;
  for (let i = 0; i < t2.position.length; i++) {
    const r2 = e[i], o = t2.position[i];
    if (r2.field.isKeyField())
      s = ct.comparator(ct.fromName(o.referenceValue), n2.key);
    else {
      s = le(o, n2.data.field(r2.field));
    }
    if ("desc" === r2.dir && (s *= -1), 0 !== s)
      break;
  }
  return s;
}
function Xe(t2, e) {
  if (null === t2)
    return null === e;
  if (null === e)
    return false;
  if (t2.inclusive !== e.inclusive || t2.position.length !== e.position.length)
    return false;
  for (let n2 = 0; n2 < t2.position.length; n2++) {
    if (!ae(t2.position[n2], e.position[n2]))
      return false;
  }
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze {
  constructor(t2, e = null, n2 = [], s = [], i = null, r2 = "F", o = null, u2 = null) {
    this.path = t2, this.collectionGroup = e, this.explicitOrderBy = n2, this.filters = s, this.limit = i, this.limitType = r2, this.startAt = o, this.endAt = u2, this._t = null, this.wt = null, this.startAt, this.endAt;
  }
}
function tn(t2, e, n2, s, i, r2, o, u2) {
  return new Ze(t2, e, n2, s, i, r2, o, u2);
}
function en(t2) {
  return new Ze(t2);
}
function nn(t2) {
  return 0 === t2.filters.length && null === t2.limit && null == t2.startAt && null == t2.endAt && (0 === t2.explicitOrderBy.length || 1 === t2.explicitOrderBy.length && t2.explicitOrderBy[0].field.isKeyField());
}
function sn(t2) {
  return t2.explicitOrderBy.length > 0 ? t2.explicitOrderBy[0].field : null;
}
function rn(t2) {
  for (const e of t2.filters)
    if (e.dt())
      return e.field;
  return null;
}
function on(t2) {
  return null !== t2.collectionGroup;
}
function un(t2) {
  const e = $(t2);
  if (null === e._t) {
    e._t = [];
    const t3 = rn(e), n2 = sn(e);
    if (null !== t3 && null === n2)
      t3.isKeyField() || e._t.push(new He(t3)), e._t.push(new He(ut.keyField(), "asc"));
    else {
      let t4 = false;
      for (const n3 of e.explicitOrderBy)
        e._t.push(n3), n3.field.isKeyField() && (t4 = true);
      if (!t4) {
        const t5 = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
        e._t.push(new He(ut.keyField(), t5));
      }
    }
  }
  return e._t;
}
function cn(t2) {
  const e = $(t2);
  if (!e.wt)
    if ("F" === e.limitType)
      e.wt = Ce(e.path, e.collectionGroup, un(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      const t3 = [];
      for (const n3 of un(e)) {
        const e2 = "desc" === n3.dir ? "asc" : "desc";
        t3.push(new He(n3.field, e2));
      }
      const n2 = e.endAt ? new ze(e.endAt.position, e.endAt.inclusive) : null, s = e.startAt ? new ze(e.startAt.position, e.startAt.inclusive) : null;
      e.wt = Ce(e.path, e.collectionGroup, t3, e.filters, e.limit, n2, s);
    }
  return e.wt;
}
function an(t2, e, n2) {
  return new Ze(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), e, n2, t2.startAt, t2.endAt);
}
function hn(t2, e) {
  return ke(cn(t2), cn(e)) && t2.limitType === e.limitType;
}
function ln(t2) {
  return `${xe(cn(t2))}|lt:${t2.limitType}`;
}
function fn(t2) {
  return `Query(target=${Ne(cn(t2))}; limitType=${t2.limitType})`;
}
function dn(t2, e) {
  return e.isFoundDocument() && function(t3, e2) {
    const n2 = e2.key.path;
    return null !== t3.collectionGroup ? e2.key.hasCollectionId(t3.collectionGroup) && t3.path.isPrefixOf(n2) : ct.isDocumentKey(t3.path) ? t3.path.isEqual(n2) : t3.path.isImmediateParentOf(n2);
  }(t2, e) && function(t3, e2) {
    for (const n2 of t3.explicitOrderBy)
      if (!n2.field.isKeyField() && null === e2.data.field(n2.field))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    for (const n2 of t3.filters)
      if (!n2.matches(e2))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    if (t3.startAt && !function(t4, e3, n2) {
      const s = Ye(t4, e3, n2);
      return t4.inclusive ? s <= 0 : s < 0;
    }(t3.startAt, un(t3), e2))
      return false;
    if (t3.endAt && !function(t4, e3, n2) {
      const s = Ye(t4, e3, n2);
      return t4.inclusive ? s >= 0 : s > 0;
    }(t3.endAt, un(t3), e2))
      return false;
    return true;
  }(t2, e);
}
function _n(t2) {
  return t2.collectionGroup || (t2.path.length % 2 == 1 ? t2.path.lastSegment() : t2.path.get(t2.path.length - 2));
}
function wn(t2) {
  return (e, n2) => {
    let s = false;
    for (const i of un(t2)) {
      const t3 = mn(i, e, n2);
      if (0 !== t3)
        return t3;
      s = s || i.field.isKeyField();
    }
    return 0;
  };
}
function mn(t2, e, n2) {
  const s = t2.field.isKeyField() ? ct.comparator(e.key, n2.key) : function(t3, e2, n3) {
    const s2 = e2.data.field(t3), i = n3.data.field(t3);
    return null !== s2 && null !== i ? le(s2, i) : O();
  }(t2.field, e, n2);
  switch (t2.dir) {
    case "asc":
      return s;
    case "desc":
      return -1 * s;
    default:
      return O();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gn(t2, e) {
  if (t2.gt) {
    if (isNaN(e))
      return {
        doubleValue: "NaN"
      };
    if (e === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (e === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: ie(e) ? "-0" : e
  };
}
function yn(t2) {
  return {
    integerValue: "" + t2
  };
}
function pn(t2, e) {
  return re(e) ? yn(e) : gn(t2, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In {
  constructor() {
    this._ = void 0;
  }
}
function Tn(t2, e, n2) {
  return t2 instanceof Rn ? function(t3, e2) {
    const n3 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t3.seconds,
            nanos: t3.nanoseconds
          }
        }
      }
    };
    return e2 && (n3.fields.__previous_value__ = e2), {
      mapValue: n3
    };
  }(n2, e) : t2 instanceof bn ? Pn(t2, e) : t2 instanceof vn ? Vn(t2, e) : function(t3, e2) {
    const n3 = An(t3, e2), s = Dn(n3) + Dn(t3.yt);
    return me(n3) && me(t3.yt) ? yn(s) : gn(t3.It, s);
  }(t2, e);
}
function En(t2, e, n2) {
  return t2 instanceof bn ? Pn(t2, e) : t2 instanceof vn ? Vn(t2, e) : n2;
}
function An(t2, e) {
  return t2 instanceof Sn ? me(n2 = e) || function(t3) {
    return !!t3 && "doubleValue" in t3;
  }(n2) ? e : {
    integerValue: 0
  } : null;
  var n2;
}
class Rn extends In {
}
class bn extends In {
  constructor(t2) {
    super(), this.elements = t2;
  }
}
function Pn(t2, e) {
  const n2 = Cn(e);
  for (const e2 of t2.elements)
    n2.some((t3) => ae(t3, e2)) || n2.push(e2);
  return {
    arrayValue: {
      values: n2
    }
  };
}
class vn extends In {
  constructor(t2) {
    super(), this.elements = t2;
  }
}
function Vn(t2, e) {
  let n2 = Cn(e);
  for (const e2 of t2.elements)
    n2 = n2.filter((t3) => !ae(t3, e2));
  return {
    arrayValue: {
      values: n2
    }
  };
}
class Sn extends In {
  constructor(t2, e) {
    super(), this.It = t2, this.yt = e;
  }
}
function Dn(t2) {
  return Jt(t2.integerValue || t2.doubleValue);
}
function Cn(t2) {
  return ge(t2) && t2.arrayValue.values ? t2.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn {
  constructor(t2, e) {
    this.field = t2, this.transform = e;
  }
}
function Nn(t2, e) {
  return t2.field.isEqual(e.field) && function(t3, e2) {
    return t3 instanceof bn && e2 instanceof bn || t3 instanceof vn && e2 instanceof vn ? tt(t3.elements, e2.elements, ae) : t3 instanceof Sn && e2 instanceof Sn ? ae(t3.yt, e2.yt) : t3 instanceof Rn && e2 instanceof Rn;
  }(t2.transform, e.transform);
}
class kn {
  constructor(t2, e) {
    this.version = t2, this.transformResults = e;
  }
}
class On {
  constructor(t2, e) {
    this.updateTime = t2, this.exists = e;
  }
  static none() {
    return new On();
  }
  static exists(t2) {
    return new On(void 0, t2);
  }
  static updateTime(t2) {
    return new On(t2);
  }
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(t2) {
    return this.exists === t2.exists && (this.updateTime ? !!t2.updateTime && this.updateTime.isEqual(t2.updateTime) : !t2.updateTime);
  }
}
function Mn(t2, e) {
  return void 0 !== t2.updateTime ? e.isFoundDocument() && e.version.isEqual(t2.updateTime) : void 0 === t2.exists || t2.exists === e.isFoundDocument();
}
class Fn {
}
function $n(t2, e) {
  if (!t2.hasLocalMutations || e && 0 === e.fields.length)
    return null;
  if (null === e)
    return t2.isNoDocument() ? new zn(t2.key, On.none()) : new Kn(t2.key, t2.data, On.none());
  {
    const n2 = t2.data, s = ve.empty();
    let i = new qt(ut.comparator);
    for (let t3 of e.fields)
      if (!i.has(t3)) {
        let e2 = n2.field(t3);
        null === e2 && t3.length > 1 && (t3 = t3.popLast(), e2 = n2.field(t3)), null === e2 ? s.delete(t3) : s.set(t3, e2), i = i.add(t3);
      }
    return new Gn(t2.key, s, new Qt(i.toArray()), On.none());
  }
}
function Bn(t2, e, n2) {
  t2 instanceof Kn ? function(t3, e2, n3) {
    const s = t3.value.clone(), i = jn(t3.fieldTransforms, e2, n3.transformResults);
    s.setAll(i), e2.convertToFoundDocument(n3.version, s).setHasCommittedMutations();
  }(t2, e, n2) : t2 instanceof Gn ? function(t3, e2, n3) {
    if (!Mn(t3.precondition, e2))
      return void e2.convertToUnknownDocument(n3.version);
    const s = jn(t3.fieldTransforms, e2, n3.transformResults), i = e2.data;
    i.setAll(Qn(t3)), i.setAll(s), e2.convertToFoundDocument(n3.version, i).setHasCommittedMutations();
  }(t2, e, n2) : function(t3, e2, n3) {
    e2.convertToNoDocument(n3.version).setHasCommittedMutations();
  }(0, e, n2);
}
function Ln(t2, e, n2, s) {
  return t2 instanceof Kn ? function(t3, e2, n3, s2) {
    if (!Mn(t3.precondition, e2))
      return n3;
    const i = t3.value.clone(), r2 = Wn(t3.fieldTransforms, s2, e2);
    return i.setAll(r2), e2.convertToFoundDocument(e2.version, i).setHasLocalMutations(), null;
  }(t2, e, n2, s) : t2 instanceof Gn ? function(t3, e2, n3, s2) {
    if (!Mn(t3.precondition, e2))
      return n3;
    const i = Wn(t3.fieldTransforms, s2, e2), r2 = e2.data;
    if (r2.setAll(Qn(t3)), r2.setAll(i), e2.convertToFoundDocument(e2.version, r2).setHasLocalMutations(), null === n3)
      return null;
    return n3.unionWith(t3.fieldMask.fields).unionWith(t3.fieldTransforms.map((t4) => t4.field));
  }(t2, e, n2, s) : function(t3, e2, n3) {
    if (Mn(t3.precondition, e2))
      return e2.convertToNoDocument(e2.version).setHasLocalMutations(), null;
    return n3;
  }(t2, e, n2);
}
function Un(t2, e) {
  let n2 = null;
  for (const s of t2.fieldTransforms) {
    const t3 = e.data.field(s.field), i = An(s.transform, t3 || null);
    null != i && (null === n2 && (n2 = ve.empty()), n2.set(s.field, i));
  }
  return n2 || null;
}
function qn(t2, e) {
  return t2.type === e.type && (!!t2.key.isEqual(e.key) && (!!t2.precondition.isEqual(e.precondition) && (!!function(t3, e2) {
    return void 0 === t3 && void 0 === e2 || !(!t3 || !e2) && tt(t3, e2, (t4, e3) => Nn(t4, e3));
  }(t2.fieldTransforms, e.fieldTransforms) && (0 === t2.type ? t2.value.isEqual(e.value) : 1 !== t2.type || t2.data.isEqual(e.data) && t2.fieldMask.isEqual(e.fieldMask)))));
}
class Kn extends Fn {
  constructor(t2, e, n2, s = []) {
    super(), this.key = t2, this.value = e, this.precondition = n2, this.fieldTransforms = s, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
}
class Gn extends Fn {
  constructor(t2, e, n2, s, i = []) {
    super(), this.key = t2, this.data = e, this.fieldMask = n2, this.precondition = s, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function Qn(t2) {
  const e = /* @__PURE__ */ new Map();
  return t2.fieldMask.fields.forEach((n2) => {
    if (!n2.isEmpty()) {
      const s = t2.data.field(n2);
      e.set(n2, s);
    }
  }), e;
}
function jn(t2, e, n2) {
  const s = /* @__PURE__ */ new Map();
  M(t2.length === n2.length);
  for (let i = 0; i < n2.length; i++) {
    const r2 = t2[i], o = r2.transform, u2 = e.data.field(r2.field);
    s.set(r2.field, En(o, u2, n2[i]));
  }
  return s;
}
function Wn(t2, e, n2) {
  const s = /* @__PURE__ */ new Map();
  for (const i of t2) {
    const t3 = i.transform, r2 = n2.data.field(i.field);
    s.set(i.field, Tn(t3, r2, e));
  }
  return s;
}
class zn extends Fn {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
class Hn extends Fn {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn {
  constructor(t2) {
    this.count = t2;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yn, Xn;
function Zn(t2) {
  switch (t2) {
    default:
      return O();
    case B.CANCELLED:
    case B.UNKNOWN:
    case B.DEADLINE_EXCEEDED:
    case B.RESOURCE_EXHAUSTED:
    case B.INTERNAL:
    case B.UNAVAILABLE:
    case B.UNAUTHENTICATED:
      return false;
    case B.INVALID_ARGUMENT:
    case B.NOT_FOUND:
    case B.ALREADY_EXISTS:
    case B.PERMISSION_DENIED:
    case B.FAILED_PRECONDITION:
    case B.ABORTED:
    case B.OUT_OF_RANGE:
    case B.UNIMPLEMENTED:
    case B.DATA_LOSS:
      return true;
  }
}
function ts(t2) {
  if (void 0 === t2)
    return x("GRPC error has no .code"), B.UNKNOWN;
  switch (t2) {
    case Yn.OK:
      return B.OK;
    case Yn.CANCELLED:
      return B.CANCELLED;
    case Yn.UNKNOWN:
      return B.UNKNOWN;
    case Yn.DEADLINE_EXCEEDED:
      return B.DEADLINE_EXCEEDED;
    case Yn.RESOURCE_EXHAUSTED:
      return B.RESOURCE_EXHAUSTED;
    case Yn.INTERNAL:
      return B.INTERNAL;
    case Yn.UNAVAILABLE:
      return B.UNAVAILABLE;
    case Yn.UNAUTHENTICATED:
      return B.UNAUTHENTICATED;
    case Yn.INVALID_ARGUMENT:
      return B.INVALID_ARGUMENT;
    case Yn.NOT_FOUND:
      return B.NOT_FOUND;
    case Yn.ALREADY_EXISTS:
      return B.ALREADY_EXISTS;
    case Yn.PERMISSION_DENIED:
      return B.PERMISSION_DENIED;
    case Yn.FAILED_PRECONDITION:
      return B.FAILED_PRECONDITION;
    case Yn.ABORTED:
      return B.ABORTED;
    case Yn.OUT_OF_RANGE:
      return B.OUT_OF_RANGE;
    case Yn.UNIMPLEMENTED:
      return B.UNIMPLEMENTED;
    case Yn.DATA_LOSS:
      return B.DATA_LOSS;
    default:
      return O();
  }
}
(Xn = Yn || (Yn = {}))[Xn.OK = 0] = "OK", Xn[Xn.CANCELLED = 1] = "CANCELLED", Xn[Xn.UNKNOWN = 2] = "UNKNOWN", Xn[Xn.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Xn[Xn.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Xn[Xn.NOT_FOUND = 5] = "NOT_FOUND", Xn[Xn.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Xn[Xn.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Xn[Xn.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Xn[Xn.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Xn[Xn.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Xn[Xn.ABORTED = 10] = "ABORTED", Xn[Xn.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Xn[Xn.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Xn[Xn.INTERNAL = 13] = "INTERNAL", Xn[Xn.UNAVAILABLE = 14] = "UNAVAILABLE", Xn[Xn.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es {
  constructor(t2, e) {
    this.mapKeyFn = t2, this.equalsFn = e, this.inner = {}, this.innerSize = 0;
  }
  get(t2) {
    const e = this.mapKeyFn(t2), n2 = this.inner[e];
    if (void 0 !== n2) {
      for (const [e2, s] of n2)
        if (this.equalsFn(e2, t2))
          return s;
    }
  }
  has(t2) {
    return void 0 !== this.get(t2);
  }
  set(t2, e) {
    const n2 = this.mapKeyFn(t2), s = this.inner[n2];
    if (void 0 === s)
      return this.inner[n2] = [[t2, e]], void this.innerSize++;
    for (let n3 = 0; n3 < s.length; n3++)
      if (this.equalsFn(s[n3][0], t2))
        return void (s[n3] = [t2, e]);
    s.push([t2, e]), this.innerSize++;
  }
  delete(t2) {
    const e = this.mapKeyFn(t2), n2 = this.inner[e];
    if (void 0 === n2)
      return false;
    for (let s = 0; s < n2.length; s++)
      if (this.equalsFn(n2[s][0], t2))
        return 1 === n2.length ? delete this.inner[e] : n2.splice(s, 1), this.innerSize--, true;
    return false;
  }
  forEach(t2) {
    Ft(this.inner, (e, n2) => {
      for (const [e2, s] of n2)
        t2(e2, s);
    });
  }
  isEmpty() {
    return $t(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ns = new Bt(ct.comparator);
function ss() {
  return ns;
}
const is = new Bt(ct.comparator);
function rs(...t2) {
  let e = is;
  for (const n2 of t2)
    e = e.insert(n2.key, n2);
  return e;
}
function os(t2) {
  let e = is;
  return t2.forEach((t3, n2) => e = e.insert(t3, n2.overlayedDocument)), e;
}
function us() {
  return as();
}
function cs() {
  return as();
}
function as() {
  return new es((t2) => t2.toString(), (t2, e) => t2.isEqual(e));
}
const hs = new Bt(ct.comparator);
const ls = new qt(ct.comparator);
function fs(...t2) {
  let e = ls;
  for (const n2 of t2)
    e = e.add(n2);
  return e;
}
const ds = new qt(Z);
function _s() {
  return ds;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws {
  constructor(t2, e, n2, s, i) {
    this.snapshotVersion = t2, this.targetChanges = e, this.targetMismatches = n2, this.documentUpdates = s, this.resolvedLimboDocuments = i;
  }
  static createSynthesizedRemoteEventForCurrentChange(t2, e, n2) {
    const s = /* @__PURE__ */ new Map();
    return s.set(t2, ms.createSynthesizedTargetChangeForCurrentChange(t2, e, n2)), new ws(st.min(), s, _s(), ss(), fs());
  }
}
class ms {
  constructor(t2, e, n2, s, i) {
    this.resumeToken = t2, this.current = e, this.addedDocuments = n2, this.modifiedDocuments = s, this.removedDocuments = i;
  }
  static createSynthesizedTargetChangeForCurrentChange(t2, e, n2) {
    return new ms(n2, e, fs(), fs(), fs());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs {
  constructor(t2, e, n2, s) {
    this.Tt = t2, this.removedTargetIds = e, this.key = n2, this.Et = s;
  }
}
class ys {
  constructor(t2, e) {
    this.targetId = t2, this.At = e;
  }
}
class ps {
  constructor(t2, e, n2 = Wt.EMPTY_BYTE_STRING, s = null) {
    this.state = t2, this.targetIds = e, this.resumeToken = n2, this.cause = s;
  }
}
class Is {
  constructor() {
    this.Rt = 0, this.bt = As(), this.Pt = Wt.EMPTY_BYTE_STRING, this.vt = false, this.Vt = true;
  }
  get current() {
    return this.vt;
  }
  get resumeToken() {
    return this.Pt;
  }
  get St() {
    return 0 !== this.Rt;
  }
  get Dt() {
    return this.Vt;
  }
  Ct(t2) {
    t2.approximateByteSize() > 0 && (this.Vt = true, this.Pt = t2);
  }
  xt() {
    let t2 = fs(), e = fs(), n2 = fs();
    return this.bt.forEach((s, i) => {
      switch (i) {
        case 0:
          t2 = t2.add(s);
          break;
        case 2:
          e = e.add(s);
          break;
        case 1:
          n2 = n2.add(s);
          break;
        default:
          O();
      }
    }), new ms(this.Pt, this.vt, t2, e, n2);
  }
  Nt() {
    this.Vt = false, this.bt = As();
  }
  kt(t2, e) {
    this.Vt = true, this.bt = this.bt.insert(t2, e);
  }
  Ot(t2) {
    this.Vt = true, this.bt = this.bt.remove(t2);
  }
  Mt() {
    this.Rt += 1;
  }
  Ft() {
    this.Rt -= 1;
  }
  $t() {
    this.Vt = true, this.vt = true;
  }
}
class Ts {
  constructor(t2) {
    this.Bt = t2, this.Lt = /* @__PURE__ */ new Map(), this.Ut = ss(), this.qt = Es(), this.Kt = new qt(Z);
  }
  Gt(t2) {
    for (const e of t2.Tt)
      t2.Et && t2.Et.isFoundDocument() ? this.Qt(e, t2.Et) : this.jt(e, t2.key, t2.Et);
    for (const e of t2.removedTargetIds)
      this.jt(e, t2.key, t2.Et);
  }
  Wt(t2) {
    this.forEachTarget(t2, (e) => {
      const n2 = this.zt(e);
      switch (t2.state) {
        case 0:
          this.Ht(e) && n2.Ct(t2.resumeToken);
          break;
        case 1:
          n2.Ft(), n2.St || n2.Nt(), n2.Ct(t2.resumeToken);
          break;
        case 2:
          n2.Ft(), n2.St || this.removeTarget(e);
          break;
        case 3:
          this.Ht(e) && (n2.$t(), n2.Ct(t2.resumeToken));
          break;
        case 4:
          this.Ht(e) && (this.Jt(e), n2.Ct(t2.resumeToken));
          break;
        default:
          O();
      }
    });
  }
  forEachTarget(t2, e) {
    t2.targetIds.length > 0 ? t2.targetIds.forEach(e) : this.Lt.forEach((t3, n2) => {
      this.Ht(n2) && e(n2);
    });
  }
  Yt(t2) {
    const e = t2.targetId, n2 = t2.At.count, s = this.Xt(e);
    if (s) {
      const t3 = s.target;
      if (Oe(t3))
        if (0 === n2) {
          const n3 = new ct(t3.path);
          this.jt(e, n3, Se.newNoDocument(n3, st.min()));
        } else
          M(1 === n2);
      else {
        this.Zt(e) !== n2 && (this.Jt(e), this.Kt = this.Kt.add(e));
      }
    }
  }
  te(t2) {
    const e = /* @__PURE__ */ new Map();
    this.Lt.forEach((n3, s2) => {
      const i = this.Xt(s2);
      if (i) {
        if (n3.current && Oe(i.target)) {
          const e2 = new ct(i.target.path);
          null !== this.Ut.get(e2) || this.ee(s2, e2) || this.jt(s2, e2, Se.newNoDocument(e2, t2));
        }
        n3.Dt && (e.set(s2, n3.xt()), n3.Nt());
      }
    });
    let n2 = fs();
    this.qt.forEach((t3, e2) => {
      let s2 = true;
      e2.forEachWhile((t4) => {
        const e3 = this.Xt(t4);
        return !e3 || 2 === e3.purpose || (s2 = false, false);
      }), s2 && (n2 = n2.add(t3));
    }), this.Ut.forEach((e2, n3) => n3.setReadTime(t2));
    const s = new ws(t2, e, this.Kt, this.Ut, n2);
    return this.Ut = ss(), this.qt = Es(), this.Kt = new qt(Z), s;
  }
  Qt(t2, e) {
    if (!this.Ht(t2))
      return;
    const n2 = this.ee(t2, e.key) ? 2 : 0;
    this.zt(t2).kt(e.key, n2), this.Ut = this.Ut.insert(e.key, e), this.qt = this.qt.insert(e.key, this.ne(e.key).add(t2));
  }
  jt(t2, e, n2) {
    if (!this.Ht(t2))
      return;
    const s = this.zt(t2);
    this.ee(t2, e) ? s.kt(e, 1) : s.Ot(e), this.qt = this.qt.insert(e, this.ne(e).delete(t2)), n2 && (this.Ut = this.Ut.insert(e, n2));
  }
  removeTarget(t2) {
    this.Lt.delete(t2);
  }
  Zt(t2) {
    const e = this.zt(t2).xt();
    return this.Bt.getRemoteKeysForTarget(t2).size + e.addedDocuments.size - e.removedDocuments.size;
  }
  Mt(t2) {
    this.zt(t2).Mt();
  }
  zt(t2) {
    let e = this.Lt.get(t2);
    return e || (e = new Is(), this.Lt.set(t2, e)), e;
  }
  ne(t2) {
    let e = this.qt.get(t2);
    return e || (e = new qt(Z), this.qt = this.qt.insert(t2, e)), e;
  }
  Ht(t2) {
    const e = null !== this.Xt(t2);
    return e || C("WatchChangeAggregator", "Detected inactive target", t2), e;
  }
  Xt(t2) {
    const e = this.Lt.get(t2);
    return e && e.St ? null : this.Bt.se(t2);
  }
  Jt(t2) {
    this.Lt.set(t2, new Is());
    this.Bt.getRemoteKeysForTarget(t2).forEach((e) => {
      this.jt(t2, e, null);
    });
  }
  ee(t2, e) {
    return this.Bt.getRemoteKeysForTarget(t2).has(e);
  }
}
function Es() {
  return new Bt(ct.comparator);
}
function As() {
  return new Bt(ct.comparator);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rs = (() => {
  const t2 = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return t2;
})(), bs = (() => {
  const t2 = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return t2;
})();
class Ps {
  constructor(t2, e) {
    this.databaseId = t2, this.gt = e;
  }
}
function vs(t2, e) {
  if (t2.gt) {
    return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Vs(t2, e) {
  return t2.gt ? e.toBase64() : e.toUint8Array();
}
function Ss(t2, e) {
  return vs(t2, e.toTimestamp());
}
function Ds(t2) {
  return M(!!t2), st.fromTimestamp(function(t3) {
    const e = Ht(t3);
    return new nt(e.seconds, e.nanos);
  }(t2));
}
function Cs(t2, e) {
  return function(t3) {
    return new rt(["projects", t3.projectId, "databases", t3.database]);
  }(t2).child("documents").child(e).canonicalString();
}
function xs(t2) {
  const e = rt.fromString(t2);
  return M(ii(e)), e;
}
function Ns(t2, e) {
  return Cs(t2.databaseId, e.path);
}
function ks(t2, e) {
  const n2 = xs(e);
  if (n2.get(1) !== t2.databaseId.projectId)
    throw new L(B.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n2.get(1) + " vs " + t2.databaseId.projectId);
  if (n2.get(3) !== t2.databaseId.database)
    throw new L(B.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n2.get(3) + " vs " + t2.databaseId.database);
  return new ct($s(n2));
}
function Os(t2, e) {
  return Cs(t2.databaseId, e);
}
function Ms(t2) {
  const e = xs(t2);
  return 4 === e.length ? rt.emptyPath() : $s(e);
}
function Fs(t2) {
  return new rt(["projects", t2.databaseId.projectId, "databases", t2.databaseId.database]).canonicalString();
}
function $s(t2) {
  return M(t2.length > 4 && "documents" === t2.get(4)), t2.popFirst(5);
}
function Bs(t2, e, n2) {
  return {
    name: Ns(t2, e),
    fields: n2.value.mapValue.fields
  };
}
function Ls(t2, e, n2) {
  const s = ks(t2, e.name), i = Ds(e.updateTime), r2 = new ve({
    mapValue: {
      fields: e.fields
    }
  }), o = Se.newFoundDocument(s, i, r2);
  return n2 && o.setHasCommittedMutations(), n2 ? o.setHasCommittedMutations() : o;
}
function Us(t2, e) {
  return "found" in e ? function(t3, e2) {
    M(!!e2.found), e2.found.name, e2.found.updateTime;
    const n2 = ks(t3, e2.found.name), s = Ds(e2.found.updateTime), i = new ve({
      mapValue: {
        fields: e2.found.fields
      }
    });
    return Se.newFoundDocument(n2, s, i);
  }(t2, e) : "missing" in e ? function(t3, e2) {
    M(!!e2.missing), M(!!e2.readTime);
    const n2 = ks(t3, e2.missing), s = Ds(e2.readTime);
    return Se.newNoDocument(n2, s);
  }(t2, e) : O();
}
function qs(t2, e) {
  let n2;
  if ("targetChange" in e) {
    e.targetChange;
    const s = function(t3) {
      return "NO_CHANGE" === t3 ? 0 : "ADD" === t3 ? 1 : "REMOVE" === t3 ? 2 : "CURRENT" === t3 ? 3 : "RESET" === t3 ? 4 : O();
    }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r2 = function(t3, e2) {
      return t3.gt ? (M(void 0 === e2 || "string" == typeof e2), Wt.fromBase64String(e2 || "")) : (M(void 0 === e2 || e2 instanceof Uint8Array), Wt.fromUint8Array(e2 || new Uint8Array()));
    }(t2, e.targetChange.resumeToken), o = e.targetChange.cause, u2 = o && function(t3) {
      const e2 = void 0 === t3.code ? B.UNKNOWN : ts(t3.code);
      return new L(e2, t3.message || "");
    }(o);
    n2 = new ps(s, i, r2, u2 || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const s = e.documentChange;
    s.document, s.document.name, s.document.updateTime;
    const i = ks(t2, s.document.name), r2 = Ds(s.document.updateTime), o = new ve({
      mapValue: {
        fields: s.document.fields
      }
    }), u2 = Se.newFoundDocument(i, r2, o), c = s.targetIds || [], a = s.removedTargetIds || [];
    n2 = new gs(c, a, u2.key, u2);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const s = e.documentDelete;
    s.document;
    const i = ks(t2, s.document), r2 = s.readTime ? Ds(s.readTime) : st.min(), o = Se.newNoDocument(i, r2), u2 = s.removedTargetIds || [];
    n2 = new gs([], u2, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const s = e.documentRemove;
    s.document;
    const i = ks(t2, s.document), r2 = s.removedTargetIds || [];
    n2 = new gs([], r2, i, null);
  } else {
    if (!("filter" in e))
      return O();
    {
      e.filter;
      const t3 = e.filter;
      t3.targetId;
      const s = t3.count || 0, i = new Jn(s), r2 = t3.targetId;
      n2 = new ys(r2, i);
    }
  }
  return n2;
}
function Ks(t2, e) {
  let n2;
  if (e instanceof Kn)
    n2 = {
      update: Bs(t2, e.key, e.value)
    };
  else if (e instanceof zn)
    n2 = {
      delete: Ns(t2, e.key)
    };
  else if (e instanceof Gn)
    n2 = {
      update: Bs(t2, e.key, e.data),
      updateMask: si(e.fieldMask)
    };
  else {
    if (!(e instanceof Hn))
      return O();
    n2 = {
      verify: Ns(t2, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (n2.updateTransforms = e.fieldTransforms.map((t3) => function(t4, e2) {
    const n3 = e2.transform;
    if (n3 instanceof Rn)
      return {
        fieldPath: e2.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
    if (n3 instanceof bn)
      return {
        fieldPath: e2.field.canonicalString(),
        appendMissingElements: {
          values: n3.elements
        }
      };
    if (n3 instanceof vn)
      return {
        fieldPath: e2.field.canonicalString(),
        removeAllFromArray: {
          values: n3.elements
        }
      };
    if (n3 instanceof Sn)
      return {
        fieldPath: e2.field.canonicalString(),
        increment: n3.yt
      };
    throw O();
  }(0, t3))), e.precondition.isNone || (n2.currentDocument = function(t3, e2) {
    return void 0 !== e2.updateTime ? {
      updateTime: Ss(t3, e2.updateTime)
    } : void 0 !== e2.exists ? {
      exists: e2.exists
    } : O();
  }(t2, e.precondition)), n2;
}
function Gs(t2, e) {
  const n2 = e.currentDocument ? function(t3) {
    return void 0 !== t3.updateTime ? On.updateTime(Ds(t3.updateTime)) : void 0 !== t3.exists ? On.exists(t3.exists) : On.none();
  }(e.currentDocument) : On.none(), s = e.updateTransforms ? e.updateTransforms.map((e2) => function(t3, e3) {
    let n3 = null;
    if ("setToServerValue" in e3)
      M("REQUEST_TIME" === e3.setToServerValue), n3 = new Rn();
    else if ("appendMissingElements" in e3) {
      const t4 = e3.appendMissingElements.values || [];
      n3 = new bn(t4);
    } else if ("removeAllFromArray" in e3) {
      const t4 = e3.removeAllFromArray.values || [];
      n3 = new vn(t4);
    } else
      "increment" in e3 ? n3 = new Sn(t3, e3.increment) : O();
    const s2 = ut.fromServerFormat(e3.fieldPath);
    return new xn(s2, n3);
  }(t2, e2)) : [];
  if (e.update) {
    e.update.name;
    const i = ks(t2, e.update.name), r2 = new ve({
      mapValue: {
        fields: e.update.fields
      }
    });
    if (e.updateMask) {
      const t3 = function(t4) {
        const e2 = t4.fieldPaths || [];
        return new Qt(e2.map((t5) => ut.fromServerFormat(t5)));
      }(e.updateMask);
      return new Gn(i, r2, t3, n2, s);
    }
    return new Kn(i, r2, n2, s);
  }
  if (e.delete) {
    const s2 = ks(t2, e.delete);
    return new zn(s2, n2);
  }
  if (e.verify) {
    const s2 = ks(t2, e.verify);
    return new Hn(s2, n2);
  }
  return O();
}
function Qs(t2, e) {
  return t2 && t2.length > 0 ? (M(void 0 !== e), t2.map((t3) => function(t4, e2) {
    let n2 = t4.updateTime ? Ds(t4.updateTime) : Ds(e2);
    return n2.isEqual(st.min()) && (n2 = Ds(e2)), new kn(n2, t4.transformResults || []);
  }(t3, e))) : [];
}
function js(t2, e) {
  return {
    documents: [Os(t2, e.path)]
  };
}
function Ws(t2, e) {
  const n2 = {
    structuredQuery: {}
  }, s = e.path;
  null !== e.collectionGroup ? (n2.parent = Os(t2, s), n2.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n2.parent = Os(t2, s.popLast()), n2.structuredQuery.from = [{
    collectionId: s.lastSegment()
  }]);
  const i = function(t3) {
    if (0 === t3.length)
      return;
    const e2 = t3.map((t4) => function(t5) {
      if ("==" === t5.op) {
        if (pe(t5.value))
          return {
            unaryFilter: {
              field: Zs(t5.field),
              op: "IS_NAN"
            }
          };
        if (ye(t5.value))
          return {
            unaryFilter: {
              field: Zs(t5.field),
              op: "IS_NULL"
            }
          };
      } else if ("!=" === t5.op) {
        if (pe(t5.value))
          return {
            unaryFilter: {
              field: Zs(t5.field),
              op: "IS_NOT_NAN"
            }
          };
        if (ye(t5.value))
          return {
            unaryFilter: {
              field: Zs(t5.field),
              op: "IS_NOT_NULL"
            }
          };
      }
      return {
        fieldFilter: {
          field: Zs(t5.field),
          op: Xs(t5.op),
          value: t5.value
        }
      };
    }(t4));
    if (1 === e2.length)
      return e2[0];
    return {
      compositeFilter: {
        op: "AND",
        filters: e2
      }
    };
  }(e.filters);
  i && (n2.structuredQuery.where = i);
  const r2 = function(t3) {
    if (0 === t3.length)
      return;
    return t3.map((t4) => function(t5) {
      return {
        field: Zs(t5.field),
        direction: Ys(t5.dir)
      };
    }(t4));
  }(e.orderBy);
  r2 && (n2.structuredQuery.orderBy = r2);
  const o = function(t3, e2) {
    return t3.gt || se(e2) ? e2 : {
      value: e2
    };
  }(t2, e.limit);
  var u2;
  return null !== o && (n2.structuredQuery.limit = o), e.startAt && (n2.structuredQuery.startAt = {
    before: (u2 = e.startAt).inclusive,
    values: u2.position
  }), e.endAt && (n2.structuredQuery.endAt = function(t3) {
    return {
      before: !t3.inclusive,
      values: t3.position
    };
  }(e.endAt)), n2;
}
function zs(t2) {
  let e = Ms(t2.parent);
  const n2 = t2.structuredQuery, s = n2.from ? n2.from.length : 0;
  let i = null;
  if (s > 0) {
    M(1 === s);
    const t3 = n2.from[0];
    t3.allDescendants ? i = t3.collectionId : e = e.child(t3.collectionId);
  }
  let r2 = [];
  n2.where && (r2 = Js(n2.where));
  let o = [];
  n2.orderBy && (o = n2.orderBy.map((t3) => function(t4) {
    return new He(
      ti(t4.field),
      function(t5) {
        switch (t5) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t4.direction)
    );
  }(t3)));
  let u2 = null;
  n2.limit && (u2 = function(t3) {
    let e2;
    return e2 = "object" == typeof t3 ? t3.value : t3, se(e2) ? null : e2;
  }(n2.limit));
  let c = null;
  n2.startAt && (c = function(t3) {
    const e2 = !!t3.before, n3 = t3.values || [];
    return new ze(n3, e2);
  }(n2.startAt));
  let a = null;
  return n2.endAt && (a = function(t3) {
    const e2 = !t3.before, n3 = t3.values || [];
    return new ze(n3, e2);
  }(n2.endAt)), tn(e, i, o, r2, u2, "F", c, a);
}
function Hs(t2, e) {
  const n2 = function(t3, e2) {
    switch (e2) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return O();
    }
  }(0, e.purpose);
  return null == n2 ? null : {
    "goog-listen-tags": n2
  };
}
function Js(t2) {
  return t2 ? void 0 !== t2.unaryFilter ? [ni(t2)] : void 0 !== t2.fieldFilter ? [ei(t2)] : void 0 !== t2.compositeFilter ? t2.compositeFilter.filters.map((t3) => Js(t3)).reduce((t3, e) => t3.concat(e)) : O() : [];
}
function Ys(t2) {
  return Rs[t2];
}
function Xs(t2) {
  return bs[t2];
}
function Zs(t2) {
  return {
    fieldPath: t2.canonicalString()
  };
}
function ti(t2) {
  return ut.fromServerFormat(t2.fieldPath);
}
function ei(t2) {
  return Be.create(ti(t2.fieldFilter.field), function(t3) {
    switch (t3) {
      case "EQUAL":
        return "==";
      case "NOT_EQUAL":
        return "!=";
      case "GREATER_THAN":
        return ">";
      case "GREATER_THAN_OR_EQUAL":
        return ">=";
      case "LESS_THAN":
        return "<";
      case "LESS_THAN_OR_EQUAL":
        return "<=";
      case "ARRAY_CONTAINS":
        return "array-contains";
      case "IN":
        return "in";
      case "NOT_IN":
        return "not-in";
      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any";
      default:
        return O();
    }
  }(t2.fieldFilter.op), t2.fieldFilter.value);
}
function ni(t2) {
  switch (t2.unaryFilter.op) {
    case "IS_NAN":
      const e = ti(t2.unaryFilter.field);
      return Be.create(e, "==", {
        doubleValue: NaN
      });
    case "IS_NULL":
      const n2 = ti(t2.unaryFilter.field);
      return Be.create(n2, "==", {
        nullValue: "NULL_VALUE"
      });
    case "IS_NOT_NAN":
      const s = ti(t2.unaryFilter.field);
      return Be.create(s, "!=", {
        doubleValue: NaN
      });
    case "IS_NOT_NULL":
      const i = ti(t2.unaryFilter.field);
      return Be.create(i, "!=", {
        nullValue: "NULL_VALUE"
      });
    default:
      return O();
  }
}
function si(t2) {
  const e = [];
  return t2.fields.forEach((t3) => e.push(t3.canonicalString())), {
    fieldPaths: e
  };
}
function ii(t2) {
  return t2.length >= 4 && "projects" === t2.get(0) && "databases" === t2.get(2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ri(t2) {
  let e = "";
  for (let n2 = 0; n2 < t2.length; n2++)
    e.length > 0 && (e = ui(e)), e = oi(t2.get(n2), e);
  return ui(e);
}
function oi(t2, e) {
  let n2 = e;
  const s = t2.length;
  for (let e2 = 0; e2 < s; e2++) {
    const s2 = t2.charAt(e2);
    switch (s2) {
      case "\0":
        n2 += "";
        break;
      case "":
        n2 += "";
        break;
      default:
        n2 += s2;
    }
  }
  return n2;
}
function ui(t2) {
  return t2 + "";
}
function ci(t2) {
  const e = t2.length;
  if (M(e >= 2), 2 === e)
    return M("" === t2.charAt(0) && "" === t2.charAt(1)), rt.emptyPath();
  const n2 = e - 2, s = [];
  let i = "";
  for (let r2 = 0; r2 < e; ) {
    const e2 = t2.indexOf("", r2);
    (e2 < 0 || e2 > n2) && O();
    switch (t2.charAt(e2 + 1)) {
      case "":
        const n3 = t2.substring(r2, e2);
        let o;
        0 === i.length ? o = n3 : (i += n3, o = i, i = ""), s.push(o);
        break;
      case "":
        i += t2.substring(r2, e2), i += "\0";
        break;
      case "":
        i += t2.substring(r2, e2 + 1);
        break;
      default:
        O();
    }
    r2 = e2 + 2;
  }
  return new rt(s);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ai = ["userId", "batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hi(t2, e) {
  return [t2, ri(e)];
}
function li(t2, e, n2) {
  return [t2, ri(e), n2];
}
const fi = {}, di = ["prefixPath", "collectionGroup", "readTime", "documentId"], _i = ["prefixPath", "collectionGroup", "documentId"], wi = ["collectionGroup", "readTime", "prefixPath", "documentId"], mi = ["canonicalId", "targetId"], gi = ["targetId", "path"], yi = ["path", "targetId"], pi = ["collectionId", "parent"], Ii = ["indexId", "uid"], Ti = ["uid", "sequenceNumber"], Ei = ["indexId", "uid", "arrayValue", "directionalValue", "orderedDocumentKey", "documentKey"], Ai = ["indexId", "uid", "orderedDocumentKey"], Ri = ["userId", "collectionPath", "documentId"], bi = ["userId", "collectionPath", "largestBatchId"], Pi = ["userId", "collectionGroup", "largestBatchId"], vi = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"], Vi = [...vi, "documentOverlays"], Si = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"], Di = Si, Ci = [...Di, "indexConfiguration", "indexState", "indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi extends Tt {
  constructor(t2, e) {
    super(), this.ie = t2, this.currentSequenceNumber = e;
  }
}
function Ni(t2, e) {
  const n2 = $(t2);
  return bt.M(n2.ie, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki {
  constructor(t2, e, n2, s) {
    this.batchId = t2, this.localWriteTime = e, this.baseMutations = n2, this.mutations = s;
  }
  applyToRemoteDocument(t2, e) {
    const n2 = e.mutationResults;
    for (let e2 = 0; e2 < this.mutations.length; e2++) {
      const s = this.mutations[e2];
      if (s.key.isEqual(t2.key)) {
        Bn(s, t2, n2[e2]);
      }
    }
  }
  applyToLocalView(t2, e) {
    for (const n2 of this.baseMutations)
      n2.key.isEqual(t2.key) && (e = Ln(n2, t2, e, this.localWriteTime));
    for (const n2 of this.mutations)
      n2.key.isEqual(t2.key) && (e = Ln(n2, t2, e, this.localWriteTime));
    return e;
  }
  applyToLocalDocumentSet(t2, e) {
    const n2 = cs();
    return this.mutations.forEach((s) => {
      const i = t2.get(s.key), r2 = i.overlayedDocument;
      let o = this.applyToLocalView(r2, i.mutatedFields);
      o = e.has(s.key) ? null : o;
      const u2 = $n(r2, o);
      null !== u2 && n2.set(s.key, u2), r2.isValidDocument() || r2.convertToNoDocument(st.min());
    }), n2;
  }
  keys() {
    return this.mutations.reduce((t2, e) => t2.add(e.key), fs());
  }
  isEqual(t2) {
    return this.batchId === t2.batchId && tt(this.mutations, t2.mutations, (t3, e) => qn(t3, e)) && tt(this.baseMutations, t2.baseMutations, (t3, e) => qn(t3, e));
  }
}
class Oi {
  constructor(t2, e, n2, s) {
    this.batch = t2, this.commitVersion = e, this.mutationResults = n2, this.docVersions = s;
  }
  static from(t2, e, n2) {
    M(t2.mutations.length === n2.length);
    let s = hs;
    const i = t2.mutations;
    for (let t3 = 0; t3 < i.length; t3++)
      s = s.insert(i[t3].key, n2[t3].version);
    return new Oi(t2, e, n2, s);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi {
  constructor(t2, e) {
    this.largestBatchId = t2, this.mutation = e;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t2) {
    return null !== t2 && this.mutation === t2.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi {
  constructor(t2, e, n2, s, i = st.min(), r2 = st.min(), o = Wt.EMPTY_BYTE_STRING) {
    this.target = t2, this.targetId = e, this.purpose = n2, this.sequenceNumber = s, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = r2, this.resumeToken = o;
  }
  withSequenceNumber(t2) {
    return new Fi(this.target, this.targetId, this.purpose, t2, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  }
  withResumeToken(t2, e) {
    return new Fi(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t2);
  }
  withLastLimboFreeSnapshotVersion(t2) {
    return new Fi(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t2, this.resumeToken);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i {
  constructor(t2) {
    this.re = t2;
  }
}
function Bi(t2, e) {
  let n2;
  if (e.document)
    n2 = Ls(t2.re, e.document, !!e.hasCommittedMutations);
  else if (e.noDocument) {
    const t3 = ct.fromSegments(e.noDocument.path), s = Ki(e.noDocument.readTime);
    n2 = Se.newNoDocument(t3, s), e.hasCommittedMutations && n2.setHasCommittedMutations();
  } else {
    if (!e.unknownDocument)
      return O();
    {
      const t3 = ct.fromSegments(e.unknownDocument.path), s = Ki(e.unknownDocument.version);
      n2 = Se.newUnknownDocument(t3, s);
    }
  }
  return e.readTime && n2.setReadTime(function(t3) {
    const e2 = new nt(t3[0], t3[1]);
    return st.fromTimestamp(e2);
  }(e.readTime)), n2;
}
function Li(t2, e) {
  const n2 = e.key, s = {
    prefixPath: n2.getCollectionPath().popLast().toArray(),
    collectionGroup: n2.collectionGroup,
    documentId: n2.path.lastSegment(),
    readTime: Ui(e.readTime),
    hasCommittedMutations: e.hasCommittedMutations
  };
  if (e.isFoundDocument())
    s.document = function(t3, e2) {
      return {
        name: Ns(t3, e2.key),
        fields: e2.data.value.mapValue.fields,
        updateTime: vs(t3, e2.version.toTimestamp())
      };
    }(t2.re, e);
  else if (e.isNoDocument())
    s.noDocument = {
      path: n2.path.toArray(),
      readTime: qi(e.version)
    };
  else {
    if (!e.isUnknownDocument())
      return O();
    s.unknownDocument = {
      path: n2.path.toArray(),
      version: qi(e.version)
    };
  }
  return s;
}
function Ui(t2) {
  const e = t2.toTimestamp();
  return [e.seconds, e.nanoseconds];
}
function qi(t2) {
  const e = t2.toTimestamp();
  return {
    seconds: e.seconds,
    nanoseconds: e.nanoseconds
  };
}
function Ki(t2) {
  const e = new nt(t2.seconds, t2.nanoseconds);
  return st.fromTimestamp(e);
}
function Gi(t2, e) {
  const n2 = (e.baseMutations || []).map((e2) => Gs(t2.re, e2));
  for (let t3 = 0; t3 < e.mutations.length - 1; ++t3) {
    const n3 = e.mutations[t3];
    if (t3 + 1 < e.mutations.length && void 0 !== e.mutations[t3 + 1].transform) {
      const s2 = e.mutations[t3 + 1];
      n3.updateTransforms = s2.transform.fieldTransforms, e.mutations.splice(t3 + 1, 1), ++t3;
    }
  }
  const s = e.mutations.map((e2) => Gs(t2.re, e2)), i = nt.fromMillis(e.localWriteTimeMs);
  return new ki(e.batchId, i, n2, s);
}
function Qi(t2) {
  const e = Ki(t2.readTime), n2 = void 0 !== t2.lastLimboFreeSnapshotVersion ? Ki(t2.lastLimboFreeSnapshotVersion) : st.min();
  let s;
  var i;
  return void 0 !== t2.query.documents ? (M(1 === (i = t2.query).documents.length), s = cn(en(Ms(i.documents[0])))) : s = function(t3) {
    return cn(zs(t3));
  }(t2.query), new Fi(s, t2.targetId, 0, t2.lastListenSequenceNumber, e, n2, Wt.fromBase64String(t2.resumeToken));
}
function ji(t2, e) {
  const n2 = qi(e.snapshotVersion), s = qi(e.lastLimboFreeSnapshotVersion);
  let i;
  i = Oe(e.target) ? js(t2.re, e.target) : Ws(t2.re, e.target);
  const r2 = e.resumeToken.toBase64();
  return {
    targetId: e.targetId,
    canonicalId: xe(e.target),
    readTime: n2,
    resumeToken: r2,
    lastListenSequenceNumber: e.sequenceNumber,
    lastLimboFreeSnapshotVersion: s,
    query: i
  };
}
function Wi(t2) {
  const e = zs({
    parent: t2.parent,
    structuredQuery: t2.structuredQuery
  });
  return "LAST" === t2.limitType ? an(e, e.limit, "L") : e;
}
function zi(t2, e) {
  return new Mi(e.largestBatchId, Gs(t2.re, e.overlayMutation));
}
function Hi(t2, e) {
  const n2 = e.path.lastSegment();
  return [t2, ri(e.path.popLast()), n2];
}
function Ji(t2, e, n2, s) {
  return {
    indexId: t2,
    uid: e.uid || "",
    sequenceNumber: n2,
    readTime: qi(s.readTime),
    documentKey: ri(s.documentKey.path),
    largestBatchId: s.largestBatchId
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi {
  getBundleMetadata(t2, e) {
    return Xi(t2).get(e).next((t3) => {
      if (t3)
        return {
          id: (e2 = t3).bundleId,
          createTime: Ki(e2.createTime),
          version: e2.version
        };
      var e2;
    });
  }
  saveBundleMetadata(t2, e) {
    return Xi(t2).put({
      bundleId: (n2 = e).id,
      createTime: qi(Ds(n2.createTime)),
      version: n2.version
    });
    var n2;
  }
  getNamedQuery(t2, e) {
    return Zi(t2).get(e).next((t3) => {
      if (t3)
        return {
          name: (e2 = t3).name,
          query: Wi(e2.bundledQuery),
          readTime: Ki(e2.readTime)
        };
      var e2;
    });
  }
  saveNamedQuery(t2, e) {
    return Zi(t2).put(function(t3) {
      return {
        name: t3.name,
        readTime: qi(Ds(t3.readTime)),
        bundledQuery: t3.bundledQuery
      };
    }(e));
  }
}
function Xi(t2) {
  return Ni(t2, "bundles");
}
function Zi(t2) {
  return Ni(t2, "namedQueries");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tr {
  constructor(t2, e) {
    this.It = t2, this.userId = e;
  }
  static oe(t2, e) {
    const n2 = e.uid || "";
    return new tr(t2, n2);
  }
  getOverlay(t2, e) {
    return er(t2).get(Hi(this.userId, e)).next((t3) => t3 ? zi(this.It, t3) : null);
  }
  getOverlays(t2, e) {
    const n2 = us();
    return At.forEach(e, (e2) => this.getOverlay(t2, e2).next((t3) => {
      null !== t3 && n2.set(e2, t3);
    })).next(() => n2);
  }
  saveOverlays(t2, e, n2) {
    const s = [];
    return n2.forEach((n3, i) => {
      const r2 = new Mi(e, i);
      s.push(this.ue(t2, r2));
    }), At.waitFor(s);
  }
  removeOverlaysForBatchId(t2, e, n2) {
    const s = /* @__PURE__ */ new Set();
    e.forEach((t3) => s.add(ri(t3.getCollectionPath())));
    const i = [];
    return s.forEach((e2) => {
      const s2 = IDBKeyRange.bound(
        [this.userId, e2, n2],
        [this.userId, e2, n2 + 1],
        false,
        true
      );
      i.push(er(t2).Y("collectionPathOverlayIndex", s2));
    }), At.waitFor(i);
  }
  getOverlaysForCollection(t2, e, n2) {
    const s = us(), i = ri(e), r2 = IDBKeyRange.bound(
      [this.userId, i, n2],
      [this.userId, i, Number.POSITIVE_INFINITY],
      true
    );
    return er(t2).W("collectionPathOverlayIndex", r2).next((t3) => {
      for (const e2 of t3) {
        const t4 = zi(this.It, e2);
        s.set(t4.getKey(), t4);
      }
      return s;
    });
  }
  getOverlaysForCollectionGroup(t2, e, n2, s) {
    const i = us();
    let r2;
    const o = IDBKeyRange.bound(
      [this.userId, e, n2],
      [this.userId, e, Number.POSITIVE_INFINITY],
      true
    );
    return er(t2).Z({
      index: "collectionGroupOverlayIndex",
      range: o
    }, (t3, e2, n3) => {
      const o2 = zi(this.It, e2);
      i.size() < s || o2.largestBatchId === r2 ? (i.set(o2.getKey(), o2), r2 = o2.largestBatchId) : n3.done();
    }).next(() => i);
  }
  ue(t2, e) {
    return er(t2).put(function(t3, e2, n2) {
      const [s, i, r2] = Hi(e2, n2.mutation.key);
      return {
        userId: e2,
        collectionPath: i,
        documentId: r2,
        collectionGroup: n2.mutation.key.getCollectionGroup(),
        largestBatchId: n2.largestBatchId,
        overlayMutation: Ks(t3.re, n2.mutation)
      };
    }(this.It, this.userId, e));
  }
}
function er(t2) {
  return Ni(t2, "documentOverlays");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr {
  constructor() {
  }
  ce(t2, e) {
    this.ae(t2, e), e.he();
  }
  ae(t2, e) {
    if ("nullValue" in t2)
      this.le(e, 5);
    else if ("booleanValue" in t2)
      this.le(e, 10), e.fe(t2.booleanValue ? 1 : 0);
    else if ("integerValue" in t2)
      this.le(e, 15), e.fe(Jt(t2.integerValue));
    else if ("doubleValue" in t2) {
      const n2 = Jt(t2.doubleValue);
      isNaN(n2) ? this.le(e, 13) : (this.le(e, 15), ie(n2) ? e.fe(0) : e.fe(n2));
    } else if ("timestampValue" in t2) {
      const n2 = t2.timestampValue;
      this.le(e, 20), "string" == typeof n2 ? e.de(n2) : (e.de(`${n2.seconds || ""}`), e.fe(n2.nanos || 0));
    } else if ("stringValue" in t2)
      this._e(t2.stringValue, e), this.we(e);
    else if ("bytesValue" in t2)
      this.le(e, 30), e.me(Yt(t2.bytesValue)), this.we(e);
    else if ("referenceValue" in t2)
      this.ge(t2.referenceValue, e);
    else if ("geoPointValue" in t2) {
      const n2 = t2.geoPointValue;
      this.le(e, 45), e.fe(n2.latitude || 0), e.fe(n2.longitude || 0);
    } else
      "mapValue" in t2 ? Ee(t2) ? this.le(e, Number.MAX_SAFE_INTEGER) : (this.ye(t2.mapValue, e), this.we(e)) : "arrayValue" in t2 ? (this.pe(t2.arrayValue, e), this.we(e)) : O();
  }
  _e(t2, e) {
    this.le(e, 25), this.Ie(t2, e);
  }
  Ie(t2, e) {
    e.de(t2);
  }
  ye(t2, e) {
    const n2 = t2.fields || {};
    this.le(e, 55);
    for (const t3 of Object.keys(n2))
      this._e(t3, e), this.ae(n2[t3], e);
  }
  pe(t2, e) {
    const n2 = t2.values || [];
    this.le(e, 50);
    for (const t3 of n2)
      this.ae(t3, e);
  }
  ge(t2, e) {
    this.le(e, 37);
    ct.fromName(t2).path.forEach((t3) => {
      this.le(e, 60), this.Ie(t3, e);
    });
  }
  le(t2, e) {
    t2.fe(e);
  }
  we(t2) {
    t2.fe(2);
  }
}
nr.Te = new nr();
function sr(t2) {
  if (0 === t2)
    return 8;
  let e = 0;
  return t2 >> 4 == 0 && (e += 4, t2 <<= 4), t2 >> 6 == 0 && (e += 2, t2 <<= 2), t2 >> 7 == 0 && (e += 1), e;
}
function ir(t2) {
  const e = 64 - function(t3) {
    let e2 = 0;
    for (let n2 = 0; n2 < 8; ++n2) {
      const s = sr(255 & t3[n2]);
      if (e2 += s, 8 !== s)
        break;
    }
    return e2;
  }(t2);
  return Math.ceil(e / 8);
}
class rr {
  constructor() {
    this.buffer = new Uint8Array(1024), this.position = 0;
  }
  Ee(t2) {
    const e = t2[Symbol.iterator]();
    let n2 = e.next();
    for (; !n2.done; )
      this.Ae(n2.value), n2 = e.next();
    this.Re();
  }
  be(t2) {
    const e = t2[Symbol.iterator]();
    let n2 = e.next();
    for (; !n2.done; )
      this.Pe(n2.value), n2 = e.next();
    this.ve();
  }
  Ve(t2) {
    for (const e of t2) {
      const t3 = e.charCodeAt(0);
      if (t3 < 128)
        this.Ae(t3);
      else if (t3 < 2048)
        this.Ae(960 | t3 >>> 6), this.Ae(128 | 63 & t3);
      else if (e < "\uD800" || "\uDBFF" < e)
        this.Ae(480 | t3 >>> 12), this.Ae(128 | 63 & t3 >>> 6), this.Ae(128 | 63 & t3);
      else {
        const t4 = e.codePointAt(0);
        this.Ae(240 | t4 >>> 18), this.Ae(128 | 63 & t4 >>> 12), this.Ae(128 | 63 & t4 >>> 6), this.Ae(128 | 63 & t4);
      }
    }
    this.Re();
  }
  Se(t2) {
    for (const e of t2) {
      const t3 = e.charCodeAt(0);
      if (t3 < 128)
        this.Pe(t3);
      else if (t3 < 2048)
        this.Pe(960 | t3 >>> 6), this.Pe(128 | 63 & t3);
      else if (e < "\uD800" || "\uDBFF" < e)
        this.Pe(480 | t3 >>> 12), this.Pe(128 | 63 & t3 >>> 6), this.Pe(128 | 63 & t3);
      else {
        const t4 = e.codePointAt(0);
        this.Pe(240 | t4 >>> 18), this.Pe(128 | 63 & t4 >>> 12), this.Pe(128 | 63 & t4 >>> 6), this.Pe(128 | 63 & t4);
      }
    }
    this.ve();
  }
  De(t2) {
    const e = this.Ce(t2), n2 = ir(e);
    this.xe(1 + n2), this.buffer[this.position++] = 255 & n2;
    for (let t3 = e.length - n2; t3 < e.length; ++t3)
      this.buffer[this.position++] = 255 & e[t3];
  }
  Ne(t2) {
    const e = this.Ce(t2), n2 = ir(e);
    this.xe(1 + n2), this.buffer[this.position++] = ~(255 & n2);
    for (let t3 = e.length - n2; t3 < e.length; ++t3)
      this.buffer[this.position++] = ~(255 & e[t3]);
  }
  ke() {
    this.Oe(255), this.Oe(255);
  }
  Me() {
    this.Fe(255), this.Fe(255);
  }
  reset() {
    this.position = 0;
  }
  seed(t2) {
    this.xe(t2.length), this.buffer.set(t2, this.position), this.position += t2.length;
  }
  $e() {
    return this.buffer.slice(0, this.position);
  }
  Ce(t2) {
    const e = function(t3) {
      const e2 = new DataView(new ArrayBuffer(8));
      return e2.setFloat64(0, t3, false), new Uint8Array(e2.buffer);
    }(t2), n2 = 0 != (128 & e[0]);
    e[0] ^= n2 ? 255 : 128;
    for (let t3 = 1; t3 < e.length; ++t3)
      e[t3] ^= n2 ? 255 : 0;
    return e;
  }
  Ae(t2) {
    const e = 255 & t2;
    0 === e ? (this.Oe(0), this.Oe(255)) : 255 === e ? (this.Oe(255), this.Oe(0)) : this.Oe(e);
  }
  Pe(t2) {
    const e = 255 & t2;
    0 === e ? (this.Fe(0), this.Fe(255)) : 255 === e ? (this.Fe(255), this.Fe(0)) : this.Fe(t2);
  }
  Re() {
    this.Oe(0), this.Oe(1);
  }
  ve() {
    this.Fe(0), this.Fe(1);
  }
  Oe(t2) {
    this.xe(1), this.buffer[this.position++] = t2;
  }
  Fe(t2) {
    this.xe(1), this.buffer[this.position++] = ~t2;
  }
  xe(t2) {
    const e = t2 + this.position;
    if (e <= this.buffer.length)
      return;
    let n2 = 2 * this.buffer.length;
    n2 < e && (n2 = e);
    const s = new Uint8Array(n2);
    s.set(this.buffer), this.buffer = s;
  }
}
class or {
  constructor(t2) {
    this.Be = t2;
  }
  me(t2) {
    this.Be.Ee(t2);
  }
  de(t2) {
    this.Be.Ve(t2);
  }
  fe(t2) {
    this.Be.De(t2);
  }
  he() {
    this.Be.ke();
  }
}
class ur {
  constructor(t2) {
    this.Be = t2;
  }
  me(t2) {
    this.Be.be(t2);
  }
  de(t2) {
    this.Be.Se(t2);
  }
  fe(t2) {
    this.Be.Ne(t2);
  }
  he() {
    this.Be.Me();
  }
}
class cr {
  constructor() {
    this.Be = new rr(), this.Le = new or(this.Be), this.Ue = new ur(this.Be);
  }
  seed(t2) {
    this.Be.seed(t2);
  }
  qe(t2) {
    return 0 === t2 ? this.Le : this.Ue;
  }
  $e() {
    return this.Be.$e();
  }
  reset() {
    this.Be.reset();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar {
  constructor(t2, e, n2, s) {
    this.indexId = t2, this.documentKey = e, this.arrayValue = n2, this.directionalValue = s;
  }
  Ke() {
    const t2 = this.directionalValue.length, e = 0 === t2 || 255 === this.directionalValue[t2 - 1] ? t2 + 1 : t2, n2 = new Uint8Array(e);
    return n2.set(this.directionalValue, 0), e !== t2 ? n2.set([0], this.directionalValue.length) : ++n2[n2.length - 1], new ar(this.indexId, this.documentKey, this.arrayValue, n2);
  }
}
function hr(t2, e) {
  let n2 = t2.indexId - e.indexId;
  return 0 !== n2 ? n2 : (n2 = lr(t2.arrayValue, e.arrayValue), 0 !== n2 ? n2 : (n2 = lr(t2.directionalValue, e.directionalValue), 0 !== n2 ? n2 : ct.comparator(t2.documentKey, e.documentKey)));
}
function lr(t2, e) {
  for (let n2 = 0; n2 < t2.length && n2 < e.length; ++n2) {
    const s = t2[n2] - e[n2];
    if (0 !== s)
      return s;
  }
  return t2.length - e.length;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr {
  constructor(t2) {
    this.collectionId = null != t2.collectionGroup ? t2.collectionGroup : t2.path.lastSegment(), this.Ge = t2.orderBy, this.Qe = [];
    for (const e of t2.filters) {
      const t3 = e;
      t3.dt() ? this.je = t3 : this.Qe.push(t3);
    }
  }
  We(t2) {
    const e = ht(t2);
    if (void 0 !== e && !this.ze(e))
      return false;
    const n2 = lt(t2);
    let s = 0, i = 0;
    for (; s < n2.length && this.ze(n2[s]); ++s)
      ;
    if (s === n2.length)
      return true;
    if (void 0 !== this.je) {
      const t3 = n2[s];
      if (!this.He(this.je, t3) || !this.Je(this.Ge[i++], t3))
        return false;
      ++s;
    }
    for (; s < n2.length; ++s) {
      const t3 = n2[s];
      if (i >= this.Ge.length || !this.Je(this.Ge[i++], t3))
        return false;
    }
    return true;
  }
  ze(t2) {
    for (const e of this.Qe)
      if (this.He(e, t2))
        return true;
    return false;
  }
  He(t2, e) {
    if (void 0 === t2 || !t2.field.isEqual(e.fieldPath))
      return false;
    const n2 = "array-contains" === t2.op || "array-contains-any" === t2.op;
    return 2 === e.kind === n2;
  }
  Je(t2, e) {
    return !!t2.field.isEqual(e.fieldPath) && (0 === e.kind && "asc" === t2.dir || 1 === e.kind && "desc" === t2.dir);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr {
  constructor() {
    this.Ye = new _r();
  }
  addToCollectionParentIndex(t2, e) {
    return this.Ye.add(e), At.resolve();
  }
  getCollectionParents(t2, e) {
    return At.resolve(this.Ye.getEntries(e));
  }
  addFieldIndex(t2, e) {
    return At.resolve();
  }
  deleteFieldIndex(t2, e) {
    return At.resolve();
  }
  getDocumentsMatchingTarget(t2, e) {
    return At.resolve(null);
  }
  getIndexType(t2, e) {
    return At.resolve(0);
  }
  getFieldIndexes(t2, e) {
    return At.resolve([]);
  }
  getNextCollectionGroupToUpdate(t2) {
    return At.resolve(null);
  }
  getMinOffset(t2, e) {
    return At.resolve(yt.min());
  }
  getMinOffsetFromCollectionGroup(t2, e) {
    return At.resolve(yt.min());
  }
  updateCollectionGroup(t2, e, n2) {
    return At.resolve();
  }
  updateIndexEntries(t2, e) {
    return At.resolve();
  }
}
class _r {
  constructor() {
    this.index = {};
  }
  add(t2) {
    const e = t2.lastSegment(), n2 = t2.popLast(), s = this.index[e] || new qt(rt.comparator), i = !s.has(n2);
    return this.index[e] = s.add(n2), i;
  }
  has(t2) {
    const e = t2.lastSegment(), n2 = t2.popLast(), s = this.index[e];
    return s && s.has(n2);
  }
  getEntries(t2) {
    return (this.index[t2] || new qt(rt.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wr = new Uint8Array(0);
class mr {
  constructor(t2, e) {
    this.user = t2, this.databaseId = e, this.Xe = new _r(), this.Ze = new es((t3) => xe(t3), (t3, e2) => ke(t3, e2)), this.uid = t2.uid || "";
  }
  addToCollectionParentIndex(t2, e) {
    if (!this.Xe.has(e)) {
      const n2 = e.lastSegment(), s = e.popLast();
      t2.addOnCommittedListener(() => {
        this.Xe.add(e);
      });
      const i = {
        collectionId: n2,
        parent: ri(s)
      };
      return gr(t2).put(i);
    }
    return At.resolve();
  }
  getCollectionParents(t2, e) {
    const n2 = [], s = IDBKeyRange.bound(
      [e, ""],
      [et(e), ""],
      false,
      true
    );
    return gr(t2).W(s).next((t3) => {
      for (const s2 of t3) {
        if (s2.collectionId !== e)
          break;
        n2.push(ci(s2.parent));
      }
      return n2;
    });
  }
  addFieldIndex(t2, e) {
    const n2 = pr(t2), s = function(t3) {
      return {
        indexId: t3.indexId,
        collectionGroup: t3.collectionGroup,
        fields: t3.fields.map((t4) => [t4.fieldPath.canonicalString(), t4.kind])
      };
    }(e);
    delete s.indexId;
    const i = n2.add(s);
    if (e.indexState) {
      const n3 = Ir(t2);
      return i.next((t3) => {
        n3.put(Ji(t3, this.user, e.indexState.sequenceNumber, e.indexState.offset));
      });
    }
    return i.next();
  }
  deleteFieldIndex(t2, e) {
    const n2 = pr(t2), s = Ir(t2), i = yr(t2);
    return n2.delete(e.indexId).next(() => s.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      false,
      true
    ))).next(() => i.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      false,
      true
    )));
  }
  getDocumentsMatchingTarget(t2, e) {
    const n2 = yr(t2);
    let s = true;
    const i = /* @__PURE__ */ new Map();
    return At.forEach(this.tn(e), (e2) => this.en(t2, e2).next((t3) => {
      s && (s = !!t3), i.set(e2, t3);
    })).next(() => {
      if (s) {
        let t3 = fs();
        const s2 = [];
        return At.forEach(i, (i2, r2) => {
          var o;
          C("IndexedDbIndexManager", `Using index ${o = i2, `id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t4) => `${t4.fieldPath}:${t4.kind}`).join(",")}`} to execute ${xe(e)}`);
          const u2 = function(t4, e2) {
            const n3 = ht(e2);
            if (void 0 === n3)
              return null;
            for (const e3 of Me(t4, n3.fieldPath))
              switch (e3.op) {
                case "array-contains-any":
                  return e3.value.arrayValue.values || [];
                case "array-contains":
                  return [e3.value];
              }
            return null;
          }(r2, i2), c = function(t4, e2) {
            const n3 = /* @__PURE__ */ new Map();
            for (const s3 of lt(e2))
              for (const e3 of Me(t4, s3.fieldPath))
                switch (e3.op) {
                  case "==":
                  case "in":
                    n3.set(s3.fieldPath.canonicalString(), e3.value);
                    break;
                  case "not-in":
                  case "!=":
                    return n3.set(s3.fieldPath.canonicalString(), e3.value), Array.from(n3.values());
                }
            return null;
          }(r2, i2), a = function(t4, e2) {
            const n3 = [];
            let s3 = true;
            for (const i3 of lt(e2)) {
              const e3 = 0 === i3.kind ? Fe(t4, i3.fieldPath, t4.startAt) : $e(t4, i3.fieldPath, t4.startAt);
              n3.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new ze(n3, s3);
          }(r2, i2), h = function(t4, e2) {
            const n3 = [];
            let s3 = true;
            for (const i3 of lt(e2)) {
              const e3 = 0 === i3.kind ? $e(t4, i3.fieldPath, t4.endAt) : Fe(t4, i3.fieldPath, t4.endAt);
              n3.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new ze(n3, s3);
          }(r2, i2), l2 = this.nn(i2, r2, a), f2 = this.nn(i2, r2, h), d = this.sn(i2, r2, c), _ = this.rn(i2.indexId, u2, l2, a.inclusive, f2, h.inclusive, d);
          return At.forEach(_, (i3) => n2.J(i3, e.limit).next((e2) => {
            e2.forEach((e3) => {
              const n3 = ct.fromSegments(e3.documentKey);
              t3.has(n3) || (t3 = t3.add(n3), s2.push(n3));
            });
          }));
        }).next(() => s2);
      }
      return At.resolve(null);
    });
  }
  tn(t2) {
    let e = this.Ze.get(t2);
    return e || (e = [t2], this.Ze.set(t2, e), e);
  }
  rn(t2, e, n2, s, i, r2, o) {
    const u2 = (null != e ? e.length : 1) * Math.max(n2.length, i.length), c = u2 / (null != e ? e.length : 1), a = [];
    for (let h = 0; h < u2; ++h) {
      const u3 = e ? this.on(e[h / c]) : wr, l2 = this.un(t2, u3, n2[h % c], s), f2 = this.cn(t2, u3, i[h % c], r2), d = o.map((e2) => this.un(
        t2,
        u3,
        e2,
        true
      ));
      a.push(...this.createRange(l2, f2, d));
    }
    return a;
  }
  un(t2, e, n2, s) {
    const i = new ar(t2, ct.empty(), e, n2);
    return s ? i : i.Ke();
  }
  cn(t2, e, n2, s) {
    const i = new ar(t2, ct.empty(), e, n2);
    return s ? i.Ke() : i;
  }
  en(t2, e) {
    const n2 = new fr(e), s = null != e.collectionGroup ? e.collectionGroup : e.path.lastSegment();
    return this.getFieldIndexes(t2, s).next((t3) => {
      let e2 = null;
      for (const s2 of t3) {
        n2.We(s2) && (!e2 || s2.fields.length > e2.fields.length) && (e2 = s2);
      }
      return e2;
    });
  }
  getIndexType(t2, e) {
    let n2 = 2;
    return At.forEach(this.tn(e), (e2) => this.en(t2, e2).next((t3) => {
      t3 ? 0 !== n2 && t3.fields.length < function(t4) {
        let e3 = new qt(ut.comparator), n3 = false;
        for (const s of t4.filters) {
          const t5 = s;
          t5.field.isKeyField() || ("array-contains" === t5.op || "array-contains-any" === t5.op ? n3 = true : e3 = e3.add(t5.field));
        }
        for (const n4 of t4.orderBy)
          n4.field.isKeyField() || (e3 = e3.add(n4.field));
        return e3.size + (n3 ? 1 : 0);
      }(e2) && (n2 = 1) : n2 = 0;
    })).next(() => n2);
  }
  an(t2, e) {
    const n2 = new cr();
    for (const s of lt(t2)) {
      const t3 = e.data.field(s.fieldPath);
      if (null == t3)
        return null;
      const i = n2.qe(s.kind);
      nr.Te.ce(t3, i);
    }
    return n2.$e();
  }
  on(t2) {
    const e = new cr();
    return nr.Te.ce(t2, e.qe(0)), e.$e();
  }
  hn(t2, e) {
    const n2 = new cr();
    return nr.Te.ce(we(this.databaseId, e), n2.qe(function(t3) {
      const e2 = lt(t3);
      return 0 === e2.length ? 0 : e2[e2.length - 1].kind;
    }(t2))), n2.$e();
  }
  sn(t2, e, n2) {
    if (null === n2)
      return [];
    let s = [];
    s.push(new cr());
    let i = 0;
    for (const r2 of lt(t2)) {
      const t3 = n2[i++];
      for (const n3 of s)
        if (this.ln(e, r2.fieldPath) && ge(t3))
          s = this.fn(s, r2, t3);
        else {
          const e2 = n3.qe(r2.kind);
          nr.Te.ce(t3, e2);
        }
    }
    return this.dn(s);
  }
  nn(t2, e, n2) {
    return this.sn(t2, e, n2.position);
  }
  dn(t2) {
    const e = [];
    for (let n2 = 0; n2 < t2.length; ++n2)
      e[n2] = t2[n2].$e();
    return e;
  }
  fn(t2, e, n2) {
    const s = [...t2], i = [];
    for (const t3 of n2.arrayValue.values || [])
      for (const n3 of s) {
        const s2 = new cr();
        s2.seed(n3.$e()), nr.Te.ce(t3, s2.qe(e.kind)), i.push(s2);
      }
    return i;
  }
  ln(t2, e) {
    return !!t2.filters.find((t3) => t3 instanceof Be && t3.field.isEqual(e) && ("in" === t3.op || "not-in" === t3.op));
  }
  getFieldIndexes(t2, e) {
    const n2 = pr(t2), s = Ir(t2);
    return (e ? n2.W("collectionGroupIndex", IDBKeyRange.bound(e, e)) : n2.W()).next((t3) => {
      const e2 = [];
      return At.forEach(t3, (t4) => s.get([t4.indexId, this.uid]).next((n3) => {
        e2.push(function(t5, e3) {
          const n4 = e3 ? new wt(e3.sequenceNumber, new yt(Ki(e3.readTime), new ct(ci(e3.documentKey)), e3.largestBatchId)) : wt.empty(), s2 = t5.fields.map(([t6, e4]) => new dt(ut.fromServerFormat(t6), e4));
          return new at(t5.indexId, t5.collectionGroup, s2, n4);
        }(t4, n3));
      })).next(() => e2);
    });
  }
  getNextCollectionGroupToUpdate(t2) {
    return this.getFieldIndexes(t2).next((t3) => 0 === t3.length ? null : (t3.sort((t4, e) => {
      const n2 = t4.indexState.sequenceNumber - e.indexState.sequenceNumber;
      return 0 !== n2 ? n2 : Z(t4.collectionGroup, e.collectionGroup);
    }), t3[0].collectionGroup));
  }
  updateCollectionGroup(t2, e, n2) {
    const s = pr(t2), i = Ir(t2);
    return this._n(t2).next((t3) => s.W("collectionGroupIndex", IDBKeyRange.bound(e, e)).next((e2) => At.forEach(e2, (e3) => i.put(Ji(e3.indexId, this.user, t3, n2)))));
  }
  updateIndexEntries(t2, e) {
    const n2 = /* @__PURE__ */ new Map();
    return At.forEach(e, (e2, s) => {
      const i = n2.get(e2.collectionGroup);
      return (i ? At.resolve(i) : this.getFieldIndexes(t2, e2.collectionGroup)).next((i2) => (n2.set(e2.collectionGroup, i2), At.forEach(i2, (n3) => this.wn(t2, e2, n3).next((e3) => {
        const i3 = this.mn(s, n3);
        return e3.isEqual(i3) ? At.resolve() : this.gn(t2, s, n3, e3, i3);
      }))));
    });
  }
  yn(t2, e, n2, s) {
    return yr(t2).put({
      indexId: s.indexId,
      uid: this.uid,
      arrayValue: s.arrayValue,
      directionalValue: s.directionalValue,
      orderedDocumentKey: this.hn(n2, e.key),
      documentKey: e.key.path.toArray()
    });
  }
  pn(t2, e, n2, s) {
    return yr(t2).delete([s.indexId, this.uid, s.arrayValue, s.directionalValue, this.hn(n2, e.key), e.key.path.toArray()]);
  }
  wn(t2, e, n2) {
    const s = yr(t2);
    let i = new qt(hr);
    return s.Z({
      index: "documentKeyIndex",
      range: IDBKeyRange.only([n2.indexId, this.uid, this.hn(n2, e)])
    }, (t3, s2) => {
      i = i.add(new ar(n2.indexId, e, s2.arrayValue, s2.directionalValue));
    }).next(() => i);
  }
  mn(t2, e) {
    let n2 = new qt(hr);
    const s = this.an(e, t2);
    if (null == s)
      return n2;
    const i = ht(e);
    if (null != i) {
      const r2 = t2.data.field(i.fieldPath);
      if (ge(r2))
        for (const i2 of r2.arrayValue.values || [])
          n2 = n2.add(new ar(e.indexId, t2.key, this.on(i2), s));
    } else
      n2 = n2.add(new ar(e.indexId, t2.key, wr, s));
    return n2;
  }
  gn(t2, e, n2, s, i) {
    C("IndexedDbIndexManager", "Updating index entries for document '%s'", e.key);
    const r2 = [];
    return function(t3, e2, n3, s2, i2) {
      const r3 = t3.getIterator(), o = e2.getIterator();
      let u2 = Gt(r3), c = Gt(o);
      for (; u2 || c; ) {
        let t4 = false, e3 = false;
        if (u2 && c) {
          const s3 = n3(u2, c);
          s3 < 0 ? e3 = true : s3 > 0 && (t4 = true);
        } else
          null != u2 ? e3 = true : t4 = true;
        t4 ? (s2(c), c = Gt(o)) : e3 ? (i2(u2), u2 = Gt(r3)) : (u2 = Gt(r3), c = Gt(o));
      }
    }(s, i, hr, (s2) => {
      r2.push(this.yn(t2, e, n2, s2));
    }, (s2) => {
      r2.push(this.pn(t2, e, n2, s2));
    }), At.waitFor(r2);
  }
  _n(t2) {
    let e = 1;
    return Ir(t2).Z({
      index: "sequenceNumberIndex",
      reverse: true,
      range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
    }, (t3, n2, s) => {
      s.done(), e = n2.sequenceNumber + 1;
    }).next(() => e);
  }
  createRange(t2, e, n2) {
    n2 = n2.sort((t3, e2) => hr(t3, e2)).filter((t3, e2, n3) => !e2 || 0 !== hr(t3, n3[e2 - 1]));
    const s = [];
    s.push(t2);
    for (const i2 of n2) {
      const n3 = hr(i2, t2), r2 = hr(i2, e);
      if (0 === n3)
        s[0] = t2.Ke();
      else if (n3 > 0 && r2 < 0)
        s.push(i2), s.push(i2.Ke());
      else if (r2 > 0)
        break;
    }
    s.push(e);
    const i = [];
    for (let t3 = 0; t3 < s.length; t3 += 2)
      i.push(IDBKeyRange.bound([s[t3].indexId, this.uid, s[t3].arrayValue, s[t3].directionalValue, wr, []], [s[t3 + 1].indexId, this.uid, s[t3 + 1].arrayValue, s[t3 + 1].directionalValue, wr, []]));
    return i;
  }
  getMinOffsetFromCollectionGroup(t2, e) {
    return this.getFieldIndexes(t2, e).next(Tr);
  }
  getMinOffset(t2, e) {
    return At.mapArray(this.tn(e), (e2) => this.en(t2, e2).next((t3) => t3 || O())).next(Tr);
  }
}
function gr(t2) {
  return Ni(t2, "collectionParents");
}
function yr(t2) {
  return Ni(t2, "indexEntries");
}
function pr(t2) {
  return Ni(t2, "indexConfiguration");
}
function Ir(t2) {
  return Ni(t2, "indexState");
}
function Tr(t2) {
  M(0 !== t2.length);
  let e = t2[0].indexState.offset, n2 = e.largestBatchId;
  for (let s = 1; s < t2.length; s++) {
    const i = t2[s].indexState.offset;
    pt(i, e) < 0 && (e = i), n2 < i.largestBatchId && (n2 = i.largestBatchId);
  }
  return new yt(e.readTime, e.documentKey, n2);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Er = {
  didRun: false,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
};
class Ar {
  constructor(t2, e, n2) {
    this.cacheSizeCollectionThreshold = t2, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n2;
  }
  static withCacheSize(t2) {
    return new Ar(t2, Ar.DEFAULT_COLLECTION_PERCENTILE, Ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rr(t2, e, n2) {
  const s = t2.store("mutations"), i = t2.store("documentMutations"), r2 = [], o = IDBKeyRange.only(n2.batchId);
  let u2 = 0;
  const c = s.Z({
    range: o
  }, (t3, e2, n3) => (u2++, n3.delete()));
  r2.push(c.next(() => {
    M(1 === u2);
  }));
  const a = [];
  for (const t3 of n2.mutations) {
    const s2 = li(e, t3.key.path, n2.batchId);
    r2.push(i.delete(s2)), a.push(t3.key);
  }
  return At.waitFor(r2).next(() => a);
}
function br(t2) {
  if (!t2)
    return 0;
  let e;
  if (t2.document)
    e = t2.document;
  else if (t2.unknownDocument)
    e = t2.unknownDocument;
  else {
    if (!t2.noDocument)
      throw O();
    e = t2.noDocument;
  }
  return JSON.stringify(e).length;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ar.DEFAULT_COLLECTION_PERCENTILE = 10, Ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, Ar.DEFAULT = new Ar(41943040, Ar.DEFAULT_COLLECTION_PERCENTILE, Ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), Ar.DISABLED = new Ar(-1, 0, 0);
class Pr {
  constructor(t2, e, n2, s) {
    this.userId = t2, this.It = e, this.indexManager = n2, this.referenceDelegate = s, this.In = {};
  }
  static oe(t2, e, n2, s) {
    M("" !== t2.uid);
    const i = t2.isAuthenticated() ? t2.uid : "";
    return new Pr(i, e, n2, s);
  }
  checkEmpty(t2) {
    let e = true;
    const n2 = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return Vr(t2).Z({
      index: "userMutationsIndex",
      range: n2
    }, (t3, n3, s) => {
      e = false, s.done();
    }).next(() => e);
  }
  addMutationBatch(t2, e, n2, s) {
    const i = Sr(t2), r2 = Vr(t2);
    return r2.add({}).next((o) => {
      M("number" == typeof o);
      const u2 = new ki(o, e, n2, s), c = function(t3, e2, n3) {
        const s2 = n3.baseMutations.map((e3) => Ks(t3.re, e3)), i2 = n3.mutations.map((e3) => Ks(t3.re, e3));
        return {
          userId: e2,
          batchId: n3.batchId,
          localWriteTimeMs: n3.localWriteTime.toMillis(),
          baseMutations: s2,
          mutations: i2
        };
      }(this.It, this.userId, u2), a = [];
      let h = new qt((t3, e2) => Z(t3.canonicalString(), e2.canonicalString()));
      for (const t3 of s) {
        const e2 = li(this.userId, t3.key.path, o);
        h = h.add(t3.key.path.popLast()), a.push(r2.put(c)), a.push(i.put(e2, fi));
      }
      return h.forEach((e2) => {
        a.push(this.indexManager.addToCollectionParentIndex(t2, e2));
      }), t2.addOnCommittedListener(() => {
        this.In[o] = u2.keys();
      }), At.waitFor(a).next(() => u2);
    });
  }
  lookupMutationBatch(t2, e) {
    return Vr(t2).get(e).next((t3) => t3 ? (M(t3.userId === this.userId), Gi(this.It, t3)) : null);
  }
  Tn(t2, e) {
    return this.In[e] ? At.resolve(this.In[e]) : this.lookupMutationBatch(t2, e).next((t3) => {
      if (t3) {
        const n2 = t3.keys();
        return this.In[e] = n2, n2;
      }
      return null;
    });
  }
  getNextMutationBatchAfterBatchId(t2, e) {
    const n2 = e + 1, s = IDBKeyRange.lowerBound([this.userId, n2]);
    let i = null;
    return Vr(t2).Z({
      index: "userMutationsIndex",
      range: s
    }, (t3, e2, s2) => {
      e2.userId === this.userId && (M(e2.batchId >= n2), i = Gi(this.It, e2)), s2.done();
    }).next(() => i);
  }
  getHighestUnacknowledgedBatchId(t2) {
    const e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]);
    let n2 = -1;
    return Vr(t2).Z({
      index: "userMutationsIndex",
      range: e,
      reverse: true
    }, (t3, e2, s) => {
      n2 = e2.batchId, s.done();
    }).next(() => n2);
  }
  getAllMutationBatches(t2) {
    const e = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return Vr(t2).W("userMutationsIndex", e).next((t3) => t3.map((t4) => Gi(this.It, t4)));
  }
  getAllMutationBatchesAffectingDocumentKey(t2, e) {
    const n2 = hi(this.userId, e.path), s = IDBKeyRange.lowerBound(n2), i = [];
    return Sr(t2).Z({
      range: s
    }, (n3, s2, r2) => {
      const [o, u2, c] = n3, a = ci(u2);
      if (o === this.userId && e.path.isEqual(a))
        return Vr(t2).get(c).next((t3) => {
          if (!t3)
            throw O();
          M(t3.userId === this.userId), i.push(Gi(this.It, t3));
        });
      r2.done();
    }).next(() => i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t2, e) {
    let n2 = new qt(Z);
    const s = [];
    return e.forEach((e2) => {
      const i = hi(this.userId, e2.path), r2 = IDBKeyRange.lowerBound(i), o = Sr(t2).Z({
        range: r2
      }, (t3, s2, i2) => {
        const [r3, o2, u2] = t3, c = ci(o2);
        r3 === this.userId && e2.path.isEqual(c) ? n2 = n2.add(u2) : i2.done();
      });
      s.push(o);
    }), At.waitFor(s).next(() => this.En(t2, n2));
  }
  getAllMutationBatchesAffectingQuery(t2, e) {
    const n2 = e.path, s = n2.length + 1, i = hi(this.userId, n2), r2 = IDBKeyRange.lowerBound(i);
    let o = new qt(Z);
    return Sr(t2).Z({
      range: r2
    }, (t3, e2, i2) => {
      const [r3, u2, c] = t3, a = ci(u2);
      r3 === this.userId && n2.isPrefixOf(a) ? a.length === s && (o = o.add(c)) : i2.done();
    }).next(() => this.En(t2, o));
  }
  En(t2, e) {
    const n2 = [], s = [];
    return e.forEach((e2) => {
      s.push(Vr(t2).get(e2).next((t3) => {
        if (null === t3)
          throw O();
        M(t3.userId === this.userId), n2.push(Gi(this.It, t3));
      }));
    }), At.waitFor(s).next(() => n2);
  }
  removeMutationBatch(t2, e) {
    return Rr(t2.ie, this.userId, e).next((n2) => (t2.addOnCommittedListener(() => {
      this.An(e.batchId);
    }), At.forEach(n2, (e2) => this.referenceDelegate.markPotentiallyOrphaned(t2, e2))));
  }
  An(t2) {
    delete this.In[t2];
  }
  performConsistencyCheck(t2) {
    return this.checkEmpty(t2).next((e) => {
      if (!e)
        return At.resolve();
      const n2 = IDBKeyRange.lowerBound([this.userId]);
      const s = [];
      return Sr(t2).Z({
        range: n2
      }, (t3, e2, n3) => {
        if (t3[0] === this.userId) {
          const e3 = ci(t3[1]);
          s.push(e3);
        } else
          n3.done();
      }).next(() => {
        M(0 === s.length);
      });
    });
  }
  containsKey(t2, e) {
    return vr(t2, this.userId, e);
  }
  Rn(t2) {
    return Dr(t2).get(this.userId).next((t3) => t3 || {
      userId: this.userId,
      lastAcknowledgedBatchId: -1,
      lastStreamToken: ""
    });
  }
}
function vr(t2, e, n2) {
  const s = hi(e, n2.path), i = s[1], r2 = IDBKeyRange.lowerBound(s);
  let o = false;
  return Sr(t2).Z({
    range: r2,
    X: true
  }, (t3, n3, s2) => {
    const [r3, u2, c] = t3;
    r3 === e && u2 === i && (o = true), s2.done();
  }).next(() => o);
}
function Vr(t2) {
  return Ni(t2, "mutations");
}
function Sr(t2) {
  return Ni(t2, "documentMutations");
}
function Dr(t2) {
  return Ni(t2, "mutationQueues");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cr {
  constructor(t2) {
    this.bn = t2;
  }
  next() {
    return this.bn += 2, this.bn;
  }
  static Pn() {
    return new Cr(0);
  }
  static vn() {
    return new Cr(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr {
  constructor(t2, e) {
    this.referenceDelegate = t2, this.It = e;
  }
  allocateTargetId(t2) {
    return this.Vn(t2).next((e) => {
      const n2 = new Cr(e.highestTargetId);
      return e.highestTargetId = n2.next(), this.Sn(t2, e).next(() => e.highestTargetId);
    });
  }
  getLastRemoteSnapshotVersion(t2) {
    return this.Vn(t2).next((t3) => st.fromTimestamp(new nt(t3.lastRemoteSnapshotVersion.seconds, t3.lastRemoteSnapshotVersion.nanoseconds)));
  }
  getHighestSequenceNumber(t2) {
    return this.Vn(t2).next((t3) => t3.highestListenSequenceNumber);
  }
  setTargetsMetadata(t2, e, n2) {
    return this.Vn(t2).next((s) => (s.highestListenSequenceNumber = e, n2 && (s.lastRemoteSnapshotVersion = n2.toTimestamp()), e > s.highestListenSequenceNumber && (s.highestListenSequenceNumber = e), this.Sn(t2, s)));
  }
  addTargetData(t2, e) {
    return this.Dn(t2, e).next(() => this.Vn(t2).next((n2) => (n2.targetCount += 1, this.Cn(e, n2), this.Sn(t2, n2))));
  }
  updateTargetData(t2, e) {
    return this.Dn(t2, e);
  }
  removeTargetData(t2, e) {
    return this.removeMatchingKeysForTargetId(t2, e.targetId).next(() => Nr(t2).delete(e.targetId)).next(() => this.Vn(t2)).next((e2) => (M(e2.targetCount > 0), e2.targetCount -= 1, this.Sn(t2, e2)));
  }
  removeTargets(t2, e, n2) {
    let s = 0;
    const i = [];
    return Nr(t2).Z((r2, o) => {
      const u2 = Qi(o);
      u2.sequenceNumber <= e && null === n2.get(u2.targetId) && (s++, i.push(this.removeTargetData(t2, u2)));
    }).next(() => At.waitFor(i)).next(() => s);
  }
  forEachTarget(t2, e) {
    return Nr(t2).Z((t3, n2) => {
      const s = Qi(n2);
      e(s);
    });
  }
  Vn(t2) {
    return kr(t2).get("targetGlobalKey").next((t3) => (M(null !== t3), t3));
  }
  Sn(t2, e) {
    return kr(t2).put("targetGlobalKey", e);
  }
  Dn(t2, e) {
    return Nr(t2).put(ji(this.It, e));
  }
  Cn(t2, e) {
    let n2 = false;
    return t2.targetId > e.highestTargetId && (e.highestTargetId = t2.targetId, n2 = true), t2.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t2.sequenceNumber, n2 = true), n2;
  }
  getTargetCount(t2) {
    return this.Vn(t2).next((t3) => t3.targetCount);
  }
  getTargetData(t2, e) {
    const n2 = xe(e), s = IDBKeyRange.bound([n2, Number.NEGATIVE_INFINITY], [n2, Number.POSITIVE_INFINITY]);
    let i = null;
    return Nr(t2).Z({
      range: s,
      index: "queryTargetsIndex"
    }, (t3, n3, s2) => {
      const r2 = Qi(n3);
      ke(e, r2.target) && (i = r2, s2.done());
    }).next(() => i);
  }
  addMatchingKeys(t2, e, n2) {
    const s = [], i = Or(t2);
    return e.forEach((e2) => {
      const r2 = ri(e2.path);
      s.push(i.put({
        targetId: n2,
        path: r2
      })), s.push(this.referenceDelegate.addReference(t2, n2, e2));
    }), At.waitFor(s);
  }
  removeMatchingKeys(t2, e, n2) {
    const s = Or(t2);
    return At.forEach(e, (e2) => {
      const i = ri(e2.path);
      return At.waitFor([s.delete([n2, i]), this.referenceDelegate.removeReference(t2, n2, e2)]);
    });
  }
  removeMatchingKeysForTargetId(t2, e) {
    const n2 = Or(t2), s = IDBKeyRange.bound(
      [e],
      [e + 1],
      false,
      true
    );
    return n2.delete(s);
  }
  getMatchingKeysForTargetId(t2, e) {
    const n2 = IDBKeyRange.bound(
      [e],
      [e + 1],
      false,
      true
    ), s = Or(t2);
    let i = fs();
    return s.Z({
      range: n2,
      X: true
    }, (t3, e2, n3) => {
      const s2 = ci(t3[1]), r2 = new ct(s2);
      i = i.add(r2);
    }).next(() => i);
  }
  containsKey(t2, e) {
    const n2 = ri(e.path), s = IDBKeyRange.bound(
      [n2],
      [et(n2)],
      false,
      true
    );
    let i = 0;
    return Or(t2).Z({
      index: "documentTargetsIndex",
      X: true,
      range: s
    }, ([t3, e2], n3, s2) => {
      0 !== t3 && (i++, s2.done());
    }).next(() => i > 0);
  }
  se(t2, e) {
    return Nr(t2).get(e).next((t3) => t3 ? Qi(t3) : null);
  }
}
function Nr(t2) {
  return Ni(t2, "targets");
}
function kr(t2) {
  return Ni(t2, "targetGlobal");
}
function Or(t2) {
  return Ni(t2, "targetDocuments");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mr([t2, e], [n2, s]) {
  const i = Z(t2, n2);
  return 0 === i ? Z(e, s) : i;
}
class Fr {
  constructor(t2) {
    this.xn = t2, this.buffer = new qt(Mr), this.Nn = 0;
  }
  kn() {
    return ++this.Nn;
  }
  On(t2) {
    const e = [t2, this.kn()];
    if (this.buffer.size < this.xn)
      this.buffer = this.buffer.add(e);
    else {
      const t3 = this.buffer.last();
      Mr(e, t3) < 0 && (this.buffer = this.buffer.delete(t3).add(e));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
}
class $r {
  constructor(t2, e, n2) {
    this.garbageCollector = t2, this.asyncQueue = e, this.localStore = n2, this.Mn = null;
  }
  start() {
    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.Fn(6e4);
  }
  stop() {
    this.Mn && (this.Mn.cancel(), this.Mn = null);
  }
  get started() {
    return null !== this.Mn;
  }
  Fn(t2) {
    C("LruGarbageCollector", `Garbage collection scheduled in ${t2}ms`), this.Mn = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", t2, async () => {
      this.Mn = null;
      try {
        await this.localStore.collectGarbage(this.garbageCollector);
      } catch (t3) {
        Vt(t3) ? C("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", t3) : await Et(t3);
      }
      await this.Fn(3e5);
    });
  }
}
class Br {
  constructor(t2, e) {
    this.$n = t2, this.params = e;
  }
  calculateTargetCount(t2, e) {
    return this.$n.Bn(t2).next((t3) => Math.floor(e / 100 * t3));
  }
  nthSequenceNumber(t2, e) {
    if (0 === e)
      return At.resolve(Ot.at);
    const n2 = new Fr(e);
    return this.$n.forEachTarget(t2, (t3) => n2.On(t3.sequenceNumber)).next(() => this.$n.Ln(t2, (t3) => n2.On(t3))).next(() => n2.maxValue);
  }
  removeTargets(t2, e, n2) {
    return this.$n.removeTargets(t2, e, n2);
  }
  removeOrphanedDocuments(t2, e) {
    return this.$n.removeOrphanedDocuments(t2, e);
  }
  collect(t2, e) {
    return -1 === this.params.cacheSizeCollectionThreshold ? (C("LruGarbageCollector", "Garbage collection skipped; disabled"), At.resolve(Er)) : this.getCacheSize(t2).next((n2) => n2 < this.params.cacheSizeCollectionThreshold ? (C("LruGarbageCollector", `Garbage collection skipped; Cache size ${n2} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), Er) : this.Un(t2, e));
  }
  getCacheSize(t2) {
    return this.$n.getCacheSize(t2);
  }
  Un(t2, e) {
    let n2, s, i, r2, o, c, a;
    const h = Date.now();
    return this.calculateTargetCount(t2, this.params.percentileToCollect).next((e2) => (e2 > this.params.maximumSequenceNumbersToCollect ? (C("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e2}`), s = this.params.maximumSequenceNumbersToCollect) : s = e2, r2 = Date.now(), this.nthSequenceNumber(t2, s))).next((s2) => (n2 = s2, o = Date.now(), this.removeTargets(t2, n2, e))).next((e2) => (i = e2, c = Date.now(), this.removeOrphanedDocuments(t2, n2))).next((t3) => {
      if (a = Date.now(), S() <= LogLevel.DEBUG) {
        C("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${r2 - h}ms
	Determined least recently used ${s} in ` + (o - r2) + `ms
	Removed ${i} targets in ` + (c - o) + `ms
	Removed ${t3} documents in ` + (a - c) + `ms
Total Duration: ${a - h}ms`);
      }
      return At.resolve({
        didRun: true,
        sequenceNumbersCollected: s,
        targetsRemoved: i,
        documentsRemoved: t3
      });
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr {
  constructor(t2, e) {
    this.db = t2, this.garbageCollector = function(t3, e2) {
      return new Br(t3, e2);
    }(this, e);
  }
  Bn(t2) {
    const e = this.qn(t2);
    return this.db.getTargetCache().getTargetCount(t2).next((t3) => e.next((e2) => t3 + e2));
  }
  qn(t2) {
    let e = 0;
    return this.Ln(t2, (t3) => {
      e++;
    }).next(() => e);
  }
  forEachTarget(t2, e) {
    return this.db.getTargetCache().forEachTarget(t2, e);
  }
  Ln(t2, e) {
    return this.Kn(t2, (t3, n2) => e(n2));
  }
  addReference(t2, e, n2) {
    return Ur(t2, n2);
  }
  removeReference(t2, e, n2) {
    return Ur(t2, n2);
  }
  removeTargets(t2, e, n2) {
    return this.db.getTargetCache().removeTargets(t2, e, n2);
  }
  markPotentiallyOrphaned(t2, e) {
    return Ur(t2, e);
  }
  Gn(t2, e) {
    return function(t3, e2) {
      let n2 = false;
      return Dr(t3).tt((s) => vr(t3, s, e2).next((t4) => (t4 && (n2 = true), At.resolve(!t4)))).next(() => n2);
    }(t2, e);
  }
  removeOrphanedDocuments(t2, e) {
    const n2 = this.db.getRemoteDocumentCache().newChangeBuffer(), s = [];
    let i = 0;
    return this.Kn(t2, (r2, o) => {
      if (o <= e) {
        const e2 = this.Gn(t2, r2).next((e3) => {
          if (!e3)
            return i++, n2.getEntry(t2, r2).next(() => (n2.removeEntry(r2, st.min()), Or(t2).delete([0, ri(r2.path)])));
        });
        s.push(e2);
      }
    }).next(() => At.waitFor(s)).next(() => n2.apply(t2)).next(() => i);
  }
  removeTarget(t2, e) {
    const n2 = e.withSequenceNumber(t2.currentSequenceNumber);
    return this.db.getTargetCache().updateTargetData(t2, n2);
  }
  updateLimboDocument(t2, e) {
    return Ur(t2, e);
  }
  Kn(t2, e) {
    const n2 = Or(t2);
    let s, i = Ot.at;
    return n2.Z({
      index: "documentTargetsIndex"
    }, ([t3, n3], { path: r2, sequenceNumber: o }) => {
      0 === t3 ? (i !== Ot.at && e(new ct(ci(s)), i), i = o, s = r2) : i = Ot.at;
    }).next(() => {
      i !== Ot.at && e(new ct(ci(s)), i);
    });
  }
  getCacheSize(t2) {
    return this.db.getRemoteDocumentCache().getSize(t2);
  }
}
function Ur(t2, e) {
  return Or(t2).put(
    function(t3, e2) {
      return {
        targetId: 0,
        path: ri(t3.path),
        sequenceNumber: e2
      };
    }(e, t2.currentSequenceNumber)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr {
  constructor() {
    this.changes = new es((t2) => t2.toString(), (t2, e) => t2.isEqual(e)), this.changesApplied = false;
  }
  addEntry(t2) {
    this.assertNotApplied(), this.changes.set(t2.key, t2);
  }
  removeEntry(t2, e) {
    this.assertNotApplied(), this.changes.set(t2, Se.newInvalidDocument(t2).setReadTime(e));
  }
  getEntry(t2, e) {
    this.assertNotApplied();
    const n2 = this.changes.get(e);
    return void 0 !== n2 ? At.resolve(n2) : this.getFromCache(t2, e);
  }
  getEntries(t2, e) {
    return this.getAllFromCache(t2, e);
  }
  apply(t2) {
    return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(t2);
  }
  assertNotApplied() {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr {
  constructor(t2) {
    this.It = t2;
  }
  setIndexManager(t2) {
    this.indexManager = t2;
  }
  addEntry(t2, e, n2) {
    return Wr(t2).put(n2);
  }
  removeEntry(t2, e, n2) {
    return Wr(t2).delete(
      function(t3, e2) {
        const n3 = t3.path.toArray();
        return [
          n3.slice(0, n3.length - 2),
          n3[n3.length - 2],
          Ui(e2),
          n3[n3.length - 1]
        ];
      }(e, n2)
    );
  }
  updateMetadata(t2, e) {
    return this.getMetadata(t2).next((n2) => (n2.byteSize += e, this.Qn(t2, n2)));
  }
  getEntry(t2, e) {
    let n2 = Se.newInvalidDocument(e);
    return Wr(t2).Z({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(zr(e))
    }, (t3, s) => {
      n2 = this.jn(e, s);
    }).next(() => n2);
  }
  Wn(t2, e) {
    let n2 = {
      size: 0,
      document: Se.newInvalidDocument(e)
    };
    return Wr(t2).Z({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(zr(e))
    }, (t3, s) => {
      n2 = {
        document: this.jn(e, s),
        size: br(s)
      };
    }).next(() => n2);
  }
  getEntries(t2, e) {
    let n2 = ss();
    return this.zn(t2, e, (t3, e2) => {
      const s = this.jn(t3, e2);
      n2 = n2.insert(t3, s);
    }).next(() => n2);
  }
  Hn(t2, e) {
    let n2 = ss(), s = new Bt(ct.comparator);
    return this.zn(t2, e, (t3, e2) => {
      const i = this.jn(t3, e2);
      n2 = n2.insert(t3, i), s = s.insert(t3, br(e2));
    }).next(() => ({
      documents: n2,
      Jn: s
    }));
  }
  zn(t2, e, n2) {
    if (e.isEmpty())
      return At.resolve();
    let s = new qt(Jr);
    e.forEach((t3) => s = s.add(t3));
    const i = IDBKeyRange.bound(zr(s.first()), zr(s.last())), r2 = s.getIterator();
    let o = r2.getNext();
    return Wr(t2).Z({
      index: "documentKeyIndex",
      range: i
    }, (t3, e2, s2) => {
      const i2 = ct.fromSegments([...e2.prefixPath, e2.collectionGroup, e2.documentId]);
      for (; o && Jr(o, i2) < 0; )
        n2(o, null), o = r2.getNext();
      o && o.isEqual(i2) && (n2(o, e2), o = r2.hasNext() ? r2.getNext() : null), o ? s2.j(zr(o)) : s2.done();
    }).next(() => {
      for (; o; )
        n2(o, null), o = r2.hasNext() ? r2.getNext() : null;
    });
  }
  getAllFromCollection(t2, e, n2) {
    const s = [e.popLast().toArray(), e.lastSegment(), Ui(n2.readTime), n2.documentKey.path.isEmpty() ? "" : n2.documentKey.path.lastSegment()], i = [e.popLast().toArray(), e.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""];
    return Wr(t2).W(IDBKeyRange.bound(s, i, true)).next((t3) => {
      let e2 = ss();
      for (const n3 of t3) {
        const t4 = this.jn(ct.fromSegments(n3.prefixPath.concat(n3.collectionGroup, n3.documentId)), n3);
        e2 = e2.insert(t4.key, t4);
      }
      return e2;
    });
  }
  getAllFromCollectionGroup(t2, e, n2, s) {
    let i = ss();
    const r2 = Hr(e, n2), o = Hr(e, yt.max());
    return Wr(t2).Z({
      index: "collectionGroupIndex",
      range: IDBKeyRange.bound(r2, o, true)
    }, (t3, e2, n3) => {
      const r3 = this.jn(ct.fromSegments(e2.prefixPath.concat(e2.collectionGroup, e2.documentId)), e2);
      i = i.insert(r3.key, r3), i.size === s && n3.done();
    }).next(() => i);
  }
  newChangeBuffer(t2) {
    return new Qr(this, !!t2 && t2.trackRemovals);
  }
  getSize(t2) {
    return this.getMetadata(t2).next((t3) => t3.byteSize);
  }
  getMetadata(t2) {
    return jr(t2).get("remoteDocumentGlobalKey").next((t3) => (M(!!t3), t3));
  }
  Qn(t2, e) {
    return jr(t2).put("remoteDocumentGlobalKey", e);
  }
  jn(t2, e) {
    if (e) {
      const t3 = Bi(this.It, e);
      if (!(t3.isNoDocument() && t3.version.isEqual(st.min())))
        return t3;
    }
    return Se.newInvalidDocument(t2);
  }
}
function Gr(t2) {
  return new Kr(t2);
}
class Qr extends qr {
  constructor(t2, e) {
    super(), this.Yn = t2, this.trackRemovals = e, this.Xn = new es((t3) => t3.toString(), (t3, e2) => t3.isEqual(e2));
  }
  applyChanges(t2) {
    const e = [];
    let n2 = 0, s = new qt((t3, e2) => Z(t3.canonicalString(), e2.canonicalString()));
    return this.changes.forEach((i, r2) => {
      const o = this.Xn.get(i);
      if (e.push(this.Yn.removeEntry(t2, i, o.readTime)), r2.isValidDocument()) {
        const u2 = Li(this.Yn.It, r2);
        s = s.add(i.path.popLast());
        const c = br(u2);
        n2 += c - o.size, e.push(this.Yn.addEntry(t2, i, u2));
      } else if (n2 -= o.size, this.trackRemovals) {
        const n3 = Li(this.Yn.It, r2.convertToNoDocument(st.min()));
        e.push(this.Yn.addEntry(t2, i, n3));
      }
    }), s.forEach((n3) => {
      e.push(this.Yn.indexManager.addToCollectionParentIndex(t2, n3));
    }), e.push(this.Yn.updateMetadata(t2, n2)), At.waitFor(e);
  }
  getFromCache(t2, e) {
    return this.Yn.Wn(t2, e).next((t3) => (this.Xn.set(e, {
      size: t3.size,
      readTime: t3.document.readTime
    }), t3.document));
  }
  getAllFromCache(t2, e) {
    return this.Yn.Hn(t2, e).next(({ documents: t3, Jn: e2 }) => (e2.forEach((e3, n2) => {
      this.Xn.set(e3, {
        size: n2,
        readTime: t3.get(e3).readTime
      });
    }), t3));
  }
}
function jr(t2) {
  return Ni(t2, "remoteDocumentGlobal");
}
function Wr(t2) {
  return Ni(t2, "remoteDocumentsV14");
}
function zr(t2) {
  const e = t2.path.toArray();
  return [
    e.slice(0, e.length - 2),
    e[e.length - 2],
    e[e.length - 1]
  ];
}
function Hr(t2, e) {
  const n2 = e.documentKey.path.toArray();
  return [
    t2,
    Ui(e.readTime),
    n2.slice(0, n2.length - 2),
    n2.length > 0 ? n2[n2.length - 1] : ""
  ];
}
function Jr(t2, e) {
  const n2 = t2.path.toArray(), s = e.path.toArray();
  let i = 0;
  for (let t3 = 0; t3 < n2.length - 2 && t3 < s.length - 2; ++t3)
    if (i = Z(n2[t3], s[t3]), i)
      return i;
  return i = Z(n2.length, s.length), i || (i = Z(n2[n2.length - 2], s[s.length - 2]), i || Z(n2[n2.length - 1], s[s.length - 1]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr {
  constructor(t2, e) {
    this.overlayedDocument = t2, this.mutatedFields = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr {
  constructor(t2, e, n2, s) {
    this.remoteDocumentCache = t2, this.mutationQueue = e, this.documentOverlayCache = n2, this.indexManager = s;
  }
  getDocument(t2, e) {
    let n2 = null;
    return this.documentOverlayCache.getOverlay(t2, e).next((s) => (n2 = s, this.getBaseDocument(t2, e, n2))).next((t3) => (null !== n2 && Ln(n2.mutation, t3, Qt.empty(), nt.now()), t3));
  }
  getDocuments(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.getLocalViewOfDocuments(t2, e2, fs()).next(() => e2));
  }
  getLocalViewOfDocuments(t2, e, n2 = fs()) {
    const s = us();
    return this.populateOverlays(t2, s, e).next(() => this.computeViews(t2, e, s, n2).next((t3) => {
      let e2 = rs();
      return t3.forEach((t4, n3) => {
        e2 = e2.insert(t4, n3.overlayedDocument);
      }), e2;
    }));
  }
  getOverlayedDocuments(t2, e) {
    const n2 = us();
    return this.populateOverlays(t2, n2, e).next(() => this.computeViews(t2, e, n2, fs()));
  }
  populateOverlays(t2, e, n2) {
    const s = [];
    return n2.forEach((t3) => {
      e.has(t3) || s.push(t3);
    }), this.documentOverlayCache.getOverlays(t2, s).next((t3) => {
      t3.forEach((t4, n3) => {
        e.set(t4, n3);
      });
    });
  }
  computeViews(t2, e, n2, s) {
    let i = ss();
    const r2 = as(), o = as();
    return e.forEach((t3, e2) => {
      const o2 = n2.get(e2.key);
      s.has(e2.key) && (void 0 === o2 || o2.mutation instanceof Gn) ? i = i.insert(e2.key, e2) : void 0 !== o2 && (r2.set(e2.key, o2.mutation.getFieldMask()), Ln(o2.mutation, e2, o2.mutation.getFieldMask(), nt.now()));
    }), this.recalculateAndSaveOverlays(t2, i).next((t3) => (t3.forEach((t4, e2) => r2.set(t4, e2)), e.forEach((t4, e2) => {
      var n3;
      return o.set(t4, new Yr(e2, null !== (n3 = r2.get(t4)) && void 0 !== n3 ? n3 : null));
    }), o));
  }
  recalculateAndSaveOverlays(t2, e) {
    const n2 = as();
    let s = new Bt((t3, e2) => t3 - e2), i = fs();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t2, e).next((t3) => {
      for (const i2 of t3)
        i2.keys().forEach((t4) => {
          const r2 = e.get(t4);
          if (null === r2)
            return;
          let o = n2.get(t4) || Qt.empty();
          o = i2.applyToLocalView(r2, o), n2.set(t4, o);
          const u2 = (s.get(i2.batchId) || fs()).add(t4);
          s = s.insert(i2.batchId, u2);
        });
    }).next(() => {
      const r2 = [], o = s.getReverseIterator();
      for (; o.hasNext(); ) {
        const s2 = o.getNext(), u2 = s2.key, c = s2.value, a = cs();
        c.forEach((t3) => {
          if (!i.has(t3)) {
            const s3 = $n(e.get(t3), n2.get(t3));
            null !== s3 && a.set(t3, s3), i = i.add(t3);
          }
        }), r2.push(this.documentOverlayCache.saveOverlays(t2, u2, a));
      }
      return At.waitFor(r2);
    }).next(() => n2);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.recalculateAndSaveOverlays(t2, e2));
  }
  getDocumentsMatchingQuery(t2, e, n2) {
    return function(t3) {
      return ct.isDocumentKey(t3.path) && null === t3.collectionGroup && 0 === t3.filters.length;
    }(e) ? this.getDocumentsMatchingDocumentQuery(t2, e.path) : on(e) ? this.getDocumentsMatchingCollectionGroupQuery(t2, e, n2) : this.getDocumentsMatchingCollectionQuery(t2, e, n2);
  }
  getNextDocuments(t2, e, n2, s) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(t2, e, n2, s).next((i) => {
      const r2 = s - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t2, e, n2.largestBatchId, s - i.size) : At.resolve(us());
      let o = -1, u2 = i;
      return r2.next((e2) => At.forEach(e2, (e3, n3) => (o < n3.largestBatchId && (o = n3.largestBatchId), i.get(e3) ? At.resolve() : this.getBaseDocument(t2, e3, n3).next((t3) => {
        u2 = u2.insert(e3, t3);
      }))).next(() => this.populateOverlays(t2, e2, i)).next(() => this.computeViews(t2, u2, e2, fs())).next((t3) => ({
        batchId: o,
        changes: os(t3)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(t2, e) {
    return this.getDocument(t2, new ct(e)).next((t3) => {
      let e2 = rs();
      return t3.isFoundDocument() && (e2 = e2.insert(t3.key, t3)), e2;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t2, e, n2) {
    const s = e.collectionGroup;
    let i = rs();
    return this.indexManager.getCollectionParents(t2, s).next((r2) => At.forEach(r2, (r3) => {
      const o = function(t3, e2) {
        return new Ze(
          e2,
          null,
          t3.explicitOrderBy.slice(),
          t3.filters.slice(),
          t3.limit,
          t3.limitType,
          t3.startAt,
          t3.endAt
        );
      }(e, r3.child(s));
      return this.getDocumentsMatchingCollectionQuery(t2, o, n2).next((t3) => {
        t3.forEach((t4, e2) => {
          i = i.insert(t4, e2);
        });
      });
    }).next(() => i));
  }
  getDocumentsMatchingCollectionQuery(t2, e, n2) {
    let s;
    return this.remoteDocumentCache.getAllFromCollection(t2, e.path, n2).next((i) => (s = i, this.documentOverlayCache.getOverlaysForCollection(t2, e.path, n2.largestBatchId))).next((t3) => {
      t3.forEach((t4, e2) => {
        const n4 = e2.getKey();
        null === s.get(n4) && (s = s.insert(n4, Se.newInvalidDocument(n4)));
      });
      let n3 = rs();
      return s.forEach((s2, i) => {
        const r2 = t3.get(s2);
        void 0 !== r2 && Ln(r2.mutation, i, Qt.empty(), nt.now()), dn(e, i) && (n3 = n3.insert(s2, i));
      }), n3;
    });
  }
  getBaseDocument(t2, e, n2) {
    return null === n2 || 1 === n2.mutation.type ? this.remoteDocumentCache.getEntry(t2, e) : At.resolve(Se.newInvalidDocument(e));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zr {
  constructor(t2) {
    this.It = t2, this.Zn = /* @__PURE__ */ new Map(), this.ts = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(t2, e) {
    return At.resolve(this.Zn.get(e));
  }
  saveBundleMetadata(t2, e) {
    var n2;
    return this.Zn.set(e.id, {
      id: (n2 = e).id,
      version: n2.version,
      createTime: Ds(n2.createTime)
    }), At.resolve();
  }
  getNamedQuery(t2, e) {
    return At.resolve(this.ts.get(e));
  }
  saveNamedQuery(t2, e) {
    return this.ts.set(e.name, function(t3) {
      return {
        name: t3.name,
        query: Wi(t3.bundledQuery),
        readTime: Ds(t3.readTime)
      };
    }(e)), At.resolve();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to {
  constructor() {
    this.overlays = new Bt(ct.comparator), this.es = /* @__PURE__ */ new Map();
  }
  getOverlay(t2, e) {
    return At.resolve(this.overlays.get(e));
  }
  getOverlays(t2, e) {
    const n2 = us();
    return At.forEach(e, (e2) => this.getOverlay(t2, e2).next((t3) => {
      null !== t3 && n2.set(e2, t3);
    })).next(() => n2);
  }
  saveOverlays(t2, e, n2) {
    return n2.forEach((n3, s) => {
      this.ue(t2, e, s);
    }), At.resolve();
  }
  removeOverlaysForBatchId(t2, e, n2) {
    const s = this.es.get(n2);
    return void 0 !== s && (s.forEach((t3) => this.overlays = this.overlays.remove(t3)), this.es.delete(n2)), At.resolve();
  }
  getOverlaysForCollection(t2, e, n2) {
    const s = us(), i = e.length + 1, r2 = new ct(e.child("")), o = this.overlays.getIteratorFrom(r2);
    for (; o.hasNext(); ) {
      const t3 = o.getNext().value, r3 = t3.getKey();
      if (!e.isPrefixOf(r3.path))
        break;
      r3.path.length === i && (t3.largestBatchId > n2 && s.set(t3.getKey(), t3));
    }
    return At.resolve(s);
  }
  getOverlaysForCollectionGroup(t2, e, n2, s) {
    let i = new Bt((t3, e2) => t3 - e2);
    const r2 = this.overlays.getIterator();
    for (; r2.hasNext(); ) {
      const t3 = r2.getNext().value;
      if (t3.getKey().getCollectionGroup() === e && t3.largestBatchId > n2) {
        let e2 = i.get(t3.largestBatchId);
        null === e2 && (e2 = us(), i = i.insert(t3.largestBatchId, e2)), e2.set(t3.getKey(), t3);
      }
    }
    const o = us(), u2 = i.getIterator();
    for (; u2.hasNext(); ) {
      if (u2.getNext().value.forEach((t3, e2) => o.set(t3, e2)), o.size() >= s)
        break;
    }
    return At.resolve(o);
  }
  ue(t2, e, n2) {
    const s = this.overlays.get(n2.key);
    if (null !== s) {
      const t3 = this.es.get(s.largestBatchId).delete(n2.key);
      this.es.set(s.largestBatchId, t3);
    }
    this.overlays = this.overlays.insert(n2.key, new Mi(e, n2));
    let i = this.es.get(e);
    void 0 === i && (i = fs(), this.es.set(e, i)), this.es.set(e, i.add(n2.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo {
  constructor() {
    this.ns = new qt(no.ss), this.rs = new qt(no.os);
  }
  isEmpty() {
    return this.ns.isEmpty();
  }
  addReference(t2, e) {
    const n2 = new no(t2, e);
    this.ns = this.ns.add(n2), this.rs = this.rs.add(n2);
  }
  us(t2, e) {
    t2.forEach((t3) => this.addReference(t3, e));
  }
  removeReference(t2, e) {
    this.cs(new no(t2, e));
  }
  hs(t2, e) {
    t2.forEach((t3) => this.removeReference(t3, e));
  }
  ls(t2) {
    const e = new ct(new rt([])), n2 = new no(e, t2), s = new no(e, t2 + 1), i = [];
    return this.rs.forEachInRange([n2, s], (t3) => {
      this.cs(t3), i.push(t3.key);
    }), i;
  }
  fs() {
    this.ns.forEach((t2) => this.cs(t2));
  }
  cs(t2) {
    this.ns = this.ns.delete(t2), this.rs = this.rs.delete(t2);
  }
  ds(t2) {
    const e = new ct(new rt([])), n2 = new no(e, t2), s = new no(e, t2 + 1);
    let i = fs();
    return this.rs.forEachInRange([n2, s], (t3) => {
      i = i.add(t3.key);
    }), i;
  }
  containsKey(t2) {
    const e = new no(t2, 0), n2 = this.ns.firstAfterOrEqual(e);
    return null !== n2 && t2.isEqual(n2.key);
  }
}
class no {
  constructor(t2, e) {
    this.key = t2, this._s = e;
  }
  static ss(t2, e) {
    return ct.comparator(t2.key, e.key) || Z(t2._s, e._s);
  }
  static os(t2, e) {
    return Z(t2._s, e._s) || ct.comparator(t2.key, e.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so {
  constructor(t2, e) {
    this.indexManager = t2, this.referenceDelegate = e, this.mutationQueue = [], this.ws = 1, this.gs = new qt(no.ss);
  }
  checkEmpty(t2) {
    return At.resolve(0 === this.mutationQueue.length);
  }
  addMutationBatch(t2, e, n2, s) {
    const i = this.ws;
    this.ws++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const r2 = new ki(i, e, n2, s);
    this.mutationQueue.push(r2);
    for (const e2 of s)
      this.gs = this.gs.add(new no(e2.key, i)), this.indexManager.addToCollectionParentIndex(t2, e2.key.path.popLast());
    return At.resolve(r2);
  }
  lookupMutationBatch(t2, e) {
    return At.resolve(this.ys(e));
  }
  getNextMutationBatchAfterBatchId(t2, e) {
    const n2 = e + 1, s = this.ps(n2), i = s < 0 ? 0 : s;
    return At.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return At.resolve(0 === this.mutationQueue.length ? -1 : this.ws - 1);
  }
  getAllMutationBatches(t2) {
    return At.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t2, e) {
    const n2 = new no(e, 0), s = new no(e, Number.POSITIVE_INFINITY), i = [];
    return this.gs.forEachInRange([n2, s], (t3) => {
      const e2 = this.ys(t3._s);
      i.push(e2);
    }), At.resolve(i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t2, e) {
    let n2 = new qt(Z);
    return e.forEach((t3) => {
      const e2 = new no(t3, 0), s = new no(t3, Number.POSITIVE_INFINITY);
      this.gs.forEachInRange([e2, s], (t4) => {
        n2 = n2.add(t4._s);
      });
    }), At.resolve(this.Is(n2));
  }
  getAllMutationBatchesAffectingQuery(t2, e) {
    const n2 = e.path, s = n2.length + 1;
    let i = n2;
    ct.isDocumentKey(i) || (i = i.child(""));
    const r2 = new no(new ct(i), 0);
    let o = new qt(Z);
    return this.gs.forEachWhile((t3) => {
      const e2 = t3.key.path;
      return !!n2.isPrefixOf(e2) && (e2.length === s && (o = o.add(t3._s)), true);
    }, r2), At.resolve(this.Is(o));
  }
  Is(t2) {
    const e = [];
    return t2.forEach((t3) => {
      const n2 = this.ys(t3);
      null !== n2 && e.push(n2);
    }), e;
  }
  removeMutationBatch(t2, e) {
    M(0 === this.Ts(e.batchId, "removed")), this.mutationQueue.shift();
    let n2 = this.gs;
    return At.forEach(e.mutations, (s) => {
      const i = new no(s.key, e.batchId);
      return n2 = n2.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t2, s.key);
    }).next(() => {
      this.gs = n2;
    });
  }
  An(t2) {
  }
  containsKey(t2, e) {
    const n2 = new no(e, 0), s = this.gs.firstAfterOrEqual(n2);
    return At.resolve(e.isEqual(s && s.key));
  }
  performConsistencyCheck(t2) {
    return this.mutationQueue.length, At.resolve();
  }
  Ts(t2, e) {
    return this.ps(t2);
  }
  ps(t2) {
    if (0 === this.mutationQueue.length)
      return 0;
    return t2 - this.mutationQueue[0].batchId;
  }
  ys(t2) {
    const e = this.ps(t2);
    if (e < 0 || e >= this.mutationQueue.length)
      return null;
    return this.mutationQueue[e];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io {
  constructor(t2) {
    this.Es = t2, this.docs = new Bt(ct.comparator), this.size = 0;
  }
  setIndexManager(t2) {
    this.indexManager = t2;
  }
  addEntry(t2, e) {
    const n2 = e.key, s = this.docs.get(n2), i = s ? s.size : 0, r2 = this.Es(e);
    return this.docs = this.docs.insert(n2, {
      document: e.mutableCopy(),
      size: r2
    }), this.size += r2 - i, this.indexManager.addToCollectionParentIndex(t2, n2.path.popLast());
  }
  removeEntry(t2) {
    const e = this.docs.get(t2);
    e && (this.docs = this.docs.remove(t2), this.size -= e.size);
  }
  getEntry(t2, e) {
    const n2 = this.docs.get(e);
    return At.resolve(n2 ? n2.document.mutableCopy() : Se.newInvalidDocument(e));
  }
  getEntries(t2, e) {
    let n2 = ss();
    return e.forEach((t3) => {
      const e2 = this.docs.get(t3);
      n2 = n2.insert(t3, e2 ? e2.document.mutableCopy() : Se.newInvalidDocument(t3));
    }), At.resolve(n2);
  }
  getAllFromCollection(t2, e, n2) {
    let s = ss();
    const i = new ct(e.child("")), r2 = this.docs.getIteratorFrom(i);
    for (; r2.hasNext(); ) {
      const { key: t3, value: { document: i2 } } = r2.getNext();
      if (!e.isPrefixOf(t3.path))
        break;
      t3.path.length > e.length + 1 || (pt(gt(i2), n2) <= 0 || (s = s.insert(i2.key, i2.mutableCopy())));
    }
    return At.resolve(s);
  }
  getAllFromCollectionGroup(t2, e, n2, s) {
    O();
  }
  As(t2, e) {
    return At.forEach(this.docs, (t3) => e(t3));
  }
  newChangeBuffer(t2) {
    return new ro(this);
  }
  getSize(t2) {
    return At.resolve(this.size);
  }
}
class ro extends qr {
  constructor(t2) {
    super(), this.Yn = t2;
  }
  applyChanges(t2) {
    const e = [];
    return this.changes.forEach((n2, s) => {
      s.isValidDocument() ? e.push(this.Yn.addEntry(t2, s)) : this.Yn.removeEntry(n2);
    }), At.waitFor(e);
  }
  getFromCache(t2, e) {
    return this.Yn.getEntry(t2, e);
  }
  getAllFromCache(t2, e) {
    return this.Yn.getEntries(t2, e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oo {
  constructor(t2) {
    this.persistence = t2, this.Rs = new es((t3) => xe(t3), ke), this.lastRemoteSnapshotVersion = st.min(), this.highestTargetId = 0, this.bs = 0, this.Ps = new eo(), this.targetCount = 0, this.vs = Cr.Pn();
  }
  forEachTarget(t2, e) {
    return this.Rs.forEach((t3, n2) => e(n2)), At.resolve();
  }
  getLastRemoteSnapshotVersion(t2) {
    return At.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t2) {
    return At.resolve(this.bs);
  }
  allocateTargetId(t2) {
    return this.highestTargetId = this.vs.next(), At.resolve(this.highestTargetId);
  }
  setTargetsMetadata(t2, e, n2) {
    return n2 && (this.lastRemoteSnapshotVersion = n2), e > this.bs && (this.bs = e), At.resolve();
  }
  Dn(t2) {
    this.Rs.set(t2.target, t2);
    const e = t2.targetId;
    e > this.highestTargetId && (this.vs = new Cr(e), this.highestTargetId = e), t2.sequenceNumber > this.bs && (this.bs = t2.sequenceNumber);
  }
  addTargetData(t2, e) {
    return this.Dn(e), this.targetCount += 1, At.resolve();
  }
  updateTargetData(t2, e) {
    return this.Dn(e), At.resolve();
  }
  removeTargetData(t2, e) {
    return this.Rs.delete(e.target), this.Ps.ls(e.targetId), this.targetCount -= 1, At.resolve();
  }
  removeTargets(t2, e, n2) {
    let s = 0;
    const i = [];
    return this.Rs.forEach((r2, o) => {
      o.sequenceNumber <= e && null === n2.get(o.targetId) && (this.Rs.delete(r2), i.push(this.removeMatchingKeysForTargetId(t2, o.targetId)), s++);
    }), At.waitFor(i).next(() => s);
  }
  getTargetCount(t2) {
    return At.resolve(this.targetCount);
  }
  getTargetData(t2, e) {
    const n2 = this.Rs.get(e) || null;
    return At.resolve(n2);
  }
  addMatchingKeys(t2, e, n2) {
    return this.Ps.us(e, n2), At.resolve();
  }
  removeMatchingKeys(t2, e, n2) {
    this.Ps.hs(e, n2);
    const s = this.persistence.referenceDelegate, i = [];
    return s && e.forEach((e2) => {
      i.push(s.markPotentiallyOrphaned(t2, e2));
    }), At.waitFor(i);
  }
  removeMatchingKeysForTargetId(t2, e) {
    return this.Ps.ls(e), At.resolve();
  }
  getMatchingKeysForTargetId(t2, e) {
    const n2 = this.Ps.ds(e);
    return At.resolve(n2);
  }
  containsKey(t2, e) {
    return At.resolve(this.Ps.containsKey(e));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo {
  constructor(t2, e) {
    this.Vs = {}, this.overlays = {}, this.Ss = new Ot(0), this.Ds = false, this.Ds = true, this.referenceDelegate = t2(this), this.Cs = new oo(this);
    this.indexManager = new dr(), this.remoteDocumentCache = function(t3) {
      return new io(t3);
    }((t3) => this.referenceDelegate.xs(t3)), this.It = new $i(e), this.Ns = new Zr(this.It);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.Ds = false, Promise.resolve();
  }
  get started() {
    return this.Ds;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(t2) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t2) {
    let e = this.overlays[t2.toKey()];
    return e || (e = new to(), this.overlays[t2.toKey()] = e), e;
  }
  getMutationQueue(t2, e) {
    let n2 = this.Vs[t2.toKey()];
    return n2 || (n2 = new so(e, this.referenceDelegate), this.Vs[t2.toKey()] = n2), n2;
  }
  getTargetCache() {
    return this.Cs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Ns;
  }
  runTransaction(t2, e, n2) {
    C("MemoryPersistence", "Starting transaction:", t2);
    const s = new co(this.Ss.next());
    return this.referenceDelegate.ks(), n2(s).next((t3) => this.referenceDelegate.Os(s).next(() => t3)).toPromise().then((t3) => (s.raiseOnCommittedEvent(), t3));
  }
  Ms(t2, e) {
    return At.or(Object.values(this.Vs).map((n2) => () => n2.containsKey(t2, e)));
  }
}
class co extends Tt {
  constructor(t2) {
    super(), this.currentSequenceNumber = t2;
  }
}
class ao {
  constructor(t2) {
    this.persistence = t2, this.Fs = new eo(), this.$s = null;
  }
  static Bs(t2) {
    return new ao(t2);
  }
  get Ls() {
    if (this.$s)
      return this.$s;
    throw O();
  }
  addReference(t2, e, n2) {
    return this.Fs.addReference(n2, e), this.Ls.delete(n2.toString()), At.resolve();
  }
  removeReference(t2, e, n2) {
    return this.Fs.removeReference(n2, e), this.Ls.add(n2.toString()), At.resolve();
  }
  markPotentiallyOrphaned(t2, e) {
    return this.Ls.add(e.toString()), At.resolve();
  }
  removeTarget(t2, e) {
    this.Fs.ls(e.targetId).forEach((t3) => this.Ls.add(t3.toString()));
    const n2 = this.persistence.getTargetCache();
    return n2.getMatchingKeysForTargetId(t2, e.targetId).next((t3) => {
      t3.forEach((t4) => this.Ls.add(t4.toString()));
    }).next(() => n2.removeTargetData(t2, e));
  }
  ks() {
    this.$s = /* @__PURE__ */ new Set();
  }
  Os(t2) {
    const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return At.forEach(this.Ls, (n2) => {
      const s = ct.fromPath(n2);
      return this.Us(t2, s).next((t3) => {
        t3 || e.removeEntry(s, st.min());
      });
    }).next(() => (this.$s = null, e.apply(t2)));
  }
  updateLimboDocument(t2, e) {
    return this.Us(t2, e).next((t3) => {
      t3 ? this.Ls.delete(e.toString()) : this.Ls.add(e.toString());
    });
  }
  xs(t2) {
    return 0;
  }
  Us(t2, e) {
    return At.or([() => At.resolve(this.Fs.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t2, e), () => this.persistence.Ms(t2, e)]);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ho {
  constructor(t2) {
    this.It = t2;
  }
  $(t2, e, n2, s) {
    const i = new Rt("createOrUpgrade", e);
    n2 < 1 && s >= 1 && (function(t3) {
      t3.createObjectStore("owner");
    }(t2), function(t3) {
      t3.createObjectStore("mutationQueues", {
        keyPath: "userId"
      });
      t3.createObjectStore("mutations", {
        keyPath: "batchId",
        autoIncrement: true
      }).createIndex("userMutationsIndex", ai, {
        unique: true
      }), t3.createObjectStore("documentMutations");
    }(t2), lo(t2), function(t3) {
      t3.createObjectStore("remoteDocuments");
    }(t2));
    let r2 = At.resolve();
    return n2 < 3 && s >= 3 && (0 !== n2 && (!function(t3) {
      t3.deleteObjectStore("targetDocuments"), t3.deleteObjectStore("targets"), t3.deleteObjectStore("targetGlobal");
    }(t2), lo(t2)), r2 = r2.next(() => function(t3) {
      const e2 = t3.store("targetGlobal"), n3 = {
        highestTargetId: 0,
        highestListenSequenceNumber: 0,
        lastRemoteSnapshotVersion: st.min().toTimestamp(),
        targetCount: 0
      };
      return e2.put("targetGlobalKey", n3);
    }(i))), n2 < 4 && s >= 4 && (0 !== n2 && (r2 = r2.next(() => function(t3, e2) {
      return e2.store("mutations").W().next((n3) => {
        t3.deleteObjectStore("mutations");
        t3.createObjectStore("mutations", {
          keyPath: "batchId",
          autoIncrement: true
        }).createIndex("userMutationsIndex", ai, {
          unique: true
        });
        const s2 = e2.store("mutations"), i2 = n3.map((t4) => s2.put(t4));
        return At.waitFor(i2);
      });
    }(t2, i))), r2 = r2.next(() => {
      !function(t3) {
        t3.createObjectStore("clientMetadata", {
          keyPath: "clientId"
        });
      }(t2);
    })), n2 < 5 && s >= 5 && (r2 = r2.next(() => this.qs(i))), n2 < 6 && s >= 6 && (r2 = r2.next(() => (function(t3) {
      t3.createObjectStore("remoteDocumentGlobal");
    }(t2), this.Ks(i)))), n2 < 7 && s >= 7 && (r2 = r2.next(() => this.Gs(i))), n2 < 8 && s >= 8 && (r2 = r2.next(() => this.Qs(t2, i))), n2 < 9 && s >= 9 && (r2 = r2.next(() => {
      !function(t3) {
        t3.objectStoreNames.contains("remoteDocumentChanges") && t3.deleteObjectStore("remoteDocumentChanges");
      }(t2);
    })), n2 < 10 && s >= 10 && (r2 = r2.next(() => this.js(i))), n2 < 11 && s >= 11 && (r2 = r2.next(() => {
      !function(t3) {
        t3.createObjectStore("bundles", {
          keyPath: "bundleId"
        });
      }(t2), function(t3) {
        t3.createObjectStore("namedQueries", {
          keyPath: "name"
        });
      }(t2);
    })), n2 < 12 && s >= 12 && (r2 = r2.next(() => {
      !function(t3) {
        const e2 = t3.createObjectStore("documentOverlays", {
          keyPath: Ri
        });
        e2.createIndex("collectionPathOverlayIndex", bi, {
          unique: false
        }), e2.createIndex("collectionGroupOverlayIndex", Pi, {
          unique: false
        });
      }(t2);
    })), n2 < 13 && s >= 13 && (r2 = r2.next(() => function(t3) {
      const e2 = t3.createObjectStore("remoteDocumentsV14", {
        keyPath: di
      });
      e2.createIndex("documentKeyIndex", _i), e2.createIndex("collectionGroupIndex", wi);
    }(t2)).next(() => this.Ws(t2, i)).next(() => t2.deleteObjectStore("remoteDocuments"))), n2 < 14 && s >= 14 && (r2 = r2.next(() => this.zs(t2, i))), n2 < 15 && s >= 15 && (r2 = r2.next(() => function(t3) {
      t3.createObjectStore("indexConfiguration", {
        keyPath: "indexId",
        autoIncrement: true
      }).createIndex("collectionGroupIndex", "collectionGroup", {
        unique: false
      });
      t3.createObjectStore("indexState", {
        keyPath: Ii
      }).createIndex("sequenceNumberIndex", Ti, {
        unique: false
      });
      t3.createObjectStore("indexEntries", {
        keyPath: Ei
      }).createIndex("documentKeyIndex", Ai, {
        unique: false
      });
    }(t2))), r2;
  }
  Ks(t2) {
    let e = 0;
    return t2.store("remoteDocuments").Z((t3, n2) => {
      e += br(n2);
    }).next(() => {
      const n2 = {
        byteSize: e
      };
      return t2.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey", n2);
    });
  }
  qs(t2) {
    const e = t2.store("mutationQueues"), n2 = t2.store("mutations");
    return e.W().next((e2) => At.forEach(e2, (e3) => {
      const s = IDBKeyRange.bound([e3.userId, -1], [e3.userId, e3.lastAcknowledgedBatchId]);
      return n2.W("userMutationsIndex", s).next((n3) => At.forEach(n3, (n4) => {
        M(n4.userId === e3.userId);
        const s2 = Gi(this.It, n4);
        return Rr(t2, e3.userId, s2).next(() => {
        });
      }));
    }));
  }
  Gs(t2) {
    const e = t2.store("targetDocuments"), n2 = t2.store("remoteDocuments");
    return t2.store("targetGlobal").get("targetGlobalKey").next((t3) => {
      const s = [];
      return n2.Z((n3, i) => {
        const r2 = new rt(n3), o = function(t4) {
          return [0, ri(t4)];
        }(r2);
        s.push(e.get(o).next((n4) => n4 ? At.resolve() : ((n5) => e.put({
          targetId: 0,
          path: ri(n5),
          sequenceNumber: t3.highestListenSequenceNumber
        }))(r2)));
      }).next(() => At.waitFor(s));
    });
  }
  Qs(t2, e) {
    t2.createObjectStore("collectionParents", {
      keyPath: pi
    });
    const n2 = e.store("collectionParents"), s = new _r(), i = (t3) => {
      if (s.add(t3)) {
        const e2 = t3.lastSegment(), s2 = t3.popLast();
        return n2.put({
          collectionId: e2,
          parent: ri(s2)
        });
      }
    };
    return e.store("remoteDocuments").Z({
      X: true
    }, (t3, e2) => {
      const n3 = new rt(t3);
      return i(n3.popLast());
    }).next(() => e.store("documentMutations").Z({
      X: true
    }, ([t3, e2, n3], s2) => {
      const r2 = ci(e2);
      return i(r2.popLast());
    }));
  }
  js(t2) {
    const e = t2.store("targets");
    return e.Z((t3, n2) => {
      const s = Qi(n2), i = ji(this.It, s);
      return e.put(i);
    });
  }
  Ws(t2, e) {
    const n2 = e.store("remoteDocuments"), s = [];
    return n2.Z((t3, n3) => {
      const i = e.store("remoteDocumentsV14"), r2 = (o = n3, o.document ? new ct(rt.fromString(o.document.name).popFirst(5)) : o.noDocument ? ct.fromSegments(o.noDocument.path) : o.unknownDocument ? ct.fromSegments(o.unknownDocument.path) : O()).path.toArray();
      var o;
      /**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
      const u2 = {
        prefixPath: r2.slice(0, r2.length - 2),
        collectionGroup: r2[r2.length - 2],
        documentId: r2[r2.length - 1],
        readTime: n3.readTime || [0, 0],
        unknownDocument: n3.unknownDocument,
        noDocument: n3.noDocument,
        document: n3.document,
        hasCommittedMutations: !!n3.hasCommittedMutations
      };
      s.push(i.put(u2));
    }).next(() => At.waitFor(s));
  }
  zs(t2, e) {
    const n2 = e.store("mutations"), s = Gr(this.It), i = new uo(ao.Bs, this.It.re);
    return n2.W().next((t3) => {
      const n3 = /* @__PURE__ */ new Map();
      return t3.forEach((t4) => {
        var e2;
        let s2 = null !== (e2 = n3.get(t4.userId)) && void 0 !== e2 ? e2 : fs();
        Gi(this.It, t4).keys().forEach((t5) => s2 = s2.add(t5)), n3.set(t4.userId, s2);
      }), At.forEach(n3, (t4, n4) => {
        const r2 = new P(n4), o = tr.oe(this.It, r2), u2 = i.getIndexManager(r2), c = Pr.oe(r2, this.It, u2, i.referenceDelegate);
        return new Xr(s, c, o, u2).recalculateAndSaveOverlaysForDocumentKeys(new xi(e, Ot.at), t4).next();
      });
    });
  }
}
function lo(t2) {
  t2.createObjectStore("targetDocuments", {
    keyPath: gi
  }).createIndex("documentTargetsIndex", yi, {
    unique: true
  });
  t2.createObjectStore("targets", {
    keyPath: "targetId"
  }).createIndex("queryTargetsIndex", mi, {
    unique: true
  }), t2.createObjectStore("targetGlobal");
}
const fo = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
class _o {
  constructor(t2, e, n2, s, i, r2, o, u2, c, a, h = 15) {
    if (this.allowTabSynchronization = t2, this.persistenceKey = e, this.clientId = n2, this.Hs = i, this.window = r2, this.document = o, this.Js = c, this.Ys = a, this.Xs = h, this.Ss = null, this.Ds = false, this.isPrimary = false, this.networkEnabled = true, this.Zs = null, this.inForeground = false, this.ti = null, this.ei = null, this.ni = Number.NEGATIVE_INFINITY, this.si = (t3) => Promise.resolve(), !_o.C())
      throw new L(B.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.referenceDelegate = new Lr(this, s), this.ii = e + "main", this.It = new $i(u2), this.ri = new bt(this.ii, this.Xs, new ho(this.It)), this.Cs = new xr(this.referenceDelegate, this.It), this.remoteDocumentCache = Gr(this.It), this.Ns = new Yi(), this.window && this.window.localStorage ? this.oi = this.window.localStorage : (this.oi = null, false === a && x("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  start() {
    return this.ui().then(() => {
      if (!this.isPrimary && !this.allowTabSynchronization)
        throw new L(B.FAILED_PRECONDITION, fo);
      return this.ci(), this.ai(), this.hi(), this.runTransaction("getHighestListenSequenceNumber", "readonly", (t2) => this.Cs.getHighestSequenceNumber(t2));
    }).then((t2) => {
      this.Ss = new Ot(t2, this.Js);
    }).then(() => {
      this.Ds = true;
    }).catch((t2) => (this.ri && this.ri.close(), Promise.reject(t2)));
  }
  li(t2) {
    return this.si = async (e) => {
      if (this.started)
        return t2(e);
    }, t2(this.isPrimary);
  }
  setDatabaseDeletedListener(t2) {
    this.ri.L(async (e) => {
      null === e.newVersion && await t2();
    });
  }
  setNetworkEnabled(t2) {
    this.networkEnabled !== t2 && (this.networkEnabled = t2, this.Hs.enqueueAndForget(async () => {
      this.started && await this.ui();
    }));
  }
  ui() {
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (t2) => mo(t2).put({
      clientId: this.clientId,
      updateTimeMs: Date.now(),
      networkEnabled: this.networkEnabled,
      inForeground: this.inForeground
    }).next(() => {
      if (this.isPrimary)
        return this.fi(t2).next((t3) => {
          t3 || (this.isPrimary = false, this.Hs.enqueueRetryable(() => this.si(false)));
        });
    }).next(() => this.di(t2)).next((e) => this.isPrimary && !e ? this._i(t2).next(() => false) : !!e && this.wi(t2).next(() => true))).catch((t2) => {
      if (Vt(t2))
        return C("IndexedDbPersistence", "Failed to extend owner lease: ", t2), this.isPrimary;
      if (!this.allowTabSynchronization)
        throw t2;
      return C("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t2), false;
    }).then((t2) => {
      this.isPrimary !== t2 && this.Hs.enqueueRetryable(() => this.si(t2)), this.isPrimary = t2;
    });
  }
  fi(t2) {
    return wo(t2).get("owner").next((t3) => At.resolve(this.mi(t3)));
  }
  gi(t2) {
    return mo(t2).delete(this.clientId);
  }
  async yi() {
    if (this.isPrimary && !this.pi(this.ni, 18e5)) {
      this.ni = Date.now();
      const t2 = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (t3) => {
        const e = Ni(t3, "clientMetadata");
        return e.W().next((t4) => {
          const n2 = this.Ii(t4, 18e5), s = t4.filter((t5) => -1 === n2.indexOf(t5));
          return At.forEach(s, (t5) => e.delete(t5.clientId)).next(() => s);
        });
      }).catch(() => []);
      if (this.oi)
        for (const e of t2)
          this.oi.removeItem(this.Ti(e.clientId));
    }
  }
  hi() {
    this.ei = this.Hs.enqueueAfterDelay("client_metadata_refresh", 4e3, () => this.ui().then(() => this.yi()).then(() => this.hi()));
  }
  mi(t2) {
    return !!t2 && t2.ownerId === this.clientId;
  }
  di(t2) {
    if (this.Ys)
      return At.resolve(true);
    return wo(t2).get("owner").next((e) => {
      if (null !== e && this.pi(e.leaseTimestampMs, 5e3) && !this.Ei(e.ownerId)) {
        if (this.mi(e) && this.networkEnabled)
          return true;
        if (!this.mi(e)) {
          if (!e.allowTabSynchronization)
            throw new L(B.FAILED_PRECONDITION, fo);
          return false;
        }
      }
      return !(!this.networkEnabled || !this.inForeground) || mo(t2).W().next((t3) => void 0 === this.Ii(t3, 5e3).find((t4) => {
        if (this.clientId !== t4.clientId) {
          const e2 = !this.networkEnabled && t4.networkEnabled, n2 = !this.inForeground && t4.inForeground, s = this.networkEnabled === t4.networkEnabled;
          if (e2 || n2 && s)
            return true;
        }
        return false;
      }));
    }).next((t3) => (this.isPrimary !== t3 && C("IndexedDbPersistence", `Client ${t3 ? "is" : "is not"} eligible for a primary lease.`), t3));
  }
  async shutdown() {
    this.Ds = false, this.Ai(), this.ei && (this.ei.cancel(), this.ei = null), this.Ri(), this.bi(), await this.ri.runTransaction("shutdown", "readwrite", ["owner", "clientMetadata"], (t2) => {
      const e = new xi(t2, Ot.at);
      return this._i(e).next(() => this.gi(e));
    }), this.ri.close(), this.Pi();
  }
  Ii(t2, e) {
    return t2.filter((t3) => this.pi(t3.updateTimeMs, e) && !this.Ei(t3.clientId));
  }
  vi() {
    return this.runTransaction("getActiveClients", "readonly", (t2) => mo(t2).W().next((t3) => this.Ii(t3, 18e5).map((t4) => t4.clientId)));
  }
  get started() {
    return this.Ds;
  }
  getMutationQueue(t2, e) {
    return Pr.oe(t2, this.It, e, this.referenceDelegate);
  }
  getTargetCache() {
    return this.Cs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getIndexManager(t2) {
    return new mr(t2, this.It.re.databaseId);
  }
  getDocumentOverlayCache(t2) {
    return tr.oe(this.It, t2);
  }
  getBundleCache() {
    return this.Ns;
  }
  runTransaction(t2, e, n2) {
    C("IndexedDbPersistence", "Starting transaction:", t2);
    const s = "readonly" === e ? "readonly" : "readwrite", i = 15 === (r2 = this.Xs) ? Ci : 14 === r2 ? Di : 13 === r2 ? Si : 12 === r2 ? Vi : 11 === r2 ? vi : void O();
    var r2;
    let o;
    return this.ri.runTransaction(t2, s, i, (s2) => (o = new xi(s2, this.Ss ? this.Ss.next() : Ot.at), "readwrite-primary" === e ? this.fi(o).next((t3) => !!t3 || this.di(o)).next((e2) => {
      if (!e2)
        throw x(`Failed to obtain primary lease for action '${t2}'.`), this.isPrimary = false, this.Hs.enqueueRetryable(() => this.si(false)), new L(B.FAILED_PRECONDITION, It);
      return n2(o);
    }).next((t3) => this.wi(o).next(() => t3)) : this.Vi(o).next(() => n2(o)))).then((t3) => (o.raiseOnCommittedEvent(), t3));
  }
  Vi(t2) {
    return wo(t2).get("owner").next((t3) => {
      if (null !== t3 && this.pi(t3.leaseTimestampMs, 5e3) && !this.Ei(t3.ownerId) && !this.mi(t3) && !(this.Ys || this.allowTabSynchronization && t3.allowTabSynchronization))
        throw new L(B.FAILED_PRECONDITION, fo);
    });
  }
  wi(t2) {
    const e = {
      ownerId: this.clientId,
      allowTabSynchronization: this.allowTabSynchronization,
      leaseTimestampMs: Date.now()
    };
    return wo(t2).put("owner", e);
  }
  static C() {
    return bt.C();
  }
  _i(t2) {
    const e = wo(t2);
    return e.get("owner").next((t3) => this.mi(t3) ? (C("IndexedDbPersistence", "Releasing primary lease."), e.delete("owner")) : At.resolve());
  }
  pi(t2, e) {
    const n2 = Date.now();
    return !(t2 < n2 - e) && (!(t2 > n2) || (x(`Detected an update time that is in the future: ${t2} > ${n2}`), false));
  }
  ci() {
    null !== this.document && "function" == typeof this.document.addEventListener && (this.ti = () => {
      this.Hs.enqueueAndForget(() => (this.inForeground = "visible" === this.document.visibilityState, this.ui()));
    }, this.document.addEventListener("visibilitychange", this.ti), this.inForeground = "visible" === this.document.visibilityState);
  }
  Ri() {
    this.ti && (this.document.removeEventListener("visibilitychange", this.ti), this.ti = null);
  }
  ai() {
    var t2;
    "function" == typeof (null === (t2 = this.window) || void 0 === t2 ? void 0 : t2.addEventListener) && (this.Zs = () => {
      this.Ai(), isSafari() && navigator.appVersion.match(/Version\/1[45]/) && this.Hs.enterRestrictedMode(true), this.Hs.enqueueAndForget(() => this.shutdown());
    }, this.window.addEventListener("pagehide", this.Zs));
  }
  bi() {
    this.Zs && (this.window.removeEventListener("pagehide", this.Zs), this.Zs = null);
  }
  Ei(t2) {
    var e;
    try {
      const n2 = null !== (null === (e = this.oi) || void 0 === e ? void 0 : e.getItem(this.Ti(t2)));
      return C("IndexedDbPersistence", `Client '${t2}' ${n2 ? "is" : "is not"} zombied in LocalStorage`), n2;
    } catch (t3) {
      return x("IndexedDbPersistence", "Failed to get zombied client id.", t3), false;
    }
  }
  Ai() {
    if (this.oi)
      try {
        this.oi.setItem(this.Ti(this.clientId), String(Date.now()));
      } catch (t2) {
        x("Failed to set zombie client id.", t2);
      }
  }
  Pi() {
    if (this.oi)
      try {
        this.oi.removeItem(this.Ti(this.clientId));
      } catch (t2) {
      }
  }
  Ti(t2) {
    return `firestore_zombie_${this.persistenceKey}_${t2}`;
  }
}
function wo(t2) {
  return Ni(t2, "owner");
}
function mo(t2) {
  return Ni(t2, "clientMetadata");
}
function go(t2, e) {
  let n2 = t2.projectId;
  return t2.isDefaultDatabase || (n2 += "." + t2.database), "firestore/" + e + "/" + n2 + "/";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo {
  constructor(t2, e, n2, s) {
    this.targetId = t2, this.fromCache = e, this.Si = n2, this.Di = s;
  }
  static Ci(t2, e) {
    let n2 = fs(), s = fs();
    for (const t3 of e.docChanges)
      switch (t3.type) {
        case 0:
          n2 = n2.add(t3.doc.key);
          break;
        case 1:
          s = s.add(t3.doc.key);
      }
    return new yo(t2, e.fromCache, n2, s);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po {
  constructor() {
    this.xi = false;
  }
  initialize(t2, e) {
    this.Ni = t2, this.indexManager = e, this.xi = true;
  }
  getDocumentsMatchingQuery(t2, e, n2, s) {
    return this.ki(t2, e).next((i) => i || this.Oi(t2, e, s, n2)).next((n3) => n3 || this.Mi(t2, e));
  }
  ki(t2, e) {
    if (nn(e))
      return At.resolve(null);
    let n2 = cn(e);
    return this.indexManager.getIndexType(t2, n2).next((s) => 0 === s ? null : (null !== e.limit && 1 === s && (e = an(e, null, "F"), n2 = cn(e)), this.indexManager.getDocumentsMatchingTarget(t2, n2).next((s2) => {
      const i = fs(...s2);
      return this.Ni.getDocuments(t2, i).next((s3) => this.indexManager.getMinOffset(t2, n2).next((n3) => {
        const r2 = this.Fi(e, s3);
        return this.$i(e, r2, i, n3.readTime) ? this.ki(t2, an(e, null, "F")) : this.Bi(t2, r2, e, n3);
      }));
    })));
  }
  Oi(t2, e, n2, s) {
    return nn(e) || s.isEqual(st.min()) ? this.Mi(t2, e) : this.Ni.getDocuments(t2, n2).next((i) => {
      const r2 = this.Fi(e, i);
      return this.$i(e, r2, n2, s) ? this.Mi(t2, e) : (S() <= LogLevel.DEBUG && C("QueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), fn(e)), this.Bi(t2, r2, e, mt(s, -1)));
    });
  }
  Fi(t2, e) {
    let n2 = new qt(wn(t2));
    return e.forEach((e2, s) => {
      dn(t2, s) && (n2 = n2.add(s));
    }), n2;
  }
  $i(t2, e, n2, s) {
    if (null === t2.limit)
      return false;
    if (n2.size !== e.size)
      return true;
    const i = "F" === t2.limitType ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
  }
  Mi(t2, e) {
    return S() <= LogLevel.DEBUG && C("QueryEngine", "Using full collection scan to execute query:", fn(e)), this.Ni.getDocumentsMatchingQuery(t2, e, yt.min());
  }
  Bi(t2, e, n2, s) {
    return this.Ni.getDocumentsMatchingQuery(t2, n2, s).next((t3) => (e.forEach((e2) => {
      t3 = t3.insert(e2.key, e2);
    }), t3));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io {
  constructor(t2, e, n2, s) {
    this.persistence = t2, this.Li = e, this.It = s, this.Ui = new Bt(Z), this.qi = new es((t3) => xe(t3), ke), this.Ki = /* @__PURE__ */ new Map(), this.Gi = t2.getRemoteDocumentCache(), this.Cs = t2.getTargetCache(), this.Ns = t2.getBundleCache(), this.Qi(n2);
  }
  Qi(t2) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t2), this.indexManager = this.persistence.getIndexManager(t2), this.mutationQueue = this.persistence.getMutationQueue(t2, this.indexManager), this.localDocuments = new Xr(this.Gi, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Gi.setIndexManager(this.indexManager), this.Li.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t2) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e) => t2.collect(e, this.Ui));
  }
}
function To(t2, e, n2, s) {
  return new Io(t2, e, n2, s);
}
async function Eo(t2, e) {
  const n2 = $(t2);
  return await n2.persistence.runTransaction("Handle user change", "readonly", (t3) => {
    let s;
    return n2.mutationQueue.getAllMutationBatches(t3).next((i) => (s = i, n2.Qi(e), n2.mutationQueue.getAllMutationBatches(t3))).next((e2) => {
      const i = [], r2 = [];
      let o = fs();
      for (const t4 of s) {
        i.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      for (const t4 of e2) {
        r2.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      return n2.localDocuments.getDocuments(t3, o).next((t4) => ({
        ji: t4,
        removedBatchIds: i,
        addedBatchIds: r2
      }));
    });
  });
}
function Ao(t2, e) {
  const n2 = $(t2);
  return n2.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t3) => {
    const s = e.batch.keys(), i = n2.Gi.newChangeBuffer({
      trackRemovals: true
    });
    return function(t4, e2, n3, s2) {
      const i2 = n3.batch, r2 = i2.keys();
      let o = At.resolve();
      return r2.forEach((t5) => {
        o = o.next(() => s2.getEntry(e2, t5)).next((e3) => {
          const r3 = n3.docVersions.get(t5);
          M(null !== r3), e3.version.compareTo(r3) < 0 && (i2.applyToRemoteDocument(e3, n3), e3.isValidDocument() && (e3.setReadTime(n3.commitVersion), s2.addEntry(e3)));
        });
      }), o.next(() => t4.mutationQueue.removeMutationBatch(e2, i2));
    }(n2, t3, e, i).next(() => i.apply(t3)).next(() => n2.mutationQueue.performConsistencyCheck(t3)).next(() => n2.documentOverlayCache.removeOverlaysForBatchId(t3, s, e.batch.batchId)).next(() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t3, function(t4) {
      let e2 = fs();
      for (let n3 = 0; n3 < t4.mutationResults.length; ++n3) {
        t4.mutationResults[n3].transformResults.length > 0 && (e2 = e2.add(t4.batch.mutations[n3].key));
      }
      return e2;
    }(e))).next(() => n2.localDocuments.getDocuments(t3, s));
  });
}
function Ro(t2) {
  const e = $(t2);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t3) => e.Cs.getLastRemoteSnapshotVersion(t3));
}
function bo(t2, e) {
  const n2 = $(t2), s = e.snapshotVersion;
  let i = n2.Ui;
  return n2.persistence.runTransaction("Apply remote event", "readwrite-primary", (t3) => {
    const r2 = n2.Gi.newChangeBuffer({
      trackRemovals: true
    });
    i = n2.Ui;
    const o = [];
    e.targetChanges.forEach((r3, u3) => {
      const c2 = i.get(u3);
      if (!c2)
        return;
      o.push(n2.Cs.removeMatchingKeys(t3, r3.removedDocuments, u3).next(() => n2.Cs.addMatchingKeys(t3, r3.addedDocuments, u3)));
      let a = c2.withSequenceNumber(t3.currentSequenceNumber);
      e.targetMismatches.has(u3) ? a = a.withResumeToken(Wt.EMPTY_BYTE_STRING, st.min()).withLastLimboFreeSnapshotVersion(st.min()) : r3.resumeToken.approximateByteSize() > 0 && (a = a.withResumeToken(r3.resumeToken, s)), i = i.insert(u3, a), function(t4, e2, n3) {
        if (0 === t4.resumeToken.approximateByteSize())
          return true;
        if (e2.snapshotVersion.toMicroseconds() - t4.snapshotVersion.toMicroseconds() >= 3e8)
          return true;
        return n3.addedDocuments.size + n3.modifiedDocuments.size + n3.removedDocuments.size > 0;
      }(c2, a, r3) && o.push(n2.Cs.updateTargetData(t3, a));
    });
    let u2 = ss(), c = fs();
    if (e.documentUpdates.forEach((s2) => {
      e.resolvedLimboDocuments.has(s2) && o.push(n2.persistence.referenceDelegate.updateLimboDocument(t3, s2));
    }), o.push(Po(t3, r2, e.documentUpdates).next((t4) => {
      u2 = t4.Wi, c = t4.zi;
    })), !s.isEqual(st.min())) {
      const e2 = n2.Cs.getLastRemoteSnapshotVersion(t3).next((e3) => n2.Cs.setTargetsMetadata(t3, t3.currentSequenceNumber, s));
      o.push(e2);
    }
    return At.waitFor(o).next(() => r2.apply(t3)).next(() => n2.localDocuments.getLocalViewOfDocuments(t3, u2, c)).next(() => u2);
  }).then((t3) => (n2.Ui = i, t3));
}
function Po(t2, e, n2) {
  let s = fs(), i = fs();
  return n2.forEach((t3) => s = s.add(t3)), e.getEntries(t2, s).next((t3) => {
    let s2 = ss();
    return n2.forEach((n3, r2) => {
      const o = t3.get(n3);
      r2.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n3)), r2.isNoDocument() && r2.version.isEqual(st.min()) ? (e.removeEntry(n3, r2.readTime), s2 = s2.insert(n3, r2)) : !o.isValidDocument() || r2.version.compareTo(o.version) > 0 || 0 === r2.version.compareTo(o.version) && o.hasPendingWrites ? (e.addEntry(r2), s2 = s2.insert(n3, r2)) : C("LocalStore", "Ignoring outdated watch update for ", n3, ". Current version:", o.version, " Watch version:", r2.version);
    }), {
      Wi: s2,
      zi: i
    };
  });
}
function vo(t2, e) {
  const n2 = $(t2);
  return n2.persistence.runTransaction("Get next mutation batch", "readonly", (t3) => (void 0 === e && (e = -1), n2.mutationQueue.getNextMutationBatchAfterBatchId(t3, e)));
}
function Vo(t2, e) {
  const n2 = $(t2);
  return n2.persistence.runTransaction("Allocate target", "readwrite", (t3) => {
    let s;
    return n2.Cs.getTargetData(t3, e).next((i) => i ? (s = i, At.resolve(s)) : n2.Cs.allocateTargetId(t3).next((i2) => (s = new Fi(e, i2, 0, t3.currentSequenceNumber), n2.Cs.addTargetData(t3, s).next(() => s))));
  }).then((t3) => {
    const s = n2.Ui.get(t3.targetId);
    return (null === s || t3.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n2.Ui = n2.Ui.insert(t3.targetId, t3), n2.qi.set(e, t3.targetId)), t3;
  });
}
async function So(t2, e, n2) {
  const s = $(t2), i = s.Ui.get(e), r2 = n2 ? "readwrite" : "readwrite-primary";
  try {
    n2 || await s.persistence.runTransaction("Release target", r2, (t3) => s.persistence.referenceDelegate.removeTarget(t3, i));
  } catch (t3) {
    if (!Vt(t3))
      throw t3;
    C("LocalStore", `Failed to update sequence numbers for target ${e}: ${t3}`);
  }
  s.Ui = s.Ui.remove(e), s.qi.delete(i.target);
}
function Do(t2, e, n2) {
  const s = $(t2);
  let i = st.min(), r2 = fs();
  return s.persistence.runTransaction("Execute query", "readonly", (t3) => function(t4, e2, n3) {
    const s2 = $(t4), i2 = s2.qi.get(n3);
    return void 0 !== i2 ? At.resolve(s2.Ui.get(i2)) : s2.Cs.getTargetData(e2, n3);
  }(s, t3, cn(e)).next((e2) => {
    if (e2)
      return i = e2.lastLimboFreeSnapshotVersion, s.Cs.getMatchingKeysForTargetId(t3, e2.targetId).next((t4) => {
        r2 = t4;
      });
  }).next(() => s.Li.getDocumentsMatchingQuery(t3, e, n2 ? i : st.min(), n2 ? r2 : fs())).next((t4) => (No(s, _n(e), t4), {
    documents: t4,
    Hi: r2
  })));
}
function Co(t2, e) {
  const n2 = $(t2), s = $(n2.Cs), i = n2.Ui.get(e);
  return i ? Promise.resolve(i.target) : n2.persistence.runTransaction("Get target data", "readonly", (t3) => s.se(t3, e).next((t4) => t4 ? t4.target : null));
}
function xo(t2, e) {
  const n2 = $(t2), s = n2.Ki.get(e) || st.min();
  return n2.persistence.runTransaction("Get new document changes", "readonly", (t3) => n2.Gi.getAllFromCollectionGroup(
    t3,
    e,
    mt(s, -1),
    Number.MAX_SAFE_INTEGER
  )).then((t3) => (No(n2, e, t3), t3));
}
function No(t2, e, n2) {
  let s = t2.Ki.get(e) || st.min();
  n2.forEach((t3, e2) => {
    e2.readTime.compareTo(s) > 0 && (s = e2.readTime);
  }), t2.Ki.set(e, s);
}
async function ko(t2, e, n2, s) {
  const i = $(t2);
  let r2 = fs(), o = ss();
  for (const t3 of n2) {
    const n3 = e.Ji(t3.metadata.name);
    t3.document && (r2 = r2.add(n3));
    const s2 = e.Yi(t3);
    s2.setReadTime(e.Xi(t3.metadata.readTime)), o = o.insert(n3, s2);
  }
  const u2 = i.Gi.newChangeBuffer({
    trackRemovals: true
  }), c = await Vo(i, function(t3) {
    return cn(en(rt.fromString(`__bundle__/docs/${t3}`)));
  }(s));
  return i.persistence.runTransaction("Apply bundle documents", "readwrite", (t3) => Po(t3, u2, o).next((e2) => (u2.apply(t3), e2)).next((e2) => i.Cs.removeMatchingKeysForTargetId(t3, c.targetId).next(() => i.Cs.addMatchingKeys(t3, r2, c.targetId)).next(() => i.localDocuments.getLocalViewOfDocuments(t3, e2.Wi, e2.zi)).next(() => e2.Wi)));
}
async function Oo(t2, e, n2 = fs()) {
  const s = await Vo(t2, cn(Wi(e.bundledQuery))), i = $(t2);
  return i.persistence.runTransaction("Save named query", "readwrite", (t3) => {
    const r2 = Ds(e.readTime);
    if (s.snapshotVersion.compareTo(r2) >= 0)
      return i.Ns.saveNamedQuery(t3, e);
    const o = s.withResumeToken(Wt.EMPTY_BYTE_STRING, r2);
    return i.Ui = i.Ui.insert(o.targetId, o), i.Cs.updateTargetData(t3, o).next(() => i.Cs.removeMatchingKeysForTargetId(t3, s.targetId)).next(() => i.Cs.addMatchingKeys(t3, n2, s.targetId)).next(() => i.Ns.saveNamedQuery(t3, e));
  });
}
function Mo(t2, e) {
  return `firestore_clients_${t2}_${e}`;
}
function Fo(t2, e, n2) {
  let s = `firestore_mutations_${t2}_${n2}`;
  return e.isAuthenticated() && (s += `_${e.uid}`), s;
}
function $o(t2, e) {
  return `firestore_targets_${t2}_${e}`;
}
class Bo {
  constructor(t2, e, n2, s) {
    this.user = t2, this.batchId = e, this.state = n2, this.error = s;
  }
  static Zi(t2, e, n2) {
    const s = JSON.parse(n2);
    let i, r2 = "object" == typeof s && -1 !== ["pending", "acknowledged", "rejected"].indexOf(s.state) && (void 0 === s.error || "object" == typeof s.error);
    return r2 && s.error && (r2 = "string" == typeof s.error.message && "string" == typeof s.error.code, r2 && (i = new L(s.error.code, s.error.message))), r2 ? new Bo(t2, e, s.state, i) : (x("SharedClientState", `Failed to parse mutation state for ID '${e}': ${n2}`), null);
  }
  tr() {
    const t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }
}
class Lo {
  constructor(t2, e, n2) {
    this.targetId = t2, this.state = e, this.error = n2;
  }
  static Zi(t2, e) {
    const n2 = JSON.parse(e);
    let s, i = "object" == typeof n2 && -1 !== ["not-current", "current", "rejected"].indexOf(n2.state) && (void 0 === n2.error || "object" == typeof n2.error);
    return i && n2.error && (i = "string" == typeof n2.error.message && "string" == typeof n2.error.code, i && (s = new L(n2.error.code, n2.error.message))), i ? new Lo(t2, n2.state, s) : (x("SharedClientState", `Failed to parse target state for ID '${t2}': ${e}`), null);
  }
  tr() {
    const t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }
}
class Uo {
  constructor(t2, e) {
    this.clientId = t2, this.activeTargetIds = e;
  }
  static Zi(t2, e) {
    const n2 = JSON.parse(e);
    let s = "object" == typeof n2 && n2.activeTargetIds instanceof Array, i = _s();
    for (let t3 = 0; s && t3 < n2.activeTargetIds.length; ++t3)
      s = re(n2.activeTargetIds[t3]), i = i.add(n2.activeTargetIds[t3]);
    return s ? new Uo(t2, i) : (x("SharedClientState", `Failed to parse client data for instance '${t2}': ${e}`), null);
  }
}
class qo {
  constructor(t2, e) {
    this.clientId = t2, this.onlineState = e;
  }
  static Zi(t2) {
    const e = JSON.parse(t2);
    return "object" == typeof e && -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) && "string" == typeof e.clientId ? new qo(e.clientId, e.onlineState) : (x("SharedClientState", `Failed to parse online state: ${t2}`), null);
  }
}
class Ko {
  constructor() {
    this.activeTargetIds = _s();
  }
  er(t2) {
    this.activeTargetIds = this.activeTargetIds.add(t2);
  }
  nr(t2) {
    this.activeTargetIds = this.activeTargetIds.delete(t2);
  }
  tr() {
    const t2 = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t2);
  }
}
class Go {
  constructor(t2, e, n2, s, i) {
    this.window = t2, this.Hs = e, this.persistenceKey = n2, this.sr = s, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.ir = this.rr.bind(this), this.ur = new Bt(Z), this.started = false, this.cr = [];
    const r2 = n2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.ar = Mo(this.persistenceKey, this.sr), this.hr = function(t3) {
      return `firestore_sequence_number_${t3}`;
    }(this.persistenceKey), this.ur = this.ur.insert(this.sr, new Ko()), this.lr = new RegExp(`^firestore_clients_${r2}_([^_]*)$`), this.dr = new RegExp(`^firestore_mutations_${r2}_(\\d+)(?:_(.*))?$`), this._r = new RegExp(`^firestore_targets_${r2}_(\\d+)$`), this.wr = function(t3) {
      return `firestore_online_state_${t3}`;
    }(this.persistenceKey), this.mr = function(t3) {
      return `firestore_bundle_loaded_v2_${t3}`;
    }(this.persistenceKey), this.window.addEventListener("storage", this.ir);
  }
  static C(t2) {
    return !(!t2 || !t2.localStorage);
  }
  async start() {
    const t2 = await this.syncEngine.vi();
    for (const e2 of t2) {
      if (e2 === this.sr)
        continue;
      const t3 = this.getItem(Mo(this.persistenceKey, e2));
      if (t3) {
        const n2 = Uo.Zi(e2, t3);
        n2 && (this.ur = this.ur.insert(n2.clientId, n2));
      }
    }
    this.gr();
    const e = this.storage.getItem(this.wr);
    if (e) {
      const t3 = this.yr(e);
      t3 && this.pr(t3);
    }
    for (const t3 of this.cr)
      this.rr(t3);
    this.cr = [], this.window.addEventListener("pagehide", () => this.shutdown()), this.started = true;
  }
  writeSequenceNumber(t2) {
    this.setItem(this.hr, JSON.stringify(t2));
  }
  getAllActiveQueryTargets() {
    return this.Ir(this.ur);
  }
  isActiveQueryTarget(t2) {
    let e = false;
    return this.ur.forEach((n2, s) => {
      s.activeTargetIds.has(t2) && (e = true);
    }), e;
  }
  addPendingMutation(t2) {
    this.Tr(t2, "pending");
  }
  updateMutationState(t2, e, n2) {
    this.Tr(t2, e, n2), this.Er(t2);
  }
  addLocalQueryTarget(t2) {
    let e = "not-current";
    if (this.isActiveQueryTarget(t2)) {
      const n2 = this.storage.getItem($o(this.persistenceKey, t2));
      if (n2) {
        const s = Lo.Zi(t2, n2);
        s && (e = s.state);
      }
    }
    return this.Ar.er(t2), this.gr(), e;
  }
  removeLocalQueryTarget(t2) {
    this.Ar.nr(t2), this.gr();
  }
  isLocalQueryTarget(t2) {
    return this.Ar.activeTargetIds.has(t2);
  }
  clearQueryState(t2) {
    this.removeItem($o(this.persistenceKey, t2));
  }
  updateQueryState(t2, e, n2) {
    this.Rr(t2, e, n2);
  }
  handleUserChange(t2, e, n2) {
    e.forEach((t3) => {
      this.Er(t3);
    }), this.currentUser = t2, n2.forEach((t3) => {
      this.addPendingMutation(t3);
    });
  }
  setOnlineState(t2) {
    this.br(t2);
  }
  notifyBundleLoaded(t2) {
    this.Pr(t2);
  }
  shutdown() {
    this.started && (this.window.removeEventListener("storage", this.ir), this.removeItem(this.ar), this.started = false);
  }
  getItem(t2) {
    const e = this.storage.getItem(t2);
    return C("SharedClientState", "READ", t2, e), e;
  }
  setItem(t2, e) {
    C("SharedClientState", "SET", t2, e), this.storage.setItem(t2, e);
  }
  removeItem(t2) {
    C("SharedClientState", "REMOVE", t2), this.storage.removeItem(t2);
  }
  rr(t2) {
    const e = t2;
    if (e.storageArea === this.storage) {
      if (C("SharedClientState", "EVENT", e.key, e.newValue), e.key === this.ar)
        return void x("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.Hs.enqueueRetryable(async () => {
        if (this.started) {
          if (null !== e.key) {
            if (this.lr.test(e.key)) {
              if (null == e.newValue) {
                const t3 = this.vr(e.key);
                return this.Vr(t3, null);
              }
              {
                const t3 = this.Sr(e.key, e.newValue);
                if (t3)
                  return this.Vr(t3.clientId, t3);
              }
            } else if (this.dr.test(e.key)) {
              if (null !== e.newValue) {
                const t3 = this.Dr(e.key, e.newValue);
                if (t3)
                  return this.Cr(t3);
              }
            } else if (this._r.test(e.key)) {
              if (null !== e.newValue) {
                const t3 = this.Nr(e.key, e.newValue);
                if (t3)
                  return this.kr(t3);
              }
            } else if (e.key === this.wr) {
              if (null !== e.newValue) {
                const t3 = this.yr(e.newValue);
                if (t3)
                  return this.pr(t3);
              }
            } else if (e.key === this.hr) {
              const t3 = function(t4) {
                let e2 = Ot.at;
                if (null != t4)
                  try {
                    const n2 = JSON.parse(t4);
                    M("number" == typeof n2), e2 = n2;
                  } catch (t5) {
                    x("SharedClientState", "Failed to read sequence number from WebStorage", t5);
                  }
                return e2;
              }(e.newValue);
              t3 !== Ot.at && this.sequenceNumberHandler(t3);
            } else if (e.key === this.mr) {
              const t3 = this.Or(e.newValue);
              await Promise.all(t3.map((t4) => this.syncEngine.Mr(t4)));
            }
          }
        } else
          this.cr.push(e);
      });
    }
  }
  get Ar() {
    return this.ur.get(this.sr);
  }
  gr() {
    this.setItem(this.ar, this.Ar.tr());
  }
  Tr(t2, e, n2) {
    const s = new Bo(this.currentUser, t2, e, n2), i = Fo(this.persistenceKey, this.currentUser, t2);
    this.setItem(i, s.tr());
  }
  Er(t2) {
    const e = Fo(this.persistenceKey, this.currentUser, t2);
    this.removeItem(e);
  }
  br(t2) {
    const e = {
      clientId: this.sr,
      onlineState: t2
    };
    this.storage.setItem(this.wr, JSON.stringify(e));
  }
  Rr(t2, e, n2) {
    const s = $o(this.persistenceKey, t2), i = new Lo(t2, e, n2);
    this.setItem(s, i.tr());
  }
  Pr(t2) {
    const e = JSON.stringify(Array.from(t2));
    this.setItem(this.mr, e);
  }
  vr(t2) {
    const e = this.lr.exec(t2);
    return e ? e[1] : null;
  }
  Sr(t2, e) {
    const n2 = this.vr(t2);
    return Uo.Zi(n2, e);
  }
  Dr(t2, e) {
    const n2 = this.dr.exec(t2), s = Number(n2[1]), i = void 0 !== n2[2] ? n2[2] : null;
    return Bo.Zi(new P(i), s, e);
  }
  Nr(t2, e) {
    const n2 = this._r.exec(t2), s = Number(n2[1]);
    return Lo.Zi(s, e);
  }
  yr(t2) {
    return qo.Zi(t2);
  }
  Or(t2) {
    return JSON.parse(t2);
  }
  async Cr(t2) {
    if (t2.user.uid === this.currentUser.uid)
      return this.syncEngine.Fr(t2.batchId, t2.state, t2.error);
    C("SharedClientState", `Ignoring mutation for non-active user ${t2.user.uid}`);
  }
  kr(t2) {
    return this.syncEngine.$r(t2.targetId, t2.state, t2.error);
  }
  Vr(t2, e) {
    const n2 = e ? this.ur.insert(t2, e) : this.ur.remove(t2), s = this.Ir(this.ur), i = this.Ir(n2), r2 = [], o = [];
    return i.forEach((t3) => {
      s.has(t3) || r2.push(t3);
    }), s.forEach((t3) => {
      i.has(t3) || o.push(t3);
    }), this.syncEngine.Br(r2, o).then(() => {
      this.ur = n2;
    });
  }
  pr(t2) {
    this.ur.get(t2.clientId) && this.onlineStateHandler(t2.onlineState);
  }
  Ir(t2) {
    let e = _s();
    return t2.forEach((t3, n2) => {
      e = e.unionWith(n2.activeTargetIds);
    }), e;
  }
}
class Qo {
  constructor() {
    this.Lr = new Ko(), this.Ur = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(t2) {
  }
  updateMutationState(t2, e, n2) {
  }
  addLocalQueryTarget(t2) {
    return this.Lr.er(t2), this.Ur[t2] || "not-current";
  }
  updateQueryState(t2, e, n2) {
    this.Ur[t2] = e;
  }
  removeLocalQueryTarget(t2) {
    this.Lr.nr(t2);
  }
  isLocalQueryTarget(t2) {
    return this.Lr.activeTargetIds.has(t2);
  }
  clearQueryState(t2) {
    delete this.Ur[t2];
  }
  getAllActiveQueryTargets() {
    return this.Lr.activeTargetIds;
  }
  isActiveQueryTarget(t2) {
    return this.Lr.activeTargetIds.has(t2);
  }
  start() {
    return this.Lr = new Ko(), Promise.resolve();
  }
  handleUserChange(t2, e, n2) {
  }
  setOnlineState(t2) {
  }
  shutdown() {
  }
  writeSequenceNumber(t2) {
  }
  notifyBundleLoaded(t2) {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo {
  qr(t2) {
  }
  shutdown() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wo {
  constructor() {
    this.Kr = () => this.Gr(), this.Qr = () => this.jr(), this.Wr = [], this.zr();
  }
  qr(t2) {
    this.Wr.push(t2);
  }
  shutdown() {
    window.removeEventListener("online", this.Kr), window.removeEventListener("offline", this.Qr);
  }
  zr() {
    window.addEventListener("online", this.Kr), window.addEventListener("offline", this.Qr);
  }
  Gr() {
    C("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t2 of this.Wr)
      t2(0);
  }
  jr() {
    C("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t2 of this.Wr)
      t2(1);
  }
  static C() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zo = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ho {
  constructor(t2) {
    this.Hr = t2.Hr, this.Jr = t2.Jr;
  }
  Yr(t2) {
    this.Xr = t2;
  }
  Zr(t2) {
    this.eo = t2;
  }
  onMessage(t2) {
    this.no = t2;
  }
  close() {
    this.Jr();
  }
  send(t2) {
    this.Hr(t2);
  }
  so() {
    this.Xr();
  }
  io(t2) {
    this.eo(t2);
  }
  ro(t2) {
    this.no(t2);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo extends class {
  constructor(t2) {
    this.databaseInfo = t2, this.databaseId = t2.databaseId;
    const e = t2.ssl ? "https" : "http";
    this.oo = e + "://" + t2.host, this.uo = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
  }
  get co() {
    return false;
  }
  ao(t2, e, n2, s, i) {
    const r2 = this.ho(t2, e);
    C("RestConnection", "Sending: ", r2, n2);
    const o = {};
    return this.lo(o, s, i), this.fo(t2, r2, o, n2).then((t3) => (C("RestConnection", "Received: ", t3), t3), (e2) => {
      throw N("RestConnection", `${t2} failed with error: `, e2, "url: ", r2, "request:", n2), e2;
    });
  }
  _o(t2, e, n2, s, i, r2) {
    return this.ao(t2, e, n2, s, i);
  }
  lo(t2, e, n2) {
    t2["X-Goog-Api-Client"] = "gl-js/ fire/" + v, t2["Content-Type"] = "text/plain", this.databaseInfo.appId && (t2["X-Firebase-GMPID"] = this.databaseInfo.appId), e && e.headers.forEach((e2, n3) => t2[n3] = e2), n2 && n2.headers.forEach((e2, n3) => t2[n3] = e2);
  }
  ho(t2, e) {
    const n2 = zo[t2];
    return `${this.oo}/v1/${e}:${n2}`;
  }
} {
  constructor(t2) {
    super(t2), this.forceLongPolling = t2.forceLongPolling, this.autoDetectLongPolling = t2.autoDetectLongPolling, this.useFetchStreams = t2.useFetchStreams;
  }
  fo(t2, e, n2, s) {
    return new Promise((i, r2) => {
      const o = new XhrIo();
      o.setWithCredentials(true), o.listenOnce(EventType.COMPLETE, () => {
        try {
          switch (o.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              const e2 = o.getResponseJson();
              C("Connection", "XHR received:", JSON.stringify(e2)), i(e2);
              break;
            case ErrorCode.TIMEOUT:
              C("Connection", 'RPC "' + t2 + '" timed out'), r2(new L(B.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              const n3 = o.getStatus();
              if (C("Connection", 'RPC "' + t2 + '" failed with status:', n3, "response text:", o.getResponseText()), n3 > 0) {
                const t3 = o.getResponseJson().error;
                if (t3 && t3.status && t3.message) {
                  const e3 = function(t4) {
                    const e4 = t4.toLowerCase().replace(/_/g, "-");
                    return Object.values(B).indexOf(e4) >= 0 ? e4 : B.UNKNOWN;
                  }(t3.status);
                  r2(new L(e3, t3.message));
                } else
                  r2(new L(B.UNKNOWN, "Server responded with status " + o.getStatus()));
              } else
                r2(new L(B.UNAVAILABLE, "Connection failed."));
              break;
            default:
              O();
          }
        } finally {
          C("Connection", 'RPC "' + t2 + '" completed.');
        }
      });
      const u2 = JSON.stringify(s);
      o.send(e, "POST", u2, n2, 15);
    });
  }
  wo(t2, e, n2) {
    const s = [this.oo, "/", "google.firestore.v1.Firestore", "/", t2, "/channel"], i = createWebChannelTransport(), r2 = getStatEventTarget(), o = {
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    };
    this.useFetchStreams && (o.xmlHttpFactory = new FetchXmlHttpFactory({})), this.lo(o.initMessageHeaders, e, n2), o.encodeInitMessageHeaders = true;
    const u2 = s.join("");
    C("Connection", "Creating WebChannel: " + u2, o);
    const c = i.createWebChannel(u2, o);
    let a = false, h = false;
    const l2 = new Ho({
      Hr: (t3) => {
        h ? C("Connection", "Not sending because WebChannel is closed:", t3) : (a || (C("Connection", "Opening WebChannel transport."), c.open(), a = true), C("Connection", "WebChannel sending:", t3), c.send(t3));
      },
      Jr: () => c.close()
    }), f2 = (t3, e2, n3) => {
      t3.listen(e2, (t4) => {
        try {
          n3(t4);
        } catch (t5) {
          setTimeout(() => {
            throw t5;
          }, 0);
        }
      });
    };
    return f2(c, WebChannel.EventType.OPEN, () => {
      h || C("Connection", "WebChannel transport opened.");
    }), f2(c, WebChannel.EventType.CLOSE, () => {
      h || (h = true, C("Connection", "WebChannel transport closed"), l2.io());
    }), f2(c, WebChannel.EventType.ERROR, (t3) => {
      h || (h = true, N("Connection", "WebChannel transport errored:", t3), l2.io(new L(B.UNAVAILABLE, "The operation could not be completed")));
    }), f2(c, WebChannel.EventType.MESSAGE, (t3) => {
      var e2;
      if (!h) {
        const n3 = t3.data[0];
        M(!!n3);
        const s2 = n3, i2 = s2.error || (null === (e2 = s2[0]) || void 0 === e2 ? void 0 : e2.error);
        if (i2) {
          C("Connection", "WebChannel received error:", i2);
          const t4 = i2.status;
          let e3 = function(t5) {
            const e4 = Yn[t5];
            if (void 0 !== e4)
              return ts(e4);
          }(t4), n4 = i2.message;
          void 0 === e3 && (e3 = B.INTERNAL, n4 = "Unknown error status: " + t4 + " with message " + i2.message), h = true, l2.io(new L(e3, n4)), c.close();
        } else
          C("Connection", "WebChannel received:", n3), l2.ro(n3);
      }
    }), f2(r2, Event.STAT_EVENT, (t3) => {
      t3.stat === Stat.PROXY ? C("Connection", "Detected buffering proxy") : t3.stat === Stat.NOPROXY && C("Connection", "Detected no buffering proxy");
    }), setTimeout(() => {
      l2.so();
    }, 0), l2;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yo() {
  return "undefined" != typeof window ? window : null;
}
function Xo() {
  return "undefined" != typeof document ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zo(t2) {
  return new Ps(t2, true);
}
class tu {
  constructor(t2, e, n2 = 1e3, s = 1.5, i = 6e4) {
    this.Hs = t2, this.timerId = e, this.mo = n2, this.yo = s, this.po = i, this.Io = 0, this.To = null, this.Eo = Date.now(), this.reset();
  }
  reset() {
    this.Io = 0;
  }
  Ao() {
    this.Io = this.po;
  }
  Ro(t2) {
    this.cancel();
    const e = Math.floor(this.Io + this.bo()), n2 = Math.max(0, Date.now() - this.Eo), s = Math.max(0, e - n2);
    s > 0 && C("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n2} ms ago)`), this.To = this.Hs.enqueueAfterDelay(this.timerId, s, () => (this.Eo = Date.now(), t2())), this.Io *= this.yo, this.Io < this.mo && (this.Io = this.mo), this.Io > this.po && (this.Io = this.po);
  }
  Po() {
    null !== this.To && (this.To.skipDelay(), this.To = null);
  }
  cancel() {
    null !== this.To && (this.To.cancel(), this.To = null);
  }
  bo() {
    return (Math.random() - 0.5) * this.Io;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu {
  constructor(t2, e, n2, s, i, r2, o, u2) {
    this.Hs = t2, this.vo = n2, this.Vo = s, this.So = i, this.authCredentialsProvider = r2, this.appCheckCredentialsProvider = o, this.listener = u2, this.state = 0, this.Do = 0, this.Co = null, this.xo = null, this.stream = null, this.No = new tu(t2, e);
  }
  ko() {
    return 1 === this.state || 5 === this.state || this.Oo();
  }
  Oo() {
    return 2 === this.state || 3 === this.state;
  }
  start() {
    4 !== this.state ? this.auth() : this.Mo();
  }
  async stop() {
    this.ko() && await this.close(0);
  }
  Fo() {
    this.state = 0, this.No.reset();
  }
  $o() {
    this.Oo() && null === this.Co && (this.Co = this.Hs.enqueueAfterDelay(this.vo, 6e4, () => this.Bo()));
  }
  Lo(t2) {
    this.Uo(), this.stream.send(t2);
  }
  async Bo() {
    if (this.Oo())
      return this.close(0);
  }
  Uo() {
    this.Co && (this.Co.cancel(), this.Co = null);
  }
  qo() {
    this.xo && (this.xo.cancel(), this.xo = null);
  }
  async close(t2, e) {
    this.Uo(), this.qo(), this.No.cancel(), this.Do++, 4 !== t2 ? this.No.reset() : e && e.code === B.RESOURCE_EXHAUSTED ? (x(e.toString()), x("Using maximum backoff delay to prevent overloading the backend."), this.No.Ao()) : e && e.code === B.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.Ko(), this.stream.close(), this.stream = null), this.state = t2, await this.listener.Zr(e);
  }
  Ko() {
  }
  auth() {
    this.state = 1;
    const t2 = this.Go(this.Do), e = this.Do;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([t3, n2]) => {
      this.Do === e && this.Qo(t3, n2);
    }, (e2) => {
      t2(() => {
        const t3 = new L(B.UNKNOWN, "Fetching auth token failed: " + e2.message);
        return this.jo(t3);
      });
    });
  }
  Qo(t2, e) {
    const n2 = this.Go(this.Do);
    this.stream = this.Wo(t2, e), this.stream.Yr(() => {
      n2(() => (this.state = 2, this.xo = this.Hs.enqueueAfterDelay(this.Vo, 1e4, () => (this.Oo() && (this.state = 3), Promise.resolve())), this.listener.Yr()));
    }), this.stream.Zr((t3) => {
      n2(() => this.jo(t3));
    }), this.stream.onMessage((t3) => {
      n2(() => this.onMessage(t3));
    });
  }
  Mo() {
    this.state = 5, this.No.Ro(async () => {
      this.state = 0, this.start();
    });
  }
  jo(t2) {
    return C("PersistentStream", `close with error: ${t2}`), this.stream = null, this.close(4, t2);
  }
  Go(t2) {
    return (e) => {
      this.Hs.enqueueAndForget(() => this.Do === t2 ? e() : (C("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
}
class nu extends eu {
  constructor(t2, e, n2, s, i, r2) {
    super(t2, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, n2, s, r2), this.It = i;
  }
  Wo(t2, e) {
    return this.So.wo("Listen", t2, e);
  }
  onMessage(t2) {
    this.No.reset();
    const e = qs(this.It, t2), n2 = function(t3) {
      if (!("targetChange" in t3))
        return st.min();
      const e2 = t3.targetChange;
      return e2.targetIds && e2.targetIds.length ? st.min() : e2.readTime ? Ds(e2.readTime) : st.min();
    }(t2);
    return this.listener.zo(e, n2);
  }
  Ho(t2) {
    const e = {};
    e.database = Fs(this.It), e.addTarget = function(t3, e2) {
      let n3;
      const s = e2.target;
      return n3 = Oe(s) ? {
        documents: js(t3, s)
      } : {
        query: Ws(t3, s)
      }, n3.targetId = e2.targetId, e2.resumeToken.approximateByteSize() > 0 ? n3.resumeToken = Vs(t3, e2.resumeToken) : e2.snapshotVersion.compareTo(st.min()) > 0 && (n3.readTime = vs(t3, e2.snapshotVersion.toTimestamp())), n3;
    }(this.It, t2);
    const n2 = Hs(this.It, t2);
    n2 && (e.labels = n2), this.Lo(e);
  }
  Jo(t2) {
    const e = {};
    e.database = Fs(this.It), e.removeTarget = t2, this.Lo(e);
  }
}
class su extends eu {
  constructor(t2, e, n2, s, i, r2) {
    super(t2, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", e, n2, s, r2), this.It = i, this.Yo = false;
  }
  get Xo() {
    return this.Yo;
  }
  start() {
    this.Yo = false, this.lastStreamToken = void 0, super.start();
  }
  Ko() {
    this.Yo && this.Zo([]);
  }
  Wo(t2, e) {
    return this.So.wo("Write", t2, e);
  }
  onMessage(t2) {
    if (M(!!t2.streamToken), this.lastStreamToken = t2.streamToken, this.Yo) {
      this.No.reset();
      const e = Qs(t2.writeResults, t2.commitTime), n2 = Ds(t2.commitTime);
      return this.listener.tu(n2, e);
    }
    return M(!t2.writeResults || 0 === t2.writeResults.length), this.Yo = true, this.listener.eu();
  }
  nu() {
    const t2 = {};
    t2.database = Fs(this.It), this.Lo(t2);
  }
  Zo(t2) {
    const e = {
      streamToken: this.lastStreamToken,
      writes: t2.map((t3) => Ks(this.It, t3))
    };
    this.Lo(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iu extends class {
} {
  constructor(t2, e, n2, s) {
    super(), this.authCredentials = t2, this.appCheckCredentials = e, this.So = n2, this.It = s, this.su = false;
  }
  iu() {
    if (this.su)
      throw new L(B.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  ao(t2, e, n2) {
    return this.iu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, i]) => this.So.ao(t2, e, n2, s, i)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === B.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new L(B.UNKNOWN, t3.toString());
    });
  }
  _o(t2, e, n2, s) {
    return this.iu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, r2]) => this.So._o(t2, e, n2, i, r2, s)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === B.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new L(B.UNKNOWN, t3.toString());
    });
  }
  terminate() {
    this.su = true;
  }
}
class ou {
  constructor(t2, e) {
    this.asyncQueue = t2, this.onlineStateHandler = e, this.state = "Unknown", this.ru = 0, this.ou = null, this.uu = true;
  }
  cu() {
    0 === this.ru && (this.au("Unknown"), this.ou = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.ou = null, this.hu("Backend didn't respond within 10 seconds."), this.au("Offline"), Promise.resolve())));
  }
  lu(t2) {
    "Online" === this.state ? this.au("Unknown") : (this.ru++, this.ru >= 1 && (this.fu(), this.hu(`Connection failed 1 times. Most recent error: ${t2.toString()}`), this.au("Offline")));
  }
  set(t2) {
    this.fu(), this.ru = 0, "Online" === t2 && (this.uu = false), this.au(t2);
  }
  au(t2) {
    t2 !== this.state && (this.state = t2, this.onlineStateHandler(t2));
  }
  hu(t2) {
    const e = `Could not reach Cloud Firestore backend. ${t2}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.uu ? (x(e), this.uu = false) : C("OnlineStateTracker", e);
  }
  fu() {
    null !== this.ou && (this.ou.cancel(), this.ou = null);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uu {
  constructor(t2, e, n2, s, i) {
    this.localStore = t2, this.datastore = e, this.asyncQueue = n2, this.remoteSyncer = {}, this.du = [], this._u = /* @__PURE__ */ new Map(), this.wu = /* @__PURE__ */ new Set(), this.mu = [], this.gu = i, this.gu.qr((t3) => {
      n2.enqueueAndForget(async () => {
        mu(this) && (C("RemoteStore", "Restarting streams for network reachability change."), await async function(t4) {
          const e2 = $(t4);
          e2.wu.add(4), await au(e2), e2.yu.set("Unknown"), e2.wu.delete(4), await cu(e2);
        }(this));
      });
    }), this.yu = new ou(n2, s);
  }
}
async function cu(t2) {
  if (mu(t2))
    for (const e of t2.mu)
      await e(true);
}
async function au(t2) {
  for (const e of t2.mu)
    await e(false);
}
function hu(t2, e) {
  const n2 = $(t2);
  n2._u.has(e.targetId) || (n2._u.set(e.targetId, e), wu(n2) ? _u(n2) : ku(n2).Oo() && fu(n2, e));
}
function lu(t2, e) {
  const n2 = $(t2), s = ku(n2);
  n2._u.delete(e), s.Oo() && du(n2, e), 0 === n2._u.size && (s.Oo() ? s.$o() : mu(n2) && n2.yu.set("Unknown"));
}
function fu(t2, e) {
  t2.pu.Mt(e.targetId), ku(t2).Ho(e);
}
function du(t2, e) {
  t2.pu.Mt(e), ku(t2).Jo(e);
}
function _u(t2) {
  t2.pu = new Ts({
    getRemoteKeysForTarget: (e) => t2.remoteSyncer.getRemoteKeysForTarget(e),
    se: (e) => t2._u.get(e) || null
  }), ku(t2).start(), t2.yu.cu();
}
function wu(t2) {
  return mu(t2) && !ku(t2).ko() && t2._u.size > 0;
}
function mu(t2) {
  return 0 === $(t2).wu.size;
}
function gu(t2) {
  t2.pu = void 0;
}
async function yu(t2) {
  t2._u.forEach((e, n2) => {
    fu(t2, e);
  });
}
async function pu(t2, e) {
  gu(t2), wu(t2) ? (t2.yu.lu(e), _u(t2)) : t2.yu.set("Unknown");
}
async function Iu(t2, e, n2) {
  if (t2.yu.set("Online"), e instanceof ps && 2 === e.state && e.cause)
    try {
      await async function(t3, e2) {
        const n3 = e2.cause;
        for (const s of e2.targetIds)
          t3._u.has(s) && (await t3.remoteSyncer.rejectListen(s, n3), t3._u.delete(s), t3.pu.removeTarget(s));
      }(t2, e);
    } catch (n3) {
      C("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n3), await Tu(t2, n3);
    }
  else if (e instanceof gs ? t2.pu.Gt(e) : e instanceof ys ? t2.pu.Yt(e) : t2.pu.Wt(e), !n2.isEqual(st.min()))
    try {
      const e2 = await Ro(t2.localStore);
      n2.compareTo(e2) >= 0 && await function(t3, e3) {
        const n3 = t3.pu.te(e3);
        return n3.targetChanges.forEach((n4, s) => {
          if (n4.resumeToken.approximateByteSize() > 0) {
            const i = t3._u.get(s);
            i && t3._u.set(s, i.withResumeToken(n4.resumeToken, e3));
          }
        }), n3.targetMismatches.forEach((e4) => {
          const n4 = t3._u.get(e4);
          if (!n4)
            return;
          t3._u.set(e4, n4.withResumeToken(Wt.EMPTY_BYTE_STRING, n4.snapshotVersion)), du(t3, e4);
          const s = new Fi(n4.target, e4, 1, n4.sequenceNumber);
          fu(t3, s);
        }), t3.remoteSyncer.applyRemoteEvent(n3);
      }(t2, n2);
    } catch (e2) {
      C("RemoteStore", "Failed to raise snapshot:", e2), await Tu(t2, e2);
    }
}
async function Tu(t2, e, n2) {
  if (!Vt(e))
    throw e;
  t2.wu.add(1), await au(t2), t2.yu.set("Offline"), n2 || (n2 = () => Ro(t2.localStore)), t2.asyncQueue.enqueueRetryable(async () => {
    C("RemoteStore", "Retrying IndexedDB access"), await n2(), t2.wu.delete(1), await cu(t2);
  });
}
function Eu(t2, e) {
  return e().catch((n2) => Tu(t2, n2, e));
}
async function Au(t2) {
  const e = $(t2), n2 = Ou(e);
  let s = e.du.length > 0 ? e.du[e.du.length - 1].batchId : -1;
  for (; Ru(e); )
    try {
      const t3 = await vo(e.localStore, s);
      if (null === t3) {
        0 === e.du.length && n2.$o();
        break;
      }
      s = t3.batchId, bu(e, t3);
    } catch (t3) {
      await Tu(e, t3);
    }
  Pu(e) && vu(e);
}
function Ru(t2) {
  return mu(t2) && t2.du.length < 10;
}
function bu(t2, e) {
  t2.du.push(e);
  const n2 = Ou(t2);
  n2.Oo() && n2.Xo && n2.Zo(e.mutations);
}
function Pu(t2) {
  return mu(t2) && !Ou(t2).ko() && t2.du.length > 0;
}
function vu(t2) {
  Ou(t2).start();
}
async function Vu(t2) {
  Ou(t2).nu();
}
async function Su(t2) {
  const e = Ou(t2);
  for (const n2 of t2.du)
    e.Zo(n2.mutations);
}
async function Du(t2, e, n2) {
  const s = t2.du.shift(), i = Oi.from(s, e, n2);
  await Eu(t2, () => t2.remoteSyncer.applySuccessfulWrite(i)), await Au(t2);
}
async function Cu(t2, e) {
  e && Ou(t2).Xo && await async function(t3, e2) {
    if (n2 = e2.code, Zn(n2) && n2 !== B.ABORTED) {
      const n3 = t3.du.shift();
      Ou(t3).Fo(), await Eu(t3, () => t3.remoteSyncer.rejectFailedWrite(n3.batchId, e2)), await Au(t3);
    }
    var n2;
  }(t2, e), Pu(t2) && vu(t2);
}
async function xu(t2, e) {
  const n2 = $(t2);
  n2.asyncQueue.verifyOperationInProgress(), C("RemoteStore", "RemoteStore received new credentials");
  const s = mu(n2);
  n2.wu.add(3), await au(n2), s && n2.yu.set("Unknown"), await n2.remoteSyncer.handleCredentialChange(e), n2.wu.delete(3), await cu(n2);
}
async function Nu(t2, e) {
  const n2 = $(t2);
  e ? (n2.wu.delete(2), await cu(n2)) : e || (n2.wu.add(2), await au(n2), n2.yu.set("Unknown"));
}
function ku(t2) {
  return t2.Iu || (t2.Iu = function(t3, e, n2) {
    const s = $(t3);
    return s.iu(), new nu(e, s.So, s.authCredentials, s.appCheckCredentials, s.It, n2);
  }(t2.datastore, t2.asyncQueue, {
    Yr: yu.bind(null, t2),
    Zr: pu.bind(null, t2),
    zo: Iu.bind(null, t2)
  }), t2.mu.push(async (e) => {
    e ? (t2.Iu.Fo(), wu(t2) ? _u(t2) : t2.yu.set("Unknown")) : (await t2.Iu.stop(), gu(t2));
  })), t2.Iu;
}
function Ou(t2) {
  return t2.Tu || (t2.Tu = function(t3, e, n2) {
    const s = $(t3);
    return s.iu(), new su(e, s.So, s.authCredentials, s.appCheckCredentials, s.It, n2);
  }(t2.datastore, t2.asyncQueue, {
    Yr: Vu.bind(null, t2),
    Zr: Cu.bind(null, t2),
    eu: Su.bind(null, t2),
    tu: Du.bind(null, t2)
  }), t2.mu.push(async (e) => {
    e ? (t2.Tu.Fo(), await Au(t2)) : (await t2.Tu.stop(), t2.du.length > 0 && (C("RemoteStore", `Stopping write stream with ${t2.du.length} pending writes`), t2.du = []));
  })), t2.Tu;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mu {
  constructor(t2, e, n2, s, i) {
    this.asyncQueue = t2, this.timerId = e, this.targetTimeMs = n2, this.op = s, this.removalCallback = i, this.deferred = new U(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((t3) => {
    });
  }
  static createAndSchedule(t2, e, n2, s, i) {
    const r2 = Date.now() + n2, o = new Mu(t2, e, r2, s, i);
    return o.start(n2), o;
  }
  start(t2) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t2);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t2) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new L(B.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((t2) => this.deferred.resolve(t2))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
}
function Fu(t2, e) {
  if (x("AsyncQueue", `${e}: ${t2}`), Vt(t2))
    return new L(B.UNAVAILABLE, `${e}: ${t2}`);
  throw t2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $u {
  constructor(t2) {
    this.comparator = t2 ? (e, n2) => t2(e, n2) || ct.comparator(e.key, n2.key) : (t3, e) => ct.comparator(t3.key, e.key), this.keyedMap = rs(), this.sortedSet = new Bt(this.comparator);
  }
  static emptySet(t2) {
    return new $u(t2.comparator);
  }
  has(t2) {
    return null != this.keyedMap.get(t2);
  }
  get(t2) {
    return this.keyedMap.get(t2);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(t2) {
    const e = this.keyedMap.get(t2);
    return e ? this.sortedSet.indexOf(e) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(t2) {
    this.sortedSet.inorderTraversal((e, n2) => (t2(e), false));
  }
  add(t2) {
    const e = this.delete(t2.key);
    return e.copy(e.keyedMap.insert(t2.key, t2), e.sortedSet.insert(t2, null));
  }
  delete(t2) {
    const e = this.get(t2);
    return e ? this.copy(this.keyedMap.remove(t2), this.sortedSet.remove(e)) : this;
  }
  isEqual(t2) {
    if (!(t2 instanceof $u))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.sortedSet.getIterator(), n2 = t2.sortedSet.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n2.getNext().key;
      if (!t3.isEqual(s))
        return false;
    }
    return true;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e.toString());
    }), 0 === t2.length ? "DocumentSet ()" : "DocumentSet (\n  " + t2.join("  \n") + "\n)";
  }
  copy(t2, e) {
    const n2 = new $u();
    return n2.comparator = this.comparator, n2.keyedMap = t2, n2.sortedSet = e, n2;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bu {
  constructor() {
    this.Eu = new Bt(ct.comparator);
  }
  track(t2) {
    const e = t2.doc.key, n2 = this.Eu.get(e);
    n2 ? 0 !== t2.type && 3 === n2.type ? this.Eu = this.Eu.insert(e, t2) : 3 === t2.type && 1 !== n2.type ? this.Eu = this.Eu.insert(e, {
      type: n2.type,
      doc: t2.doc
    }) : 2 === t2.type && 2 === n2.type ? this.Eu = this.Eu.insert(e, {
      type: 2,
      doc: t2.doc
    }) : 2 === t2.type && 0 === n2.type ? this.Eu = this.Eu.insert(e, {
      type: 0,
      doc: t2.doc
    }) : 1 === t2.type && 0 === n2.type ? this.Eu = this.Eu.remove(e) : 1 === t2.type && 2 === n2.type ? this.Eu = this.Eu.insert(e, {
      type: 1,
      doc: n2.doc
    }) : 0 === t2.type && 1 === n2.type ? this.Eu = this.Eu.insert(e, {
      type: 2,
      doc: t2.doc
    }) : O() : this.Eu = this.Eu.insert(e, t2);
  }
  Au() {
    const t2 = [];
    return this.Eu.inorderTraversal((e, n2) => {
      t2.push(n2);
    }), t2;
  }
}
class Lu {
  constructor(t2, e, n2, s, i, r2, o, u2, c) {
    this.query = t2, this.docs = e, this.oldDocs = n2, this.docChanges = s, this.mutatedKeys = i, this.fromCache = r2, this.syncStateChanged = o, this.excludesMetadataChanges = u2, this.hasCachedResults = c;
  }
  static fromInitialDocuments(t2, e, n2, s, i) {
    const r2 = [];
    return e.forEach((t3) => {
      r2.push({
        type: 0,
        doc: t3
      });
    }), new Lu(
      t2,
      e,
      $u.emptySet(e),
      r2,
      n2,
      s,
      true,
      false,
      i
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t2) {
    if (!(this.fromCache === t2.fromCache && this.hasCachedResults === t2.hasCachedResults && this.syncStateChanged === t2.syncStateChanged && this.mutatedKeys.isEqual(t2.mutatedKeys) && hn(this.query, t2.query) && this.docs.isEqual(t2.docs) && this.oldDocs.isEqual(t2.oldDocs)))
      return false;
    const e = this.docChanges, n2 = t2.docChanges;
    if (e.length !== n2.length)
      return false;
    for (let t3 = 0; t3 < e.length; t3++)
      if (e[t3].type !== n2[t3].type || !e[t3].doc.isEqual(n2[t3].doc))
        return false;
    return true;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uu {
  constructor() {
    this.Ru = void 0, this.listeners = [];
  }
}
class qu {
  constructor() {
    this.queries = new es((t2) => ln(t2), hn), this.onlineState = "Unknown", this.bu = /* @__PURE__ */ new Set();
  }
}
async function Ku(t2, e) {
  const n2 = $(t2), s = e.query;
  let i = false, r2 = n2.queries.get(s);
  if (r2 || (i = true, r2 = new Uu()), i)
    try {
      r2.Ru = await n2.onListen(s);
    } catch (t3) {
      const n3 = Fu(t3, `Initialization of query '${fn(e.query)}' failed`);
      return void e.onError(n3);
    }
  if (n2.queries.set(s, r2), r2.listeners.push(e), e.Pu(n2.onlineState), r2.Ru) {
    e.vu(r2.Ru) && Wu(n2);
  }
}
async function Gu(t2, e) {
  const n2 = $(t2), s = e.query;
  let i = false;
  const r2 = n2.queries.get(s);
  if (r2) {
    const t3 = r2.listeners.indexOf(e);
    t3 >= 0 && (r2.listeners.splice(t3, 1), i = 0 === r2.listeners.length);
  }
  if (i)
    return n2.queries.delete(s), n2.onUnlisten(s);
}
function Qu(t2, e) {
  const n2 = $(t2);
  let s = false;
  for (const t3 of e) {
    const e2 = t3.query, i = n2.queries.get(e2);
    if (i) {
      for (const e3 of i.listeners)
        e3.vu(t3) && (s = true);
      i.Ru = t3;
    }
  }
  s && Wu(n2);
}
function ju(t2, e, n2) {
  const s = $(t2), i = s.queries.get(e);
  if (i)
    for (const t3 of i.listeners)
      t3.onError(n2);
  s.queries.delete(e);
}
function Wu(t2) {
  t2.bu.forEach((t3) => {
    t3.next();
  });
}
class zu {
  constructor(t2, e, n2) {
    this.query = t2, this.Vu = e, this.Su = false, this.Du = null, this.onlineState = "Unknown", this.options = n2 || {};
  }
  vu(t2) {
    if (!this.options.includeMetadataChanges) {
      const e2 = [];
      for (const n2 of t2.docChanges)
        3 !== n2.type && e2.push(n2);
      t2 = new Lu(
        t2.query,
        t2.docs,
        t2.oldDocs,
        e2,
        t2.mutatedKeys,
        t2.fromCache,
        t2.syncStateChanged,
        true,
        t2.hasCachedResults
      );
    }
    let e = false;
    return this.Su ? this.Cu(t2) && (this.Vu.next(t2), e = true) : this.xu(t2, this.onlineState) && (this.Nu(t2), e = true), this.Du = t2, e;
  }
  onError(t2) {
    this.Vu.error(t2);
  }
  Pu(t2) {
    this.onlineState = t2;
    let e = false;
    return this.Du && !this.Su && this.xu(this.Du, t2) && (this.Nu(this.Du), e = true), e;
  }
  xu(t2, e) {
    if (!t2.fromCache)
      return true;
    const n2 = "Offline" !== e;
    return (!this.options.ku || !n2) && (!t2.docs.isEmpty() || t2.hasCachedResults || "Offline" === e);
  }
  Cu(t2) {
    if (t2.docChanges.length > 0)
      return true;
    const e = this.Du && this.Du.hasPendingWrites !== t2.hasPendingWrites;
    return !(!t2.syncStateChanged && !e) && true === this.options.includeMetadataChanges;
  }
  Nu(t2) {
    t2 = Lu.fromInitialDocuments(t2.query, t2.docs, t2.mutatedKeys, t2.fromCache, t2.hasCachedResults), this.Su = true, this.Vu.next(t2);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hu {
  constructor(t2, e) {
    this.payload = t2, this.byteLength = e;
  }
  Ou() {
    return "metadata" in this.payload;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ju {
  constructor(t2) {
    this.It = t2;
  }
  Ji(t2) {
    return ks(this.It, t2);
  }
  Yi(t2) {
    return t2.metadata.exists ? Ls(this.It, t2.document, false) : Se.newNoDocument(this.Ji(t2.metadata.name), this.Xi(t2.metadata.readTime));
  }
  Xi(t2) {
    return Ds(t2);
  }
}
class Yu {
  constructor(t2, e, n2) {
    this.Mu = t2, this.localStore = e, this.It = n2, this.queries = [], this.documents = [], this.collectionGroups = /* @__PURE__ */ new Set(), this.progress = Xu(t2);
  }
  Fu(t2) {
    this.progress.bytesLoaded += t2.byteLength;
    let e = this.progress.documentsLoaded;
    if (t2.payload.namedQuery)
      this.queries.push(t2.payload.namedQuery);
    else if (t2.payload.documentMetadata) {
      this.documents.push({
        metadata: t2.payload.documentMetadata
      }), t2.payload.documentMetadata.exists || ++e;
      const n2 = rt.fromString(t2.payload.documentMetadata.name);
      this.collectionGroups.add(n2.get(n2.length - 2));
    } else
      t2.payload.document && (this.documents[this.documents.length - 1].document = t2.payload.document, ++e);
    return e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign({}, this.progress)) : null;
  }
  $u(t2) {
    const e = /* @__PURE__ */ new Map(), n2 = new Ju(this.It);
    for (const s of t2)
      if (s.metadata.queries) {
        const t3 = n2.Ji(s.metadata.name);
        for (const n3 of s.metadata.queries) {
          const s2 = (e.get(n3) || fs()).add(t3);
          e.set(n3, s2);
        }
      }
    return e;
  }
  async complete() {
    const t2 = await ko(this.localStore, new Ju(this.It), this.documents, this.Mu.id), e = this.$u(this.documents);
    for (const t3 of this.queries)
      await Oo(this.localStore, t3, e.get(t3.name));
    return this.progress.taskState = "Success", {
      progress: this.progress,
      Bu: this.collectionGroups,
      Lu: t2
    };
  }
}
function Xu(t2) {
  return {
    taskState: "Running",
    documentsLoaded: 0,
    bytesLoaded: 0,
    totalDocuments: t2.totalDocuments,
    totalBytes: t2.totalBytes
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zu {
  constructor(t2) {
    this.key = t2;
  }
}
class tc {
  constructor(t2) {
    this.key = t2;
  }
}
class ec {
  constructor(t2, e) {
    this.query = t2, this.Uu = e, this.qu = null, this.hasCachedResults = false, this.current = false, this.Ku = fs(), this.mutatedKeys = fs(), this.Gu = wn(t2), this.Qu = new $u(this.Gu);
  }
  get ju() {
    return this.Uu;
  }
  Wu(t2, e) {
    const n2 = e ? e.zu : new Bu(), s = e ? e.Qu : this.Qu;
    let i = e ? e.mutatedKeys : this.mutatedKeys, r2 = s, o = false;
    const u2 = "F" === this.query.limitType && s.size === this.query.limit ? s.last() : null, c = "L" === this.query.limitType && s.size === this.query.limit ? s.first() : null;
    if (t2.inorderTraversal((t3, e2) => {
      const a = s.get(t3), h = dn(this.query, e2) ? e2 : null, l2 = !!a && this.mutatedKeys.has(a.key), f2 = !!h && (h.hasLocalMutations || this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
      let d = false;
      if (a && h) {
        a.data.isEqual(h.data) ? l2 !== f2 && (n2.track({
          type: 3,
          doc: h
        }), d = true) : this.Hu(a, h) || (n2.track({
          type: 2,
          doc: h
        }), d = true, (u2 && this.Gu(h, u2) > 0 || c && this.Gu(h, c) < 0) && (o = true));
      } else
        !a && h ? (n2.track({
          type: 0,
          doc: h
        }), d = true) : a && !h && (n2.track({
          type: 1,
          doc: a
        }), d = true, (u2 || c) && (o = true));
      d && (h ? (r2 = r2.add(h), i = f2 ? i.add(t3) : i.delete(t3)) : (r2 = r2.delete(t3), i = i.delete(t3)));
    }), null !== this.query.limit)
      for (; r2.size > this.query.limit; ) {
        const t3 = "F" === this.query.limitType ? r2.last() : r2.first();
        r2 = r2.delete(t3.key), i = i.delete(t3.key), n2.track({
          type: 1,
          doc: t3
        });
      }
    return {
      Qu: r2,
      zu: n2,
      $i: o,
      mutatedKeys: i
    };
  }
  Hu(t2, e) {
    return t2.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
  }
  applyChanges(t2, e, n2) {
    const s = this.Qu;
    this.Qu = t2.Qu, this.mutatedKeys = t2.mutatedKeys;
    const i = t2.zu.Au();
    i.sort((t3, e2) => function(t4, e3) {
      const n3 = (t5) => {
        switch (t5) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return O();
        }
      };
      return n3(t4) - n3(e3);
    }(t3.type, e2.type) || this.Gu(t3.doc, e2.doc)), this.Ju(n2);
    const r2 = e ? this.Yu() : [], o = 0 === this.Ku.size && this.current ? 1 : 0, u2 = o !== this.qu;
    if (this.qu = o, 0 !== i.length || u2) {
      return {
        snapshot: new Lu(
          this.query,
          t2.Qu,
          s,
          i,
          t2.mutatedKeys,
          0 === o,
          u2,
          false,
          !!n2 && n2.resumeToken.approximateByteSize() > 0
        ),
        Xu: r2
      };
    }
    return {
      Xu: r2
    };
  }
  Pu(t2) {
    return this.current && "Offline" === t2 ? (this.current = false, this.applyChanges(
      {
        Qu: this.Qu,
        zu: new Bu(),
        mutatedKeys: this.mutatedKeys,
        $i: false
      },
      false
    )) : {
      Xu: []
    };
  }
  Zu(t2) {
    return !this.Uu.has(t2) && (!!this.Qu.has(t2) && !this.Qu.get(t2).hasLocalMutations);
  }
  Ju(t2) {
    t2 && (t2.addedDocuments.forEach((t3) => this.Uu = this.Uu.add(t3)), t2.modifiedDocuments.forEach((t3) => {
    }), t2.removedDocuments.forEach((t3) => this.Uu = this.Uu.delete(t3)), this.current = t2.current);
  }
  Yu() {
    if (!this.current)
      return [];
    const t2 = this.Ku;
    this.Ku = fs(), this.Qu.forEach((t3) => {
      this.Zu(t3.key) && (this.Ku = this.Ku.add(t3.key));
    });
    const e = [];
    return t2.forEach((t3) => {
      this.Ku.has(t3) || e.push(new tc(t3));
    }), this.Ku.forEach((n2) => {
      t2.has(n2) || e.push(new Zu(n2));
    }), e;
  }
  tc(t2) {
    this.Uu = t2.Hi, this.Ku = fs();
    const e = this.Wu(t2.documents);
    return this.applyChanges(e, true);
  }
  ec() {
    return Lu.fromInitialDocuments(this.query, this.Qu, this.mutatedKeys, 0 === this.qu, this.hasCachedResults);
  }
}
class nc {
  constructor(t2, e, n2) {
    this.query = t2, this.targetId = e, this.view = n2;
  }
}
class sc {
  constructor(t2) {
    this.key = t2, this.nc = false;
  }
}
class ic {
  constructor(t2, e, n2, s, i, r2) {
    this.localStore = t2, this.remoteStore = e, this.eventManager = n2, this.sharedClientState = s, this.currentUser = i, this.maxConcurrentLimboResolutions = r2, this.sc = {}, this.ic = new es((t3) => ln(t3), hn), this.rc = /* @__PURE__ */ new Map(), this.oc = /* @__PURE__ */ new Set(), this.uc = new Bt(ct.comparator), this.cc = /* @__PURE__ */ new Map(), this.ac = new eo(), this.hc = {}, this.lc = /* @__PURE__ */ new Map(), this.fc = Cr.vn(), this.onlineState = "Unknown", this.dc = void 0;
  }
  get isPrimaryClient() {
    return true === this.dc;
  }
}
async function rc(t2, e) {
  const n2 = kc(t2);
  let s, i;
  const r2 = n2.ic.get(e);
  if (r2)
    s = r2.targetId, n2.sharedClientState.addLocalQueryTarget(s), i = r2.view.ec();
  else {
    const t3 = await Vo(n2.localStore, cn(e));
    n2.isPrimaryClient && hu(n2.remoteStore, t3);
    const r3 = n2.sharedClientState.addLocalQueryTarget(t3.targetId);
    s = t3.targetId, i = await oc(n2, e, s, "current" === r3, t3.resumeToken);
  }
  return i;
}
async function oc(t2, e, n2, s, i) {
  t2._c = (e2, n3, s2) => async function(t3, e3, n4, s3) {
    let i2 = e3.view.Wu(n4);
    i2.$i && (i2 = await Do(
      t3.localStore,
      e3.query,
      false
    ).then(({ documents: t4 }) => e3.view.Wu(t4, i2)));
    const r3 = s3 && s3.targetChanges.get(e3.targetId), o2 = e3.view.applyChanges(
      i2,
      t3.isPrimaryClient,
      r3
    );
    return pc(t3, e3.targetId, o2.Xu), o2.snapshot;
  }(t2, e2, n3, s2);
  const r2 = await Do(
    t2.localStore,
    e,
    true
  ), o = new ec(e, r2.Hi), u2 = o.Wu(r2.documents), c = ms.createSynthesizedTargetChangeForCurrentChange(n2, s && "Offline" !== t2.onlineState, i), a = o.applyChanges(
    u2,
    t2.isPrimaryClient,
    c
  );
  pc(t2, n2, a.Xu);
  const h = new nc(e, n2, o);
  return t2.ic.set(e, h), t2.rc.has(n2) ? t2.rc.get(n2).push(e) : t2.rc.set(n2, [e]), a.snapshot;
}
async function uc(t2, e) {
  const n2 = $(t2), s = n2.ic.get(e), i = n2.rc.get(s.targetId);
  if (i.length > 1)
    return n2.rc.set(s.targetId, i.filter((t3) => !hn(t3, e))), void n2.ic.delete(e);
  if (n2.isPrimaryClient) {
    n2.sharedClientState.removeLocalQueryTarget(s.targetId);
    n2.sharedClientState.isActiveQueryTarget(s.targetId) || await So(
      n2.localStore,
      s.targetId,
      false
    ).then(() => {
      n2.sharedClientState.clearQueryState(s.targetId), lu(n2.remoteStore, s.targetId), gc(n2, s.targetId);
    }).catch(Et);
  } else
    gc(n2, s.targetId), await So(
      n2.localStore,
      s.targetId,
      true
    );
}
async function cc(t2, e, n2) {
  const s = Oc(t2);
  try {
    const t3 = await function(t4, e2) {
      const n3 = $(t4), s2 = nt.now(), i = e2.reduce((t5, e3) => t5.add(e3.key), fs());
      let r2, o;
      return n3.persistence.runTransaction("Locally write mutations", "readwrite", (t5) => {
        let u2 = ss(), c = fs();
        return n3.Gi.getEntries(t5, i).next((t6) => {
          u2 = t6, u2.forEach((t7, e3) => {
            e3.isValidDocument() || (c = c.add(t7));
          });
        }).next(() => n3.localDocuments.getOverlayedDocuments(t5, u2)).next((i2) => {
          r2 = i2;
          const o2 = [];
          for (const t6 of e2) {
            const e3 = Un(t6, r2.get(t6.key).overlayedDocument);
            null != e3 && o2.push(new Gn(t6.key, e3, Ve(e3.value.mapValue), On.exists(true)));
          }
          return n3.mutationQueue.addMutationBatch(t5, s2, o2, e2);
        }).next((e3) => {
          o = e3;
          const s3 = e3.applyToLocalDocumentSet(r2, c);
          return n3.documentOverlayCache.saveOverlays(t5, e3.batchId, s3);
        });
      }).then(() => ({
        batchId: o.batchId,
        changes: os(r2)
      }));
    }(s.localStore, e);
    s.sharedClientState.addPendingMutation(t3.batchId), function(t4, e2, n3) {
      let s2 = t4.hc[t4.currentUser.toKey()];
      s2 || (s2 = new Bt(Z));
      s2 = s2.insert(e2, n3), t4.hc[t4.currentUser.toKey()] = s2;
    }(s, t3.batchId, n2), await Ec(s, t3.changes), await Au(s.remoteStore);
  } catch (t3) {
    const e2 = Fu(t3, "Failed to persist write");
    n2.reject(e2);
  }
}
async function ac(t2, e) {
  const n2 = $(t2);
  try {
    const t3 = await bo(n2.localStore, e);
    e.targetChanges.forEach((t4, e2) => {
      const s = n2.cc.get(e2);
      s && (M(t4.addedDocuments.size + t4.modifiedDocuments.size + t4.removedDocuments.size <= 1), t4.addedDocuments.size > 0 ? s.nc = true : t4.modifiedDocuments.size > 0 ? M(s.nc) : t4.removedDocuments.size > 0 && (M(s.nc), s.nc = false));
    }), await Ec(n2, t3, e);
  } catch (t3) {
    await Et(t3);
  }
}
function hc(t2, e, n2) {
  const s = $(t2);
  if (s.isPrimaryClient && 0 === n2 || !s.isPrimaryClient && 1 === n2) {
    const t3 = [];
    s.ic.forEach((n3, s2) => {
      const i = s2.view.Pu(e);
      i.snapshot && t3.push(i.snapshot);
    }), function(t4, e2) {
      const n3 = $(t4);
      n3.onlineState = e2;
      let s2 = false;
      n3.queries.forEach((t5, n4) => {
        for (const t6 of n4.listeners)
          t6.Pu(e2) && (s2 = true);
      }), s2 && Wu(n3);
    }(s.eventManager, e), t3.length && s.sc.zo(t3), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
  }
}
async function lc(t2, e, n2) {
  const s = $(t2);
  s.sharedClientState.updateQueryState(e, "rejected", n2);
  const i = s.cc.get(e), r2 = i && i.key;
  if (r2) {
    let t3 = new Bt(ct.comparator);
    t3 = t3.insert(r2, Se.newNoDocument(r2, st.min()));
    const n3 = fs().add(r2), i2 = new ws(
      st.min(),
      /* @__PURE__ */ new Map(),
      new qt(Z),
      t3,
      n3
    );
    await ac(s, i2), s.uc = s.uc.remove(r2), s.cc.delete(e), Tc(s);
  } else
    await So(
      s.localStore,
      e,
      false
    ).then(() => gc(s, e, n2)).catch(Et);
}
async function fc(t2, e) {
  const n2 = $(t2), s = e.batch.batchId;
  try {
    const t3 = await Ao(n2.localStore, e);
    mc(n2, s, null), wc(n2, s), n2.sharedClientState.updateMutationState(s, "acknowledged"), await Ec(n2, t3);
  } catch (t3) {
    await Et(t3);
  }
}
async function dc(t2, e, n2) {
  const s = $(t2);
  try {
    const t3 = await function(t4, e2) {
      const n3 = $(t4);
      return n3.persistence.runTransaction("Reject batch", "readwrite-primary", (t5) => {
        let s2;
        return n3.mutationQueue.lookupMutationBatch(t5, e2).next((e3) => (M(null !== e3), s2 = e3.keys(), n3.mutationQueue.removeMutationBatch(t5, e3))).next(() => n3.mutationQueue.performConsistencyCheck(t5)).next(() => n3.documentOverlayCache.removeOverlaysForBatchId(t5, s2, e2)).next(() => n3.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t5, s2)).next(() => n3.localDocuments.getDocuments(t5, s2));
      });
    }(s.localStore, e);
    mc(s, e, n2), wc(s, e), s.sharedClientState.updateMutationState(e, "rejected", n2), await Ec(s, t3);
  } catch (n3) {
    await Et(n3);
  }
}
async function _c(t2, e) {
  const n2 = $(t2);
  mu(n2.remoteStore) || C("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
  try {
    const t3 = await function(t4) {
      const e2 = $(t4);
      return e2.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (t5) => e2.mutationQueue.getHighestUnacknowledgedBatchId(t5));
    }(n2.localStore);
    if (-1 === t3)
      return void e.resolve();
    const s = n2.lc.get(t3) || [];
    s.push(e), n2.lc.set(t3, s);
  } catch (t3) {
    const n3 = Fu(t3, "Initialization of waitForPendingWrites() operation failed");
    e.reject(n3);
  }
}
function wc(t2, e) {
  (t2.lc.get(e) || []).forEach((t3) => {
    t3.resolve();
  }), t2.lc.delete(e);
}
function mc(t2, e, n2) {
  const s = $(t2);
  let i = s.hc[s.currentUser.toKey()];
  if (i) {
    const t3 = i.get(e);
    t3 && (n2 ? t3.reject(n2) : t3.resolve(), i = i.remove(e)), s.hc[s.currentUser.toKey()] = i;
  }
}
function gc(t2, e, n2 = null) {
  t2.sharedClientState.removeLocalQueryTarget(e);
  for (const s of t2.rc.get(e))
    t2.ic.delete(s), n2 && t2.sc.wc(s, n2);
  if (t2.rc.delete(e), t2.isPrimaryClient) {
    t2.ac.ls(e).forEach((e2) => {
      t2.ac.containsKey(e2) || yc(t2, e2);
    });
  }
}
function yc(t2, e) {
  t2.oc.delete(e.path.canonicalString());
  const n2 = t2.uc.get(e);
  null !== n2 && (lu(t2.remoteStore, n2), t2.uc = t2.uc.remove(e), t2.cc.delete(n2), Tc(t2));
}
function pc(t2, e, n2) {
  for (const s of n2)
    if (s instanceof Zu)
      t2.ac.addReference(s.key, e), Ic(t2, s);
    else if (s instanceof tc) {
      C("SyncEngine", "Document no longer in limbo: " + s.key), t2.ac.removeReference(s.key, e);
      t2.ac.containsKey(s.key) || yc(t2, s.key);
    } else
      O();
}
function Ic(t2, e) {
  const n2 = e.key, s = n2.path.canonicalString();
  t2.uc.get(n2) || t2.oc.has(s) || (C("SyncEngine", "New document in limbo: " + n2), t2.oc.add(s), Tc(t2));
}
function Tc(t2) {
  for (; t2.oc.size > 0 && t2.uc.size < t2.maxConcurrentLimboResolutions; ) {
    const e = t2.oc.values().next().value;
    t2.oc.delete(e);
    const n2 = new ct(rt.fromString(e)), s = t2.fc.next();
    t2.cc.set(s, new sc(n2)), t2.uc = t2.uc.insert(n2, s), hu(t2.remoteStore, new Fi(cn(en(n2.path)), s, 2, Ot.at));
  }
}
async function Ec(t2, e, n2) {
  const s = $(t2), i = [], r2 = [], o = [];
  s.ic.isEmpty() || (s.ic.forEach((t3, u2) => {
    o.push(s._c(u2, e, n2).then((t4) => {
      if ((t4 || n2) && s.isPrimaryClient && s.sharedClientState.updateQueryState(u2.targetId, (null == t4 ? void 0 : t4.fromCache) ? "not-current" : "current"), t4) {
        i.push(t4);
        const e2 = yo.Ci(u2.targetId, t4);
        r2.push(e2);
      }
    }));
  }), await Promise.all(o), s.sc.zo(i), await async function(t3, e2) {
    const n3 = $(t3);
    try {
      await n3.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t4) => At.forEach(e2, (e3) => At.forEach(e3.Si, (s2) => n3.persistence.referenceDelegate.addReference(t4, e3.targetId, s2)).next(() => At.forEach(e3.Di, (s2) => n3.persistence.referenceDelegate.removeReference(t4, e3.targetId, s2)))));
    } catch (t4) {
      if (!Vt(t4))
        throw t4;
      C("LocalStore", "Failed to update sequence numbers: " + t4);
    }
    for (const t4 of e2) {
      const e3 = t4.targetId;
      if (!t4.fromCache) {
        const t5 = n3.Ui.get(e3), s2 = t5.snapshotVersion, i2 = t5.withLastLimboFreeSnapshotVersion(s2);
        n3.Ui = n3.Ui.insert(e3, i2);
      }
    }
  }(s.localStore, r2));
}
async function Ac(t2, e) {
  const n2 = $(t2);
  if (!n2.currentUser.isEqual(e)) {
    C("SyncEngine", "User change. New user:", e.toKey());
    const t3 = await Eo(n2.localStore, e);
    n2.currentUser = e, function(t4, e2) {
      t4.lc.forEach((t5) => {
        t5.forEach((t6) => {
          t6.reject(new L(B.CANCELLED, e2));
        });
      }), t4.lc.clear();
    }(n2, "'waitForPendingWrites' promise is rejected due to a user change."), n2.sharedClientState.handleUserChange(e, t3.removedBatchIds, t3.addedBatchIds), await Ec(n2, t3.ji);
  }
}
function Rc(t2, e) {
  const n2 = $(t2), s = n2.cc.get(e);
  if (s && s.nc)
    return fs().add(s.key);
  {
    let t3 = fs();
    const s2 = n2.rc.get(e);
    if (!s2)
      return t3;
    for (const e2 of s2) {
      const s3 = n2.ic.get(e2);
      t3 = t3.unionWith(s3.view.ju);
    }
    return t3;
  }
}
async function bc(t2, e) {
  const n2 = $(t2), s = await Do(
    n2.localStore,
    e.query,
    true
  ), i = e.view.tc(s);
  return n2.isPrimaryClient && pc(n2, e.targetId, i.Xu), i;
}
async function Pc(t2, e) {
  const n2 = $(t2);
  return xo(n2.localStore, e).then((t3) => Ec(n2, t3));
}
async function vc(t2, e, n2, s) {
  const i = $(t2), r2 = await function(t3, e2) {
    const n3 = $(t3), s2 = $(n3.mutationQueue);
    return n3.persistence.runTransaction("Lookup mutation documents", "readonly", (t4) => s2.Tn(t4, e2).next((e3) => e3 ? n3.localDocuments.getDocuments(t4, e3) : At.resolve(null)));
  }(i.localStore, e);
  null !== r2 ? ("pending" === n2 ? await Au(i.remoteStore) : "acknowledged" === n2 || "rejected" === n2 ? (mc(i, e, s || null), wc(i, e), function(t3, e2) {
    $($(t3).mutationQueue).An(e2);
  }(i.localStore, e)) : O(), await Ec(i, r2)) : C("SyncEngine", "Cannot apply mutation batch with id: " + e);
}
async function Vc(t2, e) {
  const n2 = $(t2);
  if (kc(n2), Oc(n2), true === e && true !== n2.dc) {
    const t3 = n2.sharedClientState.getAllActiveQueryTargets(), e2 = await Sc(n2, t3.toArray());
    n2.dc = true, await Nu(n2.remoteStore, true);
    for (const t4 of e2)
      hu(n2.remoteStore, t4);
  } else if (false === e && false !== n2.dc) {
    const t3 = [];
    let e2 = Promise.resolve();
    n2.rc.forEach((s, i) => {
      n2.sharedClientState.isLocalQueryTarget(i) ? t3.push(i) : e2 = e2.then(() => (gc(n2, i), So(
        n2.localStore,
        i,
        true
      ))), lu(n2.remoteStore, i);
    }), await e2, await Sc(n2, t3), function(t4) {
      const e3 = $(t4);
      e3.cc.forEach((t5, n3) => {
        lu(e3.remoteStore, n3);
      }), e3.ac.fs(), e3.cc = /* @__PURE__ */ new Map(), e3.uc = new Bt(ct.comparator);
    }(n2), n2.dc = false, await Nu(n2.remoteStore, false);
  }
}
async function Sc(t2, e, n2) {
  const s = $(t2), i = [], r2 = [];
  for (const t3 of e) {
    let e2;
    const n3 = s.rc.get(t3);
    if (n3 && 0 !== n3.length) {
      e2 = await Vo(s.localStore, cn(n3[0]));
      for (const t4 of n3) {
        const e3 = s.ic.get(t4), n4 = await bc(s, e3);
        n4.snapshot && r2.push(n4.snapshot);
      }
    } else {
      const n4 = await Co(s.localStore, t3);
      e2 = await Vo(s.localStore, n4), await oc(
        s,
        Dc(n4),
        t3,
        false,
        e2.resumeToken
      );
    }
    i.push(e2);
  }
  return s.sc.zo(r2), i;
}
function Dc(t2) {
  return tn(t2.path, t2.collectionGroup, t2.orderBy, t2.filters, t2.limit, "F", t2.startAt, t2.endAt);
}
function Cc(t2) {
  const e = $(t2);
  return $($(e.localStore).persistence).vi();
}
async function xc(t2, e, n2, s) {
  const i = $(t2);
  if (i.dc)
    return void C("SyncEngine", "Ignoring unexpected query state notification.");
  const r2 = i.rc.get(e);
  if (r2 && r2.length > 0)
    switch (n2) {
      case "current":
      case "not-current": {
        const t3 = await xo(i.localStore, _n(r2[0])), s2 = ws.createSynthesizedRemoteEventForCurrentChange(e, "current" === n2, Wt.EMPTY_BYTE_STRING);
        await Ec(i, t3, s2);
        break;
      }
      case "rejected":
        await So(
          i.localStore,
          e,
          true
        ), gc(i, e, s);
        break;
      default:
        O();
    }
}
async function Nc(t2, e, n2) {
  const s = kc(t2);
  if (s.dc) {
    for (const t3 of e) {
      if (s.rc.has(t3)) {
        C("SyncEngine", "Adding an already active target " + t3);
        continue;
      }
      const e2 = await Co(s.localStore, t3), n3 = await Vo(s.localStore, e2);
      await oc(
        s,
        Dc(e2),
        n3.targetId,
        false,
        n3.resumeToken
      ), hu(s.remoteStore, n3);
    }
    for (const t3 of n2)
      s.rc.has(t3) && await So(
        s.localStore,
        t3,
        false
      ).then(() => {
        lu(s.remoteStore, t3), gc(s, t3);
      }).catch(Et);
  }
}
function kc(t2) {
  const e = $(t2);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = ac.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Rc.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = lc.bind(null, e), e.sc.zo = Qu.bind(null, e.eventManager), e.sc.wc = ju.bind(null, e.eventManager), e;
}
function Oc(t2) {
  const e = $(t2);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = fc.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = dc.bind(null, e), e;
}
function Mc(t2, e, n2) {
  const s = $(t2);
  (async function(t3, e2, n3) {
    try {
      const s2 = await e2.getMetadata();
      if (await function(t4, e3) {
        const n4 = $(t4), s3 = Ds(e3.createTime);
        return n4.persistence.runTransaction("hasNewerBundle", "readonly", (t5) => n4.Ns.getBundleMetadata(t5, e3.id)).then((t5) => !!t5 && t5.createTime.compareTo(s3) >= 0);
      }(t3.localStore, s2))
        return await e2.close(), n3._completeWith(function(t4) {
          return {
            taskState: "Success",
            documentsLoaded: t4.totalDocuments,
            bytesLoaded: t4.totalBytes,
            totalDocuments: t4.totalDocuments,
            totalBytes: t4.totalBytes
          };
        }(s2)), Promise.resolve(/* @__PURE__ */ new Set());
      n3._updateProgress(Xu(s2));
      const i = new Yu(s2, t3.localStore, e2.It);
      let r2 = await e2.mc();
      for (; r2; ) {
        const t4 = await i.Fu(r2);
        t4 && n3._updateProgress(t4), r2 = await e2.mc();
      }
      const o = await i.complete();
      return await Ec(
        t3,
        o.Lu,
        void 0
      ), await function(t4, e3) {
        const n4 = $(t4);
        return n4.persistence.runTransaction("Save bundle", "readwrite", (t5) => n4.Ns.saveBundleMetadata(t5, e3));
      }(t3.localStore, s2), n3._completeWith(o.progress), Promise.resolve(o.Bu);
    } catch (t4) {
      return N("SyncEngine", `Loading bundle failed with ${t4}`), n3._failWith(t4), Promise.resolve(/* @__PURE__ */ new Set());
    }
  })(s, e, n2).then((t3) => {
    s.sharedClientState.notifyBundleLoaded(t3);
  });
}
class Fc {
  constructor() {
    this.synchronizeTabs = false;
  }
  async initialize(t2) {
    this.It = Zo(t2.databaseInfo.databaseId), this.sharedClientState = this.gc(t2), this.persistence = this.yc(t2), await this.persistence.start(), this.localStore = this.Ic(t2), this.gcScheduler = this.Tc(t2, this.localStore), this.indexBackfillerScheduler = this.Ec(t2, this.localStore);
  }
  Tc(t2, e) {
    return null;
  }
  Ec(t2, e) {
    return null;
  }
  Ic(t2) {
    return To(this.persistence, new po(), t2.initialUser, this.It);
  }
  yc(t2) {
    return new uo(ao.Bs, this.It);
  }
  gc(t2) {
    return new Qo();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
}
class $c extends Fc {
  constructor(t2, e, n2) {
    super(), this.Ac = t2, this.cacheSizeBytes = e, this.forceOwnership = n2, this.synchronizeTabs = false;
  }
  async initialize(t2) {
    await super.initialize(t2), await this.Ac.initialize(this, t2), await Oc(this.Ac.syncEngine), await Au(this.Ac.remoteStore), await this.persistence.li(() => (this.gcScheduler && !this.gcScheduler.started && this.gcScheduler.start(), this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started && this.indexBackfillerScheduler.start(), Promise.resolve()));
  }
  Ic(t2) {
    return To(this.persistence, new po(), t2.initialUser, this.It);
  }
  Tc(t2, e) {
    const n2 = this.persistence.referenceDelegate.garbageCollector;
    return new $r(n2, t2.asyncQueue, e);
  }
  Ec(t2, e) {
    const n2 = new kt(e, this.persistence);
    return new Nt(t2.asyncQueue, n2);
  }
  yc(t2) {
    const e = go(t2.databaseInfo.databaseId, t2.databaseInfo.persistenceKey), n2 = void 0 !== this.cacheSizeBytes ? Ar.withCacheSize(this.cacheSizeBytes) : Ar.DEFAULT;
    return new _o(this.synchronizeTabs, e, t2.clientId, n2, t2.asyncQueue, Yo(), Xo(), this.It, this.sharedClientState, !!this.forceOwnership);
  }
  gc(t2) {
    return new Qo();
  }
}
class Bc extends $c {
  constructor(t2, e) {
    super(t2, e, false), this.Ac = t2, this.cacheSizeBytes = e, this.synchronizeTabs = true;
  }
  async initialize(t2) {
    await super.initialize(t2);
    const e = this.Ac.syncEngine;
    this.sharedClientState instanceof Go && (this.sharedClientState.syncEngine = {
      Fr: vc.bind(null, e),
      $r: xc.bind(null, e),
      Br: Nc.bind(null, e),
      vi: Cc.bind(null, e),
      Mr: Pc.bind(null, e)
    }, await this.sharedClientState.start()), await this.persistence.li(async (t3) => {
      await Vc(this.Ac.syncEngine, t3), this.gcScheduler && (t3 && !this.gcScheduler.started ? this.gcScheduler.start() : t3 || this.gcScheduler.stop()), this.indexBackfillerScheduler && (t3 && !this.indexBackfillerScheduler.started ? this.indexBackfillerScheduler.start() : t3 || this.indexBackfillerScheduler.stop());
    });
  }
  gc(t2) {
    const e = Yo();
    if (!Go.C(e))
      throw new L(B.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
    const n2 = go(t2.databaseInfo.databaseId, t2.databaseInfo.persistenceKey);
    return new Go(e, t2.asyncQueue, n2, t2.clientId, t2.initialUser);
  }
}
class Lc {
  async initialize(t2, e) {
    this.localStore || (this.localStore = t2.localStore, this.sharedClientState = t2.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(
      e,
      !t2.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (t3) => hc(this.syncEngine, t3, 1), this.remoteStore.remoteSyncer.handleCredentialChange = Ac.bind(null, this.syncEngine), await Nu(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t2) {
    return new qu();
  }
  createDatastore(t2) {
    const e = Zo(t2.databaseInfo.databaseId), n2 = (s = t2.databaseInfo, new Jo(s));
    var s;
    return function(t3, e2, n3, s2) {
      return new iu(t3, e2, n3, s2);
    }(t2.authCredentials, t2.appCheckCredentials, n2, e);
  }
  createRemoteStore(t2) {
    return e = this.localStore, n2 = this.datastore, s = t2.asyncQueue, i = (t3) => hc(this.syncEngine, t3, 0), r2 = Wo.C() ? new Wo() : new jo(), new uu(e, n2, s, i, r2);
    var e, n2, s, i, r2;
  }
  createSyncEngine(t2, e) {
    return function(t3, e2, n2, s, i, r2, o) {
      const u2 = new ic(t3, e2, n2, s, i, r2);
      return o && (u2.dc = true), u2;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t2.initialUser, t2.maxConcurrentLimboResolutions, e);
  }
  terminate() {
    return async function(t2) {
      const e = $(t2);
      C("RemoteStore", "RemoteStore shutting down."), e.wu.add(5), await au(e), e.gu.shutdown(), e.yu.set("Unknown");
    }(this.remoteStore);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Uc(t2, e, n2) {
  if (!n2)
    throw new L(B.INVALID_ARGUMENT, `Function ${t2}() cannot be called with an empty ${e}.`);
}
function qc(t2, e, n2, s) {
  if (true === e && true === s)
    throw new L(B.INVALID_ARGUMENT, `${t2} and ${n2} cannot be used together.`);
}
function Kc(t2) {
  if (!ct.isDocumentKey(t2))
    throw new L(B.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t2} has ${t2.length}.`);
}
function Gc(t2) {
  if (ct.isDocumentKey(t2))
    throw new L(B.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t2} has ${t2.length}.`);
}
function Qc(t2) {
  if (void 0 === t2)
    return "undefined";
  if (null === t2)
    return "null";
  if ("string" == typeof t2)
    return t2.length > 20 && (t2 = `${t2.substring(0, 20)}...`), JSON.stringify(t2);
  if ("number" == typeof t2 || "boolean" == typeof t2)
    return "" + t2;
  if ("object" == typeof t2) {
    if (t2 instanceof Array)
      return "an array";
    {
      const e = function(t3) {
        if (t3.constructor)
          return t3.constructor.name;
        return null;
      }(t2);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return "function" == typeof t2 ? "a function" : O();
}
function jc(t2, e) {
  if ("_delegate" in t2 && (t2 = t2._delegate), !(t2 instanceof e)) {
    if (e.name === t2.constructor.name)
      throw new L(B.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n2 = Qc(t2);
      throw new L(B.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n2}`);
    }
  }
  return t2;
}
function Wc(t2, e) {
  if (e <= 0)
    throw new L(B.INVALID_ARGUMENT, `Function ${t2}() requires a positive number, but it was: ${e}.`);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zc = /* @__PURE__ */ new Map();
class Hc {
  constructor(t2) {
    var e;
    if (void 0 === t2.host) {
      if (void 0 !== t2.ssl)
        throw new L(B.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      this.host = t2.host, this.ssl = null === (e = t2.ssl) || void 0 === e || e;
    if (this.credentials = t2.credentials, this.ignoreUndefinedProperties = !!t2.ignoreUndefinedProperties, void 0 === t2.cacheSizeBytes)
      this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== t2.cacheSizeBytes && t2.cacheSizeBytes < 1048576)
        throw new L(B.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t2.cacheSizeBytes;
    }
    this.experimentalForceLongPolling = !!t2.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t2.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t2.useFetchStreams, qc("experimentalForceLongPolling", t2.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling);
  }
  isEqual(t2) {
    return this.host === t2.host && this.ssl === t2.ssl && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties && this.useFetchStreams === t2.useFetchStreams;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc {
  constructor(t2, e, n2, s) {
    this._authCredentials = t2, this._appCheckCredentials = e, this._databaseId = n2, this._app = s, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Hc({}), this._settingsFrozen = false;
  }
  get app() {
    if (!this._app)
      throw new L(B.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return void 0 !== this._terminateTask;
  }
  _setSettings(t2) {
    if (this._settingsFrozen)
      throw new L(B.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new Hc(t2), void 0 !== t2.credentials && (this._authCredentials = function(t3) {
      if (!t3)
        return new K();
      switch (t3.type) {
        case "gapi":
          const e = t3.client;
          return new W(e, t3.sessionIndex || "0", t3.iamToken || null, t3.authTokenFactory || null);
        case "provider":
          return t3.client;
        default:
          throw new L(B.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t2.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  _terminate() {
    return function(t2) {
      const e = zc.get(t2);
      e && (C("ComponentProvider", "Removing Datastore"), zc.delete(t2), e.terminate());
    }(this), Promise.resolve();
  }
}
function Yc(t2, e, n2, s = {}) {
  var i;
  const r2 = (t2 = jc(t2, Jc))._getSettings();
  if ("firestore.googleapis.com" !== r2.host && r2.host !== e && N("Host has been set in both settings() and useEmulator(), emulator host will be used"), t2._setSettings(Object.assign(Object.assign({}, r2), {
    host: `${e}:${n2}`,
    ssl: false
  })), s.mockUserToken) {
    let e2, n3;
    if ("string" == typeof s.mockUserToken)
      e2 = s.mockUserToken, n3 = P.MOCK_USER;
    else {
      e2 = createMockUserToken(s.mockUserToken, null === (i = t2._app) || void 0 === i ? void 0 : i.options.projectId);
      const r3 = s.mockUserToken.sub || s.mockUserToken.user_id;
      if (!r3)
        throw new L(B.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      n3 = new P(r3);
    }
    t2._authCredentials = new G(new q(e2, n3));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc {
  constructor(t2, e, n2) {
    this.converter = e, this._key = n2, this.type = "document", this.firestore = t2;
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new ta(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t2) {
    return new Xc(this.firestore, t2, this._key);
  }
}
class Zc {
  constructor(t2, e, n2) {
    this.converter = e, this._query = n2, this.type = "query", this.firestore = t2;
  }
  withConverter(t2) {
    return new Zc(this.firestore, t2, this._query);
  }
}
class ta extends Zc {
  constructor(t2, e, n2) {
    super(t2, e, en(n2)), this._path = n2, this.type = "collection";
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t2 = this._path.popLast();
    return t2.isEmpty() ? null : new Xc(
      this.firestore,
      null,
      new ct(t2)
    );
  }
  withConverter(t2) {
    return new ta(this.firestore, t2, this._path);
  }
}
function ea(t2, e, ...n2) {
  if (t2 = getModularInstance(t2), Uc("collection", "path", e), t2 instanceof Jc) {
    const s = rt.fromString(e, ...n2);
    return Gc(s), new ta(t2, null, s);
  }
  {
    if (!(t2 instanceof Xc || t2 instanceof ta))
      throw new L(B.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(rt.fromString(e, ...n2));
    return Gc(s), new ta(
      t2.firestore,
      null,
      s
    );
  }
}
function na(t2, e) {
  if (t2 = jc(t2, Jc), Uc("collectionGroup", "collection id", e), e.indexOf("/") >= 0)
    throw new L(B.INVALID_ARGUMENT, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
  return new Zc(
    t2,
    null,
    function(t3) {
      return new Ze(rt.emptyPath(), t3);
    }(e)
  );
}
function sa(t2, e, ...n2) {
  if (t2 = getModularInstance(t2), 1 === arguments.length && (e = X.R()), Uc("doc", "path", e), t2 instanceof Jc) {
    const s = rt.fromString(e, ...n2);
    return Kc(s), new Xc(
      t2,
      null,
      new ct(s)
    );
  }
  {
    if (!(t2 instanceof Xc || t2 instanceof ta))
      throw new L(B.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(rt.fromString(e, ...n2));
    return Kc(s), new Xc(t2.firestore, t2 instanceof ta ? t2.converter : null, new ct(s));
  }
}
function ia(t2, e) {
  return t2 = getModularInstance(t2), e = getModularInstance(e), (t2 instanceof Xc || t2 instanceof ta) && (e instanceof Xc || e instanceof ta) && (t2.firestore === e.firestore && t2.path === e.path && t2.converter === e.converter);
}
function ra(t2, e) {
  return t2 = getModularInstance(t2), e = getModularInstance(e), t2 instanceof Zc && e instanceof Zc && (t2.firestore === e.firestore && hn(t2._query, e._query) && t2.converter === e.converter);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oa(t2, e = 10240) {
  let n2 = 0;
  return {
    async read() {
      if (n2 < t2.byteLength) {
        const s = {
          value: t2.slice(n2, n2 + e),
          done: false
        };
        return n2 += e, s;
      }
      return {
        done: true
      };
    },
    async cancel() {
    },
    releaseLock() {
    },
    closed: Promise.reject("unimplemented")
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua {
  constructor(t2) {
    this.observer = t2, this.muted = false;
  }
  next(t2) {
    this.observer.next && this.Rc(this.observer.next, t2);
  }
  error(t2) {
    this.observer.error ? this.Rc(this.observer.error, t2) : x("Uncaught Error in snapshot listener:", t2);
  }
  bc() {
    this.muted = true;
  }
  Rc(t2, e) {
    this.muted || setTimeout(() => {
      this.muted || t2(e);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca {
  constructor(t2, e) {
    this.Pc = t2, this.It = e, this.metadata = new U(), this.buffer = new Uint8Array(), this.vc = new TextDecoder("utf-8"), this.Vc().then((t3) => {
      t3 && t3.Ou() ? this.metadata.resolve(t3.payload.metadata) : this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null == t3 ? void 0 : t3.payload)}`));
    }, (t3) => this.metadata.reject(t3));
  }
  close() {
    return this.Pc.cancel();
  }
  async getMetadata() {
    return this.metadata.promise;
  }
  async mc() {
    return await this.getMetadata(), this.Vc();
  }
  async Vc() {
    const t2 = await this.Sc();
    if (null === t2)
      return null;
    const e = this.vc.decode(t2), n2 = Number(e);
    isNaN(n2) && this.Dc(`length string (${e}) is not valid number`);
    const s = await this.Cc(n2);
    return new Hu(JSON.parse(s), t2.length + n2);
  }
  xc() {
    return this.buffer.findIndex((t2) => t2 === "{".charCodeAt(0));
  }
  async Sc() {
    for (; this.xc() < 0; ) {
      if (await this.Nc())
        break;
    }
    if (0 === this.buffer.length)
      return null;
    const t2 = this.xc();
    t2 < 0 && this.Dc("Reached the end of bundle when a length string is expected.");
    const e = this.buffer.slice(0, t2);
    return this.buffer = this.buffer.slice(t2), e;
  }
  async Cc(t2) {
    for (; this.buffer.length < t2; ) {
      await this.Nc() && this.Dc("Reached the end of bundle when more is expected.");
    }
    const e = this.vc.decode(this.buffer.slice(0, t2));
    return this.buffer = this.buffer.slice(t2), e;
  }
  Dc(t2) {
    throw this.Pc.cancel(), new Error(`Invalid bundle format: ${t2}`);
  }
  async Nc() {
    const t2 = await this.Pc.read();
    if (!t2.done) {
      const e = new Uint8Array(this.buffer.length + t2.value.length);
      e.set(this.buffer), e.set(t2.value, this.buffer.length), this.buffer = e;
    }
    return t2.done;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa {
  constructor(t2) {
    this.datastore = t2, this.readVersions = /* @__PURE__ */ new Map(), this.mutations = [], this.committed = false, this.lastWriteError = null, this.writtenDocs = /* @__PURE__ */ new Set();
  }
  async lookup(t2) {
    if (this.ensureCommitNotCalled(), this.mutations.length > 0)
      throw new L(B.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
    const e = await async function(t3, e2) {
      const n2 = $(t3), s = Fs(n2.It) + "/documents", i = {
        documents: e2.map((t4) => Ns(n2.It, t4))
      }, r2 = await n2._o("BatchGetDocuments", s, i, e2.length), o = /* @__PURE__ */ new Map();
      r2.forEach((t4) => {
        const e3 = Us(n2.It, t4);
        o.set(e3.key.toString(), e3);
      });
      const u2 = [];
      return e2.forEach((t4) => {
        const e3 = o.get(t4.toString());
        M(!!e3), u2.push(e3);
      }), u2;
    }(this.datastore, t2);
    return e.forEach((t3) => this.recordVersion(t3)), e;
  }
  set(t2, e) {
    this.write(e.toMutation(t2, this.precondition(t2))), this.writtenDocs.add(t2.toString());
  }
  update(t2, e) {
    try {
      this.write(e.toMutation(t2, this.preconditionForUpdate(t2)));
    } catch (t3) {
      this.lastWriteError = t3;
    }
    this.writtenDocs.add(t2.toString());
  }
  delete(t2) {
    this.write(new zn(t2, this.precondition(t2))), this.writtenDocs.add(t2.toString());
  }
  async commit() {
    if (this.ensureCommitNotCalled(), this.lastWriteError)
      throw this.lastWriteError;
    const t2 = this.readVersions;
    this.mutations.forEach((e) => {
      t2.delete(e.key.toString());
    }), t2.forEach((t3, e) => {
      const n2 = ct.fromPath(e);
      this.mutations.push(new Hn(n2, this.precondition(n2)));
    }), await async function(t3, e) {
      const n2 = $(t3), s = Fs(n2.It) + "/documents", i = {
        writes: e.map((t4) => Ks(n2.It, t4))
      };
      await n2.ao("Commit", s, i);
    }(this.datastore, this.mutations), this.committed = true;
  }
  recordVersion(t2) {
    let e;
    if (t2.isFoundDocument())
      e = t2.version;
    else {
      if (!t2.isNoDocument())
        throw O();
      e = st.min();
    }
    const n2 = this.readVersions.get(t2.key.toString());
    if (n2) {
      if (!e.isEqual(n2))
        throw new L(B.ABORTED, "Document version changed between two reads.");
    } else
      this.readVersions.set(t2.key.toString(), e);
  }
  precondition(t2) {
    const e = this.readVersions.get(t2.toString());
    return !this.writtenDocs.has(t2.toString()) && e ? e.isEqual(st.min()) ? On.exists(false) : On.updateTime(e) : On.none();
  }
  preconditionForUpdate(t2) {
    const e = this.readVersions.get(t2.toString());
    if (!this.writtenDocs.has(t2.toString()) && e) {
      if (e.isEqual(st.min()))
        throw new L(B.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      return On.updateTime(e);
    }
    return On.exists(true);
  }
  write(t2) {
    this.ensureCommitNotCalled(), this.mutations.push(t2);
  }
  ensureCommitNotCalled() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da {
  constructor(t2, e, n2, s, i) {
    this.asyncQueue = t2, this.datastore = e, this.options = n2, this.updateFunction = s, this.deferred = i, this.kc = n2.maxAttempts, this.No = new tu(this.asyncQueue, "transaction_retry");
  }
  run() {
    this.kc -= 1, this.Oc();
  }
  Oc() {
    this.No.Ro(async () => {
      const t2 = new fa(this.datastore), e = this.Mc(t2);
      e && e.then((e2) => {
        this.asyncQueue.enqueueAndForget(() => t2.commit().then(() => {
          this.deferred.resolve(e2);
        }).catch((t3) => {
          this.Fc(t3);
        }));
      }).catch((t3) => {
        this.Fc(t3);
      });
    });
  }
  Mc(t2) {
    try {
      const e = this.updateFunction(t2);
      return !se(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t3) {
      return this.deferred.reject(t3), null;
    }
  }
  Fc(t2) {
    this.kc > 0 && this.$c(t2) ? (this.kc -= 1, this.asyncQueue.enqueueAndForget(() => (this.Oc(), Promise.resolve()))) : this.deferred.reject(t2);
  }
  $c(t2) {
    if ("FirebaseError" === t2.name) {
      const e = t2.code;
      return "aborted" === e || "failed-precondition" === e || !Zn(e);
    }
    return false;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a {
  constructor(t2, e, n2, s) {
    this.authCredentials = t2, this.appCheckCredentials = e, this.asyncQueue = n2, this.databaseInfo = s, this.user = P.UNAUTHENTICATED, this.clientId = X.R(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n2, async (t3) => {
      C("FirestoreClient", "Received user=", t3.uid), await this.authCredentialListener(t3), this.user = t3;
    }), this.appCheckCredentials.start(n2, (t3) => (C("FirestoreClient", "Received new app check token=", t3), this.appCheckCredentialListener(t3, this.user)));
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(t2) {
    this.authCredentialListener = t2;
  }
  setAppCheckTokenChangeListener(t2) {
    this.appCheckCredentialListener = t2;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new L(B.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t2 = new U();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t2.resolve();
      } catch (e) {
        const n2 = Fu(e, "Failed to shutdown persistence");
        t2.reject(n2);
      }
    }), t2.promise;
  }
}
async function wa(t2, e) {
  t2.asyncQueue.verifyOperationInProgress(), C("FirestoreClient", "Initializing OfflineComponentProvider");
  const n2 = await t2.getConfiguration();
  await e.initialize(n2);
  let s = n2.initialUser;
  t2.setCredentialChangeListener(async (t3) => {
    s.isEqual(t3) || (await Eo(e.localStore, t3), s = t3);
  }), e.persistence.setDatabaseDeletedListener(() => t2.terminate()), t2.offlineComponents = e;
}
async function ma(t2, e) {
  t2.asyncQueue.verifyOperationInProgress();
  const n2 = await ga(t2);
  C("FirestoreClient", "Initializing OnlineComponentProvider");
  const s = await t2.getConfiguration();
  await e.initialize(n2, s), t2.setCredentialChangeListener((t3) => xu(e.remoteStore, t3)), t2.setAppCheckTokenChangeListener((t3, n3) => xu(e.remoteStore, n3)), t2.onlineComponents = e;
}
async function ga(t2) {
  return t2.offlineComponents || (C("FirestoreClient", "Using default OfflineComponentProvider"), await wa(t2, new Fc())), t2.offlineComponents;
}
async function ya(t2) {
  return t2.onlineComponents || (C("FirestoreClient", "Using default OnlineComponentProvider"), await ma(t2, new Lc())), t2.onlineComponents;
}
function pa(t2) {
  return ga(t2).then((t3) => t3.persistence);
}
function Ia(t2) {
  return ga(t2).then((t3) => t3.localStore);
}
function Ta(t2) {
  return ya(t2).then((t3) => t3.remoteStore);
}
function Ea(t2) {
  return ya(t2).then((t3) => t3.syncEngine);
}
function Aa(t2) {
  return ya(t2).then((t3) => t3.datastore);
}
async function Ra(t2) {
  const e = await ya(t2), n2 = e.eventManager;
  return n2.onListen = rc.bind(null, e.syncEngine), n2.onUnlisten = uc.bind(null, e.syncEngine), n2;
}
function ba(t2) {
  return t2.asyncQueue.enqueue(async () => {
    const e = await pa(t2), n2 = await Ta(t2);
    return e.setNetworkEnabled(true), function(t3) {
      const e2 = $(t3);
      return e2.wu.delete(0), cu(e2);
    }(n2);
  });
}
function Pa(t2) {
  return t2.asyncQueue.enqueue(async () => {
    const e = await pa(t2), n2 = await Ta(t2);
    return e.setNetworkEnabled(false), async function(t3) {
      const e2 = $(t3);
      e2.wu.add(0), await au(e2), e2.yu.set("Offline");
    }(n2);
  });
}
function va(t2, e) {
  const n2 = new U();
  return t2.asyncQueue.enqueueAndForget(async () => async function(t3, e2, n3) {
    try {
      const s = await function(t4, e3) {
        const n4 = $(t4);
        return n4.persistence.runTransaction("read document", "readonly", (t5) => n4.localDocuments.getDocument(t5, e3));
      }(t3, e2);
      s.isFoundDocument() ? n3.resolve(s) : s.isNoDocument() ? n3.resolve(null) : n3.reject(new L(B.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
    } catch (t4) {
      const s = Fu(t4, `Failed to get document '${e2} from cache`);
      n3.reject(s);
    }
  }(await Ia(t2), e, n2)), n2.promise;
}
function Va(t2, e, n2 = {}) {
  const s = new U();
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2, n3, s2, i) {
    const r2 = new ua({
      next: (r3) => {
        e2.enqueueAndForget(() => Gu(t3, o));
        const u2 = r3.docs.has(n3);
        !u2 && r3.fromCache ? i.reject(new L(B.UNAVAILABLE, "Failed to get document because the client is offline.")) : u2 && r3.fromCache && s2 && "server" === s2.source ? i.reject(new L(B.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(r3);
      },
      error: (t4) => i.reject(t4)
    }), o = new zu(en(n3.path), r2, {
      includeMetadataChanges: true,
      ku: true
    });
    return Ku(t3, o);
  }(await Ra(t2), t2.asyncQueue, e, n2, s)), s.promise;
}
function Sa(t2, e) {
  const n2 = new U();
  return t2.asyncQueue.enqueueAndForget(async () => async function(t3, e2, n3) {
    try {
      const s = await Do(
        t3,
        e2,
        true
      ), i = new ec(e2, s.Hi), r2 = i.Wu(s.documents), o = i.applyChanges(
        r2,
        false
      );
      n3.resolve(o.snapshot);
    } catch (t4) {
      const s = Fu(t4, `Failed to execute query '${e2} against cache`);
      n3.reject(s);
    }
  }(await Ia(t2), e, n2)), n2.promise;
}
function Da(t2, e, n2 = {}) {
  const s = new U();
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2, n3, s2, i) {
    const r2 = new ua({
      next: (n4) => {
        e2.enqueueAndForget(() => Gu(t3, o)), n4.fromCache && "server" === s2.source ? i.reject(new L(B.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n4);
      },
      error: (t4) => i.reject(t4)
    }), o = new zu(n3, r2, {
      includeMetadataChanges: true,
      ku: true
    });
    return Ku(t3, o);
  }(await Ra(t2), t2.asyncQueue, e, n2, s)), s.promise;
}
function Ca(t2, e) {
  const n2 = new ua(e);
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2) {
    $(t3).bu.add(e2), e2.next();
  }(await Ra(t2), n2)), () => {
    n2.bc(), t2.asyncQueue.enqueueAndForget(async () => function(t3, e2) {
      $(t3).bu.delete(e2);
    }(await Ra(t2), n2));
  };
}
function xa(t2, e, n2, s) {
  const i = function(t3, e2) {
    let n3;
    n3 = "string" == typeof t3 ? new TextEncoder().encode(t3) : t3;
    return function(t4, e3) {
      return new ca(t4, e3);
    }(function(t4, e3) {
      if (t4 instanceof Uint8Array)
        return oa(t4, e3);
      if (t4 instanceof ArrayBuffer)
        return oa(new Uint8Array(t4), e3);
      if (t4 instanceof ReadableStream)
        return t4.getReader();
      throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
    }(n3), e2);
  }(n2, Zo(e));
  t2.asyncQueue.enqueueAndForget(async () => {
    Mc(await Ea(t2), i, s);
  });
}
function Na(t2, e) {
  return t2.asyncQueue.enqueue(async () => function(t3, e2) {
    const n2 = $(t3);
    return n2.persistence.runTransaction("Get named query", "readonly", (t4) => n2.Ns.getNamedQuery(t4, e2));
  }(await Ia(t2), e));
}
class ka {
  constructor() {
    this.Bc = Promise.resolve(), this.Lc = [], this.Uc = false, this.qc = [], this.Kc = null, this.Gc = false, this.Qc = false, this.jc = [], this.No = new tu(this, "async_queue_retry"), this.Wc = () => {
      const t3 = Xo();
      t3 && C("AsyncQueue", "Visibility state changed to " + t3.visibilityState), this.No.Po();
    };
    const t2 = Xo();
    t2 && "function" == typeof t2.addEventListener && t2.addEventListener("visibilitychange", this.Wc);
  }
  get isShuttingDown() {
    return this.Uc;
  }
  enqueueAndForget(t2) {
    this.enqueue(t2);
  }
  enqueueAndForgetEvenWhileRestricted(t2) {
    this.zc(), this.Hc(t2);
  }
  enterRestrictedMode(t2) {
    if (!this.Uc) {
      this.Uc = true, this.Qc = t2 || false;
      const e = Xo();
      e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Wc);
    }
  }
  enqueue(t2) {
    if (this.zc(), this.Uc)
      return new Promise(() => {
      });
    const e = new U();
    return this.Hc(() => this.Uc && this.Qc ? Promise.resolve() : (t2().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
  }
  enqueueRetryable(t2) {
    this.enqueueAndForget(() => (this.Lc.push(t2), this.Jc()));
  }
  async Jc() {
    if (0 !== this.Lc.length) {
      try {
        await this.Lc[0](), this.Lc.shift(), this.No.reset();
      } catch (t2) {
        if (!Vt(t2))
          throw t2;
        C("AsyncQueue", "Operation failed with retryable error: " + t2);
      }
      this.Lc.length > 0 && this.No.Ro(() => this.Jc());
    }
  }
  Hc(t2) {
    const e = this.Bc.then(() => (this.Gc = true, t2().catch((t3) => {
      this.Kc = t3, this.Gc = false;
      const e2 = function(t4) {
        let e3 = t4.message || "";
        t4.stack && (e3 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack);
        return e3;
      }(t3);
      throw x("INTERNAL UNHANDLED ERROR: ", e2), t3;
    }).then((t3) => (this.Gc = false, t3))));
    return this.Bc = e, e;
  }
  enqueueAfterDelay(t2, e, n2) {
    this.zc(), this.jc.indexOf(t2) > -1 && (e = 0);
    const s = Mu.createAndSchedule(this, t2, e, n2, (t3) => this.Yc(t3));
    return this.qc.push(s), s;
  }
  zc() {
    this.Kc && O();
  }
  verifyOperationInProgress() {
  }
  async Xc() {
    let t2;
    do {
      t2 = this.Bc, await t2;
    } while (t2 !== this.Bc);
  }
  Zc(t2) {
    for (const e of this.qc)
      if (e.timerId === t2)
        return true;
    return false;
  }
  ta(t2) {
    return this.Xc().then(() => {
      this.qc.sort((t3, e) => t3.targetTimeMs - e.targetTimeMs);
      for (const e of this.qc)
        if (e.skipDelay(), "all" !== t2 && e.timerId === t2)
          break;
      return this.Xc();
    });
  }
  ea(t2) {
    this.jc.push(t2);
  }
  Yc(t2) {
    const e = this.qc.indexOf(t2);
    this.qc.splice(e, 1);
  }
}
function Oa(t2) {
  return function(t3, e) {
    if ("object" != typeof t3 || null === t3)
      return false;
    const n2 = t3;
    for (const t4 of e)
      if (t4 in n2 && "function" == typeof n2[t4])
        return true;
    return false;
  }(t2, ["next", "error", "complete"]);
}
class Ma {
  constructor() {
    this._progressObserver = {}, this._taskCompletionResolver = new U(), this._lastProgress = {
      taskState: "Running",
      totalBytes: 0,
      totalDocuments: 0,
      bytesLoaded: 0,
      documentsLoaded: 0
    };
  }
  onProgress(t2, e, n2) {
    this._progressObserver = {
      next: t2,
      error: e,
      complete: n2
    };
  }
  catch(t2) {
    return this._taskCompletionResolver.promise.catch(t2);
  }
  then(t2, e) {
    return this._taskCompletionResolver.promise.then(t2, e);
  }
  _completeWith(t2) {
    this._updateProgress(t2), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(t2);
  }
  _failWith(t2) {
    this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(t2), this._taskCompletionResolver.reject(t2);
  }
  _updateProgress(t2) {
    this._lastProgress = t2, this._progressObserver.next && this._progressObserver.next(t2);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fa = -1;
class $a extends Jc {
  constructor(t2, e, n2, s) {
    super(t2, e, n2, s), this.type = "firestore", this._queue = new ka(), this._persistenceKey = (null == s ? void 0 : s.name) || "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || qa(this), this._firestoreClient.terminate();
  }
}
function Ua(t2) {
  return t2._firestoreClient || qa(t2), t2._firestoreClient.verifyNotTerminated(), t2._firestoreClient;
}
function qa(t2) {
  var e;
  const n2 = t2._freezeSettings(), s = function(t3, e2, n3, s2) {
    return new ee(t3, e2, n3, s2.host, s2.ssl, s2.experimentalForceLongPolling, s2.experimentalAutoDetectLongPolling, s2.useFetchStreams);
  }(t2._databaseId, (null === (e = t2._app) || void 0 === e ? void 0 : e.options.appId) || "", t2._persistenceKey, n2);
  t2._firestoreClient = new _a(t2._authCredentials, t2._appCheckCredentials, t2._queue, s);
}
function Ka(t2, e) {
  Za(t2 = jc(t2, $a));
  const n2 = Ua(t2), s = t2._freezeSettings(), i = new Lc();
  return Qa(n2, i, new $c(i, s.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
}
function Ga(t2) {
  Za(t2 = jc(t2, $a));
  const e = Ua(t2), n2 = t2._freezeSettings(), s = new Lc();
  return Qa(e, s, new Bc(s, n2.cacheSizeBytes));
}
function Qa(t2, e, n2) {
  const s = new U();
  return t2.asyncQueue.enqueue(async () => {
    try {
      await wa(t2, n2), await ma(t2, e), s.resolve();
    } catch (t3) {
      const e2 = t3;
      if (!function(t4) {
        if ("FirebaseError" === t4.name)
          return t4.code === B.FAILED_PRECONDITION || t4.code === B.UNIMPLEMENTED;
        if ("undefined" != typeof DOMException && t4 instanceof DOMException)
          return 22 === t4.code || 20 === t4.code || 11 === t4.code;
        return true;
      }(e2))
        throw e2;
      N("Error enabling offline persistence. Falling back to persistence disabled: " + e2), s.reject(e2);
    }
  }).then(() => s.promise);
}
function ja(t2) {
  if (t2._initialized && !t2._terminated)
    throw new L(B.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
  const e = new U();
  return t2._queue.enqueueAndForgetEvenWhileRestricted(async () => {
    try {
      await async function(t3) {
        if (!bt.C())
          return Promise.resolve();
        const e2 = t3 + "main";
        await bt.delete(e2);
      }(go(t2._databaseId, t2._persistenceKey)), e.resolve();
    } catch (t3) {
      e.reject(t3);
    }
  }), e.promise;
}
function Wa(t2) {
  return function(t3) {
    const e = new U();
    return t3.asyncQueue.enqueueAndForget(async () => _c(await Ea(t3), e)), e.promise;
  }(Ua(t2 = jc(t2, $a)));
}
function za(t2) {
  return ba(Ua(t2 = jc(t2, $a)));
}
function Ha(t2) {
  return Pa(Ua(t2 = jc(t2, $a)));
}
function Ya(t2, e) {
  const n2 = Ua(t2 = jc(t2, $a)), s = new Ma();
  return xa(n2, t2._databaseId, e, s), s;
}
function Xa(t2, e) {
  return Na(Ua(t2 = jc(t2, $a)), e).then((e2) => e2 ? new Zc(t2, null, e2.query) : null);
}
function Za(t2) {
  if (t2._initialized || t2._terminated)
    throw new L(B.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class th {
  constructor(t2) {
    this._byteString = t2;
  }
  static fromBase64String(t2) {
    try {
      return new th(Wt.fromBase64String(t2));
    } catch (t3) {
      throw new L(B.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t3);
    }
  }
  static fromUint8Array(t2) {
    return new th(Wt.fromUint8Array(t2));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t2) {
    return this._byteString.isEqual(t2._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh {
  constructor(...t2) {
    for (let e = 0; e < t2.length; ++e)
      if (0 === t2[e].length)
        throw new L(B.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new ut(t2);
  }
  isEqual(t2) {
    return this._internalPath.isEqual(t2._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh {
  constructor(t2) {
    this._methodName = t2;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ih {
  constructor(t2, e) {
    if (!isFinite(t2) || t2 < -90 || t2 > 90)
      throw new L(B.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t2);
    if (!isFinite(e) || e < -180 || e > 180)
      throw new L(B.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this._lat = t2, this._long = e;
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t2) {
    return this._lat === t2._lat && this._long === t2._long;
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  _compareTo(t2) {
    return Z(this._lat, t2._lat) || Z(this._long, t2._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rh = /^__.*__$/;
class oh {
  constructor(t2, e, n2) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n2;
  }
  toMutation(t2, e) {
    return null !== this.fieldMask ? new Gn(t2, this.data, this.fieldMask, e, this.fieldTransforms) : new Kn(t2, this.data, e, this.fieldTransforms);
  }
}
class uh {
  constructor(t2, e, n2) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n2;
  }
  toMutation(t2, e) {
    return new Gn(t2, this.data, this.fieldMask, e, this.fieldTransforms);
  }
}
function ch(t2) {
  switch (t2) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw O();
  }
}
class ah {
  constructor(t2, e, n2, s, i, r2) {
    this.settings = t2, this.databaseId = e, this.It = n2, this.ignoreUndefinedProperties = s, void 0 === i && this.na(), this.fieldTransforms = i || [], this.fieldMask = r2 || [];
  }
  get path() {
    return this.settings.path;
  }
  get sa() {
    return this.settings.sa;
  }
  ia(t2) {
    return new ah(Object.assign(Object.assign({}, this.settings), t2), this.databaseId, this.It, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  ra(t2) {
    var e;
    const n2 = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.ia({
      path: n2,
      oa: false
    });
    return s.ua(t2), s;
  }
  ca(t2) {
    var e;
    const n2 = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.ia({
      path: n2,
      oa: false
    });
    return s.na(), s;
  }
  aa(t2) {
    return this.ia({
      path: void 0,
      oa: true
    });
  }
  ha(t2) {
    return Sh(t2, this.settings.methodName, this.settings.la || false, this.path, this.settings.fa);
  }
  contains(t2) {
    return void 0 !== this.fieldMask.find((e) => t2.isPrefixOf(e)) || void 0 !== this.fieldTransforms.find((e) => t2.isPrefixOf(e.field));
  }
  na() {
    if (this.path)
      for (let t2 = 0; t2 < this.path.length; t2++)
        this.ua(this.path.get(t2));
  }
  ua(t2) {
    if (0 === t2.length)
      throw this.ha("Document fields must not be empty");
    if (ch(this.sa) && rh.test(t2))
      throw this.ha('Document fields cannot begin and end with "__"');
  }
}
class hh {
  constructor(t2, e, n2) {
    this.databaseId = t2, this.ignoreUndefinedProperties = e, this.It = n2 || Zo(t2);
  }
  da(t2, e, n2, s = false) {
    return new ah({
      sa: t2,
      methodName: e,
      fa: n2,
      path: ut.emptyPath(),
      oa: false,
      la: s
    }, this.databaseId, this.It, this.ignoreUndefinedProperties);
  }
}
function lh(t2) {
  const e = t2._freezeSettings(), n2 = Zo(t2._databaseId);
  return new hh(t2._databaseId, !!e.ignoreUndefinedProperties, n2);
}
function fh(t2, e, n2, s, i, r2 = {}) {
  const o = t2.da(r2.merge || r2.mergeFields ? 2 : 0, e, n2, i);
  bh("Data must be an object, but it was:", o, s);
  const u2 = Ah(s, o);
  let c, a;
  if (r2.merge)
    c = new Qt(o.fieldMask), a = o.fieldTransforms;
  else if (r2.mergeFields) {
    const t3 = [];
    for (const s2 of r2.mergeFields) {
      const i2 = Ph(e, s2, n2);
      if (!o.contains(i2))
        throw new L(B.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      Dh(t3, i2) || t3.push(i2);
    }
    c = new Qt(t3), a = o.fieldTransforms.filter((t4) => c.covers(t4.field));
  } else
    c = null, a = o.fieldTransforms;
  return new oh(new ve(u2), c, a);
}
class dh extends sh {
  _toFieldTransform(t2) {
    if (2 !== t2.sa)
      throw 1 === t2.sa ? t2.ha(`${this._methodName}() can only appear at the top level of your update data`) : t2.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return t2.fieldMask.push(t2.path), null;
  }
  isEqual(t2) {
    return t2 instanceof dh;
  }
}
function _h(t2, e, n2) {
  return new ah({
    sa: 3,
    fa: e.settings.fa,
    methodName: t2._methodName,
    oa: n2
  }, e.databaseId, e.It, e.ignoreUndefinedProperties);
}
class wh extends sh {
  _toFieldTransform(t2) {
    return new xn(t2.path, new Rn());
  }
  isEqual(t2) {
    return t2 instanceof wh;
  }
}
class mh extends sh {
  constructor(t2, e) {
    super(t2), this._a = e;
  }
  _toFieldTransform(t2) {
    const e = _h(
      this,
      t2,
      true
    ), n2 = this._a.map((t3) => Eh(t3, e)), s = new bn(n2);
    return new xn(t2.path, s);
  }
  isEqual(t2) {
    return this === t2;
  }
}
class gh extends sh {
  constructor(t2, e) {
    super(t2), this._a = e;
  }
  _toFieldTransform(t2) {
    const e = _h(
      this,
      t2,
      true
    ), n2 = this._a.map((t3) => Eh(t3, e)), s = new vn(n2);
    return new xn(t2.path, s);
  }
  isEqual(t2) {
    return this === t2;
  }
}
class yh extends sh {
  constructor(t2, e) {
    super(t2), this.wa = e;
  }
  _toFieldTransform(t2) {
    const e = new Sn(t2.It, pn(t2.It, this.wa));
    return new xn(t2.path, e);
  }
  isEqual(t2) {
    return this === t2;
  }
}
function ph(t2, e, n2, s) {
  const i = t2.da(1, e, n2);
  bh("Data must be an object, but it was:", i, s);
  const r2 = [], o = ve.empty();
  Ft(s, (t3, s2) => {
    const u3 = Vh(e, t3, n2);
    s2 = getModularInstance(s2);
    const c = i.ca(u3);
    if (s2 instanceof dh)
      r2.push(u3);
    else {
      const t4 = Eh(s2, c);
      null != t4 && (r2.push(u3), o.set(u3, t4));
    }
  });
  const u2 = new Qt(r2);
  return new uh(o, u2, i.fieldTransforms);
}
function Ih(t2, e, n2, s, i, r2) {
  const o = t2.da(1, e, n2), u2 = [Ph(e, s, n2)], c = [i];
  if (r2.length % 2 != 0)
    throw new L(B.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let t3 = 0; t3 < r2.length; t3 += 2)
    u2.push(Ph(e, r2[t3])), c.push(r2[t3 + 1]);
  const a = [], h = ve.empty();
  for (let t3 = u2.length - 1; t3 >= 0; --t3)
    if (!Dh(a, u2[t3])) {
      const e2 = u2[t3];
      let n3 = c[t3];
      n3 = getModularInstance(n3);
      const s2 = o.ca(e2);
      if (n3 instanceof dh)
        a.push(e2);
      else {
        const t4 = Eh(n3, s2);
        null != t4 && (a.push(e2), h.set(e2, t4));
      }
    }
  const l2 = new Qt(a);
  return new uh(h, l2, o.fieldTransforms);
}
function Th(t2, e, n2, s = false) {
  return Eh(n2, t2.da(s ? 4 : 3, e));
}
function Eh(t2, e) {
  if (Rh(
    t2 = getModularInstance(t2)
  ))
    return bh("Unsupported field value:", e, t2), Ah(t2, e);
  if (t2 instanceof sh)
    return function(t3, e2) {
      if (!ch(e2.sa))
        throw e2.ha(`${t3._methodName}() can only be used with update() and set()`);
      if (!e2.path)
        throw e2.ha(`${t3._methodName}() is not currently supported inside arrays`);
      const n2 = t3._toFieldTransform(e2);
      n2 && e2.fieldTransforms.push(n2);
    }(t2, e), null;
  if (void 0 === t2 && e.ignoreUndefinedProperties)
    return null;
  if (e.path && e.fieldMask.push(e.path), t2 instanceof Array) {
    if (e.settings.oa && 4 !== e.sa)
      throw e.ha("Nested arrays are not supported");
    return function(t3, e2) {
      const n2 = [];
      let s = 0;
      for (const i of t3) {
        let t4 = Eh(i, e2.aa(s));
        null == t4 && (t4 = {
          nullValue: "NULL_VALUE"
        }), n2.push(t4), s++;
      }
      return {
        arrayValue: {
          values: n2
        }
      };
    }(t2, e);
  }
  return function(t3, e2) {
    if (null === (t3 = getModularInstance(t3)))
      return {
        nullValue: "NULL_VALUE"
      };
    if ("number" == typeof t3)
      return pn(e2.It, t3);
    if ("boolean" == typeof t3)
      return {
        booleanValue: t3
      };
    if ("string" == typeof t3)
      return {
        stringValue: t3
      };
    if (t3 instanceof Date) {
      const n2 = nt.fromDate(t3);
      return {
        timestampValue: vs(e2.It, n2)
      };
    }
    if (t3 instanceof nt) {
      const n2 = new nt(t3.seconds, 1e3 * Math.floor(t3.nanoseconds / 1e3));
      return {
        timestampValue: vs(e2.It, n2)
      };
    }
    if (t3 instanceof ih)
      return {
        geoPointValue: {
          latitude: t3.latitude,
          longitude: t3.longitude
        }
      };
    if (t3 instanceof th)
      return {
        bytesValue: Vs(e2.It, t3._byteString)
      };
    if (t3 instanceof Xc) {
      const n2 = e2.databaseId, s = t3.firestore._databaseId;
      if (!s.isEqual(n2))
        throw e2.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n2.projectId}/${n2.database}`);
      return {
        referenceValue: Cs(t3.firestore._databaseId || e2.databaseId, t3._key.path)
      };
    }
    throw e2.ha(`Unsupported field value: ${Qc(t3)}`);
  }(t2, e);
}
function Ah(t2, e) {
  const n2 = {};
  return $t(t2) ? e.path && e.path.length > 0 && e.fieldMask.push(e.path) : Ft(t2, (t3, s) => {
    const i = Eh(s, e.ra(t3));
    null != i && (n2[t3] = i);
  }), {
    mapValue: {
      fields: n2
    }
  };
}
function Rh(t2) {
  return !("object" != typeof t2 || null === t2 || t2 instanceof Array || t2 instanceof Date || t2 instanceof nt || t2 instanceof ih || t2 instanceof th || t2 instanceof Xc || t2 instanceof sh);
}
function bh(t2, e, n2) {
  if (!Rh(n2) || !function(t3) {
    return "object" == typeof t3 && null !== t3 && (Object.getPrototypeOf(t3) === Object.prototype || null === Object.getPrototypeOf(t3));
  }(n2)) {
    const s = Qc(n2);
    throw "an object" === s ? e.ha(t2 + " a custom object") : e.ha(t2 + " " + s);
  }
}
function Ph(t2, e, n2) {
  if ((e = getModularInstance(e)) instanceof eh)
    return e._internalPath;
  if ("string" == typeof e)
    return Vh(t2, e);
  throw Sh(
    "Field path arguments must be of type string or ",
    t2,
    false,
    void 0,
    n2
  );
}
const vh = new RegExp("[~\\*/\\[\\]]");
function Vh(t2, e, n2) {
  if (e.search(vh) >= 0)
    throw Sh(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t2,
      false,
      void 0,
      n2
    );
  try {
    return new eh(...e.split("."))._internalPath;
  } catch (s) {
    throw Sh(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t2,
      false,
      void 0,
      n2
    );
  }
}
function Sh(t2, e, n2, s, i) {
  const r2 = s && !s.isEmpty(), o = void 0 !== i;
  let u2 = `Function ${e}() called with invalid data`;
  n2 && (u2 += " (via `toFirestore()`)"), u2 += ". ";
  let c = "";
  return (r2 || o) && (c += " (found", r2 && (c += ` in field ${s}`), o && (c += ` in document ${i}`), c += ")"), new L(B.INVALID_ARGUMENT, u2 + t2 + c);
}
function Dh(t2, e) {
  return t2.some((t3) => t3.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ch {
  constructor(t2, e, n2, s, i) {
    this._firestore = t2, this._userDataWriter = e, this._key = n2, this._document = s, this._converter = i;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new Xc(this._firestore, this._converter, this._key);
  }
  exists() {
    return null !== this._document;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const t2 = new xh(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(t2) {
    if (this._document) {
      const e = this._document.data.field(Nh("DocumentSnapshot.get", t2));
      if (null !== e)
        return this._userDataWriter.convertValue(e);
    }
  }
}
class xh extends Ch {
  data() {
    return super.data();
  }
}
function Nh(t2, e) {
  return "string" == typeof e ? Vh(t2, e) : e instanceof eh ? e._internalPath : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kh(t2) {
  if ("L" === t2.limitType && 0 === t2.explicitOrderBy.length)
    throw new L(B.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
class Oh {
}
function Mh(t2, ...e) {
  for (const n2 of e)
    t2 = n2._apply(t2);
  return t2;
}
class Fh extends Oh {
  constructor(t2, e, n2) {
    super(), this.ma = t2, this.ga = e, this.ya = n2, this.type = "where";
  }
  _apply(t2) {
    const e = lh(t2.firestore), n2 = function(t3, e2, n3, s, i, r2, o) {
      let u2;
      if (i.isKeyField()) {
        if ("array-contains" === r2 || "array-contains-any" === r2)
          throw new L(B.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r2}' queries on documentId().`);
        if ("in" === r2 || "not-in" === r2) {
          Xh(o, r2);
          const e3 = [];
          for (const n4 of o)
            e3.push(Yh(s, t3, n4));
          u2 = {
            arrayValue: {
              values: e3
            }
          };
        } else
          u2 = Yh(s, t3, o);
      } else
        "in" !== r2 && "not-in" !== r2 && "array-contains-any" !== r2 || Xh(o, r2), u2 = Th(
          n3,
          e2,
          o,
          "in" === r2 || "not-in" === r2
        );
      const c = Be.create(i, r2, u2);
      return function(t4, e3) {
        if (e3.dt()) {
          const n5 = rn(t4);
          if (null !== n5 && !n5.isEqual(e3.field))
            throw new L(B.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n5.toString()}' and '${e3.field.toString()}'`);
          const s2 = sn(t4);
          null !== s2 && Zh(t4, e3.field, s2);
        }
        const n4 = function(t5, e4) {
          for (const n5 of t5.filters)
            if (e4.indexOf(n5.op) >= 0)
              return n5.op;
          return null;
        }(
          t4,
          function(t5) {
            switch (t5) {
              case "!=":
                return ["!=", "not-in"];
              case "array-contains":
                return ["array-contains", "array-contains-any", "not-in"];
              case "in":
                return ["array-contains-any", "in", "not-in"];
              case "array-contains-any":
                return ["array-contains", "array-contains-any", "in", "not-in"];
              case "not-in":
                return ["array-contains", "array-contains-any", "in", "not-in", "!="];
              default:
                return [];
            }
          }(e3.op)
        );
        if (null !== n4)
          throw n4 === e3.op ? new L(B.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e3.op.toString()}' filter.`) : new L(B.INVALID_ARGUMENT, `Invalid query. You cannot use '${e3.op.toString()}' filters with '${n4.toString()}' filters.`);
      }(t3, c), c;
    }(t2._query, "where", e, t2.firestore._databaseId, this.ma, this.ga, this.ya);
    return new Zc(t2.firestore, t2.converter, function(t3, e2) {
      const n3 = t3.filters.concat([e2]);
      return new Ze(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), n3, t3.limit, t3.limitType, t3.startAt, t3.endAt);
    }(t2._query, n2));
  }
}
function $h(t2, e, n2) {
  const s = e, i = Nh("where", t2);
  return new Fh(i, s, n2);
}
class Bh extends Oh {
  constructor(t2, e) {
    super(), this.ma = t2, this.pa = e, this.type = "orderBy";
  }
  _apply(t2) {
    const e = function(t3, e2, n2) {
      if (null !== t3.startAt)
        throw new L(B.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== t3.endAt)
        throw new L(B.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      const s = new He(e2, n2);
      return function(t4, e3) {
        if (null === sn(t4)) {
          const n3 = rn(t4);
          null !== n3 && Zh(t4, n3, e3.field);
        }
      }(t3, s), s;
    }(t2._query, this.ma, this.pa);
    return new Zc(t2.firestore, t2.converter, function(t3, e2) {
      const n2 = t3.explicitOrderBy.concat([e2]);
      return new Ze(t3.path, t3.collectionGroup, n2, t3.filters.slice(), t3.limit, t3.limitType, t3.startAt, t3.endAt);
    }(t2._query, e));
  }
}
function Lh(t2, e = "asc") {
  const n2 = e, s = Nh("orderBy", t2);
  return new Bh(s, n2);
}
class Uh extends Oh {
  constructor(t2, e, n2) {
    super(), this.type = t2, this.Ia = e, this.Ta = n2;
  }
  _apply(t2) {
    return new Zc(t2.firestore, t2.converter, an(t2._query, this.Ia, this.Ta));
  }
}
function qh(t2) {
  return Wc("limit", t2), new Uh("limit", t2, "F");
}
function Kh(t2) {
  return Wc("limitToLast", t2), new Uh("limitToLast", t2, "L");
}
class Gh extends Oh {
  constructor(t2, e, n2) {
    super(), this.type = t2, this.Ea = e, this.Aa = n2;
  }
  _apply(t2) {
    const e = Jh(t2, this.type, this.Ea, this.Aa);
    return new Zc(t2.firestore, t2.converter, function(t3, e2) {
      return new Ze(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), t3.filters.slice(), t3.limit, t3.limitType, e2, t3.endAt);
    }(t2._query, e));
  }
}
function Qh(...t2) {
  return new Gh(
    "startAt",
    t2,
    true
  );
}
function jh(...t2) {
  return new Gh(
    "startAfter",
    t2,
    false
  );
}
class Wh extends Oh {
  constructor(t2, e, n2) {
    super(), this.type = t2, this.Ea = e, this.Aa = n2;
  }
  _apply(t2) {
    const e = Jh(t2, this.type, this.Ea, this.Aa);
    return new Zc(t2.firestore, t2.converter, function(t3, e2) {
      return new Ze(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), t3.filters.slice(), t3.limit, t3.limitType, t3.startAt, e2);
    }(t2._query, e));
  }
}
function zh(...t2) {
  return new Wh(
    "endBefore",
    t2,
    false
  );
}
function Hh(...t2) {
  return new Wh("endAt", t2, true);
}
function Jh(t2, e, n2, s) {
  if (n2[0] = getModularInstance(n2[0]), n2[0] instanceof Ch)
    return function(t3, e2, n3, s2, i) {
      if (!s2)
        throw new L(B.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n3}().`);
      const r2 = [];
      for (const n4 of un(t3))
        if (n4.field.isKeyField())
          r2.push(we(e2, s2.key));
        else {
          const t4 = s2.data.field(n4.field);
          if (Xt(t4))
            throw new L(B.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n4.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
          if (null === t4) {
            const t5 = n4.field.canonicalString();
            throw new L(B.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${t5}' (used as the orderBy) does not exist.`);
          }
          r2.push(t4);
        }
      return new ze(r2, i);
    }(t2._query, t2.firestore._databaseId, e, n2[0]._document, s);
  {
    const i = lh(t2.firestore);
    return function(t3, e2, n3, s2, i2, r2) {
      const o = t3.explicitOrderBy;
      if (i2.length > o.length)
        throw new L(B.INVALID_ARGUMENT, `Too many arguments provided to ${s2}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
      const u2 = [];
      for (let r3 = 0; r3 < i2.length; r3++) {
        const c = i2[r3];
        if (o[r3].field.isKeyField()) {
          if ("string" != typeof c)
            throw new L(B.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${s2}(), but got a ${typeof c}`);
          if (!on(t3) && -1 !== c.indexOf("/"))
            throw new L(B.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${s2}() must be a plain document ID, but '${c}' contains a slash.`);
          const n4 = t3.path.child(rt.fromString(c));
          if (!ct.isDocumentKey(n4))
            throw new L(B.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${s2}() must result in a valid document path, but '${n4}' is not because it contains an odd number of segments.`);
          const i3 = new ct(n4);
          u2.push(we(e2, i3));
        } else {
          const t4 = Th(n3, s2, c);
          u2.push(t4);
        }
      }
      return new ze(u2, r2);
    }(t2._query, t2.firestore._databaseId, i, e, n2, s);
  }
}
function Yh(t2, e, n2) {
  if ("string" == typeof (n2 = getModularInstance(n2))) {
    if ("" === n2)
      throw new L(B.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!on(e) && -1 !== n2.indexOf("/"))
      throw new L(B.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n2}' contains a '/' character.`);
    const s = e.path.child(rt.fromString(n2));
    if (!ct.isDocumentKey(s))
      throw new L(B.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
    return we(t2, new ct(s));
  }
  if (n2 instanceof Xc)
    return we(t2, n2._key);
  throw new L(B.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc(n2)}.`);
}
function Xh(t2, e) {
  if (!Array.isArray(t2) || 0 === t2.length)
    throw new L(B.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
  if (t2.length > 10)
    throw new L(B.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}
function Zh(t2, e, n2) {
  if (!n2.isEqual(e))
    throw new L(B.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n2.toString()}' instead.`);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl {
  convertValue(t2, e = "none") {
    switch (ce(t2)) {
      case 0:
        return null;
      case 1:
        return t2.booleanValue;
      case 2:
        return Jt(t2.integerValue || t2.doubleValue);
      case 3:
        return this.convertTimestamp(t2.timestampValue);
      case 4:
        return this.convertServerTimestamp(t2, e);
      case 5:
        return t2.stringValue;
      case 6:
        return this.convertBytes(Yt(t2.bytesValue));
      case 7:
        return this.convertReference(t2.referenceValue);
      case 8:
        return this.convertGeoPoint(t2.geoPointValue);
      case 9:
        return this.convertArray(t2.arrayValue, e);
      case 10:
        return this.convertObject(t2.mapValue, e);
      default:
        throw O();
    }
  }
  convertObject(t2, e) {
    const n2 = {};
    return Ft(t2.fields, (t3, s) => {
      n2[t3] = this.convertValue(s, e);
    }), n2;
  }
  convertGeoPoint(t2) {
    return new ih(Jt(t2.latitude), Jt(t2.longitude));
  }
  convertArray(t2, e) {
    return (t2.values || []).map((t3) => this.convertValue(t3, e));
  }
  convertServerTimestamp(t2, e) {
    switch (e) {
      case "previous":
        const n2 = Zt(t2);
        return null == n2 ? null : this.convertValue(n2, e);
      case "estimate":
        return this.convertTimestamp(te(t2));
      default:
        return null;
    }
  }
  convertTimestamp(t2) {
    const e = Ht(t2);
    return new nt(e.seconds, e.nanos);
  }
  convertDocumentKey(t2, e) {
    const n2 = rt.fromString(t2);
    M(ii(n2));
    const s = new ne(n2.get(1), n2.get(3)), i = new ct(n2.popFirst(5));
    return s.isEqual(e) || x(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), i;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function el(t2, e, n2) {
  let s;
  return s = t2 ? n2 && (n2.merge || n2.mergeFields) ? t2.toFirestore(e, n2) : t2.toFirestore(e) : e, s;
}
class nl extends tl {
  constructor(t2) {
    super(), this.firestore = t2;
  }
  convertBytes(t2) {
    return new th(t2);
  }
  convertReference(t2) {
    const e = this.convertDocumentKey(t2, this.firestore._databaseId);
    return new Xc(this.firestore, null, e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl {
  constructor(t2, e) {
    this.hasPendingWrites = t2, this.fromCache = e;
  }
  isEqual(t2) {
    return this.hasPendingWrites === t2.hasPendingWrites && this.fromCache === t2.fromCache;
  }
}
class il extends Ch {
  constructor(t2, e, n2, s, i, r2) {
    super(t2, e, n2, s, r2), this._firestore = t2, this._firestoreImpl = t2, this.metadata = i;
  }
  exists() {
    return super.exists();
  }
  data(t2 = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new rl(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(e, t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value, t2.serverTimestamps);
    }
  }
  get(t2, e = {}) {
    if (this._document) {
      const n2 = this._document.data.field(Nh("DocumentSnapshot.get", t2));
      if (null !== n2)
        return this._userDataWriter.convertValue(n2, e.serverTimestamps);
    }
  }
}
class rl extends il {
  data(t2 = {}) {
    return super.data(t2);
  }
}
class ol {
  constructor(t2, e, n2, s) {
    this._firestore = t2, this._userDataWriter = e, this._snapshot = s, this.metadata = new sl(s.hasPendingWrites, s.fromCache), this.query = n2;
  }
  get docs() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), t2;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return 0 === this.size;
  }
  forEach(t2, e) {
    this._snapshot.docs.forEach((n2) => {
      t2.call(e, new rl(this._firestore, this._userDataWriter, n2.key, n2, new sl(this._snapshot.mutatedKeys.has(n2.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  docChanges(t2 = {}) {
    const e = !!t2.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges)
      throw new L(B.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(t3, e2) {
      if (t3._snapshot.oldDocs.isEmpty()) {
        let e3 = 0;
        return t3._snapshot.docChanges.map((n2) => ({
          type: "added",
          doc: new rl(t3._firestore, t3._userDataWriter, n2.doc.key, n2.doc, new sl(t3._snapshot.mutatedKeys.has(n2.doc.key), t3._snapshot.fromCache), t3.query.converter),
          oldIndex: -1,
          newIndex: e3++
        }));
      }
      {
        let n2 = t3._snapshot.oldDocs;
        return t3._snapshot.docChanges.filter((t4) => e2 || 3 !== t4.type).map((e3) => {
          const s = new rl(t3._firestore, t3._userDataWriter, e3.doc.key, e3.doc, new sl(t3._snapshot.mutatedKeys.has(e3.doc.key), t3._snapshot.fromCache), t3.query.converter);
          let i = -1, r2 = -1;
          return 0 !== e3.type && (i = n2.indexOf(e3.doc.key), n2 = n2.delete(e3.doc.key)), 1 !== e3.type && (n2 = n2.add(e3.doc), r2 = n2.indexOf(e3.doc.key)), {
            type: ul(e3.type),
            doc: s,
            oldIndex: i,
            newIndex: r2
          };
        });
      }
    }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
  }
}
function ul(t2) {
  switch (t2) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return O();
  }
}
function cl(t2, e) {
  return t2 instanceof il && e instanceof il ? t2._firestore === e._firestore && t2._key.isEqual(e._key) && (null === t2._document ? null === e._document : t2._document.isEqual(e._document)) && t2._converter === e._converter : t2 instanceof ol && e instanceof ol && (t2._firestore === e._firestore && ra(t2.query, e.query) && t2.metadata.isEqual(e.metadata) && t2._snapshot.isEqual(e._snapshot));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function al(t2) {
  t2 = jc(t2, Xc);
  const e = jc(t2.firestore, $a);
  return Va(Ua(e), t2._key).then((n2) => Al(e, t2, n2));
}
class hl extends tl {
  constructor(t2) {
    super(), this.firestore = t2;
  }
  convertBytes(t2) {
    return new th(t2);
  }
  convertReference(t2) {
    const e = this.convertDocumentKey(t2, this.firestore._databaseId);
    return new Xc(this.firestore, null, e);
  }
}
function ll(t2) {
  t2 = jc(t2, Xc);
  const e = jc(t2.firestore, $a), n2 = Ua(e), s = new hl(e);
  return va(n2, t2._key).then((n3) => new il(e, s, t2._key, n3, new sl(
    null !== n3 && n3.hasLocalMutations,
    true
  ), t2.converter));
}
function fl(t2) {
  t2 = jc(t2, Xc);
  const e = jc(t2.firestore, $a);
  return Va(Ua(e), t2._key, {
    source: "server"
  }).then((n2) => Al(e, t2, n2));
}
function dl(t2) {
  t2 = jc(t2, Zc);
  const e = jc(t2.firestore, $a), n2 = Ua(e), s = new hl(e);
  return kh(t2._query), Da(n2, t2._query).then((n3) => new ol(e, s, t2, n3));
}
function _l(t2) {
  t2 = jc(t2, Zc);
  const e = jc(t2.firestore, $a), n2 = Ua(e), s = new hl(e);
  return Sa(n2, t2._query).then((n3) => new ol(e, s, t2, n3));
}
function wl(t2) {
  t2 = jc(t2, Zc);
  const e = jc(t2.firestore, $a), n2 = Ua(e), s = new hl(e);
  return Da(n2, t2._query, {
    source: "server"
  }).then((n3) => new ol(e, s, t2, n3));
}
function ml(t2, e, n2) {
  t2 = jc(t2, Xc);
  const s = jc(t2.firestore, $a), i = el(t2.converter, e, n2);
  return El(s, [fh(lh(s), "setDoc", t2._key, i, null !== t2.converter, n2).toMutation(t2._key, On.none())]);
}
function gl(t2, e, n2, ...s) {
  t2 = jc(t2, Xc);
  const i = jc(t2.firestore, $a), r2 = lh(i);
  let o;
  o = "string" == typeof (e = getModularInstance(e)) || e instanceof eh ? Ih(r2, "updateDoc", t2._key, e, n2, s) : ph(r2, "updateDoc", t2._key, e);
  return El(i, [o.toMutation(t2._key, On.exists(true))]);
}
function yl(t2) {
  return El(jc(t2.firestore, $a), [new zn(t2._key, On.none())]);
}
function pl(t2, e) {
  const n2 = jc(t2.firestore, $a), s = sa(t2), i = el(t2.converter, e);
  return El(n2, [fh(lh(t2.firestore), "addDoc", s._key, i, null !== t2.converter, {}).toMutation(s._key, On.exists(false))]).then(() => s);
}
function Il(t2, ...e) {
  var n2, s, i;
  t2 = getModularInstance(t2);
  let r2 = {
    includeMetadataChanges: false
  }, o = 0;
  "object" != typeof e[o] || Oa(e[o]) || (r2 = e[o], o++);
  const u2 = {
    includeMetadataChanges: r2.includeMetadataChanges
  };
  if (Oa(e[o])) {
    const t3 = e[o];
    e[o] = null === (n2 = t3.next) || void 0 === n2 ? void 0 : n2.bind(t3), e[o + 1] = null === (s = t3.error) || void 0 === s ? void 0 : s.bind(t3), e[o + 2] = null === (i = t3.complete) || void 0 === i ? void 0 : i.bind(t3);
  }
  let c, a, h;
  if (t2 instanceof Xc)
    a = jc(t2.firestore, $a), h = en(t2._key.path), c = {
      next: (n3) => {
        e[o] && e[o](Al(a, t2, n3));
      },
      error: e[o + 1],
      complete: e[o + 2]
    };
  else {
    const n3 = jc(t2, Zc);
    a = jc(n3.firestore, $a), h = n3._query;
    const s2 = new hl(a);
    c = {
      next: (t3) => {
        e[o] && e[o](new ol(a, s2, n3, t3));
      },
      error: e[o + 1],
      complete: e[o + 2]
    }, kh(t2._query);
  }
  return function(t3, e2, n3, s2) {
    const i2 = new ua(s2), r3 = new zu(e2, i2, n3);
    return t3.asyncQueue.enqueueAndForget(async () => Ku(await Ra(t3), r3)), () => {
      i2.bc(), t3.asyncQueue.enqueueAndForget(async () => Gu(await Ra(t3), r3));
    };
  }(Ua(a), h, u2, c);
}
function Tl(t2, e) {
  return Ca(Ua(t2 = jc(t2, $a)), Oa(e) ? e : {
    next: e
  });
}
function El(t2, e) {
  return function(t3, e2) {
    const n2 = new U();
    return t3.asyncQueue.enqueueAndForget(async () => cc(await Ea(t3), e2, n2)), n2.promise;
  }(Ua(t2), e);
}
function Al(t2, e, n2) {
  const s = n2.docs.get(e._key), i = new hl(t2);
  return new il(t2, i, e._key, s, new sl(n2.hasPendingWrites, n2.fromCache), e.converter);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pl = {
  maxAttempts: 5
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vl {
  constructor(t2, e) {
    this._firestore = t2, this._commitHandler = e, this._mutations = [], this._committed = false, this._dataReader = lh(t2);
  }
  set(t2, e, n2) {
    this._verifyNotCommitted();
    const s = Vl(t2, this._firestore), i = el(s.converter, e, n2), r2 = fh(this._dataReader, "WriteBatch.set", s._key, i, null !== s.converter, n2);
    return this._mutations.push(r2.toMutation(s._key, On.none())), this;
  }
  update(t2, e, n2, ...s) {
    this._verifyNotCommitted();
    const i = Vl(t2, this._firestore);
    let r2;
    return r2 = "string" == typeof (e = getModularInstance(e)) || e instanceof eh ? Ih(this._dataReader, "WriteBatch.update", i._key, e, n2, s) : ph(this._dataReader, "WriteBatch.update", i._key, e), this._mutations.push(r2.toMutation(i._key, On.exists(true))), this;
  }
  delete(t2) {
    this._verifyNotCommitted();
    const e = Vl(t2, this._firestore);
    return this._mutations = this._mutations.concat(new zn(e._key, On.none())), this;
  }
  commit() {
    return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }
  _verifyNotCommitted() {
    if (this._committed)
      throw new L(B.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }
}
function Vl(t2, e) {
  if ((t2 = getModularInstance(t2)).firestore !== e)
    throw new L(B.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t2;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl extends class {
  constructor(t2, e) {
    this._firestore = t2, this._transaction = e, this._dataReader = lh(t2);
  }
  get(t2) {
    const e = Vl(t2, this._firestore), n2 = new nl(this._firestore);
    return this._transaction.lookup([e._key]).then((t3) => {
      if (!t3 || 1 !== t3.length)
        return O();
      const s = t3[0];
      if (s.isFoundDocument())
        return new Ch(this._firestore, n2, s.key, s, e.converter);
      if (s.isNoDocument())
        return new Ch(this._firestore, n2, e._key, null, e.converter);
      throw O();
    });
  }
  set(t2, e, n2) {
    const s = Vl(t2, this._firestore), i = el(s.converter, e, n2), r2 = fh(this._dataReader, "Transaction.set", s._key, i, null !== s.converter, n2);
    return this._transaction.set(s._key, r2), this;
  }
  update(t2, e, n2, ...s) {
    const i = Vl(t2, this._firestore);
    let r2;
    return r2 = "string" == typeof (e = getModularInstance(e)) || e instanceof eh ? Ih(this._dataReader, "Transaction.update", i._key, e, n2, s) : ph(this._dataReader, "Transaction.update", i._key, e), this._transaction.update(i._key, r2), this;
  }
  delete(t2) {
    const e = Vl(t2, this._firestore);
    return this._transaction.delete(e._key), this;
  }
} {
  constructor(t2, e) {
    super(t2, e), this._firestore = t2;
  }
  get(t2) {
    const e = Vl(t2, this._firestore), n2 = new hl(this._firestore);
    return super.get(t2).then((t3) => new il(this._firestore, n2, e._key, t3._document, new sl(
      false,
      false
    ), e.converter));
  }
}
function Dl(t2, e, n2) {
  t2 = jc(t2, $a);
  const s = Object.assign(Object.assign({}, Pl), n2);
  !function(t3) {
    if (t3.maxAttempts < 1)
      throw new L(B.INVALID_ARGUMENT, "Max attempts must be at least 1");
  }(s);
  return function(t3, e2, n3) {
    const s2 = new U();
    return t3.asyncQueue.enqueueAndForget(async () => {
      const i = await Aa(t3);
      new da(t3.asyncQueue, i, n3, e2, s2).run();
    }), s2.promise;
  }(Ua(t2), (n3) => e(new Sl(t2, n3)), s);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cl() {
  return new dh("deleteField");
}
function xl() {
  return new wh("serverTimestamp");
}
function Nl(...t2) {
  return new mh("arrayUnion", t2);
}
function kl(...t2) {
  return new gh("arrayRemove", t2);
}
function Ol(t2) {
  return new yh("increment", t2);
}
!function(t2, e = true) {
  !function(t3) {
    v = t3;
  }(SDK_VERSION), _registerComponent(new Component("firestore", (t3, { instanceIdentifier: n2, options: s }) => {
    const i = t3.getProvider("app").getImmediate(), r2 = new $a(new Q(t3.getProvider("auth-internal")), new H(t3.getProvider("app-check-internal")), function(t4, e2) {
      if (!Object.prototype.hasOwnProperty.apply(t4.options, ["projectId"]))
        throw new L(B.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new ne(t4.options.projectId, e2);
    }(i, n2), i);
    return s = Object.assign({
      useFetchStreams: e
    }, s), r2._setSettings(s), r2;
  }, "PUBLIC").setMultipleInstances(true)), registerVersion(b, "3.7.0", t2), registerVersion(b, "3.7.0", "esm2017");
}();
const name = "@firebase/firestore-compat";
const version = "0.2.0";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function validateSetOptions(methodName, options) {
  if (options === void 0) {
    return {
      merge: false
    };
  }
  if (options.mergeFields !== void 0 && options.merge !== void 0) {
    throw new L("invalid-argument", `Invalid options passed to function ${methodName}(): You cannot specify both "merge" and "mergeFields".`);
  }
  return options;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function assertUint8ArrayAvailable() {
  if (typeof Uint8Array === "undefined") {
    throw new L("unimplemented", "Uint8Arrays are not available in this environment.");
  }
}
function assertBase64Available() {
  if (!jt()) {
    throw new L("unimplemented", "Blobs are unavailable in Firestore in this environment.");
  }
}
class Blob {
  constructor(_delegate) {
    this._delegate = _delegate;
  }
  static fromBase64String(base642) {
    assertBase64Available();
    return new Blob(th.fromBase64String(base642));
  }
  static fromUint8Array(array) {
    assertUint8ArrayAvailable();
    return new Blob(th.fromUint8Array(array));
  }
  toBase64() {
    assertBase64Available();
    return this._delegate.toBase64();
  }
  toUint8Array() {
    assertUint8ArrayAvailable();
    return this._delegate.toUint8Array();
  }
  isEqual(other) {
    return this._delegate.isEqual(other._delegate);
  }
  toString() {
    return "Blob(base64: " + this.toBase64() + ")";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isPartialObserver(obj) {
  return implementsAnyMethods(obj, ["next", "error", "complete"]);
}
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  const object = obj;
  for (const method of methods) {
    if (method in object && typeof object[method] === "function") {
      return true;
    }
  }
  return false;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class IndexedDbPersistenceProvider {
  enableIndexedDbPersistence(firestore, forceOwnership) {
    return Ka(firestore._delegate, { forceOwnership });
  }
  enableMultiTabIndexedDbPersistence(firestore) {
    return Ga(firestore._delegate);
  }
  clearIndexedDbPersistence(firestore) {
    return ja(firestore._delegate);
  }
}
class Firestore {
  constructor(databaseIdOrApp, _delegate, _persistenceProvider) {
    this._delegate = _delegate;
    this._persistenceProvider = _persistenceProvider;
    this.INTERNAL = {
      delete: () => this.terminate()
    };
    if (!(databaseIdOrApp instanceof ne)) {
      this._appCompat = databaseIdOrApp;
    }
  }
  get _databaseId() {
    return this._delegate._databaseId;
  }
  settings(settingsLiteral) {
    const currentSettings = this._delegate._getSettings();
    if (!settingsLiteral.merge && currentSettings.host !== settingsLiteral.host) {
      N("You are overriding the original host. If you did not intend to override your settings, use {merge: true}.");
    }
    if (settingsLiteral.merge) {
      settingsLiteral = Object.assign(Object.assign({}, currentSettings), settingsLiteral);
      delete settingsLiteral.merge;
    }
    this._delegate._setSettings(settingsLiteral);
  }
  useEmulator(host, port, options = {}) {
    Yc(this._delegate, host, port, options);
  }
  enableNetwork() {
    return za(this._delegate);
  }
  disableNetwork() {
    return Ha(this._delegate);
  }
  enablePersistence(settings) {
    let synchronizeTabs = false;
    let experimentalForceOwningTab = false;
    if (settings) {
      synchronizeTabs = !!settings.synchronizeTabs;
      experimentalForceOwningTab = !!settings.experimentalForceOwningTab;
      qc("synchronizeTabs", synchronizeTabs, "experimentalForceOwningTab", experimentalForceOwningTab);
    }
    return synchronizeTabs ? this._persistenceProvider.enableMultiTabIndexedDbPersistence(this) : this._persistenceProvider.enableIndexedDbPersistence(this, experimentalForceOwningTab);
  }
  clearPersistence() {
    return this._persistenceProvider.clearIndexedDbPersistence(this);
  }
  terminate() {
    if (this._appCompat) {
      this._appCompat._removeServiceInstance("firestore-compat");
      this._appCompat._removeServiceInstance("firestore");
    }
    return this._delegate._delete();
  }
  waitForPendingWrites() {
    return Wa(this._delegate);
  }
  onSnapshotsInSync(arg) {
    return Tl(this._delegate, arg);
  }
  get app() {
    if (!this._appCompat) {
      throw new L("failed-precondition", "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    }
    return this._appCompat;
  }
  collection(pathString) {
    try {
      return new CollectionReference(this, ea(this._delegate, pathString));
    } catch (e) {
      throw replaceFunctionName(e, "collection()", "Firestore.collection()");
    }
  }
  doc(pathString) {
    try {
      return new DocumentReference(this, sa(this._delegate, pathString));
    } catch (e) {
      throw replaceFunctionName(e, "doc()", "Firestore.doc()");
    }
  }
  collectionGroup(collectionId) {
    try {
      return new Query(this, na(this._delegate, collectionId));
    } catch (e) {
      throw replaceFunctionName(e, "collectionGroup()", "Firestore.collectionGroup()");
    }
  }
  runTransaction(updateFunction) {
    return Dl(this._delegate, (transaction) => updateFunction(new Transaction(this, transaction)));
  }
  batch() {
    Ua(this._delegate);
    return new WriteBatch(new vl(this._delegate, (mutations) => El(this._delegate, mutations)));
  }
  loadBundle(bundleData) {
    return Ya(this._delegate, bundleData);
  }
  namedQuery(name2) {
    return Xa(this._delegate, name2).then((expQuery) => {
      if (!expQuery) {
        return null;
      }
      return new Query(
        this,
        expQuery
      );
    });
  }
}
class UserDataWriter extends tl {
  constructor(firestore) {
    super();
    this.firestore = firestore;
  }
  convertBytes(bytes) {
    return new Blob(new th(bytes));
  }
  convertReference(name2) {
    const key = this.convertDocumentKey(name2, this.firestore._databaseId);
    return DocumentReference.forKey(key, this.firestore, null);
  }
}
function setLogLevel(level) {
  D(level);
}
class Transaction {
  constructor(_firestore, _delegate) {
    this._firestore = _firestore;
    this._delegate = _delegate;
    this._userDataWriter = new UserDataWriter(_firestore);
  }
  get(documentRef) {
    const ref = castReference(documentRef);
    return this._delegate.get(ref).then((result) => new DocumentSnapshot(this._firestore, new il(this._firestore._delegate, this._userDataWriter, result._key, result._document, result.metadata, ref.converter)));
  }
  set(documentRef, data, options) {
    const ref = castReference(documentRef);
    if (options) {
      validateSetOptions("Transaction.set", options);
      this._delegate.set(ref, data, options);
    } else {
      this._delegate.set(ref, data);
    }
    return this;
  }
  update(documentRef, dataOrField, value, ...moreFieldsAndValues) {
    const ref = castReference(documentRef);
    if (arguments.length === 2) {
      this._delegate.update(ref, dataOrField);
    } else {
      this._delegate.update(ref, dataOrField, value, ...moreFieldsAndValues);
    }
    return this;
  }
  delete(documentRef) {
    const ref = castReference(documentRef);
    this._delegate.delete(ref);
    return this;
  }
}
class WriteBatch {
  constructor(_delegate) {
    this._delegate = _delegate;
  }
  set(documentRef, data, options) {
    const ref = castReference(documentRef);
    if (options) {
      validateSetOptions("WriteBatch.set", options);
      this._delegate.set(ref, data, options);
    } else {
      this._delegate.set(ref, data);
    }
    return this;
  }
  update(documentRef, dataOrField, value, ...moreFieldsAndValues) {
    const ref = castReference(documentRef);
    if (arguments.length === 2) {
      this._delegate.update(ref, dataOrField);
    } else {
      this._delegate.update(ref, dataOrField, value, ...moreFieldsAndValues);
    }
    return this;
  }
  delete(documentRef) {
    const ref = castReference(documentRef);
    this._delegate.delete(ref);
    return this;
  }
  commit() {
    return this._delegate.commit();
  }
}
class FirestoreDataConverter {
  constructor(_firestore, _userDataWriter, _delegate) {
    this._firestore = _firestore;
    this._userDataWriter = _userDataWriter;
    this._delegate = _delegate;
  }
  fromFirestore(snapshot, options) {
    const expSnapshot = new rl(
      this._firestore._delegate,
      this._userDataWriter,
      snapshot._key,
      snapshot._document,
      snapshot.metadata,
      null
    );
    return this._delegate.fromFirestore(new QueryDocumentSnapshot(this._firestore, expSnapshot), options !== null && options !== void 0 ? options : {});
  }
  toFirestore(modelObject, options) {
    if (!options) {
      return this._delegate.toFirestore(modelObject);
    } else {
      return this._delegate.toFirestore(modelObject, options);
    }
  }
  static getInstance(firestore, converter) {
    const converterMapByFirestore = FirestoreDataConverter.INSTANCES;
    let untypedConverterByConverter = converterMapByFirestore.get(firestore);
    if (!untypedConverterByConverter) {
      untypedConverterByConverter = /* @__PURE__ */ new WeakMap();
      converterMapByFirestore.set(firestore, untypedConverterByConverter);
    }
    let instance = untypedConverterByConverter.get(converter);
    if (!instance) {
      instance = new FirestoreDataConverter(firestore, new UserDataWriter(firestore), converter);
      untypedConverterByConverter.set(converter, instance);
    }
    return instance;
  }
}
FirestoreDataConverter.INSTANCES = /* @__PURE__ */ new WeakMap();
class DocumentReference {
  constructor(firestore, _delegate) {
    this.firestore = firestore;
    this._delegate = _delegate;
    this._userDataWriter = new UserDataWriter(firestore);
  }
  static forPath(path, firestore, converter) {
    if (path.length % 2 !== 0) {
      throw new L("invalid-argument", `Invalid document reference. Document references must have an even number of segments, but ${path.canonicalString()} has ${path.length}`);
    }
    return new DocumentReference(firestore, new Xc(firestore._delegate, converter, new ct(path)));
  }
  static forKey(key, firestore, converter) {
    return new DocumentReference(firestore, new Xc(firestore._delegate, converter, key));
  }
  get id() {
    return this._delegate.id;
  }
  get parent() {
    return new CollectionReference(this.firestore, this._delegate.parent);
  }
  get path() {
    return this._delegate.path;
  }
  collection(pathString) {
    try {
      return new CollectionReference(this.firestore, ea(this._delegate, pathString));
    } catch (e) {
      throw replaceFunctionName(e, "collection()", "DocumentReference.collection()");
    }
  }
  isEqual(other) {
    other = getModularInstance(other);
    if (!(other instanceof Xc)) {
      return false;
    }
    return ia(this._delegate, other);
  }
  set(value, options) {
    options = validateSetOptions("DocumentReference.set", options);
    try {
      if (options) {
        return ml(this._delegate, value, options);
      } else {
        return ml(this._delegate, value);
      }
    } catch (e) {
      throw replaceFunctionName(e, "setDoc()", "DocumentReference.set()");
    }
  }
  update(fieldOrUpdateData, value, ...moreFieldsAndValues) {
    try {
      if (arguments.length === 1) {
        return gl(this._delegate, fieldOrUpdateData);
      } else {
        return gl(this._delegate, fieldOrUpdateData, value, ...moreFieldsAndValues);
      }
    } catch (e) {
      throw replaceFunctionName(e, "updateDoc()", "DocumentReference.update()");
    }
  }
  delete() {
    return yl(this._delegate);
  }
  onSnapshot(...args) {
    const options = extractSnapshotOptions(args);
    const observer = wrapObserver(args, (result) => new DocumentSnapshot(this.firestore, new il(this.firestore._delegate, this._userDataWriter, result._key, result._document, result.metadata, this._delegate.converter)));
    return Il(this._delegate, options, observer);
  }
  get(options) {
    let snap;
    if ((options === null || options === void 0 ? void 0 : options.source) === "cache") {
      snap = ll(this._delegate);
    } else if ((options === null || options === void 0 ? void 0 : options.source) === "server") {
      snap = fl(this._delegate);
    } else {
      snap = al(this._delegate);
    }
    return snap.then((result) => new DocumentSnapshot(this.firestore, new il(this.firestore._delegate, this._userDataWriter, result._key, result._document, result.metadata, this._delegate.converter)));
  }
  withConverter(converter) {
    return new DocumentReference(this.firestore, converter ? this._delegate.withConverter(FirestoreDataConverter.getInstance(this.firestore, converter)) : this._delegate.withConverter(null));
  }
}
function replaceFunctionName(e, original, updated) {
  e.message = e.message.replace(original, updated);
  return e;
}
function extractSnapshotOptions(args) {
  for (const arg of args) {
    if (typeof arg === "object" && !isPartialObserver(arg)) {
      return arg;
    }
  }
  return {};
}
function wrapObserver(args, wrapper) {
  var _a2, _b;
  let userObserver;
  if (isPartialObserver(args[0])) {
    userObserver = args[0];
  } else if (isPartialObserver(args[1])) {
    userObserver = args[1];
  } else if (typeof args[0] === "function") {
    userObserver = {
      next: args[0],
      error: args[1],
      complete: args[2]
    };
  } else {
    userObserver = {
      next: args[1],
      error: args[2],
      complete: args[3]
    };
  }
  return {
    next: (val) => {
      if (userObserver.next) {
        userObserver.next(wrapper(val));
      }
    },
    error: (_a2 = userObserver.error) === null || _a2 === void 0 ? void 0 : _a2.bind(userObserver),
    complete: (_b = userObserver.complete) === null || _b === void 0 ? void 0 : _b.bind(userObserver)
  };
}
class DocumentSnapshot {
  constructor(_firestore, _delegate) {
    this._firestore = _firestore;
    this._delegate = _delegate;
  }
  get ref() {
    return new DocumentReference(this._firestore, this._delegate.ref);
  }
  get id() {
    return this._delegate.id;
  }
  get metadata() {
    return this._delegate.metadata;
  }
  get exists() {
    return this._delegate.exists();
  }
  data(options) {
    return this._delegate.data(options);
  }
  get(fieldPath, options) {
    return this._delegate.get(fieldPath, options);
  }
  isEqual(other) {
    return cl(this._delegate, other._delegate);
  }
}
class QueryDocumentSnapshot extends DocumentSnapshot {
  data(options) {
    const data = this._delegate.data(options);
    F(data !== void 0);
    return data;
  }
}
class Query {
  constructor(firestore, _delegate) {
    this.firestore = firestore;
    this._delegate = _delegate;
    this._userDataWriter = new UserDataWriter(firestore);
  }
  where(fieldPath, opStr, value) {
    try {
      return new Query(this.firestore, Mh(this._delegate, $h(fieldPath, opStr, value)));
    } catch (e) {
      throw replaceFunctionName(e, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }
  orderBy(fieldPath, directionStr) {
    try {
      return new Query(this.firestore, Mh(this._delegate, Lh(fieldPath, directionStr)));
    } catch (e) {
      throw replaceFunctionName(e, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }
  limit(n2) {
    try {
      return new Query(this.firestore, Mh(this._delegate, qh(n2)));
    } catch (e) {
      throw replaceFunctionName(e, "limit()", "Query.limit()");
    }
  }
  limitToLast(n2) {
    try {
      return new Query(this.firestore, Mh(this._delegate, Kh(n2)));
    } catch (e) {
      throw replaceFunctionName(e, "limitToLast()", "Query.limitToLast()");
    }
  }
  startAt(...args) {
    try {
      return new Query(this.firestore, Mh(this._delegate, Qh(...args)));
    } catch (e) {
      throw replaceFunctionName(e, "startAt()", "Query.startAt()");
    }
  }
  startAfter(...args) {
    try {
      return new Query(this.firestore, Mh(this._delegate, jh(...args)));
    } catch (e) {
      throw replaceFunctionName(e, "startAfter()", "Query.startAfter()");
    }
  }
  endBefore(...args) {
    try {
      return new Query(this.firestore, Mh(this._delegate, zh(...args)));
    } catch (e) {
      throw replaceFunctionName(e, "endBefore()", "Query.endBefore()");
    }
  }
  endAt(...args) {
    try {
      return new Query(this.firestore, Mh(this._delegate, Hh(...args)));
    } catch (e) {
      throw replaceFunctionName(e, "endAt()", "Query.endAt()");
    }
  }
  isEqual(other) {
    return ra(this._delegate, other._delegate);
  }
  get(options) {
    let query;
    if ((options === null || options === void 0 ? void 0 : options.source) === "cache") {
      query = _l(this._delegate);
    } else if ((options === null || options === void 0 ? void 0 : options.source) === "server") {
      query = wl(this._delegate);
    } else {
      query = dl(this._delegate);
    }
    return query.then((result) => new QuerySnapshot(this.firestore, new ol(this.firestore._delegate, this._userDataWriter, this._delegate, result._snapshot)));
  }
  onSnapshot(...args) {
    const options = extractSnapshotOptions(args);
    const observer = wrapObserver(args, (snap) => new QuerySnapshot(this.firestore, new ol(this.firestore._delegate, this._userDataWriter, this._delegate, snap._snapshot)));
    return Il(this._delegate, options, observer);
  }
  withConverter(converter) {
    return new Query(this.firestore, converter ? this._delegate.withConverter(FirestoreDataConverter.getInstance(this.firestore, converter)) : this._delegate.withConverter(null));
  }
}
class DocumentChange {
  constructor(_firestore, _delegate) {
    this._firestore = _firestore;
    this._delegate = _delegate;
  }
  get type() {
    return this._delegate.type;
  }
  get doc() {
    return new QueryDocumentSnapshot(this._firestore, this._delegate.doc);
  }
  get oldIndex() {
    return this._delegate.oldIndex;
  }
  get newIndex() {
    return this._delegate.newIndex;
  }
}
class QuerySnapshot {
  constructor(_firestore, _delegate) {
    this._firestore = _firestore;
    this._delegate = _delegate;
  }
  get query() {
    return new Query(this._firestore, this._delegate.query);
  }
  get metadata() {
    return this._delegate.metadata;
  }
  get size() {
    return this._delegate.size;
  }
  get empty() {
    return this._delegate.empty;
  }
  get docs() {
    return this._delegate.docs.map((doc) => new QueryDocumentSnapshot(this._firestore, doc));
  }
  docChanges(options) {
    return this._delegate.docChanges(options).map((docChange) => new DocumentChange(this._firestore, docChange));
  }
  forEach(callback, thisArg) {
    this._delegate.forEach((snapshot) => {
      callback.call(thisArg, new QueryDocumentSnapshot(this._firestore, snapshot));
    });
  }
  isEqual(other) {
    return cl(this._delegate, other._delegate);
  }
}
class CollectionReference extends Query {
  constructor(firestore, _delegate) {
    super(firestore, _delegate);
    this.firestore = firestore;
    this._delegate = _delegate;
  }
  get id() {
    return this._delegate.id;
  }
  get path() {
    return this._delegate.path;
  }
  get parent() {
    const docRef = this._delegate.parent;
    return docRef ? new DocumentReference(this.firestore, docRef) : null;
  }
  doc(documentPath) {
    try {
      if (documentPath === void 0) {
        return new DocumentReference(this.firestore, sa(this._delegate));
      } else {
        return new DocumentReference(this.firestore, sa(this._delegate, documentPath));
      }
    } catch (e) {
      throw replaceFunctionName(e, "doc()", "CollectionReference.doc()");
    }
  }
  add(data) {
    return pl(this._delegate, data).then((docRef) => new DocumentReference(this.firestore, docRef));
  }
  isEqual(other) {
    return ia(this._delegate, other._delegate);
  }
  withConverter(converter) {
    return new CollectionReference(this.firestore, converter ? this._delegate.withConverter(FirestoreDataConverter.getInstance(this.firestore, converter)) : this._delegate.withConverter(null));
  }
}
function castReference(documentRef) {
  return jc(documentRef, Xc);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FieldPath {
  constructor(...fieldNames) {
    this._delegate = new eh(...fieldNames);
  }
  static documentId() {
    return new FieldPath(ut.keyField().canonicalString());
  }
  isEqual(other) {
    other = getModularInstance(other);
    if (!(other instanceof eh)) {
      return false;
    }
    return this._delegate._internalPath.isEqual(other._internalPath);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FieldValue {
  constructor(_delegate) {
    this._delegate = _delegate;
  }
  static serverTimestamp() {
    const delegate = xl();
    delegate._methodName = "FieldValue.serverTimestamp";
    return new FieldValue(delegate);
  }
  static delete() {
    const delegate = Cl();
    delegate._methodName = "FieldValue.delete";
    return new FieldValue(delegate);
  }
  static arrayUnion(...elements) {
    const delegate = Nl(...elements);
    delegate._methodName = "FieldValue.arrayUnion";
    return new FieldValue(delegate);
  }
  static arrayRemove(...elements) {
    const delegate = kl(...elements);
    delegate._methodName = "FieldValue.arrayRemove";
    return new FieldValue(delegate);
  }
  static increment(n2) {
    const delegate = Ol(n2);
    delegate._methodName = "FieldValue.increment";
    return new FieldValue(delegate);
  }
  isEqual(other) {
    return this._delegate.isEqual(other._delegate);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const firestoreNamespace = {
  Firestore,
  GeoPoint: ih,
  Timestamp: nt,
  Blob,
  Transaction,
  WriteBatch,
  DocumentReference,
  DocumentSnapshot,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  CollectionReference,
  FieldPath,
  FieldValue,
  setLogLevel,
  CACHE_SIZE_UNLIMITED: Fa
};
function configureForFirebase(firebase2, firestoreFactory) {
  firebase2.INTERNAL.registerComponent(new Component("firestore-compat", (container) => {
    const app2 = container.getProvider("app-compat").getImmediate();
    const firestoreExp = container.getProvider("firestore").getImmediate();
    return firestoreFactory(app2, firestoreExp);
  }, "PUBLIC").setServiceProps(Object.assign({}, firestoreNamespace)));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerFirestore(instance) {
  configureForFirebase(instance, (app2, firestoreExp) => new Firestore(app2, firestoreExp, new IndexedDbPersistenceProvider()));
  instance.registerVersion(name, version);
}
registerFirestore(firebase);
const app = {
  apiKey: "AIzaSyAiOtBCmW8N5ZAszkpfcZFqLYmvlIXBgwA",
  authDomain: "samal-agro.firebaseapp.com",
  projectId: "samal-agro",
  storageBucket: "samal-agro.appspot.com",
  messagingSenderId: "907262257812",
  appId: "1:907262257812:web:f14eff803d5074508e2281",
  measurementId: "G-DX772N6CWF"
};
firebase.initializeApp(app);
const db = firebase.firestore();
class ProductService {
  async getProducts() {
    try {
      let collection;
      let size;
      let response;
      let productsRetrieved;
      collection = db.collection("products");
      size = (await collection.get()).size;
      if (size === 0)
        response = `No hay registros`;
      productsRetrieved = (await collection.get()).docs.map((doc) => ({
        ...doc.data(),
        idFirebase: doc.id
      }));
      response = productsRetrieved;
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async getProductsById(id2) {
    try {
      let productRetrieved;
      let size;
      let response;
      productRetrieved = db.collection("batchs").doc(id2);
      size = (await productRetrieved.get()).size;
      if (size === 0)
        response = `No existen productos con el id ${id2}`;
      else
        productRetrieved = (await productRetrieved.get()).data();
      response = productRetrieved;
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async getProductsFromCat(batchId) {
    try {
      let response;
      let query;
      let collection;
      let size;
      let productsRetrieved;
      collection = db.collection("batchs");
      if (batchId)
        query = collection.where("product_id", "==", `${batchId}`);
      size = (await query.get()).size;
      if (size === 0) {
        response = "No hay productos.";
      } else {
        productsRetrieved = (await query.get()).docs.map((doc) => ({
          ...doc.data(),
          idFirebase: doc.id
        }));
        response = productsRetrieved;
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
const spinner = "";
const Spinner = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "spinner-container",
    children: /* @__PURE__ */ jsx("span", {
      className: "loading-spinner"
    })
  });
};
const productService$2 = new ProductService();
const ProductListContainer = () => {
  const [products, setProducts] = react.exports.useState();
  const getData = async () => {
    try {
      const productRetrieved = await productService$2.getProducts();
      return setProducts(productRetrieved);
    } catch (error) {
      return error.message;
    }
  };
  react.exports.useEffect(() => {
    getData();
  }, []);
  return /* @__PURE__ */ jsx("main", {
    className: "product-list-container ",
    children: products ? products.map((product) => /* @__PURE__ */ jsx(ProductList, {
      product
    }, product.idFirebase)) : /* @__PURE__ */ jsx(Spinner, {})
  });
};
const footer_logo = "/assets/samalfooter.c3c6b659.png";
const footer = "";
const Footer = () => {
  const btnStyle = {
    width: "170px",
    height: "39px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "24px",
    textAlign: "center",
    color: "#FFFFFF"
  };
  return /* @__PURE__ */ jsxs("footer", {
    className: "footer-container",
    children: [/* @__PURE__ */ jsx("span", {
      className: "cross-line-footer"
    }), /* @__PURE__ */ jsx("div", {
      className: "work-together-container",
      children: /* @__PURE__ */ jsx("p", {
        children: "Let's Work Together"
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "btn-footer-container",
      children: /* @__PURE__ */ jsx(Button, {
        text: "Contact Us",
        btnStyle
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "social-media-container",
      children: [/* @__PURE__ */ jsx("img", {
        src: footer_logo
      }), /* @__PURE__ */ jsx("p", {
        children: "\xA9 2022 SamalAgro. All rights reserved"
      }), /* @__PURE__ */ jsxs("div", {
        className: "social-media-icons",
        children: [/* @__PURE__ */ jsx("img", {
          className: "icon",
          src: "https://cdn-icons-png.flaticon.com/512/59/59439.png"
        }), /* @__PURE__ */ jsx("img", {
          className: "icon",
          src: "https://cdn-icons-png.flaticon.com/512/87/87390.png"
        })]
      })]
    })]
  });
};
const header$1 = "/assets/field.bfee453c.png";
const logo$1 = "/assets/IMG_3697.d185b39c.png";
const header = "";
const Header = () => {
  return /* @__PURE__ */ jsxs("header", {
    className: "header-container",
    children: [/* @__PURE__ */ jsx("img", {
      className: "logo",
      src: logo$1
    }), " ", /* @__PURE__ */ jsx("img", {
      className: "header-img",
      src: header$1
    }), " "]
  });
};
const home = "";
const Home = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: "container",
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("h1", {
      className: "our-products",
      children: " Our Products "
    }), " ", /* @__PURE__ */ jsx(ProductListContainer, {})]
  });
};
const batchBtn = "";
const batchlist = "";
const batchHeader = "";
const logo = "";
const Logo = () => {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("img", {
      className: "logo-samal",
      alt: "Samal agro logo",
      srcSet: logo$1
    }), " "]
  });
};
const BatchHeader = ({
  text
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "batch-list-header",
    children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsx("p", {
      className: "batch-header-text",
      children: text
    })]
  });
};
const rightArrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCg4XLwnUDwiRAAAB0UlEQVRYw7WXv0uCQRjHv5fiZv+COeQQVpCr/cLFrMDJKRDC10D0T4jzbQhapETQ6Q03wcW3KQMpGxxbWmrR0SGnmn2vIYSo996fd894d8/7+Tx3L89xgEVcvYXDlPV61cuvL8qurylbWoLgILwJykIh0hkM8J5MLsYYbbeB01OVGIYoAYuKjo5+wwGAqPk8oGkid8LiQ+MxTCoVLUGsJikrlYBGg6jk3zpRx0HsFqgpRWE7rRbMKk51OmvTk5Ncbj73KhCwW/A0eXnZD0ynWDk8BP7sxCQe/9iIxUoHvV63y5gUAacSu5quD1X3x+FIwIkECXqTcCwgS8KVgAwJ1wKiJTwJiJTwLCBKwpfAQmL3cTbDXiZDhv8lsBeJDFVd5+XbdkKnYdW2yXE6TRP9vlmeuFttPcDdTWOL3yWFCKjxSsV4vbkxqx5ZTVPJwwMvN+gbvn12Zjybwxm9vQUUxSrf1z/wA282+fBCwe669iwgAu5ZgLJiEWi1/MI9CYiEuxYQDXclIAPuWEAW3JGATDhg0wkpK5d5cGQ1zS/cUuDiIpEA6nUenG0qiognGldgfh6NyoZbCgB3d1gdjWTCbYOy5eXqva5T9vlJWa0m43n+DfAbTAjpSRKYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEwLTE0VDIzOjQ3OjA5KzAwOjAwjwWWuwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0xMC0xNFQyMzo0NzowOSswMDowMP5YLgcAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMTAtMTRUMjM6NDc6MDkrMDA6MDCpTQ/YAAAAAElFTkSuQmCC";
const batchlink = "";
const BatchLink = ({
  text
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "batch-list-container",
    children: [/* @__PURE__ */ jsx("img", {
      alt: "Samal agro go right arrow icon",
      className: "batch-list-ra-icon",
      srcSet: rightArrow
    }), /* @__PURE__ */ jsx("p", {
      className: "batch-link-text",
      children: text
    })]
  });
};
const productService$1 = new ProductService();
const BatchListContainer = () => {
  const [batchs, setBatchs] = react.exports.useState();
  const {
    id: id2
  } = useParams();
  const getData = async () => {
    try {
      const productRetrieved = await productService$1.getProductsFromCat(id2);
      return setBatchs(productRetrieved);
    } catch (error) {
      return error.message;
    }
  };
  react.exports.useEffect(() => {
    getData();
  }, []);
  return /* @__PURE__ */ jsxs("section", {
    className: "batch-container",
    children: [/* @__PURE__ */ jsx(BatchHeader, {
      text: "Batch Catalog"
    }), /* @__PURE__ */ jsx(Link, {
      to: "/",
      children: /* @__PURE__ */ jsx(BatchLink, {
        text: "HOME/BATCHCATALOG"
      })
    })]
  });
};
const batchDetail = "";
/*! For license information please see react-image-zooom.js.LICENSE.txt */
var reactImageZooom = (() => {
  var e = {
    410: (e2, t3, r3) => {
      r3.r(t3), r3.d(t3, {
        default: () => He2
      });
      const n2 = react.exports;
      var o = r3.n(n2), i = r3(864), a = r3(774);
      r3.n(a);
      const c = function(e3) {
        function t4(e4, n4, c3, l4, d3) {
          for (var p4, h3, g3, m4, S4, k4 = 0, C4 = 0, A4 = 0, x4 = 0, P4 = 0, T4 = 0, _3 = g3 = p4 = 0, M3 = 0, N3 = 0, D3 = 0, L3 = 0, F3 = c3.length, B3 = F3 - 1, G3 = "", H3 = "", Y3 = "", U3 = ""; M3 < F3; ) {
            if (h3 = c3.charCodeAt(M3), M3 === B3 && 0 !== C4 + x4 + A4 + k4 && (0 !== C4 && (h3 = 47 === C4 ? 10 : 47), x4 = A4 = k4 = 0, F3++, B3++), 0 === C4 + x4 + A4 + k4) {
              if (M3 === B3 && (0 < N3 && (G3 = G3.replace(f3, "")), 0 < G3.trim().length)) {
                switch (h3) {
                  case 32:
                  case 9:
                  case 59:
                  case 13:
                  case 10:
                    break;
                  default:
                    G3 += c3.charAt(M3);
                }
                h3 = 59;
              }
              switch (h3) {
                case 123:
                  for (p4 = (G3 = G3.trim()).charCodeAt(0), g3 = 1, L3 = ++M3; M3 < F3; ) {
                    switch (h3 = c3.charCodeAt(M3)) {
                      case 123:
                        g3++;
                        break;
                      case 125:
                        g3--;
                        break;
                      case 47:
                        switch (h3 = c3.charCodeAt(M3 + 1)) {
                          case 42:
                          case 47:
                            e: {
                              for (_3 = M3 + 1; _3 < B3; ++_3)
                                switch (c3.charCodeAt(_3)) {
                                  case 47:
                                    if (42 === h3 && 42 === c3.charCodeAt(_3 - 1) && M3 + 2 !== _3) {
                                      M3 = _3 + 1;
                                      break e;
                                    }
                                    break;
                                  case 10:
                                    if (47 === h3) {
                                      M3 = _3 + 1;
                                      break e;
                                    }
                                }
                              M3 = _3;
                            }
                        }
                        break;
                      case 91:
                        h3++;
                      case 40:
                        h3++;
                      case 34:
                      case 39:
                        for (; M3++ < B3 && c3.charCodeAt(M3) !== h3; )
                          ;
                    }
                    if (0 === g3)
                      break;
                    M3++;
                  }
                  switch (g3 = c3.substring(L3, M3), 0 === p4 && (p4 = (G3 = G3.replace(u3, "").trim()).charCodeAt(0)), p4) {
                    case 64:
                      switch (0 < N3 && (G3 = G3.replace(f3, "")), h3 = G3.charCodeAt(1)) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          N3 = n4;
                          break;
                        default:
                          N3 = j3;
                      }
                      if (L3 = (g3 = t4(n4, N3, g3, h3, d3 + 1)).length, 0 < $3 && (S4 = s(3, g3, N3 = r4(j3, G3, D3), n4, O3, I3, L3, h3, d3, l4), G3 = N3.join(""), void 0 !== S4 && 0 === (L3 = (g3 = S4.trim()).length) && (h3 = 0, g3 = "")), 0 < L3)
                        switch (h3) {
                          case 115:
                            G3 = G3.replace(w3, a2);
                          case 100:
                          case 109:
                          case 45:
                            g3 = G3 + "{" + g3 + "}";
                            break;
                          case 107:
                            g3 = (G3 = G3.replace(y3, "$1 $2")) + "{" + g3 + "}", g3 = 1 === R3 || 2 === R3 && i2("@" + g3, 3) ? "@-webkit-" + g3 + "@" + g3 : "@" + g3;
                            break;
                          default:
                            g3 = G3 + g3, 112 === l4 && (H3 += g3, g3 = "");
                        }
                      else
                        g3 = "";
                      break;
                    default:
                      g3 = t4(n4, r4(n4, G3, D3), g3, l4, d3 + 1);
                  }
                  Y3 += g3, g3 = D3 = N3 = _3 = p4 = 0, G3 = "", h3 = c3.charCodeAt(++M3);
                  break;
                case 125:
                case 59:
                  if (1 < (L3 = (G3 = (0 < N3 ? G3.replace(f3, "") : G3).trim()).length))
                    switch (0 === _3 && (p4 = G3.charCodeAt(0), 45 === p4 || 96 < p4 && 123 > p4) && (L3 = (G3 = G3.replace(" ", ":")).length), 0 < $3 && void 0 !== (S4 = s(1, G3, n4, e4, O3, I3, H3.length, l4, d3, l4)) && 0 === (L3 = (G3 = S4.trim()).length) && (G3 = "\0\0"), p4 = G3.charCodeAt(0), h3 = G3.charCodeAt(1), p4) {
                      case 0:
                        break;
                      case 64:
                        if (105 === h3 || 99 === h3) {
                          U3 += G3 + c3.charAt(M3);
                          break;
                        }
                      default:
                        58 !== G3.charCodeAt(L3 - 1) && (H3 += o2(G3, p4, h3, G3.charCodeAt(2)));
                    }
                  D3 = N3 = _3 = p4 = 0, G3 = "", h3 = c3.charCodeAt(++M3);
              }
            }
            switch (h3) {
              case 13:
              case 10:
                47 === C4 ? C4 = 0 : 0 === 1 + p4 && 107 !== l4 && 0 < G3.length && (N3 = 1, G3 += "\0"), 0 < $3 * z3 && s(0, G3, n4, e4, O3, I3, H3.length, l4, d3, l4), I3 = 1, O3++;
                break;
              case 59:
              case 125:
                if (0 === C4 + x4 + A4 + k4) {
                  I3++;
                  break;
                }
              default:
                switch (I3++, m4 = c3.charAt(M3), h3) {
                  case 9:
                  case 32:
                    if (0 === x4 + k4 + C4)
                      switch (P4) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                          m4 = "";
                          break;
                        default:
                          32 !== h3 && (m4 = " ");
                      }
                    break;
                  case 0:
                    m4 = "\\0";
                    break;
                  case 12:
                    m4 = "\\f";
                    break;
                  case 11:
                    m4 = "\\v";
                    break;
                  case 38:
                    0 === x4 + C4 + k4 && (N3 = D3 = 1, m4 = "\f" + m4);
                    break;
                  case 108:
                    if (0 === x4 + C4 + k4 + E3 && 0 < _3)
                      switch (M3 - _3) {
                        case 2:
                          112 === P4 && 58 === c3.charCodeAt(M3 - 3) && (E3 = P4);
                        case 8:
                          111 === T4 && (E3 = T4);
                      }
                    break;
                  case 58:
                    0 === x4 + C4 + k4 && (_3 = M3);
                    break;
                  case 44:
                    0 === C4 + A4 + x4 + k4 && (N3 = 1, m4 += "\r");
                    break;
                  case 34:
                  case 39:
                    0 === C4 && (x4 = x4 === h3 ? 0 : 0 === x4 ? h3 : x4);
                    break;
                  case 91:
                    0 === x4 + C4 + A4 && k4++;
                    break;
                  case 93:
                    0 === x4 + C4 + A4 && k4--;
                    break;
                  case 41:
                    0 === x4 + C4 + k4 && A4--;
                    break;
                  case 40:
                    if (0 === x4 + C4 + k4) {
                      if (0 === p4)
                        switch (2 * P4 + 3 * T4) {
                          case 533:
                            break;
                          default:
                            p4 = 1;
                        }
                      A4++;
                    }
                    break;
                  case 64:
                    0 === C4 + A4 + x4 + k4 + _3 + g3 && (g3 = 1);
                    break;
                  case 42:
                  case 47:
                    if (!(0 < x4 + k4 + A4))
                      switch (C4) {
                        case 0:
                          switch (2 * h3 + 3 * c3.charCodeAt(M3 + 1)) {
                            case 235:
                              C4 = 47;
                              break;
                            case 220:
                              L3 = M3, C4 = 42;
                          }
                          break;
                        case 42:
                          47 === h3 && 42 === P4 && L3 + 2 !== M3 && (33 === c3.charCodeAt(L3 + 2) && (H3 += c3.substring(L3, M3 + 1)), m4 = "", C4 = 0);
                      }
                }
                0 === C4 && (G3 += m4);
            }
            T4 = P4, P4 = h3, M3++;
          }
          if (0 < (L3 = H3.length)) {
            if (N3 = n4, 0 < $3 && void 0 !== (S4 = s(2, H3, N3, e4, O3, I3, L3, l4, d3, l4)) && 0 === (H3 = S4).length)
              return U3 + H3 + Y3;
            if (H3 = N3.join(",") + "{" + H3 + "}", 0 != R3 * E3) {
              switch (2 !== R3 || i2(H3, 2) || (E3 = 0), E3) {
                case 111:
                  H3 = H3.replace(b3, ":-moz-$1") + H3;
                  break;
                case 112:
                  H3 = H3.replace(v3, "::-webkit-input-$1") + H3.replace(v3, "::-moz-$1") + H3.replace(v3, ":-ms-input-$1") + H3;
              }
              E3 = 0;
            }
          }
          return U3 + H3 + Y3;
        }
        function r4(e4, t5, r5) {
          var o3 = t5.trim().split(g2);
          t5 = o3;
          var i3 = o3.length, a3 = e4.length;
          switch (a3) {
            case 0:
            case 1:
              var s2 = 0;
              for (e4 = 0 === a3 ? "" : e4[0] + " "; s2 < i3; ++s2)
                t5[s2] = n3(e4, t5[s2], r5).trim();
              break;
            default:
              var c3 = s2 = 0;
              for (t5 = []; s2 < i3; ++s2)
                for (var l4 = 0; l4 < a3; ++l4)
                  t5[c3++] = n3(e4[l4] + " ", o3[s2], r5).trim();
          }
          return t5;
        }
        function n3(e4, t5, r5) {
          var n4 = t5.charCodeAt(0);
          switch (33 > n4 && (n4 = (t5 = t5.trim()).charCodeAt(0)), n4) {
            case 38:
              return t5.replace(m3, "$1" + e4.trim());
            case 58:
              return e4.trim() + t5.replace(m3, "$1" + e4.trim());
            default:
              if (0 < 1 * r5 && 0 < t5.indexOf("\f"))
                return t5.replace(m3, (58 === e4.charCodeAt(0) ? "" : "$1") + e4.trim());
          }
          return e4 + t5;
        }
        function o2(e4, t5, r5, n4) {
          var a3 = e4 + ";", s2 = 2 * t5 + 3 * r5 + 4 * n4;
          if (944 === s2) {
            e4 = a3.indexOf(":", 9) + 1;
            var c3 = a3.substring(e4, a3.length - 1).trim();
            return c3 = a3.substring(0, e4).trim() + c3 + ";", 1 === R3 || 2 === R3 && i2(c3, 1) ? "-webkit-" + c3 + c3 : c3;
          }
          if (0 === R3 || 2 === R3 && !i2(a3, 1))
            return a3;
          switch (s2) {
            case 1015:
              return 97 === a3.charCodeAt(10) ? "-webkit-" + a3 + a3 : a3;
            case 951:
              return 116 === a3.charCodeAt(3) ? "-webkit-" + a3 + a3 : a3;
            case 963:
              return 110 === a3.charCodeAt(5) ? "-webkit-" + a3 + a3 : a3;
            case 1009:
              if (100 !== a3.charCodeAt(4))
                break;
            case 969:
            case 942:
              return "-webkit-" + a3 + a3;
            case 978:
              return "-webkit-" + a3 + "-moz-" + a3 + a3;
            case 1019:
            case 983:
              return "-webkit-" + a3 + "-moz-" + a3 + "-ms-" + a3 + a3;
            case 883:
              if (45 === a3.charCodeAt(8))
                return "-webkit-" + a3 + a3;
              if (0 < a3.indexOf("image-set(", 11))
                return a3.replace(P3, "$1-webkit-$2") + a3;
              break;
            case 932:
              if (45 === a3.charCodeAt(4))
                switch (a3.charCodeAt(5)) {
                  case 103:
                    return "-webkit-box-" + a3.replace("-grow", "") + "-webkit-" + a3 + "-ms-" + a3.replace("grow", "positive") + a3;
                  case 115:
                    return "-webkit-" + a3 + "-ms-" + a3.replace("shrink", "negative") + a3;
                  case 98:
                    return "-webkit-" + a3 + "-ms-" + a3.replace("basis", "preferred-size") + a3;
                }
              return "-webkit-" + a3 + "-ms-" + a3 + a3;
            case 964:
              return "-webkit-" + a3 + "-ms-flex-" + a3 + a3;
            case 1023:
              if (99 !== a3.charCodeAt(8))
                break;
              return "-webkit-box-pack" + (c3 = a3.substring(a3.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a3 + "-ms-flex-pack" + c3 + a3;
            case 1005:
              return p3.test(a3) ? a3.replace(d2, ":-webkit-") + a3.replace(d2, ":-moz-") + a3 : a3;
            case 1e3:
              switch (t5 = (c3 = a3.substring(13).trim()).indexOf("-") + 1, c3.charCodeAt(0) + c3.charCodeAt(t5)) {
                case 226:
                  c3 = a3.replace(S3, "tb");
                  break;
                case 232:
                  c3 = a3.replace(S3, "tb-rl");
                  break;
                case 220:
                  c3 = a3.replace(S3, "lr");
                  break;
                default:
                  return a3;
              }
              return "-webkit-" + a3 + "-ms-" + c3 + a3;
            case 1017:
              if (-1 === a3.indexOf("sticky", 9))
                break;
            case 975:
              switch (t5 = (a3 = e4).length - 10, s2 = (c3 = (33 === a3.charCodeAt(t5) ? a3.substring(0, t5) : a3).substring(e4.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c3.charCodeAt(7))) {
                case 203:
                  if (111 > c3.charCodeAt(8))
                    break;
                case 115:
                  a3 = a3.replace(c3, "-webkit-" + c3) + ";" + a3;
                  break;
                case 207:
                case 102:
                  a3 = a3.replace(c3, "-webkit-" + (102 < s2 ? "inline-" : "") + "box") + ";" + a3.replace(c3, "-webkit-" + c3) + ";" + a3.replace(c3, "-ms-" + c3 + "box") + ";" + a3;
              }
              return a3 + ";";
            case 938:
              if (45 === a3.charCodeAt(5))
                switch (a3.charCodeAt(6)) {
                  case 105:
                    return c3 = a3.replace("-items", ""), "-webkit-" + a3 + "-webkit-box-" + c3 + "-ms-flex-" + c3 + a3;
                  case 115:
                    return "-webkit-" + a3 + "-ms-flex-item-" + a3.replace(C3, "") + a3;
                  default:
                    return "-webkit-" + a3 + "-ms-flex-line-pack" + a3.replace("align-content", "").replace(C3, "") + a3;
                }
              break;
            case 973:
            case 989:
              if (45 !== a3.charCodeAt(3) || 122 === a3.charCodeAt(4))
                break;
            case 931:
            case 953:
              if (true === x3.test(e4))
                return 115 === (c3 = e4.substring(e4.indexOf(":") + 1)).charCodeAt(0) ? o2(e4.replace("stretch", "fill-available"), t5, r5, n4).replace(":fill-available", ":stretch") : a3.replace(c3, "-webkit-" + c3) + a3.replace(c3, "-moz-" + c3.replace("fill-", "")) + a3;
              break;
            case 962:
              if (a3 = "-webkit-" + a3 + (102 === a3.charCodeAt(5) ? "-ms-" + a3 : "") + a3, 211 === r5 + n4 && 105 === a3.charCodeAt(13) && 0 < a3.indexOf("transform", 10))
                return a3.substring(0, a3.indexOf(";", 27) + 1).replace(h2, "$1-webkit-$2") + a3;
          }
          return a3;
        }
        function i2(e4, t5) {
          var r5 = e4.indexOf(1 === t5 ? ":" : "{"), n4 = e4.substring(0, 3 !== t5 ? r5 : 10);
          return r5 = e4.substring(r5 + 1, e4.length - 1), _2(2 !== t5 ? n4 : n4.replace(A3, "$1"), r5, t5);
        }
        function a2(e4, t5) {
          var r5 = o2(t5, t5.charCodeAt(0), t5.charCodeAt(1), t5.charCodeAt(2));
          return r5 !== t5 + ";" ? r5.replace(k3, " or ($1)").substring(4) : "(" + t5 + ")";
        }
        function s(e4, t5, r5, n4, o3, i3, a3, s2, c3, u4) {
          for (var f4, d3 = 0, p4 = t5; d3 < $3; ++d3)
            switch (f4 = T3[d3].call(l3, e4, p4, r5, n4, o3, i3, a3, s2, c3, u4)) {
              case void 0:
              case false:
              case true:
              case null:
                break;
              default:
                p4 = f4;
            }
          if (p4 !== t5)
            return p4;
        }
        function c2(e4) {
          return void 0 !== (e4 = e4.prefix) && (_2 = null, e4 ? "function" != typeof e4 ? R3 = 1 : (R3 = 2, _2 = e4) : R3 = 0), c2;
        }
        function l3(e4, r5) {
          var n4 = e4;
          if (33 > n4.charCodeAt(0) && (n4 = n4.trim()), n4 = [n4], 0 < $3) {
            var o3 = s(-1, r5, n4, n4, O3, I3, 0, 0, 0, 0);
            void 0 !== o3 && "string" == typeof o3 && (r5 = o3);
          }
          var i3 = t4(j3, n4, r5, 0, 0);
          return 0 < $3 && void 0 !== (o3 = s(-2, i3, n4, n4, O3, I3, i3.length, 0, 0, 0)) && (i3 = o3), E3 = 0, I3 = O3 = 1, i3;
        }
        var u3 = /^\0+/g, f3 = /[\0\r\f]/g, d2 = /: */g, p3 = /zoo|gra/, h2 = /([,: ])(transform)/g, g2 = /,\r+?/g, m3 = /([\t\r\n ])*\f?&/g, y3 = /@(k\w+)\s*(\S*)\s*/, v3 = /::(place)/g, b3 = /:(read-only)/g, S3 = /[svh]\w+-[tblr]{2}/, w3 = /\(\s*(.*)\s*\)/g, k3 = /([\s\S]*?);/g, C3 = /-self|flex-/g, A3 = /[^]*?(:[rp][el]a[\w-]+)[^]*/, x3 = /stretch|:\s*\w+\-(?:conte|avail)/, P3 = /([^-])(image-set\()/, I3 = 1, O3 = 1, E3 = 0, R3 = 1, j3 = [], T3 = [], $3 = 0, _2 = null, z3 = 0;
        return l3.use = function e4(t5) {
          switch (t5) {
            case void 0:
            case null:
              $3 = T3.length = 0;
              break;
            default:
              if ("function" == typeof t5)
                T3[$3++] = t5;
              else if ("object" == typeof t5)
                for (var r5 = 0, n4 = t5.length; r5 < n4; ++r5)
                  e4(t5[r5]);
              else
                z3 = 0 | !!t5;
          }
          return e4;
        }, l3.set = c2, void 0 !== e3 && c2(e3), l3;
      }, l2 = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
      var u2 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      const f2 = (d = {}, function(e3) {
        return void 0 === d[e3] && (d[e3] = (t4 = e3, u2.test(t4) || 111 === t4.charCodeAt(0) && 110 === t4.charCodeAt(1) && t4.charCodeAt(2) < 91)), d[e3];
        var t4;
      });
      var d, p2 = r3(679), h = r3.n(p2);
      function g() {
        return (g = Object.assign || function(e3) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var r4 = arguments[t4];
            for (var n3 in r4)
              Object.prototype.hasOwnProperty.call(r4, n3) && (e3[n3] = r4[n3]);
          }
          return e3;
        }).apply(this, arguments);
      }
      var m2 = function(e3, t4) {
        for (var r4 = [e3[0]], n3 = 0, o2 = t4.length; n3 < o2; n3 += 1)
          r4.push(t4[n3], e3[n3 + 1]);
        return r4;
      }, y2 = function(e3) {
        return null !== e3 && "object" == typeof e3 && "[object Object]" === (e3.toString ? e3.toString() : Object.prototype.toString.call(e3)) && !(0, i.typeOf)(e3);
      }, v2 = Object.freeze([]), b2 = Object.freeze({});
      function S2(e3) {
        return "function" == typeof e3;
      }
      function w2(e3) {
        return e3.displayName || e3.name || "Component";
      }
      function k2(e3) {
        return e3 && "string" == typeof e3.styledComponentId;
      }
      var C2 = "undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", A2 = "undefined" != typeof window && "HTMLElement" in window, x2 = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY && "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY);
      function P2(e3) {
        for (var t4 = arguments.length, r4 = new Array(t4 > 1 ? t4 - 1 : 0), n3 = 1; n3 < t4; n3++)
          r4[n3 - 1] = arguments[n3];
        throw new Error("An error occurred. See https://git.io/JUIaE#" + e3 + " for more information." + (r4.length > 0 ? " Args: " + r4.join(", ") : ""));
      }
      var I2 = function() {
        function e3(e4) {
          this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e4;
        }
        var t4 = e3.prototype;
        return t4.indexOfGroup = function(e4) {
          for (var t5 = 0, r4 = 0; r4 < e4; r4++)
            t5 += this.groupSizes[r4];
          return t5;
        }, t4.insertRules = function(e4, t5) {
          if (e4 >= this.groupSizes.length) {
            for (var r4 = this.groupSizes, n3 = r4.length, o2 = n3; e4 >= o2; )
              (o2 <<= 1) < 0 && P2(16, "" + e4);
            this.groupSizes = new Uint32Array(o2), this.groupSizes.set(r4), this.length = o2;
            for (var i2 = n3; i2 < o2; i2++)
              this.groupSizes[i2] = 0;
          }
          for (var a2 = this.indexOfGroup(e4 + 1), s = 0, c2 = t5.length; s < c2; s++)
            this.tag.insertRule(a2, t5[s]) && (this.groupSizes[e4]++, a2++);
        }, t4.clearGroup = function(e4) {
          if (e4 < this.length) {
            var t5 = this.groupSizes[e4], r4 = this.indexOfGroup(e4), n3 = r4 + t5;
            this.groupSizes[e4] = 0;
            for (var o2 = r4; o2 < n3; o2++)
              this.tag.deleteRule(r4);
          }
        }, t4.getGroup = function(e4) {
          var t5 = "";
          if (e4 >= this.length || 0 === this.groupSizes[e4])
            return t5;
          for (var r4 = this.groupSizes[e4], n3 = this.indexOfGroup(e4), o2 = n3 + r4, i2 = n3; i2 < o2; i2++)
            t5 += this.tag.getRule(i2) + "/*!sc*/\n";
          return t5;
        }, e3;
      }(), O2 = /* @__PURE__ */ new Map(), E2 = /* @__PURE__ */ new Map(), R2 = 1, j2 = function(e3) {
        if (O2.has(e3))
          return O2.get(e3);
        for (; E2.has(R2); )
          R2++;
        var t4 = R2++;
        return O2.set(e3, t4), E2.set(t4, e3), t4;
      }, T2 = function(e3) {
        return E2.get(e3);
      }, $2 = function(e3, t4) {
        O2.set(e3, t4), E2.set(t4, e3);
      }, _ = "style[" + C2 + '][data-styled-version="5.2.1"]', z2 = new RegExp("^" + C2 + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), M2 = function(e3, t4, r4) {
        for (var n3, o2 = r4.split(","), i2 = 0, a2 = o2.length; i2 < a2; i2++)
          (n3 = o2[i2]) && e3.registerName(t4, n3);
      }, N2 = function(e3, t4) {
        for (var r4 = t4.innerHTML.split("/*!sc*/\n"), n3 = [], o2 = 0, i2 = r4.length; o2 < i2; o2++) {
          var a2 = r4[o2].trim();
          if (a2) {
            var s = a2.match(z2);
            if (s) {
              var c2 = 0 | parseInt(s[1], 10), l3 = s[2];
              0 !== c2 && ($2(l3, c2), M2(e3, l3, s[3]), e3.getTag().insertRules(c2, n3)), n3.length = 0;
            } else
              n3.push(a2);
          }
        }
      }, D2 = function() {
        return r3.nc;
      }, L2 = function(e3) {
        var t4 = document.head, r4 = e3 || t4, n3 = document.createElement("style"), o2 = function(e4) {
          for (var t5 = e4.childNodes, r5 = t5.length; r5 >= 0; r5--) {
            var n4 = t5[r5];
            if (n4 && 1 === n4.nodeType && n4.hasAttribute(C2))
              return n4;
          }
        }(r4), i2 = void 0 !== o2 ? o2.nextSibling : null;
        n3.setAttribute(C2, "active"), n3.setAttribute("data-styled-version", "5.2.1");
        var a2 = D2();
        return a2 && n3.setAttribute("nonce", a2), r4.insertBefore(n3, i2), n3;
      }, F2 = function() {
        function e3(e4) {
          var t5 = this.element = L2(e4);
          t5.appendChild(document.createTextNode("")), this.sheet = function(e5) {
            if (e5.sheet)
              return e5.sheet;
            for (var t6 = document.styleSheets, r4 = 0, n3 = t6.length; r4 < n3; r4++) {
              var o2 = t6[r4];
              if (o2.ownerNode === e5)
                return o2;
            }
            P2(17);
          }(t5), this.length = 0;
        }
        var t4 = e3.prototype;
        return t4.insertRule = function(e4, t5) {
          try {
            return this.sheet.insertRule(t5, e4), this.length++, true;
          } catch (e5) {
            return false;
          }
        }, t4.deleteRule = function(e4) {
          this.sheet.deleteRule(e4), this.length--;
        }, t4.getRule = function(e4) {
          var t5 = this.sheet.cssRules[e4];
          return void 0 !== t5 && "string" == typeof t5.cssText ? t5.cssText : "";
        }, e3;
      }(), B2 = function() {
        function e3(e4) {
          var t5 = this.element = L2(e4);
          this.nodes = t5.childNodes, this.length = 0;
        }
        var t4 = e3.prototype;
        return t4.insertRule = function(e4, t5) {
          if (e4 <= this.length && e4 >= 0) {
            var r4 = document.createTextNode(t5), n3 = this.nodes[e4];
            return this.element.insertBefore(r4, n3 || null), this.length++, true;
          }
          return false;
        }, t4.deleteRule = function(e4) {
          this.element.removeChild(this.nodes[e4]), this.length--;
        }, t4.getRule = function(e4) {
          return e4 < this.length ? this.nodes[e4].textContent : "";
        }, e3;
      }(), G2 = function() {
        function e3(e4) {
          this.rules = [], this.length = 0;
        }
        var t4 = e3.prototype;
        return t4.insertRule = function(e4, t5) {
          return e4 <= this.length && (this.rules.splice(e4, 0, t5), this.length++, true);
        }, t4.deleteRule = function(e4) {
          this.rules.splice(e4, 1), this.length--;
        }, t4.getRule = function(e4) {
          return e4 < this.length ? this.rules[e4] : "";
        }, e3;
      }(), H2 = A2, Y2 = {
        isServer: !A2,
        useCSSOMInjection: !x2
      }, U2 = function() {
        function e3(e4, t5, r4) {
          void 0 === e4 && (e4 = b2), void 0 === t5 && (t5 = {}), this.options = g({}, Y2, {}, e4), this.gs = t5, this.names = new Map(r4), !this.options.isServer && A2 && H2 && (H2 = false, function(e5) {
            for (var t6 = document.querySelectorAll(_), r5 = 0, n3 = t6.length; r5 < n3; r5++) {
              var o2 = t6[r5];
              o2 && "active" !== o2.getAttribute(C2) && (N2(e5, o2), o2.parentNode && o2.parentNode.removeChild(o2));
            }
          }(this));
        }
        e3.registerId = function(e4) {
          return j2(e4);
        };
        var t4 = e3.prototype;
        return t4.reconstructWithOptions = function(t5, r4) {
          return void 0 === r4 && (r4 = true), new e3(g({}, this.options, {}, t5), this.gs, r4 && this.names || void 0);
        }, t4.allocateGSInstance = function(e4) {
          return this.gs[e4] = (this.gs[e4] || 0) + 1;
        }, t4.getTag = function() {
          return this.tag || (this.tag = (r4 = (t5 = this.options).isServer, n3 = t5.useCSSOMInjection, o2 = t5.target, e4 = r4 ? new G2(o2) : n3 ? new F2(o2) : new B2(o2), new I2(e4)));
          var e4, t5, r4, n3, o2;
        }, t4.hasNameForId = function(e4, t5) {
          return this.names.has(e4) && this.names.get(e4).has(t5);
        }, t4.registerName = function(e4, t5) {
          if (j2(e4), this.names.has(e4))
            this.names.get(e4).add(t5);
          else {
            var r4 = /* @__PURE__ */ new Set();
            r4.add(t5), this.names.set(e4, r4);
          }
        }, t4.insertRules = function(e4, t5, r4) {
          this.registerName(e4, t5), this.getTag().insertRules(j2(e4), r4);
        }, t4.clearNames = function(e4) {
          this.names.has(e4) && this.names.get(e4).clear();
        }, t4.clearRules = function(e4) {
          this.getTag().clearGroup(j2(e4)), this.clearNames(e4);
        }, t4.clearTag = function() {
          this.tag = void 0;
        }, t4.toString = function() {
          return function(e4) {
            for (var t5 = e4.getTag(), r4 = t5.length, n3 = "", o2 = 0; o2 < r4; o2++) {
              var i2 = T2(o2);
              if (void 0 !== i2) {
                var a2 = e4.names.get(i2), s = t5.getGroup(o2);
                if (void 0 !== a2 && 0 !== s.length) {
                  var c2 = C2 + ".g" + o2 + '[id="' + i2 + '"]', l3 = "";
                  void 0 !== a2 && a2.forEach(function(e5) {
                    e5.length > 0 && (l3 += e5 + ",");
                  }), n3 += "" + s + c2 + '{content:"' + l3 + '"}/*!sc*/\n';
                }
              }
            }
            return n3;
          }(this);
        }, e3;
      }(), W2 = /(a)(d)/gi, q2 = function(e3) {
        return String.fromCharCode(e3 + (e3 > 25 ? 39 : 97));
      };
      function V2(e3) {
        var t4, r4 = "";
        for (t4 = Math.abs(e3); t4 > 52; t4 = t4 / 52 | 0)
          r4 = q2(t4 % 52) + r4;
        return (q2(t4 % 52) + r4).replace(W2, "$1-$2");
      }
      var X2 = function(e3, t4) {
        for (var r4 = t4.length; r4; )
          e3 = 33 * e3 ^ t4.charCodeAt(--r4);
        return e3;
      }, Z2 = function(e3) {
        return X2(5381, e3);
      };
      function J2(e3) {
        for (var t4 = 0; t4 < e3.length; t4 += 1) {
          var r4 = e3[t4];
          if (S2(r4) && !k2(r4))
            return false;
        }
        return true;
      }
      var K2 = Z2("5.2.1"), Q2 = function() {
        function e3(e4, t4, r4) {
          this.rules = e4, this.staticRulesId = "", this.isStatic = (void 0 === r4 || r4.isStatic) && J2(e4), this.componentId = t4, this.baseHash = X2(K2, t4), this.baseStyle = r4, U2.registerId(t4);
        }
        return e3.prototype.generateAndInjectStyles = function(e4, t4, r4) {
          var n3 = this.componentId, o2 = [];
          if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e4, t4, r4)), this.isStatic && !r4.hash) {
            if (this.staticRulesId && t4.hasNameForId(n3, this.staticRulesId))
              o2.push(this.staticRulesId);
            else {
              var i2 = me2(this.rules, e4, t4, r4).join(""), a2 = V2(X2(this.baseHash, i2.length) >>> 0);
              if (!t4.hasNameForId(n3, a2)) {
                var s = r4(i2, "." + a2, void 0, n3);
                t4.insertRules(n3, a2, s);
              }
              o2.push(a2), this.staticRulesId = a2;
            }
          } else {
            for (var c2 = this.rules.length, l3 = X2(this.baseHash, r4.hash), u3 = "", f3 = 0; f3 < c2; f3++) {
              var d2 = this.rules[f3];
              if ("string" == typeof d2)
                u3 += d2;
              else if (d2) {
                var p3 = me2(d2, e4, t4, r4), h2 = Array.isArray(p3) ? p3.join("") : p3;
                l3 = X2(l3, h2 + f3), u3 += h2;
              }
            }
            if (u3) {
              var g2 = V2(l3 >>> 0);
              if (!t4.hasNameForId(n3, g2)) {
                var m3 = r4(u3, "." + g2, void 0, n3);
                t4.insertRules(n3, g2, m3);
              }
              o2.push(g2);
            }
          }
          return o2.join(" ");
        }, e3;
      }(), ee2 = /^\s*\/\/.*$/gm, te2 = [":", "[", ".", "#"];
      function re2(e3) {
        var t4, r4, n3, o2, i2 = void 0 === e3 ? b2 : e3, a2 = i2.options, s = void 0 === a2 ? b2 : a2, l3 = i2.plugins, u3 = void 0 === l3 ? v2 : l3, f3 = new c(s), d2 = [], p3 = function(e4) {
          function t5(t6) {
            if (t6)
              try {
                e4(t6 + "}");
              } catch (e5) {
              }
          }
          return function(r5, n4, o3, i3, a3, s2, c2, l4, u4, f4) {
            switch (r5) {
              case 1:
                if (0 === u4 && 64 === n4.charCodeAt(0))
                  return e4(n4 + ";"), "";
                break;
              case 2:
                if (0 === l4)
                  return n4 + "/*|*/";
                break;
              case 3:
                switch (l4) {
                  case 102:
                  case 112:
                    return e4(o3[0] + n4), "";
                  default:
                    return n4 + (0 === f4 ? "/*|*/" : "");
                }
              case -2:
                n4.split("/*|*/}").forEach(t5);
            }
          };
        }(function(e4) {
          d2.push(e4);
        }), h2 = function(e4, n4, i3) {
          return 0 === n4 && te2.includes(i3[r4.length]) || i3.match(o2) ? e4 : "." + t4;
        };
        function g2(e4, i3, a3, s2) {
          void 0 === s2 && (s2 = "&");
          var c2 = e4.replace(ee2, ""), l4 = i3 && a3 ? a3 + " " + i3 + " { " + c2 + " }" : c2;
          return t4 = s2, r4 = i3, n3 = new RegExp("\\" + r4 + "\\b", "g"), o2 = new RegExp("(\\" + r4 + "\\b){2,}"), f3(a3 || !i3 ? "" : i3, l4);
        }
        return f3.use([].concat(u3, [function(e4, t5, o3) {
          2 === e4 && o3.length && o3[0].lastIndexOf(r4) > 0 && (o3[0] = o3[0].replace(n3, h2));
        }, p3, function(e4) {
          if (-2 === e4) {
            var t5 = d2;
            return d2 = [], t5;
          }
        }])), g2.hash = u3.length ? u3.reduce(function(e4, t5) {
          return t5.name || P2(15), X2(e4, t5.name);
        }, 5381).toString() : "", g2;
      }
      var ne2 = o().createContext(), oe2 = (ne2.Consumer, o().createContext()), ie2 = (oe2.Consumer, new U2()), ae2 = re2();
      function se2() {
        return (0, n2.useContext)(ne2) || ie2;
      }
      var le2 = function() {
        function e3(e4, t4) {
          var r4 = this;
          this.inject = function(e5, t5) {
            void 0 === t5 && (t5 = ae2);
            var n3 = r4.name + t5.hash;
            e5.hasNameForId(r4.id, n3) || e5.insertRules(r4.id, n3, t5(r4.rules, n3, "@keyframes"));
          }, this.toString = function() {
            return P2(12, String(r4.name));
          }, this.name = e4, this.id = "sc-keyframes-" + e4, this.rules = t4;
        }
        return e3.prototype.getName = function(e4) {
          return void 0 === e4 && (e4 = ae2), this.name + e4.hash;
        }, e3;
      }(), ue2 = /([A-Z])/, fe2 = /([A-Z])/g, de2 = /^ms-/, pe2 = function(e3) {
        return "-" + e3.toLowerCase();
      };
      function he2(e3) {
        return ue2.test(e3) ? e3.replace(fe2, pe2).replace(de2, "-ms-") : e3;
      }
      var ge2 = function(e3) {
        return null == e3 || false === e3 || "" === e3;
      };
      function me2(e3, t4, r4, n3) {
        if (Array.isArray(e3)) {
          for (var o2, i2 = [], a2 = 0, s = e3.length; a2 < s; a2 += 1)
            "" !== (o2 = me2(e3[a2], t4, r4, n3)) && (Array.isArray(o2) ? i2.push.apply(i2, o2) : i2.push(o2));
          return i2;
        }
        return ge2(e3) ? "" : k2(e3) ? "." + e3.styledComponentId : S2(e3) ? "function" != typeof (c2 = e3) || c2.prototype && c2.prototype.isReactComponent || !t4 ? e3 : me2(e3(t4), t4, r4, n3) : e3 instanceof le2 ? r4 ? (e3.inject(r4, n3), e3.getName(n3)) : e3 : y2(e3) ? function e4(t5, r5) {
          var n4, o3, i3 = [];
          for (var a3 in t5)
            t5.hasOwnProperty(a3) && !ge2(t5[a3]) && (y2(t5[a3]) ? i3.push.apply(i3, e4(t5[a3], a3)) : S2(t5[a3]) ? i3.push(he2(a3) + ":", t5[a3], ";") : i3.push(he2(a3) + ": " + (n4 = a3, (null == (o3 = t5[a3]) || "boolean" == typeof o3 || "" === o3 ? "" : "number" != typeof o3 || 0 === o3 || n4 in l2 ? String(o3).trim() : o3 + "px") + ";")));
          return r5 ? [r5 + " {"].concat(i3, ["}"]) : i3;
        }(e3) : e3.toString();
        var c2;
      }
      function ye2(e3) {
        for (var t4 = arguments.length, r4 = new Array(t4 > 1 ? t4 - 1 : 0), n3 = 1; n3 < t4; n3++)
          r4[n3 - 1] = arguments[n3];
        return S2(e3) || y2(e3) ? me2(m2(v2, [e3].concat(r4))) : 0 === r4.length && 1 === e3.length && "string" == typeof e3[0] ? e3 : me2(m2(e3, r4));
      }
      var ve2 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, be2 = /(^-|-$)/g;
      function Se2(e3) {
        return e3.replace(ve2, "-").replace(be2, "");
      }
      var we2 = function(e3) {
        return V2(Z2(e3) >>> 0);
      };
      function ke2(e3) {
        return "string" == typeof e3 && true;
      }
      var Ce2 = function(e3) {
        return "function" == typeof e3 || "object" == typeof e3 && null !== e3 && !Array.isArray(e3);
      }, Ae2 = function(e3) {
        return "__proto__" !== e3 && "constructor" !== e3 && "prototype" !== e3;
      };
      function xe2(e3, t4, r4) {
        var n3 = e3[r4];
        Ce2(t4) && Ce2(n3) ? Pe2(n3, t4) : e3[r4] = t4;
      }
      function Pe2(e3) {
        for (var t4 = arguments.length, r4 = new Array(t4 > 1 ? t4 - 1 : 0), n3 = 1; n3 < t4; n3++)
          r4[n3 - 1] = arguments[n3];
        for (var o2 = 0, i2 = r4; o2 < i2.length; o2++) {
          var a2 = i2[o2];
          if (Ce2(a2))
            for (var s in a2)
              Ae2(s) && xe2(e3, a2[s], s);
        }
        return e3;
      }
      var Ie2 = o().createContext();
      Ie2.Consumer;
      var Oe2 = {};
      function Ee2(e3, t4, r4) {
        var i2 = k2(e3), a2 = !ke2(e3), s = t4.attrs, c2 = void 0 === s ? v2 : s, l3 = t4.componentId, u3 = void 0 === l3 ? function(e4, t5) {
          var r5 = "string" != typeof e4 ? "sc" : Se2(e4);
          Oe2[r5] = (Oe2[r5] || 0) + 1;
          var n3 = r5 + "-" + we2("5.2.1" + r5 + Oe2[r5]);
          return t5 ? t5 + "-" + n3 : n3;
        }(t4.displayName, t4.parentComponentId) : l3, d2 = t4.displayName, p3 = void 0 === d2 ? function(e4) {
          return ke2(e4) ? "styled." + e4 : "Styled(" + w2(e4) + ")";
        }(e3) : d2, m3 = t4.displayName && t4.componentId ? Se2(t4.displayName) + "-" + t4.componentId : t4.componentId || u3, y3 = i2 && e3.attrs ? Array.prototype.concat(e3.attrs, c2).filter(Boolean) : c2, C3 = t4.shouldForwardProp;
        i2 && e3.shouldForwardProp && (C3 = t4.shouldForwardProp ? function(r5, n3) {
          return e3.shouldForwardProp(r5, n3) && t4.shouldForwardProp(r5, n3);
        } : e3.shouldForwardProp);
        var A3, x3 = new Q2(r4, m3, i2 ? e3.componentStyle : void 0), P3 = x3.isStatic && 0 === c2.length, I3 = function(e4, t5) {
          return function(e5, t6, r5, o2) {
            var i3 = e5.attrs, a3 = e5.componentStyle, s2 = e5.defaultProps, c3 = e5.foldedComponentIds, l4 = e5.shouldForwardProp, u4 = e5.styledComponentId, d3 = e5.target, p4 = function(e6, t7, r6) {
              void 0 === e6 && (e6 = b2);
              var n3 = g({}, t7, {
                theme: e6
              }), o3 = {};
              return r6.forEach(function(e7) {
                var t8, r7, i4, a4 = e7;
                for (t8 in S2(a4) && (a4 = a4(n3)), a4)
                  n3[t8] = o3[t8] = "className" === t8 ? (r7 = o3[t8], i4 = a4[t8], r7 && i4 ? r7 + " " + i4 : r7 || i4) : a4[t8];
              }), [n3, o3];
            }(function(e6, t7, r6) {
              return void 0 === r6 && (r6 = b2), e6.theme !== r6.theme && e6.theme || t7 || r6.theme;
            }(t6, (0, n2.useContext)(Ie2), s2) || b2, t6, i3), h2 = p4[0], m4 = p4[1], y4 = function(e6, t7, r6, o3) {
              var i4 = se2(), a4 = (0, n2.useContext)(oe2) || ae2;
              return t7 ? e6.generateAndInjectStyles(b2, i4, a4) : e6.generateAndInjectStyles(r6, i4, a4);
            }(a3, o2, h2), v3 = r5, w3 = m4.$as || t6.$as || m4.as || t6.as || d3, k3 = ke2(w3), C4 = m4 !== t6 ? g({}, t6, {}, m4) : t6, A4 = {};
            for (var x4 in C4)
              "$" !== x4[0] && "as" !== x4 && ("forwardedAs" === x4 ? A4.as = C4[x4] : (l4 ? l4(x4, f2) : !k3 || f2(x4)) && (A4[x4] = C4[x4]));
            return t6.style && m4.style !== t6.style && (A4.style = g({}, t6.style, {}, m4.style)), A4.className = Array.prototype.concat(c3, u4, y4 !== u4 ? y4 : null, t6.className, m4.className).filter(Boolean).join(" "), A4.ref = v3, (0, n2.createElement)(w3, A4);
          }(A3, e4, t5, P3);
        };
        return I3.displayName = p3, (A3 = o().forwardRef(I3)).attrs = y3, A3.componentStyle = x3, A3.displayName = p3, A3.shouldForwardProp = C3, A3.foldedComponentIds = i2 ? Array.prototype.concat(e3.foldedComponentIds, e3.styledComponentId) : v2, A3.styledComponentId = m3, A3.target = i2 ? e3.target : e3, A3.withComponent = function(e4) {
          var n3 = t4.componentId, o2 = function(e5, t5) {
            if (null == e5)
              return {};
            var r5, n4, o3 = {}, i4 = Object.keys(e5);
            for (n4 = 0; n4 < i4.length; n4++)
              r5 = i4[n4], t5.indexOf(r5) >= 0 || (o3[r5] = e5[r5]);
            return o3;
          }(t4, ["componentId"]), i3 = n3 && n3 + "-" + (ke2(e4) ? e4 : Se2(w2(e4)));
          return Ee2(e4, g({}, o2, {
            attrs: y3,
            componentId: i3
          }), r4);
        }, Object.defineProperty(A3, "defaultProps", {
          get: function() {
            return this._foldedDefaultProps;
          },
          set: function(t5) {
            this._foldedDefaultProps = i2 ? Pe2({}, e3.defaultProps, t5) : t5;
          }
        }), A3.toString = function() {
          return "." + A3.styledComponentId;
        }, a2 && h()(A3, e3, {
          attrs: true,
          componentStyle: true,
          displayName: true,
          foldedComponentIds: true,
          shouldForwardProp: true,
          styledComponentId: true,
          target: true,
          withComponent: true
        }), A3;
      }
      var Re2, je2 = function(e3) {
        return function e4(t4, r4, n3) {
          if (void 0 === n3 && (n3 = b2), !(0, i.isValidElementType)(r4))
            return P2(1, String(r4));
          var o2 = function() {
            return t4(r4, n3, ye2.apply(void 0, arguments));
          };
          return o2.withConfig = function(o3) {
            return e4(t4, r4, g({}, n3, {}, o3));
          }, o2.attrs = function(o3) {
            return e4(t4, r4, g({}, n3, {
              attrs: Array.prototype.concat(n3.attrs, o3).filter(Boolean)
            }));
          }, o2;
        }(Ee2, e3);
      };
      ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(e3) {
        je2[e3] = je2(e3);
      }), (Re2 = function(e3, t4) {
        this.rules = e3, this.componentId = t4, this.isStatic = J2(e3), U2.registerId(this.componentId + 1);
      }.prototype).createStyles = function(e3, t4, r4, n3) {
        var o2 = n3(me2(this.rules, t4, r4, n3).join(""), ""), i2 = this.componentId + e3;
        r4.insertRules(i2, i2, o2);
      }, Re2.removeStyles = function(e3, t4) {
        t4.clearRules(this.componentId + e3);
      }, Re2.renderStyles = function(e3, t4, r4, n3) {
        e3 > 2 && U2.registerId(this.componentId + e3), this.removeStyles(e3, r4), this.createStyles(e3, t4, r4, n3);
      };
      const Te2 = je2;
      function $e2(e3, t4) {
        return function(e4) {
          if (Array.isArray(e4))
            return e4;
        }(e3) || function(e4, t5) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e4)) {
            var r4 = [], n3 = true, o2 = false, i2 = void 0;
            try {
              for (var a2, s = e4[Symbol.iterator](); !(n3 = (a2 = s.next()).done) && (r4.push(a2.value), !t5 || r4.length !== t5); n3 = true)
                ;
            } catch (e5) {
              o2 = true, i2 = e5;
            } finally {
              try {
                n3 || null == s.return || s.return();
              } finally {
                if (o2)
                  throw i2;
              }
            }
            return r4;
          }
        }(e3, t4) || function(e4, t5) {
          if (e4) {
            if ("string" == typeof e4)
              return _e2(e4, t5);
            var r4 = Object.prototype.toString.call(e4).slice(8, -1);
            return "Object" === r4 && e4.constructor && (r4 = e4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(e4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? _e2(e4, t5) : void 0;
          }
        }(e3, t4) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function _e2(e3, t4) {
        (null == t4 || t4 > e3.length) && (t4 = e3.length);
        for (var r4 = 0, n3 = new Array(t4); r4 < t4; r4++)
          n3[r4] = e3[r4];
        return n3;
      }
      function ze2() {
        var e3 = De2(["\n  transition: opacity 0.8s;\n  display: block;\n"]);
        return ze2 = function() {
          return e3;
        }, e3;
      }
      function Me2() {
        var e3 = De2(['\n  position: relative;\n  display: inline-block;\n  width: auto;\n  min-height: 25vh;\n  background-position: 50% 50%;\n  background-color: #eee;\n  margin: 0;\n  overflow: hidden;\n  cursor: zoom-in;\n  &:before {\n    content: "";\n    background-color: transparent;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    transition: opacity 0.2s ease-in-out;\n    z-index: 1;\n  }\n  &:after {\n    content: "";\n    position: absolute;\n    top: calc(50% - 25px);\n    left: calc(50% - 25px);\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: 5px solid transparent;\n    border-top-color: #333;\n    border-right-color: #333;\n    border-bottom-color: #333;\n    animation: ', " 2s linear infinite;\n    opacity: 1;\n    transition: opacity 0.2s ease-in-out;\n    z-index: 2;\n  }\n  &.loaded {\n    min-height: auto;\n    &:before {\n      opacity: 0;\n    }\n    &:after {\n      opacity: 0;\n    }\n  }\n"]);
        return Me2 = function() {
          return e3;
        }, e3;
      }
      function Ne2() {
        var e3 = De2(["\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n"]);
        return Ne2 = function() {
          return e3;
        }, e3;
      }
      function De2(e3, t4) {
        return t4 || (t4 = e3.slice(0)), Object.freeze(Object.defineProperties(e3, {
          raw: {
            value: Object.freeze(t4)
          }
        }));
      }
      var Le2 = function(e3) {
        for (var t4 = arguments.length, r4 = new Array(t4 > 1 ? t4 - 1 : 0), n3 = 1; n3 < t4; n3++)
          r4[n3 - 1] = arguments[n3];
        var o2 = ye2.apply(void 0, [e3].concat(r4)).join(""), i2 = we2(o2);
        return new le2(i2, o2);
      }(Ne2()), Fe2 = Te2.figure(Me2(), Le2), Be2 = Te2.img(ze2());
      function Ge2(e3) {
        var t4 = $e2((0, n2.useState)("1"), 2), r4 = t4[0], i2 = t4[1], a2 = $e2((0, n2.useState)("50% 50%"), 2), s = a2[0], c2 = a2[1], l3 = $e2((0, n2.useState)(null), 2), u3 = l3[0], f3 = l3[1], d2 = u3 ? "loaded" : "loading", p3 = "0" === r4 ? "zoomed" : "fullView";
        function h2(e4) {
          var t5, r5, n3, o2, i3 = e4.currentTarget.getBoundingClientRect();
          n3 = e4.clientX - i3.x, o2 = e4.clientY - i3.y, t5 = n3 / i3.width * 100, r5 = o2 / i3.height * 100, c2("".concat(t5, "% ").concat(r5, "% "));
        }
        return (0, n2.useEffect)(function() {
          if ("" === e3.src || null == e3.src)
            throw new Error("Prop src must be defined when using ImageZoom component!");
          i2("0");
          var t5 = new Image();
          t5.src = e3.src, t5.addEventListener("load", function() {
            setTimeout(function() {
              i2("1"), f3(t5.src);
            }, 200);
          });
        }, []), o().createElement(Fe2, {
          id: e3.id,
          className: [d2, p3, e3.className].join(" "),
          style: {
            backgroundImage: "url(" + u3 + ")",
            backgroundSize: e3.zoom + "%",
            backgroundPosition: s
          },
          onClick: function(e4) {
            return function(e5) {
              !function(e6) {
                "0" === r4 ? i2("1") : (i2("0"), h2(e6));
              }(e5);
            }(e4);
          },
          onMouseMove: function(e4) {
            return function(e5) {
              "0" === r4 && h2(e5);
            }(e4);
          },
          onMouseLeave: function() {
            return i2("1"), void c2("50% 50%");
          }
        }, o().createElement(Be2, {
          id: "imageZoom",
          src: u3,
          alt: e3.alt,
          style: {
            opacity: r4
          },
          width: e3.width,
          height: e3.height
        }));
      }
      Ge2.defaultProps = {
        zoom: "200",
        alt: "This is an imageZoom image",
        width: "100%",
        height: "auto"
      };
      const He2 = Ge2;
    },
    679: (e2, t3, r3) => {
      var n2 = r3(864), o = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
      }, i = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
      }, a = {
        $$typeof: true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
      }, s = {};
      function c(e3) {
        return n2.isMemo(e3) ? a : s[e3.$$typeof] || o;
      }
      s[n2.ForwardRef] = {
        $$typeof: true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
      }, s[n2.Memo] = a;
      var l2 = Object.defineProperty, u2 = Object.getOwnPropertyNames, f2 = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, p2 = Object.getPrototypeOf, h = Object.prototype;
      e2.exports = function e3(t4, r4, n3) {
        if ("string" != typeof r4) {
          if (h) {
            var o2 = p2(r4);
            o2 && o2 !== h && e3(t4, o2, n3);
          }
          var a2 = u2(r4);
          f2 && (a2 = a2.concat(f2(r4)));
          for (var s2 = c(t4), g = c(r4), m2 = 0; m2 < a2.length; ++m2) {
            var y2 = a2[m2];
            if (!(i[y2] || n3 && n3[y2] || g && g[y2] || s2 && s2[y2])) {
              var v2 = d(r4, y2);
              try {
                l2(t4, y2, v2);
              } catch (e4) {
              }
            }
          }
        }
        return t4;
      };
    },
    921: (e2, t3) => {
      var r3 = "function" == typeof Symbol && Symbol.for, n2 = r3 ? Symbol.for("react.element") : 60103, o = r3 ? Symbol.for("react.portal") : 60106, i = r3 ? Symbol.for("react.fragment") : 60107, a = r3 ? Symbol.for("react.strict_mode") : 60108, s = r3 ? Symbol.for("react.profiler") : 60114, c = r3 ? Symbol.for("react.provider") : 60109, l2 = r3 ? Symbol.for("react.context") : 60110, u2 = r3 ? Symbol.for("react.async_mode") : 60111, f2 = r3 ? Symbol.for("react.concurrent_mode") : 60111, d = r3 ? Symbol.for("react.forward_ref") : 60112, p2 = r3 ? Symbol.for("react.suspense") : 60113, h = r3 ? Symbol.for("react.suspense_list") : 60120, g = r3 ? Symbol.for("react.memo") : 60115, m2 = r3 ? Symbol.for("react.lazy") : 60116, y2 = r3 ? Symbol.for("react.block") : 60121, v2 = r3 ? Symbol.for("react.fundamental") : 60117, b2 = r3 ? Symbol.for("react.responder") : 60118, S2 = r3 ? Symbol.for("react.scope") : 60119;
      function w2(e3) {
        if ("object" == typeof e3 && null !== e3) {
          var t4 = e3.$$typeof;
          switch (t4) {
            case n2:
              switch (e3 = e3.type) {
                case u2:
                case f2:
                case i:
                case s:
                case a:
                case p2:
                  return e3;
                default:
                  switch (e3 = e3 && e3.$$typeof) {
                    case l2:
                    case d:
                    case m2:
                    case g:
                    case c:
                      return e3;
                    default:
                      return t4;
                  }
              }
            case o:
              return t4;
          }
        }
      }
      function k2(e3) {
        return w2(e3) === f2;
      }
      t3.AsyncMode = u2, t3.ConcurrentMode = f2, t3.ContextConsumer = l2, t3.ContextProvider = c, t3.Element = n2, t3.ForwardRef = d, t3.Fragment = i, t3.Lazy = m2, t3.Memo = g, t3.Portal = o, t3.Profiler = s, t3.StrictMode = a, t3.Suspense = p2, t3.isAsyncMode = function(e3) {
        return k2(e3) || w2(e3) === u2;
      }, t3.isConcurrentMode = k2, t3.isContextConsumer = function(e3) {
        return w2(e3) === l2;
      }, t3.isContextProvider = function(e3) {
        return w2(e3) === c;
      }, t3.isElement = function(e3) {
        return "object" == typeof e3 && null !== e3 && e3.$$typeof === n2;
      }, t3.isForwardRef = function(e3) {
        return w2(e3) === d;
      }, t3.isFragment = function(e3) {
        return w2(e3) === i;
      }, t3.isLazy = function(e3) {
        return w2(e3) === m2;
      }, t3.isMemo = function(e3) {
        return w2(e3) === g;
      }, t3.isPortal = function(e3) {
        return w2(e3) === o;
      }, t3.isProfiler = function(e3) {
        return w2(e3) === s;
      }, t3.isStrictMode = function(e3) {
        return w2(e3) === a;
      }, t3.isSuspense = function(e3) {
        return w2(e3) === p2;
      }, t3.isValidElementType = function(e3) {
        return "string" == typeof e3 || "function" == typeof e3 || e3 === i || e3 === f2 || e3 === s || e3 === a || e3 === p2 || e3 === h || "object" == typeof e3 && null !== e3 && (e3.$$typeof === m2 || e3.$$typeof === g || e3.$$typeof === c || e3.$$typeof === l2 || e3.$$typeof === d || e3.$$typeof === v2 || e3.$$typeof === b2 || e3.$$typeof === S2 || e3.$$typeof === y2);
      }, t3.typeOf = w2;
    },
    864: (e2, t3, r3) => {
      e2.exports = r3(921);
    },
    774: (e2) => {
      e2.exports = function(e3, t3, r3, n2) {
        var o = r3 ? r3.call(n2, e3, t3) : void 0;
        if (void 0 !== o)
          return !!o;
        if (e3 === t3)
          return true;
        if ("object" != typeof e3 || !e3 || "object" != typeof t3 || !t3)
          return false;
        var i = Object.keys(e3), a = Object.keys(t3);
        if (i.length !== a.length)
          return false;
        for (var s = Object.prototype.hasOwnProperty.bind(t3), c = 0; c < i.length; c++) {
          var l2 = i[c];
          if (!s(l2))
            return false;
          var u2 = e3[l2], f2 = t3[l2];
          if (false === (o = r3 ? r3.call(n2, u2, f2, l2) : void 0) || void 0 === o && u2 !== f2)
            return false;
        }
        return true;
      };
    }
  }, t2 = {};
  function r2(n2) {
    if (t2[n2])
      return t2[n2].exports;
    var o = t2[n2] = {
      exports: {}
    };
    return e[n2](o, o.exports, r2), o.exports;
  }
  return r2.n = (e2) => {
    var t3 = e2 && e2.__esModule ? () => e2.default : () => e2;
    return r2.d(t3, {
      a: t3
    }), t3;
  }, r2.d = (e2, t3) => {
    for (var n2 in t3)
      r2.o(t3, n2) && !r2.o(e2, n2) && Object.defineProperty(e2, n2, {
        enumerable: true,
        get: t3[n2]
      });
  }, r2.o = (e2, t3) => Object.prototype.hasOwnProperty.call(e2, t3), r2.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e2, "__esModule", {
      value: true
    });
  }, r2(410);
})();
const detailDropdown = "";
const downArrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5goPBhIuvrVbZgAAAZNJREFUSMftkr1qAlEQha9RIaSyDggBLVIYsLIJBARfwMZHMK2FYJOtBNMGRVCfIMEgJC8gVoqlsKCFCCsKgghioe4Z9qTQxJDdhPwY0mSagXtnvjNz7lXqP/46SNFEy+dJtNBaLGihiGI6vXedLfdFh5KS1M2N2h0AALnLpmmayeTPF9xw7HzUUZ/PFYkxxprmUDDDTIQUXfR4/BvO6qLH4zuOjT/GWNNeN2QlWyg4FBow1mtaci7nsdgnrO6jf3FBoofecmnjWVKVaqXiMDFJut0krnF9f/+eZaR5Z96Fw3Zh88w8C4VIPOBhNnPor6H2+EiLFi2P5wPrSPLwkBSPeBoNB1AOudGIXHLJk5MN0O8nkUHGMBw2Dkig2dxwj46+8IYk6fORkpBEp2MfRFKS6nZ32Xa/7dtwfvCLSfL4mMQlLgcDB0fe5itcDYfPznxb2P7GK2NlBIMkyihPJg7Ct7idTsl1aV06Pf0s1/X1QRBFNBJRLhVW4WpVKQUFUlHpSk8kXAfeurfebu9t8//47XgCG7VNvfYPY5AAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTAtMTVUMDY6MTg6NDYrMDA6MDAvcvlIAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTEwLTE1VDA2OjE4OjQ2KzAwOjAwXi9B9AAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMi0xMC0xNVQwNjoxODo0NiswMDowMAk6YCsAAAAASUVORK5CYII=";
const detailInfo = "";
const harvestIcon = "/assets/cosecha.cb946426.png";
const kgIcon = "/assets/balanza.a6b40110.png";
const tape = "/assets/tape.ca6fe73b.png";
const DetailInfo = ({
  batchs
}) => {
  const {
    kg: kg2,
    harvest
  } = batchs;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsx("img", {
        className: "detail-info-img",
        alt: "samal agro kg icon",
        srcSet: tape
      }), /* @__PURE__ */ jsxs("div", {
        className: "dt-descr-container",
        children: [/* @__PURE__ */ jsx("span", {
          children: " CALIBER "
        }), " ", /* @__PURE__ */ jsx("p", {
          children: "CALIBER "
        }), " "]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsx("img", {
        className: "detail-info-img",
        alt: "samal agro harvest icon",
        srcSet: harvestIcon
      }), /* @__PURE__ */ jsxs("div", {
        className: "dt-descr-container",
        children: [/* @__PURE__ */ jsx("span", {
          children: "HARVEST"
        }), " ", /* @__PURE__ */ jsxs("p", {
          children: [harvest, " "]
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsx("img", {
        className: "detail-info-img",
        alt: "samal agro kg icon",
        srcSet: kgIcon
      }), /* @__PURE__ */ jsxs("div", {
        className: "dt-descr-container",
        children: [/* @__PURE__ */ jsx("span", {
          children: "KG"
        }), " ", /* @__PURE__ */ jsxs("p", {
          children: [kg2, " "]
        }), " "]
      })]
    })]
  });
};
const stained = "/assets/soil.e0182ecc.png";
const purity = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCg8KMQTSvRy1AAABF0lEQVQoz3XOvSuFcRjG8Y/TcxBSXg4D5WVQIkqSkhylMFFGnU02k0FkkkEWDDjKYLAaWCxGBilZTvIHGISBvJTkGDznPAyue7l/1331/V1AnWORWm1GjxiYFFcTOoEVz8aiSNKqZU0OTUtgzoTAsfIcoV+3Kw+ejEko1+lG0pKZiFEgbV8XmJW0rxYH4rkOWRvaXYJ+1z7c4VxPVPLGUEh7VyorhkfFUeDLQxjIaHCqRcyoi5///6rQjnu3Bmw58Y8a9SpBYERlROjVkd/PZBTac64vCK15ZY58grg143alvej4ISx4s44qU6g0LmPdi0Wpgl9nirWhSNataotSXgNz+fOwwXyLEhVSXqEhtOpta85PIpf8BvGSQEZxT1CuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEwLTE1VDEwOjQ5OjA0KzAwOjAwn9gfTAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0xMC0xNVQxMDo0OTowNCswMDowMO6Fp/AAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMTAtMTVUMTA6NDk6MDQrMDA6MDC5kIYvAAAAAElFTkSuQmCC";
const damages = "/assets/damaged-package.ba0d523a.png";
const slightlyStained = "/assets/spot.9f58702c.png";
const sortexQ = "/assets/shield.8c8313c1.png";
const DetailQuality = ({
  batchs
}) => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsx("img", {
        className: "detail-info-img",
        alt: "samal agro kg icon",
        srcSet: damages
      }), " ", /* @__PURE__ */ jsxs("div", {
        className: "dt-descr-container",
        children: [/* @__PURE__ */ jsx("span", {
          children: " DAMAGES "
        }), " ", /* @__PURE__ */ jsx("p", {
          children: "1% "
        }), " "]
      }), " "]
    }), " ", /* @__PURE__ */ jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsx("img", {
        className: "detail-info-img",
        alt: "samal agro harvest icon",
        srcSet: stained
      }), " ", /* @__PURE__ */ jsxs("div", {
        className: "dt-descr-container",
        children: [/* @__PURE__ */ jsx("span", {
          children: " STAINED "
        }), " ", /* @__PURE__ */ jsx("p", {
          children: "1%"
        })]
      }), " "]
    }), " ", /* @__PURE__ */ jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsx("img", {
        className: "detail-info-img",
        alt: "samal agro kg icon",
        srcSet: slightlyStained
      }), " ", /* @__PURE__ */ jsxs("div", {
        className: "dt-descr-container",
        children: [/* @__PURE__ */ jsx("span", {
          children: " SLIGHTLY STAINED"
        }), " ", /* @__PURE__ */ jsx("p", {
          children: "3% "
        }), " "]
      }), " "]
    }), " ", /* @__PURE__ */ jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsx("img", {
        className: "detail-info-img",
        alt: "samal agro kg icon",
        srcSet: purity
      }), " ", /* @__PURE__ */ jsxs("div", {
        className: "dt-descr-container",
        children: [/* @__PURE__ */ jsx("span", {
          children: " PURITY "
        }), " ", /* @__PURE__ */ jsx("p", {
          children: "99.9% "
        }), " "]
      }), " "]
    }), " ", /* @__PURE__ */ jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsx("img", {
        className: "detail-info-img",
        alt: "samal agro kg icon",
        srcSet: sortexQ
      }), " ", /* @__PURE__ */ jsxs("div", {
        className: "dt-descr-container",
        children: [/* @__PURE__ */ jsx("span", {
          children: " SORTEX QUALITY "
        }), " ", /* @__PURE__ */ jsx("p", {
          children: "12 "
        }), " "]
      }), " "]
    }), " "]
  });
};
const DetailVideo = () => {
  return /* @__PURE__ */ jsx("div", {
    children: "DetailVideo"
  });
};
const DetailDropdown = ({
  batchs
}) => {
  const [dropdownDescr, setDropdownDescr] = react.exports.useState(false);
  const [dropdownQuality, setDropdownQuality] = react.exports.useState(false);
  const [dropdownVideo, setDropdownVideo] = react.exports.useState(false);
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "dropdown-title",
      onClick: () => {
        setDropdownDescr(!dropdownDescr);
      },
      children: [/* @__PURE__ */ jsx("p", {
        children: " Description "
      }), " ", /* @__PURE__ */ jsx("img", {
        className: `arrow-dropdown ${dropdownDescr ? "turn-arrow" : ""}`,
        alt: "Samal agro right arrow icon",
        srcSet: downArrow
      }), " "]
    }), dropdownDescr && /* @__PURE__ */ jsx(DetailInfo, {
      batchs
    }), " ", /* @__PURE__ */ jsxs("div", {
      className: "dropdown-title",
      onClick: () => {
        setDropdownQuality(!dropdownQuality);
      },
      children: [/* @__PURE__ */ jsx("p", {
        children: " Quality "
      }), " ", /* @__PURE__ */ jsx("img", {
        className: `arrow-dropdown ${dropdownQuality ? "turn-arrow" : ""}`,
        alt: "Samal agro right arrow icon",
        srcSet: downArrow
      }), " "]
    }), " ", dropdownQuality && /* @__PURE__ */ jsx(DetailQuality, {
      batchs
    }), " ", /* @__PURE__ */ jsxs("div", {
      className: "dropdown-title",
      onClick: () => {
        setDropdownVideo(!dropdownVideo);
      },
      children: [/* @__PURE__ */ jsx("p", {
        children: " Video "
      }), " ", /* @__PURE__ */ jsx("img", {
        className: `arrow-dropdown ${dropdownVideo ? "turn-arrow" : ""}`,
        alt: "Samal agro right arrow icon",
        srcSet: downArrow
      }), " ", dropdownVideo && /* @__PURE__ */ jsx(DetailVideo, {
        batchs
      }), " "]
    }), " "]
  });
};
const BatchDetail = ({
  batchs
}) => {
  const {
    name: name2,
    photo
  } = batchs;
  return /* @__PURE__ */ jsxs("div", {
    className: "batch-detail",
    children: [/* @__PURE__ */ jsxs("h2", {
      className: "batch-detail-title",
      children: [" ", name2, " "]
    }), " ", /* @__PURE__ */ jsx(reactImageZooom, {
      className: "batch-detail-img",
      alt: "Samal agro batch photo",
      height: "100%",
      src: photo,
      zoom: "200"
    }), /* @__PURE__ */ jsx(DetailDropdown, {
      batchs
    }), " "]
  });
};
const productService = new ProductService();
const BatchDetailContainer = () => {
  const [batchs, setBatchs] = react.exports.useState();
  const {
    id: id2
  } = useParams();
  const getData = async () => {
    try {
      const productRetrieved = await productService.getProductsById(id2);
      return setBatchs(productRetrieved);
    } catch (error) {
      return error.message;
    }
  };
  react.exports.useEffect(() => {
    getData();
  }, []);
  return /* @__PURE__ */ jsxs("section", {
    className: "batch-detail-container",
    children: [/* @__PURE__ */ jsx(BatchHeader, {
      text: "BATCH DETAIL"
    }), /* @__PURE__ */ jsx(Link, {
      to: "/",
      children: /* @__PURE__ */ jsx(BatchLink, {
        text: "HOME/DETAIL"
      })
    }), batchs ? /* @__PURE__ */ jsx(BatchDetail, {
      batchs
    }) : /* @__PURE__ */ jsx(Spinner, {})]
  });
};
function App() {
  return /* @__PURE__ */ jsx("div", {
    className: "App",
    children: /* @__PURE__ */ jsxs(BrowserRouter, {
      children: [/* @__PURE__ */ jsxs(Routes, {
        children: [/* @__PURE__ */ jsx(Route, {
          path: "/",
          element: /* @__PURE__ */ jsx(Home, {})
        }), /* @__PURE__ */ jsx(Route, {
          path: "/batchs/:id",
          element: /* @__PURE__ */ jsx(BatchListContainer, {})
        }), /* @__PURE__ */ jsx(Route, {
          path: "/batchs/detail/:id",
          element: /* @__PURE__ */ jsx(BatchDetailContainer, {})
        })]
      }), /* @__PURE__ */ jsx(Footer, {})]
    })
  });
}
const index = "";
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(App, {})
}));
