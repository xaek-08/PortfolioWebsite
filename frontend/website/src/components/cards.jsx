

function Card({project}) {
  return (
    <>
    <div className="overflow-hidden rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-1 hover:ring-pink-200">
      
      <img
        src={project.image}
        alt={project.imagetitle}
        className="h-48 rounded-2xl object-cover"
      />

      <div className="mt-5 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          {project.title}
        </h3>

        <p className="text-sm leading-6 text-gray-600">
          {project.excerpt}
        </p>

        <a href={project.github_link} className="font-medium text-pink-500 transition-colors hover:text-pink-600 cursor-pointer" >
          View Project →
        </a>
      </div>
      

    </div>
    
    </>
  );
}

export default Card;