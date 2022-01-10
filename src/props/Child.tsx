interface ChildProps {
  color: string;
  onClick: () => void;
}

const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default Child;
