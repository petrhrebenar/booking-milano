import { format } from 'date-fns';

// Formats a date to the required YYYYMMDDTHHMMSSZ format for iCalendar.
const formatICalDate = (date: Date): string => {
  // Use UTC methods to avoid timezone issues.
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');

  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
};

// Generates a unique identifier for the event.
const generateUID = (): string => {
  return `${new Date().getTime().toString()}-booking@prenotamilano.com`;
};

/**
 * Generates an iCalendar (.ics) file content string for a booking.
 * @param startDate The start date of the booking.
 * @param endDate The end date of the booking.
 * @param name The name of the guest.
 * @param email The email of the guest.
 * @returns A string containing the .ics file content.
 */
export function generateICS(
  startDate: Date,
  endDate: Date,
  name: string,
  email: string
): string {
  const iCalContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//PrenotaMilano//NONSGML v1.0//EN',
    'BEGIN:VEVENT',
    `UID:${generateUID()}`,
    `DTSTAMP:${formatICalDate(new Date())}`,
    `DTSTART;VALUE=DATE:${format(startDate, 'yyyyMMdd')}`,
    `DTEND;VALUE=DATE:${format(endDate, 'yyyyMMdd')}`,
    `SUMMARY:Booking Confirmation: ${name}`,
    `DESCRIPTION:Booking for a stay in Milan.\\nGuest: ${name}\\nEmail: ${email}`,
    'LOCATION:Milan, Italy',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return iCalContent;
}
