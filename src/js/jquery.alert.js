/**
 * Created by Administrator on 2016/12/15 0015.
 */
(function ($) {
    function Dialog(opt){
        this.width = opt.width
        this.height = opt.opt.height
    }
    
    var classOper = {
        rmClassName: function (dom, classname) {
            dom.className = dom.className.replace(new RegExp("(\\s+?|^)" + classname + "(\\s+?|$)"), "");
        },
        addClassName: function (dom, classname) {
            if (!this.hasClassName(dom, classname)) {
                dom.className += " " + classname;
            }
        },
        hasClassName: function (dom, classname) {
            return new RegExp("(^|\\s+?)" + classname + "(\\s+|$)").test(dom.className);
        }
    }

    $.fn.extends({
        Dialog:Dialog
    });
})(jQuery);

