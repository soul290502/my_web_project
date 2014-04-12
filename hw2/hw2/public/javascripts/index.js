(function(){

// 插入 <ul> 之 <li> 樣板
var tmpl = '<li><input type="text"><span></span></li>',
    addButton = $('#add'),
    connected = $('.connected'),      // 三個 <ul>
    placeholder = $('#placeholder'),  // 三個 <ul> 的容器
    mainUl = $('.main'),              // main <ul>
    deleteUl = $('.delete'),          // delete <ul>
    doneUl = $('.done');              // done <ul>

    $('#add').on('click',function(){
    	// 	alert("dss");
    	$(tmpl).addClass('is-editing').appendTo(mainUl).find('input').focus();
	});

	$('ul').on('keyup','input',function(e){
		var input=$(this),
			li=input.parent('li');
		// alert(e.which);

		if(e.which===13){
			li.find('span').text(input.val());
			li.removeClass('is-editing');
		}
	});
}());