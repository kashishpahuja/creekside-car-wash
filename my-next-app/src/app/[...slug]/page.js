// src/app/[...slug]/page.js

import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  notFound(); // This will trigger the custom 404 page
  return null;
}
