'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { mergeClassName } from '../../lib/utils.js';

import { HighlightedText } from '../atoms/highlighted-text.jsx';

export const HelloWorldTemplate: React.FC = (props: { className?: string }) => {
    const applications = [
        {
            description: 'Check what I do',
            href: 'https://jterrazz.com',
            imageSrc: '/assets/appicon-jterrazz.png',
            title: 'Jterrazz',
        },
    ];

    const Application = ({
        href,
        imageSrc,
        title,
        description,
    }: {
        href: string;
        imageSrc: string;
        title: string;
        description: string;
    }) => (
        <Link
            href={href}
            className="group flex items-center p-3 rounded-xl transition-all duration-300 hover:bg-white/20"
        >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                    src={imageSrc}
                    alt={`${title} application icon`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 group-hover:opacity-90"
                    loading="lazy"
                />
            </div>
            <div className="ml-3 sm:ml-4 flex flex-col">
                <h5 className="text-xs sm:text-sm font-extrabold tracking-wide text-white group-hover:text-storm-cloud-accent transition-colors duration-300">
                    {title}
                </h5>
                <span className="text-xxs sm:text-xs text-white/70 group-hover:text-white transition-colors duration-300">
                    {description}
                </span>
            </div>
        </Link>
    );

    const generatedClassName = mergeClassName(
        'flex flex-col items-center justify-center text-storm-cloud-accent',
        props.className,
    );

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        offset: ['start end', 'end start'],
        target: ref,
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const FloatingContainer = ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => {
        const generatedClassName = mergeClassName(
            'flex items-center justify-center',
            'border border-white/20 bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-sm',
            'hover:bg-white/20 transition-all duration-300 ease-in-out',
            'before:content-[""] before:absolute before:inset-0 before:rounded-2xl sm:before:rounded-3xl before:bg-gradient-to-r before:from-white/30 before:to-transparent before:opacity-40',
            className,
        );
        return (
            <motion.div style={{ y }} className="z-2 relative">
                <div className={generatedClassName}>
                    <div className="relative z-10 flex items-center justify-center flex-col">
                        {children}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <main className={generatedClassName} ref={ref}>
            <div className="relative w-full h-screen">
                <Image
                    src="/assets/image-top-of-the-hill-smoked.webp"
                    alt="Motivation on top of the hill"
                    layout="fill"
                    objectFit="cover"
                    className="z-1 my-8"
                    loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center mt-8 sm:mt-12 px-4 sm:px-0">
                    <FloatingContainer className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md">
                        <HighlightedText className="text-base sm:text-lg mt-2 sm:mt-3 font-bold text-center">
                            Ready to take control?
                        </HighlightedText>
                        <p className="text-xs sm:text-sm tracking-wide text-center max-w-xs sm:max-w-lg mt-3 sm:mt-4 text-black font-medium">
                            Set your goals, organize your life, and boost your potential with
                            <b> Capitaine</b>. The best time to start is now. ⏳
                        </p>
                        {/* <div className="mt-6 w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-black bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm placeholder-black/70"
                            />
                            <button className="mt-3 w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition-colors duration-300 mb-6">
                                Save your seat
                            </button>
                        </div> */}
                    </FloatingContainer>
                    <div className="mt-4 sm:mt-6 max-w-sm sm:max-w-md">
                        <FloatingContainer className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                            {applications.map((application, index) => (
                                <Application key={index} {...application} />
                            ))}
                        </FloatingContainer>
                    </div>
                </div>
            </div>
        </main>
    );
};
