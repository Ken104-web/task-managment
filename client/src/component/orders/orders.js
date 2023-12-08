import React from 'react';
import css from './orders.css'
import { groupNumber, ordersData } from '../data/data';
import { Box } from '@chakra-ui/react';
const Orders = () => {
    return ( 
        <div className= {`${css.notification}, theme-container`}>
            <Box 
             display="flex"
             flexDirection="column"
             gap="2rem"
             justifyContent="center"
             alignItems="center"
             fontWeight='bold'
             color='white'
             height='40px'
            >Items For Tasks</Box>
                <div className='Head'>
                <img src="./task.webp" alt="logo" />
                <span>
                    Order By
                </span>
                </div>
                <div className= 'stat'>
                <span>Amount</span>
                <span>$ {groupNumber(4560)}</span>
            </div>

            <div className={css.orders}>
                {
                    ordersData.map((order, index) => (
                        <div key={index} className='orderY'>
                            <div>
                                <span>{order.name}</span>
                                <span>$ {order.change}</span>
                            </div>
                            <div>
                                <span>{order.type}</span>
                                <span>Items: {order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className={css.orderChart}>
                <span>Split by orders</span>
            </div>
        </div>
     
     );
}
 
export default Orders;