type TProps = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const ExperienceCard = ({ role, company, duration, description }: TProps) => {
  return (
    <div className="w-full cursor-pointer max-w-3xl rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{role}</h3>
          <p className="text-sm font-medium text-indigo-600">{company}</p>
        </div>

        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {duration}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
