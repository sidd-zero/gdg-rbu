import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

const FAQ_DATA = [
    {
        value: 'getting-started',
        question: 'How can you become a part of GDG ?',
        answer: 'We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.'
    },
    {
        value: 'animation-properties',
        question: 'What does a GDG Lead do?',
        answer: 'A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.'
    },
    {
        value: 'advanced-features',
        question: 'How is DSC related to Google?',
        answer: 'A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.'
    },
    {
        value: 'community-support',
        question: 'How to reach us?',
        answer: 'Mail us at "dsc.rknec@gmail.com "'
    }
];

export default function QnA() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-32 sm:pb-44">
            <div className="w-full text-center py-10">
                <h1 className='text-3xl lg:text-4xl font-bold mb-4'>Frequently Asked Questions</h1>
                <svg 
                    width="200" 
                    height="20" 
                    viewBox="0 0 200 20" 
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M10 15 Q30 5 50 10 T90 12 Q110 8 130 12 T170 10 Q185 6 195 10" 
                        stroke="#4F46E5" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <Accordion
                className="flex w-full flex-col gap-4"
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                variants={{
                    expanded: { opacity: 1, scale: 1 },
                    collapsed: { opacity: 0, scale: 0.7 },
                }}
            >
                {FAQ_DATA.map(({ value, question, answer }) => (
                    <AccordionItem key={value} value={value} className="py-4 border-6 rounded-[25px]">
                        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 cursor-pointer px-6 sm:px-8 sm:text-xl">
                            <div className="flex items-center rounded-lg">
                                <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                                <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                                    {question}
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="origin-left">
                            <p className="px-16 py-4 text-secondary-foreground">
                                {answer}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
