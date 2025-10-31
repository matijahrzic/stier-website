'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;
    let baseRotationSpeed = 0.001; // Auto-rotation speed
    let currentRotationSpeed = baseRotationSpeed;
    let circleRotation = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw 5-pointed star (EU style)
    const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, rotation: number) => {
      let rot = (Math.PI / 2) * 3 + rotation;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        let x = cx + Math.cos(rot) * outerRadius;
        let y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    // Mouse/Touch move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      // Reset mouse position when touch ends
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate center of canvas
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Responsive sizing - bigger on desktop
      const isDesktop = canvas.width > 768;
      const circleRadius = isDesktop
        ? Math.min(canvas.width * 0.35, 400) // Desktop: fixed max size or 35% of width
        : Math.min(canvas.width, canvas.height) * 0.42; // Mobile: 42% of smaller dimension
      const starSize = isDesktop ? 22 : 16; // Bigger stars on desktop

      // Mouse/Touch interaction - like turning a wheel
      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

      if (distanceFromCenter < circleRadius + 250 && mouseX > -500) {
        // Horizontal position controls rotation speed and direction
        const normalizedX = (mouseX / canvas.width - 0.5) * 2; // -1 to 1
        const influence = Math.max(0, 1 - distanceFromCenter / (circleRadius + 250));
        const speedBoost = normalizedX * influence * 0.02;
        currentRotationSpeed = baseRotationSpeed + speedBoost;
      } else {
        // Return to base speed
        currentRotationSpeed += (baseRotationSpeed - currentRotationSpeed) * 0.08;
      }

      // Apply rotation
      circleRotation += currentRotationSpeed;

      // Draw 12 stars in a circle (like EU flag)
      const starCount = 12;
      for (let i = 0; i < starCount; i++) {
        const angle = (i / starCount) * Math.PI * 2 + circleRotation;
        const starX = centerX + Math.cos(angle) * circleRadius;
        const starY = centerY + Math.sin(angle) * circleRadius;

        // Draw star - keep them upright (rotation = 0) to avoid rendering issues
        ctx.fillStyle = 'rgba(255, 215, 0, 0.88)'; // Gold EU color, slightly more opaque
        drawStar(starX, starY, 5, starSize, starSize * 0.38, 0);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-5"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
