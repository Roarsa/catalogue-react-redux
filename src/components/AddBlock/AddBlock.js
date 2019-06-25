import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddBlock.scss';

const AddBlock = ({ add }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div className={styles.root}>
      <form
        className={styles.newItem}
        onSubmit={(event) => {
          add(name, author, description, photo);
          setName('');
          setAuthor('');
          setDescription('');
          setPhoto('');
          event.preventDefault();
        }}
      >
        <label className={styles.field}>
          <input
            required
            className={styles.text}
            name="name"
            value={name}
            placeholder="Название"
            autoComplete="off"
            onChange={() => setName(event.target.value)}
          />
          <span className={styles.labelWrap}>
            <span>Название</span>
          </span>
        </label>
        <label className={styles.field}>
          <input
            required
            className={styles.text}
            name="author"
            placeholder="Автор"
            value={author}
            autoComplete="off"
            onChange={() => setAuthor(event.target.value)}
          />
          <span className={styles.labelWrap}>
            <span>Автор</span>
          </span>
        </label>
        <label className={styles.field}>
          <textarea
            required
            className={styles.text}
            name="description"
            placeholder="Описание"
            value={description}
            autoComplete="off"
            onChange={() => setDescription(event.target.value)}
          />
          <span className={styles.labelWrap}>
            <span>Описание</span>
          </span>
        </label>
        <label className={styles.field}>
          <input
            required
            className={styles.text}
            name="photo"
            placeholder="Фото"
            value={photo}
            autoComplete="off"
            onChange={() => setPhoto(event.target.value)}
          />
          <span className={styles.labelWrap}>
            <span>Фото (ссылка)</span>
          </span>
        </label>
        <button className={styles.add} type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

AddBlock.propTypes = {
  add: PropTypes.func.isRequired,
};

export default AddBlock;
