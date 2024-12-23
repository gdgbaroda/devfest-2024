import SpeakerFrame from "@/components/SpeakerFrame";
import speakersData from "@/data/speakers";

export default function Speakers() {
    return (
        <div className="flex flex-col h-full w-full px-4 md:px-8 lg:px-16 xl:px-32 my-10 md:my-16 gap-6 md:gap-10">
            <h1 className="text-3xl lg:text-4xl font-bold">Speakers</h1>
            <p className="text-lg font-open-sans md:text-xl text-gray-700 max-w-3xl">
                Meet our amazing speakers who will share their knowledge and experience in various tech domains.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
                          gap-y-12 sm:gap-8 md:gap-8 lg:gap-10 
                          place-items-center">
                {speakersData.map((speaker, index) => (
                    <SpeakerFrame
                        key={index}
                        img={speaker.img}
                        name={speaker.name}
                        role={speaker.role}
                        company={speaker.company}
                    />
                ))}
            </div>
        </div>
    );
}