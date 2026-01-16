import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchBlogs, fetchBlogById, createBlog, deleteBlog } from '@/api/blogs';
import type { CreateBlogDto } from '@/types/blog';

export const useBlogs = () => {
    return useQuery({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,
    });
};

export const useBlog = (id: string) => {
    return useQuery({
        queryKey: ['blog', id],
        queryFn: () => fetchBlogById(id),
        enabled: !!id,
    });
};


export const useCreateBlog = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newBlog: CreateBlogDto) => createBlog(newBlog),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        },
    });
};

export const useDeleteBlog = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteBlog(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        },
    });
};
