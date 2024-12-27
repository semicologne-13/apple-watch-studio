# Apple Watch Studio

An interactive web-based tool for customizing Apple Watch designs in real-time. Built with Next.js 15, this application provides a seamless and engaging experience for users to explore different watch configurations and personalize their ideal Apple Watch.

## Features

- **Interactive Design Studio**: Customize your Apple Watch with real-time visual updates
- **Comprehensive Customization Options**:
  - Multiple collections
  - Various sizes
  - Different case materials
  - Diverse band options
- **Social Sharing**: Share your custom designs directly to social media
- **Image Export**: Download your personalized watch configurations
- **Responsive Design**: Seamless experience across all devices

## Tech Stack

- **Frontend Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **State Management**: Redux Toolkit
- **Animations**: motion.dev
- **Hosting**: Vercel

## Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/semicologne-13/apple-watch-studio.git
```

2. Navigate to the project directory:
```bash
cd apple-watch-studio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
apple-watch-studio/
├── app/                 # App router pages and layouts
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── fonts/           # Local fonts used 
├── components/          # Reusable UI components
├── lib/                 # Utility functions and shared logic
│   └── store/           # Redux store configuration
├── public/              # Static assets
└── data/                # Stores all data
```

## Usage

1. Navigate to the homepage
2. Click the "Get Started" button
3. Select your preferred watch collection
4. Customize size, case, and band options
5. Share or download your design

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Apple Watch design inspiration
- shadcn/ui component library
- Vercel for hosting

## Contact

Your Name - [@CyriacAlen](https://twitter.com/CyriacAlen)

Project Link: [https://github.com/semicologne-13/apple-watch-studio](https://github.com/semicologne-13/apple-watch-studio)