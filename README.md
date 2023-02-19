# CLI application

## Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

![Contacts list](https://github.com/ValeriiDroniak/CLI-application/blob/main/images/list.jpg)

## Отримуємо контакт по id

node index.js --action="get" --id=5

(https://github.com/ValeriiDroniak/CLI-application/blob/main/images/get.jpg)

## Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

(https://github.com/ValeriiDroniak/CLI-application/blob/main/images/add.jpg)

## Видаляємо контакт

node index.js --action="remove" --id=3

(https://github.com/ValeriiDroniak/CLI-application/blob/main/images/remove.jpg)
