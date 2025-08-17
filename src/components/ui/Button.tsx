import { RxArrowTopRight } from "react-icons/rx";
const QuoteBtn = () => {
  return (
    <div className="bg-primary flex items-center gap-1 py-3 px-6 border border-primary font-kanit text-[1rem] font-normal">
      <button>Get A Quote</button>
      <RxArrowTopRight className="mt-1" />
    </div>
  );
};

export default QuoteBtn;
