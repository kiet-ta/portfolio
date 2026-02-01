import { useState, useEffect } from 'react';


interface Contribution {
    date: string;
    count: number;
    level: number;
}

interface Week {
    days: (Contribution | null)[];
}

const ContributionGraph = () => {
    const [weeks, setWeeks] = useState<Week[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalContributions, setTotalContributions] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://github-contributions-api.jogruber.de/v4/kiet-ta');
                const data = await response.json();

                if (data.contributions) {
                    // Create a map for fast lookup
                    const contributionMap = new Map<string, Contribution>();
                    // Also filter out any future dates from the API
                    const today = new Date();
                    today.setHours(23, 59, 59, 999); // End of today

                    let total = 0;

                    data.contributions.forEach((c: any) => {
                        if (new Date(c.date) <= today) {
                            contributionMap.set(c.date, c);
                        }
                    });

                    // Generate last 28 weeks (approx 6-7 months)
                    // We want to end on "This Week" (current week)
                    // Standard GitHub graph starts Sunday (?) or Monday. Let's stick to Sunday start for consistency.
                    const generatedWeeks: Week[] = [];
                    const end = new Date();

                    // Start from 28 weeks ago
                    const start = new Date(end);
                    start.setDate(end.getDate() - (28 * 7));

                    // Align start to the previous Sunday
                    while (start.getDay() !== 0) {
                        start.setDate(start.getDate() - 1);
                    }

                    // Iterate week by week
                    for (let w = 0; w < 28; w++) {
                        const days: (Contribution | null)[] = [];
                        for (let d = 0; d < 7; d++) {
                            const currentDay = new Date(start);
                            currentDay.setDate(start.getDate() + (w * 7) + d);

                            const dateStr = currentDay.toISOString().split('T')[0];
                            const contribution = contributionMap.get(dateStr);

                            if (currentDay > today) {
                                // Future day in current week
                                days.push(null);
                            } else {
                                if (contribution) {
                                    total += contribution.count;
                                    days.push(contribution);
                                } else {
                                    // Empty past day
                                    days.push({ date: dateStr, count: 0, level: 0 });
                                }
                            }
                        }
                        generatedWeeks.push({ days });
                    }

                    setWeeks(generatedWeeks);
                    // If available in API total object, we could use that, but visual sum is better for context
                    setTotalContributions(total);
                }
            } catch (error) {
                console.error("Failed to fetch contributions", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="animate-pulse w-96 h-48 bg-slate-200 rounded-lg"></div>;

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative group perspective-1000" style={{ perspective: '1000px' }}>
                <div
                    className="flex flex-row gap-1 transform-style-3d"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(55deg) rotateZ(45deg)'
                    }}
                >
                    {weeks.map((week, wIndex) => (
                        <div key={wIndex} className="flex flex-col gap-1 transform-style-3d" style={{ transformStyle: 'preserve-3d' }}>
                            {week.days.map((day, dIndex) => {
                                if (!day) {
                                    // Placeholder for future dates (invisible or flat floor)
                                    return <div key={dIndex} className="w-3 h-3 bg-slate-100/50" />;
                                }

                                // Calculate height based on level
                                // Level 0: 0px (flat)
                                // Level 1-4: scaled height
                                const isActive = day.level > 0;
                                // Calculate height based on level
                                // Level 0: 0px (flat)
                                // Level 1-4: scaled height
                                const height = isActive ? Math.max(6, day.level * 8) : 0;

                                // Colors
                                const topColor = isActive ? 'bg-cyan-400' : 'bg-slate-200';
                                const frontColor = isActive ? 'bg-cyan-600' : 'bg-slate-300';
                                const sideColor = isActive ? 'bg-cyan-700' : 'bg-slate-400';

                                return (
                                    <div
                                        key={day.date}
                                        className="relative w-3 h-3 transform-style-3d group/cell cursor-pointer"
                                        style={{ transformStyle: 'preserve-3d' }}
                                        title={`${day.date}: ${day.count} contributions`}
                                    >
                                        {/* Tooltip - billboarded to face screen */}
                                        <div
                                            className="absolute -top-6 left-1/2 -translate-x-1/2 min-w-max px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover/cell:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl"
                                            style={{
                                                transform: `translateZ(${height + 30}px) rotateZ(-45deg) rotateX(-55deg)`
                                            }}
                                        >
                                            <div className="font-mono font-bold">{day.count} contributions</div>
                                            <div className="text-slate-400 text-[9px]">{day.date}</div>
                                        </div>

                                        {/* Floor Tie (Base) */}
                                        {/* If active, we build a pillar. If not, just flat tile. */}

                                        {/* Top Face (The Cap) */}
                                        <div
                                            className={`absolute inset-0 ${topColor} transition-transform duration-1000 ease-out`}
                                            style={{ transform: `translateZ(${height}px)` }}
                                        />

                                        {isActive && (
                                            <>
                                                {/* Front Face (South) */}
                                                <div
                                                    className={`absolute bottom-0 left-0 w-full ${frontColor} origin-bottom transition-[height] duration-1000 ease-out`}
                                                    style={{
                                                        height: `${height}px`,
                                                        transform: 'rotateX(-90deg)'
                                                    }}
                                                />

                                                {/* Side Face (East) */}
                                                <div
                                                    className={`absolute top-0 right-0 h-full ${sideColor} origin-right transition-[width] duration-1000 ease-out`}
                                                    style={{
                                                        width: `${height}px`,
                                                        transform: 'rotateY(90deg)'
                                                    }}
                                                />
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center gap-1 z-10 mt-8 translate-y-28">
                <div className="text-xs font-mono text-slate-400">
                    Git Contributions (Last 28 Weeks)
                </div>
                <div className="text-sm font-mono font-bold text-cyan-600">
                    {totalContributions.toLocaleString()} Total Contributions
                </div>
            </div>
        </div>
    );
};

export default ContributionGraph;
