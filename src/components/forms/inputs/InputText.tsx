const InputText = ({ element, register, errors }: any) => {
  const { label, type, name, placeholder } = element;

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, { ...element.register })}
      />
      {errors[name] && <p>{errors[name]?.message}</p>}
    </>
  );
};

export default InputText;
