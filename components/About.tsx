import portfolioData from '@/data/portfolio.json'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {portfolioData.about}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card-gradient rounded-xl p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">
                  {portfolioData.experience}+
                </h3>
                <p className="text-gray-300">Year of Experience</p>
              </div>
              
              <div className="card-gradient rounded-xl p-6">
                <h3 className="text-lg font-semibold text-pink-400 mb-2">
                  Current Role
                </h3>
                <p className="text-gray-300">{portfolioData.currentRole}</p>
              </div>
            </div>
          </div>
          
          <div className="card-gradient rounded-xl p-8">
            <h3 className="text-2xl font-bold gradient-text mb-6">Key Highlights</h3>
            <ul className="space-y-4">
              {portfolioData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About