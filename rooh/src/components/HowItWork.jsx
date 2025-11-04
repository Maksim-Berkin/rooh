import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Завантаж додаток',
            description: 'Завантажте додаток Rooh з App Store або Google Play, пройдіть швидку реєстрацію та почніть насолоджуватися свободою пересування містом на наших електросамокатах!',
            color: 'bg-gray-300'
        },
        {
            number: '2',
            title: 'Знайди вільний самокат на карті',
            description: 'Відкрийте додаток Rooh, використовуйте карту для відображення вільних самокатів у вашому районі та виберіть найближчий, щоб почати поїздку. Все просто і швидко, доки самокат чекає!',
            color: 'bg-gray-300'
        },
        {
            number: '3',
            title: 'Відскануй QR-код на кермі та оплати поїздку',
            description: 'Відкрийте додаток Rooh і використовуйте функцію сканування QR-коду, щоб відсканувати код на кермі самоката та розблокувати його. Поповніть, особистий баланс через додаток Rooh та розпочніть поїздку.',
            color: 'bg-gray-300'
        },
        {
            number: '4',
            title: 'Відштовхнись два рази та натисни ручку газу',
            description: 'Щоб розпочати рух на електросамокаті Rooh, відштовхніться ногою двічі, щоб набрати початкову швидкість, а потім натисніть на ручку газу, яка знаходиться з правої сторони керма, щоб активувати мотор і продовжити рух.',
            color: 'bg-gray-300'
        },
        {
            number: '5',
            title: 'Насолоджуйся поїздкою',
            description: 'Насолоджуйтеся поїздкою на електросамокаті Rooh, але не забувайте дотримуватися правил дорожнього руху для безпеки себе та оточуючих.',
            color: 'bg-gray-300'
        },
        {
            number: '6',
            title: 'Паркуйся правильно',
            description: 'Паркуйте самокат відповідально, обираючи місце, де він не створюватиме перешкод для пішоходів, велосипедистів та автомобілів. Уникайте блокування тротуарів, виходів з будівель та інших ключових зон доступу.',
            color: 'bg-gray-300'
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">

                {/* Заголовок */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title mb-16"
                >
                    ЯК ЦЕ ПРАЦЮЄ
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Ліва частина - Кроки */}
                    <div className="space-y-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"  // 👈 Додали group
                            >
                                {/* Картка кроку */}
                                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <div className="flex items-start gap-4">

                                        {/* Номер кроку з hover ефектом */}
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-300 group-hover:bg-primary text-gray-600 group-hover:text-white rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300">
                                            {step.number}
                                        </div>

                                        {/* Контент */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Права частина - Телефон */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Декоративний фон */}
                        <div className="absolute w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />

                        {/* Мокап телефону */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10"
                        >
                            <div className="bg-black rounded-[3rem] p-3 shadow-2xl w-80">
                                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                                    {/* Екран телефону */}
                                    <div className="aspect-[9/19] bg-gradient-to-br from-pink-100 to-pink-50 flex flex-col items-center justify-center p-8">

                                        {/* Логотип ROOН */}
                                        <div className="text-6xl font-bold text-primary mb-8">
                                            ROOН
                                        </div>

                                        {/* Кнопки магазинів */}
                                        <div className="space-y-3 w-full">
                                            <div className="bg-black text-white rounded-lg px-4 py-2 text-center text-sm font-semibold">
                                                <div className="text-xs">GET IT ON</div>
                                                <div>Google Play</div>
                                            </div>
                                            <div className="bg-black text-white rounded-lg px-4 py-2 text-center text-sm font-semibold">
                                                <div className="text-xs">Download on the</div>
                                                <div>App Store</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;