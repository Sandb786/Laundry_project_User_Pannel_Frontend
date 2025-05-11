import React from 'react'
import Hadder from './Hadder'
import ShowDetail from './ShowDetail'

export default function OrderDetail_Home({order}) 
{
  return (
    <div>
        <div className=''>
             <ShowDetail order={order}/>
        </div>
    </div>
  )
}
