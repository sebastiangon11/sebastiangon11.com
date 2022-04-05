import { useFoldableContext } from './FoldableMediaCard';

export const FoldableContent = ({ children, className }) => {
  const foldableContext = useFoldableContext();
  const { isFolded } = foldableContext;

  const style = isFolded
    ? { transitionDuration: '300ms', maxHeight: '0', overflow: 'hidden' }
    : {
        transitionDuration: '1000ms',
        maxHeight: 'min-content',
      };

  return (
    <div style={style} className={`${className} relative transition-[max-height] ease-out`}>
      {typeof children === 'function' ? children(foldableContext) : children}
    </div>
  );
};
