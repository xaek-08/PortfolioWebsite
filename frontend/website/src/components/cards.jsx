

function Card({project}) {
  return (
    <>
    <article className="overflow-hidden rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-1 hover:ring-pink-200">
      
      <img
        src={project.image}
        alt={project.image_title}
        className="h-48 rounded-2xl object-cover"
      />
      
      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
        {project.featured && (
          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700">
            ⭐ Featured
          </span>
        )}

      </div>
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
      

    </article>
    
    </>
  );
}

export default Card;