# Marketplace Frontend

This is a Next.js-based project for a marketplace frontend. The project includes features such as product listing, search, filtering, and a basic shopping cart system.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**: Version 18.x.x or higher
- **npm**: Version 8.x.x or higher

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd marketplace-fe-only
```

### 2. Install Dependencies
Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Run the Development Server
Start the development server:

```bash
npm run dev
```
This will start the application in development mode. Open your browser and navigate to http://localhost:3000 to see the application.

### 4. Build the Application for Production
To build the application for production, run:

```bash
npm run build
```

### 5. Start the Production Server
After building the application, you can start the production server using:

```bash
npm run start
```

This will start the application in production mode on http://localhost:3000.

## Assumptions Made
* Node.js Environment: It is assumed that Node.js is installed.
* Environment Variables: No specific environment variables are required for running this project in current form.
* Material-UI: Material-UI is used for styling components and ensuring a consistent design throughout the application.

## Issues
If you encounter any issues, make sure to:

* Check that all dependencies are installed correctly (npm install).
* Ensure that the correct version of Node.js and npm is being used.
* Verify that no other process is using port 3000 on your machine.