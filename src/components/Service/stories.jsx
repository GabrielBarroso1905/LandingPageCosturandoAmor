import { Service } from '.';

export default {
  title: 'Service',
  component: Service,
  args: {
    title: 'Título customizado', // Defina os valores desejados para title e description
    title2: 'Título 2 customizado', // Defina os valores desejados para title e description
    description: 'Descrição customizada', // Defina os valores desejados para title e description
  
  },
};

export const Template = (args) => {
  return (
    <div>
      <Service {...args} background= {false} sectionId= {'seu-id-aqui'} />
    </div>
  );
};
