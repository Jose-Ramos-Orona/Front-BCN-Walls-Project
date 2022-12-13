import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import NavigationBarStyled from "./NavigationBarStyled";
import { Cancel } from "iconoir-react";
import { useAppSelector } from "../../redux/hooks";

const NavigationBar = (): JSX.Element => {
  const { isLogged } = useAppSelector(({ user }) => user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavigationBarStyled className="container">
      <Button text="MENU" buttonType="small" action={toggleMenu} />
      {isMenuOpen && (
        <div className="popover">
          <div className="content">
            <button
              className="close"
              aria-label="to close menu"
              onClick={toggleMenu}
            >
              <Cancel />
            </button>
            <div className="navigation">
              <ul className="navigation__list">
                <div className="navigation__list-item">
                  <li>
                    <NavLink onClick={toggleMenu} to="/">
                      Home
                    </NavLink>
                  </li>
                </div>
                {!isLogged && (
                  <>
                    <div className="navigation__list-item">
                      <li>
                        <NavLink onClick={toggleMenu} to="/register">
                          Register
                        </NavLink>
                      </li>
                    </div>
                    <div className="navigation__list-item">
                      <li>
                        <NavLink onClick={toggleMenu} to="/login">
                          Login
                        </NavLink>
                      </li>
                    </div>
                  </>
                )}
                {isLogged && (
                  <div className="navigation__list-item">
                    <li>
                      <NavLink onClick={toggleMenu} to="/create">
                        Create
                      </NavLink>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </NavigationBarStyled>
  );
};

export default NavigationBar;
