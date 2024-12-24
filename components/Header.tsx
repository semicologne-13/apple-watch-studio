'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

import lightLogo from '@/public/assets/logo/apple-watch-design-studio-logo.png'
import darkLogo from '@/public/assets/logo/apple-watch-design-studio-logo-dark.png'
import { Button } from '@/components/ui/button'
import { setIsWatchCollection } from '@/lib/store/features/uiSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

export default function Header() {
    const dispatch = useAppDispatch();
    const { isGettingStarted, isWatchCollection } = useAppSelector((state) => state.ui);

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
                    <Button variant={'save'} size={'save'}>Save</Button>
                </motion.div>
            </header>
        </div>
    )
}
