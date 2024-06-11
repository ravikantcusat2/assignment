import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'



function Card({}) {
  const cardData = [
    {
      header: "Coombes",
      price: "$199.00",
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      subtext:"LOUNGE",
      description:"Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
    },
    {
      header: "Keeve Set",
      price: "$199.00",
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      subtext:"TABLE & CHAIRS",
      description:"Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
    },
    {
      header: "NILLE",
      price: "$199.00",
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      subtext:"ARMCHAIR",
      description:"Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
    },
    {
      header: "Blanko",
      price: "$199.00",
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      subtext:"SIDE TABLE",
      description:"Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
    },
    {
      header: "MOMO",
      price: "$199.00",
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
      subtext:"SHELVES",
      description:"Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
    },
    {
      header: " Penemille",
      price: "$199.00",
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
      subtext:"CHAIR",
      description:"Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
    },
    {
      header: "Kappu",
      price: "$199.00",
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
      subtext:"SHELVES",
      description:"Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
    },
    {
      header: " Penemille",
      price: "$199.00",
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
      subtext:"CHAIR",
      description:"Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
    },
    {
      header: "Kappu",
      price: "$199.00",
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
      subtext:"SHELVES",
      description:"Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
    },
  ];
  
    return (
        <>
        <div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
   

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {cardData.map((card, index) => (
      <NavLink
      key={index}
      to="details"
      state={{ cardData: card }}
      className={({isActive}) =>
          `block py-2 pr-4 ${isActive ? "text-orange-700" :"text-gray-700"} pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
      }
  >
       <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white-200 xl:aspect-h-8 xl:aspect-w-7">
         <img src={card.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
       </div>
       <h3 class="-mt-8 p-2.5 z-13 absolute bg-white text-sm text-black-700">{card.header} </h3>
       <div className='flex justify-between'>
       <p class=" text-sm font-normal text-gray-700 p-2.5">{card.subtext}</p>
       <p class="mt-1 text-lg font-medium text-gray-900">{card.price}</p>
       </div>
       
       <div class="mt-2 flex justify-between">
        
         <div class="flex items-center">
           <div class="flex items-center">
            
             <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
             </svg>
             <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
             </svg>
             <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
             </svg>
             <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
             </svg>
             <svg class="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
             </svg>
           </div>
           <p class="sr-only">4 out of 5 stars</p>
           
         </div>
         <div>
         <button className=" py-2 px-4 rounded">
          <img src="https://fonts.gstatic.com/s/i/materialicons/add_shopping_cart/v6/24px.svg" alt="Add to Cart" className="h-5 w-5" />
         </button>
         </div>
       </div>
       
     </NavLink>
     ))}
    

      
    </div>
  </div>
</div>

        </>
    )
}

export default Card
