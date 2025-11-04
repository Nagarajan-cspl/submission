console.log(4);

//loop scoping
let vals=[];
for(var x=0;x<4;x+=1){
    vals.push(x);
}
console.log(vals)

//const
const obj={par:3};
//obj=4;    type error

obj.par=10; //fine 
console.log("-----------------------------------------------------")
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
        console.error('Error adding property on frozen object:', e.message);
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
console.log("-----------------------------------------------------")
//sybmbol
var s1=Symbol('test');
var s2=Symbol('test');
console.log(s1===s2);

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

console.log("-----------------------------------------------------")

//class
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

console.log("-----------------------------------------------------")
//the useless loop
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

console.log("-----------------------------------------------------")

//iterator protocol
let it=[1,2,3][Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log("-----------------------------------------------------")
//generator
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
console.log("------------async and sync--------------------------")
const rating=[5,4,5];
let s=0;
const asyncFunction=async(a,b)=>a+b;
const syncFunction=(a,b)=>a+b;
rating.forEach(async(rating)=>{
    s=syncFunction(s,rating);
})
console.log(s);
console.log("-------------foreach----------------------------------------")


const logArrayele=(element,index)=>{
    console.log(`a[${index}]=${element}`);
};
[2,5,,9].forEach(logArrayele);

console.log("---------------------Arrays.from--------------------------------")
let arr3={
    0:'Zero',
    1:'One',
    2:'Two',
    0:'Zeros',
    length:4
}
console.log(Array.from(arr3));

console.log("-------------Arrays.prototype.keys--------------------------")
console.log(['a','b','c'].keys());
console.log([...['a','b','c'].keys()]);
var se=Array.from(['a','b','c'].entries());
console.log(se);
var se=['a','b','c'].entries();
console.log(se.next());
console.log("-------------object.assign--------------------------")
let x1={a:1};
Object.assign(x1,{b:2});
console.log(x1);

console.log("-------------map--------------------------")
let m=new Map([...'abcd'].map(x=>[x,x+x]));
console.log(JSON.stringify([...m]));
console.log(JSON.stringify([...m.keys()]));
console.log(JSON.stringify([...m.values()]));
console.log(JSON.stringify([...m.entries()]));

console.log("-------------set--------------------------")
let se1=new Set(['red','blue']);
se1.add('yellow')
console.log(se1);
se1.add('yellow')
console.log(se1);
se1.clear();
console.log(se1);

console.log("-------------generator--------------------------")
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
console.log("-------------flatten--------------------")
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
console.log("-----------destructing reverse---------------")
let reverse=([x,...y])=>
    (y.length>0)?[...reverse(y),x]:[x];
console.log(reverse([1,2,3,4,5,6,7]));
console.log(reverse("nagarajan"));
