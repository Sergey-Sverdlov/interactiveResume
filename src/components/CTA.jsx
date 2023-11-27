import React from 'react';
import {Link} from "react-router-dom";

const CTA = () => {
    return (
        <section className="cta">
            <p className="cta-text">
                Есть задание с которым нужно помочь?
                <br className="sm:block hidden" />
                Я всегда на связи и готов тебе помочь!
                <Link to='/contact' className="btn">
                    Связаться со мной
                </Link>
            </p>
        </section>
    );
};

export default CTA;
