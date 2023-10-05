import React from "react";


const houseData = [
    {
        title: "SLS Dubai",
        location: "Business Bay, Dubai",
        description: "1BHK starting from AED 4,785,000",
        image: "https://images.pexels.com/photos/13722890/pexels-photo-13722890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    
    {
      title: "Downtown Skyline Residence",
      location: "Downtown Dubai, Dubai",
      description: "3BHK starting from AED 8,950,000",
      image: "https://images.pexels.com/photos/6954292/pexels-photo-6954292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Palm Jumeirah Villa",
      location: "Palm Jumeirah, Dubai",
      description: "4BHK starting from AED 15,500,000",
      image: "https://images.pexels.com/photos/17834486/pexels-photo-17834486/free-photo-of-university-of-north-florida-student-union.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Emirates Hills Mansion",
      location: "Emirates Hills, Dubai",
      description: "6BHK starting from AED 25,000,000",
      image: "https://images.pexels.com/photos/18465390/pexels-photo-18465390/free-photo-of-nature-building-construction-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Jumeirah Beachfront Condo",
      location: "Jumeirah Beach Residence, Dubai",
      description: "2BHK starting from AED 7,500,000",
      image: "https://images.pexels.com/photos/14744196/pexels-photo-14744196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Green Community Villa",
      location: "Green Community, Dubai",
      description: "5BHK starting from AED 12,750,000",
      image: "https://images.pexels.com/photos/6057399/pexels-photo-6057399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        title: "Luxury Apartments in Marina",
        location: "Dubai Marina, Dubai",
        description: "2BHK starting from AED 6,250,000",
        image: "https://images.pexels.com/photos/709767/pexels-photo-709767.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    {
      title: "Arabian Ranches Retreat",
      location: "Arabian Ranches, Dubai",
      description: "4BHK starting from AED 9,200,000",
      image: "https://images.pexels.com/photos/700558/pexels-photo-700558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Downtown Luxury Penthouse",
      location: "Downtown Dubai, Dubai",
      description: "3BHK starting from AED 11,750,000",
      image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  
  


function HouseList() {
  return (
    <div className="super-container mx-auto px-14 py-16">
        <h1 className="page-title">Our Properties</h1>
      <div className="container mx-auto px-4 py-6 grid grid-cols-3 gap-4">
        {houseData.map((house, index) => (
          <div className="house-card" key={index}>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={house.image}
                  alt={house.title}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{house.title}</h2>
                <p>{house.description}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Inquire</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HouseList;
