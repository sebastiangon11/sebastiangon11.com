import { useFoldableContext } from './FoldableMediaCard';

export const FixedContent = ({ children, className }) => {
  const foldableContext = useFoldableContext();
  const { isUnfolded } = foldableContext;

  return (
    <div className={`${className} relative transition-[margin] duration-500 ${isUnfolded ? 'mt-[150px]' : 'mt-0'}`}>
      {typeof children === 'function' ? children(foldableContext) : children}
    </div>
  );
};
