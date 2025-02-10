export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-primaryWhite">
            <ul className="flex justify-between py-3 px-7 w-full">
                <li className="p-3 rounded-full border-2 border-solid border-primaryBlack w-[4rem] h-[4rem]">
                    <a href="/activities">
                        <img className="w-full h-full object-fit" src="/images/home.svg" />
                    </a>
                </li>
                <li className="p-3 rounded-full border-2 border-solid border-primaryBlack w-[4rem] h-[4rem]">
                    <a href="/search">
                        <img
                            className="w-full h-full object-fit"
                            src="/images/search.svg"
                        />
                    </a>
                </li>
                <li className="p-3 rounded-full border-2 border-solid border-primaryBlack w-[4rem] h-[4rem]">
                    <a href="/calendar">
                        <img
                            className="w-full h-full object-fit"
                            src="/images/calendar.svg"
                        />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
