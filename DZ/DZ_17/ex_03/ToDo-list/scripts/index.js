// Во вчерашнем проекте вместо метода foreach использовать метод map. 
// Подсказка: .append может принимать в себе множество элементов, 
// а не только один. И можно из массива ему туда передать с помощью ... 
// или другого метода извлечь из массива элементы.

const inputElement = document.querySelector(".task-input");
const createButton = document.querySelector(".btn");
const listElement = document.querySelector(".list");

let userInputText;

let todoList = [
  { task: "Купить молоко", done: false, deadline: "2024-02-23" },
  { task: "Заплатить за интернет", done: true, deadline: "2024-02-20" },
  { task: "Позвонить маме", done: false, deadline: "2024-02-22" },
  { task: "Почитать книгу", done: false, deadline: "2024-02-28" },
  { task: "Сделать домашнее задание", done: true, deadline: "2024-02-21" },
  { task: "Посмотреть фильм", done: false, deadline: "2024-02-24" },
  { task: "Помыть посуду", done: true, deadline: "2024-02-22" },
  { task: "Погулять с собакой", done: false, deadline: "2024-02-23" },
  { task: "Заказать пиццу", done: false, deadline: "2024-02-25" },
  { task: "Посетить врача", done: true, deadline: "2024-02-20" },
  { task: "Починить компьютер", done: false, deadline: "2024-02-26" },
  { task: "Подарить цветы подруге", done: true, deadline: "2024-02-21" },
  { task: "Поиграть в видеоигры", done: false, deadline: "2024-02-27" },
  { task: "Послать резюме", done: true, deadline: "2024-02-20" },
  { task: "Поехать в отпуск", done: false, deadline: "2024-02-29" },
];

// Функция для создания элемента списка - "li"
const createListItem = (task) => {
  const listItem = document.createElement("li"); // Создаем элемент "li"
  listItem.classList.add("list-item"); // Добавляем класс "list-item"
  listItem.textContent = task;
  return listItem;
};

// Функция для отображения списка todoList с использованием map
const renderTodoList = () => {
  const listItems = todoList.map(item => createListItem(item.task)); // Создаем элементы списка с помощью метода map
  listElement.append(...listItems); // Добавляем все элементы списка с помощью оператора spread
};

// Функция добавления новой задачи - обработчик нажатия кнопки "Создать"
const createButtonHandler = () => {
    console.log("click");
    const newListItem = document.createElement("li");
    newListItem.classList.add("list-item");
    newListItem.textContent = userInputText;
    listElement.append(newListItem); // Добавляем новый элемент в список
    inputElement.value = ""; // Очистка поля ввода после добавления задачи
};

createButton.addEventListener("click", createButtonHandler); // Добавляем слушатель события на кнопку

// Функция для обработки ввода
const inputHandler = () => {
  userInputText = inputElement.value;
};

inputElement.addEventListener("input", inputHandler);

// Отображаем начальный список todoList
renderTodoList();


