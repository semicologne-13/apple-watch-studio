import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
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
    return `/assets/sizes/${collectionId}/${sizeId}/bands/${bandId}/${variantId}`;
};

export const BandSlider = () => {
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
                                                    src={imagePath}
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
                        src={currentCaseImage!}
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