# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://github.com/AlonaKlishchevnikova/-CLI-app/blob/main/img/getAllContacts.png

# Отримуємо контакт по id
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://github.com/AlonaKlishchevnikova/-CLI-app/blob/main/img/getOneContact.png

# Додаємо контакт
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://github.com/AlonaKlishchevnikova/-CLI-app/blob/main/img/newContact.png
# Видаляємо контакт
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://github.com/AlonaKlishchevnikova/-CLI-app/blob/main/img/deleteContact.png