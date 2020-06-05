//定义对象

//方式一：通过字典的方式定义
var person = {
    name:'jack',
    age:30,
    eat:function () {
        alert('字典方式创建对象：吃面条')
    }
}
person.eat()


//方式二：通过构造器的方式定义
function Person() {

}
Person.prototype ={
    name:'tom',
    age:20,
    eat:function () {
        alert('构造函数创建对象：吃面条')
    }
}
var person2 = new Person()
person2.eat()



//---------------------------------------------------------------
//对象的继承


//基类
function Animal(name) {
    self._name = name
}
Animal.prototype.say = function () {
    alert('animal-hello'+this._name);
}
//子类
function Dog(name) {
    this._name=name
}
Dog.prototype= new Animal(); //继承父类
var superSay = Dog.prototype.say()
Dog.prototype.say = function () {
    superSay.call(this);
    alert('dog-hello'+this._name);
}

var dog = new Dog('red dog')
dog.say()





//---------------------------------------------------------------
//定义局部类，下面将会报错


//定义局部类，让外部无法使用
(function () {
    var nm = '566'
    //基类
    function Animal1(name) {
        self._name = name
    }
    Animal1.prototype.say = function () {
        alert('animal-hello'+this._name+nm);
    }

    window.Animal1=Animal1
}()) //加上()可以直接执行

(function () {
    //子类
    function Dog1(name) {
        this._name=name
    }
    Dog1.prototype= new Animal1(); //继承父类
    var superSay = Dog1.prototype.say()
    Dog1.prototype.say = function () {
        superSay.call(this);
        alert('dog-hello'+this._name);
    }

    window.Dog1=Dog1
}())



var dog = new Dog1('red dog')
dog.say()