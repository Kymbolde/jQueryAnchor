$(document).ready(function() {

	$(function() {
		$('#anchor1').click(function() {
			$('html, body').animate({
				scrollTop: $("#part-two").offset().top 
			}, 2000)
		return false;
		})
	})

	$(function() {
		$("#anchor2").click(function() {
			$("html, body").animate({
				scrollTop: $("#part-three").offset().top
			}, 2000)
			return false;
		})
	})

	$(function() {
		$('#link2').click(function() {
			$('html, body').animate({
				scrollTop: $("#part-two").offset().top 
			}, 2000)
		return false;
		})
	})

	$(function() {
		$("#link3").click(function() {
			$("html, body").animate({
				scrollTop: $("#part-three").offset().top
			}, 2000)
			return false;
		})
	})

	$(function() {
		$("#link1").click(function() {
			$("html, body").animate({
				scrollTop: $("#part-one").offset().top
			}, 2000)
			return false;
		})
	})

});
