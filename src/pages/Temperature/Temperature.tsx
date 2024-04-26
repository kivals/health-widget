import { FC } from "react";
import PageLayout from "../PageLayout/PageLayout.tsx";

interface ITemperature {
  title: string,
}

const Temperature: FC<ITemperature> = ({ title }) => {
  return (
    <PageLayout title={title}>
      Temperature
    </PageLayout>
  );
};

export default Temperature;