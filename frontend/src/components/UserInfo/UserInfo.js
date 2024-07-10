import s from './UserInfo.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selector';
import { handleLogout } from 'redux/auth/auth-operations';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { getTheme } from 'redux/slimDaddy/selectors.slimDaddy';

const UserInfo = () => {
  const { name = '' } = useSelector(getUser);
  const dispatch = useDispatch();
  const selectedTheme = useSelector(getTheme);
  return (
    <div className={s.userinfo}>
      <ThemeSwitcher/>
      <div className={s.block}>
        <p className={s.text}>{name}</p>
        <button className={`${s.btn} ${s[selectedTheme]}`} onClick={() => dispatch(handleLogout())}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
