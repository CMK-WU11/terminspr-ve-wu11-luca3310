export default function Button({
    content,
    href,
}: {
    content: string;
    href: string;
}) {
    return (
        <a href={href}>
            <button className="py-3 text-sm rounded-xl border-2 border-solid transition-all px-[5rem] bg-primary text-primaryWhite border-primary duration-[0.5s] hover:text-primary hover:bg-primaryWhite">
                {content}
            </button>
        </a>
    );
}
