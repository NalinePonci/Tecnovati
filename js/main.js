
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

// initialization of Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// helper for adding on all elements multiple attributes
function setAttributes(el, options) {
    Object.keys(options).forEach(function (attr) {
        el.setAttribute(attr, options[attr]);
    })
}

// activate popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

// activate tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Tabs navigation

var total = document.querySelectorAll('.nav-pills');

total.forEach(function (item, i) {
    var moving_div = document.createElement('div');
    var first_li = item.querySelector('li:first-child .nav-link');
    var tab = first_li.cloneNode();
    tab.innerHTML = "-";

    moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
    moving_div.appendChild(tab);
    item.appendChild(moving_div);

    var list_length = item.getElementsByTagName("li").length;

    moving_div.style.padding = '0px';
    moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
    moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
    moving_div.style.transition = '.5s ease';

    item.onmouseover = function (event) {
        let target = getEventTarget(event);
        let li = target.closest('li'); // get reference
        if (li) {
            let nodes = Array.from(li.closest('ul').children); // get array
            let index = nodes.indexOf(li) + 1;
            item.querySelector('li:nth-child(' + index + ') .nav-link').onclick = function () {
                moving_div = item.querySelector('.moving-tab');
                let sum = 0;
                if (item.classList.contains('flex-column')) {
                    for (var j = 1; j <= nodes.indexOf(li); j++) {
                        sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
                    }
                    moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
                    moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
                } else {
                    for (var j = 1; j <= nodes.indexOf(li); j++) {
                        sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
                    }
                    moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
                    moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
                }
            }
        }
    }
});


// Tabs navigation resize

window.addEventListener('resize', function (event) {
    total.forEach(function (item, i) {
        item.querySelector('.moving-tab').remove();
        var moving_div = document.createElement('div');
        var tab = item.querySelector(".nav-link.active").cloneNode();
        tab.innerHTML = "-";

        moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
        moving_div.appendChild(tab);

        item.appendChild(moving_div);

        moving_div.style.padding = '0px';
        moving_div.style.transition = '.5s ease';

        let li = item.querySelector(".nav-link.active").parentElement;

        if (li) {
            let nodes = Array.from(li.closest('ul').children); // get array
            let index = nodes.indexOf(li) + 1;

            let sum = 0;
            if (item.classList.contains('flex-column')) {
                for (var j = 1; j <= nodes.indexOf(li); j++) {
                    sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
                }
                moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
                moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
                moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
            } else {
                for (var j = 1; j <= nodes.indexOf(li); j++) {
                    sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
                }
                moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
                moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';

            }
        }
    });

    if (window.innerWidth < 991) {
        total.forEach(function (item, i) {
            if (!item.classList.contains('flex-column')) {
                item.classList.add('flex-column', 'on-resize');
            }
        });
    } else {
        total.forEach(function (item, i) {
            if (item.classList.contains('on-resize')) {
                item.classList.remove('flex-column', 'on-resize');
            }
        })
    }
});


function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

// End tabs navigation

// Copy code function

function copyCode(el) {
    const selection = window.getSelection();
    const range = document.createRange();
    const textToCopy = el.nextElementSibling;
    range.selectNodeContents(textToCopy);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    window.getSelection().removeAllRanges()
    if (!el.parentElement.querySelector('.alert')) {
        var alert = document.createElement('div');
        alert.classList.add('alert', 'alert-success', 'position-absolute', 'top-0', 'border-0', 'text-white', 'w-25', 'end-0', 'start-0', 'mt-2', 'mx-auto', 'py-2');
        alert.style.transform = 'translate3d(0px, 0px, 0px)'
        alert.style.opacity = '0';
        alert.style.transition = '.35s ease';
        setTimeout(function () {
            alert.style.transform = 'translate3d(0px, 20px, 0px)';
            alert.style.setProperty("opacity", "1", "important");
        }, 100);
        alert.innerHTML = "Code successfully copied!";
        el.parentElement.appendChild(alert);
        setTimeout(function () {
            alert.style.transform = 'translate3d(0px, 0px, 0px)'
            alert.style.setProperty("opacity", "0", "important");
        }, 2000);
        setTimeout(function () {
            el.parentElement.querySelector('.alert').remove();
        }, 2500);
    }
}

// End copy code function

// Input focus function
var getParent = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
};
document.addEventListener('click', function (event) {
    var parent = getParent(event.target, '.input-group');
    if (event.target.classList.contains('form-control')) {
        var focus = document.querySelectorAll('.input-group.focused');
        for (var i = 0; i < focus.length; i++) {
            focus[i].classList.remove('focused');
        }
        parent.classList.add('focused');
    }
    var focus = document.querySelectorAll('.input-group.focused');
    if (focus && event.target != parent && event.target.parentNode != parent) {
        for (var i = 0; i < focus.length; i++) {
            focus[i].classList.remove('focused');
        }

    }
}, false);


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};

{
    "version": 3,
        "sources": [
            "_site_kit_free/assets/js/kit-free.js"
        ],
            "names": [
                "popoverTriggerList",
                "slice",
                "call",
                "document",
                "querySelectorAll",
                "popoverList",
                "map",
                "popoverTriggerEl",
                "bootstrap",
                "Popover",
                "tooltipTriggerList",
                "tooltipList",
                "tooltipTriggerEl",
                "Tooltip",
                "setAttributes",
                "el",
                "options",
                "Object",
                "keys",
                "forEach",
                "attr",
                "setAttribute",
                "total",
                "getEventTarget",
                "e",
                "window",
                "event",
                "target",
                "srcElement",
                "copyCode",
                "alert",
                "selection",
                "getSelection",
                "range",
                "createRange",
                "textToCopy",
                "nextElementSibling",
                "selectNodeContents",
                "removeAllRanges",
                "addRange",
                "execCommand",
                "parentElement",
                "querySelector",
                "createElement",
                "classList",
                "add",
                "style",
                "transform",
                "opacity",
                "transition",
                "setTimeout",
                "setProperty",
                "innerHTML",
                "appendChild",
                "remove",
                "item",
                "i",
                "moving_div",
                "tab",
                "cloneNode",
                "getElementsByTagName",
                "length",
                "padding",
                "width",
                "offsetWidth",
                "onmouseover",
                "let",
                "li",
                "closest",
                "nodes",
                "Array",
                "from",
                "children",
                "index",
                "indexOf",
                "onclick",
                "sum",
                "contains",
                "j",
                "offsetHeight",
                "height",
                "addEventListener",
                "innerWidth",
                "getParent",
                "elem",
                "selector",
                "parentNode",
                "matches",
                "debounce",
                "func",
                "wait",
                "immediate",
                "timeout",
                "context",
                "this",
                "args",
                "arguments",
                "clearTimeout",
                "apply",
                "parent",
                "focus"
            ],
                "mappings": "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"
}
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')), popoverList = popoverTriggerList.map(function (e) { return new bootstrap.Popover(e) }), tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')), tooltipList = tooltipTriggerList.map(function (e) { return new bootstrap.Tooltip(e) }); function setAttributes(t, o) { Object.keys(o).forEach(function (e) { t.setAttribute(e, o[e]) }) } var popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))).map(function (e) { return new bootstrap.Popover(e) }), tooltipList = (tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))).map(function (e) { return new bootstrap.Tooltip(e) }), total = document.querySelectorAll(".nav-pills"); function getEventTarget(e) { return (e = e || window.event).target || e.srcElement } function copyCode(e) { var t, o = window.getSelection(), n = document.createRange(), l = e.nextElementSibling; n.selectNodeContents(l), o.removeAllRanges(), o.addRange(n), document.execCommand("copy"); window.getSelection().removeAllRanges(), e.parentElement.querySelector(".alert") || ((t = document.createElement("div")).classList.add("alert", "alert-success", "position-absolute", "top-0", "border-0", "text-white", "w-25", "end-0", "start-0", "mt-2", "mx-auto", "py-2"), t.style.transform = "translate3d(0px, 0px, 0px)", t.style.opacity = "0", t.style.transition = ".35s ease", setTimeout(function () { t.style.transform = "translate3d(0px, 20px, 0px)", t.style.setProperty("opacity", "1", "important") }, 100), t.innerHTML = "Code successfully copied!", e.parentElement.appendChild(t), setTimeout(function () { t.style.transform = "translate3d(0px, 0px, 0px)", t.style.setProperty("opacity", "0", "important") }, 2e3), setTimeout(function () { e.parentElement.querySelector(".alert").remove() }, 2500)) } total.forEach(function (r, e) { var i = document.createElement("div"), t = r.querySelector("li:first-child .nav-link").cloneNode(); t.innerHTML = "-", i.classList.add("moving-tab", "position-absolute", "nav-link"), i.appendChild(t), r.appendChild(i), r.getElementsByTagName("li").length; i.style.padding = "0px", i.style.width = r.querySelector("li:nth-child(1)").offsetWidth + "px", i.style.transform = "translate3d(0px, 0px, 0px)", i.style.transition = ".5s ease", r.onmouseover = function (e) { let l = getEventTarget(e).closest("li"); if (l) { let o = Array.from(l.closest("ul").children), n = o.indexOf(l) + 1; r.querySelector("li:nth-child(" + n + ") .nav-link").onclick = function () { i = r.querySelector(".moving-tab"); let e = 0; if (r.classList.contains("flex-column")) { for (var t = 1; t <= o.indexOf(l); t++)e += r.querySelector("li:nth-child(" + t + ")").offsetHeight; i.style.transform = "translate3d(0px," + e + "px, 0px)", i.style.height = r.querySelector("li:nth-child(" + t + ")").offsetHeight } else { for (t = 1; t <= o.indexOf(l); t++)e += r.querySelector("li:nth-child(" + t + ")").offsetWidth; i.style.transform = "translate3d(" + e + "px, 0px, 0px)", i.style.width = r.querySelector("li:nth-child(" + n + ")").offsetWidth + "px" } } } } }), window.addEventListener("resize", function (e) { total.forEach(function (t, e) { t.querySelector(".moving-tab").remove(); var o = document.createElement("div"), n = t.querySelector(".nav-link.active").cloneNode(), l = (n.innerHTML = "-", o.classList.add("moving-tab", "position-absolute", "nav-link"), o.appendChild(n), t.appendChild(o), o.style.padding = "0px", o.style.transition = ".5s ease", t.querySelector(".nav-link.active").parentElement); if (l) { var r = Array.from(l.closest("ul").children), n = r.indexOf(l) + 1; let e = 0; if (t.classList.contains("flex-column")) { for (var i = 1; i <= r.indexOf(l); i++)e += t.querySelector("li:nth-child(" + i + ")").offsetHeight; o.style.transform = "translate3d(0px," + e + "px, 0px)", o.style.width = t.querySelector("li:nth-child(" + n + ")").offsetWidth + "px", o.style.height = t.querySelector("li:nth-child(" + i + ")").offsetHeight } else { for (i = 1; i <= r.indexOf(l); i++)e += t.querySelector("li:nth-child(" + i + ")").offsetWidth; o.style.transform = "translate3d(" + e + "px, 0px, 0px)", o.style.width = t.querySelector("li:nth-child(" + n + ")").offsetWidth + "px" } } }), window.innerWidth < 991 ? total.forEach(function (e, t) { e.classList.contains("flex-column") || e.classList.add("flex-column", "on-resize") }) : total.forEach(function (e, t) { e.classList.contains("on-resize") && e.classList.remove("flex-column", "on-resize") }) }); var getParent = function (e, t) { for (; e && e !== document; e = e.parentNode)if (e.matches(t)) return e; return null }; function debounce(o, n, l) { var r; return function () { var e = this, t = arguments; clearTimeout(r), r = setTimeout(function () { r = null, l || o.apply(e, t) }, n), l && !r && o.apply(e, t) } } document.addEventListener("click", function (e) { var t = getParent(e.target, ".input-group"); if (e.target.classList.contains("form-control")) { for (var o = document.querySelectorAll(".input-group.focused"), n = 0; n < o.length; n++)o[n].classList.remove("focused"); t.classList.add("focused") } if ((o = document.querySelectorAll(".input-group.focused")) && e.target != t && e.target.parentNode != t) for (n = 0; n < o.length; n++)o[n].classList.remove("focused") }, !1);
