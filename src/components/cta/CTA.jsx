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
  return (
    <>
      <div
        className="gpt3__header section__padding products__main-div our__products"
        id="CTA"
      >
        <div
          id="reach-us"
          className="gpt3__header-content gradient__text title"
        >
          Reach Us.
        </div>
        <div className="inputs">
          <form
            action="https://formspree.io/f/moqzanpz"
            method="POST"
            className="form"
            onSubmit={handleSubmit((data) => {
              const body = `${data.name} from ${data.companyName} with contact number ${data.contactNumber} and email ${data.email} from city ${data.city} would like to contact you for ${data.quantity} items`;
              window.location.href = `mailto:customademanufacturer@gmail.com?subject=Product Enquiry&body=${body}`;
            })}
          >
            <input {...register("name")} type="text" placeholder="Name" />
            <p className="form__paragraph">{errors.Name?.message}</p>
            <input
              {...register("companyName")}
              type="text"
              placeholder="Company Name"
            />
            <p className="form__paragraph">{errors.CompanyName?.message}</p>
            <input
              {...register("quantity")}
              type="text"
              placeholder="Quantity (Min 50 plus)"
            />
            <p className="form__paragraph">{errors.Quantity?.message}</p>
            <input
              {...register("contactNumber")}
              type="text"
              placeholder="Contact Number"
            />
            <p className="form__paragraph">{errors.ContactNumber?.message}</p>
            <input {...register("email")} type="text" placeholder="Email id" />
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
