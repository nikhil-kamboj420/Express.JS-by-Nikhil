# Express.js Learning Project

This is a comprehensive Express.js learning project that demonstrates various concepts and features of the Express.js framework. The project includes user authentication with JWT, database integration with both MySQL and MongoDB, form handling, routing techniques, and more.

## Key Features

- User registration and login with JWT authentication
- Password hashing with bcrypt
- MySQL database integration for user data
- MongoDB database integration for product data
- Form handling and validation
- Dynamic routing with parameters
- Query parameter handling
- Middleware implementation
- Cookie-based session management
- Static file serving
- RESTful API design
- Error handling and 404 page handling

## Technology Stack

- **Backend**: Node.js, Express.js v5
- **Database**: MySQL, MongoDB with Mongoose
- **Authentication**: JWT, bcryptjs
- **Middleware**: cookie-parser, cors
- **Environment Management**: dotenv
- **Frontend**: HTML, CSS, JavaScript

## Project Structure

```
expressJS/
├── express_server/
│   └── app.js              # Main Express application
├── controllers/            # Request handlers
│   ├── authController.js   # Authentication logic
│   └── productController.js # Product data handling
├── routes/                 # Route definitions
│   ├── authRoute.js        # Authentication routes
│   ├── productRoute.js     # Product routes
│   ├── dyRouteParam.js     # Dynamic route parameters
│   └── queryParam.js       # Query parameter handling
├── middleware/             # Custom middleware
│   └── verifyToken.js      # JWT verification
├── mysql/                  # MySQL database integration
│   ├── db_conn.js          # Database connection
│   └── storeData.js        # User data operations
├── mongodb/                # MongoDB database integration
│   └── db_conn.js          # Database connection
├── model/                  # Data models
│   └── products.js         # Product schema
├── views/                  # HTML templates
│   ├── login.html
│   ├── register.html
│   ├── admin.html
│   └── ...
├── formsubmission/         # Form handling
│   ├── form.html
│   └── getForm.js
├── API/                    # Sample API data
│   └── products.json
└── .env                    # Environment variables

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nikhil-kamboj420/Express.JS-by-Nikhil.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Express.JS-by-Nikhil
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5500
   MONGO_URI="mongodb+srv://username:password@cluster0.w88gtvx.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"
   DB_LOGIN_PASSWORD="your_mysql_password"
   JWT_SECRET="your_jwt_secret_key"
   ```

5. Set up databases:
   - Create a MySQL database for user authentication
   - Configure MongoDB connection (local or Atlas)

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Access the application at `http://localhost:5500`

## API Endpoints

### Authentication Routes
- `GET /register` - Display registration form
- `POST /register` - Register a new user
- `GET /login` - Display login form
- `POST /login` - Login user
- `GET /admin.html` - Access protected admin route (requires authentication)
- `POST /logout` - Logout user

### Product Routes
- `GET /products` - Retrieve all products from MongoDB

### Dynamic Routes
- `GET /profile/:username/:slug` - Display user profile with dynamic parameters
- `GET /product/:productName` - Display product information

### Query Parameter Routes
- `GET /product-data?search=keyword&limit=number` - Search products with query parameters

### Form Submission
- `POST /details` - Handle form submission data

## Usage Examples

### User Registration
```javascript
// POST /register
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### User Login
```javascript
// POST /login
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### Accessing Protected Routes
After successful login, a JWT token is stored in cookies. The token is automatically sent with requests to protected routes like `/admin.html`.

### Product Data Retrieval
```javascript
// GET /products
// Returns JSON array of all products
[
  {
    "name": "Wireless Headphones",
    "price": 2999,
    "category": "Electronics",
    "inStock": true,
    "rating": 4.5
  },
  // ... more products
]
```

### Dynamic Route Example
- Access `/profile/john_doe/web-developer` to see a personalized profile page
- Access `/product/iphone-15` to see product-specific information

### Query Parameter Example
- Access `/product-data?search=iphone&limit=5` to search for products

## Database Configuration

### MySQL Configuration
The application uses MySQL for user authentication and registration. The connection is established using the `mysql2/promise` library.

Configuration details:
- Host: localhost
- User: root
- Password: Retrieved from environment variables
- Database: logintest0
- Port: 3306

On first registration, the application automatically creates a `usertable` with the following schema:
```sql
CREATE TABLE IF NOT EXISTS usertable (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE
);
```

### MongoDB Configuration
The application uses MongoDB for product data management with Mongoose ODM.

Configuration details:
- Local connection: mongodb://localhost:27017/productDB
- MongoDB Atlas connection: Configured via MONGO_URI in environment variables

Product Schema:
```javascript
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  inStock: Boolean,
  rating: Number,
});
```

## Authentication Flow

1. **User Registration**
   - User submits registration form with username, email, and password
   - Password is hashed using bcrypt before storage
   - User data is stored in MySQL database

2. **User Login**
   - User submits login credentials
   - Application verifies user existence in MySQL database
   - Password is verified using bcrypt comparison
   - JWT token is generated with 1-hour expiration
   - Token is sent to client as HTTP-only cookie

3. **Accessing Protected Routes**
   - Client sends requests with cookie containing JWT token
   - Middleware (`verifyToken.js`) intercepts requests to protected routes
   - Token is verified using JWT secret
   - If valid, request proceeds to controller; if invalid, access is denied

4. **Logout**
   - Client requests logout endpoint
   - Server clears JWT cookie
   - User session is terminated

## Development Guidelines

### Project Structure Guidelines
- Follow the MVC pattern where applicable
- Keep controllers lightweight and focused on request handling
- Place business logic in separate service files when complexity increases
- Use middleware for cross-cutting concerns like authentication

### Coding Standards
- Use ES6+ features and modules
- Follow consistent naming conventions
- Write modular and reusable code
- Include error handling in all async operations

### Git Workflow
- Create feature branches for new functionality
- Write meaningful commit messages
- Keep pull requests focused on single features
- Review code before merging

### Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

**Nikhil Kamboj**
- GitHub: [nikhil-kamboj420](https://github.com/nikhil-kamboj420)
- Email: kambojnikhil420@gmail.com

---

<p align="center">Made with ❤️ for learning Express.js concepts</p>
