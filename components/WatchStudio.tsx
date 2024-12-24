'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import GettingStarted from './GettingStarted';
import CollectionModal from './CollectionModal';
import Footer from './Footer';
import WatchInfo from './WatchInfo';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import SizeSlider from './slider/SizeSlider';
import { CaseSlider } from './slider/CaseSlider';
import { BandSlider } from './slider/BandSlider';
import { selectSelectedBandImage, selectSelectedCaseImage } from '@/lib/store/features/collectionSlice';

export default function WatchStudio() {
  
  const { isGettingStarted, isWatchCollection } = useAppSelector((state: any) => state.ui);
  const [sideview, setSideView] = useState(false);
  const { openButton } = useAppSelector((state) => state.button);

  const selectedBandImage = useAppSelector(selectSelectedBandImage);
  const selectedCaseImage = useAppSelector(selectSelectedCaseImage);


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className='watch-container'
      >
        { isGettingStarted && <GettingStarted/>}

        { isWatchCollection && <CollectionModal/> }

        <div className="text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: "28rem",
              scale: 2,
              top: "15vh",
            }}
            animate={{
              opacity: 1,
              y: isGettingStarted ? "28rem" : 0,
              scale: isGettingStarted ? 2 : 1,
              top: isGettingStarted ? "15vh" : "4vh",
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="relative overflow-hidden"
          >
            {openButton === "Size" && <SizeSlider />}
            {openButton === "Case" && <CaseSlider />}
            {openButton === "Band" && <BandSlider />}

            {openButton === null && (
              <div
                className={`h-[53vh] max-h-[29.88rem] min-h-[18.47rem] m-auto max-w-md w-[52vh] relative`}
              >
                {/* Default band & case image with animation */}
                {!sideview && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={selectedBandImage || ''}
                        height={1000}
                        width={1000}
                        alt="watch band preview"
                        className="object-cover absolute w-[52vh] max-w-[500px]"
                      />
                      <Image
                        src={selectedCaseImage || ''}
                        height={1000}
                        width={1000}
                        alt="watch case preview"
                        className="object-cover absolute w-[52vh] max-w-[500px]"
                      />
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Side view section with animation presence */}
                {sideview && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                      }}
                    >
                      {/* <Image
                        src={''}
                        height={1000}
                        width={1000}
                        alt="watch side preview"
                        className="object-cover absolute w-[52vh] max-w-[500px]"
                      /> */}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

        {!isGettingStarted && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
              className="m-auto flex flex-col pt-[6vh] text-center justify-center items-center font-text text-sm leading-[1.42]"
            >
              <button
                onClick={() => setSideView(!sideview)}
                className="mb-3 text-[#06c] underline text-xs"
              >
                {sideview ? "Front view" : "Side view"}
              </button>
              <WatchInfo/>
              <Footer/>
            </motion.div>
          </>
        )}
    </>
  )
}
