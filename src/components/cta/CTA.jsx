import React from "react";
import "./CTA.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  Name: yup.string().required("name is required"),
  CompanyName: yup.string().required("company name is required"),
  Quantity: yup.number().integer().positive().required("quantity is required"),
  ContactNumber: yup
    .number()
    .integer()
    .positive()
    .required("phone number is required"),
  Email: yup.string().email().required("enter Email"),
  city: yup.string().required("city is required"),
});

const CTA = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(errors);
  return (
    <>
      <div
        className="gpt3__header section__padding products__main-div our__products"
        id="CTA"
      >
        <div className="gpt3__header-content gradient__text title">
          Reach Us.
        </div>
        <div className="inputs">
          <form
            action="https://formspree.io/f/moqzanpz"
            method="POST"
            className="form"
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <input {...register("Name")} type="text" placeholder="Name" />
            <p className="form__paragraph">{errors.Name?.message}</p>
            <input
              {...register("CompanyName")}
              type="text"
              placeholder="Company Name"
            />
            <p className="form__paragraph">{errors.CompanyName?.message}</p>
            <input
              {...register("Quantity")}
              type="text"
              placeholder="Quantity (Min 50 plus)"
            />
            <p className="form__paragraph">{errors.Quantity?.message}</p>
            <input
              {...register("ContactNumber")}
              type="text"
              placeholder="Contact Number"
            />
            <p className="form__paragraph">{errors.ContactNumber?.message}</p>
            <input {...register("Email")} type="text" placeholder="Email id" />
            <p className="form__paragraph">{errors.Email?.message}</p>
            <input {...register("city")} type="text" placeholder="City" />
            <p className="form__paragraph">{errors.city?.message}</p>
            <button type="submit" id="submit" disabled={isDirty && !isValid}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CTA;
