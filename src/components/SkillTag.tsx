import React from "react";

interface SkillTagProps {
  label: string;
}
const SkillTag = ({ label }: SkillTagProps) => {
  return (
    <span className="px-2 py-1 rounded-full border shadow-lg text-sm italic">
      {label}
    </span>
  );
};

export default SkillTag;
