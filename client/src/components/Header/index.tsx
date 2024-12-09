import Button from "../Button";
import Container from "../Container";

export const Header = () => {
    return (
        <div className="bg-white shadow-[0_2px_12px_0_rgba(11,22,44,0.05)]">
            <Container>
                <div className="flex justify-between  items-center py-4">
                    <Button className="py-2">
                        Add Goal
                    </Button>
                    <p className="text-sm">Welcome, <span className="font-semibold">Vasyl Oliinyk</span></p>
                </div>
            </Container>
        </div>
    );
};
