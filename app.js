//selectors
var remove_cart_item_button = document.getElementsByClassName('btn_remove')
var parent = document.getElementsByClassName('first_item')

//event listeners
for (var i =0; i < remove_cart_item_button.length; i++){
    var button = remove_cart_item_button[i]
    button.addEventListener ('click', function(event) {
        var buttonclicked = event.target  
        buttonclicked.parentElement.parentElement.parentElement.remove()
        update_cart_total()
    })
}
//functions
function update_cart_total() {
    var cart_item_container = document.getElementsByClassName('cake_cart')[0]
    var cart_rows= cart_item_container.getElementsByClassName('cart_rows')
    var total = 0
    for (var i =0; i < cart_rows.length; i++){
        var cart_rows=cart_rows[i]
        var price_element =cart_rows.getElementsByClassName('price')[0]
        var quantity_element=cart_rows.getElementsByClassName('quantity') [0]
        var price = parseFloat( price_element.innerText)
        var quantity =quantity_element.value
        total=total+(price*quantity)
        
}
document.getElementsByClassName('total_price')[0].innerText = total
}