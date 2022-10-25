import { FC } from "react";
import { TOTAL_STEPS } from "../../../ts/enums";
import style from "./newOrder.module.css";

const NewOrderHeader: FC<{ idStep: number; description: string }> = ({
  idStep,
  description,
}) => {
  const stepText = `Step ${idStep}/${TOTAL_STEPS} - ${description}`;

  return (
    <div className={style.newOrderHeader}>
      <div className={style.title}>Register new order</div>
      <div className={style.stepText}>{stepText}</div>
    </div>
  );
};

export default NewOrderHeader;
