"use client"
import { destinations } from "@/mocks/travelData"
import Image from 'next/image';
import { useParams } from "next/navigation"

const TravelPage = () => {
    const { id }: any = useParams()
    const destination = destinations.find((dest) => dest.id === Number(id))
    if (!destination) {
        return <div>Destination not found.</div>;
    }
    return (
        <div className="w-full mx-auto">
            <div className="py-4 flex justify-center">
                <Image
                    src={destination.image}
                    width={500}
                    height={500}
                    className="rounded-xl"
                    alt=" "
                />
            </div>
            <h1 className="pb-2 flex justify-center underline">{destination.name}</h1>
            <p className="w-4/6 mx-auto indent-14">{destination.description}</p>
        </div>
    )
}

export default TravelPage