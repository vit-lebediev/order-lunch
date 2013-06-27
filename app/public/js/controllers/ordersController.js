
function OrdersController()
{

	// bind event listeners to button clicks //
	var that = this;

	// handle user logout //
	$('#btn-logout').click(function(){ that.attemptLogout(); });

	this.attemptLogout = function()
	{
		var that = this;
		$.ajax({
			url: "/home",
			type: "POST",
			data: {logout : true},
			success: function(data){
				that.showLockedAlert('You are now logged out.<br>Redirecting you back to the homepage.');
			},
			error: function(jqXHR){
				console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
			}
		});
	}

	this.showLockedAlert = function(msg){
		$('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
		$('.modal-alert .modal-header h3').text('Success!');
		$('.modal-alert .modal-body p').html(msg);
		$('.modal-alert').modal('show');
		$('.modal-alert button').click(function(){window.location.href = '/';})
		setTimeout(function(){window.location.href = '/';}, 3000);
	}

}

OrdersController.prototype.onPlaceSuccess = function()
{
	$('.modal-alert').modal({ show : false, keyboard : true, backdrop : true });
	$('.modal-alert .modal-header h3').text('Success!');
	$('.modal-alert .modal-body p').html('Заказ принят, перенаправляем на страницу заказов...');
	$('.modal-alert').modal('show');
	$('.modal-alert button').off('click');
	setTimeout(function(){window.location.href = '/orders';}, 3000);
}

OrdersController.prototype.onManageSuccess = function(button)
{
	$('.modal-alert').modal({ show : false, keyboard : true, backdrop : true });
	$('.modal-alert .modal-header h3').text('Success!');
	$('.modal-alert .modal-body p').html('Заказ обработан');
	$('.modal-alert').modal('show');
	$('.modal-alert button').off('click');
	setTimeout(function(){$('.modal-alert').modal('hide');}, 3000);

	$(button).siblings('em').removeClass('hide');
	$(button).closest('tr').removeClass('warning').addClass('success');
	$(button).remove();
}

OrdersController.prototype.onManageFail = function()
{
	$('.modal-alert').modal({ show : false, keyboard : true, backdrop : true });
	$('.modal-alert .modal-header h3').text('Success!');
	$('.modal-alert .modal-body p').html('Ошибка обработки заказа. Попробуйте ещё раз, или обратитесь к разработчику');
	$('.modal-alert').modal('show');
	$('.modal-alert button').off('click');
	setTimeout(function(){$('.modal-alert').modal('hide');}, 3000);
}
