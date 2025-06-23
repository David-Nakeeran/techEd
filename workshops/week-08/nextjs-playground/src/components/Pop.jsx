import * as Popover from "@radix-ui/react-popover";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
export default function Pop() {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button>
            <DrawingPinFilledIcon />
          </button>
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content>
            <div>
              <h2>This is a very nice rollercoaster page</h2>
              <p>Come later for me</p>
            </div>
            <Popover.Close />
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <Button variant={"ghost"} className={"bg-[#4ade80]"}>
        Ghost button
      </Button>
    </>
  );
}
