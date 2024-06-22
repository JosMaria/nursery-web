import { ClassificationType, StatusType } from '@nursery/types/commons'

export const traduceStatus = (status: StatusType) => {
  if (status === 'AVAILABLE') {
    return 'disponible';
  
  } else if (status === 'PRESERVED') {
    return 'preservado';
  
  } else if (status === 'NON_EXISTENT') {
    return 'inexistente'
  }

  throw new Error(`Status ${status} does not found.`);
};

export const traduceClassification = (classification: ClassificationType) => {
  if (classification === 'ALIMENTARY') {
    return 'alimenticia';
  
  } else if (classification === 'CACTUS') {
    return 'cactus';
  
  } else if (classification === 'EXOTIC') {
    return 'exotica';
  
  } else if (classification === 'FOREST') {
    return 'forestal';
  
  } else if (classification === 'FRUITFUL') {
    return 'frutal'

  } else if (classification === 'GRASS') {
    return 'crasa'
  
  } else if (classification === 'INDUSTRIAL') {
    return 'industrial'

  } else if (classification === 'MEDICINAL') {
    return 'medicinal'

  } else if (classification === 'ORNAMENTAL') {
    return 'ornamental';
  
  } else if (classification === 'SUCCULENT') {
    return 'suculenta'
  };

  throw new Error(`Classification ${classification} does not found.`);
  
};
