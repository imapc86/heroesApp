import { ChangeEvent, useState } from "react";

interface SearchForm {
  searchText: string
}

export const useForm = (initialForm:SearchForm = {searchText: ''}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value 
    })

  }

  const onResetForm = () =>{

    setFormState(initialForm);

  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
}
