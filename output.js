//Tue Jun 03 2025 06:22:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x1fb88f = "JoinWelcome",
  _0x4a6b72 = "玩家加入欢迎系统",
  _0x19e89c = [3, 0, 0];
ll.registerPlugin(_0x1fb88f, _0x4a6b72, _0x19e89c, {});
const _0x4c5104 = "./plugins/JoinWelcome/",
  _0x1edffa = _0x4c5104 + "config.json",
  _0x5c6b2d = _0x4c5104 + "joinData.json",
  _0x157f72 = "https://mesh.if.iqiyi.com/aid/ip/info?version=1.1.1&ip=",
  _0x1e84b0 = 1,
  _0x4bd735 = 8;
!File.exists(_0x4c5104) && File.createDir(_0x4c5104);
let _0x9788cb = {
    "displayMode": "both",
    "toastEnabled": true,
    "toastTemplates": {
      "line1": "§b欢迎来自(§e%region%§b)的§a%player% §f第§6%count%§f次进入游戏",
      "line2": "§e上次离开: §f%lastTime%, §a游玩时长: §f%hours%小时%remainMinutes%分钟"
    },
    "chatEnabled": true,
    "chatTemplates": ["§8[§6%server%§8] §a欢迎玩家 §e%player% §a加入游戏!", "§3➥ §f来自: §b%region%", "§3➥ §f设备: §d%device% §8(§3%os%§8)", "§3➥ §f第 §e%count% §f次进入", "§3➥ §f上次离开: §e%lastTime%", "§3➥ §f总游玩时长: §a%hours%§f小时§a%remainMinutes%§f分钟"],
    "displayItems": {
      "showRegion": true,
      "showDevice": true,
      "showCount": true,
      "showLastTime": true,
      "showPlayTime": true,
      "showOSInfo": true,
      "showIPAddress": false,
      "showDetailedGeo": true
    },
    "serverName": "我的世界服务器",
    "enableIpLookup": true,
    "ipQueryTimeout": 5000,
    "debug": false,
    "boldText": false,
    "colorTheme": {
      "primary": "§a",
      "secondary": "§e",
      "accent": "§b",
      "info": "§f",
      "title": "§6",
      "subtitle": "§d"
    }
  },
  _0x4eeabc = {};
if (!File.exists(_0x1edffa)) File.writeTo(_0x1edffa, JSON.stringify(_0x9788cb, null, 4)), _0x4eeabc = {
  ..._0x9788cb
}, logger.info("[" + _0x1fb88f + "] 创建了新的配置文件: " + _0x1edffa);else try {
  let _0x5ef7c1 = File.readFrom(_0x1edffa);
  _0x4eeabc = JSON.parse(_0x5ef7c1);
  let _0x8bbc35 = false;
  function _0x3b1c35(_0x5df06a, _0xf67a8b) {
    for (let _0x42f9f1 in _0xf67a8b) {
      if (_0x5df06a[_0x42f9f1] === undefined) {
        _0x5df06a[_0x42f9f1] = _0xf67a8b[_0x42f9f1];
        _0x8bbc35 = true;
      } else {
        if (typeof _0xf67a8b[_0x42f9f1] === "object" && !Array.isArray(_0xf67a8b[_0x42f9f1])) {
          if (typeof _0x5df06a[_0x42f9f1] !== "object") {
            _0x5df06a[_0x42f9f1] = {};
            _0x8bbc35 = true;
          }
          _0x3b1c35(_0x5df06a[_0x42f9f1], _0xf67a8b[_0x42f9f1]);
        }
      }
    }
  }
  _0x3b1c35(_0x4eeabc, _0x9788cb);
  _0x8bbc35 && (File.writeTo(_0x1edffa, JSON.stringify(_0x4eeabc, null, 4)), logger.info("[" + _0x1fb88f + "] 配置文件已更新"));
} catch (_0x49e38e) {
  logger.error("[" + _0x1fb88f + "] 读取配置失败,使用默认:" + _0x49e38e);
  _0x4eeabc = {
    ..._0x9788cb
  };
}
const _0x5e3e27 = new JsonConfigFile(_0x5c6b2d, "{}");
let _0x433408 = {};
function _0x90689b(_0x384460, _0x3041a4 = "info") {
  if (_0x3041a4 === "debug" && !_0x4eeabc.debug) return;
  const _0x3a0f49 = "[" + _0x1fb88f + "]";
  switch (_0x3041a4) {
    case "error":
      logger.error(_0x3a0f49 + " " + _0x384460);
      break;
    case "warn":
      logger.warn(_0x3a0f49 + " " + _0x384460);
      break;
    case "debug":
      logger.info(_0x3a0f49 + " [DEBUG] " + _0x384460);
      break;
    default:
      logger.info(_0x3a0f49 + " " + _0x384460);
  }
}
function _0xe0bafd(_0x1ccd48) {
  _0x90689b("=======WARN=======", "warn");
  if (typeof _0x1ccd48 === "string") _0x90689b("> " + _0x1ccd48, "warn");else {
    if (Array.isArray(_0x1ccd48)) for (let _0x323219 of _0x1ccd48) {
      _0x90689b("> " + _0x323219, "warn");
    }
  }
  _0x90689b("=======WARN=======", "warn");
}
function _0x309804(_0x2cc39e) {
  if (!_0x2cc39e || _0x2cc39e <= 0) return "无记录";
  let _0x7dd51c = new Date(_0x2cc39e),
    _0x50f64b = _0x7dd51c.getFullYear(),
    _0x300ade = String(_0x7dd51c.getMonth() + 1).padStart(2, "0"),
    _0x586bda = String(_0x7dd51c.getDate()).padStart(2, "0"),
    _0x38349f = String(_0x7dd51c.getHours()).padStart(2, "0"),
    _0x48b8e4 = String(_0x7dd51c.getMinutes()).padStart(2, "0");
  return _0x50f64b + "-" + _0x300ade + "-" + _0x586bda + " " + _0x38349f + ":" + _0x48b8e4;
}
function _0x1d989c(_0x4a6d8e) {
  if (!_0x4a6d8e || _0x4a6d8e <= 0) return "初次加入";
  const _0x308e50 = Date.now(),
    _0x2fe3ea = _0x308e50 - _0x4a6d8e,
    _0x37cc1e = Math.floor(_0x2fe3ea / 1000),
    _0x167c56 = Math.floor(_0x37cc1e / 60),
    _0x2d002e = Math.floor(_0x167c56 / 60),
    _0x4f6ca2 = Math.floor(_0x2d002e / 24);
  if (_0x4f6ca2 > 0) return _0x4f6ca2 + "天前";else {
    if (_0x2d002e > 0) {
      return _0x2d002e + "小时前";
    } else {
      if (_0x167c56 > 0) return _0x167c56 + "分钟前";else {
        return "刚刚";
      }
    }
  }
}
function _0x3b4e3c(_0x491748) {
  const _0x3182de = Math.floor(_0x491748 / 60),
    _0x42497c = _0x491748 % 60;
  return {
    "hours": _0x3182de,
    "remainingMinutes": _0x42497c
  };
}
function _0x2cefe7(_0x2e6ba0, _0xc752ab) {
  return _0x2e6ba0.replace(/%player%/g, _0xc752ab.player || "").replace(/%realname%/g, _0xc752ab.realname || "").replace(/%region%/g, _0xc752ab.region || "未知地区").replace(/%count%/g, String(_0xc752ab.count || 0)).replace(/%lastTime%/g, _0xc752ab.lastTime || "无记录").replace(/%lastTimeAgo%/g, _0xc752ab.lastTimeAgo || "无记录").replace(/%minutes%/g, String(_0xc752ab.minutes || 0)).replace(/%hours%/g, String(_0xc752ab.hours || 0)).replace(/%remainMinutes%/g, String(_0xc752ab.remainMinutes || 0)).replace(/%device%/g, _0xc752ab.device || "未知设备").replace(/%server%/g, _0xc752ab.server || _0x4eeabc.serverName).replace(/%ip%/g, _0xc752ab.ip || "0.0.0.0").replace(/%os%/g, _0xc752ab.os || "未知系统").replace(/%detailedGeo%/g, _0xc752ab.detailedGeo || "未知位置");
}
function _0x1b008c(_0xcced2c) {
  let _0x58ed68 = _0x5e3e27.get(_0xcced2c, null);
  !_0x58ed68 && (_0x58ed68 = {
    "count": 0,
    "firstJoin": 0,
    "firstJoinStr": "",
    "lastJoin": 0,
    "lastJoinStr": "",
    "totalPlayMins": 0,
    "lastDeviceOS": "",
    "lastDeviceName": "",
    "lastIP": ""
  });
  return _0x58ed68;
}
function _0x4c780f(_0x13085c, _0x376f83) {
  _0x5e3e27.set(_0x13085c, _0x376f83);
}
function _0x406029(_0x3da120, _0x14ab50) {
  if (!_0x4eeabc.enableIpLookup) {
    _0x14ab50(null, "IP查询已禁用");
    return;
  }
  let _0x367a48 = _0x157f72 + _0x3da120,
    _0x286d2b = false;
  function _0x31ffef(_0x3a6d9c, _0x5eb7b6) {
    !_0x286d2b && (_0x286d2b = true, _0x14ab50(_0x3a6d9c, _0x5eb7b6));
  }
  setTimeout(() => {
    _0x31ffef(new Error("IP地址查询超时 (" + _0x4eeabc.ipQueryTimeout + "ms)"));
  }, _0x4eeabc.ipQueryTimeout);
  network.httpGet(_0x367a48, (_0x24e7ed, _0x265947) => {
    if (_0x286d2b) return;
    if (_0x24e7ed !== 200) {
      return _0x31ffef(new Error("IP地址查询失败,HTTP状态码:" + _0x24e7ed));
    }
    try {
      {
        let _0x1df4c3 = JSON.parse(_0x265947);
        if (!_0x1df4c3 || _0x1df4c3.code !== "0" || !_0x1df4c3.data) {
          return _0x31ffef(new Error("IP地址查询失败:返回内容不符合预期"));
        }
        let _0x2add6f = _0x1df4c3.data,
          _0x527983 = {
            "continent": _0x2add6f.continentCN || _0x2add6f.continentEN || "",
            "country": _0x2add6f.countryCN || _0x2add6f.countryEN || "",
            "zone": _0x2add6f.zoneCN || _0x2add6f.zoneEN || "",
            "province": _0x2add6f.provinceCN || _0x2add6f.provinceEN || "",
            "city": _0x2add6f.cityCN || _0x2add6f.cityEN || "",
            "county": _0x2add6f.countyCN || _0x2add6f.countyEN || "",
            "town": _0x2add6f.townCN || _0x2add6f.townEN || "",
            "isp": _0x2add6f.ispCN || _0x2add6f.ispEN || "",
            "latitude": _0x2add6f.latitude || "",
            "longitude": _0x2add6f.longitude || "",
            "overseasRegion": _0x2add6f.overseasRegion || false
          },
          _0x837b45 = [];
        if (_0x527983.continent && _0x527983.continent !== "*") _0x837b45.push(_0x527983.continent);
        if (_0x527983.country && _0x527983.country !== "*" && _0x527983.country !== _0x527983.continent) _0x837b45.push(_0x527983.country);
        if (_0x527983.zone && _0x527983.zone !== "*") _0x837b45.push(_0x527983.zone);
        if (_0x527983.province && _0x527983.province !== "*") _0x837b45.push(_0x527983.province);
        if (_0x527983.city && _0x527983.city !== "*") _0x837b45.push(_0x527983.city);
        if (_0x527983.county && _0x527983.county !== "*") _0x837b45.push(_0x527983.county);
        if (_0x527983.town && _0x527983.town !== "*") _0x837b45.push(_0x527983.town);
        let _0x58a212 = _0x837b45.length > 0 ? _0x837b45.join("|") : "未知地区";
        if (_0x527983.isp && _0x527983.isp !== "*") {
          _0x58a212 += "|" + _0x527983.isp;
        }
        if (_0x527983.overseasRegion && _0x837b45.length > 0) {
          _0x90689b("检测到可能的VPN连接: " + _0x3da120 + " -> " + _0x58a212, "debug");
        }
        _0x31ffef(null, _0x58a212, _0x527983);
      }
    } catch (_0x17940c) {
      _0x31ffef(new Error("IP地址查询失败:解析JSON出错 - " + _0x17940c.message));
    }
  });
}
function _0x1566a6(_0x197dc7) {
  if (!_0x197dc7) return "未知系统";
  switch (String(_0x197dc7).toLowerCase()) {
    case "android":
      return "安卓";
    case "ios":
      return "iOS";
    case "windows":
      return "Windows";
    case "macos":
      return "MacOS";
    case "mac":
      return "MacOS";
    case "linux":
      return "Linux";
    case "xbox":
      return "Xbox";
    case "playstation":
      return "PlayStation";
    case "nintendo":
      return "Switch";
    default:
      return _0x197dc7;
  }
}
function _0x4db33e(_0xfa8dbb, _0x5ef4f0) {
  const _0x854f8b = String(_0x5ef4f0 || "").toLowerCase();
  if (_0x854f8b.includes("android")) return "安卓设备";
  if (_0x854f8b.includes("ios")) return "iOS设备";
  if (_0x854f8b.includes("windows") || _0x854f8b === "uwp") return "Windows设备";
  if (_0x854f8b.includes("macos") || _0x854f8b === "mac") return "MacOS设备";
  if (_0x854f8b.includes("linux")) return "Linux设备";
  if (_0x854f8b.includes("xbox")) return "Xbox主机";
  if (_0x854f8b.includes("playstation") || _0x854f8b.includes("ps")) return "PlayStation主机";
  if (_0x854f8b.includes("nintendo") || _0x854f8b.includes("switch")) return "Nintendo Switch";
  if (_0x854f8b.includes("google")) return "安卓设备";
  return _0x854f8b || "未知设备";
}
mc.listen("onJoin", _0x82dea6 => {
  const _0x35d44 = _0x82dea6.xuid || "NO_XUID";
  let _0x57e2c2 = _0x1b008c(_0x35d44);
  const _0x536f15 = Date.now();
  !_0x57e2c2.firstJoin && (_0x57e2c2.firstJoin = _0x536f15, _0x57e2c2.firstJoinStr = _0x309804(_0x536f15));
  _0x57e2c2.count++;
  let _0xfde222 = _0x57e2c2.lastJoin,
    _0x385aa1 = _0x57e2c2.lastJoinStr,
    _0x23ff23 = _0x57e2c2.totalPlayMins || 0;
  _0x57e2c2.lastJoin = _0x536f15;
  _0x57e2c2.lastJoinStr = _0x309804(_0x536f15);
  const _0x530a09 = _0x82dea6.getDevice();
  let _0x3bcd32 = _0x530a09.ip || "0.0.0.0:0",
    _0x3e1c28;
  if (_0x3bcd32.includes(":")) _0x3e1c28 = _0x3bcd32.split(":")[0];else _0x3bcd32.includes("|") ? _0x3e1c28 = _0x3bcd32.split("|")[0] : _0x3e1c28 = _0x3bcd32;
  _0x90689b("获取到玩家IP地址: " + _0x3bcd32 + " -> " + _0x3e1c28, "debug");
  _0x57e2c2.lastDeviceOS = _0x530a09.os || "未知";
  _0x57e2c2.lastDeviceName = _0x4db33e(_0x530a09.inputMode, _0x530a09.os);
  _0x57e2c2.lastIP = _0x3e1c28;
  _0x4c780f(_0x35d44, _0x57e2c2);
  _0x433408[_0x35d44] = _0x536f15;
  const _0x552b1c = _0x4eeabc.boldText ? "§l" : "";
  _0x406029(_0x3e1c28, (_0x539b6f, _0x5d96d6, _0x433cb9) => {
    let _0x345e11 = _0x5d96d6 || "未知地区",
      _0x2b740b = "";
    if (_0x539b6f) _0xe0bafd(_0x539b6f.message || "IP地址查询失败");else {
      if (_0x433cb9) {
        {
          let _0xc52446 = [];
          if (_0x433cb9.continent && _0x433cb9.continent !== "*") _0xc52446.push("洲:" + _0x433cb9.continent);
          if (_0x433cb9.country && _0x433cb9.country !== "*") _0xc52446.push("国家:" + _0x433cb9.country);
          if (_0x433cb9.zone && _0x433cb9.zone !== "*") _0xc52446.push("区域:" + _0x433cb9.zone);
          if (_0x433cb9.province && _0x433cb9.province !== "*") _0xc52446.push("省/州:" + _0x433cb9.province);
          if (_0x433cb9.city && _0x433cb9.city !== "*") _0xc52446.push("市/城市:" + _0x433cb9.city);
          if (_0x433cb9.county && _0x433cb9.county !== "*") _0xc52446.push("县/区:" + _0x433cb9.county);
          if (_0x433cb9.town && _0x433cb9.town !== "*") _0xc52446.push("镇:" + _0x433cb9.town);
          if (_0x433cb9.isp && _0x433cb9.isp !== "*") _0xc52446.push("网络:" + _0x433cb9.isp);
          _0x90689b("地理数据: " + JSON.stringify(_0x433cb9), "debug");
          _0x2b740b = _0xc52446.join(" | ");
          _0x57e2c2.detailedGeo = _0x2b740b;
          _0x4c780f(_0x35d44, _0x57e2c2);
        }
      }
    }
    let _0x24b308 = _0x82dea6.realName,
      _0x247868 = _0x57e2c2.count,
      _0x1fa296 = _0x385aa1 || "无记录",
      _0x4f2cd3 = _0x1d989c(_0xfde222),
      _0x18c4ae = _0x23ff23 || 0,
      {
        hours: _0x232fbc,
        remainingMinutes: _0x33e9e1
      } = _0x3b4e3c(_0x18c4ae),
      _0x410ffa = _0x57e2c2.lastDeviceName,
      _0x2c260d = _0x1566a6(_0x530a09.os);
    const _0x4dad9 = {
      "player": _0x24b308,
      "realname": _0x24b308,
      "region": _0x345e11,
      "count": _0x247868,
      "lastTime": _0x1fa296,
      "lastTimeAgo": _0x4f2cd3,
      "minutes": _0x18c4ae,
      "hours": _0x232fbc,
      "remainMinutes": _0x33e9e1,
      "device": _0x410ffa,
      "os": _0x2c260d,
      "server": _0x4eeabc.serverName,
      "ip": _0x3e1c28,
      "detailedGeo": _0x2b740b
    };
    _0x90689b("玩家 " + _0x24b308 + " 加入游戏 (第" + _0x247868 + "次) - 来自 " + _0x345e11, "debug");
    if ((_0x4eeabc.displayMode === "toast" || _0x4eeabc.displayMode === "both") && _0x4eeabc.toastEnabled) {
      let _0x40146e = _0x552b1c + _0x2cefe7(_0x4eeabc.toastTemplates.line1, _0x4dad9),
        _0x59504a = _0x552b1c + _0x2cefe7(_0x4eeabc.toastTemplates.line2, _0x4dad9),
        _0x5271a4 = mc.getOnlinePlayers();
      for (let _0x5b3cc1 of _0x5271a4) {
        _0x5b3cc1.sendToast(_0x40146e, _0x59504a);
      }
    }
    if ((_0x4eeabc.displayMode === "chat" || _0x4eeabc.displayMode === "both") && _0x4eeabc.chatEnabled) {
      {
        let _0x19c076 = _0x4eeabc.chatTemplates;
        typeof _0x19c076 === "string" && (_0x19c076 = [_0x19c076]);
        let _0x201db6 = [];
        for (let _0x4c7800 = 0; _0x4c7800 < _0x19c076.length; _0x4c7800++) {
          let _0x39b2e5 = _0x19c076[_0x4c7800];
          if (_0x39b2e5.includes("%region%") && !_0x4eeabc.displayItems.showRegion || (_0x39b2e5.includes("%device%") || _0x39b2e5.includes("%os%")) && !_0x4eeabc.displayItems.showDevice || _0x39b2e5.includes("%count%") && !_0x4eeabc.displayItems.showCount || (_0x39b2e5.includes("%lastTime%") || _0x39b2e5.includes("%lastTimeAgo%")) && !_0x4eeabc.displayItems.showLastTime || (_0x39b2e5.includes("%hours%") || _0x39b2e5.includes("%minutes%") || _0x39b2e5.includes("%remainMinutes%")) && !_0x4eeabc.displayItems.showPlayTime || _0x39b2e5.includes("%os%") && !_0x4eeabc.displayItems.showOSInfo || _0x39b2e5.includes("%ip%") && !_0x4eeabc.displayItems.showIPAddress || _0x39b2e5.includes("%detailedGeo%") && !_0x4eeabc.displayItems.showDetailedGeo) {
            {
              if (_0x4c7800 > 0) continue;
            }
          }
          _0x201db6.push(_0x39b2e5);
        }
        _0x2b740b && _0x201db6.push("§3➥ §f详细位置: §3" + _0x2b740b);
        for (let _0x25c121 of _0x201db6) {
          let _0x4dc9a3 = _0x552b1c + _0x2cefe7(_0x25c121, _0x4dad9);
          mc.broadcast(_0x4dc9a3, 0);
        }
      }
    }
  });
});
mc.listen("onLeft", _0x184667 => {
  let _0x494dc3 = _0x184667.xuid || "NO_XUID",
    _0x598557 = _0x433408[_0x494dc3];
  if (!_0x598557) return;
  let _0x31bd1b = Date.now() - _0x598557;
  if (_0x31bd1b < 0) _0x31bd1b = 0;
  let _0x20629a = Math.floor(_0x31bd1b / 60000),
    _0x4e8c67 = _0x1b008c(_0x494dc3);
  _0x4e8c67.totalPlayMins += _0x20629a;
  _0x4c780f(_0x494dc3, _0x4e8c67);
  delete _0x433408[_0x494dc3];
  _0x90689b("玩家 " + _0x184667.realName + " 离开游戏 - 本次游玩 " + _0x20629a + " 分钟", "debug");
});
function _0x36ad72() {
  File.writeTo(_0x1edffa, JSON.stringify(_0x4eeabc, null, 4));
}
function _0x2f4d81(_0x256542) {
  const _0x320d94 = _0x4eeabc.colorTheme,
    _0x107b3b = _0x4eeabc.boldText ? "§l" : "",
    _0x58a53e = mc.newSimpleForm();
  _0x58a53e.setTitle("" + _0x320d94.title + _0x107b3b + "JoinWelcome 插件设置");
  _0x58a53e.setContent("" + _0x320d94.info + _0x107b3b + "欢迎使用 JoinWelcome 插件设置界面！\n" + _0x320d94.secondary + "请选择要进行的操作：");
  _0x58a53e.addButton("" + _0x320d94.primary + _0x107b3b + "基础显示设置\n" + _0x320d94.info + "修改显示模式与开关");
  _0x58a53e.addButton("" + _0x320d94.primary + _0x107b3b + "Toast提示设置\n" + _0x320d94.info + "编辑顶部弹出提示");
  _0x58a53e.addButton("" + _0x320d94.primary + _0x107b3b + "聊天消息设置\n" + _0x320d94.info + "编辑聊天栏提示");
  _0x58a53e.addButton("" + _0x320d94.primary + _0x107b3b + "显示内容选项\n" + _0x320d94.info + "选择显示哪些信息");
  _0x58a53e.addButton("" + _0x320d94.primary + _0x107b3b + "IP查询设置\n" + _0x320d94.info + "地区查询相关选项");
  _0x58a53e.addButton("" + _0x320d94.primary + _0x107b3b + "玩家加入记录\n" + _0x320d94.info + "查看与搜索玩家数据");
  _0x58a53e.addButton("" + _0x320d94.primary + _0x107b3b + "颜色与样式设置\n" + _0x320d94.info + "修改界面颜色与文字样式");
  _0x58a53e.addButton("" + _0x320d94.primary + _0x107b3b + "重载配置文件\n" + _0x320d94.info + "从磁盘重新加载配置");
  _0x256542.sendForm(_0x58a53e, (_0x3f0246, _0x2e0413) => {
    if (_0x2e0413 === null) return;
    switch (_0x2e0413) {
      case 0:
        _0x217459(_0x3f0246);
        break;
      case 1:
        _0xb82d0d(_0x3f0246);
        break;
      case 2:
        _0x19458c(_0x3f0246);
        break;
      case 3:
        _0x11bf40(_0x3f0246);
        break;
      case 4:
        _0x4fef44(_0x3f0246);
        break;
      case 5:
        _0x145ca1(_0x3f0246);
        break;
      case 6:
        _0x2597d6(_0x3f0246);
        break;
      case 7:
        try {
          let _0x5667a3 = File.readFrom(_0x1edffa);
          _0x4eeabc = JSON.parse(_0x5667a3);
          _0x3f0246.tell("" + _0x4eeabc.colorTheme.primary + _0x107b3b + "[" + _0x1fb88f + "] " + _0x4eeabc.colorTheme.secondary + "配置文件已重新加载！");
        } catch (_0x4c06c2) {
          _0x3f0246.tell("" + _0x4eeabc.colorTheme.primary + _0x107b3b + "[" + _0x1fb88f + "] §c重新加载配置文件失败: " + _0x4c06c2.message);
        }
        setTimeout(() => _0x2f4d81(_0x3f0246), 1000);
        break;
    }
  });
}
function _0x217459(_0x589ac9) {
  const _0x26c927 = _0x4eeabc.colorTheme,
    _0x20d090 = mc.newCustomForm();
  _0x20d090.setTitle(_0x26c927.title + "基础显示设置");
  _0x20d090.addDropdown(_0x26c927.primary + "选择显示模式", [_0x26c927.info + "仅Toast提示", _0x26c927.info + "仅聊天消息", _0x26c927.info + "同时显示两种"], _0x4eeabc.displayMode === "toast" ? 0 : _0x4eeabc.displayMode === "chat" ? 1 : 2);
  _0x20d090.addSwitch(_0x26c927.primary + "启用Toast提示", _0x4eeabc.toastEnabled);
  _0x20d090.addSwitch(_0x26c927.primary + "启用聊天消息", _0x4eeabc.chatEnabled);
  _0x20d090.addInput(_0x26c927.primary + "服务器名称", _0x26c927.info + "输入服务器名称", _0x4eeabc.serverName);
  _0x589ac9.sendForm(_0x20d090, (_0x33338b, _0x2bc6a8) => {
    if (!_0x2bc6a8) {
      _0x2f4d81(_0x33338b);
      return;
    }
    const _0x143a59 = ["toast", "chat", "both"];
    _0x4eeabc.displayMode = _0x143a59[_0x2bc6a8[0]];
    _0x4eeabc.toastEnabled = _0x2bc6a8[1];
    _0x4eeabc.chatEnabled = _0x2bc6a8[2];
    _0x4eeabc.serverName = _0x2bc6a8[3];
    _0x36ad72();
    _0x33338b.tell(_0x26c927.primary + "[" + _0x1fb88f + "] " + _0x26c927.secondary + "基础设置已保存！");
    setTimeout(() => _0x2f4d81(_0x33338b), 1000);
  });
}
function _0xb82d0d(_0x4a5786) {
  const _0x308578 = _0x4eeabc.colorTheme,
    _0x24449a = _0x4eeabc.boldText ? "§l" : "",
    _0x2a270f = mc.newCustomForm();
  _0x2a270f.setTitle("" + _0x308578.title + _0x24449a + "Toast提示设置");
  if (!_0x4eeabc.toastTemplates) {
    _0x4eeabc.toastTemplates = {
      "line1": _0x4eeabc.toastLine1 || "§b欢迎来自(§e%region%§b)的§a%player% §f第§6%count%§f次进入游戏",
      "line2": _0x4eeabc.toastLine2 || "§e上次离开: §f%lastTime%, §a游玩时长: §f%hours%小时%remainMinutes%分钟"
    };
  }
  _0x2a270f.addSwitch("" + _0x308578.primary + _0x24449a + "启用Toast提示", _0x4eeabc.toastEnabled);
  _0x2a270f.addLabel("" + _0x308578.secondary + _0x24449a + "【Toast第一行】内容设置");
  const _0x388a3d = {
      "prefix": "§b欢迎来自(",
      "region": "§e%region%",
      "middle": "§b)的",
      "player": "§a%player%",
      "suffix": "§f第§6%count%§f次进入游戏"
    },
    _0x50946c = _0x426451(_0x4eeabc.toastTemplates.line1, _0x388a3d);
  _0x2a270f.addInput(_0x308578.info + "前缀文本", "输入前缀文本", _0x50946c.prefix);
  _0x2a270f.addInput(_0x308578.info + "地区变量样式", "输入地区变量样式", _0x50946c.region);
  _0x2a270f.addInput(_0x308578.info + "中间文本", "输入中间文本", _0x50946c.middle);
  _0x2a270f.addInput(_0x308578.info + "玩家名变量样式", "输入玩家名变量样式", _0x50946c.player);
  _0x2a270f.addInput(_0x308578.info + "后缀文本", "输入后缀文本", _0x50946c.suffix);
  _0x2a270f.addLabel("" + _0x308578.secondary + _0x24449a + "【Toast第二行】内容设置");
  const _0x27ac60 = {
      "lastTimePrefix": "§e上次离开: ",
      "lastTime": "§f%lastTime%",
      "middle": ", ",
      "playTimePrefix": "§a游玩时长: ",
      "hours": "§f%hours%",
      "hoursSuffix": "小时",
      "minutes": "§f%remainMinutes%",
      "minutesSuffix": "分钟"
    },
    _0x271a2f = _0x224949(_0x4eeabc.toastTemplates.line2, _0x27ac60);
  _0x2a270f.addInput(_0x308578.info + "上次离开前缀", "输入上次离开前缀", _0x271a2f.lastTimePrefix);
  _0x2a270f.addInput(_0x308578.info + "上次时间变量样式", "输入上次时间变量样式", _0x271a2f.lastTime);
  _0x2a270f.addInput(_0x308578.info + "中间分隔符", "输入中间分隔符", _0x271a2f.middle);
  _0x2a270f.addInput(_0x308578.info + "游玩时长前缀", "输入游玩时长前缀", _0x271a2f.playTimePrefix);
  _0x2a270f.addInput(_0x308578.info + "小时变量样式", "输入小时变量样式", _0x271a2f.hours);
  _0x2a270f.addInput(_0x308578.info + "小时后缀", "输入小时后缀", _0x271a2f.hoursSuffix);
  _0x2a270f.addInput(_0x308578.info + "分钟变量样式", "输入分钟变量样式", _0x271a2f.minutes);
  _0x2a270f.addInput(_0x308578.info + "分钟后缀", "输入分钟后缀", _0x271a2f.minutesSuffix);
  _0x4a5786.sendForm(_0x2a270f, (_0x1179f4, _0x59f007) => {
    if (!_0x59f007) {
      {
        _0x2f4d81(_0x1179f4);
        return;
      }
    }
    _0x4eeabc.toastEnabled = _0x59f007[0];
    const _0x1cd820 = _0x59f007[2] + _0x59f007[3] + _0x59f007[4] + _0x59f007[5] + _0x59f007[6],
      _0x42cfcd = _0x59f007[8] + _0x59f007[9] + _0x59f007[10] + _0x59f007[11] + _0x59f007[12] + _0x59f007[13] + _0x59f007[14] + _0x59f007[15];
    !_0x4eeabc.toastTemplates && (_0x4eeabc.toastTemplates = {});
    _0x4eeabc.toastTemplates.line1 = _0x1cd820;
    _0x4eeabc.toastTemplates.line2 = _0x42cfcd;
    _0x36ad72();
    _0x1179f4.tell("" + _0x308578.primary + _0x24449a + "[" + _0x1fb88f + "] " + _0x308578.secondary + "Toast设置已保存！");
    setTimeout(() => _0x2f4d81(_0x1179f4), 1000);
  });
}
function _0x426451(_0x23977e, _0x587b68) {
  let _0x254b73 = {
    ..._0x587b68
  };
  try {
    {
      const _0x20fd32 = /(%region%)/,
        _0x59ca45 = /(%player%)/,
        _0x5f1bd8 = _0x23977e.match(_0x20fd32),
        _0x2f56ab = _0x23977e.match(_0x59ca45);
      if (_0x5f1bd8 && _0x5f1bd8.index !== undefined && _0x2f56ab && _0x2f56ab.index !== undefined) {
        const _0x3b987a = _0x5f1bd8.index,
          _0x166326 = _0x2f56ab.index;
        if (_0x3b987a < _0x166326) {
          const _0x393cf0 = /§[0-9a-fklmnor]/g;
          let _0x1976e1 = _0x23977e.substring(0, _0x3b987a),
            _0x3cbbb8 = null,
            _0x317820 = [..._0x1976e1.matchAll(_0x393cf0)];
          _0x317820.length > 0 && (_0x3cbbb8 = _0x317820[_0x317820.length - 1]);
          _0x254b73.prefix = _0x1976e1;
          const _0x48edf8 = _0x23977e.substring(_0x3b987a, _0x3b987a + 8);
          _0x254b73.region = _0x48edf8;
          const _0x191ff6 = _0x23977e.substring(_0x3b987a + 8, _0x166326);
          _0x254b73.middle = _0x191ff6;
          const _0x213529 = _0x23977e.substring(_0x166326, _0x166326 + 8);
          _0x254b73.player = _0x213529;
          _0x254b73.suffix = _0x23977e.substring(_0x166326 + 8);
        }
      }
    }
  } catch (_0x2acaa0) {
    _0x90689b("解析Toast行失败: " + _0x2acaa0, "warn");
  }
  return _0x254b73;
}
function _0x224949(_0x289cdc, _0x418eda) {
  let _0x32feb2 = {
    ..._0x418eda
  };
  try {
    const _0x1f9c83 = /(%lastTime%)/,
      _0x398dae = /(%hours%)/,
      _0x4ed1c5 = /(%remainMinutes%)/,
      _0x39ff2c = _0x289cdc.match(_0x1f9c83),
      _0x25dc37 = _0x289cdc.match(_0x398dae),
      _0x46543b = _0x289cdc.match(_0x4ed1c5);
    if (_0x39ff2c && _0x39ff2c.index !== undefined && _0x25dc37 && _0x25dc37.index !== undefined && _0x46543b && _0x46543b.index !== undefined) {
      const _0x31271a = _0x39ff2c.index,
        _0x4e7e6d = _0x25dc37.index,
        _0x1add61 = _0x46543b.index;
      if (_0x31271a < _0x4e7e6d && _0x4e7e6d < _0x1add61) {
        {
          _0x32feb2.lastTimePrefix = _0x289cdc.substring(0, _0x31271a);
          _0x32feb2.lastTime = _0x289cdc.substring(_0x31271a, _0x31271a + 10);
          const _0x48c8bc = _0x289cdc.indexOf("游玩时长", _0x31271a + 10);
          _0x48c8bc !== -1 && (_0x32feb2.middle = _0x289cdc.substring(_0x31271a + 10, _0x48c8bc), _0x32feb2.playTimePrefix = _0x289cdc.substring(_0x48c8bc, _0x4e7e6d));
          _0x32feb2.hours = _0x289cdc.substring(_0x4e7e6d, _0x4e7e6d + 7);
          const _0x261912 = _0x1add61;
          if (_0x261912 !== -1) {
            _0x32feb2.hoursSuffix = _0x289cdc.substring(_0x4e7e6d + 7, _0x261912);
          }
          _0x32feb2.minutes = _0x289cdc.substring(_0x1add61, _0x1add61 + 15);
          _0x32feb2.minutesSuffix = _0x289cdc.substring(_0x1add61 + 15);
        }
      }
    }
  } catch (_0x2da640) {
    _0x90689b("解析Toast第二行失败: " + _0x2da640, "warn");
  }
  return _0x32feb2;
}
function _0x19458c(_0xad6fa) {
  const _0x438dba = _0x4eeabc.colorTheme,
    _0x419c72 = _0x4eeabc.boldText ? "§l" : "",
    _0x137455 = mc.newCustomForm();
  _0x137455.setTitle("" + _0x438dba.title + _0x419c72 + "聊天消息设置");
  !_0x4eeabc.chatTemplates && (_0x4eeabc.chatTemplates = _0x4eeabc.chatFormat || ["§8[§6%server%§8] §a欢迎玩家 §e%player% §a加入游戏!", "§3➥ §f来自: §b%region%", "§3➥ §f设备: §d%device% §8(§3%os%§8)", "§3➥ §f第 §e%count% §f次进入", "§3➥ §f上次离开: §e%lastTime%", "§3➥ §f总游玩时长: §a%hours%§f小时§a%remainMinutes%§f分钟"]);
  _0x137455.addSwitch("" + _0x438dba.primary + _0x419c72 + "启用聊天消息", _0x4eeabc.chatEnabled);
  _0x137455.addLabel("" + _0x438dba.secondary + _0x419c72 + "【聊天消息】样式设置");
  _0x137455.addInput(_0x438dba.info + "欢迎标题", "输入欢迎标题行", _0x4eeabc.chatTemplates[0] || "");
  const _0x3539d3 = _0x4eeabc.chatTemplates[1] || "§3➥ §f来自: §b%region%",
    _0xea3352 = _0x4eeabc.chatTemplates[2] || "§3➥ §f设备: §d%device% §8(§3%os%§8)",
    _0x53869b = _0x4eeabc.chatTemplates[3] || "§3➥ §f第 §e%count% §f次进入",
    _0x34f362 = _0x4eeabc.chatTemplates[4] || "§3➥ §f上次离开: §e%lastTime%",
    _0x8dcc42 = _0x4eeabc.chatTemplates[5] || "§3➥ §f总游玩时长: §a%hours%§f小时§a%remainMinutes%§f分钟",
    _0x4b2551 = _0x37fada(_0x3539d3, "来自:", "%region%"),
    _0x58521c = _0x35260b(_0xea3352),
    _0x510440 = _0x37fada(_0x53869b, "第", "%count%", "次进入"),
    _0x5c9b47 = _0x37fada(_0x34f362, "上次离开:", "%lastTime%"),
    _0x484835 = _0x3144a0(_0x8dcc42);
  _0x137455.addLabel("" + _0x438dba.secondary + _0x419c72 + "【地区信息】行设置");
  _0x137455.addInput(_0x438dba.info + "前缀", "输入前缀", _0x4b2551.prefix);
  _0x137455.addInput(_0x438dba.info + "标签文本", "输入标签文本", _0x4b2551.label);
  _0x137455.addInput(_0x438dba.info + "变量样式", "输入变量样式", _0x4b2551.variable);
  _0x137455.addLabel("" + _0x438dba.secondary + _0x419c72 + "【设备信息】行设置");
  _0x137455.addInput(_0x438dba.info + "前缀", "输入前缀", _0x58521c.prefix);
  _0x137455.addInput(_0x438dba.info + "标签文本", "输入标签文本", _0x58521c.label);
  _0x137455.addInput(_0x438dba.info + "设备变量样式", "输入设备变量样式", _0x58521c.device);
  _0x137455.addInput(_0x438dba.info + "系统标记", "输入系统标记", _0x58521c.osWrapper);
  _0x137455.addInput(_0x438dba.info + "系统变量样式", "输入系统变量样式", _0x58521c.os);
  _0x137455.addLabel("" + _0x438dba.secondary + _0x419c72 + "【加入次数】行设置");
  _0x137455.addInput(_0x438dba.info + "前缀", "输入前缀", _0x510440.prefix);
  _0x137455.addInput(_0x438dba.info + "标签文本", "输入标签文本", _0x510440.label);
  _0x137455.addInput(_0x438dba.info + "变量样式", "输入变量样式", _0x510440.variable);
  _0x137455.addInput(_0x438dba.info + "后缀", "输入后缀", _0x510440.suffix);
  _0x137455.addLabel("" + _0x438dba.secondary + _0x419c72 + "【上次时间】行设置");
  _0x137455.addInput(_0x438dba.info + "前缀", "输入前缀", _0x5c9b47.prefix);
  _0x137455.addInput(_0x438dba.info + "标签文本", "输入标签文本", _0x5c9b47.label);
  _0x137455.addInput(_0x438dba.info + "变量样式", "输入变量样式", _0x5c9b47.variable);
  _0x137455.addLabel("" + _0x438dba.secondary + _0x419c72 + "【游玩时长】行设置");
  _0x137455.addInput(_0x438dba.info + "前缀", "输入前缀", _0x484835.prefix);
  _0x137455.addInput(_0x438dba.info + "标签文本", "输入标签文本", _0x484835.label);
  _0x137455.addInput(_0x438dba.info + "小时变量样式", "输入小时变量样式", _0x484835.hours);
  _0x137455.addInput(_0x438dba.info + "小时单位", "输入小时单位", _0x484835.hoursSuffix);
  _0x137455.addInput(_0x438dba.info + "分钟变量样式", "输入分钟变量样式", _0x484835.minutes);
  _0x137455.addInput(_0x438dba.info + "分钟单位", "输入分钟单位", _0x484835.minutesSuffix);
  _0xad6fa.sendForm(_0x137455, (_0x5dfc7b, _0x33eb6f) => {
    {
      if (!_0x33eb6f) {
        _0x2f4d81(_0x5dfc7b);
        return;
      }
      _0x4eeabc.chatEnabled = _0x33eb6f[0];
      const _0x5a328d = _0x33eb6f[2],
        _0x192f95 = _0x33eb6f[4] + _0x33eb6f[5] + _0x33eb6f[6],
        _0x1b0559 = _0x33eb6f[8] + _0x33eb6f[9] + _0x33eb6f[10] + _0x33eb6f[11] + _0x33eb6f[12],
        _0x1c0556 = _0x33eb6f[14] + _0x33eb6f[15] + _0x33eb6f[16] + _0x33eb6f[17],
        _0x3d581b = _0x33eb6f[19] + _0x33eb6f[20] + _0x33eb6f[21],
        _0x467af7 = _0x33eb6f[23] + _0x33eb6f[24] + _0x33eb6f[25] + _0x33eb6f[26] + _0x33eb6f[27] + _0x33eb6f[28];
      _0x4eeabc.chatTemplates = [_0x5a328d, _0x192f95, _0x1b0559, _0x1c0556, _0x3d581b, _0x467af7];
      _0x36ad72();
      _0x5dfc7b.tell("" + _0x438dba.primary + _0x419c72 + "[" + _0x1fb88f + "] " + _0x438dba.secondary + "聊天消息设置已保存！");
      setTimeout(() => _0x2f4d81(_0x5dfc7b), 1000);
    }
  });
}
function _0x37fada(_0x1be8ef, _0x4edb48, _0x26543c, _0x11a12b = "") {
  const _0x545865 = {
    "prefix": "§3➥ §f",
    "label": _0x4edb48,
    "variable": "§b" + _0x26543c,
    "suffix": _0x11a12b
  };
  try {
    const _0x39127c = new RegExp(_0x26543c.replace(/%/g, "\\%")),
      _0x2576b1 = _0x1be8ef.match(_0x39127c);
    if (_0x2576b1 && _0x2576b1.index !== undefined) {
      const _0x3796c6 = _0x2576b1.index,
        _0x24e0d6 = _0x1be8ef.indexOf(_0x4edb48);
      _0x24e0d6 !== -1 && _0x24e0d6 < _0x3796c6 && (_0x545865.prefix = _0x1be8ef.substring(0, _0x24e0d6), _0x545865.label = _0x1be8ef.substring(_0x24e0d6, _0x3796c6), _0x545865.variable = _0x1be8ef.substring(_0x3796c6, _0x3796c6 + _0x26543c.length), _0x545865.suffix = _0x1be8ef.substring(_0x3796c6 + _0x26543c.length));
    }
  } catch (_0xe85c1a) {
    _0x90689b("解析简单行失败: " + _0xe85c1a, "warn");
  }
  return _0x545865;
}
function _0x35260b(_0x33e8bc) {
  const _0x4ab7cc = {
    "prefix": "§3➥ §f",
    "label": "设备:",
    "device": "§d%device%",
    "osWrapper": "§8(§3",
    "os": "%os%§8)"
  };
  try {
    {
      const _0x2ff789 = /(%device%)/,
        _0x7e7d46 = /(%os%)/,
        _0x239f50 = _0x33e8bc.match(_0x2ff789),
        _0x4548d0 = _0x33e8bc.match(_0x7e7d46);
      if (_0x239f50 && _0x239f50.index !== undefined && _0x4548d0 && _0x4548d0.index !== undefined) {
        const _0x3b7562 = _0x239f50.index,
          _0x24831f = _0x4548d0.index;
        if (_0x3b7562 < _0x24831f) {
          const _0x3edcd5 = "设备:",
            _0x1760ab = _0x33e8bc.indexOf(_0x3edcd5);
          if (_0x1760ab !== -1 && _0x1760ab < _0x3b7562) {
            _0x4ab7cc.prefix = _0x33e8bc.substring(0, _0x1760ab);
            _0x4ab7cc.label = _0x33e8bc.substring(_0x1760ab, _0x3b7562);
            _0x4ab7cc.device = _0x33e8bc.substring(_0x3b7562, _0x3b7562 + 8);
            const _0x16624e = _0x33e8bc.substring(_0x3b7562 + 8, _0x24831f);
            _0x4ab7cc.osWrapper = _0x16624e;
            _0x4ab7cc.os = _0x33e8bc.substring(_0x24831f, _0x24831f + 4);
            const _0x771551 = _0x33e8bc.substring(_0x24831f + 4);
            _0x771551 && (_0x4ab7cc.os += _0x771551);
          }
        }
      }
    }
  } catch (_0x11c400) {
    _0x90689b("解析设备行失败: " + _0x11c400, "warn");
  }
  return _0x4ab7cc;
}
function _0x3144a0(_0xa34d7f) {
  const _0x29c06a = {
    "prefix": "§3➥ §f",
    "label": "总游玩时长:",
    "hours": "§a%hours%",
    "hoursSuffix": "§f小时",
    "minutes": "§a%remainMinutes%",
    "minutesSuffix": "§f分钟"
  };
  try {
    {
      const _0x3dcd37 = /(%hours%)/,
        _0x4c68b4 = /(%remainMinutes%)/,
        _0x50b44e = _0xa34d7f.match(_0x3dcd37),
        _0x2b7c09 = _0xa34d7f.match(_0x4c68b4);
      if (_0x50b44e && _0x50b44e.index !== undefined && _0x2b7c09 && _0x2b7c09.index !== undefined) {
        const _0x583719 = _0x50b44e.index,
          _0x577eb9 = _0x2b7c09.index;
        if (_0x583719 < _0x577eb9) {
          const _0x25c346 = "总游玩时长:",
            _0xe27c29 = _0xa34d7f.indexOf(_0x25c346);
          _0xe27c29 !== -1 && _0xe27c29 < _0x583719 && (_0x29c06a.prefix = _0xa34d7f.substring(0, _0xe27c29), _0x29c06a.label = _0xa34d7f.substring(_0xe27c29, _0x583719), _0x29c06a.hours = _0xa34d7f.substring(_0x583719, _0x583719 + 7), _0x29c06a.hoursSuffix = _0xa34d7f.substring(_0x583719 + 7, _0x577eb9), _0x29c06a.minutes = _0xa34d7f.substring(_0x577eb9, _0x577eb9 + 15), _0x29c06a.minutesSuffix = _0xa34d7f.substring(_0x577eb9 + 15));
        }
      }
    }
  } catch (_0xb1a31b) {
    _0x90689b("解析游玩时长行失败: " + _0xb1a31b, "warn");
  }
  return _0x29c06a;
}
function _0x11bf40(_0x2aed69) {
  const _0x207269 = _0x4eeabc.colorTheme,
    _0x1f0838 = _0x4eeabc.boldText ? "§l" : "",
    _0x4c7a47 = mc.newCustomForm();
  _0x4c7a47.setTitle("" + _0x207269.title + _0x1f0838 + "显示内容选项");
  _0x4c7a47.addSwitch("" + _0x207269.primary + _0x1f0838 + "显示玩家来源地区", _0x4eeabc.displayItems.showRegion);
  _0x4c7a47.addSwitch("" + _0x207269.primary + _0x1f0838 + "显示玩家设备信息", _0x4eeabc.displayItems.showDevice);
  _0x4c7a47.addSwitch("" + _0x207269.primary + _0x1f0838 + "显示玩家加入次数", _0x4eeabc.displayItems.showCount);
  _0x4c7a47.addSwitch("" + _0x207269.primary + _0x1f0838 + "显示上次加入时间", _0x4eeabc.displayItems.showLastTime);
  _0x4c7a47.addSwitch("" + _0x207269.primary + _0x1f0838 + "显示总游玩时长", _0x4eeabc.displayItems.showPlayTime);
  _0x4c7a47.addSwitch("" + _0x207269.primary + _0x1f0838 + "显示操作系统信息", _0x4eeabc.displayItems.showOSInfo);
  _0x4c7a47.addSwitch("" + _0x207269.primary + _0x1f0838 + "显示IP地址信息", _0x4eeabc.displayItems.showIPAddress);
  _0x4c7a47.addSwitch("" + _0x207269.primary + _0x1f0838 + "显示详细地理位置", _0x4eeabc.displayItems.showDetailedGeo);
  _0x2aed69.sendForm(_0x4c7a47, (_0x1d3f65, _0x3fb9f8) => {
    {
      if (!_0x3fb9f8) {
        {
          _0x2f4d81(_0x1d3f65);
          return;
        }
      }
      _0x4eeabc.displayItems.showRegion = _0x3fb9f8[0];
      _0x4eeabc.displayItems.showDevice = _0x3fb9f8[1];
      _0x4eeabc.displayItems.showCount = _0x3fb9f8[2];
      _0x4eeabc.displayItems.showLastTime = _0x3fb9f8[3];
      _0x4eeabc.displayItems.showPlayTime = _0x3fb9f8[4];
      _0x4eeabc.displayItems.showOSInfo = _0x3fb9f8[5];
      _0x4eeabc.displayItems.showIPAddress = _0x3fb9f8[6];
      _0x4eeabc.displayItems.showDetailedGeo = _0x3fb9f8[7];
      _0x36ad72();
      _0x1d3f65.tell("" + _0x207269.primary + _0x1f0838 + "[" + _0x1fb88f + "] " + _0x207269.secondary + "显示内容选项已保存!");
      setTimeout(() => _0x2f4d81(_0x1d3f65), 1000);
    }
  });
}
function _0x4fef44(_0x3dce5d) {
  const _0xb5286 = _0x4eeabc.colorTheme,
    _0x454fa6 = mc.newCustomForm();
  _0x454fa6.setTitle(_0xb5286.title + "IP查询设置");
  _0x454fa6.addSwitch(_0xb5286.primary + "启用IP位置查询", _0x4eeabc.enableIpLookup);
  _0x454fa6.addSlider(_0xb5286.primary + "查询超时时间(秒)", 1, 30, 1, _0x4eeabc.ipQueryTimeout / 1000);
  _0x454fa6.addSwitch(_0xb5286.primary + "调试模式", _0x4eeabc.debug);
  _0x3dce5d.sendForm(_0x454fa6, (_0x1fccfc, _0x399ff0) => {
    if (!_0x399ff0) {
      _0x2f4d81(_0x1fccfc);
      return;
    }
    _0x4eeabc.enableIpLookup = _0x399ff0[0];
    _0x4eeabc.ipQueryTimeout = _0x399ff0[1] * 1000;
    _0x4eeabc.debug = _0x399ff0[2];
    _0x36ad72();
    _0x1fccfc.tell(_0xb5286.primary + "[" + _0x1fb88f + "] " + _0xb5286.secondary + "IP查询设置已保存!");
    setTimeout(() => _0x2f4d81(_0x1fccfc), 1000);
  });
}
function _0x2597d6(_0x4ffb63) {
  const _0x167da5 = _0x4eeabc.colorTheme,
    _0x505195 = mc.newCustomForm();
  _0x505195.setTitle(_0x167da5.title + "颜色与样式设置");
  const _0x29e44c = ["§a浅绿色主题", "§b天蓝色主题", "§e金色主题", "§d紫色主题", "§6橙色主题", "§c红色主题"],
    _0x41ceaa = [{
      "primary": "§a",
      "secondary": "§e",
      "accent": "§b",
      "info": "§f",
      "title": "§2",
      "subtitle": "§3"
    }, {
      "primary": "§b",
      "secondary": "§f",
      "accent": "§d",
      "info": "§3",
      "title": "§9",
      "subtitle": "§5"
    }, {
      "primary": "§e",
      "secondary": "§6",
      "accent": "§f",
      "info": "§3",
      "title": "§g",
      "subtitle": "§6"
    }, {
      "primary": "§d",
      "secondary": "§5",
      "accent": "§e",
      "info": "§f",
      "title": "§5",
      "subtitle": "§9"
    }, {
      "primary": "§6",
      "secondary": "§e",
      "accent": "§c",
      "info": "§f",
      "title": "§6",
      "subtitle": "§4"
    }, {
      "primary": "§c",
      "secondary": "§4",
      "accent": "§e",
      "info": "§f",
      "title": "§4",
      "subtitle": "§6"
    }];
  let _0x43be4b = 0;
  _0x505195.addDropdown(_0x167da5.primary + "选择颜色主题", _0x29e44c, _0x43be4b);
  _0x505195.addSwitch(_0x167da5.primary + "文本加粗 (§l)", _0x4eeabc.boldText || false);
  _0x4ffb63.sendForm(_0x505195, (_0x2284b0, _0xc27523) => {
    if (!_0xc27523) {
      _0x2f4d81(_0x2284b0);
      return;
    }
    const _0x1401ee = _0x41ceaa[_0xc27523[0]];
    Object.assign(_0x4eeabc.colorTheme, _0x1401ee);
    _0x4eeabc.boldText = _0xc27523[1];
    _0x36ad72();
    const _0x2dcb38 = _0x4eeabc.boldText ? "§l" : "",
      _0xd16d45 = _0x4eeabc.colorTheme.primary,
      _0x68b0bf = _0x4eeabc.colorTheme.secondary;
    _0x2284b0.tell("" + _0xd16d45 + _0x2dcb38 + "[" + _0x1fb88f + "] " + _0x68b0bf + "颜色主题设置已保存!");
    setTimeout(() => _0x2f4d81(_0x2284b0), 1000);
  });
}
function _0x145ca1(_0x4d10ea) {
  const _0x30169f = _0x4eeabc.colorTheme,
    _0x2bee82 = mc.newSimpleForm();
  _0x2bee82.setTitle(_0x30169f.title + "玩家加入记录");
  _0x2bee82.setContent(_0x30169f.info + "请选择查看方式：");
  _0x2bee82.addButton(_0x30169f.primary + "浏览所有玩家\n" + _0x30169f.info + "分页查看所有记录");
  _0x2bee82.addButton(_0x30169f.primary + "按名称搜索\n" + _0x30169f.info + "搜索指定玩家");
  _0x2bee82.addButton(_0x30169f.primary + "查看在线玩家\n" + _0x30169f.info + "只显示当前在线的玩家");
  _0x2bee82.addButton(_0x30169f.primary + "活跃玩家排行\n" + _0x30169f.info + "按游玩时间排序");
  _0x2bee82.addButton(_0x30169f.accent + "返回主菜单");
  _0x4d10ea.sendForm(_0x2bee82, (_0x4e214f, _0x1388b9) => {
    if (_0x1388b9 === null) {
      {
        _0x2f4d81(_0x4e214f);
        return;
      }
    }
    switch (_0x1388b9) {
      case 0:
        _0x9f07f4(_0x4e214f, 1);
        break;
      case 1:
        _0x131b3e(_0x4e214f);
        break;
      case 2:
        _0xcd5822(_0x4e214f);
        break;
      case 3:
        _0x19bd54(_0x4e214f);
        break;
      case 4:
        _0x2f4d81(_0x4e214f);
        break;
    }
  });
}
function _0x9f07f4(_0x103fa6, _0x3a0666 = 1) {
  const _0x3759d0 = _0x4eeabc.colorTheme,
    _0x432baa = mc.newSimpleForm();
  _0x432baa.setTitle(_0x3759d0.title + "玩家加入记录 (第" + _0x3a0666 + "页)");
  try {
    const _0x5152af = _0x5e3e27.read(),
      _0x10744d = JSON.parse(_0x5152af);
    let _0x330aea = [];
    for (let _0x5191b5 in _0x10744d) {
      let _0x243463 = _0x10744d[_0x5191b5],
        _0xdb0d62 = data.xuid2name(_0x5191b5) || "未知玩家";
      _0x243463 && _0x243463.count > 0 && _0x330aea.push({
        "name": _0xdb0d62,
        "count": _0x243463.count || 0,
        "xuid": _0x5191b5,
        "info": _0x243463,
        "totalPlayMins": _0x243463.totalPlayMins || 0
      });
    }
    _0x330aea.sort((_0x1275ab, _0x3a770) => _0x3a770.count - _0x1275ab.count);
    const _0x1d7ce2 = _0x330aea.length,
      _0x38521 = Math.ceil(_0x1d7ce2 / _0x4bd735);
    if (_0x3a0666 < 1) _0x3a0666 = 1;
    if (_0x3a0666 > _0x38521 && _0x38521 > 0) _0x3a0666 = _0x38521;
    const _0xed1e6d = (_0x3a0666 - 1) * _0x4bd735,
      _0x1954af = Math.min(_0xed1e6d + _0x4bd735, _0x1d7ce2),
      _0x309305 = _0x330aea.slice(_0xed1e6d, _0x1954af);
    _0x432baa.setContent(_0x3759d0.info + "共有 " + _0x1d7ce2 + " 名玩家记录，当前第 " + _0x3a0666 + "/" + Math.max(_0x38521, 1) + " 页");
    _0x309305.length === 0 && _0x432baa.setContent(_0x3759d0.info + "暂无玩家记录");
    for (let _0x22b340 of _0x309305) {
      const _0x58d0c6 = _0x3b4e3c(_0x22b340.totalPlayMins || 0);
      _0x432baa.addButton("" + _0x3759d0.primary + _0x22b340.name + "\n" + _0x3759d0.info + "加入次数: " + _0x3759d0.secondary + _0x22b340.count + "次 " + _0x3759d0.info + "游玩: " + _0x3759d0.accent + _0x58d0c6.hours + "小时" + _0x58d0c6.remainingMinutes + "分钟");
    }
    _0x38521 > 1 && (_0x432baa.addButton(_0x3759d0.subtitle + "< 上一页 >"), _0x432baa.addButton(_0x3759d0.subtitle + "< 下一页 >"));
    _0x432baa.addButton(_0x3759d0.accent + "返回搜索菜单");
    _0x103fa6.sendForm(_0x432baa, (_0x5cc87c, _0x2916d2) => {
      {
        if (_0x2916d2 === null) {
          _0x145ca1(_0x5cc87c);
          return;
        }
        if (_0x2916d2 >= 0 && _0x2916d2 < _0x309305.length) {
          _0x4fd179(_0x5cc87c, _0x309305[_0x2916d2]);
          return;
        }
        if (_0x38521 > 1) {
          {
            if (_0x2916d2 === _0x309305.length) {
              _0x9f07f4(_0x5cc87c, _0x3a0666 - 1);
              return;
            } else {
              if (_0x2916d2 === _0x309305.length + 1) {
                {
                  _0x9f07f4(_0x5cc87c, _0x3a0666 + 1);
                  return;
                }
              }
            }
          }
        }
        _0x145ca1(_0x5cc87c);
      }
    });
  } catch (_0x541693) {
    _0x432baa.setContent(_0x3759d0.info + "加载玩家数据失败: " + _0x541693.message);
    _0x432baa.addButton(_0x3759d0.accent + "返回搜索菜单");
    _0x103fa6.sendForm(_0x432baa, (_0x2c6688, _0x3f8484) => {
      _0x145ca1(_0x2c6688);
    });
  }
}
function _0x131b3e(_0x5df3af) {
  const _0x3358d0 = _0x4eeabc.colorTheme,
    _0x368b47 = mc.newCustomForm();
  _0x368b47.setTitle(_0x3358d0.title + "玩家名称搜索");
  _0x368b47.addInput(_0x3358d0.primary + "输入玩家名称", _0x3358d0.info + "输入完整或部分名称", "");
  _0x5df3af.sendForm(_0x368b47, (_0x116d37, _0x167e15) => {
    {
      if (!_0x167e15) {
        _0x145ca1(_0x116d37);
        return;
      }
      const _0xfe44c5 = _0x167e15[0].trim().toLowerCase();
      if (!_0xfe44c5) {
        {
          _0x116d37.tell(_0x3358d0.primary + "[" + _0x1fb88f + "] " + _0x3358d0.secondary + "请输入要搜索的玩家名称!");
          setTimeout(() => _0x131b3e(_0x116d37), 1000);
          return;
        }
      }
      _0x3832b7(_0x116d37, _0xfe44c5);
    }
  });
}
function _0x3832b7(_0x303bc3, _0x5f3713) {
  const _0x330a09 = _0x4eeabc.colorTheme,
    _0x3a6bd9 = mc.newSimpleForm();
  _0x3a6bd9.setTitle(_0x330a09.title + "搜索结果: " + _0x5f3713);
  try {
    {
      const _0x1241b4 = _0x5e3e27.read(),
        _0x501ab4 = JSON.parse(_0x1241b4);
      let _0x324b60 = [];
      for (let _0x7f94e in _0x501ab4) {
        {
          const _0x3b3279 = _0x501ab4[_0x7f94e],
            _0x2b4f35 = data.xuid2name(_0x7f94e) || "未知玩家";
          _0x2b4f35.toLowerCase().includes(_0x5f3713.toLowerCase()) && _0x324b60.push({
            "name": _0x2b4f35,
            "count": _0x3b3279.count || 0,
            "xuid": _0x7f94e,
            "info": _0x3b3279,
            "totalPlayMins": _0x3b3279.totalPlayMins || 0
          });
        }
      }
      if (_0x324b60.length === 0) _0x3a6bd9.setContent(_0x330a09.info + "未找到匹配的玩家。");else {
        _0x3a6bd9.setContent(_0x330a09.info + "找到 " + _0x324b60.length + " 个匹配的玩家:");
        _0x324b60.sort((_0x3f88d9, _0x30d1d5) => _0x30d1d5.count - _0x3f88d9.count);
        for (let _0xfb581d of _0x324b60) {
          {
            const _0x2ea630 = _0x3b4e3c(_0xfb581d.totalPlayMins || 0);
            _0x3a6bd9.addButton("" + _0x330a09.primary + _0xfb581d.name + "\n" + _0x330a09.info + "加入次数: " + _0x330a09.secondary + _0xfb581d.count + "次 " + _0x330a09.info + "游玩: " + _0x330a09.accent + _0x2ea630.hours + "小时" + _0x2ea630.remainingMinutes + "分钟");
          }
        }
      }
      _0x3a6bd9.addButton(_0x330a09.subtitle + "重新搜索");
      _0x3a6bd9.addButton(_0x330a09.accent + "返回搜索菜单");
      _0x303bc3.sendForm(_0x3a6bd9, (_0x28f56d, _0x57e68e) => {
        if (_0x57e68e === null) {
          _0x145ca1(_0x28f56d);
          return;
        }
        if (_0x57e68e >= 0 && _0x57e68e < _0x324b60.length) {
          _0x4fd179(_0x28f56d, _0x324b60[_0x57e68e]);
          return;
        }
        if (_0x57e68e === _0x324b60.length) {
          _0x131b3e(_0x28f56d);
        } else _0x145ca1(_0x28f56d);
      });
    }
  } catch (_0x4fa018) {
    _0x3a6bd9.setContent(_0x330a09.info + "搜索玩家失败: " + _0x4fa018.message);
    _0x3a6bd9.addButton(_0x330a09.accent + "返回搜索菜单");
    _0x303bc3.sendForm(_0x3a6bd9, (_0xda1f66, _0x58fed6) => {
      _0x145ca1(_0xda1f66);
    });
  }
}
function _0xcd5822(_0x13eb6f) {
  const _0x18452c = _0x4eeabc.colorTheme,
    _0x332449 = mc.newSimpleForm();
  _0x332449.setTitle(_0x18452c.title + "在线玩家记录");
  const _0x5793c4 = mc.getOnlinePlayers();
  if (_0x5793c4.length === 0) {
    _0x332449.setContent(_0x18452c.info + "当前没有在线玩家。");
  } else {
    {
      _0x332449.setContent(_0x18452c.info + "当前共有 " + _0x5793c4.length + " 名玩家在线:");
      let _0x468d36 = [];
      for (let _0x5a2a3f of _0x5793c4) {
        {
          const _0x33bf7e = _0x5a2a3f.xuid,
            _0x2cc105 = _0x1b008c(_0x33bf7e);
          _0x468d36.push({
            "name": _0x5a2a3f.realName,
            "count": _0x2cc105.count || 0,
            "xuid": _0x33bf7e,
            "info": _0x2cc105,
            "totalPlayMins": _0x2cc105.totalPlayMins || 0
          });
        }
      }
      _0x468d36.sort((_0x4e4302, _0xcfb568) => _0xcfb568.count - _0x4e4302.count);
      for (let _0x140e55 of _0x468d36) {
        const _0x486d25 = _0x3b4e3c(_0x140e55.totalPlayMins || 0);
        _0x332449.addButton("" + _0x18452c.primary + _0x140e55.name + "\n" + _0x18452c.info + "加入次数: " + _0x18452c.secondary + _0x140e55.count + "次 " + _0x18452c.info + "游玩: " + _0x18452c.accent + _0x486d25.hours + "小时" + _0x486d25.remainingMinutes + "分钟");
      }
    }
  }
  _0x332449.addButton(_0x18452c.accent + "返回搜索菜单");
  _0x13eb6f.sendForm(_0x332449, (_0x149f72, _0x182387) => {
    {
      if (_0x182387 === null) {
        _0x145ca1(_0x149f72);
        return;
      }
      const _0x308f60 = _0x5793c4.map(_0x57d494 => {
        const _0xa267bc = _0x57d494.xuid,
          _0x27f350 = _0x1b008c(_0xa267bc);
        return {
          "name": _0x57d494.realName,
          "count": _0x27f350.count || 0,
          "xuid": _0xa267bc,
          "info": _0x27f350,
          "totalPlayMins": _0x27f350.totalPlayMins || 0
        };
      }).sort((_0x1859a3, _0x12b917) => _0x12b917.count - _0x1859a3.count);
      if (_0x182387 >= 0 && _0x182387 < _0x308f60.length) {
        _0x4fd179(_0x149f72, _0x308f60[_0x182387]);
        return;
      }
      _0x145ca1(_0x149f72);
    }
  });
}
function _0x19bd54(_0x3c4c9e) {
  const _0xa110a9 = _0x4eeabc.colorTheme,
    _0x50ff72 = mc.newSimpleForm();
  _0x50ff72.setTitle(_0xa110a9.title + "活跃玩家排行");
  try {
    {
      const _0x1b4284 = _0x5e3e27.read(),
        _0x110f57 = JSON.parse(_0x1b4284);
      let _0x49448b = [];
      for (let _0x5d852f in _0x110f57) {
        {
          let _0x51bc9d = _0x110f57[_0x5d852f],
            _0x3d4c1a = data.xuid2name(_0x5d852f) || "未知玩家";
          _0x51bc9d && _0x51bc9d.totalPlayMins > 0 && _0x49448b.push({
            "name": _0x3d4c1a,
            "count": _0x51bc9d.count || 0,
            "xuid": _0x5d852f,
            "info": _0x51bc9d,
            "totalPlayMins": _0x51bc9d.totalPlayMins || 0
          });
        }
      }
      _0x49448b.sort((_0x355ece, _0x5ee775) => _0x5ee775.totalPlayMins - _0x355ece.totalPlayMins);
      if (_0x49448b.length === 0) _0x50ff72.setContent(_0xa110a9.info + "暂无玩家记录");else {
        _0x50ff72.setContent(_0xa110a9.info + "按游玩时间排序的前 " + Math.min(15, _0x49448b.length) + " 名玩家:");
        const _0x27f303 = _0x49448b.slice(0, 15);
        for (let _0x4ce6be = 0; _0x4ce6be < _0x27f303.length; _0x4ce6be++) {
          const _0xa6a843 = _0x27f303[_0x4ce6be],
            _0x286779 = _0x3b4e3c(_0xa6a843.totalPlayMins),
            _0x631e85 = _0x4ce6be < 3 ? [_0xa110a9.title, _0xa110a9.accent, _0xa110a9.secondary][_0x4ce6be] : _0xa110a9.info;
          _0x50ff72.addButton(_0x631e85 + "#" + (_0x4ce6be + 1) + " " + _0xa110a9.primary + _0xa6a843.name + "\n" + _0xa110a9.info + "游玩: " + _0xa110a9.accent + _0x286779.hours + "小时" + _0x286779.remainingMinutes + "分钟 " + _0xa110a9.info + "加入: " + _0xa110a9.secondary + _0xa6a843.count + "次");
        }
      }
      _0x50ff72.addButton(_0xa110a9.accent + "返回搜索菜单");
      _0x3c4c9e.sendForm(_0x50ff72, (_0x2c4d45, _0x3e350d) => {
        if (_0x3e350d === null) {
          _0x145ca1(_0x2c4d45);
          return;
        }
        _0x49448b.sort((_0xb72132, _0x390369) => _0x390369.totalPlayMins - _0xb72132.totalPlayMins);
        const _0x32eeda = _0x49448b.slice(0, 15);
        if (_0x3e350d >= 0 && _0x3e350d < _0x32eeda.length) {
          _0x4fd179(_0x2c4d45, _0x32eeda[_0x3e350d]);
          return;
        }
        _0x145ca1(_0x2c4d45);
      });
    }
  } catch (_0x3b7d28) {
    _0x50ff72.setContent(_0xa110a9.info + "加载玩家数据失败: " + _0x3b7d28.message);
    _0x50ff72.addButton(_0xa110a9.accent + "返回搜索菜单");
    _0x3c4c9e.sendForm(_0x50ff72, (_0x400df7, _0x465b09) => {
      _0x145ca1(_0x400df7);
    });
  }
}
function _0x4fd179(_0x158e56, _0x270ccd) {
  if (!_0x270ccd) {
    _0x145ca1(_0x158e56);
    return;
  }
  const _0x2cfd88 = _0x4eeabc.colorTheme,
    _0x5dcd24 = mc.newSimpleForm();
  _0x5dcd24.setTitle(_0x2cfd88.title + "玩家详情: " + _0x270ccd.name);
  const _0xb246b3 = _0x270ccd.info || {},
    {
      hours: _0x15a1e1,
      remainingMinutes: _0x34e29e
    } = _0x3b4e3c(_0xb246b3.totalPlayMins || 0),
    _0x11df18 = mc.getPlayer(_0x270ccd.name) !== null;
  let _0x5e1987 = [_0x2cfd88.primary + "玩家: " + _0x2cfd88.title + _0x270ccd.name + " " + (_0x11df18 ? _0x2cfd88.accent + "[在线]" : _0x2cfd88.subtitle + "[离线]"), _0x2cfd88.primary + "XUID: " + _0x2cfd88.info + _0x270ccd.xuid, _0x2cfd88.primary + "首次加入: " + _0x2cfd88.info + (_0xb246b3.firstJoinStr || "无记录"), _0x2cfd88.primary + "最后加入: " + _0x2cfd88.info + (_0xb246b3.lastJoinStr || "无记录"), _0x2cfd88.primary + "总加入次数: " + _0x2cfd88.secondary + (_0xb246b3.count || 0) + " 次", _0x2cfd88.primary + "总游玩时长: " + _0x2cfd88.accent + _0x15a1e1 + "小时" + _0x34e29e + "分钟", _0x2cfd88.primary + "最后使用设备: " + _0x2cfd88.info + (_0xb246b3.lastDeviceName || "未知") + " (" + _0x1566a6(_0xb246b3.lastDeviceOS) + ")"];
  if (_0x4eeabc.displayItems.showIPAddress) {
    _0x5e1987.push(_0x2cfd88.primary + "最后IP地址: " + _0x2cfd88.info + (_0xb246b3.lastIP || "未知"));
  }
  _0x5dcd24.setContent(_0x5e1987.join("\n"));
  _0x11df18 && _0x5dcd24.addButton(_0x2cfd88.primary + "传送到此玩家\n" + _0x2cfd88.info + "立即传送到TA的位置");
  _0x5dcd24.addButton(_0x2cfd88.subtitle + "返回玩家列表");
  _0x5dcd24.addButton(_0x2cfd88.accent + "返回搜索菜单");
  _0x158e56.sendForm(_0x5dcd24, (_0xed68f8, _0x1c11a7) => {
    if (_0x1c11a7 === null) {
      {
        _0x145ca1(_0xed68f8);
        return;
      }
    }
    if (_0x1c11a7 === 0 && _0x11df18) {
      {
        const _0x336ac2 = mc.getPlayer(_0x270ccd.name);
        _0x336ac2 ? (_0xed68f8.teleport(_0x336ac2.pos), _0xed68f8.tell(_0x2cfd88.primary + "[" + _0x1fb88f + "] " + _0x2cfd88.secondary + "已传送到玩家 " + _0x270ccd.name + " 的位置!")) : _0xed68f8.tell(_0x2cfd88.primary + "[" + _0x1fb88f + "] " + _0x2cfd88.subtitle + "玩家 " + _0x270ccd.name + " 已离线，无法传送!");
        setTimeout(() => _0x145ca1(_0xed68f8), 1000);
        return;
      }
    }
    const _0x1ae518 = _0x11df18 ? 1 : 0;
    if (_0x1c11a7 === _0x1ae518) {
      _0x145ca1(_0xed68f8);
    } else _0x145ca1(_0xed68f8);
  });
}
mc.regPlayerCmd("join", "JoinWelcome高级设置", (_0x56be35, _0x5b980f) => {
  if (_0x56be35.permLevel < _0x1e84b0) {
    {
      _0x56be35.tell("§c权限不足，需要管理员权限！");
      return;
    }
  }
  _0x2f4d81(_0x56be35);
}, 0);
mc.regPlayerCmd("joininfo", "查看你的加入统计", (_0x479ab5, _0x41dd6f) => {
  const _0x3969af = _0x4eeabc.colorTheme,
    _0x21dfdb = _0x479ab5.xuid,
    _0x3e511c = _0x1b008c(_0x21dfdb),
    {
      hours: _0x3f056c,
      remainingMinutes: _0x46b6c4
    } = _0x3b4e3c(_0x3e511c.totalPlayMins || 0);
  _0x479ab5.tell(_0x3969af.primary + "[" + _0x1fb88f + "] " + _0x3969af.title + "您的加入统计:");
  _0x479ab5.tell(_0x3969af.info + "您已加入服务器 " + _0x3969af.secondary + (_0x3e511c.count || 0) + " " + _0x3969af.info + "次");
  _0x479ab5.tell(_0x3969af.info + "首次加入时间: " + _0x3969af.accent + (_0x3e511c.firstJoinStr || "未记录"));
  _0x479ab5.tell(_0x3969af.info + "总游玩时长: " + _0x3969af.secondary + _0x3f056c + _0x3969af.info + "小时" + _0x3969af.secondary + _0x46b6c4 + _0x3969af.info + "分钟");
}, 0);
logger.info("[" + _0x1fb88f + "] 插件已加载 v" + _0x19e89c.join(".") + "，配置文件路径: " + _0x1edffa);