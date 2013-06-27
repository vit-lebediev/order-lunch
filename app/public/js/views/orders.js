
$(document).ready(function(){

	var oc = new OrdersController();
	
	$('#order-form').ajaxForm({
		success	: function(responseText, status, xhr, $form){
			if (status == 'success') oc.onPlaceSuccess();
		},
		error : function(e){
			console.log(e);
		}
	});
	$('#name-tf').focus();
	$('#github-banner').css('top', '41px');

	$('.submit-order').click(function() {
		var orderId = $(this).data('orderId');
		var that = this;
		$.post('/manage-orders', {
			orderId: orderId
		}, function() {
			oc.onManageSuccess(that);
		}).fail(function() {
			oc.onManageFail();
		});
	});
})
