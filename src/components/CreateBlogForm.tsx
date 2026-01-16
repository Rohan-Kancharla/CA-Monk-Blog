import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateBlog } from "@/hooks/useBlogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const blogSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    category: z.string().min(1, "At least one category is required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    coverImage: z.string().url("Must be a valid URL"),
    content: z.string().min(20, "Content must be at least 20 characters"),
});

type BlogFormValues = z.infer<typeof blogSchema>;

export function CreateBlogForm() {
    const { mutate, isPending } = useCreateBlog();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BlogFormValues>({
        resolver: zodResolver(blogSchema),
    });

    const onSubmit = (data: BlogFormValues) => {
        // Convert comma/space separated categories to array
        const categories = data.category
            .split(/[, ]+/)
            .map((c) => c.trim().toUpperCase())
            .filter(Boolean);

        mutate(
            {
                ...data,
                category: categories,
            },
            {
                onSuccess: () => {
                    reset();
                    navigate("/");
                },
            }
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Blog</CardTitle>
                    <CardDescription>
                        Share your thoughts with the world. Fill out the form below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Blog Title</Label>
                            <Input id="title" placeholder="Enter blog title" {...register("title")} />
                            {errors.title && (
                                <p className="text-sm text-destructive">{errors.title.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Categories (comma separated)</Label>
                            <Input
                                id="category"
                                placeholder="TECH, LIFESTYLE, FINANCE"
                                {...register("category")}
                            />
                            {errors.category && (
                                <p className="text-sm text-destructive">{errors.category.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="coverImage">Cover Image URL</Label>
                            <Input
                                id="coverImage"
                                placeholder="https://example.com/image.jpg"
                                {...register("coverImage")}
                            />
                            {errors.coverImage && (
                                <p className="text-sm text-destructive">{errors.coverImage.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Short Description</Label>
                            <Textarea
                                id="description"
                                placeholder="A brief summary..."
                                className="h-20"
                                {...register("description")}
                            />
                            {errors.description && (
                                <p className="text-sm text-destructive">{errors.description.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Full Content</Label>
                            <Textarea
                                id="content"
                                placeholder="Write your blog post here..."
                                className="h-64 font-mono text-sm leading-relaxed"
                                {...register("content")}
                            />
                            {errors.content && (
                                <p className="text-sm text-destructive">{errors.content.message}</p>
                            )}
                        </div>

                        <div className="flex justify-end gap-4 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => navigate("/")}
                                disabled={isPending}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isPending}>
                                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {isPending ? "Publishing..." : "Publish Blog"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
