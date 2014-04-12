(function(){

// 插入 <ul> 之 <li> 樣板
var tmpl = '<li><input type="text"><span></span></li>',
    addButton = $('#add'),
    connected = $('.connected'),      // 三個 <ul>
    placeholder = $('#placeholder'),  // 三個 <ul> 的容器
    mainUl = $('.main'),              // main <ul>
    deleteUl = $('.delete'),          // delete <ul>
    doneUl = $('.done');              // done <ul>


    loadLocal();
    $('#add').on('click',function(){

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

	
	mainUl.sortable();
	mainUl.on('sortstop',function(){
			save();
	});



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


