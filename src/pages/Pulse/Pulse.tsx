import { FC } from "react";
import PageLayout from "../PageLayout/PageLayout.tsx";

interface IPulse {
  title: string,
}

const Pulse: FC<IPulse> = ({ title }) => {
  return (
    <PageLayout title={title}>
      Pulse
    </PageLayout>
  );
};

export default Pulse;