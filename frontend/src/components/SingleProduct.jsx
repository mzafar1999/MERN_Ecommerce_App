import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { addItemToCard } from '../redux/actions';
import Model from './Model';
const SingleProduct = ({id,name,price,image,longDescription,addItemToCardAction}) => {
    const [isOpenModel, setIsOpenModel] = useState(false);
    const open = ()=>{
      setIsOpenModel(true)
    }
    const close = ()=>{
      setIsOpenModel(false)
    }
    return (
        <div className="col-lg-4 col-sm-6">
          
        <div className="product text-center">
          <div className="mb-3 position-relative">
            <div className="badge text-white badge-"></div>
            <Link className="d-block" to={`/singleProduct/${id}`}>
              <img
                className="img-fluid w-100"
                src={image}
                alt="..."
              />
            </Link>
            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                
                <li className="list-inline-item m-0 p-0">
                  <Link className="btn btn-sm btn-dark btn-height" to={`/cart/id=${id}&qty=${1}`} onClick={()=>addItemToCardAction(id,1)}>
                    Add to cart
                  </Link>
                </li>
                <li className="list-inline-item mr-0">
                  <a
                   
                  >
                    
                        <button className='btn btn-dark btn-height' onClick={()=>open()}>
                          <i><FontAwesomeIcon   icon={faExpand}/></i>
                        </button>
                    
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Model open={isOpenModel} id={id} name={name} image={image} longDescription={longDescription} price={price} close={close} />
          <h6>
            <a className="reset-anchor" href="detail.html">
              {name}
            </a>
          </h6>
          <p className="small text-muted">${price}</p>
        </div>
      </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addItemToCardAction:(id,qty)=>dispatch(addItemToCard(id,qty))
  }
}

export default connect(null,mapDispatchToProps)(SingleProduct)
