export default function ContactFormInput({
  inputType,
  label,
  name,
  type,
  placeholder,
  value,
  required,
  autoComplete,
  // errorMessage,
  handleChange,
  setStateVariable,
}: {
  inputType: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: any;
  required: boolean;
  autoComplete: string;
  // errorMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<any>>) => void;
  setStateVariable: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="flex flex-col justify-start">
      <label
        className="m-2 text-left text-base"
        htmlFor={name}>{label}
        {required && <><span>*</span><span className="text-xs"> (required)</span></>}
      </label>
      {inputType === "textarea" ? (
        <textarea
            autoComplete="off"
            maxLength={1000}
            onChange={(e) => handleChange(e, setStateVariable)}
            value={value}
            required
            name="message"
            id="message"
            className="shadow-2xl shadow-green-500/50 border-2 border-neutral-600 p-2 w-full text-black placeholder-neutral-800 rounded-2xl bg-neutral-300 font-share-tech-mono tracking-wide text-shadow-green h-80 resize-none text-lg"
          />
      ) : (
        <input
          className="shadow-2xl shadow-green-500/50 border-2 border-neutral-600 p-2 w-full text-black placeholder-neutral-800 rounded-2xl bg-neutral-300 font-share-tech-mono tracking-wide text-shadow-green text-lg"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          autoComplete={autoComplete}
          onChange={(e) => handleChange(e, setStateVariable)}
        />
      )}
      {/* <p>{errorMessage}</p> */}
    </div>
  );
}