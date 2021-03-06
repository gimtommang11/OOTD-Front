import * as React from 'react';

import * as S from './style';

interface Props {
  isChanged: boolean;
  onChangeProfileName: (name: string) => void;
  onEditProfile: (img: File, name: string) => void;
  profileName: string;
  profileImg: File;
}

const ProfileInfo: React.FC<Props> = ({
  isChanged,
  onChangeProfileName,
  onEditProfile,
  profileName,
  profileImg,
}) => {
  const handleChangeProfileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeProfileName(e.target.value);
  };

  return (
    <>
      <S.InputContainer>
        <S.InputLabel>이름</S.InputLabel>
        <S.NameInput
          type="text"
          value={profileName}
          onChange={handleChangeProfileName}
        />
      </S.InputContainer>
      <S.AccountSetting>회원탈퇴</S.AccountSetting>
      <S.AccountSetting>로그아웃</S.AccountSetting>

      <S.ProfileEditBtn
        isChanged={isChanged}
        onClick={() => onEditProfile(profileImg, profileName)}
      >
        수정
      </S.ProfileEditBtn>
    </>
  );
};

export default ProfileInfo;
