# Campus Life Planner

Campus Life Planner is a web application designed to help students and individuals manage their tasks and events efficiently. The app allows users to create, view, and search for tasks and events while keeping track of their priorities.

## Features

- **Task Management**: Add, view, and search for tasks with categories and descriptions.
- **Event Management**: Add, view, and search for events with details like location, cost, and thumbnails.
- **Local Storage**: Tasks and events are saved in the browser's local storage for persistence.
- **Search Functionality**: Quickly find tasks or events using the search bar.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## File Structure

- **`index.html`**: The main dashboard displaying tasks and events.
- **`tasks.html`**: A dedicated page for managing tasks.
- **`events.html`**: A dedicated page for managing events.
- **`about.html`**: Information about the app and its purpose.
- **`settings.html`**: Manage user profile settings.
- **`scripts/`**:
  - `render.js`: Handles rendering tasks and events, as well as managing local storage.
  - `seed.js`: Contains mock data for tasks and events.
  - `tasksRender.js`: Renders task groups dynamically.
  - `eventsRender.js`: Renders event groups dynamically.
  - `formattedAmount.js`: Formats event costs for display.
- **`css/style.css`**: Styles for the entire application.

## How It Works

1. **Initial Load**:

   - The app checks for tasks and events in local storage.
   - If no data is found, mock data from `seed.js` is used.

2. **Adding Tasks**:

   - Users can add tasks via the "Add Task" modal.
   - Tasks are saved to local storage and displayed dynamically.

3. **Adding Events**:

   - Users can add events via the "Add Event" modal.
   - Events include details like title, date, location, cost, and an optional thumbnail image.

4. **Search**:
   - The search bar filters tasks and events based on the title, description, or location.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/campus-life-planner.git
   ```
