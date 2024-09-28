**Event Management API (CRUD Operations)**

This project is for managing events, built using Node.js, Express, and MongoDB. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on events, following a clean and scalable architecture based on the MVC pattern. The goal is to provide an easy-to-use backend service for event management, which can be expanded with additional features like authentication or event categorization.

**Key Features:**
- **Create Event**: Add a new event with details like title, date, and location.
- **Read Events**: Retrieve a list of all events or a specific event by ID.
- **Update Event**: Modify details of an existing event using its unique ID.
- **Delete Event**: Remove an event from the database by its ID.
- **Error Handling**: Proper error responses for invalid or incomplete requests.
  
**Technologies Used:**
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for event data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **dotenv**: For managing environment variables securely.
- **Postman** (optional): API testing tool to interact with the endpoints.

**API Endpoints:**
1. **POST** `/api/events`: Create a new event.
2. **GET** `/api/events`: Get a list of all events.
3. **GET** `/api/events/:id`: Get details of a single event by ID.
4. **PUT** `/api/events/:id`: Update an event by ID.
5. **DELETE** `/api/events/:id`: Delete an event by ID.

#### **How to Run the Project:**
1. Clone the repository and navigate to the project folder.
2. Install dependencies: `npm install`.
3. Create a `.env` file with your MongoDB connection string (`MONGO_URI`) and desired port (`PORT`).
4. Start the server: `node server.js`.
5. Use Postman or any API client to interact with the API on `http://localhost:5000/api/events`.
   


POSTMAN API json output -->   ![image](https://github.com/user-attachments/assets/894b2a45-f2e6-4218-8e96-0720bad8f40c)

events adding page -->       ![image](https://github.com/user-attachments/assets/874c575d-9c25-4246-a739-69b9b35140a4)


Api/events page -->           ![image](https://github.com/user-attachments/assets/d4385f42-2c60-434c-adcd-5c887f849706)




