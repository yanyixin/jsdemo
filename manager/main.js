/**
 * Created by supfn on 2017/5/18.
 */
window.onload=function () {

    // var inputValue,
        // ulInputValue = $('#ul-input').val(),
        // beforeInputVal,   //保存输入前的值
    var item = [],
        ulList1 = document.getElementById('ul-list1');   //获取限时优惠目的地列表
    //使用sortable插件进行拖动
    if(ulList1){
        var sortable = Sortable.create(ulList1);
    }
    //记录输入框中的值
    // function inputLinstner() { // 这个方法就不用了
    //     inputValue = $('#input').val();
    //     ulInputValue = $('#ul-input').val();
    // }

    function addClass(ele,name) {
        $(ele).addClass(name)
    }
    function click(ele,func) {
        $(ele).on('click',func)
    }
    function input(ele,func) {
        $(ele).on('input',func)
    }

    function eventBind() {
        click('.item',desModity)
        click('#button',addDesBtnClick)
        // input('#input',inputLinstner)
        // input('#ul-input',inputLinstner)
        click('#insertEnd',insertEndclick)
        click('#ul-sure-button',ulSureBtnClick)
        click('.delete-btn',deleteLi)
        click('.modify-btn',modifyFun)
    }
    eventBind()
    //点击单个div，将输入框中的值复制给点击div中的p标签
    function desModity() {
        var _this = this;
        addClass(_this,'current');
        // beforeInputVal = $('_this').find('p').html();
        $('.input-mask').show()
    }
    //点击确定按钮
    function addDesBtnClick() {
        var inputValue = $('#input').val(); // 这里也是，点击的时候再获取
        //判断是否输入内容
        if(inputValue){
            // 如果inputValue存在，就赋值
            console.log(inputValue)
            $('.item_container').find('.current').find('p').html(inputValue)
        }else{
            console.log(inputValue)
            alert('请输入您要修改的目的地');
            return; // 这里return就好
            // $('.item_container').find('.current').find('p').html(beforeInputVal)
        }
        $('#input').val("")
        $('.input-mask').hide()
        $('.item_container').find('.current').removeClass('current');
        // inputValue = undefined; //  这里为什么要设置为undefined
    }
    //增加
    function insertEndclick() {
        $('.ul-input-container>p').html("新增目的地")
        $('#ul-list1').addClass('addBtnClick')
        $('.ul-input-mask').show();
    }
    //点击弹出框的确定按钮
    function ulSureBtnClick() {
        var ulInputValue = $('#ul-input').val(); 
        // 可以点击的时候再获取，这样每次获取的都是最新的，没有必要用input实时获取
        var $ulList1 = $('#ul-list1'); // 这个方法里面有很多地方都用到这个dom，可以先取出来。
        $('#ul-input').val("") // 这里是不是要先走逻辑，然后最后把输入框的值设为空。js里最好用单引号
        //判断用户是否输入
        if(ulInputValue){
            // 这里写的很好，直接判断ulInputValue是否存在

            //判断增加目的地还是修改目的地
            if($ulList1.hasClass('addBtnClick')){
                var newLi = document.createElement('li');
                newLi.innerHTML =" <p> " + ulInputValue + "</p> " +
                    " <div class=\"icon\"> " +
                    "<img src=\"img/delete.png\" alt=\"删除\" class=\"delete-btn\" >"+
                    "<img src=\"img/modify.png\" alt=\"修改\" class=\"modify-btn\">" +
                    "</div>";
                $ulList1.append(newLi)
            }else if($ulList1.hasClass('modifyBtnClick')){
                $ulList1.find('.current').find('p').html(ulInputValue);

            }
        } else{
            alert('请输入目的地')
        }
        $ulList1.removeClass('modifyBtnClick')
        $ulList1.removeClass('addBtnClick')
        $('.ul-input-mask').hide();
        $('.modify-btn').on('click',modifyFun)
        $('.delete-btn').on('click',deleteLi)
        $ulList1.find('.current').removeClass('current');
        // ulInputValue = "" // 这里已经置空了，上面的那个置空是什么用意,
        $('#ul-input').val(''); 
    }

    //删除
    function deleteLi() {
        var _this = this;
        $(_this).parent().parent().remove();
    }

    //修改
    function modifyFun() {
        $("#ul-list1").addClass('modifyBtnClick')
        $(this).parent().parent().addClass('current')
        $('.ul-input-mask').show();
    }
}
/**
 * Created by supfn on 2017/5/22.
 */
