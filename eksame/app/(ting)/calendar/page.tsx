import Heading from "@/components/Heading";

export default function kalender() {
    return (
        <>
            <Heading content="Kalender" />
            <ul className="flex overflow-y-scroll flex-col gap-7 px-5">
                <li className="p-5 w-full rounded-xl text-primaryBlack bg-primaryWhite">
                    <a className="w-full h-full" href="/">
                        <h2 className="text-lg font-bold truncate">Junior Fitness Dance</h2>
                        <h4 className="text-md">Mandag 15:45</h4>
                    </a>
                </li>
                <li className="p-5 w-full rounded-xl text-primaryBlack bg-primaryWhite">
                    <h2 className="text-lg font-bold truncate">Junior Fitness Dance</h2>
                    <h4 className="text-md">Mandag 15:45</h4>
                </li>
                <li className="p-5 w-full rounded-xl text-primaryBlack bg-primaryWhite">
                    <h2 className="text-lg font-bold truncate">Junior Fitness Dance</h2>
                    <h4 className="text-md">Mandag 15:45</h4>
                </li>
                <li className="p-5 w-full rounded-xl text-primaryBlack bg-primaryWhite">
                    <h2 className="text-lg font-bold truncate">Junior Fitness Dance</h2>
                    <h4 className="text-md">Mandag 15:45</h4>
                </li>
            </ul>
        </>
    );
}
