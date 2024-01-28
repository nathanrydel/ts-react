interface ITodo {
  id: string;
  title: string;
  description: string;
  priority: number;
}

interface ITodoProp {
  todo: ITodo;
}

interface IEditableTodoProp extends ITodoProp {
  remove: (id: string) => void;
  update: (todo: ITodo) => void;
}

interface IFormData {
  title: string;
  description: string;
  priority: number;
}

interface ITodoFormProp {
  initialFormData: IFormData;
  handleSave: (formData: IFormData) => void;
}


export type { ITodo, ITodoProp, IEditableTodoProp, IFormData, ITodoFormProp };