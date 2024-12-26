import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

export const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
          <h2 className='title'>INFOMATION</h2>
          <div className="multi-field">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email'/>
          <input type="text" placeholder='Street'/>
          <div className="multi-field">
            <input type="text" placeholder='District'/>
            <input type="text" placeholder='City'/>
          </div>
          <input type="text" placeholder='Phone'/>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>TOTAL</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng đơn</p>
              <p>{getTotalCartAmount()}đ</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí vận chuyển</p>
              <p>{getTotalCartAmount()===0?0:2}đ</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tổng cộng</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}đ</p>
            </div>
          </div>
        <button>THANH TOÁN</button>
        </div>
      </div>
    </form>
  )
}
export default PlaceOrder