import React from 'react';

const Event: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.clientX);
  };
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag
      </div>
    </div>
  );
};

export default Event;
