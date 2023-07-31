import { Depoimentos } from '.';

export default {
  title: 'Depoimentos',
  component: Depoimentos,
  args: {
    background: false,
    sectionId:"seu-id-aqui"
  },
};

export const Template = (args) => {
  return (
    <div>
      <Depoimentos  background= {false} sectionId={"seu-id-aqui"} />
    </div>
  );
};
