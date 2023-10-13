$(document).ready(function() {

	$('.add-to-busket-block').hide();


	$('.add-to-busket-btn').on('click', function() {
		$('.add-to-busket-block').show();
		$('.count-input').val("0");
	});

	$('.btn-plus').on('click', function() {
	var a;
	a= parseInt(($('.count-input').val()))+1;
		$('.count-input').val(a);
	});

	$('.btn-minus').on('click', function() {
	var a;
	a= parseInt(($('.count-input').val()))-1;

		if(a>=0){
		$('.count-input').val(a);
		}
		else{
			a=0;
		}
	});

	$('.btn-close').on('click', function() {
	$('.add-to-busket-block').hide();
	});

	$('.close').on('click', function() {
	$('.add-to-busket-block').hide();
	});

	let cart = new Array();
	cart=[];

	$('.ok-1').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(0, a);
	});
	$('.ok-2').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(1, a);
	});
	$('.ok-3').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(2, a);
	});
	$('.ok-4').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(3, a);
	});
	$('.ok-5').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(7, a);
	});
	$('.ok-6').on('click', function() {
                var a = $('.count-input').val();
                AddToCard(6, a);
          });

	function AddToCard(n, amount){
		if(amount>0)
		{
			cart[n]=amount;
		}
	}

	function addRow() {
		for(let i=0; i<cart.length; i++){

		if(cart[i]>0){
		/*	document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product"></input>
			<input readonly class="amount"></input>
			</div>`
			) */

			switch(i) {
				case 0:
					//var t = "Dessert candle";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product0"></input>
			<input readonly class="amount0"></input>
			</div>`)
			$('.product0').val("Dessert candle");
			$('.amount0').val(cart[i]);
					break;

				case 1:
					//var t = "Pink couch";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product1"></input>
			<input readonly class="amount1"></input>
			</div>`)
			$('.product1').val("Pink couch");
			$('.amount1').val(cart[i]);
					break;

				case 2:
					//var t = "Handmade cup";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product2"></input>
			<input readonly class="amount2"></input>
			</div>`)
			$('.product2').val("Handmade cup");
			$('.amount2').val(cart[i]);
					break;

				case 3:
					//var t = "Pearl earrings heart";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product3"></input>
			<input readonly class="amount3"></input>
			</div>`)
			$('.product3').val("Pearl earrings heart");
			$('.amount3').val(cart[i]);
					break;

                case 4:
                    //var t = "My Dress-Up Darling";
            document.querySelector('.cart-body').insertAdjacentHTML(
            'afterbegin',
            `<div class="row">
            <input readonly class="product4"></input>
            <input readonly class="amount4"></input>
             </div>`)
            $('.product4').val("Kitty cutlery set");
            $('.amount4').val(cart[i]);
                    break;


                case 5:
                    //var t = "Kitty cutlery set";
            document.querySelector('.cart-body').insertAdjacentHTML(
            'afterbegin',
            `<div class="row">
            <input readonly class="product5"></input>
            <input readonly class="amount5"></input>
            </div>`)
            $('.product5').val("My Dress-Up Darling");
            $('.amount5').val(cart[i]);
                    break;

				default:

				break;
			}
		//$('.product').val(t);
		//$('.amount').val(cart[i]);
		}
		}
	}

	window.clearCart = function clearCart(){
		for(let i=0; i<cart.length; i++){
			cart[i]=0;
		}
	}
	$('.cart-link').on('click', function(){
		console.log(cart);
		$('.cart-body').html('');
		addRow();
	});

	$('.btn-order').on('click', function() {
		//console.log(cart.length);
		for(let i=0; i<cart.length; i++){
		if(cart[i] != null){
			if(cart[i] >0) {
			var product_n = i;
			var amount = cart[i];
				$.ajax({
					type: "POST",
                    url:'/../php/insert.php',
                    method:'POST',
                    data:{
                        product_n:product_n,
                        amount:amount
                    },
                   success:function(data){
                       alert(data);
                   }
                });
			}
		}
		}
	});

});