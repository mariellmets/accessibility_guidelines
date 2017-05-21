"use strict";
function _classCallCheck(e, s) {
    if (!(e instanceof s))
        throw new TypeError("Cannot call a class as a function")
}
var _extends = Object.assign || function(e) {
        for (var s = 1; s < arguments.length; s++) {
            var a = arguments[s];
            for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
        }
        return e
    },
    _createClass = function() {
        function e(e, s) {
            for (var a = 0; a < s.length; a++) {
                var r = s[a];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(s, a, r) {
            return a && e(s.prototype, a), r && e(s, r), s
        }
    }(),
    A11yAccordion = function() {
        function e() {
            var s = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            _classCallCheck(this, e);
            var a = {
                SEARCH_ACTION_TYPE_HIDE: "hide",
                SEARCH_ACTION_TYPE_COLLAPSE: "collapse"
            };
            this.collapseRow = this.collapseRow.bind(this), this.uncollapseRow = this.uncollapseRow.bind(this), this.toggleRow = this.toggleRow.bind(this), this.getRowEl = this.getRowEl.bind(this), this._render = this._render.bind(this), this._renderSearch = this._renderSearch.bind(this), this._collapseWork = this._collapseWork.bind(this), this._collapseAll = this._collapseAll.bind(this), this._collapse = this._collapse.bind(this), this._uncollapse = this._uncollapse.bind(this), this._getHiddenArea = this._getHiddenArea.bind(this), this._traverseChildNodes = this._traverseChildNodes.bind(this);
            var r = {
                constants: a,
                parentSelector: void 0,
                hideEffectStyle: "linear",
                speed: 300,
                hiddenLinkDescription: "",
                showSearch: !0,
                showOne: !0,
                searchActionType: a.SEARCH_ACTION_TYPE_HIDE,
                overallSearch: !1,
                onAreaShow: function() {},
                onAreaHide: function() {},
                classes: {
                    headerClass: "a11yAccordionItemHeader",
                    accordionItemClass: "a11yAccordionItem",
                    hiddenAreaClass: "a11yAccordionHideArea",
                    showHeaderLabelClass: "a11yAccordionItemHeaderLinkShowLabel",
                    hideHeaderLabelClass: "a11yAccordionItemHeaderLinkHideLabel",
                    markedTextClass: "a11yAccordion-markedText",
                    visibleAreaClass: "visiblea11yAccordionItem",
                    noResultsDivClass: "a11yAccordionNoResultsItem",
                    searchDivClass: "a11yAccordionSearchDiv",
                    headerLinkClass: "a11yAccordionItemHeaderLink",
                    headerTextClass: "a11yAccordionItemHeaderText",
                    hiddenHeaderLabelDescriptionClass: "a11yAccordionItemHeaderLinkHiddenLabel",
                    toggleClass: "toggle",
                    triangleClass: "a11yAccordion-triangle",
                    searchClass: "a11yAccordionSearch",
                    accordionHeaderClass: "a11yAccordion-header",
                    accordionHideAreaClass: "a11yAccordion-area"
                },
                labels: {
                    showHeaderLabelText: "Show",
                    hideHeaderLabelText: "Hide",
                    searchPlaceholder: "Search",
                    noResultsText: "No Results Found",
                    titleText: "Type your query to search",
                    resultsMessage: "Number of results found: ",
                    leaveBlankMessage: " Please leave blank to see all the results."
                },
                ids: {
                    noResultsDivID: "a11yAccordion-noResultsItem",
                    searchDivID: "a11yAccordion-searchPanel",
                    rowIdStringPrefix: "a11yAccordion-row-"
                }
            };
            s = _extends({}, r, s);
            var t = s,
                l = t.classes;
            s = _extends({}, s, {
                selectors: {
                    triangleSelector: "." + l.triangleClass,
                    visibleAreaSelector: "." + l.visibleAreaClass,
                    markedTextSelector: "." + l.markedTextClass,
                    headerLinkSelector: "." + l.headerLinkClass,
                    headerSelector: "." + l.headerClass,
                    showHeaderLabelSelector: "." + l.showHeaderLabelClass,
                    hideHeaderLabelSelector: "." + l.hideHeaderLabelClass,
                    accordionItemSelector: "." + l.accordionItemClass,
                    hiddenAreaSelector: "." + l.hiddenAreaClass
                }
            }), this.props = s, this._render()
        }
        return _createClass(e, [{
            key: "collapseRow",
            value: function(e) {
                var s = this._collapse,
                    a = this._getHiddenArea;
                s(a(e))
            }
        }, {
            key: "uncollapseRow",
            value: function(e) {
                var s = this._uncollapse,
                    a = this._getHiddenArea;
                s(a(e))
            }
        }, {
            key: "toggleRow",
            value: function(e) {
                var s = this._collapseWork,
                    a = this._getHiddenArea;
                s(a(e))
            }
        }, {
            key: "getRowEl",
            value: function(e) {
                var s = this.refs,
                    a = s.accordionHideAreas,
                    r = s.accordionItems;
                return e >= 0 && e < a.length ? $(r[e]) : void 0
            }
        }, {
            key: "_render",
            value: function() {
                var e = this.props,
                    s = this._collapseWork,
                    a = e.parentSelector,
                    r = e.hiddenLinkDescription,
                    t = (e.onAreaShow, e.onAreaHide, e.speed, e.showSearch),
                    l = e.searchActionType,
                    i = e.classes,
                    o = e.labels,
                    n = e.selectors,
                    c = e.constants,
                    d = (i.visibleAreaClass, i.headerLinkClass),
                    h = i.headerTextClass,
                    p = i.hiddenHeaderLabelDescriptionClass,
                    u = (i.toggleClass, i.triangleClass),
                    f = i.accordionHeaderClass,
                    C = i.accordionHideAreaClass,
                    v = i.showHeaderLabelClass,
                    A = i.hideHeaderLabelClass,
                    _ = o.showHeaderLabelText,
                    g = o.hideHeaderLabelText,
                    S = (n.showHeaderLabelSelector, n.hideHeaderLabelSelector, n.headerSelector),
                    H = n.headerLinkSelector,
                    b = n.accordionItemSelector,
                    w = n.hiddenAreaSelector,
                    y = $(a),
                    T = y.find("> " + b),
                    k = T.find("> " + w),
                    L = T.find("> " + S);
                if (this.refs = {
                    el: y,
                    accordionItems: T,
                    accordionHideAreas: k,
                    headers: L
                }, !y.length)
                    throw "a11yAccordion - no element(s) with parentSelector was found";
                if (!T.length)
                    throw "a11yAccordion - no element(s) with accordionItemSelector was found";
                if (!L.length)
                    throw "a11yAccordion - no element(s) with headerSelector was found";
                if (!k.length)
                    throw "a11yAccordion - no element(s) with hiddenAreaSelector was found";
                if (l !== c.SEARCH_ACTION_TYPE_HIDE && l !== c.SEARCH_ACTION_TYPE_COLLAPSE)
                    throw "a11yAccordion - invalid searchActionType. It can only be: " + c.SEARCH_ACTION_TYPE_HIDE + " or " + c.SEARCH_ACTION_TYPE_COLLAPSE;
                k.hide(), L.addClass(f), k.addClass(C);
                var m = function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var a = $(e.target).parents(b).eq(0);
                    s(a.find("> " + w).eq(0)), a.find(H).eq(0).focus()
                };
                L.click(m), $.each(L, function(e, s) {
                    var a = [],
                        t = $("<a>", {
                            href: "#",
                            "class": d
                        });
                    t.click(m), a.push($("<span>", {
                        text: _,
                        "class": v
                    })), a.push($("<span>", {
                        text: g,
                        style: "display: none;",
                        "class": A
                    })), a.push($("<span>", {
                        text: r,
                        "class": p
                    })), a.push($("<div>", {
                        "class": u
                    })), $(s).wrapInner('<span class="' + h + '"></span>'), t.prepend(a).appendTo(s)
                }), t && this._renderSearch()
            }
        }, {
            key: "_renderSearch",
            value: function() {
                var e = this.refs,
                    s = this.props,
                    a = this.collapseRow,
                    r = this.uncollapseRow,
                    t = this._traverseChildNodes,
                    l = this._getHiddenArea,
                    i = s.overallSearch,
                    o = s.classes,
                    n = s.ids,
                    c = s.labels,
                    d = s.selectors,
                    h = s.searchActionType,
                    p = s.constants,
                    u = e.el,
                    f = e.accordionItems,
                    C = e.accordionHideAreas,
                    v = e.headers,
                    A = n.noResultsDivID,
                    _ = n.searchDivID,
                    g = n.rowIdStringPrefix,
                    S = o.markedTextClass,
                    H = o.noResultsDivClass,
                    b = o.searchDivClass,
                    w = o.searchClass,
                    y = o.accordionHeaderClass,
                    T = o.headerClass,
                    k = c.searchPlaceholder,
                    L = c.noResultsText,
                    m = c.titleText,
                    I = c.resultsMessage,
                    E = c.leaveBlankMessage,
                    R = d.markedTextSelector,
                    x = (d.headerSelector, $("<div>", {
                        id: _,
                        "class": b
                    })),
                    D = $("<input>", {
                        type: "text",
                        placeholder: k,
                        "class": w,
                        title: m
                    }).appendTo(x),
                    P = $("<li>", {
                        "class": H,
                        id: A,
                        style: "display:none;"
                    }).appendTo(u);
                $("<div>", {
                    "class": T + " " + y,
                    text: L
                }).appendTo(P), f.each(function(e, s) {
                    s.setAttribute("id", g + e)
                }), x.prependTo(u);
                var N = "";
                D.keyup(function(e) {
                    var s = e.target.value,
                        o = s.toLowerCase();
                    if (N !== o) {
                        N = o, P.hide();
                        for (var n, c = new RegExp(o, "ig"), d = 0; d < f.length; d++) {
                            var u = v[d].children[0];
                            if ($(u).find(R).each(function(e, s) {
                                return $(s).contents().unwrap()
                            }), u.normalize(), n = o.length ? t(u, c, S) : !0, i) {
                                var A = C[d];
                                $(A).find(R).each(function(e, s) {
                                    return $(s).contents().unwrap()
                                }), A.normalize(), n = o.length && !n ? t(A, c, S) : !0
                            }
                            if (h === p.SEARCH_ACTION_TYPE_HIDE)
                                $(f[d])[n ? "show" : "hide"]();
                            else if (h === p.SEARCH_ACTION_TYPE_COLLAPSE) {
                                var _ = l(d),
                                    g = _[0].style.display;
                                o.length || "block" !== g ? "none" === g && n ? r(d) : "block" !== g || n || a(d) : a(d)
                            }
                        }
                        var H = C.filter(":visible").length;
                        D.attr("title", I + H.toString() + E), H || P.show()
                    }
                })
            }
        }, {
            key: "_collapseWork",
            value: function(e) {
                var s = this.props.classes,
                    a = s.visibleAreaClass;
                e && this[e.hasClass(a) ? "_collapse" : "_uncollapse"](e)
            }
        }, {
            key: "_collapseAll",
            value: function() {
                var e = this.refs,
                    s = this.props,
                    a = this._collapse,
                    r = s.selectors.visibleAreaSelector,
                    t = e.accordionHideAreas,
                    l = t.filter(r);
                $.each(l, function(e, s) {
                    return a(s)
                })
            }
        }, {
            key: "_collapse",
            value: function(e) {
                var s = this.props,
                    a = s.onAreaHide,
                    r = s.speed,
                    t = s.classes,
                    l = s.selectors,
                    i = s.hideEffectStyle,
                    o = t.toggleClass,
                    n = t.visibleAreaClass,
                    c = l.headerSelector,
                    d = l.showHeaderLabelSelector,
                    h = l.hideHeaderLabelSelector,
                    p = l.triangleSelector;
                if (e = $(e), e.length && e.hasClass(n)) {
                    var u = e.siblings(c);
                    u.find(d).show(), u.find(h).hide(), u.find(p).toggleClass(o), e.slideUp(r, i, function() {
                        e.removeClass(n), e.hide(), a(e)
                    })
                }
            }
        }, {
            key: "_uncollapse",
            value: function(e) {
                var s = this.props,
                    a = this._collapseAll,
                    r = s.onAreaShow,
                    t = s.speed,
                    l = s.classes,
                    i = s.selectors,
                    o = s.hideEffectStyle,
                    n = s.showOne,
                    c = l.toggleClass,
                    d = l.visibleAreaClass,
                    h = i.headerSelector,
                    p = i.showHeaderLabelSelector,
                    u = i.hideHeaderLabelSelector,
                    f = i.triangleSelector;
                if (e = $(e), e.length && !e.hasClass(d)) {
                    n && a(e);
                    var C = e.siblings(h);
                    C.find(p).hide(), C.find(u).show(), C.find(f).toggleClass(c), e.addClass(d), e.slideDown(t, o, function() {
                        e.show(), r(e)
                    })
                }
            }
        }, {
            key: "_getHiddenArea",
            value: function(e) {
                var s = this.refs.accordionHideAreas;
                return e >= 0 && e < s.length ? $(s[e]) : void 0
            }
        }, {
            key: "_traverseChildNodes",
            value: function(e, s, a) {
                var r = this;
                if (3 === e.nodeType && s.test(e.data)) {
                    if (e.textContent.match(s)) {
                        var t = document.createElement("div");
                        for (t.innerHTML = e.data.replace(s, '<mark class="' + a + '">$&</mark>'); t.firstChild;)
                            e.parentNode.insertBefore(t.firstChild, e);
                        return e.parentNode.removeChild(e), !0
                    }
                } else {
                    var l = e.childNodes;
                    if (l.length) {
                        var i = void 0;
                        return $(l).each(function(e, t) {
                            i = r._traverseChildNodes(t, s, a) || i
                        }), i
                    }
                }
            }
        }]), e
    }();