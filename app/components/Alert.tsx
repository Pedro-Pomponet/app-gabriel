'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AlertProps {
  message: string;
  type: 'error' | 'warning' | 'success';
  onClose: () => void;
}

export function Alert({ message, type, onClose }: AlertProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    success: 'bg-green-100 border-green-500 text-green-700'
  }[type];

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed top-4 right-4 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <div className={`${bgColor} border-l-4 p-4 rounded shadow-lg`}>
          <div className="flex items-center justify-between">
            <p className="font-medium">{message}</p>
            <button
              onClick={onClose}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 