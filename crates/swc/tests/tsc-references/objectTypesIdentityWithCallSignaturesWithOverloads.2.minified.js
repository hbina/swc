//// [objectTypesIdentityWithCallSignaturesWithOverloads.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
!function() {
    "use strict";
    function A() {
        _class_call_check(this, A);
    }
    return A.prototype.foo = function(x) {
        return null;
    }, A;
}();
