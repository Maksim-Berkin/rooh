import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Де дозволено їздити?',
            answer: 'Ви можете їздити на самокатах у межах міста по велодоріжках, тротуарах (якщо швидкість не перевищує 20 км/год) та дорогах з обмеженням швидкості до 50 км/год. Заборонено їздити по автомагістралях та пішохідних зонах.',
        },
        {
            question: 'Де дозволено паркуватися?',
            answer: 'Паркування дозволено у спеціально відведених зонах, які позначені на карті в додатку зеленим кольором. Уникайте паркування на пішохідних переходах, в\'їздах до будинків та місцях, що заважають пішоходам.',
        },
        {
            question: 'Чому?',
            answer: 'Наша місія - зробити міста більш екологічними та зручними для пересування. Електросамокати не забруднюють повітря, допомагають уникнути пробок та роблять короткі поїздки швидкими та приємними.',
        },
        {
            question: 'Скільки коштує розблокування самокату?',
            answer: 'Розблокування самокату коштує 3 грн. Це одноразова плата на початку кожної поїздки. Далі оплата йде за хвилини або години використання згідно обраного тарифу.',
        },
        {
            question: 'Катання вдвох на самокаті?',
            answer: 'Згідно з правилами безпеки, катання вдвох на одному самокаті заборонено. Кожен користувач повинен мати окремий самокат. Це важлива вимога для вашої безпеки.',
        },
        {
            question: 'Що є мінімальним для користування самокатом?',
            answer: 'Мінімальний вік користувача - 18 років. Необхідно мати діючі водійські права будь-якої категорії та смартфон з доступом до інтернету для використання додатку.',
        },
        {
            question: 'Як завершити поїздку?',
            answer: 'Припаркуйте самокат у дозволеній зоні, зробіть фото паркування в додатку та натисніть кнопку "Завершити поїздку". Переконайтеся, що самокат не заважає пішоходам та іншим учасникам руху.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    ЗАЛИШИЛИСЬ ПИТАННЯ?
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full bg-white rounded-xl p-6 text-left hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-primary flex-shrink-0"
                                    >
                                        <FaChevronDown className="text-xl" />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-600 mt-4 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Support */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">Не знайшли відповідь на своє питання?</p>
                    <button className="btn-primary">
                        Зв'язатися з підтримкою
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;