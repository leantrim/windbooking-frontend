import DropDownInputType from "../../types/DropdownInput";

const getActiveCategory = (id: string, categoryId: string) => {
  let classes: string = "";
  classes += id === categoryId ? "active" : "";
  return classes;
};

function DropDownInput({
  name,
  label,
  error,
  data,
  options,
  onChange,
  ...restProps
}: DropDownInputType) {
  return (
    <div>
      {label}
      <select
        name={name}
        onChange={onChange}
        className="form-select"
        selected={
          data.categoryId && getActiveCategory(options._id, data.categoryId)
        }
      >
        {options.map((opt: any) => (
          <option
            value={opt._id}
            selected={
              data.categoryId && getActiveCategory(opt._id, data.categoryId)
            }
            key={opt._id}
          >
            {opt.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default DropDownInput;
