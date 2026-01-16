import { useParams, useNavigate } from "react-router-dom";
import { useBlogs } from "@/hooks/useBlogs";
import { BlogList } from "@/components/BlogList";
import { BlogDetail } from "@/components/BlogDetail";

export function Home() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data: blogs, isLoading } = useBlogs();

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        CA Monk Blog
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Stay updated with the latest trends in finance, accounting, and career growth
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Panel - Blog List */}
                    <div className={`lg:col-span-5 ${id ? 'hidden lg:block' : ''}`}>
                        <div className="bg-white rounded-lg border shadow-sm overflow-hidden sticky top-20">
                            <div className="p-4 border-b bg-gray-50">
                                <h2 className="font-semibold text-lg text-gray-900">Latest Articles</h2>
                            </div>
                            <BlogList
                                blogs={blogs}
                                isLoading={isLoading}
                                selectedId={id}
                                onSelect={(blogId) => navigate(`/blogs/${blogId}`)}
                            />
                        </div>
                    </div>

                    {/* Right Panel - Blog Detail */}
                    <div className={`lg:col-span-7 ${!id ? 'hidden lg:block' : ''}`}>
                        <BlogDetail id={id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
