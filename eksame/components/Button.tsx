import Link from "next/link";

export default function Button({
  content,
  href,
  disabled = false,
}: {
  content: string;
  href?: string;
  disabled?: boolean;
}) {
  {
    if (href) {
      return (
        <Link href={href}>
          <button
            disabled={disabled}
            className="py-3 text-sm rounded-xl border-2 border-solid transition-all px-[5rem] bg-primary text-primaryWhite border-primary duration-[0.5s] hover:text-primary hover:bg-primaryWhite"
          >
            {content}
          </button>
        </Link>
      );
    } else {
      return (
        <button
          disabled={disabled}
          className="z-10 py-3 text-sm rounded-xl border-2 border-solid transition-all px-[5rem] bg-primary text-primaryWhite border-primary duration-[0.5s] hover:text-primary hover:bg-primaryWhite"
        >
          {content}
        </button>
      );
    }
  }
}
