import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addItemToCard, qtyChanged } from '../redux/actions'




const SingleCartItem = ({id,image,name,price,amount,itemQty,quantity,addItemToCardAction}) => {

    const [qtyofItem,setQtyofItem] = useState(parseInt(itemQty));
    useEffect(() => {
      setQtyofItem(itemQty)
    }, [itemQty])
    const [total, setTotal] = useState(qtyofItem*price)
    useEffect(() => {
      setTotal(qtyofItem*price)
    }, [qtyofItem])
    
    return (
        <tr key={id}>
        <th className="pl-0 border-0">
          <div className="media align-items-center">
            <a className="d-block animsition-link">
              <img src={image} width="70" />
            </a>
            <div className="media-body ml-3">
              <strong className="h6">
                <a className="reset-anchor animsition-link">
                  {name}
                </a>
              </strong>
            </div>
          </div>
        </th>
        <td className="align-middle border-0">
          <p className="mb-0 small">${price}</p>
        </td>
        <td className="align-middle border-0">
          <div className="border d-flex align-items-center justify-content-between px-3">
            <span className="small text-uppercase text-gray headings-font-family">
              Quantity
            </span>
            <select value={parseInt(qtyofItem)} onChange={(e)=>addItemToCardAction(id,e.target.value)}>
              {
                [...Array(quantity).keys()].map((x)=>{
                  return(
                    <option key={x+1} value={x+1}> {x+1} </option>
                  )
                })
              }
            </select>
          </div>
        </td>
        <td className="align-middle border-0">
          <p className="mb-0 small">${total}</p>
        </td>
        <td className="align-middle border-0">
          <a className="reset-anchor" href="#">
            <i className="fas fa-trash-alt small text-muted"></i>
          </a>
        </td>
      </tr>
      
    )
}


const mapStateToProps = (store)=>{

      return {
        cartOfItem:store.cartItems.cart
      }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    addItemToCardAction:(id,qty)=>dispatch(addItemToCard(id,qty))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SingleCartItem)
