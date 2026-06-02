function Work() {
  const projects = [
    {
      name: 'eKYC SDK',
      description:
        'An electronic Know Your Customer SDK enabling secure identity verification through OCR, liveness detection, and biometric checks.',
      role: 'iOS Developer',
      image: '/images/ekyc-sdk.png',
    },
    {
      name: 'My Viettel',
      description:
        'A super app for Viettel customers to manage mobile services, pay bills, recharge, and access exclusive digital services.',
      role: 'iOS Developer',
      image: '/images/my-viettel.jpg',
    },
    {
      name: 'My Sign',
      description:
        'A digital signature application that allows users to securely sign, verify, and manage documents on mobile devices.',
      role: 'iOS Developer',
      image: '/images/my-sign.png',
    },
    {
      name: 'vContract',
      description:
        'An e-contract platform supporting online contract creation, signing, and management with legal compliance.',
      role: 'Mobile Developer',
      image: '/images/vcontract.png',
    },
    {
      name: 'Viettel Post CRM',
      description:
        'A CRM solution for Viettel Post to manage customer relationships, streamline operations, and optimize logistics services.',
      role: 'Full Stack Developer',
      image: '/images/vtp-crm.jpg',
    },
    {
      name: 'Shachihata ビジネスチャット',
      description:
        'A business chat platform for Japanese enterprises, providing secure communication and collaboration in the cloud.',
      role: 'Mobile Developer',
      image: '/images/shachihata-chat.webp',
    },
    {
      name: 'Shachihata Cloud',
      description:
        'A cloud-based service for digital stamping, document approval, and workflow automation tailored for Japanese companies.',
      role: 'Mobile Developer',
      image: '/images/shachihata-cloud.png',
    },
    {
      name: 'HAN Booking',
      description:
        'A mobile booking system for HAN Bar, designed for bookers to reserve tables and manage reservations on behalf of customers.',
      role: 'Mobile Developer',
      image: '/images/han-booking.png',
    },
  ];

  return (
    <section id="work" className="relative py-20 px-6 overflow-hidden">
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-16 tracking-wide text-center bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-transparent bg-clip-text"
      >
        Work
      </h2>

      <div className="max-w-[1366px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map(({ name, description, role, image }, index) => (
          <div
            key={name}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="p-4 rounded-lg bg-white/5 border border-white/30 backdrop-blur-md
                   transition-colors duration-300 ease-in-out
                   hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.65)]"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-56 lg:h-40 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              {name}
            </h3>
            <p className="text-gray-300 mb-2">{description}</p>
            <p className="text-amber-400 font-medium">{role}</p>
          </div>
        ))}
      </div>

      <p data-aos="fade" className="mt-12 text-center text-gray-400 italic">
        ... and many more projects
      </p>
    </section>
  );
}

export default Work;
