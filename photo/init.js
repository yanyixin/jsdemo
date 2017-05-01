/**
 * Created by 晓倩 on 2017/5/1.
 */
var o = {
    init: function(){
        this.portfolio.init();
    },
    portfolio: {
        data: {
        },
        init: function(){
            $('#portfolio').portfolio(o.portfolio.data);
        }
    }
}
$(function(){ o.init(); });