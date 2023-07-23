# New York Times Best Sellers

This is a simple project to display the New York Times best seller list.

## Requirements

- Node.js (v14 or above)
- Docker (v19.03 or above) & Docker Compose (v1.27 or above)
- Ensure that your user has sufficient permissions to execute scripts and access relevant directories. You may need to use `sudo` on certain systems, or adjust user and file permissions appropriately.

## Installation

First, clone the repository:
```bash
git clone https://github.com/thiswd/nyt-best-sellers.git
cd nyt-best-sellers
```

Next, install the dependencies:
```bash
npm install
```

## Permission Setup (Optional)
In some cases, you might encounter permission issues when switching between running the app in Docker and running it on your local machine. If you come across these issues, run the following command:

```bash
sudo chown -R $USER:$USER .
```
This will reset the ownership of the project files to your user.

## Running the Application
There are two ways to run the application: directly on your machine or in a Docker container.

### Running Locally
To run the app locally, execute:
```bash
npm run dev
```

### Running in Docker
```bash
docker compose up
```
