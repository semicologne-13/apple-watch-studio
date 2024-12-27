'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

import lightLogo from '@/public/assets/logo/apple-watch-design-studio-logo.png'
import darkLogo from '@/public/assets/logo/apple-watch-design-studio-logo-dark.png'
import { Button } from '@/components/ui/button'
import { setIsWatchCollection } from '@/lib/store/features/uiSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { selectSelectedBandImage, selectSelectedCaseImage } from '@/lib/store/features/collectionSlice';

export default function Header() {
    const dispatch = useAppDispatch();
    const { isGettingStarted, isWatchCollection } = useAppSelector((state) => state.ui);

    const selectedBandImage = useAppSelector(selectSelectedBandImage);
    const selectedCaseImage = useAppSelector(selectSelectedCaseImage);
    
    const handleShare = async () => {
        try {
            // Create a canvas element to combine the images
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            if (!ctx) return;
    
            // Set canvas size
            canvas.width = 1000;
            canvas.height = 1000;
    
            // Load both images
            const loadImage = (src: string): Promise<HTMLImageElement> => {
                return new Promise((resolve, reject) => {
                    const img = new window.Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = src;
                });
            };
    
            // Wait for both images to load
            const [bandImg, caseImg] = await Promise.all([
                loadImage(selectedBandImage || ''),
                loadImage(selectedCaseImage || '')
            ]);
    
            // Draw images on canvas
            ctx.drawImage(bandImg, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(caseImg, 0, 0, canvas.width, canvas.height);
    
            // Convert canvas to blob
            const blob = await new Promise<Blob>((resolve) => {
                canvas.toBlob((blob) => {
                    if (blob) resolve(blob);
                }, 'image/png');
            });
    
            // Create download link and trigger download
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'my-custom-watch.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
    
        } catch (error) {
            console.error('Error downloading:', error);
        }
    };
    
    if(isGettingStarted)
        return(
            <div>
                <header className="p-8 h-20 pr-6 flex flex-row justify-between items-center">
                    <div className="w-full flex justify-start">
                        <Link href={"/"}>
                            <Image
                                src={darkLogo}
                                height={20}
                                width={90}
                                className="h-auto object-cover hidden dark:block"
                                alt="apple-watch-logo"
                            />
                            <Image
                                src={lightLogo}
                                height={20}
                                width={90}
                                className="h-auto object-cover dark:hidden block"
                                alt="apple-watch-logo"
                            />
                        </Link>
                    </div>
                </header>
            </div>
        )

    return (
        <div>
            <header className="p-8 h-20 pr-6 flex flex-row justify-between items-center">
                <div className="w-full flex justify-start">
                    <Link href={"/"}>
                        <Image
                            src={darkLogo}
                            height={20}
                            width={90}
                            className="h-auto object-cover hidden dark:block"
                            alt="apple-watch-logo"
                        />
                        <Image
                            src={lightLogo}
                            height={20}
                            width={90}
                            className="h-auto object-cover dark:hidden block"
                            alt="apple-watch-logo"
                        />
                    </Link>
                </div>
                <motion.div 
                    className="w-full justify-center items-center flex cursor-pointer gap-[10%]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                >
                    <Button 
                        variant="transparent" 
                        className='text-[17px] font-normal font-text gap-0 tracking-tight items-center justify-center'
                        onClick={() => dispatch(setIsWatchCollection(!isWatchCollection))}
                    >
                        Collections
                        <span><ChevronDown size={14}/></span>
                    </Button>
                </motion.div>
                <motion.div 
                    className="w-full flex justify-end"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
                >
                    <Button 
                        variant={'save'} 
                        size={'save'} 
                        onClick={handleShare}
                    >
                        Save
                    </Button>
                </motion.div>
            </header>
        </div>
    )
}
