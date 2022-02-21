interface IProps {
  correct:[] | string[];
  error: [] | string[];
}

const handleStat = ({ correct, error }: IProps) => {
  console.log(correct);
  console.log(error);
};

export default handleStat;
