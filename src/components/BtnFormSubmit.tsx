"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type BtnFormSubmitProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function BtnFormSubmit({
  children,
  className,
  ...props
}: BtnFormSubmitProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={`btn btn-primary ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-spinner" />}

      {children}
    </button>
  );
}
