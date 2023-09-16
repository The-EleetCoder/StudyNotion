import React from 'react'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast';

function Navbar(props) {

  let isLoggedin = props.isLoggedin;
  let setIsLoggedin = props.setIsLoggedin;

  return (
    <div className='flex justify-evenly'>
      <Link to='/'>
        <img src={logo} width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex gap-3'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex ml-5 mr-3 gap-3'>
        { !isLoggedin &&
          <Link to="/login">
            <button>LogIn</button>
          </Link>
        }
        { isLoggedin &&
          <Link to="/">
            <button onClick={()=>{
              setIsLoggedin(false);
              toast.success("Logged Out");
            }}>
              Log Out
            </button>
          </Link>
        }
        { !isLoggedin &&
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        }
        { isLoggedin &&
          <Link to="/dashboard">
            <button>dashboard</button>
          </Link>
        } 
      </div>

    </div>
  )
}

export default Navbar