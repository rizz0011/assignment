# React + Vite

# Vite Todo Application

A simple **Todo application built with Vite and React**. This app demonstrates a clean UI with sidebar, task list, and editable task details. The application stores tasks in **localStorage**, so data persists even after page refresh.

> ⚠️ Note: The menu bar is **not functional** and is only for UI display purposes.

---

## Features

- **Menu Sidebar**  
  Displays a sidebar menu with static items: Upcoming, Today, Calendar, Sticky Wall. (UI only, not functional)

- **Todo List**  
  - Add new tasks via a modal.
  - Title is **required**, description is optional.
  - Tasks are stored in **localStorage** to persist data across refresh.
  - View tasks for "Today" in the right-side panel.
  - Edit task details inline using **editable text**.
  - Save changes to update localStorage.
  - Delete tasks as needed.

- **Modal for Adding Tasks**  
  - Opens when clicking the **Add Task** button.
  - Allows entering a title and description.
  - Validates required fields.
  - Saves data to localStorage on submit.

- **Editable Task Content**  
  - Click on task text to make it editable.
  - Save button updates the task in localStorage.
  - Delete button removes the task.

---

## Installation

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install
npm run dev

