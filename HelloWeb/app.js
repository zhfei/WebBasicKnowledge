
var weather = "晴天", temp=28;

// if (weather === "晴天" && temp <= 26) {
//   alert("心情美丽")
// } else if (weather === "下雨"){
//   alert("下雨")
// } else {
//   alert("心情糟糕")
// }


switch (weather) {
  case "晴天":
    alert("晴天")
    break;
  case "下雨":
    alert("下雨")
    break;
  default:
    break;
}

var i = 0;
while ( i < 10) {
  i++;
  if (i % 2 === 0) {
    continue
  }
  console.log(i)
}

// for (1.初始化阶段，只执行一次； 2.执行条件，每次执行都会判断； 3.执行后操作) {
//
// }

var weeks = ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
for (var i = 0; i < weeks.length; i++) {
  console.log(weeks[i])
}

function funcName(param1, param2) {
  console.log(param1, param2)
}

funcName("hello", "函数")


var funcVar = function (param) {
  alert(param)
}
funcVar("函数变量")


var obj = {
  scole:30,
  sex:true,
  artlist:["黄家驹","黄家强"]
}
obj.name = "frog"
obj.age=10
console.log(obj)
obj["school"]="xinyuxueyuan"
console.log(obj)
console.log(obj.artlist[0])

obj.showAllMember = function () {
  for (let j = 0; j < this.artlist.length; j++) {
    document.writeln(this.artlist[j])
  }
}
obj.showAllMember()

for (const objKey in obj) {
  if (typeof obj[objKey] !== "function") {
    console.log(objKey+":",obj[objKey])
  } else {
    console.log(objKey+":",obj[objKey])
  }
}

var tit = document.getElementById("title")
console.log(tit)


window.onload = function () {
  var btn = document.querySelector(".btn")
  console.log('-----------btn:',btn)
  // btn.onclick = function () {
  //   alert('点击了')
  // }

  function clickMsg(event) {
    console.log('按钮被点击了',event)
  }
  btn.addEventListener('click', clickMsg, false)

  var list = document.querySelector(".list")
  function listClick(event) {
    console.log(event.target)
    event.stopPropagation()//阻止事件传播，事件传播中断
    event.preventDefault()//阻止事件的默认行为，比如点击<a>默认打开链接
  }
  list.addEventListener('click', listClick, false)
}

if (true) {
  var fruit = "苹果";
  let orenge = "桔子";
  orenge = ""
  console.log(orenge)
}
console.log(fruit)
// console.log(orenge)

const bananar = "🍌";
// bananar = "22"//报错
console.log(bananar)

function getFruits() {
  var fruits = ["苹果","香蕉","橘子"]
  return fruits
}
var [apple, bnanar,orange] = getFruits()
console.log(apple,bnanar,orange)

function getFruitsObj() {
  return {apple:"", bananar:"🍌", orange: "🍊"}
}
var {apple: appleV, bananar: bananarV, orange: orangeV} = getFruitsObj()
console.log(appleV, bananarV, orangeV)

var breakfast = "今天的早餐是："+appleV+"与"+bananarV+"!!"
console.log(breakfast)
var breakfast2 = `名天的早餐是：${appleV} 与 ${bananarV} !!`
console.log(breakfast2)

function kitchen(subStrings, ...values) {
  console.log(subStrings)
  console.log(values)

  var result = ""
  for (let i = 0; i<values.length; i++) {
    result += subStrings[i]
    result += values[i]
  }
  result += subStrings[subStrings.length-1]
  return result
}
var breakfast3 = kitchen`后天的早餐是：${appleV} 与 ${bananarV} !!`
console.log(breakfast3)

console.log(breakfast3.startsWith("今天"),breakfast3.includes("早餐"),breakfast3.endsWith("!"))


function eatFoot(dessert = "蛋糕", drink="果汁") {
  return `${dessert} ${drink}`
}
console.log(eatFoot(), eatFoot("油饼","啤酒"))

var fruitsBig = ["番茄", ...getFruits()]
console.log(fruitsBig)

function fruitFactory(mainFruit, slightFruit, ...other) {
  console.log(mainFruit,slightFruit,other)
}
fruitFactory("苹果原料","橘子原料","色素","香精")


function fruitFactory2(mainFruit, slightFruit, {location,memberCount}={}) {
  console.log(mainFruit,slightFruit,location,memberCount)
}
fruitFactory2("苹果","西瓜",{location:"北京",memberCount:100})


var fruitVar = function fruitFactorySuper () {
  console.log("hello")
}
console.log(fruitVar.name)

var arrowDrink = drink => drink
var arrowFunc = (mainFruit, drink) => {
  return mainFruit + drink
}


var desert="蛋糕", drink="啤酒"
let food = {
  desert: desert,
  drink: drink,
  breakfast: function () {
    console.log(this.desert,this.drink)
  }
}
let food2 = {
  desert,
  drink,
  breakfast() {
    console.log(this.desert,this.drink)
  }
}

let breakfast4 = {}
Object.assign(breakfast4, {drink:"啤酒"})
console.log(breakfast4)

let tea = {
  getDrink() {
    return "茶水"
  }
}
let pear = {
  getDrink() {
    return "啤酒"
  }
}
let breakfast5 = Object.create(tea)
console.log(breakfast5.getDrink())
console.log(Object.getPrototypeOf(breakfast5) === tea)

Object.setPrototypeOf(breakfast5,pear)
console.log(breakfast5.getDrink())
console.log(Object.getPrototypeOf(breakfast5) === pear)

let breakfast6 = {
  __proto__: tea
}
console.log(breakfast6.getDrink())
console.log(Object.getPrototypeOf(breakfast6) === tea)

breakfast6.__proto__ = pear
console.log(breakfast6.getDrink())
console.log(Object.getPrototypeOf(breakfast6) === pear)

let breakfast7 = {
  __proto__: tea,
  getDrink() {
    return super.getDrink()+" 🍌 "
  }
}
console.log(breakfast7.getDrink())


// yield（C# 参考）在迭代器块中用于向枚举数对象提供值
function* chef() {
  yield "苹果";
  yield "香蕉";
}

class Chref {
  constructor(foods) {
    this.foods = foods;
    this.dish = [];
  }

  get mean () {
    return this.dish
  }
  set mean (food) {
    this.dish.push(food)
  }

  eat() {
    console.log(this.foods)
  }

  static eatFood(food) {
    console.log(food)
  }
}
let chref = new Chref("牛奶")
chref.eat()

chref.mean = "虾仁"
chref.mean = "芝麻"
console.log(chref.mean)

Chref.eatFood("静态食物")



class Person {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

  intro () {
    return `${this.name} + ${this.birthday}`
  }
}

class Teacher extends Person{
  constructor(name, birthday) {
    super(name, birthday);
  }
}

let teacher = new Teacher("xiao ming", "1989-06-01")
console.log(teacher.intro())

let setA = new Set("jack")
console.log(setA)
setA.add("H")
setA.add("W")
console.log(setA)
console.log(setA.size)
console.log(setA.has("H"))
setA.delete("H")
setA.forEach(v => {
  console.log(v)
})
setA.clear()
console.log(setA)


let mapA = new Map()
let shop1="洗发水", shop2= function () {}, shop3={}
mapA.set(shop1, "小学生")
mapA.set(shop2, "中学生")
mapA.set(shop3, "大学生")
console.log(mapA)
console.log(mapA.size)
console.log(mapA.get(shop1))
mapA.delete(shop3)
console.log(mapA.has(shop3))
mapA.forEach((v,k) => {
  console.log(`${k}: ${v}`)
})



