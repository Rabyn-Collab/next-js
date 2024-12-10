"use client"

import { useFormik } from "formik"


const AddMovie = () => {

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {

    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <button>Submit</button>

      </form>



    </div>
  )
}
export default AddMovie