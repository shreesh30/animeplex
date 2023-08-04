function Button({ children }) {
  return (
    <button className="rounded bg-white text-black flex justify-between items-center px-3 py-1.5 border h-8 w-50">
      {children}
    </button>
  );
}

export default Button;
