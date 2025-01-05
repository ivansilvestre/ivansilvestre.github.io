const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-75"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default Modal;
