import { InfiniteSlider } from '@/components/ui/infinte-slider';

const data =[
  {
    src:'/slider/android-developers.svg',
    alt:'Android Developer logo'
  },
  {
    src:'/slider/flutter.svg',
    alt:'Flutter logo'
  },
  {
    src:'/slider/firebase.svg',
    alt:'Firebase logo'
  },
  {
    src:'/slider/google-cloud.svg',
    alt:'Google Cloud logo'
  },
  {
    src:'/slider/tensorflow.svg',
    alt:'TensorFlow logo'
  },

]


export default function Tech() {
  return (
    <div className='w-full max-w-7xl mx-auto px-6 lg:px-8 pb-32 sm:pb-44'>
      <div className="text-center mb-20">
        <h1 className='text-3xl lg:text-4xl font-bold'>Technologies</h1>
        <svg 
          className="mx-auto mt-2" 
          width="120" 
          height="12" 
          viewBox="0 0 120 12" 
          fill="none"
        >
          <path 
        d="M2 8c20-4 40-6 60-2s40 6 56 2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        fill="none"
          />
        </svg>
      </div>
    <InfiniteSlider gap={44} reverse>
      {data.map((item, index) => (
      <img 
        key={index}
        src={item.src} 
        alt={item.alt} 
        className="h-12 w-auto object-contain" 
        />
      ))}
    </InfiniteSlider>
    </div>
  );
}
