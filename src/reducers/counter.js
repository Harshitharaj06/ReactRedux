const ADD = 'ADD'
const SUB = 'SUB'
const MUL = 'MUL'
const DIV = 'DIV'
// const DEC = 'DEC';

const initialValues = {
  input1:0,
  input2:0,
  res:0,
  flag:true
}

export default (state = initialValues, action) => {
  switch (action.type) {
    case "val":                                          
        if(action.value===true)
        {
            return{...state,flag:true}
        }
        else
        {
            return{...state,flag:false}

        }
    case "bn":
        if(state.flag===true)
        {
            return{...state,input1:state.input1*10+ action.value}
        }
        else
        return{...state,input2:state.input2*10+ action.value}
    
    case ADD : 
        return {...state, res:state.input1 + state.input2 };

    case SUB : 
      return {...state, res:state.input1 - state.input2 };

    case MUL : 
      return {...state, res:state.input1 * state.input2 };

    case DIV : 
      return {...state, res:state.input1 / state.input2 };

    default :
      return state;
  };
};

export const values=(item)=>
{
  return{
      type:"val",
      value:item
  }
}
export const Addition= () => {
  return {
    type:ADD
  }
};
export const Subtraction= () => {
    return {
      type:SUB
    }
  };
  export const Multiplication= () => {
    return {
      type:MUL
    }
  };
  export const Division= () => {
    return {
      type:DIV
    }
  };
  

export const bnval=(item)=>{
    return{
        type:"bn",
        value:item
    }
}


// export const decrement = () => {
//   return {            
//     type: DEC
//   }
// };
