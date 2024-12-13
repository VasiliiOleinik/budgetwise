import Box from "@/components/Box";
import Input from "@/components/Input";
import PageTitle from "@/components/PageTitle";
import { budgetOptions } from "./constants";

const AddBudget = () => {
    return (
        <Box>
            <div className="flex flex-col w-full">
                <PageTitle>Add budget</PageTitle>
                <form>
                    <div className="flex flex-col w-full">
                        <Input type="text" placeholder="Title" />
                        <select className="rounded-[52px] border border-slate-300 bg-[#f7f9fc] h-[38px] shadow-none min-h-[52px] py-4 px-6 outline-none focus:border-blue-500">
                            {budgetOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>
        </Box>
    );
};

export default AddBudget;