import MenuToggleButton from "./Menu";
import ThemeToggle from "./ThemeToggle";

export default function Header({ isMenuOpen, setIsMenuOpen, theme, setTheme }) {


  return (

    <header id="navbar-wrapper">
      <div className="navbar-side">
        <div className="nav-logo-wrapper" tabIndex="0" role="button" aria-label="Go to home page">
          <div className="logo-shapes" aria-hidden="true">
            <svg className="nav-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.9843 11.5497C17.6237 11.5497 14.9327 11.5497 13.6913 10.3086C12.4498 9.06751 12.4498 6.37659 12.4498 1.01563C12.4498 0.896356 12.4025 0.781971 12.3181 0.697634C12.2338 0.613298 12.1194 0.565918 12.0001 0.565918C11.8809 0.565918 11.7665 0.613298 11.6821 0.697634C11.5978 0.781971 11.5504 0.896356 11.5504 1.01563C11.5504 6.37663 11.5504 9.06751 10.309 10.3086C9.06751 11.5497 6.37659 11.5497 1.01599 11.5497C0.896626 11.5497 0.782147 11.5971 0.697742 11.6815C0.613336 11.7659 0.565918 11.8804 0.565918 11.9998C0.565918 12.1191 0.613336 12.2336 0.697742 12.318C0.782147 12.4024 0.896626 12.4498 1.01599 12.4498C6.37659 12.4498 9.06751 12.4498 10.309 13.6909C11.5504 14.9324 11.5504 17.6233 11.5504 22.9839C11.5504 23.1032 11.5978 23.2175 11.6821 23.3019C11.7665 23.3862 11.8809 23.4336 12.0001 23.4336C12.1194 23.4336 12.2338 23.3862 12.3181 23.3019C12.4025 23.2175 12.4498 23.1032 12.4498 22.9839C12.4498 17.6233 12.4498 14.9324 13.6913 13.6909C14.9327 12.4498 17.6237 12.4498 22.9843 12.4498C23.1036 12.4498 23.2181 12.4024 23.3025 12.318C23.3869 12.2336 23.4343 12.1191 23.4343 11.9998C23.4343 11.8804 23.3869 11.7659 23.3025 11.6815C23.2181 11.5971 23.1036 11.5497 22.9843 11.5497Z"></path>
            </svg>
          </div>
        </div>
        <span className="text-large nav-details">Lador</span>
      </div>
      <div className="navbar-side">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <MenuToggleButton isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </header>
  );
}
    