import React, { useState } from "react";
import "../../css/Contact.css";

function PaybyCard({
  info,
  setInfo,
  pay,
  cardHolderError,
  cardNumberError,
  cardTypeError,
  expiryError,
  cvvError,
}) {
  return (
    <div className="my-form" onSubmit={pay}>
      <div className="submit-content xl:tw-w-[800px] lg:tw-w-[600px] tw-w-full tw-flex-col">
        <div className="submit-info">
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="CardHolder Name*"
            onChange={(e) => setInfo({ ...info, cardHolder: e.target.value })}
          />
          <div className="required">{cardHolderError}</div>

          <input
            style={{ width: "100%" }}
            type="number"
            placeholder="Card Number*"
            id="second-n"
            onChange={(e) => setInfo({ ...info, cardNumber: e.target.value })}
          />
          <div className="required">{cardNumberError}</div>

          <select
            style={{ width: "100%" }}
            name="cardType"
            id="cardType"
            onChange={(e) => setInfo({ ...info, cardType: e.target.value })}
          >
            <option value="" disabled selected>
              Card Type*
            </option>
            <option value="CreditCards">Credit Cards</option>
            <option value="DebitCards">Debit Cards</option>
            <option value="MillenniaCards">Millennia Cards</option>
            <option value="PrepaidCards">Prepaid Cards</option>
            <option value="ForexCards">Forex Cards</option>
            <option value="CommercialCredit Cards">
              Commercial Credit Cards
            </option>
          </select>
          <div className="required">{cardTypeError}</div>
          <div className="tw-flex tw-w-full tw-gap-2">
            <div className="tw-flex tw-flex-col tw-flex-1">
              <input
                style={{ width: "100%", height: "55px" }}
                type="text"
                id="third-n"
                placeholder="MM/YYYY"
                onFocus={(e) => (e.target.type = "month")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) =>
                  setInfo({ ...info, expiryCard: e.target.value })
                }
              />
              <div className="required">{expiryError}</div>
            </div>
            <div className="tw-flex tw-flex-col tw-flex-1">
              <input
                style={{ width: "100%" }}
                type="number"
                placeholder="CVV*"
                id="f4-n"
                onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
                onChange={(e) => setInfo({ ...info, CVV: e.target.value })}
              />
              <div className="required">{cvvError}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaybyCard;
