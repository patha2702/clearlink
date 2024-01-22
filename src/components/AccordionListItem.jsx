import { useState } from "react";
import accordionRevealIcon from "/assets/accordion-reveal-icon.svg";
import accordionCollapseIcon from "/assets/accordion-collapse-icon.svg";

const AccordionListItem = (props) => {
  const title = props.title;
  const body = props.body;
  const [showItem, setShowItem] = useState(false);

  const handleRevealItem = () => {
    setShowItem((prevStatus) => !prevStatus);
  };

  return (
    <div className={`p-2 flex flex-col gap-2 border-EAECF0 ${showItem ? "bg-F9FAFB rounded-lg border-2" : "border-b-[1px]"}`}>
      <div
        className="flex justify-between items-center py-1 cursor-pointer"
        onClick={handleRevealItem}
      >
        <div className="text-101828 text-lg font-semibold">{title}</div>
        <img
          src={showItem ? accordionCollapseIcon : accordionRevealIcon}
          alt={`accordion ${showItem ? "collapse" : "reveal"} icon`}
        />
      </div>
      <div>
        {showItem && <p className="w-[95%] text-475467 text-[16px]">{body}</p>}
      </div>
    </div>
  );
};

export default AccordionListItem;
