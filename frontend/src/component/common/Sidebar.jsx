import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../component/backend/context/Auth'

const Sidebar = () => {
    const { logout } = useContext(AuthContext);   
    return (
        <div className="col-md-3">
            <div className="card border-0 shadow">
                <div className='card-body'>
                    <h5>Admin Menu</h5>
                    <ul className='list-group'>
                        <li className='list-group-item'>Dashboard</li>
                        <li className='list-group-item'>Users</li>
                        <li className='list-group-item'>Settings</li>
                        <button onClick={logout} className='btn btn-primary mt-3'>Logout</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar