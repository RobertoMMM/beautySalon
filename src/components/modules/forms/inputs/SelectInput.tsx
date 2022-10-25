const SelectInput = ({ element, register, errors }: any) => {
  const { label, name } = element;

  return (
    <div>
      <label>{label}</label>
      <select name={name} {...register(name, { ...element.register })}>
        {element.options.map(
          ({ value, text }: { value: string | number; text: string }) => (
            <option key={value} value={value}>
              {text}
            </option>
          )
        )}
      </select>
      {errors[element.name] && <p>{errors[element.name]?.message}</p>}
    </div>
  );
};

export default SelectInput;
