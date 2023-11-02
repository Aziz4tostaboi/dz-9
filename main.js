'use strict'
/*Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в котором ключ
 будет равен элементу массива, а значение (элемент * 100)
input: [1, 2, 3, 4, 5]
output: {1: 100, 2: 200, 3: 300 ...}*/
// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((obj, element) => {
//     obj[element] = element * 100;
//     return obj;
// }, {});
//
// console.log(result);

/*Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать.
 Написать функцию которая создает из массива skills объект
 с рандомными значениями от 1 до 100, использовать reduce и Math.random()
input: ['hook', 'blackhole']
output: {'hook': 20, 'blackhole: 100'}*/

// let invoker=['cold-snap','ghost-walk','ice-walk','E.M.P','tornado','alacrity','sun-strike','forge-spirit','chaos-meteor','deafening-blast'];
// const result=invoker.reduce((obj,skill)=>{
//     obj[skill]=Math.floor(Math.random()*100+1)
//     return obj;
// },{})
// console.log(result)

/*Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
    input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
    output: { even: 100, odd: 100 } // 100 это для примера, сумма должна высчитываться.*/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300];
//
// const result = numbers.reduce((obj, number) => {
//     if (number % 2 === 0) {
//         obj.odd += number;
//     } else {
//         obj.even += number;
//     }
//     return obj;
// }, { odd: 0, even: 0 });
// console.log(result)

/*Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' },
{ name: 'Cedric Diggory', house: 'Hufflepuff' }, { name: 'Tonks', house: 'Hufflepuff' },
{ name: 'Ronald Weasley', house: 'Gryfindor' }, { name: 'Hermione Granger', house: 'Gryfindor' }];
Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа.
Сделайте эту задачу двуми способоами:
    C помощью filter и map
C помощью reduce*/

// const wizard=[  { name: 'Harry Potter', house: 'Gryfindor' },
//     { name: 'Cedric Diggory', house: 'Hufflepuff' },
//     { name: 'Tonks', house: 'Hufflepuff' },
//     { name: 'Ronald Weasley', house: 'Gryfindor' },
//     { name: 'Hermione Granger', house: 'Gryfindor' }
// ];
// const filterWizard=wizard.filter(wizard=>wizard.house==="Hufflepuff").map(wizard=>wizard.name)
//
// const reduceWizard=wizard.reduce((result,wizard)=>{
//     if(wizard.house==='Hufflepuff'){
//         result.push(wizard.name)
//     }
//     return result
// },[])


/*Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
    От большего к меньшему
От меньшего к большему*/
// const arr=[3,4,1,2,7];
// arr.sort(function (a, b){
//     return a-b
// })
// const arrR=[3,4,1,2,7]
// arrR.sort(function (a, b){
//     return b-a
// })
/*Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки:
    От A-Z
// От Z-A*/
// const alphabet=['work','abylov','dota','js','main'];
// alphabet.sort()
// const visaVersaapphhabet=alphabet.sort().reverse()






