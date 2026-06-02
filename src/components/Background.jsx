import { useEffect, useRef } from 'react';

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = document.body.scrollHeight;
    canvas.width = width;
    canvas.height = height;

    let stars = [];
    const mouse = { x: null, y: null };

    const createStars = () => {
      const area = width * height;
      const count = Math.floor(area / 14000);

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };

    createStars();

    const onMouseMove = (e) => {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'white';

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      stars.forEach((star, i) => {
        stars.slice(i + 1).forEach((otherStar) => {
          const dist = Math.hypot(star.x - otherStar.x, star.y - otherStar.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.stroke();
          }
        });

        if (mouse.x && mouse.y) {
          const distMouse = Math.hypot(star.x - mouse.x, star.y - mouse.y);
          if (distMouse < 150) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = 'rgba(255, 200, 150, 0.3)';
            ctx.stroke();
          }
        }
      });
    };

    const update = () => {
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;
      });
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    animate();

    let lastWidth = window.innerWidth;

    const onResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      width = window.innerWidth;
      height = document.body.scrollHeight;
      canvas.width = width;
      canvas.height = height;
      createStars();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
}

export default Background;
