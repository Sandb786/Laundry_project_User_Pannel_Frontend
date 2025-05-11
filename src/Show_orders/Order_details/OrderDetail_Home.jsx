import React from 'react'
import Hadder from './Hadder'
import ShowDetail from './ShowDetail'

export default function OrderDetail_Home({order}) 
{
  return (
    <div>
        <div className='p-4 -mt-2'>
             {/* <Hadder order={order}/> */}
        </div>
        <div className='p-0'>
             <ShowDetail order={order}/>
        </div>
    </div>
  )
}
