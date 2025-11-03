import { motion } from 'framer-motion';
import { useState } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            id: 1,
            title: 'Міський транспорт',
            emoji: '🏙️',
        },
        {
            id: 2,
            title: 'Паркова зона',
            emoji: '🌳',
        },
        {
            id: 3,
            title: 'Нічна поїздка',
            emoji: '🌙',
        },
        {
            id: 4,
            title: 'Активний відпочинок',
            emoji: '⚡',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    ГАЛЕРЕЯ
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedImage(image)}
                            className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/80 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-7xl mb-4">{image.emoji}</div>
                                    <h3 className="text-white font-semibold text-xl">{image.title}</h3>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* Modal for full image view */}
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="bg-white rounded-2xl p-8 max-w-2xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="text-center">
                                <div className="text-9xl mb-6">{selectedImage.emoji}</div>
                                <h3 className="text-3xl font-bold mb-4">{selectedImage.title}</h3>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="btn-primary"
                                >
                                    Закрити
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Gallery;