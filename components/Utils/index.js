import Link from "next/link";

export const Button = ({ href, label, onClick, disabled }) => {
  return href ? (
    <button className="btn">
      <Link href={href} className="btn">
        {label}
      </Link>
    </button>
  ) : (
    <button className="btn" onClick={() => onClick()} disabled={disabled}>
      {label}
    </button>
  );
};
