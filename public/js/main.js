$(function(){

	$('#translate').on('submit', function(event){
		event.preventDefault();
		$.ajax({
			method 	: 'GET',
			url		: '/translate',
			data	: $('#translate').serialize(),
			success : function(data){
				$('.translation').append('<h3>' + data.originalText + '</h3><h1>' + data.translatedText + '</h1>')
			}
		})
	});

	$('.nav li').on('click', function(){
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
	});

});