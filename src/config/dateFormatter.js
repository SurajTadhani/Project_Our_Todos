import { format } from 'date-fns';

export function getFormattedDate(dateString) {
  // Parse the date string
  const date = new Date(Date.parse(dateString));

  // Use date-fns format function with custom tokens
  const formattedDate = format(date, 'd"th" MMM yyyy');

  return formattedDate;
}