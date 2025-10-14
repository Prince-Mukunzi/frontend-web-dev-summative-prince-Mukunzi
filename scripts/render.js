import { data } from "./seed.js";
import { renderEventGroup } from "./eventsRender.js";
import { renderTaskGroup } from "./tasksRender.js";

const tasksContainer = document.querySelector(".task-container");
const eventsContainer = document.querySelector(".event-container");

function renderAll(data) {
  tasksContainer.innerHTML = renderTaskGroup(data.tasks);
  eventsContainer.innerHTML = renderEventGroup(data.events);
}

renderAll(data);

// Search filter
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();

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

  renderAll({
    tasks: filteredTasks,
    events: filteredEvents,
  });
});
