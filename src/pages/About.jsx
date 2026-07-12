import '../css/About.css'
import founderImg from '../assets/bouquet.jpg'
import processImg from '../assets/bouquet.jpg'

function About() {
    return (
        <div className="about">

            <div className="about-intro">
                <p className="about-tagline">a hook, some yarn, and endless possibilities</p>
                <h1 className="about-heading">The story behind Craft-o-holic</h1>
                <p className="about-desc">
                    Crochet with love, made for you. Every piece we make carries the
                    same intention — to be something meaningful, handmade, and real.
                </p>
            </div>

            <div className="about-story">
                <div className="about-story-img">
                    <img src={founderImg} alt="Sneha, founder of Craft-o-holic" />
                </div>
                <div className="about-story-text">
                    <p className="about-eyebrow">from passion to profession</p>
                    <h2 className="about-subheading">Hi, I'm Sneha</h2>
                    <p className="about-desc">
                        A crochet artist from Coimbatore. Not too long ago, I was
                        working in IT — following a routine that looked right on
                        paper, but didn't feel like me. Somewhere between deadlines
                        and daily life, I kept going back to something I've loved
                        since childhood: art. Creating. Making things with my hands.
                        Bringing small ideas to life. That's when I discovered crochet.
                    </p>
                    <p className="about-desc" style={{ marginTop: '14px' }}>
                        What started as a simple curiosity slowly turned into
                        something I truly enjoyed. I learned it step by step, made
                        mistakes, tried again, and slowly found my rhythm. With no
                        big plans, I began sharing my work through my page,
                        Craftoholicc. It's still a small beginning — a few orders,
                        a few people who trusted my work, and a lot more to learn
                        and explore.
                    </p>
                </div>
            </div>

            <div className="about-process">
                <p className="about-tagline" style={{ textAlign: 'center' }}>from yarn to you, with love</p>
                <h2 className="about-subheading" style={{ textAlign: 'center', marginBottom: '36px' }}>Our process</h2>
                <div className="process-grid">
                    <div className="process-step">
                        <div className="process-number">1</div>
                        <h3>We source the best yarn</h3>
                        <p>Every yarn is chosen based on the product's purpose, texture, durability and comfort.</p>
                    </div>
                    <div className="process-step">
                        <div className="process-number">2</div>
                        <h3>Yarn makes all the difference</h3>
                        <p>From lightweight cottons to soft acrylics and durable blends, the possibilities are endless.</p>
                    </div>
                    <div className="process-step">
                        <div className="process-number">3</div>
                        <h3>Designed with purpose</h3>
                        <p>Every detail is planned with love — from stitches to shape to the smallest finishing.</p>
                    </div>
                    <div className="process-step">
                        <div className="process-number">4</div>
                        <h3>Handcrafted with love</h3>
                        <p>With patience and passion, we crochet each piece by hand. No machines, no shortcuts.</p>
                    </div>
                </div>
            </div>

            <div className="about-values">
                <div className="value-card">
                    <div className="value-circle">
                        <img src="https://api.iconify.design/mdi:hand-heart-outline.svg?color=%23FBE2DB" alt="" />
                    </div>
                    <h3>Unique and personal</h3>
                    <p>Each piece is customized based on your special moments and requirements.</p>
                </div>
                <div className="value-card">
                    <div className="value-circle">
                        <img src="https://api.iconify.design/mdi:yarn.svg?color=%23FBE2DB" alt="" />
                    </div>
                    <h3>Made with love</h3>
                    <p>Every piece takes hours, sometimes days, crocheted with care and patience.</p>
                </div>
                <div className="value-card">
                    <div className="value-circle">
                        <img src="https://api.iconify.design/mdi:heart-outline.svg?color=%23FBE2DB" alt="" />
                    </div>
                    <h3>A meaningful keepsake</h3>
                    <p>3D art that you can see, touch and feel — made to last a lifetime.</p>
                </div>
            </div>

            <div className="about-quote">
                <p>"Crocheting isn't just a hobby, it's an art of love, patience and imagination."</p>
            </div>

            <div className="about-cta">
                <div className="about-cta-img">
                    <img src={processImg} alt="Yarn basket used in Craft-o-holic creations" />
                </div>
                <div className="about-cta-text">
                    <h2 className="about-subheading">Let's stay connected</h2>
                    <p className="about-desc">
                        Every order means the world to me. You're not just buying a
                        product — you're supporting a dream, late nights, lots of
                        love, and a whole lot of heart.
                    </p>
                    <div className="about-contact">
                        <a href="https://instagram.com/craft_o_holicc" className="about-contact-line">
                            @craft_o_holicc
                        </a>
                        <p className="about-contact-line">9361360210</p>
                        <p className="about-contact-line">sneharamachandran1911@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About