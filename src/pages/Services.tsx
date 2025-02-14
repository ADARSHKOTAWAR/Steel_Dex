import React from 'react';
import { Warehouse, Home, Plane, Building, Train, Car, Building2, Factory } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Mini Storage Building',
    description:
      'Our mini storage building detailing services provide compact, efficient, and secure storage solutions. Designed with precision, these structures offer durability and flexibility to meet diverse storage needs while optimizing space utilization.',
    image: 'assets/services1 (1).webp',
  },
  {
    icon: Warehouse,
    title: 'Warehouse Buildings',
    description:
      'We specialize in steel detailing for warehouse buildings, focusing on high-capacity designs that ensure functionality, durability, and seamless operations. Our solutions cater to a variety of industries, helping streamline logistics and optimize storage.',
    image: 'assets/services1 (2).webp',
  },
  {
    icon: Plane,
    title: 'Aircraft Hangar',
    description:
      'With expertise in steel detailing for aircraft hangars, we deliver robust and spacious designs tailored to aviation requirements. Our solutions ensure safety, longevity, and functionality, adhering to the highest industry standards.',
    image: 'assets/services1 (3).webp',
  },
  {
    icon: Building,
    title: 'Structural',
    description:
      'Our structural detailing services create the backbone of resilient constructions, ensuring precision and stability. From initial designs to final implementation, we prioritize accuracy and strength in every project.',
    image: 'assets/services1 (5).webp',
  },
  {
    icon: Train,
    title: 'Railway Platform Shelters',
    description:
      'Engineered for safety and durability, our railway platform shelters combine robust steel detailing with architectural finesse. These structures provide reliable and aesthetically pleasing solutions for public infrastructure.',
    image: 'assets/services1 (6).webp',
  },
  {
    icon: Car,
    title: 'Multi-level Garages',
    description:
      'We design multi-level parking structures with meticulous steel detailing to maximize space efficiency and durability. Our solutions ensure the construction of safe, functional, and long-lasting garages tailored to modern requirements.',
    image: 'assets/services1 (4).webp',
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    description:
      'Our commercial building detailing services are customized to meet modern architectural demands, focusing on aesthetics, structural reliability, and functionality. We deliver designs that enhance the usability and visual appeal of commercial spaces.',
    image: 'assets/services1 (7).webp',
  },
  {
    icon: Factory,
    title: 'Industrial Sheds',
    description:
      'We provide specialized steel detailing for industrial sheds, ensuring optimal strength, durability, and functionality. Our expertise helps in constructing efficient spaces for manufacturing and storage needs.',
    image: 'assets/services1 (8).webp',
  },
  {
    icon: Building,
    title: 'Sports Complex Structures',
    description:
      'Our sports complex detailing services focus on delivering robust and visually appealing steel structures for stadiums, arenas, and recreational facilities, ensuring both safety and aesthetics.',
    image: 'assets/services1 (9).webp',
  },
];

const Services = () => {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive steel detailing solutions tailored to meet your specific project requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-auto overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <service.icon className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;