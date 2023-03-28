import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import ActionButton from "../../shared/ActionButton";
const Footer = () => {
    const handleScrollToTop = () => {
        scroll.scrollToTop({ duration: 500 });
    };

    return (
        <footer className="bg-bodyColor text-textColor py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <h3 className="text-lg font-medium mb-4">Контакты</h3>
                    <ul>
                        <li>Телефон: +7 123-456-78-90</li>
                        <li>Email: info@example.com</li>
                        <li>Адрес: ул. Примерная, 123, г. Примерный</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-4">Авторские права</h3>
                    <p>&copy; 2023 Example.com. Все права защищены.</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-4">Соц. сети</h3>
                    <ul className="flex gap-4">
                        <li>
                            <a href="#" aria-label="Facebook">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Twitter">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-center sm:text-right">
                    <button
                        className="font-medium p-6 bg-woodColor rounded-xl"
                        onClick={handleScrollToTop}
                    >
                        Наверх
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
