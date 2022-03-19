import React from 'react';


type props = {
    children:React.ReactNode,
    className:string
}





const Template = ({children, className}:props) => {
  return (
    <section className={className}>
      <div className="container px-5">
          {children}
    </div>
    </section>
  );
};

export default Template;
