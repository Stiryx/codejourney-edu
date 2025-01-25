import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  content: React.ReactNode;
  citations?: string[];
}

const BlogCard = ({ title, content, citations }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card className="p-6 bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {title}
        </h2>
        <div className="prose prose-invert max-w-none">
          {content}
        </div>
        {citations && citations.length > 0 && (
          <div className="mt-4 text-sm text-gray-400">
            <h3 className="font-semibold mb-2">Citations:</h3>
            <ul className="list-none space-y-1">
              {citations.map((citation, index) => (
                <li key={index}>
                  <a href={citation} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    [{index + 1}] {citation}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default BlogCard;