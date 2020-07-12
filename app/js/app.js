document.addEventListener("DOMContentLoaded", function () {

	$('.result__slider').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		variableWidth: true,
		touchMove: true,
		touchThreshold: 20
	});

	$('.tags').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		variableWidth: true,
		touchMove: true,
		touchThreshold: 20
	});

	$('.search-form__search-box').on('click', () => {
		$('.search-form__input').focus();
	});

	$('.search-form__input').on('focus', () => {
		$('.search-form__search-box').addClass('search-form__search-box--focus');
	});

	$('.search-form__input').on('blur', () => {
		$('.search-form__search-box').removeClass('search-form__search-box--focus');
	});

	$('.search-form__delete').on('click', () => {
		event.preventDefault();
		$('#search-input')[0].value = '';
	});

	// RANGE INPUT ///////

	let range = document.getElementById('range');

	noUiSlider.create(range, {
		start: [17000, 90000],
		range: {
			'min': [0],
			'max': [100000]
		}
	});

	$('#low-range').on('input', function () {
		this.value = this.value.replace(/[^\d\s]/g, '');
	});

	$('#low-range').on('change', function () {
		this.value = this.value.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		range.noUiSlider.set([Number(this.value.replace(/\s/g, '')), null]);
	});

	$('#high-range').on('input', function () {
		this.value = this.value.replace(/[^\d\s]/g, '');
	});

	$('#high-range').on('change', function () {
		this.value = this.value.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		range.noUiSlider.set([null, Number(this.value.replace(/\s/g, ''))]);
	});

	range.noUiSlider.on('update', function () {
		$('#low-range').val(Number.parseInt(this.get()[0]).toString().replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
		$('#high-range').val(Number.parseInt(this.get()[1]).toString().replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
	});

	///////

	$('.mask').each(function () {
		this.textContent = this.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		// this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	});

	$('#arrow').on('click', function () {
		const aside = $('.aside');
		if (document.body.clientWidth <= 420) {
			aside.removeClass('aside--modal');
			$('body').removeClass('fixed');
		} else {
			if (!aside.hasClass('aside--visible')) {
				$('.aside').addClass('aside--visible');
			} else {
				$('.aside').removeClass('aside--visible');
			}
		}


	});

	$('#show-filters').on('click', function () {
		const aside = $('.aside');
		if (!aside.hasClass('aside--modal')) {
			aside.addClass('aside--modal');
			$('body').addClass('fixed');
		} else {
			aside.removeClass('aside--modal');
			$('body').removeClass('fixed');
		}
	});

});
