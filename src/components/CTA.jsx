import React from 'react';
import {Link} from "react-router-dom";
import {socialLinks} from "../constants";

const CTA = () => {
    return (
        <div>
            <section className="cta">
                <p className="cta-text flex justify-center gap-8 items-center">
                    Есть задание с которым нужно помочь?
                    <br className="sm:block hidden"/>
                    Давай поскорее начнем!
                    <Link to='/interactiveResume/contact' className="btn flex justify-center items-center w-fit h-fit">
                        Связаться со мной
                    </Link>
                </p>

            </section>
            <div className="flex  justify-center gap-16 mt-16">
                {socialLinks.map((socialLink) => (
                    <div>
                        <Link
                            to={socialLink.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-blue-600"
                        >
                            <img
                                src={socialLink.iconUrl}
                                alt={socialLink.name}
                                className="w-12 h-12 object-contain"
                            />
                            {socialLink.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CTA;
