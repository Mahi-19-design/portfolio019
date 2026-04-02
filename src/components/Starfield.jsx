import { useEffect, useRef } from 'react';
import '../styles/starfield.css';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Track mouse position with smooth easing
        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let mouseX = targetX;
        let mouseY = targetY;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            targetX = canvas.width / 2;
            targetY = canvas.height / 2;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const stars = [];
        const numStars = 800; // Increased star count

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width * 2 - canvas.width,
                y: Math.random() * canvas.height * 2 - canvas.height,
                z: Math.random() * canvas.width,
                radius: Math.random() * 1.5 + 0.5,
                color: `hsla(${Math.random() * 60 + 190}, 100%, 80%, ${Math.random() * 0.8 + 0.2})`
            });
        }

        const animate = () => {
            // Make the canvas transparent but keep trails using destination-out
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter'; // source-over but makes stars glow

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            // Smoothly ease mouse coordinates for parallax
            mouseX += (targetX - mouseX) * 0.05;
            mouseY += (targetY - mouseY) * 0.05;

            const mx = (mouseX - cx) * 0.1;
            const my = (mouseY - cy) * 0.1;

            stars.forEach(star => {
                // Move stars towards viewport
                star.z -= 2;

                // Reset star when it flies past user
                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width * 2 - canvas.width;
                    star.y = Math.random() * canvas.height * 2 - canvas.height;
                }

                // 3D to 2D projection factoring in mouse parallax
                const k = 120.0 / star.z;
                const px = (star.x - mx) * k + cx;
                const py = (star.y - my) * k + cy;

                const radius = star.radius * k;

                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height && radius > 0) {
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
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="starfield-wrapper">
            <div className="nebula-bg"></div>
            
            {/* Ambient shooting stars layer */}
            <div className="shooting-star" style={{ top: '10%', left: '80%', animationDelay: '0s' }}></div>
            <div className="shooting-star" style={{ top: '30%', left: '90%', animationDelay: '2s' }}></div>
            <div className="shooting-star" style={{ top: '15%', left: '40%', animationDelay: '4s' }}></div>
            <div className="shooting-star" style={{ top: '-10%', left: '60%', animationDelay: '6s' }}></div>
            
            <canvas ref={canvasRef} className="starfield-canvas" />
        </div>
    );
};

export default Starfield;
