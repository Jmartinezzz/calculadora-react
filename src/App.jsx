/*eslint no-eval: 0*/
import React, { useState } from 'react';
import words from 'lodash.words';
import Result from './components/Result';

import MathOperations from './components/MathOperations';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import './App.css';

const App = () => {    
   const [stack, setStack] = useState("");
   const items = words(stack, /[^+^-^*^/]+/g);

    return (
      <main className="react-calculator">
         <Result value={items[items.length-1]} />         
         <Numbers onClickNumber={ number => setStack(stack + number)}/>
         <Functions
            onContentClear={() => setStack("")}
            onDelete={ () => {
               if (stack.length > 0) {
                  const newStak = stack.substring(0, stack.length -1);
                  setStack(newStak)
               }
              
            }} 
         />
        <MathOperations 
          onClickOperation={operation => {
            setStack(`${stack}${operation}`)
          }} 
          onClickEqual={equal => setStack(eval(stack).toString())}
        />
    </main>
    );
}

export default App;