
// function Person(name) {
//     var _this={}
//     _this.name=name
//     _this.sayHello=function () {
//         alert("person_hello"+_this.name)
//     }
//     return _this
// }
//
// function Teather(name) {
//     var _this = Person(name)
//     var superSayHello = _this.sayHello()
//     _this.sayHello = function () {
//         superSayHello.call(_this);
//         alert('teacher_hello'+_this.name)
//     }
//     return _this
// }
//
// var t = Teather('小米')
// t.sayHello()


//-----------------------------------------

(function () {
    var nm='ddd'
    function Person(name) {
        var _this={}
        _this.name=name
        _this.sayHello=function () {
            alert("person_hello"+_this.name)
        }
        return _this
    }
    window.Person=Person
}())

function Teather(name) {
    var _this = Person(name)
    var superSayHello = _this.sayHello()
    _this.sayHello = function () {
        superSayHello.call(_this);
        alert('teacher_hello'+_this.name+pp)
    }
    return _this
}

var t = Teather('小米')
t.sayHello()