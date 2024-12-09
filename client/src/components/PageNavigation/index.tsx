import Container from "../Container";

export const PageNavigation = () => {
    return (
        <div className="bg-white shadow-[0_2px_12px_0_rgba(11,22,44,0.05)]">
            <Container>
                <div className="flex justify-end py-4">
                    <p className="text-sm">Welcome, <span className="font-semibold">Vasyl Oliinyk</span></p>
                </div>
            </Container>
        </div>
    );
};
