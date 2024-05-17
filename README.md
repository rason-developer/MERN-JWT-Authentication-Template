

```markdown
# MERN & TypeScript JWT Authentication Template

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node-dot-js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white)

This is a template for building a JWT authentication system using the MERN (MongoDB, Express.js, React, Node.js) stack with TypeScript. This project includes endpoints for user signup and login.

## Features

- JWT authentication
- User signup and login
- TypeScript for type safety
- MongoDB for database
- Express.js for backend framework
- React for frontend framework

## Endpoints

- `GET /signup` - Renders the signup page
- `POST /signup` - Registers a new user
- `GET /login` - Renders the login page
- `POST /login` - Authenticates a user and returns a JWT token

## Technologies Used

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/your-username/mern-ts-auth-template.git
    cd mern-ts-auth-template
    ```

2. Install backend dependencies
    ```sh
    cd backend
    npm install
    ```

3. Install frontend dependencies
    ```sh
    cd ../frontend
    npm install
    ```

### Configuration

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Application

1. Start the backend server
    ```sh
    cd backend
    npm run dev
    ```

2. Start the frontend development server
    ```sh
    cd ../frontend
    npm start
    ```

The backend server will run on `http://localhost:5000` and the frontend development server will run on `http://localhost:3000`.

## Project Structure

```
mern-ts-auth-template/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── .env
│   ├── tsconfig.json
│   ├── package.json
│   └── ...
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── ...
    ├── tsconfig.json
    ├── package.json
    └── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

