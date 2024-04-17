import { emberekLISTA } from "./adat.js";

for (let index = 0; index < emberekLISTA.length; index++) {
    const element = emberekLISTA[index];
    console.log(element)
}

/* adatLISTA.forEach((element, index) => {
    adatLISTA.forEach()
}); */

// első element jelenti a listának az elemeit minden esetben
emberekLISTA.forEach(function(ember, y){
    console.log(ember.nev,y)
    console.log(y)
})

/* emberekLISTA.forEach((element, index)=>{
    console.log(element)
    console.log(index)
}) */

const FERFIAK=emberekLISTA.filter(function(ember){ // (ember)=>
    return ember.nem===false  // !ember.nem  
})
console.log(FERFIAK)

//azokat az embereket szeretném, akik 20 évnél fiatalabbak
const FIATALOK= emberekLISTA.filter(function(ember){
    return ember.kor<20
})
console.log(FIATALOK)

// 10 évnél idősebb férfiak
const FERFIAK10FELETT = emberekLISTA.filter((ember)=>{
    return ember.kor>10 && !ember.nem //ember.nem===false
})

//RENDEZÉS
//  rendezzük fordított sorrendbe kor szerint az emereinket
emberekLISTA.sort(function(e1,e2){
    return e2.kor-e1.kor
})
console.log(emberekLISTA)

// véletlen sorrendű rendezés, vagyis kor szerinti keverés
// véletlen számot generálok -0,5 és + 0,5 között (fele fele lesz poz vagy neg)
emberekLISTA.sort(function(e1,e2){
    return Math.random()-0.5
})
console.log(emberekLISTA)