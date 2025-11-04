import { motion } from 'framer-motion';
import { FaLock, FaClock, FaPause, FaCheck } from 'react-icons/fa';

const Pricing = () => {
    const tariffs = [
        {
            icon: <FaLock className="text-3xl" />,
            label: 'Розблокування',
            price: '9 Грн',
            position: 'left-top'
        },
        {
            icon: <FaPause className="text-3xl" />,
            label: 'Пауза',
            price: '1.5 Грн',
            position: 'left-bottom'
        },
        {
            icon: <FaClock className="text-3xl" />,
            label: 'Хвилина поїздки',
            price: '3.80 Грн',
            position: 'right-top'
        },
        {
            icon: <FaCheck className="text-3xl" />,
            label: 'Бронювання',
            price: 'Безкоштовно',
            position: 'right-bottom'
        }
    ];

    const stats = [
        {
            icon: '📍',
            number: '150+',
            label: 'Кв. кілометрів покриття'
        },
        {
            icon: '🛴',
            number: '10 000+',
            label: 'Кілометрів проїхано'
        },
        {
            icon: '🌱',
            number: '5 000',
            label: 'Тон CO2 збережено'
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-white relative overflow-hidden">
            {/* Декоративні лінії на фоні */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] border-[50px] border-primary/20 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Заголовок та опис */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">ТАРИФИ</h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Наші тарифи розроблені, щоб надати вам свободу обирати без переплат.
                        Приєднуйтесь до Rooh і рухайтеся легко та вигідно!
                    </p>
                </motion.div>

                {/* Головна секція з самокатом та тарифами */}
                <div className="relative max-w-5xl mx-auto mb-20">

                    {/* Центральний круг з самокатом */}
                    <div className="relative flex items-center justify-center">

                        {/* Червоне коло */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative w-96 h-96"
                        >
                            <div className="absolute inset-0 border-[20px] border-primary rounded-full" />

                            {/* Самокат в центрі */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        rotate: [0, -5, 0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="text-9xl"
                                >
                                    🛴
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Картки тарифів навколо кола */}
                        {/* Ліва верхня - Розблокування */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="absolute left-0 top-1/4 -translate-y-1/2"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-primary transition-all duration-300 w-64">
                                <div className="flex items-center gap-4">
                                    <div className="text-primary">
                                        {tariffs[0].icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">{tariffs[0].label}</div>
                                        <div className="text-2xl font-bold text-gray-900">{tariffs[0].price}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Ліва нижня - Пауза */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute left-0 bottom-1/4 translate-y-1/2"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-primary transition-all duration-300 w-64">
                                <div className="flex items-center gap-4">
                                    <div className="text-primary text-3xl">
                                        ⏸️
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">{tariffs[1].label}</div>
                                        <div className="text-2xl font-bold text-gray-900">{tariffs[1].price}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Права верхня - Хвилина поїздки */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute right-0 top-1/4 -translate-y-1/2"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-primary transition-all duration-300 w-64">
                                <div className="flex items-center gap-4">
                                    <div className="text-primary">
                                        {tariffs[2].icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">{tariffs[2].label}</div>
                                        <div className="text-2xl font-bold text-gray-900">{tariffs[2].price}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Права нижня - Бронювання */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute right-0 bottom-1/4 translate-y-1/2"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-primary transition-all duration-300 w-64">
                                <div className="flex items-center gap-4">
                                    <div className="text-primary">
                                        {tariffs[3].icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">{tariffs[3].label}</div>
                                        <div className="text-xl font-bold text-gray-900">{tariffs[3].price}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Кнопка "Дізнатись більше" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <button className="text-gray-600 hover:text-primary font-medium transition-colors duration-300">
                        Дізнатись більше
                    </button>
                </motion.div>

                {/* Статистика на темному фоні */}
                <div className="bg-dark rounded-3xl py-16 px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center text-white"
                            >
                                {/* Іконка */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                                    className="text-6xl mb-4"
                                >
                                    {stat.icon}
                                </motion.div>

                                {/* Число */}
                                <div className="text-4xl font-bold mb-2">
                                    {stat.number}
                                </div>

                                {/* Опис */}
                                <div className="text-gray-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;