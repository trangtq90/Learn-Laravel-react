import React from 'react'
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";


const Dashboard = () => {
  return (
    <>
        <Header />
            {/* Main */}
            <main className='dashboard'>
                <div className='container my-5'>
                    
                    <div className="row">
                        
                        {/* Sidebar */}
                        <Sidebar />
                        
                        
                        <div className="col-md-9">
                            <div className="card border-0 shadow">
                                <div className='card-body d-flex justify-content-center align-items-center'>
                                    <h3>Dashboard</h3>
                                    <p>Welcome to the admin dashboard!</p>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        <Footer />
      </>
  )
}

export default Dashboard