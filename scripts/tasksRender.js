export function renderTaskGroup(items) {
  return items
    .map(
      (item) => `
        <div class="task-group scroll-x flex gap-2">
          <div class="flex-col gap-2">
            <div class="flex center between">
              <span class="label">${item.category}</span>
              <span class="label">Sep 12, 2025</span>
            </div>
            <p class="sub-title text-md">${item.title}</p>
            <p class="label">${item.description}</p>
            <hr>
            <div class="justify-center flex center gap-1">
              <input type="checkbox" id="${item.id}">
              <label for="${item.id}">Mark as complete</label>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}
