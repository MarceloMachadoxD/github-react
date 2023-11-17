import './styles.css';

type Profile = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

const ProfileCard = (profile: Profile) => {
  return (
    <div className="profile-card-container">
      <div className="profile-card-avatar">
        <img src={profile.avatar_url} alt="Avatar" />
      </div>

      <div className="profile-card-info">
        <h1 className="profile-card-information">Informações</h1>
        <div className="profile-data">
          <p className="profile-card-followers">
            Perfil:{' '}
            <span className="profile-card-url-value">
              <a target='_new' href={profile.html_url}>{profile.html_url} </a>
            </span>
          </p>
          <p className="profile-card-following">
            Seguidores:{' '}
            <span className="profile-card-value">{profile.followers}</span>
          </p>
          <p className="profile-card-location">
            Localidade:{' '}
            <span className="profile-card-value">{profile.location}</span>
          </p>
          <p className="profile-card-name">
            Nome: <span className="profile-card-value">{profile.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
