import React from "react";
import { useFormik } from "formik";
import "./styles.css";

const validate = values => {
  const errors = {};
  if (!values.hospitalName) {
    errors.hospitalName = 'Required';
  }

  if (!values.serviceType) {
    errors.serviceType = 'Required';
  }

  if (!values.amount) {
    errors.amount = 'Required';
  }

  return errors;
};

const InvoiceForm = () => {
  const formik = useFormik({
    initialValues: {
      hospitalName : '',
      serviceType : '',
      amount: '',
      timestamp: Date.now(),
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 4));
    },
  });
  return (
    <html>
    <h1>
        Welcome to Aequalis.
    </h1>
    <h3>
        Please fill out information regarding your invoice.
    </h3>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="hospitalName">Hospital Name</label>
      <input
        id="hospitalName"
        name="hospitalName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.hospitalName}
      />
      {formik.errors.hospitalName ? <div>{formik.errors.hospitalName}</div> : null}

      <label htmlFor="serviceType">Service Type</label>
      <input
        id="serviceType"
        name="serviceType"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.serviceType}
      />
      {formik.errors.serviceType ? <div>{formik.errors.serviceType}</div> : null}

      <label htmlFor="amount">Invoice Amount</label>
      <input
        id="amount"
        name="amount"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
      {formik.errors.amount ? <div>{formik.errors.amount}</div> : null}

      <label htmlFor="timestamp">Timestamp</label>
      <input
        id="timestamp"
        name="timestamp"
        type="text"
        readOnly
        value={formik.values.timestamp}
      />
      {formik.errors.timestamp ? <div>{formik.errors.timestamp}</div> : null}

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </html>
  );
};

export default InvoiceForm;