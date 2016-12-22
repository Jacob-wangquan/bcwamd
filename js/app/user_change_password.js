/**
 * Created by user on 2016/12/22.
 */
require(['jquery','jqui'],function ($,$UI) {
  $( "#accordion" ).accordion();
//            控制各个面板的高度
  $('.userMenu_release').css('height','64px');
  $('.userMenu_collect').css('height','32px');
  $('.userMenu_userInfo').css('height','64px');
  $('.userMenu_news').css('height','64px');
});