export interface watchCaseVariant {
    id: string, 
    name: string, 
    price: number, 
    image: string
}

export interface watchCase {
    id: string;
    name: string;
    variant: watchCaseVariant[]
}

export interface watchBandVariant {
    id: string, 
    name: string, 
    price: number, 
    image: string
}
export interface watchBand {
    id: string;
    name: string;
    variant: watchBandVariant[]
}

export interface watchSize {
    id: string;
    name: string;
    price: number;
    image: string;
    cases: watchCase[];
    bands: watchBand[];
}

export interface watchCollection {
    id: string;
    name: string;
    sizes : watchSize[];
};

export interface WatchState {
    collections: watchCollection[],
    selectedCollection: string | null;
    selectedSize: string | null;
    selectedCase: string | null;
    selectedCaseVariant: string | null;
    selectedCaseImage: string | null;
    selectedBand: string | null;
    selectedBandVariant: string | null;
    selectedBandImage: string | null;
    totalPrice: number;
}

const series10Band46 = [
    {
        id: 'STAINLESS_STEEL',
        name: 'Stainless Steel',
        variant: [
            {
                id: 'NATURAL_MILANESE_LOOP',
                name: 'Natural Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GOLD_MILANESE_LOOP',
                name: 'Gold Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'SLATE_MILANESE_LOOP',
                name: 'Slate Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'NATURAL_LINK_BRACELET',
                name: 'Natural Link Bracelet',
                price: 0,
                image: ''
            },
            {
                id: 'GOLD_LINK_BRACELET',
                name: 'Gold Link Bracelet',
                price: 0,
                image: ''
            },
            {
                id: 'SLATE_LINK_BRACELET',
                name: 'Slate Link Bracelet',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'SPORT_LOOP',
        name: 'Sport Loop',
        variant: [
            {
                id: 'ULTRAMARINE_SPORT_LOOP',
                name: 'Ultramarine Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'LAKE_GREEN_SPORT_LOOP',
                name: 'Lake Green Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLUE_CLOUD_SPORT_LOOP',
                name: 'Blue Cloud Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'INK_SPORT_LOOP',
                name: 'Ink Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PLUM_SPORT_LOOP',
                name: 'Plum Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_SPORT_LOOP',
                name: 'Pride Edition Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_LOOP',
                name: 'Pride Edition Sport Loop',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'SPORT_BAND',
        name: 'Sport Band',
        variant: [
            {
                id: 'LAKE_GREEN_SPORT_BAND',
                name: 'Lake Green Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'STONE_GRAY_SPORT_BAND',
                name: 'Stone Gray Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'STARLIGHT_SPORT_BAND',
                name: 'Starlight Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PLUM_SPORT_BAND',
                name: 'Plum Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_SPORT_BAND',
                name: 'Black Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'DENIM_SPORT_BAND',
                name: 'Denim Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'LIGHT_BLUSH_SPORT_BAND',
                name: 'Light Blush Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_SPORT_BAND',
                name: 'Pride Edition Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_BAND_UNITY_BLOOM',
                name: 'Black Unity Sport Band - Unity Bloom',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_BAND',
                name: 'Black Unity Sport Band',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'FINEWOVEN',
        name: 'FinWoven',
        variant: [
            {
                id: 'BLACK_MAGNETIC_LINK',
                name: 'Black Magentic Link',
                price: 0,
                image: ''
            },
            {
                id: 'DARK_TAUPE_MAGNETIC_LINK',
                name: 'Dark Taupe Magentic Link',
                price: 0,
                image: ''
            },
            {
                id: 'BLACKBERRY_MAGNETIC_LINK',
                name: 'Blackberry Magentic Link',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'BRAIDED_SOLO_LOOP',
        name: 'Braided Solo Loop',
        variant: [
            {
                id: 'LAKE_GREEN_BRAIDED_SOLO_LOOP',
                name: 'Lake Green Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'MIDNIGHT_BRAIDED_SOLO_LOOP',
                name: 'Midnight Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'DENIM_BRAIDED_SOLO_LOOP',
                name: 'Denim Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'CHARTREUSE_BRAIDED_SOLO_LOOP',
                name: 'Chartreuse Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'MAGENTA_BRAIDED_SOLO_LOOP',
                name: 'Magenta Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_BRAIDED_SOLO_LOOP',
                name: 'Pride Edition Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_BRAIDED_SOLO_LOOP',
                name: 'Black Unity Braided Solo Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'SOLO_LOOP',
        name: 'Solo Loop',
        variant: [
            {
                id: 'STAR_FRUIT_SOLO_LOOP',
                name: 'Star Fruit Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'ULTRAMARINE_SOLO_LOOP',
                name: 'Ultramarine Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'LAKE_GREEN_SOLO_LOOP',
                name: 'Lake Green Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_SOLO_LOOP',
                name: 'Black Solo Loop',
                price: 0,
                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/bands/SOLO_LOOP/BLACK_SOLO_LOOP.png'
            },
            {
                id: 'LIGHT_BLUSH_SOLO_LOOP',
                name: 'Light Blush Solo Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'NIKE_SPORT_LOOP',
        name: 'Nike Sport Loop',
        variant: [
            {
                id: 'BLACKBLUE_NIKE_SPORT_LOOP',
                name: 'Black/Blue Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'STRALIGHTPINK_NIKE_SPORT_LOOP',
                name: 'Starlight/Pink Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GREYBLUE_NIKE_SPORT_LOOP',
                name: 'Grey/Blue Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GREENGREY_NIKE_SPORT_LOOP',
                name: 'Green/Grey Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLUERED_NIKE_SPORT_LOOP',
                name: 'Blue/Red Nike Sport Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'NIKE_SPORT_BAND',
        name: 'Nike Sport Band',
        variant: [
            {
                id: 'VOLT_SPLASH_NIKE_SPORT_BAND',
                name: 'Volt Splash Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'MAGIC_EMBER_NIKE_SPORT_BAND',
                name: 'Magic Ember Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'MIDNIGHT_SKY_NIKE_SPORT_BAND',
                name: 'Midnight Sky Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PURE_PLATINUM_NIKE_SPORT_BAND',
                name: 'Pure Platinum Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'DESERT_STONE_NIKE_SPORT_BAND',
                name: 'Desert Stone Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'CARGO_KHAKI_NIKE_SPORT_BAND',
                name: 'Cargo Khaki Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLUE_FLAME_NIKE_SPORT_BAND',
                name: 'Blue Flame Nike Sport Band',
                price: 0,
                image: ''
            },
        ]
    }
]

const series10Band42 = [
    {
        id: 'STAINLESS_STEEL',
        name: 'Stainless Steel',
        variant: [
            {
                id: 'NATURAL_MILANESE_LOOP',
                name: 'Natural Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GOLD_MILANESE_LOOP',
                name: 'Gold Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'SLATE_MILANESE_LOOP',
                name: 'Slate Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'NATURAL_LINK_BRACELET',
                name: 'Natural Link Bracelet',
                price: 0,
                image: ''
            },
            {
                id: 'GOLD_LINK_BRACELET',
                name: 'Gold Link Bracelet',
                price: 0,
                image: ''
            },
            {
                id: 'SLATE_LINK_BRACELET',
                name: 'Slate Link Bracelet',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'SPORT_LOOP',
        name: 'Sport Loop',
        variant: [
            {
                id: 'ULTRAMARINE_SPORT_LOOP',
                name: 'Ultramarine Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'LAKE_GREEN_SPORT_LOOP',
                name: 'Lake Green Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLUE_CLOUD_SPORT_LOOP',
                name: 'Blue Cloud Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'INK_SPORT_LOOP',
                name: 'Ink Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PLUM_SPORT_LOOP',
                name: 'Plum Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_SPORT_LOOP',
                name: 'Pride Edition Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_LOOP',
                name: 'Pride Edition Sport Loop',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'SPORT_BAND',
        name: 'Sport Band',
        variant: [
            {
                id: 'LAKE_GREEN_SPORT_BAND',
                name: 'Lake Green Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'STONE_GRAY_SPORT_BAND',
                name: 'Stone Gray Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'STARLIGHT_SPORT_BAND',
                name: 'Starlight Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PLUM_SPORT_BAND',
                name: 'Plum Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_SPORT_BAND',
                name: 'Black Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'DENIM_SPORT_BAND',
                name: 'Denim Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'LIGHT_BLUSH_SPORT_BAND',
                name: 'Light Blush Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_SPORT_BAND',
                name: 'Pride Edition Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_BAND_UNITY_BLOOM',
                name: 'Black Unity Sport Band - Unity Bloom',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_BAND',
                name: 'Black Unity Sport Band',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'FINEWOVEN',
        name: 'FinWoven',
        variant: [
            {
                id: 'BLACK_MAGNETIC_LINK',
                name: 'Black Magentic Link',
                price: 0,
                image: ''
            },
            {
                id: 'DARK_TAUPE_MAGNETIC_LINK',
                name: 'Dark Taupe Magentic Link',
                price: 0,
                image: ''
            },
            {
                id: 'BLACKBERRY_MAGNETIC_LINK',
                name: 'Blackberry Magentic Link',
                price: 0,
                image: ''
            }, 
            {
                id: 'DEEP_BLUE_MODERN_BUCKLE',
                name: 'Deep Blue Modern Buckle',
                price: 0,
                image: ''
            },
            {
                id: 'DARK_TAUPE_MODERN_BUCKLE',
                name: 'Dark Taupe Modern Buckle',
                price: 0,
                image: ''
            },
            {
                id: 'CHARTREUSE_MODERN_BUCKLE',
                name: 'Chartreuse Modern Buckle',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'BRAIDED_SOLO_LOOP',
        name: 'Braided Solo Loop',
        variant: [
            {
                id: 'LAKE_GREEN_BRAIDED_SOLO_LOOP',
                name: 'Lake Green Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'MIDNIGHT_BRAIDED_SOLO_LOOP',
                name: 'Midnight Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'DENIM_BRAIDED_SOLO_LOOP',
                name: 'Denim Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'CHARTREUSE_BRAIDED_SOLO_LOOP',
                name: 'Chartreuse Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'MAGENTA_BRAIDED_SOLO_LOOP',
                name: 'Magenta Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_BRAIDED_SOLO_LOOP',
                name: 'Pride Edition Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_BRAIDED_SOLO_LOOP',
                name: 'Black Unity Braided Solo Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'SOLO_LOOP',
        name: 'Solo Loop',
        variant: [
            {
                id: 'STAR_FRUIT_SOLO_LOOP',
                name: 'Star Fruit Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'ULTRAMARINE_SOLO_LOOP',
                name: 'Ultramarine Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'LAKE_GREEN_SOLO_LOOP',
                name: 'Lake Green Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_SOLO_LOOP',
                name: 'Black Solo Loop',
                price: 0,
                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/bands/SOLO_LOOP/BLACK_SOLO_LOOP.png'
            },
            {
                id: 'LIGHT_BLUSH_SOLO_LOOP',
                name: 'Light Blush Solo Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'NIKE_SPORT_LOOP',
        name: 'Nike Sport Loop',
        variant: [
            {
                id: 'BLACKBLUE_NIKE_SPORT_LOOP',
                name: 'Black/Blue Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'STRALIGHTPINK_NIKE_SPORT_LOOP',
                name: 'Starlight/Pink Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GREYBLUE_NIKE_SPORT_LOOP',
                name: 'Grey/Blue Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GREENGREY_NIKE_SPORT_LOOP',
                name: 'Green/Grey Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLUERED_NIKE_SPORT_LOOP',
                name: 'Blue/Red Nike Sport Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'NIKE_SPORT_BAND',
        name: 'Nike Sport Band',
        variant: [
            {
                id: 'VOLT_SPLASH_NIKE_SPORT_BAND',
                name: 'Volt Splash Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'MAGIC_EMBER_NIKE_SPORT_BAND',
                name: 'Magic Ember Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'MIDNIGHT_SKY_NIKE_SPORT_BAND',
                name: 'Midnight Sky Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PURE_PLATINUM_NIKE_SPORT_BAND',
                name: 'Pure Platinum Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'DESERT_STONE_NIKE_SPORT_BAND',
                name: 'Desert Stone Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'CARGO_KHAKI_NIKE_SPORT_BAND',
                name: 'Cargo Khaki Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLUE_FLAME_NIKE_SPORT_BAND',
                name: 'Blue Flame Nike Sport Band',
                price: 0,
                image: ''
            },
        ]
    }
]

const series10Band40 = [
    {
        id: 'STAINLESS_STEEL',
        name: 'Stainless Steel',
        variant: [
            {
                id: 'NATURAL_MILANESE_LOOP',
                name: 'Natural Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GOLD_MILANESE_LOOP',
                name: 'Gold Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'SLATE_MILANESE_LOOP',
                name: 'Slate Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'NATURAL_LINK_BRACELET',
                name: 'Natural Link Bracelet',
                price: 0,
                image: ''
            },
            {
                id: 'GOLD_LINK_BRACELET',
                name: 'Gold Link Bracelet',
                price: 0,
                image: ''
            },
            {
                id: 'SLATE_LINK_BRACELET',
                name: 'Slate Link Bracelet',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'SPORT_LOOP',
        name: 'Sport Loop',
        variant: [
            {
                id: 'ULTRAMARINE_SPORT_LOOP',
                name: 'Ultramarine Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'LAKE_GREEN_SPORT_LOOP',
                name: 'Lake Green Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLUE_CLOUD_SPORT_LOOP',
                name: 'Blue Cloud Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'INK_SPORT_LOOP',
                name: 'Ink Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PLUM_SPORT_LOOP',
                name: 'Plum Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_SPORT_LOOP',
                name: 'Pride Edition Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_LOOP',
                name: 'Pride Edition Sport Loop',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'SPORT_BAND',
        name: 'Sport Band',
        variant: [
            {
                id: 'LAKE_GREEN_SPORT_BAND',
                name: 'Lake Green Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'STONE_GRAY_SPORT_BAND',
                name: 'Stone Gray Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'STARLIGHT_SPORT_BAND',
                name: 'Starlight Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PLUM_SPORT_BAND',
                name: 'Plum Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_SPORT_BAND',
                name: 'Black Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'DENIM_SPORT_BAND',
                name: 'Denim Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'LIGHT_BLUSH_SPORT_BAND',
                name: 'Light Blush Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_SPORT_BAND',
                name: 'Pride Edition Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_BAND_UNITY_BLOOM',
                name: 'Black Unity Sport Band - Unity Bloom',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_BAND',
                name: 'Black Unity Sport Band',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'FINEWOVEN',
        name: 'FinWoven',
        variant: [
            {
                id: 'BLACK_MAGNETIC_LINK',
                name: 'Black Magentic Link',
                price: 0,
                image: ''
            },
            {
                id: 'DARK_TAUPE_MAGNETIC_LINK',
                name: 'Dark Taupe Magentic Link',
                price: 0,
                image: ''
            },
            {
                id: 'BLACKBERRY_MAGNETIC_LINK',
                name: 'Blackberry Magentic Link',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'BRAIDED_SOLO_LOOP',
        name: 'Braided Solo Loop',
        variant: [
            {
                id: 'LAKE_GREEN_BRAIDED_SOLO_LOOP',
                name: 'Lake Green Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'MIDNIGHT_BRAIDED_SOLO_LOOP',
                name: 'Midnight Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'DENIM_BRAIDED_SOLO_LOOP',
                name: 'Denim Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'CHARTREUSE_BRAIDED_SOLO_LOOP',
                name: 'Chartreuse Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'MAGENTA_BRAIDED_SOLO_LOOP',
                name: 'Magenta Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_BRAIDED_SOLO_LOOP',
                name: 'Pride Edition Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_BRAIDED_SOLO_LOOP',
                name: 'Black Unity Braided Solo Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'SOLO_LOOP',
        name: 'Solo Loop',
        variant: [
            {
                id: 'STAR_FRUIT_SOLO_LOOP',
                name: 'Star Fruit Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'ULTRAMARINE_SOLO_LOOP',
                name: 'Ultramarine Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'LAKE_GREEN_SOLO_LOOP',
                name: 'Lake Green Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_SOLO_LOOP',
                name: 'Black Solo Loop',
                price: 0,
                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/bands/SOLO_LOOP/BLACK_SOLO_LOOP.png'
            },
            {
                id: 'LIGHT_BLUSH_SOLO_LOOP',
                name: 'Light Blush Solo Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'NIKE_SPORT_LOOP',
        name: 'Nike Sport Loop',
        variant: [
            {
                id: 'BLACKBLUE_NIKE_SPORT_LOOP',
                name: 'Black/Blue Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'STRALIGHTPINK_NIKE_SPORT_LOOP',
                name: 'Starlight/Pink Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GREYBLUE_NIKE_SPORT_LOOP',
                name: 'Grey/Blue Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GREENGREY_NIKE_SPORT_LOOP',
                name: 'Green/Grey Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLUERED_NIKE_SPORT_LOOP',
                name: 'Blue/Red Nike Sport Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'NIKE_SPORT_BAND',
        name: 'Nike Sport Band',
        variant: [
            {
                id: 'VOLT_SPLASH_NIKE_SPORT_BAND',
                name: 'Volt Splash Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'MAGIC_EMBER_NIKE_SPORT_BAND',
                name: 'Magic Ember Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'MIDNIGHT_SKY_NIKE_SPORT_BAND',
                name: 'Midnight Sky Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PURE_PLATINUM_NIKE_SPORT_BAND',
                name: 'Pure Platinum Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'DESERT_STONE_NIKE_SPORT_BAND',
                name: 'Desert Stone Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'CARGO_KHAKI_NIKE_SPORT_BAND',
                name: 'Cargo Khaki Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLUE_FLAME_NIKE_SPORT_BAND',
                name: 'Blue Flame Nike Sport Band',
                price: 0,
                image: ''
            },
        ]
    }
]

const series10Band44 = [
    {
        id: 'STAINLESS_STEEL',
        name: 'Stainless Steel',
        variant: [
            {
                id: 'NATURAL_MILANESE_LOOP',
                name: 'Natural Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GOLD_MILANESE_LOOP',
                name: 'Gold Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'SLATE_MILANESE_LOOP',
                name: 'Slate Milanese Loop',
                price: 0,
                image: ''
            },
            {
                id: 'NATURAL_LINK_BRACELET',
                name: 'Natural Link Bracelet',
                price: 0,
                image: ''
            },
            {
                id: 'GOLD_LINK_BRACELET',
                name: 'Gold Link Bracelet',
                price: 0,
                image: ''
            },
            {
                id: 'SLATE_LINK_BRACELET',
                name: 'Slate Link Bracelet',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'SPORT_LOOP',
        name: 'Sport Loop',
        variant: [
            {
                id: 'ULTRAMARINE_SPORT_LOOP',
                name: 'Ultramarine Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'LAKE_GREEN_SPORT_LOOP',
                name: 'Lake Green Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLUE_CLOUD_SPORT_LOOP',
                name: 'Blue Cloud Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'INK_SPORT_LOOP',
                name: 'Ink Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PLUM_SPORT_LOOP',
                name: 'Plum Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_SPORT_LOOP',
                name: 'Pride Edition Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_LOOP',
                name: 'Pride Edition Sport Loop',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'SPORT_BAND',
        name: 'Sport Band',
        variant: [
            {
                id: 'LAKE_GREEN_SPORT_BAND',
                name: 'Lake Green Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'STONE_GRAY_SPORT_BAND',
                name: 'Stone Gray Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'STARLIGHT_SPORT_BAND',
                name: 'Starlight Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PLUM_SPORT_BAND',
                name: 'Plum Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_SPORT_BAND',
                name: 'Black Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'DENIM_SPORT_BAND',
                name: 'Denim Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'LIGHT_BLUSH_SPORT_BAND',
                name: 'Light Blush Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_SPORT_BAND',
                name: 'Pride Edition Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_BAND_UNITY_BLOOM',
                name: 'Black Unity Sport Band - Unity Bloom',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_SPORT_BAND',
                name: 'Black Unity Sport Band',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'FINEWOVEN',
        name: 'FinWoven',
        variant: [
            {
                id: 'BLACK_MAGNETIC_LINK',
                name: 'Black Magentic Link',
                price: 0,
                image: ''
            },
            {
                id: 'DARK_TAUPE_MAGNETIC_LINK',
                name: 'Dark Taupe Magentic Link',
                price: 0,
                image: ''
            },
            {
                id: 'BLACKBERRY_MAGNETIC_LINK',
                name: 'Blackberry Magentic Link',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'BRAIDED_SOLO_LOOP',
        name: 'Braided Solo Loop',
        variant: [
            {
                id: 'LAKE_GREEN_BRAIDED_SOLO_LOOP',
                name: 'Lake Green Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'MIDNIGHT_BRAIDED_SOLO_LOOP',
                name: 'Midnight Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'DENIM_BRAIDED_SOLO_LOOP',
                name: 'Denim Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'CHARTREUSE_BRAIDED_SOLO_LOOP',
                name: 'Chartreuse Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'MAGENTA_BRAIDED_SOLO_LOOP',
                name: 'Magenta Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'PRIDE_EDITION_BRAIDED_SOLO_LOOP',
                name: 'Pride Edition Braided Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_UNITY_BRAIDED_SOLO_LOOP',
                name: 'Black Unity Braided Solo Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'SOLO_LOOP',
        name: 'Solo Loop',
        variant: [
            {
                id: 'STAR_FRUIT_SOLO_LOOP',
                name: 'Star Fruit Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'ULTRAMARINE_SOLO_LOOP',
                name: 'Ultramarine Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'LAKE_GREEN_SOLO_LOOP',
                name: 'Lake Green Solo Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLACK_SOLO_LOOP',
                name: 'Black Solo Loop',
                price: 0,
                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/bands/SOLO_LOOP/BLACK_SOLO_LOOP.png'
            },
            {
                id: 'LIGHT_BLUSH_SOLO_LOOP',
                name: 'Light Blush Solo Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'NIKE_SPORT_LOOP',
        name: 'Nike Sport Loop',
        variant: [
            {
                id: 'BLACKBLUE_NIKE_SPORT_LOOP',
                name: 'Black/Blue Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'STRALIGHTPINK_NIKE_SPORT_LOOP',
                name: 'Starlight/Pink Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GREYBLUE_NIKE_SPORT_LOOP',
                name: 'Grey/Blue Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'GREENGREY_NIKE_SPORT_LOOP',
                name: 'Green/Grey Nike Sport Loop',
                price: 0,
                image: ''
            },
            {
                id: 'BLUERED_NIKE_SPORT_LOOP',
                name: 'Blue/Red Nike Sport Loop',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'NIKE_SPORT_BAND',
        name: 'Nike Sport Band',
        variant: [
            {
                id: 'VOLT_SPLASH_NIKE_SPORT_BAND',
                name: 'Volt Splash Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'MAGIC_EMBER_NIKE_SPORT_BAND',
                name: 'Magic Ember Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'MIDNIGHT_SKY_NIKE_SPORT_BAND',
                name: 'Midnight Sky Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'PURE_PLATINUM_NIKE_SPORT_BAND',
                name: 'Pure Platinum Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'DESERT_STONE_NIKE_SPORT_BAND',
                name: 'Desert Stone Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'CARGO_KHAKI_NIKE_SPORT_BAND',
                name: 'Cargo Khaki Nike Sport Band',
                price: 0,
                image: ''
            },
            {
                id: 'BLUE_FLAME_NIKE_SPORT_BAND',
                name: 'Blue Flame Nike Sport Band',
                price: 0,
                image: ''
            },
        ]
    }
]

const series10hermes42Band = [
    {
        id: 'HERMÈS_TOILE_H',
        name: 'Hermès Toile H',
        variant: [
            {
                id: 'GOLDECRU_TOILE_H_SINGLE_TOUR',
                name: 'Gold/Écru Toile H Single Tour',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'HERMÈS_TWILL',
        name: 'Hermès Twill',
        variant: [
            {
                id: 'NOIRGOLD_TWILL_JUMP_ATTELAGE_SINGLE_TOUR',
                name: 'Noir/Gold Twill Jump Attelage Single Tour',
                price: 0,
                image: ''
            },
            {
                id: 'ROUGE_GRENATVERMILLON_TWILL_JUMP_ATTELAGE_SINGLE_TOUR',
                name: 'Rouge Grenat/Vermillon Twill Jump Attelage Single Tour',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'HERMÈS_TORSADE',
        name: 'Hermès Torsade',
        variant: [
            {
                id: 'VERT_MOYEN_TORSADE_DOUBLE_TOUR',
                name: 'Vert Moyen Torsade Double Tour',
                price: 0,
                image: ''
            },
            {
                id: 'ROUGE_GRENAT_TORSADE_DOUBLE_TOUR',
                name: 'Rouge Grenat Torsade Double Tour',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'HERMÈS_KILIM',
        name: 'Hermès Kilim',
        variant: [
            {
                id: 'BETON_KILIM_SINGLE_TOUR',
                name: 'Béton Kilim Single Tour',
                price: 0,
                image: ''
            },
            {
                id: 'NOIR_KILIM_SINGLE_TOUR',
                name: 'Noir Kilim Single Tour',
                price: 0,
                image: ''
            },
            {
                id: 'ORANGE_KILIM_SINGLE_TOUR',
                name: 'Orange Kilim Single Tour',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'HERMÈS_GRAND_H',
        name: 'Hermès Grand H',
        variant: [
            {
                id: 'SATINE_GRAND_H',
                name: 'Satiné Grand H',
                price: 0,
                image: ''
            }
        ]
    },
]

const series10hermes46Band = [
    {
        id: 'HERMÈS_TOILE_H',
        name: 'Hermès Toile H',
        variant: [
            {
                id: 'GOLDECRU_TOILE_H_SINGLE_TOUR',
                name: 'Gold/Écru Toile H Single Tour',
                price: 0,
                image: ''
            }
        ]
    },
    {
        id: 'HERMÈS_TORSADE',
        name: 'Hermès Torsade',
        variant: [
            {
                id: 'NAVY_TORSADE_SINGLE_TOUR',
                name: 'Navy Torsade Single Tour',
                price: 0,
                image: ''
            },
            {
                id: 'ROUGE_GRENAT_TORSADE_SINGLE_TOUR',
                name: 'Rouge Grenat Torsade Single Tour',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'HERMÈS_KILIM',
        name: 'Hermès Kilim',
        variant: [
            {
                id: 'BETON_KILIM_SINGLE_TOUR',
                name: 'Béton Kilim Single Tour',
                price: 0,
                image: ''
            },
            {
                id: 'NOIR_KILIM_SINGLE_TOUR',
                name: 'Noir Kilim Single Tour',
                price: 0,
                image: ''
            },
            {
                id: 'ORANGE_KILIM_SINGLE_TOUR',
                name: 'Orange Kilim Single Tour',
                price: 0,
                image: ''
            },
            {
                id: 'BLEU_DE_FRANCE_KILIM_SINGLE_TOUR',
                name: 'Bleu de France Kilim Single Tour',
                price: 0,
                image: ''
            },
            {
                id: 'VERT_MOYEN_KILIM_SINGLE_TOUR',
                name: 'Vert Moyen Kilim Single Tour',
                price: 0,
                image: ''
            },
        ]
    },
    {
        id: 'HERMÈS_GRAND_H',
        name: 'Hermès Grand H',
        variant: [
            {
                id: 'SATINE_GRAND_H',
                name: 'Satiné Grand H',
                price: 0,
                image: ''
            }
        ]
    },
]

export const collection: watchCollection[] = [
    {
        id: "APPLE_WATCH_SERIES_10",
        name: "Apple Watch Series 10",
        sizes: [
            {
                id: "42mm",
                name: "42mm",
                price: 399,
                image: '/assets/sizes/APPLE_WATCH_SERIES_10/42mm/ALUMINIUM/JET_BLACK_ALUMINIUM.PNG',
                cases: [
                    {
                        id: 'ALUMINIUM',
                        name: 'Aluminium',
                        variant: [
                            {
                                id: 'SILVER_ALUMINIUM',
                                name: 'Silver Aluminium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/42mm/ALUMINIUM/SILVER_ALUMINIUM.PNG'
                            },
                            {
                                id: 'ROSE_GOLD_ALUMINIUM',
                                name: 'Rose Gold Aluminium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/42mm/ALUMINIUM/ROSE_GOLD_ALUMINIUM.PNG'
                            },
                            {
                                id: 'JET_BLACK_ALUMINIUM',
                                name: 'Jet Black Aluminium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/42mm/ALUMINIUM/JET_BLACK_ALUMINIUM.PNG'
                            }
                        ]
                    },
                    {
                        id: 'TITANIUM',
                        name: 'Titanium',
                        variant: [
                            {
                                id: 'NATURAL_TITANIUM',
                                name: 'Natural Titanium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/42mm/TITANIUM/NATURAL_TITANIUM.PNG'
                            },
                            {
                                id: 'GOLD_TITANIUM',
                                name: 'Gold Titanium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/42mm/TITANIUM/GOLD_TITANIUM.PNG'
                            },
                            {
                                id: 'SLATE_TITANIUM',
                                name: 'Slate Titanium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/42mm/TITANIUM/SLATE_TITANIUM.PNG'
                            }
                        ]
                    },
                ],
                bands: series10Band42,
            },
            {
                id: "46mm",
                name: "46mm",
                price: 429,
                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/ALUMINIUM/JET_BLACK_ALUMINIUM.PNG',
                cases: [
                    {
                        id: 'ALUMINIUM',
                        name: 'Aluminium',
                        variant: [
                            {
                                id: 'SILVER_ALUMINIUM',
                                name: 'Silver Aluminium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/ALUMINIUM/SILVER_ALUMINIUM.PNG'
                            },
                            {
                                id: 'ROSE_GOLD_ALUMINIUM',
                                name: 'Rose Gold Aluminium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/ALUMINIUM/ROSE_GOLD_ALUMINIUM.PNG'
                            },
                            {
                                id: 'JET_BLACK_ALUMINIUM',
                                name: 'Jet Black Aluminium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/ALUMINIUM/JET_BLACK_ALUMINIUM.PNG'
                            }
                        ]
                    },
                    {
                        id: 'TITANIUM',
                        name: 'Titanium',
                        variant: [
                            {
                                id: 'NATURAL_TITANIUM',
                                name: 'Natural Titanium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/TITANIUM/NATURAL_TITANIUM.PNG'
                            },
                            {
                                id: 'GOLD_TITANIUM',
                                name: 'Gold Titanium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/TITANIUM/GOLD_TITANIUM.PNG'
                            },
                            {
                                id: 'SLATE_TITANIUM',
                                name: 'Slate Titanium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/TITANIUM/SLATE_TITANIUM.PNG'
                            }
                        ]
                    },
                ],
                bands: series10Band46,
            }
        ],
    },
    {
        id: "APPLE_WATCH_HERMÈS_SERIES_10",
        name: "Apple Watch Hermès Series 10",
        sizes: [
            {
                id: "42mm",
                name: "42mm",
                price: 1899,
                image: '',
                cases: [
                    {
                        id: 'TITANIUM',
                        name: 'Titanium',
                        variant: [
                            {
                                id: 'Silver_TITANIUM',
                                name: 'Silver Titanium Case',
                                price: 0,
                                image: ''
                            }
                        ]
                    },
                ],
                bands: series10hermes42Band
            },
            {
                id: "46mm",
                name: "46mm",
                price: 1949,
                image: '',
                cases: [
                    {
                        id: 'TITANIUM',
                        name: 'Titanium',
                        variant: [
                            {
                                id: 'Silver_TITANIUM',
                                name: 'Silver Titanium Case',
                                price: 0,
                                image: ''
                            }
                        ]
                    },
                ],
                bands: series10hermes46Band
            }
        ],
    },
    {
        id: "APPLE_WATCH_SE",
        name: "Apple Watch SE",
        sizes: [
            {
                id: "40mm",
                name: "40mm",
                price: 249,
                image: '',
                cases: [
                    {
                        id: 'ALUMINIUM',
                        name: 'Aluminium',
                        variant: [
                            {
                                id: 'MIDNIGHT_ALUMINIUM',
                                name: 'Midnight Aluminium Case',
                                price: 0,
                                image: ''
                            },
                            {
                                id: 'STARLIGHT_ALUMINIUM',
                                name: 'Starlight Aluminium Case',
                                price: 0,
                                image: ''
                            },
                            {
                                id: 'SILVER_ALUMINIUM',
                                name: 'Silver Aluminium Case',
                                price: 0,
                                image: ''
                            }
                        ]
                    },
                ],
                bands: series10Band40
            },
            {
                id: "44mm",
                name: "44mm",
                price: 279,
                image: '',
                cases: [
                    {
                        id: 'ALUMINIUM',
                        name: 'Aluminium',
                        variant: [
                            {
                                id: 'MIDNIGHT_ALUMINIUM',
                                name: 'Midnight Aluminium Case',
                                price: 0,
                                image: ''
                            },
                            {
                                id: 'STARLIGHT_ALUMINIUM',
                                name: 'Starlight Aluminium Case',
                                price: 0,
                                image: ''
                            },
                            {
                                id: 'SILVER_ALUMINIUM',
                                name: 'Silver Aluminium Case',
                                price: 0,
                                image: ''
                            }
                        ]
                    },
                ],
                bands: series10Band44
            }
        ],
    }
];

export const defaultValues:watchCollection[] = [
    {
        id: "APPLE_WATCH_SERIES_10",
        name: "Apple Watch Series 10",
        sizes: [
            {
                id: "46mm",
                name: "46mm",
                price: 1899,
                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/ALUMINIUM/JET_BLACK_ALUMINIUM.PNG',
                cases: [
                    {
                        id: 'ALUMINIUM',
                        name: 'Aluminium',
                        variant: [
                            {
                                id: 'JET_BLACK_ALUMINIUM',
                                name: 'Jet Black Aluminium Case',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/ALUMINIUM/JET_BLACK_ALUMINIUM.PNG'
                            }
                        ]
                    },
                ],
                bands: [
                    {
                        id: 'SOLO_LOOP',
                        name: 'Solo Loop',
                        variant: [
                            {
                                id: 'BLACK_SOLO_LOOP',
                                name: 'Black Solo Loop',
                                price: 0,
                                image: '/assets/sizes/APPLE_WATCH_SERIES_10/46mm/bands/SOLO_LOOP/BLACK_SOLO_LOOP.png',
        
                            },
                        ]
                    }
                ]
            }
        ],
    },
    {
        id: "APPLE_WATCH_HERMÈS_SERIES_10",
        name: "Apple Watch Hermès Series 10",
        sizes: [
            {
                id: "46mm",
                name: "46mm",
                price: 1899,
                image: '',
                cases: [
                    {
                        id: 'TITANIUM',
                        name: 'Titanium',
                        variant: [
                            {
                                id: 'Silver_TITANIUM',
                                name: 'Silver Titanium Case',
                                price: 0,
                                image: ''
                            }
                        ]
                    },
                ],
                bands: [
                    {
                        id: 'HERMÈS_GRAND_H',
                        name: 'Hermès Grand H',
                        variant: [
                            {
                                id: 'SATINE_GRAND_H',
                                name: 'Satiné Grand H',
                                price: 0,
                                image: '',
        
                            }
                        ]
                    }
                ]
            }
        ],
    },
    {
        id: "APPLE_WATCH_SE",
        name: "Apple Watch SE",
        sizes: [
            {
                id: "44mm",
                name: "44mm",
                price: 1899,
                image: '',
                cases: [
                    {
                        id: 'ALUMINIUM',
                        name: 'Aluminium',
                        variant: [
                            {
                                id: 'JET_BLACK_ALUMINIUM',
                                name: 'Jet Black Aluminium Case',
                                price: 0,
                                image: ''
                            }
                        ]
                    },
                ],
                bands: [
                    {
                        id: 'SOLO_LOOP',
                        name: 'Solo Loop',
                        variant: [
                            {
                                id: 'BLACK_SOLO_LOOP',
                                name: 'Black Solo Loop',
                                price: 0,
                                image: '',
        
                            },
                        ]
                    }
                ]
            }
        ],
    },
]