/**
 * Created by user on 2016/12/22.
 */
require(['jquery','jqui','jquery_inputbox','jquery_ganged','threelink','reveal'],function ($,$UI,inputbox,ganged,threelink,reveal) {
  var data = threelink.list();
  $('#test1').ganged({'data': data, 'width': 100, 'height': 30});

  // 日期挑选
  $( "#from" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#to" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#to" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#from" ).datepicker( "option", "maxDate", selectedDate );
    }
  });

  // 可以多选或输入
  var data_goods = ['电子产品','食品','衣服','电子产品','数码3C','衣服','电子产品','食品','衣服','其他'];
  var data_whType = ['仓库类型1','仓库类型2','仓库类型1','仓库类型1','仓库类型1','仓库类型1','仓库类型1','仓库类型1','仓库类型1','其他'];

  modalFun(data_goods,$('.insertHere-goods'),$('#myModal-goods'),$('#goods'));
  modalFun(data_whType,$('.insertHere-whType'),$('#myModal-whType'),$('#whType'));
  function modalFun(data,insertTarget,modal,id) {
    var Ul = $('<ul class="modalbox"></ul>');
    Ul.appendTo(insertTarget);
    var otherBox = $('<input class="otherBox_input" type="text" placeholder="请输入其他">');
    otherBox.appendTo(insertTarget);
    for(var i = 0;i<data.length; i++){
      var Li = $('<li class="checkbox-item">'+data[i]+'</li>');
      Li.appendTo(Ul);
    }
    var lis = insertTarget.find('li') ;
    for(var i= 0;i<lis.length;i++){
      $(lis[i]).on('click',function () {
        otherBox.val('').hide();
        if($(this).hasClass('select')){
          $(this).removeClass('select');
        }else{
          $(this).addClass('select');
        }
      });
    }
    //如果最后一个为其他
    if($(lis[lis.length-1]).text() === '其他' ){
      $(lis[lis.length-1]).on('click',function () {
        for(var i= 0;i<lis.length;i++){
          $(lis[i]).removeClass('select');
        }
        otherBox.show();
      });
    }
    $('.submit-kind').click(function () {
      modal.css('visibility','hidden');
      $('.reveal-modal-bg').hide();
      outPutselect();
    });
    //输出选中的项
    function outPutselect() {
      var select = [];
      for(var i = 0;i<lis.length; i++){
        if($(lis[i]).hasClass('select')){
          select.push($(lis[i]).text());
        }
      }
      if(otherBox.val() !== ''){
        select.push(otherBox.val());
      }
      if(select.length > 0) id.val(select);
      console.log(select);
    }
    outPutselect();
  }
  
  // 显示切换 toggle
  function toggleFun(ele,box) {
    $(ele).click(function () {
      $(box).toggle('blind',400);
    });
  }
  toggleFun('.hasFrame','.hasFrame_box');
  toggleFun('.hasChildWh','.hasChildWh_box');
  toggleFun('.hasPlane','.hasPlane_box');
  toggleFun('.hasPlaneChildWh','.hasPlaneChildWh_box');
});