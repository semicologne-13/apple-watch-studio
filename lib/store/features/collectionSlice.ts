import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {  
    defaultValues,
    WatchState,
    collection
} from "@/data/collection";
import { RootState } from "../store";

const generateCaseImagePath = (
    collectionId: string,
    sizeId: string,
    caseId: string,
    variantId: string
): string => {
    // Use default image if this is the default configuration
    if (collectionId === defaultValues[0].id &&
        sizeId === defaultValues[0].sizes[0].id &&
        caseId === defaultValues[0].sizes[0].cases[0].id &&
        variantId === defaultValues[0].sizes[0].cases[0].variant[0].id) {
        return defaultValues[0].sizes[0].cases[0].variant[0].image;
    }
    return `/assets/sizes/${collectionId}/${sizeId}/${caseId}/${variantId}`;
};

const generateBandImagePath = (
    collectionId: string,
    sizeId: string,
    bandId: string,
    variantId: string
): string => {
    // Use default image if this is the default configuration
    if (collectionId === defaultValues[0].id &&
        sizeId === defaultValues[0].sizes[0].id &&
        bandId === defaultValues[0].sizes[0].bands[0].id &&
        variantId === defaultValues[0].sizes[0].bands[0].variant[0].id) {
        return defaultValues[0].sizes[0].bands[0].variant[0].image;
    }
    return `/assets/sizes/${collectionId}/${sizeId}/bands/${bandId}/${variantId}`;
};

const initialState: WatchState = {
    collections: collection,
    selectedCollection: defaultValues[0].id,
    selectedSize: defaultValues[0].sizes[0].id,
    selectedCase: defaultValues[0].sizes[0].cases[0].id,
    selectedCaseVariant: defaultValues[0].sizes[0].cases[0].variant[0].id,
    selectedCaseImage: defaultValues[0].sizes[0].cases[0].variant[0].image,
    selectedBand: defaultValues[0].sizes[0].bands[0].id,
    selectedBandVariant: defaultValues[0].sizes[0].bands[0].variant[0].id,
    selectedBandImage: defaultValues[0].sizes[0].bands[0].variant[0].image,
    totalPrice: defaultValues[0].sizes[0].price
};

export const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        setSelectedCollection: (state, action: PayloadAction<string>) => {
            state.selectedCollection = action.payload;
            const collection = state.collections.find(c => c.id === action.payload);
            if (collection) {
                state.selectedSize = collection.sizes[0].id;
                state.selectedCase = collection.sizes[0].cases[0].id;
                state.selectedCaseVariant = collection.sizes[0].cases[0].variant[0].id;
                state.selectedBand = collection.sizes[0].bands[0].id;
                state.selectedBandVariant = collection.sizes[0].bands[0].variant[0].id;
                
                // Update images with new paths
                state.selectedCaseImage = generateCaseImagePath(
                    action.payload,
                    collection.sizes[0].id,
                    collection.sizes[0].cases[0].id,
                    collection.sizes[0].cases[0].variant[0].id
                );
                state.selectedBandImage = generateBandImagePath(
                    action.payload,
                    collection.sizes[0].id,
                    collection.sizes[0].bands[0].id,
                    collection.sizes[0].bands[0].variant[0].id
                );
                
                state.totalPrice = collection.sizes[0].price;
            }
        },
        setSelectedSize: (state, action: PayloadAction<string>) => {
            state.selectedSize = action.payload;
            const collection = state.collections.find(c => c.id === state.selectedCollection);
            const size = collection?.sizes.find(s => s.id === action.payload);
            if (size) {
                const caseExists = size.cases.find(c => c.id === state.selectedCase);

                if(!caseExists) {
                    state.selectedCase = size.cases[0].id;
                    state.selectedCaseVariant = size.cases[0].variant[0].id;
                } else {
                    const caseVariantExists = caseExists.variant.find(v => v.id === state.selectedCaseVariant);
                    if (!caseVariantExists) {
                        state.selectedCaseVariant = caseExists.variant[0].id;
                    }
                }

                const bandExists = size.bands.find(b => b.id === state.selectedBand);

                if(!bandExists) {
                    state.selectedBand = size.bands[0].id;
                    state.selectedBandVariant = size.bands[0].variant[0].id;
                } else {
                    const bandVariantExists = bandExists.variant.find(v => v.id === state.selectedBandVariant);
                    if (!bandVariantExists) {
                        state.selectedBandVariant = bandExists.variant[0].id;
                    }
                }

                state.selectedCaseImage = generateCaseImagePath(
                    state.selectedCollection!,
                    action.payload,
                    state.selectedCase!,
                    state.selectedCaseVariant!
                );
                state.selectedBandImage = generateBandImagePath(
                    state.selectedCollection!,
                    action.payload,
                    state.selectedBand!,
                    state.selectedBandVariant!
                );
                
                state.totalPrice = size.price;
            }
        },
        setSelectedCase: (state, action: PayloadAction<string>) => {
            state.selectedCase = action.payload;
            const collection = state.collections.find(c => c.id === state.selectedCollection);
            const size = collection?.sizes.find(s => s.id === state.selectedSize);
            const case_ = size?.cases.find(c => c.id === action.payload);
            if (case_) {
                state.selectedCaseVariant = case_.variant[0].id;
                // Update case image path
                state.selectedCaseImage = generateCaseImagePath(
                    state.selectedCollection!,
                    state.selectedSize!,
                    action.payload,
                    case_.variant[0].id
                );
                state.selectedBandImage = generateBandImagePath(
                    state.selectedCollection!,
                    state.selectedSize!,
                    state.selectedBand!,
                    state.selectedBandVariant!
                )
            }
        },
        setSelectedCaseVariant: (state, action: PayloadAction<string>) => {
            state.selectedCaseVariant = action.payload;
            // Update case image path
            state.selectedCaseImage = generateCaseImagePath(
                state.selectedCollection!,
                state.selectedSize!,
                state.selectedCase!,
                action.payload
            );
        },
        setSelectedBand: (state, action: PayloadAction<string>) => {
            state.selectedBand = action.payload;
            const collection = state.collections.find(c => c.id === state.selectedCollection);
            const size = collection?.sizes.find(s => s.id === state.selectedSize);
            const band = size?.bands.find(b => b.id === action.payload);
            if (band) {
                state.selectedBandVariant = band.variant[0].id;
                // Update band image path
                state.selectedBandImage = generateBandImagePath(
                    state.selectedCollection!,
                    state.selectedSize!,
                    action.payload,
                    band.variant[0].id
                );
                
                state.selectedCaseImage = generateCaseImagePath(
                    state.selectedCollection!,
                    state.selectedSize!,
                    state.selectedCase!,
                    state.selectedCaseVariant!
                );
            }
        },
        setSelectedBandVariant: (state, action: PayloadAction<string>) => {
            state.selectedBandVariant = action.payload;
            // Update band image path
            state.selectedBandImage = generateBandImagePath(
                state.selectedCollection!,
                state.selectedSize!,
                state.selectedBand!,
                action.payload
            );
        },
        updateTotalPrice: (state) => {
            const collection = state.collections.find(c => c.id === state.selectedCollection);
            const size = collection?.sizes.find(s => s.id === state.selectedSize);
            if (size) {
                let total = size.price;
                
                const case_ = size.cases.find(c => c.id === state.selectedCase);
                const caseVariant = case_?.variant.find(v => v.id === state.selectedCaseVariant);
                if (caseVariant) {
                    total += caseVariant.price;
                }
                
                const band = size.bands.find(b => b.id === state.selectedBand);
                const bandVariant = band?.variant.find(v => v.id === state.selectedBandVariant);
                if (bandVariant) {
                    total += bandVariant.price;
                }
                
                state.totalPrice = total;
            }
        }
    }
});

export const { 
    setSelectedCollection,
    setSelectedSize,
    setSelectedCase,
    setSelectedCaseVariant,
    setSelectedBand,
    setSelectedBandVariant,
    updateTotalPrice
} = collectionSlice.actions;

export default collectionSlice.reducer;

// Selectors remain unchanged
export const selectCollections = (state: RootState) => state.collection.collections;
export const selectSelectedCollection = (state: RootState) => state.collection.selectedCollection;
export const selectSelectedSize = (state: RootState) => state.collection.selectedSize;
export const selectSelectedCase = (state: RootState) => state.collection.selectedCase;
export const selectSelectedCaseVariant = (state: RootState) => state.collection.selectedCaseVariant;
export const selectSelectedCaseImage = (state: RootState) => state.collection.selectedCaseImage;
export const selectSelectedBand = (state: RootState) => state.collection.selectedBand;
export const selectSelectedBandVariant = (state: RootState) => state.collection.selectedBandVariant;
export const selectSelectedBandImage = (state: RootState) => state.collection.selectedBandImage;
export const selectTotalPrice = (state: RootState) => state.collection.totalPrice;