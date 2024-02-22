interface Props {
  title: string;
  subtitle: string;
}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};
