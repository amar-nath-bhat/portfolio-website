const ProjectCard: React.FC = () => {
  return (
    <section className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
      {/* Project Image */}
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400"
        alt="Project Thumbnail"
      />

      {/* Project Content */}
      <div className="p-6">
        <h3 className="font-semibold text-2xl mb-2">Project Title</h3>
        <p className="text-gray-700 mb-4">
          This is a brief description of the project that highlights its main
          features and purpose. It provides an overview to attract interest.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Project
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
