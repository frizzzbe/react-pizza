# 🍕 React Pizza v2 (REMASTERED) 🍕

Это обновлённый курс на 2022 год, по ReactJS. В данном курсе подробно раскрывается тема создания фронтенд части интернет-магазина пиццерии на всех нижеперечисленных технологиях.

# 🛠 Технологии:

- **ReactJS 18**
- **TypeScript**
- **Redux Toolkit** (хранение данных / пицц)
- **React Router v6** (навигация)
- **Axios + Fetch** (отправка запроса на бэкенд)
- React Hooks (хуки)
- Prettier (форматирование кода)
- CSS-Modules / SCSS (стилизация)
- React Content Loader (скелетон)
- React Pagination (пагинация)
- Lodash.Debounce
- Code Splitting, React Loadable, useWhyDidYouUpdate

### Подробнее о технологиях

- **[TypeScript](https://www.typescriptlang.org/) —** необходим для написания более грамотного JavaScript-кода. Благодаря правильному написанию TS-кода, мы автоматически документируем наш код + наше приложение будет содержать меньше багов из-за строгой типизации.
- **[Redux Toolkit](https://redux-toolkit.js.org/)** — с помощью данной библиотеки, мы сможем создать глобальное хранилище данных для нашего приложения, тем самым, более удобным способом обмениваться информацией между разными компонентами нашего приложения. Данная библиотека активно внедряется во все крупные и малые react-проекты на 2021-2022 г.
- **[React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)** — позволит нам создать навигацию по нашему сайту без перезагрузок страницы. Ты, наверное, обратил внимание, что сайт VK или Instagram при переходе по разным разделам, не перезагружает всю страницу, а только определенную часть сайта. Именно эту возможность мы и будем внедрять в наше приложение с помощью React Router.
- **[Axios](https://github.com/axios/axios)** — нам поможет взаимодействовать с серверной частью. Отправлять данные на сервер или получать их при необходимости из сервера уже в наше фронтенд-приложение.
- **[React Hooks](https://ru.reactjs.org/docs/hooks-intro.html)** — это набор готовых функций внутри библиотеки React для решения разнообразных задач, например, хранение данных, определение первого отображения приложения, оптимизаций функций и т.п.
- **[Prettier](https://prettier.io/)** — наш код должен быть не только хорошо написано, но и **красиво**. С помощью Prettier наш код будет автоматически выровняться внутри нашего редактора кода, тем самым, становиться более читабельным.
- **[SCSS](https://sass-scss.ru/)** — это тот же CSS, но с более мощными возможностями, функциями, переменными, циклами (да, Карл, циклы в CSS) и кучей других крутых решений.
- **[CSS-Modules](https://github.com/css-modules/css-modules)** — мы будем использовать SCSS вместе с CSS-модулями. По факту, тебе не придётся учить ничего нового. Ты будешь писать те же самые стили, но уже в отдельных файлах (css-модулях), тем самым, инкапсулируя свои CSS-классы.
- [**Lodash**](https://lodash.com/docs) — набор готовых JS-функций для огромного количества разнообразных задач.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
