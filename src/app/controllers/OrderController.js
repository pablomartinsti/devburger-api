import * as Yup from 'yup'
import Order from '../schemas/Order.js';

class OrderController {

   async store(request, response) {
   

        const order = {
            user:{
                id: request.userId,
                name: request.userName
            }
        }

        
        return response.status(201).json(order)
    }

  
}


export default new OrderController()