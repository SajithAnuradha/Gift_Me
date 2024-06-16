import Home from '../Pages/Home/Home'

// import Placeorder from './Pages/User/Placeorder/Placeorder'
// import Footer from './Components/Footer/Footer'
// import LoginPopup from './Components/LoginPopup/LoginPopup'
// import { useState } from 'react'
// import Searchbar from './Components/Searchbar/Searchbar'
 import Dashboard from '../Pages/Admin/Dashboard/Dashboard'
import Add from '../Pages/Admin/Add/Add'
import List from '../Pages/Admin/List/List'

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Verify from '../Pages/User/Verify/Verify'
import Myorders from '../Pages/User/Myorders/Myorders'
import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
import PrivateadminRoute from '../PrivateRoute/PrivateadminRoute'
import PrivateuserRoute from '../PrivateRoute/PrivateuserRoute'
import Order from '../Pages/Admin/Order/Order'
import Cart from '../Pages/User/Cart/Cart'
import Placeorder from '../Pages/User/Placeorder/Placeorder'



const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
       
    },
    {
        path:"/admin",
        element:(
            <PrivateadminRoute>
                <Dashboard/>

            </PrivateadminRoute>

        ),
        children:[
            {
                path:"/admin/add",
                element:<Add/>
            },
            {
                path:"/admin/list",
                element:<List/>
            },
            {
                path:"/admin/order",
                element:<Order/>
            }
        ]
    },{
        path:"/cart",
        element:(
            <PrivateuserRoute>
                <Cart/>
               

            </PrivateuserRoute>

        ),
    },
    {
        path:"/order",
        element:(
            <PrivateuserRoute>
                <Placeorder/>
            </PrivateuserRoute>
        )
    },
    {
         path:"/verify",
        element:(
            <PrivateuserRoute>
                <Verify/>
            </PrivateuserRoute>)
    },
    {
        path:"/myorders",
        element:(
            <PrivateuserRoute>
                <Myorders/>
            </PrivateuserRoute>
        )
    }



]);

export default router;