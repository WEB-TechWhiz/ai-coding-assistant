 import { features } from 'process'
 
 function FeatureGrid() {
   return (
      <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {features.map}((feature,index)=>{
          <div key={index}>
             <div>
              <span>{feature.icon}</span>
             </div>
             <h3 className='text-xl font-semibold text-white mb-2'>{feature.title}</h3>
             <p className='text-gray-300'>{feature.description}</p>
          </div>
        })
      </div>    
    )
 }
 
 export default FeatureGrid