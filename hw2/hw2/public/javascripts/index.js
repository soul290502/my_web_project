(function(){

// 插入 <ul> 之 <li> 樣板
var tmpl = '<li><input type="text"><span></span><a class="del">刪除</a></li>',
    addButton = $('#add'),
    connected = $('.connected'),      // 三個 <ul>
    placeholders = $('#placeholders'),  // 三個 <ul> 的容器
    mainUl = $('.main'),              // main <ul>
    deleteUl = $('.delete'),          // delete <ul>
    doneUl = $('.done');              // done <ul>


    
    $('#add').on('click',function(){
// alert('HI');
    	$(tmpl).addClass('is-editing').appendTo(mainUl).find('input').focus();
	});

	$('ul').on('keyup','input',function(e){
		var input=$(this),
			li=input.parent('li');
		if(e.which===13){
			li.find('span').text(input.val());
			li.removeClass('is-editing');
			save();
		}	
	});

$(placeholders).on('click','.del',function(){
	// alert($('.del').index(this));//可以顯示index
	$(this).parents('li','span').remove();
    save();
	// alert($(this).index());//不行顯示
});

	// mainUl.sortable();

	$('#main').sortable({
		connectWith:'.connected',
		start:function(e,ui){

			$('#placeholders').addClass('is-dragging');
			// alert(ui.item.index());
		},
		// placeholders:{
		// 	element:function(clone,ui){
		// 		return $(tmpl).find('span').;
		// 	},
		// 	update:function(){
		// 		return;
		// 	}
		helper:"clone"
		,
		remove:function(e,ui){
			// ui.item.clone().addClass('is-done').appendTo('#main');
			$(this).parents('li','span').remove();
			// save();
			// $(this).addClass('is-done');
		},
		stop:function(){
			$('#placeholders').removeClass('is-dragging');
			save();
		}
	});
	$('#delete').sortable({
		connectWith:'.connected',
		receive:function(){
			
			// alert('commmmmmmm');
		}
	});
	$('#done').sortable({
		connectWith:'.connected',
		receive:function(e,ui){
			ui.item.clone().addClass('is-done').appendTo('#main');
			ui.item.addClass('is-done');
			// alert('commmmmmmm');
		}
	});
	loadLocal();

	// mainUl.on('sort',function(e,ui){

	// 	$('#placeholders').addClass('is-dragging');

	// // 	// $(deleteUl).mouseenter(function(){
	// // 	// 	$('#placeholders').addClass('is-dragging-enter');
	// // 	// 	ui.item.addClass('is-done');
	// // 	// });
	// // 	// $(deleteUl).mouseout(function(){
	// // 	// 	$('#placeholders').removeClass('is-dragging-enter');
	// // 	// });
	// });
	


		// $(deleteUl).on('sortreceive',function(){
		// 	alert('hiiiiiiii');
		// 	ui.item.addClass('is-done');
		// });

	// mainUl.on('sortstop',function(e,ui){

	// 	// $(deleteUl).on('sortreceive',function(){
	// 	// 	alert('hiiiiiiii');
	// 	// 	ui.item.addClass('is-done');
	// 	// });
	// 	// if($(deleteUl).mouseenter()){
	// 	// 	 alert($(deleteUl).mouseenter());
	// 	// 	// console.log(ui.item);
	// 	// 	// ui.item.addClass('is-done');
	// 	// };
	// 	$('#placeholders').removeClass('is-dragging');
	// 	save();
	// });



	function save(){
		var data=[];
		$('ul').find('li').each(function(){
			data.push($(this).find('span').text());
		});
		localStorage.list=JSON.stringify(data);
	}

	function loadLocal(){
		var arr=JSON.parse(localStorage.list),i;
		for(i=0;i<arr.length;i++){
			$(tmpl).appendTo(mainUl).find('span').text(arr[i]);
		};
	}

}());


