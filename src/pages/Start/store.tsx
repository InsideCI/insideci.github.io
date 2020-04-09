import { NewGenericAPI } from 'store/client';
import { Student } from 'store/types/models';

export const STUDENTS_RESOURCE = 'students';

export const StartAPI = NewGenericAPI<Student>(STUDENTS_RESOURCE);
