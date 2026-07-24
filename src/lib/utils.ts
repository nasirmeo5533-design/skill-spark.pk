export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateWhatsAppLink(
  courseTitle: string,
  message?: string
): string {
  const baseUrl = "https://wa.me/923703159642";
  const defaultMessage = message || `Hi, I want to enroll in ${courseTitle}`;
  return `${baseUrl}?text=${encodeURIComponent(defaultMessage)}`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
