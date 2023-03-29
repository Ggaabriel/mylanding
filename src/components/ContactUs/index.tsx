import { motion } from "framer-motion";
import React, { useState } from "react";
import { SelectedPage } from "../../shared/types";

type FormValues = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

type FormErrors = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({
        name: "Имя обязательно",
        phone: "Телефон обязателен",
        email: "Почта обязательна",
        message: "Сообщение обязательно",
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        validateField(name, value);
    };

    const validateField = (name: string, value: string) => {
        let error = "";
        switch (name) {
            case "name":
                if (!value) {
                    error = "Имя обязательно";
                }else if (!/^.{10,}$/.test(value)) {
                    error = "Имя должно состоять из 10 букв";
                }
                break;
            case "phone":
                if (!value) {
                    error = "Телефон обязателен";
                } else if (!/^\d{11}$/.test(value)) {
                    error = "Некорректный номер телефона";
                }
                break;
            case "email":
                if (!value) {
                    error = "Почта обязательна";
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = "Некорректный адрес почты";
                }
                break;
            case "message":
                if (!value) {
                    error = "Сообщение обязательно";
                }
                break;
        }
        setFormErrors({ ...formErrors, [name]: error });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Тут можно добавить отправку данных на сервер или обработку формы
        console.log(formValues);
        setFormValues({ name: "", phone: "", email: "", message: "" });
        setFormErrors({
            name: "Имя обязательно",
            phone: "Телефон обязателен",
            email: "Почта обязательна",
            message: "Сообщение обязательно",
        })
    };

    return (
        <section className="overflow-hidden" id={`${SelectedPage.ContactUs}`}>
            <motion.div
                className="max-w-[1400px] h-[980px] mx-auto flex justify-center items-center "
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                <div className="bg-appa bg-contain bg-no-repeat animate-levitate w-full h-full">

                </div>
                <form onSubmit={handleSubmit} className="flex flex-col w-80 absolute bg-none">
                    {localStorage.getItem("user")?"":<p className="text-red-500">Вы не авторизованы!</p>}
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

                    <label htmlFor="phone">Телефон</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                    {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}

                    <label htmlFor="email">Почта</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

                    <label htmlFor="message">Сообщение</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                    />
                    {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}

                    {!formErrors.name && !formErrors.phone && !formErrors.email && !formErrors.message && localStorage.getItem("user") && <button type="submit">Отправить</button>}
                    
                </form>
            </motion.div>
        </section>
    );
};

export default ContactUs;
