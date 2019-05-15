var express = require("express");
var router = express.Router();

/**
 *通过res.render渲染一个模板页
 * 参数一表示模板的地址（是在模板文件夹中直接查找，写文件名即可）
 * 参数二便是参数传递到页面的数据
 *   */
/* GET home page. */
router.get("/list", function(req, res, next) {
  res.render("products/list", {});
});

module.exports = router;
