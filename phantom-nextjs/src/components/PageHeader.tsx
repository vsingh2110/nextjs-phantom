import React from 'react';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <section className="bg-[#f5f5f5] h-auto">
      <div className="p-[3.5rem] text-[2rem] text-center font-medium text-gray-800">
        {title}
      </div>
    </section>
  );
};

export default PageHeader;
