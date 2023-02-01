const fs = require("fs");
const path = require("path");
const root = require("../rootPath.js");
const express=require('express')
const ejs=require('ejs')
const crudFilePath = path.join(root, "Controller");
module.exports = {
  fs: fs,
  path: path,
  express:express,
  ejs:ejs,
  root:root,
  crudFilePath: crudFilePath,
};
