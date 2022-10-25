const EmailInput = ({ element, register, errors }: any) => {
  const { label, type, name, placeholder } = element;

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, { ...element.register })}
      />
      {errors[name] && <p>{errors[name]?.message}</p>}
    </div>
  );
};

export default EmailInput;
