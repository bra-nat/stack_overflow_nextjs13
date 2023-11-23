import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const createdAtDate =
    typeof createdAt === "string" ? new Date(createdAt) : createdAt;

  const timeDifference = now.getTime() - createdAtDate.getTime();

  // Convert milliseconds to seconds
  const seconds = Math.floor(timeDifference / 1000);

  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }

  const days = Math.floor(hours / 24);

  if (days < 7) {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  const weeks = Math.floor(days / 7);

  if (weeks < 4) {
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  }

  const months = Math.floor(days / 30);

  if (months < 12) {
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(months / 12);

  return `${years} year${years !== 1 ? "s" : ""} ago`;
};

export const formatNumber = (inputNumber: number): string => {
  if (inputNumber >= 1000000) {
    // If the number is in millions
    const millions = (inputNumber / 1000000).toFixed(1);
    return `${millions}M`;
  } else if (inputNumber >= 1000) {
    // If the number is in thousands
    const thousands = (inputNumber / 1000).toFixed(1);
    return `${thousands}K`;
  } else {
    // If the number is less than 1000, no extension needed
    return inputNumber.toString();
  }
};
