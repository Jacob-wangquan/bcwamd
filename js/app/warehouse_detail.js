/**
 * Created by user on 2016/12/22.
 */
require(['jquery','reveal','imgflash'],function ($,reveal,imgflash) {
  //仓库全景 图片切换
  imgflash.flash();

  // 仓库详情/评论tab切换
  $(".con").eq(0).show();
  $(".btn span").eq(0).addClass('colorBlue');
  $(".btn span").click(function(){
    var num =$(".btn span").index(this);
    $(".con").hide().eq(num).show();
    $(".btn span").eq(num).addClass('colorBlue').siblings().removeClass('colorBlue');
  });

  $('.wh_detail_ul .wh_detail_list:even').css('background','#f2f6f9');
});