import { Fragment, useContext, useState } from "react";
import { AccountContext } from "../../constants/contexts/AccountProvider";
import { Box,styled } from "@mui/material";
import InfoDrawer from "../../drawer/infoDrawer";
import HeaderMenu from "./HeaderMenu";

const Component = styled(Box)({
    height: "32.5px",
    background: "black",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "1%",
    margin: "0px",
    "& > button": {
        
    }
});

const Image = styled("img")({
    height: "40px",
    width: "40px",
    borderRadius: "50%"
});

function Header(){
    const [openDrawer,setOpenDrawer] = useState(false);
    const {account} = useContext(AccountContext);

    function toggleDrawer(){
        // console.log("asdfgh");
        setOpenDrawer(true);        
    }

    return (
        <Fragment>
            <Component>
                <Image src={account.picture} alt='dp' onClick={ () => toggleDrawer}/>
                <Box>
                    <HeaderMenu setOpenDrawer={setOpenDrawer}></HeaderMenu>
                </Box>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}></InfoDrawer>
        </Fragment>
    )
}

export default Header;