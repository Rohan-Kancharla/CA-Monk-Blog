import type { Blog } from "@/types/blog";
import { BlogCard, BlogCardSkeleton } from "./BlogCard";


interface BlogListProps {
    blogs?: Blog[];
    isLoading: boolean;
    selectedId?: string;
    onSelect: (id: string) => void;
}

export function BlogList({ blogs, isLoading, selectedId, onSelect }: BlogListProps) {
    if (isLoading) {
        return (
            <div className="flex flex-col">
                {Array.from({ length: 5 }).map((_, i) => (
                    <BlogCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    if (!blogs?.length) {
        return (
            <div className="p-8 text-center text-gray-500">
                No blogs found.
            </div>
        );
    }

    return (
        <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                    isSelected={selectedId === blog.id}
                    onClick={() => onSelect(blog.id)}
                />
            ))}
        </div>
    );
}

