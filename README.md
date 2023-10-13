# CommitAppFront

![Project Image](https://i.imgur.com/l5nZVAe.png.png)

This repository contains the source code of a project developed with Angular CLI. Below are the steps to start the project in your local environment.

## Description

This application contains the user interface code to display the history of commits made in the back and front of the same application.

## Previous requirements

Before you begin, make sure you have the following requirements installed on your system:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- Angular CLI: You can install it globally using the following command:

  ```bash
  npm install -g @angular/cli
  ```

## Startup Instructions

Follow these steps to start the project in your local environment:

1. **Clone the Repository**:

   ```bash
   git clone Repository_URL
   ```

2. **Navigate to Project Directory**:

   ```bash
   cd project_name
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Development Environment (Local)**:

   When you are developing the application in your local environment, make sure that the API URL in **(src/environments/environment.ts)** is set as follows:

   ```typescript
   export const environment = {
     API_URL: "http://localhost:3000/api",
     // API_URL: 'https://commitappback.onrender.com/api',
   };
   ```

5. **Start App**:

   ```bash
   ng serve
   ```

The development server will run at http://localhost:4200/. Open this address in your browser to see the application in real time.

Ready! Now you can start working on the project and make changes as per your needs.

## Stay in touch

- Author - [Jose Cuela](https://github.com/jgcuelap17722)
- Linkedin - [Jose Cuela](https://www.linkedin.com/in/jose-cuela-dev/)
