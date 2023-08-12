import { SectionBackground2 } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground2',
  component: SectionBackground2,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          doloribus debitis minima nam beatae alias eius, mollitia asperiores
          animi dolorem esse, aperiam nesciunt praesentium. Labore vel optio
          quaerat aspernatur expedita!
        </p>
      </div>
    ),
    fundo : "assets/images/fundo.png",
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground2 {...args} />
    </div>
  );
};
