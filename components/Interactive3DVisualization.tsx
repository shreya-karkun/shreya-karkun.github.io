'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
  Brain, 
  Activity, 
  BarChart3, 
  TrendingUp, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut,
  Play,
  Pause,
  Settings
} from 'lucide-react';

interface DataPoint {
  x: number;
  y: number;
  z: number;
  value: number;
  label: string;
  color: string;
}

interface Visualization3DProps {
  title: string;
  description: string;
  data: DataPoint[];
  type: 'brain' | 'trajectory' | 'heatmap' | 'scatter';
}

export default function Interactive3DVisualization({ 
  title, 
  description, 
  data, 
  type 
}: Visualization3DProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<DataPoint | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [30, -30]);
  const rotateY = useTransform(mouseX, [-300, 300], [-30, 30]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setRotation(prev => ({
          x: prev.x + 1,
          y: prev.y + 0.5
        }));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const resetView = () => {
    setRotation({ x: 0, y: 0 });
    setZoom(1);
    setIsPlaying(false);
  };

  const renderVisualization = () => {
    switch (type) {
      case 'brain':
        return (
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Brain structure */}
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                scale: zoom,
              }}
              animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {/* Brain outline */}
              <div className="w-64 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm" />
              
              {/* Neural pathways */}
              {data.map((point, index) => (
                <motion.div
                  key={index}
                  className="absolute w-2 h-2 rounded-full cursor-pointer"
                  style={{
                    left: `${50 + point.x * 20}%`,
                    top: `${50 + point.y * 20}%`,
                    backgroundColor: point.color,
                    boxShadow: `0 0 20px ${point.color}`,
                  }}
                  whileHover={{ scale: 1.5 }}
                  onClick={() => setSelectedPoint(point)}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                />
              ))}
              
              {/* Brain icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-32 h-32 text-purple-600/30" />
              </div>
            </motion.div>
          </div>
        );

      case 'trajectory':
        return (
          <div className="relative w-full h-96 flex items-center justify-center">
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                scale: zoom,
              }}
              animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {/* Trajectory path */}
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <motion.path
                  d={`M ${data[0]?.x * 100 + 200} ${data[0]?.y * 100 + 150} ${data.map(point => `L ${point.x * 100 + 200} ${point.y * 100 + 150}`).join(' ')}`}
                  stroke="url(#trajectoryGradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                />
                
                {/* Data points */}
                {data.map((point, index) => (
                  <motion.circle
                    key={index}
                    cx={point.x * 100 + 200}
                    cy={point.y * 100 + 150}
                    r="4"
                    fill={point.color}
                    className="cursor-pointer"
                    whileHover={{ r: 8 }}
                    onClick={() => setSelectedPoint(point)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  />
                ))}
                
                <defs>
                  <linearGradient id="trajectoryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        );

      case 'heatmap':
        return (
          <div className="relative w-full h-96 flex items-center justify-center">
            <motion.div
              className="relative grid grid-cols-8 gap-2"
              style={{
                rotateX,
                rotateY,
                scale: zoom,
              }}
              animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {Array.from({ length: 64 }).map((_, index) => {
                const x = index % 8;
                const y = Math.floor(index / 8);
                const point = data.find(d => Math.abs(d.x - x) < 0.5 && Math.abs(d.y - y) < 0.5);
                const intensity = point ? point.value : Math.random() * 0.5;
                
                return (
                  <motion.div
                    key={index}
                    className="w-8 h-8 rounded cursor-pointer"
                    style={{
                      backgroundColor: `rgba(59, 130, 246, ${intensity})`,
                    }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => point && setSelectedPoint(point)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.01 }}
                  />
                );
              })}
            </motion.div>
          </div>
        );

      case 'scatter':
        return (
          <div className="relative w-full h-96 flex items-center justify-center">
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                scale: zoom,
              }}
              animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {data.map((point, index) => (
                <motion.div
                  key={index}
                  className="absolute w-4 h-4 rounded-full cursor-pointer"
                  style={{
                    left: `${50 + point.x * 100}%`,
                    top: `${50 + point.y * 100}%`,
                    backgroundColor: point.color,
                    boxShadow: `0 0 20px ${point.color}`,
                  }}
                  whileHover={{ scale: 1.5 }}
                  onClick={() => setSelectedPoint(point)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            {title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
          
          <motion.button
            onClick={() => setZoom(prev => Math.min(prev + 0.2, 2))}
            className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ZoomIn className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.5))}
            className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ZoomOut className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            onClick={resetView}
            className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* 3D Visualization */}
      <div
        ref={containerRef}
        className="relative w-full h-96 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        {renderVisualization()}
        
        {/* Instructions */}
        <div className="absolute bottom-4 left-4 text-xs text-zinc-500 dark:text-zinc-400">
          Move mouse to rotate • Click points for details
        </div>
      </div>

      {/* Data point details */}
      {selectedPoint && (
        <motion.div
          className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
            {selectedPoint.label}
          </h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-zinc-600 dark:text-zinc-400">X:</span>
              <span className="ml-2 font-mono">{selectedPoint.x.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-zinc-600 dark:text-zinc-400">Y:</span>
              <span className="ml-2 font-mono">{selectedPoint.y.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-zinc-600 dark:text-zinc-400">Z:</span>
              <span className="ml-2 font-mono">{selectedPoint.z.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-zinc-600 dark:text-zinc-400">Value:</span>
            <span className="ml-2 font-mono">{selectedPoint.value.toFixed(3)}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
