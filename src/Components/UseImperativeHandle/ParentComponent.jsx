import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const [value, setValue] = useState('Xin chào ');

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    setValue: (newValue) => setValue(newValue),
  }));
});

function ParentComponent() {
  const childRef = useRef();

  const handleGetValue = () => {
    if (childRef.current) {
      alert(childRef.current.getValue());
    }
  };

  const handleSetValue = () => {
    if (childRef.current) {
      childRef.current.setValue(' Hugo');
    };
  }
  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleGetValue}>Lấy giá trị</button>
      <button onClick={handleSetValue}>Đặt giá rị</button>
    </div>
  );
}

export default ParentComponent;
