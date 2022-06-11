import React, { useContext, useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { UserContext } from '../usercontext/UserProvider';
import '../Styles/cart.css'


export const NotificationContext = createContext(0);

// Add tours to a cart like feature responsible for handling My Destinations
const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        removeItem,
        emptyCart,
    } = useCart();

    const { user } = useContext(UserContext);
    const navigate = useNavigate()


    if (isEmpty) return <h1 className="text-centre">You Have Zero Destinations Added</h1>
    return (
        <section className='py-4 container'>
            {
                user &&
                <div className='row justify-content-center'>
                    <div className="col-12">
                        <h5>Added Sites: ({totalUniqueItems})</h5>
                        <table className='table table-light table-hover m-0'>
                            <tbody>
                                {items.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <img src={item.image} style={{ height: '6rem' }} alt={item.name} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.region}</td>
                                            <td>{item.location}</td>
                                            <td>
                                                <button
                                                    className='btn btn-warning'
                                                    onClick={() => removeItem(item.id)}
                                                >Remove Site
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className='btn btn-primary'
                                                    onClick={() => navigate(`/view/${item.id}/`)}
                                                >View Site
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto">
                        <button className="btn btn-danger m-2"
                            onClick={() => emptyCart()}
                        >Remove All
                        </button>
                    </div>
                </div>
            }
            {!user && <h1>LOGIN REQUIRED!</h1>}
        </section >
    );
}

export default Cart;


export const NotificationProvider = ({ children }) => {
    const [notificationNumb, setNotificationNumb] = useState(0);
    const { totalUniqueItems } = useCart();

    useEffect(() => {
        setNotificationNumb(previousValue => totalUniqueItems)
    }, [totalUniqueItems])

    return (
        <NotificationContext.Provider value={notificationNumb}>
            {children}
        </NotificationContext.Provider>
    )

}