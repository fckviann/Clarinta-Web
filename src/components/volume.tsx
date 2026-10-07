import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VolumeModalProps {
    volume: number;
    onVolumeChange: (newVolume: number) => void;
    onClose: () => void;
}

export const VolumeModal: React.FC<VolumeModalProps> = ({
    volume,
    onVolumeChange,
    onClose,
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-80 rounded-2xl bg-white p-6 shadow-2xl text-center space-y-4">
                <h3 className="text-lg font-bold text-gray-800">Sound Settings</h3>
                <p className="text-xs text-gray-500">Cigarettes After Sex - Sesame Syrup</p>

                <div className="flex items-center space-x-3 justify-center py-2">
                    {volume === 0 ? (
                        <VolumeX className="w-6 h-6 text-red-500 transition-all" />
                    ) : (
                        <Volume2 className="w-6 h-6 transition-all" style={{ color: '#bd55f5' }} />
                    )}

                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                        className="w-full accent-[#bd55f5] cursor-pointer"
                    />
                </div>

                <p className="text-xs font-semibold text-gray-600">
                    {Math.round(volume * 100)}%
                </p>

                <button
                    onClick={onClose}
                    style={{ backgroundColor: '#bd55f5' }}
                    className="w-full py-2 text-white font-medium rounded-xl transition-all shadow-md active:scale-95 hover:opacity-90"
                >
                    Lanjutkan
                </button>
            </div>
        </div>
    );
};