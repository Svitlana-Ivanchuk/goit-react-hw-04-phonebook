import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      {title && <Title>{title}</Title>}
      {children}
    </div>
  );
};
