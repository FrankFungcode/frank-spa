/*
 * @Author: FrankFungcode combeebe@gmail.com
 * @Date: 2025-12-04 14:49:59
 * @LastEditors: FrankFungcode combeebe@gmail.com
 * @LastEditTime: 2025-12-04 15:08:19
 * @FilePath: \frank-spa\tests\e2e\google.spec..ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// selenium-webdriver
// rize.js 无头浏览器 无页面 全输入命令行操作

const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get("https://www.google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    await driver.quit();
  }
})();
