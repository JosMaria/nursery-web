import { StatusType } from '@nursery/types/commons'

export const traduceStatus = (status: StatusType) => {
  if (status === 'AVAILABLE') {
    return 'disponible';
  
  } else if (status === 'PRESERVED') {
    return 'preservado';
  
  } else if (status === 'NON_EXISTENT') {
    return 'inexistente'
  }
};
