# 📇 Contact Management App

A simple contact management app built with React, Firebase, and React Icons. It allows you to manage and filter contacts, add new ones, and update existing ones with a sleek and minimal design.

## 🛠️ Features

- 📱 **Add Contact**: Easily add new contacts with a user-friendly modal.
- 🔍 **Search Functionality**: Filter contacts by name in real-time.
- 🔄 **Real-Time Data**: Firebase integration to get real-time updates when contacts are added, updated, or deleted.
- ❌ **Delete Contact**: Remove contacts effortlessly.
- ✨ **Minimal UI**: Clean and intuitive interface.








2.PROJECT STRUCTURE 

├── src/
│   ├── components/         # Reusable components

│   │   ├── Navbar.js       # Navbar component

│   │   ├── ContactCard.js  # Individual contact card

│   │   ├── NotFoundContact.js  # Display when no contacts are found

│   │   └── AddAndUpdateContact.js  # Modal to add/update contacts

│   ├── hooks/
│   │   └── useDisclosure.js   # Custom hook for modal state

│   ├── config/
│   │   └── firebase.js     # Firebase configuration

│   ├── App.js              # Main app component

│   └── index.js            # Entry point

├── public/
│   └── index.html          # HTML template

├── package.json            # Dependencies and scripts

└── README.md               # Project documentation





3.📝 Tech Stack


1.React: Front-end framework

2.Firebase: Backend and real-time database

3.React Icons: For beautiful icons like search and add

4.Tailwind CSS: For styling and responsive design

5.react-toastify: For notifications

6.React Hooks: For managing state and component logic










🛠️ How it works
1. Firebase Firestore Integration 🔥
Contacts are stored in Firebase Firestore. When the app loads, it fetches the data from Firestore and listens for any changes in real-time, ensuring that the data stays up to date.

2. Adding Contacts ➕
The user can add a contact by clicking the plus icon, which opens a modal form to input name and other details. The contact is then saved to Firebase.

3. Searching Contacts 🔍
The user can search contacts by name. As the user types in the search box, the app filters the contacts in real-time based on the input.

4. No Contacts Found 😞
If no contacts match the search criteria or if there are no contacts at all, the app shows a "No contacts found" message.
