import bloomtechWorkExperience from "./bloomtech";
import onovativeWorkExperience from "./onovative";
import semanticBitsWorkExperience from "./semantic-bits";
import stripeWorkExperience from "./stripe";
import { v4 as uuid } from "uuid";

export interface WorkExperienceData {
  company: string;
  roles: RoleData[];
}

export interface WorkExperienceDataWithKeys
  extends Omit<WorkExperienceData, "roles"> {
  roles: RoleDataWithKey[];
}

interface RoleData {
  title: string;
  dates: string;
  achievements: string[];
}

export interface RoleDataWithKey extends Omit<RoleData, "achievements"> {
  key: string;
  achievements: AchievementWithKey[];
}

interface AchievementWithKey {
  value: string;
  key: string;
}

// Add keys for iterating over arrays in React
function addGeneratedKeys(exp: WorkExperienceData): WorkExperienceDataWithKeys {
  const rolesWithKeys: RoleDataWithKey[] = exp.roles.map((role) => {
    const achievementsWithKeys: AchievementWithKey[] = role.achievements.map(
      (ach) => {
        return { key: uuid(), value: ach };
      }
    );

    return {
      ...role,
      key: uuid(),
      achievements: achievementsWithKeys,
    } as RoleDataWithKey;
  });

  return { ...exp, roles: rolesWithKeys };
}

// In order from newest to oldest
const allWorkExperience: WorkExperienceDataWithKeys[] = [
  addGeneratedKeys(stripeWorkExperience),
  addGeneratedKeys(bloomtechWorkExperience),
  addGeneratedKeys(semanticBitsWorkExperience),
  addGeneratedKeys(onovativeWorkExperience),
];

export default allWorkExperience;
