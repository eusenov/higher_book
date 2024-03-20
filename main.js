
///////// Стилизация ///////// 

// Дана также кнопка. По клику на кнопку увеличьте ширину и высоту дива на 50px.
// function getPlusWidthToElem(elem, plusWidth){
//     let widthPx = elem.style.width; 
//     console.log(widthPx);
//     let widthNm = parseInt(widthPx); 
//     widthPx = (widthNm + plusWidth) + 'px'; 
//     console.log(widthPx);
// }

// let elem = document.querySelector('#elem');
// getPlusWidthToElem(elem, 50); 

// По клику на кнопку увеличьте ширину и высоту дива на 10%.
// function getPlusPercentsToElem(elem, percent){
//     let widthPx = elem.style.width; 
//     let heightPx = elem.style.height;
//     console.log('widthPx: ', widthPx);
//     console.log('heightPx: ', heightPx);

//     let widthNm = parseInt(widthPx); 
//     let heightNm = parseInt(heightPx);

//     widthPx = (widthNm + ((widthNm/100)*percent)) + 'px'; 
//     heightPx = (heightNm + ((heightNm/100)*percent)) + 'px'; 
//     console.log('widthPx: ', widthPx);
//     console.log('heightPx: ', heightPx);
// }

// let elem = document.querySelector('#elem');
// getPlusPercentsToElem(elem, 10)

// увеличьте ширину и высоту элемента в два раза.
// function getPlusWidthAndHeightToElem(elem){
//     let elemStylesObj = getComputedStyle(elem); 
//     let widthPx = elemStylesObj.width; 
//     let heightPx = elemStylesObj.height; 
//     let widthNm = parseInt(widthPx); 
//     let heightNm = parseInt(heightPx); 
//     widthPx = (widthNm*2) + 'px'; 
//     heightPx = (heightNm*2) + 'px'; 
//     console.log(widthPx);
//     console.log(heightPx);
// }
// let elem = document.querySelector('#elem');

// getPlusWidthAndHeightToElem(elem)


// Даны абзацы с числами. Переберите эти абзацы циклом и абзацы, содержащие 
// четные числа, покарасьте в красный цвет, а содержащие нечетные - в зеленый.
// let ps = document.querySelectorAll('p');

// ps.forEach(p =>{
//     if(Number(p.textContent)%2==0){
//         p.classList.add('red');
//     } else{
//         p.classList.add('green');
//     }
// })


// Даны абзацы. Сделайте так, чтобы каждый абзац по первому клику на него 
// красился в красный цвет, а по второму клику - красился обратно в черный.
// let div = document.querySelector('div'); 

// div.addEventListener('click', ()=>{
//     div.classList.toggle('active'); 
// })


// Дан инпут. По потери фокуса проверьте введенное в него число. 
// Если это число до десяти, то покрасьте инпут в зеленый цвет, 
// если от десяти до двадцати - в желтый, а если более двадцати - в красный.

// let input = document.querySelector('input'); 

// input.addEventListener('keypress', (event)=>{
//     if(event.key === 'Enter'){
//         if (input.value.length < 10){
//             input.dataset.type = 'success'; 
//         } else if (input.value.length >= 10 && input.value.length < 20){
//             input.dataset.type = 'warning'; 
//         } else if (input.value.length > 20){
//             input.dataset.type = 'error'; 
//         }
//     }
// })

///////// Метрики элементов\окна ///////// 
// let elem = document.querySelector('#elem');

// console.log(elem.clientWidth);  // ширина 350 
// console.log(elem.clientHeight); // высота 200
// console.log('');
// console.log(elem.offsetWidth);  // ширина 399 (если убрать боредры будет 350)
// console.log(elem.offsetHeight); // высота 249 (если убрать бордеры будет 200)

// let topSpan = document.querySelector('.top span')
// let leftSpan = document.querySelector('.left span')
// elem.addEventListener('scroll', ()=>{
//     topSpan.textContent = elem.scrollTop;
//     leftSpan.textContent = elem.scrollLeft;
// })

// По нажатию на кнопку распахните элемент на всю высоту.
// let elem = document.querySelector('#elem');
// elem.scrollTop = 0; 
// document.addEventListener('click', ()=>{
//     elem.style.height = elem.scrollHeight + 'px';
//     elem.style.width = elem.scrollWidth + 'px';
// })


// №3⊗jsSpMWSGS
// По нажатию на кнопку прокрутите окно на самый верх.
// №4⊗jsSpMWSGS
// По нажатию на кнопку прокрутите окно на самый низ.

// let elem = document.querySelector('#elem');
// elem.style.height = elem.scrollHeight + 'px';

// document.addEventListener('click', () => {
//     // document.documentElement.scrollTop = document.body.scrollHeight - document.documentElement.clientHeight;
//     document.documentElement.scrollTop = 0; 
// });

// let elem = document.querySelector('#elem');
// let blueDiv = document.querySelector('.blue-div'); 
// elem.style.height = elem.scrollHeight + 'px';

// document.addEventListener('click', ()=>{
//     // document.documentElement.scrollTo({
//     //     top: 0,
//     //     left: 0,
//     //     behavior: 'smooth'
//     // });

//     blueDiv.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center',
//         inline: 'center',
//     })
// })

///////// Коллекции Map /////////

// Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, сделайте ключами коллекции объекты, 
// а значениями - соответствующие массивы.

// Объекты
// let person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
  
// let car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2022
// };

// let fruit = {
//     name: 'Apple',
//     color: 'Red',
//     taste: 'Sweet'
// };

// let numbers = [1, 2, 3, 4, 5];
// let colors = ['Red', 'Green', 'Blue'];
// let cities = ['New York', 'Paris', 'Tokyo'];

// let map = new Map;

// map.set(numbers, person)
// map.set(colors, car)
// map.set(cities, fruit)

// // for (let [key, elem] of map) {
// // 	console.log('key: ', key);
// // 	console.log('elem: ', elem);
// // }

// let keys = map.keys();
// let entries = map.entries();
// for(let el of entries){
//     console.log(el);
// }


// let elems = document.querySelectorAll('p'); 

// let i = 1;
// let map = new Map; 
// for (const el of elems) {
//     map.set(el, ' ' + i++)
//     el.addEventListener('click', ()=>{
//         el.textContent += map.get(el); 
//     })
// }


// №2⊗jsSpMpAp

// Даны инпуты. В каждый инпут можно ввести число. 
// Пусть по нажатию на Enter инпут запоминает введенное число. 
// Сделайте так, чтобы по потери фокуса в инпуте 
// в консоль выводился массив всех введенных ранее в инпут чисел.
// let inputs = document.querySelectorAll('input'); 
// let map = new Map; 
// for (const input of inputs) {
//     let arr = []; 
//     input.addEventListener('keypress', (event)=>{
//         if(event.key === 'Enter'){
//             arr.push(input.value); 
//             map.set(input, arr)
//         }
//     })
//     input.addEventListener('blur', ()=>{
//         console.log(map.get(input));
//     })
// }

///////// Коллекции Set /////////
// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set(arr); 

// for (let elem of set) {
// 	console.log(elem);
// }

// Даны абзацы и кнопка. Пользователь кликает на эти абзацы 
// в произвольном порядке. 
// Сделайте так, чтобы по нажатию на кнопку в конец каждого абзаца, 
// на который был совершен клик, был добавлен восклицательный знак.

// let button = document.querySelector('button'); 
// let texts = document.querySelectorAll('p');

// let set = new Set; 

// texts.forEach(text =>{
// 	text.addEventListener('click', ()=>{
// 		set.add(text); 
// 	})
// })
// button.addEventListener('click', ()=>{
// 	set.forEach(oneof =>{
// 		oneof.textContent += ' !'; 
// 	})
// })


///////// Псевдомассивы ///////// 

// С помощью метода slice получите все абзацы, кроме первого и последнего.
// let elems = document.querySelectorAll('p'); 
// let arr = [...elems];

// let arr2 = arr.slice(1, -1);

// arr2.forEach(oneof =>{
// 	console.log(oneof.textContent);
// })


// let parent = document.querySelector('.parent');
// let texts = document.getElementsByClassName('text')
// let nodes = parent.children; 

// console.log(texts);

///////// Символы ///////// 
// Пусть у вас есть несколько объектов. Добавьте каждому из них ключ в виде символа  с именем 'sum'. 
// Сделайте в этом ключе функцию, которая будет возвращать сумму элементов объекта.
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let obj2 = {f: 1, g: 2, h: 3, i: 4, j: 6};

// function func1(obj) {
// 	let sym = Symbol.for('sum');
//     obj[sym] = () =>{
//         let sum = 0; 

//         for (key in obj){
//             sum += obj[key]; 
//         }

//         console.log(sum);
//     }
//     obj[sym]();
// 	return console.log(obj);;
// }

// func1(obj)
// func1(obj2)

// let arr = [1, 2, 3];
// let func = arr[Symbol.iterator]();
// console.log(func);

///////// Итераторы ///////// 
// Создайте итератор, каждый вызов которого будет возвращать числа от 10 до нуля.
// function *func(){
//     for (let index = 10; index > 0; index--) {
//         yield index; 
//     }
// }
// let iter = func(); 

// for (let index = 0; index < 12; index++) {
//     console.log(iter.next());
// }

// №2⊗jsSpItGL

// Сделайте генератор, который параметром будет принимать число. 
// Пусть каждый вызов итератора уменьшает число на единицу, пока не будет достигнут ноль.
// function *func(num){
    // for (let index = num; index > 0; index--) {
    //     yield index; 
    // }
// }
// let iter = func(9); 

// for (let index = 0; index < 12; index++) {
//     console.log(iter.next());
// }

// №3⊗jsSpItGL

// Сделайте генератор, который параметром будет принимать число. 
// Пусть каждый вызов итератора уменьшает число в два раза и возвращает результат. 
// И так, пока число не станет меньше единицы.
// function *func(num){
//     while (num>=2) {
//         num = num/2;
//         yield num; 
//     }
// }
// let iter = func(12); 

// for (let index = 0; index < 8; index++) {
//     console.log(iter.next());
// }

// №4⊗jsSpItGL

// Сделайте итератор, каждый вызов которого будет возвращать следующую степень двойки.
// function *func(){
//     let num = 2; 
//     while(true){
//         num = num**2; 
//         yield num;     
//     }
// }
// let iter = func(); 

// for (let index = 0; index < 4; index++) {
//     console.log(iter.next());
// }

// №5⊗jsSpItGL

// Сделайте итератор, каждый вызов которого будет возвращать следующее число Фибоначчи.
// function *func(){
//     let count = 0; 
//     let sum = 0; 
//     let arr = [0, 1]
//     for (let index = 2; index > 0; index++) {
//         count++;    
//         if (count==1){
//             sum = arr[0] + arr[1]; 
//             arr.push(index);
//             yield sum; 
//         } else {
//             sum = arr[count-1] + arr[count]; 
//             arr.push(index)
//             yield sum;
//         }
//     }
// }
// let iter = func(); 

// for (let index = 0; index < 5; index++) {
//     console.log(iter.next());
// }

// console.log(' ');
// console.log(' ');
// console.log(' ');


// function *func(){
//     let count = 0; 
//     for (let index = 2; index > 0; index++) {
//         count++;
//         yield count; 
//     }
// }
// let iter = func(); 

// for (let index = 0; index < 5; index++) {
//     console.log(iter.next());
// }

// Исправьте ошибку 
// function *func() {
// 	for (let i = 1; i <= 3; i++) {
// 		yield i;
// 	}
// }

// for (let elem of func()) {
// 	console.log(elem);
// }

// for (let elem of func()) {
// 	console.log(elem);
// }
// Сделайте итератор, который будет перебирать объект и каждым вызовом возвращать массив, 
// в нулевом элементе которого будет лежать ключ, а в первом элементе - значение элемента объекта. Пример:

// function *func(obj){
//     for (const key in obj) {
//         let arr = []; 
//         arr.push(key); 
//         arr.push(obj[key]);
//         yield arr;
//     }
// }
// let obj = {a: 1, b: 2, c: 3}; 

// let iter = func(obj); 

// for(elem of iter){
//     console.log(elem);
// }

// // // // // // // 
// let obj = {a: 1, b: 2, c: 3};

// for (let elem of obj) {
// 	console.log(elem);
// }   
// Должен вывести:
// {key: 'a', val: 1}
// {key: 'b', val: 2}
// {key: 'c', val: 3}

// let obj = {a: 1, b: 2, c: 3};

// obj[Symbol.iterator] = function *func(){
//     for (const key in obj) {
//         let obj2 = {}; 
//         obj2["key"] = key; 
//         obj2['val'] = obj[key]; 
//         yield obj2;
//     }
// }

// for (let elem of obj) {
// 	console.log(elem);
// }   

// №1⊗jsSpItDA

// Дано число. Найдите сумму его цифр.
// let num = 123; 
// let res = [...String(num)].map(Number).reduce(function(sum, elem){
//     return sum+elem; 
// }); 
// console.log(res); 

// №1⊗jsSpItDEN

// Дана HTML таблица. Пронумеруйте каждую ячейку этой таблицы.
// function numerationTable(){
//     let allTds = document.querySelectorAll('td'); 
//     for([index, elem] of allTds.entries()){
//         elem.textContent = index; 
//     }
// }
// let body = document.body;
// let table = document.createElement('table'); 
// for (let index = 0; index < 4; index++) {
//     let tr = document.createElement('tr'); 
//     for (let index = 0; index < 4; index++) {
//         let td = document.createElement('td'); 
//         tr.append(td); 
//     }
//     table.append(tr); 
// }
// body.append(table); 
// numerationTable(); 

// // // // // // //  
// let elems = document.querySelectorAll('p');

// for (let [key, {id, textContent}] of elems.entries()){ 
// 	console.log(key, id, textContent);
// }

///////// Формат JSON /////////
// №3⊗jsSpJnTS

// Дана строка в формате JSON, содержащая имена юзеров:

// let json = '["user1","user2","user3","user4","user5"]';
// Выведите эти имена в виде списка ul.

// let json = '["user1","user2","user3","user4","user5"]';

// let arrOfJson = JSON.parse(json); 
// let body = document.body; 
// let ul = document.createElement('ul'); 
// arrOfJson.forEach(el => {
//     let li = document.createElement('li');
//     li.textContent = el; 
//     ul.append(li); 
// });
// body.append(ul); 

// №4⊗jsSpJnTS

// Дана строка в формате JSON, содержащая массив с данными работников:

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
// Выведите этих работников на экран в виде HTML таблицы.
// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;

// let arr = JSON.parse(json); 
// let body = document.body; 
// let table = document.createElement('table'); 
// arr.forEach(el => {
//     let tr = document.createElement('tr'); 
//     let vals = Object.values(el);
//     vals.forEach(el =>{
//         let td = document.createElement('td'); 
//         td.textContent = el; 
//         tr.append(td); 
//     })
//     table.append(tr); 
// });
// body.append(table); 

// №3⊗jsSpJnFS

// Дан следующий HTML:

// <table>
// 	<tr>
// 		<th>Фамилия</th>
// 		<th>Имя</th>
// 		<th>Отчество</th>
// 	</tr>
// 	<tr>
// 		<td>Иванов</td>
// 		<td>Иван</td>
// 		<td>Иванович</td>
// 	</tr>
// 	<tr>
// 		<td>Петров</td>
// 		<td>Петр</td>
// 		<td>Петрович</td>
// 	</tr>
// 	<tr>
// 		<td>Сидоров</td>
// 		<td>Сидор</td>
// 		<td>Сидорович</td>
// 	</tr>
// </table>
// Получите представленные данные в формате JSON в виде объекта с ключами surname, name, patronymic.
// function getSmobj(newObj, tds){
//     newObj.surname = tds[0].textContent; 
//     newObj.name = tds[1].textContent; 
//     newObj.patronymic = tds[2].textContent; 
//     return newObj; 
// }
// let table = document.querySelector('table'); 
// let trs = document.querySelectorAll('tr'); 
// let arr = []; 
// for (let index = 1; index < trs.length; index++) {
//     let newObj = {}; 
//     let tds = trs[index].querySelectorAll('td');
//     let smObj = getSmobj(newObj,tds);
//     arr.push(smObj); 
// }

// let json = JSON.stringify(arr);
// console.log(json);

///////// Хранилище ///////// 
// №1⊗jsSpSgDt

// Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами. 
// Запустите этот скрипт, чтобы данные сохранились. Затем напишите скрипт, который получит 
// ваши три числа из локального хранилища и найдет их сумму. Запустите второй скрипт и убедитесь 
// в его работоспособности.
// localStorage.setItem('num1', 1); 
// localStorage.setItem('num2', 2); 
// localStorage.setItem('num3', 3); 

// console.log(Number(localStorage.getItem('num1')) + Number(localStorage.getItem('num2')) + Number(localStorage.getItem('num3')));

// №1⊗jsSpSgSO

// По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени. 
// Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт.

// localStorage.clear(); 

// let time2 = localStorage.getItem('time2');
// let date = new Date(); 
// let now = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 

// if (!time2){
//     localStorage.setItem('time2', now); 
// } else {
//     let date = new Date(); 
//     let now2 = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 
//     localStorage.setItem('time3', now2); 
// }


// №3⊗jsSpSgSO
// 
// Дан инпут. По потери фокуса в этом инпуте сохраните его значение в локальное хранилище. 
// При следующем заходе пользователя на страницу установите в инпуте сохраненный ранее текст.
// localStorage.clear(); 

// let input = document.querySelector('input'); 
// let val = localStorage.getItem('val'); 

// if(!val){
//     input.addEventListener('keypress', (event)=>{
//         if(event.key === "Enter"){
//             localStorage.setItem('val', input.value); 
//         }
//     })
// } else {
//     input.value = val; 
// }

// №1⊗jsSpSgDRw

// Пользователь заходит на сайт, затем обновляет страницу, затем еще раз обновляет и так далее. 
// Сделайте счетчик обновления страницы. Каждый раз при обновлении выводите значение счетчика на экран.
// localStorage.clear(); 

// let p = document.querySelector('p'); 

// let entrance = localStorage.getItem('entrance'); 

// if(!entrance){
//     localStorage.setItem('entrance', 0); 
// } else{
//     localStorage.setItem('entrance', ++entrance); 
// }

// p.textContent = entrance; 

// Пусть счетчик обнуляется после того, как дойдет до 10.
// localStorage.clear(); 

// let p = document.querySelector('p'); 

// let entrance = localStorage.getItem('entrance'); 

// if(!entrance){
//     localStorage.setItem('entrance', 0); 
// } else{
//     if(entrance==10){
//        entrance = 0;  
//     } else {
//         ++entrance; 
//     }
//     localStorage.setItem('entrance', entrance); 
// }

// p.textContent = entrance; 

// №1⊗jsSpSgSS

// Даны инпуты и кнопка. По нажатию на кнопку 
// получите тексты всех инпутов в виде массива и сохраните 
// этот массив в локальное хранилище.
// let inputs = document.querySelectorAll('input');
// let arr = []; 
// inputs.forEach(input =>{
//     arr.push(input); 
// });

// localStorage.setItem('arr', JSON.stringify(arr));

// let str = localStorage.getItem('arr');
// let res = JSON.parse(str);

// console.log(res);

///////// Регулярные выражения ////////
// №3⊗jsSpREInr

// Дана строка:

// let str = 'aba aca aea abba adca abea';
// Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.
// let str = 'aba aca aea abba adca abea';
// console.log(str.replace(/ab.a/g, '!'));

// №1⊗jsSpREGB
// 
// Дана строка:
// 
// let str = 'ab abab abab abababab abea';
// Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.

// let str = 'ab abab abab abababab abea';
// console.log(str.replace(/(ab)+/g, '!'));

// №6⊗jsSpREESCh
// 
// Дана строка:
// 
// let str = '[abc] {abc} abc (abc) [abc]';
// Напишите регулярку, которая найдет строки в квадратных скобках и заменит их на '!'.

// №1⊗jsSpREESCh

// Дана строка:

// let str = 'a.a aba aea';
// Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.

// let str = 'a.a aba aea';
// console.log(str.replace(/a\.a/, '!'));

// №3⊗jsSpREESCh

// Дана строка:

// let str = '23 2+3 2++3 2+++3 345 567';
// Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).
// let str = '23 2+3 2++3 2+++3 345 567';
// console.log(str.replace(/2\++3/g, '!'));


// №6⊗jsSpREESCh

// Дана строка:

// let str = '[abc] {abc} abc (abc) [abc]';
// Напишите регулярку, которая найдет строки в квадратных скобках и заменит их на '!'.
// let str = '[abc] {abc} abc (abc) [abc]';
// console.log(str.replace(/\[.+?\]/g, '!'));

// №4⊗jsSpREChG

// Дана строка:

// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b',
//  а между ними - не число и не пробел.
// console.log(str.replace(/a[\d\s]b/g, '!'));

// №6⊗jsSpREChG
// 
// Дана строка:
// 
// let str = 'ave a#a a2a a$a a4a a5a a-a aca';
// Напишите регулярку, которая заменит все пробелы на '!'.
// console.log(str.replace(/\s/g, '!'));


// №4⊗jsSpREChS
// 
// Дана строка:
// 
// let str = 'aba aea a9a a7a aga';
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', 
// а между ними - буква от a до f и от j до z.
// console.log(str.replace(/a[a-f1-8]a/g, '!'));


// №8⊗jsSpREChS

// Дана строка:

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', 
// а между ними - маленькие латинские буквы и цифры, не затронув остальных.
// console.log(str.replace(/a[a-z1-9]+a/g, '!'));


// №3⊗jsSpREChSI

// Напишите регулярку, которая найдет строки по шаблону: буква 'x', 
// затем НЕ большая латинская буква от 1 и более раз, буква 'z'.
// let str = 'xqasdz xSdKz xz xlpz';
// console.log(str.replace(/x[a-z]+z/g, '!'));

// №1⊗jsSpRESG
// 
// Напишите регулярку, которая найдет строки по шаблону: цифра или точка от 1 и более раз.
// let str = 'xd x12.z xAz x.z x@z';
// console.log(str.replace(/[\d.]+/g, '!'));

// №2⊗jsSpREHHy

// Дана строка:

// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// Найдите все строки по следующему шаблону: буква 'x', затем или доллар, 
// или дефис или плюс, потом буква 'z'.
// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// console.log(str.replace(/x[/$/+-]z/g, '!'));

// №2⊗jsSpRELB

// Дана строка:

// let str = 'abc def xyz';
// Напишите регулярку, которая найдет последнюю подстроку из букв.
// console.log(str.replace(/xyz$/g, '!')); 


// 114 
// // // 1
// let str = 
// `abc
// def
// ghi
// jkl`; 

// console.log(str.replace(/$/gm, '!'));

// /// // 2
// let str = 
// ` abc
//  def
//  ghi
//  jkl`; 

// console.log(str.replace(/^/gm, '!'));

// /// // 3
// let str = 
// ` 
//  abc
//  def
//  ghi
//  jkl
// `; 

// let res = str.replace(/^/g, '!');  
// res = res.replace(/$/g, '!');  

// console.log(res);

// /// // 4
// let str = 
// `
//  abc
//  def
//  ghi
//  jkl
// `; 

// let res = str.replace(/^/gm, '!'); 

// console.log(res);

// /// // 5
// let str = 
// `
//  abc
//  def
//  ghi
//  jkl
// `; 

// let res = str.replace(/$/gm, '!'); 

// console.log(res);

// /// // 6
// let str = 
// `
//  abc
//  def
//  ghi
//  jkl
// `; 

// let res = str.replace(/^/gm, '!'); 
// res = res.replace(/^!/g, ''); 
// res = res.replace(/!$/g, '');

// console.log(res);

// 115

// №1⊗jsSpREOC

// Дана строка:

// let str = 'ae2ea aeea aea axa axxa axx1a';
// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', 
// а между ними - или буква 'e' любое количество раз или буква 'x' любое количество раз.

// console.log(str.replace(/a(x+|e+)a/g, '!'));

// №2⊗jsSpREOC

// Дана строка:

// let str = 'aeeea aeea aea axa axxa axxxa';
// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', 
// а между ними - или буква 'e' два раза или буква 'x' любое количество раз.

// console.log(str.replace(/a(x+|ee)a/g, '!'));

// №1⊗jsSpREMT

// Определите, начинается ли переданная строка с 'http://'.
  
// /^http:///.test('http://example.com'); 

// console.log(/^http:\/\//.test('https://example.com'));

// №2⊗jsSpREMT

// Определите, начинается ли переданная строка с 'http://' или с 'https://'.
// console.log(/^http:\/\/|https:\/\//.test('https://example.com'));

// №3⊗jsSpREMT

// Определите, заканчивается ли переданная строка расширением 'txt', 'html' или 'php'.

// console.log(/txt|html|php$/.test('exmp.html'));

// №4⊗jsSpREMT

// Определите, заканчивается ли переданная строка расширением 'jpg' или 'jpeg'.

// №5⊗jsSpREMT

// Определите, заканчивается ли переданная строка расширением 'jpg', 'jpeg' или 'png'.

// №6⊗jsSpREMT

// Определите, является ли строка 'числом, длиной от 1 до 12 цифр'.
// console.log(/^\d{1,12}$/.test('290390'));

// №7⊗jsSpREMT

// Определите, является ли переданная строка датой в формате год-месяц-день.

// console.log(/^\d{4}\-\d{2}\-\d{2}$/.test('2024-03-18'));

// №8⊗jsSpREMT

// Определите, является ли переданная строка датой в формате день.месяц.год.

// №9⊗jsSpREMT

// Определите, является ли переданная строка временем в формате часы:минуты:секунды.

// №10⊗jsSpREMT

// Определите, является ли переданная строка корректным емэйлом.

// console.log(/@{1}.*\.com$/.test('exmampl@email.com'));

// №11⊗jsSpREMT

// Определите, является ли переданная строка доменным именем.

// №1⊗jsSpREMSch
// 
// Дана строка:
// 
// let str = '1 23 456 789';
// Найдите позицию первого числа, состоящего из трех цифр.

// console.log(str.search(/\d{3}/g, "!"));

// №1⊗jsSpREMP
// 
// Дана строка, содержащая домен:
// 
// let str = 'sss domain.ru zzz';
// Найдите этот домен и положите его имя в первый карман, а зону - во второй.
// let res = str.match(/domain\.ru/); 

// res.forEach(el =>{
//     console.log(el);
// })

// №2⊗jsSpREGM
// 
// Дана строка:
// 
// let str = 'a1b c34d x567z';
// Найдите сумму всех чисел этой строки.
// let res = str.match(/\d+/g); 

// let sum = 0; 
// res.forEach(el =>{
//     sum+= +el; 
// })
// console.log(sum);

// №1⊗jsSpREGMA
// 
// Дана следующая строка:
// 
// let str = '12:37 15:48 17:59';
// Найдите в ней все подстроки с временем и для каждого найденного разложите часы и минуты по карманам.
// str.matchAll(/(\d{2}):(\d{2})/g).forEach(element => {
//     console.log(element[0], element[1], element[2]);
// });

// 
// №2⊗jsSpREGMA
// 
// Дана строка:
// 
// let str = 'site.ru sss site.com zzz site.net';
// Получите массив доменных имен из этой строки, положив в этом массиве имя домена и его зону в разные карманы.
// str.matchAll(/(\w+)\.(\w+)/g).forEach(element => {
//     console.log(element[0], element[1], element[2]);
// });

// №1⊗jsSpREME

// Дана следующая строка:

// let str = '12:37:57 15:48:58 17:59:59';
// Найдите в ней все подстроки с временем и для каждого найденного разложите часы, минуты и секунды по карманам.
// let reg = /(\d{2}):(\d{2}):(\d{2})/g; 
// while(res = reg.exec(str))
// {
//     console.log(res[0], res[1], res[2], res[3]);
// }

// №1⊗jsSpRELiP
// 
// Дана следующая строка:
// 
// let str = '12:37 15:48 17:59';
// Найдите в ней все подстроки с временем, начиная с пятого символа.
// let reg = /(\d{2}):(\d{2})/g; 
// reg.lastIndex = 5; 

// while(res = reg.exec(str)){
//     console.log(res[0], res[1], res[2]);
// }

// №1⊗jsSpRERP
// 
// Дана строка:
// 
// let str = '12 34 56 78';
// Поменяйте местами цифры во всех двухзначных числах.
// reg = /(\d)(\d)/g;
// console.log(str.replace(reg, "$2$1")); 
// 
// №2⊗jsSpRERP
// 
// Дана строка с датой:
// 
// let str = '31.12.2025';
// Преобразуйте эту дату в '2025.12.31'.
// reg = /(\d+)\.(\d+)\.(\d+)/g;
// console.log(str.replace(reg, "$3.$2.$1")); 

// let str = '2+3= 4+5= 6+7=';
// reg = /(\d+)\+(\d+)=/g; 
// let res = str.replace(reg, (el)=>{
//         sum = Number(el[0]) + Number(el[2]);
//         return el+String(sum); 
//     }) 
// console.log(res);

// №1⊗jsSpRERMC

// Дана строка:

// let str = 'aaa [2] bbb [3] ccc [12] ddd';
// Найдите числа, стоящие в скобках и увеличьте их в два раза. То есть из нашей строки должна получится следующая:
// reg = /\[(\d+)\]/g; 
// let res = str.replace(reg, (el, el1)=>{
//     return el1*2; 
// })

// console.log(res);
// №2⊗jsSpRERMC

// Дана строка:

// let str = '123 456 789';
// Найдите все числа и переверните их цифры в обратном порядке. То есть из нашей строки должна получится следующая:
// reg = /(\d)(\d)(\d)/g;
// let res = str.replace(reg, '$3$2$1'); 
// console.log(res);

// №3⊗jsSpRERMC

// Дана строка с датами:

// let str = '31.12.2025 30.11.2024 29.10.2023';
// Найдите все даты и преобразуйте их в другой формат так, чтобы получилась следующая строка:
// '2025-12-31 2024-11-30 2023-10-29'
// reg = /(\d+)\.(\d+)\.(\d+)/g;
// let res = str.replace(reg, '$3-$2-$1'); 
// console.log(res);


// №1⊗jsSpRERDP

// Дана строка:

// let str = 'a1b2c3';
// Напишите регулярку, которая рядом с каждой цифрой напишет такую же.
// reg = /\d/g;
// console.log(str.replace(reg, "$&$&"));

// №2⊗jsSpRERDP

// Дана строка:

// let str = 'sss site.ru zzz site.com kkk';
// Замените домены на ссылки вида:
// <a href="http://site.ru">site.ru</a>
// reg = /(\w+)\.(\w+)/g;
// let res = str.replace(reg, (el)=>{
//     return ('<a href="http://' + el + '">' + el + '</a>');
// }) 
// console.log(res);

// №3⊗jsSpREEP
// 
// Дана строка:
// 
// let str = 'aaa aaa bbb bbb ccc ddd';
// Найдите все подстроки, в которых есть два одинаковых слова подряд.
// console.log(str.replace(/([a-z]{3})\s\1/g, "!"));

// №1⊗jsSpRELAB
// 
// Дана строка, содержащая имена функций:
// 
// let str = 'func1() func2() func3()';
// Получите массив имен функций из строки.
// console.log(str.replace(/func[1-9](?=\(\))/g, "!"));  
// 
// №2⊗jsSpRELAB
// 
// Дана строка с тегом:
// 
// let str = '<a href="" class="eee" id="zzz">';
// Получите массив имен атрибутов этого тега.
// console.log(str.replace(/(?<=")[a-z]+(?=")/g, "!"));  
// №3⊗jsSpRELAB
// 
// Дана строка с переменными:
// 
// let str = '$aaa $bbb $ccc xxxx';
// Получите подстроки, перед которыми стоит символ доллара.

// Создайте JavaScript функцию, которая принимает на вход строку.
// Напишите регулярное выражение, которое будет искать в этой строке все слова, начинающиеся с заглавной буквы.
// Используйте метод .match() для поиска всех совпадений в строке с вашим регулярным выражением.
// Верните найденные слова в виде массива из строк.
// function getArrCamelLetters(str)
// {
//     let reg = /[A-Z][a-z]+/g; 
//     let arr = str.match(reg);
//     console.log(arr); 
// }

// getArrCamelLetters("This is an Example of capitalized Words in a String.");

///////// Исключительные ситуации /////////

// let str = '';
// for (let i = 1; i <= 6 * 10 ** 6; i++) { // формируем строку более 5 мб
// 	str += '+';
// }

// try {
//     let arr = [1, 2, 3];
//     localStorage.setItem('kkk', JSON.stringify(arr));
//     if(localStorage.getItem('kkk')){
//         let lsArr = JSON.parse(localStorage.getItem('kkk'));
//         console.log();
//     }   
// } catch (error) {
//     alert('не выполнено'); 
// }


// try {
//     let str = '';
//     for (let i = 1; i <= 6 * 10 ** 6; i++) { // формируем строку более 5 мб
//         str += '+';
//     }
//     localStorage.setItem('key', str);
//     alert('успешно сохранено!');
// } catch (error) {
//     alert('не сохранено');
// }

// try {
//     let json = '[1,2,3,4,8';

//     let arr = JSON.parse(json);
    
//     let sum = 0;
//     for (let elem of arr) {
//         sum += elem;
//     }
    
//     alert(sum);
// } catch (error) {
//     alert(error.message); 
// }

// function func()
// {
//     let input = document.querySelector('input'); 

//     input.addEventListener('blur', ()=>{
//         if(input.value == 0){
//             throw new Error('квадратный корень из нуля'); 
//         }
//         alert(Math.sqrt(input.value));
//     })
// }

// func(); 


// try {
//     let c = 1;
//     if(c==1){
//         throw new TypeError('текст исключения единицы');    
//     } else if (c==2) 
// 	throw new RangeError('текст исключения двойки');
// } catch (error) {
// 	console.log(error.name); 
// 	console.log(error.message);
// }



// try {
//     let c = 2;
//     if(c==1){
//         throw {name: 'ErrorOfOne', message: 'текст исключения единицы'};    
//     } else if (c==2) 
// 	    throw {name: 'ErrorOfTwo', message: 'текст исключения  двойки'
//     };  
// } catch (error) {
// 	console.log(error.name); 
// 	console.log(error.message);
// }

// Переделайте мой код так, чтобы функция getCost выбрасывала два типа исключений: если отсутствует цена и если отсутствует количество. 
// Хорошо подумайте над названиями этих исключений. В блоке catch выведите разные сообщения об ошибке для исключений разных типов.

// function getCost(elem) {
//     if (elem.dataset.price === undefined){
//         throw {name: "priceNoneErr", message: 'отсутствет инфа по цене товара'}
//     } else if (elem.dataset.amount === undefined){
//         throw {name: "amountNoneErr", message: 'отсутствет инфа по количетсву товара'}
//     } else {
//         return elem.dataset.price * elem.dataset.amount;
// 	}
// }

// let product = document.querySelector('#product');

// try {
//     alert(getCost(product)); 
// } catch (error) {
//     alert(error.message);
// }



///////// Асинхронность ///////// 
///////// Асинхронные коллбэки /////////
///////// Промисы ///////// 
///////// Библиотеки ///////// 
///////// Инструменты ///////// 
///////// Модули ES /////////
///////// Протокол HTTP /////////
///////// Тестовый сервер /////////
///////// Формы ///////// 
///////// AJAX ///////// 
///////// Работа с канвас
///////// Оптимизация кода /////////
///////// Данные ///////// 

