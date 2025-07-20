export default function About() {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      {/* العنوان */}
    

      {/* المحتوى */}
      <div className='Content mt-10 gap-10 flex flex-col md:flex-row justify-between items-center'>
        {/* الصورة */}
        <div className='image relative w-full md:w-1/3 h-[300px] md:h-[400px] bg-gray-800 rounded-r-full after:content-[""] after:absolute after:-left-5 after:-bottom-6 after:bg-orange-700 after:h-[350px] md:after:h-[450px] after:w-16 md:after:w-20 after:rounded-tl-full after:rounded-bl-full after:-z-10'>
        </div>

        {/* النص */}
        <div className='flex-grow w-full md:w-2/3'>
          <p className='w-full md:w-4/5 leading-6 pl-2 text-gray-800/70 font-sans text-sm md:text-base'>
            Motivated and detail-oriented Frontend Developer with hands-on experience in building responsive, user-centered interfaces using modern
            frameworks like React and Next.js. I am known for fast learning, adaptability, and writing clean, maintainable code. Proven ability to collaborate
            effectively within teams and deliver high-quality solutions from concept to deployment. Continuously seeks growth through real-world challenges
            and technical advancement.
          </p>

          <hr className='w-[70%] border-orange-800/60 inline-block p-2 my-3' />

          <p className='w-full md:w-4/5 leading-6 pl-2 text-gray-800/70 font-sans text-sm md:text-base'>
            • Co-founded <strong>Codeverse</strong>, a freelance software development team focused on building modern web applications.  
            • Led the design and development of full-stack projects using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
            • Collaborated with a cross-functional team of designers and developers to deliver client solutions tailored to business needs.  
            • Integrated RESTful APIs, user authentication, and responsive UI using React and Tailwind CSS.  
            • Actively involved in project planning, task distribution, and technical mentoring within the team.
          </p>
        </div>
      </div>
    </div>
  );
}
