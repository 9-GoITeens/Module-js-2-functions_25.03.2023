/*
 * Функції
 * - Функціональні вирази
 * - Аргументи і параметри
 * - Повернення значення
 */

// const add = function (a, b) {
//   console.log(a);
//   console.log(b);

//   // const result = a + b;
//   // console.log(`${a} + ${b} = `, result);
//   console.log("Виконується функція add");
//   return a + b;
// };

// const r1 = add(2, 3);
// console.log("r1", r1);

// const r2 = add(20, 30);
// console.log("r2", r2);

// const r3 = add(200, 300);
// console.log("r3", r3);

const fn = function () {
  console.log(1);

  console.log(2);
  return 111;
};

console.log("Результат функції:", fn());

/*
- Стек викликів
- Stack trace і пошук помилок
 */

// const fnA = function () {
//   console.log("Виконується функція A");
// };

// const fnB = function () {
//   console.log("Виконується функція B");
// };

// const fnC = function () {
//   console.log("Виконується функція C");
// };

// console.log("Лог перед викликом функції A");

// fnA();

// console.log("Лог після викликом функції A");

// console.log("Лог перед викликом функції B");
// fnB();
// console.log("Лог після викликом функції B");

// console.log("Лог перед викликом функції C");
// fnC();
// console.log("Лог після викликом функції C");
