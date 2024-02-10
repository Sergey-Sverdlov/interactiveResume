import React from 'react';
import {Link} from "react-router-dom";

const CTA = () => {
    return (
        <section className="cta">
            <p className="cta-text flex justify-center gap-8 items-center">
                Есть задание с которым нужно помочь?
                <br className="sm:block hidden" />
                Давай поскорее начнем!
                <Link to='/interactiveResume/contact' className="btn flex justify-center items-center w-fit h-fit">
                    Связаться со мной
                </Link>
            </p>
        </section>
    );
};

export default CTA;
