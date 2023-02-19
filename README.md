# CLI application

## Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
./images/list.jpg

## Отримуємо контакт по id

node index.js --action="get" --id=5
./images/get.jpg

## Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
./images/add.jpg

## Видаляємо контакт

node index.js --action="remove" --id=3
./images/remove.jpg
