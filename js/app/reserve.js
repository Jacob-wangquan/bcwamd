/**
 * Created by user on 2016/12/22.
 */
require(['jquery','reveal','imgflash'],function ($,reveal,imgflash) {
  // 详情中的li偶数行背景加深
  $('.wh_detail_ul .wh_detail_list:even').css('background','#f2f6f9');

  //仓库全景 图片切换
  imgflash.flash();
 
});