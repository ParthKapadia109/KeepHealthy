import React, { useContext } from 'react'
import { AppContext } from './Context'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Link } from 'react-router-dom';

const CartTotal = () => {

  const { total_amount, total_items, user ,logout } = useContext(AppContext);

  return (
    <article className='cart-bill'>
      <p>Billing</p>
      <h4>Total Items: {total_items}</h4>
      <h3>Order Total: &#8377; {total_amount}</h3>

      <div className='btn-checkout btn-pymnt'><Link to = {'/checkout'}></Link>Checkout</div>

      {/* {user ?
        <div className='btn-logout'>
          <Link to='/checkout'>
            <button className='btn-checkout btn-pymnt'>Checkout</button>
          </Link>
          <PersonRemoveIcon className='btn-logout-icon' onClick={() => logout({ returnTo: window.location.origin })} />
        </div> :
        <div className='btn-checkout btn-login'> <Link to={'/login'}><PersonAddIcon/>Login </Link></div>
      }  */}

    </article>
  )
}

export default CartTotal
