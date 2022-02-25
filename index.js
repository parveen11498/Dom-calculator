

var div = document.createElement("div")
div.className = "calculator";
div.style = "margin-left:480px;border:10px solid rgb(216, 208, 208);border-radius:4px; background-color:rgb(216, 208, 208); height: 420px; width: 340px;"
var txt = document.createElement("input");
txt.placeholder = "0";
txt.id = "result"
// txt.className="screen"
txt.style = "height:50px; padding-left:40px;  border-radius:4px; margin-left:30px; margin-top:50px; margin-bottom:50px"
var brk = document.createElement("br")
//creating buttons
var b7 = createbutt("button", "7", "7")
b7.addEventListener("click", seven)
var b8 = createbutt("button", "8", "8")
b8.addEventListener("click", eight)
var b9 = createbutt("button", "9", "9")
b9.addEventListener("click", nine)
var bplus = createb("button", "+", "add")
bplus.addEventListener("click", plus)
var b4 = createbutt("button", "4", "4")
b4.addEventListener("click", four)
var b5 = createbutt("button", "5", "5")
b5.addEventListener("click", five)
var b6 = createbutt("button", "6", "6")
b6.addEventListener("click", six)
var bminus = createb("button", "-", "subtract")
bminus.addEventListener("click", minus)
var b1 = createbutt("button", "1", "1")
b1.addEventListener("click", one)
var b2 = createbutt("button", "2", "2")
b2.addEventListener("click", two)
var b3 = createbutt("button", "3", "3")
b3.addEventListener("click", three)
var bmult = createb("button", "*", "bmult")
bmult.addEventListener("click", mult)
var clr = createbutt("button", "C", "clear")
clr.addEventListener("click", clear)
clr.style="background-color:red;color:white;font-weight:bolder;border-radius:50%;width:13%; height:9%;margin-left:28px;"
var b0 = createbutt("button", "0", "0")
b0.addEventListener("click", zero)
var beq = createbutt("button", "=", "equal")
beq.addEventListener("click", equal)
beq.style="background-color:green;color:white;border-radius:50%;width:13%; height:9%;margin-left:28px;font-weight:bolder"
var divis = createb("button", "/", "divis")
divis.addEventListener("click", division)
var bdot = createbutt("button", ".", "bdot")
bdot.addEventListener("click", dot)
var bmodulas = createb("button", "%", "bmodulas")
bmodulas.addEventListener("click", modulas)


var bst = createb("button", "storage", "bst")
bst.style="border-radius:50%;width:21%; height:9%;margin-left:28px;"
bst.addEventListener("click", storage)

div.append(txt, b7, b8, b9, bplus, b4, b5, b6, bminus, b1, b2, b3, bmult, clr, b0, beq, divis, bdot,bmodulas, bst)
document.body.append( div)

function createbutt(elename, value, idname) {
    let res = document.createElement(elename)
    res.innerHTML = value
    res.id = idname

    res.style = "background-color:black; color:white;font-weight:bolder;border-radius:50%; width:13%; height:9%; margin:5px;margin-left:28px;"
    return res;
}
function createb(elename, value, idname) {
    let ress = document.createElement(elename)
    ress.innerHTML = value
    ress.id = idname

    ress.style = "background-color:rgb(252, 230, 31); color:white;font-weight:bolder;border-radius:50%; width:13%; height:9%; margin:5px;margin-left:28px;"
    return ress;
}

function seven() {
    let sevenbtn = document.getElementById('result').value += "7"
    
}
function eight() {
    let eightbtn = document.getElementById('result').value += "8"
}

function nine() {
    let ninetbtn = document.getElementById('result').value += "9"
}

function plus() {
    let plustbtn = document.getElementById('result').value += "+"
}

function four() {
    let fourtbtn = document.getElementById('result').value += "4"
}

function five() {
    let fivetbtn = document.getElementById('result').value += "5"
}

function six() {
    let sixtbtn = document.getElementById('result').value += "6"
}

function minus() {
    let minustbtn = document.getElementById('result').value += "-"
}
function one() {
    let onetbtn = document.getElementById('result').value += "1"
}

function two() {
    let twotbtn = document.getElementById('result').value += "2"
}

function three() {
    let threetbtn = document.getElementById('result').value += "3"
}

function mult() {
    let multtbtn = document.getElementById('result').value += "*"
}
function clear() {
    let cltbtn = document.getElementById('result').value =""
}
function zero() {
    let zerotbtn = document.getElementById('result').value += "0"
}
let storagedata = []
function equal() {

    let x = document.getElementById('result').value

    let calculations = x.split("")

    let l = calculations.length

    if (calculations[0] == '+' || calculations[0] == '.' || calculations[0] == '-' || calculations[0] == '*' || calculations[0] == '%' || calculations[0] == '/' || calculations[0] == ' ') {
        alert("only numbers are allowed")
    }
    else {
        let y = eval(x);


        document.getElementById('result').value = y
        storagedata.push(x)

        return y


    }
}
function division() {
    let divitbtn = document.getElementById('result').value += "/"
}
function dot() {
    let dottbtn = document.getElementById('result').value += "."
}
function modulas() {
    let mobtn = document.getElementById('result').value += "%"}

 function datastorage(){
    return storagedata
  }

function storage(){
    let data = datastorage()
    console.log(data)
     document.getElementById("result").value=data
    // storagedispaly.innerHTML = data.join(" ,")
  
  }

    
    
