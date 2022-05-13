import React from 'react';

const OrderDetails = ({cartItems}) => {
    const orderDetails = {
        totalOriginalPrice: 0,
        totalFinalPrice: 0,
        totalDiscount: 0,
        deliveryCharges: 50,
        totalPrice: 0,
        noOfItems: 0,
    }
    cartItems.forEach(item => {
        orderDetails.totalOriginalPrice += (item.originalPrice*item.qty);
        orderDetails.totalFinalPrice += (item.finalPrice*item.qty);
        orderDetails.noOfItems += item.qty;
    })
    orderDetails.totalDiscount = orderDetails.totalOriginalPrice - orderDetails.totalFinalPrice;
    orderDetails.totalPrice = orderDetails.totalFinalPrice + orderDetails.deliveryCharges;

    return (
        <div className="cart-price-detail-section flex-column">
            <h3>Price Details</h3>
            <div className="cart-price-breakdown">
                <hr/>
                <div className="cart-price-label-amount flex-row">
                    <h4>Price({orderDetails.noOfItems} items)</h4>
                    <span>Rs. {orderDetails.totalOriginalPrice}</span>
                </div>
                <div className="cart-price-label-amount flex-row">
                    <h4>Discount</h4>
                    <span>- Rs. {orderDetails.totalDiscount}</span>
                </div>
                <div className="cart-price-label-amount flex-row" >
                    <h4>Delivery changes</h4>
                    <span>Rs. {orderDetails.deliveryCharges}</span>
                </div>
                <hr/>
                <div className="cart-price-label-amount flex-row total-price">
                    <h4>Total amount</h4>
                    <span>Rs. {orderDetails.totalPrice}</span>
                </div>
                <hr/>
                <div className="cart-price-label-amount">
                    <h4>You will save Rs. {orderDetails.totalDiscount} on this order </h4>
                </div>
            </div>
            <button className="btn text-button">PLACE ORDER</button>
        </div>
    );
};

export default OrderDetails;