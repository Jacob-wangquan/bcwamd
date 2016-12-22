/**
 * Created by user on 2016/12/22.
 */
// 实景图 轮播
var imgflash = (function () {
  var flash = function () {
    var data = ['images/wh_1.jpg','images/wh_2.jpg','images/wh_3.jpg','images/wh_4.jpg'];
    var prev = $('.prevBtn'),
      next = $('.nextBtn'),
      target = $('.imgFlash_target img'),
      ul = $('.imgFlash_small');

    //初始化
    function _init() {
      target.attr('src',data[0]);
      for(var i=0;i<data.length;i++){
        var Li = $('<li></li>');
        var Img = $('<img>');
        Img.attr('src',data[i]);
        Img.appendTo(Li);
        Li.appendTo(ul);
      }
      var lis = ul.find('li');
      $(lis[0]).addClass('imgActive');
    }
    _init();

    var lis = ul.find('li');
    var isActive = 0;
    for(var i=0;i<lis.length;i++){
      lis[i].index = i;
      $(lis[i]).on('click',function () {
        target.attr('src',data[this.index]);
        changeActive($(this));
        return isActive = this.index;
      });
    }

    var len = data.length;
    prev.on('click',function () {
      // 点击向前或者向后时，先找到active的索引
      if(isActive>=1){
        target.attr('src',data[--isActive]);
      }else{
        isActive = len;
        target.attr('src',data[--isActive]);
      }
      changeActive($(lis[isActive]));
    });

    next.on('click',function () {
      if(isActive<len-1){
        target.attr('src',data[++isActive]);
      }else{
        isActive = -1;
        target.attr('src',data[++isActive]);
      }
      changeActive($(lis[isActive]));
    });

    function changeActive(obj) {
      obj.siblings().removeClass('imgActive');
      obj.addClass('imgActive');
    }
  };

  return {
    flash: flash
  };
})();