export interface Problem {
    id: string;
    title: string;
    description: string[];
    difficulty: string;
    category: string;
    order: number;
    videoId?: string;
}

// we have to store test cases separately with problemId