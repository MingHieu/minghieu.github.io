import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import { useEffect, useState } from 'react';

function getBrowserInfo(ua) {
  const browserRegex =
    /(firefox|msie|trident|chrome|safari|opr|edg)\/?\s*(\d+)/i;
  const match = ua.match(browserRegex);
  if (!match) return 'Unknown browser';
  let browser = match[1];
  let version = match[2];
  if (/trident/i.test(browser)) {
    browser = 'IE';
  } else if (browser.toLowerCase() === 'opr') {
    browser = 'Opera';
  } else if (browser.toLowerCase() === 'edg') {
    browser = 'Edge';
  }
  return `${browser} ${version}`;
}

function Hero() {
  const [visitor, setVisitor] = useState({
    ip: 'loading...',
    platform: navigator.platform || 'unknown',
    browser: 'loading...',
  });
  const [isHacker, setIsHacker] = useState(false);
  const contacts = [
    { href: 'https://github.com/MingHieu', alt: 'GitHub' },
    {
      href: 'https://linkedin.com/in/hieu-le-minh-915a33294/',
      alt: 'LinkedIn',
    },
    { href: 'mailto:hieulm0612@gmail.com', alt: 'Email' },
  ];

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => {
        const ip = data.ip || 'unknown';
        const ua = navigator.userAgent;
        const platform = navigator.platform || 'unknown';
        const browser = getBrowserInfo(ua);
        setVisitor({ ip, platform, browser });
        setIsHacker(ip.includes('1337'));
      })
      .catch(() => {
        setVisitor({
          ip: 'unknown',
          platform: navigator.platform || 'unknown',
          browser: 'unknown',
        });
        setIsHacker(false);
      });
  }, []);

  const code = `const visitor = {
  ip: "${visitor.ip}",
  platform: "${visitor.platform}",
  browser: "${visitor.browser}"
};

const isHacker = visitor.ip.includes("1337");

if (isHacker) {
  throw new Error("🚫 Access Denied");
} else {
  console.log("✅ Welcome, human!");
}`;
  const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-6 pt-16 lg:pt-0 gap-12">
        <div
          data-aos="fade"
          className="max-w-xl space-y-5 text-center lg:text-left"
        >
          <p className="text-sm text-gray-400">HI THERE 👋 I'M</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#ff6188] via-[#ffd866] to-[#78dce8] text-transparent bg-clip-text">
            MingHieu
          </h1>
          <p className="text-lg sm:text-xl text-[#7aa2f7] font-semibold">
            SOFTWARE ENGINEER
          </p>
          <p>
            I'm a software engineer based in Vietnam, specializing in building
            high-performance, secure applications for both mobile and web
            platforms, with a strong focus on reliability and exceptional user
            experience.
          </p>
          <div className="flex justify-center lg:justify-start items-end gap-6 pt-2">
            {contacts.map(({ href, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={alt}
              >
                <img
                  src={`/images/${alt.toLowerCase()}.png`}
                  alt={alt}
                  className="w-8 filter invert opacity-50 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>

        <div
          data-aos="fade"
          className="bg-black rounded-lg p-4 shadow-xl border border-gray-700 max-w-xl w-full font-mono text-sm break-words"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          <pre className="overflow-x-auto whitespace-pre-wrap break-words">
            <code dangerouslySetInnerHTML={{ __html: html }} />
          </pre>

          <div className="mt-4 p-3 bg-gray-900 rounded text-green-400">
            {isHacker ? (
              <span>🚫 Access Denied — Suspicious IP detected!</span>
            ) : (
              <span>✅ Welcome, human! Your IP looks safe.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
