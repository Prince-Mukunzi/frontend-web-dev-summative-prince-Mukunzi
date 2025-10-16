import { data } from "./seed.js";
import { formatAmount } from "./formattedAmount.js";
export function renderEventGroup(items) {
  return items
    .map(
      (item) => `
            <div class="flex-col gap-1 event-group">
            <div class="item-group flex-col gap-1">
                <img src="${
                  item.thumbnail.startsWith("data:image")
                    ? item.thumbnail
                    : `./assets/${item.thumbnail}`
                }" 
                     alt="Event Thumbnail" 
                     class="thumbnail" />
                <p class="label center flex gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-calendar-days-icon lucide-calendar-days"
                >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M12 18h.01" />
                    <path d="M16 18h.01" />
                </svg>
                ${item.date}
                </p>
                
                <div class="flex center between">
                <p class="sub-title text-md truncate">${item.title}</p>
                <div class="flex gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-tag-icon lucide-tag"
                    >
                    <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                    />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    <p class="paragraph text-md">
                    ${item.cost <= 0 ? "Free" : `RF ${formatAmount(item.cost)}`}
                    </p>
                </div>
                </div>
                <p class="label truncate">${item.description}</p>
                <div class="flex gap-1 center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin-icon lucide-map-pin"
                >
                <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                />
                <circle cx="12" cy="10" r="3" />
                </svg>
                <p class="label">${item.location}</p>
                </div>
            </div>
            </div>
        `
    )
    .join("");
}
