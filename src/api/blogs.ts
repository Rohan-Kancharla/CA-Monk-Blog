import api from '@/lib/axios';
import type { Blog, CreateBlogDto } from '@/types/blog';

export const fetchBlogs = async (): Promise<Blog[]> => {
    const { data } = await api.get<Blog[]>('/blogs');
    // Sort by date descending by default
    return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const fetchBlogById = async (id: string): Promise<Blog> => {
    const { data } = await api.get<Blog>(`/blogs/${id}`);
    return data;
};


export const createBlog = async (blogData: CreateBlogDto): Promise<Blog> => {
    const newBlog = {
        ...blogData,
        date: new Date().toISOString(),
    };
    const { data } = await api.post<Blog>('/blogs', newBlog);
    return data;
};

export const deleteBlog = async (id: string): Promise<void> => {
    await api.delete(`/blogs/${id}`);
};
