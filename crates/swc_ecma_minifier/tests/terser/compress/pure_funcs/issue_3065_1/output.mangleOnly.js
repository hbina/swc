function n(n, r, t) {
    t.a = n;
    t.f = r;
    return t;
}
function r(r) {
    return n(1, r, function (n) {
        return r(n);
    });
}
var t = r(function (n) {
    return n;
});
