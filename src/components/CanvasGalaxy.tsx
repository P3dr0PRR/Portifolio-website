import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; tw: number; ph: number };
type Dust = { x: number; y: number; r: number; vx: number; vy: number; a: number };
type Blob = { x: number; y: number; r: number; vx: number; vy: number; c1: string; c2: string };

export function CanvasGalaxy() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasElement = canvas;
    const context = ctx;

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let DPR = 1;

    let stars: Star[] = [];
    let dust: Dust[] = [];
    let blobs: Blob[] = [];

    const getCounts = () => {
      const area = window.innerWidth * window.innerHeight;
      const scale = Math.min(1, Math.max(0.6, area / (1280 * 720)));
      return {
        stars: Math.floor(220 * scale),
        dust: Math.floor(70 * scale),
        blobs: 5,
      };
    };

    function resize() {
      const root = document.documentElement;
      W = root.clientWidth || window.innerWidth;
      H = root.clientHeight || window.innerHeight;
      DPR = Math.min(2, Math.max(1, Math.floor(window.devicePixelRatio || 1)));

      canvasElement.style.width = `${W}px`;
      canvasElement.style.height = `${H}px`;
      canvasElement.width = Math.floor(W * DPR);
      canvasElement.height = Math.floor(H * DPR);

      context.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function initScene() {
      const { stars: STAR_COUNT, dust: DUST_COUNT, blobs: BLOB_COUNT } = getCounts();

      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: rand(0, W),
        y: rand(0, H),
        r: rand(0.4, 1.7),
        a: rand(0.08, 0.85),
        tw: rand(0.002, 0.012),
        ph: rand(0, Math.PI * 2),
      }));

      dust = Array.from({ length: DUST_COUNT }, () => ({
        x: rand(0, W),
        y: rand(0, H),
        r: rand(1.0, 2.8),
        vx: rand(-0.08, 0.08),
        vy: rand(-0.06, 0.06),
        a: rand(0.02, 0.10),
      }));

      const minSide = Math.min(W, H);
      blobs = Array.from({ length: BLOB_COUNT }, () => ({
        x: rand(W * 0.15, W * 0.85),
        y: rand(H * 0.15, H * 0.85),
        r: rand(minSide * 0.18, minSide * 0.38),
        vx: rand(-0.03, 0.03),
        vy: rand(-0.03, 0.03),
        c1: `rgba(168, 85, 247, ${rand(0.10, 0.20)})`,
        c2: `rgba(34, 211, 238, ${rand(0.06, 0.16)})`,
      }));
    }

    function drawBackground() {
      context.fillStyle = "#05040a";
      context.fillRect(0, 0, W, H);

      const g = context.createRadialGradient(W * 0.5, H * 0.4, 20, W * 0.5, H * 0.4, Math.max(W, H));
      g.addColorStop(0, "rgba(90, 60, 160, 0.12)");
      g.addColorStop(0.55, "rgba(0, 0, 0, 0.00)");
      g.addColorStop(1, "rgba(0, 0, 0, 0.65)");
      context.fillStyle = g;
      context.fillRect(0, 0, W, H);
    }

    function drawNebula() {
      context.save();
      context.globalCompositeOperation = "screen";

      for (const b of blobs) {
        const g1 = context.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g1.addColorStop(0, b.c1);
        g1.addColorStop(1, "rgba(0,0,0,0)");
        context.fillStyle = g1;
        context.beginPath();
        context.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        context.fill();

        const x2 = b.x + b.r * 0.25;
        const y2 = b.y - b.r * 0.18;
        const g2 = context.createRadialGradient(x2, y2, 0, x2, y2, b.r * 0.9);
        g2.addColorStop(0, b.c2);
        g2.addColorStop(1, "rgba(0,0,0,0)");
        context.fillStyle = g2;
        context.beginPath();
        context.arc(x2, y2, b.r * 0.9, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();
    }

    function drawStars(t: number) {
      for (const s of stars) {
        const twinkle = 0.55 + 0.45 * Math.sin(t * s.tw + s.ph);
        const alpha = s.a * twinkle;

        context.fillStyle = `rgba(255,255,255,${alpha})`;
        context.beginPath();
        context.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        context.fill();
      }
    }

    function drawDust() {
      context.save();
      context.globalCompositeOperation = "lighter";
      for (const p of dust) {
        context.fillStyle = `rgba(255,255,255,${p.a})`;
        context.beginPath();
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
    }

    let t = 0;

    function update() {
      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < W * 0.05 || b.x > W * 0.95) b.vx *= -1;
        if (b.y < H * 0.05 || b.y > H * 0.95) b.vy *= -1;
      }

      for (const p of dust) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
      }
    }

    function render() {
      context.clearRect(0, 0, W, H);
      drawBackground();
      drawNebula();
      drawStars(t);
      drawDust();
    }

    function loop() {
      t += 1;
      update();
      render();
      rafRef.current = requestAnimationFrame(loop);
    }

    function start() {
      resize();
      initScene();
      t = 0;
      render();

      if (!prefersReducedMotion) {
        rafRef.current = requestAnimationFrame(loop);
      }
    }

    start();

    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      start();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
