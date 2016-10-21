# tapaculo
Небольшое веб-приложение для редактирования таблиц в БД. 

Цель разработки - ознакомиться на практике с современными технологиями разработки веб-приложений.

## Используемые технологии
- `npm`
- `webpack`
- `bootswatch` (темы для `bootstrap`)
- `babel` (для `jsx` и `es2015`)
- `react`

## Сборка и запуск
### Подготовка окружения
1. Устанавливаем npm.
2. Устанавливаем webpack: `npm install -g webpack`.
3. Устанавливаем webpack-dev-server: `npm install -g webpack-dev-server`.

### Сборка и запуск production-режим
1. Выполняем `npm install` в корне проекта.
2. Выполняем `webpack` в корне проекта.
3. В браузере открываем `/editor.html`.

### Сборка и запуск dev-режим
1. Выполняем `npm install` в корне проекта.
2. Выполняем `webpack-dev-server --port 9000` в корне проекта.
3. В браузере открываем `http://localhost:9000/webpack-dev-server/editor.html`.





