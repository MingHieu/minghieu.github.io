import useIsMobile from '@/hooks/useIsMobile';

function Experience() {
  const experiences = [
    {
      time: '2025 - Present',
      company: 'VNPT',
      role: 'Mobile Developer',
      location: 'Vietnam',
    },
    {
      time: '2024 - 2025',
      company: 'Viettel',
      role: 'Mobile Developer',
      location: 'Vietnam',
    },
    {
      time: '2023 - 2024',
      company: 'Heligate',
      role: 'React Native Developer',
      location: 'Vietnam',
    },
    {
      time: '2021 - 2023',
      company: 'Miraisoft',
      role: 'React Native Developer',
      location: 'Vietnam',
    },
  ];
  const isMobile = useIsMobile();

  return (
    <section
      id="experience"
      className="relative py-20 px-6 flex justify-center overflow-hidden"
    >
      <div className="w-full max-w-6xl relative">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold mb-16 tracking-wide text-center bg-gradient-to-r from-[#00ffe5] via-[#33ffe6] to-[#66fff0] text-transparent bg-clip-text"
        >
          Experience
        </h2>

        <div className="absolute lg:left-1/2 top-20 bottom-0 w-[2px] bg-gradient-to-b from-[#00ffe5] via-[#ff4ecd] to-transparent" />

        <div className="relative flex flex-col gap-12">
          {experiences.map(({ time, company, role, location }, index) => {
            const isLeft = index % 2 == 1;

            return (
              <div
                key={company}
                className="relative lg:flex lg:items-center lg:justify-between"
              >
                <div
                  data-aos={
                    isMobile ? 'fade-left' : isLeft ? 'fade-right' : 'fade-left'
                  }
                  data-aos-delay={index * 100}
                  className={`ml-8 px-6 py-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/30 transition duration-300 hover:border-[#00ffe5] hover:shadow-[0_0_20px_#00ffe5] 
              lg:w-[47%]
              ${
                isLeft
                  ? 'lg:mr-auto lg:text-right lg:ml-0'
                  : 'lg:ml-auto lg:text-left lg:mr-0'
              }`}
                >
                  <span className="block text-2xl font-bold text-[#ff4ecd]">
                    {company}
                  </span>
                  <h3 className="text-lg font-medium text-[#00ffe5]">{role}</h3>
                  <span className="block text-sm text-gray-400">{time}</span>
                  <span className="block text-sm text-gray-500 font-light">
                    {location}
                  </span>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="absolute -left-2 lg:left-1/2 top-8 w-5 h-5 rounded-full bg-[#00ffe5] border-2 border-black shadow-[0_0_8px_#00ffe5,0_0_16px_#00ffe5] lg:translate-x-[-50%]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
