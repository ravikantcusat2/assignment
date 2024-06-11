import React from 'react'
import { useLocation } from 'react-router-dom'


function CardDetails({}) {
    
   
    const { cardData } = useLocation().state;
    
    return (
        <>
<div class="bg-white">
  <div class="pt-6">
    
    <div class=" flex m-8 gap-16 items-center">
      <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden w-1/2 lg:block">
        <img src={cardData.image} alt="Two" class="h-full w-full object-cover object-left"/>
      </div>
      <div className='p-8 -mt-48 aspect-h-4 aspect-w-3 bg-orange-200 items-center'>&rarr;</div>
      <div className='items-left flex w-1/2 flex-col -mt-48'>
          <h3 class="text-orange-700 mb-2"> Kappu regular chair  </h3>
          <h1 className='text-black-700 font-bold text-2xl mb-4'>{cardData.header}</h1>
          <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. setter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>

          <div className='mt-8'>
            <label className='text-gray'>Color</label>

            <fieldset aria-label="Choose a color" class="mt-4">
              <div class="flex items-center space-x-3">
               
                <label aria-label="White" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                  <input type="radio" name="color-choice" value="White" class="sr-only"/>
                  <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"></span>
                </label>
               
                <label aria-label="Gray" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                  <input type="radio" name="color-choice" value="Gray" class="sr-only"/>
                  <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"></span>
                </label>
                
                <label aria-label="Black" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
                  <input type="radio" name="color-choice" value="Black" class="sr-only"/>
                  <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
                </label>
              </div>
            </fieldset>
          </div>
          <p className='mt-10 text-gray'>price per unit</p>
          <div className='flex gap-20 items-center'>
            <span className='font-medium text-black  '>{cardData.price}</span>
            <button type="submit" class=" flex  items-center justify-center  border border-transparent bg-black px-8 py-3 text-base font-medium text-white ">Buy Now</button>
            <img src='https://fonts.gstatic.com/s/i/materialicons/add_shopping_cart/v6/24px.svg'/>
          </div>
          
       </div>
       
       
     
    </div>

   
    
  </div>
</div>

        </>
    )
}

export default CardDetails
