import { useBlog, useDeleteBlog } from "@/hooks/useBlogs";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Trash2, Loader2, Share2, Clock, Calendar } from "lucide-react";

interface BlogDetailProps {
    id?: string;
}

export function BlogDetail({ id }: BlogDetailProps) {
    const navigate = useNavigate();
    const { data: blog, isLoading, isError, error } = useBlog(id || "");
    const { mutate: deleteBlog, isPending: isDeleting } = useDeleteBlog();

    const handleDelete = () => {
        if (!id) return;
        if (confirm("Are you sure you want to delete this blog?")) {
            deleteBlog(id, {
                onSuccess: () => {
                    navigate('/');
                }
            });
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: blog?.title,
                text: blog?.description,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (!id) {
        return (
            <div className="bg-white rounded-lg border shadow-sm h-[600px] flex items-center justify-center text-gray-500">
                Select a blog to view details
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="bg-white rounded-lg border shadow-sm p-8 space-y-6">
                <Skeleton className="h-64 w-full rounded-xl" />
                <div className="space-y-4">
                    <Skeleton className="h-10 w-3/4" />
                    <div className="flex gap-2">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-20" />
                    </div>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="bg-white rounded-lg border shadow-sm h-[600px] flex flex-col items-center justify-center text-red-600 p-8">
                <AlertCircle className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-semibold">Error loading blog</h3>
                <p>{(error as Error).message}</p>
            </div>
        );
    }

    if (!blog) return null;

    const readTime = Math.ceil(blog.content.split(' ').length / 200);

    return (
        <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="p-8 md:p-10 space-y-6">
                {/* Cover Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-gray-100 shadow-md">
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=No+Image';
                        }}
                    />
                </div>

                {/* Header */}
                <div className="space-y-4">
                    {/* Categories and Share */}
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex gap-2">
                            {blog.category.map(c => (
                                <Badge key={c} variant="secondary" className="text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100">
                                    {c}
                                </Badge>
                            ))}
                            <Badge variant="outline" className="text-xs">
                                5 MIN READ
                            </Badge>
                        </div>

                        <Button
                            variant="default"
                            size="sm"
                            onClick={handleShare}
                            className="bg-blue-600 hover:bg-blue-700 gap-2"
                        >
                            <Share2 className="h-3 w-3" />
                            Share Article
                        </Button>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                        {blog.title}
                    </h1>

                    {/* Metadata Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-y">
                        <div>
                            <div className="text-xs text-gray-500 uppercase mb-1">CATEGORY</div>
                            <div className="text-sm font-semibold text-gray-900">{blog.category.join(' & ')}</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase mb-1">READ TIME</div>
                            <div className="text-sm font-semibold text-gray-900">{readTime} Min</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase mb-1">DATE</div>
                            <div className="text-sm font-semibold text-gray-900">
                                {new Date(blog.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric'
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-gray max-w-none">
                    <div className="text-gray-700 leading-relaxed space-y-4">
                        {blog.content.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="text-base">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Delete Button */}
                <div className="pt-6 border-t">
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="gap-2"
                    >
                        {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                        Delete Post
                    </Button>
                </div>
            </div>
        </div>
    );
}
