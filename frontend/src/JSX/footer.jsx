import React from 'react';
import '../CSS/footer.css'; 

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <h2>About Us</h2>
                <p>
                    At Perfume Shop, we believe in providing the finest fragrances 
                    that enhance your personality and uplift your spirit. Our curated 
                    collection features a variety of perfumes crafted from the highest 
                    quality ingredients to offer you an unforgettable experience.
                </p>

                <h2>Contact Us</h2>
                <p>
                    For inquiries, please reach out to us at:
                    <br />
                    Email: support@perfumeshop.com
                    <br />
                    Phone: +1 234 567 890
                </p>

                <h2>Frequently Asked Questions (FAQ)</h2>
                <ul>
                    <li>Q: How can I place an order?</li>
                    <li>A: You can browse our collection and add your favorite perfumes to the cart, then proceed to checkout.</li>
                    <li>Q: What payment methods do you accept?</li>
                    <li>A: We accept all major credit cards, PayPal, and bank transfers.</li>
                    <li>Q: Can I return a perfume?</li>
                    <li>A: Yes, we have a return policy that allows you to return unopened perfumes within 30 days of purchase.</li>
                </ul>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Perfume Shop. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
