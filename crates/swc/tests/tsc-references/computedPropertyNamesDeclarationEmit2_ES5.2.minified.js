//// [computedPropertyNamesDeclarationEmit2_ES5.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
!function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    return C[""] = function() {}, _create_class(C, null, [
        {
            key: "",
            get: function() {
                return 0;
            }
        },
        {
            key: "",
            set: function(x) {}
        }
    ]), C;
}();
