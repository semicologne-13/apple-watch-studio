import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { 
    setSelectedCase,
    setSelectedCaseVariant,
    selectSelectedCollection,
    selectSelectedSize,
    selectSelectedBandImage,
    selectSelectedCase,
    selectSelectedCaseVariant
} from '@/lib/store/features/collectionSlice';

const generateCaseImagePath = (
    collectionId: string,
    sizeId: string,
    caseId: string,
    variantId: string
): string => {
    return `/assets/sizes/${collectionId}/${sizeId}/${caseId}/${variantId}.png`;
};

export const CaseSlider = () => {
    const dispatch = useAppDispatch();
    
    const selectedCollection = useAppSelector(selectSelectedCollection);
    const selectedSize = useAppSelector(selectSelectedSize);
    const currentBandImage = useAppSelector(selectSelectedBandImage);
    const collections = useAppSelector(state => state.collection.collections);
    const selectedCaseId = useAppSelector(selectSelectedCase);
    const selectedCaseVariantId = useAppSelector(selectSelectedCaseVariant);
    
    const currentCollectionData = collections.find(c => c.id === selectedCollection);
    const currentSizeData = currentCollectionData?.sizes.find(s => s.id === selectedSize);
    
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleCaseClick = (caseId: string, variantId: string) => {
        dispatch(setSelectedCase(caseId));
        dispatch(setSelectedCaseVariant(variantId));

        const selectedElement = document.getElementById(`case-${variantId}`);
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
            const element = document.getElementById(`case-${selectedCaseVariantId}`);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }
        }
    }, [selectedCollection, selectedSize, selectedCaseId, selectedCaseVariantId, currentSizeData]);

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
                <div className="h-[53vh] max-h-[508px] min-h-[314px] overflow-hidden m-auto w-full relative z-10">
                    <div
                        className="h-full whitespace-nowrap scrollbar-hide no-vertical-scroll"
                        ref={sliderRef}
                        onWheel={preventVerticalScroll}
                    >
                        <div className="max-h-[592px] h-full p-in-start scrollbar-hide no-vertical-scroll">
                            {currentSizeData.cases.map((case_) => (
                                case_.variant.map((variant) => {
                                    const imagePath = generateCaseImagePath(
                                        selectedCollection!,
                                        selectedSize!,
                                        case_.id,
                                        variant.id
                                    );
                                    
                                    return (
                                        <div
                                            id={`case-${variant.id}`}
                                            className="snap-center h-full inline-block whitespace-nowrap data-core-scroller-item"
                                            key={variant.id}
                                        >
                                            <button
                                                className="snap-center whitespace-normal flex justify-center items-center m-0 p-0 w-[35vh] md:w-[312px] h-full overflow-hidden bg-none relative text-center"
                                                onClick={() => handleCaseClick(case_.id, variant.id)}
                                            >
                                                <Image
                                                    src={imagePath}
                                                    height={1000}
                                                    width={1000}
                                                    alt={`${case_.name} - ${variant.name}`}
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
                <div className="absolute top-1 z-0 h-auto max-w-[500px] w-[52vh] start-[50%] combinedimage m-auto">
                    <Image
                        src={currentBandImage!}
                        height={1000}
                        width={1000}
                        alt="watch band preview"
                        className="object-cover absolute w-[52vh] max-w-[500px] h-auto"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};