//唐dalao no solutions
function forbidden_control() {
//通过判断窗口大小变化控制，不可靠(可以通过返回或者先开启控制台再打开网页的方式破解)
  /*
    let h = window.innerHeight;
    let w = window.innerWidth;
    window.onresize = function () {
        if (h != window.innerHeight || w != window.innerWidth) {
          window.close();
          window.location = "/error/403.html";
        }
    }  
    */
//唐dalao no solutions
    $.extend({
        message: function(a) {
            var b = {
                title: "",
                message: "操作成功",
                time: "3000",
                type: "success",
                showClose: !0,
                autoClose: !0,
                onClose: function() {}
            };
            "string" == typeof a && (b.message = a), "object" == typeof a && (b = $.extend({}, b, a));
            var c, d, e, f = b.showClose ? '<div class="c-message--close">×</div>' : "",
                g = "" !== b.title ? '<h2 class="c-message__title">' + b.title + "</h2>" : "",
                h = '<div class="c-message animated animated-lento slideInRight"><i class=" c-message--icon c-message--' + b.type + '"></i><div class="el-notification__group">' + g + '<div class="el-notification__content">' + b.message + "</div>" + f + "</div></div>",
                i = $("body"),
                j = $(h);
            d = function() {
                j.addClass("slideOutRight"), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    e()
                })
            }, e = function() {
                j.remove(), b.onClose(b), clearTimeout(c)
            }, $(".c-message").remove(), i.append(j), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                j.removeClass("messageFadeInDown")
            }), i.on("click", ".c-message--close", function(a) {
                d()
            }), b.autoClose && (c = setTimeout(function() {
                d()
            }, b.time))
        }
    }),
    document.onkeydown = function(e) {
        if (123 == e.keyCode || e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode) || (e.ctrlKey && 85 === e.keyCode)) return $.message({
            message: "采用本站js及css请注明来源，禁止商业使用！",
            title: "不能使用shift+ctrl+i/f12打开控制台喔!",
            type: "error",
            autoHide: !1,
            time: "3000"
        }), event.keyCode = 0, event.returnValue = !1, !1
    }, document.oncontextmenu = function() {
        return $.message({
            message: "采用本站js及css请注明来源，禁止商业使用！",
            title: "不能使用右键或长按哦！",
            type: "error",
            autoHide: !1,
            time: "3000"
        }), !1
    }
}
forbidden_control()


  //监控window.visualViewport的高度与宽度变化并无限debugger：
  var width = window.visualViewport.width;
var height = window.visualViewport.height;
setInterval(function () {
    var new_width = window.visualViewport.width;
    var new_height = window.visualViewport.height;
    if(new_width<width||new_height<height){
       eval('!function(){debugger}()')
    }
	},800)
/*
//DevTools检测（Chrome）并无限debugger：
var element = new Image();
Object.defineProperty
(
    element,'id',
    {
        get:function()
        {
            debugger;
        }
    }
);

//自毁配合DevTools检测（Chrome）并无限debugger：
var element = new Image();
Object.defineProperty
(
    element,'id',
    {
        get:function()
        {
            window.opener = null;
            window.open('','_self');
            window.close();
        }
    }
);
console.log(element);
setInterval(function(){console.log(element)},800);
*/
