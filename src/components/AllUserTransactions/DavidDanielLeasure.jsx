import React from "react";
import style from "./style.module.scss";
import {
  DavidDanielLeasureTxData,
  DavidDanielLeasureWarningTxt,
} from "./tXdata";

export default function DavidDanielLeasure() {
  return (
    <div className={style.transaction_history}>
      <div className={style.in_transaction_history}>
        <div className={style.title}>Last Transaction</div>
        {DavidDanielLeasureTxData.length === 0 && (
          <div className={style.no_transaction_yet}>No transaction yet</div>
        )}
        {DavidDanielLeasureTxData.map((aTxData, i) => (
          <>
            <div
              className={`${style.t_box} ${
                i === 0 ? style.firstContainer : ""
              }`}
              key={i}
            >
              <div className={style.s_box}>
                <div className={`${style.top} ${style.top_t}`}>
                  {aTxData.txName}
                  {aTxData.warning && (
                    <i
                      className="fa-solid fa-triangle-exclamation"
                      style={{
                        color: "red",
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                    ></i>
                  )}
                </div>
                <div className={style.bottom}>{aTxData.whatUsed}</div>
              </div>
              <div className={`${style.s_box} ${style.s_box_r}`}>
                <div
                  className={style.top}
                  style={{ color: aTxData.credit ? "green" : "red" }}
                >
                  {aTxData.credit}
                  {aTxData.debit}
                </div>
                {/* <div className={style.top} style={{ color: aTxData.color }}>{aTxData.debit}</div> */}
                <div className={style.bottom}>{aTxData.date}</div>
              </div>
            </div>
          </>
        ))}
        {DavidDanielLeasureWarningTxt.map((textWarning, i) => (
          <div className={style.warning} key={i}>
            <p>Note:</p>
            <p>
              To make any withdrawal please pay up the inheritance tax of
              $15,580. <br />
              Contact your bank manager to do so.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
