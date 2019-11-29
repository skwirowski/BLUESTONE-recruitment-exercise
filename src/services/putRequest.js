import firebaseDatabaseURL from 'static/firebase';
import dataModel from 'static/dataModel';

export default async function putData() {
  try {
    const response = await fetch(`${firebaseDatabaseURL}/products.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataModel),
    });

    return response.json();
  } catch (error) {
    console.log('HTTP PUT method error : ', error);
    return error;
  }
}
