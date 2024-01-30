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


export type { ITodo, ITodoProp, IEditableTodoProp };