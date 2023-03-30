import { motion } from "framer-motion";
import React, { useState } from "react";
import { SelectedPage, FormValues, FormErrors } from "../../shared/types";


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

    const errorsBase = {
        name: "Имя обязательно",
        phone: "Телефон обязателен",
        email: "Почта обязательна",
        message: "Сообщение обязательно",
    }

    const [formErrors, setFormErrors] = useState<FormErrors>(errorsBase);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        validateField(name, value);
    };

    const validateField = (name: string, value: string) => {
        let error:string = "";
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

    //По клику на кнопку мы попадаем в эту функцию то что введено в поля выводится в консоль а форма с ошибками обнуляется
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formValues);
        setFormValues({ name: "", phone: "", email: "", message: "" });
        setFormErrors(errorsBase)
    };

    return (
        <section className="overflow-hidden" id={`${SelectedPage.ContactUs}`}>
            <motion.div
                className="max-w-[1400px] h-[980px] mx-auto flex justify-center items-center "
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                <div className="bg-appa bg-contain bg-no-repeat animate-levitate w-full h-full">

                </div>
                <form onSubmit={handleSubmit} className="flex flex-col md:w-1/3 absolute bg-none">
                    {localStorage.getItem("user")?"":<p className="text-red-500 text-2xl">Вы не авторизованы!</p>}
                    <label htmlFor="name" className="text-2xl">Имя</label>
                    <input
                        className="border-4 border-black bg-transparent rounded-xl p-3 tracking-wide  focus:outline-none focus:ring-2 focus:ring-gray-300 md:text-3xl text-2xl"
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <p className="text-red-500 text-2xl">{formErrors.name}</p>}

                    <label htmlFor="phone" className="text-2xl">Телефон</label>
                    <input
                        className="border-4 border-black bg-transparent rounded-xl p-3 tracking-wide  focus:outline-none focus:ring-2 focus:ring-gray-300 md:text-3xl text-2xl"
                        type="text"
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                    {formErrors.phone && <p className="text-red-500 text-2xl">{formErrors.phone}</p>}

                    <label htmlFor="email" className="text-2xl">Почта</label>
                    <input
                        className="border-4 border-black bg-transparent rounded-xl p-3 tracking-wide  focus:outline-none focus:ring-2 focus:ring-gray-300 md:text-3xl text-2xl"
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className="text-red-500 text-2xl">{formErrors.email}</p>}

                    <label htmlFor="message" className="text-2xl">Сообщение</label>
                    <textarea
                        className="border-4 border-black bg-transparent rounded-xl p-3 tracking-wide  focus:outline-none focus:ring-2 focus:ring-gray-300 md:text-3xl text-2xl"
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                    />
                    {formErrors.message && <p className="text-red-500 text-2xl">{formErrors.message}</p>}

                    {!formErrors.name && !formErrors.phone && !formErrors.email && !formErrors.message && localStorage.getItem("user") && <button className="bg-woodColor rounded-xl mt-6 p-3" type="submit">Отправить</button>}
                    
                </form>
            </motion.div>
        </section>
    );
};

export default ContactUs;
