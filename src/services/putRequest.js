import firebaseDatabaseURL from 'static/firebase';
import dataModel from 'static/dataModel';

/** @param productIndex parameter is required otherwise paroduct list will be overwritten by single product */
/** @param bodyData type object data to PUT under producIndex */
export default async function putData(productIndex, bodyData) {
  const singleProduct =
    productIndex || productIndex === 0 ? `/${productIndex}` : '';

  try {
    const response = await fetch(
      `${firebaseDatabaseURL}/products${singleProduct}.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      }
    );

    return response.json();
  } catch (error) {
    console.log('HTTP PUT method error : ', error);
    return error;
  }
}
