import { motion } from "framer-motion";

const BlogHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Blog CodeMaster
      </h1>
      <p className="mt-4 text-gray-300">
        Découvrez nos derniers articles sur la programmation et le développement web
      </p>
    </motion.div>
  );
};

export default BlogHeader;