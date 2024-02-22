import React from 'react';
import InputLinks from './components/InputLinks';
import LinkList from './components/ListLinks';
import IframeRenderer from './components/IframeRenderer';
import { useSelector } from 'react-redux';

const App = () => {
  // Lấy link từ Redux store
  const link = useSelector((state) => state.links[0]); // Giả sử link được lưu trữ trong mảng links và lấy link đầu tiên
  
  return (
    <div>
      <InputLinks />
      <LinkList />
      {/* Truyền link vào IframeRenderer */}
      <IframeRenderer link={link} />
    </div>
  );
};

export default App;
