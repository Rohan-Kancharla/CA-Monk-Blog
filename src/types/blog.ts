export interface Blog {
    id: string; // JSON server usually treats IDs as strings or numbers, let's allow string to be safe with standard UUIDs if needed, though json-server uses whatever.
    title: string;
    category: string[];
    description: string;
    date: string;
    coverImage: string;
    content: string;
}

export type CreateBlogDto = Omit<Blog, 'id' | 'date'>;
