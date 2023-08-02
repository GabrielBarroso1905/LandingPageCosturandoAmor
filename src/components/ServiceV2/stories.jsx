import { ServiceV2 } from '.';

export default {
  title: 'ServiceV2',
  component: ServiceV2,
  args: {
    background: false,
    sectionId:"seu-id-aqui"
  },
};

export const Template = (args) => {
  return (
    <div>
      <ServiceV2  background= {false} sectionId={"seu-id-aqui"} />
    </div>
  );
};
