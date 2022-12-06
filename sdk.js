var adxAds = true;
var adxAds2 = false;
!function e(krithi, fiifi, hazley) {
  function alkeria(kataleena, andia) {
    if (!fiifi[kataleena]) {
      if (!krithi[kataleena]) {
        var ivoryana = "function" == typeof require && require;
        if (!andia && ivoryana) {
          return ivoryana(kataleena, true);
        }
        ;
        if (joey) {
          return joey(kataleena, true);
        }
        ;
        var ber = new Error("Cannot find module '" + kataleena + "'");
        throw ber.code = "MODULE_NOT_FOUND", ber;
      }
      ;
      var darl = fiifi[kataleena] = {exports: {}};
      krithi[kataleena][0].call(darl.exports, function (e) {
        var stonie = krithi[kataleena][1][e];
        return alkeria(stonie || e);
      }, darl, darl.exports, e, krithi, fiifi, hazley);
    }
    ;
    return fiifi[kataleena].exports;
  }
  for (var joey = "function" == typeof require && require, aylarose = 0; aylarose < hazley.length; aylarose++) {
    alkeria(hazley[aylarose]);
  }
  ;
  return alkeria;
}({1: [function (e, marhsall, lille) {
  ("use strict");
  marhsall.exports = e("./").polyfill();
}, {"./": 2}], 2: [function (e, johnmichael, nayanah) {
  (function (kaise, fahmi) {
    !function (e, jearl) {
      "object" == typeof nayanah && void 0 !== johnmichael ? johnmichael.exports = jearl() : "function" == typeof define && define.amd ? define(jearl) : e.ES6Promise = jearl();
    }(this, function () {
      ("use strict");
      function sofina(e) {
        var ellan = typeof e;
        return null !== e && ("object" === ellan || "function" === ellan);
      }
      function naisaiah() {
        return void 0 !== cortisha ? function () {
          cortisha(hahna);
        } : leileen();
      }
      function leileen() {
        var e = setTimeout;
        return function () {
          return e(hahna, 1);
        };
      }
      function hahna() {
        for (var e = 0; e < oluwatoniloba; e += 2) {
          (0, deenie[e])(deenie[e + 1]), deenie[e] = void 0, deenie[e + 1] = void 0;
        }
        ;
        oluwatoniloba = 0;
      }
      function elnathan(e, forace) {
        var tevy = this, caludia = new this.constructor(fontella);
        void 0 === caludia[yovonda] && quaniesha(caludia);
        var copen = tevy._state;
        if (copen) {
          var nyri = arguments[copen - 1];
          cromwell(function () {
            return kahala(copen, caludia, nyri, tevy._result);
          });
        } else {
          ambr(tevy, caludia, e, forace);
        }
        ;
        return caludia;
      }
      function arlani(e) {
        var kynzlei = this;
        if (e && "object" == typeof e && e.constructor === kynzlei) {
          return e;
        }
        ;
        var caila = new kynzlei(fontella);
        return shyah(caila, e), caila;
      }
      function fontella() {}
      function linkon() {
        return new TypeError("You cannot resolve a promise with itself");
      }
      function lislie() {
        return new TypeError("A promises callback cannot return that same promise.");
      }
      function daylin(e) {
        try {
          return e.then;
        } catch (e) {
          return yamilette.error = e, yamilette;
        }
      }
      function suleyka(e, ileanna, kendrika, zahian) {
        try {
          e.call(ileanna, kendrika, zahian);
        } catch (e) {
          return e;
        }
      }
      function jesslyn(e, isidra, brhea) {
        cromwell(function (e) {
          var sosaia = false, kynlie = suleyka(brhea, isidra, function (iolana) {
            sosaia || (sosaia = true, isidra !== iolana ? shyah(e, iolana) : tamario(e, iolana));
          }, function (flamur) {
            sosaia || (sosaia = true, dollena(e, flamur));
          }, "Settle: " + (e._label || " unknown promise"));
          !sosaia && kynlie && (sosaia = true, dollena(e, kynlie));
        }, e);
      }
      function dejuna(e, linsey) {
        linsey._state === shaikha ? tamario(e, linsey._result) : linsey._state === corenne ? dollena(e, linsey._result) : ambr(linsey, void 0, function (prabhas) {
          return shyah(e, prabhas);
        }, function (xzavian) {
          return dollena(e, xzavian);
        });
      }
      function ruthey(e, paytynn, kashara) {
        paytynn.constructor === e.constructor && kashara === elnathan && paytynn.constructor.resolve === arlani ? dejuna(e, paytynn) : kashara === yamilette ? (dollena(e, yamilette.error), yamilette.error = null) : void 0 === kashara ? tamario(e, paytynn) : "function" == typeof kashara ? jesslyn(e, paytynn, kashara) : tamario(e, paytynn);
      }
      function shyah(e, quaterrius) {
        e === quaterrius ? dollena(e, linkon()) : sofina(quaterrius) ? ruthey(e, quaterrius, daylin(quaterrius)) : tamario(e, quaterrius);
      }
      function annaliese(e) {
        e._onerror && e._onerror(e._result), senteria(e);
      }
      function tamario(e, saja) {
        e._state === kathaline && (e._result = saja, e._state = shaikha, 0 !== e._subscribers.length && cromwell(senteria, e));
      }
      function dollena(e, evangelyne) {
        e._state === kathaline && (e._state = corenne, e._result = evangelyne, cromwell(annaliese, e));
      }
      function ambr(e, yerucham, annelis, donterious) {
        var ontonio = e._subscribers, endre = ontonio.length;
        e._onerror = null, ontonio[endre] = yerucham, ontonio[endre + shaikha] = annelis, ontonio[endre + corenne] = donterious, 0 === endre && e._state && cromwell(senteria, e);
      }
      function senteria(e) {
        var jerilynn = e._subscribers, yaqueline = e._state;
        if (0 !== jerilynn.length) {
          for (var kaashif = void 0, abrianna = void 0, jerhonda = e._result, delisa = 0; delisa < jerilynn.length; delisa += 3) {
            kaashif = jerilynn[delisa], abrianna = jerilynn[delisa + yaqueline], kaashif ? kahala(yaqueline, kaashif, abrianna, jerhonda) : abrianna(jerhonda);
          }
          ;
          e._subscribers.length = 0;
        }
      }
      function eon(e, kealii) {
        try {
          return e(kealii);
        } catch (e) {
          return yamilette.error = e, yamilette;
        }
      }
      function kahala(e, itzell, sharmeta, dacorion) {
        var darrett = "function" == typeof sharmeta, lynse = void 0, augustus = void 0, sridhar = void 0, lilliann = void 0;
        if (darrett) {
          if ((lynse = eon(sharmeta, dacorion)) === yamilette ? (lilliann = true, augustus = lynse.error, lynse.error = null) : sridhar = true, itzell === lynse) {
            return void dollena(itzell, lislie());
          }
        } else {
          lynse = dacorion, sridhar = true;
        }
        ;
        itzell._state !== kathaline || (darrett && sridhar ? shyah(itzell, lynse) : lilliann ? dollena(itzell, augustus) : e === shaikha ? tamario(itzell, lynse) : e === corenne && dollena(itzell, lynse));
      }
      function erselle(e, _0x9787x4) {
        try {
          brisco(function (veo) {
            shyah(e, veo);
          }, function (bashan) {
            dollena(e, bashan);
          });
        } catch (brisco) {
          dollena(e, brisco);
        }
      }
      function jaramy() {
        return kieron++;
      }
      function quaniesha(e) {
        e[yovonda] = kieron++, e._state = void 0, e._result = void 0, e._subscribers = [];
      }
      function jayziel() {
        return new Error("Array Methods must be provided an Array");
      }
      function adlai() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
      }
      function alixa() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
      var boston = void 0, kamariah = boston = Array.isArray ? Array.isArray : function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }, oluwatoniloba = 0, cortisha = void 0, temicka = void 0, cromwell = function (e, natalya) {
        deenie[oluwatoniloba] = e, deenie[oluwatoniloba + 1] = natalya, 2 === (oluwatoniloba += 2) && (temicka ? temicka(hahna) : gesele());
      }, fannye = "undefined" != typeof window ? window : void 0, laci = fannye || {}, khasai = laci.MutationObserver || laci.WebKitMutationObserver, florena = "undefined" == typeof self && void 0 !== kaise && "[object process]" === {}.toString.call(kaise), ridhwan = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, deenie = new Array(1e3), gesele = void 0;
      gesele = florena ? function () {
        return kaise.nextTick(hahna);
      } : khasai ? function () {
        var e = 0, bartolo = new khasai(hahna), masada = document.createTextNode("");
        return bartolo.observe(masada, {characterData: true}), function () {
          masada.data = e = ++e % 2;
        };
      }() : ridhwan ? function () {
        var e = new MessageChannel;
        return e.port1.onmessage = hahna, function () {
          return e.port2.postMessage(0);
        };
      }() : void 0 === fannye && "function" == typeof e ? function () {
        try {
          var e = Function("return this")().require("vertx");
          return cortisha = e.runOnLoop || e.runOnContext, naisaiah();
        } catch (e) {
          return leileen();
        }
      }() : leileen();
      var yovonda = Math.random().toString(36).substring(2), kathaline = void 0, shaikha = 1, corenne = 2, yamilette = {error: null}, kieron = 0, littleton = function () {
        function e(e, ellya) {
          this._instanceConstructor = e, this.promise = new e(fontella), this.promise[yovonda] || quaniesha(this.promise), kamariah(ellya) ? (this.length = ellya.length, this._remaining = ellya.length, this._result = new Array(this.length), 0 === this.length ? tamario(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(ellya), 0 === this._remaining && tamario(this.promise, this._result))) : dollena(this.promise, jayziel());
        }
        return e.prototype._enumerate = function (e) {
          for (var kacin = 0; this._state === kathaline && kacin < e.length; kacin++) {
            this._eachEntry(e[kacin], kacin);
          }
        }, e.prototype._eachEntry = function (e, lexianna) {
          var mikey = this._instanceConstructor, dill = mikey.resolve;
          if (dill === arlani) {
            var hopelyn = daylin(e);
            if (hopelyn === elnathan && e._state !== kathaline) {
              this._settledAt(e._state, lexianna, e._result);
            } else {
              if ("function" != typeof hopelyn) {
                this._remaining--, this._result[lexianna] = e;
              } else {
                if (mikey === kylieanna) {
                  var monta = new mikey(fontella);
                  ruthey(monta, e, hopelyn), this._willSettleAt(monta, lexianna);
                } else {
                  this._willSettleAt(new mikey(function (eunika) {
                    return eunika(e);
                  }), lexianna);
                }
              }
            }
          } else {
            this._willSettleAt(dill(e), lexianna);
          }
        }, e.prototype._settledAt = function (e, lynnzee, kashon) {
          var daniza = this.promise;
          daniza._state === kathaline && (this._remaining--, e === corenne ? dollena(daniza, kashon) : this._result[lynnzee] = kashon), 0 === this._remaining && tamario(daniza, this._result);
        }, e.prototype._willSettleAt = function (e, lorence) {
          var crescenzo = this;
          ambr(e, void 0, function (e) {
            return crescenzo._settledAt(shaikha, lorence, e);
          }, function (e) {
            return crescenzo._settledAt(corenne, lorence, e);
          });
        }, e;
      }(), kylieanna = function () {
        function e(feivel) {
          this[yovonda] = jaramy(), this._result = this._state = void 0, this._subscribers = [], fontella !== feivel && ("function" != typeof feivel && adlai(), this instanceof e ? erselle(this, feivel) : alixa());
        }
        return e.prototype.catch = function (e) {
          return this.then(null, e);
        }, e.prototype.finally = function (e) {
          var lucasalexander = this, indya = lucasalexander.constructor;
          return lucasalexander.then(function (renetha) {
            return indya.resolve(e()).then(function () {
              return renetha;
            });
          }, function (cyara) {
            return indya.resolve(e()).then(function () {
              throw cyara;
            });
          });
        }, e;
      }();
      return kylieanna.prototype.then = elnathan, kylieanna.all = function (e) {
        return new littleton(this, e).promise;
      }, kylieanna.race = function (e) {
        var spanky = this;
        return new spanky(kamariah(e) ? function (nace, nicaya) {
          for (var baylie = e.length, rorik = 0; rorik < baylie; rorik++) {
            spanky.resolve(e[rorik]).then(nace, nicaya);
          }
        } : function (e, kalyse) {
          return kalyse(new TypeError("You must pass an array to race."));
        });
      }, kylieanna.resolve = arlani, kylieanna.reject = function (e) {
        var akhi = new this(fontella);
        return dollena(akhi, e), akhi;
      }, kylieanna._setScheduler = function (e) {
        temicka = e;
      }, kylieanna._setAsap = function (e) {
        cromwell = e;
      }, kylieanna._asap = cromwell, kylieanna.polyfill = function () {
        var e = void 0;
        if (void 0 !== fahmi) {
          e = fahmi;
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
        var raneisha = e.Promise;
        if (raneisha) {
          var ellaann = null;
          try {
            ellaann = Object.prototype.toString.call(raneisha.resolve());
          } catch (e) {}
          ;
          if ("[object Promise]" === ellaann && !raneisha.cast) {
            return;
          }
        }
        ;
        e.Promise = kylieanna;
      }, kylieanna.Promise = kylieanna, kylieanna;
    });
  }.call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
}, {_process: 3}], 3: [function (e, sharmar, lorrel) {
  function crespin() {
    throw new Error("setTimeout has not been defined");
  }
  function chermaine() {
    throw new Error("clearTimeout has not been defined");
  }
  function jovoni(e) {
    if (roxie === setTimeout) {
      return setTimeout(e, 0);
    }
    ;
    if ((roxie === crespin || !roxie) && setTimeout) {
      return roxie = setTimeout, setTimeout(e, 0);
    }
    ;
    try {
      return roxie(e, 0);
    } catch (_0x9787x4) {
      try {
        return roxie.call(null, e, 0);
      } catch (eriannah) {
        return roxie.call(this, e, 0);
      }
    }
  }
  function carlianne(e) {
    if (gabryella === clearTimeout) {
      return clearTimeout(e);
    }
    ;
    if ((gabryella === chermaine || !gabryella) && clearTimeout) {
      return gabryella = clearTimeout, clearTimeout(e);
    }
    ;
    try {
      return gabryella(e);
    } catch (_0x9787x4) {
      try {
        return gabryella.call(null, e);
      } catch (britza) {
        return gabryella.call(this, e);
      }
    }
  }
  function shanterika() {
    ferando && serafima && (ferando = false, serafima.length ? boen = serafima.concat(boen) : sowsan = -1, boen.length && kapresha());
  }
  function kapresha() {
    if (!ferando) {
      var e = jovoni(shanterika);
      ferando = true;
      for (var malvern = boen.length; malvern;) {
        for (serafima = boen, boen = []; ++sowsan < malvern;) {
          serafima && serafima[sowsan].run();
        }
        ;
        sowsan = -1, malvern = boen.length;
      }
      ;
      serafima = null, ferando = false, carlianne(e);
    }
  }
  function latericka(e, jitu) {
    this.fun = e, this.array = jitu;
  }
  function maritha() {}
  var roxie, gabryella, catana = sharmar.exports = {};
  !function () {
    try {
      roxie = "function" == typeof setTimeout ? setTimeout : crespin;
    } catch (e) {
      roxie = crespin;
    }
    ;
    try {
      gabryella = "function" == typeof clearTimeout ? clearTimeout : chermaine;
    } catch (e) {
      gabryella = chermaine;
    }
  }();
  var serafima, boen = [], ferando = false, sowsan = -1;
  catana.nextTick = function (e) {
    var kristofferson = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var wesam = 1; wesam < arguments.length; wesam++) {
        kristofferson[wesam - 1] = arguments[wesam];
      }
    }
    ;
    boen.push(new latericka(e, kristofferson)), 1 !== boen.length || ferando || jovoni(kapresha);
  }, latericka.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, catana.title = "browser", catana.browser = true, catana.env = {}, catana.argv = [], catana.version = "", catana.versions = {}, catana.on = maritha, catana.addListener = maritha, catana.once = maritha, catana.off = maritha, catana.removeListener = maritha, catana.removeAllListeners = maritha, catana.emit = maritha, catana.prependListener = maritha, catana.prependOnceListener = maritha, catana.listeners = function (e) {
    return [];
  }, catana.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, catana.cwd = function () {
    return "/";
  }, catana.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, catana.umask = function () {
    return 0;
  };
}, {}], 4: [function (e, kabren, farzan) {
  !function (e) {
    ("use strict");
    function raelea(e) {
      if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) {
        throw new TypeError("Invalid character in header field name");
      }
      ;
      return e.toLowerCase();
    }
    function kashayla(e) {
      var izavier = {next: function () {
        var chairty = e.shift();
        return {done: void 0 === chairty, value: chairty};
      }};
      return laakea.iterable && (izavier[Symbol.iterator] = function () {
        return izavier;
      }), izavier;
    }
    function mher(e) {
      this.map = {}, e instanceof mher ? e.forEach(function (e, charmagne) {
        this.append(charmagne, e);
      }, this) : Array.isArray(e) ? e.forEach(function (e) {
        this.append(e[0], e[1]);
      }, this) : e && Object.getOwnPropertyNames(e).forEach(function (tuleen) {
        this.append(tuleen, e[tuleen]);
      }, this);
    }
    function tunis(e) {
      if (e.bodyUsed) {
        return Promise.reject(new TypeError("Already read"));
      }
      ;
      e.bodyUsed = true;
    }
    function shahir(e) {
      return new Promise(function (smyth, mkenna) {
        e.onload = function () {
          smyth(e.result);
        }, e.onerror = function () {
          "string" != typeof e.error && (e.error = String(e.error)), e.error;
        };
      });
    }
    function avaclaire(e) {
      var jaizion = new FileReader, shakiem = shahir(jaizion);
      return jaizion.readAsArrayBuffer(e), shakiem;
    }
    function shivraj(e) {
      var shantonia = new FileReader, jaileigh = shahir(shantonia);
      return shantonia.readAsText(e), jaileigh;
    }
    function rozann(e) {
      for (var desaray = new Uint8Array(e), judd = new Array(desaray.length), ledia = 0; ledia < desaray.length; ledia++) {
        judd[ledia] = String.fromCharCode(desaray[ledia]);
      }
      ;
      return judd.join("");
    }
    function laurieanne(e) {
      if (e.slice) {
        return e.slice(0);
      }
      ;
      var phenix = new Uint8Array(e.byteLength);
      return phenix.set(new Uint8Array(e)), phenix.buffer;
    }
    function uzziah() {
      return this.bodyUsed = false, this._initBody = function (e) {
        if (this._bodyInit = e, e) {
          if ("string" == typeof e) {
            this._bodyText = e;
          } else {
            if (laakea.blob && Blob.prototype.isPrototypeOf(e)) {
              this._bodyBlob = e;
            } else {
              if (laakea.formData && FormData.prototype.isPrototypeOf(e)) {
                this._bodyFormData = e;
              } else {
                if (laakea.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) {
                  this._bodyText = e.toString();
                } else {
                  if (laakea.arrayBuffer && laakea.blob && _0x9787x16(e)) {
                    this._bodyArrayBuffer = laurieanne(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                  } else {
                    if (!laakea.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !greory(e)) {
                      throw new Error("unsupported BodyInit type");
                    }
                    ;
                    this._bodyArrayBuffer = laurieanne(e);
                  }
                }
              }
            }
          }
        } else {
          this._bodyText = "";
        }
        ;
        this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : laakea.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
      }, laakea.blob && (this.blob = function () {
        var e = tunis(this);
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
        return this._bodyArrayBuffer ? tunis(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(avaclaire);
      }), this.text = function () {
        var e = tunis(this);
        if (e) {
          return e;
        }
        ;
        if (this._bodyBlob) {
          return shivraj(this._bodyBlob);
        }
        ;
        if (this._bodyArrayBuffer) {
          return Promise.resolve(rozann(this._bodyArrayBuffer));
        }
        ;
        if (this._bodyFormData) {
          throw new Error("could not read FormData body as text");
        }
        ;
        return Promise.resolve(this._bodyText);
      }, laakea.formData && (this.formData = function () {
        return this.text().then(khusbu);
      }), this.json = function () {
        return this.text().then(JSON.parse);
      }, this;
    }
    function tayzen(e) {
      var kalifornia = e.toUpperCase();
      return julain.indexOf(kalifornia) > -1 ? kalifornia : e;
    }
    function kalia(e, anselmi) {
      var jarrette = (anselmi = anselmi || {}).body;
      if (e instanceof kalia) {
        if (e.bodyUsed) {
          throw new TypeError("Already read");
        }
        ;
        this.url = e.url, this.credentials = e.credentials, anselmi.headers || (this.headers = new mher(e.headers)), this.method = e.method, this.mode = e.mode, jarrette || null == e._bodyInit || (jarrette = e._bodyInit, e.bodyUsed = true);
      } else {
        this.url = String(e);
      }
      ;
      if (this.credentials = anselmi.credentials || this.credentials || "omit", !anselmi.headers && this.headers || (this.headers = new mher(anselmi.headers)), this.method = tayzen(anselmi.method || this.method || "GET"), this.mode = anselmi.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && jarrette) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      ;
      this._initBody(jarrette);
    }
    function khusbu(e) {
      var abraheem = new FormData;
      return e.trim().split("&").forEach(function (e) {
        if (e) {
          var zephery = e.split("="), demetria = zephery.shift().replace(/\+/g, " "), kaydon = zephery.join("=").replace(/\+/g, " ");
          abraheem.append(decodeURIComponent(demetria), decodeURIComponent(kaydon));
        }
      }), abraheem;
    }
    function mckall(e) {
      var wilton = new mher;
      return e.split(/\r?\n/).forEach(function (e) {
        var heylie = e.split(":"), kalyiah = heylie.shift().trim();
        if (kalyiah) {
          var ima = heylie.join(":").trim();
          wilton.append(kalyiah, ima);
        }
      }), wilton;
    }
    function trevon(e, gurvir) {
      gurvir || (gurvir = {}), this.type = "default", this.status = "status" in gurvir ? gurvir.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in gurvir ? gurvir.statusText : "OK", this.headers = new mher(gurvir.headers), this.url = gurvir.url || "", this._initBody(e);
    }
    if (!e.fetch) {
      var laakea = {searchParams: "URLSearchParams" in e, iterable: "Symbol" in e && "iterator" in Symbol, blob: "FileReader" in e && "Blob" in e && function () {
        try {
          return new Blob, true;
        } catch (e) {
          return false;
        }
      }(), formData: "FormData" in e, arrayBuffer: "ArrayBuffer" in e};
      if (laakea.arrayBuffer) {
        var candid = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], greory = ArrayBuffer.isView || function (e) {
          return e && candid.indexOf(Object.prototype.toString.call(e)) > -1;
        };
      }
      ;
      mher.prototype.append = function (e, natay) {
        e = raelea(e), natay = ("string" != typeof natay && (natay = String(natay)), natay);
        var riyasha = this.map[e];
        this.map[e] = riyasha ? riyasha + "," + natay : natay;
      }, mher.prototype.delete = function (e) {
        delete this.map[raelea(e)];
      }, mher.prototype.get = function (e) {
        return e = raelea(e), this.has(e) ? this.map[e] : null;
      }, mher.prototype.has = function (e) {
        return this.map.hasOwnProperty(raelea(e));
      }, mher.prototype.set = function (e, ranada) {
        this.map[raelea(e)] = ("string" != typeof ranada && (ranada = String(ranada)), ranada);
      }, mher.prototype.forEach = function (e, rydge) {
        for (var shinya in this.map) {
          this.map.hasOwnProperty(shinya) && e.call(rydge, this.map[shinya], shinya, this);
        }
      }, mher.prototype.keys = function () {
        var e = [];
        return this.forEach(function (sagine, jadiel) {
          e.push(jadiel);
        }), kashayla(e);
      }, mher.prototype.values = function () {
        var e = [];
        return this.forEach(function (lolitta) {
          e.push(lolitta);
        }), kashayla(e);
      }, mher.prototype.entries = function () {
        var e = [];
        return this.forEach(function (evergreen, georgetta) {
          e.push([georgetta, evergreen]);
        }), kashayla(e);
      }, laakea.iterable && (mher.prototype[Symbol.iterator] = mher.prototype.entries);
      var julain = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      kalia.prototype.clone = function () {
        return new kalia(this, {body: this._bodyInit});
      }, uzziah.call(kalia.prototype), uzziah.call(trevon.prototype), trevon.prototype.clone = function () {
        return new trevon(this._bodyInit, {status: this.status, statusText: this.statusText, headers: new mher(this.headers), url: this.url});
      }, trevon.error = function () {
        var e = new trevon(null, {status: 0, statusText: ""});
        return e.type = "error", e;
      };
      var berrett = [301, 302, 303, 307, 308];
      trevon.redirect = function (e, nehemiah) {
        if (-1 === berrett.indexOf(nehemiah)) {
          throw new RangeError("Invalid status code");
        }
        ;
        return new trevon(null, {status: nehemiah, headers: {location: e}});
      }, e.Headers = mher, e.Request = kalia, e.Response = trevon, e.fetch = function (e, eh) {
        return new Promise(function (carmesia, kolia) {
          var robiya = new kalia(e, eh), jedediah = new XMLHttpRequest;
          jedediah.onload = function () {
            var e = {status: jedediah.status, statusText: jedediah.statusText, headers: mckall(jedediah.getAllResponseHeaders() || "")};
            e.url = "responseURL" in jedediah ? jedediah.responseURL : e.headers.get("X-Request-URL");
            var brookly = "response" in jedediah ? jedediah.response : jedediah.responseText;
            "string" != typeof new trevon(brookly, e) && (new trevon(brookly, e) = String(new trevon(brookly, e))), new trevon(brookly, e);
          }, jedediah.onerror = function () {
            kolia(new TypeError("Network request failed"));
          }, jedediah.ontimeout = function () {
            kolia(new TypeError("Network request failed"));
          }, jedediah.open(robiya.method, robiya.url, true), "include" === robiya.credentials && (jedediah.withCredentials = true), "responseType" in jedediah && laakea.blob && (jedediah.responseType = "blob"), robiya.headers.forEach(function (e, birda) {
            jedediah.setRequestHeader(birda, e);
          }), jedediah.send(void 0 === robiya._bodyInit ? null : robiya._bodyInit);
        });
      }, e.fetch.polyfill = true;
    }
  }("undefined" != typeof self ? self : this);
}, {}], 5: [function (e, alaurah, laviah) {
  alaurah.exports = {name: "@gamemonetize.com/html5-sdk", version: "1.2.4", author: "GameMonetize.com", description: "GameMonetize.com HTML5 SDK", url: "https://gamemonetize.com", license: "MIT", main: "lib/main.js", scripts: {test: 'echo "Error: no test specified" && exit 1'}, directories: {doc: "https://github.com/GameMonetize/GameMonetize.com-SDK"}, repository: {type: "git", url: ""}, dependencies: {"es6-promise": "^4.1.1", "whatwg-fetch": "^2.0.3"}, devDependencies: {"babel-eslint": "^8.0.0", "babel-preset-env": "^1.6.1", babelify: "^7.2.0", eslint: "^4.7.0", "eslint-config-google": "^0.9.1", "eslint-friendly-formatter": "^3.0.0", "eslint-loader": "^1.7.1", "eslint-plugin-html": "^3.0.0", "eslint-plugin-promise": "^3.4.0", "eslint-plugin-standard": "^2.0.1", grunt: "^1.0.3", "grunt-banner": "^0.6.0", "grunt-browser-sync": "^2.2.0", "grunt-browserify": "^5.2.0", "grunt-contrib-clean": "^1.1.0", "grunt-contrib-copy": "^1.0.0", "grunt-contrib-uglify": "^3.1.0", "grunt-contrib-watch": "^1.0.0", "grunt-exec": "^3.0.0", "grunt-google-cloud": "^1.0.7"}, engines: {node: ">= 10.15.0", npm: ">= 6.6.0"}};
}, {}], 6: [function (e, olawale, addalynne) {
  ("use strict");
  function kennay(e, azalayah) {
    if (!(e instanceof azalayah)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(addalynne, "__esModule", {value: true});
  var magaret = function () {
    function e(e, leihum) {
      for (var renelle = 0; renelle < leihum.length; renelle++) {
        var annelisa = leihum[renelle];
        annelisa.enumerable = annelisa.enumerable || false, annelisa.configurable = true, "value" in annelisa && (annelisa.writable = true), Object.defineProperty(e, annelisa.key, annelisa);
      }
    }
    return function (aquilla, yerani, oluwalonimi) {
      return yerani && e(aquilla.prototype, yerani), oluwalonimi && e(aquilla, oluwalonimi), aquilla;
    };
  }(), perlean = null, allegra = function () {
    function e() {
      if (kennay(this, e), perlean) {
        return perlean;
      }
      ;
      perlean = this, this.listeners = {};
    }
    return magaret(e, [{key: "_getListenerIdx", value: function (e, janeesha, nashaya) {
      var alandrea = this.listeners[e], amora = void 0, arnica = -1;
      if (!alandrea || 0 === alandrea.length) {
        return arnica;
      }
      ;
      for (amora = 0; amora < alandrea.length; amora++) {
        if (alandrea[amora].callback === janeesha && (!nashaya || nashaya === alandrea[amora].scope)) {
          arnica = amora;
          break;
        }
      }
      ;
      return arnica;
    }}, {key: "subscribe", value: function (e, stavros, deneise) {
      var apasra = void 0;
      if (!e) {
        throw new Error("Event name cannot be null or undefined.");
      }
      ;
      if (!stavros || "function" != typeof stavros) {
        throw new Error("Listener must be of type function.");
      }
      ;
      this._getListenerIdx(e, stavros, deneise) >= 0 || (apasra = {callback: stavros, scope: deneise}, this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(apasra));
    }}, {key: "broadcast", value: function (e, annabele) {
      var aroldo = this.listeners[e];
      e && this.listeners[e] && (annabele = annabele || {}, aroldo.forEach(function (e) {
        e.callback.call(e.scope, annabele);
      }));
    }}]), e;
  }();
  addalynne.default = allegra;
}, {}], 7: [function (e, mavelyn, gabie) {
  ("use strict");
  function yessenya(e, ric) {
    if (!(e instanceof ric)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(gabie, "__esModule", {value: true});
  var keadra = function () {
    function e(e, diavonte) {
      for (var laderricka = 0; laderricka < diavonte.length; laderricka++) {
        var javarris = diavonte[laderricka];
        javarris.enumerable = javarris.enumerable || false, javarris.configurable = true, "value" in javarris && (javarris.writable = true), Object.defineProperty(e, javarris.key, javarris);
      }
    }
    return function (teliea, matthey, naydia) {
      return matthey && e(teliea.prototype, matthey), naydia && e(teliea, naydia), teliea;
    };
  }(), jeddie = function (e) {
    return e && e.__esModule ? e : {default: e};
  }(e("../components/EventBus")), loucile = null, chamique = function () {
    function e(ariya) {
      if (yessenya(this, e), loucile) {
        return loucile;
      }
      ;
      loucile = this, this.testing = ariya, this.eventBus = new jeddie.default;
    }
    return keadra(e, [{key: "start", value: function () {
      var e = "\n            #sdk__implementation {\n                display: flex;\n                box-sizing: border-box;\n                position: fixed;\n                z-index: 667;\n                bottom: 0;\n                left: 0;\n                width: 100%;\n                padding: 3px;\n                background: transparent;\n                box-shadow: none;\n                color: #fff;\n                font-family: Helvetica, Arial, sans-serif;\n                      }\n            #sdk__implementation button {\n                flex: 1;\n                background: #ea5460;\n                padding: 4px 10px;\n font-size:10px;\n                margin: 2px;\n                border: 0;\n                border-radius: 3px;\n                color: #fff;\n                outline: 0;\n                cursor: pointer;\n                font-size: 10px;\n                box-shadow: 0 0 0 transparent;\n                text-shadow: 0 0 0 transparent;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                white-space: nowrap;\n            }\n            #sdk__implementation button:hover {\n                background: #ff7f03;\n            }\n            #sdk__implementation button:active {\n                background: #ff7f03;\n            }\n        ", melvine = document.head || document.getElementsByTagName("head")[0], lyrric = document.createElement("style");
      lyrric.type = "text/css", lyrric.styleSheet ? lyrric.styleSheet.cssText = e : lyrric.appendChild(document.createTextNode(e)), melvine.appendChild(lyrric);
      var kinita = document.body || document.getElementsByTagName("body")[0], pasqualino = document.createElement("div");
      pasqualino.style.position = "fixed", pasqualino.style.zIndex = "668", pasqualino.style.bottom = "0", pasqualino.innerHTML = '\n            <div id="sdk__implementation">\n                                                <button id="sdk__resumeGame">resumeGame</button>\n                <button id="sdk__pauseGame">pauseGame</button>\n                <button id="sdk__showBanner" onclick="window.sdk.showBanner()">showBanner()</button>\n                <button id="sdk__cancel">Cancel</button>\n                \n                <button id="sdk__closeDebug">Close</button>\n            </div>\n        ', kinita.appendChild(pasqualino);
      var symeon = document.getElementById("sdk__pauseGame"), jalasia = document.getElementById("sdk__resumeGame"), braisen = document.getElementById("sdk__showBanner"), justinlee = document.getElementById("sdk__cancel"), bonny = document.getElementById("sdk__demo"), spade = document.getElementById("sdk__midrollTimer"), jenali = document.getElementById("sdk__hbgdDebug"), zakeriah = document.getElementById("sdk__hbgdConfig"), ryan = document.getElementById("sdk__closeDebug");
      symeon.addEventListener("click", function () {
        window.sdk.onPauseGame("Pause game requested from debugger", "warning");
      }), jalasia.addEventListener("click", function () {
        window.sdk.onResumeGame("Resume game requested from debugger", "warning");
      }), braisen.addEventListener("click", function () {
        window.sdk.showBanner();
      }), justinlee.addEventListener("click", function () {
        window.sdk.videoAdInstance.requestAttempts = 0, window.sdk.videoAdInstance.cancel();
      }), ryan.addEventListener("click", function () {
        try {
          localStorage.getItem("gd_debug") ? localStorage.removeItem("gd_debug") : localStorage.setItem("gd_debug", "0"), location.reload();
        } catch (e) {
          console.log(e);
        }
      }), bonny.addEventListener("click", function () {
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
      }), spade.addEventListener("click", function () {
        try {
          localStorage.getItem("gd_midroll") ? localStorage.removeItem("gd_midroll") : localStorage.setItem("gd_midroll", "0"), location.reload();
        } catch (e) {
          console.log(e);
        }
      }), jenali.addEventListener("click", function () {
        try {
          window.idhbgd.debug(true);
        } catch (e) {
          console.log(e);
        }
      }), zakeriah.addEventListener("click", function () {
        try {
          var e = window.idhbgd.getConfig();
          console.info(e);
        } catch (e) {
          console.log(e);
        }
      });
    }}]), e;
  }();
  gabie.default = chamique;
}, {"../components/EventBus": 6}], 8: [function (e, chrishna, kynedi) {
  ("use strict");
  function leishla(e, naequan) {
    if (!(e instanceof naequan)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(kynedi, "__esModule", {value: true});
  var zamyriah = function () {
    function e(e, enzlee) {
      for (var tarajhi = 0; tarajhi < enzlee.length; tarajhi++) {
        var joby = enzlee[tarajhi];
        joby.enumerable = joby.enumerable || false, joby.configurable = true, "value" in joby && (joby.writable = true), Object.defineProperty(e, joby.key, joby);
      }
    }
    return function (masashi, yohance, jefren) {
      return yohance && e(masashi.prototype, yohance), jefren && e(masashi, jefren), masashi;
    };
  }(), santanna = function (e) {
    return e && e.__esModule ? e : {default: e};
  }(e("../components/EventBus")), trezdon = e("../modules/common"), heida = e("../modules/dankLog"), lewyn = null, gwenivere = function () {
    function e(derby, tenslee, kielee) {
      var iseah = this;
      if (leishla(this, e), lewyn) {
        return lewyn;
      }
      ;
      lewyn = this;
      var sherilee = {debug: false, width: 640, height: 360, locale: "en"};
      this.options = kielee ? (0, trezdon.extendDefaults)(sherilee, kielee) : sherilee, this.prefix = "sdk__", this.adsLoader = null, this.adsManager = null, this.adDisplayContainer = null, this.eventBus = new santanna.default, this.safetyTimer = null, this.containerTransitionSpeed = 300, this.adCount = 0, this.adTypeCount = 0, this.requestRunning = false, this.parentDomain = (0, trezdon.getParentDomain)(), this.parentUrl = (0, trezdon.getParentUrl)(), this.userDeclinedPersonalAds = document.location.search.indexOf("gdpr-targeting=0") >= 0 || document.cookie.indexOf("ogdpr_advertisement=0") >= 0 ? "1" : "0", this.thirdPartyContainer = "" !== derby ? document.getElementById(derby) : null, this.options.width = "number" == typeof this.options.width ? this.options.width : "100%" === this.options.width ? 640 : this.options.width.replace(/[^0-9]/g, ""), this.options.height = "number" == typeof this.options.height ? this.options.height : "100%" === this.options.height ? 360 : this.options.height.replace(/[^0-9]/g, "");
      var avonleigh = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, marvella = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.options.width = this.thirdPartyContainer ? this.thirdPartyContainer.offsetWidth : avonleigh, this.options.height = this.thirdPartyContainer ? this.thirdPartyContainer.offsetHeight : marvella, this.gameId = "0", this.category = "", this.tags = [], this.eventCategory = "AD", this.adsLoaderPromise = new Promise(function (e, sophiana) {
        iseah.eventBus.subscribe("AD_SDK_LOADER_READY", function () {
          return e();
        }), iseah.eventBus.subscribe("AD_CANCELED", function () {
          return sophiana(new Error("Initial adsLoaderPromise failed to load."));
        });
      }), this._loadScripts().then(function () {
        iseah._createPlayer(), iseah._setUpIMA();
      }).catch(function (e) {
        return iseah.onError(e);
      }), window.idhbgd = window.idhbgd || {}, window.idhbgd.que = window.idhbgd.que || [];
    }
    return zamyriah(e, [{key: "start", value: function () {
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
      return new Promise(function (jacyon, lailahni) {
        if (e.requestRunning) {
          (0, heida.dankLog)("AD_SDK_REQUEST", "A request is already running", "warning");
        } else {
          e.requestRunning = true, 1 === e.adTypeCount && (e.adCount = 0), e.adCount++, e.adTypeCount++;
          try {
            jacyon(localStorage.getItem("gd_tag"));
          } catch (e) {
            lailahni(e);
          }
        }
      });
    }}, {key: "_ReportingKeys", value: function () {
      var e = this;
      return new Promise(function (wentz) {});
    }}, {key: "loadAd", value: function (e) {
      if ("undefined" != typeof google) {
        try {
          var destined = new google.ima.AdsRequest;
          if (destined.adTagUrl = e, (0, heida.dankLog)("AD_SDK_TAG_URL", destined.adTagUrl, "success"), destined.linearAdSlotWidth = this.options.width, destined.linearAdSlotHeight = this.options.height, destined.nonLinearAdSlotWidth = this.options.width, destined.nonLinearAdSlotHeight = this.options.height, destined.forceNonLinearFullSlot = true, void 0 !== window.ga) {
            var jochen = new Date, isaid = jochen.getHours(), samai = jochen.getDate(), habacuc = jochen.getMonth(), donovann = jochen.getFullYear();
          }
          ;
          this.adsLoader.requestAds(destined);
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
      var e = this, hazem = new Promise(function (deitrick, eldon) {
        var abduljaleel = e.options.debug ? "//imasdk.googleapis.com/js/sdkloader/ima3_debug.js" : "//gamemonetize.com/api/ima3.js", nikkii = document.getElementsByTagName("script")[0], aveera = document.createElement("script");
        aveera.type = "text/javascript", aveera.async = true, aveera.src = abduljaleel, aveera.onload = function () {
          deitrick();
        }, aveera.onerror = function () {}, nikkii.parentNode.insertBefore(aveera, nikkii);
      }), siler = new Promise(function (samyog, sahr) {
        var kahlid = "https://api.gamemonetize.com/ga.js", saylar = document.getElementsByTagName("script")[0], jentry = document.createElement("script");
        jentry.type = "text/javascript", jentry.id = "analytics", jentry.async = true, jentry.src = kahlid, jentry.onload = function () {
          samyog();
        }, jentry.onerror = function () {}, saylar.parentNode.insertBefore(jentry, saylar);
      });
      return Promise.all([hazem, siler]);
    }}, {key: "_createPlayer", value: function () {
      var e = this, ledford = document.body || document.getElementsByTagName("body")[0];
      this.adContainer = document.createElement("div"), this.adContainer.id = this.prefix + "advertisement", this.adContainer.style.position = this.thirdPartyContainer ? "absolute" : "fixed", this.adContainer.style.zIndex = "0", this.adContainer.style.top = "0", this.adContainer.style.left = "0", this.adContainer.style.width = "100%", this.adContainer.style.height = "100%", this.adContainer.style.transform = "translateX(-9999px)", this.adContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)", this.adContainer.style.opacity = "0", this.adContainer.style.transition = "opacity " + this.containerTransitionSpeed + "ms cubic-bezier(0.55, 0, 0.1, 1)", this.thirdPartyContainer && (this.thirdPartyContainer.style.transform = "translateX(-9999px)", this.thirdPartyContainer.style.opacity = "0", this.thirdPartyContainer.style.transition = "opacity " + this.containerTransitionSpeed + "ms cubic-bezier(0.55, 0, 0.1, 1)");
      var chrystalyn = document.createElement("div");
      chrystalyn.id = this.prefix + "advertisement_slot", chrystalyn.style.position = "absolute", chrystalyn.style.backgroundColor = "#000000", chrystalyn.style.top = "0", chrystalyn.style.left = "0", chrystalyn.style.width = this.options.width + "px", chrystalyn.style.height = this.options.height + "px", this.thirdPartyContainer ? (this.adContainer.appendChild(chrystalyn), this.thirdPartyContainer.appendChild(this.adContainer)) : (this.adContainer.appendChild(chrystalyn), ledford.appendChild(this.adContainer)), window.addEventListener("resize", function () {
        var damyon = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, filippa = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        e.options.width = e.thirdPartyContainer ? e.thirdPartyContainer.offsetWidth : damyon, e.options.height = e.thirdPartyContainer ? e.thirdPartyContainer.offsetHeight : filippa, chrystalyn.style.width = e.options.width + "px", chrystalyn.style.height = e.options.height + "px";
      });
    }}, {key: "_setUpIMA", value: function () {
      google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE), google.ima.settings.setLocale(this.options.locale), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true), this.adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById(this.prefix + "advertisement_slot")), this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this._onAdsManagerLoaded, false, this), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError, false, this);
      var e = new Date, cedrik = e.getHours(), yacov = e.getDate(), neecy = e.getMonth(), aaryn = e.getFullYear(), olegario = "AD_SDK_LOADER_READY";
      this.eventBus.broadcast(olegario, {name: olegario, message: this.options, status: "success"});
    }}, {key: "_onAdsManagerLoaded", value: function (e) {
      var andray = this, huai = new google.ima.AdsRenderingSettings;
      if (huai.enablePreloading = true, huai.restoreCustomPlaybackStateOnAdBreakComplete = true, huai.uiElements = [google.ima.UiElements.AD_ATTRIBUTION, google.ima.UiElements.COUNTDOWN], this.adsManager = e.getAdsManager(huai), this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError.bind(this), false, this), this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.INTERACTION, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.LOG, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED, this._onAdEvent.bind(this), this), window.addEventListener("resize", function () {
        andray.adsManager.resize(andray.options.width, andray.options.height, google.ima.ViewMode.NORMAL);
      }), this.adsManager && this.adDisplayContainer) {
        var shahmir = new Date, jericko = shahmir.getHours(), jailyn = shahmir.getDate(), samaris = shahmir.getMonth(), clerance = shahmir.getFullYear(), fukuichi = "AD_SDK_MANAGER_READY";
        this.eventBus.broadcast(fukuichi, {name: fukuichi, message: this.adsManager, status: "success"}), this.adDisplayContainer.initialize();
        try {
          this.adsManager.init(this.options.width, this.options.height, google.ima.ViewMode.NORMAL), this.adsManager.start();
        } catch (e) {
          this.onError(e);
        }
      }
    }}, {key: "_onAdEvent", value: function (e) {
      var anisah = this, mishalay = new Date, myliegh = mishalay.getHours(), khalaya = mishalay.getDate(), zoe = mishalay.getMonth(), kaileeann = mishalay.getFullYear(), florida = "", alexandrew = "";
      switch (e.type) {
        case google.ima.AdEvent.Type.AD_BREAK_READY:
          florida = "AD_BREAK_READY", alexandrew = "Fired when an ad rule or a VMAP ad break would have played if autoPlayAdBreaks is false.";
          break;
        case google.ima.AdEvent.Type.AD_METADATA:
          florida = "AD_METADATA", alexandrew = "Fired when an ads list is loaded.";
          break;
        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          florida = "ALL_ADS_COMPLETED", alexandrew = "Fired when the ads manager is done playing all the ads.";
          break;
        case google.ima.AdEvent.Type.CLICK:
          florida = "CLICK", alexandrew = "Fired when the ad is clicked.";
          break;
        case google.ima.AdEvent.Type.COMPLETE:
          florida = "COMPLETE", alexandrew = "Fired when the ad completes playing.";
          break;
        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
          florida = "CONTENT_PAUSE_REQUESTED", alexandrew = "Fired when content should be paused. This usually happens right before an ad is about to cover the content.";
          break;
        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
          florida = "CONTENT_RESUME_REQUESTED", alexandrew = "Fired when content should be resumed. This usually happens when an ad finishes or collapses.", this._hide(), this.adsLoaderPromise.then(function () {
            if (anisah.adsLoader && anisah.adsLoader.contentComplete(), anisah.adsManager && anisah.adsManager.destroy(), 1 === anisah.adCount) {
              var e = [];
              anisah.tags.forEach(function (jocile) {
                e.push(jocile.title.toLowerCase());
              });
              var demareo = anisah.category.toLowerCase();
              anisah._loadDisplayAd(anisah.gameId, e, demareo);
            }
            ;
            anisah.requestRunning = false;
            anisah.eventBus.broadcast("AD_SDK_FINISHED", {name: "AD_SDK_FINISHED", message: "IMA is ready for new requests.", status: "success"});
          }).catch(function () {
            console.log(new Error("adsLoaderPromise failed to load."));
          });
          break;
        case google.ima.AdEvent.Type.DURATION_CHANGE:
          florida = "DURATION_CHANGE", alexandrew = "Fired when the ad's duration changes.";
          break;
        case google.ima.AdEvent.Type.FIRST_QUARTILE:
          florida = "FIRST_QUARTILE", alexandrew = "Fired when the ad playhead crosses first quartile.";
          break;
        case google.ima.AdEvent.Type.IMPRESSION:
          florida = "IMPRESSION", alexandrew = "Fired when the impression URL has been pinged.";
          break;
        case google.ima.AdEvent.Type.INTERACTION:
          florida = "INTERACTION", alexandrew = "Fired when an ad triggers the interaction callback. Ad interactions contain an interaction ID string in the ad data.";
          break;
        case google.ima.AdEvent.Type.LINEAR_CHANGED:
          florida = "LINEAR_CHANGED", alexandrew = "Fired when the displayed ad changes from linear to nonlinear, or vice versa.";
          break;
        case google.ima.AdEvent.Type.LOADED:
          florida = "LOADED", alexandrew = e.getAd().getContentType();
          break;
        case google.ima.AdEvent.Type.LOG:
          e.getAdData().adError && (florida = "LOG", alexandrew = e.getAdData());
          break;
        case google.ima.AdEvent.Type.MIDPOINT:
          florida = "MIDPOINT", alexandrew = "Fired when the ad playhead crosses midpoint.";
          break;
        case google.ima.AdEvent.Type.PAUSED:
          florida = "PAUSED", alexandrew = "Fired when the ad is paused.";
          break;
        case google.ima.AdEvent.Type.RESUMED:
          florida = "RESUMED", alexandrew = "Fired when the ad is resumed.";
          break;
        case google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED:
          florida = "SKIPPABLE_STATE_CHANGED", alexandrew = "Fired when the displayed ads skippable state is changed.";
          break;
        case google.ima.AdEvent.Type.SKIPPED:
          florida = "SKIPPED", alexandrew = "Fired when the ad is skipped by the user.";
          break;
        case google.ima.AdEvent.Type.STARTED:
          florida = "STARTED", alexandrew = "Fired when the ad starts playing.";
          break;
        case google.ima.AdEvent.Type.THIRD_QUARTILE:
          florida = "THIRD_QUARTILE", alexandrew = "Fired when the ad playhead crosses third quartile.";
          break;
        case google.ima.AdEvent.Type.USER_CLOSE:
          florida = "USER_CLOSE", alexandrew = "Fired when the ad is closed by the user.";
          break;
        case google.ima.AdEvent.Type.VOLUME_CHANGED:
          florida = "VOLUME_CHANGED", alexandrew = "Fired when the ad volume has changed.";
          break;
        case google.ima.AdEvent.Type.VOLUME_MUTED:
          florida = "VOLUME_MUTED", alexandrew = "Fired when the ad volume has been muted.";
      }
      ;
      "" !== florida && "" !== alexandrew && this.eventBus.broadcast(florida, {name: florida, message: alexandrew, status: "success"});
    }}, {key: "_onAdError", value: function (e) {
      this.cancel(), this._clearSafetyTimer("AD_ERROR");
      try {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.href.indexOf("account") != -1) {} else {
          if (adxAds == true) {
            adxAds2 = true;
            window.sdk.showBanner();
          } else {
            try {
              var kit = "(y8.com|pog.com|gamepost.com";
              $.getJSON("https://api.gamemonetize.com/dataxxx.json", function (quetcy) {
                $.each(quetcy, function (timaree, charlise) {
                  kit += "|" + charlise.domain;
                });
                var trennis = window.location != window.parent.location ? document.referrer : document.location.href;
                kit += ")";
                kit = new RegExp(kit);
                if (trennis.match(kit)) {} else {
                  promoVideo();
                }
              });
            } catch (e) {}
          }
        }
      } catch (e) {
        console.log(e);
      }
    }}, {key: "_startSafetyTimer", value: function (e, ahlia) {
      var zekai = this;
      (0, heida.dankLog)("AD_SAFETY_TIMER", "Invoked timer from: " + ahlia, "success"), this.safetyTimer = window.setTimeout(function () {
        zekai.eventBus.broadcast("AD_SAFETY_TIMER", {name: "AD_SAFETY_TIMER", message: "Advertisement took too long to load.", status: "warning"}), zekai.cancel(), zekai._clearSafetyTimer(ahlia);
      }, e);
    }}, {key: "_clearSafetyTimer", value: function (e) {
      if (void 0 !== this.safetyTimer && null !== this.safetyTimer && ((0, heida.dankLog)("AD_SAFETY_TIMER", "Cleared timer set at: " + e, "success"), clearTimeout(this.safetyTimer), this.safetyTimer = void 0, "requestAd()" === e)) {
        var kennett = new Date, avyaan = kennett.getHours(), jenniferrose = kennett.getDate(), antoiniece = kennett.getMonth(), laterika = kennett.getFullYear();
      }
    }}, {key: "_loadDisplayAd", value: function (e, mahera, dynastie) {
      var neiya = this, kingjoseph = document.body || document.getElementsByTagName("body")[0], saren = document.createElement("div");
      saren.id = this.prefix + "baguette", saren.style.zIndex = "100", saren.style.position = "absolute", saren.style.top = "0", saren.style.left = "0", kingjoseph.appendChild(saren);
      var shawnelle = document.createElement("script");
      shawnelle.async = true, shawnelle.type = "text/javascript";
      var vedette = "https:" === document.location.protocol;
      shawnelle.src = (vedette ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
      var lyndse = document.getElementsByTagName("script")[0];
    }}]), e;
  }();
  kynedi.default = gwenivere;
}, {"../components/EventBus": 6, "../modules/common": 11, "../modules/dankLog": 12}], 9: [function (e, cataleyah, karneisha) {
  ("use strict");
  var arjan = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, alivea = function (e) {
    return e && e.__esModule ? e : {default: e};
  }(e("./main")), bobbiesue = "object" === ("undefined" == typeof SDK_OPTIONS ? "undefined" : arjan(SDK_OPTIONS)) && SDK_OPTIONS ? SDK_OPTIONS : window.gdApi && "object" === arjan(window.gdApi.q[0][0]) && window.gdApi.q[0][0] ? window.gdApi.q[0][0] : {};
  window.gdApi && "object" === arjan(window.gdApi.q[0][0]) && window.gdApi.q[0][0] && (bobbiesue.hasOwnProperty("advertisementSettings") || (bobbiesue.advertisementSettings = {autoplay: true})), window.sdk = new alivea.default(bobbiesue), window.gdApi = window.sdk;
}, {"./main": 10}], 10: [function (e, patti, tyiesha) {
  ("use strict");
  function zayer(e) {
    return e && e.__esModule ? e : {default: e};
  }
  function clermont(e, aleighsha) {
    if (!(e instanceof aleighsha)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(tyiesha, "__esModule", {value: true});
  var abagale = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, perrier = function () {
    function e(e, triya) {
      for (var markevia = 0; markevia < triya.length; markevia++) {
        var deshan = triya[markevia];
        deshan.enumerable = deshan.enumerable || false, deshan.configurable = true, "value" in deshan && (deshan.writable = true), Object.defineProperty(e, deshan.key, deshan);
      }
    }
    return function (toccora, rhett, tyli) {
      return rhett && e(toccora.prototype, rhett), tyli && e(toccora, tyli), toccora;
    };
  }();
  e("es6-promise/auto"), e("whatwg-fetch");
  var urie = zayer(e("../package.json")), sharvani = zayer(e("./components/VideoAd")), likesha = zayer(e("./components/EventBus")), pinchos = zayer(e("./components/ImplementationTest")), arlex = e("./modules/dankLog"), mohith = e("./modules/common"), lolisa = null, mariaisabella = function () {
    function e(ziamara) {
      var xadrian = this;
      if (clermont(this, e), lolisa) {
        return lolisa;
      }
      ;
      lolisa = this;
      var niriyah = {debug: false, testing: false, gameId: "", prefix: "sdk__", flashSettings: {adContainerId: "", splashContainerId: ""}, advertisementSettings: {}, resumeGame: function () {}, pauseGame: function () {}, onEvent: function (e) {}, onInit: function (e) {}, onError: function (e) {}};
      this.options = ziamara ? (0, mohith.extendDefaults)(niriyah, ziamara) : niriyah;
      var rodnie = urie.default.version;
      window.console.log.apply(console, "\n %c %c %c GameMonetize.com HTML5 Ads SDK %c  %c   ads by   https://www.gamemonetize.com/   %c %c %c %c,background: #9C0013; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #FFFFFF; background: #030307; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #FFFFFF;background: #DB0028; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #ff2424; background: #9C0013; padding:5px 0;,color: #ff2424; background: #fff; padding:5px 0;,color: #ff2424; background: #fff; padding:5px 0;".split(","));
      console.log(" %c %c %c Distribute and monetize your online games and websites with GameMonetize.com %c %c %c", "background: #db0028", "background: #db0028", "color: #fff; background: #db0028;", "background: #db0028", "background: #db0028", "background: #ffffff");
      var remini = (0, mohith.getParentUrl)(), zissel = (0, mohith.getParentDomain)(), rylinn = document.location.search.indexOf("gdpr-tracking=0") >= 0 || document.cookie.indexOf("ogdpr_tracking=0") >= 0;
      var kameya = [];
      this.options.testing = this.options.testing || kameya.indexOf(zissel) > -1, this.options.testing && (0, arlex.dankLog)("SDK_TESTING_ENABLED", this.options.testing, "info"), this.whitelabelPartner = false;
      var myah = (0, mohith.getQueryParams)("xanthophyll");
      myah.hasOwnProperty("xanthophyll") && "true" === myah.xanthophyll && (this.whitelabelPartner = true, (0, arlex.dankLog)("SDK_WHITELABEL", this.whitelabelPartner, "success"));
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
          var quintera = encodeURIComponent(window.location);
          localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/ca-games-pub-5519830896693885-tag&description_url=" + quintera + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
          if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || localStorage.getItem("gd_debug")) {} else {
            var juanyae = window.location != window.parent.location ? document.referrer : document.location.href;
            var myung = juanyae.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0];
            try {
              if (juanyae.indexOf("gamedomain") == -1) {
                var analea = decodeURIComponent(window.location.search.match(/(\?|&)gamedomain\=([^&]*)/)[2]);
                myung = analea;
              }
            } catch (e) {}
            ;
            (new Image).src = "https://gamemonetize.com/account/event.php?page_url=" + myung + "&game_id=" + this.options.gameId + "&eventtype=1";
          }
        }
      } catch (e) {
        console.log(e);
      }
      ;
      this.eventBus = new likesha.default, this.eventBus.gameId = this.options.gameId + "", this.eventBus.subscribe("SDK_BLOCKED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("SDK_READY", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("SDK_ERROR", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("SDK_GAME_DATA_READY", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("SDK_GAME_START", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("SDK_GAME_PAUSE", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_LOADER_READY", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_MANAGER_READY", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_REQUEST_ADS", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_ERROR", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("AD_SDK_FINISHED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("AD_CANCELED", function (e) {
        xadrian._onEvent(e), xadrian.onResumeGame("Advertisement error, no worries, start / resume the game.", "warning");
      }), this.eventBus.subscribe("AD_ERROR", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("AD_SAFETY_TIMER", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("AD_BREAK_READY", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("AD_METADATA", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("ALL_ADS_COMPLETED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("CLICK", function (e) {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || localStorage.getItem("gd_debug")) {} else {
          var celiyah = window.location != window.parent.location ? document.referrer : document.location.href;
          var doniqua = celiyah.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0];
          try {
            if (celiyah.indexOf("gamedomain") == -1) {
              var erlon = decodeURIComponent(window.location.search.match(/(\?|&)gamedomain\=([^&]*)/)[2]);
              doniqua = erlon;
            }
          } catch (e) {}
          ;
          var matthen = new XMLHttpRequest;
          var celiyah = "https://api.gamemonetize.com/opphbh.php?id=" + window.SDK_OPTIONS.gameId + "&domain=" + doniqua;
          var iyanla = "h=AGt39rRaEEKgamvehwKyOKiCxRMil7wtKsQXLF9LkzbCsCYfAZJcQdG7064n_zeUjqJ0cF1kNt8GG82uX8j3YvDbRSUTyeUN-o3rCLzKwVA";
          matthen.open("POST", celiyah, true);
          matthen.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          matthen.onreadystatechange = function () {
            if (matthen.readyState == 4 && matthen.status == 200) {}
          };
          matthen.send(iyanla);
        }
        ;
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("COMPLETE", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("CONTENT_PAUSE_REQUESTED", function (e) {
        xadrian._onEvent(e), xadrian.onPauseGame("New advertisements requested and loaded", "success");
      }), this.eventBus.subscribe("CONTENT_RESUME_REQUESTED", function (e) {
        xadrian._onEvent(e), xadrian.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
        try {
          var iry = JSON.stringify({type: "SDK_IMPLEMENTED"});
          window.parent.postMessage(iry, "*");
        } catch (e) {}
        ;
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || localStorage.getItem("gd_debug")) {} else {
          var chinna = window.location != window.parent.location ? document.referrer : document.location.href;
          var ladetra = chinna.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0];
          try {
            if (chinna.indexOf("gamedomain") == -1) {
              var wrynlee = decodeURIComponent(window.location.search.match(/(\?|&)gamedomain\=([^&]*)/)[2]);
              ladetra = wrynlee;
            }
          } catch (e) {}
          ;
          var colter = new XMLHttpRequest;
          var chinna = "https://api.gamemonetize.com/opphbh2.php?id=" + window.SDK_OPTIONS.gameId + "&domain=" + ladetra;
          var ellar = "h=AGt39rRaEEKgamvehwKyOKiCxRMil7wtKsQXLF9LkzbCsCYfAZJcQdG7064n_zeUjqJ0cF1kNt8GG82uX8j3YvDbRSUTyeUN-o3rCLzKwVA";
          colter.open("POST", chinna, true);
          colter.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          colter.onreadystatechange = function () {
            if (colter.readyState == 4 && colter.status == 200) {}
          };
          colter.send(ellar);
        }
      }), this.eventBus.subscribe("DURATION_CHANGE", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("FIRST_QUARTILE", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("IMPRESSION", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("INTERACTION", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("LINEAR_CHANGED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("LOADED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("LOG", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("MIDPOINT", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("PAUSED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("RESUMED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("SKIPPABLE_STATE_CHANGED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("SKIPPED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("STARTED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("THIRD_QUARTILE", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("USER_CLOSE", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("VOLUME_CHANGED", function (e) {
        return xadrian._onEvent(e);
      }), this.eventBus.subscribe("VOLUME_MUTED", function (e) {
        return xadrian._onEvent(e);
      }), this.adRequestTimer = void 0, this.videoAdInstance = new sharvani.default(this.options.flashSettings.adContainerId, this.options.prefix, this.options.advertisementSettings);
      var malahni = new Promise(function (e) {
        var talmage = {gameId: xadrian.options.gameId ? xadrian.options.gameId + "" : "", advertisements: true, preroll: true, midroll: 18e4, title: "", tags: [], category: "", assets: []}, alecsa = "", ebaad = new Request(alecsa, {method: "GET"});
        fetch(ebaad).then(function (e) {
          var cainen = e.headers.get("content-type");
        }).then(function (pegeen) {
          e(talmage);
        }).catch(function (taquon) {
          (0, arlex.dankLog)("SDK_GAME_DATA_READY", taquon, "success");
        });
      });
      malahni.then(function (e) {
        xadrian.videoAdInstance.gameId = e.gameId, xadrian.videoAdInstance.category = e.category, xadrian.videoAdInstance.tags = e.tags;
        try {
          localStorage.getItem("gd_debug") && (localStorage.getItem("gd_tag") && (xadrian.videoAdInstance.tag = localStorage.getItem("gd_tag")), localStorage.getItem("gd_midroll") && (e.midroll = localStorage.getItem("gd_midroll")));
        } catch (e) {
          console.log(e);
        }
        ;
        if (e.advertisements) {
          var macaulay = false;
          e.preroll ? (xadrian.videoAdInstance.options.autoplay || macaulay) && xadrian._createSplash(e, macaulay) : xadrian.adRequestTimer = new Date;
        }
        ;
        xadrian.videoAdInstance.start();
      }).catch(function () {
        console.log(new Error("gameDataPromise failed to resolve."));
      }), this.readyPromise = Promise.all([malahni, this.videoAdInstance.adsLoaderPromise]).then(function (e) {
        return xadrian.eventBus.broadcast("SDK_READY", {name: "SDK_READY", message: "Everything is ready.", status: "success"}), xadrian.options.onInit("Everything is ready."), e[0];
      }).catch(function () {
        return xadrian.eventBus.broadcast("SDK_ERROR", {name: "SDK_ERROR", message: "The SDK failed.", status: "error"}), xadrian.options.onError("The SDK failed."), false;
      });
    }
    return perrier(e, [{key: "_gdpr", value: function (e) {}}, {key: "_onEvent", value: function (e) {
      (0, arlex.dankLog)(e.name, e.message, e.status);
      this.options.onEvent(e);
    }}, {key: "_analytics", value: function (e) {}}, {key: "_createSplash", value: function (e, tanicia) {
      var areli = this, hilaree = e.assets.find(function (e) {
        return e.hasOwnProperty("name") && 512 === e.width && 512 === e.height;
      });
      var asma = "\n            body {\n                position: inherit;\n            }\n            ." + this.options.prefix + "splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                z-index: 664;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #000;\n                overflow: hidden;\n            }\n            ." + this.options.prefix + "splash-background-image {\n                box-sizing: border-box;\n                position: absolute;\n                top: -25%;\n                left: -25%;\n                width: 150%;\n                height: 150%;\n                background-image: url(" + hilaree + ");\n                background-size: cover;\n                filter: blur(50px) brightness(1.5);\n            }\n            ." + this.options.prefix + "splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                z-index: 665;\n                bottom: 0;\n                width: 100%;\n                height: 100%;\n            }\n            ." + this.options.prefix + "splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n                padding: 20px;\n            }\n            ." + this.options.prefix + "splash-top > div {\n                text-align: center;\n            }\n            ." + this.options.prefix + "splash-top > div > button {\n                border: 0;\n                margin: auto;\n                padding: 10px 22px;\n                border-radius: 5px;\n                border: 3px solid white;\n                background: linear-gradient(0deg, #dddddd, #ffffff);\n                color: #222;\n                text-transform: uppercase;\n                text-shadow: 0 0 1px #fff;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                font-size: 18px;\n                cursor: pointer;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n            }\n            ." + this.options.prefix + "splash-top > div > button:hover {\n                background: linear-gradient(0deg, #ffffff, #dddddd);\n            }\n            ." + this.options.prefix + "splash-top > div > button:active {\n                box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n                background: linear-gradient(0deg, #ffffff, #f5f5f5);\n            }\n            ." + this.options.prefix + "splash-top > div > div {\n                position: relative;\n                width: 150px;\n                height: 150px;\n                margin: auto auto 20px;\n                border-radius: 100%;\n                overflow: hidden;\n                border: 3px solid rgba(255, 255, 255, 1);\n                background-color: #000;\n                box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);\n                background-image: url(" + hilaree + ");\n                background-position: center;\n                background-size: cover;\n            }\n            ." + this.options.prefix + "splash-top > div > div > img {\n                width: 100%;\n                height: 100%;\n            }\n            ." + this.options.prefix + "splash-bottom {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                align-self: center;\n                justify-content: center;\n                width: 100%;\n                padding: 0 0 20px;\n            }\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-consent,\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-title {\n                box-sizing: border-box;\n                width: 100%;\n                padding: 20px;\n                background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);\n                color: #fff;\n                text-align: left;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);\n                line-height: 150%;\n            }\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-title {\n                padding: 15px 0;\n                text-align: center;\n                font-size: 18px;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                line-height: 100%;\n            }\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-consent a {\n                color: #fff;\n            }\n        ", rovan = document.head || document.getElementsByTagName("head")[0], shelagh = document.createElement("style");
      shelagh.type = "text/css", shelagh.styleSheet ? shelagh.styleSheet.cssText = asma : shelagh.appendChild(document.createTextNode(asma)), rovan.appendChild(shelagh);
      var ethanpaul = "";
      ethanpaul = tanicia ? '\n                <div class="' + this.options.prefix + 'splash-background-container">\n                    <div class="' + this.options.prefix + 'splash-background-image"></div>\n                </div>\n                <div class="' + this.options.prefix + 'splash-container">\n                    <div class="' + this.options.prefix + 'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="' + this.options.prefix + 'splash-button">Play Game</button>\n                        </div>   \n                    </div>\n                    <div class="' + this.options.prefix + 'splash-bottom">\n                        <div class="' + this.options.prefix + 'splash-consent">\n                            We may show personalized ads provided by our partners, and our \n                            services can not be used by children under 16 years old without the \n                            consent of their legal guardian. By clicking "PLAY GAME", you consent \n                            to transmit your data to our partners for advertising purposes and \n                            declare that you are 16 years old or have the permission of your \n                            legal guardian. You can review our terms\n                            <a href="" target="_blank">here</a>.\n                        </div>\n                    </div>\n                </div>\n            ' : "b92a4170784248bca2ffa0c08bec7a50" === e.gameId ? '\n                <div class="' + this.options.prefix + 'splash-background-container">\n                    <div class="' + this.options.prefix + 'splash-background-image"></div>\n                </div>\n                <div class="' + this.options.prefix + 'splash-container">\n                    <div class="' + this.options.prefix + 'splash-top">\n                        <div>\n                            <button id="' + this.options.prefix + 'splash-button">Play Game</button>\n                        </div>   \n                    </div>\n                </div>\n            ' : '\n                <div class="' + this.options.prefix + 'splash-background-container">\n                    <div class="' + this.options.prefix + 'splash-background-image"></div>\n                </div>\n                <div class="' + this.options.prefix + 'splash-container">\n                    <div class="' + this.options.prefix + 'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="' + this.options.prefix + 'splash-button">Play Game</button>\n                        </div>   \n                    </div>\n                    <div class="' + this.options.prefix + 'splash-bottom">\n                        <div class="' + this.options.prefix + 'splash-title">' + e.title + "</div>\n                    </div>\n                </div>\n            ";
      var gensis = document.createElement("div");
      gensis.innerHTML = ethanpaul, gensis.id = this.options.prefix + "splash";
      var merrilyn = this.options.flashSettings.splashContainerId ? document.getElementById(this.options.flashSettings.splashContainerId) : null;
      if (merrilyn) {
        merrilyn.style.display = "block", merrilyn.insertBefore(gensis, merrilyn.firstChild);
      } else {
        var cheyan = document.body || document.getElementsByTagName("body")[0];
        cheyan.insertBefore(gensis, cheyan.firstChild);
      }
      ;
      tanicia ? document.getElementById(this.options.prefix + "splash-button").addEventListener("click", function () {
        var e = new Date;
        e.setDate(e.getDate() + 90), document.cookie = "ogdpr_tracking=1; expires=" + e.toUTCString() + "; path=/", areli.showBanner();
      }) : gensis.addEventListener("click", function () {
        areli.showBanner();
      }), this.onPauseGame("Pause the game and wait for a user gesture", "success"), this.eventBus.subscribe("CONTENT_PAUSE_REQUESTED", function () {
        gensis && gensis.parentNode ? gensis.parentNode.removeChild(gensis) : gensis && (gensis.style.display = "none"), merrilyn && merrilyn.parentNode ? merrilyn.parentNode.removeChild(merrilyn) : merrilyn && (merrilyn.style.display = "none");
      }), this.eventBus.subscribe("SDK_GAME_START", function () {
        gensis && gensis.parentNode ? gensis.parentNode.removeChild(gensis) : gensis && (gensis.style.display = "none"), merrilyn && merrilyn.parentNode ? merrilyn.parentNode.removeChild(merrilyn) : merrilyn && (merrilyn.style.display = "none");
      });
    }}, {key: "showBanner", value: function () {
      var e = this;
      if (adxAds2 == true) {
        var gantt = encodeURIComponent(window.location);
        localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Preroll-Ads&description_url=" + gantt + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
        this.adRequestTimer = void 0;
        adxAds = false;
      }
      ;
      try {
        var darvis = "(y8.com|y8|dollmania.com|pog.com|gamepost.com)";
        var salahaldeen = window.location != window.parent.location ? document.referrer : document.location.href;
        darvis = new RegExp(darvis);
        if (salahaldeen.match(darvis)) {} else {
          var lucerito = '<div id="gmLoadingText" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABdCAYAAAB0HBXwAAAACXBIWXMAAAsTAAALEwEAmpwYAAA532lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMC0wOC0yNlQxNzozMjoxNSswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjAtMDgtMjZUMTc6MzI6MTUrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplNGYxZGJiZi0zM2IwLWQ2NGMtOGU5Yy1lY2E5MDc4YjA2ZDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTA4LTI2VDE3OjMyOjE1KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQ4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/W7MMgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAA160lEQVR42uydebwkVXn+v1XV211n7izMDAPMAAPDJvumgAiKQJBFJS4oYGIScQXjLxqiRhQ1kcQ1YoyJCy4oQiKgiSCbIKDsMKzDNgMzzL7P3fp2d9Xvj/dU16nqqur1Lsyc5/Ppmb5dS1efPl3PebfntTzPY4piMbAQOAiYC8wHZgIDQAHIqf3KwCCwBVgPrAJeAZ4AXgaex8DAwMDAYIojM4Wu5WjgBOC1wGuAfTt03qeBR4A/AXcBj5mv3cDAwMBgqsGaZAv5ZOAc4NQOEnA9PAH8FrgeuNdMAQMDAwODnZWQdwcuAN6FuKMnEw8BPwWuAjab6WBgYGBgsDMQ8r7AR4G/QmLALcOtQLkkj8oYuC5gAR54LrgeWBZks5DJQa4LbCf1lOuB7wH/Aaww08LAwMDAYEck5PnApcCHWyZgF8ZGoDgExSJUilAqQakI5VGouLKPVxGyrlSEnB0H7Aw4GcjkobsP+mdBzzR5LQajwNeA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" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
          $("#sdk__advertisement").append(lucerito);
        }
      } catch (e) {}
      ;
      this.readyPromise.then(function (wahid) {
        var jorgia = 12e4;
        try {
          var tavario = "(sites.google.com";
          $.getJSON("https://api.gamemonetize.com/dataxx.json", function (brittanynicole) {
            $.each(brittanynicole, function (kamien, nasar) {
              tavario += "|" + nasar.domain;
            });
            var loma = window.location != window.parent.location ? document.referrer : document.location.href;
            tavario += ")";
            tavario = new RegExp(tavario);
            if (loma.match(tavario)) {
              var shandice = encodeURIComponent(window.location);
              localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Universal&description_url=" + shandice + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
            }
          });
        } catch (e) {}
        ;
        try {
          var muneo = "(gamemonetize.com|y8.com|html5.gamemonetize.com";
          $.getJSON("https://api.gamemonetize.com/datax.json", function (monzella) {
            $.each(monzella, function (teruyo, vikki) {
              muneo += "|" + vikki.domain;
            });
            var madrona = window.location != window.parent.location ? document.referrer : document.location.href;
            muneo += ")";
            muneo = new RegExp(muneo);
            if (madrona.match(muneo)) {
              jorgia = 12e4;
              wahid.advertisements ? void 0 !== e.adRequestTimer ? (new Date).valueOf() - e.adRequestTimer.valueOf() < jorgia ? ((0, arlex.dankLog)("SDK_SHOW_BANNER", "The advertisement was requested too soon after the previous advertisement was finished.", "warning"), e.onResumeGame("Just resume the game...", "success")) : ((0, arlex.dankLog)("SDK_SHOW_BANNER", "Requested the midroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function (tavayah) {
                return e.videoAdInstance.loadAd(tavayah);
              }).catch(function (kahmya) {
                e.videoAdInstance.onError(kahmya);
              })) : ((0, arlex.dankLog)("SDK_SHOW_BANNER", "Requested the preroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function (eschelle) {
                return e.videoAdInstance.loadAd(eschelle);
              }).catch(function (emillie) {
                e.videoAdInstance.onError(emillie);
              })) : (e.videoAdInstance.cancel(), (0, arlex.dankLog)("SDK_SHOW_BANNER", "Advertisements are disabled.", "warning"));
            } else {
              jorgia = 3e4;
              wahid.advertisements ? void 0 !== e.adRequestTimer ? (new Date).valueOf() - e.adRequestTimer.valueOf() < jorgia ? ((0, arlex.dankLog)("SDK_SHOW_BANNER", "The advertisement was requested too soon after the previous advertisement was finished.", "warning"), e.onResumeGame("Just resume the game...", "success"), ShowAds()) : ((0, arlex.dankLog)("SDK_SHOW_BANNER", "Requested the midroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function (jaqueze) {
                return e.videoAdInstance.loadAd(jaqueze);
              }).catch(function (ikshan) {
                e.videoAdInstance.onError(ikshan);
              })) : ((0, arlex.dankLog)("SDK_SHOW_BANNER", "Requested the preroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function (fatema) {
                return e.videoAdInstance.loadAd(fatema);
              }).catch(function (grady) {
                e.videoAdInstance.onError(grady);
              })) : (e.videoAdInstance.cancel(), (0, arlex.dankLog)("SDK_SHOW_BANNER", "Advertisements are disabled.", "warning"));
            }
          });
        } catch (e) {}
      }).catch(function (e) {
        (0, arlex.dankLog)("SDK_SHOW_BANNER", e, "error");
      });
    }}, {key: "customLog", value: function (e) {}}, {key: "play", value: function () {}}, {key: "onResumeGame", value: function (e, liliana) {
      try {
        this.options.resumeGame();
      } catch (e) {
        console.log(e);
      }
      ;
      this.eventBus.broadcast("SDK_GAME_START", {name: "SDK_GAME_START", message: e, status: liliana});
    }}, {key: "onPauseGame", value: function (e, caleigha) {
      try {
        this.options.pauseGame();
      } catch (e) {
        console.log(e);
      }
      ;
      this.eventBus.broadcast("SDK_GAME_PAUSE", {name: "SDK_GAME_PAUSE", message: e, status: caleigha});
    }}, {key: "openConsole", value: function () {
      try {
        new pinchos.default(this.options.testing).start(), localStorage.setItem("gd_debug", true);
      } catch (e) {}
    }}]), e;
  }();
  tyiesha.default = mariaisabella;
}, {"../package.json": 5, "./components/EventBus": 6, "./components/ImplementationTest": 7, "./components/VideoAd": 8, "./modules/common": 11, "./modules/dankLog": 12, "es6-promise/auto": 1, "whatwg-fetch": 4}], 11: [function (e, mathel, othoniel) {
  ("use strict");
  function jaquavion(e, natavion) {
    var addylyn = natavion || window.location.href, aichatou = new RegExp("[?&]" + e + "=([^&#]*)", "i").exec(addylyn);
    return aichatou ? aichatou[1] : null;
  }
  function collene() {
    for (var e = void 0, mercedez = /\+/g, zayde = /([^&=]+)=?([^&]*)/g, ayaz = window.location.search.substring(1), carrena = {}; e = zayde.exec(ayaz);) {
      carrena[decodeURIComponent(e[1].toLowerCase().replace(mercedez, " "))] = decodeURIComponent(e[2].toLowerCase().replace(mercedez, " "));
    }
    ;
    return carrena;
  }
  function justinian(e) {
    for (; (e = e || "") !== decodeURIComponent(e);) {
      e = decodeURIComponent(e);
    }
    ;
    return e;
  }
  Object.defineProperty(othoniel, "__esModule", {value: true}), othoniel.extendDefaults = function (e, mecedes) {
    var akaylee = void 0;
    for (akaylee in mecedes) {
      mecedes.hasOwnProperty(akaylee) && null !== mecedes[akaylee] && void 0 !== mecedes[akaylee] && (e[akaylee] = mecedes[akaylee]);
    }
    ;
    return e;
  }, othoniel.getParentUrl = function () {
    mathel = "https://gamemonetize.com/";
    return mathel;
  }, othoniel.getParentDomain = function () {
    mathel = "https://gamemonetize.com/";
    return mathel;
  }, othoniel.getQueryParams = collene, othoniel.updateQueryStringParameter = function (e, adrin, koron) {
    var febbie = new RegExp("([?&])" + adrin + "=.*?(&|$)", "i"), gustena = -1 !== e.indexOf("?") ? "&" : "?";
    return e.match(febbie) ? e.replace(febbie, "$1" + adrin + "=" + koron + "$2") : e + gustena + adrin + "=" + koron;
  }, othoniel.getMobilePlatform = function () {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return /windows phone/i.test(e) ? "windows" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "ios" : "";
  }, othoniel.getQueryString = jaquavion, othoniel.getScript = function (e, nayarit) {
    return new Promise(function (drenda, zanae) {
      if (Array.from(document.querySelectorAll("script")).map(function (e) {
        return e.src;
      }).includes(e)) {
        drenda();
      } else {
        var filicia = document.getElementsByTagName("script")[0], melodye = document.createElement("script");
        melodye.type = "text/javascript", melodye.async = true, melodye.src = e, melodye.id = nayarit, melodye.onload = function () {
          drenda();
        }, melodye.onerror = function () {
          zanae("Failed to load " + e);
        }, filicia.parentNode.insertBefore(melodye, filicia);
      }
    });
  };
}, {}], 12: [function (e, kalena, damek) {
  ("use strict");
  Object.defineProperty(damek, "__esModule", {value: true});
  var jaquelinee = Date.now();
  damek.dankLog = function (e, teraji, sherri) {
    try {
      if (localStorage.getItem("gd_debug")) {
        var rubenia = "error" === sherri ? "background: #c4161e; color: #fff" : "warning" === sherri ? "background: #ff8c1c; color: #fff" : "info" === sherri ? "background: #ff0080; color: #fff" : "background: #50b432; color: #fff", shondalyn = console.log("[" + (Date.now() - jaquelinee) / 1e3 + "s]%c %c %c GameMonetize.com %c %c %c " + e + " ", "background: #ff7f03", "background: #ff7f03", "color: #fff; background: #ff7f03;", "background: #ff7f03", "background: #ff7f03", rubenia, void 0 !== teraji ? teraji : "");
        console.log.apply(console, shondalyn);
      }
    } catch (e) {
      console.log(e);
    }
  };
}, {}]}, {}, [6, 7, 8, 9, 10, 11, 12]);
!function (shoshana, kwincy) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = shoshana.document ? kwincy(shoshana, true) : function (joelia) {
    if (!joelia.document) {
      throw new Error("jQuery requires a window with a document");
    }
    ;
    return kwincy(joelia);
  } : kwincy(shoshana);
}("undefined" != typeof window ? window : this, function (virla, adger) {
  var shreehan = [], randee = shreehan.slice, e = shreehan.concat, jefrin = shreehan.push, nadara = shreehan.indexOf, abdelkarim = {}, zendell = abdelkarim.toString, denyell = abdelkarim.hasOwnProperty, jahnise = {}, zosia = virla.document, jessicca = "2.1.1", chaylyn = function (cloise, angelica) {
    return new chaylyn.fn.init(cloise, angelica);
  }, etasha = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, reve = /^-ms-/, rebella = /-([\da-z])/gi;
  chaylyn.fn = chaylyn.prototype = {jquery: jessicca, constructor: chaylyn, selector: "", length: 0, toArray: function () {
    return randee.call(this);
  }, get: function (dhanvika) {
    return null != dhanvika ? 0 > dhanvika ? this[dhanvika + this.length] : this[dhanvika] : randee.call(this);
  }, pushStack: function (kim) {
    var hanaya = chaylyn.merge(this.constructor(), kim);
    return hanaya.prevObject = this, hanaya.context = this.context, hanaya;
  }, each: function (omaurion, jaicee) {
    return chaylyn.each(this, omaurion, jaicee);
  }, map: function (cheenou) {
    return this.pushStack(chaylyn.map(this, function (cotis, caternia) {
      return cheenou.call(cotis, caternia, cotis);
    }));
  }, slice: function () {
    return this.pushStack(randee.apply(this, arguments));
  }, first: function () {
    return this.eq(0);
  }, last: function () {
    return this.eq(-1);
  }, eq: function (kiali) {
    var chasidee = this.length, jacqueleen = +kiali + (0 > kiali ? chasidee : 0);
    return this.pushStack(jacqueleen >= 0 && chasidee > jacqueleen ? [this[jacqueleen]] : []);
  }, end: function () {
    return this.prevObject || this.constructor(null);
  }, push: jefrin, sort: shreehan.sort, splice: shreehan.splice}, chaylyn.extend = chaylyn.fn.extend = function () {
    var favio, willavene, edmondo, jeanine, e, zarihya, dorn = arguments[0] || {}, drema = 1, shanelly = arguments.length, tanaya = false;
    for ("boolean" == typeof dorn && (tanaya = dorn, dorn = arguments[drema] || {}, drema++), "object" == typeof dorn || chaylyn.isFunction(dorn) || (dorn = {}), drema === shanelly && (dorn = this, drema--); shanelly > drema; drema++) {
      if (null != (favio = arguments[drema])) {
        for (willavene in favio) {
          edmondo = dorn[willavene], jeanine = favio[willavene], dorn !== jeanine && (tanaya && jeanine && (chaylyn.isPlainObject(jeanine) || (e = chaylyn.isArray(jeanine))) ? (e ? (e = false, zarihya = edmondo && chaylyn.isArray(edmondo) ? edmondo : []) : zarihya = edmondo && chaylyn.isPlainObject(edmondo) ? edmondo : {}, dorn[willavene] = chaylyn.extend(tanaya, zarihya, jeanine)) : void 0 !== jeanine && (dorn[willavene] = jeanine));
        }
      }
    }
    ;
    return dorn;
  }, chaylyn.extend({expando: "jQuery" + (jessicca + Math.random()).replace(/\D/g, ""), isReady: true, error: function (terasa) {
    throw new Error(terasa);
  }, noop: function () {}, isFunction: function (shinobu) {
    return "function" === chaylyn.type(shinobu);
  }, isArray: Array.isArray, isWindow: function (mohamad) {
    return null != mohamad && mohamad === mohamad.window;
  }, isNumeric: function (jogina) {
    return !chaylyn.isArray(jogina) && jogina - parseFloat(jogina) >= 0;
  }, isPlainObject: function (collena) {
    return "object" !== chaylyn.type(collena) || collena.nodeType || chaylyn.isWindow(collena) ? false : collena.constructor && !denyell.call(collena.constructor.prototype, "isPrototypeOf") ? false : true;
  }, isEmptyObject: function (cymande) {
    var kamarion;
    for (kamarion in cymande) {
      return false;
    }
    ;
    return true;
  }, type: function (kandyse) {
    return null == kandyse ? kandyse + "" : "object" == typeof kandyse || "function" == typeof kandyse ? abdelkarim[zendell.call(kandyse)] || "object" : typeof kandyse;
  }, globalEval: function (evalise) {
    var nerisa, kwami = eval;
    evalise = chaylyn.trim(evalise), evalise && (1 === evalise.indexOf("use strict") ? (nerisa = zosia.createElement("script"), nerisa.text = evalise, zosia.head.appendChild(nerisa).parentNode.removeChild(nerisa)) : kwami(evalise));
  }, camelCase: function (adharv) {
    return adharv.replace(reve, "ms-").replace(rebella, _0x9787x8);
  }, nodeName: function (suliana, crimsyn) {
    return suliana.nodeName && suliana.nodeName.toLowerCase() === crimsyn.toLowerCase();
  }, each: function (macady, zykayla, eldeen) {
    var teel, e = 0, jaquain = macady.length, dmitrius = delaris(macady);
    if (eldeen) {
      if (dmitrius) {
        for (; jaquain > e; e++) {
          if (teel = zykayla.apply(macady[e], eldeen), teel === false) {
            break;
          }
        }
      } else {
        for (e in macady) {
          if (teel = zykayla.apply(macady[e], eldeen), teel === false) {
            break;
          }
        }
      }
    } else {
      if (dmitrius) {
        for (; jaquain > e; e++) {
          if (teel = zykayla.call(macady[e], e, macady[e]), teel === false) {
            break;
          }
        }
      } else {
        for (e in macady) {
          if (teel = zykayla.call(macady[e], e, macady[e]), teel === false) {
            break;
          }
        }
      }
    }
    ;
    return macady;
  }, trim: function (nermin) {
    return null == nermin ? "" : (nermin + "").replace(etasha, "");
  }, makeArray: function (anaeja, barbaa) {
    var salama = barbaa || [];
    return null != anaeja && (delaris(Object(anaeja)) ? chaylyn.merge(salama, "string" == typeof anaeja ? [anaeja] : anaeja) : jefrin.call(salama, anaeja)), salama;
  }, inArray: function (hollen, deardra, inderjit) {
    return null == deardra ? -1 : nadara.call(deardra, hollen, inderjit);
  }, merge: function (dianet, soana) {
    for (var dougals = +soana.length, quanika = 0, e = dianet.length; dougals > quanika; quanika++) {
      dianet[e++] = soana[quanika];
    }
    ;
    return dianet.length = e, dianet;
  }, grep: function (amdanda, buff, vinie) {
    for (var richman, e = [], hubie = 0, ashawni = amdanda.length, idel = !vinie; ashawni > hubie; hubie++) {
      richman = !buff(amdanda[hubie], hubie), richman !== idel && e.push(amdanda[hubie]);
    }
    ;
    return e;
  }, map: function (ifeanyi, deldon, arnald) {
    var keecha, lamiek = 0, manasseh = ifeanyi.length, allycia = delaris(ifeanyi), yogesh = [];
    if (allycia) {
      for (; manasseh > lamiek; lamiek++) {
        keecha = deldon(ifeanyi[lamiek], lamiek, arnald), null != keecha && yogesh.push(keecha);
      }
    } else {
      for (lamiek in ifeanyi) {
        keecha = deldon(ifeanyi[lamiek], lamiek, arnald), null != keecha && yogesh.push(keecha);
      }
    }
    ;
    return e.apply([], yogesh);
  }, guid: 1, proxy: function (blerta, buckner) {
    var kemari, e, leimomi;
    return "string" == typeof buckner && (kemari = blerta[buckner], buckner = blerta, blerta = kemari), chaylyn.isFunction(blerta) ? (e = randee.call(arguments, 2), leimomi = function () {
      return blerta.apply(buckner || this, e.concat(randee.call(arguments)));
    }, leimomi.guid = blerta.guid = blerta.guid || chaylyn.guid++, leimomi) : void 0;
  }, now: Date.now, support: jahnise}), chaylyn.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (geniece, enaja) {
    abdelkarim["[object " + enaja + "]"] = enaja.toLowerCase();
  });
  function delaris(anwesha) {
    var lesli = anwesha.length, foreign = chaylyn.type(anwesha);
    return "function" === foreign || chaylyn.isWindow(anwesha) ? false : 1 === anwesha.nodeType && lesli ? true : "array" === foreign || 0 === lesli || "number" == typeof lesli && lesli > 0 && lesli - 1 in anwesha;
  }
  var marta = function (grettell) {
    var starr, makaylin, oneisha, e, nashari, navonte, carlasia, oktavia, christale, nyanna, nishan, katheen, jerahmy, edwarda, lon, aliana, kelany, kortni, bahe, neako = "sizzle" + -new Date, kazumi = grettell.document, yenifer = 0, shakitha = 0, elizabeta = dexx(), rosarie = dexx(), tapatha = dexx(), nasiir = "undefined", tkai = -2147483648, ukiah = {}.hasOwnProperty, lendora = [], lorette = lendora.pop, jobita = lendora.push, romyn = lendora.push, kodiak = lendora.slice, retha = lendora.indexOf || function (inita) {
      for (var yuleimi = 0, bo = this.length; bo > yuleimi; yuleimi++) {
        if (this[yuleimi] === inita) {
          return yuleimi;
        }
      }
      ;
      return -1;
    }, christasia = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", makia = "[\\x20\\t\\r\\n\\f]", anelie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", selika = anelie.replace("w", "w#"), shaman = "\\[" + makia + "*(" + anelie + ")(?:" + makia + "*([*^$|!~]?=)" + makia + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + selika + "))|)" + makia + "*\\]", eztli = ":(" + anelie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + shaman + ")*)|.*)\\)|)", marcellis = new RegExp("^" + makia + "+|((?:^|[^\\\\])(?:\\\\.)*)" + makia + "+$", "g"), clinard = new RegExp("^" + makia + "*," + makia + "*"), nieja = new RegExp("^" + makia + "*([>+~]|" + makia + ")" + makia + "*"), jionny = new RegExp("=" + makia + "*([^\\]'\"]*?)" + makia + "*\\]", "g"), hazen = new RegExp(eztli), latoy = new RegExp("^" + selika + "$"), tarisa = {ID: new RegExp("^#(" + anelie + ")"), CLASS: new RegExp("^\\.(" + anelie + ")"), TAG: new RegExp("^(" + anelie.replace("w", "w*") + ")"), ATTR: new RegExp("^" + shaman), PSEUDO: new RegExp("^" + eztli), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + makia + "*(even|odd|(([+-]|)(\\d*)n|)" + makia + "*(?:([+-]|)" + makia + "*(\\d+)|))" + makia + "*\\)|)", "i"), bool: new RegExp("^(?:" + christasia + ")$", "i"), needsContext: new RegExp("^" + makia + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + makia + "*((?:-\\d)?\\d*)" + makia + "*\\)|)(?=[^-]|$)", "i")}, adysyn = /^(?:input|select|textarea|button)$/i, zerelda = /^h\d$/i, debrorah = /^[^{]+\{\s*\[native \w/, wauline = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, labria = /[+~]/, aude = /'|\\/g, mykail = new RegExp("\\\\([\\da-f]{1,6}" + makia + "?|(" + makia + ")|.)", "ig"), shohn = function (wamon, lovine, kazuya) {
      var aleona = "0x" + lovine - 65536;
      return aleona !== aleona || kazuya ? lovine : 0 > aleona ? String.fromCharCode(aleona + 65536) : String.fromCharCode(aleona >> 10 | 55296, 1023 & aleona | 56320);
    };
    try {
      romyn.apply(lendora = kodiak.call(kazumi.childNodes), kazumi.childNodes), lendora[kazumi.childNodes.length].nodeType;
    } catch (nerene) {
      romyn = {apply: lendora.length ? function (kandys, tamiaya) {
        jobita.apply(kandys, kodiak.call(tamiaya));
      } : function (zoeey, mashayla) {
        var elom = zoeey.length, preslyn = 0;
        while (zoeey[elom++] = mashayla[preslyn++]) {
          ;
        }
        ;
        zoeey.length = elom - 1;
      }};
    }
    ;
    function jerwin(caytlin, dimetra, alexzandrya, e) {
      var kula, delcina, wyllys, yonatan, tawni, lanaijah, majestic, chalino, ambria, josann;
      if ((dimetra ? dimetra.ownerDocument || dimetra : kazumi) !== jerahmy && katheen(dimetra), dimetra = dimetra || jerahmy, alexzandrya = alexzandrya || [], !caytlin || "string" != typeof caytlin) {
        return alexzandrya;
      }
      ;
      if (1 !== (yonatan = dimetra.nodeType) && 9 !== yonatan) {
        return [];
      }
      ;
      if (lon && !e) {
        if (kula = wauline.exec(caytlin)) {
          if (wyllys = kula[1]) {
            if (9 === yonatan) {
              if (delcina = dimetra.getElementById(wyllys), !delcina || !delcina.parentNode) {
                return alexzandrya;
              }
              ;
              if (delcina.id === wyllys) {
                return alexzandrya.push(delcina), alexzandrya;
              }
            } else {
              if (dimetra.ownerDocument && (delcina = dimetra.ownerDocument.getElementById(wyllys)) && bahe(dimetra, delcina) && delcina.id === wyllys) {
                return alexzandrya.push(delcina), alexzandrya;
              }
            }
          } else {
            if (kula[2]) {
              return romyn.apply(alexzandrya, dimetra.getElementsByTagName(caytlin)), alexzandrya;
            }
            ;
            if ((wyllys = kula[3]) && makaylin.getElementsByClassName && dimetra.getElementsByClassName) {
              return romyn.apply(alexzandrya, dimetra.getElementsByClassName(wyllys)), alexzandrya;
            }
          }
        }
        ;
        if (makaylin.qsa && (!aliana || !aliana.test(caytlin))) {
          if (chalino = majestic = neako, ambria = dimetra, josann = 9 === yonatan && caytlin, 1 === yonatan && "object" !== dimetra.nodeName.toLowerCase()) {
            lanaijah = navonte(caytlin), (majestic = dimetra.getAttribute("id")) ? chalino = majestic.replace(aude, "\\$&") : dimetra.setAttribute("id", chalino), chalino = "[id='" + chalino + "'] ", tawni = lanaijah.length;
            while (tawni--) {
              lanaijah[tawni] = chalino + fonnie(lanaijah[tawni]);
            }
            ;
            ambria = labria.test(caytlin) && (dimetra.parentNode && typeof dimetra.parentNode.getElementsByTagName !== nasiir && dimetra.parentNode) || dimetra, josann = lanaijah.join(",");
          }
          ;
          if (josann) {
            try {
              return romyn.apply(alexzandrya, ambria.querySelectorAll(josann)), alexzandrya;
            } catch (amondo) {} finally {
              majestic || dimetra.removeAttribute("id");
            }
          }
        }
      }
      ;
      return oktavia(caytlin.replace(marcellis, "$1"), dimetra, alexzandrya, e);
    }
    function dexx() {
      var charlott = [];
      return starr;
    }
    function anita(chelsealynn) {
      var rowley = jerahmy.createElement("div");
      try {
        return !!chelsealynn(rowley);
      } catch (takesha) {
        return false;
      } finally {
        rowley.parentNode && rowley.parentNode.removeChild(rowley), rowley = null;
      }
    }
    function cuitlahuac(kendrea, thamia) {
      var haelynn = kendrea.split("|"), e = kendrea.length;
      while (e--) {
        oneisha.attrHandle[haelynn[e]] = thamia;
      }
    }
    function lilac(michelann, juddson) {
      var jandi = juddson && michelann, enyce = jandi && 1 === michelann.nodeType && 1 === juddson.nodeType && (~juddson.sourceIndex || tkai) - (~michelann.sourceIndex || tkai);
      if (enyce) {
        return enyce;
      }
      ;
      if (jandi) {
        while (jandi = jandi.nextSibling) {
          if (jandi === juddson) {
            return -1;
          }
        }
      }
      ;
      return michelann ? 1 : -1;
    }
    function jerick(zachory) {
      return function (deericka) {
        var kalea = deericka.nodeName.toLowerCase();
        return "input" === kalea && deericka.type === zachory;
      };
    }
    function bleu(jaded) {
      return function (jardan) {
        var ghavin = jardan.nodeName.toLowerCase();
        return ("input" === ghavin || "button" === ghavin) && jardan.type === jaded;
      };
    }
    function sherrey(markice) {
      return function (byrant) {
        return burwell = +burwell, (function (anaija, mikyas) {
          var e, sumeja = markice([], rilo.length, burwell), yavian = caprial.length;
          while (anastasya--) {
            rilo[e = caprial[anastasya]] && (rilo[e] = !(laron[e] = rilo[e]));
          }
        }[neako] = true, function (anaija, mikyas) {
          var e, sumeja = markice([], rilo.length, burwell), yavian = caprial.length;
          while (anastasya--) {
            rilo[e = caprial[anastasya]] && (rilo[e] = !(laron[e] = rilo[e]));
          }
        });
      }[neako] = true, function (byrant) {
        return burwell = +burwell, (function (anaija, mikyas) {
          var e, sumeja = markice([], rilo.length, burwell), yavian = caprial.length;
          while (anastasya--) {
            rilo[e = caprial[anastasya]] && (rilo[e] = !(laron[e] = rilo[e]));
          }
        }[neako] = true, function (anaija, mikyas) {
          var e, sumeja = markice([], rilo.length, burwell), yavian = caprial.length;
          while (anastasya--) {
            rilo[e = caprial[anastasya]] && (rilo[e] = !(laron[e] = rilo[e]));
          }
        });
      };
    }
    makaylin = jerwin.support = {}, nashari = jerwin.isXML = function (leini) {
      var arsenia = leini && (leini.ownerDocument || leini).documentElement;
      return arsenia ? "HTML" !== arsenia.nodeName : false;
    }, katheen = jerwin.setDocument = function (shakeyra) {
      var cornelius, e = shakeyra ? shakeyra.ownerDocument || shakeyra : kazumi, caryol = e.defaultView;
      return e !== jerahmy && 9 === e.nodeType && e.documentElement ? (jerahmy = e, edwarda = e.documentElement, lon = !nashari(e), caryol && caryol !== caryol.top && (caryol.addEventListener ? caryol.addEventListener("unload", function () {
        katheen();
      }, false) : caryol.attachEvent && caryol.attachEvent("onunload", function () {
        katheen();
      })), makaylin.attributes = anita(function (zikeria) {
        return zikeria.className = "i", !zikeria.getAttribute("className");
      }), makaylin.getElementsByTagName = anita(function (sheylyn) {
        return sheylyn.appendChild(e.createComment("")), !sheylyn.getElementsByTagName("*").length;
      }), makaylin.getElementsByClassName = debrorah.test(e.getElementsByClassName) && anita(function (lequita) {
        return lequita.innerHTML = "<div class='a'></div><div class='a i'></div>", lequita.firstChild.className = "i", 2 === lequita.getElementsByClassName("i").length;
      }), makaylin.getById = anita(function (trejon) {
        return edwarda.appendChild(trejon).id = neako, !e.getElementsByName || !e.getElementsByName(neako).length;
      }), makaylin.getById ? (oneisha.find.ID = function (eleasa, naail) {
        if (typeof naail.getElementById !== nasiir && lon) {
          var ravene = naail.getElementById(eleasa);
          return ravene && ravene.parentNode ? [ravene] : [];
        }
      }, oneisha.filter.ID = function (tahja) {
        var kaizen = tahja.replace(mykail, shohn);
        return function (donard) {
          return donard.getAttribute("id") === kaizen;
        };
      }) : (delete oneisha.find.ID, oneisha.filter.ID = function (anthony) {
        var dashad = anthony.replace(mykail, shohn);
        return function (elliette) {
          var elik = typeof elliette.getAttributeNode !== nasiir && elliette.getAttributeNode("id");
          return elik && elik.value === dashad;
        };
      }), oneisha.find.TAG = makaylin.getElementsByTagName ? function (taelen, kimeka) {
        return typeof kimeka.getElementsByTagName !== nasiir ? kimeka.getElementsByTagName(taelen) : void 0;
      } : function (mirenda, ulesses) {
        var arrion, jasia = [], e = 0, mahana = ulesses.getElementsByTagName(mirenda);
        if ("*" === mirenda) {
          while (arrion = mahana[e++]) {
            1 === arrion.nodeType && jasia.push(arrion);
          }
          ;
          return jasia;
        }
        ;
        return mahana;
      }, oneisha.find.CLASS = makaylin.getElementsByClassName && function (xzander, tonee) {
        return typeof tonee.getElementsByClassName !== nasiir && lon ? tonee.getElementsByClassName(xzander) : void 0;
      }, kelany = [], aliana = [], (makaylin.qsa = debrorah.test(e.querySelectorAll)) && (anita(function (yairet) {
        yairet.innerHTML = "<select msallowclip=''><option selected=''></option></select>", yairet.querySelectorAll("[msallowclip^='']").length && aliana.push("[*^$]=" + makia + "*(?:''|\"\")"), yairet.querySelectorAll("[selected]").length || aliana.push("\\[" + makia + "*(?:value|" + christasia + ")"), yairet.querySelectorAll(":checked").length || aliana.push(":checked");
      }), anita(function (kumar) {
        var jentzen = e.createElement("input");
        jentzen.setAttribute("type", "hidden"), kumar.appendChild(jentzen).setAttribute("name", "D"), kumar.querySelectorAll("[name=d]").length && aliana.push("name" + makia + "*[*^$|!~]?="), kumar.querySelectorAll(":enabled").length || aliana.push(":enabled", ":disabled"), kumar.querySelectorAll("*,:x"), aliana.push(",.*:");
      })), (makaylin.matchesSelector = debrorah.test(kortni = edwarda.matches || edwarda.webkitMatchesSelector || edwarda.mozMatchesSelector || edwarda.oMatchesSelector || edwarda.msMatchesSelector)) && anita(function (cyntrell) {
        makaylin.disconnectedMatch = kortni.call(cyntrell, "div"), kortni.call(cyntrell, "[s!='']:x"), kelany.push("!=", eztli);
      }), aliana = aliana.length && new RegExp(aliana.join("|")), kelany = kelany.length && new RegExp(kelany.join("|")), cornelius = debrorah.test(edwarda.compareDocumentPosition), bahe = cornelius || debrorah.test(edwarda.contains) ? function (jeshwa, darrence) {
        var elvis = 9 === jeshwa.nodeType ? jeshwa.documentElement : jeshwa, natazia = darrence && darrence.parentNode;
        return jeshwa === natazia || !(!natazia || 1 !== natazia.nodeType || !(elvis.contains ? elvis.contains(natazia) : jeshwa.compareDocumentPosition && 16 & jeshwa.compareDocumentPosition(natazia)));
      } : function (rufus, shioban) {
        if (shioban) {
          while (shioban = shioban.parentNode) {
            if (shioban === rufus) {
              return true;
            }
          }
        }
        ;
        return false;
      }, hosannah = cornelius ? function (sevaeh, okal) {
        if (sevaeh === okal) {
          return nishan = true, 0;
        }
        ;
        var winefred = !sevaeh.compareDocumentPosition - !okal.compareDocumentPosition;
        return winefred ? winefred : (winefred = (sevaeh.ownerDocument || sevaeh) === (okal.ownerDocument || okal) ? sevaeh.compareDocumentPosition(okal) : 1, 1 & winefred || !makaylin.sortDetached && okal.compareDocumentPosition(sevaeh) === winefred ? sevaeh === e || sevaeh.ownerDocument === kazumi && bahe(kazumi, sevaeh) ? -1 : okal === e || okal.ownerDocument === kazumi && bahe(kazumi, okal) ? 1 : nyanna ? retha.call(nyanna, sevaeh) - retha.call(nyanna, okal) : 0 : 4 & winefred ? -1 : 1);
      } : function (necola, eiler) {
        if (necola === eiler) {
          return nishan = true, 0;
        }
        ;
        var lakisa, osee = 0, jacbo = necola.parentNode, jahmarcus = eiler.parentNode, keithin = [necola], lanelle = [eiler];
        if (!jacbo || !jahmarcus) {
          return necola === e ? -1 : eiler === e ? 1 : jacbo ? -1 : jahmarcus ? 1 : nyanna ? retha.call(nyanna, necola) - retha.call(nyanna, eiler) : 0;
        }
        ;
        if (jacbo === jahmarcus) {
          return necola.type = (null !== necola.getAttribute("type")) + "/" + necola.type, necola;
        }
        ;
        lakisa = necola;
        while (lakisa = lakisa.parentNode) {
          keithin.unshift(lakisa);
        }
        ;
        lakisa = eiler;
        while (lakisa = lakisa.parentNode) {
          lanelle.unshift(lakisa);
        }
        ;
        while (keithin[osee] === lanelle[osee]) {
          osee++;
        }
        ;
        return osee ? (keithin[osee].type = (null !== keithin[osee].getAttribute("type")) + "/" + keithin[osee].type, keithin[osee]) : keithin[osee] === kazumi ? -1 : lanelle[osee] === kazumi ? 1 : 0;
      }, e) : jerahmy;
    }, jerwin.matches = function (anyanka, debooah) {
      return jerwin(anyanka, null, null, debooah);
    }, jerwin.matchesSelector = function (justi, sebastien) {
      if ((justi.ownerDocument || justi) !== jerahmy && katheen(justi), sebastien = sebastien.replace(jionny, "='$1']"), !(!makaylin.matchesSelector || !lon || kelany && kelany.test(sebastien) || aliana && aliana.test(sebastien))) {
        try {
          var huckley = kortni.call(justi, sebastien);
          if (huckley || makaylin.disconnectedMatch || justi.document && 11 !== justi.document.nodeType) {
            return huckley;
          }
        } catch (e) {}
      }
      ;
      return jerwin(sebastien, jerahmy, null, [justi]).length > 0;
    }, jerwin.contains = function (garnell, asheley) {
      return (garnell.ownerDocument || garnell) !== jerahmy && katheen(garnell), bahe(garnell, asheley);
    }, jerwin.attr = function (weston, marino) {
      (weston.ownerDocument || weston) !== jerahmy && katheen(weston);
      var e = oneisha.attrHandle[marino.toLowerCase()], niles = e && ukiah.call(oneisha.attrHandle, marino.toLowerCase()) ? e(weston, marino, !lon) : void 0;
      return void 0 !== niles ? niles : makaylin.attributes || !lon ? weston.getAttribute(marino) : (niles = weston.getAttributeNode(marino)) && niles.specified ? niles.value : null;
    }, jerwin.error = function (patt) {
      throw new Error("Syntax error, unrecognized expression: " + patt);
    }, jerwin.uniqueSort = function (obryan) {
      var keeli, shawniqua = [], e = 0, atwell = 0;
      if (nishan = !makaylin.detectDuplicates, nyanna = !makaylin.sortStable && obryan.slice(0), obryan.sort(hosannah), nishan) {
        while (keeli = obryan[atwell++]) {
          keeli === obryan[atwell] && (e = shawniqua.push(atwell));
        }
        ;
        while (e--) {
          obryan.splice(shawniqua[e], 1);
        }
      }
      ;
      return nyanna = null, obryan;
    }, e = jerwin.getText = function (andreco) {
      var cynthis, giordana = "", ayesha = 0, terrianne = andreco.nodeType;
      if (terrianne) {
        if (1 === terrianne || 9 === terrianne || 11 === terrianne) {
          if ("string" == typeof andreco.textContent) {
            return andreco.textContent;
          }
          ;
          for (andreco = andreco.firstChild; andreco; andreco = andreco.nextSibling) {
            giordana += e(andreco);
          }
        } else {
          if (3 === terrianne || 4 === terrianne) {
            return andreco.nodeValue;
          }
        }
      } else {
        while (cynthis = andreco[ayesha++]) {
          giordana += e(cynthis);
        }
      }
      ;
      return giordana;
    }, oneisha = jerwin.selectors = {cacheLength: 50, createPseudo: saniyyah, match: tarisa, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: true}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: true}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (katron) {
      return katron[1] = katron[1].replace(mykail, shohn), katron[3] = (katron[3] || katron[4] || katron[5] || "").replace(mykail, shohn), "~=" === katron[2] && (katron[3] = " " + katron[3] + " "), katron.slice(0, 4);
    }, CHILD: function (beacher) {
      return beacher[1] = beacher[1].toLowerCase(), "nth" === beacher[1].slice(0, 3) ? (beacher[3] || jerwin.error(beacher[0]), beacher[4] = +(beacher[4] ? beacher[5] + (beacher[6] || 1) : 2 * ("even" === beacher[3] || "odd" === beacher[3])), beacher[5] = +(beacher[7] + beacher[8] || "odd" === beacher[3])) : beacher[3] && jerwin.error(beacher[0]), beacher;
    }, PSEUDO: function (gwenn) {
      var lilyrose, naquitta = !gwenn[6] && gwenn[2];
      return tarisa.CHILD.test(gwenn[0]) ? null : (gwenn[3] ? gwenn[2] = gwenn[4] || gwenn[5] || "" : naquitta && hazen.test(naquitta) && (lilyrose = navonte(naquitta, true)) && (lilyrose = naquitta.indexOf(")", naquitta.length - lilyrose) - naquitta.length) && (gwenn[0] = gwenn[0].slice(0, lilyrose), gwenn[2] = naquitta.slice(0, lilyrose)), gwenn.slice(0, 3));
    }}, filter: {TAG: function (obidiah) {
      var shy = obidiah.replace(mykail, shohn).toLowerCase();
      return "*" === obidiah ? function () {
        return true;
      } : function (carliegh) {
        return carliegh.nodeName && carliegh.nodeName.toLowerCase() === shy;
      };
    }, CLASS: function (alaya) {
      var ameliah = elizabeta[alaya + " "];
      return ameliah || (ameliah = new RegExp("(^|" + makia + ")" + alaya + "(" + makia + "|$)")) && elizabeta(alaya, function (mokshitha) {
        return ameliah.test("string" == typeof mokshitha.className && mokshitha.className || typeof mokshitha.getAttribute !== nasiir && mokshitha.getAttribute("class") || "");
      });
    }, ATTR: function (lashaundria, idalie, raenae) {
      return function (demajae) {
        var e = jerwin.attr(demajae, lashaundria);
        return null == e ? "!=" === idalie : idalie ? (e += "", "=" === idalie ? e === raenae : "!=" === idalie ? e !== raenae : "^=" === idalie ? raenae && 0 === e.indexOf(raenae) : "*=" === idalie ? raenae && e.indexOf(raenae) > -1 : "$=" === idalie ? raenae && e.slice(-raenae.length) === raenae : "~=" === idalie ? (" " + e + " ").indexOf(raenae) > -1 : "|=" === idalie ? e === raenae || e.slice(0, raenae.length + 1) === raenae + "-" : false) : true;
      };
    }, CHILD: function (ayla, elios, jimique, teuna, e) {
      var avis = "nth" !== ayla.slice(0, 3), chandell = "last" !== ayla.slice(-4), hermania = "of-type" === elios;
      return 1 === teuna && 0 === e ? function (vivaansh) {
        return !!vivaansh.parentNode;
      } : function (adlen, antojuan, orbra) {
        var bobbilynn, wa, sabir, marlenis, oladapo, jerrie, shauntavia = avis !== chandell ? "nextSibling" : "previousSibling", taylorlynn = adlen.parentNode, elihue = hermania && adlen.nodeName.toLowerCase(), emmalyn = !orbra && !hermania;
        if (taylorlynn) {
          if (avis) {
            while (shauntavia) {
              sabir = adlen;
              while (sabir = sabir[shauntavia]) {
                if (hermania ? sabir.nodeName.toLowerCase() === elihue : 1 === sabir.nodeType) {
                  return false;
                }
              }
              ;
              jerrie = shauntavia = "only" === ayla && !jerrie && "nextSibling";
            }
            ;
            return true;
          }
          ;
          if (jerrie = [chandell ? taylorlynn.firstChild : taylorlynn.lastChild], chandell && emmalyn) {
            wa = taylorlynn[neako] || (taylorlynn[neako] = {}), bobbilynn = wa[ayla] || [], oladapo = bobbilynn[0] === yenifer && bobbilynn[1], marlenis = bobbilynn[0] === yenifer && bobbilynn[2], sabir = oladapo && taylorlynn.childNodes[oladapo];
            while (sabir = ++oladapo && sabir && sabir[shauntavia] || (marlenis = oladapo = 0) || jerrie.pop()) {
              if (1 === sabir.nodeType && ++marlenis && sabir === adlen) {
                wa[ayla] = [yenifer, oladapo, marlenis];
                break;
              }
            }
          } else {
            if (emmalyn && (bobbilynn = (adlen[neako] || (adlen[neako] = {}))[ayla]) && bobbilynn[0] === yenifer) {
              marlenis = bobbilynn[1];
            } else {
              while (sabir = ++oladapo && sabir && sabir[shauntavia] || (marlenis = oladapo = 0) || jerrie.pop()) {
                if ((hermania ? sabir.nodeName.toLowerCase() === elihue : 1 === sabir.nodeType) && ++marlenis && (emmalyn && ((sabir[neako] || (sabir[neako] = {}))[ayla] = [yenifer, marlenis]), sabir === adlen)) {
                  break;
                }
              }
            }
          }
          ;
          return marlenis -= e, marlenis === teuna || marlenis % teuna === 0 && marlenis / teuna >= 0;
        }
      };
    }, PSEUDO: function (karielys, nyeshia) {
      var abrahem, e = oneisha.pseudos[karielys] || oneisha.setFilters[karielys.toLowerCase()] || jerwin.error("unsupported pseudo: " + karielys);
      return e[neako] ? e(nyeshia) : e.length > 1 ? (abrahem = [karielys, karielys, "", nyeshia], oneisha.setFilters.hasOwnProperty(karielys.toLowerCase()) ? (function (attison, shehbaaz) {
        var siya, diasia = e(josip, nyeshia), dayanera = shailene.length;
        while (chaise--) {
          kinleigh = retha.call(josip, shailene[chaise]), josip[kinleigh] = !(hartwell[kinleigh] = shailene[chaise]);
        }
      }[neako] = true, function (attison, shehbaaz) {
        var siya, diasia = e(josip, nyeshia), dayanera = shailene.length;
        while (chaise--) {
          kinleigh = retha.call(josip, shailene[chaise]), josip[kinleigh] = !(hartwell[kinleigh] = shailene[chaise]);
        }
      }) : function (albrey) {
        return e(albrey, 0, abrahem);
      }) : e;
    }}, pseudos: {not: (function (jorddy) {
      var katrena = [], mardelle = [], johneice = carlasia(addalie.replace(marcellis, "$1"));
      return clairene[neako] ? (function (anyelina, jennifer, coryana, e) {
        var ciria, chlorine = clairene(kevondra, null, e, []), makamae = kevondra.length;
        while (moana--) {
          (brenton = amitha[moana]) && (kevondra[moana] = !(kayslee[moana] = brenton));
        }
      }[neako] = true, function (anyelina, jennifer, coryana, e) {
        var ciria, chlorine = clairene(kevondra, null, e, []), makamae = kevondra.length;
        while (moana--) {
          (brenton = amitha[moana]) && (kevondra[moana] = !(kayslee[moana] = brenton));
        }
      }) : function (raenada, e, ambrocio) {
        return willamina[0] = sammya, clairene(willamina, null, tamara, anosha), !anosha.pop();
      };
    }[neako] = true, function (jorddy) {
      var katrena = [], mardelle = [], johneice = carlasia(addalie.replace(marcellis, "$1"));
      return clairene[neako] ? (function (anyelina, jennifer, coryana, e) {
        var ciria, chlorine = clairene(kevondra, null, e, []), makamae = kevondra.length;
        while (moana--) {
          (brenton = amitha[moana]) && (kevondra[moana] = !(kayslee[moana] = brenton));
        }
      }[neako] = true, function (anyelina, jennifer, coryana, e) {
        var ciria, chlorine = clairene(kevondra, null, e, []), makamae = kevondra.length;
        while (moana--) {
          (brenton = amitha[moana]) && (kevondra[moana] = !(kayslee[moana] = brenton));
        }
      }) : function (raenada, e, ambrocio) {
        return willamina[0] = sammya, clairene(willamina, null, tamara, anosha), !anosha.pop();
      };
    }), has: (function (zyriyah) {
      return function (tymeer) {
        return jerwin(trishalana, angelline).length > 0;
      };
    }[neako] = true, function (zyriyah) {
      return function (tymeer) {
        return jerwin(trishalana, angelline).length > 0;
      };
    }), contains: (function (samella) {
      return function (amyrie) {
        return (illinois.textContent || illinois.innerText || e(illinois)).indexOf(jaceline) > -1;
      };
    }[neako] = true, function (samella) {
      return function (amyrie) {
        return (illinois.textContent || illinois.innerText || e(illinois)).indexOf(jaceline) > -1;
      };
    }), lang: (function (kanethia) {
      return latoy.test(naftuli || "") || jerwin.error("unsupported lang: " + naftuli), naftuli = naftuli.replace(mykail, shohn).toLowerCase(), function (megen) {
        var gisely;
        do {
          if (du = lon ? moraes.lang : moraes.getAttribute("xml:lang") || moraes.getAttribute("lang")) {
            return du = du.toLowerCase(), du === naftuli || 0 === du.indexOf(naftuli + "-");
          }
        } while ((moraes = moraes.parentNode) && 1 === moraes.nodeType);
        ;
        return false;
      };
    }[neako] = true, function (kanethia) {
      return latoy.test(naftuli || "") || jerwin.error("unsupported lang: " + naftuli), naftuli = naftuli.replace(mykail, shohn).toLowerCase(), function (megen) {
        var gisely;
        do {
          if (du = lon ? moraes.lang : moraes.getAttribute("xml:lang") || moraes.getAttribute("lang")) {
            return du = du.toLowerCase(), du === naftuli || 0 === du.indexOf(naftuli + "-");
          }
        } while ((moraes = moraes.parentNode) && 1 === moraes.nodeType);
        ;
        return false;
      };
    }), target: function (dollicia) {
      var darshik = grettell.location && grettell.location.hash;
      return darshik && darshik.slice(1) === dollicia.id;
    }, root: function (altheria) {
      return altheria === edwarda;
    }, focus: function (comari) {
      return comari === jerahmy.activeElement && (!jerahmy.hasFocus || jerahmy.hasFocus()) && !!(comari.type || comari.href || ~comari.tabIndex);
    }, enabled: function (roselea) {
      return roselea.disabled === false;
    }, disabled: function (hriti) {
      return hriti.disabled === true;
    }, checked: function (vanner) {
      var sytha = vanner.nodeName.toLowerCase();
      return "input" === sytha && !!vanner.checked || "option" === sytha && !!vanner.selected;
    }, selected: function (garrit) {
      return garrit.parentNode && garrit.parentNode.selectedIndex, garrit.selected === true;
    }, empty: function (yarden) {
      for (yarden = yarden.firstChild; yarden; yarden = yarden.nextSibling) {
        if (yarden.nodeType < 6) {
          return false;
        }
      }
      ;
      return true;
    }, parent: function (dymond) {
      return !oneisha.pseudos.empty(dymond);
    }, header: function (fordyce) {
      return zerelda.test(fordyce.nodeName);
    }, input: function (rance) {
      return adysyn.test(rance.nodeName);
    }, button: function (jannita) {
      var adama = jannita.nodeName.toLowerCase();
      return "input" === adama && "button" === jannita.type || "button" === adama;
    }, text: function (keirin) {
      var yehuda;
      return "input" === keirin.nodeName.toLowerCase() && "text" === keirin.type && (null == (yehuda = keirin.getAttribute("type")) || "text" === yehuda.toLowerCase());
    }, first: sherrey(function () {
      return [0];
    }), last: sherrey(function (peni, giannamarie) {
      return [giannamarie - 1];
    }), eq: sherrey(function (jayleon, mycha, maxson) {
      return [0 > maxson ? maxson + mycha : maxson];
    }), even: sherrey(function (jatin, nguyet) {
      for (var masir = 0; nguyet > masir; masir += 2) {
        jatin.push(masir);
      }
      ;
      return jatin;
    }), odd: sherrey(function (brialle, anwar) {
      for (var druv = 1; anwar > druv; druv += 2) {
        brialle.push(druv);
      }
      ;
      return brialle;
    }), lt: sherrey(function (tijay, viridian, addell) {
      for (var macus = 0 > addell ? addell + viridian : addell; --macus >= 0;) {
        tijay.push(macus);
      }
      ;
      return tijay;
    }), gt: sherrey(function (azzahra, ceion, fenet) {
      for (var jeanett = 0 > fenet ? fenet + ceion : fenet; ++jeanett < ceion;) {
        azzahra.push(jeanett);
      }
      ;
      return azzahra;
    })}}, oneisha.pseudos.nth = oneisha.pseudos.eq;
    for (starr in {radio: true, checkbox: true, file: true, password: true, image: true}) {
      oneisha.pseudos[starr] = jerick(starr);
    }
    ;
    for (starr in {submit: true, reset: true}) {
      oneisha.pseudos[starr] = bleu(starr);
    }
    ;
    function jackelyn() {}
    jackelyn.prototype = oneisha.filters = oneisha.pseudos, oneisha.setFilters = new jackelyn, navonte = jerwin.tokenize = function (brisayda, raymonte) {
      var nichoel, e, herberto, yonina, melaney, cleaster, jenipher, martricia = rosarie[brisayda + " "];
      if (martricia) {
        return raymonte ? 0 : martricia.slice(0);
      }
      ;
      melaney = brisayda, cleaster = [], jenipher = oneisha.preFilter;
      while (melaney) {
        (!nichoel || (e = clinard.exec(melaney))) && (e && (melaney = melaney.slice(e[0].length) || melaney), cleaster.push(herberto = [])), nichoel = false, (e = nieja.exec(melaney)) && (nichoel = e.shift(), herberto.push({value: nichoel, type: e[0].replace(marcellis, " ")}), melaney = melaney.slice(nichoel.length));
        for (yonina in oneisha.filter) {
          !(e = tarisa[yonina].exec(melaney)) || jenipher[yonina] && !(e = jenipher[yonina](e)) || (nichoel = e.shift(), herberto.push({value: nichoel, type: yonina, matches: e}), melaney = melaney.slice(nichoel.length));
        }
        ;
        if (!nichoel) {
          break;
        }
      }
      ;
      return raymonte ? melaney.length : melaney ? jerwin.error(brisayda) : rosarie(brisayda, cleaster).slice(0);
    };
    function fonnie(marterrius) {
      for (var cederick = 0, tieysha = marterrius.length, mikaya = ""; tieysha > cederick; cederick++) {
        mikaya += marterrius[cederick].value;
      }
      ;
      return mikaya;
    }
    function carizma(solenn, embla, theary) {
      var nikan = embla.dir, e = theary && "parentNode" === nikan, tawonda = shakitha++;
      return embla.first ? function (tabby, karrell, jataveon) {
        while (tabby = tabby[nikan]) {
          if (1 === tabby.nodeType || e) {
            return solenn(tabby, karrell, jataveon);
          }
        }
      } : function (gergory, cithlaly, rollene) {
        var dary, shirlann, brittannie = [yenifer, tawonda];
        if (rollene) {
          while (gergory = gergory[nikan]) {
            if ((1 === gergory.nodeType || e) && solenn(gergory, cithlaly, rollene)) {
              return true;
            }
          }
        } else {
          while (gergory = gergory[nikan]) {
            if (1 === gergory.nodeType || e) {
              if (shirlann = gergory[neako] || (gergory[neako] = {}), (dary = shirlann[nikan]) && dary[0] === yenifer && dary[1] === tawonda) {
                return brittannie[2] = dary[2];
              }
              ;
              if (shirlann[nikan] = brittannie, brittannie[2] = solenn(gergory, cithlaly, rollene)) {
                return true;
              }
            }
          }
        }
      };
    }
    function loleatha(naiely) {
      return naiely.length > 1 ? function (zoa, tynija, garlene) {
        var e = naiely.length;
        while (e--) {
          if (!naiely[e](zoa, tynija, garlene)) {
            return false;
          }
        }
        ;
        return true;
      } : naiely[0];
    }
    function carlisha(akaila, maymuna, eziah) {
      for (var ahmelia = 0, e = maymuna.length; e > ahmelia; ahmelia++) {
        jerwin(akaila, maymuna[ahmelia], eziah);
      }
      ;
      return eziah;
    }
    function quetin(marshelle, ngocanh, isahbella, saphera, e) {
      for (var clairah, kelty = [], alyosha = 0, danylah = marshelle.length, elisianna = null != ngocanh; danylah > alyosha; alyosha++) {
        (clairah = marshelle[alyosha]) && (!isahbella || isahbella(clairah, saphera, e)) && (kelty.push(clairah), elisianna && ngocanh.push(alyosha));
      }
      ;
      return kelty;
    }
    function zadien(sergi, omaryon, dannye, shykia, e, varik) {
      return shykia && !shykia[neako] && (shykia = zadien(shykia)), e && !e[neako] && (e = zadien(e, varik)), (function (kolby, kernis, auriyana, shaleia) {
        var cyrielle, arec, darral, yvannah = [], trenee = [], idrissa = roshelle.length, terrilynne = alxis || carlisha(omaryon || "*", amba.nodeType ? [amba] : amba, []), sangeetha = !sergi || !alxis && omaryon ? pharren : quetin(pharren, ayanne, sergi, amba, mikiah), izobel = dannye ? e || (alxis ? sergi : worthy || shykia) ? [] : roshelle : justino;
        if (dannye && dannye(justino, deberah, amba, mikiah), shykia) {
          tirsa = quetin(deberah, nkiyah), shykia(tirsa, [], amba, mikiah), barbaro = tirsa.length;
          while (barbaro--) {
            (edher = tirsa[barbaro]) && (deberah[nkiyah[barbaro]] = !(justino[nkiyah[barbaro]] = edher));
          }
        }
        ;
        if (alxis) {
          if (e || sergi) {
            if (e) {
              tirsa = [], barbaro = deberah.length;
              while (barbaro--) {
                (edher = deberah[barbaro]) && tirsa.push(justino[barbaro] = edher);
              }
              ;
              e(null, deberah = [], tirsa, mikiah);
            }
            ;
            barbaro = deberah.length;
            while (barbaro--) {
              (edher = deberah[barbaro]) && (tirsa = e ? retha.call(alxis, edher) : ayanne[barbaro]) > -1 && (alxis[tirsa] = !(roshelle[tirsa] = edher));
            }
          }
        } else {
          deberah = quetin(deberah === roshelle ? deberah.splice(worthy, deberah.length) : deberah), e ? e(null, roshelle, deberah, mikiah) : romyn.apply(roshelle, deberah);
        }
      }[neako] = true, function (kolby, kernis, auriyana, shaleia) {
        var cyrielle, arec, darral, yvannah = [], trenee = [], idrissa = roshelle.length, terrilynne = alxis || carlisha(omaryon || "*", amba.nodeType ? [amba] : amba, []), sangeetha = !sergi || !alxis && omaryon ? pharren : quetin(pharren, ayanne, sergi, amba, mikiah), izobel = dannye ? e || (alxis ? sergi : worthy || shykia) ? [] : roshelle : justino;
        if (dannye && dannye(justino, deberah, amba, mikiah), shykia) {
          tirsa = quetin(deberah, nkiyah), shykia(tirsa, [], amba, mikiah), barbaro = tirsa.length;
          while (barbaro--) {
            (edher = tirsa[barbaro]) && (deberah[nkiyah[barbaro]] = !(justino[nkiyah[barbaro]] = edher));
          }
        }
        ;
        if (alxis) {
          if (e || sergi) {
            if (e) {
              tirsa = [], barbaro = deberah.length;
              while (barbaro--) {
                (edher = deberah[barbaro]) && tirsa.push(justino[barbaro] = edher);
              }
              ;
              e(null, deberah = [], tirsa, mikiah);
            }
            ;
            barbaro = deberah.length;
            while (barbaro--) {
              (edher = deberah[barbaro]) && (tirsa = e ? retha.call(alxis, edher) : ayanne[barbaro]) > -1 && (alxis[tirsa] = !(roshelle[tirsa] = edher));
            }
          }
        } else {
          deberah = quetin(deberah === roshelle ? deberah.splice(worthy, deberah.length) : deberah), e ? e(null, roshelle, deberah, mikiah) : romyn.apply(roshelle, deberah);
        }
      });
    }
    function mariani(kadri) {
      for (var camilah, joandri, e, sanvi = kadri.length, tonaya = oneisha.relative[kadri[0].type], aubreyelle = tonaya || oneisha.relative[" "], zair = tonaya ? 1 : 0, hermie = carizma(function (kianne) {
        return kianne === camilah;
      }, aubreyelle, true), muaath = carizma(function (optimus) {
        return retha.call(camilah, optimus) > -1;
      }, aubreyelle, true), olympia = [function (sherice, yarik, delroy) {
        return !tonaya && (delroy || yarik !== christale) || ((camilah = yarik).nodeType ? hermie(sherice, yarik, delroy) : muaath(sherice, yarik, delroy));
      }]; sanvi > zair; zair++) {
        if (joandri = oneisha.relative[kadri[zair].type]) {
          olympia = [carizma(loleatha(olympia), joandri)];
        } else {
          if (joandri = oneisha.filter[kadri[zair].type].apply(null, kadri[zair].matches), joandri[neako]) {
            for (e = ++zair; sanvi > e; e++) {
              if (oneisha.relative[kadri[e].type]) {
                break;
              }
            }
            ;
            return zadien(zair > 1 && loleatha(olympia), zair > 1 && fonnie(kadri.slice(0, zair - 1).concat({value: " " === kadri[zair - 2].type ? "*" : ""})).replace(marcellis, "$1"), joandri, e > zair && kadri.slice(zair, e).ownerDocument.defaultView.getComputedStyle(kadri.slice(zair, e), null), sanvi > e && (kadri = kadri.slice(e)).ownerDocument.defaultView.getComputedStyle(kadri = kadri.slice(e), null), sanvi > e && fonnie(kadri));
          }
          ;
          olympia.push(joandri);
        }
      }
      ;
      return loleatha(olympia);
    }
    function gaspare(denaya, prina) {
      var linnae = prina.length > 0, e = denaya.length > 0, vhonda = function (roselena, aerolynn, labyron, kitara, orange) {
        var kendrik, tyeishia, milady, edid = 0, ranea = "0", dsean = roselena && [], adoline = [], terelle = christale, yarishna = roselena || e && oneisha.find.TAG("*", orange), domminic = yenifer += null == terelle ? 1 : Math.random() || 0.1, alaynia = yarishna.length;
        for (orange && (christale = aerolynn !== jerahmy && aerolynn); ranea !== alaynia && null != (kendrik = yarishna[ranea]); ranea++) {
          if (e && kendrik) {
            tyeishia = 0;
            while (milady = denaya[tyeishia++]) {
              if (milady(kendrik, aerolynn, labyron)) {
                kitara.push(kendrik);
                break;
              }
            }
            ;
            orange && (yenifer = domminic);
          }
          ;
          linnae && ((kendrik = !milady && kendrik) && edid--, roselena && dsean.push(kendrik));
        }
        ;
        if (edid += ranea, linnae && ranea !== edid) {
          tyeishia = 0;
          while (milady = prina[tyeishia++]) {
            milady(dsean, adoline, aerolynn, labyron);
          }
          ;
          if (roselena) {
            if (edid > 0) {
              while (ranea--) {
                dsean[ranea] || adoline[ranea] || (adoline[ranea] = lorette.call(kitara));
              }
            }
            ;
            adoline = quetin(adoline);
          }
          ;
          romyn.apply(kitara, adoline), orange && !roselena && adoline.length > 0 && edid + prina.length > 1 && jerwin.uniqueSort(kitara);
        }
        ;
        return orange && (yenifer = domminic, christale = terelle), dsean;
      };
      return linnae ? (vhonda[neako] = true, vhonda) : vhonda;
    }
    return carlasia = jerwin.compile = function (augustino, zohara) {
      var gelsey, kiziah = [], e = [], dung = tapatha[augustino + " "];
      if (!dung) {
        zohara || (zohara = navonte(augustino)), gelsey = zohara.length;
        while (gelsey--) {
          dung = zohara[gelsey].ownerDocument.defaultView.getComputedStyle(zohara[gelsey], null), dung[neako] ? kiziah.push(dung) : e.push(dung);
        }
        ;
        dung = tapatha(augustino, gaspare(e, kiziah)), dung.selector = augustino;
      }
      ;
      return dung;
    }, oktavia = jerwin.select = function (krisia, sacramento, e, aliviah) {
      var sanders, khamar, cutina, kamarian, nyiasia, merab = "function" == typeof krisia && krisia, tillee = !aliviah && navonte(krisia = merab.selector || krisia);
      if (e = e || [], 1 === tillee.length) {
        if (khamar = tillee[0] = tillee[0].slice(0), khamar.length > 2 && "ID" === (cutina = khamar[0]).type && makaylin.getById && 9 === sacramento.nodeType && lon && oneisha.relative[khamar[1].type]) {
          if (sacramento = (oneisha.find.ID(cutina.matches[0].replace(mykail, shohn), sacramento) || [])[0], !sacramento) {
            return e;
          }
          ;
          merab && (sacramento = sacramento.parentNode), krisia = krisia.slice(khamar.shift().value.length);
        }
        ;
        sanders = tarisa.needsContext.test(krisia) ? 0 : khamar.length;
        while (sanders--) {
          if (cutina = khamar[sanders], oneisha.relative[kamarian = cutina.type]) {
            break;
          }
          ;
          if ((nyiasia = oneisha.find[kamarian]) && (aliviah = nyiasia(cutina.matches[0].replace(mykail, shohn), labria.test(khamar[0].type) && (sacramento.parentNode && typeof sacramento.parentNode.getElementsByTagName !== nasiir && sacramento.parentNode) || sacramento))) {
            if (khamar.splice(sanders, 1), krisia = aliviah.length && fonnie(khamar), !krisia) {
              return romyn.apply(e, aliviah), e;
            }
            ;
            break;
          }
        }
      }
      ;
      return (merab || carlasia(krisia, tillee))(aliviah, sacramento, !lon, e, labria.test(krisia) && (sacramento.parentNode && typeof sacramento.parentNode.getElementsByTagName !== nasiir && sacramento.parentNode) || sacramento), e;
    }, makaylin.sortStable = neako.split("").sort(hosannah).join("") === neako, makaylin.detectDuplicates = !!nishan, katheen(), makaylin.sortDetached = anita(function (amauris) {
      return 1 & amauris.compareDocumentPosition(jerahmy.createElement("div"));
    }), anita(function (kovid) {
      return kovid.innerHTML = "<a href='#'></a>", "#" === kovid.firstChild.getAttribute("href");
    }) || cuitlahuac("type|href|height|width", function (devaunte, jaricka, jaydien) {
      return jaydien ? void 0 : devaunte.getAttribute(jaricka, "type" === jaricka.toLowerCase() ? 1 : 2);
    }), makaylin.attributes && anita(function (trintin) {
      return trintin.innerHTML = "<input/>", trintin.firstChild.setAttribute("value", ""), "" === trintin.firstChild.getAttribute("value");
    }) || cuitlahuac("value", function (lejuan, justinjames, pernia) {
      return pernia || "input" !== lejuan.nodeName.toLowerCase() ? void 0 : lejuan.defaultValue;
    }), anita(function (soheil) {
      return null == soheil.getAttribute("disabled");
    }) || cuitlahuac(christasia, function (ok, kaite, shiffon) {
      var tewanna;
      return shiffon ? void 0 : ok[kaite] === true ? kaite.toLowerCase() : (tewanna = ok.getAttributeNode(kaite)) && tewanna.specified ? tewanna.value : null;
    }), jerwin;
  }(virla);
  chaylyn.find = marta, chaylyn.expr = marta.selectors, chaylyn.expr[":"] = chaylyn.expr.pseudos, chaylyn.unique = marta.uniqueSort, chaylyn.text = marta.getText, chaylyn.isXMLDoc = marta.isXML, chaylyn.contains = marta.contains;
  var libna = chaylyn.expr.match.needsContext, seaanna = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, chalice = /^.[^:#\[\.,]*$/;
  function jerryn(nicolyn, ysabella, jahnathan) {
    if (chaylyn.isFunction(ysabella)) {
      return chaylyn.grep(nicolyn, function (dayqwan, kadeem) {
        return !!ysabella.call(dayqwan, kadeem, dayqwan) !== jahnathan;
      });
    }
    ;
    if (ysabella.nodeType) {
      return chaylyn.grep(nicolyn, function (vitold) {
        return vitold === ysabella !== jahnathan;
      });
    }
    ;
    if ("string" == typeof ysabella) {
      if (chalice.test(ysabella)) {
        return chaylyn.filter(ysabella, nicolyn, jahnathan);
      }
      ;
      ysabella = chaylyn.filter(ysabella, nicolyn);
    }
    ;
    return chaylyn.grep(nicolyn, function (raliegh) {
      return nadara.call(ysabella, raliegh) >= 0 !== jahnathan;
    });
  }
  chaylyn.filter = function (taneiqua, jehsiah, geriann) {
    var ayano = jehsiah[0];
    return geriann && (taneiqua = ":not(" + taneiqua + ")"), 1 === jehsiah.length && 1 === ayano.nodeType ? chaylyn.find.matchesSelector(ayano, taneiqua) ? [ayano] : [] : chaylyn.find.matches(taneiqua, chaylyn.grep(jehsiah, function (leeroy) {
      return 1 === leeroy.nodeType;
    }));
  }, chaylyn.fn.extend({find: function (nivi) {
    var kita, mamon = this.length, shaletta = [], e = this;
    if ("string" != typeof nivi) {
      return this.pushStack(chaylyn(nivi).filter(function () {
        for (kita = 0; mamon > kita; kita++) {
          if (chaylyn.contains(e[kita], this)) {
            return true;
          }
        }
      }));
    }
    ;
    for (kita = 0; mamon > kita; kita++) {
      chaylyn.find(nivi, e[kita], shaletta);
    }
    ;
    return shaletta = this.pushStack(mamon > 1 ? chaylyn.unique(shaletta) : shaletta), shaletta.selector = this.selector ? this.selector + " " + nivi : nivi, shaletta;
  }, filter: function (stacha) {
    return this.pushStack(jerryn(this, stacha || [], false));
  }, not: function (katedra) {
    return this.pushStack(jerryn(this, katedra || [], true));
  }, is: function (kenitra) {
    return !!jerryn(this, "string" == typeof kenitra && libna.test(kenitra) ? chaylyn(kenitra) : kenitra || [], false).length;
  }});
  var luong, saku = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, mondre = chaylyn.fn.init = function (emaliya, shaterica) {
    var philippina, attie;
    if (!emaliya) {
      return this;
    }
    ;
    if ("string" == typeof emaliya) {
      if (philippina = "<" === emaliya[0] && ">" === emaliya[emaliya.length - 1] && emaliya.length >= 3 ? [null, emaliya, null] : saku.exec(emaliya), !philippina || !philippina[1] && shaterica) {
        return !shaterica || shaterica.jquery ? (shaterica || luong).find(emaliya) : this.constructor(shaterica).find(emaliya);
      }
      ;
      if (philippina[1]) {
        if (shaterica = shaterica instanceof chaylyn ? shaterica[0] : shaterica, chaylyn.merge(this, chaylyn.parseHTML(philippina[1], shaterica && shaterica.nodeType ? shaterica.ownerDocument || shaterica : zosia, true)), seaanna.test(philippina[1]) && chaylyn.isPlainObject(shaterica)) {
          for (philippina in shaterica) {
            chaylyn.isFunction(this[philippina]) ? this[philippina](shaterica[philippina]) : this.attr(philippina, shaterica[philippina]);
          }
        }
        ;
        return this;
      }
      ;
      return attie = zosia.getElementById(philippina[2]), attie && attie.parentNode && (this.length = 1, this[0] = attie), this.context = zosia, this.selector = emaliya, this;
    }
    ;
    return emaliya.nodeType ? (this.context = this[0] = emaliya, this.length = 1, this) : chaylyn.isFunction(emaliya) ? "undefined" != typeof luong.ready ? luong.ready(emaliya) : emaliya(chaylyn) : (void 0 !== emaliya.selector && (this.selector = emaliya.selector, this.context = emaliya.context), chaylyn.makeArray(emaliya, this));
  };
  mondre.prototype = chaylyn.fn, luong = chaylyn(zosia);
  var hosannah = /^(?:parents|prev(?:Until|All))/, luciel = {children: true, contents: true, next: true, prev: true};
  chaylyn.extend({dir: function (arven, mirranda, altheia) {
    var kinisha = [], e = void 0 !== altheia;
    while ((arven = arven[mirranda]) && 9 !== arven.nodeType) {
      if (1 === arven.nodeType) {
        if (e && chaylyn(arven).is(altheia)) {
          break;
        }
        ;
        kinisha.push(arven);
      }
    }
    ;
    return kinisha;
  }, sibling: function (jealousy, anyae) {
    for (var asira = []; jealousy; jealousy = jealousy.nextSibling) {
      1 === jealousy.nodeType && jealousy !== anyae && asira.push(jealousy);
    }
    ;
    return asira;
  }}), chaylyn.fn.extend({has: function (kallissa) {
    var faiga = chaylyn(kallissa, this), carrissa = faiga.length;
    return this.filter(function () {
      for (var zayvin = 0; carrissa > zayvin; zayvin++) {
        if (chaylyn.contains(this, faiga[zayvin])) {
          return true;
        }
      }
    });
  }, closest: function (dae, londynmarie) {
    for (var chlora, muhamed = 0, e = this.length, macallan = [], jannike = libna.test(dae) || "string" != typeof dae ? chaylyn(dae, londynmarie || this.context) : 0; e > muhamed; muhamed++) {
      for (chlora = this[muhamed]; chlora && chlora !== londynmarie; chlora = chlora.parentNode) {
        if (chlora.nodeType < 11 && (jannike ? jannike.index(chlora) > -1 : 1 === chlora.nodeType && chaylyn.find.matchesSelector(chlora, dae))) {
          macallan.push(chlora);
          break;
        }
      }
    }
    ;
    return this.pushStack(macallan.length > 1 ? chaylyn.unique(macallan) : macallan);
  }, index: function (tokuichi) {
    return tokuichi ? "string" == typeof tokuichi ? nadara.call(chaylyn(tokuichi), this[0]) : nadara.call(this, tokuichi.jquery ? tokuichi[0] : tokuichi) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function (louvada, rashodd) {
    return this.pushStack(chaylyn.unique(chaylyn.merge(this.get(), chaylyn(louvada, rashodd))));
  }, addBack: function (patrika) {
    return this.add(null == patrika ? this.prevObject : this.prevObject.filter(patrika));
  }});
  function juanesteban(rasheid, tyrita) {
    while ((rasheid = rasheid[tyrita]) && 1 !== rasheid.nodeType) {
      ;
    }
    ;
    return rasheid;
  }
  chaylyn.each({parent: function (kaynon) {
    var marleyrose = kaynon.parentNode;
    return marleyrose && 11 !== marleyrose.nodeType ? marleyrose : null;
  }, parents: function (shylee) {
    return chaylyn.dir(shylee, "parentNode");
  }, parentsUntil: function (ellody, temya, fathima) {
    return chaylyn.dir(ellody, "parentNode", fathima);
  }, next: function (olaoluwakitan) {
    return juanesteban(olaoluwakitan, "nextSibling");
  }, prev: function (kearstin) {
    return juanesteban(kearstin, "previousSibling");
  }, nextAll: function (phylea) {
    return chaylyn.dir(phylea, "nextSibling");
  }, prevAll: function (enajah) {
    return chaylyn.dir(enajah, "previousSibling");
  }, nextUntil: function (demeca, ioseph, malvie) {
    return chaylyn.dir(demeca, "nextSibling", malvie);
  }, prevUntil: function (arva, marleth, tybriana) {
    return chaylyn.dir(arva, "previousSibling", tybriana);
  }, siblings: function (tamiko) {
    return chaylyn.sibling((tamiko.parentNode || {}).firstChild, tamiko);
  }, children: function (bethie) {
    return chaylyn.sibling(bethie.firstChild);
  }, contents: function (jamesedward) {
    return jamesedward.contentDocument || chaylyn.merge([], jamesedward.childNodes);
  }}, function (iwona, modupe) {
    chaylyn.fn[iwona] = function (kenndy, midna) {
      var e = chaylyn.map(this, modupe, kenndy);
      return "Until" !== iwona.slice(-5) && (midna = kenndy), midna && "string" == typeof midna && (e = chaylyn.filter(midna, e)), this.length > 1 && (luciel[iwona] || chaylyn.unique(e), hosannah.test(iwona) && e.reverse()), this.pushStack(e);
    };
  });
  var kwyn = /\S+/g, zoran = {};
  function shatell(stig) {
    var brindi = zoran[stig] = {};
    return chaylyn.each(stig.match(kwyn) || [], function (deasha, kamarionna) {
      brindi[kamarionna] = true;
    }), brindi;
  }
  chaylyn.Callbacks = function (ethann) {
    ethann = "string" == typeof ethann ? zoran[ethann] || shatell(ethann) : chaylyn.extend({}, ethann);
    var jarem, raaina, dezere, e, caterina, kimblyn, marilena = [], marison = !ethann.once && [], moe = function (barker) {
      for (jarem = ethann.memory && barker, raaina = true, kimblyn = e || 0, e = 0, caterina = marilena.length, dezere = true; marilena && caterina > kimblyn; kimblyn++) {
        if (marilena[kimblyn].apply(barker[0], barker[1]) === false && ethann.stopOnFalse) {
          jarem = false;
          break;
        }
      }
      ;
      dezere = false, marilena && (marison ? marison.length && moe(marison.shift()) : jarem ? marilena = [] : farhad.disable());
    }, farhad = {add: function () {
      if (marilena) {
        var nithish = marilena.length;
        !function jaggar(emmersyn) {
          chaylyn.each(emmersyn, function (bea, spencel) {
            var linzell = chaylyn.type(spencel);
            "function" === linzell ? ethann.unique && farhad.has(spencel) || marilena.push(spencel) : spencel && spencel.length && "string" !== linzell && jaggar(spencel);
          });
        }(arguments), dezere ? caterina = marilena.length : jarem && (e = nithish, moe(jarem));
      }
      ;
      return this;
    }, remove: function () {
      return marilena && chaylyn.each(arguments, function (jamesina, wain) {
        var yoichi;
        while ((yoichi = chaylyn.inArray(wain, marilena, yoichi)) > -1) {
          marilena.splice(yoichi, 1), dezere && (caterina >= yoichi && caterina--, kimblyn >= yoichi && kimblyn--);
        }
      }), this;
    }, has: function (delphine) {
      return delphine ? chaylyn.inArray(delphine, marilena) > -1 : !(!marilena || !marilena.length);
    }, empty: function () {
      return marilena = [], caterina = 0, this;
    }, disable: function () {
      return marilena = marison = jarem = void 0, this;
    }, disabled: function () {
      return !marilena;
    }, lock: function () {
      return marison = void 0, jarem || farhad.disable(), this;
    }, locked: function () {
      return !marison;
    }, fireWith: function (kiylan, kayenne) {
      return !marilena || raaina && !marison || (kayenne = kayenne || [], kayenne = [kiylan, kayenne.slice ? kayenne.slice() : kayenne], dezere ? marison.push(kayenne) : moe(kayenne)), this;
    }, fire: function () {
      return farhad.fireWith(this, arguments), this;
    }, fired: function () {
      return !!raaina;
    }};
    return farhad;
  }, chaylyn.extend({Deferred: function (mayelin) {
    var zyairr = [["resolve", "done", chaylyn.Callbacks("once memory"), "resolved"], ["reject", "fail", chaylyn.Callbacks("once memory"), "rejected"], ["notify", "progress", chaylyn.Callbacks("memory")]], kateryn = "pending", peggyann = {state: function () {
      return kateryn;
    }, always: function () {
      return e.done(arguments).fail(arguments), this;
    }, then: function () {
      var jiron = arguments;
      return chaylyn.Deferred(function (janada) {
        chaylyn.each(zyairr, function (saesha, ragina) {
          var katin = chaylyn.isFunction(jiron[saesha]) && jiron[saesha];
          e[ragina[1]](function () {
            var lamarian = katin && katin.apply(this, arguments);
            lamarian && chaylyn.isFunction(lamarian.promise) ? lamarian.promise().done(janada.resolve).fail(janada.reject).progress(janada.notify) : janada[ragina[0] + "With"](this === peggyann ? janada.promise() : this, katin ? [lamarian] : arguments);
          });
        }), jiron = null;
      }).promise();
    }, promise: function (acsa) {
      return null != acsa ? chaylyn.extend(acsa, peggyann) : peggyann;
    }}, e = {};
    return peggyann.pipe = peggyann.then, chaylyn.each(zyairr, function (tayyab, nyxie) {
      var haoxuan = nyxie[2], allannah = nyxie[3];
      peggyann[nyxie[1]] = haoxuan.add, allannah && haoxuan.add(function () {
        kateryn = allannah;
      }, zyairr[1 ^ tayyab][2].disable, zyairr[2][2].lock), e[nyxie[0]] = function () {
        return e[nyxie[0] + "With"](this === e ? peggyann : this, arguments), this;
      }, e[nyxie[0] + "With"] = haoxuan.fireWith;
    }), peggyann.promise(e), mayelin && mayelin.call(e, e), e;
  }, when: function (ellyce) {
    var maylynn = 0, kathalina = randee.call(arguments), e = kathalina.length, shanail = 1 !== e || ellyce && chaylyn.isFunction(ellyce.promise) ? e : 0, raymunda = 1 === shanail ? ellyce : chaylyn.Deferred(), norlan = function (malahki, mathieu, waris) {
      return function (e) {
        mathieu[malahki] = this, waris[malahki] = arguments.length > 1 ? randee.call(arguments) : e, waris === alveretta ? raymunda.notifyWith(mathieu, waris) : --shanail || raymunda.resolveWith(mathieu, waris);
      };
    }, alveretta, dezaria, jarrek;
    if (e > 1) {
      for (alveretta = new Array(e), dezaria = new Array(e), jarrek = new Array(e); e > maylynn; maylynn++) {
        kathalina[maylynn] && chaylyn.isFunction(kathalina[maylynn].promise) ? kathalina[maylynn].promise().done(norlan(maylynn, jarrek, kathalina)).fail(raymunda.reject).progress(norlan(maylynn, dezaria, alveretta)) : --shanail;
      }
    }
    ;
    return shanail || raymunda.resolveWith(jarrek, kathalina), raymunda.promise();
  }});
  var birgitta;
  chaylyn.fn.ready = function (hyung) {
    return chaylyn.ready.promise().done(hyung), this;
  }, chaylyn.extend({isReady: false, readyWait: 1, holdReady: function (aidann) {
    aidann ? chaylyn.readyWait++ : chaylyn.ready(true);
  }, ready: function (havi) {
    (havi === true ? --chaylyn.readyWait : chaylyn.isReady) || (chaylyn.isReady = true, havi !== true && --chaylyn.readyWait > 0 || (birgitta.resolveWith(zosia, [chaylyn]), chaylyn.fn.triggerHandler && (chaylyn(zosia).triggerHandler("ready"), chaylyn(zosia).off("ready"))));
  }});
  function marcetta() {
    zosia.removeEventListener("DOMContentLoaded", marcetta, false), virla.removeEventListener("load", marcetta, false), chaylyn.ready();
  }
  chaylyn.ready.promise = function (kimone) {
    return birgitta || (birgitta = chaylyn.Deferred(), "complete" === zosia.readyState ? setTimeout(chaylyn.ready) : (zosia.addEventListener("DOMContentLoaded", marcetta, false), virla.addEventListener("load", marcetta, false))), birgitta.promise(kimone);
  }, chaylyn.ready.promise();
  var kaleel = chaylyn.access = function (macle, quentavia, janiia, dareece, e, nareen, ahmid) {
    var keyunna = 0, madis = macle.length, dorrance = null == janiia;
    if ("object" === chaylyn.type(janiia)) {
      e = true;
      for (keyunna in janiia) {
        chaylyn.access(macle, quentavia, keyunna, janiia[keyunna], true, nareen, ahmid);
      }
    } else {
      if (void 0 !== dareece && (e = true, chaylyn.isFunction(dareece) || (ahmid = true), dorrance && (ahmid ? (quentavia.call(macle, dareece), quentavia = null) : (dorrance = quentavia, quentavia = function (chirag, marthenia, oluwayemisi) {
        return dorrance.call(chaylyn(chirag), oluwayemisi);
      })), quentavia)) {
        for (; madis > keyunna; keyunna++) {
          quentavia(macle[keyunna], janiia, ahmid ? dareece : dareece.call(macle[keyunna], keyunna, quentavia(macle[keyunna], janiia)));
        }
      }
    }
    ;
    return e ? macle : dorrance ? quentavia.call(macle) : madis ? quentavia(macle[0], janiia) : nareen;
  };
  chaylyn.acceptData = function (celine) {
    return 1 === celine.nodeType || 9 === celine.nodeType || !+celine.nodeType;
  };
  function maryla() {
    Object.defineProperty(this.cache = {}, 0, {get: function () {
      return {};
    }}), this.expando = chaylyn.expando + Math.random();
  }
  maryla.uid = 1, maryla.accepts = chaylyn.acceptData, maryla.prototype = {key: function (dee) {
    if (!maryla.accepts(dee)) {
      return 0;
    }
    ;
    var horold = {}, amiyas = dee[this.expando];
    if (!amiyas) {
      amiyas = maryla.uid++;
      try {
        horold[this.expando] = {value: amiyas}, Object.defineProperties(dee, horold);
      } catch (vinny) {
        horold[this.expando] = amiyas, chaylyn.extend(dee, horold);
      }
    }
    ;
    return this.cache[amiyas] || (this.cache[amiyas] = {}), amiyas;
  }, set: function (chinmayi, dalena, nuran) {
    var bentlea, e = this.key(chinmayi), tyreec = this.cache[e];
    if ("string" == typeof dalena) {
      tyreec[dalena] = nuran;
    } else {
      if (chaylyn.isEmptyObject(tyreec)) {
        chaylyn.extend(this.cache[e], dalena);
      } else {
        for (bentlea in dalena) {
          tyreec[bentlea] = dalena[bentlea];
        }
      }
    }
    ;
    return tyreec;
  }, get: function (maddilyn, jamani) {
    var manuell = this.cache[this.key(maddilyn)];
    return void 0 === jamani ? manuell : manuell[jamani];
  }, access: function (mykola, marcio, kayella) {
    var champion;
    return void 0 === marcio || marcio && "string" == typeof marcio && void 0 === kayella ? (champion = this.get(mykola, marcio), void 0 !== champion ? champion : this.get(mykola, chaylyn.camelCase(marcio))) : (this.set(mykola, marcio, kayella), void 0 !== kayella ? kayella : marcio);
  }, remove: function (kateri, damyra) {
    var randyl, phillina, e, wydia = this.key(kateri), quamya = this.cache[wydia];
    if (void 0 === damyra) {
      this.cache[wydia] = {};
    } else {
      chaylyn.isArray(damyra) ? phillina = damyra.concat(damyra.map(chaylyn.camelCase)) : (e = chaylyn.camelCase(damyra), damyra in quamya ? phillina = [damyra, e] : (phillina = e, phillina = phillina in quamya ? [phillina] : phillina.match(kwyn) || [])), randyl = phillina.length;
      while (randyl--) {
        delete quamya[phillina[randyl]];
      }
    }
  }, hasData: function (jessimae) {
    return !chaylyn.isEmptyObject(this.cache[jessimae[this.expando]] || {});
  }, discard: function (irl) {
    irl[this.expando] && delete this.cache[irl[this.expando]];
  }};
  var mieke = new maryla, shamonia = new maryla, daxter = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, wynonia = /([A-Z])/g;
  function lanisa(algerd, caffie, towanna) {
    var becca;
    if (void 0 === towanna && 1 === algerd.nodeType) {
      if (becca = "data-" + caffie.replace(wynonia, "-$1").toLowerCase(), towanna = algerd.getAttribute(becca), "string" == typeof towanna) {
        try {
          towanna = "true" === towanna ? true : "false" === towanna ? false : "null" === towanna ? null : +towanna + "" === towanna ? +towanna : daxter.test(towanna) ? chaylyn.parseJSON(towanna) : towanna;
        } catch (e) {}
        ;
        shamonia.set(algerd, caffie, towanna);
      } else {
        towanna = void 0;
      }
    }
    ;
    return towanna;
  }
  chaylyn.extend({hasData: function (greighson) {
    return shamonia.hasData(greighson) || mieke.hasData(greighson);
  }, data: function (detrevion, jaray, abdikarim) {
    return shamonia.access(detrevion, jaray, abdikarim);
  }, removeData: function (maciej, tajae) {
    shamonia.remove(maciej, tajae);
  }, _data: function (tray, edwardjames, baudilio) {
    return mieke.access(tray, edwardjames, baudilio);
  }, _removeData: function (dories, lachan) {
    mieke.remove(dories, lachan);
  }}), chaylyn.fn.extend({data: function (theresea, zing) {
    var michel, briton, e, kaeron = this[0], jesie = kaeron && kaeron.attributes;
    if (void 0 === theresea) {
      if (this.length && (e = shamonia.get(kaeron), 1 === kaeron.nodeType && !mieke.get(kaeron, "hasDataAttrs"))) {
        michel = jesie.length;
        while (michel--) {
          jesie[michel] && (briton = jesie[michel].name, 0 === briton.indexOf("data-") && (briton = chaylyn.camelCase(briton.slice(5)), lanisa(kaeron, briton, e[briton])));
        }
        ;
        mieke.set(kaeron, "hasDataAttrs", true);
      }
      ;
      return e;
    }
    ;
    return "object" == typeof theresea ? this.each(function () {
      shamonia.set(this, theresea);
    }) : kaleel(this, function (alfard) {
      var nathanual, venus = chaylyn.camelCase(theresea);
      if (kaeron && void 0 === alfard) {
        if (nathanual = shamonia.get(kaeron, theresea), void 0 !== nathanual) {
          return nathanual;
        }
        ;
        if (nathanual = shamonia.get(kaeron, venus), void 0 !== nathanual) {
          return nathanual;
        }
        ;
        if (nathanual = lanisa(kaeron, venus, void 0), void 0 !== nathanual) {
          return nathanual;
        }
      } else {
        this.each(function () {
          var ajsha = shamonia.get(this, venus);
          shamonia.set(this, venus, alfard), -1 !== theresea.indexOf("-") && void 0 !== ajsha && shamonia.set(this, theresea, alfard);
        });
      }
    }, null, zing, arguments.length > 1, null, true);
  }, removeData: function (patrizio) {
    return this.each(function () {
      shamonia.remove(this, patrizio);
    });
  }}), chaylyn.extend({queue: function (keshandra, garvit, kelise) {
    var jaklyn;
    return keshandra ? (garvit = (garvit || "fx") + "queue", jaklyn = mieke.get(keshandra, garvit), kelise && (!jaklyn || chaylyn.isArray(kelise) ? jaklyn = mieke.access(keshandra, garvit, chaylyn.makeArray(kelise)) : jaklyn.push(kelise)), jaklyn || []) : void 0;
  }, dequeue: function (maro, armaun) {
    armaun = armaun || "fx";
    var aketzali = chaylyn.queue(maro, armaun), willibaldo = aketzali.length, e = aketzali.shift(), tenyce = chaylyn._queueHooks(maro, armaun), antoniyo = function () {
      chaylyn.dequeue(maro, armaun);
    };
    "inprogress" === e && (e = aketzali.shift(), willibaldo--), e && ("fx" === armaun && aketzali.unshift("inprogress"), delete tenyce.stop, e.call(maro, antoniyo, tenyce)), !willibaldo && tenyce && tenyce.empty.fire();
  }, _queueHooks: function (rayshun, timberland) {
    var kellyn = timberland + "queueHooks";
    return mieke.get(rayshun, kellyn) || mieke.access(rayshun, kellyn, {empty: chaylyn.Callbacks("once memory").add(function () {
      mieke.remove(rayshun, [timberland + "queue", kellyn]);
    })});
  }}), chaylyn.fn.extend({queue: function (sady, wahaj) {
    var mayaar = 2;
    return "string" != typeof sady && (wahaj = sady, sady = "fx", mayaar--), arguments.length < mayaar ? chaylyn.queue(this[0], sady) : void 0 === wahaj ? this : this.each(function () {
      var teddi = chaylyn.queue(this, sady, wahaj);
      chaylyn._queueHooks(this, sady), "fx" === sady && "inprogress" !== teddi[0] && chaylyn.dequeue(this, sady);
    });
  }, dequeue: function (ziyanah) {
    return this.each(function () {
      chaylyn.dequeue(this, ziyanah);
    });
  }, clearQueue: function (quazar) {
    return this.queue(quazar || "fx", []);
  }, promise: function (ryerson, jazminn) {
    var ladijah, garan = 1, e = chaylyn.Deferred(), rashidah = this, chrysanthe = this.length, daija = function () {
      --garan || e.resolveWith(rashidah, [rashidah]);
    };
    "string" != typeof ryerson && (jazminn = ryerson, ryerson = void 0), ryerson = ryerson || "fx";
    while (chrysanthe--) {
      ladijah = mieke.get(rashidah[chrysanthe], ryerson + "queueHooks"), ladijah && ladijah.empty && (garan++, ladijah.empty.add(daija));
    }
    ;
    return daija(), e.promise(jazminn);
  }});
  var latoye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, nimue = ["Top", "Right", "Bottom", "Left"], amarianna = /^(?:checkbox|radio)$/i;
  !function () {
    var laking = zosia.createDocumentFragment(), runda = laking.appendChild(zosia.createElement("div")), jaquana = zosia.createElement("input");
    jaquana.setAttribute("type", "radio"), jaquana.setAttribute("checked", "checked"), jaquana.setAttribute("name", "t"), runda.appendChild(jaquana), jahnise.checkClone = runda.cloneNode(true).cloneNode(true).lastChild.checked, runda.innerHTML = "<textarea>x</textarea>", jahnise.noCloneChecked = !!runda.cloneNode(true).lastChild.defaultValue;
  }();
  var shawntavia = "undefined";
  jahnise.focusinBubbles = "onfocusin" in virla;
  var ashantii = /^key/, michieal = /^(?:mouse|pointer|contextmenu)|click/, aelani = /^(?:focusinfocus|focusoutblur)$/, medardo = /^([^.]*)(?:\.(.+)|)$/;
  function tatina() {
    try {
      return zosia.activeElement;
    } catch (anden) {}
  }
  chaylyn.event = {global: {}, add: function (maketta, teige, ramez, zaydian, e) {
    var kemareon, waldine, bezalel, samarria, sheren, lashanique, alianie, corbynn, jeree, markysha, milesha, delon = mieke.get(maketta);
    if (delon) {
      ramez.handler && (kemareon = ramez, ramez = kemareon.handler, e = kemareon.selector), ramez.guid || (ramez.guid = chaylyn.guid++), (samarria = delon.events) || (samarria = delon.events = {}), (waldine = delon.handle) || (waldine = delon.handle = function (edwrd) {
        return typeof chaylyn !== shawntavia && chaylyn.event.triggered !== edwrd.type ? chaylyn.event.dispatch.apply(maketta, arguments) : void 0;
      }), teige = (teige || "").match(kwyn) || [""], sheren = teige.length;
      while (sheren--) {
        bezalel = medardo.exec(teige[sheren]) || [], jeree = milesha = bezalel[1], markysha = (bezalel[2] || "").split(".").sort(), jeree && (alianie = chaylyn.event.special[jeree] || {}, jeree = (e ? alianie.delegateType : alianie.bindType) || jeree, alianie = chaylyn.event.special[jeree] || {}, lashanique = chaylyn.extend({type: jeree, origType: milesha, data: zaydian, handler: ramez, guid: ramez.guid, selector: e, needsContext: e && chaylyn.expr.match.needsContext.test(e), namespace: markysha.join(".")}, kemareon), (corbynn = samarria[jeree]) || (corbynn = samarria[jeree] = [], corbynn.delegateCount = 0, alianie.setup && alianie.setup.call(maketta, zaydian, markysha, waldine) !== false || maketta.addEventListener && maketta.addEventListener(jeree, waldine, false)), alianie.add && (alianie.add.call(maketta, lashanique), lashanique.handler.guid || (lashanique.handler.guid = ramez.guid)), e ? corbynn.splice(corbynn.delegateCount++, 0, lashanique) : corbynn.push(lashanique), chaylyn.event.global[jeree] = true);
      }
    }
  }, remove: function (yuvonka, zephyrus, lacelynn, nafeesah, e) {
    var jaylynn, danyelle, rondee, constanc, aaiden, vitaly, kudus, endia, mete, ethanjay, paulinda, corman = mieke.hasData(yuvonka) && mieke.get(yuvonka);
    if (corman && (constanc = corman.events)) {
      zephyrus = (zephyrus || "").match(kwyn) || [""], aaiden = zephyrus.length;
      while (aaiden--) {
        if (rondee = medardo.exec(zephyrus[aaiden]) || [], mete = paulinda = rondee[1], ethanjay = (rondee[2] || "").split(".").sort(), mete) {
          kudus = chaylyn.event.special[mete] || {}, mete = (nafeesah ? kudus.delegateType : kudus.bindType) || mete, endia = constanc[mete] || [], rondee = rondee[2] && new RegExp("(^|\\.)" + ethanjay.join("\\.(?:.*\\.|)") + "(\\.|$)"), danyelle = jaylynn = endia.length;
          while (jaylynn--) {
            vitaly = endia[jaylynn], !e && paulinda !== vitaly.origType || lacelynn && lacelynn.guid !== vitaly.guid || rondee && !rondee.test(vitaly.namespace) || nafeesah && nafeesah !== vitaly.selector && ("**" !== nafeesah || !vitaly.selector) || (endia.splice(jaylynn, 1), vitaly.selector && endia.delegateCount--, kudus.remove && kudus.remove.call(yuvonka, vitaly));
          }
          ;
          danyelle && !endia.length && (kudus.teardown && kudus.teardown.call(yuvonka, ethanjay, corman.handle) !== false || chaylyn.removeEvent(yuvonka, mete, corman.handle), delete constanc[mete]);
        } else {
          for (mete in constanc) {
            chaylyn.event.remove(yuvonka, mete + zephyrus[aaiden], lacelynn, nafeesah, true);
          }
        }
      }
      ;
      chaylyn.isEmptyObject(constanc) && (delete corman.handle, mieke.remove(yuvonka, "events"));
    }
  }, trigger: function (ula, marial, kazaria, e) {
    var kerrilee, taeshia, jacoblee, jais, mannon, ayotunde, moreno, darlyn = [kazaria || zosia], carven = denyell.call(ula, "type") ? ula.type : ula, cyndal = denyell.call(ula, "namespace") ? ula.namespace.split(".") : [];
    if (taeshia = jacoblee = kazaria = kazaria || zosia, 3 !== kazaria.nodeType && 8 !== kazaria.nodeType && !aelani.test(carven + chaylyn.event.triggered) && (carven.indexOf(".") >= 0 && (cyndal = carven.split("."), carven = cyndal.shift(), cyndal.sort()), mannon = carven.indexOf(":") < 0 && "on" + carven, ula = ula[chaylyn.expando] ? ula : new chaylyn.Event(carven, "object" == typeof ula && ula), ula.isTrigger = e ? 2 : 3, ula.namespace = cyndal.join("."), ula.namespace_re = ula.namespace ? new RegExp("(^|\\.)" + cyndal.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, ula.result = void 0, ula.target || (ula.target = kazaria), marial = null == marial ? [ula] : chaylyn.makeArray(marial, [ula]), moreno = chaylyn.event.special[carven] || {}, e || !moreno.trigger || moreno.trigger.apply(kazaria, marial) !== false)) {
      if (!e && !moreno.noBubble && !chaylyn.isWindow(kazaria)) {
        for (jais = moreno.delegateType || carven, aelani.test(jais + carven) || (taeshia = taeshia.parentNode); taeshia; taeshia = taeshia.parentNode) {
          darlyn.push(taeshia), jacoblee = taeshia;
        }
        ;
        jacoblee === (kazaria.ownerDocument || zosia) && darlyn.push(jacoblee.defaultView || jacoblee.parentWindow || virla);
      }
      ;
      kerrilee = 0;
      while ((taeshia = darlyn[kerrilee++]) && !ula.isPropagationStopped()) {
        ula.type = kerrilee > 1 ? jais : moreno.bindType || carven, ayotunde = (mieke.get(taeshia, "events") || {})[ula.type] && mieke.get(taeshia, "handle"), ayotunde && ayotunde.apply(taeshia, marial), ayotunde = mannon && taeshia[mannon], ayotunde && ayotunde.apply && chaylyn.acceptData(taeshia) && (ula.result = ayotunde.apply(taeshia, marial), ula.result === false && ula.preventDefault());
      }
      ;
      return ula.type = carven, e || ula.isDefaultPrevented() || moreno._default && moreno._default.apply(darlyn.pop(), marial) !== false || !chaylyn.acceptData(kazaria) || mannon && chaylyn.isFunction(kazaria[carven]) && !chaylyn.isWindow(kazaria) && (jacoblee = kazaria[mannon], jacoblee && (kazaria[mannon] = null), chaylyn.event.triggered = carven, kazaria[carven](), chaylyn.event.triggered = void 0, jacoblee && (kazaria[mannon] = jacoblee)), ula.result;
    }
  }, dispatch: function (roann) {
    roann = chaylyn.event.fix(roann);
    var jerritt, ruxin, e, afraa, elice, darlow = [], anquan = randee.call(arguments), laeuna = (mieke.get(this, "events") || {})[roann.type] || [], jameia = chaylyn.event.special[roann.type] || {};
    if (anquan[0] = roann, roann.delegateTarget = this, !jameia.preDispatch || jameia.preDispatch.call(this, roann) !== false) {
      darlow = chaylyn.event.handlers.call(this, roann, laeuna), jerritt = 0;
      while ((afraa = darlow[jerritt++]) && !roann.isPropagationStopped()) {
        roann.currentTarget = afraa.elem, ruxin = 0;
        while ((elice = afraa.handlers[ruxin++]) && !roann.isImmediatePropagationStopped()) {
          (!roann.namespace_re || roann.namespace_re.test(elice.namespace)) && (roann.handleObj = elice, roann.data = elice.data, e = ((chaylyn.event.special[elice.origType] || {}).handle || elice.handler).apply(afraa.elem, anquan), void 0 !== e && (roann.result = e) === false && (roann.preventDefault(), roann.stopPropagation()));
        }
      }
      ;
      return jameia.postDispatch && jameia.postDispatch.call(this, roann), roann.result;
    }
  }, handlers: function (jamillah, jadwiga) {
    var vashonda, burrill, e, belladonna, jenielle = [], alegna = jadwiga.delegateCount, tyeshawn = jamillah.target;
    if (alegna && tyeshawn.nodeType && (!jamillah.button || "click" !== jamillah.type)) {
      for (; tyeshawn !== this; tyeshawn = tyeshawn.parentNode || this) {
        if (tyeshawn.disabled !== true || "click" !== jamillah.type) {
          for (burrill = [], vashonda = 0; alegna > vashonda; vashonda++) {
            belladonna = jadwiga[vashonda], e = belladonna.selector + " ", void 0 === burrill[e] && (burrill[e] = belladonna.needsContext ? chaylyn(e, this).index(tyeshawn) >= 0 : chaylyn.find(e, this, null, [tyeshawn]).length), burrill[e] && burrill.push(belladonna);
          }
          ;
          burrill.length && jenielle.push({elem: tyeshawn, handlers: burrill});
        }
      }
    }
    ;
    return alegna < jadwiga.length && jenielle.push({elem: this, handlers: jadwiga.slice(alegna)}), jenielle;
  }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (mickiel, rishil) {
    return null == mickiel.which && (mickiel.which = null != rishil.charCode ? rishil.charCode : rishil.keyCode), mickiel;
  }}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (whitelaw, ina) {
    var raianna, porfiria, e, aubriel = ina.button;
    return null == whitelaw.pageX && null != ina.clientX && (raianna = whitelaw.target.ownerDocument || zosia, porfiria = raianna.documentElement, e = raianna.body, whitelaw.pageX = ina.clientX + (porfiria && porfiria.scrollLeft || e && e.scrollLeft || 0) - (porfiria && porfiria.clientLeft || e && e.clientLeft || 0), whitelaw.pageY = ina.clientY + (porfiria && porfiria.scrollTop || e && e.scrollTop || 0) - (porfiria && porfiria.clientTop || e && e.clientTop || 0)), whitelaw.which || void 0 === aubriel || (whitelaw.which = 1 & aubriel ? 1 : 2 & aubriel ? 3 : 4 & aubriel ? 2 : 0), whitelaw;
  }}, fix: function (imanol) {
    if (imanol[chaylyn.expando]) {
      return imanol;
    }
    ;
    var dottie, kemya, taler, e = imanol.type, sevak = imanol, monah = this.fixHooks[e];
    monah || (this.fixHooks[e] = monah = michieal.test(e) ? this.mouseHooks : ashantii.test(e) ? this.keyHooks : {}), taler = monah.props ? this.props.concat(monah.props) : this.props, imanol = new chaylyn.Event(sevak), dottie = taler.length;
    while (dottie--) {
      kemya = taler[dottie], imanol[kemya] = sevak[kemya];
    }
    ;
    return imanol.target || (imanol.target = zosia), 3 === imanol.target.nodeType && (imanol.target = imanol.target.parentNode), monah.filter ? monah.filter(imanol, sevak) : imanol;
  }, special: {load: {noBubble: true}, focus: {trigger: function () {
    return this !== tatina() && this.focus ? (this.focus(), false) : void 0;
  }, delegateType: "focusin"}, blur: {trigger: function () {
    return this === tatina() && this.blur ? (this.blur(), false) : void 0;
  }, delegateType: "focusout"}, click: {trigger: function () {
    return "checkbox" === this.type && this.click && chaylyn.nodeName(this, "input") ? (this.click(), false) : void 0;
  }, _default: function (afnan) {
    return chaylyn.nodeName(afnan.target, "a");
  }}, beforeunload: {postDispatch: function (traver) {
    void 0 !== traver.result && traver.originalEvent && (traver.originalEvent.returnValue = traver.result);
  }}}, simulate: function (kimella, sunja, arrietta, bailor) {
    var e = chaylyn.extend(new chaylyn.Event, arrietta, {type: kimella, isSimulated: true, originalEvent: {}});
    bailor ? chaylyn.event.trigger(e, null, sunja) : chaylyn.event.dispatch.call(sunja, e), e.isDefaultPrevented() && arrietta.preventDefault();
  }}, chaylyn.removeEvent = function (vincil, ville, vernona) {
    vincil.removeEventListener && vincil.removeEventListener(ville, vernona, false);
  }, chaylyn.Event = function (hevin, lagena) {
    return this instanceof chaylyn.Event ? (hevin && hevin.type ? (this.originalEvent = hevin, this.type = hevin.type, this.isDefaultPrevented = hevin.defaultPrevented || void 0 === hevin.defaultPrevented && hevin.returnValue === false ? _0x9787x46 : _0x9787x37) : this.type = hevin, lagena && chaylyn.extend(this, lagena), this.timeStamp = hevin && hevin.timeStamp || chaylyn.now(), void (this[chaylyn.expando] = true)) : new chaylyn.Event(hevin, lagena);
  }, chaylyn.Event.prototype = {isDefaultPrevented: _0x9787x37, isPropagationStopped: _0x9787x37, isImmediatePropagationStopped: _0x9787x37, preventDefault: function () {
    var pippin = this.originalEvent;
    this.isDefaultPrevented = _0x9787x46, pippin && pippin.preventDefault && pippin.preventDefault();
  }, stopPropagation: function () {
    var teppei = this.originalEvent;
    this.isPropagationStopped = _0x9787x46, teppei && teppei.stopPropagation && teppei.stopPropagation();
  }, stopImmediatePropagation: function () {
    var tj = this.originalEvent;
    this.isImmediatePropagationStopped = _0x9787x46, tj && tj.stopImmediatePropagation && tj.stopImmediatePropagation(), this.stopPropagation();
  }}, chaylyn.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (barara, severina) {
    chaylyn.event.special[barara] = {delegateType: severina, bindType: severina, handle: function (caragan) {
      var cellus, maxwill = this, e = caragan.relatedTarget, kabrina = caragan.handleObj;
      return (!e || e !== maxwill && !chaylyn.contains(maxwill, e)) && (caragan.type = kabrina.origType, cellus = kabrina.handler.apply(this, arguments), caragan.type = severina), cellus;
    }};
  }), jahnise.focusinBubbles || chaylyn.each({focus: "focusin", blur: "focusout"}, function (naairah, coyer) {
    var clearnce = function (zamirah) {
      chaylyn.event.simulate(coyer, zamirah.target, chaylyn.event.fix(zamirah), true);
    };
    chaylyn.event.special[coyer] = {setup: function () {
      var kersti = this.ownerDocument || this, e = mieke.access(kersti, coyer);
      e || kersti.addEventListener(naairah, clearnce, true), mieke.access(kersti, coyer, (e || 0) + 1);
    }, teardown: function () {
      var jannett = this.ownerDocument || this, e = mieke.access(jannett, coyer) - 1;
      e ? mieke.access(jannett, coyer, e) : (jannett.removeEventListener(naairah, clearnce, true), mieke.remove(jannett, coyer));
    }};
  }), chaylyn.fn.extend({on: function (dinise, leatta, natilyn, sameya, e) {
    var chaly, alan;
    if ("object" == typeof dinise) {
      "string" != typeof leatta && (natilyn = natilyn || leatta, leatta = void 0);
      for (alan in dinise) {
        this.on(alan, leatta, natilyn, dinise[alan], e);
      }
      ;
      return this;
    }
    ;
    if (null == natilyn && null == sameya ? (sameya = leatta, natilyn = leatta = void 0) : null == sameya && ("string" == typeof leatta ? (sameya = natilyn, natilyn = void 0) : (sameya = natilyn, natilyn = leatta, leatta = void 0)), sameya === false) {
      sameya = _0x9787x37;
    } else {
      if (!sameya) {
        return this;
      }
    }
    ;
    return 1 === e && (chaly = sameya, sameya = function (lorinne) {
      return chaylyn().off(lorinne), chaly.apply(this, arguments);
    }, sameya.guid = chaly.guid || (chaly.guid = chaylyn.guid++)), this.each(function () {
      chaylyn.event.add(this, dinise, sameya, natilyn, leatta);
    });
  }, one: function (valasta, lashonne, irelynne, drinda) {
    return this.on(valasta, lashonne, irelynne, drinda, 1);
  }, off: function (maristella, anayla, ariahna) {
    var rovon, e;
    if (maristella && maristella.preventDefault && maristella.handleObj) {
      return rovon = maristella.handleObj, chaylyn(maristella.delegateTarget).off(rovon.namespace ? rovon.origType + "." + rovon.namespace : rovon.origType, rovon.selector, rovon.handler), this;
    }
    ;
    if ("object" == typeof maristella) {
      for (e in maristella) {
        this.off(e, anayla, maristella[e]);
      }
      ;
      return this;
    }
    ;
    return (anayla === false || "function" == typeof anayla) && (ariahna = anayla, anayla = void 0), ariahna === false && (ariahna = _0x9787x37), this.each(function () {
      chaylyn.event.remove(this, maristella, ariahna, anayla);
    });
  }, trigger: function (tabrisha, pheobie) {
    return this.each(function () {
      chaylyn.event.trigger(tabrisha, pheobie, this);
    });
  }, triggerHandler: function (chavonna, artemus) {
    var govan = this[0];
    return govan ? chaylyn.event.trigger(chavonna, artemus, govan, true) : void 0;
  }});
  var curits = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, torlan = /<([\w:]+)/, jenilca = /<|&#?\w+;/, surrey = /<(?:script|style|link)/i, aidelis = /checked\s*(?:[^=]|=\s*.checked.)/i, jamaree = /^$|\/(?:java|ecma)script/i, maylinn = /^true\/(.*)/, saniyyah = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, alexxandra = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
  alexxandra.optgroup = alexxandra.option, alexxandra.tbody = alexxandra.tfoot = alexxandra.colgroup = alexxandra.caption = alexxandra.thead, alexxandra.th = alexxandra.td;
  function rayanthony(lauritz, jakhy) {
    return chaylyn.nodeName(lauritz, "table") && chaylyn.nodeName(11 !== jakhy.nodeType ? jakhy : jakhy.firstChild, "tr") ? lauritz.getElementsByTagName("tbody")[0] || lauritz.appendChild(lauritz.ownerDocument.createElement("tbody")) : lauritz;
  }
  function zamere(daiden) {
    var vidisha = maylinn.exec(daiden.type);
    return vidisha ? daiden.type = vidisha[1] : daiden.removeAttribute("type"), daiden;
  }
  function kiefer(nechuma, qiyana) {
    for (var jasjeet = 0, lawander = nechuma.length; lawander > jasjeet; jasjeet++) {
      mieke.set(nechuma[jasjeet], "globalEval", !qiyana || mieke.get(qiyana[jasjeet], "globalEval"));
    }
  }
  function allysun(tiquana, luani) {
    var neika, glynes, e, ladonja, trimaine, butch, idabel, marvelous;
    if (1 === luani.nodeType) {
      if (mieke.hasData(tiquana) && (ladonja = mieke.access(tiquana), trimaine = mieke.set(luani, ladonja), marvelous = ladonja.events)) {
        delete trimaine.handle, trimaine.events = {};
        for (e in marvelous) {
          for (neika = 0, glynes = marvelous[e].length; glynes > neika; neika++) {
            chaylyn.event.add(luani, e, marvelous[e][neika]);
          }
        }
      }
      ;
      shamonia.hasData(tiquana) && (butch = shamonia.access(tiquana), idabel = chaylyn.extend({}, butch), shamonia.set(luani, idabel));
    }
  }
  function adaliyah(latony, chastelyn) {
    var jacayden = latony.getElementsByTagName ? latony.getElementsByTagName(chastelyn || "*") : latony.querySelectorAll ? latony.querySelectorAll(chastelyn || "*") : [];
    return void 0 === chastelyn || chastelyn && chaylyn.nodeName(latony, chastelyn) ? chaylyn.merge([latony], jacayden) : jacayden;
  }
  function jaketa(mashanti, micai) {
    var saimi = micai.nodeName.toLowerCase();
    "input" === saimi && amarianna.test(mashanti.type) ? micai.checked = mashanti.checked : ("input" === saimi || "textarea" === saimi) && (micai.defaultValue = mashanti.defaultValue);
  }
  chaylyn.extend({clone: function (timiothy, adelinah, dren) {
    var orman, e, bralynne, christiopher, erixon = timiothy.cloneNode(true), edge = chaylyn.contains(timiothy.ownerDocument, timiothy);
    if (!(jahnise.noCloneChecked || 1 !== timiothy.nodeType && 11 !== timiothy.nodeType || chaylyn.isXMLDoc(timiothy))) {
      for (christiopher = adaliyah(erixon), bralynne = adaliyah(timiothy), orman = 0, e = bralynne.length; e > orman; orman++) {
        jaketa(bralynne[orman], christiopher[orman]);
      }
    }
    ;
    if (adelinah) {
      if (dren) {
        for (bralynne = bralynne || adaliyah(timiothy), christiopher = christiopher || adaliyah(erixon), orman = 0, e = bralynne.length; e > orman; orman++) {
          allysun(bralynne[orman], christiopher[orman]);
        }
      } else {
        allysun(timiothy, erixon);
      }
    }
    ;
    return christiopher = adaliyah(erixon, "script"), christiopher.length > 0 && kiefer(christiopher, !edge && adaliyah(timiothy, "script")), erixon;
  }, buildFragment: function (rehan, jovanah, ceon, hines) {
    for (var e, meral, taneja, samika, tawfeeq, enger, lamika = jovanah.createDocumentFragment(), ermalea = [], cumi = 0, dewarren = rehan.length; dewarren > cumi; cumi++) {
      if (e = rehan[cumi], e || 0 === e) {
        if ("object" === chaylyn.type(e)) {
          chaylyn.merge(ermalea, e.nodeType ? [e] : e);
        } else {
          if (jenilca.test(e)) {
            meral = meral || lamika.appendChild(jovanah.createElement("div")), taneja = (torlan.exec(e) || ["", ""])[1].toLowerCase(), samika = alexxandra[taneja] || alexxandra._default, meral.innerHTML = samika[1] + e.replace(curits, "<$1></$2>") + samika[2], enger = samika[0];
            while (enger--) {
              meral = meral.lastChild;
            }
            ;
            chaylyn.merge(ermalea, meral.childNodes), meral = lamika.firstChild, meral.textContent = "";
          } else {
            ermalea.push(jovanah.createTextNode(e));
          }
        }
      }
    }
    ;
    lamika.textContent = "", cumi = 0;
    while (e = ermalea[cumi++]) {
      if ((!hines || -1 === chaylyn.inArray(e, hines)) && (tawfeeq = chaylyn.contains(e.ownerDocument, e), meral = adaliyah(lamika.appendChild(e), "script"), tawfeeq && kiefer(meral), ceon)) {
        enger = 0;
        while (e = meral[enger++]) {
          jamaree.test(e.type || "") && ceon.push(e);
        }
      }
    }
    ;
    return lamika;
  }, cleanData: function (shandale) {
    for (var aikeem, nyimah, shande, e, chidima = chaylyn.event.special, geanne = 0; void 0 !== (nyimah = shandale[geanne]); geanne++) {
      if (chaylyn.acceptData(nyimah) && (e = nyimah[mieke.expando], e && (aikeem = mieke.cache[e]))) {
        if (aikeem.events) {
          for (shande in aikeem.events) {
            chidima[shande] ? chaylyn.event.remove(nyimah, shande) : chaylyn.removeEvent(nyimah, shande, aikeem.handle);
          }
        }
        ;
        mieke.cache[e] && delete mieke.cache[e];
      }
      ;
      delete shamonia.cache[nyimah[shamonia.expando]];
    }
  }}), chaylyn.fn.extend({text: function (kendyn) {
    return kaleel(this, function (karissma) {
      return void 0 === karissma ? chaylyn.text(this) : this.empty().each(function () {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = karissma);
      });
    }, null, kendyn, arguments.length);
  }, append: function () {
    return this.domManip(arguments, function (cora) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var alexyz = rayanthony(this, cora);
        alexyz.appendChild(cora);
      }
    });
  }, prepend: function () {
    return this.domManip(arguments, function (martino) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var jarren = rayanthony(this, martino);
        jarren.insertBefore(martino, jarren.firstChild);
      }
    });
  }, before: function () {
    return this.domManip(arguments, function (paytton) {
      this.parentNode && this.parentNode.insertBefore(paytton, this);
    });
  }, after: function () {
    return this.domManip(arguments, function (kyeria) {
      this.parentNode && this.parentNode.insertBefore(kyeria, this.nextSibling);
    });
  }, remove: function (ayleah, laurence) {
    for (var taelour, grandin = ayleah ? chaylyn.filter(ayleah, this) : this, e = 0; null != (taelour = grandin[e]); e++) {
      laurence || 1 !== taelour.nodeType || chaylyn.cleanData(adaliyah(taelour)), taelour.parentNode && (laurence && chaylyn.contains(taelour.ownerDocument, taelour) && kiefer(adaliyah(taelour, "script")), taelour.parentNode.removeChild(taelour));
    }
    ;
    return this;
  }, empty: function () {
    for (var gipsy, jeray = 0; null != (gipsy = this[jeray]); jeray++) {
      1 === gipsy.nodeType && (chaylyn.cleanData(adaliyah(gipsy, false)), gipsy.textContent = "");
    }
    ;
    return this;
  }, clone: function (zayia, elpha) {
    return zayia = null == zayia ? false : zayia, elpha = null == elpha ? zayia : elpha, this.map(function () {
      return chaylyn.clone(this, zayia, elpha);
    });
  }, html: function (laquieta) {
    return kaleel(this, function (berg) {
      var kener = this[0] || {}, glorietta = 0, mayim = this.length;
      if (void 0 === berg && 1 === kener.nodeType) {
        return kener.innerHTML;
      }
      ;
      if ("string" == typeof berg && !surrey.test(berg) && !alexxandra[(torlan.exec(berg) || ["", ""])[1].toLowerCase()]) {
        berg = berg.replace(curits, "<$1></$2>");
        try {
          for (; mayim > glorietta; glorietta++) {
            kener = this[glorietta] || {}, 1 === kener.nodeType && (chaylyn.cleanData(adaliyah(kener, false)), kener.innerHTML = berg);
          }
          ;
          kener = 0;
        } catch (e) {}
      }
      ;
      kener && this.empty().append(berg);
    }, null, laquieta, arguments.length);
  }, replaceWith: function () {
    var trinnity = arguments[0];
    return this.domManip(arguments, function (gittle) {
      trinnity = this.parentNode, chaylyn.cleanData(adaliyah(this)), trinnity && trinnity.replaceChild(gittle, this);
    }), trinnity && (trinnity.length || trinnity.nodeType) ? this : this.remove();
  }, detach: function (lenix) {
    return this.remove(lenix, true);
  }, domManip: function (moneca, kajus) {
    moneca = e.apply([], moneca);
    var arleny, daiana, jayneen, amner, jackob, chloejane, vianette = 0, randell = this.length, kaisey = this, nadelyn = randell - 1, isamary = moneca[0], kathyrn = chaylyn.isFunction(isamary);
    if (kathyrn || randell > 1 && "string" == typeof isamary && !jahnise.checkClone && aidelis.test(isamary)) {
      return this.each(function (truddie) {
        var kelley = kaisey.eq(truddie);
        kathyrn && (moneca[0] = isamary.call(this, truddie, kelley.html())), kelley.domManip(moneca, kajus);
      });
    }
    ;
    if (randell && (arleny = chaylyn.buildFragment(moneca, this[0].ownerDocument, false, this), daiana = arleny.firstChild, 1 === arleny.childNodes.length && (arleny = daiana), daiana)) {
      for (jayneen = chaylyn.map(adaliyah(arleny, "script"), _0x9787x50), amner = jayneen.length; randell > vianette; vianette++) {
        jackob = arleny, vianette !== nadelyn && (jackob = chaylyn.clone(jackob, true, true), amner && chaylyn.merge(jayneen, adaliyah(jackob, "script"))), kajus.call(this[vianette], jackob, vianette);
      }
      ;
      if (amner) {
        for (chloejane = jayneen[jayneen.length - 1].ownerDocument, chaylyn.map(jayneen, zamere), vianette = 0; amner > vianette; vianette++) {
          jackob = jayneen[vianette], jamaree.test(jackob.type || "") && !mieke.access(jackob, "globalEval") && chaylyn.contains(chloejane, jackob) && (jackob.src ? chaylyn._evalUrl && chaylyn._evalUrl(jackob.src) : chaylyn.globalEval(jackob.textContent.replace(saniyyah, "")));
        }
      }
    }
    ;
    return this;
  }}), chaylyn.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (shrage, ceilia) {
    chaylyn.fn[shrage] = function (ikeisha) {
      for (var jayvonna, montanah = [], e = chaylyn(ikeisha), brandis = e.length - 1, jaydan = 0; brandis >= jaydan; jaydan++) {
        jayvonna = jaydan === brandis ? this : this.clone(true), chaylyn(e[jaydan])[ceilia](jayvonna), jefrin.apply(montanah, jayvonna.get());
      }
      ;
      return this.pushStack(montanah);
    };
  });
  var kerline, rontavis = {};
  function darreon(deavionne, rostam) {
    var anneelizabeth, e = chaylyn(rostam.createElement(deavionne)).appendTo(rostam.body), marinn = virla.getDefaultComputedStyle && (anneelizabeth = virla.getDefaultComputedStyle(e[0])) ? anneelizabeth.display : chaylyn.css(e[0], "display");
    return e.detach(), marinn;
  }
  function elasia(felipita) {
    var kaylarose = zosia, sametta = rontavis[felipita];
    return sametta || (sametta = darreon(felipita, kaylarose), "none" !== sametta && sametta || (kerline = (kerline || chaylyn("<iframe frameborder='0' width='0' height='0'/>")).appendTo(kaylarose.documentElement), kaylarose = kerline[0].contentDocument, kaylarose.write(), kaylarose.close(), sametta = darreon(felipita, kaylarose), kerline.detach()), rontavis[felipita] = sametta), sametta;
  }
  var anothony = /^margin/, laydon = new RegExp("^(" + latoye + ")(?!px)[a-z%]+$", "i");
  function carrie(pauleth, shenel, quinntin) {
    var wasco, e, mania, gwynivere, ataleigh = pauleth.style;
    return quinntin = quinntin || pauleth.ownerDocument.defaultView.getComputedStyle(pauleth, null), quinntin && (gwynivere = quinntin.getPropertyValue(shenel) || quinntin[shenel]), quinntin && ("" !== gwynivere || chaylyn.contains(pauleth.ownerDocument, pauleth) || (gwynivere = chaylyn.style(pauleth, shenel)), laydon.test(gwynivere) && anothony.test(shenel) && (wasco = ataleigh.width, e = ataleigh.minWidth, mania = ataleigh.maxWidth, ataleigh.minWidth = ataleigh.maxWidth = ataleigh.width = gwynivere, gwynivere = quinntin.width, ataleigh.width = wasco, ataleigh.minWidth = e, ataleigh.maxWidth = mania)), void 0 !== gwynivere ? gwynivere + "" : gwynivere;
  }
  function austynn(inikki, kaitlynne) {
    return {get: function () {
      return inikki() ? void delete this.get : (this.get = kaitlynne).apply(this, arguments);
    }};
  }
  !function () {
    var aadhavan, erlene, ronney = zosia.documentElement, e = zosia.createElement("div"), darelyn = zosia.createElement("div");
    if (darelyn.style) {
      darelyn.style.backgroundClip = "content-box", darelyn.cloneNode(true).style.backgroundClip = "", jahnise.clearCloneStyle = "content-box" === darelyn.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(darelyn);
      function balam() {
        darelyn.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", darelyn.innerHTML = "", ronney.appendChild(e);
        var shaniyah = virla.getComputedStyle(darelyn, null);
        aadhavan = "1%" !== shaniyah.top, erlene = "4px" === shaniyah.width, ronney.removeChild(e);
      }
      virla.getComputedStyle && chaylyn.extend(jahnise, {pixelPosition: function () {
        return balam(), aadhavan;
      }, boxSizingReliable: function () {
        return null == erlene && balam(), erlene;
      }, reliableMarginRight: function () {
        var dorabelle, takasha = darelyn.appendChild(zosia.createElement("div"));
        return takasha.style.cssText = darelyn.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", takasha.style.marginRight = takasha.style.width = "0", darelyn.style.width = "1px", ronney.appendChild(e), dorabelle = !parseFloat(virla.getComputedStyle(takasha, null).marginRight), ronney.removeChild(e), dorabelle;
      }});
    }
  }(), chaylyn.swap = function (dennisse, bonner, antrez, yaileny) {
    var e, breidy, charmin = {};
    for (breidy in bonner) {
      charmin[breidy] = dennisse.style[breidy], dennisse.style[breidy] = bonner[breidy];
    }
    ;
    e = antrez.apply(dennisse, yaileny || []);
    for (breidy in bonner) {
      dennisse.style[breidy] = charmin[breidy];
    }
    ;
    return e;
  };
  var kordae = /^(none|table(?!-c[ea]).+)/, acire = new RegExp("^(" + latoye + ")(.*)$", "i"), reisa = new RegExp("^([+-])=(" + latoye + ")", "i"), latissue = {position: "absolute", visibility: "hidden", display: "block"}, naylan = {letterSpacing: "0", fontWeight: "400"}, zoravar = ["Webkit", "O", "Moz", "ms"];
  function anastasios(zahkir, tanaysha) {
    if (tanaysha in zahkir) {
      return tanaysha;
    }
    ;
    var lurie = tanaysha[0].toUpperCase() + tanaysha.slice(1), amariyae = tanaysha, e = zoravar.length;
    while (e--) {
      if (tanaysha = zoravar[e] + lurie, tanaysha in zahkir) {
        return tanaysha;
      }
    }
    ;
    return amariyae;
  }
  function gwili(talei, neshay, versey) {
    var serbando = acire.exec(neshay);
    return serbando ? Math.max(0, serbando[1] - (versey || 0)) + (serbando[2] || "px") : neshay;
  }
  function tashari(kristalle, baruti, alayssa, chloris, e) {
    for (var laporchia = alayssa === (chloris ? "border" : "content") ? 4 : "width" === baruti ? 1 : 0, kachiside = 0; 4 > laporchia; laporchia += 2) {
      "margin" === alayssa && (kachiside += chaylyn.css(kristalle, alayssa + nimue[laporchia], true, e)), chloris ? ("content" === alayssa && (kachiside -= chaylyn.css(kristalle, "padding" + nimue[laporchia], true, e)), "margin" !== alayssa && (kachiside -= chaylyn.css(kristalle, "border" + nimue[laporchia] + "Width", true, e))) : (kachiside += chaylyn.css(kristalle, "padding" + nimue[laporchia], true, e), "padding" !== alayssa && (kachiside += chaylyn.css(kristalle, "border" + nimue[laporchia] + "Width", true, e)));
    }
    ;
    return kachiside;
  }
  function kenedie(karrissa, joaquim, shatae) {
    var karrine = true, e = "width" === joaquim ? karrissa.offsetWidth : karrissa.offsetHeight, avyanna = karrissa.ownerDocument.defaultView.getComputedStyle(karrissa, null), marcina = "border-box" === chaylyn.css(karrissa, "boxSizing", false, avyanna);
    if (0 >= e || null == e) {
      if (e = carrie(karrissa, joaquim, avyanna), (0 > e || null == e) && (e = karrissa.style[joaquim]), laydon.test(e)) {
        return e;
      }
      ;
      karrine = marcina && (jahnise.boxSizingReliable() || e === karrissa.style[joaquim]), e = parseFloat(e) || 0;
    }
    ;
    return e + tashari(karrissa, joaquim, shatae || (marcina ? "border" : "content"), karrine, avyanna) + "px";
  }
  function tatianah(jahnessa, dual) {
    for (var spessard, ixora, e, lais = [], androniki = 0, laquita = jahnessa.length; laquita > androniki; androniki++) {
      ixora = jahnessa[androniki], ixora.style && (lais[androniki] = mieke.get(ixora, "olddisplay"), spessard = ixora.style.display, dual ? (lais[androniki] || "none" !== spessard || (ixora.style.display = ""), "" === ixora.style.display && (ixora = dual || ixora, "none" === chaylyn.css(ixora, "display") || !chaylyn.contains(ixora.ownerDocument, ixora)) && (lais[androniki] = mieke.access(ixora, "olddisplay", elasia(ixora.nodeName)))) : (e = (ixora = dual || ixora, "none" === chaylyn.css(ixora, "display") || !chaylyn.contains(ixora.ownerDocument, ixora)), "none" === spessard && e || mieke.set(ixora, "olddisplay", e ? spessard : chaylyn.css(ixora, "display"))));
    }
    ;
    for (androniki = 0; laquita > androniki; androniki++) {
      ixora = jahnessa[androniki], ixora.style && (dual && "none" !== ixora.style.display && "" !== ixora.style.display || (ixora.style.display = dual ? lais[androniki] || "" : "none"));
    }
    ;
    return jahnessa;
  }
  chaylyn.extend({cssHooks: {opacity: {get: function (jamiles, bascomb) {
    if (bascomb) {
      var dusti = carrie(jamiles, "opacity");
      return "" === dusti ? "1" : dusti;
    }
  }}}, cssNumber: {columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true}, cssProps: {float: "cssFloat"}, style: function (gustaf, zmarion, nikiesha, sherrica) {
    if (gustaf && 3 !== gustaf.nodeType && 8 !== gustaf.nodeType && gustaf.style) {
      var e, ashlee, laquavion, veah = chaylyn.camelCase(zmarion), katriana = gustaf.style;
      return zmarion = chaylyn.cssProps[veah] || (chaylyn.cssProps[veah] = anastasios(katriana, veah)), laquavion = chaylyn.cssHooks[zmarion] || chaylyn.cssHooks[veah], void 0 === nikiesha ? laquavion && "get" in laquavion && void 0 !== (e = laquavion.get(gustaf, false, sherrica)) ? e : katriana[zmarion] : (ashlee = typeof nikiesha, "string" === ashlee && (e = reisa.exec(nikiesha)) && (nikiesha = (e[1] + 1) * e[2] + parseFloat(chaylyn.css(gustaf, zmarion)), ashlee = "number"), null != nikiesha && nikiesha === nikiesha && ("number" !== ashlee || chaylyn.cssNumber[veah] || (nikiesha += "px"), jahnise.clearCloneStyle || "" !== nikiesha || 0 !== zmarion.indexOf("background") || (katriana[zmarion] = "inherit"), laquavion && "set" in laquavion && void 0 === (nikiesha = laquavion.set(gustaf, nikiesha, sherrica)) || (katriana[zmarion] = nikiesha)), void 0);
    }
  }, css: function (loranza, colan, nabihah, gaya) {
    var e, murielle, oscar, saharsh = chaylyn.camelCase(colan);
    return colan = chaylyn.cssProps[saharsh] || (chaylyn.cssProps[saharsh] = anastasios(loranza.style, saharsh)), oscar = chaylyn.cssHooks[colan] || chaylyn.cssHooks[saharsh], oscar && "get" in oscar && (e = oscar.get(loranza, true, nabihah)), void 0 === e && (e = carrie(loranza, colan, gaya)), "normal" === e && colan in naylan && (e = naylan[colan]), "" === nabihah || nabihah ? (murielle = parseFloat(e), nabihah === true || chaylyn.isNumeric(murielle) ? murielle || 0 : e) : e;
  }}), chaylyn.each(["height", "width"], function (mekesha, taurus) {
    chaylyn.cssHooks[taurus] = {get: function (travan, kelena, marquie) {
      return kelena ? kordae.test(chaylyn.css(travan, "display")) && 0 === travan.offsetWidth ? chaylyn.swap(travan, latissue, function () {
        return kenedie(travan, taurus, marquie);
      }) : kenedie(travan, taurus, marquie) : void 0;
    }, set: function (prisha, jomaira, abell) {
      var e = abell && prisha.ownerDocument.defaultView.getComputedStyle(prisha, null);
      return gwili(prisha, jomaira, abell ? tashari(prisha, taurus, abell, "border-box" === chaylyn.css(prisha, "boxSizing", false, e), e) : 0);
    }};
  }), chaylyn.cssHooks.marginRight = austynn(jahnise.reliableMarginRight, function (chachi, hampton) {
    return hampton ? chaylyn.swap(chachi, {display: "inline-block"}, carrie, [chachi, "marginRight"]) : void 0;
  }), chaylyn.each({margin: "", padding: "", border: "Width"}, function (macen, ash) {
    chaylyn.cssHooks[macen + ash] = {expand: function (matthis) {
      for (var morad = 0, e = {}, elaynah = "string" == typeof matthis ? matthis.split(" ") : [matthis]; 4 > morad; morad++) {
        e[macen + nimue[morad] + ash] = elaynah[morad] || elaynah[morad - 2] || elaynah[0];
      }
      ;
      return e;
    }}, anothony.test(macen) || (chaylyn.cssHooks[macen + ash].set = gwili);
  }), chaylyn.fn.extend({css: function (wyllow, sirat) {
    return kaleel(this, function (chaston, havard, therea) {
      var abdulhalim, e, laikin = {}, jaxxin = 0;
      if (chaylyn.isArray(havard)) {
        for (abdulhalim = chaston.ownerDocument.defaultView.getComputedStyle(chaston, null), e = havard.length; e > jaxxin; jaxxin++) {
          laikin[havard[jaxxin]] = chaylyn.css(chaston, havard[jaxxin], false, abdulhalim);
        }
        ;
        return laikin;
      }
      ;
      return void 0 !== therea ? chaylyn.style(chaston, havard, therea) : chaylyn.css(chaston, havard);
    }, wyllow, sirat, arguments.length > 1);
  }, show: function () {
    return tatianah(this, true);
  }, hide: function () {
    return tatianah(this);
  }, toggle: function (zayonna) {
    return "boolean" == typeof zayonna ? zayonna ? this.show() : this.hide() : this.each(function () {
      (this = adger || this, "none" === chaylyn.css(this, "display") || !chaylyn.contains(this.ownerDocument, this)) ? chaylyn(this).show() : chaylyn(this).hide();
    });
  }});
  function tully(everlee, chester, naaya, tanzie, e) {
    return new tully.prototype.init(everlee, chester, naaya, tanzie, e);
  }
  chaylyn.Tween = tully, tully.prototype = {constructor: tully, init: function (bojan, jeneanne, mitzy, eudine, e, aracelly) {
    this.elem = bojan, this.prop = mitzy, this.easing = e || "swing", this.options = jeneanne, this.start = this.now = this.cur(), this.end = eudine, this.unit = aracelly || (chaylyn.cssNumber[mitzy] ? "" : "px");
  }, cur: function () {
    var lyliana = tully.propHooks[this.prop];
    return lyliana && lyliana.get ? lyliana.get(this) : tully.propHooks._default.get(this);
  }, run: function (vanesse) {
    var armina, almeter = tully.propHooks[this.prop];
    return this.pos = armina = this.options.duration ? chaylyn.easing[this.easing](vanesse, this.options.duration * vanesse, 0, 1, this.options.duration) : vanesse, this.now = (this.end - this.start) * armina + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), almeter && almeter.set ? almeter.set(this) : tully.propHooks._default.set(this), this;
  }}, tully.prototype.init.prototype = tully.prototype, tully.propHooks = {_default: {get: function (alaris) {
    var horris;
    return null == alaris.elem[alaris.prop] || alaris.elem.style && null != alaris.elem.style[alaris.prop] ? (horris = chaylyn.css(alaris.elem, alaris.prop, ""), horris && "auto" !== horris ? horris : 0) : alaris.elem[alaris.prop];
  }, set: function (petina) {
    chaylyn.fx.step[petina.prop] ? chaylyn.fx.step[petina.prop](petina) : petina.elem.style && (null != petina.elem.style[chaylyn.cssProps[petina.prop]] || chaylyn.cssHooks[petina.prop]) ? chaylyn.style(petina.elem, petina.prop, petina.now + petina.unit) : petina.elem[petina.prop] = petina.now;
  }}}, tully.propHooks.scrollTop = tully.propHooks.scrollLeft = {set: function (yaira) {
    yaira.elem.nodeType && yaira.elem.parentNode && (yaira.elem[yaira.prop] = yaira.now);
  }}, chaylyn.easing = {linear: function (acacia) {
    return acacia;
  }, swing: function (nashla) {
    return 0.5 - Math.cos(nashla * Math.PI) / 2;
  }}, chaylyn.fx = tully.prototype.init, chaylyn.fx.step = {};
  var clarette, josina, reesha = /^(?:toggle|show|hide)$/, simara = new RegExp("^(?:([+-])=|)(" + latoye + ")([a-z%]*)$", "i"), yoanna = /queueHooks$/, queency = [sayon], redick = {"*": [function (vontavious, lailamarie) {
    var winton = this.createTween(vontavious, lailamarie), palmina = winton.cur(), e = simara.exec(lailamarie), kerie = e && e[3] || (chaylyn.cssNumber[vontavious] ? "" : "px"), sanniyah = (chaylyn.cssNumber[vontavious] || "px" !== kerie && +palmina) && simara.exec(chaylyn.css(winton.elem, vontavious)), tatsu = 1, gratia = 20;
    if (sanniyah && sanniyah[3] !== kerie) {
      kerie = kerie || sanniyah[3], e = e || [], sanniyah = +palmina || 1;
      do {
        tatsu = tatsu || ".5", sanniyah /= tatsu, chaylyn.style(winton.elem, vontavious, sanniyah + kerie);
      } while (tatsu !== (tatsu = winton.cur() / palmina) && 1 !== tatsu && --gratia);
    }
    ;
    return e && (sanniyah = winton.start = +sanniyah || +palmina || 0, winton.unit = kerie, winton.end = e[1] ? sanniyah + (e[1] + 1) * e[2] : +e[2]), winton;
  }]};
  function cherrise() {
    return setTimeout(function () {
      clarette = void 0;
    }), clarette = chaylyn.now();
  }
  function yamen(jovi, clint) {
    var mozetta, policarpio = 0, e = {height: jovi};
    for (clint = clint ? 1 : 0; 4 > policarpio; policarpio += 2 - clint) {
      mozetta = nimue[policarpio], e["margin" + mozetta] = e["padding" + mozetta] = jovi;
    }
    ;
    return clint && (e.opacity = e.width = jovi), e;
  }
  function ehlani(shyaira, izela, filsan) {
    for (var anamika, e = (redick[izela] || []).concat(redick["*"]), letesha = 0, avaya = e.length; avaya > letesha; letesha++) {
      if (anamika = e[letesha].call(filsan, izela, shyaira)) {
        return anamika;
      }
    }
  }
  function sayon(rushil, kayloni, harfateh) {
    var jaydalyn, e, shigeo, karlton, monchelle, nang, tilla, denicka, treyvonte = this, darweshi = {}, yanelys = rushil.style, eusebio = rushil.nodeType && (rushil = kayloni || rushil, "none" === chaylyn.css(rushil, "display") || !chaylyn.contains(rushil.ownerDocument, rushil)), madeson = mieke.get(rushil, "fxshow");
    harfateh.queue || (monchelle = chaylyn._queueHooks(rushil, "fx"), null == monchelle.unqueued && (monchelle.unqueued = 0, nang = monchelle.empty.fire, monchelle.empty.fire = function () {
      monchelle.unqueued || nang();
    }), monchelle.unqueued++, treyvonte.always(function () {
      treyvonte.always(function () {
        monchelle.unqueued--, chaylyn.queue(rushil, "fx").length || monchelle.empty.fire();
      });
    })), 1 === rushil.nodeType && ("height" in kayloni || "width" in kayloni) && (harfateh.overflow = [yanelys.overflow, yanelys.overflowX, yanelys.overflowY], tilla = chaylyn.css(rushil, "display"), denicka = "none" === tilla ? mieke.get(rushil, "olddisplay") || elasia(rushil.nodeName) : tilla, "inline" === denicka && "none" === chaylyn.css(rushil, "float") && (yanelys.display = "inline-block")), harfateh.overflow && (yanelys.overflow = "hidden", treyvonte.always(function () {
      yanelys.overflow = harfateh.overflow[0], yanelys.overflowX = harfateh.overflow[1], yanelys.overflowY = harfateh.overflow[2];
    }));
    for (jaydalyn in kayloni) {
      if (e = kayloni[jaydalyn], reesha.exec(e)) {
        if (delete kayloni[jaydalyn], shigeo = shigeo || "toggle" === e, e === (eusebio ? "hide" : "show")) {
          if ("show" !== e || !madeson || void 0 === madeson[jaydalyn]) {
            continue;
          }
          ;
          eusebio = true;
        }
        ;
        darweshi[jaydalyn] = madeson && madeson[jaydalyn] || chaylyn.style(rushil, jaydalyn);
      } else {
        tilla = void 0;
      }
    }
    ;
    if (chaylyn.isEmptyObject(darweshi)) {
      "inline" === ("none" === tilla ? elasia(rushil.nodeName) : tilla) && (yanelys.display = tilla);
    } else {
      madeson ? "hidden" in madeson && (eusebio = madeson.hidden) : madeson = mieke.access(rushil, "fxshow", {}), shigeo && (madeson.hidden = !eusebio), eusebio ? chaylyn(rushil).show() : treyvonte.done(function () {
        chaylyn(rushil).hide();
      }), treyvonte.done(function () {
        var sherisa;
        mieke.remove(rushil, "fxshow");
        for (sherisa in darweshi) {
          chaylyn.style(rushil, sherisa, darweshi[sherisa]);
        }
      });
      for (jaydalyn in darweshi) {
        karlton = ehlani(eusebio ? madeson[jaydalyn] : 0, jaydalyn, treyvonte), jaydalyn in madeson || (madeson[jaydalyn] = karlton.start, eusebio && (karlton.end = karlton.start, karlton.start = "width" === jaydalyn || "height" === jaydalyn ? 1 : 0));
      }
    }
  }
  function jamaal(miryan, morgandy) {
    var antonello, darlia, e, hopemarie, tiffani;
    for (antonello in miryan) {
      if (darlia = chaylyn.camelCase(antonello), e = morgandy[darlia], hopemarie = miryan[antonello], chaylyn.isArray(hopemarie) && (e = hopemarie[1], hopemarie = miryan[antonello] = hopemarie[0]), antonello !== darlia && (miryan[darlia] = hopemarie, delete miryan[antonello]), tiffani = chaylyn.cssHooks[darlia], tiffani && "expand" in tiffani) {
        hopemarie = tiffani.expand(hopemarie), delete miryan[darlia];
        for (antonello in hopemarie) {
          antonello in miryan || (miryan[antonello] = hopemarie[antonello], morgandy[antonello] = e);
        }
      } else {
        morgandy[darlia] = e;
      }
    }
  }
  function tirra(esquiel, xochitl, ladale) {
    var dquarius, e, taminka = 0, ita = queency.length, carolle = chaylyn.Deferred().always(function () {
      delete makonnen.elem;
    }), makonnen = function () {
      if (e) {
        return false;
      }
      ;
      for (var olakunle = clarette || cherrise(), eathen = Math.max(0, zyiere.startTime + zyiere.duration - olakunle), shalim = eathen / zyiere.duration || 0, jieun = 1 - shalim, xzavyer = 0, tio = zyiere.tweens.length; tio > xzavyer; xzavyer++) {
        zyiere.tweens[xzavyer].run(jieun);
      }
      ;
      return carolle.notifyWith(esquiel, [zyiere, jieun, eathen]), 1 > jieun && tio ? eathen : (carolle.resolveWith(esquiel, [zyiere]), false);
    }, zyiere = carolle.promise({elem: esquiel, props: chaylyn.extend({}, xochitl), opts: chaylyn.extend(true, {specialEasing: {}}, ladale), originalProperties: xochitl, originalOptions: ladale, startTime: clarette || cherrise(), duration: ladale.duration, tweens: [], createTween: function (keyaan, makailynn) {
      var twania = chaylyn.Tween(esquiel, zyiere.opts, keyaan, makailynn, zyiere.opts.specialEasing[keyaan] || zyiere.opts.easing);
      return zyiere.tweens.push(twania), twania;
    }, stop: function (shurhonda) {
      var canio = 0, lalenia = shurhonda ? zyiere.tweens.length : 0;
      if (e) {
        return this;
      }
      ;
      for (e = true; lalenia > canio; canio++) {
        zyiere.tweens[canio].run(1);
      }
      ;
      return shurhonda ? carolle.resolveWith(esquiel, [zyiere, shurhonda]) : carolle.rejectWith(esquiel, [zyiere, shurhonda]), this;
    }}), nevart = zyiere.props;
    for (jamaal(nevart, zyiere.opts.specialEasing); ita > taminka; taminka++) {
      if (dquarius = queency[taminka].call(zyiere, esquiel, nevart, zyiere.opts)) {
        return dquarius;
      }
    }
    ;
    return chaylyn.map(nevart, ehlani, zyiere), chaylyn.isFunction(zyiere.opts.start) && zyiere.opts.start.call(esquiel, zyiere), chaylyn.fx.timer(chaylyn.extend(makonnen, {elem: esquiel, anim: zyiere, queue: zyiere.opts.queue})), zyiere.progress(zyiere.opts.progress).done(zyiere.opts.done, zyiere.opts.complete).fail(zyiere.opts.fail).always(zyiere.opts.always);
  }
  chaylyn.Animation = chaylyn.extend(tirra, {tweener: function (tonyna, bonnell) {
    chaylyn.isFunction(tonyna) ? (bonnell = tonyna, tonyna = ["*"]) : tonyna = tonyna.split(" ");
    for (var winnefred, dezlynn = 0, e = tonyna.length; e > dezlynn; dezlynn++) {
      winnefred = tonyna[dezlynn], redick[winnefred] = redick[winnefred] || [], redick[winnefred].unshift(bonnell);
    }
  }, prefilter: function (chinika, nezar) {
    nezar ? queency.unshift(chinika) : queency.push(chinika);
  }}), chaylyn.speed = function (scotland, dominykas, bain) {
    var zaneri = scotland && "object" == typeof scotland ? chaylyn.extend({}, scotland) : {complete: bain || !bain && dominykas || chaylyn.isFunction(scotland) && scotland, duration: scotland, easing: bain && dominykas || dominykas && !chaylyn.isFunction(dominykas) && dominykas};
    return zaneri.duration = chaylyn.fx.off ? 0 : "number" == typeof zaneri.duration ? zaneri.duration : zaneri.duration in chaylyn.fx.speeds ? chaylyn.fx.speeds[zaneri.duration] : chaylyn.fx.speeds._default, (null == zaneri.queue || zaneri.queue === true) && (zaneri.queue = "fx"), zaneri.old = zaneri.complete, zaneri.complete = function () {
      chaylyn.isFunction(zaneri.old) && zaneri.old.call(this), zaneri.queue && chaylyn.dequeue(this, zaneri.queue);
    }, zaneri;
  }, chaylyn.fn.extend({fadeTo: function (dendrick, eid, rondez, samrudh) {
    return this.filter(_0x9787x1d).css("opacity", 0).show().end().animate({opacity: eid}, dendrick, rondez, samrudh);
  }, animate: function (jno, mariquita, dilpreet, evren) {
    var e = chaylyn.isEmptyObject(jno), paulia = chaylyn.speed(mariquita, dilpreet, evren), yamel = function () {
      var jaretzi = tirra(this, chaylyn.extend({}, jno), paulia);
      (e || mieke.get(this, "finish")) && jaretzi.stop(true);
    };
    return yamel.finish = yamel, e || paulia.queue === false ? this.each(yamel) : this.queue(paulia.queue, yamel);
  }, stop: function (gaoussou, kenjal, alphonce) {
    var jersen = function (marlan) {
      var ameliarose = marlan.stop;
      delete marlan.stop, ameliarose(alphonce);
    };
    return "string" != typeof gaoussou && (alphonce = kenjal, kenjal = gaoussou, gaoussou = void 0), kenjal && gaoussou !== false && this.queue(gaoussou || "fx", []), this.each(function () {
      var ninamarie = true, e = null != gaoussou && gaoussou + "queueHooks", watler = chaylyn.timers, nahuel = mieke.get(this);
      if (e) {
        nahuel[e] && nahuel[e].stop && jersen(nahuel[e]);
      } else {
        for (e in nahuel) {
          nahuel[e] && nahuel[e].stop && yoanna.test(e) && jersen(nahuel[e]);
        }
      }
      ;
      for (e = watler.length; e--;) {
        watler[e].elem !== this || null != gaoussou && watler[e].queue !== gaoussou || (watler[e].anim.stop(alphonce), ninamarie = false, watler.splice(e, 1));
      }
      ;
      (ninamarie || !alphonce) && chaylyn.dequeue(this, gaoussou);
    });
  }, finish: function (mykiya) {
    return mykiya !== false && (mykiya = mykiya || "fx"), this.each(function () {
      var sitey, vanetta = mieke.get(this), jennet = vanetta[mykiya + "queue"], e = vanetta[mykiya + "queueHooks"], noahanthony = chaylyn.timers, ramoni = jennet ? jennet.length : 0;
      for (vanetta.finish = true, chaylyn.queue(this, mykiya, []), e && e.stop && e.stop.call(this, true), sitey = noahanthony.length; sitey--;) {
        noahanthony[sitey].elem === this && noahanthony[sitey].queue === mykiya && (noahanthony[sitey].anim.stop(true), noahanthony.splice(sitey, 1));
      }
      ;
      for (sitey = 0; ramoni > sitey; sitey++) {
        jennet[sitey] && jennet[sitey].finish && jennet[sitey].finish.call(this);
      }
      ;
      delete vanetta.finish;
    });
  }}), chaylyn.each(["toggle", "show", "hide"], function (mkenzi, kairy) {
    var fedel = chaylyn.fn[kairy];
    chaylyn.fn[kairy] = function (addaley, ceylon, e) {
      return null == addaley || "boolean" == typeof addaley ? fedel.apply(this, arguments) : this.animate(yamen(kairy, true), addaley, ceylon, e);
    };
  }), chaylyn.each({slideDown: yamen("show"), slideUp: yamen("hide"), slideToggle: yamen("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (nadea, antravious) {
    chaylyn.fn[nadea] = function (anthon, sheyann, sharaine) {
      return this.animate(antravious, anthon, sheyann, sharaine);
    };
  }), chaylyn.timers = [], chaylyn.fx.tick = function () {
    var jamisha, tarajii = 0, izebella = chaylyn.timers;
    for (clarette = chaylyn.now(); tarajii < izebella.length; tarajii++) {
      jamisha = izebella[tarajii], jamisha() || izebella[tarajii] !== jamisha || izebella.splice(tarajii--, 1);
    }
    ;
    izebella.length || chaylyn.fx.stop(), clarette = void 0;
  }, chaylyn.fx.timer = function (anslie) {
    chaylyn.timers.push(anslie), anslie() ? chaylyn.fx.start() : chaylyn.timers.pop();
  }, chaylyn.fx.interval = 13, chaylyn.fx.start = function () {
    josina || (josina = setInterval(chaylyn.fx.tick, chaylyn.fx.interval));
  }, chaylyn.fx.stop = function () {
    clearInterval(josina), josina = null;
  }, chaylyn.fx.speeds = {slow: 600, fast: 200, _default: 400}, chaylyn.fn.delay = function (kyleem, breaunna) {
    return kyleem = chaylyn.fx ? chaylyn.fx.speeds[kyleem] || kyleem : kyleem, breaunna = breaunna || "fx", this.queue(breaunna, function (omarionna, kyrei) {
      var keinan = setTimeout(omarionna, kyleem);
      kyrei.stop = function () {
        clearTimeout(keinan);
      };
    });
  }, function () {
    var missouri = zosia.createElement("input"), inti = zosia.createElement("select"), emarii = inti.appendChild(zosia.createElement("option"));
    missouri.type = "checkbox", jahnise.checkOn = "" !== missouri.value, jahnise.optSelected = emarii.selected, inti.disabled = true, jahnise.optDisabled = !emarii.disabled, missouri = zosia.createElement("input"), missouri.value = "t", missouri.type = "radio", jahnise.radioValue = "t" === missouri.value;
  }();
  var taneyah, niquita, cormack = chaylyn.expr.attrHandle;
  chaylyn.fn.extend({attr: function (ailish, safe) {
    return kaleel(this, chaylyn.attr, ailish, safe, arguments.length > 1);
  }, removeAttr: function (lailee) {
    return this.each(function () {
      chaylyn.removeAttr(this, lailee);
    });
  }}), chaylyn.extend({attr: function (dvonte, lynise, vanella) {
    var deforrest, e, everlynn = dvonte.nodeType;
    if (dvonte && 3 !== everlynn && 8 !== everlynn && 2 !== everlynn) {
      return typeof dvonte.getAttribute === shawntavia ? chaylyn.prop(dvonte, lynise, vanella) : (1 === everlynn && chaylyn.isXMLDoc(dvonte) || (lynise = lynise.toLowerCase(), deforrest = chaylyn.attrHooks[lynise] || (chaylyn.expr.match.bool.test(lynise) ? niquita : taneyah)), void 0 === vanella ? deforrest && "get" in deforrest && null !== (e = deforrest.get(dvonte, lynise)) ? e : (e = chaylyn.find.attr(dvonte, lynise), null == e ? void 0 : e) : null !== vanella ? deforrest && "set" in deforrest && void 0 !== (e = deforrest.set(dvonte, vanella, lynise)) ? e : (dvonte.setAttribute(lynise, vanella + ""), vanella) : void chaylyn.removeAttr(dvonte, lynise));
    }
  }, removeAttr: function (gretel, janacia) {
    var tempess, jeramyah, e = 0, relanda = janacia && janacia.match(kwyn);
    if (relanda && 1 === gretel.nodeType) {
      while (tempess = relanda[e++]) {
        jeramyah = chaylyn.propFix[tempess] || tempess, chaylyn.expr.match.bool.test(tempess) && (gretel[jeramyah] = false), gretel.removeAttribute(tempess);
      }
    }
  }, attrHooks: {type: {set: function (mckenzye, daily) {
    if (!jahnise.radioValue && "radio" === daily && chaylyn.nodeName(mckenzye, "input")) {
      var michoel = mckenzye.value;
      return mckenzye.setAttribute("type", daily), michoel && (mckenzye.value = michoel), daily;
    }
  }}}}), niquita = {set: function (ellyanna, jhet, majida) {
    return jhet === false ? chaylyn.removeAttr(ellyanna, majida) : ellyanna.setAttribute(majida, majida), majida;
  }}, chaylyn.each(chaylyn.expr.match.bool.source.match(/\w+/g), function (vertice, marcelina) {
    var ganesa = cormack[marcelina] || chaylyn.find.attr;
    cormack[marcelina] = function (shanean, jametra, catricia) {
      var e, lakessa;
      return catricia || (lakessa = cormack[jametra], cormack[jametra] = e, e = null != ganesa(shanean, jametra, catricia) ? jametra.toLowerCase() : null, cormack[jametra] = lakessa), e;
    };
  });
  var ivet = /^(?:input|select|textarea|button)$/i;
  chaylyn.fn.extend({prop: function (maigen, whitlee) {
    return kaleel(this, chaylyn.prop, maigen, whitlee, arguments.length > 1);
  }, removeProp: function (darell) {
    return this.each(function () {
      delete this[chaylyn.propFix[darell] || darell];
    });
  }}), chaylyn.extend({propFix: {for: "htmlFor", class: "className"}, prop: function (iselys, averlyn, isauro) {
    var wriley, e, layken, malyna = iselys.nodeType;
    if (iselys && 3 !== malyna && 8 !== malyna && 2 !== malyna) {
      return layken = 1 !== malyna || !chaylyn.isXMLDoc(iselys), layken && (averlyn = chaylyn.propFix[averlyn] || averlyn, e = chaylyn.propHooks[averlyn]), void 0 !== isauro ? e && "set" in e && void 0 !== (wriley = e.set(iselys, isauro, averlyn)) ? wriley : iselys[averlyn] = isauro : e && "get" in e && null !== (wriley = e.get(iselys, averlyn)) ? wriley : iselys[averlyn];
    }
  }, propHooks: {tabIndex: {get: function (yulizza) {
    return yulizza.hasAttribute("tabindex") || ivet.test(yulizza.nodeName) || yulizza.href ? yulizza.tabIndex : -1;
  }}}}), jahnise.optSelected || (chaylyn.propHooks.selected = {get: function (nikeeta) {
    var hongyu = nikeeta.parentNode;
    return hongyu && hongyu.parentNode && hongyu.parentNode.selectedIndex, null;
  }}), chaylyn.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    chaylyn.propFix[this.toLowerCase()] = this;
  });
  var sylivia = /[\t\r\n\f]/g;
  chaylyn.fn.extend({addClass: function (glenden) {
    var syrius, kupaa, maylea, e, measia, shaena, kynzee = "string" == typeof glenden && glenden, gearleen = 0, lelianna = this.length;
    if (chaylyn.isFunction(glenden)) {
      return this.each(function (mareesha) {
        chaylyn(this).addClass(glenden.call(this, mareesha, this.className));
      });
    }
    ;
    if (kynzee) {
      for (syrius = (glenden || "").match(kwyn) || []; lelianna > gearleen; gearleen++) {
        if (kupaa = this[gearleen], maylea = 1 === kupaa.nodeType && (kupaa.className ? (" " + kupaa.className + " ").replace(sylivia, " ") : " ")) {
          measia = 0;
          while (e = syrius[measia++]) {
            maylea.indexOf(" " + e + " ") < 0 && (maylea += e + " ");
          }
          ;
          shaena = chaylyn.trim(maylea), kupaa.className !== shaena && (kupaa.className = shaena);
        }
      }
    }
    ;
    return this;
  }, removeClass: function (sharidan) {
    var pearline, carlile, mykalla, e, ligeia, jonylah, deedgra = 0 === arguments.length || "string" == typeof sharidan && sharidan, geonte = 0, artorias = this.length;
    if (chaylyn.isFunction(sharidan)) {
      return this.each(function (chaqueta) {
        chaylyn(this).removeClass(sharidan.call(this, chaqueta, this.className));
      });
    }
    ;
    if (deedgra) {
      for (pearline = (sharidan || "").match(kwyn) || []; artorias > geonte; geonte++) {
        if (carlile = this[geonte], mykalla = 1 === carlile.nodeType && (carlile.className ? (" " + carlile.className + " ").replace(sylivia, " ") : "")) {
          ligeia = 0;
          while (e = pearline[ligeia++]) {
            while (mykalla.indexOf(" " + e + " ") >= 0) {
              mykalla = mykalla.replace(" " + e + " ", " ");
            }
          }
          ;
          jonylah = sharidan ? chaylyn.trim(mykalla) : "", carlile.className !== jonylah && (carlile.className = jonylah);
        }
      }
    }
    ;
    return this;
  }, toggleClass: function (kyair, ciri) {
    var fatma = typeof kyair;
    return "boolean" == typeof ciri && "string" === fatma ? ciri ? this.addClass(kyair) : this.removeClass(kyair) : this.each(chaylyn.isFunction(kyair) ? function (sharyle) {
      chaylyn(this).toggleClass(kyair.call(this, sharyle, this.className, ciri), ciri);
    } : function () {
      if ("string" === fatma) {
        var erron, de = 0, e = chaylyn(this), windi = kyair.match(kwyn) || [];
        while (erron = windi[de++]) {
          e.hasClass(erron) ? e.removeClass(erron) : e.addClass(erron);
        }
      } else {
        (fatma === shawntavia || "boolean" === fatma) && (this.className && mieke.set(this, "__className__", this.className), this.className = this.className || kyair === false ? "" : mieke.get(this, "__className__") || "");
      }
    });
  }, hasClass: function (darrah) {
    for (var jamorian = " " + darrah + " ", shunna = 0, anikka = this.length; anikka > shunna; shunna++) {
      if (1 === this[shunna].nodeType && (" " + this[shunna].className + " ").replace(sylivia, " ").indexOf(jamorian) >= 0) {
        return true;
      }
    }
    ;
    return false;
  }});
  var jemond = /\r/g;
  chaylyn.fn.extend({val: function (keimarion) {
    var kayetta, kashious, romari, e = this[0];
    {
      if (arguments.length) {
        return romari = chaylyn.isFunction(keimarion), this.each(function (savonne) {
          var e;
          1 === this.nodeType && (e = romari ? keimarion.call(this, savonne, chaylyn(this).val()) : keimarion, null == e ? e = "" : "number" == typeof e ? e += "" : chaylyn.isArray(e) && (e = chaylyn.map(e, function (arione) {
            return null == arione ? "" : arione + "";
          })), kayetta = chaylyn.valHooks[this.type] || chaylyn.valHooks[this.nodeName.toLowerCase()], kayetta && "set" in kayetta && void 0 !== kayetta.set(this, e, "value") || (this.value = e));
        });
      }
      ;
      if (e) {
        return kayetta = chaylyn.valHooks[e.type] || chaylyn.valHooks[e.nodeName.toLowerCase()], kayetta && "get" in kayetta && void 0 !== (kashious = kayetta.get(e, "value")) ? kashious : (kashious = e.value, "string" == typeof kashious ? kashious.replace(jemond, "") : null == kashious ? "" : kashious);
      }
    }
  }}), chaylyn.extend({valHooks: {option: {get: function (damontez) {
    var karrah = chaylyn.find.attr(damontez, "value");
    return null != karrah ? karrah : chaylyn.trim(chaylyn.text(damontez));
  }}, select: {get: function (paraskevas) {
    for (var kanysha, brianamarie, tylaya = paraskevas.options, e = paraskevas.selectedIndex, bartlomiej = "select-one" === paraskevas.type || 0 > e, gereld = bartlomiej ? null : [], talise = bartlomiej ? e + 1 : tylaya.length, amberrose = 0 > e ? talise : bartlomiej ? e : 0; talise > amberrose; amberrose++) {
      if (brianamarie = tylaya[amberrose], !(!brianamarie.selected && amberrose !== e || (jahnise.optDisabled ? brianamarie.disabled : null !== brianamarie.getAttribute("disabled")) || brianamarie.parentNode.disabled && chaylyn.nodeName(brianamarie.parentNode, "optgroup"))) {
        if (kanysha = chaylyn(brianamarie).val(), bartlomiej) {
          return kanysha;
        }
        ;
        gereld.push(kanysha);
      }
    }
    ;
    return gereld;
  }, set: function (abner, tenecia) {
    var johann, kiania, e = abner.options, margena = chaylyn.makeArray(tenecia), kristle = e.length;
    while (kristle--) {
      kiania = e[kristle], (kiania.selected = chaylyn.inArray(kiania.value, margena) >= 0) && (johann = true);
    }
    ;
    return johann || (abner.selectedIndex = -1), margena;
  }}}}), chaylyn.each(["radio", "checkbox"], function () {
    chaylyn.valHooks[this] = {set: function (cozell, yazmina) {
      return chaylyn.isArray(yazmina) ? cozell.checked = chaylyn.inArray(chaylyn(cozell).val(), yazmina) >= 0 : void 0;
    }}, jahnise.checkOn || (chaylyn.valHooks[this].get = function (suriah) {
      return null === suriah.getAttribute("value") ? "on" : suriah.value;
    });
  }), chaylyn.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (sitlali, haggard) {
    chaylyn.fn[haggard] = function (dallene, analeyah) {
      return arguments.length > 0 ? this.on(haggard, null, dallene, analeyah) : this.trigger(haggard);
    };
  }), chaylyn.fn.extend({hover: function (deryle, hade) {
    return this.mouseenter(deryle).mouseleave(hade || deryle);
  }, bind: function (mahaila, carmell, yoshiye) {
    return this.on(mahaila, null, carmell, yoshiye);
  }, unbind: function (lorey, toisha) {
    return this.off(lorey, null, toisha);
  }, delegate: function (robey, kareen, jorgie, quamar) {
    return this.on(kareen, robey, jorgie, quamar);
  }, undelegate: function (aunisti, everlea, marielys) {
    return 1 === arguments.length ? this.off(aunisti, "**") : this.off(everlea, aunisti || "**", marielys);
  }});
  var mackinsey = chaylyn.now(), cahya = /\?/;
  chaylyn.parseJSON = function (oren) {
    return JSON.parse(oren + "");
  }, chaylyn.parseXML = function (carnetta) {
    var wanza, jazhiel;
    if (!carnetta || "string" != typeof carnetta) {
      return null;
    }
    ;
    try {
      jazhiel = new DOMParser, wanza = jazhiel.parseFromString(carnetta, "text/xml");
    } catch (sakiya) {
      wanza = void 0;
    }
    ;
    return (!wanza || wanza.getElementsByTagName("parsererror").length) && chaylyn.error("Invalid XML: " + carnetta), wanza;
  };
  var summerlynn, burnelle, danetta = /#.*$/, jie = /([?&])_=[^&]*/, zachiary = /^(.*?):[ \t]*([^\r\n]*)$/gm, earleane = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, teoshia = /^(?:GET|HEAD)$/, monsita = /^\/\//, odus = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, kanoah = {}, wilde = {}, nishad = "*/".concat("*");
  try {
    burnelle = location.href;
  } catch (qc) {
    burnelle = zosia.createElement("a"), burnelle.href = "", burnelle = burnelle.href;
  }
  ;
  summerlynn = odus.exec(burnelle.toLowerCase()) || [];
  function olean(ahvianna) {
    return function (chadly, yazn) {
      "string" != typeof chadly && (yazn = chadly, chadly = "*");
      var taliya, e = 0, martae = chadly.toLowerCase().match(kwyn) || [];
      if (chaylyn.isFunction(yazn)) {
        while (taliya = martae[e++]) {
          "+" === taliya[0] ? (taliya = taliya.slice(1) || "*", (ahvianna[taliya] = ahvianna[taliya] || []).unshift(yazn)) : (ahvianna[taliya] = ahvianna[taliya] || []).push(yazn);
        }
      }
    };
  }
  function jayliannie(ashantae, tremon, silvie, elexa) {
    var e = {}, anusri = ashantae === wilde;
    function maeve(creolia) {
      var janetta;
      return e[creolia] = true, chaylyn.each(ashantae[creolia] || [], function (karamo, enrica) {
        var deidree = enrica(tremon, silvie, elexa);
        return "string" != typeof deidree || anusri || e[deidree] ? anusri ? !(janetta = deidree) : void 0 : (tremon.dataTypes.unshift(deidree), maeve(deidree), false);
      }), janetta;
    }
    return maeve(tremon.dataTypes[0]) || !e["*"] && maeve("*");
  }
  function rockson(jacqlyn, lynda) {
    var mileni, janus, e = chaylyn.ajaxSettings.flatOptions || {};
    for (mileni in lynda) {
      void 0 !== lynda[mileni] && ((e[mileni] ? jacqlyn : janus || (janus = {}))[mileni] = lynda[mileni]);
    }
    ;
    return janus && chaylyn.extend(true, jacqlyn, janus), jacqlyn;
  }
  function caridee(vondrell, haruyo, gryffen) {
    var oluwasegun, e, minhquan, cameil, tamiracle = vondrell.contents, imee = vondrell.dataTypes;
    while ("*" === imee[0]) {
      imee.shift(), void 0 === oluwasegun && (oluwasegun = vondrell.mimeType || haruyo.getResponseHeader("Content-Type"));
    }
    ;
    if (oluwasegun) {
      for (e in tamiracle) {
        if (tamiracle[e] && tamiracle[e].test(oluwasegun)) {
          imee.unshift(e);
          break;
        }
      }
    }
    ;
    if (imee[0] in gryffen) {
      minhquan = imee[0];
    } else {
      for (e in gryffen) {
        if (!imee[0] || vondrell.converters[e + " " + imee[0]]) {
          minhquan = e;
          break;
        }
        ;
        cameil || (cameil = e);
      }
      ;
      minhquan = minhquan || cameil;
    }
    ;
    return minhquan ? (minhquan !== imee[0] && imee.unshift(minhquan), gryffen[minhquan]) : void 0;
  }
  function jerel(lill, hussan, marquale, krishona) {
    var e, kolten, dany, ilyanna, dalainee, barbaraanne = {}, lillette = lill.dataTypes.slice();
    if (lillette[1]) {
      for (dany in lill.converters) {
        barbaraanne[dany.toLowerCase()] = lill.converters[dany];
      }
    }
    ;
    kolten = lillette.shift();
    while (kolten) {
      if (lill.responseFields[kolten] && (marquale[lill.responseFields[kolten]] = hussan), !dalainee && krishona && lill.dataFilter && (hussan = lill.dataFilter(hussan, lill.dataType)), dalainee = kolten, kolten = lillette.shift()) {
        if ("*" === kolten) {
          kolten = dalainee;
        } else {
          if ("*" !== dalainee && dalainee !== kolten) {
            if (dany = barbaraanne[dalainee + " " + kolten] || barbaraanne["* " + kolten], !dany) {
              for (e in barbaraanne) {
                if (ilyanna = e.split(" "), ilyanna[1] === kolten && (dany = barbaraanne[dalainee + " " + ilyanna[0]] || barbaraanne["* " + ilyanna[0]])) {
                  dany === true ? dany = barbaraanne[e] : barbaraanne[e] !== true && (kolten = ilyanna[0], lillette.unshift(ilyanna[1]));
                  break;
                }
              }
            }
            ;
            if (dany !== true) {
              if (dany && lill.throws) {
                hussan = dany(hussan);
              } else {
                try {
                  hussan = dany(hussan);
                } catch (santeria) {
                  return {state: "parsererror", error: dany ? santeria : "No conversion from " + dalainee + " to " + kolten};
                }
              }
            }
          }
        }
      }
    }
    ;
    return {state: "success", data: hussan};
  }
  chaylyn.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: burnelle, type: "GET", isLocal: earleane.test(summerlynn[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": nishad, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": true, "text json": chaylyn.parseJSON, "text xml": chaylyn.parseXML}, flatOptions: {url: true, context: true}}, ajaxSetup: function (raksha, tryphena) {
    return tryphena ? rockson(rockson(raksha, chaylyn.ajaxSettings), tryphena) : rockson(chaylyn.ajaxSettings, raksha);
  }, ajaxPrefilter: olean(kanoah), ajaxTransport: olean(wilde), ajax: function (kirana, keyerra) {
    "object" == typeof kirana && (keyerra = kirana, kirana = void 0), keyerra = keyerra || {};
    var jonerik, francyne, e, glynne, jackie, marqueis, shunda, linae, rhylea = chaylyn.ajaxSetup({}, keyerra), dyland = rhylea.context || rhylea, samanntha = rhylea.context && (dyland.nodeType || dyland.jquery) ? chaylyn(dyland) : chaylyn.event, aile = chaylyn.Deferred(), sayen = chaylyn.Callbacks("once memory"), izeal = rhylea.statusCode || {}, vaudis = {}, sujeiry = {}, cloi = 0, bassey = "canceled", thereasa = {readyState: 0, getResponseHeader: function (reghan) {
      var manahal;
      if (2 === cloi) {
        if (!glynne) {
          glynne = {};
          while (manahal = zachiary.exec(e)) {
            glynne[manahal[1].toLowerCase()] = manahal[2];
          }
        }
        ;
        manahal = glynne[reghan.toLowerCase()];
      }
      ;
      return null == manahal ? null : manahal;
    }, getAllResponseHeaders: function () {
      return 2 === cloi ? e : null;
    }, setRequestHeader: function (zimaria, giovonnie) {
      var tyniyah = zimaria.toLowerCase();
      return cloi || (zimaria = sujeiry[tyniyah] = sujeiry[tyniyah] || zimaria, vaudis[zimaria] = giovonnie), this;
    }, overrideMimeType: function (glynice) {
      return cloi || (rhylea.mimeType = glynice), this;
    }, statusCode: function (daysha) {
      var dyron;
      if (daysha) {
        if (2 > cloi) {
          for (dyron in daysha) {
            izeal[dyron] = [izeal[dyron], daysha[dyron]];
          }
        } else {
          thereasa.always(daysha[thereasa.status]);
        }
      }
      ;
      return this;
    }, abort: function (wayland) {
      var terrelle = wayland || bassey;
      return jonerik && jonerik.abort(terrelle), stewart(0, terrelle), this;
    }};
    if (aile.promise(thereasa).complete = sayen.add, thereasa.success = thereasa.done, thereasa.error = thereasa.fail, rhylea.url = ((kirana || rhylea.url || burnelle) + "").replace(danetta, "").replace(monsita, summerlynn[1] + "//"), rhylea.type = keyerra.method || keyerra.type || rhylea.method || rhylea.type, rhylea.dataTypes = chaylyn.trim(rhylea.dataType || "*").toLowerCase().match(kwyn) || [""], null == rhylea.crossDomain && (marqueis = odus.exec(rhylea.url.toLowerCase()), rhylea.crossDomain = !(!marqueis || marqueis[1] === summerlynn[1] && marqueis[2] === summerlynn[2] && (marqueis[3] || ("http:" === marqueis[1] ? "80" : "443")) === (summerlynn[3] || ("http:" === summerlynn[1] ? "80" : "443")))), rhylea.data && rhylea.processData && "string" != typeof rhylea.data && (rhylea.data = chaylyn.param(rhylea.data, rhylea.traditional)), jayliannie(kanoah, rhylea, keyerra, thereasa), 2 === cloi) {
      return thereasa;
    }
    ;
    shunda = rhylea.global, shunda && 0 === chaylyn.active++ && chaylyn.event.trigger("ajaxStart"), rhylea.type = rhylea.type.toUpperCase(), rhylea.hasContent = !teoshia.test(rhylea.type), francyne = rhylea.url, rhylea.hasContent || (rhylea.data && (francyne = rhylea.url += (cahya.test(francyne) ? "&" : "?") + rhylea.data, delete rhylea.data), rhylea.cache === false && (rhylea.url = jie.test(francyne) ? francyne.replace(jie, "$1_=" + mackinsey++) : francyne + (cahya.test(francyne) ? "&" : "?") + "_=" + mackinsey++)), rhylea.ifModified && (chaylyn.lastModified[francyne] && thereasa.setRequestHeader("If-Modified-Since", chaylyn.lastModified[francyne]), chaylyn.etag[francyne] && thereasa.setRequestHeader("If-None-Match", chaylyn.etag[francyne])), (rhylea.data && rhylea.hasContent && rhylea.contentType !== false || keyerra.contentType) && thereasa.setRequestHeader("Content-Type", rhylea.contentType), thereasa.setRequestHeader("Accept", rhylea.dataTypes[0] && rhylea.accepts[rhylea.dataTypes[0]] ? rhylea.accepts[rhylea.dataTypes[0]] + ("*" !== rhylea.dataTypes[0] ? ", " + nishad + "; q=0.01" : "") : rhylea.accepts["*"]);
    for (linae in rhylea.headers) {
      thereasa.setRequestHeader(linae, rhylea.headers[linae]);
    }
    ;
    if (rhylea.beforeSend && (rhylea.beforeSend.call(dyland, thereasa, rhylea) === false || 2 === cloi)) {
      return thereasa.abort();
    }
    ;
    bassey = "abort";
    for (linae in {success: 1, error: 1, complete: 1}) {
      thereasa[linae](rhylea[linae]);
    }
    ;
    if (jonerik = jayliannie(wilde, rhylea, keyerra, thereasa)) {
      thereasa.readyState = 1, shunda && samanntha.trigger("ajaxSend", [thereasa, rhylea]), rhylea.async && rhylea.timeout > 0 && (jackie = setTimeout(function () {
        thereasa.abort("timeout");
      }, rhylea.timeout));
      try {
        cloi = 1, jonerik.send(vaudis, stewart);
      } catch (ashea) {
        if (!(2 > cloi)) {
          throw ashea;
        }
        ;
        stewart(-1, ashea);
      }
    } else {
      stewart(-1, "No Transport");
    }
    ;
    function stewart(ratzy, vadell, zoii, amauri) {
      var jade, kallum, sanea, goliath, raziya, yasmim = vadell;
      2 !== cloi && (cloi = 2, jackie && clearTimeout(jackie), jonerik = void 0, e = amauri || "", thereasa.readyState = ratzy > 0 ? 4 : 0, jade = ratzy >= 200 && 300 > ratzy || 304 === ratzy, zoii && (goliath = caridee(rhylea, thereasa, zoii)), goliath = jerel(rhylea, goliath, thereasa, jade), jade ? (rhylea.ifModified && (raziya = thereasa.getResponseHeader("Last-Modified"), raziya && (chaylyn.lastModified[francyne] = raziya), raziya = thereasa.getResponseHeader("etag"), raziya && (chaylyn.etag[francyne] = raziya)), 204 === ratzy || "HEAD" === rhylea.type ? yasmim = "nocontent" : 304 === ratzy ? yasmim = "notmodified" : (yasmim = goliath.state, kallum = goliath.data, sanea = goliath.error, jade = !sanea)) : (sanea = yasmim, (ratzy || !yasmim) && (yasmim = "error", 0 > ratzy && (ratzy = 0))), thereasa.status = ratzy, thereasa.statusText = (vadell || yasmim) + "", jade ? aile.resolveWith(dyland, [kallum, yasmim, thereasa]) : aile.rejectWith(dyland, [thereasa, yasmim, sanea]), thereasa.statusCode(izeal), izeal = void 0, shunda && samanntha.trigger(jade ? "ajaxSuccess" : "ajaxError", [thereasa, rhylea, jade ? kallum : sanea]), sayen.fireWith(dyland, [thereasa, yasmim]), shunda && (samanntha.trigger("ajaxComplete", [thereasa, rhylea]), --chaylyn.active || chaylyn.event.trigger("ajaxStop")));
    }
    return thereasa;
  }, getJSON: function (chrisaun, mykaila, addriana) {
    return chaylyn.get(chrisaun, mykaila, addriana, "json");
  }, getScript: function (arslan, jahria) {
    return chaylyn.get(arslan, void 0, jahria, "script");
  }}), chaylyn.each(["get", "post"], function (mielle, madolynn) {
    chaylyn[madolynn] = function (stephenee, jaffar, kysir, e) {
      return chaylyn.isFunction(jaffar) && (e = e || kysir, kysir = jaffar, jaffar = void 0), chaylyn.ajax({url: stephenee, type: madolynn, dataType: e, data: jaffar, success: kysir});
    };
  }), chaylyn.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (alixis, camron) {
    chaylyn.fn[camron] = function (kylun) {
      return this.on(camron, kylun);
    };
  }), chaylyn._evalUrl = function (lot) {
    return chaylyn.ajax({url: lot, type: "GET", dataType: "script", async: false, global: false, throws: true});
  }, chaylyn.fn.extend({wrapAll: function (sveva) {
    var areyanna;
    return chaylyn.isFunction(sveva) ? this.each(function (jakar) {
      chaylyn(this).wrapAll(sveva.call(this, jakar));
    }) : (this[0] && (areyanna = chaylyn(sveva, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && areyanna.insertBefore(this[0]), areyanna.map(function () {
      var allura = this;
      while (allura.firstElementChild) {
        allura = allura.firstElementChild;
      }
      ;
      return allura;
    }).append(this)), this);
  }, wrapInner: function (esmay) {
    return this.each(chaylyn.isFunction(esmay) ? function (harace) {
      chaylyn(this).wrapInner(esmay.call(this, harace));
    } : function () {
      var cheniece = chaylyn(this), christlyn = cheniece.contents();
      christlyn.length ? christlyn.wrapAll(esmay) : cheniece.append(esmay);
    });
  }, wrap: function (loene) {
    var nani = chaylyn.isFunction(loene);
    return this.each(function (larhonda) {
      chaylyn(this).wrapAll(nani ? loene.call(this, larhonda) : loene);
    });
  }, unwrap: function () {
    return this.parent().each(function () {
      chaylyn.nodeName(this, "body") || chaylyn(this).replaceWith(this.childNodes);
    }).end();
  }}), chaylyn.expr.filters.hidden = function (camyron) {
    return camyron.offsetWidth <= 0 && camyron.offsetHeight <= 0;
  }, chaylyn.expr.filters.visible = function (tran) {
    return !chaylyn.expr.filters.hidden(tran);
  };
  var arni = /%20/g, ariauna = /\[\]$/, mylik = /\r?\n/g, jannae = /^(?:submit|button|image|reset|file)$/i, estrellita = /^(?:input|select|textarea|keygen)/i;
  function adelard(sharlett, matiya, nichcole, dallis) {
    var e;
    if (chaylyn.isArray(matiya)) {
      chaylyn.each(matiya, function (summit, e) {
        nichcole || ariauna.test(sharlett) ? dallis(sharlett, e) : adelard(sharlett + "[" + ("object" == typeof e ? summit : "") + "]", e, nichcole, dallis);
      });
    } else {
      if (nichcole || "object" !== chaylyn.type(matiya)) {
        dallis(sharlett, matiya);
      } else {
        for (e in matiya) {
          adelard(sharlett + "[" + e + "]", matiya[e], nichcole, dallis);
        }
      }
    }
  }
  chaylyn.param = function (atenas, domingue) {
    var verga, koalii = [], e = function (irielle, ellesha) {
      ellesha = chaylyn.isFunction(ellesha) ? ellesha() : null == ellesha ? "" : ellesha, koalii[koalii.length] = encodeURIComponent(irielle) + "=" + encodeURIComponent(ellesha);
    };
    if (void 0 === domingue && (domingue = chaylyn.ajaxSettings && chaylyn.ajaxSettings.traditional), chaylyn.isArray(atenas) || atenas.jquery && !chaylyn.isPlainObject(atenas)) {
      chaylyn.each(atenas, function () {
        e(this.name, this.value);
      });
    } else {
      for (verga in atenas) {
        adelard(verga, atenas[verga], domingue, e);
      }
    }
    ;
    return koalii.join("&").replace(arni, "+");
  }, chaylyn.fn.extend({serialize: function () {
    return chaylyn.param(this.serializeArray());
  }, serializeArray: function () {
    return this.map(function () {
      var kahila = chaylyn.prop(this, "elements");
      return kahila ? chaylyn.makeArray(kahila) : this;
    }).filter(function () {
      var shondreka = this.type;
      return this.name && !chaylyn(this).is(":disabled") && estrellita.test(this.nodeName) && !jannae.test(shondreka) && (this.checked || !amarianna.test(shondreka));
    }).map(function (eshaan, valdimir) {
      var parissa = chaylyn(this).val();
      return null == parissa ? null : chaylyn.isArray(parissa) ? chaylyn.map(parissa, function (jaid) {
        return {name: valdimir.name, value: jaid.replace(mylik, "\r\n")};
      }) : {name: valdimir.name, value: parissa.replace(mylik, "\r\n")};
    }).get();
  }}), chaylyn.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest;
    } catch (kardale) {}
  };
  var fumie = 0, jiaming = {}, essey = {0: 200, 1223: 204}, jesten = chaylyn.ajaxSettings.xhr();
  virla.ActiveXObject && chaylyn(virla).on("unload", function () {
    for (var amarielle in jiaming) {
      jiaming[amarielle]();
    }
  }), jahnise.cors = !!jesten && "withCredentials" in jesten, jahnise.ajax = jesten = !!jesten, chaylyn.ajaxTransport(function (lex) {
    var alyssa;
    return jahnise.cors || jesten && !lex.crossDomain ? {send: function (kristl, khloey) {
      var e, adbiel = lex.xhr(), hardwick = ++fumie;
      if (adbiel.open(lex.type, lex.url, lex.async, lex.username, lex.password), lex.xhrFields) {
        for (e in lex.xhrFields) {
          adbiel[e] = lex.xhrFields[e];
        }
      }
      ;
      lex.mimeType && adbiel.overrideMimeType && adbiel.overrideMimeType(lex.mimeType), lex.crossDomain || kristl["X-Requested-With"] || (kristl["X-Requested-With"] = "XMLHttpRequest");
      for (e in kristl) {
        adbiel.setRequestHeader(e, kristl[e]);
      }
      ;
      alyssa = function (kadriana) {
        return function () {
          alyssa && (delete jiaming[hardwick], alyssa = adbiel.onload = adbiel.onerror = null, "abort" === kadriana ? adbiel.abort() : "error" === kadriana ? khloey(adbiel.status, adbiel.statusText) : khloey(essey[adbiel.status] || adbiel.status, adbiel.statusText, "string" == typeof adbiel.responseText ? {text: adbiel.responseText} : void 0, adbiel.getAllResponseHeaders()));
        };
      }, adbiel.onload = alyssa(), adbiel.onerror = alyssa("error"), alyssa = jiaming[hardwick] = alyssa("abort");
      try {
        adbiel.send(lex.hasContent && lex.data || null);
      } catch (dison) {
        if (alyssa) {
          throw dison;
        }
      }
    }, abort: function () {
      alyssa && alyssa();
    }} : void 0;
  }), chaylyn.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (dionysius) {
    return chaylyn.globalEval(dionysius), dionysius;
  }}}), chaylyn.ajaxPrefilter("script", function (nima) {
    void 0 === nima.cache && (nima.cache = false), nima.crossDomain && (nima.type = "GET");
  }), chaylyn.ajaxTransport("script", function (ayansh) {
    if (ayansh.crossDomain) {
      var marzell, trayten;
      return {send: function (uganda, e) {
        marzell = chaylyn("<script>").prop({async: true, charset: ayansh.scriptCharset, src: ayansh.url}).on("load error", trayten = function (kevron) {
          marzell.remove(), trayten = null, kevron && e("error" === kevron.type ? 404 : 200, kevron.type);
        }), zosia.head.appendChild(marzell[0]);
      }, abort: function () {
        trayten && trayten();
      }};
    }
  });
  var marla = [], parie = /(=)\?(?=&|$)|\?\?/;
  chaylyn.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
    var maxwel = marla.pop() || chaylyn.expando + "_" + mackinsey++;
    return this[maxwel] = true, maxwel;
  }}), chaylyn.ajaxPrefilter("json jsonp", function (bwana, allec, kimetra) {
    var e, senita, yony, asiana = bwana.jsonp !== false && (parie.test(bwana.url) ? "url" : "string" == typeof bwana.data && !(bwana.contentType || "").indexOf("application/x-www-form-urlencoded") && parie.test(bwana.data) && "data");
    return asiana || "jsonp" === bwana.dataTypes[0] ? (e = bwana.jsonpCallback = chaylyn.isFunction(bwana.jsonpCallback) ? bwana.jsonpCallback() : bwana.jsonpCallback, asiana ? bwana[asiana] = bwana[asiana].replace(parie, "$1" + e) : bwana.jsonp !== false && (bwana.url += (cahya.test(bwana.url) ? "&" : "?") + bwana.jsonp + "=" + e), bwana.converters["script json"] = function () {
      return yony || chaylyn.error(e + " was not called"), yony[0];
    }, bwana.dataTypes[0] = "json", senita = virla[e], virla[e] = function () {
      yony = arguments;
    }, kimetra.always(function () {
      virla[e] = senita, bwana[e] && (bwana.jsonpCallback = allec.jsonpCallback, marla.push(e)), yony && chaylyn.isFunction(senita) && senita(yony[0]), yony = senita = void 0;
    }), "script") : void 0;
  }), chaylyn.parseHTML = function (betony, leontre, samual) {
    if (!betony || "string" != typeof betony) {
      return null;
    }
    ;
    "boolean" == typeof leontre && (samual = leontre, leontre = false), leontre = leontre || zosia;
    var orline = seaanna.exec(betony), e = !samual && [];
    return orline ? [leontre.createElement(orline[1])] : (orline = chaylyn.buildFragment([betony], leontre, e), e && e.length && chaylyn(e).remove(), chaylyn.merge([], orline.childNodes));
  };
  var lucecita = chaylyn.fn.load;
  chaylyn.fn.load = function (durdona, kynnlie, elonna) {
    if ("string" != typeof durdona && lucecita) {
      return lucecita.apply(this, arguments);
    }
    ;
    var laiylah, e, lawhitney, miyah = this, dyian = durdona.indexOf(" ");
    return dyian >= 0 && (laiylah = chaylyn.trim(durdona.slice(dyian)), durdona = durdona.slice(0, dyian)), chaylyn.isFunction(kynnlie) ? (elonna = kynnlie, kynnlie = void 0) : kynnlie && "object" == typeof kynnlie && (e = "POST"), miyah.length > 0 && chaylyn.ajax({url: durdona, type: e, dataType: "html", data: kynnlie}).done(function (louwana) {
      lawhitney = arguments, miyah.html(laiylah ? chaylyn("<div>").append(chaylyn.parseHTML(louwana)).find(laiylah) : louwana);
    }).complete(elonna && function (saraiyah, sharetta) {
      miyah.each(elonna, lawhitney || [saraiyah.responseText, sharetta, saraiyah]);
    }), this;
  }, chaylyn.expr.filters.animated = function (kale) {
    return chaylyn.grep(chaylyn.timers, function (jamilah) {
      return kale === jamilah.elem;
    }).length;
  };
  var kindrea = virla.document.documentElement;
  function ayushmaan(keantay) {
    return chaylyn.isWindow(keantay) ? keantay : 9 === keantay.nodeType && keantay.defaultView;
  }
  chaylyn.offset = {setOffset: function (pantalion, rasmine, gailya) {
    var brensen, e, dorea, yeili, shamaar, audriona, mosetta, audrei = chaylyn.css(pantalion, "position"), niyara = chaylyn(pantalion), yasheka = {};
    "static" === audrei && (pantalion.style.position = "relative"), shamaar = niyara.offset(), dorea = chaylyn.css(pantalion, "top"), audriona = chaylyn.css(pantalion, "left"), mosetta = ("absolute" === audrei || "fixed" === audrei) && (dorea + audriona).indexOf("auto") > -1, mosetta ? (brensen = niyara.position(), yeili = brensen.top, e = brensen.left) : (yeili = parseFloat(dorea) || 0, e = parseFloat(audriona) || 0), chaylyn.isFunction(rasmine) && (rasmine = rasmine.call(pantalion, gailya, shamaar)), null != rasmine.top && (yasheka.top = rasmine.top - shamaar.top + yeili), null != rasmine.left && (yasheka.left = rasmine.left - shamaar.left + e), "using" in rasmine ? rasmine.using.call(pantalion, yasheka) : niyara.css(yasheka);
  }}, chaylyn.fn.extend({offset: function (michalla) {
    if (arguments.length) {
      return void 0 === michalla ? this : this.each(function (kamesha) {
        chaylyn.offset.setOffset(this, michalla, kamesha);
      });
    }
    ;
    var vanilla, dawsin, hamzah = this[0], e = {top: 0, left: 0}, analecia = hamzah && hamzah.ownerDocument;
    if (analecia) {
      return vanilla = analecia.documentElement, chaylyn.contains(vanilla, hamzah) ? (typeof hamzah.getBoundingClientRect !== shawntavia && (e = hamzah.getBoundingClientRect()), dawsin = ayushmaan(analecia), {top: e.top + dawsin.pageYOffset - vanilla.clientTop, left: e.left + dawsin.pageXOffset - vanilla.clientLeft}) : e;
    }
  }, position: function () {
    if (this[0]) {
      var tiano, yuhao, kunta = this[0], vianey = {top: 0, left: 0};
      return "fixed" === chaylyn.css(kunta, "position") ? yuhao = kunta.getBoundingClientRect() : (tiano = this.offsetParent(), yuhao = this.offset(), chaylyn.nodeName(tiano[0], "html") || (vianey = tiano.offset()), vianey.top += chaylyn.css(tiano[0], "borderTopWidth", true), vianey.left += chaylyn.css(tiano[0], "borderLeftWidth", true)), {top: yuhao.top - vianey.top - chaylyn.css(kunta, "marginTop", true), left: yuhao.left - vianey.left - chaylyn.css(kunta, "marginLeft", true)};
    }
  }, offsetParent: function () {
    return this.map(function () {
      var mercile = this.offsetParent || kindrea;
      while (mercile && !chaylyn.nodeName(mercile, "html") && "static" === chaylyn.css(mercile, "position")) {
        mercile = mercile.offsetParent;
      }
      ;
      return mercile || kindrea;
    });
  }}), chaylyn.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (shelee, debro) {
    var masako = "pageYOffset" === debro;
    chaylyn.fn[shelee] = function (e) {
      return kaleel(this, function (syleste, e, eufemia) {
        var taylin = ayushmaan(syleste);
        return void 0 === eufemia ? taylin ? taylin[debro] : syleste[e] : void (taylin ? taylin.scrollTo(masako ? virla.pageXOffset : eufemia, masako ? eufemia : virla.pageYOffset) : syleste[e] = eufemia);
      }, shelee, e, arguments.length, null);
    };
  }), chaylyn.each(["top", "left"], function (yorel, azalynn) {
    chaylyn.cssHooks[azalynn] = austynn(jahnise.pixelPosition, function (yaniece, eward) {
      return eward ? (eward = carrie(yaniece, azalynn), laydon.test(eward) ? chaylyn(yaniece).position()[azalynn] + "px" : eward) : void 0;
    });
  }), chaylyn.each({Height: "height", Width: "width"}, function (alaira, nixie) {
    chaylyn.each({padding: "inner" + alaira, content: nixie, "": "outer" + alaira}, function (luiggi, leokadia) {
      chaylyn.fn[leokadia] = function (elynnor, e) {
        var enayah = arguments.length && (luiggi || "boolean" != typeof elynnor), iean = luiggi || (elynnor === true || e === true ? "margin" : "border");
        return kaleel(this, function (izick, keshana, cahira) {
          var e;
          return chaylyn.isWindow(izick) ? izick.document.documentElement["client" + alaira] : 9 === izick.nodeType ? (e = izick.documentElement, Math.max(izick.body["scroll" + alaira], e["scroll" + alaira], izick.body["offset" + alaira], e["offset" + alaira], e["client" + alaira])) : void 0 === cahira ? chaylyn.css(izick, keshana, iean) : chaylyn.style(izick, keshana, cahira, iean);
        }, nixie, enayah ? elynnor : void 0, enayah, null);
      };
    });
  }), chaylyn.fn.size = function () {
    return this.length;
  }, chaylyn.fn.andSelf = chaylyn.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return chaylyn;
  });
  var demere = virla.jQuery, coraleen = virla.$;
  return chaylyn.noConflict = function (jonathon) {
    return virla.$ === chaylyn && (virla.$ = coraleen), jonathon && virla.jQuery === chaylyn && (virla.jQuery = demere), chaylyn;
  }, typeof adger === shawntavia && (virla.jQuery = virla.$ = chaylyn), chaylyn;
});
var comAPI = {VERSION: "1.1.0", initCallbackObj: null, _isFullscreen: false, get fullscreenEnabled() {
  var keegen = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
  return !!keegen;
}, fullscreen: function (katiann) {
  if (!comAPI.fullscreenEnabled) {
    return;
  }
  ;
  if (!katiann) {
    katiann = document.documentElement;
  }
  ;
  if (katiann.requestFullscreen) {
    katiann.requestFullscreen();
  } else {
    if (katiann.msRequestFullscreen) {
      katiann.msRequestFullscreen();
    } else {
      if (katiann.mozRequestFullScreen) {
        katiann.mozRequestFullScreen();
      } else {
        if (katiann.webkitRequestFullScreen) {
          katiann.webkitRequestFullScreen();
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
}, onFullscreenChanged: function (salamata) {
  comAPI._isFullscreen = !comAPI._isFullscreen;
}};
comAPI.config = {ForJoyH5_InGameAdInterval: 30, ForJoyH5_InGameAdType: "0,1"};
comAPI.resize = {_timerID: null, _queue: [], get sw() {
  return $(window).width();
}, get sh() {
  return $(window).height();
}, indexOf: function (brioni, jalessia) {
  var wessie = 0, aivyn = this._queue.length;
  for (wessie = 0; wessie < aivyn; wessie++) {
    var remilda = this._queue[wessie];
    if (remilda.callback == brioni && remilda.context == jalessia) {
      return wessie;
    }
  }
  ;
  return -1;
}, add: function (alzie, lisandro, tenelle) {
  var keadyn = this.indexOf(alzie, lisandro);
  if (keadyn == -1) {
    if (tenelle && tenelle.constructor != Array) {
      tenelle = [tenelle];
    }
    ;
    this._queue.push({callback: alzie, context: lisandro, params: tenelle});
  } else {}
}, remove: function (lorayn, milt) {
  var padraic = -1;
  if (lorayn.constructor == Number) {
    padraic = lorayn;
  } else {
    padraic = this.indexOf(lorayn, milt);
  }
  ;
  if (padraic > -1) {
    delete this._queue[padraic];
    this._queue.splice(padraic, 1);
  } else {}
}, handler: function (derrek) {
  if (comAPI.resize._timerID) {
    clearTimeout(comAPI.resize._timerID);
  }
  ;
  comAPI.resize._timerID = setTimeout(comAPI.resize._onHandler, 50);
}, _onHandler: function (bekah) {
  var jaie = 0, trampis = comAPI.resize._queue.length;
  for (jaie = 0; jaie < trampis; jaie++) {
    var kristalyn = comAPI.resize._queue[jaie];
    try {
      var jameele = kristalyn.callback;
      var melzina = kristalyn.context;
      var aliscia = kristalyn.params;
      jameele.apply(melzina, aliscia);
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
  var zalani = comAPI.config.ForJoyH5_PreGameAdType;
  if (comAPI.ad.finishedPre) {
    zalani = comAPI.config.ForJoyH5_InGameAdType;
  }
  ;
  switch (zalani) {
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
  var aidanjohn = encodeURIComponent(window.location);
  if (!comAPI.ad._isAds) {
    var sharenda = "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Preroll&description_url=" + encodeURIComponent(window.location.href) + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=" + Math.floor(Math.random() * 1e7);
  } else {
    localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/93656639,22648002686/gamemonetize.co/gamemonetize.co_vast_game&description_url=" + aidanjohn + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
  }
  ;
  return sharenda;
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
  var tamija = new google.ima.AdDisplayContainer(comAPI.ad._imaContainer, comAPI.ad._videoContent);
  tamija.initialize();
  comAPI.ad._adsLoader = new google.ima.AdsLoader(tamija);
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
  var delacy = document.referrer;
  delacy = delacy.substr(delacy.indexOf("://") + 1);
  if ((comAPI.config.ForJoyH5_ShowPreGameAd || delacy.indexOf(comAPI.config.host) == 0) && comAPI.config.ForJoyH5_stats) {
    comAPI.ad.show();
  } else {
    comAPI.ad.onAdClose();
  }
}, onAdsManagerLoaded: function (bay) {
  comAPI.ad._adsManager = bay.getAdsManager(comAPI.ad._videoContent);
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
}, onContentResumeRequested: function (daquita) {
  comAPI.ad.onAdClose();
  console.log("resume game");
}, onTypeTest: function (elianys) {}, onTypeTest1: function (shaquitta) {
  window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
}, onAdLoaded: function (jaaliyah) {
  clearTimeout(comAPI.ad.intervalID);
  $(comAPI.ad._imaContainer).css("visibility", "visible");
  $(comAPI.ad._imaContainer).children(":first").css("visibility", "visible");
  comAPI.ad._loaded = true;
  var kyneisha = comAPI.ad._adsManager.getCurrentAd().getContentType();
  var waitman = 0;
  if (kyneisha == "text") {
    waitman = 0;
  } else {
    if (kyneisha == "image/png") {
      waitman = 1;
    } else {
      waitman = 2;
    }
  }
}, contentEndedListener: function () {
  comAPI.ad._adsLoader.contentComplete();
}, onAdError: function (jaquette) {
  console.warn(jaquette.getError());
  comAPI.ad.onAdClose();
  window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
  if (comAPI.ad._isAds == false) {
    comAPI.ad._isAds = true;
    comAPI.ad._init();
    ShowAds2();
  }
}, onAdComplete: function (jori) {}, onAllAdsCompleted: function (sreyas) {
  comAPI.ad.onAdClose();
}, onAdClose: function () {
  var dekendrick = "AD_CLOSE";
  if (comAPI.ad.finishedPre == false) {
    dekendrick = dekendrick + "_PRE";
    comAPI.ad.finishedPre = true;
  }
  ;
  comAPI.ad.close();
  window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
}, onUserClose: function (shazad) {
  comAPI.ad.onAdClose();
}, resizeAd: function () {
  if (comAPI.ad._adsManager) {
    comAPI.ad._adsManager.resize($(window).width(), $(window).height(), google.ima.ViewMode.FULLSCREEN);
  }
}, _onFinishedAd: function () {
  var tavi = comAPI.ad._onExecRAD();
  if (!tavi) {
    comAPI.ad._onExecIAD();
  }
  ;
  comAPI.ad._callbackObj = null;
}, _onExecIAD: function () {
  var minami = comAPI.ad._callbackObj;
  if (!minami) {
    return false;
  }
  ;
  var shyan = minami.callback;
  var magean = minami.thisObj;
  var paraskevi = minami.args;
  return true;
}, _onExecRAD: function () {
  var shanvitha = comAPI.ad._callbackObj;
  if (!shanvitha) {
    return false;
  }
  ;
  var akierra = shanvitha.successCallback;
  var makida = shanvitha.successThis;
  var rosemari = shanvitha.successArgs;
  return true;
}, getShowable: function (thristian) {
  if (comAPI.ad._lastInGameAdTime === -1 || thristian) {
    return true;
  }
  ;
  var nakeem = (new Date).getTime();
  var ishiah = nakeem - comAPI.ad._lastInGameAdTime;
  if (ishiah >= comAPI.config.ForJoyH5_InGameAdInterval * 1e3) {
    return true;
  } else {
    var yvelle = Math.ceil(comAPI.config.ForJoyH5_InGameAdInterval - ishiah / 1e3);
    return false;
  }
}, updateLastInGameAdTime: function () {
  var delanny = (new Date).getTime();
  comAPI.ad._lastInGameAdTime = delanny;
}, show: function (danileigh, remya) {
  var jovy = comAPI.ad.getShowable(remya);
  comAPI.ad._callbackObj = danileigh;
  if (!jovy && danileigh) {
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
  if (jovy || remya) {
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
  var faylee = window.location != window.parent.location ? document.referrer : document.location.href;
  try {
    var akeria = "(gamemonetize.com|y8.com";
    $.getJSON("https://api.gamemonetize.com/data.json", function (tallis) {
      $.each(tallis, function (ebelyn, oletha) {
        akeria += "|" + oletha.domain;
      });
      akeria += ")";
      akeria = new RegExp(akeria);
      if (faylee.match(akeria)) {} else {
        if (comAPI.ad.getShowable()) {
          var elijia = {callback: function () {}};
          comAPI.ad.show(elijia, true);
          window.sdk.onPauseGame("Pause game requested from debugger", "warning");
          try {
            var lennox = '<div id="gmLoading" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABdCAYAAAB0HBXwAAAACXBIWXMAAAsTAAALEwEAmpwYAAA532lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMC0wOC0yNlQxNzozMjoxNSswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjAtMDgtMjZUMTc6MzI6MTUrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplNGYxZGJiZi0zM2IwLWQ2NGMtOGU5Yy1lY2E5MDc4YjA2ZDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTA4LTI2VDE3OjMyOjE1KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQ4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/W7MMgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAA160lEQVR42uydebwkVXn+v1XV211n7izMDAPMAAPDJvumgAiKQJBFJS4oYGIScQXjLxqiRhQ1kcQ1YoyJCy4oQiKgiSCbIKDsMKzDNgMzzL7P3fp2d9Xvj/dU16nqqur1Lsyc5/Ppmb5dS1efPl3PebfntTzPY4piMbAQOAiYC8wHZgIDQAHIqf3KwCCwBVgPrAJeAZ4AXgaex8DAwMDAYIojM4Wu5WjgBOC1wGuAfTt03qeBR4A/AXcBj5mv3cDAwMBgqsGaZAv5ZOAc4NQOEnA9PAH8FrgeuNdMAQMDAwODnZWQdwcuAN6FuKMnEw8BPwWuAjab6WBgYGBgsDMQ8r7AR4G/QmLALcOtQLkkj8oYuC5gAR54LrgeWBZks5DJQa4LbCf1lOuB7wH/Aaww08LAwMDAYEck5PnApcCHWyZgF8ZGoDgExSJUilAqQakI5VGouLKPVxGyrlSEnB0H7Aw4GcjkobsP+mdBzzR5LQajwNeA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" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
            $("#imaContainer").append(lennox);
          } catch (e) {}
        } else {}
      }
    });
  } catch (e) {
    if (faylee.indexOf("gamemonetize.com") != -1 || faylee.indexOf("y8.com") != -1) {} else {
      if (comAPI.ad.getShowable()) {
        var midhuna = {callback: function () {}};
        comAPI.ad.show(midhuna, true);
        window.sdk.onPauseGame("Pause game requested from debugger", "warning");
        try {
          var arati = '<div id="gmLoading" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABdCAYAAAB0HBXwAAAACXBIWXMAAAsTAAALEwEAmpwYAAA532lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMC0wOC0yNlQxNzozMjoxNSswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjAtMDgtMjZUMTc6MzI6MTUrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplNGYxZGJiZi0zM2IwLWQ2NGMtOGU5Yy1lY2E5MDc4YjA2ZDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTA4LTI2VDE3OjMyOjE1KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQ4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/W7MMgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAA160lEQVR42uydebwkVXn+v1XV211n7izMDAPMAAPDJvumgAiKQJBFJS4oYGIScQXjLxqiRhQ1kcQ1YoyJCy4oQiKgiSCbIKDsMKzDNgMzzL7P3fp2d9Xvj/dU16nqqur1Lsyc5/Ppmb5dS1efPl3PebfntTzPY4piMbAQOAiYC8wHZgIDQAHIqf3KwCCwBVgPrAJeAZ4AXgaex8DAwMDAYIojM4Wu5WjgBOC1wGuAfTt03qeBR4A/AXcBj5mv3cDAwMBgqsGaZAv5ZOAc4NQOEnA9PAH8FrgeuNdMAQMDAwODnZWQdwcuAN6FuKMnEw8BPwWuAjab6WBgYGBgsDMQ8r7AR4G/QmLALcOtQLkkj8oYuC5gAR54LrgeWBZks5DJQa4LbCf1lOuB7wH/Aaww08LAwMDAYEck5PnApcCHWyZgF8ZGoDgExSJUilAqQakI5VGouLKPVxGyrlSEnB0H7Aw4GcjkobsP+mdBzzR5LQajwNeArwKbzPQwMDAwMNhRCPkzwKdbsYg9T0h4dAiKw0K+lbI88MBT+/gWsVcWMnZd9Zob7F8ekweWkHQ2DwNzYcauMDAn9u03Ap8DrjRTxMDAwMDg1UzIJwPfAg5s5eCxESHh0RFl9ZahrKxen2x9i9jzxCL2fAvZjRBzJSDuchnKRSHnUglsG6bvAnMWwq6LwLJrLuUe4GIk1mxgYGBgYPCqIuSvAJ9s9eDhrUKWnqss5Yq4l+2cRqZjMFYEtxRYwT4562Ttk7NXESvaJ2nPFRIvj8HooBw3bTYsOADmL469rE8BV5jpYmBgYGDwaiDkhcDVSB1xQxjcAptWweY1sGU9bNsgiVq2slR9CzdbkMSs7n7o6oP+mdA3oAjWE6IuDsuxnmZF+0TslSXO7FvRFY2YPQ/GxmB0u7zXLgtgv2Ngeq0r+/+A8zGxZQMDAwODKUzIfwb8HOhP26k0ButeghcfhTUvwvZNQspDW2BsVBKwbDsgSstSVm9FrOBCD+S75f++mTBrPszeXRK1Cj2y38igWL5uJSBd11UkXNFc3tpz//1KRRjaCrkC7HuUPCJ4BXgbcL+ZOgYGBgYGU42QPwx8O22HtcvgxSWwbAmsexlKo+IydhzIZOVh2eFELdRleeofz1Pu6TFV8lRWx2Zg2hyYtxfM21uStfBgdFjex9Vd2VESVkTtu7X9BLHRQSH23feHI0+VRUAEbwf+x0wfAwMDA4OpQsj/CHw+aeOaZfDYHfDCI2IF5/JSfmRnwbYClzNuQLoeWvwYbbuC50UIuhwkafVMhzkLYOGBMGt32X9kUEjc88IZ2F5Zizf7VrQiZVyx5rdvlqSv150T68L+G+A/zRQyMDAwMJhsQk5M3tq0Ch76HTz/MAxvk7hvvosqy7p+bFcjV/25XtZEhKT1fXSS9jwojohVnO2SzOlFh8Ks3cQdPjqkWcuV2mzt6jVplrJbkbh2rgCvf6ecM4KLkWxyAwMDAwODSSHky5Ea4zA8eOQ2IeOhzdDVK0TsE6obcUdXLWSNlKtk6z8nTM6uTsau5tLWyLk0KuRc6IY9DoS9Dha3sx9fDpGxlnXtRuPM6lq3bhDFr5PfKxZ4BB8C/t1MJQMDAwODiSbkS4CvR1/cvBbuuQ6WPS7k19WrCNIN4sKeRqghInbDseIkizlkTfu87Gp/e+HFwdgIFEdhxjzY5wjJoC4OicXseVqiVyWwiHUy9v/Gg60bJWZ9yoVyngjeAVxrppOBgYGBwUQR8tlIl6QQli2Be/5bsqZ7B6Ru2I0QpR+b9QnV1S3cShA/jpJyyGKmlrx1Szrk6kaytP3M60wW9j5MErXcMowMa9dTiSR3+WIjGkl7HmxdC93T4YyLoG9GzdgciREQMTAwMDCYAEJeDDwTfXHJnXD/byRJq3u6IjlXy5jWH268Vex6EUs34oqOWtkoQre8MJGjE7MXMpYpjYq7ev5i2OtQ9dpQYLV7mrJXjbiI5tretFYyus/4ADjZ0FBsR2qxTZ2ygYGBgUHTsBvczwFujb74yK1w3w2qLniWWKSWDZaqJ3YcIWrbVg9H3tF25GGpbZYdvF59bgdSlnoSl2Wp4wjez/bfV21D+xtLGkHluuSx8ml4+l7JvM4WajOtvYTEMn/B0D8DVj4D99QWPfUh4iEGBgYGBgbjRshXA7vpLzx6OzxyC/TOUPFiLyBRnWQtR/1tBaRsWWHS9UnbJ1jHUd0UFRlaGvn6pGvZimw10tXJGCu8HU8Sswr9sGEFPPeAyG9mcmEydmNc5r6L3fPk3D3T4PE/SBZ5BMcAXzLTysDAwMBgPAj5z5GkpSoevxMevVXqfv3kLd+69UnWcjTi1IjYQm23NVK1wfFfIxDsQBGg7YSJPUTyGkFb2jmqRKyROUh8u9ALG14RxTC3IvFl143Eut1wFrjuas8W5Dx/vAGGttWM1z8AR5upZWBgYGDQSULuAX6ov/DCo/DY7YqMewIyrrqh/ee+y1onaTvYFnJl+wROEPutWtMExKqXTlXFQzyN6K2AsIlY0lViRq6r0AMbX4GVSxVR27UNKmq6S3lBnLm7X+qtH745dtxMxrWBgYGBQUcJ+duKlAGxKh+9HfK9YmX61q3uqo4SsBUl5Ijb2XbE2rSsoCNTpSJKWcUReYwOysMX/iiNSOlSqRg8yiV5uKovcoigNWsZwLPkPXNdsPYlWP+yJGjpiWM1SWh6Upmy8gu98NQ9sGFlzbjtgfRTNjAwMDAwaAhpWdYHA4/5f4yNwu9/JiIZ3dOEOC0Vc/UtW0+TuPQtzJAr2AtI148pey6MDEFxEEplqKiWinoSF16YUOt/KrV7JNErTuWrVBSLeY8Dxf1eHKnNutZlN/2aZf9cG1+Bg98Ab7ow9krmAWvMNDMwMDAwaMdC/q7+x5N3w5YN0Dtd3M2OcjM7jmb9ZpTrOcZK1i3kXF7itqWitF3cslZiscUhIWQL5dKOiw/HPazIg6C+2K0oFa6KkGjUWs7kxRpfu0waVthOuDVjNeva1bS2tQVGVz88+0CslQzwDTPFDAwMDAzaIeQT0foar10OLz0p2cV2hmqGtK2VHMW5q22NMG0HnBxk86KgtXGVtGLcvlFZxFYQc66Spv6IsYJDzyMPnZzxxT98Yia8X65LFgSb16gR8cDShExq/vcC8ZBsHka2w9N/jB3HdwKLzDQzMDAwMKiHTMLr/+o/8VxYer+ybAvyt+3TuHIl25obuKZMyBMSz2SlJeLmtULC5aJK8MrGcG4MAVv1SJmIdKa2zdJc3r7lXK1T9oKkss1rpRFGJiPuczeis+2iWc9uYCU7WelodcyZMkYR/BOSqT7VMA/YG5iP1FADVIDNwDLgJWCL+YkYGBiME44D9gfWAzeY4Ygn5KMQGUgAVjwjceOuviCD2VfSsrxAT9qP0aIsS8uW/3MF2bZ1nbh1R4eEiDO5gCStZok4Afq+seTsaU9VvNuyZd9sVuqSt21UPZUJk7GuBhatUc4VYNMaKaPa79iayzoX2BVYNQW+7zcBZwGvA14D5FL23QLcD9wB/Bp40vxcdmgsBK6IeX090vN8IrAv8MWY15ckvG4wOZgB/BuQjdl2PaJbkXqrBq6JGCqPIn3mX9yZBzYuqes6NTC4Fam13bpBEp70cqNo/2JPI2Q/oSuTk7jsmmWwcYV8DZlcmCzjyLgZEm4Uut516HX13rYlLmgnI80jHEeytqvJXXqDDK0JhW8lb1gNR50Gp7wv0ePwd5P0HfcjvZsvBA5q4zw3ITHxm839aIfEscAfE7ZdAnxzAq7h8YQ5+iwi3WswNbAAWJ6w7QfA++sc/2Pg/JjXV6jveWRnHdhoDHkW8Db/jzXLYHCTkLFepmQ5gF5z7EiSl6PVGue7xeJc/gSsXy5u62whIoM5QWQcOm8kLu3HmF3luq6UYHhr4M6Oljx5bnybyExWxqs4HPv27yc5PDCe+CCiP/4vbZIxwGmKlG9UbiaDHQujKdu+DswZ5/e/OGWOvmy+nimFMlBM2LauzrH7JJAxwO7Ae3fmgY0S8oVVqvIkmctyhGx8Scuq6IemPe0Ts5/IVeiB4e0SV922TojYV8Py485Nk3EcoTaS/BUh5WoZlHYuS7P4AUa3S+Y1lrKCCXsFQvFy5SHId8G65VLXHIMBpFPWRGE+oj3+HSRW3EmcCTzBxLkxDSYfFvCLcTz/XExFws6CI9rcvlMRcnXlsm0jbFsv5OpnSVsxAiBRfepCr1iYLzwq/+e7xTp2VWy5rgUbgd7/uCGhzwaIOe4YfYFQHBVL11IZ16HWkQn/O44kra1dnvguF0zQd/papH78jeM8b74NfB+Ybe4xOwXeALxnnM59tRnenQav1Nm+fmceHN2NujdwiP/HptVBspPnhWUtfZKykAxr1wMcKBSEyJ99UCzkQg/VMqJq7DnGOo4jY8uWGO7IYEB4hR7N0m6EmKEmZhxdANTEs1UseWxEyqH8c7heuL9zKMFL7eZkRPUrQcjkVCSbefs4fp8nAbc3sf8axKX9ClACupXbaDGSuFEPfwlctbP/iHYi/CcSsujkHH6HmrcGOwfuReLPCxO2/9QQsuB0fcPWDaqNokMolgrKKvRfB6yKWMKjw/Ds/TC4FXr6gnpinYwTiTNClqUxiecedBzMmAcvPAYvPwn5HtGR9uqQcpVoGyBmzydQL2h+MTIk1r5laypdXlg0xNVEQ/xzbdsIg1ugd6DmrfLAyYxfev9BwG0N7Pcy8BMkHvwA8bGgPqQk4a3A+0jOxj4XuMvcY3YadCmvyDs6dL6CInmDnQcV4BzgbqA3su2DwNKdeXB0J/Cb/Scjg2IhZrJBEpelxYz9OLJfy5vvFr579n4hpO7eCNF6yUQcx9EVV1S7Dj8Fzr4YTngHvPvTcPJ75X03rlKKXiku7Bqr22p8X9sSTezicEC2XvRjJFjJQ1tjO0DpVvJ4oIDEjOs56y9T1u9n1A8iKTFjuyLsDwD7Af8V2e4iJVT/be4vOx3+nM6FQ/4DqQIw2LnwGFJ2+U1lRPxceUm+u7MPjG8hZ4Hj/RcHNwnh5fxa4YjIhl+Ta7lCzrkukY9ctxwKfRpRWgTqVjG8mOSqHtsu3aSOPE0zL7vh+HNh70Phzl/C0vtEJat3QLNyk6xfGrOWdSsZlM51Jvg8VbUuN+Ix0E4xtFWOGxsJarA1vGGcvscfk54Fu0xZNQ+2cO5lwF8Dv0FqDEHaSz5k7is7LX6GJAt6bZzjOCYur8Jg6mE5Uk5nEGMhH4JkAgMS/624okBVzaiOdnVSIiGFXtiwApYvCfoEe5pmtBvLxMkX5CEu4kxOyXRGMG8RvOsf4KyPQf9sae7gJ2BZCe5vq8nGFFjBdbiuWMvVxC4CPWs0Teuq0aykOUdHpOwrgv2RDOhO4vWkK4EtQTIXH2zzfW5ABEWOMmS802MO7WdF/9wM46sW61MWY0NmeNq3kEOp5qViUOrkk6djBSU+CDeRK0gXqGcflASs7mnyNdladyW8hng4tIOlLOtyKXnXw94Iiw6Hu6+VlpAjg9A/U0g8Lr4cspat2ukUtaYtRa5+zNhyCLup9UWEF+JycEWfe2R7rJTm4dTPNGwG30nZtk55PjqVhPPHDl73bojb+zDELd6tXt8OPIXEt/8XGNSO6UJq5eOwgbCgQIHkDPCNwHBkUXOKWmz47UZfBO4B/kedOw2vVec4RC24bCRJbqkas+uBbR0YM0t9n68FDlTvlVfbNgNPI+7AWxj/RLuPIfHkJS0c+xUkeXCicARwAnAAsKeaG/6YLVWPu5EEx2Yxl3jFqpGYeXMS0ifgcM0AGlTz/UHlherUb3UOkrNysDIEBtS8LAMrkdLFe4E/NHi+GdpvYy7JNS/zEr7brdpvQD+XDhdRNNRvr/3AtHGaF0Xq101Hv2t/TPeLGdPH1Zje3Q4h96EV5FfK8vAJueqittRzRZq2I7W3Lz4iMd3eaUGWcsjNHa071ggwlox9cmzAqu0bgNP/BhYfDXdeI0lfhV5J+tKJMvHW5qUvDPTscK8iC41Q9yetA1T1b4I2jWNjYmHb4al7ECJF2QmcqG7MSTiH8c3qbgXHAR9BBGiSksVO11bi30di30X1elLc+gzg/yIkmZRx/nZFtAuR8q0zYvY5HnGpfgX4Z/V/FGcD/4C48ONwEnCRujF/k9blH+cAHwXehVRDJOFM7SZ/nVqsPTCO3+Uv1Y2pGewPfHIC5lkB+JD6Dg9pYMxQ5PRdmivDuinh/L8iEFk6U83hwxPOcVpkvn9W3eRbwRvUnDtLLWDrYSlSKfF10sVh/hkJXdXDh9Qjis9q8/9riOZFFGvVgklfWF+U8NvrBG5VC/F6OAlJODtTW8yl4RngR2pMx5q5IBtRTtnHf6GsspsdJ+yijrY7LPRIk4jlT0I2p7KxdU7zEjKhx0GJa69D4YIvwMkXiIW8abVkaUeTvppJ9EInX0vLqiYcO662Y/Q53IWKctmPqVhyBPt08KN/JGXbdR22aNtFFkniuVsRS66BY2YDf6+svh7g+Qa8PT6cOjehmeq8Z9S5hunqZvTjyOtfVZbv0Q18jlnA5cBvWxi3DyvL99N1yFhHL5Idfz/tS16mEcPiFsg1TWDE7dBcu0CN2VfrkHEUJyDx8fvQcmrqoCfF+kKR0I0pZBw33x+i+dDWPOBaRHv+nQ2Ssf8dfhnRqj+rzgKnHeQaOFdvneM6je462+erhfvtSFiw0THYT90znmrg/lJDyAvQasKq9cVOuLex/nCy8njpKUliyndpVrRmIXuN/rwajC+nwcnCCefC+Z+HxcfKYmH7ploithrJttbqrl03+L9SCWLGehkUEfUuX+u6XIol5AUdnExpX/ZnphAZzwceQTS1W8Fi4HeKkMoNEkclZb99EHd4Mxm+5wOXqueXAn/bwuc4Tf3Am7FAv625N1vBxxQxt3qOChIvTlrpf6UJ8viocvfF4WfADzsw165Sj4VtnONoZS03oj+fFDN9FpGB/HQL73+wWkz3Nbj/yYgL+tx27BokT+TShO2jbX4vYw2ca7DOcZ3GcMq2N6kxfWsb598bCUM03MfARmJ5u+iE7KmWiY6Sy7Q0iUzLlozn7RvhlWdFOMRywlxqJbmDrfqk2C7m7gnvuhTOuQT6Z9RP+kpcIFgB4VYPiyRx6Z/RjzUXelWjipIcH5PYtWuHPuqJKavgB5k69Xy7KEI4sM3zvA5xwZY7cGP4DnBMC8deipSCfbmN938r8O4G9ruLzrXtPErd4FuxcvKIizHNG3NNg9bfN1K2/w2wqU0PzD10NnP7CuDKFo99Z5sLjN1pTK70FKR0aEaHPvOXkTDMzoCkMTsdycOY3sF51BAp28qdVrUUyhWxBh1fozpqIasmEaueF1LOd2khY906TjJ661ioneLqQ06CC78Ir3uruK83rxHL1bKbP1fVKtYSukL5appwSqFHvAvlirw+NiwxeQ0DTbiT0vDalG3XTqFJf3sHFyFzO+A666Z1fe8+OlMr+fU6vqD/RtynncRixHXaCnZDBDxWJ2w/DlFtS8PPSE4E+ntlrbTT0elWtWjrND4EfKvF8W63ocyfka5itifj033tS+q9o3O/HfS08XsdL8QlJC4inIvSycVd3Xh1BomlOSHj0BaVLgvw7ODO4QL5gjRfWPV8uEZXt35DMptWkpJkfYJuF30z4dT3w6Ij4A/XwvLHpa9zV1+4SUR0URBKBov0Qq6gfb4Y5a6eaULIVQt5VMXkg5/mNLXyarfFWFoyzb1NnGcmcF6b1zKIxFgrMcRTzzJehSTA/BFREcuqz3aCcsGNd5es29T7L1GLpbfQWPKKjhvU43m1aKhnBc9Rq/C4H/570TquJeA+4PdIGGCVGqP9ldfk7STHz09BkmmuavLzzdOsviRltn9X47g5Ztu5KTejpbSftPM1JMs9Dc+qBclDaswsdfN9vRrv3pRjP4q4sNtZ6N6iHg8hGfiLkRDG2+sc93dIXDgOv6pzBx1BQjP3IRnAw+recyQiBHVsyrG/VF4N/z61EpHaLSNx3dkJ7z2I9FJ3Inf5tS2O2zr1vs3UvG9UhubclH0eUt6uuDFNw7A2pk+ovwfUmJ5Kek7JdWrcEt3wlud5V+lunpHtsOKZoJbYi1iJ3f2wcinc+QtwcoF4iB879ts0VkqqJtcOiE4nvThC9muGh7dBzwCc91mYMbczd91KCf50ozzGikKcSaSsa1Vn8hKf9iqBVKblyeJEjydXKhJPP/I0OOxN4ib3Y8nzFgWZ3wp7034j7ruVZRJFWbm71jR4nk7UKKOs/tHIZ3y+zjGfQxJvkuJwC5GkmEaaGkSzrBvR9f4A8L2Y11+vLK5snePLSOblTTHbzqnz4/4ukrmpI4dkZCdZI/cDn1JknIS9kYSSpHjiVnWzirr+D1UEH4ezNev6B8BfJOx3I7VdzfLqppoUrz8USa4DSZI7O8H6PSXl+EdSxqOIxPu/U2eB9EnS8wKGkPBLNO74KOmJY5vUQubWhO0nqnFLGp+S+r6iZXPnKa9DEv4FCRGsStnnnUiOwqwUS/kzmvHml/MtQDKJ8wnv+ym1v95Xr6wt2H9E41nWjjpXo4Q8phZX95PcJnalMhSiY3qhurYkfAVJklydss95pOd9XAZ8PulgO3rTcTJCQrpEpi8CkskJIa1eJm5Yx1HWr+aqtmytnaE17kZww3CycNzb4T2fg1m7CXnGdYaKKntZKjnN1cjb1X3WWr9ky1LKYTaUy1oyWG09dbYDH2layopycxPnKXbgWlbG/GA+W+eYNwNfIF1IYLmyGP9uHKbEPyWQMcoK/GAD53hXAhn75JJW5hR3E39/Chlfg8S9f1/nml5AYs9Xpsybdro2fSBlfp1FRBNfLTySyOZbGhm3im/WIcOj6pCxTwSfID1m30PzGeUVxI1+a8o+dyIJREnIKusristTjnmrutZVda7vGiT7O8l6vZggRFRWZOcpCzTNgvQUcY+pR5HkJMtGxrConavew/dY7Z/iNTiReF2AL6Rcx1lIaGV1neu9Wo1pknbBx9Pu/zWE7Lda1Fsr2o4Ig2TzQsTrXxKychwlAhI1duMkKr0Y63gSMHcvOPZMIctyo/l7uhhIJIbsJ5KXxoSMewdEWMWtqIereitH1gcd+CjZFIItT+4o01fHZfvnyn3XKP5VuSU7hXXUT1z5vlpokELa9bS8v0hyJufuMWvVixL2fUyRfzP4iHJTxqGdxKdSneN/TFCqchxSfpX0HVzS5vd4IOmu6hNTxiDJpZg2zpfQXBnOpTSWXPkA6cpliyJ/H4dkRcfhgwQSt41ghbKU49Abs8CC9OqE/CTfe36DZJ0n4eQE7+RJwB4Jx7yf5rQjlpMcBpxGSk8Dm0jtn52VumLLiiR1ZUQsZNsGkdZ0Mpqb2g7czdVHAkl7HpOOfFdKJrhGwL7LXvdsezoT+88tKI3C9F1ELWxsWFnVrpBypRzr6mwXScuJbsa3dq8RnJZyDb9RN75m8QlEV7sT+EWD+/0uZVsjyV1FJPM36XvS45Z7klwSdEaLnzPJs/A62kvS+Q3J7vhZBKU+aS7Vd9OeFna9hcWlSIyvWVyjPl/SzfT0Bs8zSHM14GltB6Puz6S48720lnR4J8l5J2/m1YPv1/mtnA38KWHb21LG5gctXMstJIvynIpW2aQjE13BO44QclERre+StRALefNaIZxsTtOsJqwZbaHc1dbU+8YGN8Mfb5TPlcnVuSVo5U8QJG/prmpU3TEWDMwTqcxhzRniVhKtjHaR5DacqW4cjSaNjceKNi1DuJ366CuQ5KF2cX+D+72Qsu3RBs/xPPHxz6h36viU5eFf0Vo9ZpKQSEGR/z1tkuF64rPeP4G4ihekkM/tHfgeT0x4fRMSR28VlyPJfUk30xsanGPNfGdpOSVRj9rRKfv9P5oPiVVSFmiH8OrA5aRn+l9EepXBUQmvZ9oY056UMT2cmHBXhhhpRT+G7Nhhi9ZRFvLoMEzvCbSuo2SsS2VWM6y9YN/JwuN3Srb1pjWSgR0l4xrrXbPqoyInuvt6rCiZ23MXyvNKJficfmKXhhHaz7CGZHdqRrm4Gk3qWo0oaFl1licl5So7rIFzHpDw+jLaixn+GomN2m2OXaO60qWUH9tgg+cYTffDVLFfyrLwsnH4ObSrJT2IJHfFuVp7UizJrTSfxU7Ce+yfYsG3u2BbkTBGBzd4jnVNvmcaeevzJJuy0DqG1urr07ArUx8frrPQv1zd49KMkqQxPY745Nl2x3S3pJv3JnWDqa7C8l1CvpalegMDmQyURsTCtO1wVnU1oYuApPWGC1Fym2hSXr8C7roGnrpH4uH9M2tnedKdEL2bk/6/f7BK2po5D6bNhnJRXNX+wsTvGBW5IW3pwMd6KmXb8TQucL6K5NhlFB9vkJCTsjbbTeB5BYnP7NXmeRqdgUmxfrcDi4Io5kzwTawTfYh/oaySU5o45n20r/oEUoqV9Bke6cD5/5RAyI0SVCvzw2tgbs5Uj4lCl3qMMDXxNiSrOQk/Av6xzjlmT/CYdifNXVtZUiH3Z64gLmlUHNmyhKCLoyIFmckSChJXydkJE3SoK1JSUpcXtlA7GWJ2K3Dvr+Ann4Mn/iA9lqfNDvcyTrpNe1bwk/IitcjVp14QJ951kYzLWFF1ifKCpK6IGMmGDt2Q0mqN3zFOE6nRSZvkBu/EQmRtB85hdeB4q8PvVZjgG1mndKPfS+M/25toLuGo3k2NcZxnq1O+J2sc5lij+3fRmaTQRpGl9Qzp8cbrSE+svJXkEr1WvtNOIbGMyyYo+A6+gbzEV/2aYluVPJXHhJBtJyBinX+tGEu5ZrpNUFLXsseEiG/5oVzzwDxxxbtuY46h6poiKpOpxY4tC4oj4v6etzeUSqr+WpG030c5m6ux8jqBu5W1HYfDmNzYT6VJom4GBXZMeE2+3i62deg864jv7hM3J87v4PWnJUbmxnGelSfuLjauC6lGMcT46km3in1Jz0N4gqCL1lTDUNK9O4PE9V5Ea8EIIgFZLop72vOU9TcCI0NiLfvWbtR17bco1C1hL8rHUbe11znC3r4J7vqlxItLRZg2RzLCqwlZCbc5L0K4/qLDb6lIjLvarQgBLzgAuqeLqAoo0reCNoyZcDpApzKFS0ijgqQV4NeAN07ShEtq+bi4zfPmkGzkHRFJ9dgrkUQij86pllkdnIcgmb0XkC7n+mHq95VuBhsUOcaNyV4dOP+icfTQtINBJHu/K+E3/z06o3Pgz5Op6KqejSQk5lO8Gyc0YdkPqvtp3LhdgWRZd3JMh0noV54BnkNk5YgS8sh2uQvYiqB012sodqxbxlbQISrUC7mR6Ai1pNcMHr5FXNTrV0iv5J7phHoaNzVkNjVNJLyIy3p0BPpnwfzFEl93y/LZPTUmbll5F8LTppNNH76VQsgnI67rX07CD+ZF4mX5Dkbc3htbPO+RdE7wfaohKUlvJtJKcKrjHUgiVBweID2pplXLfBnx7UxPQ0QcWkU3ybKSz03yOG9CPJpJC9Ol7NjIId7BpDyVYSQJa0sT51yvFlq7JXgkJmxMbeWOqBHZzualq5Ol9tLFQkBT5CJiLSOlU47vJW9UHMRr3UBeuRR+8WX4zZWwdT3M3FWuvcYqTrOOtZi3zsehxYGmPuaW5bHHgSKLWRxW0pqVwDKulKURRy5MyI938Pt7lGRtYZA60MUdfL9G66eTpDgz1G9CkIZP7MA3miUp5PDuV8H1r0TKQ5LIejyQNM8Oob1s40tIjlHfP8nj7CGylXE4jx0ftyHualIMkWa9P5WUMT1/Ij+cnTax811hCU1L16VWbmf/dSuScZ3JS5JX1eWrTafEpCqvucj66BD8/mq4+nJ49n7omyEWa5VkCd7L80hkfF0kxPLUqFjU9DnWXdfFYZi9G+y2WJ5XlDJXxQ0rdBW6Vb2zoAQ83OHvMK0tXkYR9r4deq9GXUBp3VI+TWsdXPwmADsq7k4Z38++Sj7DV2MWnJ9FMuPHA2m9pX/Q4jl3Jb3M7MYpMM5/SHh9bp37wasdvyS5Xh9EMOW+Nn5/cZhP633cWybkZ4jRPc13i3VnoVzWVmBN1li5Vvh12wnHTpuxfD1PSD6TEjFbeh/89DK4Q1VBDsxVWtvtpjxYmkJXJANcT+TK5GDvI+QzFoeDWmVdoatcgq7eGot2c4e/w8eBf0vZvotacJ3d5vuc2cTEXEqycMY0mm9vtoDOZedOVWwiWfN4f9J7CSdhD0Qx6KQJ/By6HvSzpOt5t4tfkdxD+QBExrMZ5JB2hknxwt/TflOYThFTEr6BNNxoFpdRv9PRZOKbpGuNX1JngVYPaT29vw28poVzXt7sNdkaX9asuiwb8r1UWyj62de+VVkVBtGlM9UZM0pq001xGceWOSnS8+t5o9i8Fq7/Blx7BaxdLt2g/HaKUQKtscITOjvp6lv+Z6l2ciJ4DkKy5RIsfA3MmAMjg0H5k0/GnisZ6bm8EiAJcNc4TdaPkV6X3KcI7aoWrOWDEcH0G0koZkek/aJLtC+lnPNE5XrarYH3PwVxEw7sBO64r6ZsuxgRRWk0y/wMtRB7k1oAHTNBn2EpQTOH8Xa1V0ivMT0faZnYyNw5DKlfPihln0unyDx5Qf1+4uAgCU9nNrEI+RrSee2cNkltvHCpusfFoYh0afpmm+/xTMr9OYuUmTYqYVtQ1/MZpNFHw207dRv0ZmJExvNdkrDkuULOXX1KGtIKSLuazBVJ9MrmA7UvK9oXOSHJy/Mg1yXdmB69Dd7w7oAIH/6dJG1tXiviHrlCUO/rLxK8dopHdKnMqIvbkvcpjsC8vWD3/ZSruhx4BXzLHktqtqfNkoeGm8Zx0p4EPElysgNIJuwF6kf3a0T84EXCZQ3TlGX1ejUBT2/wBhFVtbpOXU9SP+ST1Y/gX9SK/xlttOcg8oDn11kV72jw++UekbD9Q+o7uVKR7HOR724vRALwnepGoN8g7lVz5K4J+ByXITHxhyfgva5E3LRJSmfnAm9QN8hfqQWDnwsxHZEwfA/1cxuuJlkHeTLwtyQL7XSrBfT1iEzpfYSTBnvVwvwUpHuXniD2VkTp7C1T5HP+BfDllO3D6p53Ga1VIVxPELK9JGXO9qpx+R81pg9ExrQPydd5M+JJXBCZg9erBU/DhPy/cTRpWZDvAbcE3T1CyG4lUKKC8BF6/W6uS0h5bASsTAInxmgeZTLiLn/g/4T8Z+0Kzz8Czz0k55uxq7xH1IJuJIErdX8/duwGx+qx59EhmLYL7HWILFDG/LIwCyxXc3Wr/sgz5obGZjP1W+e1g3VI2cldBA3lk/A2gnjsSuX2KyNlBHNpTrVmufrxVhLcl2mWe4/6IV2GJGJsVKvRfWgtzrwj4N3EVD1oWICUYlyhvrv1asZOI7lUx5/dd6qb8K3j/BnW0/ms6jS8hfTe27OU+/By4CV1fY4ayxkNnP9F4vv3TiaWAF9H1POScI56lNSieVD9vuaR0NxA864sUYu74iR+xrdQPxdgoI5nqR62a4T8COKe/kgD984xNaZDakx3RcqxknC2WmwfS0ovg0zkhn4HMa2rcgUY86SMqG+6WKtEOjzZtvaarYomM5DtEquy6qa2IlayRoy6pZnNi9v3oZslmzmbF6vYyapYrdW6JVxTj+wF1+6TsRdJ6CoOSSnVPoeBkxM9b9tRSlxW0Bfa8mR8MhnYZWHNSmy82yI+r6yrG4nvoRqH3WjMdRyHe5VrLCmO9zQilfijBs61J43VGCfVC+4oeE55Bn4yDt/dahLqH1/leAEpdWrEA7WA5KYXSQvdE5n8lqZJVvLhJDfZ8JFN8SAk4T4mV6FrDs21PGwV0XvXR5EY/PF1jsuRrKWehPvrjWlUbzUxCSKbFzLsnaGVPlm14iBWJLmr0CslUK4XZDOHqqGsMFHqnZWcDPTPEKu0Z7oQoOdGiDTaH7EVWAntGNVrxSEpbVp0hHye4mCQuOVVwvFj15X9Z8yFnmmhs101QRN5tVrZXjnO7/MNpN5vU539rkLin53AvzF1Zfw6iZ8ifW07iQeQRKfHdtAxu1mR8nAHz/ksEntfOYU/98kkx5NbxaeRBiCTuQiZPonvfRKd92Z+Sv2m3WYI+ToSdJb9ZK1Zu4nbulJS8WM70vXJDkqhPE+s60JP0KLQ0sqJQnW+MQlZXrMdorz6lnGo/MlPKouoinmaEldxWIh1r0OVWMqgqjf2CVnTrPY8UQezbNg9vHZagbgLJxIfUT/Wuzt83jsQFZyPN3HMt5Ba1K1tvK8vIr+jSmdG8V1FMC914Fz/pVxlW3bwMbsZSUK8owPn+rGyPpdP8c/sIol7X+vAudYjYaYvT4HPVZrE9y4rUv5WB861FonLX9HIzlFCHqJOqcACJYThE081jGxpJ9NFQizoGVBWcplwh6gGCNUbD9VYXbNau1a9zrhcgtIoTN8F9jxYYtqjg5rwhxfEiquvlUXdbNbuMGNeDSFNBnzyPEMttlqd5MNIm71T2yD5a5WF9l9NrrxXInHVX5FeehDt59qTsm+jnY6SYkIZGtdLTornD1C/ScDNiKvxclqTbLwdiRn/NfU1kAsdGK92keRKbkYu9QU1R89v0Rvwa0VwF5IsZ6ojKW6/R5PvmyNZhmF2A8d/QnmsWsmS3o4kve2n7hP1kCVZtnJuA8cnhVnmaJyUm6A5l5ZDcLG6f97Qwnm3ITH+/WiiZNPyahlvEXXk4X71DXj+Yemc5FvDtrKiLUcetiI6x5GY66Y1sG291kXKShYIsRL/iOxnpVvDaUTsZ6/pcqCeJ7etckli1DPnwS4LZDFRKslnsrWuVhaBTKZlqeNceO05IUIuqS99kMnHbsCfIfGRw9Xf02L224A0wbgfKaG4mcb7KzeCPZFM4NMVSUczw1cjSSXXIe5b32tzAPCuhHP+lHAy1J4ky4peTbIyj44TiG8t6CIu+0YsztORrjTRGTmiztGoVnAvkhjyZiQksZBaPePNSALSneom0kxG9VySm0Q0Ol7t4t3qO/ZiSLbVkM+pSHLQ69WY9cdYMM+pxcv1NN+68UMJJPQk6bWtccRwccwdz0Ky75v5Lg9Uc+VNSIJkHAEuRzQMfqt+Z83kFvQjGcmZmGu9k/pJg28lvo3roCKxklqwfnwC5twNSLJVPbwGOEsb0/kx+yyLjGnT2u1xhAySFJRYx/bYHXDrj6B3QMjW749say5s/XkmK9bx6mVSX5zJ1RKl1yIpRwlal8GsR8h2hIzdspQx5XvENd83M5DBrH4upasZ6m6l/h/aCosOg0PCaXFfR5IvpiJmqVVpj0Y02xUhbpuga+hXN8qC5qVZRmdjgTsi/KzOvEbwK+m88MyOhNlq3PLaXFveoCX8akVOeR76lUfG0xZurpkSLSGvxrRPG9NNakzb8ukmEfLitBXx9o3w8y/B2KjEk229oYQdaF7r5Jzrgi3rYN1LQtC2FneGiO60lcLF9cg5qYlFAhlXY8AVseb7Z0H/bIl9l5Vj1fGtYoLPVM2qRpLNhrZJFvZJ75FjNYKbyY4fuzMwMDAwaBN2wutLSZFn65sJex8mCU8hha4IEVctZSWqMX2OlC6VikG8tlryZAckTaSrUijvyyM5wzqSsBXd7j/1lbgqpSA5rXcAZi8UCU7bltppPzbsqlhxNZtaixvjSUtKz4VDTgqRMcC/GjI2MDAwMGiHkKGO/37foyXRqVwU61FX6LL1pC313HWF6OYskIYLYyOqlliPI+vWtRUh1wSujbOA44xjV5PIdMtCqpm8JJzN3BUG5qh666KS7VTx5GozjIg0pufK9rEijGyDA46DueEurEOki9QbGBgYGBg0RMirgM8nbdx9MczfB4a3B7FVx0/WsoIEKFvTuq6UpY53133FzVsaoSpV6ROcT+LVBDG/rEpjYS+mC5NeKuW6QqiulgVtoa4nI9fQP0vqm/tnKhGSsmRVuxXFw1qTCL+kydVqjT1Pjtm+UXStDzyuZog+zNRs7m1gYGBgMAWRFEPWsQxJuqnBS0/C//67WMr5bk2xS2VZ23aQkVzNxnZk3y1r4eUnlSpXITCmIayJXd2g9ySO/B9nEvvnsNV7ZnIibOL3arYdjdijDTK0v4ksKnQlsm0bpN74pPNU/+cA9yIlCAYGBgYGBh0j5CNIbgTO734Iz/xJ3L5VGU2tf7KlkTPK4s04ksm8aTUsWxIIiECEmG3tBStIokJ3Z0dJnPA12Bl1LZo/wOd3m7C73Y6SsTrOjiHjreth7p7wpveJCz68HGA3YtpZGhgYGBgYJMFuYJ+HEGGCWBzzFnH7Dm8LSBi96xO1SV6eJ+7h2XvA3odSlaesSeRyg9pgvLAgh28FVwnUDuqebSe4Ds8NypkqJRU/9l3QWttENDd31S1dCbvAPUtixpvXSLenN15QQ8YgggKGjA0MDAwMOm4h+7ibBDfs0/fCHVdL9nW2oLmoHa1kyNYsZ0WimYzIUW5cJd2cxobFcradGGs54sbWRUF0DW29nMrSFgVoyWZx2tvVbXZgnfulUb6lXRwWJa59jpS2kE5ts6+fA+eZaWVgYGBgMJ6E3I8o5sT2273lh0KqM+aFhUH8GK4VrU9WrmwnK7XM2zfC8w+JoldetW0MMTIBsUbd07472rIiBE1gKdv+CeL6N9vBdtuOELYj2wa3yPmOOBWOjO8QvJTmO6oYGBgYGBg0Tcgg8mFL4jaMbIdfXymJTtPnBOSmJ3OFSNkJb+vqlXaLLz0JK5fK84JmLUet3Wos2Yoh4kis2dJiyJb+txV5rsWPfWIeK4o7fmAuHP822POQ2HHZgjT8Xm+mlIGBgYHBRBAySAea38Zt2PAK/PZ70mShd6aQnGOBldHI2Lc6nbAutO1IPDaTg/UrYdljsHG17JPvkdhwVX9a6z9cQ85E2kISdndH3dWWVWtl27aUNA1vE0t98dFwzJnQOz12PDxEF/pRM50MDAwMDCaSkEEE/n8et2HFUrjtx0KsfQOahaoI2XE0K9TRLGVFhJmcuLBLo7DyWbGWt66TGG42L3FnPVs6ZDVHXdl660Yr0kwiUuZkq1rncklqq21brOHD3wx7pLehHo/emQYGBgYGhpAbxnuBn8RtWPY43H2txId7B6gmTVVd1Zp17LutHeW6Rj3PdUFOtTx85Tl4ZSls3SDZ0pYD+byc34okeVmR+uUaC1i3rBU5l8fENe1VJFFrr0NEeWufI1M/v4d0ArrNTCMDAwMDg8kkZIC3k9A/c/nj8KdfS0lR3wytJWMkjqwnftmRTlG2I3HkXEFi1BtegdUvwpY1kmQ1NiIE6ot+2E4dd7XPpJ4Qe7korunuPmklOX9f2P9Y2OPAup97FGmD9wczhQwMDAwMpgIhA7wRaeod7c3KupfhjzeI1nPvgHR5inaDqgp4aIleoU5RSu4y36N6KXviUl6/QtS+tm+G7Zvk4VYiZU8EpOzHnF1XXN99M0S/emAu7LoIFh4kZVsNYAXSU/gJM30MDAwMDKYSIYM0bL4WqMlBHtwMD94Ea5ZBz7RAYrOGjKMZ2Y64rvWsZ9sRUnbyYjU7DowOSevDsREYGRRLenRILGAnE1jKmSx098vCoH8mdPWLVdw/Q4sr18edwLm00HjawMDAwMBgIgjZx/eAv46+6Lrw1D3wwqNixfb0i5vZr/N1LET/OqluWZfi9GUxHSHkbEEe+bxYxq5S8grJZyphj0xO9nUccVW7Y5IBni80RMpXAJ8yU8bAwMDA4NVAyCBKVVcC06Mb1q8U3evNqwNBkEwmknUdjSfrZVJ2gsCIZllnVAMJX8Nab3Dh92X2gFxeuj5F+hfH4WXgIhJKvQwMDAwMDKYqIQPMBb6OlEeF4Hnw0hPw8lMS/83mxI3t5FRJlBVvHUdjzlXXtqVc206EnCP/+0ldWUXEhZ6w/GYCvqOs4kEzVQwMDAwMXo2E7OMs4IuIwlcI5SK88jysXQ6Dm4SoMzlVa5zTSqNsLZ6sl0spwZEksvYzumxleee6hYQL3WGt7ATcDXwauMtMEQMDAwODHYGQfVwEfBLYM7qhUpFsaZ+YyyV5OA5klBCInVHWsxMRGLG0UicnXOrkk3u+W2Q5s4WgWUQKngD+CbjaTA0DAwMDgx2RkAEywF8CH4mzmEEEOrZukMzssRHprlRUgh12NCs7E1jRtg2ZgiRnZQsSH84VajtH1bGIrwR+YaaEgYGBgcGOTsg63oIkf50J9CbtNDaqFLTKYjVXInXGoAmDOOr/TMPXsAm4AfgxRvrSwMDAwGAnJWQfuyAiG2cCJwIzx/n91gC3I0ImNyFdmgwMDAwMDHZ6QtbRBxwDHIcIjBwBzAOyLZ5vFFgJPAI8DNwL/AkYM1+7gYGBgYEh5MaRAeYD+wFz1PNdkPrmvHp4QFGR71ZlAa8CVgNPqf8NDAwMDAymPP7/APBGgCn1W6y6AAAAAElFTkSuQmCC" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
          $("#imaContainer").append(arati);
        } catch (e) {}
      } else {}
    }
  }
}
function ShowAds2() {
  if (comAPI.ad.getShowable()) {
    var tom = {callback: function () {}};
    comAPI.ad.show(tom, true);
    window.sdk.onPauseGame("Pause game requested from debugger", "warning");
    try {
      var kyeden = '<div id="gmLoading" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABdCAYAAAB0HBXwAAAACXBIWXMAAAsTAAALEwEAmpwYAAA532lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMC0wOC0yNlQxNzozMjoxNSswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjAtMDgtMjZUMTc6MzI6MTUrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmU0ZjFkYmJmLTMzYjAtZDY0Yy04ZTljLWVjYTkwNzhiMDZkMzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplNGYxZGJiZi0zM2IwLWQ2NGMtOGU5Yy1lY2E5MDc4YjA2ZDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDgtMjZUMTc6MzE6MzUrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjU4MjVkYTMtMGVjNC0wYjQ5LWIzN2UtZjdjYTU3M2ZmMDhlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTA4LTI2VDE3OjMyOjE1KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQ4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/W7MMgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAA160lEQVR42uydebwkVXn+v1XV211n7izMDAPMAAPDJvumgAiKQJBFJS4oYGIScQXjLxqiRhQ1kcQ1YoyJCy4oQiKgiSCbIKDsMKzDNgMzzL7P3fp2d9Xvj/dU16nqqur1Lsyc5/Ppmb5dS1efPl3PebfntTzPY4piMbAQOAiYC8wHZgIDQAHIqf3KwCCwBVgPrAJeAZ4AXgaex8DAwMDAYIojM4Wu5WjgBOC1wGuAfTt03qeBR4A/AXcBj5mv3cDAwMBgqsGaZAv5ZOAc4NQOEnA9PAH8FrgeuNdMAQMDAwODnZWQdwcuAN6FuKMnEw8BPwWuAjab6WBgYGBgsDMQ8r7AR4G/QmLALcOtQLkkj8oYuC5gAR54LrgeWBZks5DJQa4LbCf1lOuB7wH/Aaww08LAwMDAYEck5PnApcCHWyZgF8ZGoDgExSJUilAqQakI5VGouLKPVxGyrlSEnB0H7Aw4GcjkobsP+mdBzzR5LQajwNeA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" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
      $("#imaContainer").append(kyeden);
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
  var sweden = $.now();
  var syllas = '<div id="promo" style="display:none;z-index: 1030; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;"><div class="promo-container" style="background-color: black;"> <div class="promo-display-container"> <div id="preroll_banner_container"> <div id="preroll_banner" class="banner"> <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script><div id="preroll_banner_ad_' + sweden + '"> <script>window.googletag=window.googletag ||{cmd: []}; googletag.cmd.push(function(){googletag.defineSlot("/21739493398/AdExchange-300x250-GameMonetize", [[300, 250], [250, 250], [300, 600], [200, 200], [300, 75], [120, 240], [180, 150], [240, 133], [300, 100]], "preroll_banner_ad_' + sweden + '").addService(googletag.pubads()); googletag.enableServices(); googletag.display("preroll_banner_ad_' + sweden + '");}); </script> </div></div></div></div><div class="promo-controls-container" style="visibility: visible;"> <button id="promo-button">You can skip this in <span id="preroll_time_5">5</span> secs</button> <span id="promo-message">Ad will be closed in <span id="preroll_full_time">31</span> secs</span> </div></div></div>';
  $("#imaContainer").append(syllas);
  $("#imaContainer").css("visibility", "visible");
  $("#promo").show();
  var timmey = setInterval(function () {
    if (parseInt($("#preroll_full_time").html()) < 1) {
      $("#imaContainer").css("visibility", "hidden");
      $("#promo").remove();
      clearInterval(timmey);
    }
    ;
    $("#preroll_full_time").html(parseInt($("#preroll_full_time").html()) - 1);
    if (parseInt($("#preroll_time_5").html()) < 1) {
      $("#promo-message").show();
      $("#promo-button").html("SKIP").on("click", function () {
        clearInterval(timmey);
        $("#imaContainer").css("visibility", "hidden");
        $("#promo").remove();
      });
    } else {
      $("#preroll_time_5").html(parseInt($("#preroll_time_5").html()) - 1);
    }
  }, 1e3);
}
