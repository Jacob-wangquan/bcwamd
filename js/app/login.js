/**
 * Created by user on 2016/12/22.
 */
require(['jquery'],function ($) {
  $(function () {
    function changeLogin(obj) {
      var target = obj.find('input');
      $(target).focus(function () {
        obj.find('span').css('background',"#1c9cf2");
        obj.find('span i').css('color',"#fff");
      });
      $(target).blur(function () {
        obj.find('span').css('background',"#fff");
        obj.find('span i').css('color',"#ccc");
      });
    }
    changeLogin($('.login_name'));
    changeLogin($('.login_password'));

//            验证用户名，密码是否输入
    function validateUser() {
      $('#loginBtn').on('click',function () {
        if($('#username').val() === '') {
          alert('用户名不能为空！');
          $('#username').focus();
          return false;
        }
        else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($('#username').val()))){
          alert("手机号不正确！");
          $('#username').focus();
          return false;
        }
        if($('#password').val() === '') {
          alert('密码不能为空！');
          $('#password').focus();
          return false;
        }
        alert('登录成功');

      });
    }
    validateUser();
  });
});