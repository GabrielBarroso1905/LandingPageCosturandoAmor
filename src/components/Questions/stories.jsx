import { Questions } from '.';

export default {
  title: 'Questions',
  component: Questions,
  args: {
    background: false,
    sectionId:"seu-id-aqui"
  },
};

export const Template = (args) => {
  return (
    <div>
      <Questions  background= {false} sectionId={"seu-id-aqui"} />
    </div>
  );
};
