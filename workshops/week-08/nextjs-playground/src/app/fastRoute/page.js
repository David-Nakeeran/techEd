import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";

export default function FastRoute() {
  return (
    <>
      <h1>This is the faste route</h1>
      <p>Some content is fast</p>
      <p>Some content is sloooooow</p>
      <Suspense fallback={"Coming soon ... ... .. ..."}>
        <SlowComponent />
      </Suspense>
    </>
  );
}
