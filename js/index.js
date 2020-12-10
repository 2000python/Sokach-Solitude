// 用户代理检测
var client = function() {

    //呈现引擎
    var engine = {
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,
        //完整的版本号
        ver: null
    };


    //浏览器
    var browser = {
        //主要浏览器
        ie: 0,
        firefox: 0,
        safari: 0,
        konq: 0,
        opera: 0,
        chrome: 0,
        //具体的版本号
        ver: null
    };


    //平台,设备的操作系统
    var system = {
        win: false,
        mac: false,
        xll: false,
        //移动设备
        iphone: false,
        ipod: false,
        ipad: false,
        ios: false,
        android: false,
        nokiaN: false,
        winMobile: false,
        //游戏系统
        will: false,
        ps: false
    };

    //检测呈现引擎和浏览器
    var ua = navigator.userAgent;
    if (window.opera) {
        engine.ver = browser.ver = window.opera.version();
        engine.opera = browser.opera = parseFloat(engine.ver);
    } else if (/AppleWebKit\/(\S+)/.test(ua)) {
        engine.ver = RegExp.$1;
        engine.webkit = parseFloat(engine.ver);
        //确定是chrome还是Safari
        if (/Chrome\/(\S+)/.test(ua)) {
            browser.ver = RegExp.$1;
            browser.chrome = parseFloat(browser.ver);
        } else {
            //近似地确定版本号
            var safariVersion = 1;
            if (engine.webkit < 100) {
                safariVersion = 1;
            } else if (engine.webkit < 312) {
                safariVersion = 1.2;
            } else if (engine.webkit < 412) {
                safariVersion = 1.3;
            } else {
                safariVersion = 2;
            }
            browser.safari = browser.ver = safariVersion;
        }
    } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
        engine.ver = browser.ver = RegExp.$1;
        engine.khtml = browser.konq = parseFloat(engine.ver);
    } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
        engine.ver = RegExp.$1;
        engine.gecko = parseFloat(engine.ver);
        //确定是不是firefox
        if (/Firefox\/(\S+)/.test(ua)) {
            browser.ver = RegExp.$1;
            browser.firefox = parseFloat(browser.ver);
        }
    } else if (/MSIE ([^;]+)/.test(ua)) {
        engine.ver = browser.ver = RegExp.$1;
        engine.ie = browser.ie = parseFloat(engine.ver);
    }
    //检测浏览器
    browser.ie = engine.ie;
    browser.opera = engine.opera;

    //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.xll = (p == "Xll") || (p.indexOf("Linux") == 0);

    //检测Windows操作系统
    if (system.win) {
        if (/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {

            if (RegExp.$1 == "NT") {
                switch (RegExp.$2) {
                    case "5.0":
                        system.win = "2000";
                        break;
                    case "5.1":
                        system.win = "XP";
                        break;
                    case "6.0":
                        system.win = "Vista";
                        break;
                    case "6.1":
                        system.win = "7";
                        break;
                    default:
                        system.win = "NT";
                        break;
                }
            } else if (RegExp.$1 == "9x") {
                system.win = "ME";
            } else {
                system.win = RegExp.$1;
            }
        }
    }

    //移动设备
    system.iphone = ua.indexOf("iPhone") > -1;
    system.ipod = ua.indexOf("iPod") > -1;
    system.ipad = ua.indexOf("iPad") > -1;
    system.nokiaN = ua.indexOf("NokiaN") > -1;
    //windos mobile
    if (system.win == "CE") {
        system.winMobile = system.win;
    } else if (system.win == "Ph") {
        if (/Windows Phone OS (\d+. \d)/.test(ua)) {
            system.win = "Phone";
            system.winMobile = parseFloat(RegExp.$1);
        }
    }
    //检测iOS 版本
    if (system.mac && ua.indexOf("Mobile") > -1) {
        if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
            system.ios = parseFloat(RegExp.$1.replace("_", "."));
        } else {
            system.ios = 2; //不能真正检测出来,所以只能猜测
        }
    }
    //检测Android版本
    if (/Android (\d+\. \d+)/.test(ua)) {
        system.android = parseFloat(RegExp.$1);
    }
    //游戏系统
    system.will = ua.indexOf("Wii") > -1;
    system.ps = /playstation/i.test(ua);
    //返回这些对象
    return {
        engine: engine,
        browser: browser,
        system: system
    };

}();

if (client.system.android == true || client.system.ios == true) {
    alert('你在用手机浏览本页面，请使用电脑以获得较好的浏览体验！')
} else {
    console.log('你的不是手机！');
}

// $(function imgChange() {
//     var $img = $('.about_soft');
//     var $soo_a = $('.soo_item a');
//     for (var i = 0; i < $soo_a.lenght; i++) {
//         $soo_a[i].mouseover(function() {
//             $img.css("display", "block");
//             $img.css("background-image", "url(img/" + i + ")")
//         });
//     }
//     console.log($soo_a);

// });
/*
$(document).ready(function() {
    let img = $('.about_soft');
    for (let i = 0; i < 3; i++) {
        $('.soo_item a').mouseover(function() {

            // img.css("display", "block");
            img.show();
            img.css("background-image", "url(img/" + i + ".jpg)");
        })
    };
    for (let i = 0; i < 3; i++) {
        $('.soo_item a').mouseout(function() {

            img.hide();
        })
    };
    console.log($('.soo_item a'));
});*/

window.onload = function() {
    $(function() {
        let sooHeight = $('.about_soft').css('height');
        let soo_a = document.querySelectorAll('.soo_item a');
        let $soo_a = $('.soo_item a');
        let img1 = document.querySelector('.about_soft');
        for (let i = 0; i < soo_a.length; i++) {
            soo_a[i].onmouseover = function(event) {
                img1.style.display = "block";
                img1.style.backgroundImage = "url(img/" + i + ".jpg)";
                img1.style.top = "-" + sooHeight; //top应该为负值，.about_soft的父盒子是.soo_item而不是body。
                img1.style.left = document.documentElement.scrollLeft + event.clientX + "px";
                // img1.style.top = "calc(" + document.documentElement.scrolllTop + event.clientY + "px-" + sooHeight + "+" + "100px" + ")";
                // img1.style.top = "calc(" + document.documentElement.scrolllTop + event.clientY + "px-" + sooHeight + "+" + "100px" + ")";
            };
        };
        $soo_a.mouseout(function() {
            img1.style.display = "none";
        })
    })
};

/*
window.onload = function() {
    let img = document.querySelector('.about_soft');
    let soo_a = document.querySelectorAll('.soo_item a');
    const sooHeight = img.style.height;
    console.log(sooHeight);
    for (let i = 0; i < soo_a.length; i++) {
        soo_a[i].onmouseover = function(event) {
            img.style.display = "block";
            img.style.backgroundImage = "url(img/" + i + ".jpg)";
            img.style.left = document.documentElement.scrollLeft + event.clientX + "px";
            img.style.top = document.documentElement.scrolllTop + event.clientX + "px" + "+" + img.style.height;
            //top应该为负值，.about_soft的父盒子是.soo_item而不是body。
        }
        soo_a[i].onmouseout = function() {
            img.style.display = "none";
        }
    }
}
*/