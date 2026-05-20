export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}

export function getFeaturedProject(projects) {
  return projects.items.find((project) => project.id === projects.featuredId) || projects.items[0];
}
