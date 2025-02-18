import React from 'react';

const projects = [
  {
    title: 'Image 1',
    image: '/assets/MBS JOB. 01.JPG',
  },
  {
    title: 'Image 2',
    image: '/assets/MBS JOB. 02.PNG',
  },
  {
    title: 'Image 3',
    image: '/assets/MBS JOB. 03.PNG',
  },
  {
    title: 'Image 4',
    image: '/assets/MBS JOB. 04.png',
  },
  {
    title: 'Image 5',
    image: '/assets/MBS JOB. 05.JPG',
  },
  {
    title: 'Image 6',
    image: '/assets/MBS JOB. 06.JPG',
  },
  {
    title: 'Image 7',
    image: '/assets/MBS JOB. 07.JPG',
  },
  {
    title: 'Image 8',
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
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ aspectRatio: '3/2' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
