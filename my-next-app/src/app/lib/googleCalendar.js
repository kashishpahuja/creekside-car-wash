import { google } from "googleapis";
import { readFileSync } from "fs";
import path from "path";

const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];

// Load service account credentials
const keyFilePath = path.join(process.cwd(), "service-account.json"); // Ensure this path is correct
const auth = new google.auth.GoogleAuth({
  keyFile: keyFilePath,
  scopes: SCOPES,
});

// Function to create an event in Google Calendar
export async function createCalendarEvent(eventData) {
  try {
    const client = await auth.getClient();
    const calendar = google.calendar({ version: "v3", auth: client });

    const event = {
      summary: eventData.summary,
      description: eventData.description,
      start: {
        dateTime: eventData.startTime,
        timeZone: "America/New_York", // Change this to your time zone
      },
      end: {
        dateTime: eventData.endTime,
        timeZone: "America/New_York",
      },
    };

    const response = await calendar.events.insert({
      calendarId: "primary", // Use your Google Calendar ID if different
      resource: event,
    });

    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw new Error("Failed to create event");
  }
}
