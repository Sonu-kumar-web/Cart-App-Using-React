import React from 'react';

class CartItem extends React.Component{
    // Set state 
    constructor(){
        super();
        this.state={
            price: 999,
            title: 'Mobile phone',
            qty: 1,
            img: ''
        }

        // Method 2 for increase
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    // Method 1 for increase
    // increaseQuantity () {
    //     console.log('this', this.state);
    // }

    // Method 3 For increase
    increaseQuantity = () => {
        console.log('this', this.state);
    }

    render(){
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img  style={ styles.images } alt="" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }} > {title} </div>
                    <div style={{ color: '#777' }} >Rs. {price} </div>
                    <div style={{ color: '#777' }} >Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        {/* copy icon address from https://www.flaticon.com/ and paste in src */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828926.svg" 

                            // for Method 1
                            // onClick={this.increaseQuantity.bind(this)}

                            // For method 2 and 3
                            onClick={this.increaseQuantity}

                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        />

                    </div>
                </div>
            </div>
        );
    }
}

const styles={
    images: {
        height: 130,
        width: 130,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;