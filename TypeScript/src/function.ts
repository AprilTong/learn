// 用变量定义函数类型
let add1: (x: number, y: number) => number
// 用接口定义函数类型,函数的参数名不需要与在接口里定义的名字相匹配
interface Add2 {
  (x: number, y: number): number
}
// 使用类型别名定义
type Add3 = (x: number, y: number) => number

function add4(x: number, y: number) {
  return x + y
}
// add4(1, 2, 3)

// y是可选参数，可选参数必须位于必选参数之后
// 可选参数与末尾的默认参数共享参数类型
function add5(x: number, y?: number) {
  return y ? x + y : x
}
add5(1)
add5(1, 2)
// 给参数设置默认值 必选参数前，默认参数不可省略，明确传入undefined获得默认参数
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
console.log(add6(1, undefined, 2));

// 剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
// 函数重载
function add8(...rest: number[]): number
function add8(...rest: string[]): string
function add8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}

console.log(add8(1, 2, 3))
console.log(add8('a', 'b', 'c'));
// 为每个参数添加类型之后，可省略函数的返回值类型，ts能够根据返回语句自动推断返回值类型
// 完整函数类型,参数类型匹配就可以。不在乎参数名是否正确，函数和返回值类型之间使用 => 符号，如果函数没有任何返回值，也必须指定类型为void，不能留空
let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
  return x + y;
}

// this参数
interface Card {
  suit: string;
  card: number
}

interface Deck {
  suits: string[];
  cards: number[];
  // 调用createCardPicker时候，this是Deck类型的
  createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)
      return {
        suit: this.suits[pickedSuit],
        card: pickedSuit % 13
      }
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
console.log('pickcard', pickedCard)

// this在回调函数里
// 指定this类型后，需显式声明调用的对象
// interface UIElement {
//   addClickListener(onclick: (this: void, e: Event) => void): void;
// }

// class Handler {
//   info: string;
//   onClickGood(this: void, e: Event) {
//     console.log('clicked');
//   }
// }

// let h = new Handler()
// let uiElement: UIElement = {}
// uiElement.addClickListener(h.onClickGood)
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误
// console.log('test', pickCard('april'))