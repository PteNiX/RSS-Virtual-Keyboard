//containers
let container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

let title = document.createElement("div");
title.classList.add("title");
container.append(title);
title.append("RSS Virtual Keyboard");

let textArea = document.createElement("textarea");
textArea.classList.add("text-area");
container.append(textArea);

let keyboardContainer = document.createElement("div");
keyboardContainer.classList.add("keyboard-container");
container.append(keyboardContainer);

//keys

//`
let keyYo = document.createElement("div");
keyYo.classList.add("key-yo");
keyYo.classList.add("btn");
keyYo.classList.add("key");

keyboardContainer.append(keyYo);
keyYo.append("`");

//1
let key1 = document.createElement("div");
key1.classList.add("key1");
key1.classList.add("btn");
key1.classList.add("key");

keyboardContainer.append(key1);
key1.append("1");

//2
let key2 = document.createElement("div");
key2.classList.add("key2");
key2.classList.add("btn");
key2.classList.add("key");

keyboardContainer.append(key2);
key2.append("2");

//3
let key3 = document.createElement("div");
key3.classList.add("key3");
key3.classList.add("btn");
key3.classList.add("key");

keyboardContainer.append(key3);
key3.append("3");

//4
let key4 = document.createElement("div");
key4.classList.add("key4");
key4.classList.add("btn");
key4.classList.add("key");

keyboardContainer.append(key4);
key4.append("4");

//5
let key5 = document.createElement("div");
key5.classList.add("key5");
key5.classList.add("btn");
key5.classList.add("key");

keyboardContainer.append(key5);
key5.append("5");

//6
let key6 = document.createElement("div");
key6.classList.add("key6");
key6.classList.add("btn");
key6.classList.add("key");

keyboardContainer.append(key6);
key6.append("6");

//7
let key7 = document.createElement("div");
key7.classList.add("key7");
key7.classList.add("btn");
key7.classList.add("key");

keyboardContainer.append(key7);
key7.append("7");

//8
let key8 = document.createElement("div");
key8.classList.add("key8");
key8.classList.add("btn");
key8.classList.add("key");

keyboardContainer.append(key8);
key8.append("8");

//9
let key9 = document.createElement("div");
key9.classList.add("key9");
key9.classList.add("btn");
key9.classList.add("key");

keyboardContainer.append(key9);
key9.append("9");

//0
let key0 = document.createElement("div");
key0.classList.add("key0");
key0.classList.add("btn");
key0.classList.add("key");

keyboardContainer.append(key0);
key0.append("0");

//-
let keyMinus = document.createElement("div");
keyMinus.classList.add("key-minus");
keyMinus.classList.add("btn");
keyMinus.classList.add("key");

keyboardContainer.append(keyMinus);
keyMinus.append("-");

//=
let keyEqual = document.createElement("div");
keyEqual.classList.add("key-equal");
keyEqual.classList.add("btn");
keyEqual.classList.add("key");

keyboardContainer.append(keyEqual);
keyEqual.append("=");

//backspace
let backspace = document.createElement("div");
backspace.classList.add("backspace");
backspace.classList.add("btn");
backspace.classList.add("no-key");

keyboardContainer.append(backspace);
backspace.append("Backspace");

//tab
let tab = document.createElement("div");
tab.classList.add("tab");
tab.classList.add("btn");
tab.classList.add("no-key");

keyboardContainer.append(tab);
tab.append("Tab");

//q
let keyQ = document.createElement("div");
keyQ.classList.add("keyQ");
keyQ.classList.add("btn");
keyQ.classList.add("key");
keyQ.classList.add("change-key");

keyboardContainer.append(keyQ);
keyQ.append("q");

//w
let keyW = document.createElement("div");
keyW.classList.add("keyW");
keyW.classList.add("btn");
keyW.classList.add("key");
keyW.classList.add("change-key");

keyboardContainer.append(keyW);
keyW.append("w");

//e
let keyE = document.createElement("div");
keyE.classList.add("keyE");
keyE.classList.add("btn");
keyE.classList.add("key");
keyE.classList.add("change-key");

keyboardContainer.append(keyE);
keyE.append("e");

//r
let keyR = document.createElement("div");
keyR.classList.add("keyR");
keyR.classList.add("btn");
keyR.classList.add("key");
keyR.classList.add("change-key");

keyboardContainer.append(keyR);
keyR.append("r");

//t
let keyT = document.createElement("div");
keyT.classList.add("keyT");
keyT.classList.add("btn");
keyT.classList.add("key");
keyT.classList.add("change-key");

keyboardContainer.append(keyT);
keyT.append("t");

//y
let keyY = document.createElement("div");
keyY.classList.add("keyY");
keyY.classList.add("btn");
keyY.classList.add("key");
keyY.classList.add("change-key");

keyboardContainer.append(keyY);
keyY.append("y");

//u
let keyU = document.createElement("div");
keyU.classList.add("keyU");
keyU.classList.add("btn");
keyU.classList.add("key");
keyU.classList.add("change-key");

keyboardContainer.append(keyU);
keyU.append("u");

//i
let keyI = document.createElement("div");
keyI.classList.add("keyI");
keyI.classList.add("btn");
keyI.classList.add("key");
keyI.classList.add("change-key");

keyboardContainer.append(keyI);
keyI.append("i");

//o
let keyO = document.createElement("div");
keyO.classList.add("keyO");
keyO.classList.add("btn");
keyO.classList.add("key");
keyO.classList.add("change-key");

keyboardContainer.append(keyO);
keyO.append("o");

//p
let keyP = document.createElement("div");
keyP.classList.add("keyP");
keyP.classList.add("btn");
keyP.classList.add("key");
keyP.classList.add("change-key");

keyboardContainer.append(keyP);
keyP.append("p");

//[
let keyLeftBra = document.createElement("div");
keyLeftBra.classList.add("key-left-bracket");
keyLeftBra.classList.add("btn");
keyLeftBra.classList.add("key");
keyLeftBra.classList.add("change-key");

keyboardContainer.append(keyLeftBra);
keyLeftBra.append("[");

//]
let keyRightBra = document.createElement("div");
keyRightBra.classList.add("key-right-bracket");
keyRightBra.classList.add("btn");
keyRightBra.classList.add("key");
keyRightBra.classList.add("change-key");

keyboardContainer.append(keyRightBra);
keyRightBra.append("]");

//\
let slash = document.createElement("div");
slash.classList.add("slash");
slash.classList.add("btn");
slash.classList.add("key");
slash.classList.add("change-key");

keyboardContainer.append(slash);
slash.append("\\");

//del
let del = document.createElement("div");
del.classList.add("del");
del.classList.add("btn");
del.classList.add("no-key");

keyboardContainer.append(del);
del.append("Del");

//caps
let caps = document.createElement("div");
caps.classList.add("caps");
caps.classList.add("btn");
caps.classList.add("no-key");

keyboardContainer.append(caps);
caps.append("CapsLock");

//a
let keyA = document.createElement("div");
keyA.classList.add("keyA");
keyA.classList.add("btn");
keyA.classList.add("key");
keyA.classList.add("change-key");

keyboardContainer.append(keyA);
keyA.append("a");

//s
let keyS = document.createElement("div");
keyS.classList.add("keyS");
keyS.classList.add("btn");
keyS.classList.add("key");
keyS.classList.add("change-key");

keyboardContainer.append(keyS);
keyS.append("s");

//d
let keyD = document.createElement("div");
keyD.classList.add("keyD");
keyD.classList.add("btn");
keyD.classList.add("key");
keyD.classList.add("change-key");

keyboardContainer.append(keyD);
keyD.append("d");

//f
let keyF = document.createElement("div");
keyF.classList.add("keyF");
keyF.classList.add("btn");
keyF.classList.add("key");
keyF.classList.add("change-key");

keyboardContainer.append(keyF);
keyF.append("f");

//g
let keyG = document.createElement("div");
keyG.classList.add("keyG");
keyG.classList.add("btn");
keyG.classList.add("key");
keyG.classList.add("change-key");

keyboardContainer.append(keyG);
keyG.append("g");

//h
let keyH = document.createElement("div");
keyH.classList.add("keyH");
keyH.classList.add("btn");
keyH.classList.add("key");
keyH.classList.add("change-key");
keyboardContainer.append(keyH);
keyH.append("h");

//j
let keyJ = document.createElement("div");
keyJ.classList.add("keyJ");
keyJ.classList.add("btn");
keyJ.classList.add("key");
keyJ.classList.add("change-key");
keyboardContainer.append(keyJ);
keyJ.append("j");

//k
let keyK = document.createElement("div");
keyK.classList.add("keyK");
keyK.classList.add("btn");
keyK.classList.add("key");
keyK.classList.add("change-key");
keyboardContainer.append(keyK);
keyK.append("k");

//l
let keyL = document.createElement("div");
keyL.classList.add("keyL");
keyL.classList.add("btn");
keyL.classList.add("key");
keyL.classList.add("change-key");
keyboardContainer.append(keyL);
keyL.append("l");

//semicon
let semicolon = document.createElement("div");
semicolon.classList.add("semicolon");
semicolon.classList.add("btn");
semicolon.classList.add("key");
semicolon.classList.add("change-key");
keyboardContainer.append(semicolon);
semicolon.append(";");

//quotation
let quotation = document.createElement("div");
quotation.classList.add("quotation");
quotation.classList.add("btn");
quotation.classList.add("key");
quotation.classList.add("change-key");
keyboardContainer.append(quotation);
quotation.append("'");

//enter
let enter = document.createElement("div");
enter.classList.add("enter");
enter.classList.add("btn");
enter.classList.add("no-key");

keyboardContainer.append(enter);
enter.append("Enter");

//shift-left
let shiftLeft = document.createElement("div");
shiftLeft.classList.add("shift-left");
shiftLeft.classList.add("btn");
shiftLeft.classList.add("no-key");

keyboardContainer.append(shiftLeft);
shiftLeft.append("Shift");

//z
let keyZ = document.createElement("div");
keyZ.classList.add("keyZ");
keyZ.classList.add("btn");
keyZ.classList.add("key");
keyZ.classList.add("change-key");
keyboardContainer.append(keyZ);
keyZ.append("z");

//x
let keyX = document.createElement("div");
keyX.classList.add("keyX");
keyX.classList.add("btn");
keyX.classList.add("key");
keyX.classList.add("change-key");
keyboardContainer.append(keyX);
keyX.append("x");

//c
let keyC = document.createElement("div");
keyC.classList.add("keyC");
keyC.classList.add("btn");
keyC.classList.add("key");
keyC.classList.add("change-key");
keyboardContainer.append(keyC);
keyC.append("c");

//v
let keyV = document.createElement("div");
keyV.classList.add("keyV");
keyV.classList.add("btn");
keyV.classList.add("key");
keyV.classList.add("change-key");
keyboardContainer.append(keyV);
keyV.append("v");

//b
let keyB = document.createElement("div");
keyB.classList.add("keyB");
keyB.classList.add("btn");
keyB.classList.add("key");
keyB.classList.add("change-key");
keyboardContainer.append(keyB);
keyB.append("b");

//n
let keyN = document.createElement("div");
keyN.classList.add("keyN");
keyN.classList.add("btn");
keyN.classList.add("key");
keyN.classList.add("change-key");
keyboardContainer.append(keyN);
keyN.append("n");

//m
let keyM = document.createElement("div");
keyM.classList.add("keyM");
keyM.classList.add("btn");
keyM.classList.add("key");
keyM.classList.add("change-key");
keyboardContainer.append(keyM);
keyM.append("m");

//comma
let comma = document.createElement("div");
comma.classList.add("comma");
comma.classList.add("btn");
comma.classList.add("key");
comma.classList.add("change-key");
keyboardContainer.append(comma);
comma.append(",");

//dot
let dot = document.createElement("div");
dot.classList.add("dot");
dot.classList.add("btn");
dot.classList.add("key");
dot.classList.add("change-key");
keyboardContainer.append(dot);
dot.append(".");

//slash right
let slashRight = document.createElement("div");
slashRight.classList.add("slash-right");
slashRight.classList.add("btn");
slashRight.classList.add("key");
slashRight.classList.add("change-key");
keyboardContainer.append(slashRight);
slashRight.append("/");

//up
let up = document.createElement("div");
up.classList.add("up");
up.classList.add("btn");
up.classList.add("no-key");

keyboardContainer.append(up);
up.append("↑");

//shift-right
let shiftRight = document.createElement("div");
shiftRight.classList.add("shift-right");
shiftRight.classList.add("btn");
shiftRight.classList.add("no-key");

keyboardContainer.append(shiftRight);
shiftRight.append("Shift");

//ctrl-left
let ctrlLeft = document.createElement("div");
ctrlLeft.classList.add("ctrl-left");
ctrlLeft.classList.add("btn");
ctrlLeft.classList.add("no-key");

keyboardContainer.append(ctrlLeft);
ctrlLeft.append("Ctrl");

//win
let win = document.createElement("div");
win.classList.add("win");
win.classList.add("btn");
win.classList.add("no-key");

keyboardContainer.append(win);
win.append("Win");

//alt-left
let altLeft = document.createElement("div");
altLeft.classList.add("alt-left");
altLeft.classList.add("btn");
altLeft.classList.add("no-key");

keyboardContainer.append(altLeft);
altLeft.append("Alt");

//space
let space = document.createElement("div");
space.classList.add("space");
space.classList.add("btn");
space.classList.add("no-key");

keyboardContainer.append(space);
space.append("");

//alt-right
let altRight = document.createElement("div");
altRight.classList.add("alt-right");
altRight.classList.add("btn");
altRight.classList.add("no-key");

keyboardContainer.append(altRight);
altRight.append("Alt");

//left
let left = document.createElement("div");
left.classList.add("left");
left.classList.add("btn");
left.classList.add("no-key");

keyboardContainer.append(left);
left.append("←");

//down
let down = document.createElement("div");
down.classList.add("down");
down.classList.add("btn");
down.classList.add("no-key");

keyboardContainer.append(down);
down.append("↓");

//right
let right = document.createElement("div");
right.classList.add("right");
right.classList.add("btn");
right.classList.add("no-key");

keyboardContainer.append(right);
right.append("→");

//ctrl-right
let ctrlRight = document.createElement("div");
ctrlRight.classList.add("ctrl-right");
ctrlRight.classList.add("btn");
ctrlRight.classList.add("no-key");

keyboardContainer.append(ctrlRight);
ctrlRight.append("Ctrl");

//click animation
const buttons = document.querySelectorAll(".btn");

const animationBtnOpen = (e) => {
  e.target.classList.add("btn-active");
};

const animationBtnClose = (e) => {
  e.target.classList.remove("btn-active");
};

buttons.forEach((element) =>
  element.addEventListener("mousedown", animationBtnOpen)
);

buttons.forEach((element) =>
  element.addEventListener("mouseup", animationBtnClose)
);

buttons.forEach((element) =>
  element.addEventListener("mouseout", animationBtnClose)
);
