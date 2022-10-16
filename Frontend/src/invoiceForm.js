import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
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
    return (
        <Formik
            initialValues = {{
                hospitalName : '',
                serviceType : '',
                amount: '',
                timestamp: Date.now(),
            }}
            validationSchema = {
                Yup.object(
                    {
                        hospitalName: Yup.string().required('Required'),
                        serviceType: Yup.string().required('Required'),
                        amount: Yup.string().required('Required'),
                    }
                )
            }
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
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
                        type="text"
                        {...formik.getFieldProps('hospitalName')}
                      />
                      {formik.touched.hospitalName && formik.errors.hospitalName ? <div>{formik.errors.hospitalName}</div> : null}
                
                      <label htmlFor="serviceType">Service Type</label>
                      <input
                        id="serviceType"
                        type="text"
                        {...formik.getFieldProps('hospitalName')}
                      />
                      {formik.touched.serviceType && formik.errors.serviceType ? <div>{formik.errors.serviceType}</div> : null}
                
                      <label htmlFor="amount">Invoice Amount</label>
                      <input
                        id="amount"
                        type="text"
                        {...formik.getFieldProps('hospitalName')}
                      />
                      {formik.touched.amount && formik.errors.amount ? <div>{formik.errors.amount}</div> : null}
                
                      <label htmlFor="timestamp">Timestamp</label>
                      <input
                        id="timestamp"
                        name="timestamp"
                        type="text"
                        readOnly
                        value={formik.values.timestamp}
                      />
                
                      <div>
                        <button type="submit">Submit</button>
                      </div>
                    </form>
                    </html>
            )}
        </Formik>
    );
};

export default InvoiceForm;