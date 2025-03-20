
import React, { useEffect, useRef } from 'react';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create gradient circles
    const circles: { x: number; y: number; radius: number; vx: number; vy: number; color: string }[] = [];
    
    const colors = [
      'rgba(240, 240, 245, 0.6)', 
      'rgba(245, 245, 250, 0.5)', 
      'rgba(240, 248, 255, 0.7)'
    ];
    
    // Create initial circles
    for (let i = 0; i < 5; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 300 + 100,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw each circle
      circles.forEach(circle => {
        // Update position
        circle.x += circle.vx;
        circle.y += circle.vy;
        
        // Bounce off edges
        if (circle.x < 0 || circle.x > width) circle.vx *= -1;
        if (circle.y < 0 || circle.y > height) circle.vy *= -1;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0, 
          circle.x, circle.y, circle.radius
        );
        
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}
    />
  );
};

export default AnimatedGradient;
