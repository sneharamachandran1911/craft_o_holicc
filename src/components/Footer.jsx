import '../css/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-logo">C</div>
                    <span className="footer-brand-name">CRAFT-O-HOLIC</span>
                </div>
                <p className="footer-tagline">Crochet with love, made for you.</p>
            </div>

            <div className="footer-links">
                <div className="footer-column">
                    <p className="footer-heading">Shop</p>
                    <a href="/">Home</a>
                    <a href="/product">Products</a>
                    <a href="/custom-order">Custom orders</a>
                    <a href="/cart">Cart</a>
                </div>

                <div className="footer-column">
                    <p className="footer-heading">About</p>
                    <a href="/about">Our story</a>
                    <a href="/reviews">Reviews</a>
                </div>

                <div className="footer-column">
                    <p className="footer-heading">Get in touch</p>
                    <a href="https://instagram.com/craft_o_holicc" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                        <i className="footer-icon">◎</i> @craft_o_holicc
                    </a>
                    <a href="mailto:sneharamachandran1911@gmail.com" className="footer-contact-link">
                        <i className="footer-icon">✉</i> sneharamachandran1911@gmail.com
                    </a>
                    <a href="tel:9361360210" className="footer-contact-link">
                        <i className="footer-icon">☎</i> 9361360210
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Handmade with love, made to last.</p>
                <p>&copy; {new Date().getFullYear()} Craft-o-holic. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer