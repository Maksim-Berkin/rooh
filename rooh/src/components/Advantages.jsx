import { motion } from 'framer-motion';

const Advantages = () => {
    const advantages = [
        {
            image: 'src/assets/images/advantage1.png', // Замініть на свої зображення
            title: 'Зручний Додаток',
            description: 'Пауза, Бронювання, Цілодобова Підтримка та Мультиоренда*до 2-х самокатів з одного девайсу'
        },
        {
            image: 'src/assets/images/advantage2.png',
            title: 'Безпека',
            description: 'Наші самокати оснащені сучасними системами безпеки та регулярно обслуговуються.'
        },
        {
            image: 'src/assets/images/advantage3.png',
            title: 'ЕкоТранспорт',
            description: 'Наші електросамокати допомагають знижувати викиди та захищають довкілля.'
        },
        {
            image: 'src/assets/images/advantage4.png',
            title: 'Підтримка 24/7',
            description: 'Наша команда завжди на зв\'язку, щоб допомогти вам на кожному етапі оренди.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section id="advantages" className="py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Заголовок секції */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    НАШІ ПЕРЕВАГИ
                </motion.h2>

                {/* Сітка з перевагами */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="text-center"
                        >
                            {/* Кругле зображення */}
                            <div className="relative mb-6">
                                <div className="relative w-64 h-64 mx-auto">
                                    {/* Біла рамка */}
                                    <div className="absolute inset-0 bg-white rounded-full shadow-lg" />

                                    {/* Внутрішнє зображення */}
                                    <div className="absolute inset-4 rounded-full overflow-hidden">
                                        <img
                                            src={advantage.image}
                                            alt={advantage.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Заголовок переваги */}
                            <h3 className="text-2xl font-bold mb-3">
                                {advantage.title}
                            </h3>

                            {/* Опис */}
                            <p className="text-gray-600 leading-relaxed">
                                {advantage.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Advantages;