type PayloadCreateFamilyType = {
  name: string;
};

type AnswerFamilyType = {
	id: string;
	name: string;
};

// type to the modals
type ModalCreateType = {
  type: 'create';
};

type ModalUpdateDeleteType = {
  type: 'update' | 'delete';
  familySelected: { id: string; name: string };
}

type ModalType = ModalCreateType | ModalUpdateDeleteType;
