# 🎉 Event Management

A full-stack **Event Management Application** built with **React.js** and a **Node.js backend**, allowing users to authenticate, create events, and manage event-related activities.

This project demonstrates **JWT-based authentication**, routing with **React Router**, and full CRUD operations for event management.

---

## 🚀 Features

### 🔐 Authentication

- User signup and login
- Secure authentication using **JWT (JSON Web Tokens)**
- Protected routes for authenticated users

### 📅 Event Management

- Create events with:
  - Title
  - Image
  - Date
  - Description
- View list of events
- Manage multiple events

### 📰 Newsletter Subscription

- Users can subscribe to a newsletter
- Simple form-based subscription flow

### 🔄 Navigation

- Seamless navigation using **react-router-dom**
- Route-based UI rendering

---

## 🛠️ Tech Stack

### Frontend

- **React.js**
- **React Router DOM**
- **State Management:** React Hooks

### Backend

- **Node.js** (Dummy backend included in repo)
- **JWT Authentication**
- REST APIs for events and auth

### Other

- **Styling:** CSS
- **Build Tool:** Create React App / Vite

---

## 📂 Project Structure

```
event-management/
├─ backend
│  ├─ app.js
│  ├─ data
│  │  ├─ event.js
│  │  ├─ user.js
│  │  └─ util.js
│  ├─ events.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ auth.js
│  │  └─ events.js
│  └─ util
│     ├─ auth.js
│     ├─ errors.js
│     └─ validation.js
└─ frontend
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   └─ src
      ├─ App.js
      ├─ components
      │  ├─ AuthForm.js
      │  ├─ AuthForm.module.css
      │  ├─ EventForm.js
      │  ├─ EventForm.module.css
      │  ├─ EventItem.js
      │  ├─ EventItem.module.css
      │  ├─ EventsList.js
      │  ├─ EventsList.module.css
      │  ├─ EventsNavigation.js
      │  ├─ EventsNavigation.module.css
      │  ├─ MainNavigation.js
      │  ├─ MainNavigation.module.css
      │  ├─ NewsletterSignup.js
      │  ├─ NewsletterSignup.module.css
      │  ├─ PageContent.jsx
      │  └─ PageContent.module.css
      ├─ index.css
      ├─ index.js
      ├─ pages
      │  ├─ Error.jsx
      │  ├─ Home.jsx
      │  ├─ Newsletter.js
      │  ├─ Root.jsx
      │  ├─ auth
      │  │  ├─ Authentication.js
      │  │  └─ Logout.jsx
      │  └─ events
      │     ├─ EditEvent.jsx
      │     ├─ EventDetail.jsx
      │     ├─ Events.jsx
      │     ├─ NewEvent.jsx
      │     └─ RootEvents.jsx
      └─ util
         └─ AuthUtil.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/mishraabhishek11/event-management.git

### 2️⃣ Navigate to the project folder

cd event-management

---

### 🔧 Setup Backend

cd backend
npm install
npm start

Backend runs on:
http://localhost:8080

---

### 💻 Setup Frontend

cd ..
npm install
npm start

Frontend runs on:
http://localhost:3000

---

## 🧑‍💻 Usage

1. Sign up with your email and password
2. Login using your credentials
3. Create new events with required details
4. View and manage your events
5. Subscribe to the newsletter

---

## 🔐 Authentication Flow

- User logs in → receives JWT token
- Token is stored in browser storage
- Protected routes validate token before access

---

## 🌐 API Integration

- Frontend communicates with Node.js backend
- Handles authentication, events, and newsletter APIs

---

## 🎯 Learning Objectives

- Full-stack application architecture
- JWT-based authentication
- Protected routing in React
- REST API integration
- Managing forms and user input

---

## 🔮 Future Enhancements

- Edit and delete events
- Add event registration for users
- Role-based access control
- Deploy backend and frontend
- Improve UI/UX

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch  
   git checkout -b feature/your-feature

3. Commit your changes  
   git commit -m "Add your message"

4. Push to the branch  
   git push origin feature/your-feature

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Abhishek Mishra  
GitHub: https://github.com/mishraabhishek11

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
