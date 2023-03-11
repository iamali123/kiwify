export default function InputField({ className, ...restProps }) {
  return (
    <input
      {...restProps}
      name={restProps?.name}
      className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${className}`}
    />
  );
}
