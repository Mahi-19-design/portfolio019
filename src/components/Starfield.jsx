import { useEffect, useRef } from 'react';
import '../styles/starfield.css';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const getHue = (t) => {
            if (t === 'purple') return 280;
            if (t === 'gold') return 45;
            return 195; // Default Cyan
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const numStars = 800;
        const stars = [];
        const baseHue = getHue('cyan');

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width * 2 - canvas.width,
                y: Math.random() * canvas.height * 2 - canvas.height,
                z: Math.random() * canvas.width,
                radius: Math.random() * 1.5 + 0.5,
                color: `hsla(${baseHue + (Math.random() * 40 - 20)}, 100%, 80%, ${Math.random() * 0.8 + 0.2})`
            });
        }

        const animate = () => {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter';

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            stars.forEach(star => {
                star.z -= 1.5;

                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width * 2 - canvas.width;
                    star.y = Math.random() * canvas.height * 2 - canvas.height;
                }

                const k = 120.0 / star.z;
                const px = star.x * k + cx;
                const py = star.y * k + cy;
                const radius = star.radius * k;

                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
                    ctx.beginPath();
                    ctx.arc(px, py, radius, 0, Math.PI * 2);
                    ctx.fillStyle = star.color;
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="starfield-wrapper visible" style={{
            opacity: 1,
            transition: 'opacity 0.8s ease-in-out',
            pointerEvents: 'none'
        }}>
            <div className="nebula-bg" style={{
                background: `radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)`,
                opacity: 0.2
            }}></div>
            <canvas ref={canvasRef} className="starfield-canvas" />
        </div>
    );
};

export default Starfield;
