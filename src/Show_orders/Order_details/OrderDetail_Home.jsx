import React from 'react'
import ShowDetail from './ShowDetail'
import ModifyOrderModal from './Container/ModifyOrderModal'
import CancelOrderModal from './Container/CancelOrderModal'




export default function OrderDetail_Home({order}) 
{
  return (
    <div>
        <div className=''>
             <ShowDetail order={order} />
        </div>
    </div>
  )
}
