//// [indexersInClassType.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var r = new (function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    return C.prototype.fn = function() {
        return this;
    }, C;
}())().fn();
r[1], r.a;
