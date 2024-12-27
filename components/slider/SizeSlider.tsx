import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { 
    setSelectedSize,
    selectCollections,
    selectSelectedCollection,
    selectSelectedCase,
    selectSelectedBand,
    selectSelectedCaseVariant,
    selectSelectedBandVariant,
    selectSelectedSize
} from '@/lib/store/features/collectionSlice';
import { AnimatePresence, motion } from 'motion/react';
import { getImageSize } from '@/utils/imageSizes';

const generateCaseImagePath = (
    collectionId: string,
    sizeId: string,
    caseId: string,
    variantId: string
): string => {
    return `/assets/sizes/${collectionId}/${sizeId}/${caseId}/${variantId}.png`;
};

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

export default function SizeSlider() {
    const dispatch = useAppDispatch();
    const collections = useAppSelector(selectCollections);
    const selectedCollection = useAppSelector(selectSelectedCollection);

    const selectedSizeId = useAppSelector(selectSelectedSize);
    const selectedCaseId = useAppSelector(selectSelectedCase);
    const selectedBandId = useAppSelector(selectSelectedBand);
    const selectedCaseVariantId = useAppSelector(selectSelectedCaseVariant);
    const selectedBandVariantId = useAppSelector(selectSelectedBandVariant);

    const sliderRef = useRef<HTMLDivElement>(null);

    const sizes = collections.find((opt) => opt.id === selectedCollection)?.sizes || [];
    const currentSizeIndex = sizes.findIndex(size => size.id === selectedSizeId);

    const isPrevDisabled = currentSizeIndex <= 0;
    const isNextDisabled = currentSizeIndex >= sizes.length - 1;

    const getCurrentVariants = (sizeId: string) => {
        const currentCollection = collections.find(c => c.id === selectedCollection);
        const size = currentCollection?.sizes.find(s => s.id === sizeId);

        if (!size) return null;

        // Find the current case and band in the new size
        const caseInSize = size.cases.find(c => c.id === selectedCaseId);
        const bandInSize = size.bands.find(b => b.id === selectedBandId);

        // Find the current variants in the new size
        const caseVariantInSize = caseInSize?.variant.find(v => v.id === selectedCaseVariantId);
        const bandVariantInSize = bandInSize?.variant.find(v => v.id === selectedBandVariantId);

        return {
            // Use current selections, only fallback if item doesn't exist in new size
            caseId: caseInSize ? selectedCaseId : size.cases[0].id,
            bandId: bandInSize ? selectedBandId : size.bands[0].id,
            caseVariantId: caseVariantInSize ? selectedCaseVariantId : (caseInSize?.variant[0].id || size.cases[0].variant[0].id),
            bandVariantId: bandVariantInSize ? selectedBandVariantId : (bandInSize?.variant[0].id || size.bands[0].variant[0].id)
        };
    };

    const handleNavigation = (direction: 'prev' | 'next') => {
        const newIndex = direction === 'prev' ? currentSizeIndex - 1 : currentSizeIndex + 1;
        if (newIndex >= 0 && newIndex < sizes.length) {
            dispatch(setSelectedSize(sizes[newIndex].id));
        }
    };

    const preventVerticalScroll = (e: React.WheelEvent) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
        }
    };

    useEffect(() => {
        if(selectedSizeId) {
            const selectedElement = document.getElementById(`watch-${selectedSizeId}`);
            if(selectedElement) {
                selectedElement.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }
        }
    }, [selectedSizeId]);

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

                <div className="h-[53vh] max-h-[508px] min-h-80 overflow-hidden m-auto w-full relative z-10">
                    <div
                        className="h-full whitespace-nowrap scrollbar-hide no-vertical-scroll"
                        ref={sliderRef}
                        onWheel={preventVerticalScroll}
                    >
                        <div className="max-h-[592px] h-full p-in-start scrollbar-hide no-vertical-scroll">
                            {sizes.map((option) => {
                                const { width } = getImageSize(option.name);
                                
                                const variants = getCurrentVariants(option.id);
                                if(!variants) return null;

                                const bandImagePath = generateBandImagePath(
                                    selectedCollection!,
                                    option.id,
                                    variants.bandId!,
                                    variants.bandVariantId!
                                );
                                
                                const caseImagePath = generateCaseImagePath(
                                    selectedCollection!,
                                    option.id,
                                    variants.caseId!,
                                    variants.caseVariantId!
                                );
                                
                                return (
                                    <div
                                        id={`watch-${option.id}`}
                                        className="snap-center h-full inline-block whitespace-nowrap data-core-scroller-item"
                                        key={option.id}
                                    >
                                        <button
                                            className="snap-center whitespace-normal flex justify-center items-end m-0 p-0 w-[312px] h-full overflow-hidden bg-none relative text-center"
                                            onClick={() => dispatch(setSelectedSize(option.id))}
                                        >
                                            <Image
                                                src={bandImagePath.includes('.png') ? bandImagePath : `${bandImagePath}.png`}
                                                height={1000}
                                                width={1000}
                                                alt={`${option.name} band`}
                                                className="object-cover absolute w-[52vh]"
                                                style={{ maxWidth: `${width}px` }}
                                            />
                                            <Image
                                                src={caseImagePath.includes('.png') ? caseImagePath : `${caseImagePath}.png`}
                                                height={1000}
                                                width={1000}
                                                alt={`${option.name} case`}
                                                className="object-cover absolute w-[52vh]"
                                                style={{ maxWidth: `${width}px` }}
                                            />
                                        </button>
                                    </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}