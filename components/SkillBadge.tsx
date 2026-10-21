type SkillBadgeProps = {
  name: string;
  svg: React.ReactNode;
  type: string;
};

const SkillBadge = ({name, svg, type}: SkillBadgeProps) => {
  return (
    <span className={`flex items-center ${type == "skill" ? "bg-zinc-100 px-2 py-0.5 gap-1.5 rounded-full" : "gap-1 pl-1.5 pr-2.5 rounded-md bg-blue-50 leading-normal"}`}>
      {svg}
      <span className="text-sm">{name}</span>
    </span>
  )
}

export default SkillBadge