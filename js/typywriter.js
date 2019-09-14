jQuery(document).ready(function (e) {
    function t() {
      n(e(".cd-headline.letters").find("b")), o(e(".cd-headline"))
    }
  
    function n(t) {
      t.each(function () {
        var t = e(this),
          n = t.text().split(""),
          o = t.hasClass("is-visible");
        for (i in n) t.parents(".rotate-2").length > 0 && (n[i] = "<em>" + n[i] + "</em>"), n[i] = o ? '<i class="in">' + n[i] + "</i>" : "<i>" + n[i] + "</i>";
        var r = n.join("");
        t.html(r).css("opacity", 1)
      })
    }
  
    function o(t) {
      var i = c;
      t.each(function () {
        var t = e(this);
        if (t.hasClass("loading-bar")) i = p, setTimeout(function () {
          t.find(".cd-words-wrapper").addClass("is-loading")
        }, h);
        else if (t.hasClass("clip")) {
          var n = t.find(".cd-words-wrapper"),
            o = n.width() + 10;
          n.css("width", o)
        } else if (!t.hasClass("type")) {
          var s = t.find(".cd-words-wrapper b"),
            a = 0;
          s.each(function () {
            var t = e(this).width();
            t > a && (a = t)
          }), t.find(".cd-words-wrapper").css("width", a)
        }
        setTimeout(function () {
          r(t.find(".is-visible").eq(0))
        }, i)
      })
    }
  
    function r(e) {
      var t = d(e);
      if (e.parents(".cd-headline").hasClass("type")) {
        var i = e.parent(".cd-words-wrapper");
        i.addClass("selected").removeClass("waiting"), setTimeout(function () {
          i.removeClass("selected"), e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
        }, m), setTimeout(function () {
          s(t, y)
        }, g)
      } else if (e.parents(".cd-headline").hasClass("letters")) {
        var n = e.children("i").length >= t.children("i").length ? !0 : !1;
        a(e.find("i").eq(0), e, n, f), l(t.find("i").eq(0), t, n, f)
      } else e.parents(".cd-headline").hasClass("clip") ? e.parents(".cd-words-wrapper").animate({
        width: "2px"
      }, v, function () {
        u(e, t), s(t)
      }) : e.parents(".cd-headline").hasClass("loading-bar") ? (e.parents(".cd-words-wrapper").removeClass("is-loading"), u(e, t), setTimeout(function () {
        r(t)
      }, p), setTimeout(function () {
        e.parents(".cd-words-wrapper").addClass("is-loading")
      }, h)) : (u(e, t), setTimeout(function () {
        r(t)
      }, c))
    }
  
    function s(e, t) {
      e.parents(".cd-headline").hasClass("type") ? (l(e.find("i").eq(0), e, !1, t), e.addClass("is-visible").removeClass("is-hidden")) : e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
        width: e.width() + 10
      }, v, function () {
        setTimeout(function () {
          r(e)
        }, b)
      })
    }
  
    function a(t, i, n, o) {
      if (t.removeClass("in").addClass("out"), t.is(":last-child") ? n && setTimeout(function () {
        r(d(i))
      }, c) : setTimeout(function () {
        a(t.next(), i, n, o)
      }, o), t.is(":last-child") && e("html").hasClass("no-csstransitions")) {
        var s = d(i);
        u(i, s)
      }
    }
  
    function l(e, t, i, n) {
      e.addClass("in").removeClass("out"), e.is(":last-child") ? (t.parents(".cd-headline").hasClass("type") && setTimeout(function () {
        t.parents(".cd-words-wrapper").addClass("waiting")
      }, 200), i || setTimeout(function () {
        r(t)
      }, c)) : setTimeout(function () {
        l(e.next(), t, i, n)
      }, n)
    }
  
    function d(e) {
      return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
    }
  
    function u(e, t) {
      e.removeClass("is-visible").addClass("is-hidden"), t.removeClass("is-hidden").addClass("is-visible")
    }
    var c = 2500,
      p = 3800,
      h = p - 3e3,
      f = 50,
      y = 150,
      m = 500,
      g = m + 800,
      v = 600,
      b = 1500;
    t()
  });