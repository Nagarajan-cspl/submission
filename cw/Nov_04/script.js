console.log(4);


console.log("|----------------------|")
console.log("|    loopscoping       |")
console.log("|----------------------|")
try{
let vals=[];
for(var x=0;x<4;x+=1){
    vals.push(x);
}
console.log(vals)
}
catch(e){
    console.log("Error in loopscoping:", e.message);
}


//const
try {
    // const & object mutation
    const obj = { par: 3 };
    // obj = 4; // would throw TypeError
    obj.par = 10; // fine
    console.log(obj);
} catch (e) {
    console.error("Error modifying const object:", e.message);
}

console.log("|----------------------|")
console.log("|      freeze/seal     |")
console.log("|----------------------|")
let ans=[];
for(let x=1;x<=20;x++){
    ans.push({x,y:2*x*x-5*x+3});
}
console.log(ans);
function demoFreezeSeal(obj) {
    'use strict';
    
    Object.freeze(obj);
    try {
        obj.par = 10;       // TypeError
    } catch (e) {
        console.error('Error changing property on frozen object:', e.message);
    }

    try {
        Object.seal(obj);   // No effect
        obj.newpar = 5;     // TypeError
    } catch (e) {
        console.error('Error adding property on seal object:', e.message);
    }

    return obj;
}


const sample = { par: 1 };
demoFreezeSeal(sample);
console.log(sample);

/*
function block(){
    function foo(){
        console.log(x);
    }
    foo();
    let x=3;
    foo();
}*/

console.log("|----------------------|")
console.log("|         Symbol       |")
console.log("|----------------------|")
var s1=Symbol('test');
var s2=Symbol('test');
console.log(s1===s2);

try{
const js_obj={
    name:"naga",age:22,salary:104,
    [Symbol.toPrimitive](hint){
        if(hint=="number"){
            return this.age;
        }
        if(hint=="default"||hint=="string"){
            return JSON.stringify(this);
        }
    }
}

console.log("string:"+`${js_obj}`);
console.log("default:",(js_obj+""));
console.log("number:", +js_obj);

console.log(vals)
}
catch(e){
    console.log("Error in symbol:", e.message);
}

console.log("|----------------------|")
console.log("|         class        |")
console.log("|----------------------|")

//class
try{
class example{
    constructor(){
        this.uname="ravi";
    }
    toString(){
        return this.uname;
    }
}
//obj creation
const ex_obj=new example();
console.log(ex_obj.toString());

//extending class
class example2 extends example{
    constructor(){
        super();
        this.uname="naga";
    }
}
//obj creation
const ex2_obj=new example2();
console.log(ex2_obj.toString());

console.log(ex2_obj instanceof example);
console.log(ex2_obj instanceof example2);
}
catch(e){
    console.log("Error in class:", e.message);
}
console.log("|----------------------|")
console.log("|    for - of loop     |")
console.log("|----------------------|")
//the useless loop
try{
var arr1=['a','b','c'];
for(var i of arr1){
    //if(arr1.hasOwnProperty(i)){
        console.log(i);
    //}
}

console.log([..."abcd"]);
var arr2=['a','b','c','d','e','f','g'];
let [first,second,...third]=arr2;
console.log(second);
}
catch(e){
    console.log("Error in for-of loop:", e.message);
}
console.log("|----------------------|")
console.log("|         Symbol       |")
console.log("|----------------------|")

//iterator protocol
try{
let it=[1,2,3][Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
}
catch(e){
    console.log("Error in symbol:", e.message);
}
console.log("|----------------------|")
console.log("|      Generator       |")
console.log("|----------------------|")
//generator
try{
function gen(n){
    return{
        [Symbol.iterator](){
            let i=0;
            return{
                next(){
                    return{
                        done:(i>n)?true:false,
                        value:i++};
                    }
                };
            }
        };
    }
    for(let n of gen(20)){
        console.log(n);
    }
}
    catch (e) {
        console.error("Error in generator:", e.message);
    }
console.log("|----------------------|")
console.log("|     sync/Async       |")
console.log("|----------------------|")
try{
const rating=[5,4,5];
let s=0;
const asyncFunction=async(a,b)=>a+b;
const syncFunction=(a,b)=>a+b;
rating.forEach(async(rating)=>{
    s=syncFunction(s,rating);
})
console.log(s);
}catch(e){
    console.error("Error in sync/Async:", e.message);
}
console.log("|----------------------|")
console.log("|     foreach          |")
console.log("|----------------------|")
try{
const logArrayele=(element,index)=>{
    console.log(`a[${index}]=${element}`);
};
[2,5,,9].forEach(logArrayele);
}
catch(e){
    console.error("Error in foreach:", e.message);
}
console.log("|----------------------|")
console.log("|     Arrays.from      |")
console.log("|----------------------|")
try{
let arr3={
    0:'Zero',
    1:'One',
    2:'Two',
    0:'Zeros',
    length:4
}
console.log(Array.from(arr3));
}
catch(e){
    console.error("Error in Arrays.from:", e.message);
}

console.log("|----------------------|")
console.log("| Arrays.prototype.keys|")
console.log("|----------------------|")
try{console.log(['a','b','c'].keys());
console.log([...['a','b','c'].keys()]);
var se=Array.from(['a','b','c'].entries());
console.log(se);
var se=['a','b','c'].entries();
console.log(se.next());
}
catch(e){
    console.error("Error in Arrays.prototype.keys:", e.message);
}



console.log("|----------------------|")
console.log("|      object.assign   |")
console.log("|----------------------|")

try{let x1={a:1};
Object.assign(x1,{b:2});
console.log(x1);
}
catch(e){
    console.error("Error in object.assign:",e.message);
}

console.log("|----------------------|")
console.log("|           map        |")
console.log("|----------------------|")
try{
    let m=new Map([...'abcd'].map(x=>[x,x+x]));
    console.log(JSON.stringify([...m]));
    console.log(JSON.stringify([...m.keys()]));
    console.log(JSON.stringify([...m.values()]));
    console.log(JSON.stringify([...m.entries()]));
}
catch(e){
    console.error("Error in map:",e.message);
}
console.log("|----------------------|")
console.log("|           set        |")
console.log("|----------------------|")
try{
let se1=new Set(['red','blue']);
se1.add('yellow')
console.log(se1);
se1.add('yellow')
console.log(se1);
se1.clear();
console.log(se1);
}
catch(e){
    console.error("Error in set:",e.message);
}
console.log("|----------------------|")
console.log("|           Gen        |")
console.log("|----------------------|")
try{
    function* genFour(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
let four=genFour();
console.log(four);

function* flatten(ar){
    for(let z of ar){
        if(z instanceof Array){
            yield* flatten(z);
        }
        else{
            yield z;
        }
    }
}
}
catch(e){
    console.error("Error in Generator yield:",e.message);
}
console.log("|----------------------|")
console.log("|       flatten        |")
console.log("|----------------------|")
try{
let t=flatten([1,[2,[3,[4,[5,[6,7]]]]]]);
console.log(t);
console.log([...t]);

let a={x2:1,y1:2};
let{x2:x2,y1:z}=a;
console.log(x2);
console.log(z);

let[a1,b=3,c=1]=[1,undefined];
console.log(a1);
console.log(b);
console.log(c);
}
catch(e){
    console.error("Error in flatten:",e.message);
}
console.log("|----------------------|")
console.log("|     destructing      |")
console.log("|----------------------|")
try{
let reverse=([x,...y])=>
    (y.length>0)?[...reverse(y),x]:[x];
console.log(reverse([1,2,3,4,5,6,7]));
console.log(reverse("nagarajan"));
}
catch(e){
    console.error("Error in destructing:",e.message);
}
