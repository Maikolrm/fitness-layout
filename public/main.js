$(document).ready(function() {
	let hover = $('.main__glass-hover')
	let header = $('.main__header')
	let showBtn = $('.main__show-header-btn')
	let = closeBtn = $(header).find('button.header__close-btn')
	// show header
	function showHeader() {
		$(hover).fadeIn(10)
		$('body').addClass('hide')
		$(header).addClass('visible')
	}
	// hide header
	function hideHeader() {
		$(hover).fadeOut(10)
		$('body').removeClass('hide')
		$(header).removeClass('visible')
	}
	// show header
	$(showBtn).on('click', () => showHeader() )
	// close header
	$(closeBtn).on('click', () => hideHeader())
	// scroll event
	$(this).on('scroll', function() {
		if ($(this).scrollTop() > 100 && $(this).innerWidth() > 780) {
			$(header).addClass('changed')
		} else {
			$(header).removeClass('changed')
		}
	})
})
