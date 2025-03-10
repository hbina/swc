//// [computedPropertyNames44_ES5.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Foo = function Foo() {
    "use strict";
    _class_call_check(this, Foo);
};
!function(C) {
    "use strict";
    _inherits(D, C);
    var _super = _create_super(D);
    function D() {
        return _class_call_check(this, D), _super.apply(this, arguments);
    }
    return _create_class(D, [
        {
            key: "set1",
            set: function(p) {}
        }
    ]), D;
}(function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    return _create_class(C, [
        {
            key: "get1",
            get: function() {
                return new Foo;
            }
        }
    ]), C;
}());
