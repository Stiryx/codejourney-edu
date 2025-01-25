import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/blog/BlogCard";
import PythonArticle from "@/components/blog/PythonArticle";

const Blog = () => {
  const { content: pythonContent, citations: pythonCitations } = PythonArticle();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F]">
      <Navigation />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-24 pb-12"
      >
        <BlogHeader />
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <BlogCard 
            title="Python : Le Langage de Programmation Roi en 2025"
            content={pythonContent}
            citations={pythonCitations}
          />
          {/* Autres articles de blog peuvent être ajoutés ici */}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;