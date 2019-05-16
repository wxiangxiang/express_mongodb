var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
//restful风格的API
router.get("/", function(req, res, next) {
  res.render("admin/article_type/index");
});
router.get("/new", (req, res) => {
  res.render("admin/article_type/new");
});
router.get("/edit", (req, res) => {
  res.send("分类修改");
});
router.post("/create", (req, res) => {
  var strFile = "./data/article_type.json";
  var arrAT = [];
  if (fs.existsSync(strFile)) {
    arrAT = JSON.parse(fs.readFileSync(strFile)); //如果存在读取数据
  }
  var data = req.body;
  data.id = Date.now();
  arrAT.push(req.body);
  fs.writeFileSync(strFile, JSON.stringify(arrAT));
  res.send("插入数据成功");
});
router.put("/update", (req, res) => {
  res.send("修改数据");
});
router.delete("/del", (req, res) => {
  res.send("删除数据");
});
module.exports = router;
