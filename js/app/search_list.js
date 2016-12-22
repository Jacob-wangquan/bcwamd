/**
 * Created by user on 2016/12/22.
 */
require(['jquery','reveal','jquery_inputbox','jquery_ganged','threelink','imgflash'],function ($,reveal,input,ganged,threelink,imgflash) {
  var data2 = threelink.list();
  $('#test1').ganged({'data': data2, 'width': 100, 'height': 30});

    var data3 = [
      {
        'name': '可存货物',
        'icon_class': 'icon-location',
        'options': ['不限','电子产品','食品','电器','电子产品','食品','电器','电子产品','食品','电器','电子产品','食品','电器']
      },
      {
        'name': '仓库面积',
        'icon_class': 'icon-location',
        'options': ['10-50平米','50-100平米','100-200平米','200-500平米','500-1000平米','1000-5000平米','5000-10000平米','10000平米以上']
      },
      {
        'name': '托盘数量',
        'icon_class': 'icon-location',
        'options': ['10个以下','50-100个','100-500个','500-1000个','1000-5000个','5000-10000个','10000以上']
      },
      {
        'name': '仓库类型',
        'icon_class': 'icon-location',
        'options': ['普通仓','电商','恒温','保税','危险品库','冷冻','医疗']
      },
      {
        'name': '租用时间',
        'icon_class': 'icon-location',
        'options': ['不限','1个月起','1个月起','1个月起','1个月起','1个月起','1个月起']
      },
      {
        'name': '消防设备',
        'icon_class': 'icon-location',
        'options': ['不限','喷淋','喷淋','喷淋','喷淋','喷淋','喷淋']
      },
      {
        'name': '建筑类型',
        'icon_class': 'icon-location',
        'options': ['不限','平层','平层','平层','平层','平层','平层']
      },
      {
        'name': '仓库地坪',
        'icon_class': 'icon-location',
        'options': ['不限','防尘','防尘','防尘','防尘']
      }
    ];

    function insertCondition() {
      var conditionBox_Ul = $('.conditionBox_Ul');
      for(var i = 0;i<data3.length;i++){
        var Li = $('<li class="conditionBox_Li"></li>');
        var conditionBox_Li_title = $('<div class="conditionBox_Li_title fl"></div>');
        var icon = $("<i class='"+data3[i].icon_class+"'></i>");
        var span = $("<span>"+data3[i].name+"</span>");
        icon.appendTo(conditionBox_Li_title);
        span.appendTo(conditionBox_Li_title);
        conditionBox_Li_title.appendTo(Li);
        var conditionBox_Li_condition = $("<div class='conditionBox_Li_condition conditions fr'></div>");
        var oas = data3[i].options;
        for(var j=0;j<oas.length;j++){
          var oA = $("<a href='javascript:void(0)'></a>");
          oA.text(oas[j]);
          oA.appendTo(conditionBox_Li_condition);
        }
        conditionBox_Li_condition.appendTo(Li);
        Li.appendTo(conditionBox_Ul);
      }
      getCondition();
    }
    insertCondition();

    function getCondition() {
      // DOM加载完毕，得到有哪些条件要单选
      var conditions = $(".conditions");
      for(var i = 0;i<conditions.length;i++){
        radioFun(conditions[i],'condition_select');
      }
    }
    //单选
    function radioFun(item,selectName) {
      var childs = $(item).children();
      for(var k= 0;k<childs.length;k++){
        $(childs[k]).on('click',function () {
          $(this).siblings().removeClass(selectName);
          $(this).addClass(selectName);
          console.log($(this).text());
        });
      }
    }


  imgflash.flash();

  $('.conditionBox_Ul').children().eq(1).css('marginTop',48+'px');
});