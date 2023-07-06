import { ReactNode, FC } from 'react';

interface IComposeContext {
  components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode | undefined;
}

export default function ComposeContext(
  props: IComposeContext,
) {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp: any) => {
        // accumulator, Component. Nesting all the components that we are getting inside the compose context as a prop, as children to each other
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}
