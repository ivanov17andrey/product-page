document.addEventListener("DOMContentLoaded", function() {

	$('.result__slider').slick({
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: false,
		variableWidth: true
	});

	$('.search-form__search-box').on('click', ()=>{
		$('.search-form__input').focus();
	})

});
