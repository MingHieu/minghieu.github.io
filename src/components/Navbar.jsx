import { useEffect, useRef, useState } from 'react';

function Navbar() {
  const navRef = useRef(null);
  const [lightPos, setLightPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Home', 'Expertise', 'Experience', 'Work', 'Blog'];

  const onMouseMove = (e) => {
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLightPos({ x, y });
  };

  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => {
    setHovered(false);
    setHoveredIndex(null);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        data-aos="fade-down"
        ref={navRef}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 w-fit rounded-full backdrop-blur bg-white/5 border border-white/30 z-50 hidden md:flex"
      >
        <div className="flex justify-center items-center px-4 gap-8 relative">
          {menuItems.map((text, i) => {
            const isBlog = text.toLowerCase() === 'blog';
            const href = isBlog ? '/blog/' : `#${text.toLowerCase()}`;
            return (
              <a
                key={text}
                href={href}
                className={`relative rounded-lg p-4 overflow-visible cursor-pointer transition-colors duration-300 ${
                  hoveredIndex === i ? 'neon-glow' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {text}
              </a>
            );
          })}

          <span
            style={{
              left: lightPos.x,
              top: lightPos.y,
              opacity: hovered ? 0.7 : 0,
              transform: hovered
                ? 'translate(-50%, -50%) scale(1)'
                : 'translate(-50%, -50%) scale(0.5)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
            className="pointer-events-none absolute w-20 h-20 bg-white rounded-full blur-3xl"
          />
        </div>
      </nav>

      <nav
        data-aos="fade"
        className="fixed top-6 left-0 right-0 px-6 flex items-center justify-between bg-transparent md:hidden z-50"
      >
        <div className="font-bold text-xl select-none">MingHieu</div>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="relative w-6 h-5 flex items-center justify-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'rotate-45' : '-translate-y-2'
            }`}
            style={{ transformOrigin: 'center' }}
          />

          <span
            className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ transformOrigin: 'center' }}
          />

          <span
            className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? '-rotate-45' : 'translate-y-2'
            }`}
            style={{ transformOrigin: 'center' }}
          />
        </button>
      </nav>

      <div
        className={`fixed top-16 left-6 right-6 rounded-xl backdrop-blur bg-white/10 border border-white/30 overflow-hidden z-40 transition-[max-height,opacity] duration-500 ease-in-out
        ${
          mobileMenuOpen
            ? 'max-h-96 opacity-100 pointer-events-auto'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ transformOrigin: 'top' }}
      >
        <div className="flex flex-col">
          {menuItems.map((text) => {
            const isBlog = text.toLowerCase() === 'blog';
            const href = isBlog ? '/blog/' : `#${text.toLowerCase()}`;
            return (
              <a
                key={text}
                href={href}
                className="px-6 py-3 hover:neon-glow transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
