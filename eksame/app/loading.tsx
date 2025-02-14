export default function Loading() {
    return (
        <main className="flex justify-center items-center w-screen min-h-screen pb-[10rem] bg-primary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="animate-spin bi bi-arrow-clockwise text-primaryWhite"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
            <footer className="fixed bottom-0 left-0 w-full bg-primaryWhite">
                <ul className="flex justify-between py-3 px-7 w-full">
                    <li>
                        <div className="p-3 rounded-full border-2 border-solid border-primaryBlack w-[3rem] h-[3rem]">
                            <img
                                className="w-full h-full object-fit"
                                src="/images/home.svg"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="p-3 rounded-full border-2 border-solid border-primaryBlack w-[3rem] h-[3rem]">
                            <img
                                className="w-full h-full object-fit"
                                src="/images/search.svg"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="p-3 rounded-full border-2 border-solid border-primaryBlack w-[3rem] h-[3rem]">
                            <img
                                className="w-full h-full object-fit"
                                src="/images/calendar.svg"
                            />
                        </div>
                    </li>
                </ul>
            </footer>
        </main>
    );
}
