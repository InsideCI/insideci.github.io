import { NewGenericClient } from 'store/client';
import { Student } from 'store/types/models';

export const STUDENTS_RESOURCE = 'students';

export const StartAPI = NewGenericClient<Student>(STUDENTS_RESOURCE);
