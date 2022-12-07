var adxAds = true;
var adxAds2 = false;
!function e(_0x9787x4, _0x9787x5, _0x9787x6) {
  function _0x9787x7(_0x9787x9, _0x9787xa) {
    if (!_0x9787x5[_0x9787x9]) {
      if (!_0x9787x4[_0x9787x9]) {
        var _0x9787xb = "function" == typeof require && require;
        if (!_0x9787xa && _0x9787xb) {
          return _0x9787xb(_0x9787x9, true);
        }
        ;
        if (_0x9787x8) {
          return _0x9787x8(_0x9787x9, true);
        }
        ;
        return _0x9787x8(_0x9787x9, true);
      }
      ;
      var _0x9787xd = _0x9787x5[_0x9787x9] = {exports: {}};
      _0x9787x4[_0x9787x9][0].call(_0x9787xd.exports, function (e) {
        var _0x9787x5 = _0x9787x4[_0x9787x9][1][e];
        return _0x9787x7(_0x9787x5 || e);
      }, _0x9787xd, _0x9787xd.exports, e, _0x9787x4, _0x9787x5, _0x9787x6);
    }
    ;
    return _0x9787x5[_0x9787x9].exports;
  }
  for (var _0x9787x8 = "function" == typeof require && require, _0x9787x9 = 0; _0x9787x9 < _0x9787x6.length; _0x9787x9++) {
    _0x9787x7(_0x9787x6[_0x9787x9]);
  }
  ;
  return _0x9787x7;
}({1: [function (e, _0x9787x4, _0x9787x5) {
  ("use strict");
  _0x9787x4.exports = e("./").polyfill();
}, {"./": 2}], 2: [function (e, _0x9787x4, _0x9787x5) {
  (function (_0x9787x6, _0x9787x7) {
    !function (e, _0x9787x6) {
      "object" == typeof _0x9787x5 && void 0 !== _0x9787x4 ? _0x9787x4.exports = _0x9787x6() : "function" == typeof define && define.amd ? define(_0x9787x6) : e.ES6Promise = _0x9787x6();
    }(this, function () {
      ("use strict");
      function _0x9787x4(e) {
        var _0x9787x4 = typeof e;
        return null !== e && ("object" === _0x9787x4 || "function" === _0x9787x4);
      }
      function _0x9787x8() {
        return void 0 !== _0x9787x26 ? function () {
          _0x9787x26(_0x9787xa);
        } : _0x9787x9();
      }
      function _0x9787x9() {
        var e = setTimeout;
        return function () {
          return e(_0x9787xa, 1);
        };
      }
      function _0x9787xa() {
        for (var e = 0; e < _0x9787x25; e += 2) {
          (0, _0x9787x2e[e])(_0x9787x2e[e + 1]), _0x9787x2e[e] = void 0, _0x9787x2e[e + 1] = void 0;
        }
        ;
        _0x9787x25 = 0;
      }
      function _0x9787xb(e, _0x9787x4) {
        var _0x9787x5 = this, _0x9787x6 = new this.constructor(_0x9787xd);
        void 0 === _0x9787x6[_0x9787x30] && _0x9787x1f(_0x9787x6);
        var _0x9787x7 = _0x9787x5._state;
        if (_0x9787x7) {
          var _0x9787x8 = arguments[_0x9787x7 - 1];
          _0x9787x28(function () {
            return _0x9787x1c(_0x9787x7, _0x9787x6, _0x9787x8, _0x9787x5._result);
          });
        } else {
          _0x9787x19(_0x9787x5, _0x9787x6, e, _0x9787x4);
        }
        ;
        return _0x9787x6;
      }
      function _0x9787xc(e) {
        var _0x9787x4 = this;
        if (e && "object" == typeof e && e.constructor === _0x9787x4) {
          return e;
        }
        ;
        var _0x9787x5 = new _0x9787x4(_0x9787xd);
        return _0x9787x15(_0x9787x5, e), _0x9787x5;
      }
      function _0x9787xd() {}
      function _0x9787xe() {
        return new TypeError("You cannot resolve a promise with itself");
      }
      function _0x9787xf() {
        return new TypeError("A promises callback cannot return that same promise.");
      }
      function _0x9787x10(e) {
        try {
          return e.then;
        } catch (e) {
          return _0x9787x34.error = e, _0x9787x34;
        }
      }
      function _0x9787x11(e, _0x9787x4, _0x9787x5, _0x9787x6) {
        try {
          e.call(_0x9787x4, _0x9787x5, _0x9787x6);
        } catch (e) {
          return e;
        }
      }
      function _0x9787x12(e, _0x9787x4, _0x9787x5) {
        _0x9787x28(function (e) {
          var _0x9787x6 = false, _0x9787x7 = _0x9787x11(_0x9787x5, _0x9787x4, function (_0x9787x5) {
            _0x9787x6 || (_0x9787x6 = true, _0x9787x4 !== _0x9787x5 ? _0x9787x15(e, _0x9787x5) : _0x9787x17(e, _0x9787x5));
          }, function (_0x9787x4) {
            _0x9787x6 || (_0x9787x6 = true, _0x9787x18(e, _0x9787x4));
          }, "Settle: " + (e._label || " unknown promise"));
          !_0x9787x6 && _0x9787x7 && (_0x9787x6 = true, _0x9787x18(e, _0x9787x7));
        }, e);
      }
      function _0x9787x13(e, _0x9787x4) {
        _0x9787x4._state === _0x9787x32 ? _0x9787x17(e, _0x9787x4._result) : _0x9787x4._state === _0x9787x33 ? _0x9787x18(e, _0x9787x4._result) : _0x9787x19(_0x9787x4, void 0, function (_0x9787x4) {
          return _0x9787x15(e, _0x9787x4);
        }, function (_0x9787x4) {
          return _0x9787x18(e, _0x9787x4);
        });
      }
      function _0x9787x14(e, _0x9787x4, _0x9787x6) {
        _0x9787x4.constructor === e.constructor && _0x9787x6 === _0x9787xb && _0x9787x4.constructor.resolve === _0x9787xc ? _0x9787x13(e, _0x9787x4) : _0x9787x6 === _0x9787x34 ? (_0x9787x18(e, _0x9787x34.error), _0x9787x34.error = null) : void 0 === _0x9787x6 ? _0x9787x17(e, _0x9787x4) : "function" == typeof _0x9787x6 ? _0x9787x12(e, _0x9787x4, _0x9787x6) : _0x9787x17(e, _0x9787x4);
      }
      function _0x9787x15(e, _0x9787x5) {
        e === _0x9787x5 ? _0x9787x18(e, _0x9787xe()) : _0x9787x4(_0x9787x5) ? _0x9787x14(e, _0x9787x5, _0x9787x10(_0x9787x5)) : _0x9787x17(e, _0x9787x5);
      }
      function _0x9787x16(e) {
        e._onerror && e._onerror(e._result), _0x9787x1a(e);
      }
      function _0x9787x17(e, _0x9787x4) {
        e._state === _0x9787x31 && (e._result = _0x9787x4, e._state = _0x9787x32, 0 !== e._subscribers.length && _0x9787x28(_0x9787x1a, e));
      }
      function _0x9787x18(e, _0x9787x4) {
        e._state === _0x9787x31 && (e._state = _0x9787x33, e._result = _0x9787x4, _0x9787x28(_0x9787x16, e));
      }
      function _0x9787x19(e, _0x9787x4, _0x9787x5, _0x9787x6) {
        var _0x9787x7 = e._subscribers, _0x9787x8 = _0x9787x7.length;
        e._onerror = null, _0x9787x7[_0x9787x8] = _0x9787x4, _0x9787x7[_0x9787x8 + _0x9787x32] = _0x9787x5, _0x9787x7[_0x9787x8 + _0x9787x33] = _0x9787x6, 0 === _0x9787x8 && e._state && _0x9787x28(_0x9787x1a, e);
      }
      function _0x9787x1a(e) {
        var _0x9787x4 = e._subscribers, _0x9787x5 = e._state;
        if (0 !== _0x9787x4.length) {
          for (var _0x9787x6 = void 0, _0x9787x7 = void 0, _0x9787x8 = e._result, _0x9787x9 = 0; _0x9787x9 < _0x9787x4.length; _0x9787x9 += 3) {
            _0x9787x6 = _0x9787x4[_0x9787x9], _0x9787x7 = _0x9787x4[_0x9787x9 + _0x9787x5], _0x9787x6 ? _0x9787x1c(_0x9787x5, _0x9787x6, _0x9787x7, _0x9787x8) : _0x9787x7(_0x9787x8);
          }
          ;
          e._subscribers.length = 0;
        }
      }
      function _0x9787x1b(e, _0x9787x4) {
        try {
          return e(_0x9787x4);
        } catch (e) {
          return _0x9787x34.error = e, _0x9787x34;
        }
      }
      function _0x9787x1c(e, _0x9787x4, _0x9787x6, _0x9787x7) {
        var _0x9787x8 = "function" == typeof _0x9787x6, _0x9787x9 = void 0, _0x9787xa = void 0, _0x9787xb = void 0, _0x9787xc = void 0;
        if (_0x9787x8) {
          if ((_0x9787x9 = _0x9787x1b(_0x9787x6, _0x9787x7)) === _0x9787x34 ? (_0x9787xc = true, _0x9787xa = _0x9787x9.error, _0x9787x9.error = null) : _0x9787xb = true, _0x9787x4 === _0x9787x9) {
            return void _0x9787x18(_0x9787x4, _0x9787xf());
          }
        } else {
          _0x9787x9 = _0x9787x7, _0x9787xb = true;
        }
        ;
        _0x9787x4._state !== _0x9787x31 || (_0x9787x8 && _0x9787xb ? _0x9787x15(_0x9787x4, _0x9787x9) : _0x9787xc ? _0x9787x18(_0x9787x4, _0x9787xa) : e === _0x9787x32 ? _0x9787x17(_0x9787x4, _0x9787x9) : e === _0x9787x33 && _0x9787x18(_0x9787x4, _0x9787x9));
      }
      function _0x9787x1d(e, _0x9787x4) {
        try {
          _0x9787x4(function (_0x9787x4) {
            _0x9787x15(e, _0x9787x4);
          }, function (_0x9787x4) {
            _0x9787x18(e, _0x9787x4);
          });
        } catch (_0x9787x4) {
          _0x9787x18(e, _0x9787x4);
        }
      }
      function _0x9787x1e() {
        return _0x9787x35++;
      }
      function _0x9787x1f(e) {
        e[_0x9787x30] = _0x9787x35++, e._state = void 0, e._result = void 0, e._subscribers = [];
      }
      function _0x9787x20() {
        return new Error("Array Methods must be provided an Array");
      }
      function _0x9787x21() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
      }
      function _0x9787x22() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
      var _0x9787x23 = void 0, _0x9787x24 = _0x9787x23 = Array.isArray ? Array.isArray : function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }, _0x9787x25 = 0, _0x9787x26 = void 0, _0x9787x27 = void 0, _0x9787x28 = function (e, _0x9787x4) {
        _0x9787x2e[_0x9787x25] = e, _0x9787x2e[_0x9787x25 + 1] = _0x9787x4, 2 === (_0x9787x25 += 2) && (_0x9787x27 ? _0x9787x27(_0x9787xa) : _0x9787x2f());
      }, _0x9787x29 = "undefined" != typeof window ? window : void 0, _0x9787x2a = _0x9787x29 || {}, _0x9787x2b = _0x9787x2a.MutationObserver || _0x9787x2a.WebKitMutationObserver, _0x9787x2c = "undefined" == typeof self && void 0 !== _0x9787x6 && "[object process]" === {}.toString.call(_0x9787x6), _0x9787x2d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, _0x9787x2e = new Array(1e3), _0x9787x2f = void 0;
      _0x9787x2f = _0x9787x2c ? function () {
        return _0x9787x6.nextTick(_0x9787xa);
      } : _0x9787x2b ? function () {
        var e = 0, _0x9787x4 = new _0x9787x2b(_0x9787xa), _0x9787x5 = document.createTextNode("");
        return _0x9787x4.observe(_0x9787x5, {characterData: true}), function () {
          _0x9787x5.data = e = ++e % 2;
        };
      }() : _0x9787x2d ? function () {
        var e = new MessageChannel;
        return e.port1.onmessage = _0x9787xa, function () {
          return e.port2.postMessage(0);
        };
      }() : void 0 === _0x9787x29 && "function" == typeof e ? function () {
        try {
          var e = Function("return this")().require("vertx");
          return _0x9787x26 = e.runOnLoop || e.runOnContext, _0x9787x8();
        } catch (e) {
          return _0x9787x9();
        }
      }() : _0x9787x9();
      var _0x9787x30 = Math.random().toString(36).substring(2), _0x9787x31 = void 0, _0x9787x32 = 1, _0x9787x33 = 2, _0x9787x34 = {error: null}, _0x9787x35 = 0, _0x9787x36 = function () {
        function e(e, _0x9787x4) {
          this._instanceConstructor = e, this.promise = new e(_0x9787xd), this.promise[_0x9787x30] || _0x9787x1f(this.promise), _0x9787x24(_0x9787x4) ? (this.length = _0x9787x4.length, this._remaining = _0x9787x4.length, this._result = new Array(this.length), 0 === this.length ? _0x9787x17(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(_0x9787x4), 0 === this._remaining && _0x9787x17(this.promise, this._result))) : _0x9787x18(this.promise, _0x9787x20());
        }
        return e.prototype._enumerate = function (e) {
          for (var _0x9787x4 = 0; this._state === _0x9787x31 && _0x9787x4 < e.length; _0x9787x4++) {
            this._eachEntry(e[_0x9787x4], _0x9787x4);
          }
        }, e.prototype._eachEntry = function (e, _0x9787x4) {
          var _0x9787x5 = this._instanceConstructor, _0x9787x6 = _0x9787x5.resolve;
          if (_0x9787x6 === _0x9787xc) {
            var _0x9787x7 = _0x9787x10(e);
            if (_0x9787x7 === _0x9787xb && e._state !== _0x9787x31) {
              this._settledAt(e._state, _0x9787x4, e._result);
            } else {
              if ("function" != typeof _0x9787x7) {
                this._remaining--, this._result[_0x9787x4] = e;
              } else {
                if (_0x9787x5 === _0x9787x37) {
                  var _0x9787x8 = new _0x9787x5(_0x9787xd);
                  _0x9787x14(_0x9787x8, e, _0x9787x7), this._willSettleAt(_0x9787x8, _0x9787x4);
                } else {
                  this._willSettleAt(new _0x9787x5(function (_0x9787x4) {
                    return _0x9787x4(e);
                  }), _0x9787x4);
                }
              }
            }
          } else {
            this._willSettleAt(_0x9787x6(e), _0x9787x4);
          }
        }, e.prototype._settledAt = function (e, _0x9787x4, _0x9787x5) {
          var _0x9787x6 = this.promise;
          _0x9787x6._state === _0x9787x31 && (this._remaining--, e === _0x9787x33 ? _0x9787x18(_0x9787x6, _0x9787x5) : this._result[_0x9787x4] = _0x9787x5), 0 === this._remaining && _0x9787x17(_0x9787x6, this._result);
        }, e.prototype._willSettleAt = function (e, _0x9787x4) {
          var _0x9787x5 = this;
          _0x9787x19(e, void 0, function (e) {
            return _0x9787x5._settledAt(_0x9787x32, _0x9787x4, e);
          }, function (e) {
            return _0x9787x5._settledAt(_0x9787x33, _0x9787x4, e);
          });
        }, e;
      }(), _0x9787x37 = function () {
        function e(_0x9787x4) {
          this[_0x9787x30] = _0x9787x1e(), this._result = this._state = void 0, this._subscribers = [], _0x9787xd !== _0x9787x4 && ("function" != typeof _0x9787x4 && _0x9787x21(), this instanceof e ? _0x9787x1d(this, _0x9787x4) : _0x9787x22());
        }
        return e.prototype.catch = function (e) {
          return this.then(null, e);
        }, e.prototype.finally = function (e) {
          var _0x9787x4 = this, _0x9787x5 = _0x9787x4.constructor;
          return _0x9787x4.then(function (_0x9787x4) {
            return _0x9787x5.resolve(e()).then(function () {
              return _0x9787x4;
            });
          }, function (_0x9787x4) {
            return _0x9787x5.resolve(e()).then(function () {
              throw _0x9787x4;
            });
          });
        }, e;
      }();
      return _0x9787x37.prototype.then = _0x9787xb, _0x9787x37.all = function (e) {
        return new _0x9787x36(this, e).promise;
      }, _0x9787x37.race = function (e) {
        var _0x9787x4 = this;
        return new _0x9787x4(_0x9787x24(e) ? function (_0x9787x5, _0x9787x6) {
          for (var _0x9787x7 = e.length, _0x9787x8 = 0; _0x9787x8 < _0x9787x7; _0x9787x8++) {
            _0x9787x4.resolve(e[_0x9787x8]).then(_0x9787x5, _0x9787x6);
          }
        } : function (e, _0x9787x4) {
          return _0x9787x4(new TypeError("You must pass an array to race."));
        });
      }, _0x9787x37.resolve = _0x9787xc, _0x9787x37.reject = function (e) {
        var _0x9787x4 = new this(_0x9787xd);
        return _0x9787x18(_0x9787x4, e), _0x9787x4;
      }, _0x9787x37._setScheduler = function (e) {
        _0x9787x27 = e;
      }, _0x9787x37._setAsap = function (e) {
        _0x9787x28 = e;
      }, _0x9787x37._asap = _0x9787x28, _0x9787x37.polyfill = function () {
        var e = void 0;
        if (void 0 !== _0x9787x7) {
          e = _0x9787x7;
        } else {
          if ("undefined" != typeof self) {
            e = self;
          } else {
            try {
              e = Function("return this")();
            } catch (e) {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }
          }
        }
        ;
        var _0x9787x4 = e.Promise;
        if (_0x9787x4) {
          var _0x9787x5 = null;
          try {
            _0x9787x5 = Object.prototype.toString.call(_0x9787x4.resolve());
          } catch (e) {}
          ;
          if ("[object Promise]" === _0x9787x5 && !_0x9787x4.cast) {
            return;
          }
        }
        ;
        e.Promise = _0x9787x37;
      }, _0x9787x37.Promise = _0x9787x37, _0x9787x37;
    });
  }.call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
}, {_process: 3}], 3: [function (e, _0x9787x4, _0x9787x5) {
  function _0x9787x6() {
    throw new Error("setTimeout has not been defined");
  }
  function _0x9787x7() {
    throw new Error("clearTimeout has not been defined");
  }
  function _0x9787x8(e) {
    if (_0x9787xe === setTimeout) {
      return setTimeout(e, 0);
    }
    ;
    if ((_0x9787xe === _0x9787x6 || !_0x9787xe) && setTimeout) {
      return _0x9787xe = setTimeout, setTimeout(e, 0);
    }
    ;
    try {
      return _0x9787xe(e, 0);
    } catch (_0x9787x4) {
      try {
        return _0x9787xe.call(null, e, 0);
      } catch (_0x9787x4) {
        return _0x9787xe.call(this, e, 0);
      }
    }
  }
  function _0x9787x9(e) {
    if (_0x9787xf === clearTimeout) {
      return clearTimeout(e);
    }
    ;
    if ((_0x9787xf === _0x9787x7 || !_0x9787xf) && clearTimeout) {
      return _0x9787xf = clearTimeout, clearTimeout(e);
    }
    ;
    try {
      return _0x9787xf(e);
    } catch (_0x9787x4) {
      try {
        return _0x9787xf.call(null, e);
      } catch (_0x9787x4) {
        return _0x9787xf.call(this, e);
      }
    }
  }
  function _0x9787xa() {
    _0x9787x13 && _0x9787x11 && (_0x9787x13 = false, _0x9787x11.length ? _0x9787x12 = _0x9787x11.concat(_0x9787x12) : _0x9787x14 = -1, _0x9787x12.length && _0x9787xb());
  }
  function _0x9787xb() {
    if (!_0x9787x13) {
      var e = _0x9787x8(_0x9787xa);
      _0x9787x13 = true;
      for (var _0x9787x4 = _0x9787x12.length; _0x9787x4;) {
        for (_0x9787x11 = _0x9787x12, _0x9787x12 = []; ++_0x9787x14 < _0x9787x4;) {
          _0x9787x11 && _0x9787x11[_0x9787x14].run();
        }
        ;
        _0x9787x14 = -1, _0x9787x4 = _0x9787x12.length;
      }
      ;
      _0x9787x11 = null, _0x9787x13 = false, _0x9787x9(e);
    }
  }
  function _0x9787xc(e, _0x9787x4) {
    this.fun = e, this.array = _0x9787x4;
  }
  function _0x9787xd() {}
  var _0x9787xe, _0x9787xf, _0x9787x10 = _0x9787x4.exports = {};
  !function () {
    try {
      _0x9787xe = "function" == typeof setTimeout ? setTimeout : _0x9787x6;
    } catch (e) {
      _0x9787xe = _0x9787x6;
    }
    ;
    try {
      _0x9787xf = "function" == typeof clearTimeout ? clearTimeout : _0x9787x7;
    } catch (e) {
      _0x9787xf = _0x9787x7;
    }
  }();
  var _0x9787x11, _0x9787x12 = [], _0x9787x13 = false, _0x9787x14 = -1;
  _0x9787x10.nextTick = function (e) {
    var _0x9787x4 = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var _0x9787x5 = 1; _0x9787x5 < arguments.length; _0x9787x5++) {
        _0x9787x4[_0x9787x5 - 1] = arguments[_0x9787x5];
      }
    }
    ;
    _0x9787x12.push(new _0x9787xc(e, _0x9787x4)), 1 !== _0x9787x12.length || _0x9787x13 || _0x9787x8(_0x9787xb);
  }, _0x9787xc.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, _0x9787x10.title = "browser", _0x9787x10.browser = true, _0x9787x10.env = {}, _0x9787x10.argv = [], _0x9787x10.version = "", _0x9787x10.versions = {}, _0x9787x10.on = _0x9787xd, _0x9787x10.addListener = _0x9787xd, _0x9787x10.once = _0x9787xd, _0x9787x10.off = _0x9787xd, _0x9787x10.removeListener = _0x9787xd, _0x9787x10.removeAllListeners = _0x9787xd, _0x9787x10.emit = _0x9787xd, _0x9787x10.prependListener = _0x9787xd, _0x9787x10.prependOnceListener = _0x9787xd, _0x9787x10.listeners = function (e) {
    return [];
  }, _0x9787x10.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, _0x9787x10.cwd = function () {
    return "/";
  }, _0x9787x10.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, _0x9787x10.umask = function () {
    return 0;
  };
}, {}], 4: [function (e, _0x9787x4, _0x9787x5) {
  !function (e) {
    ("use strict");
    function _0x9787x4(e) {
      if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) {
        throw new TypeError("Invalid character in header field name");
      }
      ;
      return e.toLowerCase();
    }
    function _0x9787x6(e) {
      var _0x9787x4 = {next: function () {
        var _0x9787x4 = e.shift();
        return {done: void 0 === _0x9787x4, value: _0x9787x4};
      }};
      return _0x9787x14.iterable && (_0x9787x4[Symbol.iterator] = function () {
        return _0x9787x4;
      }), _0x9787x4;
    }
    function _0x9787x7(e) {
      this.map = {}, e instanceof _0x9787x7 ? e.forEach(function (e, _0x9787x4) {
        this.append(_0x9787x4, e);
      }, this) : Array.isArray(e) ? e.forEach(function (e) {
        this.append(e[0], e[1]);
      }, this) : e && Object.getOwnPropertyNames(e).forEach(function (_0x9787x4) {
        this.append(_0x9787x4, e[_0x9787x4]);
      }, this);
    }
    function _0x9787x8(e) {
      if (e.bodyUsed) {
        return Promise.reject(new TypeError("Already read"));
      }
      ;
      e.bodyUsed = true;
    }
    function _0x9787x9(e) {
      return new Promise(function (_0x9787x4, _0x9787x5) {
        e.onload = function () {
          _0x9787x4(e.result);
        }, e.onerror = function () {
          "string" != typeof e.error && (e.error = String(e.error)), e.error;
        };
      });
    }
    function _0x9787xa(e) {
      var _0x9787x4 = new FileReader, _0x9787x5 = _0x9787x9(_0x9787x4);
      return _0x9787x4.readAsArrayBuffer(e), _0x9787x5;
    }
    function _0x9787xb(e) {
      var _0x9787x4 = new FileReader, _0x9787x5 = _0x9787x9(_0x9787x4);
      return _0x9787x4.readAsText(e), _0x9787x5;
    }
    function _0x9787xc(e) {
      for (var _0x9787x4 = new Uint8Array(e), _0x9787x5 = new Array(_0x9787x4.length), _0x9787x6 = 0; _0x9787x6 < _0x9787x4.length; _0x9787x6++) {
        _0x9787x5[_0x9787x6] = String.fromCharCode(_0x9787x4[_0x9787x6]);
      }
      ;
      return _0x9787x5.join("");
    }
    function _0x9787xd(e) {
      if (e.slice) {
        return e.slice(0);
      }
      ;
      var _0x9787x4 = new Uint8Array(e.byteLength);
      return _0x9787x4.set(new Uint8Array(e)), _0x9787x4.buffer;
    }
    function _0x9787xe() {
      return this.bodyUsed = false, this._initBody = function (e) {
        if (this._bodyInit = e, e) {
          if ("string" == typeof e) {
            this._bodyText = e;
          } else {
            if (_0x9787x14.blob && Blob.prototype.isPrototypeOf(e)) {
              this._bodyBlob = e;
            } else {
              if (_0x9787x14.formData && FormData.prototype.isPrototypeOf(e)) {
                this._bodyFormData = e;
              } else {
                if (_0x9787x14.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) {
                  this._bodyText = e.toString();
                } else {
                  if (_0x9787x14.arrayBuffer && _0x9787x14.blob && _0x9787x16(e)) {
                    this._bodyArrayBuffer = _0x9787xd(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                  } else {
                    if (!_0x9787x14.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !_0x9787x17(e)) {
                      throw new Error("unsupported BodyInit type");
                    }
                    ;
                    this._bodyArrayBuffer = _0x9787xd(e);
                  }
                }
              }
            }
          }
        } else {
          this._bodyText = "";
        }
        ;
        this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _0x9787x14.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
      }, _0x9787x14.blob && (this.blob = function () {
        var e = _0x9787x8(this);
        if (e) {
          return e;
        }
        ;
        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        }
        ;
        if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        }
        ;
        if (this._bodyFormData) {
          throw new Error("could not read FormData body as blob");
        }
        ;
        return Promise.resolve(new Blob([this._bodyText]));
      }, this.arrayBuffer = function () {
        return this._bodyArrayBuffer ? _0x9787x8(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(_0x9787xa);
      }), this.text = function () {
        var e = _0x9787x8(this);
        if (e) {
          return e;
        }
        ;
        if (this._bodyBlob) {
          return _0x9787xb(this._bodyBlob);
        }
        ;
        if (this._bodyArrayBuffer) {
          return Promise.resolve(_0x9787xc(this._bodyArrayBuffer));
        }
        ;
        if (this._bodyFormData) {
          throw new Error("could not read FormData body as text");
        }
        ;
        return Promise.resolve(this._bodyText);
      }, _0x9787x14.formData && (this.formData = function () {
        return this.text().then(_0x9787x11);
      }), this.json = function () {
        return this.text().then(JSON.parse);
      }, this;
    }
    function _0x9787xf(e) {
      var _0x9787x4 = e.toUpperCase();
      return _0x9787x18.indexOf(_0x9787x4) > -1 ? _0x9787x4 : e;
    }
    function _0x9787x10(e, _0x9787x4) {
      var _0x9787x5 = (_0x9787x4 = _0x9787x4 || {}).body;
      if (e instanceof _0x9787x10) {
        if (e.bodyUsed) {
          throw new TypeError("Already read");
        }
        ;
        this.url = e.url, this.credentials = e.credentials, _0x9787x4.headers || (this.headers = new _0x9787x7(e.headers)), this.method = e.method, this.mode = e.mode, _0x9787x5 || null == e._bodyInit || (_0x9787x5 = e._bodyInit, e.bodyUsed = true);
      } else {
        this.url = String(e);
      }
      ;
      if (this.credentials = _0x9787x4.credentials || this.credentials || "omit", !_0x9787x4.headers && this.headers || (this.headers = new _0x9787x7(_0x9787x4.headers)), this.method = _0x9787xf(_0x9787x4.method || this.method || "GET"), this.mode = _0x9787x4.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && _0x9787x5) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      ;
      this._initBody(_0x9787x5);
    }
    function _0x9787x11(e) {
      var _0x9787x4 = new FormData;
      return e.trim().split("&").forEach(function (e) {
        if (e) {
          var _0x9787x5 = e.split("="), _0x9787x6 = _0x9787x5.shift().replace(/\+/g, " "), _0x9787x7 = _0x9787x5.join("=").replace(/\+/g, " ");
          _0x9787x4.append(decodeURIComponent(_0x9787x6), decodeURIComponent(_0x9787x7));
        }
      }), _0x9787x4;
    }
    function _0x9787x12(e) {
      var _0x9787x4 = new _0x9787x7;
      return e.split(/\r?\n/).forEach(function (e) {
        var _0x9787x5 = e.split(":"), _0x9787x6 = _0x9787x5.shift().trim();
        if (_0x9787x6) {
          var _0x9787x7 = _0x9787x5.join(":").trim();
          _0x9787x4.append(_0x9787x6, _0x9787x7);
        }
      }), _0x9787x4;
    }
    function _0x9787x13(e, _0x9787x4) {
      _0x9787x4 || (_0x9787x4 = {}), this.type = "default", this.status = "status" in _0x9787x4 ? _0x9787x4.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in _0x9787x4 ? _0x9787x4.statusText : "OK", this.headers = new _0x9787x7(_0x9787x4.headers), this.url = _0x9787x4.url || "", this._initBody(e);
    }
    if (!e.fetch) {
      var _0x9787x14 = {searchParams: "URLSearchParams" in e, iterable: "Symbol" in e && "iterator" in Symbol, blob: "FileReader" in e && "Blob" in e && function () {
        try {
          return new Blob, true;
        } catch (e) {
          return false;
        }
      }(), formData: "FormData" in e, arrayBuffer: "ArrayBuffer" in e};
      if (_0x9787x14.arrayBuffer) {
        var _0x9787x15 = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], _0x9787x17 = ArrayBuffer.isView || function (e) {
          return e && _0x9787x15.indexOf(Object.prototype.toString.call(e)) > -1;
        };
      }
      ;
      _0x9787x7.prototype.append = function (e, _0x9787x6) {
        e = _0x9787x4(e), _0x9787x6 = ("string" != typeof _0x9787x6 && (_0x9787x6 = String(_0x9787x6)), _0x9787x6);
        var _0x9787x7 = this.map[e];
        this.map[e] = _0x9787x7 ? _0x9787x7 + "," + _0x9787x6 : _0x9787x6;
      }, _0x9787x7.prototype.delete = function (e) {
        delete this.map[_0x9787x4(e)];
      }, _0x9787x7.prototype.get = function (e) {
        return e = _0x9787x4(e), this.has(e) ? this.map[e] : null;
      }, _0x9787x7.prototype.has = function (e) {
        return this.map.hasOwnProperty(_0x9787x4(e));
      }, _0x9787x7.prototype.set = function (e, _0x9787x6) {
        this.map[_0x9787x4(e)] = ("string" != typeof _0x9787x6 && (_0x9787x6 = String(_0x9787x6)), _0x9787x6);
      }, _0x9787x7.prototype.forEach = function (e, _0x9787x4) {
        for (var _0x9787x5 in this.map) {
          this.map.hasOwnProperty(_0x9787x5) && e.call(_0x9787x4, this.map[_0x9787x5], _0x9787x5, this);
        }
      }, _0x9787x7.prototype.keys = function () {
        var e = [];
        return this.forEach(function (_0x9787x4, _0x9787x5) {
          e.push(_0x9787x5);
        }), _0x9787x6(e);
      }, _0x9787x7.prototype.values = function () {
        var e = [];
        return this.forEach(function (_0x9787x4) {
          e.push(_0x9787x4);
        }), _0x9787x6(e);
      }, _0x9787x7.prototype.entries = function () {
        var e = [];
        return this.forEach(function (_0x9787x4, _0x9787x5) {
          e.push([_0x9787x5, _0x9787x4]);
        }), _0x9787x6(e);
      }, _0x9787x14.iterable && (_0x9787x7.prototype[Symbol.iterator] = _0x9787x7.prototype.entries);
      var _0x9787x18 = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      _0x9787x10.prototype.clone = function () {
        return new _0x9787x10(this, {body: this._bodyInit});
      }, _0x9787xe.call(_0x9787x10.prototype), _0x9787xe.call(_0x9787x13.prototype), _0x9787x13.prototype.clone = function () {
        return new _0x9787x13(this._bodyInit, {status: this.status, statusText: this.statusText, headers: new _0x9787x7(this.headers), url: this.url});
      }, _0x9787x13.error = function () {
        var e = new _0x9787x13(null, {status: 0, statusText: ""});
        return e.type = "error", e;
      };
      var _0x9787x19 = [301, 302, 303, 307, 308];
      _0x9787x13.redirect = function (e, _0x9787x4) {
        if (-1 === _0x9787x19.indexOf(_0x9787x4)) {
          throw new RangeError("Invalid status code");
        }
        ;
        return new _0x9787x13(null, {status: _0x9787x4, headers: {location: e}});
      }, e.Headers = _0x9787x7, e.Request = _0x9787x10, e.Response = _0x9787x13, e.fetch = function (e, _0x9787x4) {
        return new Promise(function (_0x9787x5, _0x9787x6) {
          var _0x9787x7 = new _0x9787x10(e, _0x9787x4), _0x9787x8 = new XMLHttpRequest;
          _0x9787x8.onload = function () {
            var e = {status: _0x9787x8.status, statusText: _0x9787x8.statusText, headers: _0x9787x12(_0x9787x8.getAllResponseHeaders() || "")};
            e.url = "responseURL" in _0x9787x8 ? _0x9787x8.responseURL : e.headers.get("X-Request-URL");
            var _0x9787x4 = "response" in _0x9787x8 ? _0x9787x8.response : _0x9787x8.responseText;
            "string" != typeof new _0x9787x13(_0x9787x4, e) && (new _0x9787x13(_0x9787x4, e) = String(new _0x9787x13(_0x9787x4, e))), new _0x9787x13(_0x9787x4, e);
          }, _0x9787x8.onerror = function () {
            _0x9787x6(new TypeError("Network request failed"));
          }, _0x9787x8.ontimeout = function () {
            _0x9787x6(new TypeError("Network request failed"));
          }, _0x9787x8.open(_0x9787x7.method, _0x9787x7.url, true), "include" === _0x9787x7.credentials && (_0x9787x8.withCredentials = true), "responseType" in _0x9787x8 && _0x9787x14.blob && (_0x9787x8.responseType = "blob"), _0x9787x7.headers.forEach(function (e, _0x9787x4) {
            _0x9787x8.setRequestHeader(_0x9787x4, e);
          }), _0x9787x8.send(void 0 === _0x9787x7._bodyInit ? null : _0x9787x7._bodyInit);
        });
      }, e.fetch.polyfill = true;
    }
  }("undefined" != typeof self ? self : this);
}, {}], 5: [function (e, _0x9787x4, _0x9787x5) {
  _0x9787x4.exports = {name: "@gamemonetize.com/html5-sdk", version: "1.2.4", author: "GameMonetize.com", description: "GameMonetize.com HTML5 SDK", url: "https://gamemonetize.com", license: "MIT", main: "lib/main.js", scripts: {test: 'echo "Error: no test specified" && exit 1'}, directories: {doc: "https://github.com/GameMonetize/GameMonetize.com-SDK"}, repository: {type: "git", url: ""}, dependencies: {"es6-promise": "^4.1.1", "whatwg-fetch": "^2.0.3"}, devDependencies: {"babel-eslint": "^8.0.0", "babel-preset-env": "^1.6.1", babelify: "^7.2.0", eslint: "^4.7.0", "eslint-config-google": "^0.9.1", "eslint-friendly-formatter": "^3.0.0", "eslint-loader": "^1.7.1", "eslint-plugin-html": "^3.0.0", "eslint-plugin-promise": "^3.4.0", "eslint-plugin-standard": "^2.0.1", grunt: "^1.0.3", "grunt-banner": "^0.6.0", "grunt-browser-sync": "^2.2.0", "grunt-browserify": "^5.2.0", "grunt-contrib-clean": "^1.1.0", "grunt-contrib-copy": "^1.0.0", "grunt-contrib-uglify": "^3.1.0", "grunt-contrib-watch": "^1.0.0", "grunt-exec": "^3.0.0", "grunt-google-cloud": "^1.0.7"}, engines: {node: ">= 10.15.0", npm: ">= 6.6.0"}};
}, {}], 6: [function (e, _0x9787x4, _0x9787x5) {
  ("use strict");
  function _0x9787x6(e, _0x9787x4) {
    if (!(e instanceof _0x9787x4)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(_0x9787x5, "__esModule", {value: true});
  var _0x9787x7 = function () {
    function e(e, _0x9787x4) {
      for (var _0x9787x5 = 0; _0x9787x5 < _0x9787x4.length; _0x9787x5++) {
        var _0x9787x6 = _0x9787x4[_0x9787x5];
        _0x9787x6.enumerable = _0x9787x6.enumerable || false, _0x9787x6.configurable = true, "value" in _0x9787x6 && (_0x9787x6.writable = true), Object.defineProperty(e, _0x9787x6.key, _0x9787x6);
      }
    }
    return function (_0x9787x4, _0x9787x5, _0x9787x6) {
      return _0x9787x5 && e(_0x9787x4.prototype, _0x9787x5), _0x9787x6 && e(_0x9787x4, _0x9787x6), _0x9787x4;
    };
  }(), _0x9787x8 = null, _0x9787x9 = function () {
    function e() {
      if (_0x9787x6(this, e), _0x9787x8) {
        return _0x9787x8;
      }
      ;
      _0x9787x8 = this, this.listeners = {};
    }
    return _0x9787x7(e, [{key: "_getListenerIdx", value: function (e, _0x9787x4, _0x9787x5) {
      var _0x9787x6 = this.listeners[e], _0x9787x7 = void 0, _0x9787x8 = -1;
      if (!_0x9787x6 || 0 === _0x9787x6.length) {
        return _0x9787x8;
      }
      ;
      for (_0x9787x7 = 0; _0x9787x7 < _0x9787x6.length; _0x9787x7++) {
        if (_0x9787x6[_0x9787x7].callback === _0x9787x4 && (!_0x9787x5 || _0x9787x5 === _0x9787x6[_0x9787x7].scope)) {
          _0x9787x8 = _0x9787x7;
          break;
        }
      }
      ;
      return _0x9787x8;
    }}, {key: "subscribe", value: function (e, _0x9787x4, _0x9787x5) {
      var _0x9787x6 = void 0;
      if (!e) {
        throw new Error("Event name cannot be null or undefined.");
      }
      ;
      if (!_0x9787x4 || "function" != typeof _0x9787x4) {
        throw new Error("Listener must be of type function.");
      }
      ;
      this._getListenerIdx(e, _0x9787x4, _0x9787x5) >= 0 || (_0x9787x6 = {callback: _0x9787x4, scope: _0x9787x5}, this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(_0x9787x6));
    }}, {key: "broadcast", value: function (e, _0x9787x4) {
      var _0x9787x5 = this.listeners[e];
      e && this.listeners[e] && (_0x9787x4 = _0x9787x4 || {}, _0x9787x5.forEach(function (e) {
        e.callback.call(e.scope, _0x9787x4);
      }));
    }}]), e;
  }();
  _0x9787x5.default = _0x9787x9;
}, {}], 7: [function (e, _0x9787x4, _0x9787x5) {
  ("use strict");
  function _0x9787x6(e, _0x9787x4) {
    if (!(e instanceof _0x9787x4)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(_0x9787x5, "__esModule", {value: true});
  var _0x9787x7 = function () {
    function e(e, _0x9787x4) {
      for (var _0x9787x5 = 0; _0x9787x5 < _0x9787x4.length; _0x9787x5++) {
        var _0x9787x6 = _0x9787x4[_0x9787x5];
        _0x9787x6.enumerable = _0x9787x6.enumerable || false, _0x9787x6.configurable = true, "value" in _0x9787x6 && (_0x9787x6.writable = true), Object.defineProperty(e, _0x9787x6.key, _0x9787x6);
      }
    }
    return function (_0x9787x4, _0x9787x5, _0x9787x6) {
      return _0x9787x5 && e(_0x9787x4.prototype, _0x9787x5), _0x9787x6 && e(_0x9787x4, _0x9787x6), _0x9787x4;
    };
  }(), _0x9787x8 = function (e) {
    return e && e.__esModule ? e : {default: e};
  }(e("../components/EventBus")), _0x9787x9 = null, _0x9787xa = function () {
    function e(_0x9787x4) {
      if (_0x9787x6(this, e), _0x9787x9) {
        return _0x9787x9;
      }
      ;
      _0x9787x9 = this, this.testing = _0x9787x4, this.eventBus = new _0x9787x8.default;
    }
    return _0x9787x7(e, [{key: "start", value: function () {
      var e = "\n            #sdk__implementation {\n                display: flex;\n                box-sizing: border-box;\n                position: fixed;\n                z-index: 667;\n                bottom: 0;\n                left: 0;\n                width: 100%;\n                padding: 3px;\n                background: transparent;\n                box-shadow: none;\n                color: #fff;\n                font-family: Helvetica, Arial, sans-serif;\n                      }\n            #sdk__implementation button {\n                flex: 1;\n                background: #ea5460;\n                padding: 4px 10px;\n font-size:10px;\n                margin: 2px;\n                border: 0;\n                border-radius: 3px;\n                color: #fff;\n                outline: 0;\n                cursor: pointer;\n                font-size: 10px;\n                box-shadow: 0 0 0 transparent;\n                text-shadow: 0 0 0 transparent;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                white-space: nowrap;\n            }\n            #sdk__implementation button:hover {\n                background: #ff7f03;\n            }\n            #sdk__implementation button:active {\n                background: #ff7f03;\n            }\n        ", _0x9787x4 = document.head || document.getElementsByTagName("head")[0], _0x9787x5 = document.createElement("style");
      _0x9787x5.type = "text/css", _0x9787x5.styleSheet ? _0x9787x5.styleSheet.cssText = e : _0x9787x5.appendChild(document.createTextNode(e)), _0x9787x4.appendChild(_0x9787x5);
      var _0x9787x6 = document.body || document.getElementsByTagName("body")[0], _0x9787x7 = document.createElement("div");
      _0x9787x7.style.position = "fixed", _0x9787x7.style.zIndex = "668", _0x9787x7.style.bottom = "0", _0x9787x7.innerHTML = '\n            <div id="sdk__implementation">\n                                                <button id="sdk__resumeGame">resumeGame</button>\n                <button id="sdk__pauseGame">pauseGame</button>\n                <button id="sdk__showBanner" onclick="window.sdk.showBanner()">showBanner()</button>\n                <button id="sdk__cancel">Cancel</button>\n                \n                <button id="sdk__closeDebug">Close</button>\n            </div>\n        ', _0x9787x6.appendChild(_0x9787x7);
      var _0x9787x8 = document.getElementById("sdk__pauseGame"), _0x9787x9 = document.getElementById("sdk__resumeGame"), _0x9787xa = document.getElementById("sdk__showBanner"), _0x9787xb = document.getElementById("sdk__cancel"), _0x9787xc = document.getElementById("sdk__demo"), _0x9787xd = document.getElementById("sdk__midrollTimer"), _0x9787xe = document.getElementById("sdk__hbgdDebug"), _0x9787xf = document.getElementById("sdk__hbgdConfig"), _0x9787x10 = document.getElementById("sdk__closeDebug");
      _0x9787x8.addEventListener("click", function () {
        window.sdk.onPauseGame("Pause game requested from debugger", "warning");
      }), _0x9787x9.addEventListener("click", function () {
        window.sdk.onResumeGame("Resume game requested from debugger", "warning");
      }), _0x9787xa.addEventListener("click", function () {
        window.sdk.showBanner();
      }), _0x9787xb.addEventListener("click", function () {
        window.sdk.videoAdInstance.requestAttempts = 0, window.sdk.videoAdInstance.cancel();
      }), _0x9787x10.addEventListener("click", function () {
        try {
          localStorage.getItem("gd_debug") ? localStorage.removeItem("gd_debug") : localStorage.setItem("gd_debug", "0"), location.reload();
        } catch (e) {
          console.log(e);
        }
      }), _0x9787xc.addEventListener("click", function () {
        try {
          if (localStorage.getItem("gd_tag")) {
            localStorage.removeItem("gd_tag");
          } else {
            localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=");
          }
          ;
          location.reload();
        } catch (e) {
          console.log(e);
        }
      }), _0x9787xd.addEventListener("click", function () {
        try {
          localStorage.getItem("gd_midroll") ? localStorage.removeItem("gd_midroll") : localStorage.setItem("gd_midroll", "0"), location.reload();
        } catch (e) {
          console.log(e);
        }
      }), _0x9787xe.addEventListener("click", function () {
        try {
          window.idhbgd.debug(true);
        } catch (e) {
          console.log(e);
        }
      }), _0x9787xf.addEventListener("click", function () {
        try {
          var e = window.idhbgd.getConfig();
          console.info(e);
        } catch (e) {
          console.log(e);
        }
      });
    }}]), e;
  }();
  _0x9787x5.default = _0x9787xa;
}, {"../components/EventBus": 6}], 8: [function (e, _0x9787x4, _0x9787x5) {
  ("use strict");
  function _0x9787x6(e, _0x9787x4) {
    if (!(e instanceof _0x9787x4)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(_0x9787x5, "__esModule", {value: true});
  var _0x9787x7 = function () {
    function e(e, _0x9787x4) {
      for (var _0x9787x5 = 0; _0x9787x5 < _0x9787x4.length; _0x9787x5++) {
        var _0x9787x6 = _0x9787x4[_0x9787x5];
        _0x9787x6.enumerable = _0x9787x6.enumerable || false, _0x9787x6.configurable = true, "value" in _0x9787x6 && (_0x9787x6.writable = true), Object.defineProperty(e, _0x9787x6.key, _0x9787x6);
      }
    }
    return function (_0x9787x4, _0x9787x5, _0x9787x6) {
      return _0x9787x5 && e(_0x9787x4.prototype, _0x9787x5), _0x9787x6 && e(_0x9787x4, _0x9787x6), _0x9787x4;
    };
  }(), _0x9787x8 = function (e) {
    return e && e.__esModule ? e : {default: e};
  }(e("../components/EventBus")), _0x9787x9 = e("../modules/common"), _0x9787xa = e("../modules/dankLog"), _0x9787xb = null, _0x9787xc = function () {
    function e(_0x9787x4, _0x9787x5, _0x9787x7) {
      var _0x9787xa = this;
      if (_0x9787x6(this, e), _0x9787xb) {
        return _0x9787xb;
      }
      ;
      _0x9787xb = this;
      var _0x9787xc = {debug: false, width: 640, height: 360, locale: "en"};
      this.options = _0x9787x7 ? (0, _0x9787x9.extendDefaults)(_0x9787xc, _0x9787x7) : _0x9787xc, this.prefix = "sdk__", this.adsLoader = null, this.adsManager = null, this.adDisplayContainer = null, this.eventBus = new _0x9787x8.default, this.safetyTimer = null, this.containerTransitionSpeed = 300, this.adCount = 0, this.adTypeCount = 0, this.requestRunning = false, this.parentDomain = (0, _0x9787x9.getParentDomain)(), this.parentUrl = (0, _0x9787x9.getParentUrl)(), this.userDeclinedPersonalAds = document.location.search.indexOf("gdpr-targeting=0") >= 0 || document.cookie.indexOf("ogdpr_advertisement=0") >= 0 ? "1" : "0", this.thirdPartyContainer = "" !== _0x9787x4 ? document.getElementById(_0x9787x4) : null, this.options.width = "number" == typeof this.options.width ? this.options.width : "100%" === this.options.width ? 640 : this.options.width.replace(/[^0-9]/g, ""), this.options.height = "number" == typeof this.options.height ? this.options.height : "100%" === this.options.height ? 360 : this.options.height.replace(/[^0-9]/g, "");
      var _0x9787xd = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, _0x9787xe = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.options.width = this.thirdPartyContainer ? this.thirdPartyContainer.offsetWidth : _0x9787xd, this.options.height = this.thirdPartyContainer ? this.thirdPartyContainer.offsetHeight : _0x9787xe, this.gameId = "0", this.category = "", this.tags = [], this.eventCategory = "AD", this.adsLoaderPromise = new Promise(function (e, _0x9787x4) {
        _0x9787xa.eventBus.subscribe("AD_SDK_LOADER_READY", function () {
          return e();
        }), _0x9787xa.eventBus.subscribe("AD_CANCELED", function () {
          return _0x9787x4(new Error("Initial adsLoaderPromise failed to load."));
        });
      }), this._loadScripts().then(function () {
        _0x9787xa._createPlayer(), _0x9787xa._setUpIMA();
      }).catch(function (e) {
        return _0x9787xa.onError(e);
      }), window.idhbgd = window.idhbgd || {}, window.idhbgd.que = window.idhbgd.que || [];
    }
    return _0x9787x7(e, [{key: "start", value: function () {
      var e = this;
      this._startSafetyTimer(12e3, "start()"), this.eventBus.subscribe("AD_SDK_LOADER_READY", function () {
        e._clearSafetyTimer("AD_SDK_LOADER_READY");
      }), this.eventBus.subscribe("AD_SDK_MANAGER_READY", function () {
        e._clearSafetyTimer("AD_SDK_MANAGER_READY");
      }), this.eventBus.subscribe("LOADED", function () {
        e._clearSafetyTimer("LOADED"), e._startSafetyTimer(8e3, "LOADED");
      }), this.eventBus.subscribe("CONTENT_PAUSE_REQUESTED", function () {
        e._show();
      }), this.eventBus.subscribe("STARTED", function () {
        e._clearSafetyTimer("STARTED");
      });
    }}, {key: "requestAd", value: function () {
      var e = this;
      return new Promise(function (_0x9787x4, _0x9787x5) {
        if (e.requestRunning) {
          (0, _0x9787xa.dankLog)("AD_SDK_REQUEST", "A request is already running", "warning");
        } else {
          e.requestRunning = true, 1 === e.adTypeCount && (e.adCount = 0), e.adCount++, e.adTypeCount++;
          try {
            _0x9787x4(localStorage.getItem("gd_tag"));
          } catch (e) {
            _0x9787x5(e);
          }
        }
      });
    }}, {key: "_ReportingKeys", value: function () {
      var e = this;
      return new Promise(function (_0x9787x4) {});
    }}, {key: "loadAd", value: function (e) {
      if ("undefined" != typeof google) {
        try {
          var _0x9787x4 = new google.ima.AdsRequest;
          if (_0x9787x4.adTagUrl = e, (0, _0x9787xa.dankLog)("AD_SDK_TAG_URL", _0x9787x4.adTagUrl, "success"), _0x9787x4.linearAdSlotWidth = this.options.width, _0x9787x4.linearAdSlotHeight = this.options.height, _0x9787x4.nonLinearAdSlotWidth = this.options.width, _0x9787x4.nonLinearAdSlotHeight = this.options.height, _0x9787x4.forceNonLinearFullSlot = true, void 0 !== window.ga) {
            var _0x9787x5 = new Date, _0x9787x6 = _0x9787x5.getHours(), _0x9787x7 = _0x9787x5.getDate(), _0x9787x8 = _0x9787x5.getMonth(), _0x9787x9 = _0x9787x5.getFullYear();
          }
          ;
          this.adsLoader.requestAds(_0x9787x4);
        } catch (e) {
          this._onAdError(e);
        }
      } else {
        this.onError("Unable to load ad, google IMA SDK not defined.");
      }
    }}, {key: "cancel", value: function () {
      var e = this;
      this.adsLoaderPromise.then(function () {
        e.adsLoader && e.adsLoader.contentComplete(), e.adsManager && e.adsManager.destroy(), e._hide(), e.requestRunning = false;
      }).catch(function () {
        console.log(new Error("adsLoaderPromise failed to load."));
      });
      this.eventBus.broadcast("AD_CANCELED", {name: "AD_CANCELED", message: "Advertisement has been canceled.", status: "warning"});
    }}, {key: "onError", value: function (e) {
      this.eventBus.broadcast("AD_SDK_ERROR", {name: "AD_SDK_ERROR", message: e, status: "error"}), this.cancel(), this._clearSafetyTimer("AD_SDK_ERROR");
    }}, {key: "_hide", value: function () {
      var e = this;
      this.adContainer && (this.adContainer.style.opacity = "0", this.thirdPartyContainer && (this.thirdPartyContainer.style.opacity = "0"), setTimeout(function () {
        e.adContainer.style.transform = "translateX(-9999px)", e.adContainer.style.zIndex = "0", e.thirdPartyContainer && (e.thirdPartyContainer.style.transform = "translateX(-9999px)", e.thirdPartyContainer.style.zIndex = "0");
      }, this.containerTransitionSpeed));
    }}, {key: "_show", value: function () {
      var e = this;
      this.adContainer && (this.adContainer.style.transform = "translateX(0)", this.adContainer.style.zIndex = "99", this.thirdPartyContainer && (this.thirdPartyContainer.style.transform = "translateX(0)", this.thirdPartyContainer.style.zIndex = "99", this.thirdPartyContainer.style.display = "block"), setTimeout(function () {
        e.adContainer.style.opacity = "1", e.thirdPartyContainer && (e.thirdPartyContainer.style.opacity = "1");
      }, 10));
    }}, {key: "_loadScripts", value: function () {
      var e = this, _0x9787x4 = new Promise(function (_0x9787x4, _0x9787x5) {
        var _0x9787x6 = e.options.debug ? "//imasdk.googleapis.com/js/sdkloader/ima3_debug.js" : "//gamemonetize.com/api/ima3.js", _0x9787x7 = document.getElementsByTagName("script")[0], _0x9787x8 = document.createElement("script");
        _0x9787x8.type = "text/javascript", _0x9787x8.async = true, _0x9787x8.src = _0x9787x6, _0x9787x8.onload = function () {
          _0x9787x4();
        }, _0x9787x8.onerror = function () {}, _0x9787x7.parentNode.insertBefore(_0x9787x8, _0x9787x7);
      }), _0x9787x5 = new Promise(function (_0x9787x4, _0x9787x5) {
        var _0x9787x6 = "https://api.gamemonetize.com/ga.js", _0x9787x7 = document.getElementsByTagName("script")[0], _0x9787x8 = document.createElement("script");
        _0x9787x8.type = "text/javascript", _0x9787x8.id = "analytics", _0x9787x8.async = true, _0x9787x8.src = _0x9787x6, _0x9787x8.onload = function () {
          _0x9787x4();
        }, _0x9787x8.onerror = function () {}, _0x9787x7.parentNode.insertBefore(_0x9787x8, _0x9787x7);
      });
      return Promise.all([_0x9787x4, _0x9787x5]);
    }}, {key: "_createPlayer", value: function () {
      var e = this, _0x9787x4 = document.body || document.getElementsByTagName("body")[0];
      this.adContainer = document.createElement("div"), this.adContainer.id = this.prefix + "advertisement", this.adContainer.style.position = this.thirdPartyContainer ? "absolute" : "fixed", this.adContainer.style.zIndex = "0", this.adContainer.style.top = "0", this.adContainer.style.left = "0", this.adContainer.style.width = "100%", this.adContainer.style.height = "100%", this.adContainer.style.transform = "translateX(-9999px)", this.adContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)", this.adContainer.style.opacity = "0", this.adContainer.style.transition = "opacity " + this.containerTransitionSpeed + "ms cubic-bezier(0.55, 0, 0.1, 1)", this.thirdPartyContainer && (this.thirdPartyContainer.style.transform = "translateX(-9999px)", this.thirdPartyContainer.style.opacity = "0", this.thirdPartyContainer.style.transition = "opacity " + this.containerTransitionSpeed + "ms cubic-bezier(0.55, 0, 0.1, 1)");
      var _0x9787x5 = document.createElement("div");
      _0x9787x5.id = this.prefix + "advertisement_slot", _0x9787x5.style.position = "absolute", _0x9787x5.style.backgroundColor = "#000000", _0x9787x5.style.top = "0", _0x9787x5.style.left = "0", _0x9787x5.style.width = this.options.width + "px", _0x9787x5.style.height = this.options.height + "px", this.thirdPartyContainer ? (this.adContainer.appendChild(_0x9787x5), this.thirdPartyContainer.appendChild(this.adContainer)) : (this.adContainer.appendChild(_0x9787x5), _0x9787x4.appendChild(this.adContainer)), window.addEventListener("resize", function () {
        var _0x9787x4 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, _0x9787x6 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        e.options.width = e.thirdPartyContainer ? e.thirdPartyContainer.offsetWidth : _0x9787x4, e.options.height = e.thirdPartyContainer ? e.thirdPartyContainer.offsetHeight : _0x9787x6, _0x9787x5.style.width = e.options.width + "px", _0x9787x5.style.height = e.options.height + "px";
      });
    }}, {key: "_setUpIMA", value: function () {
      google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE), google.ima.settings.setLocale(this.options.locale), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true), this.adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById(this.prefix + "advertisement_slot")), this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this._onAdsManagerLoaded, false, this), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError, false, this);
      var e = new Date, _0x9787x4 = e.getHours(), _0x9787x5 = e.getDate(), _0x9787x6 = e.getMonth(), _0x9787x7 = e.getFullYear(), _0x9787x8 = "AD_SDK_LOADER_READY";
      this.eventBus.broadcast(_0x9787x8, {name: _0x9787x8, message: this.options, status: "success"});
    }}, {key: "_onAdsManagerLoaded", value: function (e) {
      var _0x9787x4 = this, _0x9787x5 = new google.ima.AdsRenderingSettings;
      if (_0x9787x5.enablePreloading = true, _0x9787x5.restoreCustomPlaybackStateOnAdBreakComplete = true, _0x9787x5.uiElements = [google.ima.UiElements.AD_ATTRIBUTION, google.ima.UiElements.COUNTDOWN], this.adsManager = e.getAdsManager(_0x9787x5), this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError.bind(this), false, this), this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.INTERACTION, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.LOG, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED, this._onAdEvent.bind(this), this), window.addEventListener("resize", function () {
        _0x9787x4.adsManager.resize(_0x9787x4.options.width, _0x9787x4.options.height, google.ima.ViewMode.NORMAL);
      }), this.adsManager && this.adDisplayContainer) {
        var _0x9787x6 = new Date, _0x9787x7 = _0x9787x6.getHours(), _0x9787x8 = _0x9787x6.getDate(), _0x9787x9 = _0x9787x6.getMonth(), _0x9787xa = _0x9787x6.getFullYear(), _0x9787xb = "AD_SDK_MANAGER_READY";
        this.eventBus.broadcast(_0x9787xb, {name: _0x9787xb, message: this.adsManager, status: "success"}), this.adDisplayContainer.initialize();
        try {
          this.adsManager.init(this.options.width, this.options.height, google.ima.ViewMode.NORMAL), this.adsManager.start();
        } catch (e) {
          this.onError(e);
        }
      }
    }}, {key: "_onAdEvent", value: function (e) {
      var _0x9787x4 = this, _0x9787x5 = new Date, _0x9787x6 = _0x9787x5.getHours(), _0x9787x7 = _0x9787x5.getDate(), _0x9787x8 = _0x9787x5.getMonth(), _0x9787x9 = _0x9787x5.getFullYear(), _0x9787xa = "", _0x9787xb = "";
      switch (e.type) {
        case google.ima.AdEvent.Type.AD_BREAK_READY:
          _0x9787xa = "AD_BREAK_READY", _0x9787xb = "Fired when an ad rule or a VMAP ad break would have played if autoPlayAdBreaks is false.";
          break;
        case google.ima.AdEvent.Type.AD_METADATA:
          _0x9787xa = "AD_METADATA", _0x9787xb = "Fired when an ads list is loaded.";
          break;
        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          _0x9787xa = "ALL_ADS_COMPLETED", _0x9787xb = "Fired when the ads manager is done playing all the ads.";
          break;
        case google.ima.AdEvent.Type.CLICK:
          _0x9787xa = "CLICK", _0x9787xb = "Fired when the ad is clicked.";
          break;
        case google.ima.AdEvent.Type.COMPLETE:
          _0x9787xa = "COMPLETE", _0x9787xb = "Fired when the ad completes playing.";
          break;
        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
          _0x9787xa = "CONTENT_PAUSE_REQUESTED", _0x9787xb = "Fired when content should be paused. This usually happens right before an ad is about to cover the content.";
          break;
        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
          _0x9787xa = "CONTENT_RESUME_REQUESTED", _0x9787xb = "Fired when content should be resumed. This usually happens when an ad finishes or collapses.", this._hide(), this.adsLoaderPromise.then(function () {
            if (_0x9787x4.adsLoader && _0x9787x4.adsLoader.contentComplete(), _0x9787x4.adsManager && _0x9787x4.adsManager.destroy(), 1 === _0x9787x4.adCount) {
              var e = [];
              _0x9787x4.tags.forEach(function (_0x9787x4) {
                e.push(_0x9787x4.title.toLowerCase());
              });
              var _0x9787x5 = _0x9787x4.category.toLowerCase();
              _0x9787x4._loadDisplayAd(_0x9787x4.gameId, e, _0x9787x5);
            }
            ;
            _0x9787x4.requestRunning = false;
            _0x9787x4.eventBus.broadcast("AD_SDK_FINISHED", {name: "AD_SDK_FINISHED", message: "IMA is ready for new requests.", status: "success"});
          }).catch(function () {
            console.log(new Error("adsLoaderPromise failed to load."));
          });
          break;
        case google.ima.AdEvent.Type.DURATION_CHANGE:
          _0x9787xa = "DURATION_CHANGE", _0x9787xb = "Fired when the ad's duration changes.";
          break;
        case google.ima.AdEvent.Type.FIRST_QUARTILE:
          _0x9787xa = "FIRST_QUARTILE", _0x9787xb = "Fired when the ad playhead crosses first quartile.";
          break;
        case google.ima.AdEvent.Type.IMPRESSION:
          _0x9787xa = "IMPRESSION", _0x9787xb = "Fired when the impression URL has been pinged.";
          break;
        case google.ima.AdEvent.Type.INTERACTION:
          _0x9787xa = "INTERACTION", _0x9787xb = "Fired when an ad triggers the interaction callback. Ad interactions contain an interaction ID string in the ad data.";
          break;
        case google.ima.AdEvent.Type.LINEAR_CHANGED:
          _0x9787xa = "LINEAR_CHANGED", _0x9787xb = "Fired when the displayed ad changes from linear to nonlinear, or vice versa.";
          break;
        case google.ima.AdEvent.Type.LOADED:
          _0x9787xa = "LOADED", _0x9787xb = e.getAd().getContentType();
          break;
        case google.ima.AdEvent.Type.LOG:
          e.getAdData().adError && (_0x9787xa = "LOG", _0x9787xb = e.getAdData());
          break;
        case google.ima.AdEvent.Type.MIDPOINT:
          _0x9787xa = "MIDPOINT", _0x9787xb = "Fired when the ad playhead crosses midpoint.";
          break;
        case google.ima.AdEvent.Type.PAUSED:
          _0x9787xa = "PAUSED", _0x9787xb = "Fired when the ad is paused.";
          break;
        case google.ima.AdEvent.Type.RESUMED:
          _0x9787xa = "RESUMED", _0x9787xb = "Fired when the ad is resumed.";
          break;
        case google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED:
          _0x9787xa = "SKIPPABLE_STATE_CHANGED", _0x9787xb = "Fired when the displayed ads skippable state is changed.";
          break;
        case google.ima.AdEvent.Type.SKIPPED:
          _0x9787xa = "SKIPPED", _0x9787xb = "Fired when the ad is skipped by the user.";
          break;
        case google.ima.AdEvent.Type.STARTED:
          _0x9787xa = "STARTED", _0x9787xb = "Fired when the ad starts playing.";
          break;
        case google.ima.AdEvent.Type.THIRD_QUARTILE:
          _0x9787xa = "THIRD_QUARTILE", _0x9787xb = "Fired when the ad playhead crosses third quartile.";
          break;
        case google.ima.AdEvent.Type.USER_CLOSE:
          _0x9787xa = "USER_CLOSE", _0x9787xb = "Fired when the ad is closed by the user.";
          break;
        case google.ima.AdEvent.Type.VOLUME_CHANGED:
          _0x9787xa = "VOLUME_CHANGED", _0x9787xb = "Fired when the ad volume has changed.";
          break;
        case google.ima.AdEvent.Type.VOLUME_MUTED:
          _0x9787xa = "VOLUME_MUTED", _0x9787xb = "Fired when the ad volume has been muted.";
      }
      ;
      "" !== _0x9787xa && "" !== _0x9787xb && this.eventBus.broadcast(_0x9787xa, {name: _0x9787xa, message: _0x9787xb, status: "success"});
    }}, {key: "_onAdError", value: function (e) {
      this.cancel(), this._clearSafetyTimer("AD_ERROR");
      try {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.href.indexOf("account") != -1) {} else {
          if (adxAds == true) {
            adxAds2 = true;
            window.sdk.showBanner();
          } else {
            try {
              var _0x9787x38 = "(y8.com|pog.com|gamepost.com";
              $.getJSON("https://api.gamemonetize.com/dataxxx.json", function (_0x9787x39) {
                $.each(_0x9787x39, function (_0x9787x7, _0x9787x3a) {
                  _0x9787x38 += "|" + _0x9787x3a.domain;
                });
                var _0x9787x3b = window.location != window.parent.location ? document.referrer : document.location.href;
                _0x9787x38 += ")";
                _0x9787x38 = new RegExp(_0x9787x38);
                if (_0x9787x3b.match(_0x9787x38)) {} else {
                  promoVideo();
                }
              });
            } catch (e) {}
          }
        }
      } catch (e) {
        console.log(e);
      }
    }}, {key: "_startSafetyTimer", value: function (e, _0x9787x4) {
      var _0x9787x5 = this;
      (0, _0x9787xa.dankLog)("AD_SAFETY_TIMER", "Invoked timer from: " + _0x9787x4, "success"), this.safetyTimer = window.setTimeout(function () {
        _0x9787x5.eventBus.broadcast("AD_SAFETY_TIMER", {name: "AD_SAFETY_TIMER", message: "Advertisement took too long to load.", status: "warning"}), _0x9787x5.cancel(), _0x9787x5._clearSafetyTimer(_0x9787x4);
      }, e);
    }}, {key: "_clearSafetyTimer", value: function (e) {
      if (void 0 !== this.safetyTimer && null !== this.safetyTimer && ((0, _0x9787xa.dankLog)("AD_SAFETY_TIMER", "Cleared timer set at: " + e, "success"), clearTimeout(this.safetyTimer), this.safetyTimer = void 0, "requestAd()" === e)) {
        var _0x9787x4 = new Date, _0x9787x5 = _0x9787x4.getHours(), _0x9787x6 = _0x9787x4.getDate(), _0x9787x7 = _0x9787x4.getMonth(), _0x9787x8 = _0x9787x4.getFullYear();
      }
    }}, {key: "_loadDisplayAd", value: function (e, _0x9787x4, _0x9787x5) {
      var _0x9787x6 = this, _0x9787x7 = document.body || document.getElementsByTagName("body")[0], _0x9787x8 = document.createElement("div");
      _0x9787x8.id = this.prefix + "baguette", _0x9787x8.style.zIndex = "100", _0x9787x8.style.position = "absolute", _0x9787x8.style.top = "0", _0x9787x8.style.left = "0", _0x9787x7.appendChild(_0x9787x8);
      var _0x9787x9 = document.createElement("script");
      _0x9787x9.async = true, _0x9787x9.type = "text/javascript";
      var _0x9787xa = "https:" === document.location.protocol;
      _0x9787x9.src = (_0x9787xa ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
      var _0x9787xb = document.getElementsByTagName("script")[0];
    }}]), e;
  }();
  _0x9787x5.default = _0x9787xc;
}, {"../components/EventBus": 6, "../modules/common": 11, "../modules/dankLog": 12}], 9: [function (e, _0x9787x4, _0x9787x5) {
  ("use strict");
  var _0x9787x6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _0x9787x7 = function (e) {
    return e && e.__esModule ? e : {default: e};
  }(e("./main")), _0x9787x8 = "object" === ("undefined" == typeof SDK_OPTIONS ? "undefined" : _0x9787x6(SDK_OPTIONS)) && SDK_OPTIONS ? SDK_OPTIONS : window.gdApi && "object" === _0x9787x6(window.gdApi.q[0][0]) && window.gdApi.q[0][0] ? window.gdApi.q[0][0] : {};
  window.gdApi && "object" === _0x9787x6(window.gdApi.q[0][0]) && window.gdApi.q[0][0] && (_0x9787x8.hasOwnProperty("advertisementSettings") || (_0x9787x8.advertisementSettings = {autoplay: true})), window.sdk = new _0x9787x7.default(_0x9787x8), window.gdApi = window.sdk;
}, {"./main": 10}], 10: [function (e, _0x9787x4, _0x9787x5) {
  ("use strict");
  function _0x9787x6(e) {
    return e && e.__esModule ? e : {default: e};
  }
  function _0x9787x7(e, _0x9787x4) {
    if (!(e instanceof _0x9787x4)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(_0x9787x5, "__esModule", {value: true});
  var _0x9787x8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _0x9787x9 = function () {
    function e(e, _0x9787x4) {
      for (var _0x9787x5 = 0; _0x9787x5 < _0x9787x4.length; _0x9787x5++) {
        var _0x9787x6 = _0x9787x4[_0x9787x5];
        _0x9787x6.enumerable = _0x9787x6.enumerable || false, _0x9787x6.configurable = true, "value" in _0x9787x6 && (_0x9787x6.writable = true), Object.defineProperty(e, _0x9787x6.key, _0x9787x6);
      }
    }
    return function (_0x9787x4, _0x9787x5, _0x9787x6) {
      return _0x9787x5 && e(_0x9787x4.prototype, _0x9787x5), _0x9787x6 && e(_0x9787x4, _0x9787x6), _0x9787x4;
    };
  }();
  e("es6-promise/auto"), e("whatwg-fetch");
  var _0x9787xa = _0x9787x6(e("../package.json")), _0x9787xb = _0x9787x6(e("./components/VideoAd")), _0x9787xc = _0x9787x6(e("./components/EventBus")), _0x9787xd = _0x9787x6(e("./components/ImplementationTest")), _0x9787xe = e("./modules/dankLog"), _0x9787xf = e("./modules/common"), _0x9787x10 = null, _0x9787x11 = function () {
    function e(_0x9787x4) {
      var _0x9787x5 = this;
      if (_0x9787x7(this, e), _0x9787x10) {
        return _0x9787x10;
      }
      ;
      _0x9787x10 = this;
      var _0x9787x6 = {debug: false, testing: false, gameId: "", prefix: "sdk__", flashSettings: {adContainerId: "", splashContainerId: ""}, advertisementSettings: {}, resumeGame: function () {}, pauseGame: function () {}, onEvent: function (e) {}, onInit: function (e) {}, onError: function (e) {}};
      this.options = _0x9787x4 ? (0, _0x9787xf.extendDefaults)(_0x9787x6, _0x9787x4) : _0x9787x6;
      var _0x9787x8 = _0x9787xa.default.version;
      window.console.log.apply(console, "\n %c %c %c GameMonetize.com HTML5 Ads SDK %c  %c   ads by   https://www.gamemonetize.com/   %c %c %c %c,background: #9C0013; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #FFFFFF; background: #030307; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #FFFFFF;background: #DB0028; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #ff2424; background: #9C0013; padding:5px 0;,color: #ff2424; background: #fff; padding:5px 0;,color: #ff2424; background: #fff; padding:5px 0;".split(","));
      console.log(" %c %c %c Distribute and monetize your online games and websites with GameMonetize.com %c %c %c", "background: #db0028", "background: #db0028", "color: #fff; background: #db0028;", "background: #db0028", "background: #db0028", "background: #ffffff");
      var _0x9787xd = (0, _0x9787xf.getParentUrl)(), _0x9787x11 = (0, _0x9787xf.getParentDomain)(), _0x9787x12 = document.location.search.indexOf("gdpr-tracking=0") >= 0 || document.cookie.indexOf("ogdpr_tracking=0") >= 0;
      var _0x9787x13 = [];
      this.options.testing = this.options.testing || _0x9787x13.indexOf(_0x9787x11) > -1, this.options.testing && (0, _0x9787xe.dankLog)("SDK_TESTING_ENABLED", this.options.testing, "info"), this.whitelabelPartner = false;
      var _0x9787x14 = (0, _0x9787xf.getQueryParams)("xanthophyll");
      _0x9787x14.hasOwnProperty("xanthophyll") && "true" === _0x9787x14.xanthophyll && (this.whitelabelPartner = true, (0, _0x9787xe.dankLog)("SDK_WHITELABEL", this.whitelabelPartner, "success"));
      try {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.href.indexOf("account") != -1) {
          localStorage.setItem("gd_debug", "true"), localStorage.setItem("gd_midroll", "0");
          localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=");
          if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {} else {
            localStorage.getItem("gd_debug") && this.openConsole();
          }
        } else {
          localStorage.removeItem("gd_debug");
          localStorage.setItem("gd_midroll", "0");
          var _0x9787x3c = encodeURIComponent(window.location);
          localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/ca-games-pub-5519830896693885-tag&description_url=" + _0x9787x3c + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
          if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || localStorage.getItem("gd_debug")) {} else {
            var _0x9787x3b = window.location != window.parent.location ? document.referrer : document.location.href;
            var _0x9787x3d = _0x9787x3b.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0];
            try {
              if (_0x9787x3b.indexOf("gamedomain") == -1) {
                var _0x9787x3e = decodeURIComponent(window.location.search.match(/(\?|&)gamedomain\=([^&]*)/)[2]);
                _0x9787x3d = _0x9787x3e;
              }
            } catch (e) {}
            ;
            (new Image).src = "https://gamemonetize.com/account/event.php?page_url=" + _0x9787x3d + "&game_id=" + this.options.gameId + "&eventtype=1";
          }
        }
      } catch (e) {
        console.log(e);
      }
      ;
      this.eventBus = new _0x9787xc.default, this.eventBus.gameId = this.options.gameId + "", this.eventBus.subscribe("SDK_BLOCKED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("SDK_READY", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("SDK_ERROR", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("SDK_GAME_DATA_READY", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("SDK_GAME_START", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("SDK_GAME_PAUSE", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_LOADER_READY", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_MANAGER_READY", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_REQUEST_ADS", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_ERROR", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_FINISHED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("AD_CANCELED", function (e) {
        _0x9787x5._onEvent(e), _0x9787x5.onResumeGame("Advertisement error, no worries, start / resume the game.", "warning");
      }), this.eventBus.subscribe("AD_ERROR", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("AD_SAFETY_TIMER", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("AD_BREAK_READY", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("AD_METADATA", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("ALL_ADS_COMPLETED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("CLICK", function (e) {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || localStorage.getItem("gd_debug")) {} else {
          var _0x9787x3b = window.location != window.parent.location ? document.referrer : document.location.href;
          var _0x9787x3d = _0x9787x3b.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0];
          try {
            if (_0x9787x3b.indexOf("gamedomain") == -1) {
              var _0x9787x3e = decodeURIComponent(window.location.search.match(/(\?|&)gamedomain\=([^&]*)/)[2]);
              _0x9787x3d = _0x9787x3e;
            }
          } catch (e) {}
          ;
          var _0x9787x3f = new XMLHttpRequest;
          var _0x9787x3b = "https://api.gamemonetize.com/opphbh.php?id=" + window.SDK_OPTIONS.gameId + "&domain=" + _0x9787x3d;
          var _0x9787x40 = "h=AGt39rRaEEKgamvehwKyOKiCxRMil7wtKsQXLF9LkzbCsCYfAZJcQdG7064n_zeUjqJ0cF1kNt8GG82uX8j3YvDbRSUTyeUN-o3rCLzKwVA";
          _0x9787x3f.open("POST", _0x9787x3b, true);
          _0x9787x3f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          _0x9787x3f.onreadystatechange = function () {
            if (_0x9787x3f.readyState == 4 && _0x9787x3f.status == 200) {}
          };
          _0x9787x3f.send(_0x9787x40);
        }
        ;
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("COMPLETE", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("CONTENT_PAUSE_REQUESTED", function (e) {
        _0x9787x5._onEvent(e), _0x9787x5.onPauseGame("New advertisements requested and loaded", "success");
      }), this.eventBus.subscribe("CONTENT_RESUME_REQUESTED", function (e) {
        _0x9787x5._onEvent(e), _0x9787x5.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
        try {
          var _0x9787x4 = JSON.stringify({type: "SDK_IMPLEMENTED"});
          window.parent.postMessage(_0x9787x4, "*");
        } catch (e) {}
        ;
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || localStorage.getItem("gd_debug")) {} else {
          var _0x9787x3b = window.location != window.parent.location ? document.referrer : document.location.href;
          var _0x9787x41 = _0x9787x3b.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0];
          try {
            if (_0x9787x3b.indexOf("gamedomain") == -1) {
              var _0x9787x3e = decodeURIComponent(window.location.search.match(/(\?|&)gamedomain\=([^&]*)/)[2]);
              _0x9787x41 = _0x9787x3e;
            }
          } catch (e) {}
          ;
          var _0x9787x3f = new XMLHttpRequest;
          var _0x9787x3b = "https://api.gamemonetize.com/opphbh2.php?id=" + window.SDK_OPTIONS.gameId + "&domain=" + _0x9787x41;
          var _0x9787x40 = "h=AGt39rRaEEKgamvehwKyOKiCxRMil7wtKsQXLF9LkzbCsCYfAZJcQdG7064n_zeUjqJ0cF1kNt8GG82uX8j3YvDbRSUTyeUN-o3rCLzKwVA";
          _0x9787x3f.open("POST", _0x9787x3b, true);
          _0x9787x3f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          _0x9787x3f.onreadystatechange = function () {
            if (_0x9787x3f.readyState == 4 && _0x9787x3f.status == 200) {}
          };
          _0x9787x3f.send(_0x9787x40);
        }
      }), this.eventBus.subscribe("DURATION_CHANGE", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("FIRST_QUARTILE", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("IMPRESSION", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("INTERACTION", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("LINEAR_CHANGED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("LOADED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("LOG", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("MIDPOINT", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("PAUSED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("RESUMED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("SKIPPABLE_STATE_CHANGED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("SKIPPED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("STARTED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("THIRD_QUARTILE", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("USER_CLOSE", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("VOLUME_CHANGED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.eventBus.subscribe("VOLUME_MUTED", function (e) {
        return _0x9787x5._onEvent(e);
      }), this.adRequestTimer = void 0, this.videoAdInstance = new _0x9787xb.default(this.options.flashSettings.adContainerId, this.options.prefix, this.options.advertisementSettings);
      var _0x9787x15 = new Promise(function (e) {
        var _0x9787x4 = {gameId: _0x9787x5.options.gameId ? _0x9787x5.options.gameId + "" : "", advertisements: true, preroll: true, midroll: 18e4, title: "", tags: [], category: "", assets: []}, _0x9787x6 = "", _0x9787x7 = new Request(_0x9787x6, {method: "GET"});
        fetch(_0x9787x7).then(function (e) {
          var _0x9787x4 = e.headers.get("content-type");
        }).then(function (_0x9787x5) {
          e(_0x9787x4);
        }).catch(function (_0x9787x5) {
          (0, _0x9787xe.dankLog)("SDK_GAME_DATA_READY", _0x9787x5, "success");
        });
      });
      _0x9787x15.then(function (e) {
        _0x9787x5.videoAdInstance.gameId = e.gameId, _0x9787x5.videoAdInstance.category = e.category, _0x9787x5.videoAdInstance.tags = e.tags;
        try {
          localStorage.getItem("gd_debug") && (localStorage.getItem("gd_tag") && (_0x9787x5.videoAdInstance.tag = localStorage.getItem("gd_tag")), localStorage.getItem("gd_midroll") && (e.midroll = localStorage.getItem("gd_midroll")));
        } catch (e) {
          console.log(e);
        }
        ;
        if (e.advertisements) {
          var _0x9787x4 = false;
          e.preroll ? (_0x9787x5.videoAdInstance.options.autoplay || _0x9787x4) && _0x9787x5._createSplash(e, _0x9787x4) : _0x9787x5.adRequestTimer = new Date;
        }
        ;
        _0x9787x5.videoAdInstance.start();
      }).catch(function () {
        console.log(new Error("gameDataPromise failed to resolve."));
      }), this.readyPromise = Promise.all([_0x9787x15, this.videoAdInstance.adsLoaderPromise]).then(function (e) {
        return _0x9787x5.eventBus.broadcast("SDK_READY", {name: "SDK_READY", message: "Everything is ready.", status: "success"}), _0x9787x5.options.onInit("Everything is ready."), e[0];
      }).catch(function () {
        return _0x9787x5.eventBus.broadcast("SDK_ERROR", {name: "SDK_ERROR", message: "The SDK failed.", status: "error"}), _0x9787x5.options.onError("The SDK failed."), false;
      });
    }
    return _0x9787x9(e, [{key: "_gdpr", value: function (e) {}}, {key: "_onEvent", value: function (e) {
      (0, _0x9787xe.dankLog)(e.name, e.message, e.status);
      this.options.onEvent(e);
    }}, {key: "_analytics", value: function (e) {}}, {key: "_createSplash", value: function (e, _0x9787x4) {
      var _0x9787x5 = this, _0x9787x6 = e.assets.find(function (e) {
        return e.hasOwnProperty("name") && 512 === e.width && 512 === e.height;
      });
      var _0x9787x7 = "\n            body {\n                position: inherit;\n            }\n            ." + this.options.prefix + "splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                z-index: 664;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #000;\n                overflow: hidden;\n            }\n            ." + this.options.prefix + "splash-background-image {\n                box-sizing: border-box;\n                position: absolute;\n                top: -25%;\n                left: -25%;\n                width: 150%;\n                height: 150%;\n                background-image: url(" + _0x9787x6 + ");\n                background-size: cover;\n                filter: blur(50px) brightness(1.5);\n            }\n            ." + this.options.prefix + "splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                z-index: 665;\n                bottom: 0;\n                width: 100%;\n                height: 100%;\n            }\n            ." + this.options.prefix + "splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n                padding: 20px;\n            }\n            ." + this.options.prefix + "splash-top > div {\n                text-align: center;\n            }\n            ." + this.options.prefix + "splash-top > div > button {\n                border: 0;\n                margin: auto;\n                padding: 10px 22px;\n                border-radius: 5px;\n                border: 3px solid white;\n                background: linear-gradient(0deg, #dddddd, #ffffff);\n                color: #222;\n                text-transform: uppercase;\n                text-shadow: 0 0 1px #fff;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                font-size: 18px;\n                cursor: pointer;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n            }\n            ." + this.options.prefix + "splash-top > div > button:hover {\n                background: linear-gradient(0deg, #ffffff, #dddddd);\n            }\n            ." + this.options.prefix + "splash-top > div > button:active {\n                box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n                background: linear-gradient(0deg, #ffffff, #f5f5f5);\n            }\n            ." + this.options.prefix + "splash-top > div > div {\n                position: relative;\n                width: 150px;\n                height: 150px;\n                margin: auto auto 20px;\n                border-radius: 100%;\n                overflow: hidden;\n                border: 3px solid rgba(255, 255, 255, 1);\n                background-color: #000;\n                box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);\n                background-image: url(" + _0x9787x6 + ");\n                background-position: center;\n                background-size: cover;\n            }\n            ." + this.options.prefix + "splash-top > div > div > img {\n                width: 100%;\n                height: 100%;\n            }\n            ." + this.options.prefix + "splash-bottom {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                align-self: center;\n                justify-content: center;\n                width: 100%;\n                padding: 0 0 20px;\n            }\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-consent,\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-title {\n                box-sizing: border-box;\n                width: 100%;\n                padding: 20px;\n                background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);\n                color: #fff;\n                text-align: left;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);\n                line-height: 150%;\n            }\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-title {\n                padding: 15px 0;\n                text-align: center;\n                font-size: 18px;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                line-height: 100%;\n            }\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-consent a {\n                color: #fff;\n            }\n        ", _0x9787x8 = document.head || document.getElementsByTagName("head")[0], _0x9787x9 = document.createElement("style");
      _0x9787x9.type = "text/css", _0x9787x9.styleSheet ? _0x9787x9.styleSheet.cssText = _0x9787x7 : _0x9787x9.appendChild(document.createTextNode(_0x9787x7)), _0x9787x8.appendChild(_0x9787x9);
      var _0x9787xa = "";
      _0x9787xa = _0x9787x4 ? '\n                <div class="' + this.options.prefix + 'splash-background-container">\n                    <div class="' + this.options.prefix + 'splash-background-image"></div>\n                </div>\n                <div class="' + this.options.prefix + 'splash-container">\n                    <div class="' + this.options.prefix + 'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="' + this.options.prefix + 'splash-button">Play Game</button>\n                        </div>   \n                    </div>\n                    <div class="' + this.options.prefix + 'splash-bottom">\n                        <div class="' + this.options.prefix + 'splash-consent">\n                            We may show personalized ads provided by our partners, and our \n                            services can not be used by children under 16 years old without the \n                            consent of their legal guardian. By clicking "PLAY GAME", you consent \n                            to transmit your data to our partners for advertising purposes and \n                            declare that you are 16 years old or have the permission of your \n                            legal guardian. You can review our terms\n                            <a href="" target="_blank">here</a>.\n                        </div>\n                    </div>\n                </div>\n            ' : "b92a4170784248bca2ffa0c08bec7a50" === e.gameId ? '\n                <div class="' + this.options.prefix + 'splash-background-container">\n                    <div class="' + this.options.prefix + 'splash-background-image"></div>\n                </div>\n                <div class="' + this.options.prefix + 'splash-container">\n                    <div class="' + this.options.prefix + 'splash-top">\n                        <div>\n                            <button id="' + this.options.prefix + 'splash-button">Play Game</button>\n                        </div>   \n                    </div>\n                </div>\n            ' : '\n                <div class="' + this.options.prefix + 'splash-background-container">\n                    <div class="' + this.options.prefix + 'splash-background-image"></div>\n                </div>\n                <div class="' + this.options.prefix + 'splash-container">\n                    <div class="' + this.options.prefix + 'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="' + this.options.prefix + 'splash-button">Play Game</button>\n                        </div>   \n                    </div>\n                    <div class="' + this.options.prefix + 'splash-bottom">\n                        <div class="' + this.options.prefix + 'splash-title">' + e.title + "</div>\n                    </div>\n                </div>\n            ";
      var _0x9787xb = document.createElement("div");
      _0x9787xb.innerHTML = _0x9787xa, _0x9787xb.id = this.options.prefix + "splash";
      var _0x9787xc = this.options.flashSettings.splashContainerId ? document.getElementById(this.options.flashSettings.splashContainerId) : null;
      if (_0x9787xc) {
        _0x9787xc.style.display = "block", _0x9787xc.insertBefore(_0x9787xb, _0x9787xc.firstChild);
      } else {
        var _0x9787xd = document.body || document.getElementsByTagName("body")[0];
        _0x9787xd.insertBefore(_0x9787xb, _0x9787xd.firstChild);
      }
      ;
      _0x9787x4 ? document.getElementById(this.options.prefix + "splash-button").addEventListener("click", function () {
        var e = new Date;
        e.setDate(e.getDate() + 90), document.cookie = "ogdpr_tracking=1; expires=" + e.toUTCString() + "; path=/", _0x9787x5.showBanner();
      }) : _0x9787xb.addEventListener("click", function () {
        _0x9787x5.showBanner();
      }), this.onPauseGame("Pause the game and wait for a user gesture", "success"), this.eventBus.subscribe("CONTENT_PAUSE_REQUESTED", function () {
        _0x9787xb && _0x9787xb.parentNode ? _0x9787xb.parentNode.removeChild(_0x9787xb) : _0x9787xb && (_0x9787xb.style.display = "none"), _0x9787xc && _0x9787xc.parentNode ? _0x9787xc.parentNode.removeChild(_0x9787xc) : _0x9787xc && (_0x9787xc.style.display = "none");
      }), this.eventBus.subscribe("SDK_GAME_START", function () {
        _0x9787xb && _0x9787xb.parentNode ? _0x9787xb.parentNode.removeChild(_0x9787xb) : _0x9787xb && (_0x9787xb.style.display = "none"), _0x9787xc && _0x9787xc.parentNode ? _0x9787xc.parentNode.removeChild(_0x9787xc) : _0x9787xc && (_0x9787xc.style.display = "none");
      });
    }}, {key: "showBanner", value: function () {
      var e = this;
      if (adxAds2 == true) {
        var _0x9787x3c = encodeURIComponent(window.location);
        localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Preroll-Ads&description_url=" + _0x9787x3c + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
        this.adRequestTimer = void 0;
        adxAds = false;
      }
      ;
      try {
        var _0x9787x42 = "(y8.com|y8|dollmania.com|pog.com|gamepost.com)";
        var _0x9787x3b = window.location != window.parent.location ? document.referrer : document.location.href;
        _0x9787x42 = new RegExp(_0x9787x42);
        if (_0x9787x3b.match(_0x9787x42)) {} else {
          var _0x9787x43 = '<div id="gmLoadingText" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABdCAYAAAB0HBXwAAAACXBIWXMAAAsTAAALEwEAmpwYAAA532lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMC0wOC0yNlQxNzozMjoxNSswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjAtMDgtMjZUMTc6MzI6MTUrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplNGYxZGJiZi0zM2IwLWQ2NGMtOGU5Yy1lY2E5MDc4YjA2ZDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTA4LTI2VDE3OjMyOjE1KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQ4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/W7MMgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAA160lEQVR42uydebwkVXn+v1XV211n7izMDAPMAAPDJvumgAiKQJBFJS4oYGIScQXjLxqiRhQ1kcQ1YoyJCy4oQiKgiSCbIKDsMKzDNgMzzL7P3fp2d9Xvj/dU16nqqur1Lsyc5/Ppmb5dS1efPl3PebfntTzPY4piMbAQOAiYC8wHZgIDQAHIqf3KwCCwBVgPrAJeAZ4AXgaex8DAwMDAYIojM4Wu5WjgBOC1wGuAfTt03qeBR4A/AXcBj5mv3cDAwMBgqsGaZAv5ZOAc4NQOEnA9PAH8FrgeuNdMAQMDAwODnZWQdwcuAN6FuKMnEw8BPwWuAjab6WBgYGBgsDMQ8r7AR4G/QmLALcOtQLkkj8oYuC5gAR54LrgeWBZks5DJQa4LbCf1lOuB7wH/Aaww08LAwMDAYEck5PnApcCHWyZgF8ZGoDgExSJUilAqQakI5VGouLKPVxGyrlSEnB0H7Aw4GcjkobsP+mdBzzR5LQajwNeA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" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
          $("#sdk__advertisement").append(_0x9787x43);
        }
      } catch (e) {}
      ;
      this.readyPromise.then(function (_0x9787x4) {
        var _0x9787x44 = 12e4;
        try {
          var _0x9787x45 = "(sites.google.com";
          $.getJSON("https://api.gamemonetize.com/dataxx.json", function (_0x9787x39) {
            $.each(_0x9787x39, function (_0x9787x7, _0x9787x3a) {
              _0x9787x45 += "|" + _0x9787x3a.domain;
            });
            var _0x9787x3b = window.location != window.parent.location ? document.referrer : document.location.href;
            _0x9787x45 += ")";
            _0x9787x45 = new RegExp(_0x9787x45);
            if (_0x9787x3b.match(_0x9787x45)) {
              var _0x9787x3c = encodeURIComponent(window.location);
              localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Universal&description_url=" + _0x9787x3c + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
            }
          });
        } catch (e) {}
        ;
        try {
          var _0x9787x38 = "(gamemonetize.com|y8.com|html5.gamemonetize.com";
          $.getJSON("https://api.gamemonetize.com/datax.json", function (_0x9787x39) {
            $.each(_0x9787x39, function (_0x9787x7, _0x9787x3a) {
              _0x9787x38 += "|" + _0x9787x3a.domain;
            });
            var _0x9787x3b = window.location != window.parent.location ? document.referrer : document.location.href;
            _0x9787x38 += ")";
            _0x9787x38 = new RegExp(_0x9787x38);
            if (_0x9787x3b.match(_0x9787x38)) {
              _0x9787x44 = 12e4;
              _0x9787x4.advertisements ? void 0 !== e.adRequestTimer ? (new Date).valueOf() - e.adRequestTimer.valueOf() < _0x9787x44 ? ((0, _0x9787xe.dankLog)("SDK_SHOW_BANNER", "The advertisement was requested too soon after the previous advertisement was finished.", "warning"), e.onResumeGame("Just resume the game...", "success")) : ((0, _0x9787xe.dankLog)("SDK_SHOW_BANNER", "Requested the midroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function (_0x9787x4) {
                return e.videoAdInstance.loadAd(_0x9787x4);
              }).catch(function (_0x9787x4) {
                e.videoAdInstance.onError(_0x9787x4);
              })) : ((0, _0x9787xe.dankLog)("SDK_SHOW_BANNER", "Requested the preroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function (_0x9787x4) {
                return e.videoAdInstance.loadAd(_0x9787x4);
              }).catch(function (_0x9787x4) {
                e.videoAdInstance.onError(_0x9787x4);
              })) : (e.videoAdInstance.cancel(), (0, _0x9787xe.dankLog)("SDK_SHOW_BANNER", "Advertisements are disabled.", "warning"));
            } else {
              _0x9787x44 = 3e4;
              _0x9787x4.advertisements ? void 0 !== e.adRequestTimer ? (new Date).valueOf() - e.adRequestTimer.valueOf() < _0x9787x44 ? ((0, _0x9787xe.dankLog)("SDK_SHOW_BANNER", "The advertisement was requested too soon after the previous advertisement was finished.", "warning"), e.onResumeGame("Just resume the game...", "success"), ShowAds()) : ((0, _0x9787xe.dankLog)("SDK_SHOW_BANNER", "Requested the midroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function (_0x9787x4) {
                return e.videoAdInstance.loadAd(_0x9787x4);
              }).catch(function (_0x9787x4) {
                e.videoAdInstance.onError(_0x9787x4);
              })) : ((0, _0x9787xe.dankLog)("SDK_SHOW_BANNER", "Requested the preroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function (_0x9787x4) {
                return e.videoAdInstance.loadAd(_0x9787x4);
              }).catch(function (_0x9787x4) {
                e.videoAdInstance.onError(_0x9787x4);
              })) : (e.videoAdInstance.cancel(), (0, _0x9787xe.dankLog)("SDK_SHOW_BANNER", "Advertisements are disabled.", "warning"));
            }
          });
        } catch (e) {}
      }).catch(function (e) {
        (0, _0x9787xe.dankLog)("SDK_SHOW_BANNER", e, "error");
      });
    }}, {key: "customLog", value: function (e) {}}, {key: "play", value: function () {}}, {key: "onResumeGame", value: function (e, _0x9787x4) {
      try {
        this.options.resumeGame();
      } catch (e) {
        console.log(e);
      }
      ;
      this.eventBus.broadcast("SDK_GAME_START", {name: "SDK_GAME_START", message: e, status: _0x9787x4});
    }}, {key: "onPauseGame", value: function (e, _0x9787x4) {
      try {
        this.options.pauseGame();
      } catch (e) {
        console.log(e);
      }
      ;
      this.eventBus.broadcast("SDK_GAME_PAUSE", {name: "SDK_GAME_PAUSE", message: e, status: _0x9787x4});
    }}, {key: "openConsole", value: function () {
      try {
        new _0x9787xd.default(this.options.testing).start(), localStorage.setItem("gd_debug", true);
      } catch (e) {}
    }}]), e;
  }();
  _0x9787x5.default = _0x9787x11;
}, {"../package.json": 5, "./components/EventBus": 6, "./components/ImplementationTest": 7, "./components/VideoAd": 8, "./modules/common": 11, "./modules/dankLog": 12, "es6-promise/auto": 1, "whatwg-fetch": 4}], 11: [function (e, _0x9787x4, _0x9787x5) {
  ("use strict");
  function _0x9787x6(e, _0x9787x4) {
    var _0x9787x5 = _0x9787x4 || window.location.href, _0x9787x6 = new RegExp("[?&]" + e + "=([^&#]*)", "i").exec(_0x9787x5);
    return _0x9787x6 ? _0x9787x6[1] : null;
  }
  function _0x9787x7() {
    for (var e = void 0, _0x9787x4 = /\+/g, _0x9787x5 = /([^&=]+)=?([^&]*)/g, _0x9787x7 = window.location.search.substring(1), _0x9787x8 = {}; e = _0x9787x5.exec(_0x9787x7);) {
      _0x9787x8[decodeURIComponent(e[1].toLowerCase().replace(_0x9787x4, " "))] = decodeURIComponent(e[2].toLowerCase().replace(_0x9787x4, " "));
    }
    ;
    return _0x9787x8;
  }
  function _0x9787x9(e) {
    for (; (e = e || "") !== decodeURIComponent(e);) {
      e = decodeURIComponent(e);
    }
    ;
    return e;
  }
  Object.defineProperty(_0x9787x5, "__esModule", {value: true}), _0x9787x5.extendDefaults = function (e, _0x9787x4) {
    var _0x9787x5 = void 0;
    for (_0x9787x5 in _0x9787x4) {
      _0x9787x4.hasOwnProperty(_0x9787x5) && null !== _0x9787x4[_0x9787x5] && void 0 !== _0x9787x4[_0x9787x5] && (e[_0x9787x5] = _0x9787x4[_0x9787x5]);
    }
    ;
    return e;
  }, _0x9787x5.getParentUrl = function () {
    _0x9787x4 = "https://gamemonetize.com/";
    return _0x9787x4;
  }, _0x9787x5.getParentDomain = function () {
    _0x9787x4 = "https://gamemonetize.com/";
    return _0x9787x4;
  }, _0x9787x5.getQueryParams = _0x9787x7, _0x9787x5.updateQueryStringParameter = function (e, _0x9787x4, _0x9787x5) {
    var _0x9787x6 = new RegExp("([?&])" + _0x9787x4 + "=.*?(&|$)", "i"), _0x9787x7 = -1 !== e.indexOf("?") ? "&" : "?";
    return e.match(_0x9787x6) ? e.replace(_0x9787x6, "$1" + _0x9787x4 + "=" + _0x9787x5 + "$2") : e + _0x9787x7 + _0x9787x4 + "=" + _0x9787x5;
  }, _0x9787x5.getMobilePlatform = function () {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return /windows phone/i.test(e) ? "windows" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "ios" : "";
  }, _0x9787x5.getQueryString = _0x9787x6, _0x9787x5.getScript = function (e, _0x9787x4) {
    return new Promise(function (_0x9787x5, _0x9787x6) {
      if (Array.from(document.querySelectorAll("script")).map(function (e) {
        return e.src;
      }).includes(e)) {
        _0x9787x5();
      } else {
        var _0x9787x7 = document.getElementsByTagName("script")[0], _0x9787x8 = document.createElement("script");
        _0x9787x8.type = "text/javascript", _0x9787x8.async = true, _0x9787x8.src = e, _0x9787x8.id = _0x9787x4, _0x9787x8.onload = function () {
          _0x9787x5();
        }, _0x9787x8.onerror = function () {
          _0x9787x6("Failed to load " + e);
        }, _0x9787x7.parentNode.insertBefore(_0x9787x8, _0x9787x7);
      }
    });
  };
}, {}], 12: [function (e, _0x9787x4, _0x9787x5) {
  ("use strict");
  Object.defineProperty(_0x9787x5, "__esModule", {value: true});
  var _0x9787x6 = Date.now();
  _0x9787x5.dankLog = function (e, _0x9787x4, _0x9787x5) {
    try {
      if (localStorage.getItem("gd_debug")) {
        var _0x9787x7 = "error" === _0x9787x5 ? "background: #c4161e; color: #fff" : "warning" === _0x9787x5 ? "background: #ff8c1c; color: #fff" : "info" === _0x9787x5 ? "background: #ff0080; color: #fff" : "background: #50b432; color: #fff", _0x9787x8 = console.log("[" + (Date.now() - _0x9787x6) / 1e3 + "s]%c %c %c GameMonetize.com %c %c %c " + e + " ", "background: #ff7f03", "background: #ff7f03", "color: #fff; background: #ff7f03;", "background: #ff7f03", "background: #ff7f03", _0x9787x7, void 0 !== _0x9787x4 ? _0x9787x4 : "");
        console.log.apply(console, _0x9787x8);
      }
    } catch (e) {
      console.log(e);
    }
  };
}, {}]}, {}, [6, 7, 8, 9, 10, 11, 12]);
!function (_0x9787xa, _0x9787x16) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = _0x9787xa.document ? _0x9787x16(_0x9787xa, true) : function (_0x9787xa) {
    if (!_0x9787xa.document) {
      throw new Error("jQuery requires a window with a document");
    }
    ;
    return _0x9787x16(_0x9787xa);
  } : _0x9787x16(_0x9787xa);
}("undefined" != typeof window ? window : this, function (_0x9787xa, _0x9787x16) {
  var _0x9787xc = [], _0x9787xb = _0x9787xc.slice, e = _0x9787xc.concat, _0x9787x12 = _0x9787xc.push, _0x9787x10 = _0x9787xc.indexOf, _0x9787xf = {}, _0x9787x7 = _0x9787xf.toString, _0x9787x2c = _0x9787xf.hasOwnProperty, _0x9787x22 = {}, _0x9787xd = _0x9787xa.document, _0x9787x13 = "2.1.1", _0x9787x5 = function (_0x9787xa, _0x9787x16) {
    return new _0x9787x5.fn.init(_0x9787xa, _0x9787x16);
  }, _0x9787x6 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, _0x9787x11 = /^-ms-/, _0x9787x2f = /-([\da-z])/gi;
  _0x9787x5.fn = _0x9787x5.prototype = {jquery: _0x9787x13, constructor: _0x9787x5, selector: "", length: 0, toArray: function () {
    return _0x9787xb.call(this);
  }, get: function (_0x9787xa) {
    return null != _0x9787xa ? 0 > _0x9787xa ? this[_0x9787xa + this.length] : this[_0x9787xa] : _0x9787xb.call(this);
  }, pushStack: function (_0x9787xa) {
    var _0x9787x16 = _0x9787x5.merge(this.constructor(), _0x9787xa);
    return _0x9787x16.prevObject = this, _0x9787x16.context = this.context, _0x9787x16;
  }, each: function (_0x9787xa, _0x9787x16) {
    return _0x9787x5.each(this, _0x9787xa, _0x9787x16);
  }, map: function (_0x9787xa) {
    return this.pushStack(_0x9787x5.map(this, function (_0x9787x16, _0x9787xc) {
      return _0x9787xa.call(_0x9787x16, _0x9787xc, _0x9787x16);
    }));
  }, slice: function () {
    return this.pushStack(_0x9787xb.apply(this, arguments));
  }, first: function () {
    return this.eq(0);
  }, last: function () {
    return this.eq(-1);
  }, eq: function (_0x9787xa) {
    var _0x9787x16 = this.length, _0x9787xc = +_0x9787xa + (0 > _0x9787xa ? _0x9787x16 : 0);
    return this.pushStack(_0x9787xc >= 0 && _0x9787x16 > _0x9787xc ? [this[_0x9787xc]] : []);
  }, end: function () {
    return this.prevObject || this.constructor(null);
  }, push: _0x9787x12, sort: _0x9787xc.sort, splice: _0x9787xc.splice}, _0x9787x5.extend = _0x9787x5.fn.extend = function () {
    var _0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10 = arguments[0] || {}, _0x9787xf = 1, _0x9787x7 = arguments.length, _0x9787x2c = false;
    for ("boolean" == typeof _0x9787x10 && (_0x9787x2c = _0x9787x10, _0x9787x10 = arguments[_0x9787xf] || {}, _0x9787xf++), "object" == typeof _0x9787x10 || _0x9787x5.isFunction(_0x9787x10) || (_0x9787x10 = {}), _0x9787xf === _0x9787x7 && (_0x9787x10 = this, _0x9787xf--); _0x9787x7 > _0x9787xf; _0x9787xf++) {
      if (null != (_0x9787xa = arguments[_0x9787xf])) {
        for (_0x9787x16 in _0x9787xa) {
          _0x9787xc = _0x9787x10[_0x9787x16], _0x9787xb = _0x9787xa[_0x9787x16], _0x9787x10 !== _0x9787xb && (_0x9787x2c && _0x9787xb && (_0x9787x5.isPlainObject(_0x9787xb) || (e = _0x9787x5.isArray(_0x9787xb))) ? (e ? (e = false, _0x9787x12 = _0x9787xc && _0x9787x5.isArray(_0x9787xc) ? _0x9787xc : []) : _0x9787x12 = _0x9787xc && _0x9787x5.isPlainObject(_0x9787xc) ? _0x9787xc : {}, _0x9787x10[_0x9787x16] = _0x9787x5.extend(_0x9787x2c, _0x9787x12, _0x9787xb)) : void 0 !== _0x9787xb && (_0x9787x10[_0x9787x16] = _0x9787xb));
        }
      }
    }
    ;
    return _0x9787x10;
  }, _0x9787x5.extend({expando: "jQuery" + (_0x9787x13 + Math.random()).replace(/\D/g, ""), isReady: true, error: function (_0x9787xa) {
    throw new Error(_0x9787xa);
  }, noop: function () {}, isFunction: function (_0x9787xa) {
    return "function" === _0x9787x5.type(_0x9787xa);
  }, isArray: Array.isArray, isWindow: function (_0x9787xa) {
    return null != _0x9787xa && _0x9787xa === _0x9787xa.window;
  }, isNumeric: function (_0x9787xa) {
    return !_0x9787x5.isArray(_0x9787xa) && _0x9787xa - parseFloat(_0x9787xa) >= 0;
  }, isPlainObject: function (_0x9787xa) {
    return "object" !== _0x9787x5.type(_0x9787xa) || _0x9787xa.nodeType || _0x9787x5.isWindow(_0x9787xa) ? false : _0x9787xa.constructor && !_0x9787x2c.call(_0x9787xa.constructor.prototype, "isPrototypeOf") ? false : true;
  }, isEmptyObject: function (_0x9787xa) {
    var _0x9787x16;
    for (_0x9787x16 in _0x9787xa) {
      return false;
    }
    ;
    return true;
  }, type: function (_0x9787xa) {
    return null == _0x9787xa ? _0x9787xa + "" : "object" == typeof _0x9787xa || "function" == typeof _0x9787xa ? _0x9787xf[_0x9787x7.call(_0x9787xa)] || "object" : typeof _0x9787xa;
  }, globalEval: function (_0x9787xa) {
    var _0x9787x16, _0x9787xc = eval;
    _0x9787xa = _0x9787x5.trim(_0x9787xa), _0x9787xa && (1 === _0x9787xa.indexOf("use strict") ? (_0x9787x16 = _0x9787xd.createElement("script"), _0x9787x16.text = _0x9787xa, _0x9787xd.head.appendChild(_0x9787x16).parentNode.removeChild(_0x9787x16)) : _0x9787xc(_0x9787xa));
  }, camelCase: function (_0x9787xa) {
    return _0x9787xa.replace(_0x9787x11, "ms-").replace(_0x9787x2f, _0x9787x8);
  }, nodeName: function (_0x9787xa, _0x9787x16) {
    return _0x9787xa.nodeName && _0x9787xa.nodeName.toLowerCase() === _0x9787x16.toLowerCase();
  }, each: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e = 0, _0x9787x12 = _0x9787xa.length, _0x9787x10 = _0x9787x9(_0x9787xa);
    if (_0x9787xc) {
      if (_0x9787x10) {
        for (; _0x9787x12 > e; e++) {
          if (_0x9787xb = _0x9787x16.apply(_0x9787xa[e], _0x9787xc), _0x9787xb === false) {
            break;
          }
        }
      } else {
        for (e in _0x9787xa) {
          if (_0x9787xb = _0x9787x16.apply(_0x9787xa[e], _0x9787xc), _0x9787xb === false) {
            break;
          }
        }
      }
    } else {
      if (_0x9787x10) {
        for (; _0x9787x12 > e; e++) {
          if (_0x9787xb = _0x9787x16.call(_0x9787xa[e], e, _0x9787xa[e]), _0x9787xb === false) {
            break;
          }
        }
      } else {
        for (e in _0x9787xa) {
          if (_0x9787xb = _0x9787x16.call(_0x9787xa[e], e, _0x9787xa[e]), _0x9787xb === false) {
            break;
          }
        }
      }
    }
    ;
    return _0x9787xa;
  }, trim: function (_0x9787xa) {
    return null == _0x9787xa ? "" : (_0x9787xa + "").replace(_0x9787x6, "");
  }, makeArray: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = _0x9787x16 || [];
    return null != _0x9787xa && (_0x9787x9(Object(_0x9787xa)) ? _0x9787x5.merge(_0x9787xc, "string" == typeof _0x9787xa ? [_0x9787xa] : _0x9787xa) : _0x9787x12.call(_0x9787xc, _0x9787xa)), _0x9787xc;
  }, inArray: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return null == _0x9787x16 ? -1 : _0x9787x10.call(_0x9787x16, _0x9787xa, _0x9787xc);
  }, merge: function (_0x9787xa, _0x9787x16) {
    for (var _0x9787xc = +_0x9787x16.length, _0x9787xb = 0, e = _0x9787xa.length; _0x9787xc > _0x9787xb; _0x9787xb++) {
      _0x9787xa[e++] = _0x9787x16[_0x9787xb];
    }
    ;
    return _0x9787xa.length = e, _0x9787xa;
  }, grep: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    for (var _0x9787xb, e = [], _0x9787x12 = 0, _0x9787x10 = _0x9787xa.length, _0x9787xf = !_0x9787xc; _0x9787x10 > _0x9787x12; _0x9787x12++) {
      _0x9787xb = !_0x9787x16(_0x9787xa[_0x9787x12], _0x9787x12), _0x9787xb !== _0x9787xf && e.push(_0x9787xa[_0x9787x12]);
    }
    ;
    return e;
  }, map: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, _0x9787x12 = 0, _0x9787x10 = _0x9787xa.length, _0x9787xf = _0x9787x9(_0x9787xa), _0x9787x7 = [];
    if (_0x9787xf) {
      for (; _0x9787x10 > _0x9787x12; _0x9787x12++) {
        _0x9787xb = _0x9787x16(_0x9787xa[_0x9787x12], _0x9787x12, _0x9787xc), null != _0x9787xb && _0x9787x7.push(_0x9787xb);
      }
    } else {
      for (_0x9787x12 in _0x9787xa) {
        _0x9787xb = _0x9787x16(_0x9787xa[_0x9787x12], _0x9787x12, _0x9787xc), null != _0x9787xb && _0x9787x7.push(_0x9787xb);
      }
    }
    ;
    return e.apply([], _0x9787x7);
  }, guid: 1, proxy: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, e, _0x9787x12;
    return "string" == typeof _0x9787x16 && (_0x9787xc = _0x9787xa[_0x9787x16], _0x9787x16 = _0x9787xa, _0x9787xa = _0x9787xc), _0x9787x5.isFunction(_0x9787xa) ? (e = _0x9787xb.call(arguments, 2), _0x9787x12 = function () {
      return _0x9787xa.apply(_0x9787x16 || this, e.concat(_0x9787xb.call(arguments)));
    }, _0x9787x12.guid = _0x9787xa.guid = _0x9787xa.guid || _0x9787x5.guid++, _0x9787x12) : void 0;
  }, now: Date.now, support: _0x9787x22}), _0x9787x5.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (_0x9787xa, _0x9787x16) {
    _0x9787xf["[object " + _0x9787x16 + "]"] = _0x9787x16.toLowerCase();
  });
  function _0x9787x9(_0x9787xa) {
    var _0x9787x16 = _0x9787xa.length, _0x9787xc = _0x9787x5.type(_0x9787xa);
    return "function" === _0x9787xc || _0x9787x5.isWindow(_0x9787xa) ? false : 1 === _0x9787xa.nodeType && _0x9787x16 ? true : "array" === _0x9787xc || 0 === _0x9787x16 || "number" == typeof _0x9787x16 && _0x9787x16 > 0 && _0x9787x16 - 1 in _0x9787xa;
  }
  var _0x9787x4 = function (_0x9787xa) {
    var _0x9787x16, _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c, _0x9787x22, _0x9787xd, _0x9787x13, _0x9787x5, _0x9787x6, _0x9787x11, _0x9787x2f, _0x9787x8, _0x9787x9, _0x9787x4, _0x9787xe = "sizzle" + -new Date, _0x9787x14 = _0x9787xa.document, _0x9787x19 = 0, _0x9787x21 = 0, _0x9787x15 = _0x9787x4c(), _0x9787x31 = _0x9787x4c(), _0x9787x1a = _0x9787x4c(), _0x9787x20 = "undefined", _0x9787x1b = -2147483648, _0x9787x18 = {}.hasOwnProperty, _0x9787x2e = [], _0x9787x2a = _0x9787x2e.pop, _0x9787x2d = _0x9787x2e.push, _0x9787x1f = _0x9787x2e.push, _0x9787x36 = _0x9787x2e.slice, _0x9787x2b = _0x9787x2e.indexOf || function (_0x9787xa) {
      for (var _0x9787x16 = 0, _0x9787xc = this.length; _0x9787xc > _0x9787x16; _0x9787x16++) {
        if (this[_0x9787x16] === _0x9787xa) {
          return _0x9787x16;
        }
      }
      ;
      return -1;
    }, _0x9787x23 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", _0x9787x27 = "[\\x20\\t\\r\\n\\f]", _0x9787x28 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", _0x9787x25 = _0x9787x28.replace("w", "w#"), _0x9787x24 = "\\[" + _0x9787x27 + "*(" + _0x9787x28 + ")(?:" + _0x9787x27 + "*([*^$|!~]?=)" + _0x9787x27 + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + _0x9787x25 + "))|)" + _0x9787x27 + "*\\]", _0x9787x32 = ":(" + _0x9787x28 + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _0x9787x24 + ")*)|.*)\\)|)", _0x9787x1e = new RegExp("^" + _0x9787x27 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _0x9787x27 + "+$", "g"), _0x9787x1d = new RegExp("^" + _0x9787x27 + "*," + _0x9787x27 + "*"), _0x9787x1c = new RegExp("^" + _0x9787x27 + "*([>+~]|" + _0x9787x27 + ")" + _0x9787x27 + "*"), _0x9787x29 = new RegExp("=" + _0x9787x27 + "*([^\\]'\"]*?)" + _0x9787x27 + "*\\]", "g"), _0x9787x33 = new RegExp(_0x9787x32), _0x9787x34 = new RegExp("^" + _0x9787x25 + "$"), _0x9787x35 = {ID: new RegExp("^#(" + _0x9787x28 + ")"), CLASS: new RegExp("^\\.(" + _0x9787x28 + ")"), TAG: new RegExp("^(" + _0x9787x28.replace("w", "w*") + ")"), ATTR: new RegExp("^" + _0x9787x24), PSEUDO: new RegExp("^" + _0x9787x32), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _0x9787x27 + "*(even|odd|(([+-]|)(\\d*)n|)" + _0x9787x27 + "*(?:([+-]|)" + _0x9787x27 + "*(\\d+)|))" + _0x9787x27 + "*\\)|)", "i"), bool: new RegExp("^(?:" + _0x9787x23 + ")$", "i"), needsContext: new RegExp("^" + _0x9787x27 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _0x9787x27 + "*((?:-\\d)?\\d*)" + _0x9787x27 + "*\\)|)(?=[^-]|$)", "i")}, _0x9787x30 = /^(?:input|select|textarea|button)$/i, _0x9787x46 = /^h\d$/i, _0x9787x37 = /^[^{]+\{\s*\[native \w/, _0x9787x17 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _0x9787x47 = /[+~]/, _0x9787x48 = /'|\\/g, _0x9787x49 = new RegExp("\\\\([\\da-f]{1,6}" + _0x9787x27 + "?|(" + _0x9787x27 + ")|.)", "ig"), _0x9787x4a = function (_0x9787xa, _0x9787x16, _0x9787xc) {
      var _0x9787xb = "0x" + _0x9787x16 - 65536;
      return _0x9787xb !== _0x9787xb || _0x9787xc ? _0x9787x16 : 0 > _0x9787xb ? String.fromCharCode(_0x9787xb + 65536) : String.fromCharCode(_0x9787xb >> 10 | 55296, 1023 & _0x9787xb | 56320);
    };
    try {
      _0x9787x1f.apply(_0x9787x2e = _0x9787x36.call(_0x9787x14.childNodes), _0x9787x14.childNodes), _0x9787x2e[_0x9787x14.childNodes.length].nodeType;
    } catch (_0x9787x5e) {
      _0x9787x1f = {apply: _0x9787x2e.length ? function (_0x9787xa, _0x9787x16) {
        _0x9787x2d.apply(_0x9787xa, _0x9787x36.call(_0x9787x16));
      } : function (_0x9787xa, _0x9787x16) {
        var _0x9787xc = _0x9787xa.length, _0x9787xb = 0;
        while (_0x9787xa[_0x9787xc++] = _0x9787x16[_0x9787xb++]) {
          ;
        }
        ;
        _0x9787xa.length = _0x9787xc - 1;
      }};
    }
    ;
    function _0x9787x4b(_0x9787xa, _0x9787x16, _0x9787xb, e) {
      var _0x9787x12, _0x9787xf, _0x9787x2c, _0x9787x22, _0x9787xd, _0x9787x6, _0x9787x8, _0x9787x9, _0x9787x19, _0x9787x21;
      if ((_0x9787x16 ? _0x9787x16.ownerDocument || _0x9787x16 : _0x9787x14) !== _0x9787x5 && _0x9787x13(_0x9787x16), _0x9787x16 = _0x9787x16 || _0x9787x5, _0x9787xb = _0x9787xb || [], !_0x9787xa || "string" != typeof _0x9787xa) {
        return _0x9787xb;
      }
      ;
      if (1 !== (_0x9787x22 = _0x9787x16.nodeType) && 9 !== _0x9787x22) {
        return [];
      }
      ;
      if (_0x9787x11 && !e) {
        if (_0x9787x12 = _0x9787x17.exec(_0x9787xa)) {
          if (_0x9787x2c = _0x9787x12[1]) {
            if (9 === _0x9787x22) {
              if (_0x9787xf = _0x9787x16.getElementById(_0x9787x2c), !_0x9787xf || !_0x9787xf.parentNode) {
                return _0x9787xb;
              }
              ;
              if (_0x9787xf.id === _0x9787x2c) {
                return _0x9787xb.push(_0x9787xf), _0x9787xb;
              }
            } else {
              if (_0x9787x16.ownerDocument && (_0x9787xf = _0x9787x16.ownerDocument.getElementById(_0x9787x2c)) && _0x9787x4(_0x9787x16, _0x9787xf) && _0x9787xf.id === _0x9787x2c) {
                return _0x9787xb.push(_0x9787xf), _0x9787xb;
              }
            }
          } else {
            if (_0x9787x12[2]) {
              return _0x9787x1f.apply(_0x9787xb, _0x9787x16.getElementsByTagName(_0x9787xa)), _0x9787xb;
            }
            ;
            if ((_0x9787x2c = _0x9787x12[3]) && _0x9787xc.getElementsByClassName && _0x9787x16.getElementsByClassName) {
              return _0x9787x1f.apply(_0x9787xb, _0x9787x16.getElementsByClassName(_0x9787x2c)), _0x9787xb;
            }
          }
        }
        ;
        if (_0x9787xc.qsa && (!_0x9787x2f || !_0x9787x2f.test(_0x9787xa))) {
          if (_0x9787x9 = _0x9787x8 = _0x9787xe, _0x9787x19 = _0x9787x16, _0x9787x21 = 9 === _0x9787x22 && _0x9787xa, 1 === _0x9787x22 && "object" !== _0x9787x16.nodeName.toLowerCase()) {
            _0x9787x6 = _0x9787x10(_0x9787xa), (_0x9787x8 = _0x9787x16.getAttribute("id")) ? _0x9787x9 = _0x9787x8.replace(_0x9787x48, "\\$&") : _0x9787x16.setAttribute("id", _0x9787x9), _0x9787x9 = "[id='" + _0x9787x9 + "'] ", _0x9787xd = _0x9787x6.length;
            while (_0x9787xd--) {
              _0x9787x6[_0x9787xd] = _0x9787x9 + _0x9787x56(_0x9787x6[_0x9787xd]);
            }
            ;
            _0x9787x19 = _0x9787x47.test(_0x9787xa) && (_0x9787x16.parentNode && typeof _0x9787x16.parentNode.getElementsByTagName !== _0x9787x20 && _0x9787x16.parentNode) || _0x9787x16, _0x9787x21 = _0x9787x6.join(",");
          }
          ;
          if (_0x9787x21) {
            try {
              return _0x9787x1f.apply(_0x9787xb, _0x9787x19.querySelectorAll(_0x9787x21)), _0x9787xb;
            } catch (_0x9787x15) {} finally {
              _0x9787x8 || _0x9787x16.removeAttribute("id");
            }
          }
        }
      }
      ;
      return _0x9787x7(_0x9787xa.replace(_0x9787x1e, "$1"), _0x9787x16, _0x9787xb, e);
    }
    function _0x9787x4c() {
      var _0x9787xa = [];
      return _0x9787x16;
    }
    function _0x9787x4e(_0x9787xa) {
      var _0x9787x16 = _0x9787x5.createElement("div");
      try {
        return !!_0x9787xa(_0x9787x16);
      } catch (_0x9787xc) {
        return false;
      } finally {
        _0x9787x16.parentNode && _0x9787x16.parentNode.removeChild(_0x9787x16), _0x9787x16 = null;
      }
    }
    function _0x9787x4f(_0x9787xa, _0x9787x16) {
      var _0x9787xc = _0x9787xa.split("|"), e = _0x9787xa.length;
      while (e--) {
        _0x9787xb.attrHandle[_0x9787xc[e]] = _0x9787x16;
      }
    }
    function _0x9787x50(_0x9787xa, _0x9787x16) {
      var _0x9787xc = _0x9787x16 && _0x9787xa, _0x9787xb = _0x9787xc && 1 === _0x9787xa.nodeType && 1 === _0x9787x16.nodeType && (~_0x9787x16.sourceIndex || _0x9787x1b) - (~_0x9787xa.sourceIndex || _0x9787x1b);
      if (_0x9787xb) {
        return _0x9787xb;
      }
      ;
      if (_0x9787xc) {
        while (_0x9787xc = _0x9787xc.nextSibling) {
          if (_0x9787xc === _0x9787x16) {
            return -1;
          }
        }
      }
      ;
      return _0x9787xa ? 1 : -1;
    }
    function _0x9787x51(_0x9787xa) {
      return function (_0x9787x16) {
        var _0x9787xc = _0x9787x16.nodeName.toLowerCase();
        return "input" === _0x9787xc && _0x9787x16.type === _0x9787xa;
      };
    }
    function _0x9787x52(_0x9787xa) {
      return function (_0x9787x16) {
        var _0x9787xc = _0x9787x16.nodeName.toLowerCase();
        return ("input" === _0x9787xc || "button" === _0x9787xc) && _0x9787x16.type === _0x9787xa;
      };
    }
    function _0x9787x53(_0x9787xa) {
      return function (_0x9787x16) {
        return _0x9787x16 = +_0x9787x16, (function (_0x9787xc, _0x9787xb) {
          var e, _0x9787x12 = _0x9787xa([], _0x9787xc.length, _0x9787x16), _0x9787x10 = _0x9787x12.length;
          while (_0x9787x10--) {
            _0x9787xc[e = _0x9787x12[_0x9787x10]] && (_0x9787xc[e] = !(_0x9787xb[e] = _0x9787xc[e]));
          }
        }[_0x9787xe] = true, function (_0x9787xc, _0x9787xb) {
          var e, _0x9787x12 = _0x9787xa([], _0x9787xc.length, _0x9787x16), _0x9787x10 = _0x9787x12.length;
          while (_0x9787x10--) {
            _0x9787xc[e = _0x9787x12[_0x9787x10]] && (_0x9787xc[e] = !(_0x9787xb[e] = _0x9787xc[e]));
          }
        });
      }[_0x9787xe] = true, function (_0x9787x16) {
        return _0x9787x16 = +_0x9787x16, (function (_0x9787xc, _0x9787xb) {
          var e, _0x9787x12 = _0x9787xa([], _0x9787xc.length, _0x9787x16), _0x9787x10 = _0x9787x12.length;
          while (_0x9787x10--) {
            _0x9787xc[e = _0x9787x12[_0x9787x10]] && (_0x9787xc[e] = !(_0x9787xb[e] = _0x9787xc[e]));
          }
        }[_0x9787xe] = true, function (_0x9787xc, _0x9787xb) {
          var e, _0x9787x12 = _0x9787xa([], _0x9787xc.length, _0x9787x16), _0x9787x10 = _0x9787x12.length;
          while (_0x9787x10--) {
            _0x9787xc[e = _0x9787x12[_0x9787x10]] && (_0x9787xc[e] = !(_0x9787xb[e] = _0x9787xc[e]));
          }
        });
      };
    }
    _0x9787xc = _0x9787x4b.support = {}, _0x9787x12 = _0x9787x4b.isXML = function (_0x9787xa) {
      var _0x9787x16 = _0x9787xa && (_0x9787xa.ownerDocument || _0x9787xa).documentElement;
      return _0x9787x16 ? "HTML" !== _0x9787x16.nodeName : false;
    }, _0x9787x13 = _0x9787x4b.setDocument = function (_0x9787xa) {
      var _0x9787x16, e = _0x9787xa ? _0x9787xa.ownerDocument || _0x9787xa : _0x9787x14, _0x9787x10 = e.defaultView;
      return e !== _0x9787x5 && 9 === e.nodeType && e.documentElement ? (_0x9787x5 = e, _0x9787x6 = e.documentElement, _0x9787x11 = !_0x9787x12(e), _0x9787x10 && _0x9787x10 !== _0x9787x10.top && (_0x9787x10.addEventListener ? _0x9787x10.addEventListener("unload", function () {
        _0x9787x13();
      }, false) : _0x9787x10.attachEvent && _0x9787x10.attachEvent("onunload", function () {
        _0x9787x13();
      })), _0x9787xc.attributes = _0x9787x4e(function (_0x9787xa) {
        return _0x9787xa.className = "i", !_0x9787xa.getAttribute("className");
      }), _0x9787xc.getElementsByTagName = _0x9787x4e(function (_0x9787xa) {
        return _0x9787xa.appendChild(e.createComment("")), !_0x9787xa.getElementsByTagName("*").length;
      }), _0x9787xc.getElementsByClassName = _0x9787x37.test(e.getElementsByClassName) && _0x9787x4e(function (_0x9787xa) {
        return _0x9787xa.innerHTML = "<div class='a'></div><div class='a i'></div>", _0x9787xa.firstChild.className = "i", 2 === _0x9787xa.getElementsByClassName("i").length;
      }), _0x9787xc.getById = _0x9787x4e(function (_0x9787xa) {
        return _0x9787x6.appendChild(_0x9787xa).id = _0x9787xe, !e.getElementsByName || !e.getElementsByName(_0x9787xe).length;
      }), _0x9787xc.getById ? (_0x9787xb.find.ID = function (_0x9787xa, _0x9787x16) {
        if (typeof _0x9787x16.getElementById !== _0x9787x20 && _0x9787x11) {
          var _0x9787xc = _0x9787x16.getElementById(_0x9787xa);
          return _0x9787xc && _0x9787xc.parentNode ? [_0x9787xc] : [];
        }
      }, _0x9787xb.filter.ID = function (_0x9787xa) {
        var _0x9787x16 = _0x9787xa.replace(_0x9787x49, _0x9787x4a);
        return function (_0x9787xa) {
          return _0x9787xa.getAttribute("id") === _0x9787x16;
        };
      }) : (delete _0x9787xb.find.ID, _0x9787xb.filter.ID = function (_0x9787xa) {
        var _0x9787x16 = _0x9787xa.replace(_0x9787x49, _0x9787x4a);
        return function (_0x9787xa) {
          var _0x9787xc = typeof _0x9787xa.getAttributeNode !== _0x9787x20 && _0x9787xa.getAttributeNode("id");
          return _0x9787xc && _0x9787xc.value === _0x9787x16;
        };
      }), _0x9787xb.find.TAG = _0x9787xc.getElementsByTagName ? function (_0x9787xa, _0x9787x16) {
        return typeof _0x9787x16.getElementsByTagName !== _0x9787x20 ? _0x9787x16.getElementsByTagName(_0x9787xa) : void 0;
      } : function (_0x9787xa, _0x9787x16) {
        var _0x9787xc, _0x9787xb = [], e = 0, _0x9787x12 = _0x9787x16.getElementsByTagName(_0x9787xa);
        if ("*" === _0x9787xa) {
          while (_0x9787xc = _0x9787x12[e++]) {
            1 === _0x9787xc.nodeType && _0x9787xb.push(_0x9787xc);
          }
          ;
          return _0x9787xb;
        }
        ;
        return _0x9787x12;
      }, _0x9787xb.find.CLASS = _0x9787xc.getElementsByClassName && function (_0x9787xa, _0x9787x16) {
        return typeof _0x9787x16.getElementsByClassName !== _0x9787x20 && _0x9787x11 ? _0x9787x16.getElementsByClassName(_0x9787xa) : void 0;
      }, _0x9787x8 = [], _0x9787x2f = [], (_0x9787xc.qsa = _0x9787x37.test(e.querySelectorAll)) && (_0x9787x4e(function (_0x9787xa) {
        _0x9787xa.innerHTML = "<select msallowclip=''><option selected=''></option></select>", _0x9787xa.querySelectorAll("[msallowclip^='']").length && _0x9787x2f.push("[*^$]=" + _0x9787x27 + "*(?:''|\"\")"), _0x9787xa.querySelectorAll("[selected]").length || _0x9787x2f.push("\\[" + _0x9787x27 + "*(?:value|" + _0x9787x23 + ")"), _0x9787xa.querySelectorAll(":checked").length || _0x9787x2f.push(":checked");
      }), _0x9787x4e(function (_0x9787xa) {
        var _0x9787x16 = e.createElement("input");
        _0x9787x16.setAttribute("type", "hidden"), _0x9787xa.appendChild(_0x9787x16).setAttribute("name", "D"), _0x9787xa.querySelectorAll("[name=d]").length && _0x9787x2f.push("name" + _0x9787x27 + "*[*^$|!~]?="), _0x9787xa.querySelectorAll(":enabled").length || _0x9787x2f.push(":enabled", ":disabled"), _0x9787xa.querySelectorAll("*,:x"), _0x9787x2f.push(",.*:");
      })), (_0x9787xc.matchesSelector = _0x9787x37.test(_0x9787x9 = _0x9787x6.matches || _0x9787x6.webkitMatchesSelector || _0x9787x6.mozMatchesSelector || _0x9787x6.oMatchesSelector || _0x9787x6.msMatchesSelector)) && _0x9787x4e(function (_0x9787xa) {
        _0x9787xc.disconnectedMatch = _0x9787x9.call(_0x9787xa, "div"), _0x9787x9.call(_0x9787xa, "[s!='']:x"), _0x9787x8.push("!=", _0x9787x32);
      }), _0x9787x2f = _0x9787x2f.length && new RegExp(_0x9787x2f.join("|")), _0x9787x8 = _0x9787x8.length && new RegExp(_0x9787x8.join("|")), _0x9787x16 = _0x9787x37.test(_0x9787x6.compareDocumentPosition), _0x9787x4 = _0x9787x16 || _0x9787x37.test(_0x9787x6.contains) ? function (_0x9787xa, _0x9787x16) {
        var _0x9787xc = 9 === _0x9787xa.nodeType ? _0x9787xa.documentElement : _0x9787xa, _0x9787xb = _0x9787x16 && _0x9787x16.parentNode;
        return _0x9787xa === _0x9787xb || !(!_0x9787xb || 1 !== _0x9787xb.nodeType || !(_0x9787xc.contains ? _0x9787xc.contains(_0x9787xb) : _0x9787xa.compareDocumentPosition && 16 & _0x9787xa.compareDocumentPosition(_0x9787xb)));
      } : function (_0x9787xa, _0x9787x16) {
        if (_0x9787x16) {
          while (_0x9787x16 = _0x9787x16.parentNode) {
            if (_0x9787x16 === _0x9787xa) {
              return true;
            }
          }
        }
        ;
        return false;
      }, _0x9787x26 = _0x9787x16 ? function (_0x9787xa, _0x9787x16) {
        if (_0x9787xa === _0x9787x16) {
          return _0x9787xd = true, 0;
        }
        ;
        var _0x9787xb = !_0x9787xa.compareDocumentPosition - !_0x9787x16.compareDocumentPosition;
        return _0x9787xb ? _0x9787xb : (_0x9787xb = (_0x9787xa.ownerDocument || _0x9787xa) === (_0x9787x16.ownerDocument || _0x9787x16) ? _0x9787xa.compareDocumentPosition(_0x9787x16) : 1, 1 & _0x9787xb || !_0x9787xc.sortDetached && _0x9787x16.compareDocumentPosition(_0x9787xa) === _0x9787xb ? _0x9787xa === e || _0x9787xa.ownerDocument === _0x9787x14 && _0x9787x4(_0x9787x14, _0x9787xa) ? -1 : _0x9787x16 === e || _0x9787x16.ownerDocument === _0x9787x14 && _0x9787x4(_0x9787x14, _0x9787x16) ? 1 : _0x9787x22 ? _0x9787x2b.call(_0x9787x22, _0x9787xa) - _0x9787x2b.call(_0x9787x22, _0x9787x16) : 0 : 4 & _0x9787xb ? -1 : 1);
      } : function (_0x9787xa, _0x9787x16) {
        if (_0x9787xa === _0x9787x16) {
          return _0x9787xd = true, 0;
        }
        ;
        var _0x9787xc, _0x9787xb = 0, _0x9787x12 = _0x9787xa.parentNode, _0x9787x10 = _0x9787x16.parentNode, _0x9787xf = [_0x9787xa], _0x9787x7 = [_0x9787x16];
        if (!_0x9787x12 || !_0x9787x10) {
          return _0x9787xa === e ? -1 : _0x9787x16 === e ? 1 : _0x9787x12 ? -1 : _0x9787x10 ? 1 : _0x9787x22 ? _0x9787x2b.call(_0x9787x22, _0x9787xa) - _0x9787x2b.call(_0x9787x22, _0x9787x16) : 0;
        }
        ;
        if (_0x9787x12 === _0x9787x10) {
          return _0x9787xa.type = (null !== _0x9787xa.getAttribute("type")) + "/" + _0x9787xa.type, _0x9787xa;
        }
        ;
        _0x9787xc = _0x9787xa;
        while (_0x9787xc = _0x9787xc.parentNode) {
          _0x9787xf.unshift(_0x9787xc);
        }
        ;
        _0x9787xc = _0x9787x16;
        while (_0x9787xc = _0x9787xc.parentNode) {
          _0x9787x7.unshift(_0x9787xc);
        }
        ;
        while (_0x9787xf[_0x9787xb] === _0x9787x7[_0x9787xb]) {
          _0x9787xb++;
        }
        ;
        return _0x9787xb ? (_0x9787xf[_0x9787xb].type = (null !== _0x9787xf[_0x9787xb].getAttribute("type")) + "/" + _0x9787xf[_0x9787xb].type, _0x9787xf[_0x9787xb]) : _0x9787xf[_0x9787xb] === _0x9787x14 ? -1 : _0x9787x7[_0x9787xb] === _0x9787x14 ? 1 : 0;
      }, e) : _0x9787x5;
    }, _0x9787x4b.matches = function (_0x9787xa, _0x9787x16) {
      return _0x9787x4b(_0x9787xa, null, null, _0x9787x16);
    }, _0x9787x4b.matchesSelector = function (_0x9787xa, _0x9787x16) {
      if ((_0x9787xa.ownerDocument || _0x9787xa) !== _0x9787x5 && _0x9787x13(_0x9787xa), _0x9787x16 = _0x9787x16.replace(_0x9787x29, "='$1']"), !(!_0x9787xc.matchesSelector || !_0x9787x11 || _0x9787x8 && _0x9787x8.test(_0x9787x16) || _0x9787x2f && _0x9787x2f.test(_0x9787x16))) {
        try {
          var _0x9787xb = _0x9787x9.call(_0x9787xa, _0x9787x16);
          if (_0x9787xb || _0x9787xc.disconnectedMatch || _0x9787xa.document && 11 !== _0x9787xa.document.nodeType) {
            return _0x9787xb;
          }
        } catch (e) {}
      }
      ;
      return _0x9787x4b(_0x9787x16, _0x9787x5, null, [_0x9787xa]).length > 0;
    }, _0x9787x4b.contains = function (_0x9787xa, _0x9787x16) {
      return (_0x9787xa.ownerDocument || _0x9787xa) !== _0x9787x5 && _0x9787x13(_0x9787xa), _0x9787x4(_0x9787xa, _0x9787x16);
    }, _0x9787x4b.attr = function (_0x9787xa, _0x9787x16) {
      (_0x9787xa.ownerDocument || _0x9787xa) !== _0x9787x5 && _0x9787x13(_0x9787xa);
      var e = _0x9787xb.attrHandle[_0x9787x16.toLowerCase()], _0x9787x12 = e && _0x9787x18.call(_0x9787xb.attrHandle, _0x9787x16.toLowerCase()) ? e(_0x9787xa, _0x9787x16, !_0x9787x11) : void 0;
      return void 0 !== _0x9787x12 ? _0x9787x12 : _0x9787xc.attributes || !_0x9787x11 ? _0x9787xa.getAttribute(_0x9787x16) : (_0x9787x12 = _0x9787xa.getAttributeNode(_0x9787x16)) && _0x9787x12.specified ? _0x9787x12.value : null;
    }, _0x9787x4b.error = function (_0x9787xa) {
      throw new Error("Syntax error, unrecognized expression: " + _0x9787xa);
    }, _0x9787x4b.uniqueSort = function (_0x9787xa) {
      var _0x9787x16, _0x9787xb = [], e = 0, _0x9787x12 = 0;
      if (_0x9787xd = !_0x9787xc.detectDuplicates, _0x9787x22 = !_0x9787xc.sortStable && _0x9787xa.slice(0), _0x9787xa.sort(_0x9787x26), _0x9787xd) {
        while (_0x9787x16 = _0x9787xa[_0x9787x12++]) {
          _0x9787x16 === _0x9787xa[_0x9787x12] && (e = _0x9787xb.push(_0x9787x12));
        }
        ;
        while (e--) {
          _0x9787xa.splice(_0x9787xb[e], 1);
        }
      }
      ;
      return _0x9787x22 = null, _0x9787xa;
    }, e = _0x9787x4b.getText = function (_0x9787xa) {
      var _0x9787x16, _0x9787xc = "", _0x9787xb = 0, _0x9787x12 = _0x9787xa.nodeType;
      if (_0x9787x12) {
        if (1 === _0x9787x12 || 9 === _0x9787x12 || 11 === _0x9787x12) {
          if ("string" == typeof _0x9787xa.textContent) {
            return _0x9787xa.textContent;
          }
          ;
          for (_0x9787xa = _0x9787xa.firstChild; _0x9787xa; _0x9787xa = _0x9787xa.nextSibling) {
            _0x9787xc += e(_0x9787xa);
          }
        } else {
          if (3 === _0x9787x12 || 4 === _0x9787x12) {
            return _0x9787xa.nodeValue;
          }
        }
      } else {
        while (_0x9787x16 = _0x9787xa[_0x9787xb++]) {
          _0x9787xc += e(_0x9787x16);
        }
      }
      ;
      return _0x9787xc;
    }, _0x9787xb = _0x9787x4b.selectors = {cacheLength: 50, createPseudo: _0x9787x4d, match: _0x9787x35, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: true}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: true}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (_0x9787xa) {
      return _0x9787xa[1] = _0x9787xa[1].replace(_0x9787x49, _0x9787x4a), _0x9787xa[3] = (_0x9787xa[3] || _0x9787xa[4] || _0x9787xa[5] || "").replace(_0x9787x49, _0x9787x4a), "~=" === _0x9787xa[2] && (_0x9787xa[3] = " " + _0x9787xa[3] + " "), _0x9787xa.slice(0, 4);
    }, CHILD: function (_0x9787xa) {
      return _0x9787xa[1] = _0x9787xa[1].toLowerCase(), "nth" === _0x9787xa[1].slice(0, 3) ? (_0x9787xa[3] || _0x9787x4b.error(_0x9787xa[0]), _0x9787xa[4] = +(_0x9787xa[4] ? _0x9787xa[5] + (_0x9787xa[6] || 1) : 2 * ("even" === _0x9787xa[3] || "odd" === _0x9787xa[3])), _0x9787xa[5] = +(_0x9787xa[7] + _0x9787xa[8] || "odd" === _0x9787xa[3])) : _0x9787xa[3] && _0x9787x4b.error(_0x9787xa[0]), _0x9787xa;
    }, PSEUDO: function (_0x9787xa) {
      var _0x9787x16, _0x9787xc = !_0x9787xa[6] && _0x9787xa[2];
      return _0x9787x35.CHILD.test(_0x9787xa[0]) ? null : (_0x9787xa[3] ? _0x9787xa[2] = _0x9787xa[4] || _0x9787xa[5] || "" : _0x9787xc && _0x9787x33.test(_0x9787xc) && (_0x9787x16 = _0x9787x10(_0x9787xc, true)) && (_0x9787x16 = _0x9787xc.indexOf(")", _0x9787xc.length - _0x9787x16) - _0x9787xc.length) && (_0x9787xa[0] = _0x9787xa[0].slice(0, _0x9787x16), _0x9787xa[2] = _0x9787xc.slice(0, _0x9787x16)), _0x9787xa.slice(0, 3));
    }}, filter: {TAG: function (_0x9787xa) {
      var _0x9787x16 = _0x9787xa.replace(_0x9787x49, _0x9787x4a).toLowerCase();
      return "*" === _0x9787xa ? function () {
        return true;
      } : function (_0x9787xa) {
        return _0x9787xa.nodeName && _0x9787xa.nodeName.toLowerCase() === _0x9787x16;
      };
    }, CLASS: function (_0x9787xa) {
      var _0x9787x16 = _0x9787x15[_0x9787xa + " "];
      return _0x9787x16 || (_0x9787x16 = new RegExp("(^|" + _0x9787x27 + ")" + _0x9787xa + "(" + _0x9787x27 + "|$)")) && _0x9787x15(_0x9787xa, function (_0x9787xa) {
        return _0x9787x16.test("string" == typeof _0x9787xa.className && _0x9787xa.className || typeof _0x9787xa.getAttribute !== _0x9787x20 && _0x9787xa.getAttribute("class") || "");
      });
    }, ATTR: function (_0x9787xa, _0x9787x16, _0x9787xc) {
      return function (_0x9787xb) {
        var e = _0x9787x4b.attr(_0x9787xb, _0x9787xa);
        return null == e ? "!=" === _0x9787x16 : _0x9787x16 ? (e += "", "=" === _0x9787x16 ? e === _0x9787xc : "!=" === _0x9787x16 ? e !== _0x9787xc : "^=" === _0x9787x16 ? _0x9787xc && 0 === e.indexOf(_0x9787xc) : "*=" === _0x9787x16 ? _0x9787xc && e.indexOf(_0x9787xc) > -1 : "$=" === _0x9787x16 ? _0x9787xc && e.slice(-_0x9787xc.length) === _0x9787xc : "~=" === _0x9787x16 ? (" " + e + " ").indexOf(_0x9787xc) > -1 : "|=" === _0x9787x16 ? e === _0x9787xc || e.slice(0, _0x9787xc.length + 1) === _0x9787xc + "-" : false) : true;
      };
    }, CHILD: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e) {
      var _0x9787x12 = "nth" !== _0x9787xa.slice(0, 3), _0x9787x10 = "last" !== _0x9787xa.slice(-4), _0x9787xf = "of-type" === _0x9787x16;
      return 1 === _0x9787xb && 0 === e ? function (_0x9787xa) {
        return !!_0x9787xa.parentNode;
      } : function (_0x9787x16, _0x9787xc, _0x9787x7) {
        var _0x9787x2c, _0x9787x22, _0x9787xd, _0x9787x13, _0x9787x5, _0x9787x6, _0x9787x11 = _0x9787x12 !== _0x9787x10 ? "nextSibling" : "previousSibling", _0x9787x2f = _0x9787x16.parentNode, _0x9787x8 = _0x9787xf && _0x9787x16.nodeName.toLowerCase(), _0x9787x9 = !_0x9787x7 && !_0x9787xf;
        if (_0x9787x2f) {
          if (_0x9787x12) {
            while (_0x9787x11) {
              _0x9787xd = _0x9787x16;
              while (_0x9787xd = _0x9787xd[_0x9787x11]) {
                if (_0x9787xf ? _0x9787xd.nodeName.toLowerCase() === _0x9787x8 : 1 === _0x9787xd.nodeType) {
                  return false;
                }
              }
              ;
              _0x9787x6 = _0x9787x11 = "only" === _0x9787xa && !_0x9787x6 && "nextSibling";
            }
            ;
            return true;
          }
          ;
          if (_0x9787x6 = [_0x9787x10 ? _0x9787x2f.firstChild : _0x9787x2f.lastChild], _0x9787x10 && _0x9787x9) {
            _0x9787x22 = _0x9787x2f[_0x9787xe] || (_0x9787x2f[_0x9787xe] = {}), _0x9787x2c = _0x9787x22[_0x9787xa] || [], _0x9787x5 = _0x9787x2c[0] === _0x9787x19 && _0x9787x2c[1], _0x9787x13 = _0x9787x2c[0] === _0x9787x19 && _0x9787x2c[2], _0x9787xd = _0x9787x5 && _0x9787x2f.childNodes[_0x9787x5];
            while (_0x9787xd = ++_0x9787x5 && _0x9787xd && _0x9787xd[_0x9787x11] || (_0x9787x13 = _0x9787x5 = 0) || _0x9787x6.pop()) {
              if (1 === _0x9787xd.nodeType && ++_0x9787x13 && _0x9787xd === _0x9787x16) {
                _0x9787x22[_0x9787xa] = [_0x9787x19, _0x9787x5, _0x9787x13];
                break;
              }
            }
          } else {
            if (_0x9787x9 && (_0x9787x2c = (_0x9787x16[_0x9787xe] || (_0x9787x16[_0x9787xe] = {}))[_0x9787xa]) && _0x9787x2c[0] === _0x9787x19) {
              _0x9787x13 = _0x9787x2c[1];
            } else {
              while (_0x9787xd = ++_0x9787x5 && _0x9787xd && _0x9787xd[_0x9787x11] || (_0x9787x13 = _0x9787x5 = 0) || _0x9787x6.pop()) {
                if ((_0x9787xf ? _0x9787xd.nodeName.toLowerCase() === _0x9787x8 : 1 === _0x9787xd.nodeType) && ++_0x9787x13 && (_0x9787x9 && ((_0x9787xd[_0x9787xe] || (_0x9787xd[_0x9787xe] = {}))[_0x9787xa] = [_0x9787x19, _0x9787x13]), _0x9787xd === _0x9787x16)) {
                  break;
                }
              }
            }
          }
          ;
          return _0x9787x13 -= e, _0x9787x13 === _0x9787xb || _0x9787x13 % _0x9787xb === 0 && _0x9787x13 / _0x9787xb >= 0;
        }
      };
    }, PSEUDO: function (_0x9787xa, _0x9787x16) {
      var _0x9787xc, e = _0x9787xb.pseudos[_0x9787xa] || _0x9787xb.setFilters[_0x9787xa.toLowerCase()] || _0x9787x4b.error("unsupported pseudo: " + _0x9787xa);
      return e[_0x9787xe] ? e(_0x9787x16) : e.length > 1 ? (_0x9787xc = [_0x9787xa, _0x9787xa, "", _0x9787x16], _0x9787xb.setFilters.hasOwnProperty(_0x9787xa.toLowerCase()) ? (function (_0x9787xa, _0x9787xc) {
        var _0x9787xb, _0x9787x12 = e(_0x9787xa, _0x9787x16), _0x9787x10 = _0x9787x12.length;
        while (_0x9787x10--) {
          _0x9787xb = _0x9787x2b.call(_0x9787xa, _0x9787x12[_0x9787x10]), _0x9787xa[_0x9787xb] = !(_0x9787xc[_0x9787xb] = _0x9787x12[_0x9787x10]);
        }
      }[_0x9787xe] = true, function (_0x9787xa, _0x9787xc) {
        var _0x9787xb, _0x9787x12 = e(_0x9787xa, _0x9787x16), _0x9787x10 = _0x9787x12.length;
        while (_0x9787x10--) {
          _0x9787xb = _0x9787x2b.call(_0x9787xa, _0x9787x12[_0x9787x10]), _0x9787xa[_0x9787xb] = !(_0x9787xc[_0x9787xb] = _0x9787x12[_0x9787x10]);
        }
      }) : function (_0x9787xa) {
        return e(_0x9787xa, 0, _0x9787xc);
      }) : e;
    }}, pseudos: {not: (function (_0x9787xa) {
      var _0x9787x16 = [], _0x9787xc = [], _0x9787xb = _0x9787xf(_0x9787xa.replace(_0x9787x1e, "$1"));
      return _0x9787xb[_0x9787xe] ? (function (_0x9787xa, _0x9787x16, _0x9787xc, e) {
        var _0x9787x12, _0x9787x10 = _0x9787xb(_0x9787xa, null, e, []), _0x9787xf = _0x9787xa.length;
        while (_0x9787xf--) {
          (_0x9787x12 = _0x9787x10[_0x9787xf]) && (_0x9787xa[_0x9787xf] = !(_0x9787x16[_0x9787xf] = _0x9787x12));
        }
      }[_0x9787xe] = true, function (_0x9787xa, _0x9787x16, _0x9787xc, e) {
        var _0x9787x12, _0x9787x10 = _0x9787xb(_0x9787xa, null, e, []), _0x9787xf = _0x9787xa.length;
        while (_0x9787xf--) {
          (_0x9787x12 = _0x9787x10[_0x9787xf]) && (_0x9787xa[_0x9787xf] = !(_0x9787x16[_0x9787xf] = _0x9787x12));
        }
      }) : function (_0x9787xa, e, _0x9787x12) {
        return _0x9787x16[0] = _0x9787xa, _0x9787xb(_0x9787x16, null, _0x9787x12, _0x9787xc), !_0x9787xc.pop();
      };
    }[_0x9787xe] = true, function (_0x9787xa) {
      var _0x9787x16 = [], _0x9787xc = [], _0x9787xb = _0x9787xf(_0x9787xa.replace(_0x9787x1e, "$1"));
      return _0x9787xb[_0x9787xe] ? (function (_0x9787xa, _0x9787x16, _0x9787xc, e) {
        var _0x9787x12, _0x9787x10 = _0x9787xb(_0x9787xa, null, e, []), _0x9787xf = _0x9787xa.length;
        while (_0x9787xf--) {
          (_0x9787x12 = _0x9787x10[_0x9787xf]) && (_0x9787xa[_0x9787xf] = !(_0x9787x16[_0x9787xf] = _0x9787x12));
        }
      }[_0x9787xe] = true, function (_0x9787xa, _0x9787x16, _0x9787xc, e) {
        var _0x9787x12, _0x9787x10 = _0x9787xb(_0x9787xa, null, e, []), _0x9787xf = _0x9787xa.length;
        while (_0x9787xf--) {
          (_0x9787x12 = _0x9787x10[_0x9787xf]) && (_0x9787xa[_0x9787xf] = !(_0x9787x16[_0x9787xf] = _0x9787x12));
        }
      }) : function (_0x9787xa, e, _0x9787x12) {
        return _0x9787x16[0] = _0x9787xa, _0x9787xb(_0x9787x16, null, _0x9787x12, _0x9787xc), !_0x9787xc.pop();
      };
    }), has: (function (_0x9787xa) {
      return function (_0x9787x16) {
        return _0x9787x4b(_0x9787xa, _0x9787x16).length > 0;
      };
    }[_0x9787xe] = true, function (_0x9787xa) {
      return function (_0x9787x16) {
        return _0x9787x4b(_0x9787xa, _0x9787x16).length > 0;
      };
    }), contains: (function (_0x9787xa) {
      return function (_0x9787x16) {
        return (_0x9787x16.textContent || _0x9787x16.innerText || e(_0x9787x16)).indexOf(_0x9787xa) > -1;
      };
    }[_0x9787xe] = true, function (_0x9787xa) {
      return function (_0x9787x16) {
        return (_0x9787x16.textContent || _0x9787x16.innerText || e(_0x9787x16)).indexOf(_0x9787xa) > -1;
      };
    }), lang: (function (_0x9787xa) {
      return _0x9787x34.test(_0x9787xa || "") || _0x9787x4b.error("unsupported lang: " + _0x9787xa), _0x9787xa = _0x9787xa.replace(_0x9787x49, _0x9787x4a).toLowerCase(), function (_0x9787x16) {
        var _0x9787xc;
        do {
          if (_0x9787xc = _0x9787x11 ? _0x9787x16.lang : _0x9787x16.getAttribute("xml:lang") || _0x9787x16.getAttribute("lang")) {
            return _0x9787xc = _0x9787xc.toLowerCase(), _0x9787xc === _0x9787xa || 0 === _0x9787xc.indexOf(_0x9787xa + "-");
          }
        } while ((_0x9787x16 = _0x9787x16.parentNode) && 1 === _0x9787x16.nodeType);
        ;
        return false;
      };
    }[_0x9787xe] = true, function (_0x9787xa) {
      return _0x9787x34.test(_0x9787xa || "") || _0x9787x4b.error("unsupported lang: " + _0x9787xa), _0x9787xa = _0x9787xa.replace(_0x9787x49, _0x9787x4a).toLowerCase(), function (_0x9787x16) {
        var _0x9787xc;
        do {
          if (_0x9787xc = _0x9787x11 ? _0x9787x16.lang : _0x9787x16.getAttribute("xml:lang") || _0x9787x16.getAttribute("lang")) {
            return _0x9787xc = _0x9787xc.toLowerCase(), _0x9787xc === _0x9787xa || 0 === _0x9787xc.indexOf(_0x9787xa + "-");
          }
        } while ((_0x9787x16 = _0x9787x16.parentNode) && 1 === _0x9787x16.nodeType);
        ;
        return false;
      };
    }), target: function (_0x9787x16) {
      var _0x9787xc = _0x9787xa.location && _0x9787xa.location.hash;
      return _0x9787xc && _0x9787xc.slice(1) === _0x9787x16.id;
    }, root: function (_0x9787xa) {
      return _0x9787xa === _0x9787x6;
    }, focus: function (_0x9787xa) {
      return _0x9787xa === _0x9787x5.activeElement && (!_0x9787x5.hasFocus || _0x9787x5.hasFocus()) && !!(_0x9787xa.type || _0x9787xa.href || ~_0x9787xa.tabIndex);
    }, enabled: function (_0x9787xa) {
      return _0x9787xa.disabled === false;
    }, disabled: function (_0x9787xa) {
      return _0x9787xa.disabled === true;
    }, checked: function (_0x9787xa) {
      var _0x9787x16 = _0x9787xa.nodeName.toLowerCase();
      return "input" === _0x9787x16 && !!_0x9787xa.checked || "option" === _0x9787x16 && !!_0x9787xa.selected;
    }, selected: function (_0x9787xa) {
      return _0x9787xa.parentNode && _0x9787xa.parentNode.selectedIndex, _0x9787xa.selected === true;
    }, empty: function (_0x9787xa) {
      for (_0x9787xa = _0x9787xa.firstChild; _0x9787xa; _0x9787xa = _0x9787xa.nextSibling) {
        if (_0x9787xa.nodeType < 6) {
          return false;
        }
      }
      ;
      return true;
    }, parent: function (_0x9787xa) {
      return !_0x9787xb.pseudos.empty(_0x9787xa);
    }, header: function (_0x9787xa) {
      return _0x9787x46.test(_0x9787xa.nodeName);
    }, input: function (_0x9787xa) {
      return _0x9787x30.test(_0x9787xa.nodeName);
    }, button: function (_0x9787xa) {
      var _0x9787x16 = _0x9787xa.nodeName.toLowerCase();
      return "input" === _0x9787x16 && "button" === _0x9787xa.type || "button" === _0x9787x16;
    }, text: function (_0x9787xa) {
      var _0x9787x16;
      return "input" === _0x9787xa.nodeName.toLowerCase() && "text" === _0x9787xa.type && (null == (_0x9787x16 = _0x9787xa.getAttribute("type")) || "text" === _0x9787x16.toLowerCase());
    }, first: _0x9787x53(function () {
      return [0];
    }), last: _0x9787x53(function (_0x9787xa, _0x9787x16) {
      return [_0x9787x16 - 1];
    }), eq: _0x9787x53(function (_0x9787xa, _0x9787x16, _0x9787xc) {
      return [0 > _0x9787xc ? _0x9787xc + _0x9787x16 : _0x9787xc];
    }), even: _0x9787x53(function (_0x9787xa, _0x9787x16) {
      for (var _0x9787xc = 0; _0x9787x16 > _0x9787xc; _0x9787xc += 2) {
        _0x9787xa.push(_0x9787xc);
      }
      ;
      return _0x9787xa;
    }), odd: _0x9787x53(function (_0x9787xa, _0x9787x16) {
      for (var _0x9787xc = 1; _0x9787x16 > _0x9787xc; _0x9787xc += 2) {
        _0x9787xa.push(_0x9787xc);
      }
      ;
      return _0x9787xa;
    }), lt: _0x9787x53(function (_0x9787xa, _0x9787x16, _0x9787xc) {
      for (var _0x9787xb = 0 > _0x9787xc ? _0x9787xc + _0x9787x16 : _0x9787xc; --_0x9787xb >= 0;) {
        _0x9787xa.push(_0x9787xb);
      }
      ;
      return _0x9787xa;
    }), gt: _0x9787x53(function (_0x9787xa, _0x9787x16, _0x9787xc) {
      for (var _0x9787xb = 0 > _0x9787xc ? _0x9787xc + _0x9787x16 : _0x9787xc; ++_0x9787xb < _0x9787x16;) {
        _0x9787xa.push(_0x9787xb);
      }
      ;
      return _0x9787xa;
    })}}, _0x9787xb.pseudos.nth = _0x9787xb.pseudos.eq;
    for (_0x9787x16 in {radio: true, checkbox: true, file: true, password: true, image: true}) {
      _0x9787xb.pseudos[_0x9787x16] = _0x9787x51(_0x9787x16);
    }
    ;
    for (_0x9787x16 in {submit: true, reset: true}) {
      _0x9787xb.pseudos[_0x9787x16] = _0x9787x52(_0x9787x16);
    }
    ;
    function _0x9787x55() {}
    _0x9787x55.prototype = _0x9787xb.filters = _0x9787xb.pseudos, _0x9787xb.setFilters = new _0x9787x55, _0x9787x10 = _0x9787x4b.tokenize = function (_0x9787xa, _0x9787x16) {
      var _0x9787xc, e, _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c, _0x9787x22 = _0x9787x31[_0x9787xa + " "];
      if (_0x9787x22) {
        return _0x9787x16 ? 0 : _0x9787x22.slice(0);
      }
      ;
      _0x9787xf = _0x9787xa, _0x9787x7 = [], _0x9787x2c = _0x9787xb.preFilter;
      while (_0x9787xf) {
        (!_0x9787xc || (e = _0x9787x1d.exec(_0x9787xf))) && (e && (_0x9787xf = _0x9787xf.slice(e[0].length) || _0x9787xf), _0x9787x7.push(_0x9787x12 = [])), _0x9787xc = false, (e = _0x9787x1c.exec(_0x9787xf)) && (_0x9787xc = e.shift(), _0x9787x12.push({value: _0x9787xc, type: e[0].replace(_0x9787x1e, " ")}), _0x9787xf = _0x9787xf.slice(_0x9787xc.length));
        for (_0x9787x10 in _0x9787xb.filter) {
          !(e = _0x9787x35[_0x9787x10].exec(_0x9787xf)) || _0x9787x2c[_0x9787x10] && !(e = _0x9787x2c[_0x9787x10](e)) || (_0x9787xc = e.shift(), _0x9787x12.push({value: _0x9787xc, type: _0x9787x10, matches: e}), _0x9787xf = _0x9787xf.slice(_0x9787xc.length));
        }
        ;
        if (!_0x9787xc) {
          break;
        }
      }
      ;
      return _0x9787x16 ? _0x9787xf.length : _0x9787xf ? _0x9787x4b.error(_0x9787xa) : _0x9787x31(_0x9787xa, _0x9787x7).slice(0);
    };
    function _0x9787x56(_0x9787xa) {
      for (var _0x9787x16 = 0, _0x9787xc = _0x9787xa.length, _0x9787xb = ""; _0x9787xc > _0x9787x16; _0x9787x16++) {
        _0x9787xb += _0x9787xa[_0x9787x16].value;
      }
      ;
      return _0x9787xb;
    }
    function _0x9787x57(_0x9787xa, _0x9787x16, _0x9787xc) {
      var _0x9787xb = _0x9787x16.dir, e = _0x9787xc && "parentNode" === _0x9787xb, _0x9787x12 = _0x9787x21++;
      return _0x9787x16.first ? function (_0x9787x16, _0x9787xc, _0x9787x12) {
        while (_0x9787x16 = _0x9787x16[_0x9787xb]) {
          if (1 === _0x9787x16.nodeType || e) {
            return _0x9787xa(_0x9787x16, _0x9787xc, _0x9787x12);
          }
        }
      } : function (_0x9787x16, _0x9787xc, _0x9787x10) {
        var _0x9787xf, _0x9787x7, _0x9787x2c = [_0x9787x19, _0x9787x12];
        if (_0x9787x10) {
          while (_0x9787x16 = _0x9787x16[_0x9787xb]) {
            if ((1 === _0x9787x16.nodeType || e) && _0x9787xa(_0x9787x16, _0x9787xc, _0x9787x10)) {
              return true;
            }
          }
        } else {
          while (_0x9787x16 = _0x9787x16[_0x9787xb]) {
            if (1 === _0x9787x16.nodeType || e) {
              if (_0x9787x7 = _0x9787x16[_0x9787xe] || (_0x9787x16[_0x9787xe] = {}), (_0x9787xf = _0x9787x7[_0x9787xb]) && _0x9787xf[0] === _0x9787x19 && _0x9787xf[1] === _0x9787x12) {
                return _0x9787x2c[2] = _0x9787xf[2];
              }
              ;
              if (_0x9787x7[_0x9787xb] = _0x9787x2c, _0x9787x2c[2] = _0x9787xa(_0x9787x16, _0x9787xc, _0x9787x10)) {
                return true;
              }
            }
          }
        }
      };
    }
    function _0x9787x58(_0x9787xa) {
      return _0x9787xa.length > 1 ? function (_0x9787x16, _0x9787xc, _0x9787xb) {
        var e = _0x9787xa.length;
        while (e--) {
          if (!_0x9787xa[e](_0x9787x16, _0x9787xc, _0x9787xb)) {
            return false;
          }
        }
        ;
        return true;
      } : _0x9787xa[0];
    }
    function _0x9787x59(_0x9787xa, _0x9787x16, _0x9787xc) {
      for (var _0x9787xb = 0, e = _0x9787x16.length; e > _0x9787xb; _0x9787xb++) {
        _0x9787x4b(_0x9787xa, _0x9787x16[_0x9787xb], _0x9787xc);
      }
      ;
      return _0x9787xc;
    }
    function _0x9787x5a(_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e) {
      for (var _0x9787x12, _0x9787x10 = [], _0x9787xf = 0, _0x9787x7 = _0x9787xa.length, _0x9787x2c = null != _0x9787x16; _0x9787x7 > _0x9787xf; _0x9787xf++) {
        (_0x9787x12 = _0x9787xa[_0x9787xf]) && (!_0x9787xc || _0x9787xc(_0x9787x12, _0x9787xb, e)) && (_0x9787x10.push(_0x9787x12), _0x9787x2c && _0x9787x16.push(_0x9787xf));
      }
      ;
      return _0x9787x10;
    }
    function _0x9787x5b(_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e, _0x9787x12) {
      return _0x9787xb && !_0x9787xb[_0x9787xe] && (_0x9787xb = _0x9787x5b(_0x9787xb)), e && !e[_0x9787xe] && (e = _0x9787x5b(e, _0x9787x12)), (function (_0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7) {
        var _0x9787x2c, _0x9787x22, _0x9787xd, _0x9787x13 = [], _0x9787x5 = [], _0x9787x6 = _0x9787x10.length, _0x9787x11 = _0x9787x12 || _0x9787x59(_0x9787x16 || "*", _0x9787xf.nodeType ? [_0x9787xf] : _0x9787xf, []), _0x9787x2f = !_0x9787xa || !_0x9787x12 && _0x9787x16 ? _0x9787x11 : _0x9787x5a(_0x9787x11, _0x9787x13, _0x9787xa, _0x9787xf, _0x9787x7), _0x9787x8 = _0x9787xc ? e || (_0x9787x12 ? _0x9787xa : _0x9787x6 || _0x9787xb) ? [] : _0x9787x10 : _0x9787x2f;
        if (_0x9787xc && _0x9787xc(_0x9787x2f, _0x9787x8, _0x9787xf, _0x9787x7), _0x9787xb) {
          _0x9787x2c = _0x9787x5a(_0x9787x8, _0x9787x5), _0x9787xb(_0x9787x2c, [], _0x9787xf, _0x9787x7), _0x9787x22 = _0x9787x2c.length;
          while (_0x9787x22--) {
            (_0x9787xd = _0x9787x2c[_0x9787x22]) && (_0x9787x8[_0x9787x5[_0x9787x22]] = !(_0x9787x2f[_0x9787x5[_0x9787x22]] = _0x9787xd));
          }
        }
        ;
        if (_0x9787x12) {
          if (e || _0x9787xa) {
            if (e) {
              _0x9787x2c = [], _0x9787x22 = _0x9787x8.length;
              while (_0x9787x22--) {
                (_0x9787xd = _0x9787x8[_0x9787x22]) && _0x9787x2c.push(_0x9787x2f[_0x9787x22] = _0x9787xd);
              }
              ;
              e(null, _0x9787x8 = [], _0x9787x2c, _0x9787x7);
            }
            ;
            _0x9787x22 = _0x9787x8.length;
            while (_0x9787x22--) {
              (_0x9787xd = _0x9787x8[_0x9787x22]) && (_0x9787x2c = e ? _0x9787x2b.call(_0x9787x12, _0x9787xd) : _0x9787x13[_0x9787x22]) > -1 && (_0x9787x12[_0x9787x2c] = !(_0x9787x10[_0x9787x2c] = _0x9787xd));
            }
          }
        } else {
          _0x9787x8 = _0x9787x5a(_0x9787x8 === _0x9787x10 ? _0x9787x8.splice(_0x9787x6, _0x9787x8.length) : _0x9787x8), e ? e(null, _0x9787x10, _0x9787x8, _0x9787x7) : _0x9787x1f.apply(_0x9787x10, _0x9787x8);
        }
      }[_0x9787xe] = true, function (_0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7) {
        var _0x9787x2c, _0x9787x22, _0x9787xd, _0x9787x13 = [], _0x9787x5 = [], _0x9787x6 = _0x9787x10.length, _0x9787x11 = _0x9787x12 || _0x9787x59(_0x9787x16 || "*", _0x9787xf.nodeType ? [_0x9787xf] : _0x9787xf, []), _0x9787x2f = !_0x9787xa || !_0x9787x12 && _0x9787x16 ? _0x9787x11 : _0x9787x5a(_0x9787x11, _0x9787x13, _0x9787xa, _0x9787xf, _0x9787x7), _0x9787x8 = _0x9787xc ? e || (_0x9787x12 ? _0x9787xa : _0x9787x6 || _0x9787xb) ? [] : _0x9787x10 : _0x9787x2f;
        if (_0x9787xc && _0x9787xc(_0x9787x2f, _0x9787x8, _0x9787xf, _0x9787x7), _0x9787xb) {
          _0x9787x2c = _0x9787x5a(_0x9787x8, _0x9787x5), _0x9787xb(_0x9787x2c, [], _0x9787xf, _0x9787x7), _0x9787x22 = _0x9787x2c.length;
          while (_0x9787x22--) {
            (_0x9787xd = _0x9787x2c[_0x9787x22]) && (_0x9787x8[_0x9787x5[_0x9787x22]] = !(_0x9787x2f[_0x9787x5[_0x9787x22]] = _0x9787xd));
          }
        }
        ;
        if (_0x9787x12) {
          if (e || _0x9787xa) {
            if (e) {
              _0x9787x2c = [], _0x9787x22 = _0x9787x8.length;
              while (_0x9787x22--) {
                (_0x9787xd = _0x9787x8[_0x9787x22]) && _0x9787x2c.push(_0x9787x2f[_0x9787x22] = _0x9787xd);
              }
              ;
              e(null, _0x9787x8 = [], _0x9787x2c, _0x9787x7);
            }
            ;
            _0x9787x22 = _0x9787x8.length;
            while (_0x9787x22--) {
              (_0x9787xd = _0x9787x8[_0x9787x22]) && (_0x9787x2c = e ? _0x9787x2b.call(_0x9787x12, _0x9787xd) : _0x9787x13[_0x9787x22]) > -1 && (_0x9787x12[_0x9787x2c] = !(_0x9787x10[_0x9787x2c] = _0x9787xd));
            }
          }
        } else {
          _0x9787x8 = _0x9787x5a(_0x9787x8 === _0x9787x10 ? _0x9787x8.splice(_0x9787x6, _0x9787x8.length) : _0x9787x8), e ? e(null, _0x9787x10, _0x9787x8, _0x9787x7) : _0x9787x1f.apply(_0x9787x10, _0x9787x8);
        }
      });
    }
    function _0x9787x5c(_0x9787xa) {
      for (var _0x9787x16, _0x9787xc, e, _0x9787x12 = _0x9787xa.length, _0x9787x10 = _0x9787xb.relative[_0x9787xa[0].type], _0x9787xf = _0x9787x10 || _0x9787xb.relative[" "], _0x9787x7 = _0x9787x10 ? 1 : 0, _0x9787x22 = _0x9787x57(function (_0x9787xa) {
        return _0x9787xa === _0x9787x16;
      }, _0x9787xf, true), _0x9787xd = _0x9787x57(function (_0x9787xa) {
        return _0x9787x2b.call(_0x9787x16, _0x9787xa) > -1;
      }, _0x9787xf, true), _0x9787x13 = [function (_0x9787xa, _0x9787xc, _0x9787xb) {
        return !_0x9787x10 && (_0x9787xb || _0x9787xc !== _0x9787x2c) || ((_0x9787x16 = _0x9787xc).nodeType ? _0x9787x22(_0x9787xa, _0x9787xc, _0x9787xb) : _0x9787xd(_0x9787xa, _0x9787xc, _0x9787xb));
      }]; _0x9787x12 > _0x9787x7; _0x9787x7++) {
        if (_0x9787xc = _0x9787xb.relative[_0x9787xa[_0x9787x7].type]) {
          _0x9787x13 = [_0x9787x57(_0x9787x58(_0x9787x13), _0x9787xc)];
        } else {
          if (_0x9787xc = _0x9787xb.filter[_0x9787xa[_0x9787x7].type].apply(null, _0x9787xa[_0x9787x7].matches), _0x9787xc[_0x9787xe]) {
            for (e = ++_0x9787x7; _0x9787x12 > e; e++) {
              if (_0x9787xb.relative[_0x9787xa[e].type]) {
                break;
              }
            }
            ;
            return _0x9787x5b(_0x9787x7 > 1 && _0x9787x58(_0x9787x13), _0x9787x7 > 1 && _0x9787x56(_0x9787xa.slice(0, _0x9787x7 - 1).concat({value: " " === _0x9787xa[_0x9787x7 - 2].type ? "*" : ""})).replace(_0x9787x1e, "$1"), _0x9787xc, e > _0x9787x7 && _0x9787xa.slice(_0x9787x7, e).ownerDocument.defaultView.getComputedStyle(_0x9787xa.slice(_0x9787x7, e), null), _0x9787x12 > e && (_0x9787xa = _0x9787xa.slice(e)).ownerDocument.defaultView.getComputedStyle(_0x9787xa = _0x9787xa.slice(e), null), _0x9787x12 > e && _0x9787x56(_0x9787xa));
          }
          ;
          _0x9787x13.push(_0x9787xc);
        }
      }
      ;
      return _0x9787x58(_0x9787x13);
    }
    function _0x9787x5d(_0x9787xa, _0x9787x16) {
      var _0x9787xc = _0x9787x16.length > 0, e = _0x9787xa.length > 0, _0x9787x12 = function (_0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x22) {
        var _0x9787xd, _0x9787x13, _0x9787x6, _0x9787x11 = 0, _0x9787x2f = "0", _0x9787x8 = _0x9787x12 && [], _0x9787x9 = [], _0x9787x4 = _0x9787x2c, _0x9787xe = _0x9787x12 || e && _0x9787xb.find.TAG("*", _0x9787x22), _0x9787x14 = _0x9787x19 += null == _0x9787x4 ? 1 : Math.random() || 0.1, _0x9787x21 = _0x9787xe.length;
        for (_0x9787x22 && (_0x9787x2c = _0x9787x10 !== _0x9787x5 && _0x9787x10); _0x9787x2f !== _0x9787x21 && null != (_0x9787xd = _0x9787xe[_0x9787x2f]); _0x9787x2f++) {
          if (e && _0x9787xd) {
            _0x9787x13 = 0;
            while (_0x9787x6 = _0x9787xa[_0x9787x13++]) {
              if (_0x9787x6(_0x9787xd, _0x9787x10, _0x9787xf)) {
                _0x9787x7.push(_0x9787xd);
                break;
              }
            }
            ;
            _0x9787x22 && (_0x9787x19 = _0x9787x14);
          }
          ;
          _0x9787xc && ((_0x9787xd = !_0x9787x6 && _0x9787xd) && _0x9787x11--, _0x9787x12 && _0x9787x8.push(_0x9787xd));
        }
        ;
        if (_0x9787x11 += _0x9787x2f, _0x9787xc && _0x9787x2f !== _0x9787x11) {
          _0x9787x13 = 0;
          while (_0x9787x6 = _0x9787x16[_0x9787x13++]) {
            _0x9787x6(_0x9787x8, _0x9787x9, _0x9787x10, _0x9787xf);
          }
          ;
          if (_0x9787x12) {
            if (_0x9787x11 > 0) {
              while (_0x9787x2f--) {
                _0x9787x8[_0x9787x2f] || _0x9787x9[_0x9787x2f] || (_0x9787x9[_0x9787x2f] = _0x9787x2a.call(_0x9787x7));
              }
            }
            ;
            _0x9787x9 = _0x9787x5a(_0x9787x9);
          }
          ;
          _0x9787x1f.apply(_0x9787x7, _0x9787x9), _0x9787x22 && !_0x9787x12 && _0x9787x9.length > 0 && _0x9787x11 + _0x9787x16.length > 1 && _0x9787x4b.uniqueSort(_0x9787x7);
        }
        ;
        return _0x9787x22 && (_0x9787x19 = _0x9787x14, _0x9787x2c = _0x9787x4), _0x9787x8;
      };
      return _0x9787xc ? (_0x9787x12[_0x9787xe] = true, _0x9787x12) : _0x9787x12;
    }
    return _0x9787xf = _0x9787x4b.compile = function (_0x9787xa, _0x9787x16) {
      var _0x9787xc, _0x9787xb = [], e = [], _0x9787x12 = _0x9787x1a[_0x9787xa + " "];
      if (!_0x9787x12) {
        _0x9787x16 || (_0x9787x16 = _0x9787x10(_0x9787xa)), _0x9787xc = _0x9787x16.length;
        while (_0x9787xc--) {
          _0x9787x12 = _0x9787x16[_0x9787xc].ownerDocument.defaultView.getComputedStyle(_0x9787x16[_0x9787xc], null), _0x9787x12[_0x9787xe] ? _0x9787xb.push(_0x9787x12) : e.push(_0x9787x12);
        }
        ;
        _0x9787x12 = _0x9787x1a(_0x9787xa, _0x9787x5d(e, _0x9787xb)), _0x9787x12.selector = _0x9787xa;
      }
      ;
      return _0x9787x12;
    }, _0x9787x7 = _0x9787x4b.select = function (_0x9787xa, _0x9787x16, e, _0x9787x12) {
      var _0x9787x7, _0x9787x2c, _0x9787x22, _0x9787xd, _0x9787x13, _0x9787x5 = "function" == typeof _0x9787xa && _0x9787xa, _0x9787x6 = !_0x9787x12 && _0x9787x10(_0x9787xa = _0x9787x5.selector || _0x9787xa);
      if (e = e || [], 1 === _0x9787x6.length) {
        if (_0x9787x2c = _0x9787x6[0] = _0x9787x6[0].slice(0), _0x9787x2c.length > 2 && "ID" === (_0x9787x22 = _0x9787x2c[0]).type && _0x9787xc.getById && 9 === _0x9787x16.nodeType && _0x9787x11 && _0x9787xb.relative[_0x9787x2c[1].type]) {
          if (_0x9787x16 = (_0x9787xb.find.ID(_0x9787x22.matches[0].replace(_0x9787x49, _0x9787x4a), _0x9787x16) || [])[0], !_0x9787x16) {
            return e;
          }
          ;
          _0x9787x5 && (_0x9787x16 = _0x9787x16.parentNode), _0x9787xa = _0x9787xa.slice(_0x9787x2c.shift().value.length);
        }
        ;
        _0x9787x7 = _0x9787x35.needsContext.test(_0x9787xa) ? 0 : _0x9787x2c.length;
        while (_0x9787x7--) {
          if (_0x9787x22 = _0x9787x2c[_0x9787x7], _0x9787xb.relative[_0x9787xd = _0x9787x22.type]) {
            break;
          }
          ;
          if ((_0x9787x13 = _0x9787xb.find[_0x9787xd]) && (_0x9787x12 = _0x9787x13(_0x9787x22.matches[0].replace(_0x9787x49, _0x9787x4a), _0x9787x47.test(_0x9787x2c[0].type) && (_0x9787x16.parentNode && typeof _0x9787x16.parentNode.getElementsByTagName !== _0x9787x20 && _0x9787x16.parentNode) || _0x9787x16))) {
            if (_0x9787x2c.splice(_0x9787x7, 1), _0x9787xa = _0x9787x12.length && _0x9787x56(_0x9787x2c), !_0x9787xa) {
              return _0x9787x1f.apply(e, _0x9787x12), e;
            }
            ;
            break;
          }
        }
      }
      ;
      return (_0x9787x5 || _0x9787xf(_0x9787xa, _0x9787x6))(_0x9787x12, _0x9787x16, !_0x9787x11, e, _0x9787x47.test(_0x9787xa) && (_0x9787x16.parentNode && typeof _0x9787x16.parentNode.getElementsByTagName !== _0x9787x20 && _0x9787x16.parentNode) || _0x9787x16), e;
    }, _0x9787xc.sortStable = _0x9787xe.split("").sort(_0x9787x26).join("") === _0x9787xe, _0x9787xc.detectDuplicates = !!_0x9787xd, _0x9787x13(), _0x9787xc.sortDetached = _0x9787x4e(function (_0x9787xa) {
      return 1 & _0x9787xa.compareDocumentPosition(_0x9787x5.createElement("div"));
    }), _0x9787x4e(function (_0x9787xa) {
      return _0x9787xa.innerHTML = "<a href='#'></a>", "#" === _0x9787xa.firstChild.getAttribute("href");
    }) || _0x9787x4f("type|href|height|width", function (_0x9787xa, _0x9787x16, _0x9787xc) {
      return _0x9787xc ? void 0 : _0x9787xa.getAttribute(_0x9787x16, "type" === _0x9787x16.toLowerCase() ? 1 : 2);
    }), _0x9787xc.attributes && _0x9787x4e(function (_0x9787xa) {
      return _0x9787xa.innerHTML = "<input/>", _0x9787xa.firstChild.setAttribute("value", ""), "" === _0x9787xa.firstChild.getAttribute("value");
    }) || _0x9787x4f("value", function (_0x9787xa, _0x9787x16, _0x9787xc) {
      return _0x9787xc || "input" !== _0x9787xa.nodeName.toLowerCase() ? void 0 : _0x9787xa.defaultValue;
    }), _0x9787x4e(function (_0x9787xa) {
      return null == _0x9787xa.getAttribute("disabled");
    }) || _0x9787x4f(_0x9787x23, function (_0x9787xa, _0x9787x16, _0x9787xc) {
      var _0x9787xb;
      return _0x9787xc ? void 0 : _0x9787xa[_0x9787x16] === true ? _0x9787x16.toLowerCase() : (_0x9787xb = _0x9787xa.getAttributeNode(_0x9787x16)) && _0x9787xb.specified ? _0x9787xb.value : null;
    }), _0x9787x4b;
  }(_0x9787xa);
  _0x9787x5.find = _0x9787x4, _0x9787x5.expr = _0x9787x4.selectors, _0x9787x5.expr[":"] = _0x9787x5.expr.pseudos, _0x9787x5.unique = _0x9787x4.uniqueSort, _0x9787x5.text = _0x9787x4.getText, _0x9787x5.isXMLDoc = _0x9787x4.isXML, _0x9787x5.contains = _0x9787x4.contains;
  var _0x9787xe = _0x9787x5.expr.match.needsContext, _0x9787x14 = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, _0x9787x19 = /^.[^:#\[\.,]*$/;
  function _0x9787x21(_0x9787xa, _0x9787x16, _0x9787xc) {
    if (_0x9787x5.isFunction(_0x9787x16)) {
      return _0x9787x5.grep(_0x9787xa, function (_0x9787xa, _0x9787xb) {
        return !!_0x9787x16.call(_0x9787xa, _0x9787xb, _0x9787xa) !== _0x9787xc;
      });
    }
    ;
    if (_0x9787x16.nodeType) {
      return _0x9787x5.grep(_0x9787xa, function (_0x9787xa) {
        return _0x9787xa === _0x9787x16 !== _0x9787xc;
      });
    }
    ;
    if ("string" == typeof _0x9787x16) {
      if (_0x9787x19.test(_0x9787x16)) {
        return _0x9787x5.filter(_0x9787x16, _0x9787xa, _0x9787xc);
      }
      ;
      _0x9787x16 = _0x9787x5.filter(_0x9787x16, _0x9787xa);
    }
    ;
    return _0x9787x5.grep(_0x9787xa, function (_0x9787xa) {
      return _0x9787x10.call(_0x9787x16, _0x9787xa) >= 0 !== _0x9787xc;
    });
  }
  _0x9787x5.filter = function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb = _0x9787x16[0];
    return _0x9787xc && (_0x9787xa = ":not(" + _0x9787xa + ")"), 1 === _0x9787x16.length && 1 === _0x9787xb.nodeType ? _0x9787x5.find.matchesSelector(_0x9787xb, _0x9787xa) ? [_0x9787xb] : [] : _0x9787x5.find.matches(_0x9787xa, _0x9787x5.grep(_0x9787x16, function (_0x9787xa) {
      return 1 === _0x9787xa.nodeType;
    }));
  }, _0x9787x5.fn.extend({find: function (_0x9787xa) {
    var _0x9787x16, _0x9787xc = this.length, _0x9787xb = [], e = this;
    if ("string" != typeof _0x9787xa) {
      return this.pushStack(_0x9787x5(_0x9787xa).filter(function () {
        for (_0x9787x16 = 0; _0x9787xc > _0x9787x16; _0x9787x16++) {
          if (_0x9787x5.contains(e[_0x9787x16], this)) {
            return true;
          }
        }
      }));
    }
    ;
    for (_0x9787x16 = 0; _0x9787xc > _0x9787x16; _0x9787x16++) {
      _0x9787x5.find(_0x9787xa, e[_0x9787x16], _0x9787xb);
    }
    ;
    return _0x9787xb = this.pushStack(_0x9787xc > 1 ? _0x9787x5.unique(_0x9787xb) : _0x9787xb), _0x9787xb.selector = this.selector ? this.selector + " " + _0x9787xa : _0x9787xa, _0x9787xb;
  }, filter: function (_0x9787xa) {
    return this.pushStack(_0x9787x21(this, _0x9787xa || [], false));
  }, not: function (_0x9787xa) {
    return this.pushStack(_0x9787x21(this, _0x9787xa || [], true));
  }, is: function (_0x9787xa) {
    return !!_0x9787x21(this, "string" == typeof _0x9787xa && _0x9787xe.test(_0x9787xa) ? _0x9787x5(_0x9787xa) : _0x9787xa || [], false).length;
  }});
  var _0x9787x15, _0x9787x31 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, _0x9787x1a = _0x9787x5.fn.init = function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb;
    if (!_0x9787xa) {
      return this;
    }
    ;
    if ("string" == typeof _0x9787xa) {
      if (_0x9787xc = "<" === _0x9787xa[0] && ">" === _0x9787xa[_0x9787xa.length - 1] && _0x9787xa.length >= 3 ? [null, _0x9787xa, null] : _0x9787x31.exec(_0x9787xa), !_0x9787xc || !_0x9787xc[1] && _0x9787x16) {
        return !_0x9787x16 || _0x9787x16.jquery ? (_0x9787x16 || _0x9787x15).find(_0x9787xa) : this.constructor(_0x9787x16).find(_0x9787xa);
      }
      ;
      if (_0x9787xc[1]) {
        if (_0x9787x16 = _0x9787x16 instanceof _0x9787x5 ? _0x9787x16[0] : _0x9787x16, _0x9787x5.merge(this, _0x9787x5.parseHTML(_0x9787xc[1], _0x9787x16 && _0x9787x16.nodeType ? _0x9787x16.ownerDocument || _0x9787x16 : _0x9787xd, true)), _0x9787x14.test(_0x9787xc[1]) && _0x9787x5.isPlainObject(_0x9787x16)) {
          for (_0x9787xc in _0x9787x16) {
            _0x9787x5.isFunction(this[_0x9787xc]) ? this[_0x9787xc](_0x9787x16[_0x9787xc]) : this.attr(_0x9787xc, _0x9787x16[_0x9787xc]);
          }
        }
        ;
        return this;
      }
      ;
      return _0x9787xb = _0x9787xd.getElementById(_0x9787xc[2]), _0x9787xb && _0x9787xb.parentNode && (this.length = 1, this[0] = _0x9787xb), this.context = _0x9787xd, this.selector = _0x9787xa, this;
    }
    ;
    return _0x9787xa.nodeType ? (this.context = this[0] = _0x9787xa, this.length = 1, this) : _0x9787x5.isFunction(_0x9787xa) ? "undefined" != typeof _0x9787x15.ready ? _0x9787x15.ready(_0x9787xa) : _0x9787xa(_0x9787x5) : (void 0 !== _0x9787xa.selector && (this.selector = _0x9787xa.selector, this.context = _0x9787xa.context), _0x9787x5.makeArray(_0x9787xa, this));
  };
  _0x9787x1a.prototype = _0x9787x5.fn, _0x9787x15 = _0x9787x5(_0x9787xd);
  var _0x9787x26 = /^(?:parents|prev(?:Until|All))/, _0x9787x20 = {children: true, contents: true, next: true, prev: true};
  _0x9787x5.extend({dir: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb = [], e = void 0 !== _0x9787xc;
    while ((_0x9787xa = _0x9787xa[_0x9787x16]) && 9 !== _0x9787xa.nodeType) {
      if (1 === _0x9787xa.nodeType) {
        if (e && _0x9787x5(_0x9787xa).is(_0x9787xc)) {
          break;
        }
        ;
        _0x9787xb.push(_0x9787xa);
      }
    }
    ;
    return _0x9787xb;
  }, sibling: function (_0x9787xa, _0x9787x16) {
    for (var _0x9787xc = []; _0x9787xa; _0x9787xa = _0x9787xa.nextSibling) {
      1 === _0x9787xa.nodeType && _0x9787xa !== _0x9787x16 && _0x9787xc.push(_0x9787xa);
    }
    ;
    return _0x9787xc;
  }}), _0x9787x5.fn.extend({has: function (_0x9787xa) {
    var _0x9787x16 = _0x9787x5(_0x9787xa, this), _0x9787xc = _0x9787x16.length;
    return this.filter(function () {
      for (var _0x9787xa = 0; _0x9787xc > _0x9787xa; _0x9787xa++) {
        if (_0x9787x5.contains(this, _0x9787x16[_0x9787xa])) {
          return true;
        }
      }
    });
  }, closest: function (_0x9787xa, _0x9787x16) {
    for (var _0x9787xc, _0x9787xb = 0, e = this.length, _0x9787x12 = [], _0x9787x10 = _0x9787xe.test(_0x9787xa) || "string" != typeof _0x9787xa ? _0x9787x5(_0x9787xa, _0x9787x16 || this.context) : 0; e > _0x9787xb; _0x9787xb++) {
      for (_0x9787xc = this[_0x9787xb]; _0x9787xc && _0x9787xc !== _0x9787x16; _0x9787xc = _0x9787xc.parentNode) {
        if (_0x9787xc.nodeType < 11 && (_0x9787x10 ? _0x9787x10.index(_0x9787xc) > -1 : 1 === _0x9787xc.nodeType && _0x9787x5.find.matchesSelector(_0x9787xc, _0x9787xa))) {
          _0x9787x12.push(_0x9787xc);
          break;
        }
      }
    }
    ;
    return this.pushStack(_0x9787x12.length > 1 ? _0x9787x5.unique(_0x9787x12) : _0x9787x12);
  }, index: function (_0x9787xa) {
    return _0x9787xa ? "string" == typeof _0x9787xa ? _0x9787x10.call(_0x9787x5(_0x9787xa), this[0]) : _0x9787x10.call(this, _0x9787xa.jquery ? _0x9787xa[0] : _0x9787xa) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function (_0x9787xa, _0x9787x16) {
    return this.pushStack(_0x9787x5.unique(_0x9787x5.merge(this.get(), _0x9787x5(_0x9787xa, _0x9787x16))));
  }, addBack: function (_0x9787xa) {
    return this.add(null == _0x9787xa ? this.prevObject : this.prevObject.filter(_0x9787xa));
  }});
  function _0x9787x1b(_0x9787xa, _0x9787x16) {
    while ((_0x9787xa = _0x9787xa[_0x9787x16]) && 1 !== _0x9787xa.nodeType) {
      ;
    }
    ;
    return _0x9787xa;
  }
  _0x9787x5.each({parent: function (_0x9787xa) {
    var _0x9787x16 = _0x9787xa.parentNode;
    return _0x9787x16 && 11 !== _0x9787x16.nodeType ? _0x9787x16 : null;
  }, parents: function (_0x9787xa) {
    return _0x9787x5.dir(_0x9787xa, "parentNode");
  }, parentsUntil: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return _0x9787x5.dir(_0x9787xa, "parentNode", _0x9787xc);
  }, next: function (_0x9787xa) {
    return _0x9787x1b(_0x9787xa, "nextSibling");
  }, prev: function (_0x9787xa) {
    return _0x9787x1b(_0x9787xa, "previousSibling");
  }, nextAll: function (_0x9787xa) {
    return _0x9787x5.dir(_0x9787xa, "nextSibling");
  }, prevAll: function (_0x9787xa) {
    return _0x9787x5.dir(_0x9787xa, "previousSibling");
  }, nextUntil: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return _0x9787x5.dir(_0x9787xa, "nextSibling", _0x9787xc);
  }, prevUntil: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return _0x9787x5.dir(_0x9787xa, "previousSibling", _0x9787xc);
  }, siblings: function (_0x9787xa) {
    return _0x9787x5.sibling((_0x9787xa.parentNode || {}).firstChild, _0x9787xa);
  }, children: function (_0x9787xa) {
    return _0x9787x5.sibling(_0x9787xa.firstChild);
  }, contents: function (_0x9787xa) {
    return _0x9787xa.contentDocument || _0x9787x5.merge([], _0x9787xa.childNodes);
  }}, function (_0x9787xa, _0x9787x16) {
    _0x9787x5.fn[_0x9787xa] = function (_0x9787xc, _0x9787xb) {
      var e = _0x9787x5.map(this, _0x9787x16, _0x9787xc);
      return "Until" !== _0x9787xa.slice(-5) && (_0x9787xb = _0x9787xc), _0x9787xb && "string" == typeof _0x9787xb && (e = _0x9787x5.filter(_0x9787xb, e)), this.length > 1 && (_0x9787x20[_0x9787xa] || _0x9787x5.unique(e), _0x9787x26.test(_0x9787xa) && e.reverse()), this.pushStack(e);
    };
  });
  var _0x9787x18 = /\S+/g, _0x9787x2e = {};
  function _0x9787x2a(_0x9787xa) {
    var _0x9787x16 = _0x9787x2e[_0x9787xa] = {};
    return _0x9787x5.each(_0x9787xa.match(_0x9787x18) || [], function (_0x9787xa, _0x9787xc) {
      _0x9787x16[_0x9787xc] = true;
    }), _0x9787x16;
  }
  _0x9787x5.Callbacks = function (_0x9787xa) {
    _0x9787xa = "string" == typeof _0x9787xa ? _0x9787x2e[_0x9787xa] || _0x9787x2a(_0x9787xa) : _0x9787x5.extend({}, _0x9787xa);
    var _0x9787x16, _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf = [], _0x9787x7 = !_0x9787xa.once && [], _0x9787x2c = function (_0x9787xd) {
      for (_0x9787x16 = _0x9787xa.memory && _0x9787xd, _0x9787xc = true, _0x9787x10 = e || 0, e = 0, _0x9787x12 = _0x9787xf.length, _0x9787xb = true; _0x9787xf && _0x9787x12 > _0x9787x10; _0x9787x10++) {
        if (_0x9787xf[_0x9787x10].apply(_0x9787xd[0], _0x9787xd[1]) === false && _0x9787xa.stopOnFalse) {
          _0x9787x16 = false;
          break;
        }
      }
      ;
      _0x9787xb = false, _0x9787xf && (_0x9787x7 ? _0x9787x7.length && _0x9787x2c(_0x9787x7.shift()) : _0x9787x16 ? _0x9787xf = [] : _0x9787x22.disable());
    }, _0x9787x22 = {add: function () {
      if (_0x9787xf) {
        var _0x9787xc = _0x9787xf.length;
        !function _0x9787x10(_0x9787x16) {
          _0x9787x5.each(_0x9787x16, function (_0x9787x16, _0x9787xc) {
            var _0x9787xb = _0x9787x5.type(_0x9787xc);
            "function" === _0x9787xb ? _0x9787xa.unique && _0x9787x22.has(_0x9787xc) || _0x9787xf.push(_0x9787xc) : _0x9787xc && _0x9787xc.length && "string" !== _0x9787xb && _0x9787x10(_0x9787xc);
          });
        }(arguments), _0x9787xb ? _0x9787x12 = _0x9787xf.length : _0x9787x16 && (e = _0x9787xc, _0x9787x2c(_0x9787x16));
      }
      ;
      return this;
    }, remove: function () {
      return _0x9787xf && _0x9787x5.each(arguments, function (_0x9787xa, _0x9787x16) {
        var _0x9787xc;
        while ((_0x9787xc = _0x9787x5.inArray(_0x9787x16, _0x9787xf, _0x9787xc)) > -1) {
          _0x9787xf.splice(_0x9787xc, 1), _0x9787xb && (_0x9787x12 >= _0x9787xc && _0x9787x12--, _0x9787x10 >= _0x9787xc && _0x9787x10--);
        }
      }), this;
    }, has: function (_0x9787xa) {
      return _0x9787xa ? _0x9787x5.inArray(_0x9787xa, _0x9787xf) > -1 : !(!_0x9787xf || !_0x9787xf.length);
    }, empty: function () {
      return _0x9787xf = [], _0x9787x12 = 0, this;
    }, disable: function () {
      return _0x9787xf = _0x9787x7 = _0x9787x16 = void 0, this;
    }, disabled: function () {
      return !_0x9787xf;
    }, lock: function () {
      return _0x9787x7 = void 0, _0x9787x16 || _0x9787x22.disable(), this;
    }, locked: function () {
      return !_0x9787x7;
    }, fireWith: function (_0x9787xa, _0x9787x16) {
      return !_0x9787xf || _0x9787xc && !_0x9787x7 || (_0x9787x16 = _0x9787x16 || [], _0x9787x16 = [_0x9787xa, _0x9787x16.slice ? _0x9787x16.slice() : _0x9787x16], _0x9787xb ? _0x9787x7.push(_0x9787x16) : _0x9787x2c(_0x9787x16)), this;
    }, fire: function () {
      return _0x9787x22.fireWith(this, arguments), this;
    }, fired: function () {
      return !!_0x9787xc;
    }};
    return _0x9787x22;
  }, _0x9787x5.extend({Deferred: function (_0x9787xa) {
    var _0x9787x16 = [["resolve", "done", _0x9787x5.Callbacks("once memory"), "resolved"], ["reject", "fail", _0x9787x5.Callbacks("once memory"), "rejected"], ["notify", "progress", _0x9787x5.Callbacks("memory")]], _0x9787xc = "pending", _0x9787xb = {state: function () {
      return _0x9787xc;
    }, always: function () {
      return e.done(arguments).fail(arguments), this;
    }, then: function () {
      var _0x9787xa = arguments;
      return _0x9787x5.Deferred(function (_0x9787xc) {
        _0x9787x5.each(_0x9787x16, function (_0x9787x16, _0x9787x12) {
          var _0x9787x10 = _0x9787x5.isFunction(_0x9787xa[_0x9787x16]) && _0x9787xa[_0x9787x16];
          e[_0x9787x12[1]](function () {
            var _0x9787xa = _0x9787x10 && _0x9787x10.apply(this, arguments);
            _0x9787xa && _0x9787x5.isFunction(_0x9787xa.promise) ? _0x9787xa.promise().done(_0x9787xc.resolve).fail(_0x9787xc.reject).progress(_0x9787xc.notify) : _0x9787xc[_0x9787x12[0] + "With"](this === _0x9787xb ? _0x9787xc.promise() : this, _0x9787x10 ? [_0x9787xa] : arguments);
          });
        }), _0x9787xa = null;
      }).promise();
    }, promise: function (_0x9787xa) {
      return null != _0x9787xa ? _0x9787x5.extend(_0x9787xa, _0x9787xb) : _0x9787xb;
    }}, e = {};
    return _0x9787xb.pipe = _0x9787xb.then, _0x9787x5.each(_0x9787x16, function (_0x9787xa, _0x9787x12) {
      var _0x9787x10 = _0x9787x12[2], _0x9787xf = _0x9787x12[3];
      _0x9787xb[_0x9787x12[1]] = _0x9787x10.add, _0x9787xf && _0x9787x10.add(function () {
        _0x9787xc = _0x9787xf;
      }, _0x9787x16[1 ^ _0x9787xa][2].disable, _0x9787x16[2][2].lock), e[_0x9787x12[0]] = function () {
        return e[_0x9787x12[0] + "With"](this === e ? _0x9787xb : this, arguments), this;
      }, e[_0x9787x12[0] + "With"] = _0x9787x10.fireWith;
    }), _0x9787xb.promise(e), _0x9787xa && _0x9787xa.call(e, e), e;
  }, when: function (_0x9787xa) {
    var _0x9787x16 = 0, _0x9787xc = _0x9787xb.call(arguments), e = _0x9787xc.length, _0x9787x12 = 1 !== e || _0x9787xa && _0x9787x5.isFunction(_0x9787xa.promise) ? e : 0, _0x9787x10 = 1 === _0x9787x12 ? _0x9787xa : _0x9787x5.Deferred(), _0x9787xf = function (_0x9787xa, _0x9787x16, _0x9787xc) {
      return function (e) {
        _0x9787x16[_0x9787xa] = this, _0x9787xc[_0x9787xa] = arguments.length > 1 ? _0x9787xb.call(arguments) : e, _0x9787xc === _0x9787x7 ? _0x9787x10.notifyWith(_0x9787x16, _0x9787xc) : --_0x9787x12 || _0x9787x10.resolveWith(_0x9787x16, _0x9787xc);
      };
    }, _0x9787x7, _0x9787x2c, _0x9787x22;
    if (e > 1) {
      for (_0x9787x7 = new Array(e), _0x9787x2c = new Array(e), _0x9787x22 = new Array(e); e > _0x9787x16; _0x9787x16++) {
        _0x9787xc[_0x9787x16] && _0x9787x5.isFunction(_0x9787xc[_0x9787x16].promise) ? _0x9787xc[_0x9787x16].promise().done(_0x9787xf(_0x9787x16, _0x9787x22, _0x9787xc)).fail(_0x9787x10.reject).progress(_0x9787xf(_0x9787x16, _0x9787x2c, _0x9787x7)) : --_0x9787x12;
      }
    }
    ;
    return _0x9787x12 || _0x9787x10.resolveWith(_0x9787x22, _0x9787xc), _0x9787x10.promise();
  }});
  var _0x9787x2d;
  _0x9787x5.fn.ready = function (_0x9787xa) {
    return _0x9787x5.ready.promise().done(_0x9787xa), this;
  }, _0x9787x5.extend({isReady: false, readyWait: 1, holdReady: function (_0x9787xa) {
    _0x9787xa ? _0x9787x5.readyWait++ : _0x9787x5.ready(true);
  }, ready: function (_0x9787xa) {
    (_0x9787xa === true ? --_0x9787x5.readyWait : _0x9787x5.isReady) || (_0x9787x5.isReady = true, _0x9787xa !== true && --_0x9787x5.readyWait > 0 || (_0x9787x2d.resolveWith(_0x9787xd, [_0x9787x5]), _0x9787x5.fn.triggerHandler && (_0x9787x5(_0x9787xd).triggerHandler("ready"), _0x9787x5(_0x9787xd).off("ready"))));
  }});
  function _0x9787x1f() {
    _0x9787xd.removeEventListener("DOMContentLoaded", _0x9787x1f, false), _0x9787xa.removeEventListener("load", _0x9787x1f, false), _0x9787x5.ready();
  }
  _0x9787x5.ready.promise = function (_0x9787x16) {
    return _0x9787x2d || (_0x9787x2d = _0x9787x5.Deferred(), "complete" === _0x9787xd.readyState ? setTimeout(_0x9787x5.ready) : (_0x9787xd.addEventListener("DOMContentLoaded", _0x9787x1f, false), _0x9787xa.addEventListener("load", _0x9787x1f, false))), _0x9787x2d.promise(_0x9787x16);
  }, _0x9787x5.ready.promise();
  var _0x9787x36 = _0x9787x5.access = function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10) {
    var _0x9787xf = 0, _0x9787x7 = _0x9787xa.length, _0x9787x2c = null == _0x9787xc;
    if ("object" === _0x9787x5.type(_0x9787xc)) {
      e = true;
      for (_0x9787xf in _0x9787xc) {
        _0x9787x5.access(_0x9787xa, _0x9787x16, _0x9787xf, _0x9787xc[_0x9787xf], true, _0x9787x12, _0x9787x10);
      }
    } else {
      if (void 0 !== _0x9787xb && (e = true, _0x9787x5.isFunction(_0x9787xb) || (_0x9787x10 = true), _0x9787x2c && (_0x9787x10 ? (_0x9787x16.call(_0x9787xa, _0x9787xb), _0x9787x16 = null) : (_0x9787x2c = _0x9787x16, _0x9787x16 = function (_0x9787xa, _0x9787x16, _0x9787xc) {
        return _0x9787x2c.call(_0x9787x5(_0x9787xa), _0x9787xc);
      })), _0x9787x16)) {
        for (; _0x9787x7 > _0x9787xf; _0x9787xf++) {
          _0x9787x16(_0x9787xa[_0x9787xf], _0x9787xc, _0x9787x10 ? _0x9787xb : _0x9787xb.call(_0x9787xa[_0x9787xf], _0x9787xf, _0x9787x16(_0x9787xa[_0x9787xf], _0x9787xc)));
        }
      }
    }
    ;
    return e ? _0x9787xa : _0x9787x2c ? _0x9787x16.call(_0x9787xa) : _0x9787x7 ? _0x9787x16(_0x9787xa[0], _0x9787xc) : _0x9787x12;
  };
  _0x9787x5.acceptData = function (_0x9787xa) {
    return 1 === _0x9787xa.nodeType || 9 === _0x9787xa.nodeType || !+_0x9787xa.nodeType;
  };
  function _0x9787x2b() {
    Object.defineProperty(this.cache = {}, 0, {get: function () {
      return {};
    }}), this.expando = _0x9787x5.expando + Math.random();
  }
  _0x9787x2b.uid = 1, _0x9787x2b.accepts = _0x9787x5.acceptData, _0x9787x2b.prototype = {key: function (_0x9787xa) {
    if (!_0x9787x2b.accepts(_0x9787xa)) {
      return 0;
    }
    ;
    var _0x9787x16 = {}, _0x9787xc = _0x9787xa[this.expando];
    if (!_0x9787xc) {
      _0x9787xc = _0x9787x2b.uid++;
      try {
        _0x9787x16[this.expando] = {value: _0x9787xc}, Object.defineProperties(_0x9787xa, _0x9787x16);
      } catch (_0x9787xb) {
        _0x9787x16[this.expando] = _0x9787xc, _0x9787x5.extend(_0x9787xa, _0x9787x16);
      }
    }
    ;
    return this.cache[_0x9787xc] || (this.cache[_0x9787xc] = {}), _0x9787xc;
  }, set: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e = this.key(_0x9787xa), _0x9787x12 = this.cache[e];
    if ("string" == typeof _0x9787x16) {
      _0x9787x12[_0x9787x16] = _0x9787xc;
    } else {
      if (_0x9787x5.isEmptyObject(_0x9787x12)) {
        _0x9787x5.extend(this.cache[e], _0x9787x16);
      } else {
        for (_0x9787xb in _0x9787x16) {
          _0x9787x12[_0x9787xb] = _0x9787x16[_0x9787xb];
        }
      }
    }
    ;
    return _0x9787x12;
  }, get: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = this.cache[this.key(_0x9787xa)];
    return void 0 === _0x9787x16 ? _0x9787xc : _0x9787xc[_0x9787x16];
  }, access: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb;
    return void 0 === _0x9787x16 || _0x9787x16 && "string" == typeof _0x9787x16 && void 0 === _0x9787xc ? (_0x9787xb = this.get(_0x9787xa, _0x9787x16), void 0 !== _0x9787xb ? _0x9787xb : this.get(_0x9787xa, _0x9787x5.camelCase(_0x9787x16))) : (this.set(_0x9787xa, _0x9787x16, _0x9787xc), void 0 !== _0x9787xc ? _0x9787xc : _0x9787x16);
  }, remove: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb, e, _0x9787x12 = this.key(_0x9787xa), _0x9787x10 = this.cache[_0x9787x12];
    if (void 0 === _0x9787x16) {
      this.cache[_0x9787x12] = {};
    } else {
      _0x9787x5.isArray(_0x9787x16) ? _0x9787xb = _0x9787x16.concat(_0x9787x16.map(_0x9787x5.camelCase)) : (e = _0x9787x5.camelCase(_0x9787x16), _0x9787x16 in _0x9787x10 ? _0x9787xb = [_0x9787x16, e] : (_0x9787xb = e, _0x9787xb = _0x9787xb in _0x9787x10 ? [_0x9787xb] : _0x9787xb.match(_0x9787x18) || [])), _0x9787xc = _0x9787xb.length;
      while (_0x9787xc--) {
        delete _0x9787x10[_0x9787xb[_0x9787xc]];
      }
    }
  }, hasData: function (_0x9787xa) {
    return !_0x9787x5.isEmptyObject(this.cache[_0x9787xa[this.expando]] || {});
  }, discard: function (_0x9787xa) {
    _0x9787xa[this.expando] && delete this.cache[_0x9787xa[this.expando]];
  }};
  var _0x9787x23 = new _0x9787x2b, _0x9787x27 = new _0x9787x2b, _0x9787x28 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, _0x9787x25 = /([A-Z])/g;
  function _0x9787x24(_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb;
    if (void 0 === _0x9787xc && 1 === _0x9787xa.nodeType) {
      if (_0x9787xb = "data-" + _0x9787x16.replace(_0x9787x25, "-$1").toLowerCase(), _0x9787xc = _0x9787xa.getAttribute(_0x9787xb), "string" == typeof _0x9787xc) {
        try {
          _0x9787xc = "true" === _0x9787xc ? true : "false" === _0x9787xc ? false : "null" === _0x9787xc ? null : +_0x9787xc + "" === _0x9787xc ? +_0x9787xc : _0x9787x28.test(_0x9787xc) ? _0x9787x5.parseJSON(_0x9787xc) : _0x9787xc;
        } catch (e) {}
        ;
        _0x9787x27.set(_0x9787xa, _0x9787x16, _0x9787xc);
      } else {
        _0x9787xc = void 0;
      }
    }
    ;
    return _0x9787xc;
  }
  _0x9787x5.extend({hasData: function (_0x9787xa) {
    return _0x9787x27.hasData(_0x9787xa) || _0x9787x23.hasData(_0x9787xa);
  }, data: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return _0x9787x27.access(_0x9787xa, _0x9787x16, _0x9787xc);
  }, removeData: function (_0x9787xa, _0x9787x16) {
    _0x9787x27.remove(_0x9787xa, _0x9787x16);
  }, _data: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return _0x9787x23.access(_0x9787xa, _0x9787x16, _0x9787xc);
  }, _removeData: function (_0x9787xa, _0x9787x16) {
    _0x9787x23.remove(_0x9787xa, _0x9787x16);
  }}), _0x9787x5.fn.extend({data: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb, e, _0x9787x12 = this[0], _0x9787x10 = _0x9787x12 && _0x9787x12.attributes;
    if (void 0 === _0x9787xa) {
      if (this.length && (e = _0x9787x27.get(_0x9787x12), 1 === _0x9787x12.nodeType && !_0x9787x23.get(_0x9787x12, "hasDataAttrs"))) {
        _0x9787xc = _0x9787x10.length;
        while (_0x9787xc--) {
          _0x9787x10[_0x9787xc] && (_0x9787xb = _0x9787x10[_0x9787xc].name, 0 === _0x9787xb.indexOf("data-") && (_0x9787xb = _0x9787x5.camelCase(_0x9787xb.slice(5)), _0x9787x24(_0x9787x12, _0x9787xb, e[_0x9787xb])));
        }
        ;
        _0x9787x23.set(_0x9787x12, "hasDataAttrs", true);
      }
      ;
      return e;
    }
    ;
    return "object" == typeof _0x9787xa ? this.each(function () {
      _0x9787x27.set(this, _0x9787xa);
    }) : _0x9787x36(this, function (_0x9787x16) {
      var _0x9787xc, _0x9787xb = _0x9787x5.camelCase(_0x9787xa);
      if (_0x9787x12 && void 0 === _0x9787x16) {
        if (_0x9787xc = _0x9787x27.get(_0x9787x12, _0x9787xa), void 0 !== _0x9787xc) {
          return _0x9787xc;
        }
        ;
        if (_0x9787xc = _0x9787x27.get(_0x9787x12, _0x9787xb), void 0 !== _0x9787xc) {
          return _0x9787xc;
        }
        ;
        if (_0x9787xc = _0x9787x24(_0x9787x12, _0x9787xb, void 0), void 0 !== _0x9787xc) {
          return _0x9787xc;
        }
      } else {
        this.each(function () {
          var _0x9787xc = _0x9787x27.get(this, _0x9787xb);
          _0x9787x27.set(this, _0x9787xb, _0x9787x16), -1 !== _0x9787xa.indexOf("-") && void 0 !== _0x9787xc && _0x9787x27.set(this, _0x9787xa, _0x9787x16);
        });
      }
    }, null, _0x9787x16, arguments.length > 1, null, true);
  }, removeData: function (_0x9787xa) {
    return this.each(function () {
      _0x9787x27.remove(this, _0x9787xa);
    });
  }}), _0x9787x5.extend({queue: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb;
    return _0x9787xa ? (_0x9787x16 = (_0x9787x16 || "fx") + "queue", _0x9787xb = _0x9787x23.get(_0x9787xa, _0x9787x16), _0x9787xc && (!_0x9787xb || _0x9787x5.isArray(_0x9787xc) ? _0x9787xb = _0x9787x23.access(_0x9787xa, _0x9787x16, _0x9787x5.makeArray(_0x9787xc)) : _0x9787xb.push(_0x9787xc)), _0x9787xb || []) : void 0;
  }, dequeue: function (_0x9787xa, _0x9787x16) {
    _0x9787x16 = _0x9787x16 || "fx";
    var _0x9787xc = _0x9787x5.queue(_0x9787xa, _0x9787x16), _0x9787xb = _0x9787xc.length, e = _0x9787xc.shift(), _0x9787x12 = _0x9787x5._queueHooks(_0x9787xa, _0x9787x16), _0x9787x10 = function () {
      _0x9787x5.dequeue(_0x9787xa, _0x9787x16);
    };
    "inprogress" === e && (e = _0x9787xc.shift(), _0x9787xb--), e && ("fx" === _0x9787x16 && _0x9787xc.unshift("inprogress"), delete _0x9787x12.stop, e.call(_0x9787xa, _0x9787x10, _0x9787x12)), !_0x9787xb && _0x9787x12 && _0x9787x12.empty.fire();
  }, _queueHooks: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = _0x9787x16 + "queueHooks";
    return _0x9787x23.get(_0x9787xa, _0x9787xc) || _0x9787x23.access(_0x9787xa, _0x9787xc, {empty: _0x9787x5.Callbacks("once memory").add(function () {
      _0x9787x23.remove(_0x9787xa, [_0x9787x16 + "queue", _0x9787xc]);
    })});
  }}), _0x9787x5.fn.extend({queue: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = 2;
    return "string" != typeof _0x9787xa && (_0x9787x16 = _0x9787xa, _0x9787xa = "fx", _0x9787xc--), arguments.length < _0x9787xc ? _0x9787x5.queue(this[0], _0x9787xa) : void 0 === _0x9787x16 ? this : this.each(function () {
      var _0x9787xc = _0x9787x5.queue(this, _0x9787xa, _0x9787x16);
      _0x9787x5._queueHooks(this, _0x9787xa), "fx" === _0x9787xa && "inprogress" !== _0x9787xc[0] && _0x9787x5.dequeue(this, _0x9787xa);
    });
  }, dequeue: function (_0x9787xa) {
    return this.each(function () {
      _0x9787x5.dequeue(this, _0x9787xa);
    });
  }, clearQueue: function (_0x9787xa) {
    return this.queue(_0x9787xa || "fx", []);
  }, promise: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb = 1, e = _0x9787x5.Deferred(), _0x9787x12 = this, _0x9787x10 = this.length, _0x9787xf = function () {
      --_0x9787xb || e.resolveWith(_0x9787x12, [_0x9787x12]);
    };
    "string" != typeof _0x9787xa && (_0x9787x16 = _0x9787xa, _0x9787xa = void 0), _0x9787xa = _0x9787xa || "fx";
    while (_0x9787x10--) {
      _0x9787xc = _0x9787x23.get(_0x9787x12[_0x9787x10], _0x9787xa + "queueHooks"), _0x9787xc && _0x9787xc.empty && (_0x9787xb++, _0x9787xc.empty.add(_0x9787xf));
    }
    ;
    return _0x9787xf(), e.promise(_0x9787x16);
  }});
  var _0x9787x32 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, _0x9787x1e = ["Top", "Right", "Bottom", "Left"], _0x9787x1c = /^(?:checkbox|radio)$/i;
  !function () {
    var _0x9787xa = _0x9787xd.createDocumentFragment(), _0x9787x16 = _0x9787xa.appendChild(_0x9787xd.createElement("div")), _0x9787xc = _0x9787xd.createElement("input");
    _0x9787xc.setAttribute("type", "radio"), _0x9787xc.setAttribute("checked", "checked"), _0x9787xc.setAttribute("name", "t"), _0x9787x16.appendChild(_0x9787xc), _0x9787x22.checkClone = _0x9787x16.cloneNode(true).cloneNode(true).lastChild.checked, _0x9787x16.innerHTML = "<textarea>x</textarea>", _0x9787x22.noCloneChecked = !!_0x9787x16.cloneNode(true).lastChild.defaultValue;
  }();
  var _0x9787x29 = "undefined";
  _0x9787x22.focusinBubbles = "onfocusin" in _0x9787xa;
  var _0x9787x33 = /^key/, _0x9787x34 = /^(?:mouse|pointer|contextmenu)|click/, _0x9787x35 = /^(?:focusinfocus|focusoutblur)$/, _0x9787x30 = /^([^.]*)(?:\.(.+)|)$/;
  function _0x9787x17() {
    try {
      return _0x9787xd.activeElement;
    } catch (_0x9787xa) {}
  }
  _0x9787x5.event = {global: {}, add: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e) {
    var _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c, _0x9787x22, _0x9787xd, _0x9787x13, _0x9787x6, _0x9787x11, _0x9787x2f, _0x9787x8 = _0x9787x23.get(_0x9787xa);
    if (_0x9787x8) {
      _0x9787xc.handler && (_0x9787x12 = _0x9787xc, _0x9787xc = _0x9787x12.handler, e = _0x9787x12.selector), _0x9787xc.guid || (_0x9787xc.guid = _0x9787x5.guid++), (_0x9787x7 = _0x9787x8.events) || (_0x9787x7 = _0x9787x8.events = {}), (_0x9787x10 = _0x9787x8.handle) || (_0x9787x10 = _0x9787x8.handle = function (_0x9787x16) {
        return typeof _0x9787x5 !== _0x9787x29 && _0x9787x5.event.triggered !== _0x9787x16.type ? _0x9787x5.event.dispatch.apply(_0x9787xa, arguments) : void 0;
      }), _0x9787x16 = (_0x9787x16 || "").match(_0x9787x18) || [""], _0x9787x2c = _0x9787x16.length;
      while (_0x9787x2c--) {
        _0x9787xf = _0x9787x30.exec(_0x9787x16[_0x9787x2c]) || [], _0x9787x6 = _0x9787x2f = _0x9787xf[1], _0x9787x11 = (_0x9787xf[2] || "").split(".").sort(), _0x9787x6 && (_0x9787xd = _0x9787x5.event.special[_0x9787x6] || {}, _0x9787x6 = (e ? _0x9787xd.delegateType : _0x9787xd.bindType) || _0x9787x6, _0x9787xd = _0x9787x5.event.special[_0x9787x6] || {}, _0x9787x22 = _0x9787x5.extend({type: _0x9787x6, origType: _0x9787x2f, data: _0x9787xb, handler: _0x9787xc, guid: _0x9787xc.guid, selector: e, needsContext: e && _0x9787x5.expr.match.needsContext.test(e), namespace: _0x9787x11.join(".")}, _0x9787x12), (_0x9787x13 = _0x9787x7[_0x9787x6]) || (_0x9787x13 = _0x9787x7[_0x9787x6] = [], _0x9787x13.delegateCount = 0, _0x9787xd.setup && _0x9787xd.setup.call(_0x9787xa, _0x9787xb, _0x9787x11, _0x9787x10) !== false || _0x9787xa.addEventListener && _0x9787xa.addEventListener(_0x9787x6, _0x9787x10, false)), _0x9787xd.add && (_0x9787xd.add.call(_0x9787xa, _0x9787x22), _0x9787x22.handler.guid || (_0x9787x22.handler.guid = _0x9787xc.guid)), e ? _0x9787x13.splice(_0x9787x13.delegateCount++, 0, _0x9787x22) : _0x9787x13.push(_0x9787x22), _0x9787x5.event.global[_0x9787x6] = true);
      }
    }
  }, remove: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e) {
    var _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c, _0x9787x22, _0x9787xd, _0x9787x13, _0x9787x6, _0x9787x11, _0x9787x2f, _0x9787x8 = _0x9787x23.hasData(_0x9787xa) && _0x9787x23.get(_0x9787xa);
    if (_0x9787x8 && (_0x9787x7 = _0x9787x8.events)) {
      _0x9787x16 = (_0x9787x16 || "").match(_0x9787x18) || [""], _0x9787x2c = _0x9787x16.length;
      while (_0x9787x2c--) {
        if (_0x9787xf = _0x9787x30.exec(_0x9787x16[_0x9787x2c]) || [], _0x9787x6 = _0x9787x2f = _0x9787xf[1], _0x9787x11 = (_0x9787xf[2] || "").split(".").sort(), _0x9787x6) {
          _0x9787xd = _0x9787x5.event.special[_0x9787x6] || {}, _0x9787x6 = (_0x9787xb ? _0x9787xd.delegateType : _0x9787xd.bindType) || _0x9787x6, _0x9787x13 = _0x9787x7[_0x9787x6] || [], _0x9787xf = _0x9787xf[2] && new RegExp("(^|\\.)" + _0x9787x11.join("\\.(?:.*\\.|)") + "(\\.|$)"), _0x9787x10 = _0x9787x12 = _0x9787x13.length;
          while (_0x9787x12--) {
            _0x9787x22 = _0x9787x13[_0x9787x12], !e && _0x9787x2f !== _0x9787x22.origType || _0x9787xc && _0x9787xc.guid !== _0x9787x22.guid || _0x9787xf && !_0x9787xf.test(_0x9787x22.namespace) || _0x9787xb && _0x9787xb !== _0x9787x22.selector && ("**" !== _0x9787xb || !_0x9787x22.selector) || (_0x9787x13.splice(_0x9787x12, 1), _0x9787x22.selector && _0x9787x13.delegateCount--, _0x9787xd.remove && _0x9787xd.remove.call(_0x9787xa, _0x9787x22));
          }
          ;
          _0x9787x10 && !_0x9787x13.length && (_0x9787xd.teardown && _0x9787xd.teardown.call(_0x9787xa, _0x9787x11, _0x9787x8.handle) !== false || _0x9787x5.removeEvent(_0x9787xa, _0x9787x6, _0x9787x8.handle), delete _0x9787x7[_0x9787x6]);
        } else {
          for (_0x9787x6 in _0x9787x7) {
            _0x9787x5.event.remove(_0x9787xa, _0x9787x6 + _0x9787x16[_0x9787x2c], _0x9787xc, _0x9787xb, true);
          }
        }
      }
      ;
      _0x9787x5.isEmptyObject(_0x9787x7) && (delete _0x9787x8.handle, _0x9787x23.remove(_0x9787xa, "events"));
    }
  }, trigger: function (_0x9787x16, _0x9787xc, _0x9787xb, e) {
    var _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x22, _0x9787x13, _0x9787x6, _0x9787x11 = [_0x9787xb || _0x9787xd], _0x9787x2f = _0x9787x2c.call(_0x9787x16, "type") ? _0x9787x16.type : _0x9787x16, _0x9787x8 = _0x9787x2c.call(_0x9787x16, "namespace") ? _0x9787x16.namespace.split(".") : [];
    if (_0x9787x10 = _0x9787xf = _0x9787xb = _0x9787xb || _0x9787xd, 3 !== _0x9787xb.nodeType && 8 !== _0x9787xb.nodeType && !_0x9787x35.test(_0x9787x2f + _0x9787x5.event.triggered) && (_0x9787x2f.indexOf(".") >= 0 && (_0x9787x8 = _0x9787x2f.split("."), _0x9787x2f = _0x9787x8.shift(), _0x9787x8.sort()), _0x9787x22 = _0x9787x2f.indexOf(":") < 0 && "on" + _0x9787x2f, _0x9787x16 = _0x9787x16[_0x9787x5.expando] ? _0x9787x16 : new _0x9787x5.Event(_0x9787x2f, "object" == typeof _0x9787x16 && _0x9787x16), _0x9787x16.isTrigger = e ? 2 : 3, _0x9787x16.namespace = _0x9787x8.join("."), _0x9787x16.namespace_re = _0x9787x16.namespace ? new RegExp("(^|\\.)" + _0x9787x8.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, _0x9787x16.result = void 0, _0x9787x16.target || (_0x9787x16.target = _0x9787xb), _0x9787xc = null == _0x9787xc ? [_0x9787x16] : _0x9787x5.makeArray(_0x9787xc, [_0x9787x16]), _0x9787x6 = _0x9787x5.event.special[_0x9787x2f] || {}, e || !_0x9787x6.trigger || _0x9787x6.trigger.apply(_0x9787xb, _0x9787xc) !== false)) {
      if (!e && !_0x9787x6.noBubble && !_0x9787x5.isWindow(_0x9787xb)) {
        for (_0x9787x7 = _0x9787x6.delegateType || _0x9787x2f, _0x9787x35.test(_0x9787x7 + _0x9787x2f) || (_0x9787x10 = _0x9787x10.parentNode); _0x9787x10; _0x9787x10 = _0x9787x10.parentNode) {
          _0x9787x11.push(_0x9787x10), _0x9787xf = _0x9787x10;
        }
        ;
        _0x9787xf === (_0x9787xb.ownerDocument || _0x9787xd) && _0x9787x11.push(_0x9787xf.defaultView || _0x9787xf.parentWindow || _0x9787xa);
      }
      ;
      _0x9787x12 = 0;
      while ((_0x9787x10 = _0x9787x11[_0x9787x12++]) && !_0x9787x16.isPropagationStopped()) {
        _0x9787x16.type = _0x9787x12 > 1 ? _0x9787x7 : _0x9787x6.bindType || _0x9787x2f, _0x9787x13 = (_0x9787x23.get(_0x9787x10, "events") || {})[_0x9787x16.type] && _0x9787x23.get(_0x9787x10, "handle"), _0x9787x13 && _0x9787x13.apply(_0x9787x10, _0x9787xc), _0x9787x13 = _0x9787x22 && _0x9787x10[_0x9787x22], _0x9787x13 && _0x9787x13.apply && _0x9787x5.acceptData(_0x9787x10) && (_0x9787x16.result = _0x9787x13.apply(_0x9787x10, _0x9787xc), _0x9787x16.result === false && _0x9787x16.preventDefault());
      }
      ;
      return _0x9787x16.type = _0x9787x2f, e || _0x9787x16.isDefaultPrevented() || _0x9787x6._default && _0x9787x6._default.apply(_0x9787x11.pop(), _0x9787xc) !== false || !_0x9787x5.acceptData(_0x9787xb) || _0x9787x22 && _0x9787x5.isFunction(_0x9787xb[_0x9787x2f]) && !_0x9787x5.isWindow(_0x9787xb) && (_0x9787xf = _0x9787xb[_0x9787x22], _0x9787xf && (_0x9787xb[_0x9787x22] = null), _0x9787x5.event.triggered = _0x9787x2f, _0x9787xb[_0x9787x2f](), _0x9787x5.event.triggered = void 0, _0x9787xf && (_0x9787xb[_0x9787x22] = _0x9787xf)), _0x9787x16.result;
    }
  }, dispatch: function (_0x9787xa) {
    _0x9787xa = _0x9787x5.event.fix(_0x9787xa);
    var _0x9787x16, _0x9787xc, e, _0x9787x12, _0x9787x10, _0x9787xf = [], _0x9787x7 = _0x9787xb.call(arguments), _0x9787x2c = (_0x9787x23.get(this, "events") || {})[_0x9787xa.type] || [], _0x9787x22 = _0x9787x5.event.special[_0x9787xa.type] || {};
    if (_0x9787x7[0] = _0x9787xa, _0x9787xa.delegateTarget = this, !_0x9787x22.preDispatch || _0x9787x22.preDispatch.call(this, _0x9787xa) !== false) {
      _0x9787xf = _0x9787x5.event.handlers.call(this, _0x9787xa, _0x9787x2c), _0x9787x16 = 0;
      while ((_0x9787x12 = _0x9787xf[_0x9787x16++]) && !_0x9787xa.isPropagationStopped()) {
        _0x9787xa.currentTarget = _0x9787x12.elem, _0x9787xc = 0;
        while ((_0x9787x10 = _0x9787x12.handlers[_0x9787xc++]) && !_0x9787xa.isImmediatePropagationStopped()) {
          (!_0x9787xa.namespace_re || _0x9787xa.namespace_re.test(_0x9787x10.namespace)) && (_0x9787xa.handleObj = _0x9787x10, _0x9787xa.data = _0x9787x10.data, e = ((_0x9787x5.event.special[_0x9787x10.origType] || {}).handle || _0x9787x10.handler).apply(_0x9787x12.elem, _0x9787x7), void 0 !== e && (_0x9787xa.result = e) === false && (_0x9787xa.preventDefault(), _0x9787xa.stopPropagation()));
        }
      }
      ;
      return _0x9787x22.postDispatch && _0x9787x22.postDispatch.call(this, _0x9787xa), _0x9787xa.result;
    }
  }, handlers: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10 = [], _0x9787xf = _0x9787x16.delegateCount, _0x9787x7 = _0x9787xa.target;
    if (_0x9787xf && _0x9787x7.nodeType && (!_0x9787xa.button || "click" !== _0x9787xa.type)) {
      for (; _0x9787x7 !== this; _0x9787x7 = _0x9787x7.parentNode || this) {
        if (_0x9787x7.disabled !== true || "click" !== _0x9787xa.type) {
          for (_0x9787xb = [], _0x9787xc = 0; _0x9787xf > _0x9787xc; _0x9787xc++) {
            _0x9787x12 = _0x9787x16[_0x9787xc], e = _0x9787x12.selector + " ", void 0 === _0x9787xb[e] && (_0x9787xb[e] = _0x9787x12.needsContext ? _0x9787x5(e, this).index(_0x9787x7) >= 0 : _0x9787x5.find(e, this, null, [_0x9787x7]).length), _0x9787xb[e] && _0x9787xb.push(_0x9787x12);
          }
          ;
          _0x9787xb.length && _0x9787x10.push({elem: _0x9787x7, handlers: _0x9787xb});
        }
      }
    }
    ;
    return _0x9787xf < _0x9787x16.length && _0x9787x10.push({elem: this, handlers: _0x9787x16.slice(_0x9787xf)}), _0x9787x10;
  }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (_0x9787xa, _0x9787x16) {
    return null == _0x9787xa.which && (_0x9787xa.which = null != _0x9787x16.charCode ? _0x9787x16.charCode : _0x9787x16.keyCode), _0x9787xa;
  }}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb, e, _0x9787x12 = _0x9787x16.button;
    return null == _0x9787xa.pageX && null != _0x9787x16.clientX && (_0x9787xc = _0x9787xa.target.ownerDocument || _0x9787xd, _0x9787xb = _0x9787xc.documentElement, e = _0x9787xc.body, _0x9787xa.pageX = _0x9787x16.clientX + (_0x9787xb && _0x9787xb.scrollLeft || e && e.scrollLeft || 0) - (_0x9787xb && _0x9787xb.clientLeft || e && e.clientLeft || 0), _0x9787xa.pageY = _0x9787x16.clientY + (_0x9787xb && _0x9787xb.scrollTop || e && e.scrollTop || 0) - (_0x9787xb && _0x9787xb.clientTop || e && e.clientTop || 0)), _0x9787xa.which || void 0 === _0x9787x12 || (_0x9787xa.which = 1 & _0x9787x12 ? 1 : 2 & _0x9787x12 ? 3 : 4 & _0x9787x12 ? 2 : 0), _0x9787xa;
  }}, fix: function (_0x9787xa) {
    if (_0x9787xa[_0x9787x5.expando]) {
      return _0x9787xa;
    }
    ;
    var _0x9787x16, _0x9787xc, _0x9787xb, e = _0x9787xa.type, _0x9787x12 = _0x9787xa, _0x9787x10 = this.fixHooks[e];
    _0x9787x10 || (this.fixHooks[e] = _0x9787x10 = _0x9787x34.test(e) ? this.mouseHooks : _0x9787x33.test(e) ? this.keyHooks : {}), _0x9787xb = _0x9787x10.props ? this.props.concat(_0x9787x10.props) : this.props, _0x9787xa = new _0x9787x5.Event(_0x9787x12), _0x9787x16 = _0x9787xb.length;
    while (_0x9787x16--) {
      _0x9787xc = _0x9787xb[_0x9787x16], _0x9787xa[_0x9787xc] = _0x9787x12[_0x9787xc];
    }
    ;
    return _0x9787xa.target || (_0x9787xa.target = _0x9787xd), 3 === _0x9787xa.target.nodeType && (_0x9787xa.target = _0x9787xa.target.parentNode), _0x9787x10.filter ? _0x9787x10.filter(_0x9787xa, _0x9787x12) : _0x9787xa;
  }, special: {load: {noBubble: true}, focus: {trigger: function () {
    return this !== _0x9787x17() && this.focus ? (this.focus(), false) : void 0;
  }, delegateType: "focusin"}, blur: {trigger: function () {
    return this === _0x9787x17() && this.blur ? (this.blur(), false) : void 0;
  }, delegateType: "focusout"}, click: {trigger: function () {
    return "checkbox" === this.type && this.click && _0x9787x5.nodeName(this, "input") ? (this.click(), false) : void 0;
  }, _default: function (_0x9787xa) {
    return _0x9787x5.nodeName(_0x9787xa.target, "a");
  }}, beforeunload: {postDispatch: function (_0x9787xa) {
    void 0 !== _0x9787xa.result && _0x9787xa.originalEvent && (_0x9787xa.originalEvent.returnValue = _0x9787xa.result);
  }}}, simulate: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    var e = _0x9787x5.extend(new _0x9787x5.Event, _0x9787xc, {type: _0x9787xa, isSimulated: true, originalEvent: {}});
    _0x9787xb ? _0x9787x5.event.trigger(e, null, _0x9787x16) : _0x9787x5.event.dispatch.call(_0x9787x16, e), e.isDefaultPrevented() && _0x9787xc.preventDefault();
  }}, _0x9787x5.removeEvent = function (_0x9787xa, _0x9787x16, _0x9787xc) {
    _0x9787xa.removeEventListener && _0x9787xa.removeEventListener(_0x9787x16, _0x9787xc, false);
  }, _0x9787x5.Event = function (_0x9787xa, _0x9787x16) {
    return this instanceof _0x9787x5.Event ? (_0x9787xa && _0x9787xa.type ? (this.originalEvent = _0x9787xa, this.type = _0x9787xa.type, this.isDefaultPrevented = _0x9787xa.defaultPrevented || void 0 === _0x9787xa.defaultPrevented && _0x9787xa.returnValue === false ? _0x9787x46 : _0x9787x37) : this.type = _0x9787xa, _0x9787x16 && _0x9787x5.extend(this, _0x9787x16), this.timeStamp = _0x9787xa && _0x9787xa.timeStamp || _0x9787x5.now(), void (this[_0x9787x5.expando] = true)) : new _0x9787x5.Event(_0x9787xa, _0x9787x16);
  }, _0x9787x5.Event.prototype = {isDefaultPrevented: _0x9787x37, isPropagationStopped: _0x9787x37, isImmediatePropagationStopped: _0x9787x37, preventDefault: function () {
    var _0x9787xa = this.originalEvent;
    this.isDefaultPrevented = _0x9787x46, _0x9787xa && _0x9787xa.preventDefault && _0x9787xa.preventDefault();
  }, stopPropagation: function () {
    var _0x9787xa = this.originalEvent;
    this.isPropagationStopped = _0x9787x46, _0x9787xa && _0x9787xa.stopPropagation && _0x9787xa.stopPropagation();
  }, stopImmediatePropagation: function () {
    var _0x9787xa = this.originalEvent;
    this.isImmediatePropagationStopped = _0x9787x46, _0x9787xa && _0x9787xa.stopImmediatePropagation && _0x9787xa.stopImmediatePropagation(), this.stopPropagation();
  }}, _0x9787x5.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (_0x9787xa, _0x9787x16) {
    _0x9787x5.event.special[_0x9787xa] = {delegateType: _0x9787x16, bindType: _0x9787x16, handle: function (_0x9787xa) {
      var _0x9787xc, _0x9787xb = this, e = _0x9787xa.relatedTarget, _0x9787x12 = _0x9787xa.handleObj;
      return (!e || e !== _0x9787xb && !_0x9787x5.contains(_0x9787xb, e)) && (_0x9787xa.type = _0x9787x12.origType, _0x9787xc = _0x9787x12.handler.apply(this, arguments), _0x9787xa.type = _0x9787x16), _0x9787xc;
    }};
  }), _0x9787x22.focusinBubbles || _0x9787x5.each({focus: "focusin", blur: "focusout"}, function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = function (_0x9787xa) {
      _0x9787x5.event.simulate(_0x9787x16, _0x9787xa.target, _0x9787x5.event.fix(_0x9787xa), true);
    };
    _0x9787x5.event.special[_0x9787x16] = {setup: function () {
      var _0x9787xb = this.ownerDocument || this, e = _0x9787x23.access(_0x9787xb, _0x9787x16);
      e || _0x9787xb.addEventListener(_0x9787xa, _0x9787xc, true), _0x9787x23.access(_0x9787xb, _0x9787x16, (e || 0) + 1);
    }, teardown: function () {
      var _0x9787xb = this.ownerDocument || this, e = _0x9787x23.access(_0x9787xb, _0x9787x16) - 1;
      e ? _0x9787x23.access(_0x9787xb, _0x9787x16, e) : (_0x9787xb.removeEventListener(_0x9787xa, _0x9787xc, true), _0x9787x23.remove(_0x9787xb, _0x9787x16));
    }};
  }), _0x9787x5.fn.extend({on: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e) {
    var _0x9787x12, _0x9787x10;
    if ("object" == typeof _0x9787xa) {
      "string" != typeof _0x9787x16 && (_0x9787xc = _0x9787xc || _0x9787x16, _0x9787x16 = void 0);
      for (_0x9787x10 in _0x9787xa) {
        this.on(_0x9787x10, _0x9787x16, _0x9787xc, _0x9787xa[_0x9787x10], e);
      }
      ;
      return this;
    }
    ;
    if (null == _0x9787xc && null == _0x9787xb ? (_0x9787xb = _0x9787x16, _0x9787xc = _0x9787x16 = void 0) : null == _0x9787xb && ("string" == typeof _0x9787x16 ? (_0x9787xb = _0x9787xc, _0x9787xc = void 0) : (_0x9787xb = _0x9787xc, _0x9787xc = _0x9787x16, _0x9787x16 = void 0)), _0x9787xb === false) {
      _0x9787xb = _0x9787x37;
    } else {
      if (!_0x9787xb) {
        return this;
      }
    }
    ;
    return 1 === e && (_0x9787x12 = _0x9787xb, _0x9787xb = function (_0x9787xa) {
      return _0x9787x5().off(_0x9787xa), _0x9787x12.apply(this, arguments);
    }, _0x9787xb.guid = _0x9787x12.guid || (_0x9787x12.guid = _0x9787x5.guid++)), this.each(function () {
      _0x9787x5.event.add(this, _0x9787xa, _0x9787xb, _0x9787xc, _0x9787x16);
    });
  }, one: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    return this.on(_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, 1);
  }, off: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e;
    if (_0x9787xa && _0x9787xa.preventDefault && _0x9787xa.handleObj) {
      return _0x9787xb = _0x9787xa.handleObj, _0x9787x5(_0x9787xa.delegateTarget).off(_0x9787xb.namespace ? _0x9787xb.origType + "." + _0x9787xb.namespace : _0x9787xb.origType, _0x9787xb.selector, _0x9787xb.handler), this;
    }
    ;
    if ("object" == typeof _0x9787xa) {
      for (e in _0x9787xa) {
        this.off(e, _0x9787x16, _0x9787xa[e]);
      }
      ;
      return this;
    }
    ;
    return (_0x9787x16 === false || "function" == typeof _0x9787x16) && (_0x9787xc = _0x9787x16, _0x9787x16 = void 0), _0x9787xc === false && (_0x9787xc = _0x9787x37), this.each(function () {
      _0x9787x5.event.remove(this, _0x9787xa, _0x9787xc, _0x9787x16);
    });
  }, trigger: function (_0x9787xa, _0x9787x16) {
    return this.each(function () {
      _0x9787x5.event.trigger(_0x9787xa, _0x9787x16, this);
    });
  }, triggerHandler: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = this[0];
    return _0x9787xc ? _0x9787x5.event.trigger(_0x9787xa, _0x9787x16, _0x9787xc, true) : void 0;
  }});
  var _0x9787x47 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, _0x9787x48 = /<([\w:]+)/, _0x9787x49 = /<|&#?\w+;/, _0x9787x4a = /<(?:script|style|link)/i, _0x9787x5e = /checked\s*(?:[^=]|=\s*.checked.)/i, _0x9787x4b = /^$|\/(?:java|ecma)script/i, _0x9787x4c = /^true\/(.*)/, _0x9787x4d = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, _0x9787x4e = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
  _0x9787x4e.optgroup = _0x9787x4e.option, _0x9787x4e.tbody = _0x9787x4e.tfoot = _0x9787x4e.colgroup = _0x9787x4e.caption = _0x9787x4e.thead, _0x9787x4e.th = _0x9787x4e.td;
  function _0x9787x4f(_0x9787xa, _0x9787x16) {
    return _0x9787x5.nodeName(_0x9787xa, "table") && _0x9787x5.nodeName(11 !== _0x9787x16.nodeType ? _0x9787x16 : _0x9787x16.firstChild, "tr") ? _0x9787xa.getElementsByTagName("tbody")[0] || _0x9787xa.appendChild(_0x9787xa.ownerDocument.createElement("tbody")) : _0x9787xa;
  }
  function _0x9787x51(_0x9787xa) {
    var _0x9787x16 = _0x9787x4c.exec(_0x9787xa.type);
    return _0x9787x16 ? _0x9787xa.type = _0x9787x16[1] : _0x9787xa.removeAttribute("type"), _0x9787xa;
  }
  function _0x9787x52(_0x9787xa, _0x9787x16) {
    for (var _0x9787xc = 0, _0x9787xb = _0x9787xa.length; _0x9787xb > _0x9787xc; _0x9787xc++) {
      _0x9787x23.set(_0x9787xa[_0x9787xc], "globalEval", !_0x9787x16 || _0x9787x23.get(_0x9787x16[_0x9787xc], "globalEval"));
    }
  }
  function _0x9787x53(_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c;
    if (1 === _0x9787x16.nodeType) {
      if (_0x9787x23.hasData(_0x9787xa) && (_0x9787x12 = _0x9787x23.access(_0x9787xa), _0x9787x10 = _0x9787x23.set(_0x9787x16, _0x9787x12), _0x9787x2c = _0x9787x12.events)) {
        delete _0x9787x10.handle, _0x9787x10.events = {};
        for (e in _0x9787x2c) {
          for (_0x9787xc = 0, _0x9787xb = _0x9787x2c[e].length; _0x9787xb > _0x9787xc; _0x9787xc++) {
            _0x9787x5.event.add(_0x9787x16, e, _0x9787x2c[e][_0x9787xc]);
          }
        }
      }
      ;
      _0x9787x27.hasData(_0x9787xa) && (_0x9787xf = _0x9787x27.access(_0x9787xa), _0x9787x7 = _0x9787x5.extend({}, _0x9787xf), _0x9787x27.set(_0x9787x16, _0x9787x7));
    }
  }
  function _0x9787x54(_0x9787xa, _0x9787x16) {
    var _0x9787xc = _0x9787xa.getElementsByTagName ? _0x9787xa.getElementsByTagName(_0x9787x16 || "*") : _0x9787xa.querySelectorAll ? _0x9787xa.querySelectorAll(_0x9787x16 || "*") : [];
    return void 0 === _0x9787x16 || _0x9787x16 && _0x9787x5.nodeName(_0x9787xa, _0x9787x16) ? _0x9787x5.merge([_0x9787xa], _0x9787xc) : _0x9787xc;
  }
  function _0x9787x55(_0x9787xa, _0x9787x16) {
    var _0x9787xc = _0x9787x16.nodeName.toLowerCase();
    "input" === _0x9787xc && _0x9787x1c.test(_0x9787xa.type) ? _0x9787x16.checked = _0x9787xa.checked : ("input" === _0x9787xc || "textarea" === _0x9787xc) && (_0x9787x16.defaultValue = _0x9787xa.defaultValue);
  }
  _0x9787x5.extend({clone: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf = _0x9787xa.cloneNode(true), _0x9787x7 = _0x9787x5.contains(_0x9787xa.ownerDocument, _0x9787xa);
    if (!(_0x9787x22.noCloneChecked || 1 !== _0x9787xa.nodeType && 11 !== _0x9787xa.nodeType || _0x9787x5.isXMLDoc(_0x9787xa))) {
      for (_0x9787x10 = _0x9787x54(_0x9787xf), _0x9787x12 = _0x9787x54(_0x9787xa), _0x9787xb = 0, e = _0x9787x12.length; e > _0x9787xb; _0x9787xb++) {
        _0x9787x55(_0x9787x12[_0x9787xb], _0x9787x10[_0x9787xb]);
      }
    }
    ;
    if (_0x9787x16) {
      if (_0x9787xc) {
        for (_0x9787x12 = _0x9787x12 || _0x9787x54(_0x9787xa), _0x9787x10 = _0x9787x10 || _0x9787x54(_0x9787xf), _0x9787xb = 0, e = _0x9787x12.length; e > _0x9787xb; _0x9787xb++) {
          _0x9787x53(_0x9787x12[_0x9787xb], _0x9787x10[_0x9787xb]);
        }
      } else {
        _0x9787x53(_0x9787xa, _0x9787xf);
      }
    }
    ;
    return _0x9787x10 = _0x9787x54(_0x9787xf, "script"), _0x9787x10.length > 0 && _0x9787x52(_0x9787x10, !_0x9787x7 && _0x9787x54(_0x9787xa, "script")), _0x9787xf;
  }, buildFragment: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    for (var e, _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c, _0x9787x22 = _0x9787x16.createDocumentFragment(), _0x9787xd = [], _0x9787x13 = 0, _0x9787x6 = _0x9787xa.length; _0x9787x6 > _0x9787x13; _0x9787x13++) {
      if (e = _0x9787xa[_0x9787x13], e || 0 === e) {
        if ("object" === _0x9787x5.type(e)) {
          _0x9787x5.merge(_0x9787xd, e.nodeType ? [e] : e);
        } else {
          if (_0x9787x49.test(e)) {
            _0x9787x12 = _0x9787x12 || _0x9787x22.appendChild(_0x9787x16.createElement("div")), _0x9787x10 = (_0x9787x48.exec(e) || ["", ""])[1].toLowerCase(), _0x9787xf = _0x9787x4e[_0x9787x10] || _0x9787x4e._default, _0x9787x12.innerHTML = _0x9787xf[1] + e.replace(_0x9787x47, "<$1></$2>") + _0x9787xf[2], _0x9787x2c = _0x9787xf[0];
            while (_0x9787x2c--) {
              _0x9787x12 = _0x9787x12.lastChild;
            }
            ;
            _0x9787x5.merge(_0x9787xd, _0x9787x12.childNodes), _0x9787x12 = _0x9787x22.firstChild, _0x9787x12.textContent = "";
          } else {
            _0x9787xd.push(_0x9787x16.createTextNode(e));
          }
        }
      }
    }
    ;
    _0x9787x22.textContent = "", _0x9787x13 = 0;
    while (e = _0x9787xd[_0x9787x13++]) {
      if ((!_0x9787xb || -1 === _0x9787x5.inArray(e, _0x9787xb)) && (_0x9787x7 = _0x9787x5.contains(e.ownerDocument, e), _0x9787x12 = _0x9787x54(_0x9787x22.appendChild(e), "script"), _0x9787x7 && _0x9787x52(_0x9787x12), _0x9787xc)) {
        _0x9787x2c = 0;
        while (e = _0x9787x12[_0x9787x2c++]) {
          _0x9787x4b.test(e.type || "") && _0x9787xc.push(e);
        }
      }
    }
    ;
    return _0x9787x22;
  }, cleanData: function (_0x9787xa) {
    for (var _0x9787x16, _0x9787xc, _0x9787xb, e, _0x9787x12 = _0x9787x5.event.special, _0x9787x10 = 0; void 0 !== (_0x9787xc = _0x9787xa[_0x9787x10]); _0x9787x10++) {
      if (_0x9787x5.acceptData(_0x9787xc) && (e = _0x9787xc[_0x9787x23.expando], e && (_0x9787x16 = _0x9787x23.cache[e]))) {
        if (_0x9787x16.events) {
          for (_0x9787xb in _0x9787x16.events) {
            _0x9787x12[_0x9787xb] ? _0x9787x5.event.remove(_0x9787xc, _0x9787xb) : _0x9787x5.removeEvent(_0x9787xc, _0x9787xb, _0x9787x16.handle);
          }
        }
        ;
        _0x9787x23.cache[e] && delete _0x9787x23.cache[e];
      }
      ;
      delete _0x9787x27.cache[_0x9787xc[_0x9787x27.expando]];
    }
  }}), _0x9787x5.fn.extend({text: function (_0x9787xa) {
    return _0x9787x36(this, function (_0x9787xa) {
      return void 0 === _0x9787xa ? _0x9787x5.text(this) : this.empty().each(function () {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = _0x9787xa);
      });
    }, null, _0x9787xa, arguments.length);
  }, append: function () {
    return this.domManip(arguments, function (_0x9787xa) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var _0x9787x16 = _0x9787x4f(this, _0x9787xa);
        _0x9787x16.appendChild(_0x9787xa);
      }
    });
  }, prepend: function () {
    return this.domManip(arguments, function (_0x9787xa) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var _0x9787x16 = _0x9787x4f(this, _0x9787xa);
        _0x9787x16.insertBefore(_0x9787xa, _0x9787x16.firstChild);
      }
    });
  }, before: function () {
    return this.domManip(arguments, function (_0x9787xa) {
      this.parentNode && this.parentNode.insertBefore(_0x9787xa, this);
    });
  }, after: function () {
    return this.domManip(arguments, function (_0x9787xa) {
      this.parentNode && this.parentNode.insertBefore(_0x9787xa, this.nextSibling);
    });
  }, remove: function (_0x9787xa, _0x9787x16) {
    for (var _0x9787xc, _0x9787xb = _0x9787xa ? _0x9787x5.filter(_0x9787xa, this) : this, e = 0; null != (_0x9787xc = _0x9787xb[e]); e++) {
      _0x9787x16 || 1 !== _0x9787xc.nodeType || _0x9787x5.cleanData(_0x9787x54(_0x9787xc)), _0x9787xc.parentNode && (_0x9787x16 && _0x9787x5.contains(_0x9787xc.ownerDocument, _0x9787xc) && _0x9787x52(_0x9787x54(_0x9787xc, "script")), _0x9787xc.parentNode.removeChild(_0x9787xc));
    }
    ;
    return this;
  }, empty: function () {
    for (var _0x9787xa, _0x9787x16 = 0; null != (_0x9787xa = this[_0x9787x16]); _0x9787x16++) {
      1 === _0x9787xa.nodeType && (_0x9787x5.cleanData(_0x9787x54(_0x9787xa, false)), _0x9787xa.textContent = "");
    }
    ;
    return this;
  }, clone: function (_0x9787xa, _0x9787x16) {
    return _0x9787xa = null == _0x9787xa ? false : _0x9787xa, _0x9787x16 = null == _0x9787x16 ? _0x9787xa : _0x9787x16, this.map(function () {
      return _0x9787x5.clone(this, _0x9787xa, _0x9787x16);
    });
  }, html: function (_0x9787xa) {
    return _0x9787x36(this, function (_0x9787xa) {
      var _0x9787x16 = this[0] || {}, _0x9787xc = 0, _0x9787xb = this.length;
      if (void 0 === _0x9787xa && 1 === _0x9787x16.nodeType) {
        return _0x9787x16.innerHTML;
      }
      ;
      if ("string" == typeof _0x9787xa && !_0x9787x4a.test(_0x9787xa) && !_0x9787x4e[(_0x9787x48.exec(_0x9787xa) || ["", ""])[1].toLowerCase()]) {
        _0x9787xa = _0x9787xa.replace(_0x9787x47, "<$1></$2>");
        try {
          for (; _0x9787xb > _0x9787xc; _0x9787xc++) {
            _0x9787x16 = this[_0x9787xc] || {}, 1 === _0x9787x16.nodeType && (_0x9787x5.cleanData(_0x9787x54(_0x9787x16, false)), _0x9787x16.innerHTML = _0x9787xa);
          }
          ;
          _0x9787x16 = 0;
        } catch (e) {}
      }
      ;
      _0x9787x16 && this.empty().append(_0x9787xa);
    }, null, _0x9787xa, arguments.length);
  }, replaceWith: function () {
    var _0x9787xa = arguments[0];
    return this.domManip(arguments, function (_0x9787x16) {
      _0x9787xa = this.parentNode, _0x9787x5.cleanData(_0x9787x54(this)), _0x9787xa && _0x9787xa.replaceChild(_0x9787x16, this);
    }), _0x9787xa && (_0x9787xa.length || _0x9787xa.nodeType) ? this : this.remove();
  }, detach: function (_0x9787xa) {
    return this.remove(_0x9787xa, true);
  }, domManip: function (_0x9787xa, _0x9787x16) {
    _0x9787xa = e.apply([], _0x9787xa);
    var _0x9787xc, _0x9787xb, _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c = 0, _0x9787xd = this.length, _0x9787x13 = this, _0x9787x6 = _0x9787xd - 1, _0x9787x11 = _0x9787xa[0], _0x9787x2f = _0x9787x5.isFunction(_0x9787x11);
    if (_0x9787x2f || _0x9787xd > 1 && "string" == typeof _0x9787x11 && !_0x9787x22.checkClone && _0x9787x5e.test(_0x9787x11)) {
      return this.each(function (_0x9787xc) {
        var _0x9787xb = _0x9787x13.eq(_0x9787xc);
        _0x9787x2f && (_0x9787xa[0] = _0x9787x11.call(this, _0x9787xc, _0x9787xb.html())), _0x9787xb.domManip(_0x9787xa, _0x9787x16);
      });
    }
    ;
    if (_0x9787xd && (_0x9787xc = _0x9787x5.buildFragment(_0x9787xa, this[0].ownerDocument, false, this), _0x9787xb = _0x9787xc.firstChild, 1 === _0x9787xc.childNodes.length && (_0x9787xc = _0x9787xb), _0x9787xb)) {
      for (_0x9787x12 = _0x9787x5.map(_0x9787x54(_0x9787xc, "script"), _0x9787x50), _0x9787x10 = _0x9787x12.length; _0x9787xd > _0x9787x2c; _0x9787x2c++) {
        _0x9787xf = _0x9787xc, _0x9787x2c !== _0x9787x6 && (_0x9787xf = _0x9787x5.clone(_0x9787xf, true, true), _0x9787x10 && _0x9787x5.merge(_0x9787x12, _0x9787x54(_0x9787xf, "script"))), _0x9787x16.call(this[_0x9787x2c], _0x9787xf, _0x9787x2c);
      }
      ;
      if (_0x9787x10) {
        for (_0x9787x7 = _0x9787x12[_0x9787x12.length - 1].ownerDocument, _0x9787x5.map(_0x9787x12, _0x9787x51), _0x9787x2c = 0; _0x9787x10 > _0x9787x2c; _0x9787x2c++) {
          _0x9787xf = _0x9787x12[_0x9787x2c], _0x9787x4b.test(_0x9787xf.type || "") && !_0x9787x23.access(_0x9787xf, "globalEval") && _0x9787x5.contains(_0x9787x7, _0x9787xf) && (_0x9787xf.src ? _0x9787x5._evalUrl && _0x9787x5._evalUrl(_0x9787xf.src) : _0x9787x5.globalEval(_0x9787xf.textContent.replace(_0x9787x4d, "")));
        }
      }
    }
    ;
    return this;
  }}), _0x9787x5.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (_0x9787xa, _0x9787x16) {
    _0x9787x5.fn[_0x9787xa] = function (_0x9787xa) {
      for (var _0x9787xc, _0x9787xb = [], e = _0x9787x5(_0x9787xa), _0x9787x10 = e.length - 1, _0x9787xf = 0; _0x9787x10 >= _0x9787xf; _0x9787xf++) {
        _0x9787xc = _0x9787xf === _0x9787x10 ? this : this.clone(true), _0x9787x5(e[_0x9787xf])[_0x9787x16](_0x9787xc), _0x9787x12.apply(_0x9787xb, _0x9787xc.get());
      }
      ;
      return this.pushStack(_0x9787xb);
    };
  });
  var _0x9787x56, _0x9787x57 = {};
  function _0x9787x58(_0x9787x16, _0x9787xc) {
    var _0x9787xb, e = _0x9787x5(_0x9787xc.createElement(_0x9787x16)).appendTo(_0x9787xc.body), _0x9787x12 = _0x9787xa.getDefaultComputedStyle && (_0x9787xb = _0x9787xa.getDefaultComputedStyle(e[0])) ? _0x9787xb.display : _0x9787x5.css(e[0], "display");
    return e.detach(), _0x9787x12;
  }
  function _0x9787x59(_0x9787xa) {
    var _0x9787x16 = _0x9787xd, _0x9787xc = _0x9787x57[_0x9787xa];
    return _0x9787xc || (_0x9787xc = _0x9787x58(_0x9787xa, _0x9787x16), "none" !== _0x9787xc && _0x9787xc || (_0x9787x56 = (_0x9787x56 || _0x9787x5("<iframe frameborder='0' width='0' height='0'/>")).appendTo(_0x9787x16.documentElement), _0x9787x16 = _0x9787x56[0].contentDocument, _0x9787x16.write(), _0x9787x16.close(), _0x9787xc = _0x9787x58(_0x9787xa, _0x9787x16), _0x9787x56.detach()), _0x9787x57[_0x9787xa] = _0x9787xc), _0x9787xc;
  }
  var _0x9787x5a = /^margin/, _0x9787x5b = new RegExp("^(" + _0x9787x32 + ")(?!px)[a-z%]+$", "i");
  function _0x9787x5d(_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf = _0x9787xa.style;
    return _0x9787xc = _0x9787xc || _0x9787xa.ownerDocument.defaultView.getComputedStyle(_0x9787xa, null), _0x9787xc && (_0x9787x10 = _0x9787xc.getPropertyValue(_0x9787x16) || _0x9787xc[_0x9787x16]), _0x9787xc && ("" !== _0x9787x10 || _0x9787x5.contains(_0x9787xa.ownerDocument, _0x9787xa) || (_0x9787x10 = _0x9787x5.style(_0x9787xa, _0x9787x16)), _0x9787x5b.test(_0x9787x10) && _0x9787x5a.test(_0x9787x16) && (_0x9787xb = _0x9787xf.width, e = _0x9787xf.minWidth, _0x9787x12 = _0x9787xf.maxWidth, _0x9787xf.minWidth = _0x9787xf.maxWidth = _0x9787xf.width = _0x9787x10, _0x9787x10 = _0x9787xc.width, _0x9787xf.width = _0x9787xb, _0x9787xf.minWidth = e, _0x9787xf.maxWidth = _0x9787x12)), void 0 !== _0x9787x10 ? _0x9787x10 + "" : _0x9787x10;
  }
  function _0x9787x5f(_0x9787xa, _0x9787x16) {
    return {get: function () {
      return _0x9787xa() ? void delete this.get : (this.get = _0x9787x16).apply(this, arguments);
    }};
  }
  !function () {
    var _0x9787x16, _0x9787xc, _0x9787xb = _0x9787xd.documentElement, e = _0x9787xd.createElement("div"), _0x9787x12 = _0x9787xd.createElement("div");
    if (_0x9787x12.style) {
      _0x9787x12.style.backgroundClip = "content-box", _0x9787x12.cloneNode(true).style.backgroundClip = "", _0x9787x22.clearCloneStyle = "content-box" === _0x9787x12.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(_0x9787x12);
      function _0x9787x10() {
        _0x9787x12.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", _0x9787x12.innerHTML = "", _0x9787xb.appendChild(e);
        var _0x9787x10 = _0x9787xa.getComputedStyle(_0x9787x12, null);
        _0x9787x16 = "1%" !== _0x9787x10.top, _0x9787xc = "4px" === _0x9787x10.width, _0x9787xb.removeChild(e);
      }
      _0x9787xa.getComputedStyle && _0x9787x5.extend(_0x9787x22, {pixelPosition: function () {
        return _0x9787x10(), _0x9787x16;
      }, boxSizingReliable: function () {
        return null == _0x9787xc && _0x9787x10(), _0x9787xc;
      }, reliableMarginRight: function () {
        var _0x9787x16, _0x9787xc = _0x9787x12.appendChild(_0x9787xd.createElement("div"));
        return _0x9787xc.style.cssText = _0x9787x12.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", _0x9787xc.style.marginRight = _0x9787xc.style.width = "0", _0x9787x12.style.width = "1px", _0x9787xb.appendChild(e), _0x9787x16 = !parseFloat(_0x9787xa.getComputedStyle(_0x9787xc, null).marginRight), _0x9787xb.removeChild(e), _0x9787x16;
      }});
    }
  }(), _0x9787x5.swap = function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    var e, _0x9787x12, _0x9787x10 = {};
    for (_0x9787x12 in _0x9787x16) {
      _0x9787x10[_0x9787x12] = _0x9787xa.style[_0x9787x12], _0x9787xa.style[_0x9787x12] = _0x9787x16[_0x9787x12];
    }
    ;
    e = _0x9787xc.apply(_0x9787xa, _0x9787xb || []);
    for (_0x9787x12 in _0x9787x16) {
      _0x9787xa.style[_0x9787x12] = _0x9787x10[_0x9787x12];
    }
    ;
    return e;
  };
  var _0x9787x60 = /^(none|table(?!-c[ea]).+)/, _0x9787x61 = new RegExp("^(" + _0x9787x32 + ")(.*)$", "i"), _0x9787x62 = new RegExp("^([+-])=(" + _0x9787x32 + ")", "i"), _0x9787x63 = {position: "absolute", visibility: "hidden", display: "block"}, _0x9787x64 = {letterSpacing: "0", fontWeight: "400"}, _0x9787x65 = ["Webkit", "O", "Moz", "ms"];
  function _0x9787x66(_0x9787xa, _0x9787x16) {
    if (_0x9787x16 in _0x9787xa) {
      return _0x9787x16;
    }
    ;
    var _0x9787xc = _0x9787x16[0].toUpperCase() + _0x9787x16.slice(1), _0x9787xb = _0x9787x16, e = _0x9787x65.length;
    while (e--) {
      if (_0x9787x16 = _0x9787x65[e] + _0x9787xc, _0x9787x16 in _0x9787xa) {
        return _0x9787x16;
      }
    }
    ;
    return _0x9787xb;
  }
  function _0x9787x67(_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb = _0x9787x61.exec(_0x9787x16);
    return _0x9787xb ? Math.max(0, _0x9787xb[1] - (_0x9787xc || 0)) + (_0x9787xb[2] || "px") : _0x9787x16;
  }
  function _0x9787x68(_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e) {
    for (var _0x9787x12 = _0x9787xc === (_0x9787xb ? "border" : "content") ? 4 : "width" === _0x9787x16 ? 1 : 0, _0x9787x10 = 0; 4 > _0x9787x12; _0x9787x12 += 2) {
      "margin" === _0x9787xc && (_0x9787x10 += _0x9787x5.css(_0x9787xa, _0x9787xc + _0x9787x1e[_0x9787x12], true, e)), _0x9787xb ? ("content" === _0x9787xc && (_0x9787x10 -= _0x9787x5.css(_0x9787xa, "padding" + _0x9787x1e[_0x9787x12], true, e)), "margin" !== _0x9787xc && (_0x9787x10 -= _0x9787x5.css(_0x9787xa, "border" + _0x9787x1e[_0x9787x12] + "Width", true, e))) : (_0x9787x10 += _0x9787x5.css(_0x9787xa, "padding" + _0x9787x1e[_0x9787x12], true, e), "padding" !== _0x9787xc && (_0x9787x10 += _0x9787x5.css(_0x9787xa, "border" + _0x9787x1e[_0x9787x12] + "Width", true, e)));
    }
    ;
    return _0x9787x10;
  }
  function _0x9787x69(_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb = true, e = "width" === _0x9787x16 ? _0x9787xa.offsetWidth : _0x9787xa.offsetHeight, _0x9787x12 = _0x9787xa.ownerDocument.defaultView.getComputedStyle(_0x9787xa, null), _0x9787x10 = "border-box" === _0x9787x5.css(_0x9787xa, "boxSizing", false, _0x9787x12);
    if (0 >= e || null == e) {
      if (e = _0x9787x5d(_0x9787xa, _0x9787x16, _0x9787x12), (0 > e || null == e) && (e = _0x9787xa.style[_0x9787x16]), _0x9787x5b.test(e)) {
        return e;
      }
      ;
      _0x9787xb = _0x9787x10 && (_0x9787x22.boxSizingReliable() || e === _0x9787xa.style[_0x9787x16]), e = parseFloat(e) || 0;
    }
    ;
    return e + _0x9787x68(_0x9787xa, _0x9787x16, _0x9787xc || (_0x9787x10 ? "border" : "content"), _0x9787xb, _0x9787x12) + "px";
  }
  function _0x9787x6a(_0x9787xa, _0x9787x16) {
    for (var _0x9787xc, _0x9787xb, e, _0x9787x12 = [], _0x9787x10 = 0, _0x9787xf = _0x9787xa.length; _0x9787xf > _0x9787x10; _0x9787x10++) {
      _0x9787xb = _0x9787xa[_0x9787x10], _0x9787xb.style && (_0x9787x12[_0x9787x10] = _0x9787x23.get(_0x9787xb, "olddisplay"), _0x9787xc = _0x9787xb.style.display, _0x9787x16 ? (_0x9787x12[_0x9787x10] || "none" !== _0x9787xc || (_0x9787xb.style.display = ""), "" === _0x9787xb.style.display && (_0x9787xb = _0x9787x16 || _0x9787xb, "none" === _0x9787x5.css(_0x9787xb, "display") || !_0x9787x5.contains(_0x9787xb.ownerDocument, _0x9787xb)) && (_0x9787x12[_0x9787x10] = _0x9787x23.access(_0x9787xb, "olddisplay", _0x9787x59(_0x9787xb.nodeName)))) : (e = (_0x9787xb = _0x9787x16 || _0x9787xb, "none" === _0x9787x5.css(_0x9787xb, "display") || !_0x9787x5.contains(_0x9787xb.ownerDocument, _0x9787xb)), "none" === _0x9787xc && e || _0x9787x23.set(_0x9787xb, "olddisplay", e ? _0x9787xc : _0x9787x5.css(_0x9787xb, "display"))));
    }
    ;
    for (_0x9787x10 = 0; _0x9787xf > _0x9787x10; _0x9787x10++) {
      _0x9787xb = _0x9787xa[_0x9787x10], _0x9787xb.style && (_0x9787x16 && "none" !== _0x9787xb.style.display && "" !== _0x9787xb.style.display || (_0x9787xb.style.display = _0x9787x16 ? _0x9787x12[_0x9787x10] || "" : "none"));
    }
    ;
    return _0x9787xa;
  }
  _0x9787x5.extend({cssHooks: {opacity: {get: function (_0x9787xa, _0x9787x16) {
    if (_0x9787x16) {
      var _0x9787xc = _0x9787x5d(_0x9787xa, "opacity");
      return "" === _0x9787xc ? "1" : _0x9787xc;
    }
  }}}, cssNumber: {columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true}, cssProps: {float: "cssFloat"}, style: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    if (_0x9787xa && 3 !== _0x9787xa.nodeType && 8 !== _0x9787xa.nodeType && _0x9787xa.style) {
      var e, _0x9787x12, _0x9787x10, _0x9787xf = _0x9787x5.camelCase(_0x9787x16), _0x9787x7 = _0x9787xa.style;
      return _0x9787x16 = _0x9787x5.cssProps[_0x9787xf] || (_0x9787x5.cssProps[_0x9787xf] = _0x9787x66(_0x9787x7, _0x9787xf)), _0x9787x10 = _0x9787x5.cssHooks[_0x9787x16] || _0x9787x5.cssHooks[_0x9787xf], void 0 === _0x9787xc ? _0x9787x10 && "get" in _0x9787x10 && void 0 !== (e = _0x9787x10.get(_0x9787xa, false, _0x9787xb)) ? e : _0x9787x7[_0x9787x16] : (_0x9787x12 = typeof _0x9787xc, "string" === _0x9787x12 && (e = _0x9787x62.exec(_0x9787xc)) && (_0x9787xc = (e[1] + 1) * e[2] + parseFloat(_0x9787x5.css(_0x9787xa, _0x9787x16)), _0x9787x12 = "number"), null != _0x9787xc && _0x9787xc === _0x9787xc && ("number" !== _0x9787x12 || _0x9787x5.cssNumber[_0x9787xf] || (_0x9787xc += "px"), _0x9787x22.clearCloneStyle || "" !== _0x9787xc || 0 !== _0x9787x16.indexOf("background") || (_0x9787x7[_0x9787x16] = "inherit"), _0x9787x10 && "set" in _0x9787x10 && void 0 === (_0x9787xc = _0x9787x10.set(_0x9787xa, _0x9787xc, _0x9787xb)) || (_0x9787x7[_0x9787x16] = _0x9787xc)), void 0);
    }
  }, css: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    var e, _0x9787x12, _0x9787x10, _0x9787xf = _0x9787x5.camelCase(_0x9787x16);
    return _0x9787x16 = _0x9787x5.cssProps[_0x9787xf] || (_0x9787x5.cssProps[_0x9787xf] = _0x9787x66(_0x9787xa.style, _0x9787xf)), _0x9787x10 = _0x9787x5.cssHooks[_0x9787x16] || _0x9787x5.cssHooks[_0x9787xf], _0x9787x10 && "get" in _0x9787x10 && (e = _0x9787x10.get(_0x9787xa, true, _0x9787xc)), void 0 === e && (e = _0x9787x5d(_0x9787xa, _0x9787x16, _0x9787xb)), "normal" === e && _0x9787x16 in _0x9787x64 && (e = _0x9787x64[_0x9787x16]), "" === _0x9787xc || _0x9787xc ? (_0x9787x12 = parseFloat(e), _0x9787xc === true || _0x9787x5.isNumeric(_0x9787x12) ? _0x9787x12 || 0 : e) : e;
  }}), _0x9787x5.each(["height", "width"], function (_0x9787xa, _0x9787x16) {
    _0x9787x5.cssHooks[_0x9787x16] = {get: function (_0x9787xa, _0x9787xc, _0x9787xb) {
      return _0x9787xc ? _0x9787x60.test(_0x9787x5.css(_0x9787xa, "display")) && 0 === _0x9787xa.offsetWidth ? _0x9787x5.swap(_0x9787xa, _0x9787x63, function () {
        return _0x9787x69(_0x9787xa, _0x9787x16, _0x9787xb);
      }) : _0x9787x69(_0x9787xa, _0x9787x16, _0x9787xb) : void 0;
    }, set: function (_0x9787xa, _0x9787xc, _0x9787xb) {
      var e = _0x9787xb && _0x9787xa.ownerDocument.defaultView.getComputedStyle(_0x9787xa, null);
      return _0x9787x67(_0x9787xa, _0x9787xc, _0x9787xb ? _0x9787x68(_0x9787xa, _0x9787x16, _0x9787xb, "border-box" === _0x9787x5.css(_0x9787xa, "boxSizing", false, e), e) : 0);
    }};
  }), _0x9787x5.cssHooks.marginRight = _0x9787x5f(_0x9787x22.reliableMarginRight, function (_0x9787xa, _0x9787x16) {
    return _0x9787x16 ? _0x9787x5.swap(_0x9787xa, {display: "inline-block"}, _0x9787x5d, [_0x9787xa, "marginRight"]) : void 0;
  }), _0x9787x5.each({margin: "", padding: "", border: "Width"}, function (_0x9787xa, _0x9787x16) {
    _0x9787x5.cssHooks[_0x9787xa + _0x9787x16] = {expand: function (_0x9787xc) {
      for (var _0x9787xb = 0, e = {}, _0x9787x12 = "string" == typeof _0x9787xc ? _0x9787xc.split(" ") : [_0x9787xc]; 4 > _0x9787xb; _0x9787xb++) {
        e[_0x9787xa + _0x9787x1e[_0x9787xb] + _0x9787x16] = _0x9787x12[_0x9787xb] || _0x9787x12[_0x9787xb - 2] || _0x9787x12[0];
      }
      ;
      return e;
    }}, _0x9787x5a.test(_0x9787xa) || (_0x9787x5.cssHooks[_0x9787xa + _0x9787x16].set = _0x9787x67);
  }), _0x9787x5.fn.extend({css: function (_0x9787xa, _0x9787x16) {
    return _0x9787x36(this, function (_0x9787xa, _0x9787x16, _0x9787xc) {
      var _0x9787xb, e, _0x9787x12 = {}, _0x9787x10 = 0;
      if (_0x9787x5.isArray(_0x9787x16)) {
        for (_0x9787xb = _0x9787xa.ownerDocument.defaultView.getComputedStyle(_0x9787xa, null), e = _0x9787x16.length; e > _0x9787x10; _0x9787x10++) {
          _0x9787x12[_0x9787x16[_0x9787x10]] = _0x9787x5.css(_0x9787xa, _0x9787x16[_0x9787x10], false, _0x9787xb);
        }
        ;
        return _0x9787x12;
      }
      ;
      return void 0 !== _0x9787xc ? _0x9787x5.style(_0x9787xa, _0x9787x16, _0x9787xc) : _0x9787x5.css(_0x9787xa, _0x9787x16);
    }, _0x9787xa, _0x9787x16, arguments.length > 1);
  }, show: function () {
    return _0x9787x6a(this, true);
  }, hide: function () {
    return _0x9787x6a(this);
  }, toggle: function (_0x9787xa) {
    return "boolean" == typeof _0x9787xa ? _0x9787xa ? this.show() : this.hide() : this.each(function () {
      (this = _0x9787x16 || this, "none" === _0x9787x5.css(this, "display") || !_0x9787x5.contains(this.ownerDocument, this)) ? _0x9787x5(this).show() : _0x9787x5(this).hide();
    });
  }});
  function _0x9787x6b(_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e) {
    return new _0x9787x6b.prototype.init(_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e);
  }
  _0x9787x5.Tween = _0x9787x6b, _0x9787x6b.prototype = {constructor: _0x9787x6b, init: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb, e, _0x9787x12) {
    this.elem = _0x9787xa, this.prop = _0x9787xc, this.easing = e || "swing", this.options = _0x9787x16, this.start = this.now = this.cur(), this.end = _0x9787xb, this.unit = _0x9787x12 || (_0x9787x5.cssNumber[_0x9787xc] ? "" : "px");
  }, cur: function () {
    var _0x9787xa = _0x9787x6b.propHooks[this.prop];
    return _0x9787xa && _0x9787xa.get ? _0x9787xa.get(this) : _0x9787x6b.propHooks._default.get(this);
  }, run: function (_0x9787xa) {
    var _0x9787x16, _0x9787xc = _0x9787x6b.propHooks[this.prop];
    return this.pos = _0x9787x16 = this.options.duration ? _0x9787x5.easing[this.easing](_0x9787xa, this.options.duration * _0x9787xa, 0, 1, this.options.duration) : _0x9787xa, this.now = (this.end - this.start) * _0x9787x16 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), _0x9787xc && _0x9787xc.set ? _0x9787xc.set(this) : _0x9787x6b.propHooks._default.set(this), this;
  }}, _0x9787x6b.prototype.init.prototype = _0x9787x6b.prototype, _0x9787x6b.propHooks = {_default: {get: function (_0x9787xa) {
    var _0x9787x16;
    return null == _0x9787xa.elem[_0x9787xa.prop] || _0x9787xa.elem.style && null != _0x9787xa.elem.style[_0x9787xa.prop] ? (_0x9787x16 = _0x9787x5.css(_0x9787xa.elem, _0x9787xa.prop, ""), _0x9787x16 && "auto" !== _0x9787x16 ? _0x9787x16 : 0) : _0x9787xa.elem[_0x9787xa.prop];
  }, set: function (_0x9787xa) {
    _0x9787x5.fx.step[_0x9787xa.prop] ? _0x9787x5.fx.step[_0x9787xa.prop](_0x9787xa) : _0x9787xa.elem.style && (null != _0x9787xa.elem.style[_0x9787x5.cssProps[_0x9787xa.prop]] || _0x9787x5.cssHooks[_0x9787xa.prop]) ? _0x9787x5.style(_0x9787xa.elem, _0x9787xa.prop, _0x9787xa.now + _0x9787xa.unit) : _0x9787xa.elem[_0x9787xa.prop] = _0x9787xa.now;
  }}}, _0x9787x6b.propHooks.scrollTop = _0x9787x6b.propHooks.scrollLeft = {set: function (_0x9787xa) {
    _0x9787xa.elem.nodeType && _0x9787xa.elem.parentNode && (_0x9787xa.elem[_0x9787xa.prop] = _0x9787xa.now);
  }}, _0x9787x5.easing = {linear: function (_0x9787xa) {
    return _0x9787xa;
  }, swing: function (_0x9787xa) {
    return 0.5 - Math.cos(_0x9787xa * Math.PI) / 2;
  }}, _0x9787x5.fx = _0x9787x6b.prototype.init, _0x9787x5.fx.step = {};
  var _0x9787x6c, _0x9787x6d, _0x9787x6e = /^(?:toggle|show|hide)$/, _0x9787x6f = new RegExp("^(?:([+-])=|)(" + _0x9787x32 + ")([a-z%]*)$", "i"), _0x9787x70 = /queueHooks$/, _0x9787x71 = [_0x9787x76], _0x9787x72 = {"*": [function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = this.createTween(_0x9787xa, _0x9787x16), _0x9787xb = _0x9787xc.cur(), e = _0x9787x6f.exec(_0x9787x16), _0x9787x12 = e && e[3] || (_0x9787x5.cssNumber[_0x9787xa] ? "" : "px"), _0x9787x10 = (_0x9787x5.cssNumber[_0x9787xa] || "px" !== _0x9787x12 && +_0x9787xb) && _0x9787x6f.exec(_0x9787x5.css(_0x9787xc.elem, _0x9787xa)), _0x9787xf = 1, _0x9787x7 = 20;
    if (_0x9787x10 && _0x9787x10[3] !== _0x9787x12) {
      _0x9787x12 = _0x9787x12 || _0x9787x10[3], e = e || [], _0x9787x10 = +_0x9787xb || 1;
      do {
        _0x9787xf = _0x9787xf || ".5", _0x9787x10 /= _0x9787xf, _0x9787x5.style(_0x9787xc.elem, _0x9787xa, _0x9787x10 + _0x9787x12);
      } while (_0x9787xf !== (_0x9787xf = _0x9787xc.cur() / _0x9787xb) && 1 !== _0x9787xf && --_0x9787x7);
    }
    ;
    return e && (_0x9787x10 = _0x9787xc.start = +_0x9787x10 || +_0x9787xb || 0, _0x9787xc.unit = _0x9787x12, _0x9787xc.end = e[1] ? _0x9787x10 + (e[1] + 1) * e[2] : +e[2]), _0x9787xc;
  }]};
  function _0x9787x73() {
    return setTimeout(function () {
      _0x9787x6c = void 0;
    }), _0x9787x6c = _0x9787x5.now();
  }
  function _0x9787x74(_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb = 0, e = {height: _0x9787xa};
    for (_0x9787x16 = _0x9787x16 ? 1 : 0; 4 > _0x9787xb; _0x9787xb += 2 - _0x9787x16) {
      _0x9787xc = _0x9787x1e[_0x9787xb], e["margin" + _0x9787xc] = e["padding" + _0x9787xc] = _0x9787xa;
    }
    ;
    return _0x9787x16 && (e.opacity = e.width = _0x9787xa), e;
  }
  function _0x9787x75(_0x9787xa, _0x9787x16, _0x9787xc) {
    for (var _0x9787xb, e = (_0x9787x72[_0x9787x16] || []).concat(_0x9787x72["*"]), _0x9787x12 = 0, _0x9787x10 = e.length; _0x9787x10 > _0x9787x12; _0x9787x12++) {
      if (_0x9787xb = e[_0x9787x12].call(_0x9787xc, _0x9787x16, _0x9787xa)) {
        return _0x9787xb;
      }
    }
  }
  function _0x9787x76(_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c, _0x9787x22, _0x9787xd = this, _0x9787x13 = {}, _0x9787x6 = _0x9787xa.style, _0x9787x11 = _0x9787xa.nodeType && (_0x9787xa = _0x9787x16 || _0x9787xa, "none" === _0x9787x5.css(_0x9787xa, "display") || !_0x9787x5.contains(_0x9787xa.ownerDocument, _0x9787xa)), _0x9787x2f = _0x9787x23.get(_0x9787xa, "fxshow");
    _0x9787xc.queue || (_0x9787xf = _0x9787x5._queueHooks(_0x9787xa, "fx"), null == _0x9787xf.unqueued && (_0x9787xf.unqueued = 0, _0x9787x7 = _0x9787xf.empty.fire, _0x9787xf.empty.fire = function () {
      _0x9787xf.unqueued || _0x9787x7();
    }), _0x9787xf.unqueued++, _0x9787xd.always(function () {
      _0x9787xd.always(function () {
        _0x9787xf.unqueued--, _0x9787x5.queue(_0x9787xa, "fx").length || _0x9787xf.empty.fire();
      });
    })), 1 === _0x9787xa.nodeType && ("height" in _0x9787x16 || "width" in _0x9787x16) && (_0x9787xc.overflow = [_0x9787x6.overflow, _0x9787x6.overflowX, _0x9787x6.overflowY], _0x9787x2c = _0x9787x5.css(_0x9787xa, "display"), _0x9787x22 = "none" === _0x9787x2c ? _0x9787x23.get(_0x9787xa, "olddisplay") || _0x9787x59(_0x9787xa.nodeName) : _0x9787x2c, "inline" === _0x9787x22 && "none" === _0x9787x5.css(_0x9787xa, "float") && (_0x9787x6.display = "inline-block")), _0x9787xc.overflow && (_0x9787x6.overflow = "hidden", _0x9787xd.always(function () {
      _0x9787x6.overflow = _0x9787xc.overflow[0], _0x9787x6.overflowX = _0x9787xc.overflow[1], _0x9787x6.overflowY = _0x9787xc.overflow[2];
    }));
    for (_0x9787xb in _0x9787x16) {
      if (e = _0x9787x16[_0x9787xb], _0x9787x6e.exec(e)) {
        if (delete _0x9787x16[_0x9787xb], _0x9787x12 = _0x9787x12 || "toggle" === e, e === (_0x9787x11 ? "hide" : "show")) {
          if ("show" !== e || !_0x9787x2f || void 0 === _0x9787x2f[_0x9787xb]) {
            continue;
          }
          ;
          _0x9787x11 = true;
        }
        ;
        _0x9787x13[_0x9787xb] = _0x9787x2f && _0x9787x2f[_0x9787xb] || _0x9787x5.style(_0x9787xa, _0x9787xb);
      } else {
        _0x9787x2c = void 0;
      }
    }
    ;
    if (_0x9787x5.isEmptyObject(_0x9787x13)) {
      "inline" === ("none" === _0x9787x2c ? _0x9787x59(_0x9787xa.nodeName) : _0x9787x2c) && (_0x9787x6.display = _0x9787x2c);
    } else {
      _0x9787x2f ? "hidden" in _0x9787x2f && (_0x9787x11 = _0x9787x2f.hidden) : _0x9787x2f = _0x9787x23.access(_0x9787xa, "fxshow", {}), _0x9787x12 && (_0x9787x2f.hidden = !_0x9787x11), _0x9787x11 ? _0x9787x5(_0x9787xa).show() : _0x9787xd.done(function () {
        _0x9787x5(_0x9787xa).hide();
      }), _0x9787xd.done(function () {
        var _0x9787x16;
        _0x9787x23.remove(_0x9787xa, "fxshow");
        for (_0x9787x16 in _0x9787x13) {
          _0x9787x5.style(_0x9787xa, _0x9787x16, _0x9787x13[_0x9787x16]);
        }
      });
      for (_0x9787xb in _0x9787x13) {
        _0x9787x10 = _0x9787x75(_0x9787x11 ? _0x9787x2f[_0x9787xb] : 0, _0x9787xb, _0x9787xd), _0x9787xb in _0x9787x2f || (_0x9787x2f[_0x9787xb] = _0x9787x10.start, _0x9787x11 && (_0x9787x10.end = _0x9787x10.start, _0x9787x10.start = "width" === _0x9787xb || "height" === _0x9787xb ? 1 : 0));
      }
    }
  }
  function _0x9787x77(_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10;
    for (_0x9787xc in _0x9787xa) {
      if (_0x9787xb = _0x9787x5.camelCase(_0x9787xc), e = _0x9787x16[_0x9787xb], _0x9787x12 = _0x9787xa[_0x9787xc], _0x9787x5.isArray(_0x9787x12) && (e = _0x9787x12[1], _0x9787x12 = _0x9787xa[_0x9787xc] = _0x9787x12[0]), _0x9787xc !== _0x9787xb && (_0x9787xa[_0x9787xb] = _0x9787x12, delete _0x9787xa[_0x9787xc]), _0x9787x10 = _0x9787x5.cssHooks[_0x9787xb], _0x9787x10 && "expand" in _0x9787x10) {
        _0x9787x12 = _0x9787x10.expand(_0x9787x12), delete _0x9787xa[_0x9787xb];
        for (_0x9787xc in _0x9787x12) {
          _0x9787xc in _0x9787xa || (_0x9787xa[_0x9787xc] = _0x9787x12[_0x9787xc], _0x9787x16[_0x9787xc] = e);
        }
      } else {
        _0x9787x16[_0x9787xb] = e;
      }
    }
  }
  function _0x9787x78(_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e, _0x9787x12 = 0, _0x9787x10 = _0x9787x71.length, _0x9787xf = _0x9787x5.Deferred().always(function () {
      delete _0x9787x7.elem;
    }), _0x9787x7 = function () {
      if (e) {
        return false;
      }
      ;
      for (var _0x9787x16 = _0x9787x6c || _0x9787x73(), _0x9787xc = Math.max(0, _0x9787x2c.startTime + _0x9787x2c.duration - _0x9787x16), _0x9787xb = _0x9787xc / _0x9787x2c.duration || 0, _0x9787x12 = 1 - _0x9787xb, _0x9787x10 = 0, _0x9787x7 = _0x9787x2c.tweens.length; _0x9787x7 > _0x9787x10; _0x9787x10++) {
        _0x9787x2c.tweens[_0x9787x10].run(_0x9787x12);
      }
      ;
      return _0x9787xf.notifyWith(_0x9787xa, [_0x9787x2c, _0x9787x12, _0x9787xc]), 1 > _0x9787x12 && _0x9787x7 ? _0x9787xc : (_0x9787xf.resolveWith(_0x9787xa, [_0x9787x2c]), false);
    }, _0x9787x2c = _0x9787xf.promise({elem: _0x9787xa, props: _0x9787x5.extend({}, _0x9787x16), opts: _0x9787x5.extend(true, {specialEasing: {}}, _0x9787xc), originalProperties: _0x9787x16, originalOptions: _0x9787xc, startTime: _0x9787x6c || _0x9787x73(), duration: _0x9787xc.duration, tweens: [], createTween: function (_0x9787x16, _0x9787xc) {
      var _0x9787xb = _0x9787x5.Tween(_0x9787xa, _0x9787x2c.opts, _0x9787x16, _0x9787xc, _0x9787x2c.opts.specialEasing[_0x9787x16] || _0x9787x2c.opts.easing);
      return _0x9787x2c.tweens.push(_0x9787xb), _0x9787xb;
    }, stop: function (_0x9787x16) {
      var _0x9787xc = 0, _0x9787xb = _0x9787x16 ? _0x9787x2c.tweens.length : 0;
      if (e) {
        return this;
      }
      ;
      for (e = true; _0x9787xb > _0x9787xc; _0x9787xc++) {
        _0x9787x2c.tweens[_0x9787xc].run(1);
      }
      ;
      return _0x9787x16 ? _0x9787xf.resolveWith(_0x9787xa, [_0x9787x2c, _0x9787x16]) : _0x9787xf.rejectWith(_0x9787xa, [_0x9787x2c, _0x9787x16]), this;
    }}), _0x9787x22 = _0x9787x2c.props;
    for (_0x9787x77(_0x9787x22, _0x9787x2c.opts.specialEasing); _0x9787x10 > _0x9787x12; _0x9787x12++) {
      if (_0x9787xb = _0x9787x71[_0x9787x12].call(_0x9787x2c, _0x9787xa, _0x9787x22, _0x9787x2c.opts)) {
        return _0x9787xb;
      }
    }
    ;
    return _0x9787x5.map(_0x9787x22, _0x9787x75, _0x9787x2c), _0x9787x5.isFunction(_0x9787x2c.opts.start) && _0x9787x2c.opts.start.call(_0x9787xa, _0x9787x2c), _0x9787x5.fx.timer(_0x9787x5.extend(_0x9787x7, {elem: _0x9787xa, anim: _0x9787x2c, queue: _0x9787x2c.opts.queue})), _0x9787x2c.progress(_0x9787x2c.opts.progress).done(_0x9787x2c.opts.done, _0x9787x2c.opts.complete).fail(_0x9787x2c.opts.fail).always(_0x9787x2c.opts.always);
  }
  _0x9787x5.Animation = _0x9787x5.extend(_0x9787x78, {tweener: function (_0x9787xa, _0x9787x16) {
    _0x9787x5.isFunction(_0x9787xa) ? (_0x9787x16 = _0x9787xa, _0x9787xa = ["*"]) : _0x9787xa = _0x9787xa.split(" ");
    for (var _0x9787xc, _0x9787xb = 0, e = _0x9787xa.length; e > _0x9787xb; _0x9787xb++) {
      _0x9787xc = _0x9787xa[_0x9787xb], _0x9787x72[_0x9787xc] = _0x9787x72[_0x9787xc] || [], _0x9787x72[_0x9787xc].unshift(_0x9787x16);
    }
  }, prefilter: function (_0x9787xa, _0x9787x16) {
    _0x9787x16 ? _0x9787x71.unshift(_0x9787xa) : _0x9787x71.push(_0x9787xa);
  }}), _0x9787x5.speed = function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb = _0x9787xa && "object" == typeof _0x9787xa ? _0x9787x5.extend({}, _0x9787xa) : {complete: _0x9787xc || !_0x9787xc && _0x9787x16 || _0x9787x5.isFunction(_0x9787xa) && _0x9787xa, duration: _0x9787xa, easing: _0x9787xc && _0x9787x16 || _0x9787x16 && !_0x9787x5.isFunction(_0x9787x16) && _0x9787x16};
    return _0x9787xb.duration = _0x9787x5.fx.off ? 0 : "number" == typeof _0x9787xb.duration ? _0x9787xb.duration : _0x9787xb.duration in _0x9787x5.fx.speeds ? _0x9787x5.fx.speeds[_0x9787xb.duration] : _0x9787x5.fx.speeds._default, (null == _0x9787xb.queue || _0x9787xb.queue === true) && (_0x9787xb.queue = "fx"), _0x9787xb.old = _0x9787xb.complete, _0x9787xb.complete = function () {
      _0x9787x5.isFunction(_0x9787xb.old) && _0x9787xb.old.call(this), _0x9787xb.queue && _0x9787x5.dequeue(this, _0x9787xb.queue);
    }, _0x9787xb;
  }, _0x9787x5.fn.extend({fadeTo: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    return this.filter(_0x9787x1d).css("opacity", 0).show().end().animate({opacity: _0x9787x16}, _0x9787xa, _0x9787xc, _0x9787xb);
  }, animate: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    var e = _0x9787x5.isEmptyObject(_0x9787xa), _0x9787x12 = _0x9787x5.speed(_0x9787x16, _0x9787xc, _0x9787xb), _0x9787x10 = function () {
      var _0x9787x16 = _0x9787x78(this, _0x9787x5.extend({}, _0x9787xa), _0x9787x12);
      (e || _0x9787x23.get(this, "finish")) && _0x9787x16.stop(true);
    };
    return _0x9787x10.finish = _0x9787x10, e || _0x9787x12.queue === false ? this.each(_0x9787x10) : this.queue(_0x9787x12.queue, _0x9787x10);
  }, stop: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb = function (_0x9787xa) {
      var _0x9787x16 = _0x9787xa.stop;
      delete _0x9787xa.stop, _0x9787x16(_0x9787xc);
    };
    return "string" != typeof _0x9787xa && (_0x9787xc = _0x9787x16, _0x9787x16 = _0x9787xa, _0x9787xa = void 0), _0x9787x16 && _0x9787xa !== false && this.queue(_0x9787xa || "fx", []), this.each(function () {
      var _0x9787x16 = true, e = null != _0x9787xa && _0x9787xa + "queueHooks", _0x9787x12 = _0x9787x5.timers, _0x9787x10 = _0x9787x23.get(this);
      if (e) {
        _0x9787x10[e] && _0x9787x10[e].stop && _0x9787xb(_0x9787x10[e]);
      } else {
        for (e in _0x9787x10) {
          _0x9787x10[e] && _0x9787x10[e].stop && _0x9787x70.test(e) && _0x9787xb(_0x9787x10[e]);
        }
      }
      ;
      for (e = _0x9787x12.length; e--;) {
        _0x9787x12[e].elem !== this || null != _0x9787xa && _0x9787x12[e].queue !== _0x9787xa || (_0x9787x12[e].anim.stop(_0x9787xc), _0x9787x16 = false, _0x9787x12.splice(e, 1));
      }
      ;
      (_0x9787x16 || !_0x9787xc) && _0x9787x5.dequeue(this, _0x9787xa);
    });
  }, finish: function (_0x9787xa) {
    return _0x9787xa !== false && (_0x9787xa = _0x9787xa || "fx"), this.each(function () {
      var _0x9787x16, _0x9787xc = _0x9787x23.get(this), _0x9787xb = _0x9787xc[_0x9787xa + "queue"], e = _0x9787xc[_0x9787xa + "queueHooks"], _0x9787x12 = _0x9787x5.timers, _0x9787x10 = _0x9787xb ? _0x9787xb.length : 0;
      for (_0x9787xc.finish = true, _0x9787x5.queue(this, _0x9787xa, []), e && e.stop && e.stop.call(this, true), _0x9787x16 = _0x9787x12.length; _0x9787x16--;) {
        _0x9787x12[_0x9787x16].elem === this && _0x9787x12[_0x9787x16].queue === _0x9787xa && (_0x9787x12[_0x9787x16].anim.stop(true), _0x9787x12.splice(_0x9787x16, 1));
      }
      ;
      for (_0x9787x16 = 0; _0x9787x10 > _0x9787x16; _0x9787x16++) {
        _0x9787xb[_0x9787x16] && _0x9787xb[_0x9787x16].finish && _0x9787xb[_0x9787x16].finish.call(this);
      }
      ;
      delete _0x9787xc.finish;
    });
  }}), _0x9787x5.each(["toggle", "show", "hide"], function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = _0x9787x5.fn[_0x9787x16];
    _0x9787x5.fn[_0x9787x16] = function (_0x9787xa, _0x9787xb, e) {
      return null == _0x9787xa || "boolean" == typeof _0x9787xa ? _0x9787xc.apply(this, arguments) : this.animate(_0x9787x74(_0x9787x16, true), _0x9787xa, _0x9787xb, e);
    };
  }), _0x9787x5.each({slideDown: _0x9787x74("show"), slideUp: _0x9787x74("hide"), slideToggle: _0x9787x74("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (_0x9787xa, _0x9787x16) {
    _0x9787x5.fn[_0x9787xa] = function (_0x9787xa, _0x9787xc, _0x9787xb) {
      return this.animate(_0x9787x16, _0x9787xa, _0x9787xc, _0x9787xb);
    };
  }), _0x9787x5.timers = [], _0x9787x5.fx.tick = function () {
    var _0x9787xa, _0x9787x16 = 0, _0x9787xc = _0x9787x5.timers;
    for (_0x9787x6c = _0x9787x5.now(); _0x9787x16 < _0x9787xc.length; _0x9787x16++) {
      _0x9787xa = _0x9787xc[_0x9787x16], _0x9787xa() || _0x9787xc[_0x9787x16] !== _0x9787xa || _0x9787xc.splice(_0x9787x16--, 1);
    }
    ;
    _0x9787xc.length || _0x9787x5.fx.stop(), _0x9787x6c = void 0;
  }, _0x9787x5.fx.timer = function (_0x9787xa) {
    _0x9787x5.timers.push(_0x9787xa), _0x9787xa() ? _0x9787x5.fx.start() : _0x9787x5.timers.pop();
  }, _0x9787x5.fx.interval = 13, _0x9787x5.fx.start = function () {
    _0x9787x6d || (_0x9787x6d = setInterval(_0x9787x5.fx.tick, _0x9787x5.fx.interval));
  }, _0x9787x5.fx.stop = function () {
    clearInterval(_0x9787x6d), _0x9787x6d = null;
  }, _0x9787x5.fx.speeds = {slow: 600, fast: 200, _default: 400}, _0x9787x5.fn.delay = function (_0x9787xa, _0x9787x16) {
    return _0x9787xa = _0x9787x5.fx ? _0x9787x5.fx.speeds[_0x9787xa] || _0x9787xa : _0x9787xa, _0x9787x16 = _0x9787x16 || "fx", this.queue(_0x9787x16, function (_0x9787x16, _0x9787xc) {
      var _0x9787xb = setTimeout(_0x9787x16, _0x9787xa);
      _0x9787xc.stop = function () {
        clearTimeout(_0x9787xb);
      };
    });
  }, function () {
    var _0x9787xa = _0x9787xd.createElement("input"), _0x9787x16 = _0x9787xd.createElement("select"), _0x9787xc = _0x9787x16.appendChild(_0x9787xd.createElement("option"));
    _0x9787xa.type = "checkbox", _0x9787x22.checkOn = "" !== _0x9787xa.value, _0x9787x22.optSelected = _0x9787xc.selected, _0x9787x16.disabled = true, _0x9787x22.optDisabled = !_0x9787xc.disabled, _0x9787xa = _0x9787xd.createElement("input"), _0x9787xa.value = "t", _0x9787xa.type = "radio", _0x9787x22.radioValue = "t" === _0x9787xa.value;
  }();
  var _0x9787x79, _0x9787x7a, _0x9787x7b = _0x9787x5.expr.attrHandle;
  _0x9787x5.fn.extend({attr: function (_0x9787xa, _0x9787x16) {
    return _0x9787x36(this, _0x9787x5.attr, _0x9787xa, _0x9787x16, arguments.length > 1);
  }, removeAttr: function (_0x9787xa) {
    return this.each(function () {
      _0x9787x5.removeAttr(this, _0x9787xa);
    });
  }}), _0x9787x5.extend({attr: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e, _0x9787x12 = _0x9787xa.nodeType;
    if (_0x9787xa && 3 !== _0x9787x12 && 8 !== _0x9787x12 && 2 !== _0x9787x12) {
      return typeof _0x9787xa.getAttribute === _0x9787x29 ? _0x9787x5.prop(_0x9787xa, _0x9787x16, _0x9787xc) : (1 === _0x9787x12 && _0x9787x5.isXMLDoc(_0x9787xa) || (_0x9787x16 = _0x9787x16.toLowerCase(), _0x9787xb = _0x9787x5.attrHooks[_0x9787x16] || (_0x9787x5.expr.match.bool.test(_0x9787x16) ? _0x9787x7a : _0x9787x79)), void 0 === _0x9787xc ? _0x9787xb && "get" in _0x9787xb && null !== (e = _0x9787xb.get(_0x9787xa, _0x9787x16)) ? e : (e = _0x9787x5.find.attr(_0x9787xa, _0x9787x16), null == e ? void 0 : e) : null !== _0x9787xc ? _0x9787xb && "set" in _0x9787xb && void 0 !== (e = _0x9787xb.set(_0x9787xa, _0x9787xc, _0x9787x16)) ? e : (_0x9787xa.setAttribute(_0x9787x16, _0x9787xc + ""), _0x9787xc) : void _0x9787x5.removeAttr(_0x9787xa, _0x9787x16));
    }
  }, removeAttr: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb, e = 0, _0x9787x12 = _0x9787x16 && _0x9787x16.match(_0x9787x18);
    if (_0x9787x12 && 1 === _0x9787xa.nodeType) {
      while (_0x9787xc = _0x9787x12[e++]) {
        _0x9787xb = _0x9787x5.propFix[_0x9787xc] || _0x9787xc, _0x9787x5.expr.match.bool.test(_0x9787xc) && (_0x9787xa[_0x9787xb] = false), _0x9787xa.removeAttribute(_0x9787xc);
      }
    }
  }, attrHooks: {type: {set: function (_0x9787xa, _0x9787x16) {
    if (!_0x9787x22.radioValue && "radio" === _0x9787x16 && _0x9787x5.nodeName(_0x9787xa, "input")) {
      var _0x9787xc = _0x9787xa.value;
      return _0x9787xa.setAttribute("type", _0x9787x16), _0x9787xc && (_0x9787xa.value = _0x9787xc), _0x9787x16;
    }
  }}}}), _0x9787x7a = {set: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return _0x9787x16 === false ? _0x9787x5.removeAttr(_0x9787xa, _0x9787xc) : _0x9787xa.setAttribute(_0x9787xc, _0x9787xc), _0x9787xc;
  }}, _0x9787x5.each(_0x9787x5.expr.match.bool.source.match(/\w+/g), function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = _0x9787x7b[_0x9787x16] || _0x9787x5.find.attr;
    _0x9787x7b[_0x9787x16] = function (_0x9787xa, _0x9787x16, _0x9787xb) {
      var e, _0x9787x12;
      return _0x9787xb || (_0x9787x12 = _0x9787x7b[_0x9787x16], _0x9787x7b[_0x9787x16] = e, e = null != _0x9787xc(_0x9787xa, _0x9787x16, _0x9787xb) ? _0x9787x16.toLowerCase() : null, _0x9787x7b[_0x9787x16] = _0x9787x12), e;
    };
  });
  var _0x9787x7c = /^(?:input|select|textarea|button)$/i;
  _0x9787x5.fn.extend({prop: function (_0x9787xa, _0x9787x16) {
    return _0x9787x36(this, _0x9787x5.prop, _0x9787xa, _0x9787x16, arguments.length > 1);
  }, removeProp: function (_0x9787xa) {
    return this.each(function () {
      delete this[_0x9787x5.propFix[_0x9787xa] || _0x9787xa];
    });
  }}), _0x9787x5.extend({propFix: {for: "htmlFor", class: "className"}, prop: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e, _0x9787x12, _0x9787x10 = _0x9787xa.nodeType;
    if (_0x9787xa && 3 !== _0x9787x10 && 8 !== _0x9787x10 && 2 !== _0x9787x10) {
      return _0x9787x12 = 1 !== _0x9787x10 || !_0x9787x5.isXMLDoc(_0x9787xa), _0x9787x12 && (_0x9787x16 = _0x9787x5.propFix[_0x9787x16] || _0x9787x16, e = _0x9787x5.propHooks[_0x9787x16]), void 0 !== _0x9787xc ? e && "set" in e && void 0 !== (_0x9787xb = e.set(_0x9787xa, _0x9787xc, _0x9787x16)) ? _0x9787xb : _0x9787xa[_0x9787x16] = _0x9787xc : e && "get" in e && null !== (_0x9787xb = e.get(_0x9787xa, _0x9787x16)) ? _0x9787xb : _0x9787xa[_0x9787x16];
    }
  }, propHooks: {tabIndex: {get: function (_0x9787xa) {
    return _0x9787xa.hasAttribute("tabindex") || _0x9787x7c.test(_0x9787xa.nodeName) || _0x9787xa.href ? _0x9787xa.tabIndex : -1;
  }}}}), _0x9787x22.optSelected || (_0x9787x5.propHooks.selected = {get: function (_0x9787xa) {
    var _0x9787x16 = _0x9787xa.parentNode;
    return _0x9787x16 && _0x9787x16.parentNode && _0x9787x16.parentNode.selectedIndex, null;
  }}), _0x9787x5.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    _0x9787x5.propFix[this.toLowerCase()] = this;
  });
  var _0x9787x7d = /[\t\r\n\f]/g;
  _0x9787x5.fn.extend({addClass: function (_0x9787xa) {
    var _0x9787x16, _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf = "string" == typeof _0x9787xa && _0x9787xa, _0x9787x7 = 0, _0x9787x2c = this.length;
    if (_0x9787x5.isFunction(_0x9787xa)) {
      return this.each(function (_0x9787x16) {
        _0x9787x5(this).addClass(_0x9787xa.call(this, _0x9787x16, this.className));
      });
    }
    ;
    if (_0x9787xf) {
      for (_0x9787x16 = (_0x9787xa || "").match(_0x9787x18) || []; _0x9787x2c > _0x9787x7; _0x9787x7++) {
        if (_0x9787xc = this[_0x9787x7], _0x9787xb = 1 === _0x9787xc.nodeType && (_0x9787xc.className ? (" " + _0x9787xc.className + " ").replace(_0x9787x7d, " ") : " ")) {
          _0x9787x12 = 0;
          while (e = _0x9787x16[_0x9787x12++]) {
            _0x9787xb.indexOf(" " + e + " ") < 0 && (_0x9787xb += e + " ");
          }
          ;
          _0x9787x10 = _0x9787x5.trim(_0x9787xb), _0x9787xc.className !== _0x9787x10 && (_0x9787xc.className = _0x9787x10);
        }
      }
    }
    ;
    return this;
  }, removeClass: function (_0x9787xa) {
    var _0x9787x16, _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf = 0 === arguments.length || "string" == typeof _0x9787xa && _0x9787xa, _0x9787x7 = 0, _0x9787x2c = this.length;
    if (_0x9787x5.isFunction(_0x9787xa)) {
      return this.each(function (_0x9787x16) {
        _0x9787x5(this).removeClass(_0x9787xa.call(this, _0x9787x16, this.className));
      });
    }
    ;
    if (_0x9787xf) {
      for (_0x9787x16 = (_0x9787xa || "").match(_0x9787x18) || []; _0x9787x2c > _0x9787x7; _0x9787x7++) {
        if (_0x9787xc = this[_0x9787x7], _0x9787xb = 1 === _0x9787xc.nodeType && (_0x9787xc.className ? (" " + _0x9787xc.className + " ").replace(_0x9787x7d, " ") : "")) {
          _0x9787x12 = 0;
          while (e = _0x9787x16[_0x9787x12++]) {
            while (_0x9787xb.indexOf(" " + e + " ") >= 0) {
              _0x9787xb = _0x9787xb.replace(" " + e + " ", " ");
            }
          }
          ;
          _0x9787x10 = _0x9787xa ? _0x9787x5.trim(_0x9787xb) : "", _0x9787xc.className !== _0x9787x10 && (_0x9787xc.className = _0x9787x10);
        }
      }
    }
    ;
    return this;
  }, toggleClass: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc = typeof _0x9787xa;
    return "boolean" == typeof _0x9787x16 && "string" === _0x9787xc ? _0x9787x16 ? this.addClass(_0x9787xa) : this.removeClass(_0x9787xa) : this.each(_0x9787x5.isFunction(_0x9787xa) ? function (_0x9787xc) {
      _0x9787x5(this).toggleClass(_0x9787xa.call(this, _0x9787xc, this.className, _0x9787x16), _0x9787x16);
    } : function () {
      if ("string" === _0x9787xc) {
        var _0x9787x16, _0x9787xb = 0, e = _0x9787x5(this), _0x9787x12 = _0x9787xa.match(_0x9787x18) || [];
        while (_0x9787x16 = _0x9787x12[_0x9787xb++]) {
          e.hasClass(_0x9787x16) ? e.removeClass(_0x9787x16) : e.addClass(_0x9787x16);
        }
      } else {
        (_0x9787xc === _0x9787x29 || "boolean" === _0x9787xc) && (this.className && _0x9787x23.set(this, "__className__", this.className), this.className = this.className || _0x9787xa === false ? "" : _0x9787x23.get(this, "__className__") || "");
      }
    });
  }, hasClass: function (_0x9787xa) {
    for (var _0x9787x16 = " " + _0x9787xa + " ", _0x9787xc = 0, _0x9787xb = this.length; _0x9787xb > _0x9787xc; _0x9787xc++) {
      if (1 === this[_0x9787xc].nodeType && (" " + this[_0x9787xc].className + " ").replace(_0x9787x7d, " ").indexOf(_0x9787x16) >= 0) {
        return true;
      }
    }
    ;
    return false;
  }});
  var _0x9787x7e = /\r/g;
  _0x9787x5.fn.extend({val: function (_0x9787xa) {
    var _0x9787x16, _0x9787xc, _0x9787xb, e = this[0];
    {
      if (arguments.length) {
        return _0x9787xb = _0x9787x5.isFunction(_0x9787xa), this.each(function (_0x9787xc) {
          var e;
          1 === this.nodeType && (e = _0x9787xb ? _0x9787xa.call(this, _0x9787xc, _0x9787x5(this).val()) : _0x9787xa, null == e ? e = "" : "number" == typeof e ? e += "" : _0x9787x5.isArray(e) && (e = _0x9787x5.map(e, function (_0x9787xa) {
            return null == _0x9787xa ? "" : _0x9787xa + "";
          })), _0x9787x16 = _0x9787x5.valHooks[this.type] || _0x9787x5.valHooks[this.nodeName.toLowerCase()], _0x9787x16 && "set" in _0x9787x16 && void 0 !== _0x9787x16.set(this, e, "value") || (this.value = e));
        });
      }
      ;
      if (e) {
        return _0x9787x16 = _0x9787x5.valHooks[e.type] || _0x9787x5.valHooks[e.nodeName.toLowerCase()], _0x9787x16 && "get" in _0x9787x16 && void 0 !== (_0x9787xc = _0x9787x16.get(e, "value")) ? _0x9787xc : (_0x9787xc = e.value, "string" == typeof _0x9787xc ? _0x9787xc.replace(_0x9787x7e, "") : null == _0x9787xc ? "" : _0x9787xc);
      }
    }
  }}), _0x9787x5.extend({valHooks: {option: {get: function (_0x9787xa) {
    var _0x9787x16 = _0x9787x5.find.attr(_0x9787xa, "value");
    return null != _0x9787x16 ? _0x9787x16 : _0x9787x5.trim(_0x9787x5.text(_0x9787xa));
  }}, select: {get: function (_0x9787xa) {
    for (var _0x9787x16, _0x9787xc, _0x9787xb = _0x9787xa.options, e = _0x9787xa.selectedIndex, _0x9787x12 = "select-one" === _0x9787xa.type || 0 > e, _0x9787x10 = _0x9787x12 ? null : [], _0x9787xf = _0x9787x12 ? e + 1 : _0x9787xb.length, _0x9787x7 = 0 > e ? _0x9787xf : _0x9787x12 ? e : 0; _0x9787xf > _0x9787x7; _0x9787x7++) {
      if (_0x9787xc = _0x9787xb[_0x9787x7], !(!_0x9787xc.selected && _0x9787x7 !== e || (_0x9787x22.optDisabled ? _0x9787xc.disabled : null !== _0x9787xc.getAttribute("disabled")) || _0x9787xc.parentNode.disabled && _0x9787x5.nodeName(_0x9787xc.parentNode, "optgroup"))) {
        if (_0x9787x16 = _0x9787x5(_0x9787xc).val(), _0x9787x12) {
          return _0x9787x16;
        }
        ;
        _0x9787x10.push(_0x9787x16);
      }
    }
    ;
    return _0x9787x10;
  }, set: function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb, e = _0x9787xa.options, _0x9787x12 = _0x9787x5.makeArray(_0x9787x16), _0x9787x10 = e.length;
    while (_0x9787x10--) {
      _0x9787xb = e[_0x9787x10], (_0x9787xb.selected = _0x9787x5.inArray(_0x9787xb.value, _0x9787x12) >= 0) && (_0x9787xc = true);
    }
    ;
    return _0x9787xc || (_0x9787xa.selectedIndex = -1), _0x9787x12;
  }}}}), _0x9787x5.each(["radio", "checkbox"], function () {
    _0x9787x5.valHooks[this] = {set: function (_0x9787xa, _0x9787x16) {
      return _0x9787x5.isArray(_0x9787x16) ? _0x9787xa.checked = _0x9787x5.inArray(_0x9787x5(_0x9787xa).val(), _0x9787x16) >= 0 : void 0;
    }}, _0x9787x22.checkOn || (_0x9787x5.valHooks[this].get = function (_0x9787xa) {
      return null === _0x9787xa.getAttribute("value") ? "on" : _0x9787xa.value;
    });
  }), _0x9787x5.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (_0x9787xa, _0x9787x16) {
    _0x9787x5.fn[_0x9787x16] = function (_0x9787xa, _0x9787xc) {
      return arguments.length > 0 ? this.on(_0x9787x16, null, _0x9787xa, _0x9787xc) : this.trigger(_0x9787x16);
    };
  }), _0x9787x5.fn.extend({hover: function (_0x9787xa, _0x9787x16) {
    return this.mouseenter(_0x9787xa).mouseleave(_0x9787x16 || _0x9787xa);
  }, bind: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return this.on(_0x9787xa, null, _0x9787x16, _0x9787xc);
  }, unbind: function (_0x9787xa, _0x9787x16) {
    return this.off(_0x9787xa, null, _0x9787x16);
  }, delegate: function (_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    return this.on(_0x9787x16, _0x9787xa, _0x9787xc, _0x9787xb);
  }, undelegate: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return 1 === arguments.length ? this.off(_0x9787xa, "**") : this.off(_0x9787x16, _0x9787xa || "**", _0x9787xc);
  }});
  var _0x9787x7f = _0x9787x5.now(), _0x9787x80 = /\?/;
  _0x9787x5.parseJSON = function (_0x9787xa) {
    return JSON.parse(_0x9787xa + "");
  }, _0x9787x5.parseXML = function (_0x9787xa) {
    var _0x9787x16, _0x9787xc;
    if (!_0x9787xa || "string" != typeof _0x9787xa) {
      return null;
    }
    ;
    try {
      _0x9787xc = new DOMParser, _0x9787x16 = _0x9787xc.parseFromString(_0x9787xa, "text/xml");
    } catch (_0x9787xb) {
      _0x9787x16 = void 0;
    }
    ;
    return (!_0x9787x16 || _0x9787x16.getElementsByTagName("parsererror").length) && _0x9787x5.error("Invalid XML: " + _0x9787xa), _0x9787x16;
  };
  var _0x9787x81, _0x9787x82, _0x9787x83 = /#.*$/, _0x9787x84 = /([?&])_=[^&]*/, _0x9787x85 = /^(.*?):[ \t]*([^\r\n]*)$/gm, _0x9787x86 = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, _0x9787x87 = /^(?:GET|HEAD)$/, _0x9787x88 = /^\/\//, _0x9787x89 = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, _0x9787x8a = {}, _0x9787x8b = {}, _0x9787x8c = "*/".concat("*");
  try {
    _0x9787x82 = location.href;
  } catch (qc) {
    _0x9787x82 = _0x9787xd.createElement("a"), _0x9787x82.href = "", _0x9787x82 = _0x9787x82.href;
  }
  ;
  _0x9787x81 = _0x9787x89.exec(_0x9787x82.toLowerCase()) || [];
  function _0x9787x8d(_0x9787xa) {
    return function (_0x9787x16, _0x9787xc) {
      "string" != typeof _0x9787x16 && (_0x9787xc = _0x9787x16, _0x9787x16 = "*");
      var _0x9787xb, e = 0, _0x9787x12 = _0x9787x16.toLowerCase().match(_0x9787x18) || [];
      if (_0x9787x5.isFunction(_0x9787xc)) {
        while (_0x9787xb = _0x9787x12[e++]) {
          "+" === _0x9787xb[0] ? (_0x9787xb = _0x9787xb.slice(1) || "*", (_0x9787xa[_0x9787xb] = _0x9787xa[_0x9787xb] || []).unshift(_0x9787xc)) : (_0x9787xa[_0x9787xb] = _0x9787xa[_0x9787xb] || []).push(_0x9787xc);
        }
      }
    };
  }
  function _0x9787x8e(_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    var e = {}, _0x9787x12 = _0x9787xa === _0x9787x8b;
    function _0x9787x10(_0x9787xf) {
      var _0x9787x7;
      return e[_0x9787xf] = true, _0x9787x5.each(_0x9787xa[_0x9787xf] || [], function (_0x9787xa, _0x9787xf) {
        var _0x9787x2c = _0x9787xf(_0x9787x16, _0x9787xc, _0x9787xb);
        return "string" != typeof _0x9787x2c || _0x9787x12 || e[_0x9787x2c] ? _0x9787x12 ? !(_0x9787x7 = _0x9787x2c) : void 0 : (_0x9787x16.dataTypes.unshift(_0x9787x2c), _0x9787x10(_0x9787x2c), false);
      }), _0x9787x7;
    }
    return _0x9787x10(_0x9787x16.dataTypes[0]) || !e["*"] && _0x9787x10("*");
  }
  function _0x9787x8f(_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb, e = _0x9787x5.ajaxSettings.flatOptions || {};
    for (_0x9787xc in _0x9787x16) {
      void 0 !== _0x9787x16[_0x9787xc] && ((e[_0x9787xc] ? _0x9787xa : _0x9787xb || (_0x9787xb = {}))[_0x9787xc] = _0x9787x16[_0x9787xc]);
    }
    ;
    return _0x9787xb && _0x9787x5.extend(true, _0x9787xa, _0x9787xb), _0x9787xa;
  }
  function _0x9787x90(_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf = _0x9787xa.contents, _0x9787x7 = _0x9787xa.dataTypes;
    while ("*" === _0x9787x7[0]) {
      _0x9787x7.shift(), void 0 === _0x9787xb && (_0x9787xb = _0x9787xa.mimeType || _0x9787x16.getResponseHeader("Content-Type"));
    }
    ;
    if (_0x9787xb) {
      for (e in _0x9787xf) {
        if (_0x9787xf[e] && _0x9787xf[e].test(_0x9787xb)) {
          _0x9787x7.unshift(e);
          break;
        }
      }
    }
    ;
    if (_0x9787x7[0] in _0x9787xc) {
      _0x9787x12 = _0x9787x7[0];
    } else {
      for (e in _0x9787xc) {
        if (!_0x9787x7[0] || _0x9787xa.converters[e + " " + _0x9787x7[0]]) {
          _0x9787x12 = e;
          break;
        }
        ;
        _0x9787x10 || (_0x9787x10 = e);
      }
      ;
      _0x9787x12 = _0x9787x12 || _0x9787x10;
    }
    ;
    return _0x9787x12 ? (_0x9787x12 !== _0x9787x7[0] && _0x9787x7.unshift(_0x9787x12), _0x9787xc[_0x9787x12]) : void 0;
  }
  function _0x9787x91(_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    var e, _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c = {}, _0x9787x22 = _0x9787xa.dataTypes.slice();
    if (_0x9787x22[1]) {
      for (_0x9787x10 in _0x9787xa.converters) {
        _0x9787x2c[_0x9787x10.toLowerCase()] = _0x9787xa.converters[_0x9787x10];
      }
    }
    ;
    _0x9787x12 = _0x9787x22.shift();
    while (_0x9787x12) {
      if (_0x9787xa.responseFields[_0x9787x12] && (_0x9787xc[_0x9787xa.responseFields[_0x9787x12]] = _0x9787x16), !_0x9787x7 && _0x9787xb && _0x9787xa.dataFilter && (_0x9787x16 = _0x9787xa.dataFilter(_0x9787x16, _0x9787xa.dataType)), _0x9787x7 = _0x9787x12, _0x9787x12 = _0x9787x22.shift()) {
        if ("*" === _0x9787x12) {
          _0x9787x12 = _0x9787x7;
        } else {
          if ("*" !== _0x9787x7 && _0x9787x7 !== _0x9787x12) {
            if (_0x9787x10 = _0x9787x2c[_0x9787x7 + " " + _0x9787x12] || _0x9787x2c["* " + _0x9787x12], !_0x9787x10) {
              for (e in _0x9787x2c) {
                if (_0x9787xf = e.split(" "), _0x9787xf[1] === _0x9787x12 && (_0x9787x10 = _0x9787x2c[_0x9787x7 + " " + _0x9787xf[0]] || _0x9787x2c["* " + _0x9787xf[0]])) {
                  _0x9787x10 === true ? _0x9787x10 = _0x9787x2c[e] : _0x9787x2c[e] !== true && (_0x9787x12 = _0x9787xf[0], _0x9787x22.unshift(_0x9787xf[1]));
                  break;
                }
              }
            }
            ;
            if (_0x9787x10 !== true) {
              if (_0x9787x10 && _0x9787xa.throws) {
                _0x9787x16 = _0x9787x10(_0x9787x16);
              } else {
                try {
                  _0x9787x16 = _0x9787x10(_0x9787x16);
                } catch (_0x9787xd) {
                  return {state: "parsererror", error: _0x9787x10 ? _0x9787xd : "No conversion from " + _0x9787x7 + " to " + _0x9787x12};
                }
              }
            }
          }
        }
      }
    }
    ;
    return {state: "success", data: _0x9787x16};
  }
  _0x9787x5.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: _0x9787x82, type: "GET", isLocal: _0x9787x86.test(_0x9787x81[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": _0x9787x8c, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": true, "text json": _0x9787x5.parseJSON, "text xml": _0x9787x5.parseXML}, flatOptions: {url: true, context: true}}, ajaxSetup: function (_0x9787xa, _0x9787x16) {
    return _0x9787x16 ? _0x9787x8f(_0x9787x8f(_0x9787xa, _0x9787x5.ajaxSettings), _0x9787x16) : _0x9787x8f(_0x9787x5.ajaxSettings, _0x9787xa);
  }, ajaxPrefilter: _0x9787x8d(_0x9787x8a), ajaxTransport: _0x9787x8d(_0x9787x8b), ajax: function (_0x9787xa, _0x9787x16) {
    "object" == typeof _0x9787xa && (_0x9787x16 = _0x9787xa, _0x9787xa = void 0), _0x9787x16 = _0x9787x16 || {};
    var _0x9787xc, _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c, _0x9787x22 = _0x9787x5.ajaxSetup({}, _0x9787x16), _0x9787xd = _0x9787x22.context || _0x9787x22, _0x9787x13 = _0x9787x22.context && (_0x9787xd.nodeType || _0x9787xd.jquery) ? _0x9787x5(_0x9787xd) : _0x9787x5.event, _0x9787x6 = _0x9787x5.Deferred(), _0x9787x11 = _0x9787x5.Callbacks("once memory"), _0x9787x2f = _0x9787x22.statusCode || {}, _0x9787x8 = {}, _0x9787x9 = {}, _0x9787x4 = 0, _0x9787xe = "canceled", _0x9787x14 = {readyState: 0, getResponseHeader: function (_0x9787xa) {
      var _0x9787x16;
      if (2 === _0x9787x4) {
        if (!_0x9787x12) {
          _0x9787x12 = {};
          while (_0x9787x16 = _0x9787x85.exec(e)) {
            _0x9787x12[_0x9787x16[1].toLowerCase()] = _0x9787x16[2];
          }
        }
        ;
        _0x9787x16 = _0x9787x12[_0x9787xa.toLowerCase()];
      }
      ;
      return null == _0x9787x16 ? null : _0x9787x16;
    }, getAllResponseHeaders: function () {
      return 2 === _0x9787x4 ? e : null;
    }, setRequestHeader: function (_0x9787xa, _0x9787x16) {
      var _0x9787xc = _0x9787xa.toLowerCase();
      return _0x9787x4 || (_0x9787xa = _0x9787x9[_0x9787xc] = _0x9787x9[_0x9787xc] || _0x9787xa, _0x9787x8[_0x9787xa] = _0x9787x16), this;
    }, overrideMimeType: function (_0x9787xa) {
      return _0x9787x4 || (_0x9787x22.mimeType = _0x9787xa), this;
    }, statusCode: function (_0x9787xa) {
      var _0x9787x16;
      if (_0x9787xa) {
        if (2 > _0x9787x4) {
          for (_0x9787x16 in _0x9787xa) {
            _0x9787x2f[_0x9787x16] = [_0x9787x2f[_0x9787x16], _0x9787xa[_0x9787x16]];
          }
        } else {
          _0x9787x14.always(_0x9787xa[_0x9787x14.status]);
        }
      }
      ;
      return this;
    }, abort: function (_0x9787xa) {
      var _0x9787x16 = _0x9787xa || _0x9787xe;
      return _0x9787xc && _0x9787xc.abort(_0x9787x16), _0x9787x21(0, _0x9787x16), this;
    }};
    if (_0x9787x6.promise(_0x9787x14).complete = _0x9787x11.add, _0x9787x14.success = _0x9787x14.done, _0x9787x14.error = _0x9787x14.fail, _0x9787x22.url = ((_0x9787xa || _0x9787x22.url || _0x9787x82) + "").replace(_0x9787x83, "").replace(_0x9787x88, _0x9787x81[1] + "//"), _0x9787x22.type = _0x9787x16.method || _0x9787x16.type || _0x9787x22.method || _0x9787x22.type, _0x9787x22.dataTypes = _0x9787x5.trim(_0x9787x22.dataType || "*").toLowerCase().match(_0x9787x18) || [""], null == _0x9787x22.crossDomain && (_0x9787xf = _0x9787x89.exec(_0x9787x22.url.toLowerCase()), _0x9787x22.crossDomain = !(!_0x9787xf || _0x9787xf[1] === _0x9787x81[1] && _0x9787xf[2] === _0x9787x81[2] && (_0x9787xf[3] || ("http:" === _0x9787xf[1] ? "80" : "443")) === (_0x9787x81[3] || ("http:" === _0x9787x81[1] ? "80" : "443")))), _0x9787x22.data && _0x9787x22.processData && "string" != typeof _0x9787x22.data && (_0x9787x22.data = _0x9787x5.param(_0x9787x22.data, _0x9787x22.traditional)), _0x9787x8e(_0x9787x8a, _0x9787x22, _0x9787x16, _0x9787x14), 2 === _0x9787x4) {
      return _0x9787x14;
    }
    ;
    _0x9787x7 = _0x9787x22.global, _0x9787x7 && 0 === _0x9787x5.active++ && _0x9787x5.event.trigger("ajaxStart"), _0x9787x22.type = _0x9787x22.type.toUpperCase(), _0x9787x22.hasContent = !_0x9787x87.test(_0x9787x22.type), _0x9787xb = _0x9787x22.url, _0x9787x22.hasContent || (_0x9787x22.data && (_0x9787xb = _0x9787x22.url += (_0x9787x80.test(_0x9787xb) ? "&" : "?") + _0x9787x22.data, delete _0x9787x22.data), _0x9787x22.cache === false && (_0x9787x22.url = _0x9787x84.test(_0x9787xb) ? _0x9787xb.replace(_0x9787x84, "$1_=" + _0x9787x7f++) : _0x9787xb + (_0x9787x80.test(_0x9787xb) ? "&" : "?") + "_=" + _0x9787x7f++)), _0x9787x22.ifModified && (_0x9787x5.lastModified[_0x9787xb] && _0x9787x14.setRequestHeader("If-Modified-Since", _0x9787x5.lastModified[_0x9787xb]), _0x9787x5.etag[_0x9787xb] && _0x9787x14.setRequestHeader("If-None-Match", _0x9787x5.etag[_0x9787xb])), (_0x9787x22.data && _0x9787x22.hasContent && _0x9787x22.contentType !== false || _0x9787x16.contentType) && _0x9787x14.setRequestHeader("Content-Type", _0x9787x22.contentType), _0x9787x14.setRequestHeader("Accept", _0x9787x22.dataTypes[0] && _0x9787x22.accepts[_0x9787x22.dataTypes[0]] ? _0x9787x22.accepts[_0x9787x22.dataTypes[0]] + ("*" !== _0x9787x22.dataTypes[0] ? ", " + _0x9787x8c + "; q=0.01" : "") : _0x9787x22.accepts["*"]);
    for (_0x9787x2c in _0x9787x22.headers) {
      _0x9787x14.setRequestHeader(_0x9787x2c, _0x9787x22.headers[_0x9787x2c]);
    }
    ;
    if (_0x9787x22.beforeSend && (_0x9787x22.beforeSend.call(_0x9787xd, _0x9787x14, _0x9787x22) === false || 2 === _0x9787x4)) {
      return _0x9787x14.abort();
    }
    ;
    _0x9787xe = "abort";
    for (_0x9787x2c in {success: 1, error: 1, complete: 1}) {
      _0x9787x14[_0x9787x2c](_0x9787x22[_0x9787x2c]);
    }
    ;
    if (_0x9787xc = _0x9787x8e(_0x9787x8b, _0x9787x22, _0x9787x16, _0x9787x14)) {
      _0x9787x14.readyState = 1, _0x9787x7 && _0x9787x13.trigger("ajaxSend", [_0x9787x14, _0x9787x22]), _0x9787x22.async && _0x9787x22.timeout > 0 && (_0x9787x10 = setTimeout(function () {
        _0x9787x14.abort("timeout");
      }, _0x9787x22.timeout));
      try {
        _0x9787x4 = 1, _0x9787xc.send(_0x9787x8, _0x9787x21);
      } catch (_0x9787x19) {
        if (!(2 > _0x9787x4)) {
          throw _0x9787x19;
        }
        ;
        _0x9787x21(-1, _0x9787x19);
      }
    } else {
      _0x9787x21(-1, "No Transport");
    }
    ;
    function _0x9787x21(_0x9787xa, _0x9787x16, _0x9787x12, _0x9787xf) {
      var _0x9787x2c, _0x9787x8, _0x9787x9, _0x9787xe, _0x9787x19, _0x9787x21 = _0x9787x16;
      2 !== _0x9787x4 && (_0x9787x4 = 2, _0x9787x10 && clearTimeout(_0x9787x10), _0x9787xc = void 0, e = _0x9787xf || "", _0x9787x14.readyState = _0x9787xa > 0 ? 4 : 0, _0x9787x2c = _0x9787xa >= 200 && 300 > _0x9787xa || 304 === _0x9787xa, _0x9787x12 && (_0x9787xe = _0x9787x90(_0x9787x22, _0x9787x14, _0x9787x12)), _0x9787xe = _0x9787x91(_0x9787x22, _0x9787xe, _0x9787x14, _0x9787x2c), _0x9787x2c ? (_0x9787x22.ifModified && (_0x9787x19 = _0x9787x14.getResponseHeader("Last-Modified"), _0x9787x19 && (_0x9787x5.lastModified[_0x9787xb] = _0x9787x19), _0x9787x19 = _0x9787x14.getResponseHeader("etag"), _0x9787x19 && (_0x9787x5.etag[_0x9787xb] = _0x9787x19)), 204 === _0x9787xa || "HEAD" === _0x9787x22.type ? _0x9787x21 = "nocontent" : 304 === _0x9787xa ? _0x9787x21 = "notmodified" : (_0x9787x21 = _0x9787xe.state, _0x9787x8 = _0x9787xe.data, _0x9787x9 = _0x9787xe.error, _0x9787x2c = !_0x9787x9)) : (_0x9787x9 = _0x9787x21, (_0x9787xa || !_0x9787x21) && (_0x9787x21 = "error", 0 > _0x9787xa && (_0x9787xa = 0))), _0x9787x14.status = _0x9787xa, _0x9787x14.statusText = (_0x9787x16 || _0x9787x21) + "", _0x9787x2c ? _0x9787x6.resolveWith(_0x9787xd, [_0x9787x8, _0x9787x21, _0x9787x14]) : _0x9787x6.rejectWith(_0x9787xd, [_0x9787x14, _0x9787x21, _0x9787x9]), _0x9787x14.statusCode(_0x9787x2f), _0x9787x2f = void 0, _0x9787x7 && _0x9787x13.trigger(_0x9787x2c ? "ajaxSuccess" : "ajaxError", [_0x9787x14, _0x9787x22, _0x9787x2c ? _0x9787x8 : _0x9787x9]), _0x9787x11.fireWith(_0x9787xd, [_0x9787x14, _0x9787x21]), _0x9787x7 && (_0x9787x13.trigger("ajaxComplete", [_0x9787x14, _0x9787x22]), --_0x9787x5.active || _0x9787x5.event.trigger("ajaxStop")));
    }
    return _0x9787x14;
  }, getJSON: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    return _0x9787x5.get(_0x9787xa, _0x9787x16, _0x9787xc, "json");
  }, getScript: function (_0x9787xa, _0x9787x16) {
    return _0x9787x5.get(_0x9787xa, void 0, _0x9787x16, "script");
  }}), _0x9787x5.each(["get", "post"], function (_0x9787xa, _0x9787x16) {
    _0x9787x5[_0x9787x16] = function (_0x9787xa, _0x9787xc, _0x9787xb, e) {
      return _0x9787x5.isFunction(_0x9787xc) && (e = e || _0x9787xb, _0x9787xb = _0x9787xc, _0x9787xc = void 0), _0x9787x5.ajax({url: _0x9787xa, type: _0x9787x16, dataType: e, data: _0x9787xc, success: _0x9787xb});
    };
  }), _0x9787x5.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_0x9787xa, _0x9787x16) {
    _0x9787x5.fn[_0x9787x16] = function (_0x9787xa) {
      return this.on(_0x9787x16, _0x9787xa);
    };
  }), _0x9787x5._evalUrl = function (_0x9787xa) {
    return _0x9787x5.ajax({url: _0x9787xa, type: "GET", dataType: "script", async: false, global: false, throws: true});
  }, _0x9787x5.fn.extend({wrapAll: function (_0x9787xa) {
    var _0x9787x16;
    return _0x9787x5.isFunction(_0x9787xa) ? this.each(function (_0x9787x16) {
      _0x9787x5(this).wrapAll(_0x9787xa.call(this, _0x9787x16));
    }) : (this[0] && (_0x9787x16 = _0x9787x5(_0x9787xa, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && _0x9787x16.insertBefore(this[0]), _0x9787x16.map(function () {
      var _0x9787xa = this;
      while (_0x9787xa.firstElementChild) {
        _0x9787xa = _0x9787xa.firstElementChild;
      }
      ;
      return _0x9787xa;
    }).append(this)), this);
  }, wrapInner: function (_0x9787xa) {
    return this.each(_0x9787x5.isFunction(_0x9787xa) ? function (_0x9787x16) {
      _0x9787x5(this).wrapInner(_0x9787xa.call(this, _0x9787x16));
    } : function () {
      var _0x9787x16 = _0x9787x5(this), _0x9787xc = _0x9787x16.contents();
      _0x9787xc.length ? _0x9787xc.wrapAll(_0x9787xa) : _0x9787x16.append(_0x9787xa);
    });
  }, wrap: function (_0x9787xa) {
    var _0x9787x16 = _0x9787x5.isFunction(_0x9787xa);
    return this.each(function (_0x9787xc) {
      _0x9787x5(this).wrapAll(_0x9787x16 ? _0x9787xa.call(this, _0x9787xc) : _0x9787xa);
    });
  }, unwrap: function () {
    return this.parent().each(function () {
      _0x9787x5.nodeName(this, "body") || _0x9787x5(this).replaceWith(this.childNodes);
    }).end();
  }}), _0x9787x5.expr.filters.hidden = function (_0x9787xa) {
    return _0x9787xa.offsetWidth <= 0 && _0x9787xa.offsetHeight <= 0;
  }, _0x9787x5.expr.filters.visible = function (_0x9787xa) {
    return !_0x9787x5.expr.filters.hidden(_0x9787xa);
  };
  var _0x9787x92 = /%20/g, _0x9787x93 = /\[\]$/, _0x9787x94 = /\r?\n/g, _0x9787x95 = /^(?:submit|button|image|reset|file)$/i, _0x9787x96 = /^(?:input|select|textarea|keygen)/i;
  function _0x9787x97(_0x9787xa, _0x9787x16, _0x9787xc, _0x9787xb) {
    var e;
    if (_0x9787x5.isArray(_0x9787x16)) {
      _0x9787x5.each(_0x9787x16, function (_0x9787x16, e) {
        _0x9787xc || _0x9787x93.test(_0x9787xa) ? _0x9787xb(_0x9787xa, e) : _0x9787x97(_0x9787xa + "[" + ("object" == typeof e ? _0x9787x16 : "") + "]", e, _0x9787xc, _0x9787xb);
      });
    } else {
      if (_0x9787xc || "object" !== _0x9787x5.type(_0x9787x16)) {
        _0x9787xb(_0x9787xa, _0x9787x16);
      } else {
        for (e in _0x9787x16) {
          _0x9787x97(_0x9787xa + "[" + e + "]", _0x9787x16[e], _0x9787xc, _0x9787xb);
        }
      }
    }
  }
  _0x9787x5.param = function (_0x9787xa, _0x9787x16) {
    var _0x9787xc, _0x9787xb = [], e = function (_0x9787xa, _0x9787x16) {
      _0x9787x16 = _0x9787x5.isFunction(_0x9787x16) ? _0x9787x16() : null == _0x9787x16 ? "" : _0x9787x16, _0x9787xb[_0x9787xb.length] = encodeURIComponent(_0x9787xa) + "=" + encodeURIComponent(_0x9787x16);
    };
    if (void 0 === _0x9787x16 && (_0x9787x16 = _0x9787x5.ajaxSettings && _0x9787x5.ajaxSettings.traditional), _0x9787x5.isArray(_0x9787xa) || _0x9787xa.jquery && !_0x9787x5.isPlainObject(_0x9787xa)) {
      _0x9787x5.each(_0x9787xa, function () {
        e(this.name, this.value);
      });
    } else {
      for (_0x9787xc in _0x9787xa) {
        _0x9787x97(_0x9787xc, _0x9787xa[_0x9787xc], _0x9787x16, e);
      }
    }
    ;
    return _0x9787xb.join("&").replace(_0x9787x92, "+");
  }, _0x9787x5.fn.extend({serialize: function () {
    return _0x9787x5.param(this.serializeArray());
  }, serializeArray: function () {
    return this.map(function () {
      var _0x9787xa = _0x9787x5.prop(this, "elements");
      return _0x9787xa ? _0x9787x5.makeArray(_0x9787xa) : this;
    }).filter(function () {
      var _0x9787xa = this.type;
      return this.name && !_0x9787x5(this).is(":disabled") && _0x9787x96.test(this.nodeName) && !_0x9787x95.test(_0x9787xa) && (this.checked || !_0x9787x1c.test(_0x9787xa));
    }).map(function (_0x9787xa, _0x9787x16) {
      var _0x9787xc = _0x9787x5(this).val();
      return null == _0x9787xc ? null : _0x9787x5.isArray(_0x9787xc) ? _0x9787x5.map(_0x9787xc, function (_0x9787xa) {
        return {name: _0x9787x16.name, value: _0x9787xa.replace(_0x9787x94, "\r\n")};
      }) : {name: _0x9787x16.name, value: _0x9787xc.replace(_0x9787x94, "\r\n")};
    }).get();
  }}), _0x9787x5.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest;
    } catch (_0x9787xa) {}
  };
  var _0x9787x98 = 0, _0x9787x99 = {}, _0x9787x9a = {0: 200, 1223: 204}, _0x9787x9b = _0x9787x5.ajaxSettings.xhr();
  _0x9787xa.ActiveXObject && _0x9787x5(_0x9787xa).on("unload", function () {
    for (var _0x9787xa in _0x9787x99) {
      _0x9787x99[_0x9787xa]();
    }
  }), _0x9787x22.cors = !!_0x9787x9b && "withCredentials" in _0x9787x9b, _0x9787x22.ajax = _0x9787x9b = !!_0x9787x9b, _0x9787x5.ajaxTransport(function (_0x9787xa) {
    var _0x9787x16;
    return _0x9787x22.cors || _0x9787x9b && !_0x9787xa.crossDomain ? {send: function (_0x9787xc, _0x9787xb) {
      var e, _0x9787x12 = _0x9787xa.xhr(), _0x9787x10 = ++_0x9787x98;
      if (_0x9787x12.open(_0x9787xa.type, _0x9787xa.url, _0x9787xa.async, _0x9787xa.username, _0x9787xa.password), _0x9787xa.xhrFields) {
        for (e in _0x9787xa.xhrFields) {
          _0x9787x12[e] = _0x9787xa.xhrFields[e];
        }
      }
      ;
      _0x9787xa.mimeType && _0x9787x12.overrideMimeType && _0x9787x12.overrideMimeType(_0x9787xa.mimeType), _0x9787xa.crossDomain || _0x9787xc["X-Requested-With"] || (_0x9787xc["X-Requested-With"] = "XMLHttpRequest");
      for (e in _0x9787xc) {
        _0x9787x12.setRequestHeader(e, _0x9787xc[e]);
      }
      ;
      _0x9787x16 = function (_0x9787xa) {
        return function () {
          _0x9787x16 && (delete _0x9787x99[_0x9787x10], _0x9787x16 = _0x9787x12.onload = _0x9787x12.onerror = null, "abort" === _0x9787xa ? _0x9787x12.abort() : "error" === _0x9787xa ? _0x9787xb(_0x9787x12.status, _0x9787x12.statusText) : _0x9787xb(_0x9787x9a[_0x9787x12.status] || _0x9787x12.status, _0x9787x12.statusText, "string" == typeof _0x9787x12.responseText ? {text: _0x9787x12.responseText} : void 0, _0x9787x12.getAllResponseHeaders()));
        };
      }, _0x9787x12.onload = _0x9787x16(), _0x9787x12.onerror = _0x9787x16("error"), _0x9787x16 = _0x9787x99[_0x9787x10] = _0x9787x16("abort");
      try {
        _0x9787x12.send(_0x9787xa.hasContent && _0x9787xa.data || null);
      } catch (_0x9787xf) {
        if (_0x9787x16) {
          throw _0x9787xf;
        }
      }
    }, abort: function () {
      _0x9787x16 && _0x9787x16();
    }} : void 0;
  }), _0x9787x5.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (_0x9787xa) {
    return _0x9787x5.globalEval(_0x9787xa), _0x9787xa;
  }}}), _0x9787x5.ajaxPrefilter("script", function (_0x9787xa) {
    void 0 === _0x9787xa.cache && (_0x9787xa.cache = false), _0x9787xa.crossDomain && (_0x9787xa.type = "GET");
  }), _0x9787x5.ajaxTransport("script", function (_0x9787xa) {
    if (_0x9787xa.crossDomain) {
      var _0x9787x16, _0x9787xc;
      return {send: function (_0x9787xb, e) {
        _0x9787x16 = _0x9787x5("<script>").prop({async: true, charset: _0x9787xa.scriptCharset, src: _0x9787xa.url}).on("load error", _0x9787xc = function (_0x9787xa) {
          _0x9787x16.remove(), _0x9787xc = null, _0x9787xa && e("error" === _0x9787xa.type ? 404 : 200, _0x9787xa.type);
        }), _0x9787xd.head.appendChild(_0x9787x16[0]);
      }, abort: function () {
        _0x9787xc && _0x9787xc();
      }};
    }
  });
  var _0x9787x9c = [], _0x9787x9d = /(=)\?(?=&|$)|\?\?/;
  _0x9787x5.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
    var _0x9787xa = _0x9787x9c.pop() || _0x9787x5.expando + "_" + _0x9787x7f++;
    return this[_0x9787xa] = true, _0x9787xa;
  }}), _0x9787x5.ajaxPrefilter("json jsonp", function (_0x9787x16, _0x9787xc, _0x9787xb) {
    var e, _0x9787x12, _0x9787x10, _0x9787xf = _0x9787x16.jsonp !== false && (_0x9787x9d.test(_0x9787x16.url) ? "url" : "string" == typeof _0x9787x16.data && !(_0x9787x16.contentType || "").indexOf("application/x-www-form-urlencoded") && _0x9787x9d.test(_0x9787x16.data) && "data");
    return _0x9787xf || "jsonp" === _0x9787x16.dataTypes[0] ? (e = _0x9787x16.jsonpCallback = _0x9787x5.isFunction(_0x9787x16.jsonpCallback) ? _0x9787x16.jsonpCallback() : _0x9787x16.jsonpCallback, _0x9787xf ? _0x9787x16[_0x9787xf] = _0x9787x16[_0x9787xf].replace(_0x9787x9d, "$1" + e) : _0x9787x16.jsonp !== false && (_0x9787x16.url += (_0x9787x80.test(_0x9787x16.url) ? "&" : "?") + _0x9787x16.jsonp + "=" + e), _0x9787x16.converters["script json"] = function () {
      return _0x9787x10 || _0x9787x5.error(e + " was not called"), _0x9787x10[0];
    }, _0x9787x16.dataTypes[0] = "json", _0x9787x12 = _0x9787xa[e], _0x9787xa[e] = function () {
      _0x9787x10 = arguments;
    }, _0x9787xb.always(function () {
      _0x9787xa[e] = _0x9787x12, _0x9787x16[e] && (_0x9787x16.jsonpCallback = _0x9787xc.jsonpCallback, _0x9787x9c.push(e)), _0x9787x10 && _0x9787x5.isFunction(_0x9787x12) && _0x9787x12(_0x9787x10[0]), _0x9787x10 = _0x9787x12 = void 0;
    }), "script") : void 0;
  }), _0x9787x5.parseHTML = function (_0x9787xa, _0x9787x16, _0x9787xc) {
    if (!_0x9787xa || "string" != typeof _0x9787xa) {
      return null;
    }
    ;
    "boolean" == typeof _0x9787x16 && (_0x9787xc = _0x9787x16, _0x9787x16 = false), _0x9787x16 = _0x9787x16 || _0x9787xd;
    var _0x9787xb = _0x9787x14.exec(_0x9787xa), e = !_0x9787xc && [];
    return _0x9787xb ? [_0x9787x16.createElement(_0x9787xb[1])] : (_0x9787xb = _0x9787x5.buildFragment([_0x9787xa], _0x9787x16, e), e && e.length && _0x9787x5(e).remove(), _0x9787x5.merge([], _0x9787xb.childNodes));
  };
  var _0x9787x9e = _0x9787x5.fn.load;
  _0x9787x5.fn.load = function (_0x9787xa, _0x9787x16, _0x9787xc) {
    if ("string" != typeof _0x9787xa && _0x9787x9e) {
      return _0x9787x9e.apply(this, arguments);
    }
    ;
    var _0x9787xb, e, _0x9787x12, _0x9787x10 = this, _0x9787xf = _0x9787xa.indexOf(" ");
    return _0x9787xf >= 0 && (_0x9787xb = _0x9787x5.trim(_0x9787xa.slice(_0x9787xf)), _0x9787xa = _0x9787xa.slice(0, _0x9787xf)), _0x9787x5.isFunction(_0x9787x16) ? (_0x9787xc = _0x9787x16, _0x9787x16 = void 0) : _0x9787x16 && "object" == typeof _0x9787x16 && (e = "POST"), _0x9787x10.length > 0 && _0x9787x5.ajax({url: _0x9787xa, type: e, dataType: "html", data: _0x9787x16}).done(function (_0x9787xa) {
      _0x9787x12 = arguments, _0x9787x10.html(_0x9787xb ? _0x9787x5("<div>").append(_0x9787x5.parseHTML(_0x9787xa)).find(_0x9787xb) : _0x9787xa);
    }).complete(_0x9787xc && function (_0x9787xa, _0x9787x16) {
      _0x9787x10.each(_0x9787xc, _0x9787x12 || [_0x9787xa.responseText, _0x9787x16, _0x9787xa]);
    }), this;
  }, _0x9787x5.expr.filters.animated = function (_0x9787xa) {
    return _0x9787x5.grep(_0x9787x5.timers, function (_0x9787x16) {
      return _0x9787xa === _0x9787x16.elem;
    }).length;
  };
  var _0x9787x9f = _0x9787xa.document.documentElement;
  function _0x9787xa0(_0x9787xa) {
    return _0x9787x5.isWindow(_0x9787xa) ? _0x9787xa : 9 === _0x9787xa.nodeType && _0x9787xa.defaultView;
  }
  _0x9787x5.offset = {setOffset: function (_0x9787xa, _0x9787x16, _0x9787xc) {
    var _0x9787xb, e, _0x9787x12, _0x9787x10, _0x9787xf, _0x9787x7, _0x9787x2c, _0x9787x22 = _0x9787x5.css(_0x9787xa, "position"), _0x9787xd = _0x9787x5(_0x9787xa), _0x9787x13 = {};
    "static" === _0x9787x22 && (_0x9787xa.style.position = "relative"), _0x9787xf = _0x9787xd.offset(), _0x9787x12 = _0x9787x5.css(_0x9787xa, "top"), _0x9787x7 = _0x9787x5.css(_0x9787xa, "left"), _0x9787x2c = ("absolute" === _0x9787x22 || "fixed" === _0x9787x22) && (_0x9787x12 + _0x9787x7).indexOf("auto") > -1, _0x9787x2c ? (_0x9787xb = _0x9787xd.position(), _0x9787x10 = _0x9787xb.top, e = _0x9787xb.left) : (_0x9787x10 = parseFloat(_0x9787x12) || 0, e = parseFloat(_0x9787x7) || 0), _0x9787x5.isFunction(_0x9787x16) && (_0x9787x16 = _0x9787x16.call(_0x9787xa, _0x9787xc, _0x9787xf)), null != _0x9787x16.top && (_0x9787x13.top = _0x9787x16.top - _0x9787xf.top + _0x9787x10), null != _0x9787x16.left && (_0x9787x13.left = _0x9787x16.left - _0x9787xf.left + e), "using" in _0x9787x16 ? _0x9787x16.using.call(_0x9787xa, _0x9787x13) : _0x9787xd.css(_0x9787x13);
  }}, _0x9787x5.fn.extend({offset: function (_0x9787xa) {
    if (arguments.length) {
      return void 0 === _0x9787xa ? this : this.each(function (_0x9787x16) {
        _0x9787x5.offset.setOffset(this, _0x9787xa, _0x9787x16);
      });
    }
    ;
    var _0x9787x16, _0x9787xc, _0x9787xb = this[0], e = {top: 0, left: 0}, _0x9787x12 = _0x9787xb && _0x9787xb.ownerDocument;
    if (_0x9787x12) {
      return _0x9787x16 = _0x9787x12.documentElement, _0x9787x5.contains(_0x9787x16, _0x9787xb) ? (typeof _0x9787xb.getBoundingClientRect !== _0x9787x29 && (e = _0x9787xb.getBoundingClientRect()), _0x9787xc = _0x9787xa0(_0x9787x12), {top: e.top + _0x9787xc.pageYOffset - _0x9787x16.clientTop, left: e.left + _0x9787xc.pageXOffset - _0x9787x16.clientLeft}) : e;
    }
  }, position: function () {
    if (this[0]) {
      var _0x9787xa, _0x9787x16, _0x9787xc = this[0], _0x9787xb = {top: 0, left: 0};
      return "fixed" === _0x9787x5.css(_0x9787xc, "position") ? _0x9787x16 = _0x9787xc.getBoundingClientRect() : (_0x9787xa = this.offsetParent(), _0x9787x16 = this.offset(), _0x9787x5.nodeName(_0x9787xa[0], "html") || (_0x9787xb = _0x9787xa.offset()), _0x9787xb.top += _0x9787x5.css(_0x9787xa[0], "borderTopWidth", true), _0x9787xb.left += _0x9787x5.css(_0x9787xa[0], "borderLeftWidth", true)), {top: _0x9787x16.top - _0x9787xb.top - _0x9787x5.css(_0x9787xc, "marginTop", true), left: _0x9787x16.left - _0x9787xb.left - _0x9787x5.css(_0x9787xc, "marginLeft", true)};
    }
  }, offsetParent: function () {
    return this.map(function () {
      var _0x9787xa = this.offsetParent || _0x9787x9f;
      while (_0x9787xa && !_0x9787x5.nodeName(_0x9787xa, "html") && "static" === _0x9787x5.css(_0x9787xa, "position")) {
        _0x9787xa = _0x9787xa.offsetParent;
      }
      ;
      return _0x9787xa || _0x9787x9f;
    });
  }}), _0x9787x5.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (_0x9787x16, _0x9787xc) {
    var _0x9787xb = "pageYOffset" === _0x9787xc;
    _0x9787x5.fn[_0x9787x16] = function (e) {
      return _0x9787x36(this, function (_0x9787x16, e, _0x9787x12) {
        var _0x9787x10 = _0x9787xa0(_0x9787x16);
        return void 0 === _0x9787x12 ? _0x9787x10 ? _0x9787x10[_0x9787xc] : _0x9787x16[e] : void (_0x9787x10 ? _0x9787x10.scrollTo(_0x9787xb ? _0x9787xa.pageXOffset : _0x9787x12, _0x9787xb ? _0x9787x12 : _0x9787xa.pageYOffset) : _0x9787x16[e] = _0x9787x12);
      }, _0x9787x16, e, arguments.length, null);
    };
  }), _0x9787x5.each(["top", "left"], function (_0x9787xa, _0x9787x16) {
    _0x9787x5.cssHooks[_0x9787x16] = _0x9787x5f(_0x9787x22.pixelPosition, function (_0x9787xa, _0x9787xc) {
      return _0x9787xc ? (_0x9787xc = _0x9787x5d(_0x9787xa, _0x9787x16), _0x9787x5b.test(_0x9787xc) ? _0x9787x5(_0x9787xa).position()[_0x9787x16] + "px" : _0x9787xc) : void 0;
    });
  }), _0x9787x5.each({Height: "height", Width: "width"}, function (_0x9787xa, _0x9787x16) {
    _0x9787x5.each({padding: "inner" + _0x9787xa, content: _0x9787x16, "": "outer" + _0x9787xa}, function (_0x9787xc, _0x9787xb) {
      _0x9787x5.fn[_0x9787xb] = function (_0x9787xb, e) {
        var _0x9787x12 = arguments.length && (_0x9787xc || "boolean" != typeof _0x9787xb), _0x9787x10 = _0x9787xc || (_0x9787xb === true || e === true ? "margin" : "border");
        return _0x9787x36(this, function (_0x9787x16, _0x9787xc, _0x9787xb) {
          var e;
          return _0x9787x5.isWindow(_0x9787x16) ? _0x9787x16.document.documentElement["client" + _0x9787xa] : 9 === _0x9787x16.nodeType ? (e = _0x9787x16.documentElement, Math.max(_0x9787x16.body["scroll" + _0x9787xa], e["scroll" + _0x9787xa], _0x9787x16.body["offset" + _0x9787xa], e["offset" + _0x9787xa], e["client" + _0x9787xa])) : void 0 === _0x9787xb ? _0x9787x5.css(_0x9787x16, _0x9787xc, _0x9787x10) : _0x9787x5.style(_0x9787x16, _0x9787xc, _0x9787xb, _0x9787x10);
        }, _0x9787x16, _0x9787x12 ? _0x9787xb : void 0, _0x9787x12, null);
      };
    });
  }), _0x9787x5.fn.size = function () {
    return this.length;
  }, _0x9787x5.fn.andSelf = _0x9787x5.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return _0x9787x5;
  });
  var _0x9787xa1 = _0x9787xa.jQuery, _0x9787xa2 = _0x9787xa.$;
  return _0x9787x5.noConflict = function (_0x9787x16) {
    return _0x9787xa.$ === _0x9787x5 && (_0x9787xa.$ = _0x9787xa2), _0x9787x16 && _0x9787xa.jQuery === _0x9787x5 && (_0x9787xa.jQuery = _0x9787xa1), _0x9787x5;
  }, typeof _0x9787x16 === _0x9787x29 && (_0x9787xa.jQuery = _0x9787xa.$ = _0x9787x5), _0x9787x5;
});
var comAPI = {VERSION: "1.1.0", initCallbackObj: null, _isFullscreen: false, get fullscreenEnabled() {
  var _0x9787xa5 = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
  return !!_0x9787xa5;
}, fullscreen: function (_0x9787xa6) {
  if (!comAPI.fullscreenEnabled) {
    return;
  }
  ;
  if (!_0x9787xa6) {
    _0x9787xa6 = document.documentElement;
  }
  ;
  if (_0x9787xa6.requestFullscreen) {
    _0x9787xa6.requestFullscreen();
  } else {
    if (_0x9787xa6.msRequestFullscreen) {
      _0x9787xa6.msRequestFullscreen();
    } else {
      if (_0x9787xa6.mozRequestFullScreen) {
        _0x9787xa6.mozRequestFullScreen();
      } else {
        if (_0x9787xa6.webkitRequestFullScreen) {
          _0x9787xa6.webkitRequestFullScreen();
        }
      }
    }
  }
}, exitFullscreen: function () {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else {
    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else {
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
}, onFullscreenChanged: function (_0x9787xa7) {
  comAPI._isFullscreen = !comAPI._isFullscreen;
}};
comAPI.config = {ForJoyH5_InGameAdInterval: 30, ForJoyH5_InGameAdType: "0,1"};
comAPI.resize = {_timerID: null, _queue: [], get sw() {
  return $(window).width();
}, get sh() {
  return $(window).height();
}, indexOf: function (_0x9787xaa, _0x9787xab) {
  var _0x9787x7 = 0, _0x9787xac = this._queue.length;
  for (_0x9787x7 = 0; _0x9787x7 < _0x9787xac; _0x9787x7++) {
    var _0x9787xad = this._queue[_0x9787x7];
    if (_0x9787xad.callback == _0x9787xaa && _0x9787xad.context == _0x9787xab) {
      return _0x9787x7;
    }
  }
  ;
  return -1;
}, add: function (_0x9787xaa, _0x9787xab, _0x9787x40) {
  var _0x9787xae = this.indexOf(_0x9787xaa, _0x9787xab);
  if (_0x9787xae == -1) {
    if (_0x9787x40 && _0x9787x40.constructor != Array) {
      _0x9787x40 = [_0x9787x40];
    }
    ;
    this._queue.push({callback: _0x9787xaa, context: _0x9787xab, params: _0x9787x40});
  } else {}
}, remove: function (_0x9787xaf, _0x9787xab) {
  var _0x9787xae = -1;
  if (_0x9787xaf.constructor == Number) {
    _0x9787xae = _0x9787xaf;
  } else {
    _0x9787xae = this.indexOf(_0x9787xaf, _0x9787xab);
  }
  ;
  if (_0x9787xae > -1) {
    delete this._queue[_0x9787xae];
    this._queue.splice(_0x9787xae, 1);
  } else {}
}, handler: function (_0x9787xa7) {
  if (comAPI.resize._timerID) {
    clearTimeout(comAPI.resize._timerID);
  }
  ;
  comAPI.resize._timerID = setTimeout(comAPI.resize._onHandler, 50);
}, _onHandler: function (_0x9787xa7) {
  var _0x9787x7 = 0, _0x9787xac = comAPI.resize._queue.length;
  for (_0x9787x7 = 0; _0x9787x7 < _0x9787xac; _0x9787x7++) {
    var _0x9787xad = comAPI.resize._queue[_0x9787x7];
    try {
      var _0x9787xb0 = _0x9787xad.callback;
      var _0x9787xab = _0x9787xad.context;
      var _0x9787x40 = _0x9787xad.params;
      _0x9787xb0.apply(_0x9787xab, _0x9787x40);
    } catch (e) {
      this.remove();
    }
  }
}};
comAPI.ad = {_callbackObj: null, intervalID: -1, _lastInGameAdTime: -1, _loaded: false, _isAds: false, _requesting: false, _imaContainer: null, _videoContent: null, _adsManager: null, _adsLoader: null, _adsRequest: null, _finishedPre: false, get finishedPre() {
  return this._finishedPre;
}, set finishedPre (_0x9787xb2) {
  this._finishedPre = _0x9787xb2;
}, get adType() {
  var _0x9787xb4 = comAPI.config.ForJoyH5_PreGameAdType;
  if (comAPI.ad.finishedPre) {
    _0x9787xb4 = comAPI.config.ForJoyH5_InGameAdType;
  }
  ;
  switch (_0x9787xb4) {
    case 0:
      return "all";
      break;
    case 1:
      return "onlyskipable";
      break;
    case 2:
      return "no";
      break;
  }
}, get adTagUrl() {
  var _0x9787x3c = encodeURIComponent(window.location);
  if (!comAPI.ad._isAds) {
    var _0x9787xb6 = "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Preroll&description_url=" + encodeURIComponent(window.location.href) + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=" + Math.floor(Math.random() * 1e7);
  } else {
    localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/93656639,22648002686/gamemonetize.co/gamemonetize.co_vast_game&description_url=" + _0x9787x3c + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
  }
  ;
  return _0x9787xb6;
}, check: function () {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    comAPI.config.debug = true;
    return true;
  }
  ;
  return true;
}, _init: function () {
  if (comAPI.ad.intervalID == -1) {
    comAPI.ad.intervalID = setTimeout(comAPI.ad.onAdClose, 3e4);
  }
  ;
  comAPI.ad._imaContainer = $("#imaContainer")[0];
  comAPI.ad._videoContent = $("#imaVideo")[0];
  var _0x9787xb7 = new google.ima.AdDisplayContainer(comAPI.ad._imaContainer, comAPI.ad._videoContent);
  _0x9787xb7.initialize();
  comAPI.ad._adsLoader = new google.ima.AdsLoader(_0x9787xb7);
  comAPI.ad._adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, comAPI.ad.onAdsManagerLoaded, false);
  comAPI.ad._adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, comAPI.ad.onAdError, false);
  comAPI.ad._videoContent.onended = comAPI.ad.contentEndedListener;
  comAPI.ad._adsRequest = new google.ima.AdsRequest;
  comAPI.ad._adsRequest.adTagUrl = comAPI.ad.adTagUrl;
  comAPI.ad._adsRequest.linearAdSlotWidth = $(window).width();
  comAPI.ad._adsRequest.linearAdSlotHeight = $(window).height();
  comAPI.ad._adsRequest.nonLinearAdSlotWidth = $(window).width();
  comAPI.ad._adsRequest.nonLinearAdSlotHeight = $(window).height();
  comAPI.ad._adsRequest.forceNonLinearFullSlot = true;
  comAPI.resize.add(comAPI.ad.resizeAd, comAPI.ad);
}, init: function () {
  var _0x9787xb8 = document.referrer;
  _0x9787xb8 = _0x9787xb8.substr(_0x9787xb8.indexOf("://") + 1);
  if ((comAPI.config.ForJoyH5_ShowPreGameAd || _0x9787xb8.indexOf(comAPI.config.host) == 0) && comAPI.config.ForJoyH5_stats) {
    comAPI.ad.show();
  } else {
    comAPI.ad.onAdClose();
  }
}, onAdsManagerLoaded: function (_0x9787xb9) {
  comAPI.ad._adsManager = _0x9787xb9.getAdsManager(comAPI.ad._videoContent);
  comAPI.ad._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, comAPI.ad.onAdError);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, comAPI.ad.onAllAdsCompleted);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, comAPI.ad.onUserClose);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, comAPI.ad.onAdComplete);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, comAPI.ad.onAdLoaded);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, comAPI.ad.onTypeTest1);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, comAPI.ad.onContentResumeRequested);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOG, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, comAPI.ad.onTypeTest);
  comAPI.ad._adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.FULLSCREEN);
  comAPI.ad._adsManager.start();
}, onContentResumeRequested: function (_0x9787xa7) {
  comAPI.ad.onAdClose();
  console.log("resume game");
}, onTypeTest: function (_0x9787xa7) {}, onTypeTest1: function (_0x9787xa7) {
  window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
}, onAdLoaded: function (_0x9787xa7) {
  clearTimeout(comAPI.ad.intervalID);
  $(comAPI.ad._imaContainer).css("visibility", "visible");
  $(comAPI.ad._imaContainer).children(":first").css("visibility", "visible");
  comAPI.ad._loaded = true;
  var _0x9787xba = comAPI.ad._adsManager.getCurrentAd().getContentType();
  var _0x9787xbb = 0;
  if (_0x9787xba == "text") {
    _0x9787xbb = 0;
  } else {
    if (_0x9787xba == "image/png") {
      _0x9787xbb = 1;
    } else {
      _0x9787xbb = 2;
    }
  }
}, contentEndedListener: function () {
  comAPI.ad._adsLoader.contentComplete();
}, onAdError: function (_0x9787xbc) {
  console.warn(_0x9787xbc.getError());
  comAPI.ad.onAdClose();
  window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
  if (comAPI.ad._isAds == false) {
    comAPI.ad._isAds = true;
    comAPI.ad._init();
    ShowAds2();
  }
}, onAdComplete: function (_0x9787xa7) {}, onAllAdsCompleted: function (_0x9787xa7) {
  comAPI.ad.onAdClose();
}, onAdClose: function () {
  var _0x9787xbb = "AD_CLOSE";
  if (comAPI.ad.finishedPre == false) {
    _0x9787xbb = _0x9787xbb + "_PRE";
    comAPI.ad.finishedPre = true;
  }
  ;
  comAPI.ad.close();
  window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
}, onUserClose: function (_0x9787xa7) {
  comAPI.ad.onAdClose();
}, resizeAd: function () {
  if (comAPI.ad._adsManager) {
    comAPI.ad._adsManager.resize($(window).width(), $(window).height(), google.ima.ViewMode.FULLSCREEN);
  }
}, _onFinishedAd: function () {
  var _0x9787xbd = comAPI.ad._onExecRAD();
  if (!_0x9787xbd) {
    comAPI.ad._onExecIAD();
  }
  ;
  comAPI.ad._callbackObj = null;
}, _onExecIAD: function () {
  var _0x9787xbe = comAPI.ad._callbackObj;
  if (!_0x9787xbe) {
    return false;
  }
  ;
  var _0x9787xaa = _0x9787xbe.callback;
  var _0x9787xbf = _0x9787xbe.thisObj;
  var _0x9787xc0 = _0x9787xbe.args;
  return true;
}, _onExecRAD: function () {
  var _0x9787xbe = comAPI.ad._callbackObj;
  if (!_0x9787xbe) {
    return false;
  }
  ;
  var _0x9787xaa = _0x9787xbe.successCallback;
  var _0x9787xbf = _0x9787xbe.successThis;
  var _0x9787xc0 = _0x9787xbe.successArgs;
  return true;
}, getShowable: function (_0x9787xc1) {
  if (comAPI.ad._lastInGameAdTime === -1 || _0x9787xc1) {
    return true;
  }
  ;
  var _0x9787xc2 = (new Date).getTime();
  var _0x9787xc3 = _0x9787xc2 - comAPI.ad._lastInGameAdTime;
  if (_0x9787xc3 >= comAPI.config.ForJoyH5_InGameAdInterval * 1e3) {
    return true;
  } else {
    var _0x9787xc4 = Math.ceil(comAPI.config.ForJoyH5_InGameAdInterval - _0x9787xc3 / 1e3);
    return false;
  }
}, updateLastInGameAdTime: function () {
  var _0x9787xc2 = (new Date).getTime();
  comAPI.ad._lastInGameAdTime = _0x9787xc2;
}, show: function (_0x9787xc5, _0x9787xc1) {
  var _0x9787xc6 = comAPI.ad.getShowable(_0x9787xc1);
  comAPI.ad._callbackObj = _0x9787xc5;
  if (!_0x9787xc6 && _0x9787xc5) {
    comAPI.ad._onFinishedAd();
    return;
  }
  ;
  if (!comAPI.ad._adsRequest) {
    comAPI.ad._init();
  }
  ;
  if (comAPI.ad._requesting) {
    return;
  }
  ;
  if (_0x9787xc6 || _0x9787xc1) {
    comAPI.ad._requesting = true;
    clearTimeout(comAPI.ad.intervalID);
    comAPI.ad.intervalID = setTimeout(comAPI.ad.onAdClose, 3e4);
    $(comAPI.ad._imaContainer).css("display", "");
    comAPI.ad._adsLoader.requestAds(comAPI.ad._adsRequest);
    comAPI.ad.resizeAd();
  } else {
    comAPI.ad._onFinishedAd();
  }
}, close: function () {
  if (comAPI.ad._loaded == true) {
    comAPI.ad.updateLastInGameAdTime();
  }
  ;
  comAPI.ad._requesting = false;
  comAPI.ad._loaded = false;
  clearTimeout(comAPI.ad.intervalID);
  comAPI.ad._adsManager && comAPI.ad._adsManager.destroy();
  $(comAPI.ad._imaContainer).css("display", "none");
  comAPI.ad._onFinishedAd();
}};
function ShowAds() {
  var _0x9787x3b = window.location != window.parent.location ? document.referrer : document.location.href;
  try {
    var _0x9787x38 = "(gamemonetize.com|y8.com";
    $.getJSON("https://api.gamemonetize.com/data.json", function (_0x9787x39) {
      $.each(_0x9787x39, function (_0x9787x7, _0x9787x3a) {
        _0x9787x38 += "|" + _0x9787x3a.domain;
      });
      _0x9787x38 += ")";
      _0x9787x38 = new RegExp(_0x9787x38);
      if (_0x9787x3b.match(_0x9787x38)) {} else {
        if (comAPI.ad.getShowable()) {
          var _0x9787xbe = {callback: function () {}};
          comAPI.ad.show(_0x9787xbe, true);
          window.sdk.onPauseGame("Pause game requested from debugger", "warning");
          try {
            var _0x9787xc8 = '<div id="gmLoading" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABdCAYAAAB0HBXwAAAACXBIWXMAAAsTAAALEwEAmpwYAAA532lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMC0wOC0yNlQxNzozMjoxNSswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjAtMDgtMjZUMTc6MzI6MTUrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplNGYxZGJiZi0zM2IwLWQ2NGMtOGU5Yy1lY2E5MDc4YjA2ZDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTA4LTI2VDE3OjMyOjE1KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQ4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/W7MMgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAA160lEQVR42uydebwkVXn+v1XV211n7izMDAPMAAPDJvumgAiKQJBFJS4oYGIScQXjLxqiRhQ1kcQ1YoyJCy4oQiKgiSCbIKDsMKzDNgMzzL7P3fp2d9Xvj/dU16nqqur1Lsyc5/Ppmb5dS1efPl3PebfntTzPY4piMbAQOAiYC8wHZgIDQAHIqf3KwCCwBVgPrAJeAZ4AXgaex8DAwMDAYIojM4Wu5WjgBOC1wGuAfTt03qeBR4A/AXcBj5mv3cDAwMBgqsGaZAv5ZOAc4NQOEnA9PAH8FrgeuNdMAQMDAwODnZWQdwcuAN6FuKMnEw8BPwWuAjab6WBgYGBgsDMQ8r7AR4G/QmLALcOtQLkkj8oYuC5gAR54LrgeWBZks5DJQa4LbCf1lOuB7wH/Aaww08LAwMDAYEck5PnApcCHWyZgF8ZGoDgExSJUilAqQakI5VGouLKPVxGyrlSEnB0H7Aw4GcjkobsP+mdBzzR5LQajwNeA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" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
            $("#imaContainer").append(_0x9787xc8);
          } catch (e) {}
        } else {}
      }
    });
  } catch (e) {
    if (_0x9787x3b.indexOf("gamemonetize.com") != -1 || _0x9787x3b.indexOf("y8.com") != -1) {} else {
      if (comAPI.ad.getShowable()) {
        var _0x9787xbe = {callback: function () {}};
        comAPI.ad.show(_0x9787xbe, true);
        window.sdk.onPauseGame("Pause game requested from debugger", "warning");
        try {
          var _0x9787xc8 = '<div id="gmLoading" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABdCAYAAAB0HBXwAAAACXBIWXMAAAsTAAALEwEAmpwYAAA532lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMC0wOC0yNlQxNzozMjoxNSswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjAtMDgtMjZUMTc6MzI6MTUrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplNGYxZGJiZi0zM2IwLWQ2NGMtOGU5Yy1lY2E5MDc4YjA2ZDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTA4LTI2VDE3OjMyOjE1KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQ4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/W7MMgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAA160lEQVR42uydebwkVXn+v1XV211n7izMDAPMAAPDJvumgAiKQJBFJS4oYGIScQXjLxqiRhQ1kcQ1YoyJCy4oQiKgiSCbIKDsMKzDNgMzzL7P3fp2d9Xvj/dU16nqqur1Lsyc5/Ppmb5dS1efPl3PebfntTzPY4piMbAQOAiYC8wHZgIDQAHIqf3KwCCwBVgPrAJeAZ4AXgaex8DAwMDAYIojM4Wu5WjgBOC1wGuAfTt03qeBR4A/AXcBj5mv3cDAwMBgqsGaZAv5ZOAc4NQOEnA9PAH8FrgeuNdMAQMDAwODnZWQdwcuAN6FuKMnEw8BPwWuAjab6WBgYGBgsDMQ8r7AR4G/QmLALcOtQLkkj8oYuC5gAR54LrgeWBZks5DJQa4LbCf1lOuB7wH/Aaww08LAwMDAYEck5PnApcCHWyZgF8ZGoDgExSJUilAqQakI5VGouLKPVxGyrlSEnB0H7Aw4GcjkobsP+mdBzzR5LQajwNeA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" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
          $("#imaContainer").append(_0x9787xc8);
        } catch (e) {}
      } else {}
    }
  }
}
function ShowAds2() {
  if (comAPI.ad.getShowable()) {
    var _0x9787xbe = {callback: function () {}};
    comAPI.ad.show(_0x9787xbe, true);
    window.sdk.onPauseGame("Pause game requested from debugger", "warning");
    try {
      var _0x9787xc8 = '<div id="gmLoading" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABdCAYAAAB0HBXwAAAACXBIWXMAAAsTAAALEwEAmpwYAAA532lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMC0wOC0yNlQxNzozMjoxNSswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjAtMDgtMjZUMTc6MzI6MTUrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplNGYxZGJiZi0zM2IwLWQ2NGMtOGU5Yy1lY2E5MDc4YjA2ZDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTA4LTI2VDE3OjMyOjE1KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQ4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/W7MMgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAA160lEQVR42uydebwkVXn+v1XV211n7izMDAPMAAPDJvumgAiKQJBFJS4oYGIScQXjLxqiRhQ1kcQ1YoyJCy4oQiKgiSCbIKDsMKzDNgMzzL7P3fp2d9Xvj/dU16nqqur1Lsyc5/Ppmb5dS1efPl3PebfntTzPY4piMbAQOAiYC8wHZgIDQAHIqf3KwCCwBVgPrAJeAZ4AXgaex8DAwMDAYIojM4Wu5WjgBOC1wGuAfTt03qeBR4A/AXcBj5mv3cDAwMBgqsGaZAv5ZOAc4NQOEnA9PAH8FrgeuNdMAQMDAwODnZWQdwcuAN6FuKMnEw8BPwWuAjab6WBgYGBgsDMQ8r7AR4G/QmLALcOtQLkkj8oYuC5gAR54LrgeWBZks5DJQa4LbCf1lOuB7wH/Aaww08LAwMDAYEck5PnApcCHWyZgF8ZGoDgExSJUilAqQakI5VGouLKPVxGyrlSEnB0H7Aw4GcjkobsP+mdBzzR5LQajwNeA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" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
      $("#imaContainer").append(_0x9787xc8);
    } catch (e) {}
  } else {}
}
tContainer = document.body || document.getElementsByTagName("body")[0];
var imaContainer = document.createElement("div");
imaContainer.id = "imaContainer", imaContainer.style.position = "absolute", imaContainer.style.zIndex = "10000", imaContainer.style.top = "0", imaContainer.style.left = "0", imaContainer.style.width = "100%", imaContainer.style.height = "100%", imaContainer.style.backgroundColor = "rgba(0, 0, 0, 1)", imaContainer.style.visibility = "hidden", imaContainer.style.overflow = "hidden";
var imaVideo = document.createElement("video");
imaVideo.id = "imaVideo";
try {
  tContainer.appendChild(this.imaContainer);
  this.imaContainer.appendChild(imaVideo);
} catch (e) {}
;
function promoVideo() {
  $("<style type='text/css'>.promo-container{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;position:absolute;width:100%;height:100%;top:0;left:0}.promo-display-container{flex-grow:1;position:relative}.promo-controls-container{padding:4px 0;text-align:right;visibility:hidden}.promo-display-container>div{box-sizing:border-box;width:0;height:0;min-height:100%;min-width:100%;max-width:100%;max-height:100%;overflow:hidden;position:absolute}#promo-message{box-sizing:border-box;padding:4px 16px;margin:auto;color:#fff;color:rgba(255,255,255,.8);font-family:Helvetica,Arial,sans-serif;font-size:14px;cursor:pointer;min-width:150px;float:left;text-align:left;margin-bottom:8px;font-weight:400;display:none}#promo-button{box-sizing:border-box;padding:4px 16px;margin:auto;border:1px solid rgba(255,255,255,.5);color:#fff;color:rgba(255,255,255,.8);font-family:Helvetica,Arial,sans-serif;font-size:18px;cursor:pointer;min-width:150px;margin-bottom:8px;background:#000}#promo-button:hover{background:linear-gradient(#a711b0,#821088)}#promo-button:active{background:linear-gradient(#a711b0,#821088)}#promo-button:disabled,#promo-button[disabled]{background:#000}.banner{z-index:1020;height:100%;display:flex!important;align-items:center;justify-content:center} </style>").appendTo("head");
  var _0x9787xcd = $.now();
  var _0x9787xce = '<div id="promo" style="display:none;z-index: 1030; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;"><div class="promo-container" style="background-color: black;"> <div class="promo-display-container"> <div id="preroll_banner_container"> <div id="preroll_banner" class="banner"> <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script><div id="preroll_banner_ad_' + _0x9787xcd + '"> <script>window.googletag=window.googletag ||{cmd: []}; googletag.cmd.push(function(){googletag.defineSlot("/21739493398/AdExchange-300x250-GameMonetize", [[300, 250], [250, 250], [300, 600], [200, 200], [300, 75], [120, 240], [180, 150], [240, 133], [300, 100]], "preroll_banner_ad_' + _0x9787xcd + '").addService(googletag.pubads()); googletag.enableServices(); googletag.display("preroll_banner_ad_' + _0x9787xcd + '");}); </script> </div></div></div></div><div class="promo-controls-container" style="visibility: visible;"> <button id="promo-button">You can skip this in <span id="preroll_time_5">5</span> secs</button> <span id="promo-message">Ad will be closed in <span id="preroll_full_time">31</span> secs</span> </div></div></div>';
  $("#imaContainer").append(_0x9787xce);
  $("#imaContainer").css("visibility", "visible");
  $("#promo").show();
  var _0x9787xcf = setInterval(function () {
    if (parseInt($("#preroll_full_time").html()) < 1) {
      $("#imaContainer").css("visibility", "hidden");
      $("#promo").remove();
      clearInterval(_0x9787xcf);
    }
    ;
    $("#preroll_full_time").html(parseInt($("#preroll_full_time").html()) - 1);
    if (parseInt($("#preroll_time_5").html()) < 1) {
      $("#promo-message").show();
      $("#promo-button").html("SKIP").on("click", function () {
        clearInterval(_0x9787xcf);
        $("#imaContainer").css("visibility", "hidden");
        $("#promo").remove();
      });
    } else {
      $("#preroll_time_5").html(parseInt($("#preroll_time_5").html()) - 1);
    }
  }, 1e3);
}
