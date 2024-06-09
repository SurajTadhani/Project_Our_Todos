import { z } from 'zod';

export const ListFormSchema = z.object({
  title: z.string({required_error: "*required"}).min(3, 'Name must be at least 3 characters'),
  description: z.string().optional(),
});