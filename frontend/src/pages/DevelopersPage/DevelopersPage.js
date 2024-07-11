import s from './DevelopersPage.module.css';
import { Container } from 'components';
import { getPersonaInfo } from '../../services/api/developers';
import { useEffect, useState } from 'react';

const DevelopersPage = () => {
  const [dataDev, setDataDev] = useState(null);

  useEffect(() => {
    getPersonaInfo().then(data => {
      setDataDev(data);
    });
  }, []);

  const elements = dataDev?.map(({ avatarURL, name,email, position, _id, defaultURL}) => (
    <li className={s.item} key={_id}>
      <img className={s.img} src={`${avatarURL} ? ${avatarURL} : ${defaultURL}`} alt={name} />
      <p className={s.text}>{name}</p>
      <p className={s.text}>{position}</p>
      <p className={s.text}>{email}</p>

    </li>
  ));

  return (
    dataDev && (
      <Container>
        <article className={s.page}>
          <h1 className={s.title}>Team OutFit</h1>
          <ul className={s.list}>{elements}</ul>
        </article>
      </Container>
    )
  );
};

export default DevelopersPage;
