import InputType from "../../types/Input";
import "../../styles/Input.css";

function Input({ name, label, error, ...restProps }: InputType) {
  return (
    <div className="container">
      <div className="form-box">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input {...restProps} className="form-control" id={name} name={name} />
        {error && <div className="alert">{error}</div>}
      </div>
    </div>
  );
}

export default Input;
