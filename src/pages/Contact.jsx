import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const formRef = useRef(null)

    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleFocus = () => {
    }
    const handleBlur = () => {
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.send (
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
            setForm({
                name: "",
                email: "",
                message: ""})
            //TODO
        }).catch((error) => {
            setIsLoading(false);
            console.log(error)
        })
    }
    return (
        <section className="relative flex lg:flex-row
        flex-col max-container">
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
        </section>
    );
};

export default Contact;
