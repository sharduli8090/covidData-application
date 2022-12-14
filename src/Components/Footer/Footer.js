import React from "react";
import './Footer.css';

export default function Footer(){
    return(
        <>
          <div className="footer">
        <div>2022 &copy; VAtech Software Pvt. Ltd.</div>
        <div>Cookies Policy | Privacy Policy</div>
        <div className="social-media-footer"><a href="#" className="social-footer-icon">Facebook</a> | <a href="#" className="social-footer-icon">Instagram</a> | <a href="#" className="social-footer-icon">Twitter</a> | <a href="#" className="social-footer-icon">YouTube</a> | <a href="#" className="social-footer-icon">LinkedIn</a> </div>
    </div>
        </>
    );
}