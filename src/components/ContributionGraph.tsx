import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Contribution {
    date: string;
    count: number;
    level: number;
}

const ContributionGraph = () => {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://github-contributions-api.jogruber.de/v4/kiet-ta');
                const data = await response.json();
                // Get last 100 days for a balanced 3D view (not too heavy)
                // Or maybe last 10 weeks? 
                // Let's take the 'contributions' array which is flat.
                // We want a grid. Let's say 10x10 = 100 blocks. 
                if (data.contributions) {
                    // Sort by date just in case
                    const sorted = data.contributions.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
                    // Take last 49 items (7x7 grid)
                    setContributions(sorted.slice(-49));
                }
            } catch (error) {
                console.error("Failed to fetch contributions", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="animate-pulse w-32 h-32 bg-slate-200 rounded-lg"></div>;

    return (
        <div className="relative w-64 h-64 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
            {/* Isometric Container */}
            <div className="relative w-full h-full transform rotate-x-60 rotate-z-45 perspective-1000" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(45deg)' }}>
                <div className="grid grid-cols-7 gap-2">
                    {contributions.map((day, i) => (
                        <motion.div
                            key={day.date}
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{ scaleY: 1, opacity: 1, height: Math.max(10, day.level * 15) }}
                            transition={{ delay: i * 0.02, duration: 0.5 }}
                            className={`w-4 shadow-sm ${day.level === 0 ? 'bg-slate-200' :
                                    day.level === 1 ? 'bg-cyan-200' :
                                        day.level === 2 ? 'bg-cyan-400' :
                                            day.level === 3 ? 'bg-cyan-600' :
                                                'bg-cyan-800'
                                }`}
                            style={{
                                minHeight: '4px',
                                boxShadow: '2px 2px 0px rgba(0,0,0,0.1)'
                            }}
                        >
                            {/* Tooltip on hover? optional */}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-8 text-xs font-mono text-slate-400 text-center w-full">
                Git Contributions (Last 7 Weeks)
            </div>
        </div>
    );
};

export default ContributionGraph;
