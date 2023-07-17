import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  // console.log(values);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email: </label>
        <input
          type="email"
          value={values.email}
          id="email"
          placeholder="Mail Adresinizi Giriniz"
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Yaş: </label>
        <input
          type="number"
          value={values.age}
          id="age"
          placeholder="Yaşınızı  Giriniz..."
          onChange={handleChange}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>

      <div className="inputDiv">
        <label>Şifre: </label>
        <input
          type="password"
          value={values.password}
          id="password"
          placeholder="Şifrenizi  Giriniz"
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="inputDiv">
        <label>Şifre Tekrar: </label>
        <input
          type="password"
          value={values.confirmPassword}
          id="confirmPassword"
          placeholder="Şifrenizi Tekrar Giriniz"
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link className="formLink" to="/portal">
        Portal Form'a Git
      </Link>
    </form>
  );
}

export default GeneralForm;
