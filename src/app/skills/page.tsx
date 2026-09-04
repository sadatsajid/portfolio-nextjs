import { redirect } from 'next/navigation';

// Retired 2026-09 — skills now live on the homepage (Toolkit section).
// Redirect rather than 404 so any existing bookmarks or inbound links
// still land somewhere useful.
export default function SkillsRedirect() {
  redirect('/#toolkit');
}
