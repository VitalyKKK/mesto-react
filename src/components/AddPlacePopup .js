import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [nameCard, setNameCard] = React.useState('')
  const [linkCard, setLinkCard] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: nameCard,
      link: linkCard,
    });
  }

  function handleChangeLinkCard(e) {
    setLinkCard(e.target.value);
  }

  function handleChangeNameCard(e) {
    setNameCard(e.target.value);
  }

  return (
    <PopupWithForm
      name={'place'}
      title={'Новое место'}
      btnText={'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onAddPlace={onAddPlace}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_place"
        type="text"
        id="place"
        name="name"
        placeholder="Название"
        required
        autoComplete="off"
        minLength={2}
        maxLength={30}
        onChange={handleChangeNameCard}
      />
      <span className="popup__error" id="place-error" />
      <input
        className="popup__input popup__input_place"
        type="url"
        id="url"
        name="link"
        placeholder="Сылка на картинка"
        required
        autoComplete="off"
        onChange={handleChangeLinkCard}
      />
      <span className="popup__error" id="url-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;