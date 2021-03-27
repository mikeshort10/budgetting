import React from "react";

type InputProps = React.HTMLProps<HTMLInputElement> & { label: string };

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef(
  (
    { className, style, label, ...props }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement | null>
  ) => {
    const cn = [
      "border border-blue-500 text-xl px-5 py-1 rounded w-full",
      className,
    ].join(" ");
    const s = { backgroundColor: "inherit", ...style };
    return (
      <label className="pt-2 w-full">
        {label}
        <input ref={ref} className={cn} {...props} style={s} />
      </label>
    );
  }
);
