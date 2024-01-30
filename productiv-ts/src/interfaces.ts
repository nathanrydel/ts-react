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
  update: (id: string) => void;
}


export type { ITodo, ITodoProp, IEditableTodoProp };