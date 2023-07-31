import { CurriculumType } from '../types/CurriculumType';

type CurriculumProps = {
  info: CurriculumType | null;
};

function Curriculum({ info }: CurriculumProps) {
  return (
    <>
      {info && (
        <>
          <h1>{info.name}</h1>
          <h2>{info.email}</h2>
          <h3>Escolaridade: {info.schooling}</h3>
          <p>{info.resume}</p>
        </>
      )}
    </>
  );
}

export default Curriculum;
