import { ServiceV2 } from '.';

export default {
  title: 'ServiceV2',
  component: ServiceV2,
  args: {
    background: true,
    sectionId:"seu-id-aqui"
  },
};

export const Template = (args) => {
  return (
    <div>
      <ServiceV2  color={"#fa9348"} sectionId={"seu-id-aqui"} />
    </div>
  );
};
