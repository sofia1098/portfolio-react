export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Cerrar modal"
        type="button"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-900 p-6 text-white shadow-xl animate-scaleIn">
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-3">
          <h3 className="text-xl font-medium tracking-wide uppercase">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-sm hover:bg-white/10 transition"
            type="button"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}