/**
 * Created by supfn on 2017/5/18.
 */
window.onload = function () {

    var order,
        inputValue,
        ulInputValue,
        BeforeItemVal,  //保存输入前的值
        $item = $('.item'), // jquery取得的dom，前面可以加一个$符号，可以一眼就知道是用jquery取的
        // $item = document.getElementsByClassName('item'), // ?? 为什么取了两次
        item = [];

    //记录输入框中的值
    function inputLinstner() {
        inputValue = $('#input').val();
        ulInputValue = $('#ul-input').val(); // 驼峰法命名
        ulInputValue2 = $('#ul-input2').val();
        ulInputValue3 = $('#ul-input3').val();

    }

    //点击单个div，将输入框中的值复制给点击div中的p标签
    function click() {
        var _this = this;
        order = $(_this).attr("data-index");
        BeforeItemVal = $item[order - 1].getElementsByTagName('p')[0].innerHTML;
        $('.input-mask').show()
    }
    //点击确定按钮
    $('#button').on('click',function () {
        if( inputValue == undefined){
            $(".item[data-index="+order+"]").html(BeforeItemVal);
        }else{
            $(".item[data-index="+order+"]").text(inputValue);
        }
        $('#input').val("")
        $('.input-mask').hide()
    })

    $('.item').on('click',click);

    $('#input').on('input',inputLinstner);
    $('#ul-input').on('input',inputLinstner);
    $('#ul-input2').on('input',inputLinstner);
    $('#ul-input3').on('input',inputLinstner);



    var selectLi;       //定义变量，保存选中的标签
    var editLi = false; //保存修改后的标签
    $('#insertEnd').on('click',insertEndclick);
    $('#ul-sure-button').on('click',ulSureBtnClick);
    $('#insert').on('click',insertThere);
    $('#ul-sure-button2').on('click',ulSureBtnClick2);
    $('.submit-button').on('click',ulSureBtnClick3);
    $('#delete').on('click',deleteLi);
    $('#edit').on('click',editLifun)
    var ulList1 = document.getElementById('ul-list1')
    var Oli = ulList1.getElementsByTagName('li');
    $('#ul-list1 li').on('click',liChoose)

    function insertEndclick() {
        $('.ul-input-mask').show();
    }
    //新增li至末位
    function ulSureBtnClick() {
        if(ulInputValue){
            var newLi = document.createElement('li');
            newLi.innerHTML = ulInputValue;
            newLi.onclick = liChoose;
            $('#ul-list1').append(newLi)
        }else{
            alert('请输入要插入内容')
        }
        $('.ul-input-mask').hide();
    }
    //新增li至指定位置
    function insertThere() {
        if(selectLi){
            $('.ul-input-mask2').show();
        }else{
            alert('请先选择要插入的位置')
        }

    }
    function ulSureBtnClick2() {

        if(ulInputValue2){
            var newLi = document.createElement('li');
            newLi.innerHTML = ulInputValue2;
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
    //高亮选中的标签
    function liChoose() {
        $(this).addClass('cur').siblings().removeClass('cur')
        selectLi = this;
    }

    //删除指定标签
    function deleteLi() {
        if(selectLi){
            selectLi.parentElement.removeChild(selectLi);
        }else{
            alert("请选择要删除的标签")
        }
    }

    //修改指定标签
    function editLifun() {
        if(selectLi){
            $('.ul-input-mask3').show();
        }else{
            alert('请选择要修改的标签')
        }
    }
    function ulSureBtnClick3() {
        if(ulInputValue3){
            var newLi = document.createElement('li');
            selectLi.innerHTML = ulInputValue3;
        }else{
            alert('请输入要修改的内容')
        }
        $('.ul-input-mask3').hide();
        /*for(var i=0;i<Oli.length;i++){
            $(Oli[i]).removeClass('cur')
        }*/
    }
}
