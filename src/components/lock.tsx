import React, { useState } from 'react';

interface LockModalProps {
    onSuccess: () => void;
    correctBoyfriend: string;
    correctGirlfriend: string;
    correctDate: string;
}

export const LockModal: React.FC<LockModalProps> = ({
    onSuccess,
    correctBoyfriend,
    correctGirlfriend,
    correctDate,
}) => {
    const [boyfriend, setBoyfriend] = useState('');
    const [girlfriend, setGirlfriend] = useState('');
    const [date, setDate] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            boyfriend.trim().toLowerCase() === correctBoyfriend.trim().toLowerCase() &&
            girlfriend.trim().toLowerCase() === correctGirlfriend.trim().toLowerCase() &&
            date.trim() === correctDate.trim()
        ) {
            setIsError(false);
            onSuccess();
        } else {
            setIsError(true);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-center space-y-4 border border-purple-100">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-gray-800">Website Locked</h2>
                    <p className="text-xs text-gray-500">Fill it Correctly to Unlock</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Boyfriend's Name
                        </label>
                        <input
                            type="text"
                            value={boyfriend}
                            onChange={(e) => setBoyfriend(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#bd55f5] text-gray-800"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Girlfriend's Name
                        </label>
                        <input
                            type="text"
                            value={girlfriend}
                            onChange={(e) => setGirlfriend(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#bd55f5] text-gray-800"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Anniversary date
                        </label>
                        <input
                            type="text"
                            placeholder="dd/mm/yyyy"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#bd55f5] text-gray-800 placeholder-gray-400"
                        />
                    </div>

                    {isError && (
                        <p className="text-xs text-red-500 font-semibold text-center pt-1">
                            Incorrect, Access Denied
                        </p>
                    )}

                    <button
                        type="submit"
                        style={{ backgroundColor: '#bd55f5' }}
                        className="w-full py-2.5 mt-2 text-white font-medium rounded-xl transition-all shadow-md active:scale-95 hover:opacity-90"
                    >
                        Enter
                    </button>
                </form>
            </div>
        </div>
    );
};