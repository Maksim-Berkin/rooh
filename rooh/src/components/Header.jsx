import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Головна', href: '/#home', type: 'anchor' },
        { title: 'Загальні правила', href: '/terms', type: 'route' },
        { title: 'Як працює', href: '/#how-it-works', type: 'anchor' },
        { title: 'Тарифи', href: '/#pricing', type: 'anchor' },
        { title: 'FAQ', href: '/#faq', type: 'anchor' },
        { title: 'Контакти', href: '/#contacts', type: 'anchor' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center"
                        >
                            <img
                                src="/src/assets/images/logo.png"
                                alt="Logo"
                                className="h-12 w-12 mr-2"
                            />
                        </motion.div>
                    </Link>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                            >
                                {item.title}
                            </motion.a>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="btn-primary"
                        >
                            Завантажити додаток
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        {menuItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                        <button className="btn-primary w-full mt-4">
                            Завантажити додаток
                        </button>
                    </motion.div>
                )}
            </nav>
        </header>
    );
};

export default Header;