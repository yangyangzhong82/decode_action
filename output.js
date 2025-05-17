//Sat May 17 2025 15:42:30 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
mc.listen("onOpenContainerScreen", _0x32f3bd => {
  _0x32f3bd.refreshItems();
  _0x32f3bd.giveItem("minecraft:air", 1);
});
let isOpenContainer = new Map();
mc.listen("onOpenContainer", (_0x2c22ef, _0x4a992d) => {
  isOpenContainer.set(_0x2c22ef.xuid, true);
});
mc.listen("onCloseContainer", (_0x18e66d, _0x2390dc) => {
  isOpenContainer.set(_0x18e66d.xuid, false);
});
mc.listen("onTakeItem", (_0x55bc78, _0x1905c5, _0x1ac986) => {
  if (_0x55bc78.isLoading) return false;
  if (isOpenContainer.get(_0x55bc78.xuid)) return false;
  if (_0x55bc78.isInsidePortal) return false;
  if (_0x55bc78.isTrading) return false;
});
setInterval(() => {
  mc.getOnlinePlayers().forEach(_0x59b49d => {
    if (_0x59b49d.isMoving) isOpenContainer.set(_0x59b49d.xuid, false);
  });
}, 50);