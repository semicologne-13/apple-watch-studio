import localFont from 'next/font/local'

export const sfProDisplay = localFont({
  src: [
    {
        path: './ProDisplayRegular.woff2',
        weight: '400',
        style: 'normal',
    },
    {
        path: './ProDisplaySemibold.woff2',
        weight: '600',
        style: 'normal',
    }
  ],
  variable: '--font-sf-pro-display'
});

export const sfProText = localFont({
    src: [
        {
            path: './ProTextRegular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './ProTextSemibold.woff2',
            weight: '600',
            style: 'normal',
        }
    ],
    variable: '--font-sf-pro-text'
});