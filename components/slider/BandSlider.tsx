import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { 
    setSelectedBand,
    setSelectedBandVariant,
    selectSelectedCollection,
    selectSelectedSize,
    selectSelectedCaseImage,
    selectSelectedBand,
    selectSelectedBandVariant
} from '@/lib/store/features/collectionSlice';

const generateBandImagePath = (
    collectionId: string,
    sizeId: string,
    bandId: string,
    variantId: string
): string => {
    return `/assets/sizes/${collectionId}/${sizeId}/bands/${bandId}/${variantId}.png`;
};

const NavButton = ({ direction, onClick, disabled }: { direction: 'prev' | 'next', onClick: () => void, disabled: boolean }) => (
    disabled ? null : (
        <button
            onClick={onClick}
            className="absolute top-1/2 transform -translate-y-1/2 z-20 w-9 h-9 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            style={{ [direction === 'prev' ? 'left' : 'right']: '1rem' }}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 36 36"
                className="w-8 h-8"
            >
                <path 
                    d={direction === 'prev' 
                        ? "M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"
                        : "M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"}
                    fill="currentColor"
                />
            </svg>
        </button>
    )
);

export default function BandSlider(){
    const dispatch = useAppDispatch();
    
    const selectedCollection = useAppSelector(selectSelectedCollection);
    const selectedSize = useAppSelector(selectSelectedSize);
    const currentCaseImage = useAppSelector(selectSelectedCaseImage);
    const collections = useAppSelector(state => state.collection.collections);
    const selectedBandId = useAppSelector(selectSelectedBand);
    const selectedBandVariantId = useAppSelector(selectSelectedBandVariant);
    
    const currentCollectionData = collections.find(c => c.id === selectedCollection);
    const currentSizeData = currentCollectionData?.sizes.find(s => s.id === selectedSize);
    
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleBandClick = (bandId: string, variantId: string) => {
        dispatch(setSelectedBand(bandId));
        dispatch(setSelectedBandVariant(variantId));

        const selectedElement = document.getElementById(`band-${variantId}`);
        if (selectedElement) {
            selectedElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    };

    const preventVerticalScroll = (e: React.WheelEvent) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
        }
    };

    const allVariants = useMemo(() => {
        return currentSizeData?.bands.flatMap(band => 
            band.variant.map(v => ({ bandId: band.id, ...v }))
        ) || [];
    }, [currentSizeData]);

    const currentVariantIndex = allVariants.findIndex(
        v => v.bandId === selectedBandId && v.id === selectedBandVariantId
    );

    const handleNavigation = (direction: 'prev' | 'next') => {
        const newIndex = direction === 'prev' ? currentVariantIndex - 1 : currentVariantIndex + 1;
        if (newIndex >= 0 && newIndex < allVariants.length) {
            const newVariant = allVariants[newIndex];
            handleBandClick(newVariant.bandId, newVariant.id);
        }
    };

    const isPrevDisabled = currentVariantIndex <= 0;
    const isNextDisabled = currentVariantIndex >= allVariants.length - 1;

    useEffect(() => {
        if (currentSizeData && sliderRef.current) {
            const element = document.getElementById(`band-${selectedBandVariantId}`);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }
        }
    }, [selectedCollection, selectedSize, selectedBandId, selectedBandVariantId, currentSizeData]);

    if (!currentSizeData) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className="relative no-vertical-scroll"
            >
                <NavButton 
                    direction="prev" 
                    onClick={() => handleNavigation('prev')}
                    disabled={isPrevDisabled}
                />
                <NavButton 
                    direction="next" 
                    onClick={() => handleNavigation('next')}
                    disabled={isNextDisabled}
                />

                <div className="h-[53vh] max-h-[508px] min-h-[314px] overflow-hidden m-auto w-full relative z-0">
                    <div
                        className="h-full whitespace-nowrap scrollbar-hide no-vertical-scroll"
                        ref={sliderRef}
                        onWheel={preventVerticalScroll}
                    >
                        <div className="max-h-[592px] h-full p-in-start scrollbar-hide no-vertical-scroll">
                            {currentSizeData.bands.map((band) => (
                                band.variant.map((variant) => {
                                    const imagePath = generateBandImagePath(
                                        selectedCollection!,
                                        selectedSize!,
                                        band.id,
                                        variant.id
                                    );
                                    
                                    return (
                                        <div
                                            id={`band-${variant.id}`}
                                            className="snap-center h-full inline-block whitespace-nowrap data-core-scroller-item"
                                            key={variant.id}
                                        >
                                            <button
                                                className="snap-center whitespace-normal flex justify-center items-center m-0 p-0 w-[35vh] md:w-[312px] h-full overflow-hidden bg-none relative text-center"
                                                onClick={() => handleBandClick(band.id, variant.id)}
                                            >
                                                <Image
                                                    src={imagePath.includes('.png') ? imagePath : `${imagePath}.png`}
                                                    height={1000}
                                                    width={1000}
                                                    alt={`${band.name} - ${variant.name}`}
                                                    className="object-cover absolute w-[52vh] max-w-[500px]"
                                                />
                                            </button>
                                        </div>
                                    );
                                })
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute top-1 z-10 h-auto max-w-[500px] w-[52vh] start-[50%] combinedimage m-auto">
                    <Image
                        src={currentCaseImage!.includes('.png') ? currentCaseImage! :`${currentCaseImage!}.png`}
                        height={1000}
                        width={1000}
                        alt="watch case preview"
                        className="object-cover absolute w-[52vh] max-w-[500px] h-auto"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};