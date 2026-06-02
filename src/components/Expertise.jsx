function Expertise() {
  const skills = [
    {
      title: 'Frontend Development',
      keywords: [
        'ReactJS',
        'Remix',
        'SolidJS',
        'Redux',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Tailwind',
        'i18n',
      ],
    },
    {
      title: 'Backend Development',
      keywords: [
        'Node.js',
        'Express',
        'NestJS',
        'Prisma',
        'REST APIs',
        'PostgreSQL',
        'MongoDB',
        'Firebase',
      ],
    },
    {
      title: 'Mobile Development',
      keywords: [
        'React Native',
        'Expo',
        'CodePush',
        'iOS',
        'Android',
        'Swift',
        'Objective-C',
        'Java',
        'Kotlin',
      ],
    },
    {
      title: 'Cloud & DevOps',
      keywords: [
        'AWS',
        'Docker',
        'VPS Hosting',
        'Nginx',
        'PM2',
        'CI/CD',
        'Git',
        'Sentry',
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="relative flex flex-col items-center px-6 py-20 overflow-hidden"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-16 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      >
        Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {skills.map(({ title, keywords }, index) => (
          <div
            key={title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/30 transition duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
