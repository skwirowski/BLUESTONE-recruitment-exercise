import firebaseDatabaseURL from 'static/firebase';

export default async function getData() {
  try {
    const response = await fetch(`${firebaseDatabaseURL}/products.json`);

    return response.json();
  } catch (error) {
    console.log('HTTP GET method error : ', error);
    return error;
  }
}
