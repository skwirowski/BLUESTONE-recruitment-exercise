import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import routes from 'static/routes';
import actions from 'redux/actions';
import putData from 'services/putRequest';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import Loader from 'components/Loader';

import 'routes/Form/styles/styles.css';

const Form = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentProductIndex = Number(id) - 1;
  const { details } = routes;
  const { fetchProduct } = actions;

  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productsList);

  const [formState, setFormState] = useState(productsList[currentProductIndex]);
  const [productsLoading, setLoader] = useState(true);

  useEffect(() => {
    if (productsList.length !== 0) {
      setFormState(productsList[currentProductIndex]);
      setLoader(false);
    }
  }, [productsList, currentProductIndex]);

  const handleInputChange = (event, key) => {
    setFormState({
      ...formState,
      [key]: event.target.value,
    });
  };

  const handleNestedInputChange = (event, outerKey, currentIndex, innerKey) => {
    setFormState({
      ...formState,
      [outerKey]: formState[outerKey].map((image, index) =>
        index === currentIndex
          ? { ...image, [innerKey]: event.target.value }
          : image
      ),
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const { name, number, description, images } = formState;
    const editedDataBody = {
      name,
      number,
      description,
      images,
    };

    async function updateProductsList(index, body) {
      await putData(index, body);
      await dispatch(fetchProduct(index));
      await history.push(`${details(id)}`);
    }
    updateProductsList(currentProductIndex, editedDataBody);
  };

  return (
    <div className="edit">
      {productsLoading ? (
        <Loader />
      ) : (
        <div className="edit-form">
          <h2 className="edit-form--heading">Edit product &#x2116; {id}</h2>
          <form onSubmit={handleFormSubmit} className="edit-form--form-wrapper">
            <Input
              id="name-input"
              label="Change product name:"
              placeholder="Product name"
              data={formState.name}
              onInputChange={e => handleInputChange(e, 'name')}
            />
            <TextArea
              id="description-textarea"
              label="Change product description:"
              placeholder="Product description"
              data={formState.description}
              onInputChange={e => handleInputChange(e, 'description')}
            />
            <div className="images-edit">
              {formState.images.map((image, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={`image-${id}-${index}`}
                  className="images-edit__wrapper"
                >
                  <Input
                    id={`image-url-${id}-${index}`}
                    label={`Change image ${index + 1} URL address:`}
                    placeholder={`Image ${index + 1} URL address`}
                    data={image.url}
                    onInputChange={e =>
                      handleNestedInputChange(e, 'images', index, 'url')
                    }
                  />
                  <Input
                    id={`image-name-${id}-${index}`}
                    label={`Change image ${index + 1} description:`}
                    placeholder={`Image ${index + 1} description`}
                    data={image.name}
                    onInputChange={e =>
                      handleNestedInputChange(e, 'images', index, 'name')
                    }
                  />
                </div>
              ))}
            </div>
            <Button customClassName="cancel-edit">
              <Link to={details(id)} className="cancel-edit--link link-icon">
                <span className="link-icon--cross" />
                Cancel
              </Link>
            </Button>
            <Button customClassName="confirm-edit">
              <input
                type="submit"
                value="submit"
                className="confirm-edit--input"
              />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
