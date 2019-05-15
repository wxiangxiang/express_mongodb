var express = require("express");
var router = express.Router();

/**
 *通过res.render渲染一个模板页
 * 参数一表示模板的地址（是在模板文件夹中直接查找，写文件名即可）
 * 参数二便是参数传递到页面的数据
 *   */
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express",
    c: "<h3>诺兰来了</h3>", //用减号来保存html代码
    descriptions: "最好的朋友",
    people: [
      {
        name: "小贤",
        age: 23
      },
      {
        name: "一菲",
        age: 22
      },
      {
        name: "张益达",
        age: 15
      }
    ]
  });
});

module.exports = router;
