/**
 *  auth: 马凯
 *  读取文件夹并运行服务
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const root_path = path.resolve();
const sub_apps = fs.readdirSync(root_path).filter(i => /^connext|main/.test(i));

console.log(`即将进入所有模块并启动服务：${JSON.stringify(sub_apps)} ing...`)

const exec = util.promisify(require('child_process').exec);
function start() {
  sub_apps.forEach(async i => {
    console.log(`${i} 开始启动... 全部启动需要时间，请稍加等候，或刷新浏览器即可`)
    const { stdout, stderr } = await exec('npm run serve', { cwd: path.resolve(i) });
    console.log(i, 'success', stdout)
    console.error(i, 'error', stderr)
  });
  exec('start http://localhost:9527/');
};
start();

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
