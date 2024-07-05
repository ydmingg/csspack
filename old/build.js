import shell from "shelljs";
import { readFile } from 'fs/promises';

const packinfo = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
);

let packcss = {
  "css-design": "./project/demo01/index.less", // 设计插件页面

}

let packkeys = Object.keys(packcss);
let packValues =Object.values(packcss);
let verinfos = packinfo.version.split(".");
let verinfo_str = verinfos.join("");

shell.exec("rm -rf ./public/* && touch ./public/index.js");

for (let index = 0; index < packkeys.length; index++) {
  shell.exec(`lessc -x ${packValues[index]} ./public/${packkeys[index] + verinfo_str}.css`);  
}