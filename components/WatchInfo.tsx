import { useAppSelector } from '@/lib/hooks';
import React from 'react';
import { 
    selectCollections, 
    selectSelectedBand, 
    selectSelectedBandVariant, 
    selectSelectedCase, 
    selectSelectedCaseVariant, 
    selectSelectedCollection, 
    selectSelectedSize, 
    selectTotalPrice 
} from '@/lib/store/features/collectionSlice';

export default function WatchInfo() {
    const collections = useAppSelector(selectCollections);
    const selectedCollectionId = useAppSelector(selectSelectedCollection);
    const selectedSizeId = useAppSelector(selectSelectedSize);
    const selectedCaseId = useAppSelector(selectSelectedCase);
    const selectedCaseVariantId = useAppSelector(selectSelectedCaseVariant);
    const selectedBandId = useAppSelector(selectSelectedBand);
    const selectedBandVariantId = useAppSelector(selectSelectedBandVariant);
    const totalPrice = useAppSelector(selectTotalPrice);

    const currentCollection = collections.find(col => col.id === selectedCollectionId);
    const currentSize = currentCollection?.sizes.find(size => size.id === selectedSizeId);
    const currentCase = currentSize?.cases.find(c => c.id === selectedCaseId);
    const currentCaseVariant = currentCase?.variant.find(v => v.id === selectedCaseVariantId);
    const currentBand = currentSize?.bands.find(b => b.id === selectedBandId);
    const currentBandVariant = currentBand?.variant.find(v => v.id === selectedBandVariantId);

    const isVariantSizeExclusive = !currentCollection?.sizes.some(size => 
        size.id !== selectedSizeId && // different size
        size.bands.some(band => 
            band.id === selectedBandId && // same band type
            band.variant.some(v => v.id === selectedBandVariantId) // same variant
        )
    );  
    return (
        <div className="flex flex-col w-[70%] md:w-[60%]">
            <span className="text-[#6e6e73] font-text font-semibold tracking-[-.01em] mb-[4px] text-xs uppercase">
                {currentCollection?.name}
            </span>
            <span className="text-white/90 font-text font-semibold tracking-[-.016em] mb-[5px] overflow-hidden text-sm">
                {`${currentSize?.name} ${currentCaseVariant?.name} with ${currentBandVariant?.name}`}
            </span>
            <span className="text-white/70 font-regular mb-[5px] tracking-[-.016em] overflow-hidden text-sm">
                {`From $${totalPrice}`}
            </span>
            <span className="text-white/50 font-text tracking-tight text-[12px] min-h-4">
                {isVariantSizeExclusive ? `${currentSize?.name} only` : ` `}
            </span>
        </div>
    )
}
