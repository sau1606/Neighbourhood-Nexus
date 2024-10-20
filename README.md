# Neighbourhood Nexus

Welcome to **Neighbourhood Nexus** – a platform designed to connect communities by empowering individuals with localized services, events, and support. This application helps build a stronger bond with your neighbors by offering various features such as local listings, services, community events, and emergency assistance.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact Us](#contact-us)

## Features

- **Local Listings**: Easily find products and services available within your neighborhood.
- **Services**: Offer and request services from your neighbors.
- **Community Events**: Stay up to date with local events and gatherings.
- **Emergency Assistance**: Receive help from your neighbors in times of urgency.

## Demo

You can check out the live demo of the project [here](https://neighbouhood-nexus.netlify.app/).

## Technologies Used

- **React.js**: For building user interfaces.
- **TypeScript**: For static typing in React components.
- **Tailwind CSS**: For styling and responsive design.
- **React Router**: For navigation between different pages.
- **Vite**: For bundling and optimizing the project.

## Project Structure

    ```bash
        neighbourhood-nexus/
        │
        ├── public/                     # Public assets
        │   ├── favicon.ico              # App icon
        │   └── index.html               # Main HTML file
        │
        ├── src/
        │   ├── assets/                  # Static images and other assets
        │   ├── components/              # Reusable components (Header, Footer, etc.)
        │   ├── pages/                   # Page components (Home, Listings, Services, etc.)
        │   │   ├── Home.tsx             # Home page
        │   │   ├── Listings.tsx         # Listings page
        │   │   ├── Services.tsx         # Services page
        │   │   ├── Events.tsx           # Events page
        │   │   ├── Emergency.tsx        # Emergency page
        │   │   ├── Login.tsx            # Login page
        │   │   └── SignUp.tsx           # Sign Up page
        │   ├── App.tsx                  # Main App file
        │   ├── index.tsx                # Entry point
        │   ├── tailwind.config.js       # Tailwind CSS configuration
        │   └── vite.config.ts           # Vite configuration
        │
        ├── package.json                 # Project metadata and dependencies
        ├── tsconfig.json                # TypeScript configuration
        └── vite.config.ts               # Vite configuration

## Installation

Follow the steps below to set up the project locally:

    ```bash
    # Step 1: Clone the repository
    git clone https://github.com/sau1606/neighbourhood-nexus.git
    
    # Step 2: Navigate to the project directory
    cd neighbourhood-nexus
    
    # Step 3: Install dependencies
    npm install
    
    # Step 4: Start the development server
    npm run dev
    
    # Step 5: Open the app in your browser
    # The app will run on http://localhost:3000

## Usage

Follow these instructions to use the **Neighbourhood Nexus** app locally:

1. **Home Page**:  
   - The home page will welcome you with an introduction and an option to navigate through the app's key features such as listings, services, community events, and emergency assistance.

2. **Local Listings**:  
   - Navigate to the "Listings" page from the navigation menu to explore local businesses and services around your community.

3. **Services**:  
   - Access the "Services" page to find help from local service providers or offer your own services to neighbors.

4. **Community Events**:  
   - Check out the "Events" section to see upcoming community activities, or add your own event to keep the community engaged.

5. **Emergency Assistance**:  
   - Visit the "Emergency" page to quickly find help in urgent situations, connecting you with people nearby who can assist.

6. **Authentication**:  
   - Sign up or log in to access personalized services and save your preferences. Use the "Login" or "Sign Up" links to create or access your account.

### Running the App Locally
After following the [Installation](#installation) instructions:
- Run `npm run dev` to start the local server.
- Open your browser and go to `http://localhost:3000` to use the application.


## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/fa4f71fc-5d31-406d-bf6f-db88bc2e1cd9)

### Local Listings
![Listings Page](https://github.com/user-attachments/assets/39103329-2e74-4bb6-8f45-a24cd9d5c213)

### Services Page
![Services Page](https://github.com/user-attachments/assets/c44d71b5-c32e-43a3-bce3-adb5d8446b46)

### Community Events Page
![Community Events Page](https://github.com/user-attachments/assets/4933629f-d7a8-4dc8-be9d-d7c1a2c03083)


