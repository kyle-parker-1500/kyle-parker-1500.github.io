import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import lightGithub from '../assets/lightGithub.png';
import lightLinkedin from '../assets/lightLinkedin.png';

const Hero = ({ darkMode }) => {
    const socialIcons = [
        { dark: github, light: lightGithub,alt: 'github' },
        { dark: linkedin, light: lightLinkedin, alt: 'linkedin' },
    ];
    
    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
        decorativeCircle: 'bg-orange-500 opacity-10',
    };
    
    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: `text-gray-800 border-2 border-orange-500
        hover:bg-orange-500 hover:text-white`,
        decorativeCircle: 'bg-orange-500 opacity-20',
    };
    
    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <div 
        className='relative overflow-hidden min-h-screen flex flex-col'>
            <section
                id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='body-font z-10'
            >
                <div className='container mx-auto flex px-4 sm:px-8
                lg:px-14 py-12 lg:py-32 flex-col lg:flex items-center justify-between
                lg:mt-0 mt-14'>
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start
                    text-center lg:text-left mb-12 lg:mb-0'>
                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6
                        mb-6 sm:mb-7 w-full '>
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href='#'
                                    target='_blank'
                                    data-aos-delay={`${400 + index * 100}`}
                                    className='transform hover:scale-110 transition-transform
                                    duration-300'
                                >
                                    <img
                                        src={ darkMode ? social.dark : social.light }
                                        alt={social.alt}
                                        className={`w-8 h-8 sm:w-10 m:h-10 object-contain
                                            ${darkMode
                                                ? ''
                                                : 'filter brightness-75'
                                            }`}
                                    />
                                </a>
                            ))}
                        </div>
                        <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4
                            font-bold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay='500'
                        >
                            Hi, I'm Kyle.
                        </h1>
                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md
                            sm:max-w-lg ${theme.textSecondary}`}
                            data-aos='fade-up'
                            data-aos-delay='600'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut vel orci sed libero ullamcorper dapibus eget eu nunc.
                            Pellentesque fermentum ante magna, eget accumsan nibh dignissim sit amet.
                            Integer blandit efficitur risus eget sagittis. Nulla at lacinia nibh.
                            Integer fermentum porta urna et pharetra.
                            Pellentesque efficitur auctor eleifend.
                            Nullam varius at nisi non lobortis. Etiam non ex augue.
                        </p>
                        {/* Buttons */}
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Hero