import React, {FC, forwardRef } from 'react';
import { Helmet } from 'react-helmet';


const Page:FC<{title?:string,className:any}> = forwardRef(({
  children,
  title = '',
  className,
  ...rest
}, ref:any) => {
  return (
    <div
      ref={ref}
      className={className}
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});



export default Page;
