import React from 'react';
export declare type TestType = 'type1' | 'type2';
interface TestProps {
  type?: TestType;
}

declare class Test extends React.Component<TestProps, any> {
}
// ...
export default Test;