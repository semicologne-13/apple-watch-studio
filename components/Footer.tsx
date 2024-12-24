import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { 
    setSelectedSize,
    setSelectedCase,
    setSelectedBand,
    selectCollections,
    selectSelectedCollection,
    selectSelectedSize,
    selectSelectedCase,
    selectSelectedBand,
    setSelectedCaseVariant,
    setSelectedBandVariant
} from "@/lib/store/features/collectionSlice";
import { toggleButton } from "@/lib/store/features/buttonSlice";
import { WatchSizeIcon } from "@/components/svg/WatchSizeIcon";
import { WatchBandIcon } from "@/components/svg/WatchBandIcon";
import { WatchCaseIcon } from "@/components/svg/WatchCaseIcon";
import { Button } from "./ui/button";

const Footer = () => {
    const dispatch = useAppDispatch();
    const openButton = useAppSelector((state) => state.button.openButton);
    
    const collections = useAppSelector(selectCollections);
    const selectedCollectionId = useAppSelector(selectSelectedCollection);
    const selectedSizeId = useAppSelector(selectSelectedSize);
    const selectedCaseId = useAppSelector(selectSelectedCase);
    const selectedBandId = useAppSelector(selectSelectedBand);

    // Get the current collection and size data
    const currentCollection = collections.find(col => col.id === selectedCollectionId);
    const currentSize = currentCollection?.sizes.find(size => size.id === selectedSizeId);

    const handleSizeChange = (sizeId: string) => {
        dispatch(setSelectedSize(sizeId));
    };

    const handleCaseChange = (caseId: string) => {
        dispatch(setSelectedCase(caseId));
        const caseItem = currentSize?.cases.find(c => c.id === caseId);
        if (caseItem) {
            dispatch(setSelectedCaseVariant(caseItem.variant[0].id));
        }
    };

    const handleBandChange = (bandId: string) => {
        dispatch(setSelectedBand(bandId));
        const band = currentSize?.bands.find(b => b.id === bandId);
        if (band) {
            dispatch(setSelectedBandVariant(band.variant[0].id));
        }
    };

    return (
        <footer className="box-border mt-52 absolute py-6 text-center whitespace-nowrap w-full">
            <div className="min-h-[35px] overflow-x-scroll pb-[5px] flex justify-center w-full scrollbar-hide">
                {/* Size Selection */}
                <div className="bg-[#e8e8ed] space-x-2 rounded-full items-center flex text-[#1d1d1f] border-none mx-[6px] px-4 sm:px-6 font-proTextRegular text-[14px] sm:text-[16px] md:text-[17px] tracking-[-.022em]">
                    <div className="inline-block">
                        <WatchSizeIcon />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, ease: 'easeInOut' }}
                        className="space-x-3"
                    >
                        {openButton === "Size" ? (
                            currentCollection?.sizes.map(size => (
                                <Button
                                    key={size.id}
                                    onClick={() => handleSizeChange(size.id)}
                                    size={'footer'}
                                    variant={size.id === selectedSizeId ? 'selectedFooter' : 'unselectedFooter'}
                                >
                                    {size.name}
                                </Button>
                            ))
                        ) : (
                            <Button
                                onClick={() => dispatch(toggleButton("Size"))}
                                className="my-[5px] min-h-[20px] font-text font-normal text-[17px] align-middle text-[#1d1d1f] py-[5px]"
                                size={'footer'}
                                variant={'unselectedFooter'}
                            >
                                Size
                            </Button>
                        )}
                    </motion.div>
                </div>

                {/* Case Selection */}
                <div className="bg-[#e8e8ed] space-x-2 rounded-full items-center flex text-[#1d1d1f] border-none mx-[6px] px-4 sm:px-6 font-proTextRegular text-[14px] sm:text-[16px] md:text-[17px] tracking-[-.022em]">
                    <div className="inline-block">
                        <WatchCaseIcon />
                    </div>
                    {openButton === "Case" ? (
                        currentSize?.cases.map(caseOption => (
                            <Button
                                key={caseOption.id}
                                onClick={() => handleCaseChange(caseOption.id)}
                                size={'footer'}
                                variant={caseOption.id === selectedCaseId ? 'selectedFooter' : 'unselectedFooter'}
                            >
                                {caseOption.name}
                            </Button>
                        ))
                    ) : (
                        <Button
                            onClick={() => dispatch(toggleButton("Case"))}
                            className="my-[5px] min-h-[20px] font-text font-normal text-[17px] align-middle text-[#1d1d1f] py-[5px]"
                            size={'footer'}
                            variant={'unselectedFooter'}
                        >
                            Case
                        </Button>
                    )}
                </div>

                {/* Band Selection */}
                <div className="bg-[#e8e8ed] space-x-2 rounded-full items-center flex text-[#1d1d1f] border-none mx-[6px] px-4 sm:px-6 font-proTextRegular text-[14px] sm:text-[16px] md:text-[17px] tracking-[-.022em]">
                    <div className="inline-block">
                        <WatchBandIcon />
                    </div>
                    {openButton === "Band" ? (
                        currentSize?.bands.map(band => (
                            <Button
                                key={band.id}
                                onClick={() => handleBandChange(band.id)}
                                size={'footer'}
                                variant={band.id === selectedBandId ? 'selectedFooter' : 'unselectedFooter'}
                            >
                                {band.name}
                            </Button>
                        ))
                    ) : (
                        <Button
                            onClick={() => dispatch(toggleButton("Band"))}
                            className="my-[5px] min-h-[20px] font-text font-normal text-[17px] align-middle text-[#1d1d1f] py-[5px]"
                            size={'footer'}
                            variant={'unselectedFooter'}
                        >
                            Band
                        </Button>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;