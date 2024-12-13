import Cookies from "js-cookie";
import Button from "../Button";
import Container from "../Container";
import {jwtDecode} from "jwt-decode";

export const Header = () => {
    const token = Cookies.get("auth_token"); 
    const user = token ? jwtDecode(token) : null

    return (
        <div className="bg-white shadow-[0_2px_12px_0_rgba(11,22,44,0.05)]">
            <Container>
                <div className="flex justify-between  items-center py-4">
                    <Button className="py-2">
                        Add Goal
                    </Button>
                    <p className="text-sm">Welcome, <span className="font-semibold">{user?.name}</span></p>
                </div>
            </Container>
        </div>
    );
};
