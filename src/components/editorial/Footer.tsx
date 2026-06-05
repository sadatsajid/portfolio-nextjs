export function EditorialFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-8 flex items-center justify-between text-[12px] text-muted">
        <span>© {new Date().getFullYear()} Asif Sadat</span>
        <span>Made in Dhaka</span>
      </div>
    </footer>
  );
}
