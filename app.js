//selectors
var remove_cart_item_button = document.getElementsByClassName('btn_remove')
var parent = document.getElementsByClassName('first_item')

//event listeners
for (var i =0; i < remove_cart_item_button.length; i++){
    var button = remove_cart_item_button[i]
    button.addEventListener ('click', function(event) {
        var buttonclicked = event.target  
        buttonclicked.parentElement.parentElement.remove()
        update_cart_total()
    })
}


//functions
function update_cart_total(){
var cart_item_container =document.getElementsByClassName('cake_cart')[0]
var cart_rows =document.getElementsByClassName('cart_cake_to_buy')
for (var i =0; i < cart_rows.length; i++){
    var cart_rows =cart_rows[i]
    var price_element =cart_rows.getElementsByClassName('cart_price')[0]
}
}