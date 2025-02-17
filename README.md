# Todo App - Manage Your Tasks Efficiently 🚀

A full-stack web-based Todo application to help you organize and track your daily tasks. Built with Node.js, Express, MongoDB, and EJS for server-side rendering.

## Features ✨

- **Add tasks:** Quickly add new tasks with a title and optional description.
- **Delete tasks:** Remove completed or unnecessary tasks.
- **Database storage:** Tasks persist in MongoDB Atlas cloud database.
- **Responsive design:** Works seamlessly on desktop and mobile devices.

## Installation 🛠️

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VIKYATHB49/todo-app.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd todo-app
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection URI and port:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```
5. **Start the server:**
   ```bash
   npm start
   ```
6. **Access the app:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage 📝

### Add a task:
- Enter a task title in the input field.
- Click **Add Task** or press **Enter**.

### Manage tasks:
- ✅ **Mark tasks as complete** by checking the checkbox.
- 🗑️ **Delete tasks** using the trash icon.
- 🔄 **Auto-save:** Changes are immediately synced with the database.

## Technology Stack 💻

### Frontend:
- **Views:** EJS templating engine
- **Styling:** CSS3, Flexbox, CSS Grid
- **Mobile-First** responsive design

### Backend:
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Cloud)
- **ORM:** Mongoose ODM

## Configuration ⚙️

### MongoDB Setup:
- Create a free cluster at **MongoDB Atlas**.
- Get your connection URI and add it to `.env`.

### Environment Variables:
```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/todo-app
```

## Contributing 🤝

Contributions are welcome! Follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Submit a pull request.**

## License 📄

This project is licensed under the **MIT License**. See `LICENSE` for details.

## Acknowledgments 🙏

- Inspired by productivity tools like **Todoist** and **Microsoft To-Do**.
- Built with **Express.js** framework and **MongoDB** database.
- Thanks to the open-source community for invaluable resources.

---

**Happy Tasking! 🎯**  
Let’s stay organized and productive together! 🚀
