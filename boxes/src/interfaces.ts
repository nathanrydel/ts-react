interface IBox {
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
}

interface IBoxProps extends IBox {
  remove: (id: string) => void;
}

interface INewBoxProps {
  createBox: (box: IBox) => void;
}

interface IFormData {
  width: string;
  height: string;
  backgroundColor: string;
}

export type { IBox, IBoxProps, INewBoxProps, IFormData };