interface IBox {
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
}

interface IBoxProps extends IBox {
  remove: (id: string) => void;
}

interface INewBoxProps extends IBox {
  createBox: (id: string) => void;
}

export type { IBox, IBoxProps, INewBoxProps };