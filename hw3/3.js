"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userNumOne = +prompt("Введите первое число");
const userNumTwo = +prompt("Введите второе число");
const userNumThree = +prompt("Введите третье число");

const maxNum = () => {
  if (userNumOne > userNumTwo && userNumOne > userNumThree) {
    console.log(
      `Максимальное значение среди чисел ${userNumOne}, ${userNumTwo}, ${userNumThree} равно ${userNumOne}`
    );
  } else if (userNumTwo > userNumThree) {
    console.log(
      `Максимальное значение среди чисел ${userNumOne}, ${userNumTwo}, ${userNumThree} равно ${userNumTwo}`
    );
  } else {
    console.log(
      `Максимальное значение среди чисел ${userNumOne}, ${userNumTwo}, ${userNumThree} равно ${userNumThree}`
    );
  }
};

console.log(maxNum(userNumOne, userNumTwo, userNumThree));
