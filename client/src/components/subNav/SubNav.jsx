import React from 'react'
import './subNav.css'

const SubNav = () => {
  return (
    <>
        <section>
            <div className="subNavHeading">
                <h1>Best Price to Trade</h1>
            </div>
            <div className="subNaveGrid">
                <div className="subNavCart">
                    <h2>0.1 %</h2>
                    <h3>5 Mins</h3>
                </div>
                <div className="subNavCart">
                    <h2>0.96 %</h2>
                    <h3>1 Hour</h3>
                </div>
                <div className="subNavCart">
                    <h2>₹26,56,110</h2>
                </div>
                <div className="subNavCart">
                    <h2>2.73 %</h2>
                    <h3>1 Day</h3>
                </div>
                <div className="subNavCart">
                    <h2>7.51 %</h2>
                    <h3>7 Days</h3>
                </div>
            </div>
            <div className="subNavEnd">
                <h3>Average BTC/INR net price including commission</h3>
            </div>
        </section>
    </>
  )
}

export default SubNav