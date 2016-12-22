/**
 * Created by user on 2016/12/22.
 */
require(['jquery','jquery_inputbox','jquery_ganged','threelink'],function ($,input,ganged,threelink) {

    var data = threelink.list();
    $('#test1').ganged({'data': data, 'width': 100, 'height': 30});

//  上传图片
    var Img = $('<img class="insertImg">');
    $('#license').change(function () {
      var regExp = /\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test($('#license').val());
      if(!regExp && $('#license').val() !== ''){
        alert("图片类型必须是.gif,jpeg,jpg,png中的一种");
        return false;
      }
      if($('#license').val() && regExp){
        $('.license').hide();
        Img.appendTo($('.uploadBox'));
        var objUrl = getObjectURL(this.files[0]) ;
        console.log(objUrl);
        if (objUrl) {
          Img.attr("src", objUrl) ;
        }
      }
    });

    //获取图片的路径，该路径不是图片在本地的路径
    function getObjectURL(file) {
      var url = null ;
      if (window.createObjectURL!=undefined) {
        url = window.createObjectURL(file) ;
      } else if (window.URL!=undefined) {
        url = window.URL.createObjectURL(file) ;
      } else if (window.webkitURL!=undefined) {
        url = window.webkitURL.createObjectURL(file) ;
      }
      return url ;
    }

//          发送短信验证码
    var getValidate = document.getElementById('getValidate');
    function sendMessage() {
      if($('#mobile').val() === ''){
        alert('请输入手机号');
        return false;
      }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($('#mobile').val()))){
        alert("手机号不正确！");
        return false;
      }else{
        $('.getValidate').css({'background':'#ccc','color':'#0a6cd6'});
      }
      var countDown = 60;
      function setTime(val) {
        if(countDown === 0){
          $('.getValidate').bind('click',sendMessage);
          countDown = 60;
          $('.getValidate').css({'background':'#0a6cd6','color':'#fff'});
          $('.getValidate').text('获取验证码');
          return;
        }else{
          $('.getValidate').unbind('click',sendMessage);
          countDown--;
          $('.getValidate').css({'background':'#ccc','color':'#0a6cd6'});
          $('.getValidate').text(countDown+'s后重新发送');
        }
        setTimeout(function () {
          setTime(val);
        },1000);
      }
      setTime($(this));
    }
    $('.getValidate').bind('click',sendMessage);
    //点击注册 验证
    $('#registerBtn').on('click',function () {
               if($('#companyName').val() === ''){
                   alert('请输入公司名称');
                   return false;
               }
               if($('#province .selected').text() === '请选择'){
                   alert('请选择省份');
                   return false;
               }
               if($('#city .selected').text() === '请选择'){
                   alert('请选择城市');
                   return false;
               }
               if($('#area .selected').text() === '请选择'){
                   alert('请选择区/县');
                   return false;
               }
               if($('#detailAddress').val() === ''){
                   alert('请输入详细地址');
                   return false;
               }
               checkPhone($('#mobile'));
               if($('#validateCode').val() === ''){
                   alert('请输入验证码');
                   return false;
               }
               if($('#validateMessage').val() === ''){
                   alert('请输入短信验证码');
                   return false;
               }
               if($('#password').val() === ''){
                   alert('请输入密码');
                   return false;
               }
               if($('#passwordAgain').val() === ''){
                   alert('请再次输入密码');
                   return false;
               }
      // 如果没有图片就判断

      if(!$('.insertImg').attr('src') && !/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test($('#license').val())){
        alert('请上传图片');
        return false;
      }

      if(!$('#checked').is(':checked')){
        alert('请同意《用户协议》');
        return false;
      }
    });
    // 验证手机
    function checkPhone(obj) {
      if(obj.val() === ''){
        alert('请输入手机号');
        return false;
      }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(obj.val()))){
        alert("手机号不正确！");
        return false;
      }
    }
  
});