# World clock

## Описание проекта

Часы с выбором часового пояса. Данное веб-приложение позволяет пользователям выбирать часовые пояса и отображать текущее время в них. Каждый выбранный часовой пояс отображается в отдельном блоке с возможностью удаления. Повторный выбор уже добавленных таймзон невозможен.

<img width="680" alt="Снимок экрана 2025-02-01 в 19 40 09" src="https://github.com/user-attachments/assets/fd1338bb-2873-44ac-bf5a-5ffb2881570e" />

## 🚀 Возможности

* Добавление часов на страницу (до 10 штук);

* Удаление часов со страницы;

* Часовой пояс определяется выбором города в выпадающем списке.


## 🛠 Обоснование выбора технологий

* React – удобен для создания динамических пользовательских интерфейсов.

* Redux Toolkit – упрощает управление состоянием и делает код более структурированным.

* TypeScript – повышает надежность кода за счет статической типизации.

* SCSS – обеспечивает модульную стилизацию компонентов без конфликтов имен.

* Webpack – позволяет оптимизировать сборку и использовать современные возможности JS.

## 📦 Расспаковка и запуск

### Установите зависимости:
```bash
npm install
```
#### or
```bash
yarn 
```
### Запустите приложение:
```bash
npm run start
```
#### or
```bash
yarn dev
```
## 📂 Структура проекта
```

├── public/                 # Public files
├── src/
│   ├── components/         # UI components
│   ├── pages/              # Application pages
│   ├── services/         
│   │       ├── api/        # API
│   │       ├── slices/     # Redux slice
│   │       └── store/      # Redux store │
│   ├── utils/              # Utilities and helper functions
│   ├── page/app.tsx        # Main component
│   ├── index.tsx           # Entry point
│   ├── index.scss          # Global styles
│   └── types/              # TypeScript types
├── package.json            # Project dependencies
├── package-lock.json       # Lock file modules 
├── webpack.config.js       # Webpack config 
├── tsconfig.json           # TypeScript config 
├── global.d.ts             # Global types TypeScript
├── yarn.lock               # Yarn dependencies
├── task.pdf                # Task
├── README.md               # Documentation
└── .gitignore              # Git ignore file
```

## 👨‍💻 Authors

woohda - GitHub


