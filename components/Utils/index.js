import Link from "next/link";

export const Button = ({ href, label, onClick, disabled }) => {
  return href ? (
    <div className="btn">
      <Link href={href} className="btn">
        {label}
      </Link>
    </div>
  ) : (
    <button className="btn" onClick={() => onClick()} disabled={disabled}>
      {label}
    </button>
  );
};
