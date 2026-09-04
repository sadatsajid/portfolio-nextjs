import { redirect } from 'next/navigation';

// Retired 2026-09 — projects now live on the homepage (Work section:
// featured, client, and side projects). Redirect rather than 404 so any
// existing bookmarks or inbound links still land somewhere useful.
export default function ProjectsRedirect() {
  redirect('/#work');
}
