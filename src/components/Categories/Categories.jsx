import React from 'react';

const Category = [
  {
    id: 1,
    img: 'https://image.shutterstock.com/image-photo/classic-mens-laceup-shoes-sneakers-260nw-2497446475.jpg', // Add the image path
    title: 'Sneakers',
    slug: '/sneakers'
  },
  {
    id: 2,
    img: 'https://as1.ftcdn.net/v2/jpg/00/58/24/54/1000_F_58245420_KriXmYEczt258DvW4WmSRgeYpG5eUIZf.jpg',
    title: 'Boots',
    slug: '/boots'
  },
  {
    id: 3,
    img: 'https://t4.ftcdn.net/jpg/03/05/51/51/360_F_305515197_M2hy40zcBVYXHkInjrzKVlYQb2ionJ40.jpg',
    title: 'Loafers',
    slug: '/loafers'
  },
  {
    id: 4,
    img: 'https://www.shutterstock.com/image-photo/tan-genuine-leather-sandals-pair-260nw-2294398155.jpg',
    title: 'Sandals',
    slug: '/sandals'
  },
  {
    id: 5,
    img: 'https://www.kindpng.com/picc/m/48-481776_black-stilettos-ladies-shoes-high-heels-hd-png.png',
    title: 'Heels',
    slug: '/heels'
  },
  {
    id: 6,
    img: 'https://img.freepik.com/premium-photo/black-slip-slippers-sandals-isolated-white-background-blank-no-label-mock-up-design_342973-23.jpg',
    title: 'Slippers',
    slug: '/slippers'
  },
  {
    id: 7,
    img: 'https://img.freepik.com/premium-photo/stylish-twist-crocs-shoes-with-iconic-holes-heel-wheel-classic-white-background_983420-133128.jpg',
    title: 'Crocs',
    slug: '/crocs'
  }
];

const Categories = () => {
  return (
    <>
      <div className="max-w-[1540px] mx-auto p-4">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {Category.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              {/* Image in a rounded circle */}
              <div className="rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title below the circle */}
              <p className="mt-2 text-center text-sm lg:text-base font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
