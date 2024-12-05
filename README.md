# ICU Financial Management Dashboard

A modern, feature-rich financial management dashboard built with React, TypeScript, and Tailwind CSS. This application provides comprehensive financial insights and integrates with multiple data sources including banking systems, SAP ByDesign, and various APIs.

![Dashboard Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000)

## Features

- 📊 Real-time financial overview
- 🏦 Multi-bank account integration
- 📈 Cash flow analysis and forecasting
- 🔄 SAP ByDesign integration
- 📁 Data import/export capabilities
- 📱 Responsive design
- 🔒 Secure authentication
- 🌐 API connectivity

## Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Data Fetching:** React Query, Axios
- **Charts:** Recharts
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/icu-financial-dashboard.git
cd icu-financial-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_API_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── dashboard/    # Dashboard-specific components
│   ├── integration/  # Data integration components
│   ├── layout/       # Layout components
│   └── ui/          # Reusable UI components
├── data/            # Static data and mock data
├── services/        # API and service integrations
├── store/           # State management
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Data Integration

### Supported Data Sources

- Banking Systems (via API)
- SAP ByDesign
- CSV/Excel Imports
- External APIs
- Manual Data Entry

### Adding New Data Sources

1. Implement the data source interface in `src/types/api.ts`
2. Create a new service in `src/services/api.ts`
3. Add the integration to the data store
4. Update the UI to display the new data source

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is licensed under the Internal Privacy Policy of ICUnet Group.

## Support

For support, please open an issue in the GitHub repository or contact our support team at support@icunet.group.

## Acknowledgments

- Design inspired by modern financial management systems
- Icons provided by [Lucide](https://lucide.dev)
- UI components styled with [Tailwind CSS](https://tailwindcss.com)
