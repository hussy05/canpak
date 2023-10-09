import ProductCard from '@/components/productCard';
import React from 'react';

const data = [
  {
    imageUrl: "/images/icons.png",
    line: "/images/Line.png",
    heading: "General Liability",
    subHeading: "Protect your business in the event you inadvertently cause a physical injury to a customer, or if you damage someone's property."
  },
  {
    imageUrl: "/images/icon.png",
    line: "/images/Line.png",
    heading: "Property Insurance",
    subHeading: "Protect your company's physical assets from many unforeseen events, such as fire, explosion, storms, theft and vandalism."
  },
  {
    imageUrl: "/images/icon3.png",
    line: "/images/Line.png",
    heading: "Product Liability",
    subHeading: "Protects you when someone is injured by a product you produce, resell, distribute, or wholesale, assuming the injury is proven to be caused by your product."
  },
  {
    imageUrl: "/images/icon4.png",
    line: "/images/Line.png",
    heading: "Commercial Auto",
    subHeading: "Cover your legal fees and other expenses if a bussiness-owned vehicle is involved in an accident."
  }
]

const ProductSection = () => {
  return (
    <div className="py-[125px]"
    // style={{ backgroundImage: 'url("/images/cannapak_background.svg")', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}

    >
      <div className='mx-auto max-w-screen-sm md:max-w-screen-lg py-[64px] px-[45px]'>

        <p className='text-[35px] text-[#FFFFFF] text-extrabold text-center'>Cannabis Insurance Products Offered:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center flex mt-[100px]">
          {
            data?.map((item, index) => {
              return (
                <ProductCard item={item} key={index} />

              )
            })
          }
        </div>

      </div>
    </div>
  );
};

export default ProductSection;
