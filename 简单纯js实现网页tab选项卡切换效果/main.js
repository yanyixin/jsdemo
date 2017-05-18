/**
 * Created by supfn on 2017/5/18.
 */
var order;
var inputValue;
function inputLinstner() {
    inputValue = $('#input').val();
}
function click() {
    var _this = this;
    order = $(_this).attr("data-index");
    $('.input-mask').show()
}
var items = document.getElementsByClassName('item');
var item = [];
$('#button').on('click',function () {
    for(var i=0;i<items.length;i++){
        if(items[i].getAttribute("data-index") == order){
            items[i].getElementsByTagName('p')[0].innerHTML=inputValue
        }
    }
    $('#input').val("")
    $('.input-mask').hide()
})
$('.item').on('click',click)
$('#input').on('input',inputLinstner)