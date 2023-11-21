import { useState } from 'react';

import ProfileCard from 'components/ProfileCard';
import './styles.css';
import axios from 'axios';

type ProfileName = {
  userName: string;
};

type Profile = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

const ProfileDetails = () => {
  const [profileName, setProfileName] = useState<ProfileName>({
    userName: '',
  });
  const [profileData, setProfileData] = useState<Profile>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setProfileName((profileName) => ({ ...profileName, [name]: value }));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${profileName.userName}`
      );
      setProfileData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="profile-details-container">
      <div className="profile-search-box">
        <h1 className="text-title">Encontre um Perfil do Github</h1>
        <input
          type="text"
          className="form-control form-control-lg search-input"
          name="userName"
          value={profileName.userName}
          placeholder="Usuário Github"
          onChange={handleChange}
        />
        <button
          className="btn btn-primary btn-lg find-button"
          onClick={handleClick}
        >
          Encontrar
        </button>
      </div>
      <div className="profile-details-card">
        {profileData && (
          <ProfileCard
            profile={profileData}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
