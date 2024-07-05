import shell from "shelljs";
import { readFile } from 'fs/promises';

const packinfo = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
);

let packcss = {
  //   icons: "./project/icons/_icons.less",/** icons页面 **/                       
  //   // doc: "./project/doc/_doc.less",/** 组件文档页面 **/
  // md: "./project/md/_md.less",/** 组件 **/
  // showroom: "./project/showroom/_magic-wall.less",
  //   // webpage: "./project/webpage/_webpage.less",/** 官网页面 **/
  //   // mobile: "./project/mobile/_mobile.less",/** 手机app页面 **/
  //   // h5: "./project/h5/_h5.less",/** h5 **/
  // "css-manage": "./project/manage/_manage.less",/** 后台管理系统页面 **/
  // "css-login": "./project/login/_login.less",/** login **/
  // css-icons: "./project/icons/_icons.less",/** icons页面 **/
  // "css-piksel": "./components/_base.less",
  // "css-preview": "./project/preview/_index.less",
  //   "css-shida-aio": "./project/showroom/_aio.less",
  //   "css-shida-tps": "./project/showroom/_tps.less",
  // "css-screen-admin": "./project/screenAdmin/_index.less", // 大屏管理
  // "css-design": "./project/designs/_design.less", // 设计插件页面
  // "css-phone": "./project/phone/_phone.less", // 手机页面
  "css-tv-factory-plank": "./project/tv/_tv.less", // 电视大屏
  "css-website": "./project/website/_website.less", // 官网

  
  /**************** 一下时最新的引用方式 *******************/
  

    
}

let packkeys = Object.keys(packcss);
let packValues =Object.values(packcss);
let verinfos = packinfo.version.split(".");
let verinfo_str = verinfos.join("");

shell.exec("rm -rf ./public/* && touch ./public/index.js");

for (let index = 0; index < packkeys.length; index++) {
  shell.exec(`lessc -x ${packValues[index]} ./public/${packkeys[index] + verinfo_str}.css`);  
}