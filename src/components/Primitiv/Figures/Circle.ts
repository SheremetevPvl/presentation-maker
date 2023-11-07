import './BaseFigure';

interface ICircle extends IBaseFigure {
    radius: number;
  }
  
  const Circle: React.VFC<ICircle> =  ({className, radius}) => ...;