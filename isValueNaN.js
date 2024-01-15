// Задача 5: Напишіть функцію, яка перевіряє, чи є введене значення NaN.
// Створюємо функцію з назвою isValueNaN, яка приймає один аргумент - value
function isValueNaN(value) {
  let result = isNaN(value);
  console.log(`${result}`, typeof result);
  if (!isNaN(result)) {
    return "The value is NaN.";
  } else {
    return "The value is not NaN.";
  }

  // Використовуємо вбудовану функцію isNaN, щоб перевірити, чи є введене значення NaN.
  // Ця функція повертає true, якщо значення є NaN, і false, якщо значення не є NaN.
  // За допомогою оператора if перевіряємо, чи є значення NaN.
  // Якщо значення є NaN, повертаємо текст "The value is NaN.".
  // Якщо значення не є NaN, повертаємо текст  "The value is not NaN.".
}
