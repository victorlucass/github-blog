import { Outlet } from "react-router-dom";
import { HeaderContainer } from "./styled";
export function DefaultLayout() {
  return (
    <main>
      <HeaderContainer>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          asperiores ab soluta eius voluptate cumque iure, excepturi consequatur
          vel a quas odio magnam dicta, at ea tempora itaque dolorum obcaecati.
        </p>
      </HeaderContainer>
      <Outlet />
    </main>
  );
}
