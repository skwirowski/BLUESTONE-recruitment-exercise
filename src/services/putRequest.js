import firebaseDatabaseURL from 'static/firebase';
import dataModel from 'static/dataModel';

const newData = {
  name: 'Product 6 name',
  number: 'Product 6 number',
  description: 'Product 6 description',
  images: [
    {
      url: 'Product 6 image 1 url',
      name: 'Product 6 image 1 name',
    },
    {
      url: 'Product 6 image 2 url',
      name: 'Product 6 image 2 name',
    },
  ],
};

/** @param productIndex parameter is required otherwise paroduct list will be overwritten by single product */
/** @param productIndex should be type string */
export default async function putData(productIndex) {
  const singleProduct = productIndex ? `/${productIndex}` : '';

  try {
    const response = await fetch(
      `${firebaseDatabaseURL}/products${singleProduct}.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataModel),
      }
    );

    return response.json();
  } catch (error) {
    console.log('HTTP PUT method error : ', error);
    return error;
  }
}
