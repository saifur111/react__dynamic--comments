import { useEffect, useState } from "react";
import SingleComment from "../../component/SingleComment/SingleComment";
import "./Comments.css";
import { localStorageData } from "../../utils/localStorageData";

export default function Comments() {
  const [inputs, setInputs] = useState(localStorageData());

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputsValues = {};
    const form__elements = [...e.target.elements];
    form__elements.forEach((element) => {
      if (!(element instanceof HTMLButtonElement)) {
        inputsValues[element.name] = element.value;
        element.value = "";
      }
    });
    setInputs([...inputs, inputsValues]);
  };

  //data set in local storage
  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  return (
    <div className="comments">
      <form className="comments__form" onSubmit={handleSubmit}>
        <div className="form__heading">
          <h1>Post a Comment</h1>
        </div>
        <div className="form__item">
          <label htmlFor="username">Name</label>
          <input type="text" required name="username" />
        </div>
        <div className="form__item">
          <label htmlFor="email">Email</label>
          <input type="email" required name="email" />
        </div>
        <div className="form__item">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            cols="30"
            rows="5"
            required
            name="comment"
          ></textarea>
        </div>
        <div className="form__btn">
          <button>Submit</button>
        </div>
      </form>
      <div className="comments__show">
        {inputs.map((input, index) => (
          <SingleComment key={index} input={input} />
        ))}
      </div>
    </div>
  );
}
