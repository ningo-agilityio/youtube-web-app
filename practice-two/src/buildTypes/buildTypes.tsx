export interface Issue {
  id?: number | null;
  title: string;
  body: string;
  locked?: boolean;
  assignees?: [string];
  milestone?: number;
  labels?: [string];
}
