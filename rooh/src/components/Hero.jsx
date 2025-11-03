import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20 overflow-hidden">

            {/* Декоративні червоні лінії на фоні */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Перша діагональна лінія */}
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '0%', opacity: 0.15 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/2 translate-x-1/4"
                >
                    <div className="w-full h-full border-[60px] border-primary/20 rounded-full transform rotate-45" />
                </motion.div>

                {/* Друга діагональна лінія */}
                <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: '0%', opacity: 0.1 }}
                    transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                    className="absolute top-1/3 right-0 w-[600px] h-[600px] translate-x-1/3"
                >
                    <div className="w-full h-full border-[50px] border-primary/15 rounded-full transform rotate-45" />
                </motion.div>

                {/* Третя тонша лінія */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.08 }}
                    transition={{ duration: 2, delay: 0.6 }}
                    className="absolute bottom-0 right-0 w-[400px] h-[400px] translate-x-1/4 translate-y-1/4"
                >
                    <div className="w-full h-full border-[40px] border-primary/10 rounded-full transform rotate-45" />
                </motion.div>
            </div>

            {/* Основний контент */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Ліва частина - Текст і кнопки */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        {/* Заголовок */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            ОБИРАЙ <span className="text-primary">РУХ</span> БЕЗ ОБМЕЖЕНЬ
                        </h1>

                        {/* Опис */}
                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                            За допомогою одного дотику на телефоні, обирай зручний спосіб
                            пересування містом і відкривай нові місця з нових сторін.
                            Зробіть свій внесок в екологію, насолоджуйсь свіжим повітрям
                            та рухом із задоволенням.
                        </p>

                        {/* Кнопки App Store і Google Play */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg"
                            >
                                <FaGooglePlay className="text-3xl" />
                                <div className="text-left">
                                    <div className="text-xs uppercase">Get it on</div>
                                    <div className="text-lg">Google Play</div>
                                </div>
                            </motion.a>

                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg"
                            >
                                <FaApple className="text-3xl" />
                                <div className="text-left">
                                    <div className="text-xs">Download on the</div>
                                    <div className="text-lg">App Store</div>
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Права частина - Зображення телефону та самоката */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Контейнер для зображень */}
                        <div className="relative w-full max-w-2xl">

                            {/* Додатковий декоративний фон */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.2, 0.3, 0.2]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"
                            />

                            {/* Зображення телефону */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative z-10"
                            >
                                {/* Мокап телефону */}
                                <div className="bg-black rounded-[3rem] p-3 shadow-2xl mx-auto max-w-sm">
                                    <div className="bg-white rounded-[2.5rem] overflow-hidden">
                                        {/* Екран телефону */}
                                        <div className="aspect-[9/19] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                                            <div className="text-center p-4">
                                                <div className="text-primary font-bold text-3xl mb-2">RЭН</div>
                                                <div className="text-gray-600 text-sm mb-4">Карта самокатів</div>
                                                <div className="mt-4 text-7xl">🗺️</div>
                                                <div className="mt-4 text-xs text-gray-400">Завантажте додаток</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Зображення самоката */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className="absolute -right-10 bottom-0 z-20"
                            >
                                <div className="text-9xl filter drop-shadow-2xl">🛴</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;