/**
 * Created by user on 2016/12/22.
 */
require(['jquery','reveal','jquery_vector_map','china_zh','jquery_inputbox','jquery_ganged','threelink'],function ($,reveal,vector_map,china_zh,inputbox,ganged,threelink) {
  var data = threelink.list();
  $('#test1').ganged({'data': data, 'width': 100, 'height': 30});

  //数据可以动态生成，格式自己定义，cha对应china-zh.js中省份的简称
  var dataStatus = [
    {cha: 'HKG', name: '香港', num: 1000},
    {cha: 'HAI', name: '海南', num: 1000},
    {cha: 'YUN', name: '云南', num: 100},
    {cha: 'BEJ', name: '北京', num: 1000},
    {cha: 'TAJ', name: '天津', num: 1000},
    {cha: 'XIN', name: '新疆', num: 10},
    {cha: 'TIB', name: '西藏', num: 10},
    {cha: 'QIH', name: '青海', num: 100},
    {cha: 'GAN', name: '甘肃', num: 100},
    {cha: 'NMG', name: '内蒙古', num: 100},
    {cha: 'NXA', name: '宁夏', num: 100},
    {cha: 'SHX', name: '山西', num: 100},
    {cha: 'LIA', name: '辽宁', num: 1000},
    {cha: 'JIL', name: '吉林', num: 1000},
    {cha: 'HLJ', name: '黑龙江', num: 1000},
    {cha: 'HEB', name: '河北', num: 1000},
    {cha: 'SHD', name: '山东', num: 1000},
    {cha: 'HEN', name: '河南', num: 1000},
    {cha: 'SHA', name: '陕西', num: 1000},
    {cha: 'SCH', name: '四川', num: 1000},
    {cha: 'CHQ', name: '重庆', num: 1000},
    {cha: 'HUB', name: '湖北', num: 1000},
    {cha: 'ANH', name: '安徽', num: 1000},
    {cha: 'JSU', name: '江苏', num: 1000},
    {cha: 'SHH', name: '上海', num: 1000},
    {cha: 'ZHJ', name: '浙江', num: 1000},
    {cha: 'FUJ', name: '福建', num: 1000},
    {cha: 'TAI', name: '台湾', num: 100},
    {cha: 'JXI', name: '江西', num: 1000},
    {cha: 'HUN', name: '湖南', num: 1000},
    {cha: 'GUI', name: '贵州', num: 100},
    {cha: 'GXI', name: '广西', num: 100},
    {cha: 'GUD', name: '广东', num: 1000}];

  $('#container').vectorMap({
    map: 'china_zh',
    color: "#B4B4B4", //地图颜色
    onLabelShow: function (event, label, code) {//动态显示内容
      $.each(dataStatus, function (i, items) {
        if (code == items.cha) {
//                            label.html(items.name + items.des +"<br/>"+ items.tel);
          label.html("仓库数量" + "<br/>" + items.name + ":" + items.num);
        }
      });
    }
  });

  $.each(dataStatus, function (i, items) {
    if (items.num >= 1000) {
      var josnStr = "{" + items.cha + ":'#4480ac'}";//动态设定颜色，此处用了自定义简单的判断
      $('#container').vectorMap('set', 'colors', eval('(' + josnStr + ')'));
    } else if (items.num >= 100 && items.num < 1000) {
      var josnStr2 = "{" + items.cha + ":'#8eb4d1'}";
      $('#container').vectorMap('set', 'colors', eval('(' + josnStr2 + ')'));
    } else {
      var josnStr3 = "{" + items.cha + ":'#dce8f1'}";
      $('#container').vectorMap('set', 'colors', eval('(' + josnStr3 + ')'));
    }
  });
  $('.jvectormap-zoomin').click(); //放大


  var data = ['电子产品','食品','衣服','电子产品','数码3C','衣服','电子产品','食品','衣服'];

  var Ul = $('<ul class="modalbox modalbox-kind"></ul>');
  Ul.appendTo($('.insertHere-kind'));
  for(var i = 0;i<data.length; i++){
    var Li = $('<li class="checkbox-item">'+data[i]+'</li>');
    Li.appendTo(Ul);
  }
  var lis = $('.modalbox-kind li') ;
  for(var i= 0;i<lis.length;i++){
    $(lis[i]).on('click',function () {
      if($(this).hasClass('select')){
        $(this).removeClass('select');
      }else{
        $(this).addClass('select');
      }
    });
  }

  $('.submit-kind').click(function () {
    $('#myModal-kind').css('visibility','hidden');
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
    if(select.length > 0) $('#kind').val(select);
    console.log(select);
  }
  outPutselect();

  $(function () {
    var data2 = ['10-50平米','50-100平米','100-200平米','200-500平米','500-1000平米','1000-5000平米','5000-10000平米','10000平米以上'];
    var data3 = ['10个以下','50-100个','100-500个','500-1000个','1000-5000个','5000-10000个','10000以上'];

    var Ul = $('<ul class="modalbox modalbox-area"></ul>');
    var Ul3 = $('<ul class="modalbox modalbox-tpNum"></ul>');
    Ul.appendTo($('.insertHere-area'));
    Ul3.appendTo($('.insertHere-area'));
    for(var i = 0;i<data2.length; i++){
      var Li = $('<li class="checkbox-item">'+data2[i]+'</li>');
      Li.appendTo(Ul);
    }
    var lis = $('.modalbox-area li') ;
    for(var i= 0;i<lis.length;i++){
      $(lis[i]).on('click',function () {
        $(this).siblings().removeClass('select');
        $(this).addClass('select');
      });
    }

    for(var j = 0;j<data3.length; j++){
      var Li3 = $('<li class="checkbox-item3">'+data3[j]+'</li>');
      Li3.appendTo(Ul3);
    }
    var lis3 = $('.modalbox-tpNum li') ;
    for(var k= 0;k<lis3.length;k++){
      $(lis3[k]).on('click',function () {
        $(this).siblings().removeClass('select');
        $(this).addClass('select');
      });
    }

    $('.submit-area').click(function () {
      $('#myModal-area').css('visibility','hidden');
      $('.reveal-modal-bg').hide();
      outPutselect();
    });

    //输出选中的项
    function outPutselect() {
      var selectArea = '';
      var selectTpNum = '';
      for(var i = 0;i<lis.length; i++){
        if($(lis[i]).hasClass('select')){
          selectArea = $(lis[i]).text();
        }
      }
      for(var k = 0;k<lis3.length; k++){
        if($(lis3[k]).hasClass('select')){
          selectTpNum = $(lis3[k]).text();
        }
      }
      if(selectArea || selectTpNum) $('#selectArea').val(selectArea+'/'+selectTpNum);
      console.log(selectArea+'/'+selectTpNum);
    }
  });
});