(function () {
    if ("function" == typeof window.lc_mouseDrag) return !0;
    window.lc_mouseDrag = function (p, d, f, g) {
      d = void 0 === d ? 0.3 : d;
      f = void 0 === f ? !1 : f;
      g = void 0 === g ? !1 : g;
      if (!p)
        return console.error(
          "You must provide a valid selector or DOM object as first argument"
        );
      var u = function (a) {
        var e = f ? !1 : !0,
          q = g ? !1 : !0,
          h = !1,
          r = 0,
          t = 0,
          k = 0,
          l = 0,
          m = null;
  
        var startDrag = function (b) {
          b.preventDefault();
          h = !0;
          k = parseInt(a.scrollTop, 10);
          l = parseInt(a.scrollLeft, 10);
          r = b.clientY || b.touches[0].clientY;
          t = b.clientX || b.touches[0].clientX;
        };
  
        var stopDrag = function (b) {
          if (!d) return !0;
          var scrollTop = a.scrollTop;
          scrollTop += -1 * (k - scrollTop) * d;
          var scrollLeft = a.scrollLeft;
          scrollLeft += -1 * (l - scrollLeft) * d;
          var n = { behavior: "smooth" };
          q && (n.top = scrollTop);
          e && (n.left = scrollLeft);
          m = a.scroll(n);
          h = !1;
        };
  
        var moveDrag = function (b) {
          if (!0 === h) {
            m && m.pause();
            var c = { behavior: "auto" };
            q && (c.top = k + (r - (b.clientY || b.touches[0].clientY)));
            e && (c.left = l + (t - (b.clientX || b.touches[0].clientX)));
            a.scroll(c);
          }
        };
  
        // Mouse Events
        a.addEventListener("mousedown", startDrag);
        a.addEventListener("mouseup", stopDrag);
        a.addEventListener("mousemove", moveDrag);
        document.body.addEventListener("mouseup", stopDrag);
  
        // Touch Events
        a.addEventListener("touchstart", startDrag);
        a.addEventListener("touchend", stopDrag);
        a.addEventListener("touchmove", moveDrag);
        document.body.addEventListener("touchend", stopDrag);
      };
  
      (function (a) {
        if ("string" != typeof a) return a instanceof Element ? [a] : Object.values(a);
        (a.match(/(#[0-9][^\s:,]*)/g) || []).forEach(function (e) {
          a = a.replace(e, '[id="' + e.replace("#", "") + '"]');
        });
        return document.querySelectorAll(a);
      })(p).forEach(function (a) {
        u(a);
      });
    };
  })();
  