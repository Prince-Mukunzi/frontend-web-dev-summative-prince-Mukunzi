import { data } from "./seed.js";
import { renderEventGroup } from "./eventsRender.js";
import { renderTaskGroup } from "./tasksRender.js";

const storedTasks = JSON.parse(localStorage.getItem("tasks")) || data.tasks;
const storedEvents = JSON.parse(localStorage.getItem("events")) || data.events;

// Burger Menu
const burgerMenu = document.querySelector(".burger-menu");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".sidebar .close-btn");

burgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

// Close the sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});

// Stats
const taskCount = document.querySelector(".tasks-count");
taskCount && (taskCount.innerText = storedTasks.length);

const eventsCount = document.querySelector(".events-count");
eventsCount && (eventsCount.innerText = storedEvents.length);

// Render tasks and events
const eventsContainer = document.querySelector(".event-container");
const tasksContainer = document.querySelector(".task-container");
tasksContainer && (tasksContainer.innerHTML = renderTaskGroup(storedTasks));
eventsContainer && (eventsContainer.innerHTML = renderEventGroup(storedEvents));

// Search filter
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase().trim();

  const filteredTasks = storedTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchValue) ||
      task.description.toLowerCase().includes(searchValue)
  );

  const filteredEvents = storedEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchValue) ||
      event.description.toLowerCase().includes(searchValue) ||
      event.location.toLowerCase().includes(searchValue)
  );

  tasksContainer && (tasksContainer.innerHTML = renderTaskGroup(filteredTasks));
  eventsContainer &&
    (eventsContainer.innerHTML = renderEventGroup(filteredEvents));
});

// Create Task
const createTaskBtn = document.querySelector(".create-task");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalBtn = document.getElementById("closeModal");
const taskForm = document.getElementById("taskForm");

const now = Date.now();
const formatted = new Date(now).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

// Create Task Behavior
createTaskBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask = {
    title: taskForm.title.value,
    description: taskForm.description.value,
    category: taskForm.category.value,
    date: formatted,
  };
  storedTasks.unshift(newTask);
  localStorage.setItem("tasks", JSON.stringify(storedTasks));

  // Re-render tasks
  tasksContainer.innerHTML = renderTaskGroup(storedTasks);

  // Reset modal state
  taskForm.reset();
  modalOverlay.classList.add("hidden");
});

// Add Event Behavior
const createEventBtn = document.querySelector(".create-event");
const eventModalOverlay = document.getElementById("eventModalOverlay");
const closeEventModalBtn = document.getElementById("closeEventModal");
const eventForm = document.getElementById("eventForm");
const eventThumbnailInput = document.getElementById("eventThumbnail");

createEventBtn.addEventListener("click", () => {
  eventModalOverlay.classList.remove("hidden");
});

closeEventModalBtn.addEventListener("click", () => {
  eventModalOverlay.classList.add("hidden");
});

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = eventForm.eventTitle.value.trim();
  const date = eventForm.eventDate.value.trim();
  const description = eventForm.eventDescription.value.trim();
  const location = eventForm.eventLocation.value.trim();
  const cost = eventForm.eventCost.value.trim();
  const fileInput = eventThumbnailInput.files[0];

  if (!title || !date || !description || !location || !cost) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!fileInput) {
    alert("Please upload an image thumbnail.");
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    const newEvent = {
      title,
      date: new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      description,
      location,
      thumbnail: event.target.result,
      cost: parseInt(cost, 10),
    };
    storedEvents.unshift(newEvent);
    localStorage.setItem("events", JSON.stringify(storedEvents));

    // Re-render events
    eventsContainer.innerHTML = renderEventGroup(storedEvents);

    // Reset modal state
    eventForm.reset();
    eventModalOverlay.classList.add("hidden");
  };

  reader.readAsDataURL(fileInput);
});
