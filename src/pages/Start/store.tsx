import { NewConnection } from '../../store/client';
import { Student, Teacher } from '../../store/types';

export const getMember = (id: number): Student | Teacher | null => {
  const student = NewConnection()
    .request<Student>({
      url: `/students/${id}`,
      transformResponse: (r: any) => r.data,
    })
    .then((response) => response.data);

  // TODO: create a generic NewConnection with basic methods.

  return null;
};
