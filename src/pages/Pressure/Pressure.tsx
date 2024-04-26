import { FC } from "react";
import PageLayout from "../PageLayout/PageLayout.tsx";

interface IPressure {
  title: string,
}

const Pressure: FC<IPressure> = ({ title }) => {

  return (
    <PageLayout title={title}>
      PRESSURE
    </PageLayout>
  );
};

export default Pressure;