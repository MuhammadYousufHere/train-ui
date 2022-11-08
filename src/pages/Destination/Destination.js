import React, { useState } from "react";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Destination.scss";
import Form from "../../components/Form/Form";
import UiInput from "../../components/Form/UiInput";
import Button from "../../components/Button/Button";

const Destination = () => {
  const [fields, setFields] = useState({
    _from: "",
    to: "",
    departure: "",
    _return: "",
    passengers: "",
  });
  const { _from, to, departure, _return, passengers } = fields;
  const onChangeHadler = (evt) => {};
  const onSubmitHadler = (evt) => {};
  return (
    <section className="destination-container">
      <div className="destination-body">
        <Form onSubmit={onSubmitHadler}>
          <div className="form-body">
            <UiInput
              onChange={onChangeHadler}
              id="from"
              name="from"
              value={_from}
              placeholder="From"
            />
            <div className="left-right">
              <FontAwesomeIcon icon={faRightLeft} />
            </div>
            <UiInput
              onChange={onChangeHadler}
              id="to"
              name="to"
              value={to}
              placeholder="to"
            />
            <div className="seperator"></div>
            <UiInput
              onChange={onChangeHadler}
              id="departure"
              name="departure"
              value={departure}
              placeholder="departure"
            />
            <div className="seperator"></div>

            <UiInput
              onChange={onChangeHadler}
              id="return"
              name="return"
              value={_return}
              placeholder="Return"
            />
            <div className="seperator"></div>

            <UiInput
              onChange={onChangeHadler}
              id="passengers"
              name="passengers"
              value={passengers}
              placeholder="Passengers"
            />
            <Button
              title="Find Your Train"
              borderRadius="0"
              width={"100%"}
              type="submit"
            />
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Destination;
