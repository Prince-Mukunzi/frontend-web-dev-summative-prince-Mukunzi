import { data } from "./seed.js";
import { renderEventGroup } from "./eventsRender.js";
import { renderTaskGroup } from "./tasksRender.js";

document.querySelector(".task-count").innerText = data.tasks.length;
document.querySelector(".events-count").innerText = data.events.length;

// Search filter
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();

  const eventsContainer = document.querySelector(".event-container");
  const tasksContainer = document.querySelector(".task-container");

  const filteredTasks = data.tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)
  );

  const filteredEvents = data.events.filter(
    (event) =>
      event.title.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query)
  );
  tasksContainer.innerHTML = renderTaskGroup(filteredTasks);
  eventsContainer.innerHTML = renderEventGroup(filteredEvents);
});
