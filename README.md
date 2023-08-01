# NYT Best Sellers Shelf

The NYT Best Sellers Shelf is a single-page and responsive application that displays lists of bestsellers from the New York Times Books API.

### Features:
- **Responsive Design**: Adapts to different screen sizes for an optimal viewing experience.
- **Dynamic Book Lists**: Retrieves and displays various bestseller lists.
- **Category Selection**: Allows users to explore bestsellers in different categories.
- **Animations and Interactivity**: Engaging animations and interactive elements provide an immersive user experience.

#### API Notice
The API key for fetching data from the New York Times Books API is provided within the project. **Please note** that the key has usage limits, so it should be used judiciously.

### Tools Used
- **Vite**: Build tool and development environment
- **TypeScript**: Static type checking
- **React**: UI library
- **Axios**: HTTP client for making API requests
- **Styled-components**: CSS-in-JS library for styling components
- **ESLint**: Linting utility for JavaScript and TypeScript
- **Prettier**: Code formatter
- **Docker & Docker-Compose**: Containerization and orchestration tools

### Running the Project Locally
1. **Clone the Repository**:
   \```bash
   git clone <REPOSITORY_URL>
   \```

2. **Navigate to the Project Directory**:
   \```bash
   cd <PROJECT_DIRECTORY>
   \```
3. **Install Dependencies**:
   \```bash
   npm install
   \```

4. **Build and Run with Docker**:
   \```bash
   docker-compose up --build
   \```

   Alternatively, you can run the project using Vite:
   \```bash
   npm run dev
   \```

5. **Open in Browser**: The application should be running at [http://localhost:5173](http://localhost:5173).

#### Permission Setup (Optional)
In some cases, you might encounter permission issues when switching between running the app in Docker and running it on your local machine. If you come across these issues, run the following command:

```bash
sudo chown -R $USER:$USER .
```
This will reset the ownership of the project files to your user.
