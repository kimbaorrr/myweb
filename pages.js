var devtools = function () {};
(devtools.toString = function () {
    return window.location.replace("about:blank"), "-";
}),
    setInterval(() => {
        console.profile(devtools), console.profileEnd(devtools);
    }, 1e3),
    $(document).on({
        contextmenu: function (o) {
            console.log("ctx menu button:", o.which), o.preventDefault();
        },
        mousedown: function (o) {
            console.log("normal mouse down:", o.which);
        },
        mouseup: function (o) {
            console.log("normal mouse up:", o.which);
        },
    }),
    (document.onkeydown = function (o) {
        return !o.ctrlKey || (67 !== o.keyCode && 80 !== o.keyCode && 82 !== o.keyCode && 86 !== o.keyCode && 85 !== o.keyCode && 87 !== o.keyCode && 113 !== o.keyCode && 116 !== o.keyCode && 117 !== o.keyCode);
    }),
    $(document).keypress("u", function (o) {
        return !o.ctrlKey;
    });
