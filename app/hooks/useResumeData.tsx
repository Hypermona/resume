import { UserProfile } from "../components/Header";
import { RESUME_DATA } from "../data/resume.config";

function useResumeData() {
  const headerData: UserProfile = {
    about: RESUME_DATA.about,
    avatarUrl: RESUME_DATA.avatarUrl,
    contact: RESUME_DATA.contact,
    location: RESUME_DATA.location,
    locationLink: RESUME_DATA.locationLink,
    name: RESUME_DATA.name,
    personalWebsiteUrl: RESUME_DATA.personalWebsiteUrl,
    summary: RESUME_DATA.summary,
  };

  return { headerData };
}

export default useResumeData;
