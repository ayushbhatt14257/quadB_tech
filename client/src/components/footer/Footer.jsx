import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_copyright">
                    <div className="footer">
                        <div>
                            <small>Copyright &copy; 2023 AYUSH_BHATT</small>
                        </div>
                        <div>
                            <p>Support</p>
                        </div>
                    </div>
                </div>
                <div className="end_footer">
                    <div className="footer_btn">
                        <button>Add hodlinfo to home screen</button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer