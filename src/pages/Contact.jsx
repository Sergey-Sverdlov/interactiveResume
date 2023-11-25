import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser'
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader";
import Fox from "../models/Fox";
import {Suspense} from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const formRef = useRef(null)

    const [isLoading, setIsLoading] = useState(false)
    const [currentAnimations, setCurrentAnimations] = useState('idle')
    const {alert, showAlert, hideAlert } = useAlert()
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleFocus = () => {
        setCurrentAnimations('walk')
    }
    const handleBlur = () => {
        setCurrentAnimations('idle')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimations('hit');
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMLATE_ID,
            {
                from_name: form.name,
                to_name: "Sergei",
                from_email: form.email,
                to_email: 'sverdlov2910@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        ).then(() => {
            setIsLoading(false);
            showAlert({
                text: "Сообщение отправлено успешно",
                type: 'success'
            })

            setTimeout(() => {
                hideAlert()
                setCurrentAnimations('idle')
                setForm({
                    name: "",
                    email: "",
                    message: ""
                })
            }, 3000)
        }).catch((error) => {
            setIsLoading(false);
            setCurrentAnimations('idle')
            showAlert({
                text: "Сообщение отправлено с ошибкой",
                type: 'danger'
            })
            console.log(error)
        })
    }
    return (
        <section className="relative flex lg:flex-row
        flex-col max-container">
            {alert.show && <Alert {...alert} />}
            <div className="flex-1 min-w-[50%] flex flex-col items-start">
                <h1 className="head-text w-full">
                    Связаться со мной
                </h1>
                <form
                    className=" flex flex-col gap-7 mt-14 w-full"
                    onSubmit={handleSubmit}
                >
                    <label className="text-black-500 font-bold">
                        Имя
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Сергей"
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}/>
                    </label>
                    <label className="text-black-500 font-bold">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="sverdlov2910@gmail.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}/>
                    </label>
                    <label className="text-black-500 font-bold">
                        Ваше сообщение
                        <textarea
                            name="message"
                            className="textarea"
                            placeholder="Напиши, чем я могу тебе помочь"
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}/>
                    </label>
                    <button
                        type="submit"
                        className="btn"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Отправляю...' : 'Отправить сообщение'}
                    </button>
                </form>
            </div>
            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                <Canvas camera={{
                    position: [0, 0, 5],
                    fov: 75,
                    near: 0.1,
                    far:1000
                }}>
                    <directionalLight intensity={2.5} position ={[0, 0, 1]} />
                    <ambientLight intensity = {0.5} />
                    <Suspense fallback={<Loader />}>
                        <Fox
                            position={[0.5, 0.35, 0]}
                            rotation = {[0, -0.6, 0]}
                            scale = {[0.5, 0.5, 0.5]}
                            currentAnimation={currentAnimations}
                        />
                    </Suspense>

                </Canvas>
            </div>
        </section>
    );
};

export default Contact;
