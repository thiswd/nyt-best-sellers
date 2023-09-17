# NYT Best Sellers Shelf

The NYT Best Sellers Shelf is a single-page and responsive application that displays lists of bestsellers from the New York Times Books API.

### Live Demo
Experience the application in action: [NYT Best Sellers Shelf](https://taupe-pothos-00dfc0.netlify.app/)

### Features:
- **Responsive Design**: Adapts to different screen sizes for an optimal viewing experience.
- **Dynamic Book Lists**: Retrieves and displays various bestseller lists.
- **Category Selection**: Allows users to explore bestsellers in different categories.
- **API Call Caching**: Reduces redundant network requests and provides a faster user experience.
- **Animations and Interactivity**: Engaging animations and interactive elements provide an immersive user experience.

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
   ```bash
   git clone https://github.com/thiswd/nyt-best-sellers.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd nyt-best-sellers
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Build and Run with Docker**:
   ```bash
   docker-compose up --build
   ```

   Alternatively, you can run the project using Vite:
   ```bash
   npm run dev
   ```

5. **Open in Browser**: The application should be running at [http://localhost:5173](http://localhost:5173).

#### Permission Setup (Optional)
In some cases, you might encounter permission issues when switching between running the app in Docker and running it on your local machine. If you come across these issues, run the following command:

```bash
sudo chown -R $USER:$USER .
```
This will reset the ownership of the project files to your user.

### License
You are not allowed to use this code for commercial purposes. For further inquiries or permissions, please contact the repository owner.
