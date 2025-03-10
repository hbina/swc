//// [C1.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
class C1 {
    f() {
        return _wrap_async_generator(function*() {})();
    }
}
//// [C2.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
class C2 {
    f() {
        return _wrap_async_generator(function*() {
            const x = yield;
        })();
    }
}
//// [C3.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
class C3 {
    f() {
        return _wrap_async_generator(function*() {
            const x = yield 1;
        })();
    }
}
//// [C4.ts]
import _async_generator_delegate from "@swc/helpers/src/_async_generator_delegate.mjs";
import _async_iterator from "@swc/helpers/src/_async_iterator.mjs";
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
class C4 {
    f() {
        return _wrap_async_generator(function*() {
            const x = yield* _async_generator_delegate(_async_iterator([
                1
            ]), _await_async_generator);
        })();
    }
}
//// [C5.ts]
import _async_generator_delegate from "@swc/helpers/src/_async_generator_delegate.mjs";
import _async_iterator from "@swc/helpers/src/_async_iterator.mjs";
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
class C5 {
    f() {
        return _wrap_async_generator(function*() {
            const x = yield* _async_generator_delegate(_async_iterator(_wrap_async_generator(function*() {
                yield 1;
            })()), _await_async_generator);
        })();
    }
}
//// [C6.ts]
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
class C6 {
    f() {
        return _wrap_async_generator(function*() {
            const x = yield _await_async_generator(1);
        })();
    }
}
//// [C7.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
class C7 {
    f() {
        return _wrap_async_generator(function*() {
            return 1;
        })();
    }
}
//// [C8.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
class C8 {
    g() {}
    f() {
        var _this = this;
        return _wrap_async_generator(function*() {
            _this.g();
        })();
    }
}
//// [C9.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
class B9 {
    g() {}
}
class C9 extends B9 {
    f() {
        var _this = this, _superprop_get_g = ()=>super.g;
        return _wrap_async_generator(function*() {
            _superprop_get_g().call(_this);
        })();
    }
}
