//// [nullishCoalescingOperatorInParameterBindingPattern.2.ts]
// https://github.com/microsoft/TypeScript/issues/36295
const a = ()=>undefined;
var ref;
(({ [(ref = a()) !== null && ref !== void 0 ? ref : "d"]: c = ""  })=>{
    var a1;
})();
const x = "";
var ref1;
(({ [(ref1 = a()) !== null && ref1 !== void 0 ? ref1 : "d"]: c = "" , d =x  })=>{
    var x1;
})();
