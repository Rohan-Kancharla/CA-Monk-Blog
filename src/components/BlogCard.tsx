import type { Blog } from "@/types/blog";
import { cn } from "@/lib/utils";
import { TrendingUp, DollarSign, BookOpen, Briefcase, BarChart } from "lucide-react";

interface BlogCardProps {
    blog: Blog;
    isSelected?: boolean;
    onClick?: () => void;
}

const getCategoryIcon = (category: string) => {
    const cat = category.toUpperCase();
    if (cat.includes('FINANCE') || cat.includes('FINTECH')) return TrendingUp;
    if (cat.includes('TAX') || cat.includes('CAREER')) return Briefcase;
    if (cat.includes('AUDIT') || cat.includes('CA')) return BarChart;
    if (cat.includes('AI') || cat.includes('TECH')) return BookOpen;
    return DollarSign;
};

const getCategoryColor = (category: string) => {
    const cat = category.toUpperCase();
    if (cat.includes('FINANCE') || cat.includes('FINTECH')) return 'text-blue-600 bg-blue-50';
    if (cat.includes('TAX') || cat.includes('CAREER')) return 'text-green-600 bg-green-50';
    if (cat.includes('AUDIT') || cat.includes('CA')) return 'text-purple-600 bg-purple-50';
    if (cat.includes('AI') || cat.includes('TECH')) return 'text-orange-600 bg-orange-50';
    return 'text-gray-600 bg-gray-50';
};

export function BlogCard({ blog, isSelected, onClick }: BlogCardProps) {
    const Icon = getCategoryIcon(blog.category[0] || '');
    const colorClass = getCategoryColor(blog.category[0] || '');

    const timeAgo = (() => {
        const now = new Date();
        const postDate = new Date(blog.date);
        const diffMs = now.getTime() - postDate.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return '1 day ago';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
        return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
    })();

    return (
        <div
            className={cn(
                "group cursor-pointer transition-all hover:bg-blue-50/50 border-b last:border-b-0 p-4",
                isSelected && "bg-blue-50"
            )}
            onClick={onClick}
        >
            <div className="flex gap-3">
                {/* Icon */}
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", colorClass)}>
                    <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={cn("text-xs font-medium uppercase", colorClass.split(' ')[0])}>
                            {blog.category[0]}
                        </span>
                        <span className="text-xs text-gray-400">{timeAgo}</span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {blog.description}
                    </p>

                    <button className="text-xs text-blue-600 font-medium hover:underline">
                        Read Tips →
                    </button>
                </div>
            </div>
        </div>
    );
}

export function BlogCardSkeleton() {
    return (
        <div className="border-b p-4">
            <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse" />
                <div className="flex-1 space-y-2">
                    <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
            </div>
        </div>
    );
}

