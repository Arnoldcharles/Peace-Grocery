"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = { id: string; title: string; desc: string; image: string };

export default function CourseCard({ id, title, desc, image }: Props) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{desc}</p>
        <Link href={`/courses/${id}`}>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Lesson
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
