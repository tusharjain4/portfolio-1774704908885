import portfolioData from '@/data/portfolio.json'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white">
                {portfolioData.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">{portfolioData.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            {portfolioData.role}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            {portfolioData.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="btn-gradient px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero