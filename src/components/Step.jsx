const steps = [
  "Connect Device",
  "Respirator Info",
  "Assign Test Subject",
  "Select Exercise",
  "Begin Fit Tests",
  "Fit Test Result",
];

export default function Step({ currentStep = 3 }) {
  return (

    <div className="flex flex-wrap items-center p-4 gap-4 sm:gap-6 md:gap-[30px] bg-white rounded-2xl mx-2 lg:mr-10 mr-4 relative step-after">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 sm:space-x-3 md:space-x-[15px]" >
          <div
            className={`flex items-center justify-center rounded-full font-bold
              text-xs sm:text-sm md:text-base
              w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px]
              ${index + 1 <= currentStep ? "bg-[#30AD43] text-white" : "border-2 border-[#C3C3C3] text-[#C3C3C3]"}
            `}>
            {index + 1}
          </div>
          <span
            className={`font-semibold text-xs sm:text-sm md:text-base
              ${index + 1 <= currentStep ? "text-black" : "text-[#C3C3C3]"}`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}
