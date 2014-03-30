// (function(){
//     "use strict";
//     // 插入 <ul> 之 <li> 樣板
//   var $list=$('ul');

//   var save=function(){
//     var data = [];
//     // var ob=$(obj);
//       $list.find('li').each(function(){
//         data.push( $(this).find('span').text() )});

//         localStorage.num = JSON.stringify(data);
//   };

//   $list.sortable();
//   $list.on('sortstop',save);

//   var insertaa = function(content){
//     // 用樣板建立一個新 <li>、放進 <ul> 的前面
//     var $li = $('<li><input type="text"><span></span><a class="del">刪除</a></li>');

//     if(content){
//       $li.find('input').val(content);
//       $li.find('span').text(content);

//     }

//     return $li;
//   };



//   if(localStorage.num){
//         $.each(JSON.parse(localStorage. num),function(){
//           insertaa(this).appendTo($list);
//         });
//       }

//   // var save = function(){
//   //   // 準備好要裝各個項目的空陣列
//   //     var  data;
//   //     data = [];
//   //     $list.find('li').each(function(){
//   //       data.push( $(this).find('span').text() );
//   //     });
//   //     localStorage.num = JSON.stringify(data);

//   // };
//   $('#add').click(function(){
//       var $li=insertaa().addClass('editing').prependTo($list);
//       $li.find('input').focus();
//     });








//   // $list.on('click','.del',function(){
//   //   // alert("del");
//   //   alert($(this).index('ul li'));
//   //   $(this).parents('li','span').remove();
//   //   save();
//   // });


//   // $('ul .del').click(function(){ alert($(this).index('ul li')};

// $('#getval').click(function(){
//   // alert("as");
//   var arr=localStorage.getItem('num');
//   alert(arr.length);
//   // for(var i=0;i<)
//   $('p').text(arr);
// });

// $list.on('click','.del',function(){  //可以找index
//     // alert($(this).index('ul li')+1);
//     var index=$('.del').index(this);
//     alert(index);

//     $(this).parents('li','span').remove();
//     save();
// });

//   $("#dialog").dialog({
//      autoOpen: false,
//       height: 300,
//       width: 350,
//       // modal: true,
//     buttons:[   //記得要加buttonsssssssssss!!!
//             {
//               text:"ok",
//               click:function(){
//                 // localStorage.clear();
//                 // $('ul').find('li','span').remove();
//                 $( this ).dialog( "close" );
//               }         
//             },
//             {
//               text:"cancel",
//               click:function(){
//                 $( this ).dialog( "close" );
//               }
//             }
//          ]
//     });


// // $( "#dialog" ).dialog({
// //       autoOpen: false,
// //       width: 400,
// //       buttons: [
// //         {
// //           text: "Ok",
// //           click: function() {
// //             alert("ji");
// //             $( this ).dialog( "close" );
// //           }
// //         },
// //         {
// //           text: "Cancel",
// //           click: function() {
// //             $( this ).dialog( "close" );
// //           }
// //         }
// //       ]
// //     });



//   $('#clear').click(function(event){   //加上詢問功能
      
//       $( "#dialog" ).dialog( "open" );
//       event.preventDefault();
//      //  localStorage.clear();
//      // $('ul').find('li','span').remove();
//   });



//   $list.on('keypress', 'input', function(e){
//     var $li,data;
//     if(e.which === 13){

//       // `this` is the <input>
//       $li = $(this).parents('li');
//       $li.find('span').text($li.find('input').val());
//       $li.removeClass('editing');

//       // data = [];    //放到save() function 中
//       // $list.find('li').each(function(){
//       //   data.push( $(this).find('span').text() );
//       //   localStorage.num = JSON.stringify(data);
//       save(data);
//       // });
     
//     }
     

//   });



//   // sortable() function include
//     $(function() {
//       $( "#sortable" ).sortable();
//       $( "#sortable" ).disableSelection();
//     });

// }());




// 
$(function() {
    var name = $( "#name" ),
      email = $( "#email" ),
      password = $( "#password" ),
      allFields = $( [] ).add( name ).add( email ).add( password ),
      tips = $( ".validateTips" );
 
    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
 
    function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "Length of " + n + " must be between " +
          min + " and " + max + "." );
        return false;
      } else {
        return true;
      }
    }
 
    function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }
 
    $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      buttons: {
        "Create an account": function() {
          var bValid = true;
          allFields.removeClass( "ui-state-error" );
 
          bValid = bValid && checkLength( name, "username", 3, 16 );
          bValid = bValid && checkLength( email, "email", 6, 80 );
          bValid = bValid && checkLength( password, "password", 5, 16 );
 
          bValid = bValid && checkRegexp( name, /^[a-z]([0-9a-z_])+$/i, "Username may consist of a-z, 0-9, underscores, begin with a letter." );
          // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
          bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. ui@jquery.com" );
          bValid = bValid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
 
          if ( bValid ) {
            $( "#users tbody" ).append( "<tr>" +
              "<td>" + name.val() + "</td>" +
              "<td>" + email.val() + "</td>" +
              "<td>" + password.val() + "</td>" +
            "</tr>" );
            $( this ).dialog( "close" );
          }
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      },
      close: function() {
        allFields.val( "" ).removeClass( "ui-state-error" );
      }
    });
 
    $( "#create-user" )
      .button()
      .click(function() {
        $( "#dialog-form" ).dialog( "open" );
      });
  });