var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//路由拆分
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// 设置模板引擎
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//使用第三方1插件
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//设置路由地址
//参数一 表示浏览器中访问的地址 可以随便写但是不能重复
//参数二 表示访问这个地址时的处理函数
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/p", require("./routes/products"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error"); //使用render渲染一个模板页面
});

module.exports = app;
