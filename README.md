# **User Management System with Role-Based Access Control (RBAC)**

This project is a **React-JS-based User Management System** designed for managing users and their roles in an intuitive table format. It provides features to **add**, **edit**, and **delete** users and roles, offering seamless control over user information. Each user record includes their **name**, **email**, **role**, and **activity status** (active/inactive). The app utilizes **localStorage** to persist data, ensuring that changes remain intact even after page reloads or browser restarts.

---

## **Key Features**

### **1. Add New Users**  
- Easily add users by filling out a simple form with their **name**, **email**, and **role**.  
- Email addresses are validated to ensure proper formatting before saving.  

### **2. Edit Existing Users**  
- Modify user details by clicking the **"Edit"** button in the table.  
- The form is pre-filled with the user's current information, making updates quick and straightforward.  

### **3. Delete Users**  
- Permanently remove users by clicking the **"Delete"** button for their entry.  

### **4. Responsive Design**  
- The app is fully responsive and adapts gracefully to various screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.  

### **5. Role Management**  
- Create and assign roles to users, enabling efficient management of access and permissions.  

### **6. Data Persistence**  
- All changes are saved in the browser's **localStorage**, ensuring data remains consistent across sessions.  
- User and role data are automatically loaded from **localStorage** upon page refresh or app restart.  

---

## **Technologies Used**

- **React:** For building an interactive and dynamic user interface.  
- **Tailwind CSS:** For modern, responsive, and scalable styling.  
- **localStorage:** For persistent storage of user and role data within the browser.  

---

## **How to Get Started**

### **1. Clone the Repository**  
Use the following command to clone the repository:  
git clone https://github.com/guptasneha13/RBAC

npm install

npm run start

---

## **Using the Application**

### **1. Create Roles**
To manage users effectively, begin by creating roles. Roles define the level of access and permissions for different types of users within the system. Once roles are created, they can be assigned to users to control what actions they are allowed to perform.

### **2. Add Users**
To add a new user:
1. Click the **"Add User"** button.
2. Fill out the required fields, which include:
   - **Name**: The full name of the user.
   - **Email**: The user’s email address (must be valid).
   - **Role**: Select the role to be assigned to the user from the available list of roles.

Once you fill out the form, the new user will be added to the system and displayed in the user table.

### **3. Edit Users**
To update an existing user’s details:
1. Locate the user record in the table.
2. Click the **"Edit"** button next to their entry.
3. A form will pre-fill with the user’s current information, allowing you to modify any details like name, email, or role.
4. Save the changes to update the user in the system.

### **4. Delete Users**
To permanently remove a user from the system:
1. Find the user record you wish to delete in the table.
2. Click the **"Delete"** button next to their entry.
3. The user will be deleted from the system immediately and will no longer appear in the user table.

### **5. Data Persistence with localStorage**
The application uses **localStorage** to store all user and role data. This ensures the following:
- Any changes (additions, edits, or deletions) to users or roles are automatically saved in **localStorage**.
- The data persists even after refreshing the page or restarting the app.
- When the app is restarted, **localStorage** is used to automatically reload the data, ensuring your users and roles are retained without having to manually re-enter them.


