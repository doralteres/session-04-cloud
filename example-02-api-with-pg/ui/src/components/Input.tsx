import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={props.name} className="capitalize">
          {props.name}
        </label>
        <input
          id={props.name}
          required
          ref={ref}
          {...props}
          className="px-2 py-1 rounded-lg bg-opacity-50"
        />
      </div>
    );
  }
);

export default Input;
