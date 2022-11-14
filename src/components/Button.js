const Button = () => {
  return (
    <button
      type="button"
      className="inline-block rounded-lg bg-blue-600 px-4 py-1.5 text-base font-normal leading-7 text-white ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
    >
      <span className="">Start</span>
      <span className="text-indigo-200" aria-hidden="true">
        &rarr;
      </span>
    </button>
  );
};

export default Button;
