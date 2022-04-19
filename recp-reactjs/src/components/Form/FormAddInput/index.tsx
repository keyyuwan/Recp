import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { IoMdRemoveCircle } from "react-icons/io"
import {
  RegisterOptions,
  useFieldArray,
  Control,
} from "react-hook-form"
import { Input } from "../Input"
import { Header, InputContainer, ErrorText } from "./styles"

interface FormAddInput {
  name: string
  label: string
  buttonTitle: string
  isTextarea?: boolean
  textAreaRows?: number
  register: (name: string, options?: RegisterOptions) => void
  control: Control
  errorText: string
}

export function FormAddInput({
  name,
  label,
  buttonTitle,
  isTextarea = false,
  textAreaRows,
  register,
  control,
  errorText,
}: FormAddInput) {
  const { remove } = useFieldArray({ name, control })

  const [inputsCount, setInputsCount] = useState(1)

  function handleAddInput() {
    setInputsCount((prevState) => prevState + 1)
  }

  function handleRemoveInput(index: number) {
    remove(index) // removes an input at a certain position

    setInputsCount((prevState) => prevState - 1)
  }

  return (
    <>
      <Header>
        <label>{label}</label>
        <button type="button" onClick={handleAddInput}>
          <FaPlus />
          {buttonTitle}
        </button>
      </Header>

      {[...Array(inputsCount)].map((_, index) => (
        <div key={index}>
          <InputContainer>
            <Input
              name={name}
              label={`${index + 1}.`}
              isTextarea={isTextarea}
              isIngredientInput
              textAreaRows={textAreaRows}
              {...register(`${name}.${index}`)}
            />

            {index + 1 > 1 && (
              <div
                className="remove"
                onClick={() => handleRemoveInput(index)}
              >
                <IoMdRemoveCircle size={20} />
              </div>
            )}
          </InputContainer>

          {!!errorText && <ErrorText>{errorText}</ErrorText>}
        </div>
      ))}
    </>
  )
}
