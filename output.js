//Sat Apr 05 2025 04:56:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x4b084c = "ShoppingMall",
  _0x564a97 = [2, 7, 0],
  _0x1b07af = "购物中心插件";
ll.registerPlugin(_0x4b084c, _0x1b07af, _0x564a97, {});
const _0x55699b = ".\\plugins\\ShoppingMall\\",
  _0x2a8790 = _0x55699b + "config.json",
  _0x321b26 = _0x55699b + "ShoppingMall.json",
  _0x545c9a = _0x55699b + "OfficialShop.json",
  _0x48ad9b = _0x55699b + "forbiddenItems.json",
  _0x1b2be8 = _0x55699b + "languages.json",
  _0x307010 = _0x55699b + "ui\\",
  _0x3a58d3 = _0x55699b + "rankingData.json",
  _0xf91549 = _0x55699b + "purchaseLogs.json",
  _0xb5b6c5 = _0x55699b + "chatData.json",
  _0xae75c = {
    "cmd": "sm",
    "cmdDescription": "打开商店菜单",
    "economySystem": "llmoney",
    "scoreboardObjective": "money",
    "shopCreationCost": 1000,
    "shopNameChangeCost": 500,
    "shopNameChangeCooldown": 168,
    "enableShopRanking": true,
    "enableChatLobby": true,
    "chatMessageLimit": 30,
    "showOfficialPurchase": true,
    "language": "zh_CN",
    "advertSlotsSetting": {
      "1": {
        "price": 1000,
        "duration": 24
      },
      "2": {
        "price": 1000,
        "duration": 24
      },
      "3": {
        "price": 1000,
        "duration": 24
      },
      "4": {
        "price": 1000,
        "duration": 24
      },
      "5": {
        "price": 1000,
        "duration": 24
      },
      "6": {
        "price": 1000,
        "duration": 24
      },
      "7": {
        "price": 1000,
        "duration": 24
      },
      "8": {
        "price": 1000,
        "duration": 24
      },
      "9": {
        "price": 1000,
        "duration": 24
      },
      "10": {
        "price": 1000,
        "duration": 24
      }
    },
    "allowedDomain": "",
    "enableLocalIcon": true,
    "localIconChangeCost": 200,
    "localIconChangeCooldown": 72,
    "enableURLIcon": true,
    "URLIconChangeCost": 200,
    "URLIconChangeCooldown": 72,
    "enableCustomPathIcon": true,
    "customPathIconChangeCost": 200,
    "customPathIconChangeCooldown": 72,
    "pageSizeLimit": 30,
    "shopSortMode": "随机",
    "officialShopSortMode": "随机"
  },
  _0x287fbc = data.openConfig(_0x2a8790, "json", JSON.stringify(_0xae75c, null, 4));
let _0x14f0bb = {},
  _0x157e78 = _0x287fbc.get("language") || "zh_CN";
function _0x3344fc() {
  if (!File.exists(_0x1b2be8)) {
    {
      const _0xff23a7 = _0x458c4f();
      File.writeTo(_0x1b2be8, JSON.stringify(_0xff23a7, null, 2));
      _0x14f0bb = _0xff23a7;
    }
  } else {
    try {
      _0x14f0bb = JSON.parse(File.readFrom(_0x1b2be8));
    } catch (_0xe07e80) {
      logger.error("加载语言文件失败: " + _0xe07e80);
      _0x14f0bb = _0x458c4f();
    }
  }
}
function _0x534e1f(_0x15acb7, ..._0x304979) {
  let _0x205808 = _0x14f0bb[_0x157e78] || _0x14f0bb.zh_CN;
  !_0x205808 && (_0x205808 = _0x458c4f().zh_CN);
  let _0x229c4b = _0x205808[_0x15acb7] || _0x15acb7;
  if (_0x304979 && _0x304979.length > 0) for (let _0x4c9d10 = 0; _0x4c9d10 < _0x304979.length; _0x4c9d10++) {
    _0x229c4b = _0x229c4b.replace("%" + (_0x4c9d10 + 1), _0x304979[_0x4c9d10]);
    _0x229c4b = _0x229c4b.replace("%d", _0x304979[_0x4c9d10]);
    _0x229c4b = _0x229c4b.replace("%s", _0x304979[_0x4c9d10]);
  }
  return _0x229c4b;
}
_0x3344fc();
function _0x398c4b() {
  return Object.keys(_0x14f0bb);
}
function _0x458c4f() {
  return {
    "zh_CN": {
      "currency.name": "§6§l金币§f",
      "button.return": "§c§l返回上一页",
      "button.prev.page": "§a<< 上一页",
      "button.next.page": "§a下一页 >>",
      "button.search": "§a搜索",
      "button.confirm": "§a确认",
      "button.cancel": "§c取消",
      "error.invalid.selection": "§c选择无效!",
      "error.player.only": "§c此命令仅限玩家执行!",
      "success": "§a成功",
      "error": "§c错误",
      "quantity": "数量",
      "price": "价格",
      "stock": "库存",
      "category": "分类",
      "infinite": "无限",
      "unknown.option": "§c未知选项，请重试。",
      "none": "无",
      "yes": "是",
      "no": "否",
      "aux": "特殊值",
      "player": "玩家",
      "system": "系统",
      "category.all": "全部",
      "category.tools": "工具",
      "category.blocks": "方块",
      "category.food": "食物",
      "category.misc": "杂项",
      "menu.title": "§6§lSM市场",
      "menu.balance": "§e§l您的余额：",
      "menu.unread.messages": "§c§l你有 %d 条未读@消息!",
      "menu.select.operation": "§b§l请选择一个操作：",
      "menu.button.lobby": "§a§lSM大厅",
      "menu.button.search.market": "§a§l搜索市场商品",
      "menu.button.shopping.center": "§d§l购物§3中心",
      "menu.button.my.shop": "§s§l我的店铺",
      "menu.button.official.shop": "§e§l官方商店",
      "menu.button.shop.ranking": "§e店铺排行榜",
      "menu.button.trade.logs": "§a交易动态信息",
      "menu.button.manage.market": "§c§l管理市场",
      "menu.command.success": "§a已打开%s",
      "shop.create.title": "§b§l创建店铺",
      "shop.create.name.input": "§e§l请输入您的店铺名称（最多10个字符）：",
      "shop.name": "店铺名称",
      "shop.create.cost": "§e§l创建店铺需要花费：§6§l%d§f %s",
      "shop.create.cost.note": "§a（提交后将扣除相应的经济）",
      "shop.create.name.empty": "§c§l店铺名称不能为空！",
      "shop.create.name.too.long": "§c§l店铺名称不能超过10个字符！",
      "shop.create.insufficient.funds": "§c§l您的经济不足，无法创建店铺！",
      "shop.create.payment.failed": "§c§l扣费失败，请重试！",
      "shop.create.success": "§a§l店铺创建成功！店铺名称：§6§l%s",
      "shop.no.shop": "§c您尚未创建店铺!",
      "shop.manage.title": "§b§l我的店铺",
      "shop.manage.select.operation": "§e§l请选择一个操作：",
      "shop.manage.settings": "§b§l管理店铺",
      "shop.manage.edit.name": "§a§l修改店铺名称",
      "shop.manage.delete.shop": "§c§l删除店铺",
      "shop.manage.close.shop": "§e§l关闭商店\n当前状态:开启",
      "shop.manage.open.shop": "§a§l开启商店\n当前状态:关闭",
      "shop.manage.edit.announcement": "§d§l编辑店铺公告",
      "shop.remain.time": "§c距离下次改名还有%s小时！",
      "shop.icon.cooldown": "§c距离下次修改店铺图标还有 %s 小时!",
      "shop.icon.title": "§a§l更改店铺图标",
      "shop.icon.select.type": "§e请选择图标类型:",
      "shop.icon.local": "§b本地图标",
      "shop.icon.url": "§dURL链接图标",
      "shop.icon.custom": "§5自定义路径图标",
      "shop.icon.confirm.title": "§a确认购买图标",
      "shop.icon.confirm.content": "§e更改店铺图标需§6%d%s\n下次可更改时间:§b%s §f小时后。\n下方第二个按钮会使用你的图标作为预览:",
      "shop.icon.cancel": "§c已取消操作。",
      "shop.icon.insufficient.funds": "§c余额不足，需要%d%s！",
      "shop.icon.purchase.success": "§a成功更改店铺图标为: %s",
      "shop.icon.select.page": "§a选择店铺图标 - 第%d/%d页",
      "shop.icon.select.info": "§e选中图标后将花费%d, 并进入%s小时冷却.\n(点击图标会跳出确认界面预览)",
      "shop.icon.buy.confirm": "§e是否花费 %d%s 购买图标\n§b%s ?\n点击下方预览按钮即可确认。",
      "shop.icon.preview.confirm": "§a预览并确认",
      "shop.icon.custom.title": "§5自定义图标路径",
      "shop.icon.custom.input": "§e请输入自定义路径（例如 textures/ui/... ）",
      "shop.icon.url.title": "§d§l输入URL图标链接",
      "shop.icon.url.domain.required": "§e此链接必须包含: §c%s",
      "shop.icon.url.no.domain": "§e管理员未设置域名限制，可任意输入URL。",
      "shop.icon.url.input": "§e请输入完整的图标URL：",
      "shop.icon.no.local": "§c暂无可用的本地图标(请检查 ./plugins/ShoppingMall/ui/*.png )",
      "shop.icon.path.empty": "§c路径不能为空！",
      "shop.icon.url.empty": "§c链接不能为空！",
      "shop.icon.url.invalid": "§c链接不符合要求，必须包含域名: %s",
      "shop.edit.title": "§a§l编辑店铺物品",
      "shop.edit.select.operation": "§e§l请选择一个操作：",
      "shop.edit.add.item": "§a§l上架物品",
      "shop.edit.edit.item": "§b§l编辑物品",
      "shop.edit.no.items": "§c§l您的店铺中没有物品！",
      "shop.edit.select.item": "§e§l请选择要编辑的物品：",
      "shop.list.title": "§a§l上架物品",
      "shop.list.official.title": "§a§l官方商店上架物品（购买）",
      "shop.list.no.items": "§c§l您的背包中没有物品！",
      "shop.list.select.item": "§e§l请选择要上架的物品：",
      "shop.list.input.price": "§e§l请输入出售价格（每个）：",
      "shop.list.input.stock": "§e§l请输入库存数量（0为无限）：",
      "shop.list.input.quantity": "§e§l请输入要上架的数量：",
      "shop.list.input.custom.name": "§d§l自定义商品名称(可留空)",
      "shop.list.auto.name": "§7自动使用物品真实名称",
      "shop.list.input.remark": "§e§l请输入物品备注（可选，最多50字符）：",
      "shop.list.price.error": "§c§l价格必须是正整数！",
      "shop.list.stock.error": "§c§l库存数量必须是非负整数！（0为无限）",
      "shop.list.quantity.error": "§c§l数量必须是正整数！",
      "shop.list.remark.too.long": "§c§l备注信息不能超过50字符！",
      "shop.list.insufficient.items": "§c§l您没有足够的物品！背包只有%d个。",
      "shop.list.remove.failed": "§c§l扣除物品失败，请重试！",
      "shop.list.success.official": "§a§l已上架到官方商店 §d%s§f\n数量:%s，售价:§6%d§f/个",
      "shop.list.toast.official": "上架成功",
      "shop.list.toast.info": "物品:%s / 价格:%d / 库存:%s",
      "shop.list.success": "§a§l成功上架 §d%s§f\n分类:%s | 数量:%d，售价:§6%d",
      "shop.list.toast.success": "§a§l物品上架成功",
      "shop.list.toast.info.player": "§d物品:%s / 数量:%d / 价格:%d",
      "shop.item.edit.title": "§b§l编辑物品",
      "shop.item.edit.name": "§e§l物品名称：%s",
      "shop.item.edit.stock": "§e§l店铺库存数量：%s",
      "shop.item.edit.inventory": "§a您背包中可用于补货的数量：§6%d",
      "shop.item.edit.restock": "§e§l补充数量(0 表示不补货):",
      "shop.item.edit.price": "§e§l修改价格（每个）：",
      "shop.item.edit.remark": "§e§l修改备注信息（可选，最多50字符）：",
      "shop.item.edit.category": "§e§l物品分类：",
      "shop.item.edit.delist": "§e§l是否下架此物品？",
      "shop.item.edit.error": "§c店铺数据异常，请稍后重试。",
      "shop.item.infinite.delist": "§a§l物品已下架(原为无限库存)，无需返还。",
      "shop.item.delist.success": "§a§l物品已下架并返还到您的背包。",
      "shop.item.insufficient.stock": "§c§l背包中此物品数量不足，仅有 %d 可补货！",
      "shop.item.restock.success": "§a§l已成功补充 %d 份到库存！",
      "shop.item.update.success": "§a§l物品信息已更新。",
      "official.shop.title": "§e§l官方商店",
      "official.shop.select.operation": "§e§l请选择一个操作：",
      "official.shop.button.buy": "§a§l购买",
      "official.shop.button.recycle": "§b§l回收",
      "official.shop.button.manage": "§c§l管理商店",
      "official.shop.items.title": "§e§l官方商店 - 第%d页 / 共%d页",
      "official.shop.no.items": "§c官方商店暂无物品出售。",
      "official.shop.keyword": "§e搜索关键字: %s",
      "official.shop.count": "§e共%d项,每页最多%d条.",
      "official.shop.select.item": "请选择要购买的物品:",
      "official.shop.search.title": "§a搜索(官方商店)",
      "official.shop.search.keyword": "§e搜索关键字(物品名/备注):",
      "official.shop.recycle.title": "§e§l官方商店回收",
      "official.shop.recycle.select": "§e请选择要出售的物品:",
      "official.shop.recycle.price": "§6§l价格:%d(每个)",
      "official.shop.recycle.no.items": "§c官方商店暂无回收物品。",
      "official.shop.manage.title": "§c§l管理官方商店",
      "official.shop.manage.select": "§e请选择一个操作:",
      "official.shop.manage.add": "§a§l上架物品(玩家可买)",
      "official.shop.manage.edit.recycle": "§b§l编辑回收物品",
      "official.shop.manage.edit.purchase": "§e§l编辑官方购买物品",
      "official.shop.order.error": "§c还未生成官方商店的顺序，请先点击[官方商店 -> 购买]!",
      "recycle.add.title": "§a添加回收物品",
      "recycle.add.select": "§e请选择要添加的物品:",
      "recycle.add.price": "§e输入回收价格(每个):",
      "recycle.add.custom.name": "§d自定义商品名字(可留空):",
      "item.name": "物品名称",
      "recycle.add.success": "§a添加回收物品: %s, 回收价: §6%d§f(每个)",
      "recycle.add.toast": "回收物品已添加",
      "recycle.add.toast.info": "物品:%s / 价格:%d",
      "recycle.edit.title": "§b编辑回收物品",
      "recycle.edit.select": "§e请选择要编辑的物品:",
      "recycle.edit.no.items": "§c暂无可编辑的回收物品。",
      "recycle.edit.details.title": "§b编辑回收物品",
      "recycle.edit.original.category": "§e原分类: %s",
      "recycle.edit.custom.name": "§e自定义名称(可修改)",
      "recycle.edit.price": "§e修改回收价格(每个):",
      "recycle.edit.delete": "§e是否删除此回收物品?",
      "recycle.edit.name.empty": "§c名称不能为空！",
      "recycle.edit.delete.success": "§a回收物品已删除。",
      "recycle.edit.delete.toast": "回收物品已删除",
      "recycle.edit.delete.toast.info": "物品:%s",
      "recycle.edit.update.success": "§a回收物品已更新。",
      "recycle.edit.update.toast": "回收物品已更新",
      "recycle.edit.update.toast.info": "名称:%s / 价格:%d",
      "recycle.confirm.title": "§a§l确认出售",
      "recycle.confirm.item.name": "§e§l物品名称:%s",
      "recycle.confirm.price": "§e§l价格:§6%d(每个)",
      "recycle.confirm.own.quantity": "§e§l您拥有的数量:%d",
      "recycle.confirm.input.quantity": "§e§l请输入出售数量:",
      "recycle.confirm.quantity.error": "§c出售数量必须>0!",
      "recycle.confirm.insufficient.items": "§c物品不足!",
      "recycle.confirm.failed": "§c扣除物品失败,重试!",
      "recycle.confirm.success": "§a§l出售成功!获得%d %s",
      "recycle.confirm.toast": "§a出售成功",
      "recycle.confirm.toast.info": "获得 %d %s",
      "purchase.edit.title": "§b编辑官方购买物品",
      "purchase.edit.select": "§e请选择要编辑的物品:",
      "purchase.edit.no.items": "§c暂无可编辑的官方购买物品.",
      "purchase.edit.details.title": "§b编辑官方购买物品",
      "purchase.edit.original.category": "§e原分类: %s",
      "purchase.edit.name": "§e修改商品名称:",
      "purchase.edit.price": "§e修改价格(每个):",
      "purchase.edit.stock": "§e修改库存数量(0为无限):",
      "purchase.edit.remark": "§e修改备注(可留空):",
      "remark": "备注",
      "purchase.edit.delete": "§e是否删除该购买物品?",
      "purchase.edit.name.empty": "§c商品名称不能为空！",
      "purchase.edit.price.error": "§c价格必须正整数!",
      "purchase.edit.stock.error": "§c库存数量必须≥0! (0为无限)",
      "purchase.edit.delete.success": "§a官方购买物品已删除。",
      "purchase.edit.delete.toast": "官方购买物品已删除",
      "purchase.edit.delete.toast.info": "物品:%s",
      "purchase.edit.update.success": "§a官方购买物品已更新。",
      "purchase.edit.update.toast": "官方购买物品已更新",
      "purchase.edit.update.toast.info": "名称:%s | 价格:%d | 库存:%s",
      "shop.center.title": "§6§l购物中心 - 第%d页 / 共%d页",
      "shop.center.search.shop": "§e搜索(店铺/店主):§f %s",
      "shop.center.search.item": "§d物品搜索关键字:§f %s",
      "shop.center.page.size": "§a(每页最多 %d 条)",
      "shop.center.hint": "§s以下的店铺含有你所需要的物品：",
      "shop.center.back": "§c返回主菜单",
      "shop.center.button.shop.search": "§a返回店铺搜索",
      "shop.center.button.item.search": "§b搜索物品",
      "shop.center.button.continue.search": "§b继续按物品搜索",
      "shop.center.button.back.search": "§a返回店铺搜索",
      "shop.center.items.count": "§e在售物品: %d | 销量: %d",
      "shop.center.recommended": "§d(推荐)§f",
      "shop.detail.title": "§b§l店铺：%s §r- 第%d页 / 共%d页",
      "shop.detail.back": "§c返回上一页",
      "shop.detail.owner": "§e店主: §f%s",
      "shop.detail.sales": "§e累计销量: §f%d",
      "shop.detail.item.count": "§e在售物品数: §f%d",
      "shop.detail.announcement": "§d公告: §f%s",
      "shop.detail.no.announcement": "§7(暂无公告)",
      "shop.detail.page.info": "§3第%d/%d页 - 请选择要购买的物品：",
      "shop.detail.no.items": "§c§l该店铺暂无物品出售。",
      "shop.detail.item.info": "§s%s\n§s价格:%d | 库存:%s | 类:%s",
      "purchase.confirm.title": "§a§l确认购买",
      "purchase.confirm.item.name": "§e§l物品名称:§a%s",
      "purchase.confirm.enchant": "§a已附魔§f",
      "purchase.confirm.no.enchant": "§a无附魔§f",
      "purchase.confirm.stack.info": "§s最大堆叠:%d §r|§9 附魔:%s",
      "purchase.confirm.custom.name": "§3自定义名:%s",
      "purchase.confirm.no.custom.name": "暂无命名",
      "purchase.confirm.category.stock": "§e§l分类:%s\n§e§l剩余数量:§a%s",
      "purchase.confirm.price": "§e§l价格:§6%d§f(每个)",
      "purchase.confirm.remark": "§e§l备注:%s",
      "purchase.confirm.input.quantity": "§e§l请输入购买数量:",
      "number": "数字",
      "purchase.confirm.delisted": "§c该物品已下架，购买失败！",
      "purchase.confirm.quantity.error": "§c§l购买数量必须正整数！",
      "purchase.confirm.insufficient.stock": "§c§l库存不足！",
      "purchase.confirm.self.get": "§a§l您已从自己的店铺免费获取了 §d%s x%d§f",
      "purchase.confirm.insufficient.funds": "§c§l余额不足！需%d%s，当前:%d",
      "purchase.confirm.inventory.full": "§c§l背包空间不足!",
      "purchase.confirm.success": "§a§l购买成功！获得 §d%s x%d",
      "purchase.confirm.cost": "§e已扣除 %d %s, 余额:%d",
      "purchase.confirm.sold": "§a§l店铺售出 §d%s x%d, 获得%d %s",
      "purchase.confirm.offline.earnings": "§a§l您的店铺在您离线期间售出了物品，获得了 %d %s",
      "search.title": "§a搜索",
      "keyword": "关键字",
      "search.input.keyword": "§e输入要比较价格的物品名称:",
      "search.show.in.stock": "§e只显示有库存的商品",
      "search.empty.keyword": "§c请输入物品关键字",
      "search.result.title": "§6关键词物品: %s",
      "search.result.count": "§e找到 %d 个关于 \"%s\" 的物品",
      "search.result.sort": "§a已按价格从低到高排序",
      "search.result.page": "§b第 %d/%d 页",
      "search.result.not.found": "§c未找到匹配 \"%s\" 的物品",
      "search.result.item.info": "§6单价: §a%d §f| §b库存: §a%s\n§f物品: §e%s §f| %s",
      "search.result.official": "§c[官方商店]",
      "admin.menu.title": "§c§l管理市场",
      "admin.menu.select.operation": "§e§l请选择一个操作：",
      "admin.menu.config.market": "§a§l配置市场",
      "admin.menu.forbidden.items": "§b§l设置不可上架物品",
      "admin.menu.advert.slots": "§d§l配置广告位",
      "admin.menu.icon.config": "§e§l图标配置",
      "admin.menu.manage.shops": "§2§l管理玩家店铺",
      "config.market.title": "§c§l配置市场",
      "config.economy.system": "§e选择经济系统:",
      "config.economy.llmoney": "llmoney",
      "config.economy.scoreboard": "scoreboard",
      "config.scoreboard.name": "§e记分板名称(仅scoreboard时生效):",
      "config.shop.creation.cost": "§e创建店铺的费用:",
      "config.shop.name.change.cost": "§e修改店铺名称的费用:",
      "config.shop.name.change.cooldown": "§e修改店铺名称的冷却(小时):",
      "config.shop.ranking.enable": "§e是否开启店铺排行榜:",
      "config.official.shop.show.purchase": "§e是否显示官方商店的购买按钮:",
      "config.chat.lobby.enable": "§e是否启用SM大厅:",
      "config.chat.message.limit": "§eSM大厅最多显示几条信息:",
      "config.page.size.limit": "§e设置每页最多显示多少条:",
      "config.shop.sort.mode": "§e店铺显示排序逻辑:",
      "config.official.shop.sort": "§e官方商店物品排序:",
      "config.language": "§e界面语言:",
      "config.sort.random": "随机",
      "config.sort.sales": "销量",
      "config.sort.items": "在售",
      "config.sort.both": "销量+在售",
      "config.sort.name": "名字顺序",
      "config.chat.limit.error": "§c§lSM大厅显示条数必须是正整数!",
      "config.scoreboard.name.empty": "§c§l记分板名称不能为空!",
      "config.creation.cost.error": "§c§l创建店铺费用必须非负整数!",
      "config.name.change.cost.error": "§c§l改名费用必须非负整数!",
      "config.name.change.cooldown.error": "§c§l改名冷却时间必须非负整数!",
      "config.page.size.error": "§c§l每页最多显示数量必须为正整数!",
      "config.updated": "§a§l配置已更新！",
      "config.language.changed": "§a语言已更改，部分变更将在服务器重启后生效",
      "config.language.restart.required": "§e请注意，语言变更需要重启服务器才能完全生效",
      "settings.language.title": "§b语言设置",
      "settings.language.select": "§e选择界面语言:",
      "settings.language.restart.hint": "§c注意: 更改语言需要重启服务器才能完全生效",
      "settings.language.changed": "§a语言设置已更改",
      "settings.language.restart.required": "§e请重启服务器使语言设置完全生效",
      "forbidden.items.title": "§b§l设置不可上架物品",
      "forbidden.items.select": "§e§l请选择物品:",
      "forbidden.items.reason": "§e§l请输入原因(可选):",
      "reason": "原因",
      "forbidden.items.default.reason": "未提供原因",
      "forbidden.items.success": "§a已将 %s 设置为不可上架。原因:%s",
      "forbidden.items.already": "§c该物品已被设置为不可上架。",
      "manage.shop.title": "§b§l管理店铺",
      "manage.shop.select.operation": "§e§l请选择一个操作：",
      "manage.shop.no.shop": "§c您没有店铺可管理！",
      "manage.shop.edit.name": "§a§l修改店铺名称",
      "manage.shop.delete": "§c§l删除店铺",
      "manage.shop.close": "§e§l关闭商店\n当前状态:开启",
      "manage.shop.open": "§a§l开启商店\n当前状态:关闭",
      "manage.shop.announcement": "§d§l编辑店铺公告",
      "manage.shop.new.name": "§e§l新的店铺名称(最多10字符):",
      "manage.shop.name.cost": "§e需要花费:§6%d§f%s",
      "manage.shop.name.empty": "§c店铺名不能为空!",
      "manage.shop.name.too.long": "§c店铺名不能超过10字符!",
      "manage.shop.insufficient.funds": "§c经济不足，无法改名！",
      "manage.shop.name.change.success": "§a店铺名称已修改为:§6%s",
      "manage.shop.delete.title": "§c§l删除店铺",
      "manage.shop.delete.confirm": "§c确认吗？",
      "manage.shop.delete.confirm.switch": "§e确认删除店铺",
      "manage.shop.delete.has.items": "请确认店铺没有物品再删除",
      "manage.shop.delete.success": "§a店铺已删除",
      "manage.shop.delete.failed": "§c部分物品无法返还，请检查空间！",
      "manage.shop.delete.cancelled": "§c操作已取消。",
      "manage.shop.status.changed": "§a店铺已%s！",
      "manage.shop.status.open": "开启",
      "manage.shop.status.closed": "关闭",
      "manage.shop.announcement.title": "§d§l编辑店铺公告",
      "manage.shop.announcement.hint": "请输入店铺公告(最多100字符，可留空)",
      "manage.shop.announcement.input": "公告内容:",
      "manage.shop.announcement.too.long": "§c公告不能超过100字符！",
      "manage.shop.announcement.success": "§a店铺公告已更新！",
      "advert.title": "§d§l购买广告位",
      "advert.select": "§e请选择要购买的广告位：",
      "advert.no.shop": "§c您尚未创建店铺，无法购买广告位。",
      "advert.already.owned": "§e您已拥有广告位#%d，剩余时间约 %s 小时。到期后才可再次购买！",
      "advert.slot.occupied": "§a广告位#%d\n§c已被【%s】占用",
      "advert.slot.not.configured": "§e广告位#%d\n§c(未配置不可购)",
      "advert.slot.available": "§a广告位#%d\n价格:%d,时长:%dh",
      "advert.invalid.selection": "§c无效的广告位选择!",
      "advert.occupied": "§c广告位#%d已被【%s】占用！",
      "advert.not.configured": "§c此广告位尚未配置(或配置无效)，无法购买！",
      "advert.confirm.title": "§a确认购买广告位#%d",
      "advert.confirm.content": "§e广告位价格:§6%d%s\n§e持续时长:%d 小时\n\n§c是否确认购买?",
      "advert.unexpired": "§c您的广告位尚未过期，剩余时间%s小时！",
      "advert.insufficient.funds": "§c需要%d %s购买广告位#%d，您余额不足！",
      "advert.payment.failed": "§c扣费失败，无法购买广告位！",
      "advert.purchase.success": "§a成功购买广告位#%d，持续：%d小时！",
      "advert.config.title": "§c§l配置广告位",
      "advert.config.hint": "§e点击编号进入编辑：",
      "advert.config.slot.info": "§a广告位 #%d\n价格: %d | 时长: %dh",
      "advert.config.edit.title": "§c配置广告位#%d",
      "advert.config.edit.price": "§e广告位价格:",
      "advert.config.edit.duration": "§e广告位持续时长(小时):",
      "advert.config.edit.price.error": "§c价格必须是非负整数！",
      "advert.config.edit.duration.error": "§c持续时长必须是非负整数！",
      "advert.config.edit.success": "§a已更新广告位#%d的价格=%d,时长=%dh",
      "icon.config.title": "§e图标配置",
      "icon.config.local.enable": "§c是否开启本地图标选择功能",
      "icon.config.local.cost": "§e本地图标修改费用",
      "icon.config.local.cooldown": "§e本地图标冷却(小时)",
      "icon.config.url.enable": "§c是否开启URL图标选择功能",
      "icon.config.url.cost": "§eURL图标修改费用",
      "icon.config.url.cooldown": "§eURL图标冷却(小时)",
      "icon.config.custom.enable": "§c是否开启自定义路径图标功能",
      "icon.config.custom.cost": "§e自定义路径图标修改费用",
      "icon.config.custom.cooldown": "§e自定义路径图标冷却(小时)",
      "icon.config.domain": "§b限制允许的域名(留空不限制)",
      "icon.config.local.cost.error": "§c本地图标修改费用须为非负整数!",
      "icon.config.local.cooldown.error": "§c本地图标冷却时间须为非负整数!",
      "icon.config.url.cost.error": "§cURL图标修改费用须为非负整数!",
      "icon.config.url.cooldown.error": "§cURL图标冷却时间须为非负整数!",
      "icon.config.custom.cost.error": "§c自定义路径图标修改费用须为非负整数!",
      "icon.config.custom.cooldown.error": "§c自定义路径图标冷却时间须为非负整数!",
      "icon.config.success": "§a图标配置已更新!",
      "manage.player.shops.title": "§2§l管理玩家店铺 - 第%d/%d页",
      "manage.player.shops.search.keyword": "§e搜索关键字:%s",
      "manage.player.shops.page.size": "(每页最多%d个)",
      "manage.player.shops.select": "请选择要管理的店铺:",
      "manage.player.shops.back": "§c返回上一页",
      "manage.player.shops.search": "§b搜索店铺",
      "manage.player.shops.info": "§s%s\n§s拥有者:%s | 在售:%d",
      "manage.player.shops.search.title": "§b搜索店铺",
      "manage.player.shops.search.input": "请输入店铺名称或店主名称:",
      "manage.player.shop.specific.title": "§a管理店铺: %s",
      "manage.player.shop.specific.select": "请选择一个操作:",
      "manage.player.shop.edit.name": "§a强制更改店铺名称",
      "manage.player.shop.toggle": "§e关闭店铺",
      "manage.player.shop.toggle.open": "§a开启店铺",
      "manage.player.shop.delete": "§c删除店铺",
      "manage.player.shop.icon": "§d强制更改店铺图标",
      "manage.player.shop.items": "§b查看并管理店铺物品",
      "manage.player.shop.toggle.success": "§a店铺已%s",
      "manage.player.shop.name.title": "§a强制更改店铺名称",
      "manage.player.shop.name.input": "新的店铺名称(最多10字符):",
      "manage.player.shop.name.success": "§a已强制修改店铺名称为: %s",
      "manage.player.shop.delete.title": "§c强制删除店铺",
      "manage.player.shop.delete.warning": "如果店铺内还有物品，则禁止删除；不会返还任何物品。",
      "manage.player.shop.delete.confirm": "确认删除店铺？",
      "manage.player.shop.delete.has.items": "§c该店铺里还有物品，无法删除！",
      "manage.player.shop.delete.success": "§a已删除该店铺。",
      "manage.player.shop.icon.title": "§d强制修改店铺图标",
      "manage.player.shop.icon.select": "请选择操作:",
      "manage.player.shop.icon.local": "§b本地图标",
      "manage.player.shop.icon.url": "§dURL图标",
      "manage.player.shop.icon.custom": "§5自定义路径图标",
      "manage.player.shop.icon.local.title": "§a强制设置图标 - 第%d/%d页",
      "manage.player.shop.icon.local.select": "请选择图标:",
      "manage.player.shop.icon.local.success": "§a已强制修改店铺图标为: %s",
      "manage.player.shop.icon.url.title": "§d输入URL图标链接(强制)",
      "manage.player.shop.icon.url.input": "输入完整URL",
      "manage.player.shop.icon.url.success": "§a已强制修改店铺图标为: %s",
      "manage.player.shop.icon.custom.title": "§5强制自定义路径图标",
      "manage.player.shop.icon.custom.input": "自定义路径:",
      "manage.player.shop.icon.custom.success": "§a已强制修改店铺图标为: %s",
      "manage.player.shop.items.title": "§b管理店铺物品: %s",
      "manage.player.shop.items.select": "请选择一个操作:",
      "manage.player.shop.items.search": "§a搜索物品",
      "manage.player.shop.items.info": "§c%d. §s%s\n§l§s价格:%d | 数量:%s",
      "manage.player.shop.items.search.title": "§a搜索店铺内物品",
      "manage.player.shop.items.search.input": "请输入关键字(物品名/备注)",
      "manage.player.shop.items.search.result": "§a搜索结果: %s",
      "manage.player.shop.items.search.not.found": "§c未搜索到相关物品.",
      "manage.player.shop.item.edit.title": "§a管理员编辑店铺物品",
      "manage.player.shop.item.edit.info": "§b名称: §f%s\n§b数量: §f%s",
      "manage.player.shop.item.edit.price": "§e新的价格(正整数)",
      "manage.player.shop.item.edit.category": "§e分类",
      "manage.player.shop.item.edit.remark": "§e备注(可留空,50字以内)",
      "manage.player.shop.item.edit.delete": "§c是否删除该物品?",
      "manage.player.shop.item.edit.price.error": "§c价格必须为正整数!",
      "manage.player.shop.item.edit.remark.too.long": "§c备注不能超过50字!",
      "manage.player.shop.item.edit.delete.success": "§a物品已删除并下架!",
      "manage.player.shop.item.edit.success": "§a已更新物品信息!",
      "ranking.title": "§d§l店铺排行榜(前20)",
      "ranking.info": "§b按总收入降序,最多20名.\n§e当前店铺总数:%d\n\n",
      "ranking.no.data": "§c当前无人开店或无收益数据.\n",
      "ranking.entry": "§6§lNO.%d§r\n§b店铺:§e%s §r| 店主:§a%s\n§e总收入:§6%d§r | 销量:%d\n§a创建时间:%s\n\n",
      "ranking.unknown.time": "未知",
      "trade.logs.title": "§a查看交易记录",
      "trade.logs.select": "请选择要查看的记录类型：",
      "trade.logs.buy": "§e我的购买记录",
      "trade.logs.sell": "§b我的售出记录",
      "trade.logs.global.title": "§s全服交易动态",
      "trade.logs.global.empty": "§c暂无交易动态信息。",
      "trade.logs.global.content": "§6最近%d条全服交易动态：\n\n",
      "trade.logs.global.entry": "§e%d. §a时间:%s\n  §b[%s] §a向 §b[%s] §s(店铺:%s)\n  §a购买 §g%s §a数量：§g%d §a单价:§g%d §a总价:§g%d\n\n",
      "trade.logs.buy.title": "§a我的购买记录",
      "trade.logs.buy.empty": "§c暂无任何购买记录。",
      "trade.logs.buy.content": "§a最近%d条购买记录：\n\n",
      "trade.logs.buy.entry": "§e%d. §a时间:%s\n  §a向§b[%s] §s(店铺:%s)\n  §a购买了§g%s \n§a数量：§g%d §a单价:§g%d §a总价§g:%d\n\n",
      "trade.logs.sell.title": "§a我的售出记录",
      "trade.logs.sell.empty": "§c暂无任何售出记录。",
      "trade.logs.sell.content": "§a最近30条售出记录：\n\n",
      "trade.logs.sell.entry": "§e%d. §a时间:%s\n  §a卖给了§b[%s] §s(店铺:%s)\n  §a物品：§g%s §a数量：%d §a单价:§g%d §a总价:§g%d\n\n",
      "trade.logs.no.records": "§c暂无任何记录。",
      "chat.lobby.title": "§a§lSM大厅",
      "chat.lobby.recent.messages": "§e最近%d条消息：\n",
      "chat.lobby.input.message": "§a输入消息（@玩家名可通知对方）",
      "chat.lobby.placeholder": "支持物品搜索和@玩家",
      "chat.lobby.broadcast": "§7[SM大厅] §r%s§f: %s",
      "api.shop.not.found": "该玩家无店铺可删除",
      "api.shop.deleted": "店铺已删除",
      "api.item.added.externally": "外部添加物品",
      "api.item.added": "已添加物品(数量%d,单价%d)",
      "api.item.not.found": "店铺内无此物品",
      "api.item.removed.completely": "已彻底删除该物品",
      "api.item.removed.partially": "已减少数量: %d, 剩余: %d",
      "api.shop.status.set": "店铺现已 %s",
      "api.opened": "开启",
      "api.closed": "关闭",
      "api.shop.name.invalid": "店铺名不能为空或超过10字符",
      "api.shop.name.changed": "店铺名已修改为: %s",
      "api.shop.icon.changed": "图标已更新为: %s",
      "api.forbidden.item.added": "已加入 forbiddenItems",
      "language.changed.title": "§e§l语言设置已更改",
      "language.changed.message": "已更改为 %1，需要重启服务器生效！",
      "language.restart.needed": "语言已更改为 %1，部分更改需要重启服务器",
      "api.forbidden.item.exists": "该物品已在 forbiddenItems 中"
    },
    "en_US": {
      "currency.name": "§6§lCoins§f",
      "button.return": "§c§lReturn",
      "button.prev.page": "§a<< Previous",
      "button.next.page": "§aNext >>",
      "button.search": "§aSearch",
      "button.confirm": "§aConfirm",
      "button.cancel": "§cCancel",
      "error.invalid.selection": "§cInvalid selection!",
      "error.player.only": "§cThis command is for players only!",
      "success": "§aSuccess",
      "error": "§cError",
      "quantity": "Quantity",
      "price": "Price",
      "stock": "Stock",
      "category": "Category",
      "infinite": "Infinite",
      "unknown.option": "§cUnknown option, please try again.",
      "none": "None",
      "yes": "Yes",
      "no": "No",
      "aux": "Aux Value",
      "player": "Player",
      "system": "System",
      "category.all": "All",
      "category.tools": "Tools",
      "category.blocks": "Blocks",
      "category.food": "Food",
      "category.misc": "Misc",
      "menu.title": "§6§lShopping Mall",
      "menu.balance": "§e§lYour balance: ",
      "menu.unread.messages": "§c§lYou have %d unread @mentions!",
      "menu.select.operation": "§b§lPlease select an operation:",
      "menu.button.lobby": "§a§lMall Lobby",
      "menu.button.search.market": "§a§lSearch Market",
      "menu.button.shopping.center": "§d§lShopping §3Center",
      "menu.button.my.shop": "§s§lMy Shop",
      "menu.button.official.shop": "§e§lOfficial Shop",
      "menu.button.shop.ranking": "§eShop Rankings",
      "menu.button.trade.logs": "§aTrade Records",
      "menu.button.manage.market": "§c§lManage Market",
      "menu.command.success": "§aOpened %s",
      "shop.create.title": "§b§lCreate Shop",
      "shop.create.name.input": "§e§lEnter your shop name (10 characters max):",
      "shop.name": "Shop Name",
      "shop.create.cost": "§e§lCreating a shop costs: §6§l%d§f %s",
      "shop.create.cost.note": "§a(This amount will be deducted upon submission)",
      "shop.create.name.empty": "§c§lShop name cannot be empty!",
      "shop.create.name.too.long": "§c§lShop name cannot exceed 10 characters!",
      "shop.create.insufficient.funds": "§c§lInsufficient funds to create a shop!",
      "shop.create.payment.failed": "§c§lPayment failed, please try again!",
      "shop.create.success": "§a§lShop successfully created! Name: §6§l%s",
      "shop.no.shop": "§cYou haven't created a shop yet!",
      "shop.manage.title": "§b§lMy Shop",
      "shop.manage.select.operation": "§e§lPlease select an operation:",
      "shop.manage.settings": "§b§lManage Shop",
      "shop.manage.edit.name": "§a§lChange Shop Name",
      "shop.manage.delete.shop": "§c§lDelete Shop",
      "shop.manage.close.shop": "§e§lClose Shop\nCurrent status: Open",
      "shop.manage.open.shop": "§a§lOpen Shop\nCurrent status: Closed",
      "shop.manage.edit.announcement": "§d§lEdit Shop Announcement",
      "shop.remain.time": "§cYou can change the name again in %s hours!",
      "shop.icon.cooldown": "§cYou can change the icon again in %s hours!",
      "shop.icon.title": "§a§lChange Shop Icon",
      "shop.icon.select.type": "§ePlease select an icon type:",
      "shop.icon.local": "§bLocal Icon",
      "shop.icon.url": "§dURL Icon",
      "shop.icon.custom": "§5Custom Path Icon",
      "shop.icon.confirm.title": "§aConfirm Icon Purchase",
      "shop.icon.confirm.content": "§eChanging shop icon costs §6%d%s\nNext change available in: §b%s §fhours.\nThe second button below uses your icon as a preview:",
      "shop.icon.cancel": "§cOperation cancelled.",
      "shop.icon.insufficient.funds": "§cInsufficient funds! Need %d%s!",
      "shop.icon.purchase.success": "§aSuccessfully changed shop icon to: %s",
      "shop.icon.select.page": "§aSelect Shop Icon - Page %d/%d",
      "shop.icon.select.info": "§eSelecting an icon will cost %d, with a %s hour cooldown.\n(Click an icon to preview and confirm)",
      "shop.icon.buy.confirm": "§eSpend %d%s to purchase icon\n§b%s?\nClick the preview button below to confirm.",
      "shop.icon.preview.confirm": "§aPreview and Confirm",
      "shop.icon.custom.title": "§5Custom Icon Path",
      "shop.icon.custom.input": "§ePlease enter a custom path (e.g. textures/ui/...)",
      "shop.icon.url.title": "§d§lEnter URL Icon Link",
      "shop.icon.url.domain.required": "§eLink must contain: §c%s",
      "shop.icon.url.no.domain": "§eNo domain restriction set by admin, you can enter any URL.",
      "shop.icon.url.input": "§ePlease enter the complete icon URL:",
      "shop.icon.no.local": "§cNo local icons available (please check ./plugins/ShoppingMall/ui/*.png )",
      "shop.icon.path.empty": "§cPath cannot be empty!",
      "shop.icon.url.empty": "§cURL cannot be empty!",
      "shop.icon.url.invalid": "§cURL doesn't meet requirements, must contain domain: %s",
      "shop.edit.title": "§a§lEdit Shop Items",
      "shop.edit.select.operation": "§e§lPlease select an operation:",
      "shop.edit.add.item": "§a§lList Item",
      "shop.edit.edit.item": "§b§lEdit Items",
      "shop.edit.no.items": "§c§lYour shop has no items!",
      "shop.edit.select.item": "§e§lPlease select an item to edit:",
      "shop.list.title": "§a§lList Item",
      "shop.list.official.title": "§a§lAdd Official Shop Item (Purchase)",
      "shop.list.no.items": "§c§lYour inventory has no items!",
      "shop.list.select.item": "§e§lPlease select an item to list:",
      "shop.list.input.price": "§e§lEnter selling price (per item):",
      "shop.list.input.stock": "§e§lEnter stock quantity (0 for unlimited):",
      "shop.list.input.quantity": "§e§lEnter quantity to list:",
      "shop.list.input.custom.name": "§d§lCustom item name (optional)",
      "shop.list.auto.name": "§7Will use real item name automatically",
      "shop.list.input.remark": "§e§lItem note (optional, max 50 characters):",
      "shop.list.price.error": "§c§lPrice must be a positive integer!",
      "shop.list.stock.error": "§c§lStock quantity must be a non-negative integer! (0 for unlimited)",
      "shop.list.quantity.error": "§c§lQuantity must be a positive integer!",
      "shop.list.remark.too.long": "§c§lNote cannot exceed 50 characters!",
      "shop.list.insufficient.items": "§c§lYou don't have enough items! Only %d in inventory.",
      "shop.list.remove.failed": "§c§lFailed to remove items, please try again!",
      "shop.list.success.official": "§a§lAdded to Official Shop: §d%s§f\nQuantity:%s, Price:§6%d§f/each",
      "shop.list.toast.official": "Item Listed",
      "shop.list.toast.info": "Item:%s / Price:%d / Stock:%s",
      "shop.list.success": "§a§lSuccessfully listed §d%s§f\nCategory:%s | Quantity:%d, Price:§6%d",
      "shop.list.toast.success": "§a§lItem Listed Successfully",
      "shop.list.toast.info.player": "§dItem:%s / Quantity:%d / Price:%d",
      "shop.item.edit.title": "§b§lEdit Item",
      "shop.item.edit.name": "§e§lItem name: %s",
      "shop.item.edit.stock": "§e§lShop inventory: %s",
      "shop.item.edit.inventory": "§aAvailable in your inventory: §6%d",
      "shop.item.edit.restock": "§e§lRestock quantity (0 means no restock):",
      "shop.item.edit.price": "§e§lModify price (each):",
      "shop.item.edit.remark": "§e§lModify note (optional, max 50 characters):",
      "shop.item.edit.category": "§e§lItem category:",
      "shop.item.edit.delist": "§e§lDelist this item?",
      "shop.item.edit.error": "§cShop data error, please try again later.",
      "shop.item.infinite.delist": "§a§lItem delisted (was infinite stock), no refund needed.",
      "shop.item.delist.success": "§a§lItem delisted and returned to your inventory.",
      "shop.item.insufficient.stock": "§c§lNot enough items in inventory, only %d available for restocking!",
      "shop.item.restock.success": "§a§lSuccessfully added %d items to inventory!",
      "shop.item.update.success": "§a§lItem information updated.",
      "official.shop.title": "§e§lOfficial Shop",
      "official.shop.select.operation": "§e§lPlease select an operation:",
      "official.shop.button.buy": "§a§lBuy",
      "official.shop.button.recycle": "§b§lSell",
      "official.shop.button.manage": "§c§lManage Shop",
      "official.shop.items.title": "§e§lOfficial Shop - Page %d / %d",
      "official.shop.no.items": "§cNo items available in the official shop.",
      "official.shop.keyword": "§eSearch keyword: %s",
      "official.shop.count": "§eTotal %d items, max %d per page.",
      "official.shop.select.item": "Please select an item to purchase:",
      "official.shop.search.title": "§aSearch (Official Shop)",
      "official.shop.search.keyword": "§eSearch keyword (item name/note):",
      "official.shop.recycle.title": "§e§lOfficial Shop - Sell Items",
      "official.shop.recycle.select": "§ePlease select an item to sell:",
      "official.shop.recycle.price": "§6§lPrice:%d (each)",
      "official.shop.recycle.no.items": "§cNo items available for selling to the official shop.",
      "official.shop.manage.title": "§c§lManage Official Shop",
      "official.shop.manage.select": "§ePlease select an operation:",
      "official.shop.manage.add": "§a§lAdd Item (For Sale)",
      "official.shop.manage.edit.recycle": "§b§lEdit Buyback Items",
      "official.shop.manage.edit.purchase": "§e§lEdit Shop Items",
      "official.shop.order.error": "§cPlease first click [Official Shop -> Buy] to generate the shop order!",
      "recycle.add.title": "§aAdd Buyback Item",
      "recycle.add.select": "§ePlease select an item to add:",
      "recycle.add.price": "§eEnter buyback price (each):",
      "recycle.add.custom.name": "§dCustom item name (optional):",
      "item.name": "Item Name",
      "recycle.add.success": "§aAdded buyback item: %s, Price: §6%d§f(each)",
      "recycle.add.toast": "Buyback Item Added",
      "recycle.add.toast.info": "Item:%s / Price:%d",
      "recycle.edit.title": "§bEdit Buyback Items",
      "recycle.edit.select": "§ePlease select an item to edit:",
      "recycle.edit.no.items": "§cNo buyback items to edit.",
      "recycle.edit.details.title": "§bEdit Buyback Item",
      "recycle.edit.original.category": "§eOriginal category: %s",
      "recycle.edit.custom.name": "§eCustom name (editable)",
      "recycle.edit.price": "§eModify buyback price (each):",
      "recycle.edit.delete": "§eDelete this buyback item?",
      "recycle.edit.name.empty": "§cName cannot be empty!",
      "recycle.edit.delete.success": "§aBuyback item deleted.",
      "recycle.edit.delete.toast": "Buyback Item Deleted",
      "recycle.edit.delete.toast.info": "Item:%s",
      "recycle.edit.update.success": "§aBuyback item updated.",
      "recycle.edit.update.toast": "Buyback Item Updated",
      "recycle.edit.update.toast.info": "Name:%s / Price:%d",
      "recycle.confirm.title": "§a§lConfirm Sale",
      "recycle.confirm.item.name": "§e§lItem name:%s",
      "recycle.confirm.price": "§e§lPrice:§6%d(each)",
      "recycle.confirm.own.quantity": "§e§lYou have:%d",
      "recycle.confirm.input.quantity": "§e§lEnter quantity to sell:",
      "recycle.confirm.quantity.error": "§cQuantity must be greater than 0!",
      "recycle.confirm.insufficient.items": "§cNot enough items!",
      "recycle.confirm.failed": "§cFailed to remove items, try again!",
      "recycle.confirm.success": "§a§lSold successfully! Received %d %s",
      "recycle.confirm.toast": "§aSale Successful",
      "recycle.confirm.toast.info": "Received %d %s",
      "purchase.edit.title": "§bEdit Official Shop Items",
      "purchase.edit.select": "§ePlease select an item to edit:",
      "purchase.edit.no.items": "§cNo items to edit in the official shop.",
      "purchase.edit.details.title": "§bEdit Official Shop Item",
      "purchase.edit.original.category": "§eOriginal category: %s",
      "purchase.edit.name": "§eModify item name:",
      "purchase.edit.price": "§eModify price (each):",
      "purchase.edit.stock": "§eModify stock quantity (0 for unlimited):",
      "purchase.edit.remark": "§eModify note (optional):",
      "remark": "Remark",
      "purchase.edit.delete": "§eDelete this item?",
      "purchase.edit.name.empty": "§cItem name cannot be empty!",
      "purchase.edit.price.error": "§cPrice must be a positive integer!",
      "purchase.edit.stock.error": "§cStock quantity must be non-negative! (0 for unlimited)",
      "purchase.edit.delete.success": "§aOfficial shop item deleted.",
      "purchase.edit.delete.toast": "Official Shop Item Deleted",
      "purchase.edit.delete.toast.info": "Item:%s",
      "purchase.edit.update.success": "§aOfficial shop item updated.",
      "purchase.edit.update.toast": "Official Shop Item Updated",
      "purchase.edit.update.toast.info": "Name:%s | Price:%d | Stock:%s",
      "shop.center.title": "§6§lShopping Center - Page %d / %d",
      "shop.center.search.shop": "§eSearch (Shop/Owner):§f %s",
      "shop.center.search.item": "§dItem search keyword:§f %s",
      "shop.center.page.size": "§a(Max %d per page)",
      "shop.center.hint": "§sShops with the items you need:",
      "shop.center.back": "§cReturn to Main Menu",
      "shop.center.button.shop.search": "§aReturn to Shop Search",
      "shop.center.button.item.search": "§bSearch Items",
      "shop.center.button.continue.search": "§bContinue Item Search",
      "shop.center.button.back.search": "§aReturn to Shop Search",
      "shop.center.items.count": "§eItems for sale: %d | Sales: %d",
      "shop.center.recommended": "§d(Featured)§f",
      "shop.detail.title": "§b§lShop: %s §r- Page %d / %d",
      "shop.detail.back": "§cReturn",
      "shop.detail.owner": "§eOwner: §f%s",
      "shop.detail.sales": "§eTotal sales: §f%d",
      "shop.detail.item.count": "§eItems for sale: §f%d",
      "shop.detail.announcement": "§dAnnouncement: §f%s",
      "shop.detail.no.announcement": "§7(No announcement)",
      "shop.detail.page.info": "§3Page %d/%d - Please select an item to purchase:",
      "shop.detail.no.items": "§c§lThis shop has no items for sale.",
      "shop.detail.item.info": "§s%s\n§sPrice:%d | Stock:%s | Cat:%s",
      "purchase.confirm.title": "§a§lConfirm Purchase",
      "purchase.confirm.item.name": "§e§lItem name:§a%s",
      "purchase.confirm.enchant": "§aEnchanted§f",
      "purchase.confirm.no.enchant": "§aNo enchant§f",
      "purchase.confirm.stack.info": "§sMax stack:%d §r|§9 Enchanted:%s",
      "purchase.confirm.custom.name": "§3Custom name:%s",
      "purchase.confirm.no.custom.name": "No name",
      "purchase.confirm.category.stock": "§e§lCategory:%s\n§e§lRemaining:§a%s",
      "purchase.confirm.price": "§e§lPrice:§6%d§f(each)",
      "purchase.confirm.remark": "§e§lNote:%s",
      "purchase.confirm.input.quantity": "§e§lEnter purchase quantity:",
      "number": "Number",
      "purchase.confirm.delisted": "§cThis item has been removed, purchase failed!",
      "purchase.confirm.quantity.error": "§c§lQuantity must be a positive integer!",
      "purchase.confirm.insufficient.stock": "§c§lInsufficient stock!",
      "purchase.confirm.self.get": "§a§lYou got §d%s x%d§f from your own shop for free",
      "purchase.confirm.insufficient.funds": "§c§lInsufficient funds! Need %d%s, current:%d",
      "purchase.confirm.inventory.full": "§c§lYour inventory is full!",
      "purchase.confirm.success": "§a§lPurchase successful! Received §d%s x%d",
      "purchase.confirm.cost": "§eDeducted %d %s, balance:%d",
      "purchase.confirm.sold": "§a§lShop sold §d%s x%d, received %d %s",
      "purchase.confirm.offline.earnings": "§a§lYour shop sold items while you were offline, earning %d %s",
      "search.title": "§aSearch",
      "keyword": "Keyword",
      "search.input.keyword": "§eEnter item name to compare prices:",
      "search.show.in.stock": "§eOnly show in-stock items",
      "search.empty.keyword": "§cPlease enter an item keyword",
      "search.result.title": "§6Item Search: %s",
      "search.result.count": "§eFound %d items matching \"%s\"",
      "search.result.sort": "§aSorted by price from low to high",
      "search.result.page": "§bPage %d/%d",
      "search.result.not.found": "§cNo items found matching \"%s\"",
      "search.result.item.info": "§6Price: §a%d §f| §bStock: §a%s\n§fItem: §e%s §f| %s",
      "search.result.official": "§c[Official Shop]",
      "admin.menu.title": "§c§lManage Market",
      "admin.menu.select.operation": "§e§lPlease select an operation:",
      "admin.menu.config.market": "§a§lConfigure Market",
      "admin.menu.forbidden.items": "§b§lSet Forbidden Items",
      "admin.menu.advert.slots": "§d§lConfigure Ad Slots",
      "admin.menu.icon.config": "§e§lIcon Configuration",
      "admin.menu.manage.shops": "§2§lManage Player Shops",
      "config.market.title": "§c§lConfigure Market",
      "config.economy.system": "§eSelect economy system:",
      "config.economy.llmoney": "llmoney",
      "config.economy.scoreboard": "scoreboard",
      "config.scoreboard.name": "§eScoreboard name (only for scoreboard):",
      "config.shop.creation.cost": "§eShop creation cost:",
      "config.shop.name.change.cost": "§eShop name change cost:",
      "config.shop.name.change.cooldown": "§eShop name change cooldown (hours):",
      "config.shop.ranking.enable": "§eEnable shop rankings:",
      "config.official.shop.show.purchase": "§eShow official shop purchase button:",
      "config.chat.lobby.enable": "§eEnable mall lobby:",
      "config.chat.message.limit": "§eMax messages in mall lobby:",
      "config.page.size.limit": "§eMax items per page:",
      "config.shop.sort.mode": "§eShop display sort mode:",
      "config.official.shop.sort": "§eOfficial shop item sort:",
      "config.language": "§eInterface language:",
      "config.sort.random": "Random",
      "config.sort.sales": "Sales",
      "config.sort.items": "Items",
      "config.sort.both": "Sales+Items",
      "config.sort.name": "Name order",
      "config.chat.limit.error": "§c§lMall lobby message limit must be a positive integer!",
      "config.scoreboard.name.empty": "§c§lScoreboard name cannot be empty!",
      "config.creation.cost.error": "§c§lShop creation cost must be a non-negative integer!",
      "config.name.change.cost.error": "§c§lName change cost must be a non-negative integer!",
      "config.name.change.cooldown.error": "§c§lName change cooldown must be a non-negative integer!",
      "config.page.size.error": "§c§lMax items per page must be a positive integer!",
      "config.updated": "§a§lConfiguration updated!",
      "config.language.changed": "§aLanguage changed, some changes will apply after server restart",
      "config.language.restart.required": "§ePlease note that language changes require a server restart to fully apply",
      "settings.language.title": "§bLanguage Settings",
      "settings.language.select": "§eSelect interface language:",
      "settings.language.restart.hint": "§cNote: Changing language requires server restart to fully apply",
      "settings.language.changed": "§aLanguage setting changed",
      "settings.language.restart.required": "§ePlease restart the server for language settings to fully apply",
      "forbidden.items.title": "§b§lSet Forbidden Items",
      "forbidden.items.select": "§e§lPlease select an item:",
      "forbidden.items.reason": "§e§lPlease enter reason (optional):",
      "reason": "Reason",
      "forbidden.items.default.reason": "No reason provided",
      "forbidden.items.success": "§aSet %s as forbidden. Reason:%s",
      "forbidden.items.already": "§cThis item is already forbidden.",
      "manage.shop.title": "§b§lManage Shop",
      "manage.shop.select.operation": "§e§lPlease select an operation:",
      "manage.shop.no.shop": "§cYou don't have a shop to manage!",
      "manage.shop.edit.name": "§a§lChange Shop Name",
      "manage.shop.delete": "§c§lDelete Shop",
      "manage.shop.close": "§e§lClose Shop\nCurrent status: Open",
      "manage.shop.open": "§a§lOpen Shop\nCurrent status: Closed",
      "manage.shop.announcement": "§d§lEdit Shop Announcement",
      "manage.shop.new.name": "§e§lNew shop name (10 characters max):",
      "manage.shop.name.cost": "§eCost:§6%d§f%s",
      "manage.shop.name.empty": "§cShop name cannot be empty!",
      "manage.shop.name.too.long": "§cShop name cannot exceed 10 characters!",
      "manage.shop.insufficient.funds": "§cInsufficient funds for name change!",
      "manage.shop.name.change.success": "§aShop name changed to:§6%s",
      "manage.shop.delete.title": "§c§lDelete Shop",
      "manage.shop.delete.confirm": "§cAre you sure?",
      "manage.shop.delete.confirm.switch": "§eConfirm shop deletion",
      "manage.shop.delete.has.items": "Please make sure the shop has no items before deleting",
      "manage.shop.delete.success": "§aShop deleted",
      "manage.shop.delete.failed": "§cSome items couldn't be returned, please check inventory space!",
      "manage.shop.delete.cancelled": "§cOperation cancelled.",
      "manage.shop.status.changed": "§aShop %s!",
      "manage.shop.status.open": "opened",
      "manage.shop.status.closed": "closed",
      "manage.shop.announcement.title": "§d§lEdit Shop Announcement",
      "manage.shop.announcement.hint": "Enter shop announcement (100 characters max, can be empty)",
      "manage.shop.announcement.input": "Announcement:",
      "manage.shop.announcement.too.long": "§cAnnouncement cannot exceed 100 characters!",
      "manage.shop.announcement.success": "§aShop announcement updated!",
      "advert.title": "§d§lPurchase Ad Slot",
      "advert.select": "§ePlease select an ad slot:",
      "advert.no.shop": "§cYou haven't created a shop, can't purchase ad slots.",
      "advert.already.owned": "§eYou already own ad slot #%d, %s hours remaining. You can purchase again after it expires!",
      "advert.slot.occupied": "§aAd Slot #%d\n§cOccupied by [%s]",
      "advert.slot.not.configured": "§eAd Slot #%d\n§c(Not configured)",
      "advert.slot.available": "§aAd Slot #%d\nPrice:%d, Duration:%dh",
      "advert.invalid.selection": "§cInvalid ad slot selection!",
      "advert.occupied": "§cAd Slot #%d is occupied by [%s]!",
      "advert.not.configured": "§cThis ad slot is not configured, cannot purchase!",
      "advert.confirm.title": "§aConfirm Ad Slot #%d Purchase",
      "advert.confirm.content": "§eAd slot price:§6%d%s\n§eDuration:%d hours\n\n§cConfirm purchase?",
      "advert.unexpired": "§cYour ad slot has not expired yet, %s hours remaining!",
      "advert.insufficient.funds": "§cYou need %d %s to purchase Ad Slot #%d, insufficient funds!",
      "advert.payment.failed": "§cPayment failed, cannot purchase ad slot!",
      "advert.purchase.success": "§aSuccessfully purchased Ad Slot #%d, duration: %d hours!",
      "advert.config.title": "§c§lConfigure Ad Slots",
      "advert.config.hint": "§eClick a number to edit:",
      "advert.config.slot.info": "§aAd Slot #%d\nPrice: %d | Duration: %dh",
      "advert.config.edit.title": "§cConfigure Ad Slot #%d",
      "advert.config.edit.price": "§eAd slot price:",
      "advert.config.edit.duration": "§eAd slot duration (hours):",
      "advert.config.edit.price.error": "§cPrice must be a non-negative integer!",
      "advert.config.edit.duration.error": "§cDuration must be a non-negative integer!",
      "advert.config.edit.success": "§aUpdated Ad Slot #%d: price=%d, duration=%dh",
      "icon.config.title": "§eIcon Configuration",
      "icon.config.local.enable": "§cEnable local icon selection",
      "icon.config.local.cost": "§eLocal icon change cost",
      "icon.config.local.cooldown": "§eLocal icon cooldown (hours)",
      "icon.config.url.enable": "§cEnable URL icon selection",
      "icon.config.url.cost": "§eURL icon change cost",
      "icon.config.url.cooldown": "§eURL icon cooldown (hours)",
      "icon.config.custom.enable": "§cEnable custom path icon",
      "icon.config.custom.cost": "§eCustom path icon change cost",
      "icon.config.custom.cooldown": "§eCustom path icon cooldown (hours)",
      "icon.config.domain": "§bRestricted domain (leave empty for no restriction)",
      "icon.config.local.cost.error": "§cLocal icon cost must be a non-negative integer!",
      "icon.config.local.cooldown.error": "§cLocal icon cooldown must be a non-negative integer!",
      "icon.config.url.cost.error": "§cURL icon cost must be a non-negative integer!",
      "icon.config.url.cooldown.error": "§cURL icon cooldown must be a non-negative integer!",
      "icon.config.custom.cost.error": "§cCustom path icon cost must be a non-negative integer!",
      "icon.config.custom.cooldown.error": "§cCustom path icon cooldown must be a non-negative integer!",
      "icon.config.success": "§aIcon configuration updated!",
      "manage.player.shops.title": "§2§lManage Player Shops - Page %d/%d",
      "manage.player.shops.search.keyword": "§eSearch keyword:%s",
      "manage.player.shops.page.size": "(Max %d per page)",
      "manage.player.shops.select": "Please select a shop to manage:",
      "manage.player.shops.back": "§cReturn",
      "manage.player.shops.search": "§bSearch Shops",
      "manage.player.shops.info": "§s%s\n§sOwner:%s | Items:%d",
      "manage.player.shops.search.title": "§bSearch Shops",
      "manage.player.shops.search.input": "Enter shop name or owner name:",
      "manage.player.shop.specific.title": "§aManage Shop: %s",
      "manage.player.shop.specific.select": "Please select an operation:",
      "manage.player.shop.edit.name": "§aForce Change Shop Name",
      "manage.player.shop.toggle": "§eClose Shop",
      "manage.player.shop.toggle.open": "§aOpen Shop",
      "manage.player.shop.delete": "§cDelete Shop",
      "manage.player.shop.icon": "§dForce Change Shop Icon",
      "manage.player.shop.items": "§bView and Manage Shop Items",
      "manage.player.shop.toggle.success": "§aShop has been %s",
      "manage.player.shop.name.title": "§aForce Change Shop Name",
      "manage.player.shop.name.input": "New shop name (10 characters max):",
      "manage.player.shop.name.success": "§aForced shop name change to: %s",
      "manage.player.shop.delete.title": "§cForce Delete Shop",
      "manage.player.shop.delete.warning": "If the shop has items, deletion will be prohibited; no items will be returned.",
      "manage.player.shop.delete.confirm": "Confirm shop deletion?",
      "manage.player.shop.delete.has.items": "§cThis shop still has items, cannot delete!",
      "manage.player.shop.delete.success": "§aShop deleted.",
      "manage.player.shop.icon.title": "§dForce Change Shop Icon",
      "manage.player.shop.icon.select": "Please select an option:",
      "manage.player.shop.icon.local": "§bLocal Icon",
      "manage.player.shop.icon.url": "§dURL Icon",
      "manage.player.shop.icon.custom": "§5Custom Path Icon",
      "manage.player.shop.icon.local.title": "§aForce Set Icon - Page %d/%d",
      "manage.player.shop.icon.local.select": "Please select an icon:",
      "manage.player.shop.icon.local.success": "§aForced shop icon change to: %s",
      "manage.player.shop.icon.url.title": "§dEnter URL Icon Link (Force)",
      "manage.player.shop.icon.url.input": "Enter complete URL",
      "manage.player.shop.icon.url.success": "§aForced shop icon change to: %s",
      "manage.player.shop.icon.custom.title": "§5Force Custom Path Icon",
      "manage.player.shop.icon.custom.input": "Custom path:",
      "manage.player.shop.icon.custom.success": "§aForced shop icon change to: %s",
      "manage.player.shop.items.title": "§bManage Shop Items: %s",
      "manage.player.shop.items.select": "Please select an operation:",
      "manage.player.shop.items.search": "§aSearch Items",
      "manage.player.shop.items.info": "§c%d. §s%s\n§l§sPrice:%d | Quantity:%s",
      "manage.player.shop.items.search.title": "§aSearch Shop Items",
      "manage.player.shop.items.search.input": "Enter keyword (item name/note)",
      "manage.player.shop.items.search.result": "§aSearch Results: %s",
      "manage.player.shop.items.search.not.found": "§cNo related items found.",
      "manage.player.shop.item.edit.title": "§aAdmin Edit Shop Item",
      "manage.player.shop.item.edit.info": "§bName: §f%s\n§bQuantity: §f%s",
      "manage.player.shop.item.edit.price": "§eNew price (positive integer)",
      "manage.player.shop.item.edit.category": "§eCategory",
      "manage.player.shop.item.edit.remark": "§eNote (optional, max 50 characters)",
      "manage.player.shop.item.edit.delete": "§cDelete this item?",
      "manage.player.shop.item.edit.price.error": "§cPrice must be a positive integer!",
      "manage.player.shop.item.edit.remark.too.long": "§cNote cannot exceed 50 characters!",
      "manage.player.shop.item.edit.delete.success": "§aItem deleted and delisted!",
      "manage.player.shop.item.edit.success": "§aItem information updated!",
      "ranking.title": "§d§lShop Rankings (Top 20)",
      "ranking.info": "§bSorted by total earnings, maximum 20 shops.\n§eTotal shops:%d\n\n",
      "ranking.no.data": "§cNo shops or earnings data available.\n",
      "ranking.entry": "§6§lNO.%d§r\n§bShop:§e%s §r| Owner:§a%s\n§eTotal earnings:§6%d§r | Sales:%d\n§aCreated:%s\n\n",
      "ranking.unknown.time": "Unknown",
      "trade.logs.title": "§aView Trade Records",
      "trade.logs.select": "Please select a record type to view:",
      "trade.logs.buy": "§eMy Purchase History",
      "trade.logs.sell": "§bMy Sales History",
      "trade.logs.global.title": "§sServer-wide Trade Records",
      "trade.logs.global.empty": "§cNo trade records available.",
      "trade.logs.global.content": "§6Last %d server-wide transactions:\n\n",
      "trade.logs.global.entry": "§e%d. §aTime:%s\n  §b[%s] §ato §b[%s] §s(Shop:%s)\n  §aBought §g%s §aQuantity:§g%d §aPrice each:§g%d §aTotal:§g%d\n\n",
      "trade.logs.buy.title": "§aMy Purchase History",
      "trade.logs.buy.empty": "§cNo purchase records.",
      "trade.logs.buy.content": "§aLast %d purchase records:\n\n",
      "trade.logs.buy.entry": "§e%d. §aTime:%s\n  §aFrom§b[%s] §s(Shop:%s)\n  §aBought§g%s \n§aQuantity:§g%d §aPrice each:§g%d §aTotal§g:%d\n\n",
      "trade.logs.sell.title": "§aMy Sales History",
      "trade.logs.sell.empty": "§cNo sales records.",
      "trade.logs.sell.content": "§aLast 30 sales records:\n\n",
      "trade.logs.sell.entry": "§e%d. §aTime:%s\n  §aSold to§b[%s] §s(Shop:%s)\n  §aItem:§g%s §aQuantity:%d §aPrice each:§g%d §aTotal:§g%d\n\n",
      "trade.logs.no.records": "§cNo records available.",
      "chat.lobby.title": "§a§lMall Lobby",
      "chat.lobby.recent.messages": "§eLast %d messages:\n",
      "chat.lobby.input.message": "§aEnter message (@username to notify)",
      "chat.lobby.placeholder": "Supports item search and @mentions",
      "chat.lobby.broadcast": "§7[Mall Lobby] §r%s§f: %s",
      "api.shop.not.found": "Player has no shop to delete",
      "api.shop.deleted": "Shop deleted",
      "api.item.added.externally": "Item added externally",
      "api.item.added": "Added item (quantity %d, price %d)",
      "api.item.not.found": "No such item in shop",
      "api.item.removed.completely": "Item completely removed",
      "api.item.removed.partially": "Reduced quantity: %d, remaining: %d",
      "api.shop.status.set": "Shop is now %s",
      "api.opened": "opened",
      "api.closed": "closed",
      "api.shop.name.invalid": "Shop name cannot be empty or exceed 10 characters",
      "api.shop.name.changed": "Shop name changed to: %s",
      "api.shop.icon.changed": "Icon updated to: %s",
      "api.forbidden.item.added": "Added to forbiddenItems",
      "language.changed.title": "§e§lLanguage Setting Changed",
      "language.changed.message": "Changed to %1, server restart required!",
      "language.restart.needed": "Language changed to %1, some changes require server restart",
      "api.forbidden.item.exists": "Item already in forbiddenItems"
    }
  };
}
let _0x527f76 = {};
File.exists(_0xf91549) ? _0x527f76 = JSON.parse(File.readFrom(_0xf91549)) : (_0x527f76 = {
  "global": [],
  "players": {}
}, _0x253280());
let _0x2cba7f = {
  "messages": [],
  "mentions": {}
};
File.exists(_0xb5b6c5) ? _0x2cba7f = JSON.parse(File.readFrom(_0xb5b6c5)) : File.writeTo(_0xb5b6c5, JSON.stringify(_0x2cba7f, null, 2));
function _0x435863() {
  File.writeTo(_0xb5b6c5, JSON.stringify(_0x2cba7f, null, 2));
}
function _0x394800(_0x464562, _0x45e482, _0x136a49) {
  let _0x4b5563 = [..._0x464562];
  if (_0x45e482 === _0x534e1f("config.sort.random")) {
    {
      for (let _0xe053d = _0x4b5563.length - 1; _0xe053d > 0; _0xe053d--) {
        const _0x36a323 = Math.floor(Math.random() * (_0xe053d + 1));
        [_0x4b5563[_0xe053d], _0x4b5563[_0x36a323]] = [_0x4b5563[_0x36a323], _0x4b5563[_0xe053d]];
      }
      return _0x4b5563;
    }
  }
  _0x4b5563.sort((_0x127f81, _0x488c76) => {
    let _0x42e0c3 = _0x127f81.ownerXuid,
      _0x4f1fbf = _0x488c76.ownerXuid,
      _0x33fc32 = _0x136a49[_0x42e0c3]?.["salesCount"] || 0,
      _0x1ba50f = _0x136a49[_0x4f1fbf]?.["salesCount"] || 0,
      _0x3b30c2 = Object.keys(_0x127f81.items || {}).length,
      _0x3f5fc5 = Object.keys(_0x488c76.items || {}).length;
    if (_0x45e482 === _0x534e1f("config.sort.sales")) return _0x1ba50f - _0x33fc32;else {
      if (_0x45e482 === _0x534e1f("config.sort.items")) {
        return _0x3f5fc5 - _0x3b30c2;
      } else {
        if (_0x45e482 === _0x534e1f("config.sort.both")) {
          let _0x534479 = _0x33fc32 + _0x3b30c2,
            _0x3c3165 = _0x1ba50f + _0x3f5fc5;
          return _0x3c3165 - _0x534479;
        } else {
          if (_0x45e482 === _0x534e1f("config.sort.name")) {
            return _0x127f81.name.localeCompare(_0x488c76.name);
          }
        }
      }
    }
    return 0;
  });
  return _0x4b5563;
}
function _0x253280() {
  File.writeTo(_0xf91549, JSON.stringify(_0x527f76, null, 4));
}
let _0x10932d = {};
File.exists(_0x321b26) ? _0x10932d = JSON.parse(File.readFrom(_0x321b26)) : (_0x10932d = {}, _0x4791db());
let _0x185450 = {};
File.exists(_0x545c9a) ? _0x185450 = JSON.parse(File.readFrom(_0x545c9a)) : (_0x185450 = {
  "purchaseItems": {},
  "recycleItems": {}
}, _0x274b0f());
let _0xb5a09d = [];
File.exists(_0x48ad9b) ? _0xb5a09d = JSON.parse(File.readFrom(_0x48ad9b)) : (_0xb5a09d = [], _0x4b2cda());
let _0x4c64fa = {};
File.exists(_0x3a58d3) ? _0x4c64fa = JSON.parse(File.readFrom(_0x3a58d3)) : (_0x4c64fa = {}, _0xdd4d1e());
let _0x358d36 = [];
function _0x4791db() {
  File.writeTo(_0x321b26, JSON.stringify(_0x10932d, null, 4));
}
function _0x274b0f() {
  File.writeTo(_0x545c9a, JSON.stringify(_0x185450, null, 4));
}
function _0x4b2cda() {
  File.writeTo(_0x48ad9b, JSON.stringify(_0xb5a09d, null, 4));
}
function _0xdd4d1e() {
  File.writeTo(_0x3a58d3, JSON.stringify(_0x4c64fa, null, 4));
}
const {
  I18nAPI: _0x5f55a0
} = require("./GMLIB-LegacyRemoteCallApi/lib/GMLIB_API-JS");
let _0x44a312 = ll.imports("GMLIB_API", "getEnchantTypeNameFromId"),
  _0x16641d = ll.imports("GMLIB_API", "getEnchantNameAndLevel"),
  _0x2cce4f = ll.imports("GMLIB_API", "getItemCategoryName");
LLSE_Item.prototype.getCategoryName = function () {
  return _0x2cce4f(this);
};
let _0xae1d5e = ll.imports("GMLIB_API", "getItemEffecName"),
  _0x418a88 = ll.imports("GMLIB_API", "getItemCustomName"),
  _0x2301c5 = ll.imports("GMLIB_API", "getItemMaxCount");
const _0x264298 = "textures/ui/promo_gift_small_green";
let _0x2f8a5d = new JsonConfigFile("./plugins/ShoppingMall/FinalTexture/config/texture_path.json", JSON.stringify({}, null, 4));
function _0x283bfd(_0x5c3222) {
  return _0x2f8a5d.get(_0x5c3222);
}
function _0x553daf(_0x2c32e0) {
  let _0x4c142c = _0x283bfd(_0x2c32e0);
  if (_0x4c142c == "null") return _0x264298;
  if (!_0x4c142c) return _0x2c32e0.includes(":") && _0x2f8a5d.set(_0x2c32e0, "null"), _0x264298;
  return _0x4c142c;
}
function _0x1d0700(_0x123826) {
  if (!_0x123826.iconName || _0x123826.iconName.trim() === "") return "textures/ui/store_home_icon";
  if (_0x123826.iconName.startsWith("http://") || _0x123826.iconName.startsWith("https://")) {
    return _0x123826.iconName;
  }
  return _0x123826.iconName.startsWith("textures/") ? _0x123826.iconName : "textures/ui/" + _0x123826.iconName;
}
function _0x256b17(_0x29f8ac) {
  _0x29f8ac.addButton(_0x534e1f("button.return"), "textures/ui/icon_import");
}
const _0x2514ad = [_0x534e1f("category.all"), _0x534e1f("category.tools"), _0x534e1f("category.blocks"), _0x534e1f("category.food"), _0x534e1f("category.misc")];
let _0x5bedab = _0x287fbc.get("pageSizeLimit") || 30;
const _0x5f4a7e = mc.newCommand(_0x287fbc.get("cmd"), _0x287fbc.get("cmdDescription"), PermType.Any);
_0x5f4a7e.overload([]);
_0x5f4a7e.setCallback((_0x2b4465, _0x28a67, _0x5a9ed6, _0x516188) => {
  if (!_0x28a67.player) return _0x5a9ed6.error(_0x534e1f("error.player.only"));
  return _0x1e7ae7(_0x28a67.player);
});
_0x5f4a7e.setup();
const _0x443a13 = mc.newCommand("smgf", _0x534e1f("menu.button.official.shop"), PermType.Any);
_0x443a13.overload([]);
_0x443a13.setCallback((_0x3dd64a, _0x50b923, _0x35a3cc, _0x3aef7a) => {
  if (!_0x50b923.player) return _0x35a3cc.error(_0x534e1f("error.player.only"));
  _0x5c74cb(_0x50b923.player, 1, "", _0x534e1f("category.all"));
  return _0x35a3cc.success(_0x534e1f("menu.command.success", _0x534e1f("menu.button.official.shop")));
});
_0x443a13.setup();
const _0x55b8de = mc.newCommand("smsc", _0x534e1f("menu.button.shopping.center"), PermType.Any);
_0x55b8de.overload([]);
_0x55b8de.setCallback((_0x31691f, _0x3d76d3, _0x2d00de, _0x587dc7) => {
  if (!_0x3d76d3.player) return _0x2d00de.error(_0x534e1f("error.player.only"));
  _0x59bc4e(_0x3d76d3.player, 1, "", _0x534e1f("category.all"), false);
  return _0x2d00de.success(_0x534e1f("menu.command.success", _0x534e1f("menu.button.shopping.center")));
});
_0x55b8de.setup();
const _0x2f0e6d = mc.newCommand("smdp", _0x534e1f("menu.button.my.shop"), PermType.Any);
_0x2f0e6d.overload([]);
_0x2f0e6d.setCallback((_0x3e6b3d, _0x18bd6d, _0x257ef0, _0x5f5644) => {
  if (!_0x18bd6d.player) return _0x257ef0.error(_0x534e1f("error.player.only"));
  _0x43f48f(_0x18bd6d.player);
  return _0x257ef0.success(_0x534e1f("menu.command.success", _0x534e1f("menu.button.my.shop")));
});
_0x2f0e6d.setup();
const _0x4de3b4 = mc.newCommand("smlt", _0x534e1f("menu.button.lobby"), PermType.Any);
_0x4de3b4.overload([]);
_0x4de3b4.setCallback((_0x29fc01, _0xaedffe, _0x5eebb6, _0x34117f) => {
  if (!_0xaedffe.player) return _0x5eebb6.error(_0x534e1f("error.player.only"));
  _0x69aac7(_0xaedffe.player);
  return _0x5eebb6.success(_0x534e1f("menu.command.success", _0x534e1f("menu.button.lobby")));
});
_0x4de3b4.setup();
const _0x256ed1 = mc.newCommand("smop", _0x534e1f("menu.button.manage.market") + "(仅管理员)", PermType.GameMasters);
_0x256ed1.overload([]);
_0x256ed1.setCallback((_0x1bdccb, _0x197c0a, _0x415ebd, _0x506ae3) => {
  if (!_0x197c0a.player) return _0x415ebd.error(_0x534e1f("error.player.only"));
  _0x43e53b(_0x197c0a.player);
  return _0x415ebd.success(_0x534e1f("menu.command.success", _0x534e1f("menu.button.manage.market")));
});
_0x256ed1.setup();
function _0x3e774d() {
  const _0x52da21 = _0x287fbc.get("economySystem");
  if (_0x52da21 === "llmoney") return {
    "get": _0x52abbd => money.get(_0x52abbd.xuid),
    "reduce": (_0xdfb968, _0x16a53f) => money.reduce(_0xdfb968.xuid, _0x16a53f),
    "add": (_0xc3ac08, _0xacf9a7) => money.add(_0xc3ac08.xuid, _0xacf9a7),
    "name": _0x534e1f("currency.name")
  };else {
    if (_0x52da21 === "scoreboard") {
      {
        const _0xe39c91 = _0x287fbc.get("scoreboardObjective");
        let _0x3e53e9 = mc.getScoreObjective(_0xe39c91);
        !_0x3e53e9 && (_0x3e53e9 = mc.newScoreObjective(_0xe39c91, _0xe39c91));
        return {
          "get": _0x134cd6 => {
            let _0x79483c = _0x134cd6.getScore(_0xe39c91);
            if (typeof _0x79483c !== "number" || isNaN(_0x79483c)) return _0x134cd6.setScore(_0xe39c91, 0), 0;
            return _0x79483c;
          },
          "reduce": (_0x5966d1, _0x39a802) => {
            let _0x1f9498 = _0x5966d1.getScore(_0xe39c91);
            (typeof _0x1f9498 !== "number" || isNaN(_0x1f9498)) && (_0x5966d1.setScore(_0xe39c91, 0), _0x1f9498 = 0);
            if (_0x1f9498 < _0x39a802) return false;
            _0x5966d1.setScore(_0xe39c91, _0x1f9498 - _0x39a802);
            return true;
          },
          "add": (_0x5a98fe, _0x15bb80) => {
            {
              let _0x4c8451 = _0x5a98fe.getScore(_0xe39c91);
              typeof _0x4c8451 !== "number" || isNaN(_0x4c8451) ? _0x5a98fe.setScore(_0xe39c91, _0x15bb80) : _0x5a98fe.setScore(_0xe39c91, _0x4c8451 + _0x15bb80);
            }
          },
          "name": "§6§l" + _0xe39c91 + "§f"
        };
      }
    } else {
      throw new Error("经济系统配置错误！");
    }
  }
}
mc.listen("onServerStarted", () => {
  const _0x33b87f = _0x287fbc.get("language") || "zh_CN";
  _0x3344fc();
  !_0x14f0bb[_0x33b87f] ? (_0x157e78 = "zh_CN", _0x287fbc.set("language", _0x157e78), logger.warn("语言 " + _0x33b87f + " 不存在，已重置为 zh_CN")) : _0x157e78 = _0x33b87f;
  if (_0x157e78 === "en_US") File.exists("./resource_packs/vanilla/texts/en_US.langbackup") && (File.exists("./resource_packs/vanilla/texts/en_US.lang") && File.delete("./resource_packs/vanilla/texts/en_US.lang"), File.copy("./resource_packs/vanilla/texts/en_US.langbackup", "./resource_packs/vanilla/texts/en_US.lang"), logger.info("已恢复为英文语言文件"));else {
    if (!File.exists("./resource_packs/vanilla/texts/en_US.langbackup") && File.exists("./resource_packs/vanilla/texts/en_US.lang")) {
      File.rename("./resource_packs/vanilla/texts/en_US.lang", "./resource_packs/vanilla/texts/en_US.langbackup");
      File.copy("./resource_packs/vanilla/texts/zh_CN.lang", "./resource_packs/vanilla/texts/en_US.lang");
      logger.info("已将游戏语言替换为 " + _0x157e78 + " (中文模式)");
    } else File.exists("./resource_packs/vanilla/texts/en_US.langbackup") && (File.exists("./resource_packs/vanilla/texts/en_US.lang") && File.delete("./resource_packs/vanilla/texts/en_US.lang"), File.copy("./resource_packs/vanilla/texts/zh_CN.lang", "./resource_packs/vanilla/texts/en_US.lang"), logger.info("已将游戏语言替换为 " + _0x157e78 + " (中文模式)"));
  }
  if (_0x287fbc.get("economySystem") === "scoreboard") {
    {
      const _0x146d00 = _0x287fbc.get("scoreboardObjective");
      if (!mc.getScoreObjective(_0x146d00)) {
        mc.newScoreObjective(_0x146d00, _0x146d00);
      }
    }
  }
  _0x2eb15e();
});
function _0x2eb15e() {
  _0x2514ad[0] = _0x534e1f("category.all");
  _0x2514ad[1] = _0x534e1f("category.tools");
  _0x2514ad[2] = _0x534e1f("category.blocks");
  _0x2514ad[3] = _0x534e1f("category.food");
  _0x2514ad[4] = _0x534e1f("category.misc");
}
mc.listen("onJoin", function (_0x451f62) {
  const _0x269973 = _0x10932d[_0x451f62.xuid];
  if (_0x269973 && _0x269973.pendingEarnings && _0x269973.pendingEarnings > 0) {
    const _0x1117b7 = _0x3e774d();
    _0x1117b7.add(_0x451f62, _0x269973.pendingEarnings);
    _0x451f62.tell(_0x534e1f("purchase.confirm.offline.earnings", _0x269973.pendingEarnings, _0x1117b7.name));
    _0x269973.pendingEarnings = 0;
    _0x4791db();
  }
});
function _0x3fbeb8(_0x2ff862) {
  let _0x27c21b = 0,
    _0x3a65cc = [],
    _0x21227f = "",
    _0x5d5d0b = "";
  if (!_0x2ff862.isNull()) {
    {
      _0x5d5d0b = _0x5f55a0.get(_0x2ff862.getTranslateKey(), [], "zh_CN");
      let _0x23039c = _0x2ff862.getNbt(),
        _0x43c6e9 = _0x23039c.getKeys().includes("tag") ? _0x23039c.getTag("tag") : null,
        _0x166900 = _0x43c6e9 ? _0x43c6e9.getTag("ench") : null;
      if (_0x23039c && _0x43c6e9 && _0x166900 && _0x43c6e9.getType("ench") == NBT.Compound) {
        for (const _0x597010 of JSON.parse(_0x166900)) {
          {
            _0x27c21b++;
            let _0x49a4a2 = _0x44a312(_0x597010.id),
              _0x4b69f5 = _0x16641d(_0x49a4a2, _0x597010.lvl);
            _0x3a65cc.push(_0x4b69f5 + "§f");
          }
        }
      }
      if (_0x2ff862.isDamageableItem && _0x2ff862.isDamaged) _0x21227f = "-§3(耐久:" + (_0x2ff862.maxDamage - _0x2ff862.damage) + "/" + _0x2ff862.maxDamage + ")§f";else {
        if (_0x2ff862.isDamageableItem && !_0x2ff862.isDamaged) {
          _0x21227f = "-§6(满耐久)§f";
        } else _0x21227f = "§f";
      }
    }
  } else return null;
  return [_0x27c21b, _0x3a65cc, _0x21227f, _0x5d5d0b];
}
function _0x127334(_0x4dc1c6) {
  if (_0x4dc1c6.isNull() || !_0x4dc1c6.type.endsWith("_shulker_box")) return [0, []];
  const _0x141ea8 = _0x4dc1c6.getNbt().getData("tag");
  if (!_0x141ea8) return [0, []];
  const _0xfbb221 = JSON.parse(_0x141ea8).Items;
  if (!_0xfbb221) return [0, []];
  return [_0xfbb221.length, _0xfbb221];
}
function _0x3421de(_0x1e0574, _0x21cf6b) {
  const _0x5490ba = _0x3fbeb8(_0x1e0574);
  if (Array.isArray(_0x5490ba) && _0x5490ba.length === 4) {
    const [_0x51cb00, _0x4e86ea, _0x8d1a57, _0x393e1f] = _0x5490ba,
      _0x5a716b = _0x21cf6b ? "\n" : "";
    let _0x5beb75 = _0x5a716b;
    for (const _0x224ab2 of _0x4e86ea) {
      _0x5beb75 += _0x224ab2 + _0x5a716b;
    }
    if (_0x1e0574.isPotionItem) {
      return _0x393e1f + "§f-" + _0xae1d5e(_0x1e0574).trim();
    } else {
      if (_0x1e0574.type.endsWith("_shulker_box")) {
        let [_0x9ad811, _0x4905a2] = _0x127334(_0x1e0574);
        if (_0x21cf6b && _0x9ad811 > 0) {
          let _0x35c5a6 = "\n";
          for (const _0x250739 of _0x4905a2) {
            {
              let _0x252850 = mc.newItem(NBT.parseSNBT(JSON.stringify(_0x250739)));
              _0x35c5a6 += "-" + _0x3421de(_0x252850, _0x21cf6b) + " * " + _0x250739.Count + "\n";
            }
          }
          return _0x393e1f + "§f- (" + _0x35c5a6.trimEnd() + ")";
        } else return _0x393e1f + "§f- (" + (_0x9ad811 <= 0 ? "空盒" : _0x9ad811 + "项物品") + ")";
      } else {
        if (_0x1e0574.type === "minecraft:ominous_bottle") {
          const _0x57b74f = {
            0: "§a凶兆 I (100:00)§f",
            1: "§a凶兆 II (100:00)§f",
            2: "§a凶兆 III (100:00)§f",
            3: "§a凶兆 IV (100:00)§f",
            4: "§a凶兆 V (100:00)§f"
          };
          return _0x393e1f + " §f" + _0x57b74f[_0x1e0574.aux];
        } else {
          const _0x3f05fd = _0x21cf6b && _0x51cb00 > 0 ? _0x5beb75.trimEnd() : _0x51cb00 === 0 ? "§f" : "-§c(" + _0x51cb00 + "§d附魔)" + _0x5beb75.trimEnd() + "§f";
          return _0x393e1f + "§f" + _0x8d1a57 + "§f" + _0x3f05fd;
        }
      }
    }
  } else return "该物品信息获取失败!";
}
function _0x23f4e7(_0xe30b1, _0xad0f17) {
  const _0x1fb921 = NBT.parseSNBT(_0xe30b1),
    _0xfce073 = NBT.parseSNBT(_0xad0f17);
  _0x1fb921.setByte("Count", 1);
  _0xfce073.setByte("Count", 1);
  return _0x1fb921.toSNBT() === _0xfce073.toSNBT();
}
function _0x17d1e9(_0x18efe2, _0x3fd447, _0x15b5d2) {
  let _0x40da5f = _0x15b5d2;
  const _0x42499f = _0x18efe2.getInventory();
  for (let _0x11b049 = 0; _0x11b049 < _0x42499f.size; _0x11b049++) {
    if (_0x40da5f <= 0) break;
    const _0x1a599a = _0x42499f.getItem(_0x11b049);
    if (_0x1a599a && _0x1a599a.type !== "") {
      const _0x2b2104 = _0x1a599a.getNbt().toSNBT();
      if (_0x23f4e7(_0x2b2104, _0x3fd447)) {
        {
          let _0x5dee3f = Math.min(_0x1a599a.count, _0x40da5f);
          _0x42499f.removeItem(_0x11b049, _0x5dee3f);
          _0x40da5f -= _0x5dee3f;
        }
      }
    }
  }
  _0x18efe2.refreshItems();
  return _0x40da5f <= 0;
}
function _0x3849f6(_0xdc1e27, _0x533311 = false) {
  const _0x3a95ea = {},
    _0x5e9d08 = _0xdc1e27.getInventory().getAllItems();
  for (let _0x52da0c = 0; _0x52da0c < _0x5e9d08.length; _0x52da0c++) {
    {
      const _0x153da4 = _0x5e9d08[_0x52da0c];
      if (_0x153da4 && _0x153da4.type !== "") {
        {
          const _0x58d40b = _0x153da4.getNbt().toSNBT();
          if (_0x533311 && _0xb5a09d.includes(_0x58d40b)) continue;
          !_0x3a95ea[_0x58d40b] ? _0x3a95ea[_0x58d40b] = {
            "item": _0x153da4,
            "count": _0x153da4.count
          } : _0x3a95ea[_0x58d40b].count += _0x153da4.count;
        }
      }
    }
  }
  return _0x3a95ea;
}
function _0x47308d(_0x37e53a, _0x2ca953) {
  if (!_0x4c64fa[_0x37e53a]) {
    _0x4c64fa[_0x37e53a] = {
      "salesCount": 0,
      "totalEarnings": 0
    };
  }
  _0x4c64fa[_0x37e53a].salesCount += _0x2ca953;
  _0xdd4d1e();
}
function _0x417182(_0x2e70c1, _0x3bfa0f) {
  !_0x4c64fa[_0x2e70c1] && (_0x4c64fa[_0x2e70c1] = {
    "salesCount": 0,
    "totalEarnings": 0
  });
  _0x4c64fa[_0x2e70c1].totalEarnings += _0x3bfa0f;
  _0xdd4d1e();
}
function _0x31ebc5(_0x282f22, _0x43dfa8, _0x263d40) {
  const _0x44a6ec = mc.newItem(_0x43dfa8).maxStackSize;
  let _0xa627e9 = _0x263d40;
  while (_0xa627e9 > 0) {
    let _0x365949 = Math.min(_0xa627e9, _0x44a6ec);
    _0x43dfa8.setByte("Count", _0x365949);
    let _0x362898 = mc.newItem(_0x43dfa8),
      _0x5b2628 = _0x282f22.giveItem(_0x362898);
    if (!_0x5b2628) return _0x282f22.tell(_0x534e1f("purchase.confirm.inventory.full")), false;
    _0xa627e9 -= _0x365949;
  }
  return true;
}
function _0x35840c(_0x3e44df, _0x272b04, _0xb80b94) {
  const _0x1322d2 = _0x3e44df.getInventory(),
    _0x5e66fd = mc.newItem(_0x272b04).maxStackSize;
  let _0x48bfca = _0xb80b94;
  const _0xde631 = _0x1322d2.getAllItems();
  _0xde631.forEach(_0x273415 => {
    if (_0x273415.type === mc.newItem(_0x272b04).type) {
      let _0x1134df = _0x273415.count;
      if (_0x1134df < _0x5e66fd) {
        _0x48bfca -= _0x5e66fd - _0x1134df;
        if (_0x48bfca <= 0) return;
      }
    }
  });
  let _0x3abacf = _0x1322d2.size - _0xde631.filter(_0x5d0871 => _0x5d0871.type !== "").length;
  _0x48bfca -= _0x3abacf * _0x5e66fd;
  return _0x48bfca <= 0;
}
function _0x1e7ae7(_0x3f93bf) {
  const _0x2a2862 = _0x3e774d(),
    _0x35d90a = _0x2a2862.get(_0x3f93bf),
    _0x1949b9 = _0x287fbc.get("enableChatLobby"),
    _0x2d9be9 = _0x2cba7f.mentions[_0x3f93bf.xuid] || {
      "unread": false,
      "count": 0
    },
    _0x569718 = mc.newSimpleForm();
  _0x569718.setTitle(_0x534e1f("menu.title"));
  let _0x14eb59 = "" + _0x534e1f("menu.balance") + _0x35d90a + " " + _0x2a2862.name + "\n";
  _0x2d9be9.unread && (_0x14eb59 += _0x534e1f("menu.unread.messages", _0x2d9be9.count) + "\n");
  _0x14eb59 += _0x534e1f("menu.select.operation");
  _0x569718.setContent(_0x14eb59);
  _0x1949b9 && _0x569718.addButton(_0x534e1f("menu.button.lobby"), "textures/ui/mute_off.png");
  _0x569718.addButton(_0x534e1f("menu.button.search.market"), "textures/ui/magnifyingGlass");
  _0x569718.addButton(_0x534e1f("menu.button.shopping.center"), "textures/ui/csb_subscribe_banner");
  _0x569718.addButton(_0x534e1f("menu.button.my.shop"), "textures/ui/store_home_icon");
  _0x569718.addButton(_0x534e1f("menu.button.official.shop"), "textures/ui/title");
  _0x287fbc.get("enableShopRanking") && _0x569718.addButton(_0x534e1f("menu.button.shop.ranking"), "textures/ui/move");
  _0x569718.addButton(_0x534e1f("menu.button.trade.logs"), "textures/ui/message");
  _0x3f93bf.isOP() && _0x569718.addButton(_0x534e1f("menu.button.manage.market"), "textures/ui/op");
  _0x3f93bf.sendForm(_0x569718, (_0x564d51, _0x5517ac) => {
    if (_0x5517ac == null) return;
    let _0x564b72 = 0;
    if (_0x1949b9) {
      if (_0x5517ac === _0x564b72) {
        {
          _0x69aac7(_0x564d51);
          return;
        }
      }
      _0x564b72++;
    }
    if (_0x5517ac === _0x564b72) {
      {
        _0x5d02fc(_0x564d51);
        return;
      }
    }
    _0x564b72++;
    if (_0x5517ac === _0x564b72) {
      _0x59bc4e(_0x564d51, 1, "", _0x534e1f("category.all"), false);
      return;
    }
    _0x564b72++;
    if (_0x5517ac === _0x564b72) {
      {
        _0x43f48f(_0x564d51);
        return;
      }
    }
    _0x564b72++;
    if (_0x5517ac === _0x564b72) {
      _0x5c74cb(_0x564d51, 1, "", _0x534e1f("category.all"));
      return;
    }
    _0x564b72++;
    if (_0x287fbc.get("enableShopRanking")) {
      {
        if (_0x5517ac === _0x564b72) {
          _0x2ee2b8(_0x564d51);
          return;
        }
        _0x564b72++;
      }
    }
    if (_0x5517ac === _0x564b72) {
      {
        _0x4c6de1(_0x564d51);
        return;
      }
    }
    _0x564b72++;
    if (_0x3f93bf.isOP()) {
      {
        if (_0x5517ac === _0x564b72) {
          {
            _0x43e53b(_0x564d51);
            return;
          }
        }
        _0x564b72++;
      }
    }
    _0x564d51.tell(_0x534e1f("unknown.option"));
  });
}
function _0x4c6de1(_0x32522e) {
  if (!_0x527f76.global || _0x527f76.global.length === 0) {
    {
      _0x32522e.tell(_0x534e1f("trade.logs.global.empty"));
      return;
    }
  }
  let _0x2643fc = _0x527f76.global.slice().reverse(),
    _0x5aaa41 = _0x534e1f("trade.logs.global.content", _0x2643fc.length);
  _0x2643fc.forEach((_0x2cb1fc, _0x5a01ba) => {
    _0x5aaa41 += _0x534e1f("trade.logs.global.entry", _0x5a01ba + 1, _0x2cb1fc.time, _0x2cb1fc.buyerName, _0x2cb1fc.sellerName, _0x2cb1fc.shopName, _0x2cb1fc.itemName, _0x2cb1fc.quantity, _0x2cb1fc.priceEach, _0x2cb1fc.totalPrice);
  });
  const _0xd4cdc2 = mc.newCustomForm();
  _0xd4cdc2.setTitle(_0x534e1f("trade.logs.global.title"));
  _0xd4cdc2.addLabel(_0x5aaa41);
  _0x32522e.sendForm(_0xd4cdc2, (_0x44d65d, _0x500ea6) => {});
}
function _0x43f48f(_0x389142) {
  const _0xc45e27 = _0x389142.xuid;
  if (!_0x10932d[_0xc45e27]) _0x4a37fb(_0x389142);else {
    _0x39a224(_0x389142);
  }
}
function _0x4a37fb(_0x29b0ae) {
  const _0x54dafa = _0x3e774d(),
    _0x3b43b0 = _0x287fbc.get("shopCreationCost"),
    _0x17297f = mc.newCustomForm();
  _0x17297f.setTitle(_0x534e1f("shop.create.title"));
  _0x17297f.addInput(_0x534e1f("shop.create.name.input"), _0x534e1f("shop.name"));
  _0x17297f.addLabel(_0x534e1f("shop.create.cost", _0x3b43b0, _0x54dafa.name));
  _0x17297f.addLabel(_0x534e1f("shop.create.cost.note"));
  _0x29b0ae.sendForm(_0x17297f, (_0x50b9cc, _0x46e5ce) => {
    {
      if (!_0x46e5ce) return;
      const _0xa13713 = _0x46e5ce[0]?.["trim"]();
      if (!_0xa13713) {
        {
          _0x50b9cc.tell(_0x534e1f("shop.create.name.empty"));
          return;
        }
      }
      if (_0xa13713.length > 10) {
        {
          _0x50b9cc.tell(_0x534e1f("shop.create.name.too.long"));
          return;
        }
      }
      if (_0x54dafa.get(_0x50b9cc) < _0x3b43b0) {
        {
          _0x50b9cc.tell(_0x534e1f("shop.create.insufficient.funds"));
          return;
        }
      }
      if (!_0x54dafa.reduce(_0x50b9cc, _0x3b43b0)) {
        _0x50b9cc.tell(_0x534e1f("shop.create.payment.failed"));
        return;
      }
      _0x10932d[_0x50b9cc.xuid] = {
        "name": _0xa13713,
        "owner": _0x50b9cc.realName,
        "ownerXuid": _0x50b9cc.xuid,
        "createdAt": Date.now(),
        "lastNameChange": Date.now(),
        "items": {},
        "pendingEarnings": 0,
        "isOpen": true,
        "advertSlot": 0,
        "advertExpire": 0,
        "iconName": "",
        "lastIconChange": 0,
        "announcement": ""
      };
      !_0x4c64fa[_0x50b9cc.xuid] && (_0x4c64fa[_0x50b9cc.xuid] = {
        "salesCount": 0,
        "totalEarnings": 0
      }, _0xdd4d1e());
      _0x4791db();
      _0x50b9cc.tell(_0x534e1f("shop.create.success", _0xa13713));
    }
  });
}
function _0x39a224(_0x11e767) {
  const _0x244543 = _0x10932d[_0x11e767.xuid],
    _0x99ac09 = mc.newSimpleForm();
  _0x99ac09.setTitle(_0x534e1f("shop.manage.title"));
  _0x99ac09.setContent(_0x534e1f("shop.manage.select.operation"));
  _0x256b17(_0x99ac09);
  _0x99ac09.addButton(_0x534e1f("shop.edit.title"), "textures/ui/Scaffolding");
  _0x99ac09.addButton(_0x534e1f("shop.manage.settings"), "textures/ui/video_glyph");
  _0x99ac09.addButton(_0x534e1f("advert.title"), "textures/ui/MCoin");
  const _0x5f26b5 = _0x1d0700(_0x244543);
  _0x99ac09.addButton(_0x534e1f("shop.icon.title"), _0x5f26b5);
  _0x99ac09.addButton(_0x534e1f("trade.logs.title"), "textures/ui/backup_replace");
  _0x11e767.sendForm(_0x99ac09, (_0x4a3401, _0x55e6b4) => {
    if (_0x55e6b4 == null) return;
    if (_0x55e6b4 === 0) {
      _0x1e7ae7(_0x4a3401);
      return;
    }
    let _0x5a44bd = 1;
    if (_0x55e6b4 === _0x5a44bd++) _0x52df79(_0x4a3401);else {
      if (_0x55e6b4 === _0x5a44bd++) {
        _0x586589(_0x4a3401);
      } else {
        if (_0x55e6b4 === _0x5a44bd++) _0x399480(_0x4a3401);else {
          if (_0x55e6b4 === _0x5a44bd++) {
            _0x5693d1(_0x4a3401);
          } else _0x55e6b4 === _0x5a44bd && _0x1d0795(_0x4a3401);
        }
      }
    }
  });
}
function _0x1d0795(_0x3f4366) {
  const _0x962ef9 = mc.newSimpleForm();
  _0x962ef9.setTitle(_0x534e1f("trade.logs.title"));
  _0x962ef9.setContent(_0x534e1f("trade.logs.select"));
  _0x256b17(_0x962ef9);
  _0x962ef9.addButton(_0x534e1f("trade.logs.buy"), "textures/ui/MCoin");
  _0x962ef9.addButton(_0x534e1f("trade.logs.sell"), "textures/ui/hanging_sign");
  _0x3f4366.sendForm(_0x962ef9, (_0x775225, _0x1e80c0) => {
    if (_0x1e80c0 == null) return;
    if (_0x1e80c0 === 0) {
      _0x39a224(_0x775225);
      return;
    }
    let _0x22fe4c = 1;
    if (_0x1e80c0 === _0x22fe4c++) _0x408196(_0x775225);else _0x1e80c0 === _0x22fe4c && _0xfeeb7(_0x775225);
  });
}
function _0x408196(_0x4413d8) {
  const _0x56f66b = _0x4413d8.xuid;
  if (!_0x527f76.players || !_0x527f76.players[_0x56f66b]) {
    _0x4413d8.tell(_0x534e1f("trade.logs.no.records"));
    return;
  }
  const _0x512794 = _0x527f76.players[_0x56f66b].buy || [];
  if (_0x512794.length === 0) {
    {
      _0x4413d8.tell(_0x534e1f("trade.logs.buy.empty"));
      return;
    }
  }
  const _0x18be1c = _0x512794.slice().reverse();
  let _0x3b5700 = _0x534e1f("trade.logs.buy.content", _0x18be1c.length);
  _0x18be1c.forEach((_0x291469, _0x170b5e) => {
    _0x3b5700 += _0x534e1f("trade.logs.buy.entry", _0x170b5e + 1, _0x291469.time, _0x291469.sellerName, _0x291469.shopName, _0x291469.itemName, _0x291469.quantity, _0x291469.priceEach, _0x291469.totalPrice);
  });
  const _0x2c9d53 = mc.newCustomForm();
  _0x2c9d53.setTitle(_0x534e1f("trade.logs.buy.title"));
  _0x2c9d53.addLabel(_0x3b5700);
  _0x4413d8.sendForm(_0x2c9d53, (_0x528196, _0x54182c) => {});
}
function _0xfeeb7(_0x5e011c) {
  const _0x213fbe = _0x5e011c.xuid;
  if (!_0x527f76.players || !_0x527f76.players[_0x213fbe]) {
    _0x5e011c.tell(_0x534e1f("trade.logs.no.records"));
    return;
  }
  const _0x2d7bdb = _0x527f76.players[_0x213fbe].sell || [];
  if (_0x2d7bdb.length === 0) {
    {
      _0x5e011c.tell(_0x534e1f("trade.logs.sell.empty"));
      return;
    }
  }
  let _0x91d3d7 = _0x534e1f("trade.logs.sell.content");
  _0x2d7bdb.forEach((_0xc8bd17, _0x7d7840) => {
    _0x91d3d7 += _0x534e1f("trade.logs.sell.entry", _0x7d7840 + 1, _0xc8bd17.time, _0xc8bd17.buyerName, _0xc8bd17.shopName, _0xc8bd17.itemName, _0xc8bd17.quantity, _0xc8bd17.priceEach, _0xc8bd17.totalPrice);
  });
  const _0x6d99e5 = mc.newCustomForm();
  _0x6d99e5.setTitle(_0x534e1f("trade.logs.sell.title"));
  _0x6d99e5.addLabel(_0x91d3d7);
  _0x5e011c.sendForm(_0x6d99e5, (_0x2755a8, _0x3b39d3) => {});
}
function _0x5693d1(_0x375b8e) {
  const _0x5064d3 = _0x10932d[_0x375b8e.xuid];
  if (!_0x5064d3) {
    {
      _0x375b8e.tell(_0x534e1f("shop.no.shop"));
      return;
    }
  }
  let _0x5cc695 = _0x287fbc.get("enableLocalIcon"),
    _0x9c3544 = _0x287fbc.get("enableURLIcon"),
    _0x4203ec = _0x287fbc.get("enableCustomPathIcon"),
    _0xdaef7b = mc.newSimpleForm();
  _0xdaef7b.setTitle(_0x534e1f("shop.icon.title"));
  _0xdaef7b.setContent(_0x534e1f("shop.icon.select.type"));
  _0x256b17(_0xdaef7b);
  if (_0x5cc695) _0xdaef7b.addButton(_0x534e1f("shop.icon.local"), "textures/ui/color_picker");
  if (_0x9c3544) _0xdaef7b.addButton(_0x534e1f("shop.icon.url"), "textures/ui/share_microsoft");
  if (_0x4203ec) _0xdaef7b.addButton(_0x534e1f("shop.icon.custom"), "textures/ui/equipped_item_border");
  _0x375b8e.sendForm(_0xdaef7b, (_0x50a472, _0x2dcd54) => {
    {
      if (_0x2dcd54 == null) return;
      if (_0x2dcd54 === 0) {
        _0x39a224(_0x50a472);
        return;
      }
      let _0x4e6245 = 1,
        _0x5246de = _0x5cc695 ? _0x4e6245++ : -1,
        _0x43beb2 = _0x9c3544 ? _0x4e6245++ : -1,
        _0x3762e4 = _0x4203ec ? _0x4e6245++ : -1;
      if (_0x2dcd54 === _0x5246de) {
        _0xbf2ae(_0x50a472, _0x5064d3);
        return;
      }
      if (_0x2dcd54 === _0x43beb2) {
        {
          _0x4804c5(_0x50a472, _0x5064d3);
          return;
        }
      }
      if (_0x2dcd54 === _0x3762e4) {
        {
          _0x5f0290(_0x50a472, _0x5064d3);
          return;
        }
      }
    }
  });
}
function _0x5f0290(_0x55a392, _0x199ebd) {
  let _0x4efe03 = _0x287fbc.get("customPathIconChangeCost") || 200,
    _0x1be9d7 = _0x287fbc.get("customPathIconChangeCooldown") || 72,
    _0xa91db8 = Date.now(),
    _0x2a2363 = _0x1be9d7 * 3600000;
  if (_0xa91db8 - (_0x199ebd.lastIconChange || 0) < _0x2a2363) {
    {
      let _0x5c0e04 = ((_0x2a2363 - (_0xa91db8 - _0x199ebd.lastIconChange)) / 3600000).toFixed(1);
      _0x55a392.tell(_0x534e1f("shop.icon.cooldown", _0x5c0e04));
      return;
    }
  }
  const _0x423598 = mc.newCustomForm();
  _0x423598.setTitle(_0x534e1f("shop.icon.custom.title"));
  _0x423598.addInput(_0x534e1f("shop.icon.custom.input"), "");
  _0x55a392.sendForm(_0x423598, (_0x46e9a0, _0x3a8070) => {
    if (!_0x3a8070) return;
    const _0x22976c = _0x3a8070[0]?.["trim"]();
    if (!_0x22976c) {
      {
        _0x46e9a0.tell(_0x534e1f("shop.icon.path.empty"));
        return;
      }
    }
    let _0x1ac0c3 = _0x3e774d();
    if (_0x1ac0c3.get(_0x46e9a0) < _0x4efe03) {
      _0x46e9a0.tell(_0x534e1f("shop.icon.insufficient.funds", _0x4efe03, _0x1ac0c3.name));
      return;
    }
    let _0x3dd0d4 = _0x1ac0c3.reduce(_0x46e9a0, _0x4efe03);
    if (!_0x3dd0d4) {
      {
        _0x46e9a0.tell(_0x534e1f("error"));
        return;
      }
    }
    _0x199ebd.iconName = _0x22976c;
    _0x199ebd.lastIconChange = Date.now();
    _0x4791db();
    _0x46e9a0.tell(_0x534e1f("shop.icon.purchase.success", _0x22976c));
  });
}
function _0xbf2ae(_0x4507d1, _0x1ab7a8) {
  let _0x2bda69 = _0x287fbc.get("localIconChangeCost") || 200,
    _0x1d3d0d = _0x287fbc.get("localIconChangeCooldown") || 72,
    _0x5973f7 = Date.now(),
    _0x36474c = _0x1d3d0d * 3600000;
  if (_0x5973f7 - (_0x1ab7a8.lastIconChange || 0) < _0x36474c) {
    let _0x26e43e = ((_0x36474c - (_0x5973f7 - _0x1ab7a8.lastIconChange)) / 3600000).toFixed(1);
    _0x4507d1.tell(_0x534e1f("shop.icon.cooldown", _0x26e43e));
    return;
  }
  let _0x1c83ea = [];
  const _0x5c5745 = File.getFilesList(_0x307010);
  if (_0x5c5745 && _0x5c5745.length > 0) for (let _0x5e0f36 of _0x5c5745) {
    _0x5e0f36.toLowerCase().endsWith(".png") && _0x1c83ea.push(_0x5e0f36);
  }
  if (_0x1c83ea.length === 0) {
    {
      _0x4507d1.tell(_0x534e1f("shop.icon.no.local"));
      return;
    }
  }
  _0x504281(_0x4507d1, _0x1ab7a8, _0x1c83ea, 1, _0x2bda69, _0x36474c, "local");
}
function _0x4804c5(_0xfce73, _0x53a390) {
  let _0x368221 = _0x287fbc.get("URLIconChangeCost") || 200,
    _0x48c40c = _0x287fbc.get("URLIconChangeCooldown") || 72,
    _0x2e2149 = Date.now(),
    _0x26ef1a = _0x48c40c * 3600000;
  if (_0x2e2149 - (_0x53a390.lastIconChange || 0) < _0x26ef1a) {
    {
      let _0x2b8e26 = ((_0x26ef1a - (_0x2e2149 - _0x53a390.lastIconChange)) / 3600000).toFixed(1);
      _0xfce73.tell(_0x534e1f("shop.icon.cooldown", _0x2b8e26));
      return;
    }
  }
  let _0x534c61 = _0x287fbc.get("allowedDomain") || "";
  const _0x5a870e = mc.newCustomForm();
  _0x5a870e.setTitle(_0x534e1f("shop.icon.url.title"));
  if (_0x534c61.trim() !== "") _0x5a870e.addLabel(_0x534e1f("shop.icon.url.domain.required", _0x534c61));else {
    _0x5a870e.addLabel(_0x534e1f("shop.icon.url.no.domain"));
  }
  _0x5a870e.addInput(_0x534e1f("shop.icon.url.input"), "https://...");
  _0xfce73.sendForm(_0x5a870e, (_0x4c680b, _0x599ec9) => {
    if (!_0x599ec9) return;
    const _0x25b0a9 = _0x599ec9[1]?.["trim"]();
    if (!_0x25b0a9) {
      _0x4c680b.tell(_0x534e1f("shop.icon.url.empty"));
      return;
    }
    let _0x456565 = _0x287fbc.get("allowedDomain") || "";
    if (_0x456565 && _0x456565.trim() !== "") {
      {
        if (!_0x25b0a9.includes(_0x456565.trim())) {
          _0x4c680b.tell(_0x534e1f("shop.icon.url.invalid", _0x456565));
          return;
        }
      }
    }
    let _0x43e6ed = _0x3e774d();
    if (_0x43e6ed.get(_0x4c680b) < _0x368221) {
      _0x4c680b.tell(_0x534e1f("shop.icon.insufficient.funds", _0x368221, _0x43e6ed.name));
      return;
    }
    let _0x518ced = _0x43e6ed.reduce(_0x4c680b, _0x368221);
    if (!_0x518ced) {
      {
        _0x4c680b.tell(_0x534e1f("error"));
        return;
      }
    }
    _0x3c8812(_0x4c680b, _0x53a390, _0x25b0a9, _0x368221, _0x26ef1a, "URL");
  });
}
function _0x3c8812(_0x3bcc64, _0x3568a4, _0x4f4310, _0x1b72ce, _0x221945, _0x1e52f0) {
  const _0x475514 = _0x3e774d(),
    _0x15f01f = _0x221945 / 3600000,
    _0x396880 = mc.newSimpleForm();
  _0x396880.setTitle(_0x534e1f("shop.icon.confirm.title"));
  _0x396880.setContent(_0x534e1f("shop.icon.confirm.content", _0x1b72ce, _0x475514.name, _0x15f01f));
  _0x396880.addButton(_0x534e1f("button.cancel"), "textures/ui/cancel");
  _0x396880.addButton(_0x534e1f("shop.icon.preview.confirm"), _0x4f4310);
  _0x3bcc64.sendForm(_0x396880, (_0x7c2f22, _0x4a90b2) => {
    if (_0x4a90b2 == null) return;
    if (_0x4a90b2 === 0) {
      {
        _0x7c2f22.tell(_0x534e1f("shop.icon.cancel"));
        return;
      }
    }
    if (_0x4a90b2 === 1) {
      {
        if (_0x475514.get(_0x7c2f22) < _0x1b72ce) {
          _0x7c2f22.tell(_0x534e1f("shop.icon.insufficient.funds", _0x1b72ce, _0x475514.name));
          return;
        }
        let _0xcf394f = _0x475514.reduce(_0x7c2f22, _0x1b72ce);
        if (!_0xcf394f) {
          {
            _0x7c2f22.tell(_0x534e1f("error"));
            return;
          }
        }
        _0x3568a4.iconName = _0x4f4310;
        _0x3568a4.lastIconChange = Date.now();
        _0x4791db();
        _0x7c2f22.tell(_0x534e1f("shop.icon.purchase.success", _0x4f4310));
      }
    }
  });
}
function _0x504281(_0x3a375c, _0x757e68, _0x4e3bf0, _0x304eed, _0x36d10d, _0x56c91d, _0x215105) {
  let _0x1ff61f = _0x4e3bf0.length,
    _0x214086 = Math.ceil(_0x1ff61f / _0x5bedab);
  if (_0x304eed < 1) _0x304eed = 1;
  if (_0x304eed > _0x214086 && _0x214086 > 0) _0x304eed = _0x214086;
  let _0x4027c8 = (_0x304eed - 1) * _0x5bedab,
    _0x39b584 = _0x4027c8 + _0x5bedab,
    _0x3743eb = _0x4e3bf0.slice(_0x4027c8, _0x39b584);
  const _0x42d793 = mc.newSimpleForm();
  _0x42d793.setTitle(_0x534e1f("shop.icon.select.page", _0x304eed, _0x214086));
  _0x42d793.setContent(_0x534e1f("shop.icon.select.info", _0x36d10d, _0x56c91d / 3600000));
  if (_0x304eed > 1) _0x42d793.addButton(_0x534e1f("button.prev.page"), "textures/ui/arrow_dark_left_stretch");
  if (_0x304eed < _0x214086) _0x42d793.addButton(_0x534e1f("button.next.page"), "textures/ui/arrow_dark_right");
  _0x3743eb.forEach(_0x19547a => {
    let _0x1e3236 = _0x19547a.replace(/\.png$/i, "");
    _0x42d793.addButton(_0x1e3236, "textures/ui/" + _0x1e3236);
  });
  _0x3a375c.sendForm(_0x42d793, (_0x1ac999, _0x317f9a) => {
    {
      if (_0x317f9a == null) return;
      let _0x536d9e = 0,
        _0x2bda36 = _0x304eed > 1,
        _0x265e85 = _0x304eed < _0x214086;
      if (_0x2bda36 && _0x317f9a === _0x536d9e) {
        _0x504281(_0x1ac999, _0x757e68, _0x4e3bf0, _0x304eed - 1, _0x36d10d, _0x56c91d, _0x215105);
        return;
      }
      if (_0x2bda36) _0x536d9e++;
      if (_0x265e85 && _0x317f9a === _0x536d9e) {
        {
          _0x504281(_0x1ac999, _0x757e68, _0x4e3bf0, _0x304eed + 1, _0x36d10d, _0x56c91d, _0x215105);
          return;
        }
      }
      if (_0x265e85) _0x536d9e++;
      let _0x3bd260 = _0x317f9a - _0x536d9e;
      if (_0x3bd260 < 0 || _0x3bd260 >= _0x3743eb.length) {
        _0x1ac999.tell(_0x534e1f("error.invalid.selection"));
        return;
      }
      let _0xbff4f4 = _0x3743eb[_0x3bd260],
        _0x1d7fbe = _0xbff4f4.replace(/\.png$/i, "");
      _0x58192a(_0x1ac999, _0x757e68, _0x1d7fbe, _0x36d10d, _0x56c91d);
    }
  });
}
function _0x58192a(_0xd687b2, _0x7bb7da, _0x588ea3, _0x3af311, _0x55f35e) {
  const _0x1022d2 = _0x3e774d();
  if (_0x1022d2.get(_0xd687b2) < _0x3af311) {
    _0xd687b2.tell(_0x534e1f("shop.icon.insufficient.funds", _0x3af311, _0x1022d2.name));
    return;
  }
  const _0x1493e3 = mc.newSimpleForm();
  _0x1493e3.setTitle(_0x534e1f("shop.icon.confirm.title"));
  _0x1493e3.setContent(_0x534e1f("shop.icon.buy.confirm", _0x3af311, _0x1022d2.name, "textures/ui/" + _0x588ea3));
  _0x1493e3.addButton(_0x534e1f("shop.icon.preview.confirm"), "textures/ui/icon_import");
  _0xd687b2.sendForm(_0x1493e3, (_0x1927a9, _0x5b9735) => {
    if (_0x5b9735 == null) return;
    if (_0x1022d2.get(_0x1927a9) < _0x3af311) {
      _0x1927a9.tell(_0x534e1f("shop.icon.insufficient.funds", _0x3af311, _0x1022d2.name));
      return;
    }
    let _0x49b309 = _0x1022d2.reduce(_0x1927a9, _0x3af311);
    if (!_0x49b309) {
      {
        _0x1927a9.tell(_0x534e1f("error"));
        return;
      }
    }
    _0x7bb7da.iconName = "textures/ui/" + _0x588ea3;
    _0x7bb7da.lastIconChange = Date.now();
    _0x4791db();
    _0x1927a9.tell(_0x534e1f("shop.icon.purchase.success", "textures/ui/" + _0x588ea3));
  });
}
function _0x52df79(_0x3935d8) {
  const _0x465288 = mc.newSimpleForm();
  _0x465288.setTitle(_0x534e1f("shop.edit.title"));
  _0x465288.setContent(_0x534e1f("shop.edit.select.operation"));
  _0x256b17(_0x465288);
  _0x465288.addButton(_0x534e1f("shop.edit.add.item"), "textures/ui/backup_replace");
  _0x465288.addButton(_0x534e1f("shop.edit.edit.item"), "textures/ui/anvil_icon");
  _0x3935d8.sendForm(_0x465288, (_0x202b51, _0x2f9dee) => {
    {
      if (_0x2f9dee == null) return;
      if (_0x2f9dee === 0) {
        _0x39a224(_0x202b51);
        return;
      }
      let _0x41f653 = 1;
      if (_0x2f9dee === _0x41f653++) _0x55f91a(_0x202b51, false);else _0x2f9dee === _0x41f653 && _0x33304(_0x202b51);
    }
  });
}
function _0x55f91a(_0x398f6e, _0x19d986) {
  const _0x628041 = _0x3849f6(_0x398f6e, !_0x19d986),
    _0x447339 = Object.keys(_0x628041);
  if (_0x447339.length === 0) {
    {
      _0x398f6e.tell(_0x534e1f("shop.list.no.items"));
      return;
    }
  }
  const _0x181af2 = mc.newCustomForm();
  _0x181af2.setTitle(_0x19d986 ? _0x534e1f("shop.list.official.title") : _0x534e1f("shop.list.title"));
  const _0x1d83e4 = _0x447339.map((_0xb63faf, _0x3550d1) => {
    {
      const {
          item: _0x9ec77c,
          count: _0x3b5e87
        } = _0x628041[_0xb63faf],
        _0x5eb1b1 = _0x3421de(_0x9ec77c, false);
      return _0x3550d1 + 1 + ". " + _0x5eb1b1 + " x" + _0x3b5e87;
    }
  });
  _0x181af2.addDropdown(_0x534e1f("shop.list.select.item"), _0x1d83e4);
  _0x181af2.addInput(_0x534e1f("shop.list.input.price"), "number", "1");
  _0x19d986 ? _0x181af2.addInput(_0x534e1f("shop.list.input.stock"), "number", "0") : _0x181af2.addInput(_0x534e1f("shop.list.input.quantity"), "number", "1");
  _0x19d986 ? _0x181af2.addInput(_0x534e1f("shop.list.input.custom.name"), "", "") : _0x181af2.addLabel(_0x534e1f("shop.list.auto.name"));
  _0x181af2.addInput(_0x534e1f("shop.list.input.remark"), "remark", "");
  _0x398f6e.sendForm(_0x181af2, (_0x119c54, _0xdaa67f) => {
    if (!_0xdaa67f) return;
    const _0x300931 = _0xdaa67f[0],
      _0x53c24a = parseInt(_0xdaa67f[1]);
    let _0x2881b9 = parseInt(_0xdaa67f[2]),
      _0x2f0ca8 = "",
      _0x36071f = 3;
    _0x19d986 && (_0x2f0ca8 = (_0xdaa67f[3] || "").trim(), _0x36071f = 4);
    const _0x3ed813 = (_0xdaa67f[_0x36071f] || "").trim();
    if (isNaN(_0x53c24a) || _0x53c24a <= 0) {
      {
        _0x119c54.tell(_0x534e1f("shop.list.price.error"));
        return;
      }
    }
    if (_0x19d986) {
      {
        if (isNaN(_0x2881b9) || _0x2881b9 < 0) {
          _0x119c54.tell(_0x534e1f("shop.list.stock.error"));
          return;
        }
        if (_0x2881b9 === 0) _0x2881b9 = -1;
      }
    } else {
      if (isNaN(_0x2881b9) || _0x2881b9 <= 0) {
        _0x119c54.tell(_0x534e1f("shop.list.quantity.error"));
        return;
      }
    }
    if (_0x3ed813.length > 50) {
      _0x119c54.tell(_0x534e1f("shop.list.remark.too.long"));
      return;
    }
    const _0x461909 = _0x447339[_0x300931],
      {
        item: _0x58f520,
        count: _0x4d333a
      } = _0x628041[_0x461909],
      _0x41db54 = _0x58f520.getNbt().toSNBT();
    if (!_0x19d986) {
      {
        if (_0x2881b9 > _0x4d333a) {
          _0x119c54.tell(_0x534e1f("shop.list.insufficient.items", _0x4d333a));
          return;
        }
        let _0x533cf9 = _0x17d1e9(_0x119c54, _0x41db54, _0x2881b9);
        if (!_0x533cf9) {
          {
            _0x119c54.tell(_0x534e1f("shop.list.remove.failed"));
            return;
          }
        }
      }
    }
    const _0x5a3d7d = mc.newItem(NBT.parseSNBT(_0x41db54)),
      _0x1a452c = _0x5a3d7d.getCategoryName ? _0x5a3d7d.getCategoryName() : _0x534e1f("category.misc"),
      _0x35f477 = _0x19d986 ? _0x2f0ca8 || _0x3421de(_0x5a3d7d, true).replace(/§[a-z0-9]/gi, "") : _0x3421de(_0x5a3d7d, true).replace(/§[a-z0-9]/gi, "");
    if (_0x19d986) _0x185450.purchaseItems[_0x41db54] = {
      "itemData": _0x41db54,
      "name": _0x35f477,
      "price": _0x53c24a,
      "quantity": _0x2881b9,
      "remark": _0x3ed813,
      "category": _0x1a452c
    }, _0x274b0f(), _0x119c54.tell(_0x534e1f("shop.list.success.official", _0x35f477, _0x2881b9 === -1 ? _0x534e1f("infinite") : _0x2881b9, _0x53c24a)), _0x119c54.sendToast(_0x534e1f("shop.list.toast.official"), _0x534e1f("shop.list.toast.info", _0x35f477, _0x53c24a, _0x2881b9 === -1 ? _0x534e1f("infinite") : _0x2881b9)), _0x468f2d(_0x119c54);else {
      {
        const _0x58c43e = _0x10932d[_0x119c54.xuid];
        if (!_0x58c43e.items[_0x41db54]) _0x58c43e.items[_0x41db54] = {
          "itemData": _0x41db54,
          "name": _0x35f477,
          "price": _0x53c24a,
          "quantity": _0x2881b9,
          "remark": _0x3ed813,
          "category": _0x1a452c
        };else {
          {
            let _0x8701c3 = _0x58c43e.items[_0x41db54];
            _0x8701c3.quantity += _0x2881b9;
            _0x8701c3.price = _0x53c24a;
            _0x8701c3.remark = _0x3ed813;
            _0x8701c3.category = _0x1a452c;
            _0x8701c3.name = _0x35f477;
          }
        }
        _0x4791db();
        _0x119c54.tell(_0x534e1f("shop.list.success", _0x35f477, _0x1a452c, _0x2881b9, _0x53c24a));
        _0x119c54.sendToast(_0x534e1f("shop.list.toast.success"), _0x534e1f("shop.list.toast.info.player", _0x35f477, _0x2881b9, _0x53c24a));
        _0x52df79(_0x119c54);
      }
    }
  });
}
function _0x33304(_0x56be29) {
  const _0x4430dc = _0x10932d[_0x56be29.xuid],
    _0x3dcad3 = Object.keys(_0x4430dc.items);
  if (_0x3dcad3.length === 0) {
    _0x56be29.tell(_0x534e1f("shop.edit.no.items"));
    return;
  }
  const _0xd8bd6f = mc.newSimpleForm();
  _0xd8bd6f.setTitle(_0x534e1f("shop.edit.title"));
  _0xd8bd6f.setContent(_0x534e1f("shop.edit.select.item"));
  _0x256b17(_0xd8bd6f);
  const _0x427be5 = JSON.parse(_0x2f8a5d.read());
  _0x3dcad3.forEach((_0x230672, _0x54f949) => {
    {
      const _0x5942b6 = _0x4430dc.items[_0x230672],
        _0x42f6b5 = mc.newItem(NBT.parseSNBT(_0x5942b6.itemData)),
        _0x3aabd3 = _0x3421de(_0x42f6b5, false);
      let _0x53e570 = _0x264298;
      const _0x425a7b = _0x42f6b5.type;
      if (_0x427be5.hasOwnProperty(_0x425a7b) && _0x427be5[_0x425a7b] && _0x427be5[_0x425a7b] !== "null") {
        _0x53e570 = _0x427be5[_0x425a7b];
      }
      _0xd8bd6f.addButton("§c" + (_0x54f949 + 1) + ". §s" + _0x3aabd3 + "\n§s" + _0x534e1f("category") + ": " + (_0x5942b6.category || _0x534e1f("category.all")) + " | " + _0x534e1f("stock") + _0x5942b6.quantity + "（" + _0x534e1f("price") + "：" + _0x5942b6.price + "）", _0x53e570);
    }
  });
  _0x56be29.sendForm(_0xd8bd6f, (_0x28bf9b, _0x30e84b) => {
    {
      if (_0x30e84b == null) return;
      if (_0x30e84b === 0) {
        {
          _0x52df79(_0x28bf9b);
          return;
        }
      }
      const _0x9b180f = _0x3dcad3[_0x30e84b - 1],
        _0x2612ae = _0x4430dc.items[_0x9b180f];
      _0x529071(_0x28bf9b, _0x9b180f, _0x2612ae);
    }
  });
}
function _0x529071(_0x2e536f, _0x13eaee, _0x435425) {
  const _0x5cfc7d = _0x435425.itemData,
    _0x2c404b = _0x2bc63e(_0x2e536f, _0x5cfc7d),
    _0xffb5d0 = mc.newCustomForm();
  _0xffb5d0.setTitle(_0x534e1f("shop.item.edit.title"));
  _0xffb5d0.addLabel(_0x534e1f("shop.item.edit.name", _0x435425.name));
  _0xffb5d0.addLabel(_0x534e1f("shop.item.edit.stock", _0x435425.quantity === -1 ? _0x534e1f("infinite") : _0x435425.quantity));
  _0xffb5d0.addLabel(_0x534e1f("shop.item.edit.inventory", _0x2c404b));
  _0xffb5d0.addInput(_0x534e1f("shop.item.edit.restock"), "number", "0");
  _0xffb5d0.addInput(_0x534e1f("shop.item.edit.price"), "number", _0x435425.price.toString());
  _0xffb5d0.addInput(_0x534e1f("shop.item.edit.remark"), "remark", _0x435425.remark || "");
  _0xffb5d0.addDropdown(_0x534e1f("shop.item.edit.category"), _0x2514ad, _0x2514ad.indexOf(_0x435425.category || _0x534e1f("category.all")));
  _0xffb5d0.addSwitch(_0x534e1f("shop.item.edit.delist"), false);
  _0x2e536f.sendForm(_0xffb5d0, (_0x55dfa4, _0x5a9867) => {
    {
      if (!_0x5a9867) return;
      const _0x2c06af = _0x10932d[_0x55dfa4.xuid];
      if (!_0x2c06af) {
        _0x55dfa4.tell(_0x534e1f("shop.item.edit.error"));
        return;
      }
      const _0x37b3c9 = parseInt(_0x5a9867[3]) || 0,
        _0x4d7f1b = parseInt(_0x5a9867[4]),
        _0x2cb2ef = (_0x5a9867[5] || "").trim(),
        _0x72e4aa = _0x5a9867[6],
        _0x1318fb = _0x5a9867[7];
      if (isNaN(_0x4d7f1b) || _0x4d7f1b <= 0) {
        _0x55dfa4.tell(_0x534e1f("shop.list.price.error"));
        return;
      }
      if (_0x2cb2ef.length > 50) {
        _0x55dfa4.tell(_0x534e1f("shop.list.remark.too.long"));
        return;
      }
      const _0x573d2f = _0x10932d[_0x55dfa4.xuid];
      if (!_0x573d2f) {
        {
          _0x55dfa4.tell(_0x534e1f("shop.item.edit.error"));
          return;
        }
      }
      if (_0x1318fb) {
        {
          const _0x1ed7a3 = NBT.parseSNBT(_0x5cfc7d);
          _0x435425.quantity === -1 ? (delete _0x573d2f.items[_0x13eaee], _0x55dfa4.tell(_0x534e1f("shop.item.infinite.delist"))) : (_0x31ebc5(_0x55dfa4, _0x1ed7a3, _0x435425.quantity), delete _0x573d2f.items[_0x13eaee], _0x55dfa4.tell(_0x534e1f("shop.item.delist.success")));
        }
      } else {
        if (_0x37b3c9 > 0) {
          if (_0x37b3c9 > _0x2c404b) {
            _0x55dfa4.tell(_0x534e1f("shop.item.insufficient.stock", _0x2c404b));
            return;
          }
          const _0x3c3ce6 = _0x17d1e9(_0x55dfa4, _0x5cfc7d, _0x37b3c9);
          if (!_0x3c3ce6) {
            _0x55dfa4.tell(_0x534e1f("shop.list.remove.failed"));
            return;
          }
          if (_0x435425.quantity !== -1) {
            _0x435425.quantity += _0x37b3c9;
          }
          _0x55dfa4.tell(_0x534e1f("shop.item.restock.success", _0x37b3c9));
        }
        _0x435425.price = _0x4d7f1b;
        _0x435425.remark = _0x2cb2ef;
        _0x435425.category = _0x2514ad[_0x72e4aa] || _0x534e1f("category.all");
        _0x55dfa4.tell(_0x534e1f("shop.item.update.success"));
      }
      _0x4791db();
    }
  });
}
function _0x59bc4e(_0x3d26c3, _0x5a7617, _0x65121e, _0x2074b1, _0x1bf3ea) {
  _0x5c102e();
  _0x5bedab = _0x287fbc.get("pageSizeLimit") || 30;
  let _0x1dd247 = Object.values(_0x10932d).filter(_0x4895be => _0x4895be.isOpen);
  if (!_0x1bf3ea) {
    {
      if (_0x65121e && _0x65121e.trim() !== "") {
        const _0x28ac7f = _0x65121e.toLowerCase();
        _0x1dd247 = _0x1dd247.filter(_0x1b039f => _0x1b039f.name && _0x1b039f.name.toLowerCase().includes(_0x28ac7f) || _0x1b039f.owner && _0x1b039f.owner.toLowerCase().includes(_0x28ac7f));
      }
    }
  } else {
    if (_0x65121e && _0x65121e.trim() !== "") {
      {
        const _0x377734 = _0x65121e.toLowerCase();
        _0x1dd247 = _0x1dd247.filter(_0x138f21 => {
          {
            let _0x561e7a = Object.values(_0x138f21.items || {});
            for (let _0x136e47 of _0x561e7a) {
              if (_0x136e47.name && _0x136e47.name.toLowerCase().includes(_0x377734)) {
                return true;
              }
            }
            return false;
          }
        });
      }
    }
  }
  let _0x21a55d = [];
  for (let _0x33065d = 1; _0x33065d <= 10; _0x33065d++) {
    let _0x2a3143 = _0x3f75c1(_0x33065d);
    if (_0x2a3143 && _0x2a3143.isOpen) {
      {
        let _0x3a697c = _0x1dd247.find(_0x27ff28 => _0x27ff28.ownerXuid === _0x2a3143.ownerXuid);
        if (_0x3a697c) _0x21a55d.push(_0x3a697c);
      }
    }
  }
  let _0x65f594 = _0x21a55d.map(_0x55e053 => _0x55e053.ownerXuid),
    _0x29cff2 = _0x1dd247.filter(_0x51dd12 => !_0x65f594.includes(_0x51dd12.ownerXuid)),
    _0x4fb019 = _0x287fbc.get("shopSortMode") || _0x534e1f("config.sort.random"),
    _0x7635d8 = _0x394800(_0x29cff2, _0x4fb019, _0x4c64fa),
    _0x2d03ae = [..._0x21a55d, ..._0x7635d8];
  const _0xc6bdc5 = _0x2d03ae.length,
    _0x206d97 = Math.ceil(_0xc6bdc5 / _0x5bedab);
  if (_0x5a7617 < 1) _0x5a7617 = 1;
  if (_0x5a7617 > _0x206d97 && _0x206d97 > 0) _0x5a7617 = _0x206d97;
  const _0x5c04e1 = (_0x5a7617 - 1) * _0x5bedab,
    _0x495580 = _0x5c04e1 + _0x5bedab,
    _0xbd4dc8 = _0x2d03ae.slice(_0x5c04e1, _0x495580),
    _0x20983e = mc.newSimpleForm();
  _0x20983e.setTitle(_0x534e1f("shop.center.title", _0x5a7617, _0x206d97));
  _0x20983e.addButton(_0x534e1f("shop.center.back"), "textures/ui/icon_import");
  let _0x309e22 = "";
  !_0x1bf3ea ? _0x309e22 += _0x534e1f("shop.center.search.shop", _0x65121e || _0x534e1f("none")) + "\n" : _0x309e22 += _0x534e1f("shop.center.search.item", _0x65121e || _0x534e1f("none")) + "\n";
  _0x309e22 += _0x534e1f("shop.center.page.size", _0x5bedab) + "\n" + _0x534e1f("shop.center.hint");
  _0x20983e.setContent(_0x309e22);
  let _0x4fbbc8 = _0x5a7617 > 1,
    _0x595c6f = _0x5a7617 < _0x206d97;
  _0x4fbbc8 && _0x20983e.addButton(_0x534e1f("button.prev.page"), "textures/ui/icon_import");
  _0x595c6f && _0x20983e.addButton(_0x534e1f("button.next.page"), "textures/ui/share_microsoft");
  _0x20983e.addButton(_0x1bf3ea ? _0x534e1f("shop.center.button.back.search") : _0x534e1f("shop.center.button.item.search"), "textures/ui/magnifyingGlass");
  _0xbd4dc8.forEach(_0x2db3e9 => {
    let _0x507708 = Object.keys(_0x2db3e9.items || {}).length,
      _0x3ee1d6 = _0x2db3e9.ownerXuid,
      _0x32a324 = _0x4c64fa[_0x3ee1d6] ? _0x4c64fa[_0x3ee1d6].salesCount || 0 : 0,
      _0xf072f = _0x2db3e9.name + " §f| §b" + _0x2db3e9.owner,
      _0x18aba0 = _0x534e1f("shop.center.items.count", _0x507708, _0x32a324);
    _0x2db3e9.advertSlot >= 1 && _0x2db3e9.advertSlot <= 10 && (_0xf072f = _0x534e1f("shop.center.recommended") + (" " + _0xf072f));
    let _0xb17541 = _0x1d0700(_0x2db3e9);
    _0x20983e.addButton(_0xf072f + "\n" + _0x18aba0, _0xb17541);
  });
  _0x3d26c3.sendForm(_0x20983e, (_0x3aba18, _0x79bef) => {
    if (_0x79bef == null) return;
    let _0x2c52c0 = 0;
    if (_0x79bef === _0x2c52c0) {
      {
        _0x1e7ae7(_0x3aba18);
        return;
      }
    }
    _0x2c52c0++;
    if (_0x4fbbc8) {
      if (_0x79bef === _0x2c52c0) {
        {
          _0x59bc4e(_0x3aba18, _0x5a7617 - 1, _0x65121e, _0x2074b1, _0x1bf3ea);
          return;
        }
      }
      _0x2c52c0++;
    }
    if (_0x595c6f) {
      {
        if (_0x79bef === _0x2c52c0) {
          _0x59bc4e(_0x3aba18, _0x5a7617 + 1, _0x65121e, _0x2074b1, _0x1bf3ea);
          return;
        }
        _0x2c52c0++;
      }
    }
    if (_0x79bef === _0x2c52c0) {
      _0x1bf3ea ? _0x5d02fc(_0x3aba18, _0x5a7617, "", _0x534e1f("category.all"), false) : _0x5d02fc(_0x3aba18, _0x5a7617, "", _0x534e1f("category.all"), true);
      return;
    }
    _0x2c52c0++;
    const _0x201ec2 = _0x79bef - _0x2c52c0;
    if (_0x201ec2 < 0 || _0x201ec2 >= _0xbd4dc8.length) {
      {
        _0x3aba18.tell(_0x534e1f("error.invalid.selection"));
        return;
      }
    }
    const _0x268e63 = _0xbd4dc8[_0x201ec2];
    _0x3e8a28(_0x3aba18, _0x268e63, 1, "", _0x534e1f("category.all"));
  });
}
function _0x5c102e() {
  const _0x47367a = Date.now();
  let _0x211282 = false;
  for (let _0x5f22f9 in _0x10932d) {
    let _0x584193 = _0x10932d[_0x5f22f9];
    if (_0x584193.advertSlot && _0x584193.advertSlot >= 1 && _0x584193.advertSlot <= 10) {
      if (_0x584193.advertExpire && _0x47367a > _0x584193.advertExpire) {
        _0x584193.advertSlot = 0;
        _0x584193.advertExpire = 0;
        _0x211282 = true;
      }
    }
  }
  if (_0x211282) _0x4791db();
}
function _0x3f75c1(_0x335a72) {
  const _0x3466d2 = Date.now();
  for (let _0x558405 in _0x10932d) {
    {
      let _0x2d9210 = _0x10932d[_0x558405];
      if (_0x2d9210.advertSlot === _0x335a72) {
        {
          if (_0x2d9210.advertExpire && _0x3466d2 > _0x2d9210.advertExpire) {
            _0x2d9210.advertSlot = 0;
            _0x2d9210.advertExpire = 0;
            _0x4791db();
            continue;
          }
          return _0x2d9210;
        }
      }
    }
  }
  return null;
}
function _0x5d02fc(_0xa7b74) {
  const _0x369166 = mc.newCustomForm();
  _0x369166.setTitle(_0x534e1f("search.title"));
  _0x369166.addInput(_0x534e1f("search.input.keyword"), _0x534e1f("keyword"), "");
  _0x369166.addSwitch(_0x534e1f("search.show.in.stock"), true);
  _0xa7b74.sendForm(_0x369166, (_0x5958a4, _0x1869f6) => {
    {
      if (!_0x1869f6) return;
      const _0x25a488 = _0x1869f6[0]?.["trim"]() || "",
        _0x33bae9 = _0x1869f6[1];
      if (!_0x25a488) {
        _0x5958a4.tell(_0x534e1f("search.empty.keyword"));
        return;
      }
      _0x5bc42b(_0x5958a4, _0x25a488, _0x33bae9);
    }
  });
}
function _0x5bc42b(_0x1767fe, _0x2f4351, _0x13bcc5) {
  _0x5c102e();
  let _0x233059 = Object.values(_0x10932d).filter(_0x3bc157 => _0x3bc157.isOpen),
    _0xf9a151 = [];
  for (let _0x3fca3b of _0x233059) {
    for (let _0x9dc8f3 in _0x3fca3b.items) {
      {
        let _0x2047a = _0x3fca3b.items[_0x9dc8f3];
        if (!_0x2047a.name.toLowerCase().includes(_0x2f4351.toLowerCase()) && !(_0x2047a.remark && _0x2047a.remark.toLowerCase().includes(_0x2f4351.toLowerCase()))) continue;
        if (_0x13bcc5 && (_0x2047a.quantity === 0 || _0x2047a.quantity !== -1 && _0x2047a.quantity <= 0)) continue;
        _0xf9a151.push({
          "shopName": _0x3fca3b.name,
          "shopOwner": _0x3fca3b.owner,
          "shopXuid": _0x3fca3b.ownerXuid,
          "itemName": _0x2047a.name,
          "itemKey": _0x9dc8f3,
          "itemData": _0x2047a,
          "price": _0x2047a.price,
          "quantity": _0x2047a.quantity,
          "remark": _0x2047a.remark || "",
          "isOfficial": false
        });
      }
    }
  }
  for (let _0x2db6f6 in _0x185450.purchaseItems) {
    {
      let _0x406d54 = _0x185450.purchaseItems[_0x2db6f6];
      if (!_0x406d54.name.toLowerCase().includes(_0x2f4351.toLowerCase()) && !(_0x406d54.remark && _0x406d54.remark.toLowerCase().includes(_0x2f4351.toLowerCase()))) {
        continue;
      }
      if (_0x13bcc5 && (_0x406d54.quantity === 0 || _0x406d54.quantity !== -1 && _0x406d54.quantity <= 0)) {
        continue;
      }
      _0xf9a151.push({
        "shopName": _0x534e1f("official.shop.title"),
        "shopOwner": _0x534e1f("system"),
        "shopXuid": "OFFICIAL",
        "itemName": _0x406d54.name,
        "itemKey": _0x2db6f6,
        "itemData": _0x406d54,
        "price": _0x406d54.price,
        "quantity": _0x406d54.quantity,
        "remark": _0x406d54.remark || "",
        "isOfficial": true
      });
    }
  }
  _0xf9a151.sort((_0x56fb82, _0x243444) => _0x56fb82.price - _0x243444.price);
  _0x54f50d(_0x1767fe, _0xf9a151, _0x2f4351);
}
function _0x54f50d(_0x1353b6, _0x24ea13, _0x2a307d) {
  if (_0x24ea13.length === 0) {
    _0x1353b6.tell(_0x534e1f("search.result.not.found", _0x2a307d));
    return;
  }
  const _0x1e0fa9 = _0x287fbc.get("pageSizeLimit") || 30,
    _0x2e56a8 = Math.ceil(_0x24ea13.length / _0x1e0fa9);
  function _0x282cf4(_0x4bdfb0, _0x3bab4b) {
    if (_0x3bab4b < 1) _0x3bab4b = 1;
    if (_0x3bab4b > _0x2e56a8) _0x3bab4b = _0x2e56a8;
    const _0x11a2b8 = (_0x3bab4b - 1) * _0x1e0fa9,
      _0x44b499 = Math.min(_0x11a2b8 + _0x1e0fa9, _0x24ea13.length),
      _0x366c8c = _0x24ea13.slice(_0x11a2b8, _0x44b499),
      _0x2a63a5 = mc.newSimpleForm();
    _0x2a63a5.setTitle(_0x534e1f("search.result.title", _0x2a307d));
    let _0x4e3986 = _0x534e1f("search.result.count", _0x24ea13.length, _0x2a307d) + "\n";
    _0x4e3986 += _0x534e1f("search.result.sort") + "\n";
    _0x4e3986 += _0x534e1f("search.result.page", _0x3bab4b, _0x2e56a8) + "\n\n";
    _0x2a63a5.setContent(_0x4e3986);
    _0x256b17(_0x2a63a5);
    _0x3bab4b > 1 && _0x2a63a5.addButton(_0x534e1f("button.prev.page"), "textures/ui/arrow_left");
    _0x3bab4b < _0x2e56a8 && _0x2a63a5.addButton(_0x534e1f("button.next.page"), "textures/ui/arrow_right");
    for (let _0x145579 = 0; _0x145579 < _0x366c8c.length; _0x145579++) {
      const _0x42e99a = _0x366c8c[_0x145579],
        _0x6dd131 = _0x42e99a.quantity === -1 ? _0x534e1f("infinite") : _0x42e99a.quantity;
      let _0x41c7d9 = mc.newItem(NBT.parseSNBT(_0x42e99a.itemData.itemData)),
        _0x20fc00 = JSON.parse(_0x2f8a5d.read()),
        _0x5779b1 = _0x264298;
      _0x20fc00[_0x41c7d9.type] && _0x20fc00[_0x41c7d9.type] !== "null" && (_0x5779b1 = _0x20fc00[_0x41c7d9.type]);
      const _0x2871d0 = _0x42e99a.isOfficial ? _0x534e1f("search.result.official") : "§d" + _0x42e99a.shopName;
      _0x2a63a5.addButton(_0x534e1f("search.result.item.info", _0x42e99a.price, _0x6dd131, _0x42e99a.itemName, _0x2871d0), _0x5779b1);
    }
    _0x4bdfb0.sendForm(_0x2a63a5, (_0x76df95, _0x30db19) => {
      {
        if (_0x30db19 == null) return;
        if (_0x30db19 === 0) {
          _0x1e7ae7(_0x76df95);
          return;
        }
        let _0x57a02e = 1;
        if (_0x3bab4b > 1) {
          if (_0x30db19 === _0x57a02e) {
            _0x282cf4(_0x76df95, _0x3bab4b - 1);
            return;
          }
          _0x57a02e++;
        }
        if (_0x3bab4b < _0x2e56a8) {
          if (_0x30db19 === _0x57a02e) {
            {
              _0x282cf4(_0x76df95, _0x3bab4b + 1);
              return;
            }
          }
          _0x57a02e++;
        }
        const _0xfe921b = _0x30db19 - _0x57a02e;
        if (_0xfe921b >= 0 && _0xfe921b < _0x366c8c.length) {
          {
            const _0x41cba0 = _0x366c8c[_0xfe921b];
            if (_0x41cba0.isOfficial) _0x476e55(_0x76df95, null, _0x41cba0.itemKey, _0x41cba0.itemData, true);else {
              const _0xe7cbc6 = _0x10932d[_0x41cba0.shopXuid];
              _0x476e55(_0x76df95, _0xe7cbc6, _0x41cba0.itemKey, _0x41cba0.itemData, false);
            }
          }
        }
      }
    });
  }
  _0x282cf4(_0x1353b6, 1);
}
function _0x3e8a28(_0x3f41d6, _0x1e196f, _0x7b00bb, _0xd388e2, _0x3ddcae) {
  if (!_0x1e196f) {
    _0x3f41d6.tell(_0x534e1f("error"));
    return;
  }
  const _0x3e8094 = _0x287fbc.get("pageSizeLimit") || 30;
  let _0x9d8594 = Object.keys(_0x1e196f.items || {});
  if (_0x9d8594.length === 0) {
    _0x3f41d6.tell(_0x534e1f("shop.detail.no.items"));
    return;
  }
  if (_0xd388e2 && _0xd388e2.trim() !== "") {
    {
      const _0x3dc9ee = _0xd388e2.toLowerCase();
      _0x9d8594 = _0x9d8594.filter(_0xde94c => {
        {
          const _0x147b9c = _0x1e196f.items[_0xde94c];
          return _0x147b9c.name.toLowerCase().includes(_0x3dc9ee) || _0x147b9c.remark && _0x147b9c.remark.toLowerCase().includes(_0x3dc9ee);
        }
      });
    }
  }
  _0x3ddcae && _0x3ddcae !== _0x534e1f("category.all") && (_0x9d8594 = _0x9d8594.filter(_0x2cae70 => {
    {
      const _0x29063e = _0x1e196f.items[_0x2cae70];
      return _0x29063e.category === _0x3ddcae;
    }
  }));
  const _0x2c8a56 = _0x9d8594.length,
    _0x3a7d0a = Math.ceil(_0x2c8a56 / _0x3e8094);
  if (_0x7b00bb < 1) _0x7b00bb = 1;
  if (_0x7b00bb > _0x3a7d0a && _0x3a7d0a > 0) _0x7b00bb = _0x3a7d0a;
  let _0x2db8c3 = (_0x7b00bb - 1) * _0x3e8094,
    _0x25d14e = _0x2db8c3 + _0x3e8094,
    _0x57efd4 = _0x9d8594.slice(_0x2db8c3, _0x25d14e);
  const _0x1df2b0 = mc.newSimpleForm();
  _0x1df2b0.setTitle(_0x534e1f("shop.detail.title", _0x1e196f.name, _0x7b00bb, _0x3a7d0a));
  _0x1df2b0.addButton(_0x534e1f("shop.detail.back"), "textures/ui/icon_import");
  const _0x335e54 = _0x4c64fa[_0x1e196f.ownerXuid]?.["salesCount"] || 0,
    _0xebec72 = Object.keys(_0x1e196f.items || {}).length,
    _0x21131e = _0x1e196f.announcement || _0x534e1f("shop.detail.no.announcement");
  let _0x42f879 = _0x534e1f("shop.detail.owner", _0x1e196f.owner) + "\n" + _0x534e1f("shop.detail.sales", _0x335e54) + "\n" + _0x534e1f("shop.detail.item.count", _0xebec72) + "\n" + _0x534e1f("shop.detail.announcement", _0x21131e) + "\n\n" + _0x534e1f("shop.detail.page.info", _0x7b00bb, _0x3a7d0a);
  _0x1df2b0.setContent(_0x42f879);
  let _0x4bf9cc = _0x7b00bb > 1,
    _0x5d5456 = _0x7b00bb < _0x3a7d0a;
  if (_0x4bf9cc) {
    _0x1df2b0.addButton(_0x534e1f("button.prev.page"), "textures/ui/arrow_dark_left_stretch");
  }
  _0x5d5456 && _0x1df2b0.addButton(_0x534e1f("button.next.page"), "textures/ui/arrow_dark_right");
  _0x57efd4.forEach(_0x1be4cb => {
    {
      const _0xcd274d = _0x1e196f.items[_0x1be4cb],
        _0x4472e9 = mc.newItem(NBT.parseSNBT(_0xcd274d.itemData)),
        _0x51320e = _0x3421de(_0x4472e9, false);
      let _0x11ea94 = JSON.parse(_0x2f8a5d.read()),
        _0x434481 = _0x264298;
      _0x11ea94.hasOwnProperty(_0x4472e9.type) && _0x11ea94[_0x4472e9.type] && _0x11ea94[_0x4472e9.type] !== "null" && (_0x434481 = _0x11ea94[_0x4472e9.type]);
      const _0x4f81ea = _0xcd274d.quantity === -1 ? _0x534e1f("infinite") : _0xcd274d.quantity;
      _0x1df2b0.addButton(_0x534e1f("shop.detail.item.info", _0x51320e, _0xcd274d.price, _0x4f81ea, _0xcd274d.category || _0x534e1f("category.all")), _0x434481);
    }
  });
  _0x3f41d6.sendForm(_0x1df2b0, (_0x19ad4c, _0x4d4fe6) => {
    if (_0x4d4fe6 == null) return;
    if (_0x4d4fe6 === 0) {
      _0x59bc4e(_0x19ad4c, 1, "", _0x534e1f("category.all"), false);
      return;
    }
    let _0x116f69 = 1;
    if (_0x4bf9cc && _0x4d4fe6 === _0x116f69) {
      _0x3e8a28(_0x19ad4c, _0x1e196f, _0x7b00bb - 1, _0xd388e2, _0x3ddcae);
      return;
    }
    if (_0x4bf9cc) _0x116f69++;
    if (_0x5d5456 && _0x4d4fe6 === _0x116f69) {
      _0x3e8a28(_0x19ad4c, _0x1e196f, _0x7b00bb + 1, _0xd388e2, _0x3ddcae);
      return;
    }
    if (_0x5d5456) _0x116f69++;
    const _0x4368e8 = _0x4d4fe6 - _0x116f69;
    if (_0x4368e8 < 0 || _0x4368e8 >= _0x57efd4.length) {
      _0x19ad4c.tell(_0x534e1f("error.invalid.selection"));
      return;
    }
    const _0x3f9b99 = _0x57efd4[_0x4368e8],
      _0xb01963 = _0x1e196f.items[_0x3f9b99];
    _0x476e55(_0x19ad4c, _0x1e196f, _0x3f9b99, _0xb01963, false);
  });
}
function _0x476e55(_0x57cd0d, _0x502ad7, _0x3abc03, _0x257d3b, _0x229be3) {
  const _0x5f7d6d = _0x3e774d();
  if (_0x229be3) {
    {
      if (!_0x185450.purchaseItems[_0x3abc03]) {
        _0x57cd0d.tell(_0x534e1f("purchase.confirm.delisted"));
        return;
      }
    }
  } else {
    {
      const _0xec454b = _0x10932d[_0x502ad7.ownerXuid];
      if (!_0xec454b?.["items"]?.[_0x3abc03]) {
        _0x57cd0d.tell(_0x534e1f("purchase.confirm.delisted"));
        return;
      }
      _0x257d3b = _0xec454b.items[_0x3abc03];
    }
  }
  const _0x173e9f = mc.newItem(NBT.parseSNBT(_0x257d3b.itemData)),
    _0x4c9968 = _0x257d3b.name || _0x173e9f.getTranslateName("zh_CN"),
    _0x45c2ea = mc.newCustomForm();
  _0x45c2ea.setTitle(_0x534e1f("purchase.confirm.title"));
  _0x45c2ea.addLabel(_0x534e1f("purchase.confirm.item.name", _0x4c9968) + "\n" + _0x534e1f("purchase.confirm.stack.info", _0x173e9f.maxStackSize, _0x173e9f.isEnchanted ? _0x534e1f("purchase.confirm.enchant") : _0x534e1f("purchase.confirm.no.enchant")) + "\n" + _0x534e1f("purchase.confirm.custom.name", _0x418a88(_0x173e9f) || _0x534e1f("purchase.confirm.no.custom.name")));
  _0x45c2ea.addLabel(_0x534e1f("purchase.confirm.category.stock", _0x257d3b.category || _0x534e1f("category.all"), _0x257d3b.quantity === -1 ? _0x534e1f("infinite") : _0x257d3b.quantity));
  _0x45c2ea.addLabel(_0x534e1f("purchase.confirm.price", _0x257d3b.price));
  if (_0x257d3b.remark) _0x45c2ea.addLabel(_0x534e1f("purchase.confirm.remark", _0x257d3b.remark));
  _0x45c2ea.addInput(_0x534e1f("purchase.confirm.input.quantity"), "number", "1");
  _0x57cd0d.sendForm(_0x45c2ea, (_0x5da6e1, _0x2d74c4) => {
    {
      if (!_0x2d74c4) return;
      if (_0x229be3) {
        {
          if (!_0x185450.purchaseItems[_0x3abc03]) {
            _0x5da6e1.tell(_0x534e1f("purchase.confirm.delisted"));
            return;
          }
        }
      } else {
        {
          const _0x554e15 = _0x10932d[_0x502ad7.ownerXuid];
          if (!_0x554e15?.["items"]?.[_0x3abc03]) {
            _0x5da6e1.tell(_0x534e1f("purchase.confirm.delisted"));
            return;
          }
        }
      }
      const _0xad0622 = _0x257d3b.remark ? 4 : 3,
        _0x56bf00 = parseInt(_0x2d74c4[_0xad0622]);
      if (isNaN(_0x56bf00) || _0x56bf00 <= 0) {
        _0x5da6e1.tell(_0x534e1f("purchase.confirm.quantity.error"));
        return;
      }
      if (_0x257d3b.quantity !== -1 && _0x56bf00 > _0x257d3b.quantity) {
        _0x5da6e1.tell(_0x534e1f("purchase.confirm.insufficient.stock"));
        return;
      }
      if (!_0x229be3 && _0x5da6e1.xuid === _0x502ad7.ownerXuid) {
        const _0x76a66 = NBT.parseSNBT(_0x257d3b.itemData);
        if (!_0x35840c(_0x5da6e1, _0x76a66, _0x56bf00)) {
          _0x5da6e1.tell(_0x534e1f("purchase.confirm.inventory.full"));
          return;
        }
        let _0x3f2d0f = _0x31ebc5(_0x5da6e1, _0x76a66, _0x56bf00);
        if (!_0x3f2d0f) return;
        if (_0x257d3b.quantity !== -1) {
          _0x257d3b.quantity -= _0x56bf00;
          _0x257d3b.quantity <= 0 && delete _0x502ad7.items[_0x3abc03];
        }
        _0x4791db();
        _0x5da6e1.tell(_0x534e1f("purchase.confirm.self.get", _0x257d3b.name, _0x56bf00));
        return;
      }
      const _0x91d252 = _0x257d3b.price * _0x56bf00;
      if (_0x5f7d6d.get(_0x5da6e1) < _0x91d252) {
        _0x5da6e1.tell(_0x534e1f("purchase.confirm.insufficient.funds", _0x91d252, _0x5f7d6d.name, _0x5f7d6d.get(_0x5da6e1)));
        return;
      }
      const _0x6891b6 = NBT.parseSNBT(_0x257d3b.itemData);
      if (!_0x35840c(_0x5da6e1, _0x6891b6, _0x56bf00)) {
        {
          _0x5da6e1.tell(_0x534e1f("purchase.confirm.inventory.full"));
          return;
        }
      }
      let _0x3ffc97 = _0x31ebc5(_0x5da6e1, _0x6891b6, _0x56bf00);
      if (!_0x3ffc97) return;
      _0x5f7d6d.reduce(_0x5da6e1, _0x91d252);
      if (_0x229be3) _0x257d3b.quantity !== -1 && (_0x257d3b.quantity -= _0x56bf00, _0x257d3b.quantity <= 0 && delete _0x185450.purchaseItems[_0x3abc03], _0x274b0f());else {
        {
          const _0xc56da5 = _0x502ad7.ownerXuid,
            _0x48b059 = mc.getPlayer(_0xc56da5);
          if (_0x48b059) _0x5f7d6d.add(_0x48b059, _0x91d252), _0x48b059.tell(_0x534e1f("purchase.confirm.sold", _0x257d3b.name, _0x56bf00, _0x91d252, _0x5f7d6d.name));else {
            _0x502ad7.pendingEarnings = (_0x502ad7.pendingEarnings || 0) + _0x91d252;
          }
          _0x47308d(_0xc56da5, _0x56bf00);
          _0x417182(_0xc56da5, _0x91d252);
          _0x257d3b.quantity !== -1 && (_0x257d3b.quantity -= _0x56bf00, _0x257d3b.quantity <= 0 && delete _0x502ad7.items[_0x3abc03]);
          _0x4791db();
        }
      }
      _0x300420(_0x5da6e1, _0x502ad7, _0x257d3b, _0x56bf00, _0x229be3);
      _0x5da6e1.tell(_0x534e1f("purchase.confirm.success", _0x257d3b.name, _0x56bf00));
      _0x5da6e1.tell(_0x534e1f("purchase.confirm.cost", _0x91d252, _0x5f7d6d.name, _0x5f7d6d.get(_0x5da6e1)));
    }
  });
}
function _0x300420(_0x71f8bf, _0xe3a884, _0x2e1c66, _0x5ad756, _0x5721d6) {
  const _0x5d72b7 = _0x71f8bf.realName,
    _0x976d95 = _0x71f8bf.xuid;
  let _0xf5cc19 = _0x534e1f("official.shop.title"),
    _0x35b440 = "OFFICIAL",
    _0x3aa51b = _0x534e1f("official.shop.title");
  !_0x5721d6 && _0xe3a884 && (_0xf5cc19 = _0xe3a884.owner, _0x35b440 = _0xe3a884.ownerXuid, _0x3aa51b = _0xe3a884.name);
  const _0x5dcff1 = _0x2e1c66.name,
    _0x541003 = _0x2e1c66.price,
    _0x13d8c4 = _0x541003 * _0x5ad756,
    _0x34ef02 = new Date().toLocaleString(),
    _0x5e79cc = {
      "buyerName": _0x5d72b7,
      "buyerXuid": _0x976d95,
      "sellerName": _0xf5cc19,
      "sellerXuid": _0x35b440,
      "shopName": _0x3aa51b,
      "itemName": _0x5dcff1,
      "quantity": _0x5ad756,
      "priceEach": _0x541003,
      "totalPrice": _0x13d8c4,
      "time": _0x34ef02
    };
  if (!_0x527f76.global) _0x527f76.global = [];
  _0x527f76.global.push(_0x5e79cc);
  _0x527f76.global.length > 30 && _0x527f76.global.shift();
  if (!_0x527f76.players) _0x527f76.players = {};
  !_0x527f76.players[_0x976d95] && (_0x527f76.players[_0x976d95] = {
    "buy": [],
    "sell": []
  });
  _0x527f76.players[_0x976d95].buy.push(_0x5e79cc);
  _0x527f76.players[_0x976d95].buy.length > 30 && _0x527f76.players[_0x976d95].buy.shift();
  if (!_0x5721d6 && _0x35b440 !== _0x976d95 && _0x35b440 !== "OFFICIAL") {
    if (!_0x527f76.players[_0x35b440]) {
      _0x527f76.players[_0x35b440] = {
        "buy": [],
        "sell": []
      };
    }
    _0x527f76.players[_0x35b440].sell.push(_0x5e79cc);
    _0x527f76.players[_0x35b440].sell.length > 30 && _0x527f76.players[_0x35b440].sell.shift();
  }
  _0x253280();
}
function _0x2ee2b8(_0x16aea2) {
  let _0x1f336f = [];
  for (let _0x752a96 in _0x4c64fa) {
    let _0x2ecb79 = _0x4c64fa[_0x752a96],
      _0x226862 = _0x2ecb79.salesCount || 0,
      _0x54c80e = _0x2ecb79.totalEarnings || 0,
      _0x56fadb = _0x10932d[_0x752a96],
      _0x4fd0a3 = _0x56fadb ? _0x56fadb.name : _0x534e1f("player") + "(" + _0x752a96.slice(0, 5) + ")",
      _0x5c8acc = _0x56fadb ? _0x56fadb.owner : _0x752a96,
      _0x51cd23 = _0x56fadb ? _0x56fadb.createdAt : 0;
    _0x1f336f.push({
      "xuid": _0x752a96,
      "shopName": _0x4fd0a3,
      "ownerName": _0x5c8acc,
      "salesCount": _0x226862,
      "totalEarnings": _0x54c80e,
      "createdAt": _0x51cd23
    });
  }
  _0x1f336f.sort((_0x125c40, _0x27fb1e) => _0x27fb1e.totalEarnings - _0x125c40.totalEarnings);
  let _0x4aa41a = _0x1f336f.slice(0, 20);
  const _0x40a743 = mc.newCustomForm();
  _0x40a743.setTitle(_0x534e1f("ranking.title"));
  let _0x477b5c = _0x534e1f("ranking.info", Object.keys(_0x10932d).length) + "\n\n";
  _0x4aa41a.length === 0 ? _0x477b5c += _0x534e1f("ranking.no.data") : _0x4aa41a.forEach((_0x2c7353, _0x553049) => {
    let _0x1be2a4 = _0x553049 + 1,
      _0x5a33f6 = _0x2c7353.createdAt ? new Date(_0x2c7353.createdAt).toLocaleString() : _0x534e1f("ranking.unknown.time");
    _0x477b5c += _0x534e1f("ranking.entry", _0x1be2a4, _0x2c7353.shopName, _0x2c7353.ownerName, _0x2c7353.totalEarnings || 0, _0x2c7353.salesCount || 0, _0x5a33f6);
  });
  _0x40a743.addLabel(_0x477b5c);
  _0x16aea2.sendForm(_0x40a743, (_0x4b69c1, _0x419820) => {});
}
function _0x399480(_0x6ad02e) {
  const _0xe22742 = _0x10932d[_0x6ad02e.xuid];
  if (!_0xe22742) {
    _0x6ad02e.tell(_0x534e1f("advert.no.shop"));
    return;
  }
  _0x5c102e();
  if (_0xe22742.advertSlot && _0xe22742.advertSlot >= 1 && _0xe22742.advertSlot <= 10) {
    {
      const _0x1a52e4 = Date.now();
      if (_0xe22742.advertExpire && _0x1a52e4 < _0xe22742.advertExpire) {
        {
          let _0x33ac9b = _0xe22742.advertExpire - _0x1a52e4,
            _0x5f372f = (_0x33ac9b / 3600000).toFixed(1);
          _0x6ad02e.tell(_0x534e1f("advert.already.owned", _0xe22742.advertSlot, _0x5f372f));
          return;
        }
      } else _0xe22742.advertSlot = 0, _0xe22742.advertExpire = 0, _0x4791db();
    }
  }
  const _0x237ccb = mc.newSimpleForm();
  _0x237ccb.setTitle(_0x534e1f("advert.title"));
  _0x237ccb.setContent(_0x534e1f("advert.select"));
  _0x256b17(_0x237ccb);
  for (let _0x2af934 = 1; _0x2af934 <= 10; _0x2af934++) {
    let _0x3158ab = _0x3f75c1(_0x2af934);
    if (_0x3158ab) _0x237ccb.addButton(_0x534e1f("advert.slot.occupied", _0x2af934, _0x3158ab.name), "textures/ui/crossout");else {
      {
        const _0x51d64e = _0x287fbc.get("advertSlotsSetting." + _0x2af934);
        if (!_0x51d64e || _0x51d64e.price <= 0 || _0x51d64e.duration <= 0) _0x237ccb.addButton(_0x534e1f("advert.slot.not.configured", _0x2af934), "textures/ui/crossout");else {
          _0x237ccb.addButton(_0x534e1f("advert.slot.available", _0x2af934, _0x51d64e.price, _0x51d64e.duration), "textures/ui/MCoin");
        }
      }
    }
  }
  _0x6ad02e.sendForm(_0x237ccb, (_0x518ce6, _0x44240a) => {
    if (_0x44240a == null) return;
    if (_0x44240a === 0) {
      _0x39a224(_0x518ce6);
      return;
    }
    const _0x5b13d6 = _0x44240a;
    if (_0x5b13d6 < 1 || _0x5b13d6 > 10) {
      _0x518ce6.tell(_0x534e1f("advert.invalid.selection"));
      return;
    }
    let _0x469f77 = _0x3f75c1(_0x5b13d6);
    if (_0x469f77) {
      {
        _0x518ce6.tell(_0x534e1f("advert.occupied", _0x5b13d6, _0x469f77.name));
        return;
      }
    }
    let _0x55e582 = _0x287fbc.get("advertSlotsSetting." + _0x5b13d6);
    if (!_0x55e582 || _0x55e582.price <= 0 || _0x55e582.duration <= 0) {
      {
        _0x518ce6.tell(_0x534e1f("advert.not.configured"));
        return;
      }
    }
    _0x7120ae(_0x518ce6, _0xe22742, _0x5b13d6, _0x55e582);
  });
}
function _0x7120ae(_0x50e3e1, _0x5e8fb0, _0xe7ea15, _0x606ffd) {
  const _0x3c5fd2 = _0x606ffd.price,
    _0x5a3a95 = _0x606ffd.duration,
    _0x40c735 = _0x3e774d(),
    _0x598be2 = mc.newCustomForm();
  _0x598be2.setTitle(_0x534e1f("advert.confirm.title", _0xe7ea15));
  _0x598be2.addLabel(_0x534e1f("advert.confirm.content", _0x3c5fd2, _0x40c735.name, _0x5a3a95));
  _0x50e3e1.sendForm(_0x598be2, (_0x31c4e0, _0x292c23) => {
    {
      if (!_0x292c23) return;
      _0x5dee12(_0x31c4e0, _0x5e8fb0, _0xe7ea15, _0x606ffd);
    }
  });
}
function _0x5dee12(_0x5c2690, _0x4d1a7a, _0x4f7c35, _0x4e3536) {
  let _0x315e81 = _0x3f75c1(_0x4f7c35);
  if (_0x315e81) {
    _0x5c2690.tell(_0x534e1f("advert.occupied", _0x4f7c35, _0x315e81.name));
    return;
  }
  if (_0x4d1a7a.advertSlot && _0x4d1a7a.advertSlot >= 1 && _0x4d1a7a.advertSlot <= 10) {
    {
      const _0x417cd5 = Date.now();
      if (_0x4d1a7a.advertExpire && _0x417cd5 < _0x4d1a7a.advertExpire) {
        {
          let _0x41234e = _0x4d1a7a.advertExpire - _0x417cd5,
            _0x409b33 = (_0x41234e / 3600000).toFixed(1);
          _0x5c2690.tell(_0x534e1f("advert.unexpired", _0x409b33));
          return;
        }
      } else _0x4d1a7a.advertSlot = 0, _0x4d1a7a.advertExpire = 0;
    }
  }
  const _0x201309 = _0x3e774d(),
    _0xa798bb = _0x4e3536.price,
    _0xc77bb0 = _0x4e3536.duration;
  if (_0x201309.get(_0x5c2690) < _0xa798bb) {
    {
      _0x5c2690.tell(_0x534e1f("advert.insufficient.funds", _0xa798bb, _0x201309.name, _0x4f7c35));
      return;
    }
  }
  if (!_0x201309.reduce(_0x5c2690, _0xa798bb)) {
    _0x5c2690.tell(_0x534e1f("advert.payment.failed"));
    return;
  }
  const _0x2d9514 = Date.now(),
    _0x5bca5f = _0xc77bb0 * 3600 * 1000;
  _0x4d1a7a.advertSlot = _0x4f7c35;
  _0x4d1a7a.advertExpire = _0x2d9514 + _0x5bca5f;
  _0x4791db();
  _0x5c2690.tell(_0x534e1f("advert.purchase.success", _0x4f7c35, _0xc77bb0));
}
function _0x43e53b(_0x2bcf8a) {
  const _0x5955c9 = mc.newSimpleForm();
  _0x5955c9.setTitle(_0x534e1f("admin.menu.title"));
  _0x5955c9.setContent(_0x534e1f("admin.menu.select.operation"));
  _0x256b17(_0x5955c9);
  _0x5955c9.addButton(_0x534e1f("admin.menu.config.market"), "textures/ui/op");
  _0x5955c9.addButton(_0x534e1f("admin.menu.forbidden.items"), "textures/ui/anvil_icon");
  _0x5955c9.addButton(_0x534e1f("admin.menu.advert.slots"), "textures/ui/MCoin");
  _0x5955c9.addButton(_0x534e1f("admin.menu.icon.config"), "textures/ui/color_picker");
  _0x5955c9.addButton(_0x534e1f("admin.menu.manage.shops"), "textures/ui/video_glyph_2x");
  _0x2bcf8a.sendForm(_0x5955c9, (_0x1b6775, _0x1aed1e) => {
    if (_0x1aed1e == null) return;
    if (_0x1aed1e === 0) {
      _0x1e7ae7(_0x1b6775);
      return;
    }
    let _0x2d500e = 1;
    if (_0x1aed1e === _0x2d500e++) _0x41bcc2(_0x1b6775);else {
      if (_0x1aed1e === _0x2d500e++) _0x517cf9(_0x1b6775);else {
        if (_0x1aed1e === _0x2d500e++) _0x29650d(_0x1b6775);else {
          if (_0x1aed1e === _0x2d500e++) _0x5c2ab7(_0x1b6775);else _0x1aed1e === _0x2d500e && _0x1696fc(_0x1b6775, 1, "");
        }
      }
    }
  });
}
function _0x41bcc2(_0x836a50) {
  const _0x5d2eb6 = _0x287fbc.get("economySystem"),
    _0xc88f2d = _0x287fbc.get("scoreboardObjective"),
    _0x4af26e = _0x287fbc.get("shopCreationCost"),
    _0x173cf4 = _0x287fbc.get("shopNameChangeCost"),
    _0x141cc9 = _0x287fbc.get("shopNameChangeCooldown"),
    _0x3c4173 = _0x287fbc.get("enableShopRanking"),
    _0x2ed97d = _0x287fbc.get("showOfficialPurchase"),
    _0xa25a67 = _0x287fbc.get("enableChatLobby"),
    _0x5acd19 = _0x287fbc.get("chatMessageLimit"),
    _0x5041d7 = _0x287fbc.get("pageSizeLimit"),
    _0x3575f3 = _0x287fbc.get("shopSortMode"),
    _0x646ba9 = _0x287fbc.get("officialShopSortMode"),
    _0x4ec4d2 = _0x287fbc.get("language") || "zh_CN",
    _0x157bd1 = mc.newCustomForm();
  _0x157bd1.setTitle(_0x534e1f("config.market.title"));
  _0x157bd1.addDropdown(_0x534e1f("config.economy.system"), [_0x534e1f("config.economy.llmoney"), _0x534e1f("config.economy.scoreboard")], _0x5d2eb6 === "llmoney" ? 0 : 1);
  _0x157bd1.addInput(_0x534e1f("config.scoreboard.name"), "money", _0xc88f2d);
  _0x157bd1.addInput(_0x534e1f("config.shop.creation.cost"), "number", _0x4af26e.toString());
  _0x157bd1.addInput(_0x534e1f("config.shop.name.change.cost"), "number", _0x173cf4.toString());
  _0x157bd1.addInput(_0x534e1f("config.shop.name.change.cooldown"), "number", _0x141cc9.toString());
  _0x157bd1.addSwitch(_0x534e1f("config.shop.ranking.enable"), _0x3c4173);
  _0x157bd1.addSwitch(_0x534e1f("config.official.shop.show.purchase"), _0x2ed97d);
  _0x157bd1.addSwitch(_0x534e1f("config.chat.lobby.enable"), _0xa25a67);
  _0x157bd1.addInput(_0x534e1f("config.chat.message.limit"), "number", _0x5acd19.toString());
  _0x157bd1.addInput(_0x534e1f("config.page.size.limit"), "number", _0x5041d7.toString());
  const _0x941c91 = [_0x534e1f("config.sort.random"), _0x534e1f("config.sort.sales"), _0x534e1f("config.sort.items"), _0x534e1f("config.sort.both"), _0x534e1f("config.sort.name")];
  let _0x466447 = _0x941c91.indexOf(_0x3575f3);
  if (_0x466447 < 0) _0x466447 = 0;
  _0x157bd1.addDropdown(_0x534e1f("config.shop.sort.mode"), _0x941c91, _0x466447);
  const _0x16d9b9 = [_0x534e1f("config.sort.random"), _0x534e1f("config.sort.name")];
  let _0xe9e56f = _0x16d9b9.indexOf(_0x646ba9);
  if (_0xe9e56f < 0) _0xe9e56f = 0;
  _0x157bd1.addDropdown(_0x534e1f("config.official.shop.sort"), _0x16d9b9, _0xe9e56f);
  const _0x4eb8eb = _0x398c4b();
  let _0x148c07 = _0x4eb8eb.indexOf(_0x4ec4d2);
  if (_0x148c07 < 0) _0x148c07 = 0;
  _0x157bd1.addDropdown(_0x534e1f("config.language"), _0x4eb8eb, _0x148c07);
  _0x836a50.sendForm(_0x157bd1, (_0x3bb5c3, _0x2a3c91) => {
    {
      if (!_0x2a3c91) return;
      const _0x2dbe62 = _0x2a3c91[0] === 0 ? "llmoney" : "scoreboard",
        _0x154a43 = _0x2a3c91[1]?.["trim"](),
        _0x3580ad = parseInt(_0x2a3c91[2]),
        _0x2c2c78 = parseInt(_0x2a3c91[3]),
        _0x3e6e09 = parseInt(_0x2a3c91[4]),
        _0x88a0ff = _0x2a3c91[5],
        _0x4a96a6 = _0x2a3c91[6],
        _0x97f234 = _0x2a3c91[7],
        _0x377b5f = parseInt(_0x2a3c91[8]),
        _0x233904 = parseInt(_0x2a3c91[9]),
        _0xc96248 = _0x2a3c91[10],
        _0x540bb8 = _0x2a3c91[11],
        _0x23b4a6 = _0x2a3c91[12];
      if (isNaN(_0x377b5f) || _0x377b5f < 1) {
        {
          _0x3bb5c3.tell(_0x534e1f("config.chat.limit.error"));
          return;
        }
      }
      if (_0x2dbe62 === "scoreboard" && !_0x154a43) {
        _0x3bb5c3.tell(_0x534e1f("config.scoreboard.name.empty"));
        return;
      }
      if (isNaN(_0x3580ad) || _0x3580ad < 0) {
        _0x3bb5c3.tell(_0x534e1f("config.creation.cost.error"));
        return;
      }
      if (isNaN(_0x2c2c78) || _0x2c2c78 < 0) {
        _0x3bb5c3.tell(_0x534e1f("config.name.change.cost.error"));
        return;
      }
      if (isNaN(_0x3e6e09) || _0x3e6e09 < 0) {
        {
          _0x3bb5c3.tell(_0x534e1f("config.name.change.cooldown.error"));
          return;
        }
      }
      if (isNaN(_0x233904) || _0x233904 <= 0) {
        _0x3bb5c3.tell(_0x534e1f("config.page.size.error"));
        return;
      }
      _0x287fbc.set("economySystem", _0x2dbe62);
      _0x287fbc.set("scoreboardObjective", _0x154a43);
      _0x287fbc.set("shopCreationCost", _0x3580ad);
      _0x287fbc.set("shopNameChangeCost", _0x2c2c78);
      _0x287fbc.set("shopNameChangeCooldown", _0x3e6e09);
      _0x287fbc.set("enableShopRanking", _0x88a0ff);
      _0x287fbc.set("showOfficialPurchase", _0x4a96a6);
      _0x287fbc.set("pageSizeLimit", _0x233904);
      const _0x4c16cb = [_0x534e1f("config.sort.random"), _0x534e1f("config.sort.sales"), _0x534e1f("config.sort.items"), _0x534e1f("config.sort.both"), _0x534e1f("config.sort.name")],
        _0x48795a = _0x4c16cb[_0xc96248] || _0x534e1f("config.sort.random");
      _0x287fbc.set("shopSortMode", _0x48795a);
      const _0x2d942c = [_0x534e1f("config.sort.random"), _0x534e1f("config.sort.name")],
        _0x4c896c = _0x2d942c[_0x540bb8] || _0x534e1f("config.sort.random");
      _0x287fbc.set("officialShopSortMode", _0x4c896c);
      const _0x4aba48 = _0x398c4b(),
        _0x1a50d1 = _0x4aba48[_0x23b4a6] || "zh_CN",
        _0xc86ad4 = _0x1a50d1 !== _0x157e78;
      if (_0xc86ad4) {
        {
          const _0x29b89d = _0x157e78;
          _0x287fbc.set("language", _0x1a50d1);
          _0x157e78 = _0x1a50d1;
          _0x3344fc();
          _0x2eb15e();
          let _0x5e9e9b, _0x14d2c8;
          if (_0x1a50d1 === "zh_CN") {
            _0x5e9e9b = "§e§l语言设置已更改";
            _0x14d2c8 = "已更改为 " + _0x1a50d1 + "，需要重启服务器生效！";
          } else _0x1a50d1 === "en_US" ? (_0x5e9e9b = "§e§lLanguage Setting Changed", _0x14d2c8 = "Changed to " + _0x1a50d1 + ", server restart required!") : (_0x5e9e9b = "§e§lLanguage Setting Changed", _0x14d2c8 = "Changed to " + _0x1a50d1 + ", server restart required!");
          _0x3bb5c3.tell(_0x534e1f("config.language.changed"));
          _0x3bb5c3.tell(_0x534e1f("config.language.restart.required"));
          const _0x5663c4 = mc.getOnlinePlayers();
          for (const _0x1a25c8 of _0x5663c4) {
            _0x1a25c8.isOP() && _0x1a25c8.sendToast(_0x5e9e9b, _0x14d2c8);
          }
        }
      }
      setTimeout(function () {
        if (_0xc86ad4) {
          const _0x4c6c58 = mc.getOnlinePlayers().filter(_0x396bd2 => _0x396bd2.isOP());
          for (const _0xff8dd7 of _0x4c6c58) {
            _0xff8dd7.tell("§e§l注意：语言文件已更改，部分更改需要重启服务器才能完全生效。");
          }
        }
      }, 1000);
      _0x287fbc.set("enableChatLobby", _0x97f234);
      _0x287fbc.set("chatMessageLimit", _0x377b5f);
      _0x3bb5c3.tell(_0x534e1f("config.updated"));
    }
  });
}
function _0x517cf9(_0xc95343) {
  const _0x125cec = _0x3849f6(_0xc95343),
    _0x339d0d = Object.keys(_0x125cec);
  if (_0x339d0d.length === 0) {
    _0xc95343.tell(_0x534e1f("shop.list.no.items"));
    return;
  }
  const _0x20f5bc = mc.newCustomForm();
  _0x20f5bc.setTitle(_0x534e1f("forbidden.items.title"));
  const _0x41cb3a = _0x339d0d.map((_0x4f0f81, _0x4d8e3c) => {
    {
      const {
        item: _0x2caaf7
      } = _0x125cec[_0x4f0f81];
      return _0x4d8e3c + 1 + ". " + _0x3421de(_0x2caaf7, false);
    }
  });
  _0x20f5bc.addDropdown(_0x534e1f("forbidden.items.select"), _0x41cb3a);
  _0x20f5bc.addInput(_0x534e1f("forbidden.items.reason"), _0x534e1f("reason"), "");
  _0xc95343.sendForm(_0x20f5bc, (_0x27b27a, _0xbe69f3) => {
    if (!_0xbe69f3) return;
    const _0x3878c = _0xbe69f3[0],
      _0x10fac5 = _0xbe69f3[1]?.["trim"]() || _0x534e1f("forbidden.items.default.reason"),
      _0x355bf2 = _0x339d0d[_0x3878c],
      _0x27e435 = _0x125cec[_0x355bf2].item;
    if (!_0xb5a09d.includes(_0x355bf2)) _0xb5a09d.push(_0x355bf2), _0x27b27a.tell(_0x534e1f("forbidden.items.success", _0x3421de(_0x27e435, false), _0x10fac5));else {
      _0x27b27a.tell(_0x534e1f("forbidden.items.already"));
    }
    _0x4b2cda();
  });
}
function _0x586589(_0x320a66) {
  const _0x1f6149 = _0x10932d[_0x320a66.xuid];
  if (!_0x1f6149) {
    _0x320a66.tell(_0x534e1f("manage.shop.no.shop"));
    return;
  }
  const _0x7cec75 = _0x3e774d(),
    _0x273969 = _0x287fbc.get("shopNameChangeCost"),
    _0x3bbf8f = _0x287fbc.get("shopNameChangeCooldown") * 3600 * 1000,
    _0x47698d = mc.newSimpleForm();
  _0x47698d.setTitle(_0x534e1f("manage.shop.title"));
  _0x47698d.setContent(_0x534e1f("manage.shop.select.operation"));
  _0x256b17(_0x47698d);
  _0x47698d.addButton(_0x534e1f("manage.shop.edit.name"), "textures/ui/book_edit_default");
  _0x47698d.addButton(_0x534e1f("manage.shop.delete"), "textures/ui/trash");
  _0x47698d.addButton(_0x1f6149.isOpen ? _0x534e1f("manage.shop.close") : _0x534e1f("manage.shop.open"), _0x1f6149.isOpen ? "textures/ui/crossout" : "textures/ui/check");
  _0x47698d.addButton(_0x534e1f("manage.shop.announcement"), "textures/ui/colored_book");
  _0x320a66.sendForm(_0x47698d, (_0x501750, _0x1c0481) => {
    {
      if (_0x1c0481 == null) return;
      if (_0x1c0481 === 0) {
        _0x39a224(_0x501750);
        return;
      }
      let _0x2934a7 = 1;
      if (_0x1c0481 === _0x2934a7++) {
        const _0x37d7aa = Date.now();
        if (_0x37d7aa - _0x1f6149.lastNameChange < _0x3bbf8f) {
          {
            const _0xa95b26 = ((_0x3bbf8f - (_0x37d7aa - _0x1f6149.lastNameChange)) / 3600000).toFixed(1);
            _0x501750.tell(_0x534e1f("shop.remain.time", _0xa95b26));
            return;
          }
        }
        const _0x4be57e = mc.newCustomForm();
        _0x4be57e.setTitle(_0x534e1f("manage.shop.edit.name"));
        _0x4be57e.addInput(_0x534e1f("manage.shop.new.name"), _0x534e1f("shop.name"));
        _0x4be57e.addLabel(_0x534e1f("manage.shop.name.cost", _0x273969, _0x7cec75.name));
        _0x501750.sendForm(_0x4be57e, (_0x18e6d0, _0x1e7fc4) => {
          {
            if (!_0x1e7fc4) return;
            const _0x479c4d = _0x1e7fc4[0]?.["trim"]();
            if (!_0x479c4d) {
              _0x18e6d0.tell(_0x534e1f("manage.shop.name.empty"));
              return;
            }
            if (_0x479c4d.length > 10) {
              _0x18e6d0.tell(_0x534e1f("manage.shop.name.too.long"));
              return;
            }
            if (_0x7cec75.get(_0x18e6d0) < _0x273969) {
              _0x18e6d0.tell(_0x534e1f("manage.shop.insufficient.funds"));
              return;
            }
            _0x7cec75.reduce(_0x18e6d0, _0x273969);
            _0x1f6149.name = _0x479c4d;
            _0x1f6149.lastNameChange = Date.now();
            _0x4791db();
            _0x18e6d0.tell(_0x534e1f("manage.shop.name.change.success", _0x479c4d));
          }
        });
      } else {
        if (_0x1c0481 === _0x2934a7++) {
          const _0x34dd8b = mc.newCustomForm();
          _0x34dd8b.setTitle(_0x534e1f("manage.shop.delete.title"));
          _0x34dd8b.addLabel(_0x534e1f("manage.shop.delete.confirm"));
          _0x34dd8b.addSwitch(_0x534e1f("manage.shop.delete.confirm.switch"), false);
          _0x501750.sendForm(_0x34dd8b, (_0x63d868, _0x178866) => {
            if (!_0x178866) return;
            const _0x40f42d = _0x178866[1];
            if (_0x40f42d) {
              {
                const _0x27b9eb = Object.keys(_0x1f6149.items).length;
                if (_0x27b9eb > 0) {
                  _0x63d868.tell(_0x534e1f("manage.shop.delete.has.items"));
                  return;
                }
                let _0x4ad2d6 = _0x1f6149.items,
                  _0x324c69 = true;
                for (const _0x205de7 in _0x4ad2d6) {
                  let _0x34b7f4 = _0x4ad2d6[_0x205de7],
                    _0x57bf18 = NBT.parseSNBT(_0x34b7f4.itemData);
                  if (!_0x35840c(_0x63d868, _0x57bf18, _0x34b7f4.quantity)) {
                    _0x324c69 = false;
                    _0x63d868.tell(_0x534e1f("purchase.confirm.inventory.full"));
                    continue;
                  }
                  let _0x7c8e1c = _0x31ebc5(_0x63d868, _0x57bf18, _0x34b7f4.quantity);
                  if (!_0x7c8e1c) _0x324c69 = false;
                }
                if (_0x324c69) {
                  delete _0x10932d[_0x63d868.xuid];
                  _0x4791db();
                  if (_0x4c64fa[_0x63d868.xuid]) {
                    delete _0x4c64fa[_0x63d868.xuid];
                    _0xdd4d1e();
                  }
                  _0x63d868.tell(_0x534e1f("manage.shop.delete.success"));
                } else _0x63d868.tell(_0x534e1f("manage.shop.delete.failed"));
              }
            } else _0x63d868.tell(_0x534e1f("manage.shop.delete.cancelled"));
          });
        } else {
          if (_0x1c0481 === _0x2934a7) _0x1f6149.isOpen = !_0x1f6149.isOpen, _0x4791db(), _0x501750.tell(_0x534e1f("manage.shop.status.changed", _0x1f6149.isOpen ? _0x534e1f("manage.shop.status.open") : _0x534e1f("manage.shop.status.closed")));else _0x1c0481 === ++_0x2934a7 && _0x296770(_0x501750, _0x1f6149);
        }
      }
    }
  });
}
function _0x296770(_0x3e28ca, _0x1deb32) {
  const _0x1d380b = mc.newCustomForm();
  _0x1d380b.setTitle(_0x534e1f("manage.shop.announcement.title"));
  _0x1d380b.addLabel(_0x534e1f("manage.shop.announcement.hint"));
  _0x1d380b.addInput(_0x534e1f("manage.shop.announcement.input"), "", _0x1deb32.announcement || "");
  _0x3e28ca.sendForm(_0x1d380b, (_0x4655ca, _0x5977bd) => {
    if (!_0x5977bd) return;
    const _0xfe2d06 = _0x5977bd[1]?.["trim"]() || "";
    if (_0xfe2d06.length > 100) {
      _0x4655ca.tell(_0x534e1f("manage.shop.announcement.too.long"));
      return;
    }
    _0x1deb32.announcement = _0xfe2d06;
    _0x4791db();
    _0x4655ca.tell(_0x534e1f("manage.shop.announcement.success"));
    _0x586589(_0x4655ca);
  });
}
function _0x29650d(_0x35b318) {
  const _0x547b80 = mc.newSimpleForm();
  _0x547b80.setTitle(_0x534e1f("advert.config.title"));
  _0x547b80.setContent(_0x534e1f("advert.config.hint"));
  _0x256b17(_0x547b80);
  for (let _0x12cddd = 1; _0x12cddd <= 10; _0x12cddd++) {
    const _0xfc87c6 = _0x287fbc.get("advertSlotsSetting." + _0x12cddd) || {
        "price": 0,
        "duration": 0
      },
      _0x1722ee = _0xfc87c6.price || 0,
      _0x5a84c7 = _0xfc87c6.duration || 0;
    _0x547b80.addButton(_0x534e1f("advert.config.slot.info", _0x12cddd, _0x1722ee, _0x5a84c7), "textures/ui/anvil_icon");
  }
  _0x35b318.sendForm(_0x547b80, (_0x382f25, _0x5b7e67) => {
    {
      if (_0x5b7e67 == null) return;
      if (_0x5b7e67 === 0) {
        _0x43e53b(_0x382f25);
        return;
      }
      _0x423044(_0x382f25, _0x5b7e67);
    }
  });
}
function _0x423044(_0x58cb18, _0x428669) {
  const _0x58cc5b = _0x287fbc.get("advertSlotsSetting." + _0x428669) || {
      "price": 0,
      "duration": 0
    },
    _0x59e9af = _0x58cc5b.price || 0,
    _0x39e521 = _0x58cc5b.duration || 0,
    _0x53dd95 = mc.newCustomForm();
  _0x53dd95.setTitle(_0x534e1f("advert.config.edit.title", _0x428669));
  _0x53dd95.addInput(_0x534e1f("advert.config.edit.price"), "", _0x59e9af.toString());
  _0x53dd95.addInput(_0x534e1f("advert.config.edit.duration"), "", _0x39e521.toString());
  _0x58cb18.sendForm(_0x53dd95, (_0x29986e, _0x3a94b5) => {
    if (!_0x3a94b5) return;
    const _0x5e3b63 = parseInt(_0x3a94b5[0]),
      _0x29fdff = parseInt(_0x3a94b5[1]);
    if (isNaN(_0x5e3b63) || _0x5e3b63 < 0) {
      {
        _0x29986e.tell(_0x534e1f("advert.config.edit.price.error"));
        return;
      }
    }
    if (isNaN(_0x29fdff) || _0x29fdff < 0) {
      {
        _0x29986e.tell(_0x534e1f("advert.config.edit.duration.error"));
        return;
      }
    }
    _0x287fbc.set("advertSlotsSetting." + _0x428669, {
      "price": _0x5e3b63,
      "duration": _0x29fdff
    });
    _0x29986e.tell(_0x534e1f("advert.config.edit.success", _0x428669, _0x5e3b63, _0x29fdff));
  });
}
function _0x5c74cb(_0x59a93f, _0x6c2dfd = 1, _0x1a52d5 = "") {
  const _0x4c776f = mc.newSimpleForm();
  _0x4c776f.setTitle(_0x534e1f("official.shop.title"));
  _0x4c776f.setContent(_0x534e1f("official.shop.select.operation"));
  _0x256b17(_0x4c776f);
  let _0x47d990 = 1;
  _0x287fbc.get("showOfficialPurchase") && (_0x4c776f.addButton(_0x534e1f("official.shop.button.buy"), "textures/ui/bookshelf_flat"), _0x47d990++);
  _0x4c776f.addButton(_0x534e1f("official.shop.button.recycle"), "textures/ui/recap_glyph_color_2x");
  _0x47d990++;
  if (_0x59a93f.isOP()) {
    _0x4c776f.addButton(_0x534e1f("official.shop.button.manage"), "textures/ui/op");
    _0x47d990++;
  }
  _0x59a93f.sendForm(_0x4c776f, (_0x2b9749, _0x1fc6eb) => {
    {
      if (_0x1fc6eb == null) return;
      if (_0x1fc6eb === 0) {
        _0x1e7ae7(_0x2b9749);
        return;
      }
      let _0x2e8031 = 1;
      if (_0x287fbc.get("showOfficialPurchase")) {
        {
          if (_0x1fc6eb === _0x2e8031++) {
            let _0x587af4 = Object.keys(_0x185450.purchaseItems);
            if (_0x587af4.length === 0) {
              _0x2b9749.tell(_0x534e1f("official.shop.no.items"));
              return;
            }
            let _0x240266 = _0x287fbc.get("officialShopSortMode") || _0x534e1f("config.sort.random");
            if (_0x240266 === _0x534e1f("config.sort.random")) for (let _0x8dd2c = _0x587af4.length - 1; _0x8dd2c > 0; _0x8dd2c--) {
              {
                let _0xe5676a = Math.floor(Math.random() * (_0x8dd2c + 1));
                [_0x587af4[_0x8dd2c], _0x587af4[_0xe5676a]] = [_0x587af4[_0xe5676a], _0x587af4[_0x8dd2c]];
              }
            } else {
              if (_0x240266 === _0x534e1f("config.sort.name")) {
                _0x587af4.sort((_0xb53035, _0x3ee322) => {
                  {
                    let _0x4f610c = _0x185450.purchaseItems[_0xb53035],
                      _0x117469 = _0x185450.purchaseItems[_0x3ee322];
                    return _0x4f610c.name.localeCompare(_0x117469.name);
                  }
                });
              }
            }
            _0x358d36 = _0x587af4;
            _0x1eee98(_0x2b9749, 1, "");
            return;
          }
        }
      }
      if (_0x1fc6eb === _0x2e8031++) {
        _0xec3e13(_0x2b9749);
        return;
      }
      if (_0x59a93f.isOP() && _0x1fc6eb === _0x2e8031++) {
        _0x468f2d(_0x2b9749);
        return;
      }
    }
  });
}
function _0x1eee98(_0x154c33, _0x3050e9, _0x49e388) {
  if (_0x358d36.length === 0) {
    {
      _0x154c33.tell(_0x534e1f("official.shop.order.error"));
      return;
    }
  }
  let _0x24e5b2 = [];
  for (let _0x5324ab of _0x358d36) {
    let _0x43af97 = _0x185450.purchaseItems[_0x5324ab];
    if (!_0x43af97) continue;
    if (_0x49e388 && _0x49e388.trim() !== "") {
      let _0x127b96 = _0x49e388.trim().toLowerCase(),
        _0x165400 = _0x43af97.name.toLowerCase(),
        _0x5890ed = (_0x43af97.remark || "").toLowerCase();
      if (!_0x165400.includes(_0x127b96) && !_0x5890ed.includes(_0x127b96)) {
        continue;
      }
    }
    _0x24e5b2.push(_0x5324ab);
  }
  let _0x149a0b = _0x24e5b2.length,
    _0x1af8e3 = _0x287fbc.get("pageSizeLimit") || 30,
    _0x475efa = Math.ceil(_0x149a0b / _0x1af8e3);
  if (_0x3050e9 < 1) _0x3050e9 = 1;
  if (_0x3050e9 > _0x475efa && _0x475efa > 0) _0x3050e9 = _0x475efa;
  let _0x2ca21d = (_0x3050e9 - 1) * _0x1af8e3,
    _0x5eba3e = _0x2ca21d + _0x1af8e3,
    _0x32f307 = _0x24e5b2.slice(_0x2ca21d, _0x5eba3e);
  const _0x1a957c = mc.newSimpleForm();
  _0x1a957c.setTitle(_0x534e1f("official.shop.items.title", _0x3050e9, _0x475efa));
  let _0x3d9463 = _0x534e1f("official.shop.keyword", _0x49e388 || _0x534e1f("none")) + "\n" + _0x534e1f("official.shop.count", _0x149a0b, _0x1af8e3) + "\n" + _0x534e1f("official.shop.select.item");
  _0x1a957c.setContent(_0x3d9463);
  let _0x58ec2d = _0x3050e9 > 1,
    _0x309667 = _0x3050e9 < _0x475efa;
  _0x58ec2d && _0x1a957c.addButton(_0x534e1f("button.prev.page"), "textures/ui/arrow_left");
  _0x309667 && _0x1a957c.addButton(_0x534e1f("button.next.page"), "textures/ui/arrow_right");
  _0x1a957c.addButton(_0x534e1f("button.search"), "textures/ui/magnifyingGlass");
  for (let _0x2dffb5 of _0x32f307) {
    {
      let _0x19d1a1 = _0x185450.purchaseItems[_0x2dffb5];
      if (!_0x19d1a1) continue;
      let _0x46360e = _0x19d1a1.name || "§c<未命名>",
        _0xdd9741 = mc.newItem(NBT.parseSNBT(_0x19d1a1.itemData)),
        _0x54d230 = JSON.parse(_0x2f8a5d.read()),
        _0x2bd464 = _0x264298;
      if (_0x54d230[_0xdd9741.type] && _0x54d230[_0xdd9741.type] !== "null") {
        _0x2bd464 = _0x54d230[_0xdd9741.type];
      }
      let _0x4e990e = _0x19d1a1.quantity === -1 ? _0x534e1f("infinite") : String(_0x19d1a1.quantity),
        _0x4f9ca4 = "";
      _0xdd9741.aux !== undefined && _0xdd9741.aux !== null && (_0x4f9ca4 = " | " + _0x534e1f("aux") + ":" + _0xdd9741.aux);
      _0x1a957c.addButton("§s" + _0x46360e + " §f| §s" + _0x534e1f("price") + ":" + _0x19d1a1.price + "\n§s" + _0x534e1f("stock") + ":" + _0x4e990e + _0x4f9ca4, _0x2bd464);
    }
  }
  _0x154c33.sendForm(_0x1a957c, (_0x398983, _0x10228d) => {
    {
      if (_0x10228d === null) return;
      let _0x5c7538 = 0;
      if (_0x58ec2d && _0x10228d === _0x5c7538) {
        {
          _0x1eee98(_0x398983, _0x3050e9 - 1, _0x49e388);
          return;
        }
      }
      if (_0x58ec2d) _0x5c7538++;
      if (_0x309667 && _0x10228d === _0x5c7538) {
        _0x1eee98(_0x398983, _0x3050e9 + 1, _0x49e388);
        return;
      }
      if (_0x309667 || _0x58ec2d) _0x5c7538++;
      if (_0x10228d === _0x5c7538) {
        {
          _0x16bde7(_0x398983, 1, "");
          return;
        }
      }
      _0x5c7538++;
      let _0x3befe9 = _0x10228d - _0x5c7538;
      if (_0x3befe9 < 0 || _0x3befe9 >= _0x32f307.length) {
        {
          _0x398983.tell(_0x534e1f("error.invalid.selection"));
          return;
        }
      }
      let _0x5c02e8 = _0x32f307[_0x3befe9],
        _0x15dfbb = _0x185450.purchaseItems[_0x5c02e8];
      if (!_0x15dfbb) {
        {
          _0x398983.tell(_0x534e1f("error"));
          return;
        }
      }
      _0x476e55(_0x398983, null, _0x5c02e8, _0x15dfbb, true);
    }
  });
}
function _0x16bde7(_0x3f4698, _0x1284f7, _0x9f9b00) {
  const _0xa3344d = mc.newCustomForm();
  _0xa3344d.setTitle(_0x534e1f("official.shop.search.title"));
  _0xa3344d.addInput(_0x534e1f("official.shop.search.keyword"), _0x534e1f("keyword"), _0x9f9b00 || "");
  _0x3f4698.sendForm(_0xa3344d, (_0x4adf0a, _0x58de66) => {
    {
      if (!_0x58de66) return;
      const _0x3f7e25 = _0x58de66[0]?.["trim"]() || "";
      _0x1eee98(_0x4adf0a, 1, _0x3f7e25);
    }
  });
}
function _0xec3e13(_0x597b41) {
  const _0x433f0f = Object.keys(_0x185450.recycleItems);
  if (_0x433f0f.length === 0) {
    _0x597b41.tell(_0x534e1f("official.shop.recycle.no.items"));
    return;
  }
  const _0x2f765f = _0x287fbc.get("officialShopSortMode") || _0x534e1f("config.sort.random");
  let _0x248ca0 = [..._0x433f0f];
  if (_0x2f765f === _0x534e1f("config.sort.random")) for (let _0x2cc839 = _0x248ca0.length - 1; _0x2cc839 > 0; _0x2cc839--) {
    {
      let _0x2b1c99 = Math.floor(Math.random() * (_0x2cc839 + 1));
      [_0x248ca0[_0x2cc839], _0x248ca0[_0x2b1c99]] = [_0x248ca0[_0x2b1c99], _0x248ca0[_0x2cc839]];
    }
  } else _0x2f765f === _0x534e1f("config.sort.name") && _0x248ca0.sort((_0x4750e2, _0x5e88a0) => {
    {
      const _0x39247d = _0x185450.recycleItems[_0x4750e2],
        _0x226f81 = _0x185450.recycleItems[_0x5e88a0];
      return _0x39247d.name.localeCompare(_0x226f81.name);
    }
  });
  const _0x29c016 = mc.newSimpleForm();
  _0x29c016.setTitle(_0x534e1f("official.shop.recycle.title"));
  _0x29c016.setContent(_0x534e1f("official.shop.recycle.select"));
  _0x256b17(_0x29c016);
  _0x248ca0.forEach(_0x125bdc => {
    const _0x36788a = _0x185450.recycleItems[_0x125bdc],
      _0x298999 = mc.newItem(NBT.parseSNBT(_0x36788a.itemData)),
      _0x4f9cab = _0x3421de(_0x298999, false);
    let _0x1103c7 = JSON.parse(_0x2f8a5d.read()),
      _0x4b4b7b = _0x1103c7.hasOwnProperty(_0x298999.type) && _0x1103c7[_0x298999.type] && _0x1103c7[_0x298999.type] !== "null" ? _0x1103c7[_0x298999.type] : _0x264298;
    _0x29c016.addButton(_0x4f9cab + "\n" + _0x534e1f("official.shop.recycle.price", _0x36788a.price), _0x4b4b7b);
  });
  _0x597b41.sendForm(_0x29c016, (_0x1922de, _0x2ba14a) => {
    if (_0x2ba14a == null) return;
    if (_0x2ba14a === 0) {
      {
        _0x5c74cb(_0x1922de, 1, "", _0x534e1f("category.all"));
        return;
      }
    }
    const _0x1ce34b = _0x2ba14a - 1;
    if (_0x1ce34b < 0 || _0x1ce34b >= _0x248ca0.length) {
      {
        _0x1922de.tell(_0x534e1f("error.invalid.selection"));
        return;
      }
    }
    const _0x219484 = _0x248ca0[_0x1ce34b],
      _0x2a5e7a = _0x185450.recycleItems[_0x219484];
    _0x98dabb(_0x1922de, _0x219484, _0x2a5e7a);
  });
}
function _0x2bc63e(_0x484dd8, _0x2c6d83) {
  let _0x39ca1d = 0;
  const _0x30e2b2 = _0x484dd8.getInventory();
  for (let _0x501157 = 0; _0x501157 < _0x30e2b2.size; _0x501157++) {
    let _0x20e978 = _0x30e2b2.getItem(_0x501157);
    if (_0x20e978 && _0x20e978.type !== "") {
      {
        let _0x45aa63 = _0x20e978.getNbt().toSNBT();
        if (_0x23f4e7(_0x45aa63, _0x2c6d83)) {
          _0x39ca1d += _0x20e978.count;
        }
      }
    }
  }
  return _0x39ca1d;
}
function _0x98dabb(_0x1accaf, _0x373c24, _0x24e6bf) {
  const _0x473cf5 = _0x3e774d(),
    _0x2f2dc6 = _0x24e6bf.itemData,
    _0x7d457c = _0x2bc63e(_0x1accaf, _0x2f2dc6),
    _0x50eeba = mc.newCustomForm();
  _0x50eeba.setTitle(_0x534e1f("recycle.confirm.title"));
  const _0x17369e = mc.newItem(NBT.parseSNBT(_0x2f2dc6)),
    _0x135ed0 = _0x3421de(_0x17369e, false);
  _0x50eeba.addLabel(_0x534e1f("recycle.confirm.item.name", _0x135ed0));
  _0x50eeba.addLabel(_0x534e1f("recycle.confirm.price", _0x24e6bf.price));
  _0x50eeba.addLabel(_0x534e1f("recycle.confirm.own.quantity", _0x7d457c));
  _0x50eeba.addInput(_0x534e1f("recycle.confirm.input.quantity"), _0x534e1f("number"), _0x7d457c.toString());
  _0x1accaf.sendForm(_0x50eeba, (_0x1bdfba, _0x1d8e32) => {
    if (!_0x1d8e32) return;
    const _0x1cde3d = parseInt(_0x1d8e32[3]);
    if (isNaN(_0x1cde3d) || _0x1cde3d <= 0) {
      _0x1bdfba.tell(_0x534e1f("recycle.confirm.quantity.error"));
      return;
    }
    if (_0x1cde3d > _0x7d457c) {
      {
        _0x1bdfba.tell(_0x534e1f("recycle.confirm.insufficient.items"));
        return;
      }
    }
    let _0x3aa907 = _0x17d1e9(_0x1bdfba, _0x2f2dc6, _0x1cde3d);
    if (!_0x3aa907) {
      {
        _0x1bdfba.tell(_0x534e1f("recycle.confirm.failed"));
        return;
      }
    }
    let _0x3c9b40 = _0x24e6bf.price * _0x1cde3d;
    _0x473cf5.add(_0x1bdfba, _0x3c9b40);
    _0x1bdfba.tell(_0x534e1f("recycle.confirm.success", _0x3c9b40, _0x473cf5.name));
    _0x1bdfba.sendToast(_0x534e1f("recycle.confirm.toast"), _0x534e1f("recycle.confirm.toast.info", _0x3c9b40, _0x473cf5.name));
  });
}
function _0x468f2d(_0x72b70e) {
  const _0x1afa7b = mc.newSimpleForm();
  _0x1afa7b.setTitle(_0x534e1f("official.shop.manage.title"));
  _0x1afa7b.setContent(_0x534e1f("official.shop.manage.select"));
  _0x256b17(_0x1afa7b);
  _0x1afa7b.addButton(_0x534e1f("official.shop.manage.add"), "textures/ui/backup_replace");
  _0x1afa7b.addButton(_0x534e1f("official.shop.manage.edit.recycle"), "textures/ui/anvil_icon");
  _0x1afa7b.addButton(_0x534e1f("official.shop.manage.edit.purchase"), "textures/ui/anvil_icon");
  _0x72b70e.sendForm(_0x1afa7b, (_0xc9e34, _0x1a5f05) => {
    if (_0x1a5f05 == null) return;
    if (_0x1a5f05 === 0) {
      _0x5c74cb(_0xc9e34, 1, "", _0x534e1f("category.all"));
      return;
    }
    let _0x5411c8 = 1;
    if (_0x1a5f05 === _0x5411c8++) _0x55f91a(_0xc9e34, true);else {
      if (_0x1a5f05 === _0x5411c8++) {
        _0x2968cb(_0xc9e34);
      } else {
        if (_0x1a5f05 === _0x5411c8) {
          _0x1879f9(_0xc9e34);
        }
      }
    }
  });
}
function _0x2968cb(_0x4c5e2d) {
  const _0x3d2483 = mc.newSimpleForm();
  _0x3d2483.setTitle(_0x534e1f("recycle.edit.title"));
  _0x3d2483.setContent(_0x534e1f("official.shop.manage.select"));
  _0x256b17(_0x3d2483);
  _0x3d2483.addButton(_0x534e1f("recycle.add.title"), "textures/ui/backup_replace");
  _0x3d2483.addButton(_0x534e1f("recycle.edit.title"), "textures/ui/anvil_icon");
  _0x4c5e2d.sendForm(_0x3d2483, (_0x3bf4a4, _0x590cb0) => {
    {
      if (_0x590cb0 == null) return;
      if (_0x590cb0 === 0) {
        {
          _0x468f2d(_0x3bf4a4);
          return;
        }
      }
      let _0xebda99 = 1;
      if (_0x590cb0 === _0xebda99++) _0x5a2472(_0x3bf4a4);else _0x590cb0 === _0xebda99 && _0x18b911(_0x3bf4a4);
    }
  });
}
function _0x5a2472(_0x2837a2) {
  const _0xb22171 = _0x3849f6(_0x2837a2),
    _0x5eac1a = Object.keys(_0xb22171);
  if (_0x5eac1a.length === 0) {
    {
      _0x2837a2.tell(_0x534e1f("shop.list.no.items"));
      return;
    }
  }
  const _0x3dd448 = mc.newCustomForm();
  _0x3dd448.setTitle(_0x534e1f("recycle.add.title"));
  const _0x39531e = _0x5eac1a.map((_0x2e7f2e, _0x562c03) => {
    const {
        item: _0x264c09,
        count: _0x6aad8e
      } = _0xb22171[_0x2e7f2e],
      _0x1362dd = _0x3421de(_0x264c09, false);
    return _0x562c03 + 1 + ". " + _0x1362dd + " x" + _0x6aad8e;
  });
  _0x3dd448.addDropdown(_0x534e1f("recycle.add.select"), _0x39531e);
  _0x3dd448.addInput(_0x534e1f("recycle.add.price"), _0x534e1f("number"), "1");
  _0x3dd448.addInput(_0x534e1f("recycle.add.custom.name"), _0x534e1f("item.name"), "");
  _0x2837a2.sendForm(_0x3dd448, (_0x4aee6c, _0x354ec4) => {
    if (!_0x354ec4) return;
    const _0x480845 = _0x354ec4[0],
      _0x3840d0 = parseInt(_0x354ec4[1]),
      _0x196da6 = (_0x354ec4[2] || "").trim();
    if (isNaN(_0x3840d0) || _0x3840d0 <= 0) {
      _0x4aee6c.tell(_0x534e1f("shop.list.price.error"));
      return;
    }
    const _0x3a3808 = _0x5eac1a[_0x480845],
      {
        item: _0x2f4a26
      } = _0xb22171[_0x3a3808];
    let _0x454cee = _0x2f4a26.getNbt();
    _0x454cee.setByte("Count", 1);
    let _0x4f13be = _0x454cee.toSNBT();
    const _0x1006a3 = mc.newItem(_0x454cee),
      _0x45860c = _0x196da6 || _0x3421de(_0x1006a3, false),
      _0x57cb10 = _0x1006a3.getCategoryName ? _0x1006a3.getCategoryName() : _0x534e1f("category.misc");
    _0x185450.recycleItems[_0x4f13be] = {
      "itemData": _0x4f13be,
      "name": _0x45860c,
      "price": _0x3840d0,
      "category": _0x57cb10
    };
    _0x274b0f();
    _0x4aee6c.tell(_0x534e1f("recycle.add.success", _0x45860c, _0x3840d0));
    _0x4aee6c.sendToast(_0x534e1f("recycle.add.toast"), _0x534e1f("recycle.add.toast.info", _0x45860c, _0x3840d0));
    _0x468f2d(_0x4aee6c);
  });
}
function _0x18b911(_0x22ea13) {
  const _0x5f0ba4 = Object.keys(_0x185450.recycleItems);
  if (_0x5f0ba4.length === 0) {
    _0x22ea13.tell(_0x534e1f("recycle.edit.no.items"));
    return;
  }
  const _0x36bb44 = mc.newSimpleForm();
  _0x36bb44.setTitle(_0x534e1f("recycle.edit.title"));
  _0x36bb44.setContent(_0x534e1f("recycle.edit.select"));
  _0x256b17(_0x36bb44);
  const _0x16e2c4 = JSON.parse(_0x2f8a5d.read());
  _0x5f0ba4.forEach((_0x48b36f, _0x39c2c0) => {
    const _0x54ff5d = _0x185450.recycleItems[_0x48b36f],
      _0x1258fb = mc.newItem(NBT.parseSNBT(_0x54ff5d.itemData)),
      _0x3da885 = _0x54ff5d.name || _0x3421de(_0x1258fb, false);
    let _0x39eb26 = _0x264298;
    const _0x54ca08 = _0x1258fb.type;
    _0x16e2c4.hasOwnProperty(_0x54ca08) && _0x16e2c4[_0x54ca08] && _0x16e2c4[_0x54ca08] !== "null" && (_0x39eb26 = _0x16e2c4[_0x54ca08]);
    _0x36bb44.addButton("§c" + (_0x39c2c0 + 1) + ".  §s" + _0x3da885 + "\n(" + _0x534e1f("price") + ":" + _0x54ff5d.price + ")", _0x39eb26);
  });
  _0x22ea13.sendForm(_0x36bb44, (_0x448244, _0x5f264b) => {
    if (_0x5f264b == null) return;
    if (_0x5f264b === 0) {
      {
        _0x2968cb(_0x448244);
        return;
      }
    }
    const _0x54c874 = _0x5f0ba4[_0x5f264b - 1],
      _0x5cfc00 = _0x185450.recycleItems[_0x54c874];
    _0x4ca36b(_0x448244, _0x54c874, _0x5cfc00);
  });
}
function _0x4ca36b(_0x3c23fe, _0xbb0a89, _0x37971a) {
  const _0x16bb26 = mc.newCustomForm();
  _0x16bb26.setTitle(_0x534e1f("recycle.edit.details.title"));
  _0x16bb26.addLabel(_0x534e1f("recycle.edit.original.category", _0x37971a.category || _0x534e1f("none")));
  _0x16bb26.addInput(_0x534e1f("recycle.edit.custom.name"), "", _0x37971a.name || "");
  _0x16bb26.addInput(_0x534e1f("recycle.edit.price"), _0x534e1f("number"), _0x37971a.price.toString());
  _0x16bb26.addSwitch(_0x534e1f("recycle.edit.delete"), false);
  _0x3c23fe.sendForm(_0x16bb26, (_0x36eba8, _0x778194) => {
    if (!_0x778194) return;
    const _0x50855a = (_0x778194[1] || "").trim(),
      _0x152492 = parseInt(_0x778194[2]),
      _0x387847 = _0x778194[3];
    if (!_0x50855a) {
      {
        _0x36eba8.tell(_0x534e1f("recycle.edit.name.empty"));
        return;
      }
    }
    if (isNaN(_0x152492) || _0x152492 <= 0) {
      _0x36eba8.tell(_0x534e1f("shop.list.price.error"));
      return;
    }
    _0x387847 ? (delete _0x185450.recycleItems[_0xbb0a89], _0x36eba8.tell(_0x534e1f("recycle.edit.delete.success")), _0x36eba8.sendToast(_0x534e1f("recycle.edit.delete.toast"), _0x534e1f("recycle.edit.delete.toast.info", _0x37971a.name))) : (_0x37971a.name = _0x50855a, _0x37971a.price = _0x152492, _0x36eba8.tell(_0x534e1f("recycle.edit.update.success")), _0x36eba8.sendToast(_0x534e1f("recycle.edit.update.toast"), _0x534e1f("recycle.edit.update.toast.info", _0x50855a, _0x152492)));
    _0x274b0f();
    _0x468f2d(_0x36eba8);
  });
}
function _0x1879f9(_0x5b3c58) {
  const _0x186eb1 = Object.keys(_0x185450.purchaseItems);
  if (_0x186eb1.length === 0) {
    _0x5b3c58.tell(_0x534e1f("purchase.edit.no.items"));
    return;
  }
  const _0x1f8d43 = mc.newSimpleForm();
  _0x1f8d43.setTitle(_0x534e1f("purchase.edit.title"));
  _0x1f8d43.setContent(_0x534e1f("purchase.edit.select"));
  _0x256b17(_0x1f8d43);
  const _0x302192 = JSON.parse(_0x2f8a5d.read());
  _0x186eb1.forEach((_0x202635, _0x11f763) => {
    const _0x179bf3 = _0x185450.purchaseItems[_0x202635],
      _0x39dfe1 = mc.newItem(NBT.parseSNBT(_0x179bf3.itemData)),
      _0x2b20dc = _0x179bf3.name || _0x3421de(_0x39dfe1, false),
      _0x2c16dd = _0x179bf3.quantity === -1 ? _0x534e1f("infinite") : _0x179bf3.quantity;
    let _0x4c2d63 = _0x264298;
    const _0x284e6e = _0x39dfe1.type;
    _0x302192.hasOwnProperty(_0x284e6e) && _0x302192[_0x284e6e] && _0x302192[_0x284e6e] !== "null" && (_0x4c2d63 = _0x302192[_0x284e6e]);
    let _0x544204 = "";
    _0x39dfe1.aux !== undefined && _0x39dfe1.aux !== null && (_0x544204 = " | " + _0x534e1f("aux") + ":" + _0x39dfe1.aux);
    _0x1f8d43.addButton("§c" + (_0x11f763 + 1) + ". §s" + _0x2b20dc + " §f| §s" + _0x534e1f("price") + ":" + _0x179bf3.price + "\n§s" + _0x534e1f("stock") + ":" + _0x2c16dd + _0x544204, _0x4c2d63);
  });
  _0x5b3c58.sendForm(_0x1f8d43, (_0x518ce3, _0x5520dd) => {
    if (_0x5520dd == null) return;
    if (_0x5520dd === 0) {
      _0x468f2d(_0x518ce3);
      return;
    }
    const _0x4195f9 = _0x186eb1[_0x5520dd - 1],
      _0x513ddc = _0x185450.purchaseItems[_0x4195f9];
    _0x1a38d9(_0x518ce3, _0x4195f9, _0x513ddc);
  });
}
function _0x1a38d9(_0x158e5f, _0x164b88, _0x142426) {
  const _0x228dbd = mc.newCustomForm();
  _0x228dbd.setTitle(_0x534e1f("purchase.edit.details.title"));
  _0x228dbd.addLabel(_0x534e1f("purchase.edit.original.category", _0x142426.category || _0x534e1f("none")));
  _0x228dbd.addInput(_0x534e1f("purchase.edit.name"), "", _0x142426.name || "");
  _0x228dbd.addInput(_0x534e1f("purchase.edit.price"), _0x534e1f("number"), _0x142426.price.toString());
  _0x228dbd.addInput(_0x534e1f("purchase.edit.stock"), _0x534e1f("number"), _0x142426.quantity === -1 ? "0" : _0x142426.quantity.toString());
  _0x228dbd.addInput(_0x534e1f("purchase.edit.remark"), _0x534e1f("remark"), _0x142426.remark || "");
  _0x228dbd.addSwitch(_0x534e1f("purchase.edit.delete"), false);
  _0x158e5f.sendForm(_0x228dbd, (_0x5ce9a4, _0xac1e8f) => {
    if (!_0xac1e8f) return;
    const _0x505b7b = (_0xac1e8f[1] || "").trim(),
      _0x7bb1a7 = parseInt(_0xac1e8f[2]);
    let _0x1e9f77 = parseInt(_0xac1e8f[3]);
    const _0x53c4b7 = (_0xac1e8f[4] || "").trim(),
      _0x440d3f = _0xac1e8f[5];
    if (!_0x505b7b) {
      {
        _0x5ce9a4.tell(_0x534e1f("purchase.edit.name.empty"));
        return;
      }
    }
    if (isNaN(_0x7bb1a7) || _0x7bb1a7 <= 0) {
      _0x5ce9a4.tell(_0x534e1f("purchase.edit.price.error"));
      return;
    }
    if (isNaN(_0x1e9f77) || _0x1e9f77 < 0) {
      {
        _0x5ce9a4.tell(_0x534e1f("purchase.edit.stock.error"));
        return;
      }
    }
    if (_0x440d3f) delete _0x185450.purchaseItems[_0x164b88], _0x5ce9a4.tell(_0x534e1f("purchase.edit.delete.success")), _0x5ce9a4.sendToast(_0x534e1f("purchase.edit.delete.toast"), _0x534e1f("purchase.edit.delete.toast.info", _0x142426.name));else {
      {
        _0x142426.name = _0x505b7b;
        _0x142426.price = _0x7bb1a7;
        _0x142426.quantity = _0x1e9f77 === 0 ? -1 : _0x1e9f77;
        _0x142426.remark = _0x53c4b7;
        _0x5ce9a4.tell(_0x534e1f("purchase.edit.update.success"));
        let _0x13c7d3 = _0x1e9f77 === 0 ? _0x534e1f("infinite") : _0x1e9f77;
        _0x5ce9a4.sendToast(_0x534e1f("purchase.edit.update.toast"), _0x534e1f("purchase.edit.update.toast.info", _0x505b7b, _0x7bb1a7, _0x13c7d3));
      }
    }
    _0x274b0f();
    _0x468f2d(_0x5ce9a4);
  });
}
function _0x5c2ab7(_0x4ac06a) {
  const _0x12417d = mc.newCustomForm();
  _0x12417d.setTitle(_0x534e1f("icon.config.title"));
  const _0xae6e5c = _0x287fbc.get("enableLocalIcon"),
    _0x54d1eb = _0x287fbc.get("enableURLIcon"),
    _0x3f659c = _0x287fbc.get("enableCustomPathIcon"),
    _0x4662ee = _0x287fbc.get("allowedDomain"),
    _0x1f36da = _0x287fbc.get("localIconChangeCost"),
    _0x2020bd = _0x287fbc.get("localIconChangeCooldown"),
    _0x55408d = _0x287fbc.get("URLIconChangeCost"),
    _0x39c980 = _0x287fbc.get("URLIconChangeCooldown"),
    _0x1330d7 = _0x287fbc.get("customPathIconChangeCost"),
    _0x4bdfc7 = _0x287fbc.get("customPathIconChangeCooldown");
  _0x12417d.addSwitch(_0x534e1f("icon.config.local.enable"), _0xae6e5c);
  _0x12417d.addInput(_0x534e1f("icon.config.local.cost"), "number", String(_0x1f36da));
  _0x12417d.addInput(_0x534e1f("icon.config.local.cooldown"), "number", String(_0x2020bd));
  _0x12417d.addSwitch(_0x534e1f("icon.config.url.enable"), _0x54d1eb);
  _0x12417d.addInput(_0x534e1f("icon.config.url.cost"), "number", String(_0x55408d));
  _0x12417d.addInput(_0x534e1f("icon.config.url.cooldown"), "number", String(_0x39c980));
  _0x12417d.addSwitch(_0x534e1f("icon.config.custom.enable"), _0x3f659c);
  _0x12417d.addInput(_0x534e1f("icon.config.custom.cost"), "number", String(_0x1330d7));
  _0x12417d.addInput(_0x534e1f("icon.config.custom.cooldown"), "number", String(_0x4bdfc7));
  _0x12417d.addInput(_0x534e1f("icon.config.domain"), "xxx.com", _0x4662ee);
  _0x4ac06a.sendForm(_0x12417d, (_0x1ff375, _0x2ed471) => {
    {
      if (!_0x2ed471) return;
      const _0x7a3a93 = _0x2ed471[0],
        _0x3875b9 = parseInt(_0x2ed471[1]),
        _0x27ac25 = parseInt(_0x2ed471[2]),
        _0x15eb8d = _0x2ed471[3],
        _0x2a81cf = parseInt(_0x2ed471[4]),
        _0x402a2e = parseInt(_0x2ed471[5]),
        _0x5325d9 = _0x2ed471[6],
        _0x5afaf1 = parseInt(_0x2ed471[7]),
        _0x49f010 = parseInt(_0x2ed471[8]),
        _0xf0dcb4 = _0x2ed471[9]?.["trim"]() || "";
      if (isNaN(_0x3875b9) || _0x3875b9 < 0) {
        _0x1ff375.tell(_0x534e1f("icon.config.local.cost.error"));
        return;
      }
      if (isNaN(_0x27ac25) || _0x27ac25 < 0) {
        {
          _0x1ff375.tell(_0x534e1f("icon.config.local.cooldown.error"));
          return;
        }
      }
      if (isNaN(_0x2a81cf) || _0x2a81cf < 0) {
        _0x1ff375.tell(_0x534e1f("icon.config.url.cost.error"));
        return;
      }
      if (isNaN(_0x402a2e) || _0x402a2e < 0) {
        _0x1ff375.tell(_0x534e1f("icon.config.url.cooldown.error"));
        return;
      }
      if (isNaN(_0x5afaf1) || _0x5afaf1 < 0) {
        _0x1ff375.tell(_0x534e1f("icon.config.custom.cost.error"));
        return;
      }
      if (isNaN(_0x49f010) || _0x49f010 < 0) {
        {
          _0x1ff375.tell(_0x534e1f("icon.config.custom.cooldown.error"));
          return;
        }
      }
      _0x287fbc.set("enableLocalIcon", _0x7a3a93);
      _0x287fbc.set("localIconChangeCost", _0x3875b9);
      _0x287fbc.set("localIconChangeCooldown", _0x27ac25);
      _0x287fbc.set("enableURLIcon", _0x15eb8d);
      _0x287fbc.set("URLIconChangeCost", _0x2a81cf);
      _0x287fbc.set("URLIconChangeCooldown", _0x402a2e);
      _0x287fbc.set("enableCustomPathIcon", _0x5325d9);
      _0x287fbc.set("customPathIconChangeCost", _0x5afaf1);
      _0x287fbc.set("customPathIconChangeCooldown", _0x49f010);
      _0x287fbc.set("allowedDomain", _0xf0dcb4);
      _0x1ff375.tell(_0x534e1f("icon.config.success"));
    }
  });
}
function _0x1696fc(_0x31f128, _0x1141de, _0x3869df) {
  let _0x420bf0 = Object.values(_0x10932d);
  if (_0x3869df && _0x3869df.trim() !== "") {
    {
      let _0x5f2434 = _0x3869df.toLowerCase();
      _0x420bf0 = _0x420bf0.filter(_0x418196 => {
        {
          if (_0x418196.name && _0x418196.name.toLowerCase().includes(_0x5f2434)) return true;
          if (_0x418196.owner && _0x418196.owner.toLowerCase().includes(_0x5f2434)) return true;
          return false;
        }
      });
    }
  }
  _0x5bedab = _0x287fbc.get("pageSizeLimit") || 30;
  const _0x1f76ac = _0x420bf0.length,
    _0x46bf27 = Math.ceil(_0x1f76ac / _0x5bedab);
  if (_0x1141de < 1) _0x1141de = 1;
  if (_0x1141de > _0x46bf27 && _0x46bf27 > 0) _0x1141de = _0x46bf27;
  const _0x3d8e62 = (_0x1141de - 1) * _0x5bedab,
    _0x503862 = _0x3d8e62 + _0x5bedab,
    _0x280e91 = _0x420bf0.slice(_0x3d8e62, _0x503862),
    _0x490806 = mc.newSimpleForm();
  _0x490806.setTitle(_0x534e1f("manage.player.shops.title", _0x1141de, _0x46bf27));
  _0x490806.addButton(_0x534e1f("manage.player.shops.back"), "textures/ui/icon_import");
  let _0x513c12 = _0x534e1f("manage.player.shops.search.keyword", _0x3869df || _0x534e1f("none")) + "\n" + _0x534e1f("manage.player.shops.page.size", _0x5bedab) + "\n" + _0x534e1f("manage.player.shops.select");
  _0x490806.setContent(_0x513c12);
  let _0x28d2a3 = _0x1141de > 1,
    _0x463ba1 = _0x1141de < _0x46bf27;
  if (_0x28d2a3) {
    _0x490806.addButton(_0x534e1f("button.prev.page"), "textures/ui/arrow_left");
  }
  _0x463ba1 && _0x490806.addButton(_0x534e1f("button.next.page"), "textures/ui/arrow_right");
  _0x490806.addButton(_0x534e1f("manage.player.shops.search"), "textures/ui/magnifyingGlass");
  _0x280e91.forEach(_0x2f7f99 => {
    let _0x3382e4 = Object.keys(_0x2f7f99.items || {}).length;
    _0x490806.addButton(_0x534e1f("manage.player.shops.info", _0x2f7f99.name, _0x2f7f99.owner, _0x3382e4), _0x1d0700(_0x2f7f99));
  });
  _0x31f128.sendForm(_0x490806, (_0x2c5709, _0x29b307) => {
    {
      if (_0x29b307 == null) return;
      let _0x17cb1e = 0;
      if (_0x29b307 === _0x17cb1e) {
        {
          _0x43e53b(_0x2c5709);
          return;
        }
      }
      _0x17cb1e++;
      if (_0x28d2a3 && _0x29b307 === _0x17cb1e) {
        {
          _0x1696fc(_0x2c5709, _0x1141de - 1, _0x3869df);
          return;
        }
      }
      if (_0x28d2a3) _0x17cb1e++;
      if (_0x463ba1 && _0x29b307 === _0x17cb1e) {
        _0x1696fc(_0x2c5709, _0x1141de + 1, _0x3869df);
        return;
      }
      if (_0x463ba1 || _0x28d2a3) _0x17cb1e++;
      if (_0x29b307 === _0x17cb1e) {
        {
          _0x5b625a(_0x2c5709);
          return;
        }
      }
      _0x17cb1e++;
      let _0x3b0796 = _0x29b307 - _0x17cb1e;
      if (_0x3b0796 < 0 || _0x3b0796 >= _0x280e91.length) {
        _0x2c5709.tell(_0x534e1f("error.invalid.selection"));
        return;
      }
      let _0x3b0b59 = _0x280e91[_0x3b0796];
      _0x17e7ad(_0x2c5709, _0x3b0b59);
    }
  });
}
function _0x5b625a(_0x350de1) {
  const _0x33ecdb = mc.newCustomForm();
  _0x33ecdb.setTitle(_0x534e1f("manage.player.shops.search.title"));
  _0x33ecdb.addInput(_0x534e1f("manage.player.shops.search.input"), _0x534e1f("keyword"), "");
  _0x350de1.sendForm(_0x33ecdb, (_0xd5e0d5, _0x3f20d0) => {
    if (!_0x3f20d0) return;
    let _0x45863a = _0x3f20d0[0]?.["trim"]() || "";
    _0x1696fc(_0xd5e0d5, 1, _0x45863a);
  });
}
function _0x17e7ad(_0x180083, _0x4f5a2f) {
  const _0x142049 = mc.newSimpleForm();
  _0x142049.setTitle(_0x534e1f("manage.player.shop.specific.title", _0x4f5a2f.name));
  _0x142049.setContent(_0x534e1f("manage.player.shop.specific.select"));
  _0x256b17(_0x142049);
  _0x142049.addButton(_0x534e1f("manage.player.shop.edit.name"), "textures/ui/book_edit_default");
  _0x142049.addButton(_0x4f5a2f.isOpen ? _0x534e1f("manage.player.shop.toggle") : _0x534e1f("manage.player.shop.toggle.open"), _0x4f5a2f.isOpen ? "textures/ui/crossout" : "textures/ui/check");
  _0x142049.addButton(_0x534e1f("manage.player.shop.delete"), "textures/ui/trash");
  _0x142049.addButton(_0x534e1f("manage.player.shop.icon"), "textures/ui/refresh");
  _0x142049.addButton(_0x534e1f("manage.player.shop.items"), "textures/ui/anvil_icon");
  _0x180083.sendForm(_0x142049, (_0x438fda, _0x10735b) => {
    if (_0x10735b == null) return;
    if (_0x10735b === 0) {
      _0x1696fc(_0x438fda, 1, "");
      return;
    }
    let _0x496cdd = 1;
    if (_0x10735b === _0x496cdd++) _0x1e77a5(_0x438fda, _0x4f5a2f);else {
      if (_0x10735b === _0x496cdd++) _0x4f5a2f.isOpen = !_0x4f5a2f.isOpen, _0x4791db(), _0x438fda.tell(_0x534e1f("manage.player.shop.toggle.success", _0x4f5a2f.isOpen ? _0x534e1f("manage.shop.status.open") : _0x534e1f("manage.shop.status.closed")));else {
        if (_0x10735b === _0x496cdd++) _0x42f84f(_0x438fda, _0x4f5a2f);else {
          if (_0x10735b === _0x496cdd++) _0x4b0082(_0x438fda, _0x4f5a2f);else _0x10735b === _0x496cdd && _0x1fc010(_0x438fda, _0x4f5a2f);
        }
      }
    }
  });
}
function _0x1e77a5(_0x38cdde, _0x2f0084) {
  const _0x2352b3 = mc.newCustomForm();
  _0x2352b3.setTitle(_0x534e1f("manage.player.shop.name.title"));
  _0x2352b3.addInput(_0x534e1f("manage.player.shop.name.input"), _0x534e1f("shop.name"));
  _0x38cdde.sendForm(_0x2352b3, (_0x5d518d, _0x285c37) => {
    if (!_0x285c37) return;
    let _0x351e41 = _0x285c37[0]?.["trim"]();
    if (!_0x351e41) {
      _0x5d518d.tell(_0x534e1f("manage.shop.name.empty"));
      return;
    }
    if (_0x351e41.length > 10) {
      _0x5d518d.tell(_0x534e1f("manage.shop.name.too.long"));
      return;
    }
    _0x2f0084.name = _0x351e41;
    _0x2f0084.lastNameChange = Date.now();
    _0x4791db();
    _0x5d518d.tell(_0x534e1f("manage.player.shop.name.success", _0x351e41));
  });
}
function _0x42f84f(_0x4de95d, _0x179c5a) {
  const _0x3e3243 = mc.newCustomForm();
  _0x3e3243.setTitle(_0x534e1f("manage.player.shop.delete.title"));
  _0x3e3243.addLabel(_0x534e1f("manage.player.shop.delete.warning"));
  _0x3e3243.addSwitch(_0x534e1f("manage.player.shop.delete.confirm"), false);
  _0x4de95d.sendForm(_0x3e3243, (_0x3424f6, _0x9751ef) => {
    if (!_0x9751ef) return;
    const _0x32d44e = _0x9751ef[1];
    if (!_0x32d44e) {
      _0x3424f6.tell(_0x534e1f("manage.shop.delete.cancelled"));
      return;
    }
    let _0x320268 = Object.keys(_0x179c5a.items).length;
    if (_0x320268 > 0) {
      _0x3424f6.tell(_0x534e1f("manage.player.shop.delete.has.items"));
      return;
    }
    delete _0x10932d[_0x179c5a.ownerXuid];
    _0x4791db();
    _0x4c64fa[_0x179c5a.ownerXuid] && (delete _0x4c64fa[_0x179c5a.ownerXuid], _0xdd4d1e());
    _0x3424f6.tell(_0x534e1f("manage.player.shop.delete.success"));
  });
}
function _0x4b0082(_0x5f1091, _0x1556da) {
  const _0x163025 = mc.newSimpleForm();
  _0x163025.setTitle(_0x534e1f("manage.player.shop.icon.title"));
  _0x163025.setContent(_0x534e1f("manage.player.shop.icon.select"));
  _0x256b17(form);
  _0x163025.addButton(_0x534e1f("manage.player.shop.icon.local"), "textures/ui/color_picker");
  _0x163025.addButton(_0x534e1f("manage.player.shop.icon.url"), "textures/ui/share_microsoft");
  _0x163025.addButton(_0x534e1f("manage.player.shop.icon.custom"), "textures/ui/subscription_glyph_color");
  _0x5f1091.sendForm(_0x163025, (_0x55dd60, _0x225b2e) => {
    {
      if (_0x225b2e == null) return;
      if (_0x225b2e === 0) {
        {
          _0x17e7ad(_0x55dd60, _0x1556da);
          return;
        }
      }
      let _0xd5616e = 1;
      if (_0x225b2e === _0xd5616e++) {
        _0x11cf36(_0x55dd60, _0x1556da);
      } else {
        if (_0x225b2e === _0xd5616e++) _0xb3d3a3(_0x55dd60, _0x1556da);else _0x225b2e === _0xd5616e && _0x4b0408(_0x55dd60, _0x1556da);
      }
    }
  });
}
function _0x11cf36(_0x282c3f, _0x4edf99) {
  let _0x3eabc7 = [];
  const _0x289c60 = File.getFilesList(_0x307010);
  if (_0x289c60 && _0x289c60.length > 0) for (let _0x6fa1e7 of _0x289c60) {
    _0x6fa1e7.toLowerCase().endsWith(".png") && _0x3eabc7.push(_0x6fa1e7);
  }
  if (_0x3eabc7.length === 0) {
    _0x282c3f.tell(_0x534e1f("shop.icon.no.local"));
    return;
  }
  _0x334dc1(_0x282c3f, _0x4edf99, _0x3eabc7, 1);
}
function _0x334dc1(_0x1cdbfe, _0x38d92b, _0x595ad6, _0x24f743) {
  let _0x3fd956 = _0x595ad6.length;
  _0x5bedab = _0x287fbc.get("pageSizeLimit") || 30;
  let _0x29aee5 = Math.ceil(_0x3fd956 / _0x5bedab);
  if (_0x24f743 < 1) _0x24f743 = 1;
  if (_0x24f743 > _0x29aee5 && _0x29aee5 > 0) _0x24f743 = _0x29aee5;
  let _0x244dee = (_0x24f743 - 1) * _0x5bedab,
    _0x1f9be4 = _0x244dee + _0x5bedab,
    _0x1def8d = _0x595ad6.slice(_0x244dee, _0x1f9be4);
  const _0x4a92be = mc.newSimpleForm();
  _0x4a92be.setTitle(_0x534e1f("manage.player.shop.icon.local.title", _0x24f743, _0x29aee5));
  _0x4a92be.setContent(_0x534e1f("manage.player.shop.icon.local.select"));
  if (_0x24f743 > 1) _0x4a92be.addButton(_0x534e1f("button.prev.page"), "textures/ui/arrow_dark_left_stretch");
  if (_0x24f743 < _0x29aee5) _0x4a92be.addButton(_0x534e1f("button.next.page"), "textures/ui/arrow_dark_right");
  _0x1def8d.forEach(_0x11c0e6 => {
    {
      let _0x28310c = _0x11c0e6.replace(/\.png$/i, "");
      _0x4a92be.addButton(_0x28310c, "textures/ui/" + _0x28310c);
    }
  });
  _0x1cdbfe.sendForm(_0x4a92be, (_0x19554c, _0x1f6893) => {
    if (_0x1f6893 == null) return;
    let _0x16a8ce = 0,
      _0x4ff814 = _0x24f743 > 1,
      _0x51649e = _0x24f743 < _0x29aee5;
    if (_0x4ff814 && _0x1f6893 === _0x16a8ce) {
      {
        _0x334dc1(_0x19554c, _0x38d92b, _0x595ad6, _0x24f743 - 1);
        return;
      }
    }
    if (_0x4ff814) _0x16a8ce++;
    if (_0x51649e && _0x1f6893 === _0x16a8ce) {
      {
        _0x334dc1(_0x19554c, _0x38d92b, _0x595ad6, _0x24f743 + 1);
        return;
      }
    }
    if (_0x51649e) _0x16a8ce++;
    let _0x32aa01 = _0x1f6893 - _0x16a8ce;
    if (_0x32aa01 < 0 || _0x32aa01 >= _0x1def8d.length) {
      {
        _0x19554c.tell(_0x534e1f("error.invalid.selection"));
        return;
      }
    }
    let _0x119305 = _0x1def8d[_0x32aa01],
      _0x5bd4ba = _0x119305.replace(/\.png$/i, "");
    _0x38d92b.iconName = "textures/ui/" + _0x5bd4ba;
    _0x38d92b.lastIconChange = Date.now();
    _0x4791db();
    _0x19554c.tell(_0x534e1f("manage.player.shop.icon.local.success", "textures/ui/" + _0x5bd4ba));
  });
}
function _0xb3d3a3(_0x527ecd, _0x3f75ef) {
  const _0x22ecb5 = mc.newCustomForm();
  _0x22ecb5.setTitle(_0x534e1f("manage.player.shop.icon.url.title"));
  _0x22ecb5.addInput(_0x534e1f("manage.player.shop.icon.url.input"), "http://...");
  _0x527ecd.sendForm(_0x22ecb5, (_0xfecde4, _0x49b124) => {
    if (!_0x49b124) return;
    const _0x275f0d = _0x49b124[0]?.["trim"]();
    if (!_0x275f0d) {
      {
        _0xfecde4.tell(_0x534e1f("shop.icon.url.empty"));
        return;
      }
    }
    let _0x1f829e = _0x287fbc.get("allowedDomain") || "";
    if (_0x1f829e && _0x1f829e.trim() !== "") {
      {
        if (!_0x275f0d.includes(_0x1f829e.trim())) {
          {
            _0xfecde4.tell(_0x534e1f("shop.icon.url.invalid", _0x1f829e));
            return;
          }
        }
      }
    }
    _0x3f75ef.iconName = _0x275f0d;
    _0x3f75ef.lastIconChange = Date.now();
    _0x4791db();
    _0xfecde4.tell(_0x534e1f("manage.player.shop.icon.url.success", _0x275f0d));
  });
}
function _0x4b0408(_0x25ee77, _0x4b0156) {
  const _0x5f2c0d = mc.newCustomForm();
  _0x5f2c0d.setTitle(_0x534e1f("manage.player.shop.icon.custom.title"));
  _0x5f2c0d.addInput(_0x534e1f("manage.player.shop.icon.custom.input"), "textures/ui/...");
  _0x25ee77.sendForm(_0x5f2c0d, (_0x1e6435, _0x14d9d8) => {
    {
      if (!_0x14d9d8) return;
      const _0x49f384 = _0x14d9d8[0]?.["trim"]();
      if (!_0x49f384) {
        _0x1e6435.tell(_0x534e1f("shop.icon.path.empty"));
        return;
      }
      _0x4b0156.iconName = _0x49f384;
      _0x4b0156.lastIconChange = Date.now();
      _0x4791db();
      _0x1e6435.tell(_0x534e1f("manage.player.shop.icon.custom.success", _0x49f384));
    }
  });
}
function _0x1fc010(_0x58235f, _0x4fcab7) {
  const _0x4704b9 = mc.newSimpleForm();
  _0x4704b9.setTitle(_0x534e1f("manage.player.shop.items.title", _0x4fcab7.name));
  _0x4704b9.setContent(_0x534e1f("manage.player.shop.items.select"));
  _0x256b17(_0x4704b9);
  _0x4704b9.addButton(_0x534e1f("manage.player.shop.items.search"), "textures/ui/magnifyingGlass");
  const _0x28629a = JSON.parse(_0x2f8a5d.read()),
    _0x279d85 = Object.keys(_0x4fcab7.items);
  _0x279d85.forEach((_0x451ee5, _0x281fc1) => {
    let _0x40a632 = _0x4fcab7.items[_0x451ee5],
      _0x88f9cc = mc.newItem(NBT.parseSNBT(_0x40a632.itemData));
    const _0x4f5faf = _0x40a632.name;
    let _0x5f428a = _0x264298,
      _0x63abe3 = _0x88f9cc.type;
    _0x28629a.hasOwnProperty(_0x63abe3) && _0x28629a[_0x63abe3] && _0x28629a[_0x63abe3] !== "null" && (_0x5f428a = _0x28629a[_0x63abe3]);
    const _0x5d6f34 = _0x40a632.quantity === -1 ? _0x534e1f("infinite") : String(_0x40a632.quantity);
    _0x4704b9.addButton(_0x534e1f("manage.player.shop.items.info", _0x281fc1 + 1, _0x4f5faf, _0x40a632.price, _0x5d6f34), _0x5f428a);
  });
  _0x58235f.sendForm(_0x4704b9, (_0x3c1648, _0x18fba7) => {
    if (_0x18fba7 == null) return;
    if (_0x18fba7 === 0) {
      {
        _0x17e7ad(_0x3c1648, _0x4fcab7);
        return;
      }
    }
    if (_0x18fba7 === 1) {
      _0x2ed718(_0x3c1648, _0x4fcab7);
      return;
    }
    let _0x16c19d = _0x18fba7 - 2;
    const _0x998595 = Object.keys(_0x4fcab7.items);
    if (_0x16c19d < 0 || _0x16c19d >= _0x998595.length) {
      _0x3c1648.tell(_0x534e1f("error.invalid.selection"));
      return;
    }
    let _0x48c142 = _0x998595[_0x16c19d],
      _0x41c72c = _0x4fcab7.items[_0x48c142];
    _0x1c2934(_0x3c1648, _0x4fcab7, _0x48c142, _0x41c72c);
  });
}
function _0x2ed718(_0x56ceaa, _0x1c1ac6) {
  const _0xff0c32 = mc.newCustomForm();
  _0xff0c32.setTitle(_0x534e1f("manage.player.shop.items.search.title"));
  _0xff0c32.addInput(_0x534e1f("manage.player.shop.items.search.input"), _0x534e1f("keyword"), "");
  _0x56ceaa.sendForm(_0xff0c32, (_0x1b54f2, _0x32a3ce) => {
    if (!_0x32a3ce) return;
    let _0x5bb7e0 = _0x32a3ce[0]?.["trim"]()["toLowerCase"]() || "",
      _0x2302cf = mc.newSimpleForm();
    _0x2302cf.setTitle(_0x534e1f("manage.player.shop.items.search.result", _0x5bb7e0));
    _0x2302cf.addButton(_0x534e1f("button.return"), "textures/ui/icon_import");
    let _0x5b13a8 = Object.keys(_0x1c1ac6.items),
      _0x161a14 = [];
    for (let _0x32af98 of _0x5b13a8) {
      let _0x1b03f6 = _0x1c1ac6.items[_0x32af98];
      if (_0x1b03f6.name.toLowerCase().includes(_0x5bb7e0) || _0x1b03f6.remark && _0x1b03f6.remark.toLowerCase().includes(_0x5bb7e0)) {
        _0x161a14.push({
          "key": _0x32af98,
          "item": _0x1b03f6
        });
      }
    }
    _0x161a14.length === 0 ? _0x2302cf.setContent(_0x534e1f("manage.player.shop.items.search.not.found")) : _0x161a14.forEach((_0x3ae67d, _0x209c19) => {
      {
        let _0x6ba7b1 = mc.newItem(NBT.parseSNBT(_0x3ae67d.item.itemData)),
          _0x462934 = _0x3421de(_0x6ba7b1, false);
        _0x2302cf.addButton(_0x209c19 + 1 + ". " + _0x462934 + "\n" + _0x534e1f("price") + ":" + _0x3ae67d.item.price + " | " + _0x534e1f("quantity") + ":" + (_0x3ae67d.item.quantity === -1 ? _0x534e1f("infinite") : _0x3ae67d.item.quantity));
      }
    });
    _0x56ceaa.sendForm(_0x2302cf, (_0x512adc, _0x578289) => {
      {
        if (_0x578289 == null) return;
        if (_0x578289 === 0) {
          _0x1fc010(_0x512adc, _0x1c1ac6);
          return;
        }
        let _0x458fdd = _0x578289 - 1;
        if (_0x458fdd < 0 || _0x458fdd >= _0x161a14.length) {
          {
            _0x512adc.tell(_0x534e1f("error.invalid.selection"));
            return;
          }
        }
        let _0x454b93 = _0x161a14[_0x458fdd].key,
          _0x30237f = _0x161a14[_0x458fdd].item;
        _0x1c2934(_0x512adc, _0x1c1ac6, _0x454b93, _0x30237f);
      }
    });
  });
}
function _0x1c2934(_0x394da8, _0x3fa113, _0x5a090a, _0x176e2b) {
  const _0x44877f = mc.newCustomForm();
  _0x44877f.setTitle(_0x534e1f("manage.player.shop.item.edit.title"));
  let _0x5df010 = _0x176e2b.quantity === -1 ? _0x534e1f("infinite") : String(_0x176e2b.quantity);
  _0x44877f.addLabel(_0x534e1f("manage.player.shop.item.edit.info", _0x176e2b.name, _0x5df010));
  _0x44877f.addInput(_0x534e1f("manage.player.shop.item.edit.price"), _0x534e1f("number"), String(_0x176e2b.price));
  _0x44877f.addDropdown(_0x534e1f("manage.player.shop.item.edit.category"), _0x2514ad, _0x2514ad.indexOf(_0x176e2b.category || _0x534e1f("category.all")));
  _0x44877f.addInput(_0x534e1f("manage.player.shop.item.edit.remark"), _0x534e1f("remark"), _0x176e2b.remark || "");
  _0x44877f.addSwitch(_0x534e1f("manage.player.shop.item.edit.delete"), false);
  _0x394da8.sendForm(_0x44877f, (_0x490912, _0x2e0a59) => {
    {
      if (!_0x2e0a59) return;
      let _0x386b84 = parseInt(_0x2e0a59[1]),
        _0x2952a0 = _0x2e0a59[2],
        _0x5c8958 = _0x2e0a59[3]?.["trim"]() || "",
        _0x50ff62 = _0x2e0a59[4];
      if (isNaN(_0x386b84) || _0x386b84 <= 0) {
        {
          _0x490912.tell(_0x534e1f("manage.player.shop.item.edit.price.error"));
          return;
        }
      }
      if (_0x5c8958.length > 50) {
        _0x490912.tell(_0x534e1f("manage.player.shop.item.edit.remark.too.long"));
        return;
      }
      if (_0x50ff62) delete _0x3fa113.items[_0x5a090a], _0x490912.tell(_0x534e1f("manage.player.shop.item.edit.delete.success"));else {
        _0x176e2b.price = _0x386b84;
        _0x176e2b.category = _0x2514ad[_0x2952a0] || _0x534e1f("category.all");
        _0x176e2b.remark = _0x5c8958;
        _0x490912.tell(_0x534e1f("manage.player.shop.item.edit.success"));
      }
      _0x4791db();
    }
  });
}
function _0x69aac7(_0xc6621f) {
  _0x2cba7f.mentions[_0xc6621f.xuid] && (_0x2cba7f.mentions[_0xc6621f.xuid].unread = false, _0x2cba7f.mentions[_0xc6621f.xuid].count = 0, _0x435863());
  const _0x2242d7 = _0x287fbc.get("chatMessageLimit") || 30,
    _0x79c623 = mc.newCustomForm();
  _0x79c623.setTitle(_0x534e1f("chat.lobby.title"));
  let _0x57b1cb = _0x534e1f("chat.lobby.recent.messages", _0x2242d7) + "\n";
  _0x2cba7f.messages.slice(-_0x2242d7).reverse().forEach(_0x1f3077 => {
    const _0x5c51cb = new Date(_0x1f3077.timestamp).toLocaleTimeString();
    _0x57b1cb += "§7[" + _0x5c51cb + "] §r" + _0x1f3077.sender + "§f: " + _0x1f3077.content + "\n";
  });
  _0x79c623.addLabel(_0x57b1cb);
  _0x79c623.addInput(_0x534e1f("chat.lobby.input.message"), _0x534e1f("chat.lobby.placeholder"), "");
  _0xc6621f.sendForm(_0x79c623, (_0x2f415c, _0x1d7019) => {
    if (!_0x1d7019) return;
    const _0x6def43 = _0x1d7019[1].trim();
    if (_0x6def43.length === 0) return;
    const _0x473f04 = {
        "sender": _0x2f415c.realName,
        "content": _0x6def43,
        "timestamp": Date.now(),
        "mentions": []
      },
      _0x51f4f9 = /@(\w+)/g;
    let _0x1a1c35;
    while ((_0x1a1c35 = _0x51f4f9.exec(_0x6def43)) !== null) {
      const _0x1e7a59 = _0x1a1c35[1],
        _0x45e11f = mc.getPlayer(_0x1e7a59);
      _0x45e11f && (_0x473f04.mentions.push(_0x45e11f.xuid), !_0x2cba7f.mentions[_0x45e11f.xuid] && (_0x2cba7f.mentions[_0x45e11f.xuid] = {
        "unread": true,
        "count": 0
      }), _0x2cba7f.mentions[_0x45e11f.xuid].unread = true, _0x2cba7f.mentions[_0x45e11f.xuid].count += 1);
    }
    _0x2cba7f.messages.push(_0x473f04);
    _0x2cba7f.messages.length > 30 && _0x2cba7f.messages.shift();
    _0x435863();
    mc.broadcast(_0x534e1f("chat.lobby.broadcast", _0x2f415c.realName, _0x6def43));
  });
}
ll.exports(function () {
  return Object.values(_0x10932d);
}, "ShoppingMall", "listAllShops");
ll.exports(function (_0x32f6c2) {
  return _0x10932d[_0x32f6c2] || null;
}, "ShoppingMall", "getShop");
ll.exports(function (_0x37da7c) {
  if (!_0x10932d[_0x37da7c]) return {
    "success": false,
    "msg": _0x534e1f("api.shop.not.found")
  };
  delete _0x10932d[_0x37da7c];
  _0x4791db();
  _0x4c64fa[_0x37da7c] && (delete _0x4c64fa[_0x37da7c], _0xdd4d1e());
  return {
    "success": true,
    "msg": _0x534e1f("api.shop.deleted")
  };
}, "ShoppingMall", "deleteShop");
ll.exports(function () {
  return {
    "purchaseItems": _0x185450.purchaseItems,
    "recycleItems": _0x185450.recycleItems
  };
}, "ShoppingMall", "getOfficialShopData");
ll.exports(function () {
  return _0x4c64fa;
}, "ShoppingMall", "getRankingData");
ll.exports(function () {
  return _0x527f76.global || [];
}, "ShoppingMall", "getGlobalLogs");
ll.exports(function (_0x4e1cae) {
  if (!_0x527f76.players || !_0x527f76.players[_0x4e1cae]) {
    return {
      "buy": [],
      "sell": []
    };
  }
  return {
    "buy": _0x527f76.players[_0x4e1cae].buy || [],
    "sell": _0x527f76.players[_0x4e1cae].sell || []
  };
}, "ShoppingMall", "getPlayerLogs");
ll.exports(function (_0x10ed16, _0x23269b, _0x2568e5, _0x671de7, _0xc05c40 = _0x534e1f("category.all"), _0x3a1d8b = "") {
  if (!_0x10932d[_0x10ed16]) return {
    "success": false,
    "msg": _0x534e1f("api.shop.not.found")
  };
  const _0x5c9d9f = _0x10932d[_0x10ed16];
  !_0x5c9d9f.items[_0x23269b] ? _0x5c9d9f.items[_0x23269b] = {
    "itemData": _0x23269b,
    "name": _0x534e1f("api.item.added.externally"),
    "price": _0x2568e5,
    "quantity": _0x671de7,
    "remark": _0x3a1d8b,
    "category": _0xc05c40
  } : (_0x5c9d9f.items[_0x23269b].quantity += _0x671de7, _0x5c9d9f.items[_0x23269b].price = _0x2568e5, _0x5c9d9f.items[_0x23269b].remark = _0x3a1d8b, _0x5c9d9f.items[_0x23269b].category = _0xc05c40);
  _0x4791db();
  return {
    "success": true,
    "msg": _0x534e1f("api.item.added", _0x671de7, _0x2568e5)
  };
}, "ShoppingMall", "forceAddItemToShop");
ll.exports(function (_0x342fbf, _0x54cdc1, _0x47bb5d = -1) {
  if (!_0x10932d[_0x342fbf]) return {
    "success": false,
    "msg": _0x534e1f("api.shop.not.found")
  };
  const _0x8891e8 = _0x10932d[_0x342fbf],
    _0x1958ee = _0x8891e8.items[_0x54cdc1];
  if (!_0x1958ee) return {
    "success": false,
    "msg": _0x534e1f("api.item.not.found")
  };
  if (_0x47bb5d === -1 || _0x47bb5d >= _0x1958ee.quantity) {
    delete _0x8891e8.items[_0x54cdc1];
    _0x4791db();
    return {
      "success": true,
      "msg": _0x534e1f("api.item.removed.completely")
    };
  } else return _0x1958ee.quantity -= _0x47bb5d, _0x4791db(), {
    "success": true,
    "msg": _0x534e1f("api.item.removed.partially", _0x47bb5d, _0x1958ee.quantity)
  };
}, "ShoppingMall", "forceRemoveItemFromShop");
ll.exports(function (_0x2f29fa, _0x4ddcd3) {
  if (!_0x10932d[_0x2f29fa]) return {
    "success": false,
    "msg": _0x534e1f("api.shop.not.found")
  };
  _0x10932d[_0x2f29fa].isOpen = !!_0x4ddcd3;
  _0x4791db();
  return {
    "success": true,
    "msg": _0x534e1f("api.shop.status.set", _0x4ddcd3 ? _0x534e1f("api.opened") : _0x534e1f("api.closed"))
  };
}, "ShoppingMall", "setShopOpenState");
ll.exports(function (_0x207e22, _0x23b9fa) {
  if (!_0x10932d[_0x207e22]) return {
    "success": false,
    "msg": _0x534e1f("api.shop.not.found")
  };
  if (!_0x23b9fa || _0x23b9fa.length > 10) return {
    "success": false,
    "msg": _0x534e1f("api.shop.name.invalid")
  };
  _0x10932d[_0x207e22].name = _0x23b9fa;
  _0x10932d[_0x207e22].lastNameChange = Date.now();
  _0x4791db();
  return {
    "success": true,
    "msg": _0x534e1f("api.shop.name.changed", _0x23b9fa)
  };
}, "ShoppingMall", "forceChangeShopName");
ll.exports(function (_0x36b77f, _0x5b5524) {
  if (!_0x10932d[_0x36b77f]) return {
    "success": false,
    "msg": _0x534e1f("api.shop.not.found")
  };
  _0x10932d[_0x36b77f].iconName = _0x5b5524;
  _0x10932d[_0x36b77f].lastIconChange = Date.now();
  _0x4791db();
  return {
    "success": true,
    "msg": _0x534e1f("api.shop.icon.changed", _0x5b5524)
  };
}, "ShoppingMall", "forceSetShopIcon");
ll.exports(function (_0x240602) {
  if (!_0xb5a09d.includes(_0x240602)) return _0xb5a09d.push(_0x240602), _0x4b2cda(), {
    "success": true,
    "msg": _0x534e1f("api.forbidden.item.added")
  };
  return {
    "success": false,
    "msg": _0x534e1f("api.forbidden.item.exists")
  };
}, "ShoppingMall", "addForbiddenItem");
ll.exports(function () {
  return _0xb5a09d;
}, "ShoppingMall", "listForbiddenItems");
logger.info("§a§l" + _0x4b084c + " §g插件已加载，版本：" + _0x564a97.join("."));