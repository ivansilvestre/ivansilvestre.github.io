const Toast = ({ message }) => {
  if (!message) return null;

  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[var(--option-color)]
      text-[var(--secondary-color)] border border-[var(--secondary-color)] rounded-lg
      px-4 py-2 text-sm animate-fade-in-up"
    >
      {message}
    </div>
  );
};

export default Toast;
