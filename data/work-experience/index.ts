import bloomtechWorkExperience from "./bloomtech";

export interface WorkExperienceData {
  company: string;
  roles: RoleData[];
}

export interface RoleData {
  key: string;
  title: string;
  dates: string;
  achievements: string[];
}

export default [bloomtechWorkExperience];
