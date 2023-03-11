export default function InputField({ className, ...restProps }) {
  return (
    <input
      {...restProps}
      name={restProps?.name}
      className={`border py-3 px-4 rounded-lg w-full outline-none ${className}`}
    />
  );
}
