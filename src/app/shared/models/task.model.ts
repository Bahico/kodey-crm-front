export interface Task {
  id: string;
  title: string;
  projectName: string;
  dueDate?: string;
  lastModified: string;
  completed: boolean;
  starred: boolean;
}
