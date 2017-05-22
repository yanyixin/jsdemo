/**
 * Created by supfn on 2017/5/18.
 */
window.onload=function () {

    var order,
        inputValue,
        ulInputValue,
        beforeInputVal,   //保存输入前的值
        oItem = document.getElementsByClassName('item'),
        item = [];

    var ulList1 = document.getElementById('ul-list1');
    if(ulList1){
        var sortable = Sortable.create(ulList1);
    }

    var UlInputValue3 = $('#ul-input3').val();
    //记录输入框中的值
    function inputLinstner() {
        inputValue = $('#input').val();
        ulInputValue = $('#ul-input').val();
        UlInputValue2 = $('#ul-input2').val();
        UlInputValue3 = $('#ul-input3').val();

    }

    //点击单个div，将输入框中的值复制给点击div中的p标签
    function click() {
        var _this = this;
        order = $(_this).attr("data-index");
        beforeInputVal = oItem[order - 1].getElementsByTagName('p')[0].innerHTML;
        $('.input-mask').show()
    }
    //点击确定按钮
    $('#button').on('click',function () {
        for(var i=0;i<oItem.length;i++){
            if(oItem[i].getAttribute("data-index") == order){
                if( inputValue == undefined){
                    oItem[i].getElementsByTagName('p')[0].innerHTML=beforeInputVal;
                }else{
                    oItem[i].getElementsByTagName('p')[0].innerHTML=inputValue
                }
            }
        }
        $('#input').val("")
        $('.input-mask').hide()
    })
    $('.item').on('click',click)
    $('#input').on('input',inputLinstner);
    $('#ul-input').on('input',inputLinstner);
    $('#ul-input2').on('input',inputLinstner);
    $('#ul-input3').on('input',inputLinstner);



    var selectLi;       //定义变量，保存选中的标签
    var editLi = false; //保存修改后的标签
    $('#insertEnd').on('click',insertEndclick);
    $('#ul-sure-button').on('click',ulSureBtnClick);
    $('#ul-sure-button2').on('click',ulSureBtnClick2);
    $('#ul-sure-button3').on('click',ulSureBtnClick3);
    $('#delete').on('click',deleteLi);
    $('#edit').on('click',editLifun)
    var ulList1 = document.getElementById('ul-list1')
    if(ulList1){

    }


    function insertEndclick() {
        $('.ul-input-mask').show();
    }
    //新增li至末位
    function ulSureBtnClick() {
        if(ulInputValue){
            var newLi = document.createElement('li');
            newLi.innerHTML =" <p> " + ulInputValue + "</p> " +
                             " <div class=\"icon\"> " +
                             "<img src=\"img/delete.png\" alt=\"删除\" class=\"delete-btn\" >"+
                             "<img src=\"img/modify.png\" alt=\"修改\" class=\"modify-btn\">" +
                             "</div>";
            $('#ul-list1').append(newLi)
        }else{
            alert('请输入要插入内容')
        }
        $('.ul-input-mask').hide();
        $('.modify-btn').on('click',editLifun)
        $('.delete-btn').on('click',deleteLi)
    }

    function ulSureBtnClick2() {

        if(UlInputValue2){
            var newLi = document.createElement('li');
            newLi.innerHTML = UlInputValue2;
            newLi.onclick = liChoose;
            selectLi.before(newLi)
        }else{
            alert('请输入要插入内容')
        }
        $('.ul-input-mask2').hide();
        /*for(var i=0;i<Oli.length;i++){
         $(Oli[i]).removeClass('cur')
         }*/
    }

    $('.delete-btn').on('click',deleteLi)
    //删除指定标签
    function deleteLi() {
        console.log("shanchu")
        var _this = this;
        $(_this).parent().parent().remove();

    }

    $('.modify-btn').on('click',editLifun)
    //修改指定标签
    function editLifun() {
        $(this).parent().parent().addClass('current')
        $('.ul-input-mask3').show();

    }
    function ulSureBtnClick3() {
        if(UlInputValue3){
            $('#ul-list1').find('.current').find('p').html(UlInputValue3);
        }else{
            alert('请输入要修改的内容')
        }
        $('.ul-input-mask3').hide();
        $('#ul-list1').find('.current').removeClass('current')

    }

}
/**
 * Created by supfn on 2017/5/22.
 */
