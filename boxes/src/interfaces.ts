interface IBox {
  width: number;
  height: number;
  backgroundColor: string;
}

interface IBoxProps extends IBox {
  id: string;
  remove: (id: string) => void;
}

interface INewBoxProps extends IBox {
  id: string;
  createBox: (id: string) => void;
}

export type { IBox, IBoxProps, INewBoxProps };