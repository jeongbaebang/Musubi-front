/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useReducer } from "react";

function reducer(state: any, action: { id: string; value: string }) {
  return {
    ...state,
    [action.id]: action.value,
  };
}

export default function useInputs<Form extends Record<string, string | boolean>>(
  initalForm: Form
): [Form, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [state, dispatch] = useReducer(reducer, initalForm);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.id) return;
    dispatch(e.target);
  }, []);

  return [state as Form, onChange];
}
