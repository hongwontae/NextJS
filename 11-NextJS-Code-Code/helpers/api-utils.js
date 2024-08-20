export async function getAllEvents() {
  const response = await fetch("http://localhost:8080/event/allEvent");

  const resData = await response.json();

  return resData;
}

export async function getFeaturedEvents() {
  const eventData = await getAllEvents();
  return eventData.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const eventData = await getAllEvents();
  return eventData.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const eventData = await getAllEvents();

  let filteredEvents = eventData.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
