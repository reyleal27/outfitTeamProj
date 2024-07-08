import { changeTheme } from "redux/themeswitcher/themeSwitcher";
import { useDispatch, useSelector } from "react-redux"; 
import { getTheme } from "redux/themeswitcher/themeSelector";
import s from './Themeswitcher.module.css';

const ThemeSwitcher = () => {
    const dispath = useDispatch();

    const selectedTheme = useSelector(getTheme);

    const SwitchTheme = () => {
        dispath(changeTheme());
    };


    return (
        <div className={s.wrapper}>
            <span className={`${s.toggleLabel} ${selectedTheme === 'light' ? s.lightText : s.darkText}`}>SlimMom</span>
            <label className={s.toggle}>
                <input className={s.toggleCheckbox} checked={selectedTheme === 'dark'} onChange={SwitchTheme} type="checkbox" />
                <div className={s.toggleSwitch}></div>
                <span className={`${s.toggleLabel} ${selectedTheme === 'light' ? s.darkText : s.lightText}`}>SlimDaddy</span>
            </label>
        </div>
    );
}

export default ThemeSwitcher;