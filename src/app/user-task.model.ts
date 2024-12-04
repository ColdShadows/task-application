export interface UserTask {
    id?: string;
    userid?: string;
    name: string;
    description?: string;
    parentId?: string;
    status: string;
    percentageComplete: number;
    dueDate?: string | null;
    completionDate?: string | null;
    isDeleted?: boolean;
}