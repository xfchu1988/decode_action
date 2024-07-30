//Tue Jul 30 2024 07:42:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const crypto = require("crypto"),
  appid = 708,
  app_version = "14409378",
  country_code = "86",
  got = require("got");
function getTimestamp() {
  return parseInt(new Date() / 1000);
}
function hexMd5(_0x2ca0f7) {
  const _0x4eb27b = crypto.createHash("md5").update(_0x2ca0f7).digest("hex");
  return _0x4eb27b;
}
function getSign(_0x4a87a9) {
  const _0x5e50dd = "PGaqKQ8a1RQr9haE*&PkCFUnu4C11IJ@",
    _0x286332 = hexMd5(appid + "bd" + app_version + country_code + _0x4a87a9 + _0x5e50dd);
  return _0x286332;
}
function getGsign(_0xb63077, _0x31f7b4, _0x4ca27b) {
  1 === _0xb63077 && (_0x4ca27b = "qa3!BZwg7ZFz*KEQ9VCSdK1SmOA9F2rZ");
  const _0x4d679f = hexMd5(appid + "bd" + app_version + _0x31f7b4 + _0xb63077 + _0x4ca27b);
  return _0x4d679f;
}
async function init() {
  const _0x50af8a = {
      Cookie: "guid=;lsid=;pt_key=;",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 swan/2.55.0 swan-baiduboxapp/13.17.0.10 baiduboxapp/13.17.0.10 (Baidu; P2 15.5)",
      accept: "*/*",
      "x-turbonet-info": "3.0.1610.175",
      "x-from-h3-trnet": "true",
      referer: "https://smartapps.cn/4VvF29wlVg61mjRYCp4tY5dqkBgOyoYN/2.1.13/page-frame.html"
    },
    _0x3552a1 = getTimestamp(),
    _0x530473 = getGsign(1, _0x3552a1),
    _0x12d3c6 = "app_version=14409378&client_ver=1.0.0&return_page=/pages/personal/personal&ts=" + _0x3552a1 + "&sub_cmd=1&sdk_ver=1.0.0&gsign=" + _0x530473 + "&appid=708";
  const _0x24409d = {
      method: "POST",
      url: "https://minilogin.m.jd.com/cgi-bin/bdapp/bd",
      headers: _0x50af8a,
      body: _0x12d3c6
    },
    _0x4616a7 = await got(_0x24409d),
    {
      gsalt: _0x16e68f,
      guid: _0xed1ab0,
      lsid: _0x13911f
    } = JSON.parse(_0x4616a7.body).data,
    _0x5bee19 = {
      gsalt: _0x16e68f,
      guid: _0xed1ab0,
      lsid: _0x13911f
    };
  return _0x5bee19;
}
async function getVeriCode(_0x1fc4d5) {
  const {
    gsalt: _0x983c80,
    guid: _0x33d87c,
    lsid: _0x13a24a,
    mobile: _0x4e4830
  } = _0x1fc4d5;
  const _0xd64f94 = {
      Cookie: "guid=" + _0x33d87c + ";lsid=" + _0x13a24a + ";pt_key=;",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 swan/2.55.0 swan-baiduboxapp/13.17.0.10 baiduboxapp/13.17.0.10 (Baidu; P2 15.5)",
      accept: "*/*",
      "x-turbonet-info": "3.0.1610.175",
      "x-from-h3-trnet": "true",
      referer: "https://smartapps.cn/4VvF29wlVg61mjRYCp4tY5dqkBgOyoYN/2.1.13/page-frame.html",
      "accept-language": "zh-CN,zh,zh-TW,en-US,en"
    },
    _0x1c8d32 = getSign(_0x4e4830),
    _0x4aa610 = getTimestamp(),
    _0x5c7ddc = getGsign(2, _0x4aa610, _0x983c80),
    _0x44e705 = "sdk_ver=1.0.0&appid=708&mobile=" + _0x4e4830 + "&app_version=14409378&client_ver=1.0.0&gsign=" + _0x5c7ddc + "&return_page=%2Fpages%2Fpersonal%2Fpersonal&sub_cmd=2&ts=" + _0x4aa610 + "&country_code=86&sign=" + _0x1c8d32;
  const _0x128f6c = {
      method: "POST",
      url: "https://minilogin.m.jd.com/cgi-bin/bdapp/bd",
      headers: _0xd64f94,
      body: _0x44e705
    },
    _0x34a344 = await got(_0x128f6c);
  return JSON.parse(_0x34a344.body);
}
async function doTelLogin(_0x5723d1) {
  const {
    gsalt: _0x12bd7f,
    guid: _0x2cbe7e,
    lsid: _0x2c5fbf,
    mobile: _0x1af916,
    smscode: _0x222cc0
  } = _0x5723d1;
  const _0x3f9088 = {
      Cookie: "guid=" + _0x2cbe7e + ";lsid=" + _0x2c5fbf + ";pt_key=;",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 swan/2.55.0 swan-baiduboxapp/13.17.0.10 baiduboxapp/13.17.0.10 (Baidu; P2 15.5)",
      accept: "*/*",
      "x-turbonet-info": "3.0.1610.175",
      "x-from-h3-trnet": "true",
      referer: "https://smartapps.cn/4VvF29wlVg61mjRYCp4tY5dqkBgOyoYN/2.1.13/page-frame.html",
      "accept-language": "zh-CN,zh,zh-TW,en-US,en"
    },
    _0x2091b0 = getTimestamp(),
    _0xe54656 = getGsign(3, _0x2091b0, _0x12bd7f),
    _0x1ec6b0 = "sdk_ver=1.0.0&appid=708&mobile=" + _0x1af916 + "&app_version=14409378&client_ver=1.0.0&gsign=" + _0xe54656 + "&return_page=%2Fpages%2Fpersonal%2Fpersonal&sub_cmd=3&ts=" + _0x2091b0 + "&country_code=86&smscode=" + _0x222cc0;
  const _0x505e80 = {
      method: "POST",
      url: "https://minilogin.m.jd.com/cgi-bin/bdapp/bd",
      headers: _0x3f9088,
      body: _0x1ec6b0
    },
    _0x1aebb2 = await got(_0x505e80);
  return JSON.parse(_0x1aebb2.body);
}
const a0_0x20b2e7 = {
  init: init,
  getVeriCode: getVeriCode,
  doTelLogin: doTelLogin
};
module.exports = a0_0x20b2e7;