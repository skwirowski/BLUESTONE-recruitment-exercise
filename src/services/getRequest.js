import firebaseDatabaseURL from 'static/firebase';

/** @param productIndex parameter is optional, if omitted function gets products list instead of single product */
/** @param productIndex should be type string */
export default async function getData(productIndex) {
  const singleProduct = productIndex ? `/${productIndex}` : '';

  try {
    const response = await fetch(
      `${firebaseDatabaseURL}/products${singleProduct}.json`
    );

    return response.json();
  } catch (error) {
    console.log('HTTP GET method error : ', error);
    return error;
  }
}
