(function(){
    "use strict";
    // 插入 <ul> 之 <li> 樣板
  var $list=$('ul'),

  insertaa = function(content){
    // 用樣板建立一個新 <li>、放進 <ul> 的前面
    var $li = $('<li><input type="text"><span></span><a class="del">刪除</a></li>');

    if(content){
      $li.find('input').val(content);
      $li.find('span').text(content);

    }

    return $li;
  };

  if(localStorage.num){
        $.each(JSON.parse(localStorage. num),function(){
          insertaa(this).appendTo($list);
        });
      }

  // var save = function(){
  //   // 準備好要裝各個項目的空陣列
  //     var  data;
  //     data = [];
  //     $list.find('li').each(function(){
  //       data.push( $(this).find('span').text() );
  //     });
  //     localStorage.num = JSON.stringify(data);

  // };
  $('#add').click(function(){
      var $li=insertaa().addClass('editing').prependTo($list);
      $li.find('input').focus();
    });








  // $list.on('click','.del',function(){
  //   // alert("del");
  //   alert($(this).index('ul li'));
  //   // $(this).parents('li','span').remove();
  // });
  // $('ul .del').click(function(){ alert($(this).index('ul li')};

$('#getval').click(function(){
  // alert("as");
  var arr=localStorage.getItem('num');
  alert(arr.length);
  // for(var i=0;i<)
  $('p').text(arr);
});

$list.on('click','.del',function(){  //可以找index
    // alert($(this).index('ul li')+1);
    var index=$('.del').index(this);
    alert(index);

    $(this).parents('li','span').remove();
});

  $('#clear').click(function(){
     localStorage.clear();
    $('ul').find('li','span').remove();
  });



  $list.on('keypress', 'input', function(e){
    var $li,data;
    if(e.which === 13){

      // `this` is the <input>
      $li = $(this).parents('li');
      $li.find('span').text($li.find('input').val());
      $li.removeClass('editing');

      data = [];
      $list.find('li').each(function(){
        data.push( $(this).find('span').text() );
      });
     localStorage.num = JSON.stringify(data);
    }
     

  });

}());
// (function(){
//   "use strict";

//   var
//   $list = $('ul'),

//   // make an <li> element with specified text
//   makeItem = function(text){
//     var $li = $('<li><input type="text"><span></span></li>');
//     if(text){
//       $li.find('input').val(text);
//       $li.find('span').text(text);
//     }
//     return $li;
//   };

//   // load data from localStorage
//   if(localStorage.list){
//     $.each(JSON.parse(localStorage.list), function(){
//       makeItem(this).appendTo($list);
//     });
//   }

//   // event handlers
//   $('button').click(function(){
//     var $li = makeItem().addClass('editing').prependTo($list);
//     $li.find('input').focus();
//   });

//   $list.on('keypress', 'input', function(e){
//     var $li, data;

//     // when Enter is pressed, e.which === 13
//     if(e.which === 13){

//       // `this` is the <input>
//       $li = $(this).parents('li');
//       $li.find('span').text($li.find('input').val());
//       $li.removeClass('editing');

//       // save into localStorage
//       data = [];
//       $list.find('li').each(function(){
//         data.push( $(this).find('span').text() );
//       });
//       localStorage.list = JSON.stringify(data);
//     }
//   });
// }());
