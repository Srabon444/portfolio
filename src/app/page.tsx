import Home from "@/components/Home";
import { Suspense } from "react";
import Loading from "@/components/shared/Loading";

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </>
  );
};

export default page;
