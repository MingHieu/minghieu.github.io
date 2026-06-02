function Footer() {
  const menuItems = ['Home', 'Expertise', 'Experience', 'Work', 'Blog'];
  const contacts = [
    {
      label: 'Email',
      value: 'hieulm0612@gmail.com',
      link: 'mailto:hieulm0612@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/MingHieu',
      link: 'https://github.com/MingHieu',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/hieu-le-minh-915a33294',
      link: 'https://linkedin.com/in/hieu-le-minh-915a33294/',
    },
  ];

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300 z-10">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            MingHieu
          </h2>
          <p className="mt-4 text-sm italic text-gray-400">
            "Code is like humor. When you have to explain it, it’s bad."
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {menuItems.map((item) => {
              const isBlog = item.toLowerCase() === 'blog';
              const href = isBlog ? '/blog/' : `#${item.toLowerCase()}`;
              return (
                <li key={item}>
                  <a
                    href={href}
                    className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            {contacts.map(({ label, value, link }) => (
              <li key={label}>
                <a
                  href={link}
                  target={link.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  className="hover:text-amber-400 transition-colors"
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 mt-8 py-4 text-center text-sm text-gray-500 z-10">
        © {new Date().getFullYear()} MingHieu. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
