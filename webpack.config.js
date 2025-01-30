const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // точка входа
  output: {
    filename: "bundle.js", // имя выходного файла с хешированием
    path: path.resolve(__dirname, "dist"), // выходная директория
    clean: true, // автоматически очищает dist перед сборкой
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"], // расширения для импортируемых файлов
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /.js$|jsx/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/, // Находим все файлы .ts и .tsx
        use: "ts-loader",
        exclude: /node_modules/, // Исключаем папку node_modules
      },
      {
        test: /\.scss$/, // для файлов SASS
        use: [
          "style-loader", // вставляет стили в DOM
          "css-loader", // обрабатывает CSS файлы
          "sass-loader", // компилирует SASS в CSS
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // обработка изображений
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // шаблон для HTML
      title: "React Redux TypeScript Project", // заголовок
    }),
    new CleanWebpackPlugin(), // очищает папку dist перед сборкой
  ],
  devServer: {
    static: path.join(__dirname, "public"), // откуда сервировать файлы
    compress: true, // сжать файлы
    port: 3000, // порт для сервера
    hot: true, // включить HMR
    open: true, // открытие вкладки
  },
  mode: "development", // режим разработки
};
