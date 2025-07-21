export default function MenuToggleButton({ isOpen, onToggle }) {

  return (
    <div
      className={`menusvg-container${isOpen ? ' open' : ''}`}
      tabIndex={0}
      role="button"
      aria-label="Open menu"
      aria-expanded={isOpen}
      onClick={onToggle}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
    >
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="14" cy="14" r="7" className="circle top-left" />
        <circle cx="34" cy="14" r="7" className="circle top-right" />
        <circle cx="34" cy="34" r="7" className="circle bottom-right" />
        <circle cx="14" cy="34" r="7" className="circle bottom-left" />
      </svg>
    </div>
  );
}
