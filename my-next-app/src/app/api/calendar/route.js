import { NextResponse } from "next/server";
import { createCalendarEvent } from "@/app/lib/googleCalendar";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.date || !body.time) {
      return NextResponse.json({ success: false, error: "Date and time are required" }, { status: 400 });
    }

    // Combine date & time to create start and end times
    const startTime = new Date(`${body.date}T${body.time}:00`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour duration

    const eventData = {
      summary: "Car Wash Appointment",
      description: `Customer booked a car wash on ${body.date} at ${body.time}.`,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
    };

    const event = await createCalendarEvent(eventData);

    return NextResponse.json({ success: true, event });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
