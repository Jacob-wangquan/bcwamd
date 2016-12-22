/**
 * Created by user on 2016/12/22.
 */
require.config({
  baseUrl:'js/',
  paths:{
    jquery:'lib/jquery.min',
    jquery_flexslider:'lib/jquery.flexslider-min',
    jquery_inputbox: 'lib/jquery.inputbox',
    jquery_ganged: 'lib/jquery.ganged',
    threelink: 'module/threelink',
    jqui: 'lib/jqueryUI.1.10.4',
    reveal: 'lib/jquery.reveal',
    datepicker: 'lib/datepicker-zh-CN',
    china_zh: 'lib/china-zh',
    jquery_vector_map:'lib/jquery.vector-map',
    imgflash: 'module/imgflash'
  },
  shim: {
    imgflash:{
      deps:['jquery'],
      exports: 'imgflash'
    }
  }
});

require(['jquery'],function ($) {
  var jsUrl = $('body').attr('my-js');
  require([jsUrl],function () {
    
  });
});