"use client";
import { useState, useCallback } from "react";
import type React from "react";

import Spline from "@splinetool/react-spline";

interface SplineLoaderProps {
  scene: string;
  className?: string;
  fallbackContent?: React.ReactNode;
}

const SplineLoader: React.FC<SplineLoaderProps> = ({
  scene,
  className = "",
  fallbackContent,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  if (!scene) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {fallbackContent || (
          <div className="text-center text-gray-400">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <p>3D Model Unavailable</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0B0C10] z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#66FCF1] mx-auto mb-4"></div>
            <p className="text-[#66FCF1] text-sm">Loading 3D Model...</p>
          </div>
        </div>
      )}

      {hasError ? (
        <div className="flex items-center justify-center h-full">
          {fallbackContent || (
            <div className="text-center text-gray-400">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <p>Failed to load 3D model</p>
            </div>
          )}
        </div>
      ) : (
        <Spline
          scene={scene}
          onLoad={onLoad}
          onError={onError}
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default SplineLoader;
