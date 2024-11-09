import StepFive from "./StepFive"

function StepFour({success}) {
return (
    <div>{success ? <StepFive /> : 
        <div className="flex flex-col mb-10">
        <h1 className="text-2xl font-bold text-marineBlue">Finishing up</h1>
        <p className="text-sm text-coolGray pt-2">Double-check everything looks OK before confirming.</p>
        <div className="bg-alabaster rounded-lg mt-10 p-5">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-marineBlue">Arcade (Monthly)</h2>
                    <p className="text-coolGray underline cursor-pointer">Change</p>
                </div>
                <p className="font-bold text-marineBlue">$9/mo</p>
            </div>
            <div className="border-lightGray border my-5"></div>
            <div className="mb-3 flex justify-between">
                <p className="text-coolGray">Online service</p>
                <p className="text-marineBlue">+$1/mo</p>
            </div>
            <div className="flex justify-between">
                <p className="text-coolGray">Larger storage</p>
                <p className="text-marineBlue">+$2/mo</p>
            </div>
        </div>
        <div className="p-5 flex justify-between">
            <p className="text-coolGray">Total (per month)</p>
            <p className="text-lg font-bold text-purplishBlue">+$12/mo</p>
        </div>
    </div>
    }</div>
)
}

export default StepFour