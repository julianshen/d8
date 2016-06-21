const request = require('request');
const cheerio = require('cheerio');

let BASE_URL = 'http://8drama.com/';
let V_BASE_HOST = 'mmrelax.com';
let SECOND_BASE_URL = 'http://'+ V_BASE_HOST +'/'; //can be mmrelax.com, 8video.tv, mmrelax.com ?

function testData(tag) {
    if((typeof tag !== "undefined" && tag !== null ? tag.data : void 0) != null) {
        return tag.data;
    }

    return null;
}

function extractKey(s) {
    let pattern = /push\('.*url=(.*)\.m3u8/i
    let regexResult = pattern.exec(s)

    if(regexResult != null && regexResult.length > 1) {
        return regexResult[1];
    }
    return null
}

function tuima_(str) {
    return str.substr(1,1)+str.substr(-2,2)+str.substr(3,3)+str.substr(-1,1)+str.substr(2,2)+str.substr(-3,3)
}

var _0x1233 = ["", "8lend.net", "domain", "erro", "length", "abc", "900150983cd24fb0d6963f7d28e17f72", "concat", "charCodeAt", "fromCharCode", "0123456789ABCDEF", "0123456789abcdef", "charAt", "KGLJCCwvLDFWjTi7MbZXqblfRgLwyMyV", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","8video.tv"];
var hexcase = 0;
var b64pad = _0x1233[0];
var chrsz = 8;

function inArray2(needle,array,bool){  
    if(typeof needle=="string"||typeof needle=="number"){  
        var len=array.length;  
        for(var i=0;i<len;i++){  
            if(needle===array[i]){  
                if(bool){  
                    return i;  
                }  
                return true;  
            }  
        }  
        return false;  
    }  
}  

function hex_MZulHlLuIGO2hNAv(_0xe83cx5){
	//var _0xe83cx7 = _0x1233[2];
    var _0xe83cx7 = V_BASE_HOST; //hard coded 
    var www_key = Array(
        '8video.tv',
        '8lend.net',
        'mmrelax.com'
        )
	if(!inArray2(_0xe83cx7,www_key)){
		_0xe83cx5;
		_0xe83cx5 += _0x1233[3];
	}
	return binl2hex(core_MZulHlLuIGO2hNAv(str2binl(_0xe83cx5), _0xe83cx5[_0x1233[4]] * chrsz))
}

function b64_MZulHlLuIGO2hNAv(_0xe83cx5) {
	return binl2b64(core_MZulHlLuIGO2hNAv(str2binl(_0xe83cx5), _0xe83cx5[_0x1233[4]] * chrsz))
}
function str_MZulHlLuIGO2hNAv(_0xe83cx5) {
	return binl2str(core_MZulHlLuIGO2hNAv(str2binl(_0xe83cx5), _0xe83cx5[_0x1233[4]] * chrsz))
}
function hex_hmac_MZulHlLuIGO2hNAv(_0xe83cxb, _0xe83cxc) {
	return binl2hex(core_hmac_MZulHlLuIGO2hNAv(_0xe83cxb, _0xe83cxc))
}
function b64_hmac_MZulHlLuIGO2hNAv(_0xe83cxb, _0xe83cxc) {
	return binl2b64(core_hmac_MZulHlLuIGO2hNAv(_0xe83cxb, _0xe83cxc))
}
function str_hmac_MZulHlLuIGO2hNAv(_0xe83cxb, _0xe83cxc) {
	return binl2str(core_hmac_MZulHlLuIGO2hNAv(_0xe83cxb, _0xe83cxc))
}
function MZulHlLuIGO2hNAv_vm_test() {
	return hex_MZulHlLuIGO2hNAv(_0x1233[5]) == _0x1233[6]
}
function core_MZulHlLuIGO2hNAv(_0xe83cx11, _0xe83cx12) {
	_0xe83cx11[_0xe83cx12 >> 5] |= 0x80 << ((_0xe83cx12) % 32);
	_0xe83cx11[(((_0xe83cx12 + 64) >>> 9) << 4) + 14] = _0xe83cx12;
	var _0xe83cx13 = 1732584193;
	var _0xe83cx14 = -271733879;
	var _0xe83cx15 = -1732584194;
	var _0xe83cx16 = 271733878;
	for (var _0xe83cx17 = 0; _0xe83cx17 < _0xe83cx11[_0x1233[4]]; _0xe83cx17 += 16) {
		var _0xe83cx18 = _0xe83cx13;
		var _0xe83cx19 = _0xe83cx14;
		var _0xe83cx1a = _0xe83cx15;
		var _0xe83cx1b = _0xe83cx16;
		_0xe83cx13 = MZulHlLuIGO2hNAv_ff(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 0], 7, -680876936);
		_0xe83cx16 = MZulHlLuIGO2hNAv_ff(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 1], 12, -389564586);
		_0xe83cx15 = MZulHlLuIGO2hNAv_ff(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 2], 17, 606105819);
		_0xe83cx14 = MZulHlLuIGO2hNAv_ff(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 3], 22, -1044525330);
		_0xe83cx13 = MZulHlLuIGO2hNAv_ff(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 4], 7, -176418897);
		_0xe83cx16 = MZulHlLuIGO2hNAv_ff(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 5], 12, 1200080426);
		_0xe83cx15 = MZulHlLuIGO2hNAv_ff(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 6], 17, -1473231341);
		_0xe83cx14 = MZulHlLuIGO2hNAv_ff(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 7], 22, -45705983);
		_0xe83cx13 = MZulHlLuIGO2hNAv_ff(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 8], 7, 1770035416);
		_0xe83cx16 = MZulHlLuIGO2hNAv_ff(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 9], 12, -1958414417);
		_0xe83cx15 = MZulHlLuIGO2hNAv_ff(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 10], 17, -42063);
		_0xe83cx14 = MZulHlLuIGO2hNAv_ff(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 11], 22, -1990404162);
		_0xe83cx13 = MZulHlLuIGO2hNAv_ff(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 12], 7, 1804603682);
		_0xe83cx16 = MZulHlLuIGO2hNAv_ff(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 13], 12, -40341101);
		_0xe83cx15 = MZulHlLuIGO2hNAv_ff(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 14], 17, -1502002290);
		_0xe83cx14 = MZulHlLuIGO2hNAv_ff(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 15], 22, 1236535329);
		_0xe83cx13 = MZulHlLuIGO2hNAv_gg(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 1], 5, -165796510);
		_0xe83cx16 = MZulHlLuIGO2hNAv_gg(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 6], 9, -1069501632);
		_0xe83cx15 = MZulHlLuIGO2hNAv_gg(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 11], 14, 643717713);
		_0xe83cx14 = MZulHlLuIGO2hNAv_gg(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 0], 20, -373897302);
		_0xe83cx13 = MZulHlLuIGO2hNAv_gg(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 5], 5, -701558691);
		_0xe83cx16 = MZulHlLuIGO2hNAv_gg(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 10], 9, 38016083);
		_0xe83cx15 = MZulHlLuIGO2hNAv_gg(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 15], 14, -660478335);
		_0xe83cx14 = MZulHlLuIGO2hNAv_gg(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 4], 20, -405537848);
		_0xe83cx13 = MZulHlLuIGO2hNAv_gg(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 9], 5, 568446438);
		_0xe83cx16 = MZulHlLuIGO2hNAv_gg(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 14], 9, -1019803690);
		_0xe83cx15 = MZulHlLuIGO2hNAv_gg(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 3], 14, -187363961);
		_0xe83cx14 = MZulHlLuIGO2hNAv_gg(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 8], 20, 1163531501);
		_0xe83cx13 = MZulHlLuIGO2hNAv_gg(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 13], 5, -1444681467);
		_0xe83cx16 = MZulHlLuIGO2hNAv_gg(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 2], 9, -51403784);
		_0xe83cx15 = MZulHlLuIGO2hNAv_gg(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 7], 14, 1735328473);
		_0xe83cx14 = MZulHlLuIGO2hNAv_gg(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 12], 20, -1926607734);
		_0xe83cx13 = MZulHlLuIGO2hNAv_hh(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 5], 4, -378558);
		_0xe83cx16 = MZulHlLuIGO2hNAv_hh(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 8], 11, -2022574463);
		_0xe83cx15 = MZulHlLuIGO2hNAv_hh(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 11], 16, 1839030562);
		_0xe83cx14 = MZulHlLuIGO2hNAv_hh(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 14], 23, -35309556);
		_0xe83cx13 = MZulHlLuIGO2hNAv_hh(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 1], 4, -1530992060);
		_0xe83cx16 = MZulHlLuIGO2hNAv_hh(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 4], 11, 1272893353);
		_0xe83cx15 = MZulHlLuIGO2hNAv_hh(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 7], 16, -155497632);
		_0xe83cx14 = MZulHlLuIGO2hNAv_hh(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 10], 23, -1094730640);
		_0xe83cx13 = MZulHlLuIGO2hNAv_hh(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 13], 4, 681279174);
		_0xe83cx16 = MZulHlLuIGO2hNAv_hh(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 0], 11, -358537222);
		_0xe83cx15 = MZulHlLuIGO2hNAv_hh(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 3], 16, -722521979);
		_0xe83cx14 = MZulHlLuIGO2hNAv_hh(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 6], 23, 76029189);
		_0xe83cx13 = MZulHlLuIGO2hNAv_hh(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 9], 4, -640364487);
		_0xe83cx16 = MZulHlLuIGO2hNAv_hh(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 12], 11, -421815835);
		_0xe83cx15 = MZulHlLuIGO2hNAv_hh(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 15], 16, 530742520);
		_0xe83cx14 = MZulHlLuIGO2hNAv_hh(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 2], 23, -995338651);
		_0xe83cx13 = MZulHlLuIGO2hNAv_ii(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 0], 6, -198630844);
		_0xe83cx16 = MZulHlLuIGO2hNAv_ii(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 7], 10, 1126891415);
		_0xe83cx15 = MZulHlLuIGO2hNAv_ii(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 14], 15, -1416354905);
		_0xe83cx14 = MZulHlLuIGO2hNAv_ii(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 5], 21, -57434055);
		_0xe83cx13 = MZulHlLuIGO2hNAv_ii(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 12], 6, 1700485571);
		_0xe83cx16 = MZulHlLuIGO2hNAv_ii(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 3], 10, -1894986606);
		_0xe83cx15 = MZulHlLuIGO2hNAv_ii(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 10], 15, -1051523);
		_0xe83cx14 = MZulHlLuIGO2hNAv_ii(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 1], 21, -2054922799);
		_0xe83cx13 = MZulHlLuIGO2hNAv_ii(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 8], 6, 1873313359);
		_0xe83cx16 = MZulHlLuIGO2hNAv_ii(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 15], 10, -30611744);
		_0xe83cx15 = MZulHlLuIGO2hNAv_ii(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 6], 15, -1560198380);
		_0xe83cx14 = MZulHlLuIGO2hNAv_ii(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 13], 21, 1309151649);
		_0xe83cx13 = MZulHlLuIGO2hNAv_ii(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11[_0xe83cx17 + 4], 6, -145523070);
		_0xe83cx16 = MZulHlLuIGO2hNAv_ii(_0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx11[_0xe83cx17 + 11], 10, -1120210379);
		_0xe83cx15 = MZulHlLuIGO2hNAv_ii(_0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11[_0xe83cx17 + 2], 15, 718787259);
		_0xe83cx14 = MZulHlLuIGO2hNAv_ii(_0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx13, _0xe83cx11[_0xe83cx17 + 9], 21, -343485551);
		_0xe83cx13 = safe_add(_0xe83cx13, _0xe83cx18);
		_0xe83cx14 = safe_add(_0xe83cx14, _0xe83cx19);
		_0xe83cx15 = safe_add(_0xe83cx15, _0xe83cx1a);
		_0xe83cx16 = safe_add(_0xe83cx16, _0xe83cx1b)
	};
	return Array(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16)
}
function MZulHlLuIGO2hNAv_cmn(_0xe83cx1d, _0xe83cx13, _0xe83cx14, _0xe83cx11, _0xe83cx5, _0xe83cx1e) {
	return safe_add(bit_rol(safe_add(safe_add(_0xe83cx13, _0xe83cx1d), safe_add(_0xe83cx11, _0xe83cx1e)), _0xe83cx5), _0xe83cx14)
}
function MZulHlLuIGO2hNAv_ff(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11, _0xe83cx5, _0xe83cx1e) {
	return MZulHlLuIGO2hNAv_cmn((_0xe83cx14 & _0xe83cx15) | ((~_0xe83cx14) & _0xe83cx16), _0xe83cx13, _0xe83cx14, _0xe83cx11, _0xe83cx5, _0xe83cx1e)
}
function MZulHlLuIGO2hNAv_gg(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11, _0xe83cx5, _0xe83cx1e) {
	return MZulHlLuIGO2hNAv_cmn((_0xe83cx14 & _0xe83cx16) | (_0xe83cx15 & (~_0xe83cx16)), _0xe83cx13, _0xe83cx14, _0xe83cx11, _0xe83cx5, _0xe83cx1e)
}
function MZulHlLuIGO2hNAv_hh(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11, _0xe83cx5, _0xe83cx1e) {
	return MZulHlLuIGO2hNAv_cmn(_0xe83cx14 ^ _0xe83cx15 ^ _0xe83cx16, _0xe83cx13, _0xe83cx14, _0xe83cx11, _0xe83cx5, _0xe83cx1e)
}
function MZulHlLuIGO2hNAv_ii(_0xe83cx13, _0xe83cx14, _0xe83cx15, _0xe83cx16, _0xe83cx11, _0xe83cx5, _0xe83cx1e) {
	return MZulHlLuIGO2hNAv_cmn(_0xe83cx15 ^ (_0xe83cx14 | (~_0xe83cx16)), _0xe83cx13, _0xe83cx14, _0xe83cx11, _0xe83cx5, _0xe83cx1e)
}
function core_hmac_MZulHlLuIGO2hNAv(_0xe83cxb, _0xe83cxc) {
	var _0xe83cx24 = str2binl(_0xe83cxb);
	if (_0xe83cx24[_0x1233[4]] > 16) {
		_0xe83cx24 = core_MZulHlLuIGO2hNAv(_0xe83cx24, _0xe83cxb[_0x1233[4]] * chrsz)
	};
	var _0xe83cx25 = Array(16),
		_0xe83cx26 = Array(16);
	for (var _0xe83cx17 = 0; _0xe83cx17 < 16; _0xe83cx17++) {
		_0xe83cx25[_0xe83cx17] = _0xe83cx24[_0xe83cx17] ^ 0x36363636;
		_0xe83cx26[_0xe83cx17] = _0xe83cx24[_0xe83cx17] ^ 0x5C5C5C5C
	};
	var _0xe83cx27 = core_MZulHlLuIGO2hNAv(_0xe83cx25[_0x1233[7]](str2binl(_0xe83cxc)), 512 + _0xe83cxc[_0x1233[4]] * chrsz);
	return core_MZulHlLuIGO2hNAv(_0xe83cx26[_0x1233[7]](_0xe83cx27), 512 + 128)
}
function safe_add(_0xe83cx11, _0xe83cx29) {
	var _0xe83cx2a = (_0xe83cx11 & 0xFFFF) + (_0xe83cx29 & 0xFFFF);
	var _0xe83cx2b = (_0xe83cx11 >> 16) + (_0xe83cx29 >> 16) + (_0xe83cx2a >> 16);
	return (_0xe83cx2b << 16) | (_0xe83cx2a & 0xFFFF)
}
function bit_rol(_0xe83cx2d, _0xe83cx2e) {
	return (_0xe83cx2d << _0xe83cx2e) | (_0xe83cx2d >>> (32 - _0xe83cx2e))
}
function str2binl(_0xe83cx30) {
	var _0xe83cx31 = Array();
	var _0xe83cx32 = (1 << chrsz) - 1;
	for (var _0xe83cx17 = 0; _0xe83cx17 < _0xe83cx30[_0x1233[4]] * chrsz; _0xe83cx17 += chrsz) {
		_0xe83cx31[_0xe83cx17 >> 5] |= (_0xe83cx30[_0x1233[8]](_0xe83cx17 / chrsz) & _0xe83cx32) << (_0xe83cx17 % 32)
	};
	return _0xe83cx31
}

function binl2str(_0xe83cx31) {
	var _0xe83cx30 = _0x1233[0];
	var _0xe83cx32 = (1 << chrsz) - 1;
	for (var _0xe83cx17 = 0; _0xe83cx17 < _0xe83cx31[_0x1233[4]] * 32; _0xe83cx17 += chrsz) {
		_0xe83cx30 += String[_0x1233[9]]((_0xe83cx31[_0xe83cx17 >> 5] >>> (_0xe83cx17 % 32)) & _0xe83cx32)
	};
	return _0xe83cx30
}

function binl2hex(_0xe83cx35) {
	var _0xe83cx36 = hexcase ? _0x1233[10] : _0x1233[11];
	var _0xe83cx30 = _0x1233[0];
	for (var _0xe83cx17 = 0; _0xe83cx17 < _0xe83cx35[_0x1233[4]] * 4; _0xe83cx17++) {
		_0xe83cx30 += _0xe83cx36[_0x1233[12]]((_0xe83cx35[_0xe83cx17 >> 2] >> ((_0xe83cx17 % 4) * 8 + 4)) & 0xF) + _0xe83cx36[_0x1233[12]]((_0xe83cx35[_0xe83cx17 >> 2] >> ((_0xe83cx17 % 4) * 8)) & 0xF)
	};
	return _0xe83cx30
}

function nimamama(_0xe83cx35) {
	var _0xe83cx36 = _0x1233[13];
	var _0xe83cx38 = hex_MZulHlLuIGO2hNAv(_0xe83cx36 + _0xe83cx35);
	return _0xe83cx38
}

function binl2b64(_0xe83cx35) {
	var _0xe83cx3a = _0x1233[14];
	var _0xe83cx30 = _0x1233[0];
	for (var _0xe83cx17 = 0; _0xe83cx17 < _0xe83cx35[_0x1233[4]] * 4; _0xe83cx17 += 3) {
		var _0xe83cx3b = (((_0xe83cx35[_0xe83cx17 >> 2] >> 8 * (_0xe83cx17 % 4)) & 0xFF) << 16) | (((_0xe83cx35[_0xe83cx17 + 1 >> 2] >> 8 * ((_0xe83cx17 + 1) % 4)) & 0xFF) << 8) | ((_0xe83cx35[_0xe83cx17 + 2 >> 2] >> 8 * ((_0xe83cx17 + 2) % 4)) & 0xFF);
		for (var _0xe83cx3c = 0; _0xe83cx3c < 4; _0xe83cx3c++) {
			if (_0xe83cx17 * 8 + _0xe83cx3c * 6 > _0xe83cx35[_0x1233[4]] * 32) {
				_0xe83cx30 += b64pad
			} else {
				_0xe83cx30 += _0xe83cx3a[_0x1233[12]]((_0xe83cx3b >> 6 * (3 - _0xe83cx3c)) & 0x3F)
			}
		}
	};
	return _0xe83cx30
}

function findKey(scripts) {
    if(scripts == null && scripts.length < 1) {
        return null;
    }

    var key = null

    scripts.each(function(index, item) {
        var data = testData(item);
        
        if(data != null) {
            key = extractKey(data)

            if(key != null) {
                return false //break each
            }
        } else {
            if(item.children != null) {
                //Children has no 'each' when length == 1
                for(var i=0; i < item.children.length; i++) {
                    var s = item.children[i];
                    data = testData(s);
                    key = extractKey(data);
                    
                    if(key != null) {
                        return false; //break each
                    }
                }
            }
        }
    });

    return key;
}

exports.findVideoUrl = function(id) {
    var url = BASE_URL + id;
    
    return new Promise(function(resolve, reject) {
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
				var $ = cheerio.load(body);
                var scripts= $('script');
                
                let key = findKey(scripts);
                
                if(key == null) {
                    reject(Error('key is not found'));
                    return;
                }

                let req_url = SECOND_BASE_URL + "drama/?w=600&h=445&url=" +key;
                let options = {
                    url: req_url,
                    headers: {
                        'User-Agent': 'request',
                        'Accept-Language': 'zh-TW,zh;q=0.8,en-US;q=0.6,en;q=0.4',
                        'Referer': url,
                        'Cache-Control': 'max-age=0',
                        'Upgrade-Insecure-Requests': '1'
                    }
                };

                request(options, function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var ix = body.indexOf('var plw');
                        var iy = body.indexOf('document', ix);
                        var ax = null;
                        var ay = null;
                        if(ix > 0 && iy > ix) {
                            let sct = body.substring(ix, iy);
                            let lines = sct.split("\n");
                            let v3 = lines[3].substring(4, lines[3].indexOf('='));
                            let v4 = lines[4].substring(4, lines[4].indexOf('='));

                            sct += '\n' + "ax = ap_+fff+'\u003f\u0073\u0069\u0067\u006e\u003d'+tuima_("+v4+")+"+v4+"+'&id=gq$$'+"+v3+"+'&type=html5';";
                            eval(sct);
                            resolve(ax);
                        }
                    } else {
                        console.log(response.statusCode);
                        reject(error);
                    }
                });
            } else {
                reject(error);
            }
        });
    });
};

exports.getEpisodeList = function(id) {
    var url = BASE_URL + id;

    return new Promise(function(resolve, reject) {
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(body);
                var tds = $('td[width="20%"] a');

                var episodes = [];
                tds.each(function(index, element) {
                    let patten = /http:\/\/8drama.com\/(\d+)\//i;
                    let ex = patten.exec($(element).attr('href'));

                    episodes.push({
						index: index,
                        name: $(element).text(),
                        id: ex[1]
                    });
                });

				var title = $('.entry-title').text();
				var result = {
					title: title,
					episodes: episodes
				};	
				
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
};

module.exports = exports;