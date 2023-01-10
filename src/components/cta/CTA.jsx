import React from "react";
import "./CTA.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("name is required"),
  companyName: yup.string().required("company name is required"),
  quantity: yup.number().integer().positive().required("quantity is required"),
  contactNumber: yup
    .number()
    .integer()
    .positive()
    .required("phone number is required"),
  email: yup.string().email().required("enter Email"),
  city: yup.string().required("city is required"),
});

const CTA = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const body = `${data.name} from ${data.companyName} with contact number ${data.contactNumber} and email ${data.email} from city ${data.city} would like to contact you for ${data.quantity} items`;
    window.location.href = `mailto:customademanufacturer@gmail.com?subject=Product Enquiry&body=${body}`;
  };

  return (
    <>
      <div
        className="header section__padding products__main-div our__products"
        id="CTA"
      >
        <div className="header-content gradient__text title">Reach Us.</div>
        <div className="inputs">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} type="text" placeholder="Name" />
            <p className="form__paragraph">{errors.name?.message}</p>
            <input
              {...register("companyName")}
              type="text"
              placeholder="Company Name"
            />
            <p className="form__paragraph">{errors.companyName?.message}</p>
            <input
              {...register("quantity")}
              type="text"
              placeholder="Quantity (Min 50 plus)"
            />
            <p className="form__paragraph">{errors.quantity?.message}</p>
            <input
              {...register("contactNumber")}
              type="text"
              placeholder="Contact Number"
            />
            <p className="form__paragraph">{errors.contactNumber?.message}</p>
            <input {...register("email")} type="text" placeholder="Email id" />
            <p className="form__paragraph">{errors.email?.message}</p>
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
