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
    return `/assets/sizes/${collectionId}/${sizeId}/${caseId}/${variantId}`;
};

const generateBandImagePath = (
    collectionId: string,
    sizeId: string,
    bandId: string,
    variantId: string
): string => {
    return `/assets/sizes/${collectionId}/${sizeId}/bands/${bandId}/${variantId}`;
};

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

    const handleSizeClick = (sizeId: string) => {
        dispatch(setSelectedSize(sizeId));
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
                <div className="h-[53vh] max-h-[508px] min-h-[314px] overflow-hidden m-auto w-full relative z-10">
                    <div
                        className="h-full whitespace-nowrap scrollbar-hide no-vertical-scroll"
                        ref={sliderRef}
                        onWheel={preventVerticalScroll}
                    >
                        <div className="max-h-[592px] h-full p-in-start scrollbar-hide no-vertical-scroll">
                            {collections
                                .find((opt) => opt.id === selectedCollection)
                                ?.sizes.map((option) => {
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
                                                onClick={() => handleSizeClick(option.id)}
                                            >
                                                <Image
                                                    src={bandImagePath}
                                                    height={1000}
                                                    width={1000}
                                                    alt={`${option.name} band`}
                                                    className="object-cover absolute w-[52vh]"
                                                    style={{ maxWidth: `${width}px` }}
                                                />
                                                <Image
                                                    src={caseImagePath}
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