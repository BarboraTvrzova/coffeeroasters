import Link from "next/link";

export const Button = ({ href, label }) => {
  return href ? (
    <button className="btn">
      <Link href={href} className="btn">
        {label}
      </Link>
    </button>
  ) : (
    <button className="btn">{label}</button>
  );
};
