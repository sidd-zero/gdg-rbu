import React from 'react';

type Stat = {
    value: string;
    label: string;
    color: string;
};

interface StatsSectionProps {
    heading?: string;
    subheading?: string;
    stats?: Stat[];
    className?: string;
}

const defaultStats: Stat[] = [
    { value: '3+', label: 'Years', color: 'bg-green-500' },
    { value: '10%', label: 'Events', color: 'bg-blue-500' },
    { value: '1000+', label: 'Community Members', color: 'bg-yellow-500' },
    { value: '200+', label: 'Attendees', color: 'bg-red-500' },
];

export const StatsSection: React.FC<StatsSectionProps> = ({
    heading = 'Empowering local developers through community, learning, and collaboration.',
    subheading = 'Join your Google Developer Group to learn, build, and grow with thousands of developers worldwide.',
    stats = defaultStats,
    className = '',
}) => {
    return (
        <section className={`w-full max-w-[1200px] mx-auto pb-30 sm:pb-44  ${className}`}>
            <div className='w-full'>
                <div className="relative isolate overflow-hidden bg-linear-to-b from-primary/10 to-transparent ">
                    {/* Grid mask / pattern */}
                    <div
                        aria-hidden="true"
                        className="absolute right-0 -left-px -z-20 h-full w-full bg-[linear-gradient(90deg,var(--muted-foreground)_1px,transparent_1px)] [mask-image:linear-gradient(transparent_25%,black_25%,black_75%,transparent_75%)] [background-size:calc(100%/16)_100%] [mask-size:100%_16px] opacity-20 [-webkit-mask-image:linear-gradient(transparent_25%,black_25%,black_75%,transparent_75%)] [-webkit-mask-size:100%_16px]"
                    />
                    <div className="w-full mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="mb-16 max-w-3xl text-3xl leading-10 font-semibold sm:mb-24 md:mx-10">
                            {heading}
                            {subheading && (
                                <span className="font-medium text-primary/50"> {subheading}</span>
                            )}
                        </h2>

                        <div className="relative grid max-w-2xl gap-4  pb-32 sm:grid-cols-2 sm:gap-10 sm:pb-44 md:ml-10 ">
                            {/* Big circular accent */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 -top-[1100px] -left-[calc(1000px-22vw)] -z-10 size-[1500px] rounded-full border border-primary bg-background sm:-top-[480%] sm:-left-[185%] sm:size-[2000px] md:-top-[906%] md:-left-[294%] md:size-[3500px] lg:-top-[1186%] lg:-left-[380%] lg:size-[4500px] xl:-top-[1200%] xl:-left-[350%] 2xl:-top-[1196%] 2xl:-left-[345%] "
                            />

                            {stats.map((s) => (
                                <div key={s.label} className="flex flex-col gap-2">
                                    <span className="flex gap-5 text-3xl font-semibold">
                                        <span aria-hidden="true" className={`relative -left-px w-1 ${s.color} rounded-full`} />
                                        {s.value}
                                    </span>
                                    <p className="pl-5 font-medium text-muted-foreground/80 ">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;