import React from 'react';

const projects = [
  {
    title: 'Multi Building',
    image: '/assets/MBS JOB. 01.JPG',
  },
  {
    title: 'Len-to Building',
    image: '/assets/MBS JOB. 02.PNG',
  },
  {
    title: 'Hip Building',
    image: '/assets/MBS JOB. 03.PNG',
  },
  {
    title: 'Overhead Door Building',
    image: '/assets/MBS JOB. 04.png',
  },
  {
    title: 'Single Slope Building',
    image: '/assets/MBS JOB. 05.JPG',
  },
  {
    title: 'Crane and Mezzanine Building',
    image: '/assets/MBS JOB. 06.JPG',
  },
  {
    title: 'Clear Stories Building',
    image: '/assets/MBS JOB. 07.JPG',
  },
  {
    title: 'Warehouse / Mini Storage Buildings',
    image: '/assets/selfe Store.JPG',
  },
];

const Gallery = () => {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Some of Our Works</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful steel detailing projects across various industries
          </p>
        </div>

        {/* Gallery Grid with 2 images per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
              style={{ aspectRatio: '3/2' }}
            >
              {/* Image with hover scale effect */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-75"
              />
              
              {/* Overlay + Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4 transition-all duration-500 group-hover:bg-opacity-70">
                <h3 className="font-bold text-xl md:text-2xl tracking-wide text-white transition-all duration-500 group-hover:text-gray-300">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
