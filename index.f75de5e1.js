"use strict";
/* global localStorage */ // Получаем элементы из DOM
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-task-btn");
// Добавлен элемент для кнопки
// Загружаем сохранённые данные при загрузке страницы
document.addEventListener("DOMContentLoaded", loadData);
// Добавляем обработчик событий для кнопки "Добавить задачу"
addButton.addEventListener("click", addTask);
// Функция для добавления задачи
function addTask() {
    if (inputBox.value === "") // Если поле ввода пустое, выводим сообщение
    window.alert("You have to write something!");
    else {
        const li = document.createElement("li");
        li.classList.add("todo-app__item");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\xd7"; // Символ крестика
        span.classList.add("todo-app__item-remove");
        li.appendChild(span);
        // Добавление задачи
        inputBox.value = "";
        saveData();
        // Удаление задачи по клику на крестик
        span.onclick = function() {
            listContainer.removeChild(li);
            saveData();
        };
        // Отметка задачи как выполненной при клике
        li.onclick = function() {
            li.classList.toggle("todo-app__item--checked");
            saveData();
        };
    }
}
// Сохранение данных в localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
// Загрузка данных из localStorage
function loadData() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
        // Восстанавливаем функциональность для каждой задачи
        const items = listContainer.getElementsByClassName("todo-app__item");
        for (const item of items){
            // Восстанавливаем состояние крестика
            const span = item.querySelector(".todo-app__item-remove");
            span.onclick = function() {
                listContainer.removeChild(item);
                saveData();
            };
            // Восстанавливаем состояние для выполнения задачи
            item.onclick = function() {
                item.classList.toggle("todo-app__item--checked");
                saveData();
            };
        }
    }
}

//# sourceMappingURL=index.f75de5e1.js.map
