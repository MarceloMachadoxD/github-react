import './styles.css';

const ProfileDetails = () => {
  return (
    <div className="profile-details-container">
      <div className="profile-search-box">
        <h1 className="text-title">Encontre um Perfil do Github</h1>
        <input
          type="text"
          className="form-control form-control-lg search-input"
          placeholder="Usuário Github"
        />

        <button className="btn btn-primary btn-lg find-button">
          Encontrar
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
