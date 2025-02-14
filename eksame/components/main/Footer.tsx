import Link from "next/link";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-primaryWhite">
            <ul className="flex justify-between py-3 px-7 w-full">
                <li>
                    <Link href="/activities" className="bg-red-500">
                        <div className="p-3 rounded-full border-2 border-solid border-primaryBlack w-[3rem] h-[3rem]">
                            <img
                                className="w-full h-full object-fit"
                                src="/images/home.svg"
                            />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/search">
                        <div className="p-3 rounded-full border-2 border-solid border-primaryBlack w-[3rem] h-[3rem]">
                            <img
                                className="w-full h-full object-fit"
                                src="/images/search.svg"
                            />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/calendar">
                        <div className="p-3 rounded-full border-2 border-solid border-primaryBlack w-[3rem] h-[3rem]">
                            <img
                                className="w-full h-full object-fit"
                                src="/images/calendar.svg"
                            />
                        </div>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
