import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full">
            <motion.div
                className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default Loading;
