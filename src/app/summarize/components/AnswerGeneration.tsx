import React, { useState } from 'react';
import LeftPanel from './answerGeneration/LeftPanelAnswer';
import RightPanel from './answerGeneration/RightPanel';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const AnswerGeneration = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="w-full h-full flex flex-row">
      <div className={`w-[20%] ${collapsed ? 'hidden' : ''} border-1 border-gray-300 rounded-xl`}>
        <LeftPanel />
      </div>
      <div className={`${collapsed ? 'w-[100%]' : 'w-[80%]'} border-1 border-gray-300 rounded-xl`}>
        <RightPanel />
      </div>
      {/* Icon for toggling left panel */}
      <div
        className="fixed top-0 left-0 p-3 cursor-pointer"
        onClick={toggleCollapsed}
      >
        {collapsed ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
      </div>
    </div>
  );
};

export default AnswerGeneration;
