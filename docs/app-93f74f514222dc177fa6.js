/*! For license information please see app-93f74f514222dc177fa6.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '+ZDr': function (t, e, n) {
      const r = n('TqRt');
      (e.__esModule = !0),
        (e.withPrefix = h),
        (e.withAssetPrefix = function (t) {
          return h(t, v());
        }),
        (e.navigateTo = e.replace = e.push = e.navigate = e.default = void 0);
      const o = r(n('8OQS'));
      let a = r(n('PJYZ'));
      const i = r(n('VbXa'));
      const u = r(n('pVnL'));
      let c = r(n('17x9'));
      const s = r(n('q1tI'));
      let l = n('YwZP');
      const p = n('LYrO');
      const f = n('cu4x');
      e.parsePath = f.parsePath;
      const d = function (t) {
        return t == null ? void 0 : t.startsWith('/');
      };
      function h(t, e) {
        let n;
        let r;
        if ((void 0 === e && (e = m()), !g(t))) return t;
        if (t.startsWith('./') || t.startsWith('../')) return t;
        const o =
          (n = (r = e) !== null && void 0 !== r ? r : v()) !== null && void 0 !== n ? n : '/';
        return `${(o == null ? void 0 : o.endsWith('/')) ? o.slice(0, -1) : o}${
          t.startsWith('/') ? t : `/${  t}`
        }`;
      }
      var v = function () {
        return '';
      };
      var m = function () {
        return '';
      };
      var g = function (t) {
        return t && !t.startsWith('http://') && !t.startsWith('https://') && !t.startsWith('//');
      };
      const y = function (t, e) {
        return typeof t === 'number'
          ? t
          : g(t)
          ? d(t)
            ? h(t)
            : (function (t, e) {
                return d(t) ? t : (0, p.resolve)(t, e);
              })(t, e)
          : t;
      };
      let b = {
        activeClassName: c.default.string,
        activeStyle: c.default.object,
        partiallyActive: c.default.bool,
      };
      function w(t) {
        return s.default.createElement(l.Location, null, function (e) {
          const n = e.location;
          return s.default.createElement(P, (0, u.default)({}, t, { _location: n }));
        });
      }
      var P = (function (t) {
        function e(e) {
          let n;
          (n = t.call(this, e) || this).defaultGetProps = function (t) {
            const e = t.isPartiallyCurrent;
            let r = t.isCurrent;
            return (n.props.partiallyActive ? e : r)
              ? {
                  className: [n.props.className, n.props.activeClassName].filter(Boolean).join(' '),
                  style: (0, u.default)({}, n.props.style, n.props.activeStyle),
                }
              : null;
          };
          let r = !1;
          return (
            typeof window !== 'undefined' && window.IntersectionObserver && (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          );
        }
        (0, i.default)(e, t);
        const n = e.prototype;
        return (
          (n._prefetch = function () {
            let t = window.location.pathname;
            this.props._location &&
              this.props._location.pathname &&
              (t = this.props._location.pathname);
            const e = y(this.props.to, t);
            let n = (0, f.parsePath)(e).pathname;
            t !== n && ___loader.enqueue(n);
          }),
          (n.componentDidUpdate = function (t, e) {
            this.props.to === t.to || this.state.IOSupported || this._prefetch();
          }),
          (n.componentDidMount = function () {
            this.state.IOSupported || this._prefetch();
          }),
          (n.componentWillUnmount = function () {
            if (this.io) {
              const t = this.io;
              let e = t.instance;
              const n = t.el;
              e.unobserve(n), e.disconnect();
            }
          }),
          (n.handleRef = function (t) {
            let e;
            let n;
            let r;
            let o = this;
            this.props.innerRef && this.props.innerRef.hasOwnProperty('current')
              ? (this.props.innerRef.current = t)
              : this.props.innerRef && this.props.innerRef(t),
              this.state.IOSupported &&
                t &&
                (this.io =
                  ((e = t),
                  (n = function () {
                    o._prefetch();
                  }),
                  (r = new window.IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                      e === t.target &&
                        (t.isIntersecting || t.intersectionRatio > 0) &&
                        (r.unobserve(e), r.disconnect(), n());
                    });
                  })).observe(e),
                  { instance: r, el: e }));
          }),
          (n.render = function () {
            const t = this;
            let e = this.props;
            let n = e.to;
            const r = e.getProps;
            let a = void 0 === r ? this.defaultGetProps : r;
            let i = e.onClick;
            const c = e.onMouseEnter;
            let p = (e.activeClassName, e.activeStyle, e.innerRef, e.partiallyActive, e.state);
            let d = e.replace;
            const h = e._location;
            let v = (0, o.default)(e, [
              'to',
              'getProps',
              'onClick',
              'onMouseEnter',
              'activeClassName',
              'activeStyle',
              'innerRef',
              'partiallyActive',
              'state',
              'replace',
              '_location',
            ]);
            const m = y(n, h.pathname);
            return g(m)
              ? s.default.createElement(
                  l.Link,
                  (0, u.default)(
                    {
                      to: m,
                      state: p,
                      getProps: a,
                      innerRef: this.handleRef,
                      onMouseEnter(t) {
                        c && c(t), ___loader.hovering((0, f.parsePath)(m).pathname);
                      },
                      onClick(e) {
                        if (
                          (i && i(e),
                          !(
                            e.button !== 0 ||
                            t.props.target ||
                            e.defaultPrevented ||
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          ))
                        ) {
                          e.preventDefault();
                          let n = d;
                          var r = encodeURI(m) === h.pathname;
                          typeof d !== 'boolean' && r && (n = !0),
                            window.___navigate(m, { state: p, replace: n });
                        }
                        return !0;
                      },
                    },
                    v
                  )
                )
              : s.default.createElement('a', (0, u.default)({ href: m }, v));
          }),
          e
        );
      })(s.default.Component);
      P.propTypes = (0, u.default)({}, b, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
        state: c.default.object,
      });
      const R = function (t, e, n) {
        return console.warn(
          `The "${t}" method is now deprecated and will be removed in Gatsby v${n}. Please use "${e}" instead.`
        );
      };
      const _ = s.default.forwardRef(function (t, e) {
        return s.default.createElement(w, (0, u.default)({ innerRef: e }, t));
      });
      e.default = _;
      e.navigate = function (t, e) {
        window.___navigate(y(t, window.location.pathname), e);
      };
      const O = function (t) {
        R('push', 'navigate', 3), window.___push(y(t, window.location.pathname));
      };
      e.push = O;
      e.replace = function (t) {
        R('replace', 'navigate', 3), window.___replace(y(t, window.location.pathname));
      };
      e.navigateTo = function (t) {
        return R('navigateTo', 'navigate', 3), O(t);
      };
    },
    '/hTd': function (t, e, n) {
      (e.__esModule = !0), (e.SessionStorage = void 0);
      const r = (function () {
        function t() {}
        const e = t.prototype;
        return (
          (e.read = function (t, e) {
            const n = this.getStateKey(t, e);
            try {
              const r = window.sessionStorage.getItem(n);
              return r ? JSON.parse(r) : 0;
            } catch (o) {
              return window &&
                window.___GATSBY_REACT_ROUTER_SCROLL &&
                window.___GATSBY_REACT_ROUTER_SCROLL[n]
                ? window.___GATSBY_REACT_ROUTER_SCROLL[n]
                : 0;
            }
          }),
          (e.save = function (t, e, n) {
            const r = this.getStateKey(t, e);
            let o = JSON.stringify(n);
            try {
              window.sessionStorage.setItem(r, o);
            } catch (a) {
              (window && window.___GATSBY_REACT_ROUTER_SCROLL) ||
                (window.___GATSBY_REACT_ROUTER_SCROLL = {}),
                (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(o));
            }
          }),
          (e.getStateKey = function (t, e) {
            const n = `@@scroll|${t.pathname}`;
            return e == null ? n : `${n}|${e}`;
          }),
          t
        );
      })();
      e.SessionStorage = r;
    },
    '284h': function (t, e, n) {
      const r = n('cDf5').default;
      function o() {
        if (typeof WeakMap !== 'function') return null;
        const t = new WeakMap();
        return (
          (o = function () {
            return t;
          }),
          t
        );
      }
      (t.exports = function (t) {
        if (t && t.__esModule) return t;
        if (t === null || (r(t) !== 'object' && typeof t !== 'function')) return { default: t };
        const e = o();
        if (e && e.has(t)) return e.get(t);
        const n = {};
        const a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (const i in t)
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            const u = a ? Object.getOwnPropertyDescriptor(t, i) : null;
            u && (u.get || u.set) ? Object.defineProperty(n, i, u) : (n[i] = t[i]);
          }
        return (n.default = t), e && e.set(t, n), n;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    '30RF': function (t, e, n) {
      n.d(e, 'd', function () {
        return l;
      }),
        n.d(e, 'a', function () {
          return p;
        }),
        n.d(e, 'c', function () {
          return f;
        }),
        n.d(e, 'b', function () {
          return d;
        });
      const r = n('LYrO');
      let o = n('cSJ8');
      const a = function (t) {
        return void 0 === t
          ? t
          : t === '/'
          ? '/'
          : t.charAt(t.length - 1) === '/'
          ? t.slice(0, -1)
          : t;
      };
      const i = new Map();
      let u = [];
      let c = function (t) {
        const e = decodeURIComponent(t);
        return Object(o.a)(e, '').split('#')[0].split('?')[0];
      };
      function s(t) {
        return t.startsWith('/') || t.startsWith('https://') || t.startsWith('http://')
          ? t
          : new URL(t, window.location.href + (window.location.href.endsWith('/') ? '' : '/'))
              .pathname;
      }
      var l = function (t) {
        u = t;
      };
      var p = function (t) {
        let e = h(t);
        var n = u.map(function (t) {
          var e = t.path;
          return { path: t.matchPath, originalPath: e };
        });
        var o = Object(r.pick)(n, e);
        return o ? a(o.route.originalPath) : null;
      };
      var f = function (t) {
        let e = h(t);
        var n = u.map(function (t) {
          var e = t.path;
          return { path: t.matchPath, originalPath: e };
        });
        let o = Object(r.pick)(n, e);
        return o ? o.params : {};
      };
      var d = function (t) {
        let e = c(s(t));
        if (i.has(e)) return i.get(e);
        let n = p(e);
        return n || (n = h(t)), i.set(e, n), n;
      };
      var h = function (t) {
        let e = c(s(t));
        return e === '/index.html' && (e = '/'), (e = a(e));
      };
    },
    '3uz+': function (t, e, n) {
      (e.__esModule = !0),
        (e.useScrollRestoration = function (t) {
          const e = (0, a.useLocation)();
          let n = (0, o.useContext)(r.ScrollContext);
          const i = (0, o.useRef)();
          return (
            (0, o.useLayoutEffect)(function () {
              if (i.current) {
                const r = n.read(e, t);
                i.current.scrollTo(0, r || 0);
              }
            }, []),
            {
              ref: i,
              onScroll() {
                i.current && n.save(e, t, i.current.scrollTop);
              },
            }
          );
        });
      var r = n('Enzk');
      var o = n('q1tI');
      var a = n('YwZP');
    },
    '5yr3': function (t, e, n) {
      const r = (function (t) {
        return (
          (t = t || Object.create(null)),
          {
            on(e, n) {
              (t[e] || (t[e] = [])).push(n);
            },
            off(e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1);
            },
            emit(e, n) {
              (t[e] || []).slice().map(function (t) {
                t(n);
              }),
                (t['*'] || []).slice().map(function (t) {
                  t(e, n);
                });
            },
          }
        );
      })();
      e.a = r;
    },
    '7hJ6': function (t, e, n) {
      (e.__esModule = !0), (e.useScrollRestoration = e.ScrollContainer = e.ScrollContext = void 0);
      const r = n('Enzk');
      e.ScrollContext = r.ScrollHandler;
      const o = n('hd9s');
      e.ScrollContainer = o.ScrollContainer;
      const a = n('3uz+');
      e.useScrollRestoration = a.useScrollRestoration;
    },
    '8OQS': function (t, e) {
      (t.exports = function (t, e) {
        if (t == null) return {};
        let n;
        let r;
        const o = {};
        let a = Object.keys(t);
        for (r = 0; r < a.length; r++) (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    '94VI': function (t, e) {
      e.polyfill = function (t) {
        return t;
      };
    },
    '9Xx/': function (t, e, n) {
      n.d(e, 'c', function () {
        return c;
      }),
        n.d(e, 'd', function () {
          return s;
        }),
        n.d(e, 'a', function () {
          return a;
        }),
        n.d(e, 'b', function () {
          return i;
        });
      const r =
        Object.assign ||
        function (t) {
          for (let e = 1; e < arguments.length; e++) {
            const n = arguments[e];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
      let o = function (t) {
        const e = t.location;
        var n = e.search;
        let r = e.hash;
        var o = e.href;
        var a = e.origin;
        let i = e.protocol;
        var c = e.host;
        let s = e.hostname;
        var l = e.port;
        let p = t.location.pathname;
        !p && o && u && (p = new URL(o).pathname);
        return {
          pathname: encodeURI(decodeURI(p)),
          search: n,
          hash: r,
          href: o,
          origin: a,
          protocol: i,
          host: c,
          hostname: s,
          port: l,
          state: t.history.state,
          key: (t.history.state && t.history.state.key) || 'initial',
        };
      };
      var a = function (t, e) {
        let n = [];
        var a = o(t);
        var i = !1;
        let u = function () {};
        return {
          get location() {
            return a;
          },
          get transitioning() {
            return i;
          },
          _onTransitionComplete () {
            (i = !1), u();
          },
          listen (e) {
            n.push(e);
            let r = function () {
              (a = o(t)), e({ location: a, action: 'POP' });
            };
            return (
              t.addEventListener('popstate', r),
              function () {
                t.removeEventListener('popstate', r),
                  (n = n.filter(function (t) {
                    return t !== e;
                  }));
              }
            );
          },
          navigate (e) {
            let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                var s = c.state;
                var l = c.replace;
                var p = void 0 !== l && l;
            if (typeof e == 'number') t.history.go(e);
            else {
              s = { ...s, key: Date.now() + ''};
              try {
                i || p ? t.history.replaceState(s, null, e) : t.history.pushState(s, null, e);
              } catch (d) {
                t.location[p ? 'replace' : 'assign'](e);
              }
            }
            (a = o(t)), (i = !0);
            let f = new Promise(function (t) {
              return (u = t);
            });
            return (
              n.forEach(function (t) {
                return t({ location: a, action: 'PUSH' });
              }),
              f
            );
          },
        };
      };
      var i = function () {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/';
        var e = t.indexOf('?');
        var n = { pathname: e > -1 ? t.substr(0, e) : t, search: e > -1 ? t.substr(e) : '' };
        var r = 0;
        var o = [n];
        let a = [null];
        return {
          get location() {
            return o[r];
          },
          addEventListener (t, e) {},
          removeEventListener(t, e) {},
          history: {
            get entries() {
              return o;
            },
            get index() {
              return r;
            },
            get state() {
              return a[r];
            },
            pushState (t, e, n) {
              let i = n.split('?');
                  var u = i[0];
                  var c = i[1];
                  var s = void 0 === c ? '' : c;
              r++, o.push({ pathname: u, search: s.length ? `?${  s}` : s }), a.push(t);
            },
            replaceState (t, e, n) {
              var i = n.split('?');
                  var u = i[0];
                  var c = i[1];
                  var s = void 0 === c ? '' : c;
              (o[r] = { pathname: u, search: s }), (a[r] = t);
            },
            go(t) {
              let e = r + t;
              e < 0 || e > a.length - 1 || (r = e);
            },
          },
        };
      };
      var u = !(typeof window === 'undefined' || !window.document || !window.document.createElement);
      var c = a(u ? window : i());
      var s = c.navigate;
    },
    '9hXx': function (t, e, n) {
      (e.__esModule = !0), (e.default = void 0);
      e.default = function (t, e) {
        if (!Array.isArray(e)) return 'manifest.webmanifest';
        const n = e.find(function (e) {
          return t.startsWith(e.start_url);
        });
        return n ? `manifest_${n.lang}.webmanifest` : 'manifest.webmanifest';
      };
    },
    Enzk(t, e, n) {
      let r = n('284h');
      let o = n('TqRt');
      (e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0);
      const a = o(n('PJYZ'));
      var i = o(n('VbXa'));
      let u = r(n('q1tI'));
      var c = o(n('17x9'));
      var s = n('/hTd');
      let l = u.createContext(new s.SessionStorage());
      (e.ScrollContext = l), (l.displayName = 'GatsbyScrollContext');
      const p = (function (t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((e =
              t.call.apply(t, [this].concat(r)) || this)._stateStorage = new s.SessionStorage()),
            (e.scrollListener = function () {
              const t = e.props.location.key;
              t && e._stateStorage.save(e.props.location, t, window.scrollY);
            }),
            (e.windowScroll = function (t, n) {
              e.shouldUpdateScroll(n, e.props) && window.scrollTo(0, t);
            }),
            (e.scrollToHash = function (t, n) {
              const r = document.getElementById(t.substring(1));
              r && e.shouldUpdateScroll(n, e.props) && r.scrollIntoView();
            }),
            (e.shouldUpdateScroll = function (t, n) {
              const r = e.props.shouldUpdateScroll;
              return !r || r.call((0, a.default)(e), t, n);
            }),
            e
          );
        }
        (0, i.default)(e, t);
        const n = e.prototype;
        return (
          (n.componentDidMount = function () {
            let t;
            window.addEventListener('scroll', this.scrollListener);
            const e = this.props.location;
            var n = e.key;
            let r = e.hash;
            n && (t = this._stateStorage.read(this.props.location, n)),
              t ? this.windowScroll(t, void 0) : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener('scroll', this.scrollListener);
          }),
          (n.componentDidUpdate = function (t) {
            let e;
            var n = this.props.location;
            var r = n.hash;
            let o = n.key;
            o && (e = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), t) : this.windowScroll(e, t);
          }),
          (n.render = function () {
            return u.createElement(l.Provider, { value: this._stateStorage }, this.props.children);
          }),
          e
        );
      })(u.Component);
      (e.ScrollHandler = p),
        (p.propTypes = {
          shouldUpdateScroll: c.default.func,
          children: c.default.element.isRequired,
          location: c.default.object.isRequired,
        });
    },
    IOVJ(t, e, n) {
      let r = n('dI71');
      var o = n('q1tI');
      let a = n.n(o);
      var i = n('emEt');
      var u = n('xtsi');
      let c = n('30RF');
      var s = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(e, t),
          (e.prototype.render = function () {
            let t = {
                ...this.props,
                params: {
                    
                    ...Object(c.c)(this.props.location.pathname),
                    ...this.props.pageResources.json.pageContext.__params
                  },
                pathContext: this.props.pageContext,
              },
              e =
                Object(u.apiRunner)('replaceComponentRenderer', {
                  props: this.props,
                  loader: i.publicLoader,
                })[0] ||
                Object(o.createElement)(this.props.pageResources.component, {
                  ...t,
                  key: this.props.path || this.props.pageResources.page.path,
                });
            return Object(u.apiRunner)(
              'wrapPageElement',
              { element: e, props: t },
              e,
              function (e) {
                return { element: e.result, props: t };
              }
            ).pop();
          }),
          e
        );
      })(a.a.Component);
      e.a = s;
    },
    JeVI(t) {
      t.exports = JSON.parse('[]');
    },
    KQm4(t, e, n) {
      function r(t, e) {
        (e == null || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function o(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return r(t);
          })(t) ||
          (function (t) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if (typeof t === 'string') return r(t, e);
              let n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                n === 'Object' && t.constructor && (n = t.constructor.name),
                n === 'Map' || n === 'Set'
                  ? Array.from(t)
                  : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      n.d(e, 'a', function () {
        return o;
      });
    },
    LYrO(t, e, n) {
      n.r(e),
        n.d(e, 'startsWith', function () {
          return a;
        }),
        n.d(e, 'pick', function () {
          return i;
        }),
        n.d(e, 'match', function () {
          return u;
        }),
        n.d(e, 'resolve', function () {
          return c;
        }),
        n.d(e, 'insertParams', function () {
          return s;
        }),
        n.d(e, 'validateRedirect', function () {
          return l;
        }),
        n.d(e, 'shallowCompare', function () {
          return b;
        });
      let r = n('QLaP');
      var o = n.n(r);
      var a = function (t, e) {
        return t.substr(0, e.length) === e;
      };
      var i = function (t, e) {
        for (
          var n = void 0,
            r = void 0,
            a = e.split('?')[0],
            i = m(a),
            u = i[0] === '',
            c = v(t),
            s = 0,
            l = c.length;
          s < l;
          s++
        ) {
          var f = !1;
              var h = c[s].route;
          if (h.default) r = { route: h, params: {}, uri: e };
          else {
            for (var g = m(h.path), b = {}, w = Math.max(i.length, g.length), P = 0; P < w; P++) {
              var R = g[P];
                  var _ = i[P];
              if (d(R)) {
                b[R.slice(1) || '*'] = i.slice(P).map(decodeURIComponent).join('/');
                break;
              }
              if (void 0 === _) {
                f = !0;
                break;
              }
              var O = p.exec(R);
              if (O && !u) {
                -1 === y.indexOf(O[1]) || o()(!1);
                var S = decodeURIComponent(_);
                b[O[1]] = S;
              } else if (R !== _) {
                f = !0;
                break;
              }
            }
            if (!f) {
              n = { route: h, params: b, uri: `/${  i.slice(0, P).join('/')}` };
              break;
            }
          }
        }
        return n || r || null;
      };
      var u = function (t, e) {
        return i([{ path: t }], e);
      };
      var c = function (t, e) {
        if (a(t, '/')) return t;
        var n = t.split('?');
            var r = n[0];
            var o = n[1];
            var i = e.split('?')[0];
            var u = m(r);
            var c = m(i);
        if (u[0] === '') return g(i, o);
        if (!a(u[0], '.')) {
          let s = c.concat(u).join('/');
          return g((i === '/' ? '' : '/') + s, o);
        }
        for (var l = c.concat(u), p = [], f = 0, d = l.length; f < d; f++) {
          var h = l[f];
          h === '..' ? p.pop() : h !== '.' && p.push(h);
        }
        return g(`/${  p.join('/')}`, o);
      };
      var s = function (t, e) {
        var n = t.split('?');
            var r = n[0];
            var o = n[1];
            var a = void 0 === o ? '' : o;
            var i =
              '/' +
              m(r)
                .map(function (t) {
                  var n = p.exec(t);
                  return n ? e[n[1]] : t;
                })
                .join('/');
            var u = e.location;
            var c = (u = void 0 === u ? {} : u).search;
            var s = (void 0 === c ? '' : c).split('?')[1] || '';
        return (i = g(i, a, s));
      };
      var l = function (t, e) {
        let n = function (t) {
          return f(t);
        };
        return m(t).filter(n).sort().join('/') === m(e).filter(n).sort().join('/');
      };
      var p = /^:(.+)/;
      var f = function (t) {
        return p.test(t);
      };
      var d = function (t) {
        return t && t[0] === '*';
      };
      var h = function (t, e) {
        return {
          route: t,
          score: t.default
            ? 0
            : m(t.path).reduce(function (t, e) {
                return (
                  (t += 4),
                  !(function (t) {
                    return t === '';
                  })(e)
                    ? f(e)
                      ? (t += 2)
                      : d(e)
                      ? (t -= 5)
                      : (t += 3)
                    : (t += 1),
                  t
                );
              }, 0),
          index: e,
        };
      };
      var v = function (t) {
        return t.map(h).sort(function (t, e) {
          return t.score < e.score ? 1 : t.score > e.score ? -1 : t.index - e.index;
        });
      };
      var m = function (t) {
        return t.replace(/(^\/+|\/+$)/g, '').split('/');
      };
      var g = function (t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          n[r - 1] = arguments[r];
        return (
          t +
          ((n = n.filter(function (t) {
            return t && t.length > 0;
          })) && n.length > 0
            ? `?${  n.join('&')}`
            : '')
        );
      };
      var y = ['uri', 'path'];
      var b = function (t, e) {
        const n = Object.keys(t);
        return (
          n.length === Object.keys(e).length &&
          n.every(function (n) {
            return e.hasOwnProperty(n) && t[n] === e[n];
          })
        );
      };
    },
    LeKB(t, e, n) {
      t.exports = [
        { plugin: n('e/UW'), options: { plugins: [] } },
        {
          plugin: n('npZl'),
          options: {
            plugins: [],
            name: 'Gatsby Simplefolio',
            short_name: 'Simplefolio',
            start_url: '/',
            background_color: '#fff',
            theme_color: '#02aab0',
            display: 'standalone',
            icon: 'src/images/favicon.png',
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: 'query',
            crossOrigin: 'anonymous',
            include_favicon: !0,
            cacheDigest: 'b2b835410d983c8b47ca67b3cc503e0f',
          },
        },
      ];
    },
    MMVs(t, e, n) {
      t.exports = (function () {
        let t = !1;
        navigator.appVersion.indexOf('MSIE 10') !== -1 && (t = !0);
        let e;
        var n = [];
        let r = typeof document == 'object' && document;
        let o = t ? r.documentElement.doScroll('left') : r.documentElement.doScroll;
        let a = r && (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        return (
          !a &&
            r &&
            r.addEventListener(
              'DOMContentLoaded',
              (e = function () {
                for (r.removeEventListener('DOMContentLoaded', e), a = 1; (e = n.shift()); ) e();
              })
            ),
          function (t) {
            a ? setTimeout(t, 0) : n.push(t);
          }
        );
      })();
    },
    NSX3(t, e, n) {
      n.r(e);
      const r = n('xtsi');
      window.location.protocol !== 'https:' && window.location.hostname !== 'localhost'
        ? console.error(
            'Service workers can only be used over HTTPS, or on localhost for development'
          )
        : 'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/sw.js')
            .then(function (t) {
              t.addEventListener('updatefound', function () {
                Object(r.apiRunner)('onServiceWorkerUpdateFound', { serviceWorker: t });
                const e = t.installing;
                console.log('installingWorker', e),
                  e.addEventListener('statechange', function () {
                    switch (e.state) {
                      case 'installed':
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            Object(r.apiRunner)('onServiceWorkerUpdateReady', { serviceWorker: t }),
                            window.___failedResources &&
                              (console.log('resources failed, SW updated - reloading'),
                              window.location.reload()))
                          : (console.log('Content is now available offline!'),
                            Object(r.apiRunner)('onServiceWorkerInstalled', { serviceWorker: t }));
                        break;
                      case 'redundant':
                        console.error('The installing service worker became redundant.'),
                          Object(r.apiRunner)('onServiceWorkerRedundant', { serviceWorker: t });
                        break;
                      case 'activated':
                        Object(r.apiRunner)('onServiceWorkerActive', { serviceWorker: t });
                    }
                  });
              });
            })
            .catch(function (t) {
              console.error('Error during service worker registration:', t);
            });
    },
    NsGk(t, e, n) {
      e.components = {
        'component---cache-caches-gatsby-plugin-offline-app-shell-js': function () {
          return n.e(4).then(n.t.bind(null, 'zXQ9', 7));
        },
        'component---src-pages-404-js': function () {
          return Promise.all([n.e(1), n.e(0), n.e(5)]).then(n.bind(null, 'w2l6'));
        },
        'component---src-pages-index-js': function () {
          return Promise.all([n.e(1), n.e(0), n.e(6)]).then(n.bind(null, 'RXBc'));
        },
      };
    },
    PJYZ(t, e) {
      (t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    QLaP(t, e, n) {
      t.exports = function (t, e, n, r, o, a, i, u) {
        if (!t) {
          let c;
          if (void 0 === e)
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            const s = [n, r, o, a, i, u];
            var l = 0;
            (c = new Error(
              e.replace(/%s/g, function () {
                return s[l++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    SksO(t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          n(e, r)
        );
      }
      (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    },
    TqRt(t, e) {
      (t.exports = function (t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    UxWs(t, e, n) {
      n.r(e);
      const r = n('dI71');
      var o = n('xtsi');
      let a = n('q1tI');
      var i = n.n(a);
      let u = n('i8i4');
      var c = n.n(u);
      let s = n('YwZP');
      var l = n('7hJ6');
      var p = n('MMVs');
      var f = n.n(p);
      var d = n('Wbzz');
      let h = n('emEt');
      var v = n('YLt+');
      let m = n('5yr3');
      var g = {
        id: 'gatsby-announcer',
        style: {
          position: 'absolute',
          top: 0,
          width: 1,
          height: 1,
          padding: 0,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        },
        'aria-live': 'assertive',
        'aria-atomic': 'true',
      };
      var y = n('9Xx/');
      let b = n('+ZDr');
      var w = new Map();
      let P = new Map();
      function R(t) {
        let e = w.get(t);
        return e || (e = P.get(t.toLowerCase())), e != null && (window.___replace(e.toPath), !0);
      }
      v.forEach(function (t) {
        t.ignoreCase ? P.set(t.fromPath, t) : w.set(t.fromPath, t);
      });
      const _ = function (t, e) {
        R(t.pathname) || Object(o.apiRunner)('onPreRouteUpdate', { location: t, prevLocation: e });
      };
      let O = function (t, e) {
        R(t.pathname) || Object(o.apiRunner)('onRouteUpdate', { location: t, prevLocation: e });
      };
      var S = function (t, e) {
        if ((void 0 === e && (e = {}), typeof t !== 'number')) {
          let n = Object(b.parsePath)(t).pathname;
          var r = w.get(n);
          if (
            (r || (r = P.get(n.toLowerCase())),
            r && ((t = r.toPath), (n = Object(b.parsePath)(t).pathname)),
            window.___swUpdated)
          )
            window.location = n;
          else {
            const a = setTimeout(function () {
              m.a.emit('onDelayedLoadPageResources', { pathname: n }),
                Object(o.apiRunner)('onRouteUpdateDelayed', { location: window.location });
            }, 1e3);
            h.default.loadPage(n).then(function (r) {
              if (!r || r.status === h.PageResourceStatus.Error)
                return (
                  window.history.replaceState({}, '', location.href),
                  (window.location = n),
                  void clearTimeout(a)
                );
              r &&
                r.page.webpackCompilationHash !== window.___webpackCompilationHash &&
                ('serviceWorker' in navigator &&
                  navigator.serviceWorker.controller !== null &&
                  navigator.serviceWorker.controller.state === 'activated' &&
                  navigator.serviceWorker.controller.postMessage({
                    gatsbyApi: 'clearPathResources',
                  }),
                (window.location = n)),
                Object(s.navigate)(t, e),
                clearTimeout(a);
            });
          }
        } else y.c.navigate(t);
      };
      function x(t, e) {
        const n = this;
        var r = e.location;
        let a = r.pathname;
        var i = r.hash;
        var u = Object(o.apiRunner)('shouldUpdateScroll', {
          prevRouterProps: t,
          pathname: a,
          routerProps: { location: r },
          getSavedScrollPosition(t) {
            return [0, n._stateStorage.read(t, t.key)];
          },
        });
        if (u.length > 0) return u[u.length - 1];
        if (t && t.location.pathname === a) return i ? decodeURI(i.slice(1)) : [0, 0];
        return !0;
      }
      const E = (function (t) {
        function e(e) {
          let n;
          return ((n = t.call(this, e) || this).announcementRef = i.a.createRef()), n;
        }
        Object(r.a)(e, t);
        let n = e.prototype;
        return (
          (n.componentDidUpdate = function (t, e) {
            const n = this;
            requestAnimationFrame(function () {
              let t = `new page at ${n.props.location.pathname}`;
              document.title && (t = document.title);
              let e = document.querySelectorAll('#gatsby-focus-wrapper h1');
              e && e.length && (t = e[0].textContent);
              let r = `Navigated to ${t}`;
              n.announcementRef.current &&
                n.announcementRef.current.innerText !== r &&
                (n.announcementRef.current.innerText = r);
            });
          }),
          (n.render = function () {
            return i.a.createElement('div', { ...g, ref: this.announcementRef });
          }),
          e
        );
      })(i.a.Component);
      var j = function (t, e) {
        var n; var r;
        return (
          t.href !== e.href ||
          (t == null || (n = t.state) === null || void 0 === n ? void 0 : n.key) !==
            (e == null || (r = e.state) === null || void 0 === r ? void 0 : r.key)
        );
      };
      var C = (function (t) {
        function e(e) {
          var n;
          return (n = t.call(this, e) || this), _(e.location, null), n;
        }
        Object(r.a)(e, t);
        var n = e.prototype;
        return (
          (n.componentDidMount = function () {
            O(this.props.location, null);
          }),
          (n.shouldComponentUpdate = function (t) {
            return !!j(t.location, this.props.location) && (_(this.props.location, t.location), !0);
          }),
          (n.componentDidUpdate = function (t) {
            j(t.location, this.props.location) && O(this.props.location, t.location);
          }),
          (n.render = function () {
            return i.a.createElement(
              i.a.Fragment,
              null,
              this.props.children,
              i.a.createElement(E, { location })
            );
          }),
          e
        );
      })(i.a.Component);
      var k = n('IOVJ');
      let L = n('NsGk');
      let D = n.n(L);
      function T(t, e) {
        for (const n in t) if (!(n in e)) return !0;
        for (const r in e) if (t[r] !== e[r]) return !0;
        return !1;
      }
      const M = (function (t) {
        function e(e) {
          let n;
          n = t.call(this) || this;
          let r = e.location;
          var o = e.pageResources;
          return (
            (n.state = {
              location: { ...r },
              pageResources: o || h.default.loadPageSync(r.pathname),
            }),
            n
          );
        }
        Object(r.a)(e, t),
          (e.getDerivedStateFromProps = function (t, e) {
            let n = t.location;
            return e.location.href !== n.href
              ? {
                  pageResources: h.default.loadPageSync(n.pathname),
                  location: { ...n },
                }
              : { location: { ...n } };
          });
        let n = e.prototype;
        return (
          (n.loadResources = function (t) {
            let e = this;
            h.default.loadPage(t).then(function (n) {
              n && n.status !== h.PageResourceStatus.Error
                ? e.setState({ location: { ...window.location }, pageResources: n })
                : (window.history.replaceState({}, '', location.href), (window.location = t));
            });
          }),
          (n.shouldComponentUpdate = function (t, e) {
            return e.pageResources
              ? this.state.pageResources !== e.pageResources ||
                  this.state.pageResources.component !== e.pageResources.component ||
                  this.state.pageResources.json !== e.pageResources.json ||
                  !(
                    this.state.location.key === e.location.key ||
                    !e.pageResources.page ||
                    (!e.pageResources.page.matchPath && !e.pageResources.page.path)
                  ) ||
                  (function (t, e, n) {
                    return T(t.props, e) || T(t.state, n);
                  })(this, t, e)
              : (this.loadResources(t.location.pathname), !1);
          }),
          (n.render = function () {
            return this.props.children(this.state);
          }),
          e
        );
      })(i.a.Component);
      var U = n('cSJ8');
      let A = n('JeVI');
      let W = new h.ProdLoader(D.a, A);
      Object(h.setLoader)(W),
        W.setApiRunner(o.apiRunner),
        (window.asyncRequires = D.a),
        (window.___emitter = m.a),
        (window.___loader = h.publicLoader),
        y.c.listen(function (t) {
          t.location.action = t.action;
        }),
        (window.___push = function (t) {
          return S(t, { replace: !1 });
        }),
        (window.___replace = function (t) {
          return S(t, { replace: !0 });
        }),
        (window.___navigate = function (t, e) {
          return S(t, e);
        }),
        R(window.location.pathname),
        Object(o.apiRunnerAsync)('onClientEntry').then(function () {
          Object(o.apiRunner)('registerServiceWorker').length > 0 && n('NSX3');
          const t = function (t) {
            return i.a.createElement(
              s.BaseContext.Provider,
              { value: { baseuri: '/', basepath: '/' } },
              i.a.createElement(k.a, t)
            );
          };
          var e = i.a.createContext({});
          var a = (function (t) {
            function n() {
              return t.apply(this, arguments) || this;
            }
            return (
              Object(r.a)(n, t),
              (n.prototype.render = function () {
                var t = this.props.children;
                return i.a.createElement(s.Location, null, function (n) {
                  var r = n.location;
                  return i.a.createElement(M, { location: r }, function (n) {
                    var r = n.pageResources;
                        var o = n.location;
                        var a = Object(h.getStaticQueryResults)();
                    return i.a.createElement(
                      d.StaticQueryContext.Provider,
                      { value: a },
                      i.a.createElement(e.Provider, { value: { pageResources: r, location: o } }, t)
                    );
                  });
                });
              }),
              n
            );
          })(i.a.Component);
          let u = (function (n) {
            function o() {
              return n.apply(this, arguments) || this;
            }
            return (
              Object(r.a)(o, n),
              (o.prototype.render = function () {
                var n = this;
                return i.a.createElement(e.Consumer, null, function (e) {
                  var r = e.pageResources;
                      var o = e.location;
                  return i.a.createElement(
                    C,
                    { location: o },
                    i.a.createElement(
                      l.ScrollContext,
                      { location: o, shouldUpdateScroll: x },
                      i.a.createElement(
                        s.Router,
                        { basepath: '', location: o, id: 'gatsby-focus-wrapper' },
                        i.a.createElement(
                          t,
                          Object.assign(
                            {
                              path:
                                '/404.html' === r.page.path
                                  ? Object(U.a)(o.pathname, '')
                                  : encodeURI(r.page.matchPath || r.page.path),
                            },
                            n.props,
                            { location: o, pageResources: r },
                            r.json
                          )
                        )
                      )
                    )
                  );
                });
              }),
              o
            );
          })(i.a.Component);
          let p = window;
          var v = p.pagePath;
          let m = p.location;
          v &&
            `${v}` !== m.pathname &&
            !(
              W.findMatchPath(Object(U.a)(m.pathname, '')) ||
              v === '/404.html' ||
              v.match(/^\/404\/?$/) ||
              v.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(s.navigate)(`${v}${m.search}${m.hash}`, { replace: !0 }),
            h.publicLoader.loadPage(m.pathname).then(function (t) {
              if (!t || t.status === h.PageResourceStatus.Error)
                throw new Error(`page resources for ${m.pathname} not found. Not rendering React`);
              window.___webpackCompilationHash = t.page.webpackCompilationHash;
              const e = Object(o.apiRunner)(
                'wrapRootElement',
                { element: i.a.createElement(u, null) },
                i.a.createElement(u, null),
                function (t) {
                  return { element: t.result };
                }
              ).pop();
              var n = function () {
                return i.a.createElement(a, null, e);
              };
              let r = Object(o.apiRunner)('replaceHydrateFunction', void 0, c.a.hydrate)[0];
              f()(function () {
                r(
                  i.a.createElement(n, null),
                  typeof window !== 'undefined' ? document.getElementById('___gatsby') : void 0,
                  function () {
                    Object(o.apiRunner)('onInitialClientRender');
                  }
                );
              });
            });
        });
    },
    VbXa(t, e, n) {
      const r = n('SksO');
      (t.exports = function (t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), r(t, e);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    Wbzz(t, e, n) {
      n.r(e),
        n.d(e, 'graphql', function () {
          return v;
        }),
        n.d(e, 'StaticQueryContext', function () {
          return p;
        }),
        n.d(e, 'StaticQuery', function () {
          return d;
        }),
        n.d(e, 'useStaticQuery', function () {
          return h;
        }),
        n.d(e, 'prefetchPathname', function () {
          return l;
        });
      const r = n('q1tI');
      var o = n.n(r);
      var a = n('+ZDr');
      let i = n.n(a);
      n.d(e, 'Link', function () {
        return i.a;
      }),
        n.d(e, 'withAssetPrefix', function () {
          return a.withAssetPrefix;
        }),
        n.d(e, 'withPrefix', function () {
          return a.withPrefix;
        }),
        n.d(e, 'parsePath', function () {
          return a.parsePath;
        }),
        n.d(e, 'navigate', function () {
          return a.navigate;
        }),
        n.d(e, 'push', function () {
          return a.push;
        }),
        n.d(e, 'replace', function () {
          return a.replace;
        }),
        n.d(e, 'navigateTo', function () {
          return a.navigateTo;
        });
      const u = n('7hJ6');
      n.d(e, 'useScrollRestoration', function () {
        return u.useScrollRestoration;
      });
      const c = n('lw3w');
      var s = n.n(c);
      n.d(e, 'PageRenderer', function () {
        return s.a;
      });
      var l = n('emEt').default.enqueue;
      var p = o.a.createContext({});
      function f(t) {
        const e = t.staticQueryData;
        let n = t.data;
        var r = t.query;
        let a = t.render;
        let i = n ? n.data : e[r] && e[r].data;
        return o.a.createElement(
          o.a.Fragment,
          null,
          i && a(i),
          !i && o.a.createElement('div', null, 'Loading (StaticQuery)')
        );
      }
      var d = function (t) {
        let e = t.data;
        let n = t.query;
        var r = t.render;
        let a = t.children;
        return o.a.createElement(p.Consumer, null, function (t) {
          return o.a.createElement(f, { data: e, query: n, render: r || a, staticQueryData: t });
        });
      };
      var h = function (t) {
        let e;
        o.a.useContext;
        const n = o.a.useContext(p);
        if (isNaN(Number(t)))
          throw new Error(
            `useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql\`${t}\`);\n`
          );
        if ((e = n[t]) !== null && void 0 !== e && e.data) return n[t].data;
        throw new Error(
          'The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues'
        );
      };
      function v() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        );
      }
    },
    'YLt+': function (t) {
      t.exports = JSON.parse('[]');
    },
    YVoz(t, e, n) {
      t.exports = Object.assign;
    },
    YwZP(t, e, n) {
      n.r(e),
        n.d(e, 'Link', function () {
          return D;
        }),
        n.d(e, 'Location', function () {
          return b;
        }),
        n.d(e, 'LocationProvider', function () {
          return w;
        }),
        n.d(e, 'Match', function () {
          return F;
        }),
        n.d(e, 'Redirect', function () {
          return W;
        }),
        n.d(e, 'Router', function () {
          return _;
        }),
        n.d(e, 'ServerLocation', function () {
          return P;
        }),
        n.d(e, 'isRedirect', function () {
          return M;
        }),
        n.d(e, 'redirectTo', function () {
          return U;
        }),
        n.d(e, 'useLocation', function () {
          return q;
        }),
        n.d(e, 'useNavigate', function () {
          return I;
        }),
        n.d(e, 'useParams', function () {
          return N;
        }),
        n.d(e, 'useMatch', function () {
          return J;
        }),
        n.d(e, 'BaseContext', function () {
          return R;
        });
      const r = n('q1tI');
      var o = n.n(r);
      let a = (n('17x9'), n('QLaP'));
      var i = n.n(a);
      var u = n('nqlD');
      var c = n.n(u);
      var s = n('94VI');
      let l = n('LYrO');
      n.d(e, 'matchPath', function () {
        return l.match;
      });
      const p = n('9Xx/');
      n.d(e, 'createHistory', function () {
        return p.a;
      }),
        n.d(e, 'createMemorySource', function () {
          return p.b;
        }),
        n.d(e, 'navigate', function () {
          return p.d;
        }),
        n.d(e, 'globalHistory', function () {
          return p.c;
        });
      const f =
        Object.assign ||
        function (t) {
          for (let e = 1; e < arguments.length; e++) {
            const n = arguments[e];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
      function d(t, e) {
        const n = {};
        for (const r in t)
          e.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      function h(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function v(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
      }
      function m(t, e) {
        if (typeof e !== 'function' && e !== null)
          throw new TypeError(
            `Super expression must either be null or a function, not ${typeof e}`
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
      }
      let g = function (t, e) {
        let n = c()(e);
        return (n.displayName = t), n;
      };
      let y = g('Location');
      var b = function (t) {
        var e = t.children;
        return o.a.createElement(y.Consumer, null, function (t) {
          return t ? e(t) : o.a.createElement(w, null, e);
        });
      };
      var w = (function (t) {
        function e() {
          let n;
          let r;
          h(this, e);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
          return (
            (n = r = v(this, t.call.apply(t, [this].concat(a)))),
            (r.state = { context: r.getContext(), refs: { unlisten: null } }),
            v(r, n)
          );
        }
        return (
          m(e, t),
          (e.prototype.getContext = function () {
            let t = this.props.history;
            return { navigate: t.navigate, location: t.location };
          }),
          (e.prototype.componentDidCatch = function (t, e) {
            if (!M(t)) throw t;
            (0, this.props.history.navigate)(t.uri, { replace: !0 });
          }),
          (e.prototype.componentDidUpdate = function (t, e) {
            e.context.location !== this.state.context.location &&
              this.props.history._onTransitionComplete();
          }),
          (e.prototype.componentDidMount = function () {
            let t = this;
            let e = this.state.refs;
            var n = this.props.history;
            n._onTransitionComplete(),
              (e.unlisten = n.listen(function () {
                Promise.resolve().then(function () {
                  requestAnimationFrame(function () {
                    t.unmounted ||
                      t.setState(function () {
                        return { context: t.getContext() };
                      });
                  });
                });
              }));
          }),
          (e.prototype.componentWillUnmount = function () {
            let t = this.state.refs;
            (this.unmounted = !0), t.unlisten();
          }),
          (e.prototype.render = function () {
            let t = this.state.context;
            var e = this.props.children;
            return o.a.createElement(
              y.Provider,
              { value: t },
              typeof e === 'function' ? e(t) : e || null
            );
          }),
          e
        );
      })(o.a.Component);
      w.defaultProps = { history: p.c };
      var P = function (t) {
        let e = t.url;
        var n = t.children;
        let r = e.indexOf('?');
        var a = void 0;
        var i = '';
        return (
          r > -1 ? ((a = e.substring(0, r)), (i = e.substring(r))) : (a = e),
          o.a.createElement(
            y.Provider,
            {
              value: {
                location: { pathname: a, search: i, hash: '' },
                navigate() {
                  throw new Error("You can't call navigate on the server.");
                },
              },
            },
            n
          )
        );
      };
      var R = g('Base', { baseuri: '/', basepath: '/' });
      var _ = function (t) {
        return o.a.createElement(R.Consumer, null, function (e) {
          return o.a.createElement(b, null, function (n) {
            return o.a.createElement(O, { ...e, ...n, ...t});
          });
        });
      };
      var O = (function (t) {
        function e() {
          return h(this, e), v(this, t.apply(this, arguments));
        }
        return (
          m(e, t),
          (e.prototype.render = function () {
            let t = this.props;
            let e = t.location;
            var n = t.navigate;
            var r = t.basepath;
            var a = t.primary;
            var i = t.children;
            let u = (t.baseuri, t.component);
            var c = void 0 === u ? 'div' : u;
            var s = d(t, [
              'location',
              'navigate',
              'basepath',
              'primary',
              'children',
              'baseuri',
              'component',
            ]);
            let p = o.a.Children.toArray(i).reduce(function (t, e) {
              var n = H(r)(e);
              return t.concat(n);
            }, []);
            let h = e.pathname;
            var v = Object(l.pick)(p, h);
            if (v) {
              let m = v.params;
              var g = v.uri;
              let y = v.route;
              var b = v.route.value;
              r = y.default ? r : y.path.replace(/\*$/, '');
              let w = {
                  ...m,
                  uri: g,
                  location: e,
                  navigate: function (t, e) {
                    return n(Object(l.resolve)(t, g), e);
                  };
                  let P = o.a.cloneElement(
                    b,
                    w,
                    b.props.children
                      ? o.a.createElement(_, { location: e, primary: a }, b.props.children)
                      : void 0
                  );
                  let O = a ? x : c;
                  let S = a ? ({uri: g, location: e, component: c, ...s}) : s;
              return o.a.createElement(
                R.Provider,
                { value: { baseuri: g, basepath: r } },
                o.a.createElement(O, S, P)
              );
            }
            return null;
          }),
          e
        );
      })(o.a.PureComponent);
      O.defaultProps = { primary: !0 };
      let S = g('Focus');
      var x = function (t) {
        var e = t.uri;
            var n = t.location;
            var r = t.component;
            var a = d(t, ['uri', 'location', 'component']);
        return o.a.createElement(S.Consumer, null, function (t) {
          return o.a.createElement(
            C,
            f({}, a, { component: r, requestFocus: t, uri: e, location: n })
          );
        });
      };
      let E = !0;
      var j = 0;
      var C = (function (t) {
        function e() {
          let n;
          let r;
          h(this, e);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
          return (
            (n = r = v(this, t.call.apply(t, [this].concat(a)))),
            (r.state = {}),
            (r.requestFocus = function (t) {
              !r.state.shouldFocus && t && t.focus();
            }),
            v(r, n)
          );
        }
        return (
          m(e, t),
          (e.getDerivedStateFromProps = function (t, e) {
            if (e.uri == null) return { shouldFocus: !0, ...t };
            let n = t.uri !== e.uri;
            let r = e.location.pathname !== t.location.pathname && t.location.pathname === t.uri;
            return { shouldFocus: n || r, ...t };
          }),
          (e.prototype.componentDidMount = function () {
            j++, this.focus();
          }),
          (e.prototype.componentWillUnmount = function () {
            --j === 0 && (E = !0);
          }),
          (e.prototype.componentDidUpdate = function (t, e) {
            t.location !== this.props.location && this.state.shouldFocus && this.focus();
          }),
          (e.prototype.focus = function () {
            const t = this.props.requestFocus;
            t
              ? t(this.node)
              : E
              ? (E = !1)
              : this.node && (this.node.contains(document.activeElement) || this.node.focus());
          }),
          (e.prototype.render = function () {
            let t = this;
            var e = this.props;
            let n = (e.children, e.style);
            var r = (e.requestFocus, e.component);
            var a = void 0 === r ? 'div' : r;
            var i =
              (e.uri,
              e.location,
              d(e, ['children', 'style', 'requestFocus', 'component', 'uri', 'location']));
            return o.a.createElement(
              a,
              {
                style: {outline: 'none', ...n},
                tabIndex: '-1',
                ref: function (e) {
                  return (t.node = e);
                },
                ...i,
              },
              o.a.createElement(S.Provider, { value: this.requestFocus }, this.props.children)
            );
          }),
          e
        );
      })(o.a.Component);
      Object(s.polyfill)(C);
      const k = function () {};
      let L = o.a.forwardRef;
      void 0 === L &&
        (L = function (t) {
          return t;
        });
      var D = L(function (t, e) {
        const n = t.innerRef;
        let r = d(t, ['innerRef']);
        return o.a.createElement(R.Consumer, null, function (t) {
          t.basepath;
          const a = t.baseuri;
          return o.a.createElement(b, null, function (t) {
            const i = t.location;
            var u = t.navigate;
            let c = r.to;
            var s = r.state;
            let p = r.replace;
            var h = r.getProps;
            let v = void 0 === h ? k : h;
            var m = d(r, ['to', 'state', 'replace', 'getProps']);
            var g = Object(l.resolve)(c, a);
            var y = encodeURI(g);
            var b = i.pathname === y;
            let w = Object(l.startsWith)(i.pathname, y);
            return o.a.createElement('a', {
              ref: e || n,
              'aria-current': b ? 'page' : void 0,
              ...m,
              ...v({ isCurrent: b, isPartiallyCurrent: w, href: g, location: i }),
              href: g,
              onClick (t) {
                    if ((m.onClick && m.onClick(t), G(t))) {
                      t.preventDefault();
                      var e = p;
                      if ('boolean' != typeof p && b) {
                        var n = f({}, i.state),
                          r = (n.key, d(n, ['key']));
                        e = Object(l.shallowCompare)(f({}, s), r);
                      }
                      u(g, { state: s, replace: e });
                    }
                  },
            });
          });
        });
      });
      function T(t) {
        this.uri = t;
      }
      D.displayName = 'Link';
      var M = function (t) {
        return t instanceof T;
      };
      var U = function (t) {
        throw new T(t);
      };
      var A = (function (t) {
        function e() {
          return h(this, e), v(this, t.apply(this, arguments));
        }
        return (
          m(e, t),
          (e.prototype.componentDidMount = function () {
            var t = this.props;
                var e = t.navigate;
                var n = t.to;
                var r = (t.from, t.replace);
                var o = void 0 === r || r;
                var a = t.state;
                var i = (t.noThrow, t.baseuri);
                var u = d(t, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']);
            Promise.resolve().then(function () {
              let t = Object(l.resolve)(n, i);
              e(Object(l.insertParams)(t, u), { replace: o, state: a });
            });
          }),
          (e.prototype.render = function () {
            var t = this.props;
                var e = (t.navigate, t.to);
                var n = (t.from, t.replace, t.state, t.noThrow);
                var r = t.baseuri;
                var o = d(t, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']);
                var a = Object(l.resolve)(e, r);
            return n || U(Object(l.insertParams)(a, o)), null;
          }),
          e
        );
      })(o.a.Component);
      var W = function (t) {
        return o.a.createElement(R.Consumer, null, function (e) {
          var n = e.baseuri;
          return o.a.createElement(b, null, function (e) {
            return o.a.createElement(A, { ...e, baseuri: n, ...t});
          });
        });
      };
      var F = function (t) {
        var e = t.path;
            var n = t.children;
        return o.a.createElement(R.Consumer, null, function (t) {
          let r = t.baseuri;
          return o.a.createElement(b, null, function (t) {
            var o = t.navigate;
                var a = t.location;
                var i = Object(l.resolve)(e, r);
                var u = Object(l.match)(i, a.pathname);
            return n({
              navigate: o,
              location: a,
              match: u ? ({ ...u.params, uri: u.uri, path: e}) : null,
            });
          });
        });
      };
      var q = function () {
        var t = Object(r.useContext)(y);
        if (!t)
          throw new Error(
            'useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
          );
        return t.location;
      };
      var I = function () {
        var t = Object(r.useContext)(y);
        if (!t)
          throw new Error(
            'useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
          );
        return t.navigate;
      };
      var N = function () {
        var t = Object(r.useContext)(R);
        if (!t)
          throw new Error(
            'useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
          );
        let e = q();
            var n = Object(l.match)(t.basepath, e.pathname);
        return n ? n.params : null;
      };
      var J = function (t) {
        if (!t)
          throw new Error(
            'useMatch(path: string) requires an argument of a string to match against'
          );
        let e = Object(r.useContext)(R);
        if (!e)
          throw new Error(
            'useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
          );
        let n = q();
            var o = Object(l.resolve)(t, e.baseuri);
            var a = Object(l.match)(o, n.pathname);
        return a ? ({ ...a.params, uri: a.uri, path: t}) : null;
      };
      let Q = function (t) {
        return t.replace(/(^\/+|\/+$)/g, '');
      };
      var H = function t(e) {
        return function (n) {
          if (!n) return null;
          if (n.type === o.a.Fragment && n.props.children)
            return o.a.Children.map(n.props.children, t(e));
          if (
            (n.props.path || n.props.default || n.type === W || i()(!1),
            n.type !== W || (n.props.from && n.props.to) || i()(!1),
            n.type !== W || Object(l.validateRedirect)(n.props.from, n.props.to) || i()(!1),
            n.props.default)
          )
            return { value: n, default: !0 };
          let r = n.type === W ? n.props.from : n.props.path;
              var a = r === '/' ? e : `${Q(e)  }/${  Q(r)}`;
          return { value: n, default: n.props.default, path: n.props.children ? `${Q(a)  }/*` : a };
        };
      };
      var G = function (t) {
        return (
          !t.defaultPrevented &&
          t.button === 0 &&
          !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
        );
      };
    },
    cDf5(t, e) {
      function n(e) {
        return (
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? ((t.exports = n = function (t) {
                return typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0))
            : ((t.exports = n = function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0)),
          n(e)
        );
      }
      (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    },
    cSJ8(t, e, n) {
      function r(t, e) {
        return (
          void 0 === e && (e = ''),
          e ? (t === e ? '/' : t.startsWith(`${e}/`) ? t.slice(e.length) : t) : t
        );
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    cu4x(t, e, n) {
      (e.__esModule = !0),
        (e.parsePath = function (t) {
          let e = t || '/';
          var n = '';
          let r = '';
          let o = e.indexOf('#');
          o !== -1 && ((r = e.substr(o)), (e = e.substr(0, o)));
          const a = e.indexOf('?');
          a !== -1 && ((n = e.substr(a)), (e = e.substr(0, a)));
          return { pathname: e, search: n === '?' ? '' : n, hash: r === '#' ? '' : r };
        });
    },
    dI71(t, e, n) {
      n.d(e, 'a', function () {
        return o;
      });
      const r = n('s4An');
      function o(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          Object(r.a)(t, e);
      }
    },
    'e/UW': function (t, e, n) {
      e.registerServiceWorker = function () {
        return !0;
      };
      const r = /^(stylesheet|preload)$/;
      let o = [];
      function a(t, e) {
        if (!window.___swUpdated && 'serviceWorker' in navigator) {
          const n = navigator.serviceWorker;
          if (n.controller === null) o.push(t);
          else {
            const r = e(t);
            n.controller.postMessage({ gatsbyApi: 'setPathResources', path: t, resources: r });
          }
        }
      }
      (e.onServiceWorkerActive = function (t) {
        const e = t.getResourceURLsForPathname;
        let n = t.serviceWorker;
        if (window.___swUpdated) n.active.postMessage({ gatsbyApi: 'clearPathResources' });
        else {
          const a = document.querySelectorAll(
            '\n    head > script[src],\n    head > link[href],\n    head > style[data-href]\n  '
          );
          const i = [].slice
            .call(a)
            .filter(function (t) {
              return t.tagName !== 'LINK' || r.test(t.getAttribute('rel'));
            })
            .map(function (t) {
              return t.src || t.href || t.getAttribute('data-href');
            });
          const u = [];
          o.forEach(function (t) {
            const r = e(t);
            u.push.apply(u, r),
              n.active.postMessage({ gatsbyApi: 'setPathResources', path: t, resources: r });
          }),
            [].concat(i, u).forEach(function (t) {
              const e = document.createElement('link');
              (e.rel = 'prefetch'),
                (e.href = t),
                (e.onload = e.remove),
                (e.onerror = e.remove),
                document.head.appendChild(e);
            });
        }
      }),
        (e.onRouteUpdate = function (t) {
          const e = t.location;
          let n = t.getResourceURLsForPathname;
          a(e.pathname.replace('', ''), n),
            'serviceWorker' in navigator &&
              navigator.serviceWorker.controller !== null &&
              navigator.serviceWorker.controller.postMessage({ gatsbyApi: 'enableOfflineShell' });
        }),
        (e.onPostPrefetchPathname = function (t) {
          a(t.pathname, t.getResourceURLsForPathname);
        });
    },
    emEt(t, e, n) {
      n.r(e),
        n.d(e, 'PageResourceStatus', function () {
          return l;
        }),
        n.d(e, 'BaseLoader', function () {
          return m;
        }),
        n.d(e, 'ProdLoader', function () {
          return y;
        }),
        n.d(e, 'setLoader', function () {
          return b;
        }),
        n.d(e, 'publicLoader', function () {
          return w;
        }),
        n.d(e, 'getStaticQueryResults', function () {
          return P;
        });
      let r = n('dI71');
      var o = n('KQm4');
      let a = (function (t) {
        if (typeof document == 'undefined') return !1;
        let e = document.createElement('link');
        try {
          if (e.relList && typeof e.relList.supports == 'function') return e.relList.supports(t);
        } catch (n) {
          return !1;
        }
        return !1;
      })('prefetch')
        ? function (t, e) {
            return new Promise(function (n, r) {
              if (typeof document != 'undefined') {
                let o = document.createElement('link');
                o.setAttribute('rel', 'prefetch'),
                  o.setAttribute('href', t),
                  Object.keys(e).forEach(function (t) {
                    o.setAttribute(t, e[t]);
                  }),
                  (o.onload = n),
                  (o.onerror = r),
                  (
                    document.getElementsByTagName('head')[0] ||
                    document.getElementsByName('script')[0].parentNode
                  ).appendChild(o);
              } else r();
            });
          }
        : function (t) {
            return new Promise(function (e, n) {
              let r = new XMLHttpRequest();
              r.open('GET', t, !0),
                (r.onload = function () {
                  200 === r.status ? e() : n();
                }),
                r.send(null);
            });
          };
      var i = {};
      let u = function (t, e) {
        return new Promise(function (n) {
          i[t]
            ? n()
            : a(t, e)
                .then(function () {
                  n(), (i[t] = !0);
                })
                .catch(function () {});
        });
      };
      var c = n('5yr3');
      let s = n('30RF');
      var l = { Error: 'error', Success: 'success' };
      var p = function (t) {
        return (t && t.default) || t;
      };
      let f = function (t) {
        let e;
        return `/page-data/${
          '/' === t
            ? 'index'
            : (e = (e = '/' === (e = t)[0] ? e.slice(1) : e).endsWith('/') ? e.slice(0, -1) : e)
        }/page-data.json`;
      };
      function d(t, e) {
        return (
          void 0 === e && (e = 'GET'),
          new Promise(function (n, r) {
            const o = new XMLHttpRequest();
            o.open(e, t, !0),
              (o.onreadystatechange = function () {
                o.readyState == 4 && n(o);
              }),
              o.send(null);
          })
        );
      }
      let h;
      var v = function (t, e) {
        void 0 === e && (e = null);
        var n = {
          componentChunkName: t.componentChunkName,
          path: t.path,
          webpackCompilationHash: t.webpackCompilationHash,
          matchPath: t.matchPath,
          staticQueryHashes: t.staticQueryHashes,
        };
        return { component: e, json: t.result, page: n };
      };
      var m = (function () {
        function t(t, e) {
          (this.inFlightNetworkRequests = new Map()),
            (this.pageDb = new Map()),
            (this.inFlightDb = new Map()),
            (this.staticQueryDb = {}),
            (this.pageDataDb = new Map()),
            (this.prefetchTriggered = new Set()),
            (this.prefetchCompleted = new Set()),
            (this.loadComponent = t),
            Object(s.d)(e);
        }
        var e = t.prototype;
        return (
          (e.memoizedGet = function (t) {
            var e = this;
                var n = this.inFlightNetworkRequests.get(t);
            return (
              n || ((n = d(t, 'GET')), this.inFlightNetworkRequests.set(t, n)),
              n
                .then(function (n) {
                  return e.inFlightNetworkRequests.delete(t), n;
                })
                .catch(function (n) {
                  throw (e.inFlightNetworkRequests.delete(t), n);
                })
            );
          }),
          (e.setApiRunner = function (t) {
            (this.apiRunner = t),
              (this.prefetchDisabled = t('disableCorePrefetching').some(function (t) {
                return t;
              }));
          }),
          (e.fetchPageDataJson = function (t) {
            var e = this;
                var n = t.pagePath;
                var r = t.retries;
                var o = void 0 === r ? 0 : r;
                var a = f(n);
            return this.memoizedGet(a).then(function (r) {
              var a = r.status;
                  var i = r.responseText;
              if (a === 200)
                try {
                  let u = JSON.parse(i);
                  if (void 0 === u.path) throw new Error('not a valid pageData response');
                  return Object.assign(t, { status: l.Success, payload: u });
                } catch (c) {}
              return a === 404 || a === 200
                ? n === '/404.html'
                  ? Object.assign(t, { status: l.Error })
                  : e.fetchPageDataJson(Object.assign(t, { pagePath: '/404.html', notFound: !0 }))
                : a === 500
                ? Object.assign(t, { status: l.Error })
                : o < 3
                ? e.fetchPageDataJson(Object.assign(t, { retries: o + 1 }))
                : Object.assign(t, { status: l.Error });
            });
          }),
          (e.loadPageDataJson = function (t) {
            var e = this;
                var n = Object(s.b)(t);
            if (this.pageDataDb.has(n)) {
              let r = this.pageDataDb.get(n);
              return Promise.resolve(r);
            }
            return this.fetchPageDataJson({ pagePath: n }).then(function (t) {
              return e.pageDataDb.set(n, t), t;
            });
          }),
          (e.findMatchPath = function (t) {
            return Object(s.a)(t);
          }),
          (e.loadPage = function (t) {
            var e = this;
                var n = Object(s.b)(t);
            if (this.pageDb.has(n)) {
              var r = this.pageDb.get(n);
              return Promise.resolve(r.payload);
            }
            if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
            var o = Promise.all([this.loadAppData(), this.loadPageDataJson(n)]).then(function (t) {
              let r = t[1];
              if (r.status === l.Error) return { status: l.Error };
              var o = r.payload;
                  var a = o;
                  var i = a.componentChunkName;
                  var u = a.staticQueryHashes;
                  var s = void 0 === u ? [] : u;
                  var p = {};
                  var f = e.loadComponent(i).then(function (e) {
                    var n;
                    return (
                      (p.createdAt = new Date()),
                      e
                        ? ((p.status = l.Success),
                          !0 === r.notFound && (p.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: t[0] ? t[0].webpackCompilationHash : '',
                          })),
                          (n = v(o, e)))
                        : (p.status = l.Error),
                      n
                    );
                  });
                  var d = Promise.all(
                  s.map(function (t) {
                    if (e.staticQueryDb[t]) {
                      var n = e.staticQueryDb[t];
                      return { staticQueryHash: t, jsonPayload: n };
                    }
                    return e.memoizedGet(`/page-data/sq/d/${  t  }.json`).then(function (e) {
                      var n = JSON.parse(e.responseText);
                      return { staticQueryHash: t, jsonPayload: n };
                    });
                  })
                ).then(function (t) {
                  var n = {};
                  return (
                    t.forEach(function (t) {
                      let r = t.staticQueryHash;
                          var o = t.jsonPayload;
                      (n[r] = o), (e.staticQueryDb[r] = o);
                    }),
                    n
                  );
                });
              return Promise.all([f, d]).then(function (t) {
                var r;
                    var o = t[0];
                    var a = t[1];
                return (
                  o &&
                    ((r = { ...o, staticQueryResults: a}),
                    (p.payload = r),
                    c.a.emit('onPostLoadPageResources', { page: r, pageResources: r })),
                  e.pageDb.set(n, p),
                  r
                );
              });
            });
            return (
              o
                .then(function (t) {
                  e.inFlightDb.delete(n);
                })
                .catch(function (t) {
                  throw (e.inFlightDb.delete(n), t);
                }),
              this.inFlightDb.set(n, o),
              o
            );
          }),
          (e.loadPageSync = function (t) {
            let e = Object(s.b)(t);
            if (this.pageDb.has(e)) return this.pageDb.get(e).payload;
          }),
          (e.shouldPrefetch = function (t) {
            return (
              !!(function () {
                if ('connection' in navigator && void 0 !== navigator.connection) {
                  if ((navigator.connection.effectiveType || '').includes('2g')) return !1;
                  if (navigator.connection.saveData) return !1;
                }
                return !0;
              })() && !this.pageDb.has(t)
            );
          }),
          (e.prefetch = function (t) {
            let e = this;
            if (!this.shouldPrefetch(t)) return !1;
            if (
              (this.prefetchTriggered.has(t) ||
                (this.apiRunner('onPrefetchPathname', { pathname: t }),
                this.prefetchTriggered.add(t)),
              this.prefetchDisabled)
            )
              return !1;
            let n = Object(s.b)(t);
            return (
              this.doPrefetch(n).then(function () {
                e.prefetchCompleted.has(t) ||
                  (e.apiRunner('onPostPrefetchPathname', { pathname: t }),
                  e.prefetchCompleted.add(t));
              }),
              !0
            );
          }),
          (e.doPrefetch = function (t) {
            let e = this;
                var n = f(t);
            return u(n, { crossOrigin: 'anonymous', as: 'fetch' }).then(function () {
              return e.loadPageDataJson(t);
            });
          }),
          (e.hovering = function (t) {
            this.loadPage(t);
          }),
          (e.getResourceURLsForPathname = function (t) {
            var e = Object(s.b)(t);
                var n = this.pageDataDb.get(e);
            if (n) {
              let r = v(n.payload);
              return [].concat(Object(o.a)(g(r.page.componentChunkName)), [f(e)]);
            }
            return null;
          }),
          (e.isPageNotFound = function (t) {
            let e = Object(s.b)(t);
                var n = this.pageDb.get(e);
            return !n || n.notFound;
          }),
          (e.loadAppData = function (t) {
            var e = this;
            return (
              void 0 === t && (t = 0),
              this.memoizedGet('/page-data/app-data.json').then(function (n) {
                var r;
                    var o = n.status;
                    var a = n.responseText;
                if (o !== 200 && t < 3) return e.loadAppData(t + 1);
                if (o === 200)
                  try {
                    let i = JSON.parse(a);
                    if (void 0 === i.webpackCompilationHash)
                      throw new Error('not a valid app-data response');
                    r = i;
                  } catch (u) {}
                return r;
              })
            );
          }),
          t
        );
      })();
      var g = function (t) {
        return (window.___chunkMapping[t] || []).map(function (t) {
          return `${  t}`;
        });
      };
      var y = (function (t) {
        function e(e, n) {
          return (
            t.call(
              this,
              function (t) {
                return e.components[t]
                  ? e.components[t]()
                      .then(p)
                      .catch(function () {
                        return null;
                      })
                  : Promise.resolve();
              },
              n
            ) || this
          );
        }
        Object(r.a)(e, t);
        var n = e.prototype;
        return (
          (n.doPrefetch = function (e) {
            return t.prototype.doPrefetch.call(this, e).then(function (t) {
              if (t.status !== l.Success) return Promise.resolve();
              let e = t.payload;
                  var n = e.componentChunkName;
                  var r = g(n);
              return Promise.all(r.map(u)).then(function () {
                return e;
              });
            });
          }),
          (n.loadPageDataJson = function (e) {
            return t.prototype.loadPageDataJson.call(this, e).then(function (t) {
              return t.notFound
                ? d(e, 'HEAD').then(function (e) {
                    return e.status === 200 ? { status: l.Error } : t;
                  })
                : t;
            });
          }),
          e
        );
      })(m);
      var b = function (t) {
        h = t;
      };
      var w = {
        getResourcesForPathname(t) {
          return (
            console.warn('Warning: getResourcesForPathname is deprecated. Use loadPage instead'),
            h.i.loadPage(t)
          );
        },
        getResourcesForPathnameSync(t) {
          return (
            console.warn(
              'Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead'
            ),
            h.i.loadPageSync(t)
          );
        },
        enqueue(t) {
          return h.prefetch(t);
        },
        getResourceURLsForPathname(t) {
          return h.getResourceURLsForPathname(t);
        },
        loadPage(t) {
          return h.loadPage(t);
        },
        loadPageSync(t) {
          return h.loadPageSync(t);
        },
        prefetch(t) {
          return h.prefetch(t);
        },
        isPageNotFound(t) {
          return h.isPageNotFound(t);
        },
        hovering(t) {
          return h.hovering(t);
        },
        loadAppData() {
          return h.loadAppData();
        },
      };
      e.default = w;
      function P() {
        return h ? h.staticQueryDb : {};
      }
    },
    hd9s(t, e, n) {
      let r = n('284h');
      let o = n('TqRt');
      (e.__esModule = !0), (e.ScrollContainer = void 0);
      const a = o(n('pVnL'));
      var i = o(n('VbXa'));
      let u = r(n('q1tI'));
      let c = o(n('i8i4'));
      var s = o(n('17x9'));
      let l = n('Enzk');
      var p = n('YwZP');
      let f = {
        scrollKey: s.default.string.isRequired,
        shouldUpdateScroll: s.default.func,
        children: s.default.element.isRequired,
      };
      let d = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        (0, i.default)(e, t);
        var n = e.prototype;
        return (
          (n.componentDidMount = function () {
            let t = this;
                var e = c.default.findDOMNode(this);
                var n = this.props;
                var r = n.location;
                var o = n.scrollKey;
            if (e) {
              e.addEventListener('scroll', function () {
                t.props.context.save(r, o, e.scrollTop);
              });
              let a = this.props.context.read(r, o);
              e.scrollTo(0, a || 0);
            }
          }),
          (n.render = function () {
            return this.props.children;
          }),
          e
        );
      })(u.Component);
      let h = function (t) {
        return u.createElement(p.Location, null, function (e) {
          let n = e.location;
          return u.createElement(l.ScrollContext.Consumer, null, function (e) {
            return u.createElement(d, (0, a.default)({}, t, { context: e, location: n }));
          });
        });
      };
      (e.ScrollContainer = h), (h.propTypes = f);
    },
    lw3w(t, e, n) {
      let r;
      t.exports = ((r = n('rzlk')) && r.default) || r;
    },
    npZl(t, e, n) {
      let r = n('TqRt');
      n('Wbzz'), r(n('9hXx'));
    },
    nqlD(t, e, n) {
      const r = n('q1tI').createContext;
      (t.exports = r), (t.exports.default = r);
    },
    pVnL(t, e) {
      function n() {
        return (
          (t.exports = n =
            Object.assign ||
            function (t) {
              for (let e = 1; e < arguments.length; e++) {
                const n = arguments[e];
                for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          n.apply(this, arguments)
        );
      }
      (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    },
    rzlk(t, e, n) {
      n.r(e);
      const r = n('q1tI');
      var o = n.n(r);
      let a = n('emEt');
      let i = n('IOVJ');
      e.default = function (t) {
        const e = t.location;
        var n = a.default.loadPageSync(e.pathname);
        return n ? o.a.createElement(i.a, { location: e, pageResources: n, ...n.json }) : null;
      };
    },
    s4An(t, e, n) {
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    xtsi(t, e, n) {
      const r = n('LeKB');
      var o = n('emEt').publicLoader;
      let a = o.getResourcesForPathname;
      let i = o.getResourcesForPathnameSync;
      var u = o.getResourceURLsForPathname;
      var c = o.loadPage;
      let s = o.loadPageSync;
      (e.apiRunner = function (t, e, n, o) {
        void 0 === e && (e = {});
        let l = r.map(function (n) {
          if (n.plugin[t]) {
            (e.getResourcesForPathnameSync = i),
              (e.getResourcesForPathname = a),
              (e.getResourceURLsForPathname = u),
              (e.loadPage = c),
              (e.loadPageSync = s);
            const r = n.plugin[t](e, n.options);
            return r && o && (e = o({ args: e, result: r, plugin: n })), r;
          }
        });
        return (l = l.filter(function (t) {
          return void 0 !== t;
        })).length > 0
          ? l
          : n
          ? [n]
          : [];
      }),
        (e.apiRunnerAsync = function (t, e, n) {
          return r.reduce(function (n, r) {
            return r.plugin[t]
              ? n.then(function () {
                  return r.plugin[t](e, r.options);
                })
              : n;
          }, Promise.resolve());
        });
    },
  },
  [['UxWs', 2, 7]],
]);
// # sourceMappingURL=app-93f74f514222dc177fa6.js.map
