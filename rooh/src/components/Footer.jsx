import { motion } from 'framer-motion';
import { FaInstagram, FaTelegram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contacts" className="bg-dark text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Logo and Description */}
                    <div>
                        <img
                            src="/src/assets/images/logo.png"
                            alt="Logo"
                            className="h-12 w-12 mr-2"
                        />
                        <p className="text-gray-400 mb-4">
                            Сучасний сервіс оренди електросамокатів для зручного та екологічного пересування містом.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                href="#"
                                className="text-2xl text-gray-400 hover:text-primary transition-colors"
                            >
                                <FaInstagram />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                href="#"
                                className="text-2xl text-gray-400 hover:text-primary transition-colors"
                            >
                                <FaTelegram />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Швидкі посилання</h3>
                        <ul className="space-y-2">
                            {['Головна', 'Про нас', 'Як працює', 'Тарифи', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Послуги</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Оренда самокатів</li>
                            <li>Франшиза</li>
                            <li>Корпоративні рішення</li>
                            <li>Партнерство</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Контакти</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaPhone className="text-primary mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <a href="tel:+380123456789" className="text-gray-400 hover:text-primary transition-colors">
                                        +380 (12) 345-67-89
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaEnvelope className="text-primary mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <a href="mailto:info@ren.ua" className="text-gray-400 hover:text-primary transition-colors">
                                        info@ren.ua
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-primary mr-3 mt-1 flex-shrink-0" />
                                <div className="text-gray-400">
                                    Київ, Україна<br />
                                    вул. Хрещатик, 1
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} RЭН. Всі права захищені.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                Політика конфіденційності
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                Умови користування
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                Правила безпеки
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;