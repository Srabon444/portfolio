import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-3 border-b-3 border-primary dark:border-primary"></div>
    </div>
  );
};

export default Loading;